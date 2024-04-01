import Link from "next/link";
import { IUser } from "@/_interfaces/user";

async function getUsers(): Promise<IUser[]> {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5",
    {},
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  return await resp.json();
}

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="flex flex-col">
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Users;
