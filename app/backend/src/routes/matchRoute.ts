import * as express from 'express';

const route = express.Router();
route.get('/:id');
route.get('/');

export default route;
