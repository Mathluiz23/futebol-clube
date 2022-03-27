import Match from '../database/models/Match';
import Club from '../database/models/Club';

async function matchsAll() {
  const allMatchs: Match[] = await Match.findAll({
    attributes: { exclude: ['home_team', 'away_team'] },
    include: [
      { model: Club, as: 'awayClub', attributes: [['club_name', 'clubName']] },
      { model: Club, as: 'homeClub', attributes: [['club_name', 'clubName']] },
    ] });

  return { response: allMatchs, status: 200 };
}

async function matchsFilter(inProgress:boolean) {
  const allMatchs: Match[] = await Match.findAll({
    where: { in_progress: inProgress },
    attributes: { exclude: ['home_team', 'away_team'] },
    include: [
      { model: Club, as: 'awayClub', attributes: [['club_name', 'clubName']] },
      { model: Club, as: 'homeClub', attributes: [['club_name', 'clubName']] },
    ] });

  return { response: allMatchs, status: 200 };
}

export async function getAll(query: any) {
  if (query.inProgress !== undefined) {
    const matchsInProgress = query.inProgress === 'true';

    const matchs = await matchsFilter(matchsInProgress);

    return { response: matchs.response, status: matchs.status };
  }

  const matchs = await matchsAll();

  return { response: matchs.response, status: matchs.status };
}

export async function getbyId(id: number) {
  if (Number.isNaN(id)) return { response: { message: 'id must be a number' }, status: 403 };

  const matchFound: Match | null = await Match.findOne({ where: { id } });

  if (!matchFound) {
    return { response: { message: 'not found' }, status: 404 };
  }

  return { response: matchFound, status: 200 };
}
