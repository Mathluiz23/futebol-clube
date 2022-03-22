import User from '../database/models/User';

export interface UserFound extends User {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com'
}
