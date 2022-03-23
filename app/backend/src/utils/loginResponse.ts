import User from '../database/models/User';
import { createToken } from './token';

export async function loginResponse(userResponse: User): Promise<any> {
  const { id, username, role, email } = userResponse;
  const users = { id, username, role, email };
  const token = await createToken(users);
  return { users, token };
}

export async function test(string: User) {
  console.log(string);
}
