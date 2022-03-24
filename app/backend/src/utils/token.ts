import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

import User from '../database/models/User';

const jwtSecret = 'super_senha';

export function validatePassword(password:string, hash:string) {
  const compare = !bcrypt.compareSync(password, hash);
  return compare;
  // console.log('aquiiiiiiiii', compare);
}

export async function createToken(payload:any) {
  const token = jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn: '15d' });
  return token;
}

export function validateToken(token:string): any {
  try {
    jwt.verify(token, jwtSecret);
    return jwt.decode(token, { complete: true });
  } catch (error) {
    return false;
  }
}

export async function createLoginResponse(userResponse: User): Promise<any> {
  const { id, email, username, role } = userResponse;
  const user = { id, email, username, role };
  const token = await createToken(user);
  return { user, token };
}
