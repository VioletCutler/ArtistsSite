const { 
    client,
    // declare your model imports here
    // for example, User
} = require('./')

const {
    createPostsTable
} = require('./models/index')

async function dropTables() {
    await client.query(`
        DROP TABLE IF EXISTS posts
    `)
}

async function buildTables() {
    try {
        client.connect();

        console.log('Starting to drop tables')
        await dropTables();
        console.log('Finished dropping tables')
        console.log('Starting to build tables')
        await createPostsTable();
        console.log('Finished building tables')
    } catch(error) {
        console.log("Error building tables")
        throw error;
    }
}

async function populateInitialData() {
    try {
        console.log('Starting to populate initial data')

        console.log('Finished populating initial data')

    } catch(error) {
        console.log("Error populating initial data!")
        throw error
    }
}

async function testDB() {
    try {
        console.log('Starting to test the database')

        console.log('Finished testing the database')

    } catch(error) {
        console.log('Error testing database')
        throw error
    }
}

buildTables()
.then(populateInitialData)
.then(testDB)
.catch(console.error)
.finally(() => client.end())