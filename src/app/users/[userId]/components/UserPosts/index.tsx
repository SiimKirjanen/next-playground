import { IPost } from "@/app/interfaces/post";

interface Props {
    promise: Promise<IPost[]>
}

const UserPosts = async ({ promise }: Props) => {
    const posts = await promise;

    return (
        <div>
            <h3>Iser Posts</h3>
            {posts.map((post) => {
                return (<article key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </article>);
            })}
        </div>
    );
};

export default UserPosts;