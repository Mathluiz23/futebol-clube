import * as express from 'express';
import { getAll, getById, createMatch, matchFineshed } from '../controller/matchController';

const route = express.Router();

route.patch('/:id/finish', matchFineshed);
route.get('/:id', getById);
route.get('/', getAll);
route.post('/', createMatch);

export default route;
