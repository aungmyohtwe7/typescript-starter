import express from 'express';
import controller from '../controllers/posts';
const postRouter = express.Router();

postRouter.get('/posts', controller.getPosts);
postRouter.get('/posts/:id', controller.getPost);
postRouter.put('/posts/:id', controller.updatePost);
postRouter.delete('/posts/:id', controller.deletePost);
postRouter.post('/posts', controller.addPost);

export = postRouter;