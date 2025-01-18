import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/user.model";
import { users } from "../mocks/user.mock";


@Resolver()
export class UserResolver {

  @Query(() => User)
  getUser() {
    return {
      id: 1,
      username: 'anson',
      displayName: 'anson the man'
    }
  }

  @Query(() => User, {nullable: true})
  getUserById(@Args('id', {type: () => Int}) id: number) {
    return users.find((user) => user.id == id);
  }

  @Query(() => [User])
  getUsers() {
   return users;
  }
}