const client = require('../client')

async function createVideosTable() {
    try{
        await client.query(`
        CREATE TABLE "videos" (
            "id" Serial PRIMARY KEY,
            "title" varchar(255) NOT NULL,
            "date" date NOT NULL,
            "description" text NOT NULL,
            "post" int
          );
        `)
    } catch(error) {
        console.log('Error building videos table!')
        throw error
    }
}

module.exports = {
    createVideosTable
}