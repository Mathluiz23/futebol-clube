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
