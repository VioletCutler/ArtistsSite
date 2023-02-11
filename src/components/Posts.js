const { useState, useEffect } = require("react");
const { fetchPosts } = require("../axios-services/posts");

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log("all posts", posts);

  useEffect(() => {
    async function getAllPosts() {
      const fetchedPosts = fetchPosts().then((retrievedPosts) =>
        setPosts(retrievedPosts)
      );
    }
    getAllPosts();
  }, []);

  return (
    <div>
      <section>
        <h2>Here are the posts</h2>
        <div>
          {posts ? (
            posts.map((post) => {
                  {return post.active ? <article key={`post-${post.id}`}>
                <h3>{post.id}{post.title}</h3>
                <p>{post.content}</p>
              </article> : null}
              ;
            })
          ) : (
            <h3>No Posts To Display</h3>
          )}
        </div>
      </section>
    </div>
  );
};

export default Posts;
