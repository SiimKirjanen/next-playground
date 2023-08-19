import Link from 'next/link'
import { IUser } from '../interfaces/user';

async function getUsers(): Promise<IUser[]> {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5', {});

  if (!resp.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const users = await resp.json();
  
  return users;
}

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="flex flex-col">
      {users.map((user) => {
        return <Link href={`/users/${user.id}`} key={user.id}>{user.name}</Link>
      })}
    </div>
  )
}

export default Users