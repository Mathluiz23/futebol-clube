import { Request, Response } from 'express';
import { ResponseStatus } from '../interfaces';
import * as matchService from '../services/matchService';

export async function getAll(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await matchService.getAll(req.query);

  res.status(userFound.status).json(userFound.response);
}

export async function getById(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await matchService.getbyId(+req.params.id);

  res.status(userFound.status).json(userFound.response);
}
