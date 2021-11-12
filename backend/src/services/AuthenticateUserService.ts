import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

interface IAuthenticateUser {
  username: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class AuthenticateUserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create({ username, password }: IAuthenticateUser): Promise<IResponse> {
    const user = await this.userRepository.findOne({
      username,
    });

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid username or password');
    }

    const token = jwt.sign({}, '7e4f29b77429202024e916268abc41ba', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserService };
