import { resultsHome, resultsAway,
  resultScores, ranking, matchResults } from '../middlewares/leaderBords';
import Club from '../database/models/Club';
import Match from '../database/models/Match';
import { IResultMatch } from '../interfaces';

export async function getHomeOrAway(home: boolean) {
  const homeOrAway = home ? 'matchHome' : 'matchAway';

  const matchAndClubs: Club[] = await Club.findAll({ include: [{ model: Match, as: homeOrAway }] });

  const matchsResults = home ? resultsHome(matchAndClubs) : resultsAway(matchAndClubs);

  const leaderBord = matchsResults.map((result: IResultMatch) => (resultScores(result)));

  const rankingSort = ranking(leaderBord);

  return { response: rankingSort, status: 200 };
}

export async function getAll() {
  const matchAndClubs: Club[] = await Club.findAll({
    include: [{ model: Match, as: 'matchHome' }, { model: Match, as: 'matchAway' }],
  });

  const matchsResults = matchResults(matchAndClubs);

  const leaderBord = matchsResults.map((result: IResultMatch) => (resultScores(result)));

  const rankingSort = ranking(leaderBord);

  return { response: rankingSort, status: 200 };
}
