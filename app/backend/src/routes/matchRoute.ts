import * as express from 'express';
import { getAll, getById, createMatch } from '../controller/matchController';

const route = express.Router();

route.get('/:id', getById);
route.get('/', getAll);
route.post('/', createMatch);

export default route;
