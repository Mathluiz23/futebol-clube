import Match from '../database/models/Match';
import { IResult, IResultMatch } from '../interfaces';

export function ranking(leaderBoard: any) {
  return leaderBoard.sort((club1:IResult, club2:IResult) => {
    if (club1.totalPoints !== club2.totalPoints) return club2.totalPoints - club1.totalPoints;
    if (club1.totalVictories !== club2.totalVictories) {
      return club2.totalVictories - club1.totalVictories;
    }
    if (club1.goalsBalance !== club2.goalsBalance) return club2.goalsBalance - club1.goalsBalance;
    if (club1.goalsFavor !== club2.goalsFavor) return club2.goalsFavor - club1.goalsFavor;
    if (club1.goalsOwn !== club2.goalsOwn) return club2.goalsOwn - club1.goalsOwn;

    return 0;
  });
}

export function away(match: Match): IResultMatch {
  const { homeTeamGoals, awayTeamGoals, inProgress } = match;
  let points = 0;

  if (awayTeamGoals > homeTeamGoals) {
    points = 3;
  }

  if (awayTeamGoals < homeTeamGoals) {
    points = 0;
  }

  if (homeTeamGoals === awayTeamGoals) {
    points = 1;
  }

  return { points, goalsFavor: awayTeamGoals, goalsOwn: homeTeamGoals, inProgress };
}

export function home(match: Match): IResultMatch {
  const { homeTeamGoals, awayTeamGoals, inProgress } = match;
  let points = 0;

  if (homeTeamGoals > awayTeamGoals) {
    points = 3;
  }

  if (homeTeamGoals < awayTeamGoals) {
    points = 0;
  }

  if (homeTeamGoals === awayTeamGoals) {
    points = 1;
  }

  return { points, goalsFavor: homeTeamGoals, goalsOwn: awayTeamGoals, inProgress };
}

export function matchResults(matchAndClubes:object[]): any[] {
  const matchsResults = matchAndClubes.map((clubMatch: any) => {
    const { id, clubName, matchHome, matchAway } = clubMatch;

    const resultHome: Match[] = matchHome.map((match: Match) => home(match));
    const resultAway: Match[] = matchAway.map((match: Match) => away(match));

    return { id, clubName, resultMatchs: [...resultHome, ...resultAway] };
  });

  return matchsResults;
}

export function resultsHome(matchAndClubes:object[]): any[] {
  const matchsResults = matchAndClubes.map((clubMatch: any) => {
    const { id, clubName, matchHome } = clubMatch;

    const resultHome: Match[] = matchHome.map((match: Match) => home(match));

    return { id, clubName, resultMatchs: resultHome };
  });

  return matchsResults;
}

export function resultsAway(matchAndClubes:object[]): any[] {
  const matchsResults = matchAndClubes.map((clubMatch: any) => {
    const { id, clubName, matchAway } = clubMatch;

    const resultAway: Match[] = matchAway.map((match: Match) => away(match));

    return { id, clubName, resultMatchs: resultAway };
  });

  return matchsResults;
}

const startScores = () => ({
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
});

export function resultScores(MatchsResult: any) {
  const { resultMatchs, clubName } = MatchsResult;

  const total = startScores();
  resultMatchs.forEach((scores: IResultMatch) => {
    const { inProgress, points, goalsFavor, goalsOwn } = scores;

    if (!inProgress) {
      total.name = clubName;
      total.totalPoints += points;
      total.totalGames += 1;
      total.totalVictories += (points === 3 ? 1 : 0);
      total.totalDraws += (points === 1 ? 1 : 0);
      total.totalLosses += (points === 0 ? 1 : 0);
      total.goalsFavor += goalsFavor;
      total.goalsOwn += goalsOwn;
      total.goalsBalance = total.goalsFavor - total.goalsOwn;
      total.efficiency = +(((total.totalPoints / (total.totalGames * 3)) * 100).toFixed(2));
    }
  });

  return total;
}
