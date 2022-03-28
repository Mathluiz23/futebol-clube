import { Op } from 'sequelize';
import Match from '../database/models/Match';
import Club from '../database/models/Club';

export async function matchsAll() {
  const allMatchs: Match[] = await Match.findAll({
    include: [
      { model: Club, as: 'awayClub', attributes: [['club_name', 'clubName']] },
      { model: Club, as: 'homeClub', attributes: [['club_name', 'clubName']] },
    ] });

  return { response: allMatchs, status: 200 };
}

export async function matchsFilter(inProgress:boolean) {
  const allMatchs: Match[] = await Match.findAll({
    where: { in_progress: inProgress },
    include: [
      { model: Club, as: 'awayClub', attributes: [['club_name', 'clubName']] },
      { model: Club, as: 'homeClub', attributes: [['club_name', 'clubName']] },
    ] });

  return { response: allMatchs, status: 200 };
}

export function checkTeamEquals(reqBody: any): boolean {
  const { homeTeam, awayTeam } = reqBody;

  return homeTeam === awayTeam;
}

export async function checkTeamExists(reqBody: any): Promise<boolean> {
  const team = await Club.findAll({
    raw: true,
    where: { id: { [Op.or]: [reqBody.awayTeam, reqBody.homeTeam] } },
  });

  return team.length !== 2;
}
