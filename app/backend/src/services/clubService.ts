import Club from '../database/models/Club';

export async function getAll() {
  const clubs: Club[] = await Club.findAll({ raw: true });

  return { response: clubs, status: 200 };
}

export async function getById(id: number | string) {
  if (Number.isNaN(id)) {
    return { response: { message: 'id must be a number' }, status: 403 };
  }

  const clubFound: Club | null = await Club.findOne({ where: { id } });

  if (!clubFound) {
    return { response: { message: 'not found' }, status: 404 };
  }

  return { response: clubFound, status: 200 };
}
