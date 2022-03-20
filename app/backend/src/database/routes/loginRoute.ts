import * as express from 'express';

const route = express.Router();

route.post('/');
route.get('/validate');

export default route;
