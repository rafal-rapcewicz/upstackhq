import { User } from './domain';
import { api } from '../../settings';

export const fetchUsers: () => Promise<User[]> = async () => {
    const response = await fetch(`${api}/users`);
    return await response.json() as User[];
};
