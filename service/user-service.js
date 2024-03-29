import bcript from 'bcrypt';
import uuid from 'uuid';
import userModel from '../models/user-model.js';
import { mailService } from './mail-sevice.js';
import { tokenService } from './token-service.js';

class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с такой почтой ${email} уже существует`);
    }
    const hashedPassword = bcript.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await userModel.create(email, hashedPassword, activationLink);
    await mailService.sendActivationMail(email, activationLink);
    const tokens = tokenService.generateToken();
  }
}

export const userService = new UserService();
