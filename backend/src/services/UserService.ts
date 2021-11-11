import { hash } from 'bcrypt';
import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

interface ICreateUser {
  username: string;
  password: string;
}

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create({ username, password }: ICreateUser): Promise<User> {
    const userExists = await this.usersRepository.findOne(username);

    if (userExists) {
      throw new Error('username already exists, try outher username');
    }

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      username,
      password: passwordHash,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UserService };
