import * as express from 'express';

import loginRoute from './loginRoute';
import clubRoute from './clubRoute';
import matchRoute from './matchRoute';

const route = express.Router();

route.use('/login', loginRoute);

route.use('/clubs', clubRoute);

route.use('/matchs', matchRoute);

export default route;
