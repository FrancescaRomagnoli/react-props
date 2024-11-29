import Card from "../card/Card";
import { posts } from "../../data/posts";

export default function Main() {
  const publishedPosts = posts.filter((post) => post.published === true);
  // console.log(publishedPosts);
  const postsTags = publishedPosts.flatMap((post) => post.tags);
  // console.log(postsTags);

  const tagsList = [];

  postsTags.forEach((tag) => {
    if (!tagsList.includes(tag)) {
      tagsList.push(tag);
    }
  });
  console.log(tagsList);

  return (
    <main>
      <div className="container">
        <section>
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
          <div>
            <ul>
              {tagsList.map((tag) => {
                return <li>{tag}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
