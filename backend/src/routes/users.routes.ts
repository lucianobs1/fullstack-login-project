import { Router } from 'express';

import { UserController } from '../controllers/UserController';

const userRoutes = Router();

userRoutes.post('/', new UserController().create);

export { userRoutes };
