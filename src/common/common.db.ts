import  Pool  from '../dbconfig/dbconnector'
import id from '../model/primarykey'
const dotenv = require('dotenv')
dotenv.config(); 
export default class Repository<T extends id> {

    constructor(){

    }

    async insert(data: T, tableName: String){
        
        const columns = Object.keys(data);
        const values = Object.values(data);
        const placeholders = values.map((_, index) => `$${index + 1}`);
        const query = `INSERT INTO ${process.env.DB_SCHEMA}.${tableName} (${columns.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING *`;

        console.log(query)
        try{
            const result = await Pool.query(query, values);
            return result.rows[0];
        }catch (error){
            throw error;
        }
    }

    async getAllRecords(tableName: String){
        
        const query = `SELECT * FROM ${process.env.DB_SCHEMA}.${tableName}`;

        try{
            const result = await Pool.query(query);
            return result.rows;
        }catch (error){
            throw error;
        }
    }

    async getRecordById(tableName: String, id: number){
        
        const query = `SELECT * FROM ${process.env.DB_SCHEMA}.${tableName} WHERE id =  $1`;
        const values = [id];

        try{
            const result = await Pool.query(query, values);
            return result.rows[0];
        }catch (error){
            throw error;
        }
    }

    async updateRecord(id: number, data: T, tableName: String){
        const columns = Object.keys(data);
        const values = Object.values(data);
        const placeholders = values.map((_, index) => `$${index + 2}`);
        const query = `UPDATE ${process.env.DB_SCHEMA}.${tableName} SET (${columns.join(', ')}) = (${placeholders.join(', ')}) WHERE id = $1 RETURNING *`;
        const queryValues = [id, ...values];

        try{
            const result = await Pool.query(query, queryValues);
            return result.rows[0];
        }catch (error){
            throw error;
        }
    }

    async deleteRecord(tableName: String, id: Number){
        
        const query = `DELETE FROM ${process.env.DB_SCHEMA}.${tableName} WHERE id =  $1`;
        const values = [id];

        try{
            const result = await Pool.query(query, values);
            return result.rowCount;
        }catch (error){
            throw error;
        }
    }

}