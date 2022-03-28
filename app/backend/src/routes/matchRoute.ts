import * as express from 'express';
import { getAll, getById } from '../controller/matchController';

const route = express.Router();

route.get('/:id', getById);
route.get('/', getAll);
route.post('/');

export default route;
