import { Request, Response } from 'express';
import { ResponseStatus } from '../interfaces';
import * as matchService from '../services/matchService';

export async function getAll(req: Request, res: Response): Promise<void> {
  const userFinded: ResponseStatus = await matchService.getAll(req.query);

  res.status(userFinded.status).json(userFinded.response);
}

export async function getById(req: Request, res: Response): Promise<void> {
  const userFinded: ResponseStatus = await matchService.getbyId(+req.params.id);
  res.status(userFinded.status).json(userFinded.response);
}

export async function createMatch(req: Request, res: Response): Promise<void> {
  const MatchCreated = await matchService.createMatch(req);

  res.status(MatchCreated.status).json(MatchCreated.response);
}
