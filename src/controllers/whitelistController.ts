import { Request, Response, NextFunction } from 'express';
import WhiteListIp from '../model/whitelistip';
import Repository from '../common/common.db';

const getWhiteList = async (req: Request, res: Response, next: NextFunction) : Promise<Response>=> {
    
    let repository = new Repository(); 
    const result = await repository.getAllRecords('whitelist_ip_config');
    return res.status(200).json({
        whitelist: result
    })
} 

const addWhiteList = async (req: Request, res: Response, next: NextFunction) => {
    
    let whitelist: WhiteListIp = {
        id: req.body.id,
        created_date: req.body.created_date,
        whitelist_ip: req.body.whitelist_ip,
        api_key: req.body.api_key
    };

    let repository = new Repository(); 
    const result = await repository.insert(whitelist, 'whitelist_ip_config');
    return res.status(200).json({
        whitelist: result
    })
} 

const deleteWhiteList = async (req: Request, res: Response, next: NextFunction) => {
    
    console.log('hii', req)
    let id: Number = Number(req.params.id);

    let repository = new Repository(); 
    const result = await repository.deleteRecord('whitelist_ip_config', id);
    let status = "Not Success"
    if(Number(result) > 0){
        status = "Success"
    }
    return res.status(200).json({
        status: status
    })
} 

export default {getWhiteList, addWhiteList, deleteWhiteList}