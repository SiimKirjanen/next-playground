import { IPost } from "@/app/interfaces/post";
import { IUser } from "@/app/interfaces/user";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

async function getUser(userId: string): Promise<IUser> {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!resp.ok) {
      throw new Error('Failed to fetch data')
    }

    return await resp.json();
}

async function getUserPosts(userId: string): Promise<IPost[]> {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

    if (!resp.ok) {
      throw new Error('Failed to fetch data')
    }

    return await resp.json();
}

interface Params {
    params: {
        userId: string
    }
}

const User = async ({ params: {userId} }: Params) => {
    const userPostsPromise = getUserPosts(userId);
    const user = await getUser(userId);

  return (
    <div>
        <h2>Welcome to {user.name} page</h2>
        <Suspense fallback={<p>Loading...</p>}>
            <UserPosts promise={userPostsPromise}/>
        </Suspense>
    </div>
  )
}

export default User