import { Request, Response } from 'express';
import { ResponseStatus } from '../interfaces';
import * as leaderBoardService from '../services/leaderBoardService';

export async function getHome(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await leaderBoardService.getHomeOrAway(true);

  res.status(userFound.status).json(userFound.response);
}

export async function getAway(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await leaderBoardService.getHomeOrAway(false);

  res.status(userFound.status).json(userFound.response);
}

export async function getAll(req: Request, res: Response): Promise<void> {
  const userFound: ResponseStatus = await leaderBoardService.getAll();

  res.status(userFound.status).json(userFound.response);
}
