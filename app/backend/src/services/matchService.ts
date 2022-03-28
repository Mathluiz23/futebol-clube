import { Request } from 'express';
import Match from '../database/models/Match';
import { ResponseStatus } from '../interfaces';
import { matchsAll, matchsFilter, checkTeamEquals,
  checkTeamExists } from '../middlewares/matchs';

export async function getAll(query: any) {
  if (query.inProgress !== undefined) {
    const inProgress = query.inProgress === 'true';
    const matchs = await matchsFilter(inProgress);

    return { response: matchs.response, status: matchs.status };
  }

  const matchs = await matchsAll();

  return { response: matchs.response, status: matchs.status };
}

export async function getbyId(id: number | string) {
  if (Number.isNaN(id)) {
    return { response: { message: 'id must be a number' }, status: 403 };
  }

  const matchFound: Match | null = await Match.findOne({ where: { id } });

  if (!matchFound) {
    return { response: { message: 'not found' }, status: 404 };
  }

  return { response: matchFound, status: 200 };
}

export async function createMatch(req: Request): Promise<ResponseStatus> {
  const matchBody = req.body;

  if (checkTeamEquals(matchBody)) {
    return { response: { message: 'It is not possible to create a match with two equal teams' },
      status: 401 };
  }
  const teamExists = await checkTeamExists(matchBody);

  if (teamExists) {
    return { response: { message: 'There is no team with such id!' }, status: 401 };
  }

  const match = await Match.create(matchBody);

  return { response: match, status: 201 };
}
