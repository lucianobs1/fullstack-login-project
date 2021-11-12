import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class SessionController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const session = await authenticateUserService.create({
        username,
        password,
      });

      delete session.user.password;

      return response.status(200).json(session);
    } catch (err) {
      return response.status(404).json({ Error: err.message });
    }
  }
}

export { SessionController };
