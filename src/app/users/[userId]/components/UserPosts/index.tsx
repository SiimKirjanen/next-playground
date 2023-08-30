import { IPost } from "@/app/interfaces/post";
import { TimeOut } from "@/app/utils/timeOut";

async function getUserPosts(userId: string): Promise<IPost[]> {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  await TimeOut(2000);
  return await resp.json();
}

interface Props {
  userId: string;
}

const UserPosts = async ({ userId }: Props) => {
  const posts = await getUserPosts(userId);

  return (
    <div>
      <h2 className="mb-2">Iser Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default UserPosts;