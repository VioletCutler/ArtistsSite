const postsRouter = require('express').Router()

postsRouter.use((req, res, next) => {
    console.log(`You've hit the Posts Router`)
    next()
}) 

postsRouter.get('/', (req, res) => {
    res.send('Here are the posts')
})

module.exports = {
    postsRouter
}