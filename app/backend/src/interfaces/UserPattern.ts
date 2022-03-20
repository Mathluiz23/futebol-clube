import User from '../database/models/User';

export interface UserPattern extends User {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com'
}
