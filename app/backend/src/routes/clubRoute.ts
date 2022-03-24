import * as express from 'express';
import { getAllBy, getIdBy } from '../controller/clubControler';

const route = express.Router();

route.get('/', getAllBy);
route.get('/:id', getIdBy);

export default route;
