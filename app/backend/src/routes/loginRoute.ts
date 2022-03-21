import * as express from 'express';
import { login, validate } from '../../controller/loginController';

const route = express.Router();

route.post('/', login);
route.get('/validate', validate);

export default route;
