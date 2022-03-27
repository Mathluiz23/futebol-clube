import { Request, Response } from 'express';
import * as loginService from '../services/loginService';
import { ResponseStatus } from '../interfaces';

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  console.log(email);

  const userFound: ResponseStatus = await loginService.login(email, password);

  res.status(userFound.status).json(userFound.response);
}

export async function validate(req: Request, res: Response): Promise<void> {
  const { authorization } = req.headers;

  const tokenValid = await loginService.validate(authorization);

  res.status(tokenValid.status).send(tokenValid.response);
}
