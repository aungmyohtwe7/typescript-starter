import { Request, Response, NextFunction } from 'express';
import User from '../model/user';
import Repository from '../common/common.db';

const addUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        addresss: req.body.addresss
    };
    
    let repository = new Repository(); 
    let result = await repository.insert(user, 'user');
    return res.status(200).json({
        message: 'success'
    });
};

export default { addUser }