import { Request, Response } from 'express';
import * as clubService from '../services/clubService';
import { ResponseStatus } from '../interfaces';

export async function getAllBy(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await clubService.getAll();

  res.status(userFound.status).json(userFound.response);
}

export async function getIdBy(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await clubService.getById(parseInt(req.params.id, 10));

  res.status(userFound.status).json(userFound.response);
}
