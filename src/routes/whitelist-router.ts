import express from 'express';
import whitelistController from '../controllers/whitelistController';
const whiteListRouter = express.Router();

whiteListRouter.get('/', whitelistController.getWhiteList);
whiteListRouter.post('/add', whitelistController.addWhiteList);
whiteListRouter.get('/delete/:id', whitelistController.deleteWhiteList);

export = whiteListRouter