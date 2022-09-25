const { useState, useEffect } = require("react");
const { fetchPosts } = require("../axios-services/posts");

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log('all posts', posts)

  useEffect(() => {
    async function getAllPosts() {
      const fetchedPosts = fetchPosts().then((retrievedPosts) => setPosts(retrievedPosts));
    }
    getAllPosts();
  }, []);

  return (
    <div>
      <h2>Here are the posts</h2>
      <div>
      {posts ? 
      posts.map((post) => {
            return (
              <div>
                <h3>{post.id}</h3>
                <h3>{post.title}</h3>
              </div>
            );
   
          })
        : <h3>No Posts To Display</h3>}
      </div>
      
    </div>
  );
};

export default Posts;
