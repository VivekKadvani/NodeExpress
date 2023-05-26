const express = require('express')
const path = require('path')
const blogs = require('../data/blogs.js')

const router = express.Router()

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../templates/index.html"))
// });

router.get('/blogs', (req, res) => {
    blogs.forEach(element => {
        console.log(element.title);
    });
    res.sendFile(path.join(__dirname, "../templates/blogHome.html"))
});

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/bloghome', (req, res) => {
    res.render('bloghome', {
        blogs: blogs
    })
})
module.exports = router

