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

export async function createMatch(req: Request, res: Response): Promise<void> {
  const match = await matchService.createMatch(req);

  res.status(match.status).json(match.response);
}

export async function matchFineshed(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await matchService.matchFineshed(+req.params.id);

  res.status(userFound.status).json(userFound.response);
}

export async function update(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await matchService.matchUpadate(req);

  res.status(userFound.status).json(userFound.response);
}
