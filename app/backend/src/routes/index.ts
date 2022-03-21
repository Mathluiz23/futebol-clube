import * as express from 'express';

import loginRoute from './loginRoute';

const route = express.Router();

route.use('/login', loginRoute);

export default route;
