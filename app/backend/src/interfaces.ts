import User from './database/models/User';

export interface Login {
  email: string,
  password: string,
}

export interface ResponseStatus {
  response: any,
  status: number,
}

export interface UserFound extends User {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com'
}

export interface IMatchs {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
  homeClub: string;
  awayClub: string;
  response?: any,
  status?: number,
}

export interface IResultMatch {
  id?: number,
  name?: string,
  clubName?: string,
  resultMatchs?: IResultMatch[],
  points: number,
  goalsFavor: number,
  goalsOwn: number,
  inProgress: boolean,
}

export interface IResult {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}
