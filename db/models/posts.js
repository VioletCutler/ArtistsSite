const client = require("../client");
// const { Client } = require('pg')
// const client = new Client({
//   connectionString:
//   `postgres://localhost5434/violetblog`
// })
// const client = {
//   query: (request) => console.log(request)
// }

// To create database table
async function createPostsTable() {
  try {
    await client.query(`
        CREATE TABLE posts
        (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) UNIQUE NOT NULL,
            content TEXT NOT NULL,
            active BOOLEAN DEFAULT true
        );
        `);
  } catch (error) {
    console.log("Error building posts table!");
    throw error;
  }
}

async function getAllPosts() {
  console.log('Beginning to get all posts')
  try {
    const { rows: posts} = await client.query(`
      SELECT *
      FROM posts;
    `)

    console.log(posts)
    return posts
  } catch(error) {
    console.log('Error getting all posts')
    throw error
  }
}

async function createPost({ title, content, active = true }) {
  console.log("Beginning to create post...");
  console.log("title->", title, "content->", content, "active->", active);
  try {
    const post = await client.query(
      `
        INSERT INTO posts(title, content, active)
        VALUES ($1, $2, $3)
        RETURNING *;
        `,
      [title, content, active]
    );
    console.log("...Finished creating new post");
    return post;
  } catch (error) {
    console.log("Error creating post");
    throw error;
  }
}

async function createInitialPosts() {
  console.log("Starting to create initial posts...");
  try {
    const postsToCreate = [
      {
        title: "My First Post",
        content:
          "I am so excited to start this new blog! Keep checking in to see what I am up to",
        active: true,
      },
      {
        title: "My Second Post",
        content: "Look at all this cool stuff I am working on",
        active: true,
      },
      {
        title: "My Third Post",
        content: "Something something something",
        active: false,
      },
      {
        title: "My Fourth Post",
        content: "look at this amazing content! Wow!",
        active: false,
      },
    ];
    const posts = await Promise.all(
      postsToCreate.map((post) => createPost(post))
    );
  } catch (error) {
    console.log("Error creating inital posts");
    throw error;
  }
}

module.exports = {
  createPostsTable,
  createPost,
  createInitialPosts,
  getAllPosts
};
