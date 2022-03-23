import { loginResponse } from '../utils/loginResponse';
import User from '../database/models/User';
import { validateToken, validatePassword } from '../utils/token';

function userValidate(email: string, password: string): boolean {
  return !email || !password;
}

export async function login(email: string, password: string) {
  if (userValidate(email, password)) {
    return { response: { message: 'All fields must be filled' }, status: 401 };
  }

  const userFound: User | null = await User.findOne({ where: { email },
    raw: true,
    attributes: { exclude: ['password'] },
  });

  if (!userFound) {
    return { response: { message: 'Incorrect email or password' }, status: 401 };
  }

  const passwordValid = await validatePassword(password, userFound.password);

  if (passwordValid) {
    return {
      response: { message: 'Incorrect email or password' }, status: 401,
    };
  }

  const response = await loginResponse(userFound);
  return { response, status: 200 };
}

export async function validate(token: any) {
  const tokenValid = validateToken(token);

  if (!tokenValid) {
    return { response: { message: 'token invalid' }, status: 401 };
  }

  const { role } = tokenValid.payload;
  return { response: role, status: 200 };
}
