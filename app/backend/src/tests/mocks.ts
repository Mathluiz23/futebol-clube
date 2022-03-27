const adminPayload = {
  id: 1,
  username: "Admin",
  role: "admin",
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const userPayload = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: 'secret_user',
}

const clubs = [
  {
    id: 1,
    clubName: "Avaí/Kindermann"
  },
  {
    id: 2,
    clubName: "Bahia"
  },
  {
    id: 3,
    clubName: "Botafogo"
  },
]

export {
  userPayload,
  adminPayload,
  clubs,
}