import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(createUserInput: CreateUserInput) {
    let { password } = createUserInput;

    password = await bcrypt.hash(password, 10);
    
    let oldUser = await this.userModel.find({
      $or: [
        { username: createUserInput.username },
        { email: createUserInput.email },
      ],
    });

    if (oldUser.length) throw new Error("Username or email taken");

    const newUser = new this.userModel({ ...createUserInput, password });
    return newUser.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  findOneByUsername(username: string) {
    return this.userModel.findOne({
      username: username,
    }).exec();
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findByIdAndUpdate(id, updateUserInput);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
