import id from '../model/primarykey'
export default interface User extends id {

    firstName: string,
    lastName: string,
    dob: Date,
    addresss: string
}