import { Router } from 'express';

import { sessionRoutes } from './session.routes';
import { testRoutes } from './test.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/test', testRoutes);

export { routes };
