import User from '../database/models/User';
import { createToken } from './token';

async function loginResponse(userResponse: User): Promise<any> {
  const { id, username, role, email } = userResponse;
  const users = { id, username, role, email };
  const token = await createToken(users);
  return { users, token };
}

export default {
  loginResponse,
};
