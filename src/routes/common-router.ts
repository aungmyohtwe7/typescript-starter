import express from 'express';
import userRouter from './user';
import postRouter from './posts';
import whiteListRouter from './whitelist-router';
const router = express.Router();

router.use(postRouter);
router.use(userRouter);
router.use('/whitelist', whiteListRouter);
export = router