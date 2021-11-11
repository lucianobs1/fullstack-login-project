import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;

      const userService = new UserService();

      const user = await userService.create({
        username,
        password,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ Error: err.message });
    }
  }
}

export { UserController };
