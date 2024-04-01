import { IUser } from "@/app/interfaces/user";
import Link from "next/link";

async function getPeople(): Promise<IUser[]> {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {});

  if (!resp.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const users = await resp.json();

  return users;
}

const Team = async () => {
  const people = await getPeople();

  return (
    <div>
      Team page
      <ul className="mb-4">
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
      <Link href="/dashboard/members">Members</Link>
    </div>
  );
};

export default Team;
