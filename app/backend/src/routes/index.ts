import * as express from 'express';

import loginRoute from './loginRoute';
import clubRoute from './clubRoute';

const route = express.Router();

route.use('/login', loginRoute);

route.use('/clubs', clubRoute);

export default route;
