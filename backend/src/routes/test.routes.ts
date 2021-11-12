import { request, Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const testRoutes = Router();

// Route created to test middlewares and authenticate routes
testRoutes.use(ensureAuthenticated);
testRoutes.get('/', (request, response) => {
  return response.json({ success: 'success on test routes authenticate' });
});

export { testRoutes };
