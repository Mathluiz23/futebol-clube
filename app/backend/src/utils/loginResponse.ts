import { createToken } from './token';
import User from '../database/models/User';

export interface Login {
  user: {
    id: number;
    username: string,
    role: string,
    email: string,
  }
  token:string
}

export async function loginResponse(userResponse: User): Promise<Login> {
  const { id, username, role, email } = userResponse;
  const user = { id, username, role, email };
  const token = await createToken(user);
  return { user, token };
}
