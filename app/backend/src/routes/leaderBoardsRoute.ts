import * as express from 'express';
import { getAll, getHome, getAway } from '../controller/leaderBordsController';

const route = express.Router();

route.get('/home', getHome);

route.get('/away', getAway);

route.get('/', getAll);

export default route;
