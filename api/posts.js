const postsRouter = require('express').Router()
const { createPost, getAllPosts } = require('../db/models/posts')
const { client } = require('../db')

postsRouter.use((req, res, next) => {
    console.log(`You've hit the Posts Router`)
    next()
}) 

postsRouter.get('/', async (req, res) => {
    try {
        console.log('await get all posts')
        const posts = await getAllPosts()
        res.send(posts)
    } catch(error) {
        console.log(error)
    }
})

postsRouter.post('/', async (req, res, next) => {
    console.log(req.body, 'req.body in posts')
    try {
        const newPost = req.body
        const returnedPost = await createPost(newPost)
        if (returnedPost) {
            res.send(returnedPost)
        } else {
            next({
                name: 'FailedCreatePost',
                message: "Could not create new post."
            })
        }
   
    } catch({name, message}) {
        next({
            name,
            message
        })
     
    }

})

module.exports = {
    postsRouter
}