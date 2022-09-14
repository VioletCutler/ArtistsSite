const client = require('../client')

// To create database table
async function createPostsTable() {
    try{
        await client.query(`
        CREATE TABLE posts
        (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            content TEXT NOT NULL
        );
        `)
    } catch(error) {
        console.log('Error building posts table!')
        throw error
    }
}

module.exports = {
    createPostsTable
}