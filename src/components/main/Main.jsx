import Card from "../card/Card";
import { posts } from "../../data/posts";

export default function Main() {
  const publishedPosts = posts.filter((post) => post.published === true);
  console.log(publishedPosts);

  return (
    <main>
      <div className="container">
        <div className="card-row">
          {publishedPosts.length ? (
            publishedPosts.map((post) => {
              return (
                <Card
                  key={post.id}
                  title={post.title}
                  img={post.image}
                  description={post.content}
                />
              );
            })
          ) : (
            <div>No post</div>
          )}
        </div>
      </div>
    </main>
  );
}
