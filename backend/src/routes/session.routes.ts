import { Router } from 'express';

import { SessionController } from '../controllers/SessionController';

const sessionRoutes = Router();

sessionRoutes.post('/', new SessionController().create);

export { sessionRoutes };
