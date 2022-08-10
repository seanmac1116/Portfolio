const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/education', (req, res) => {
    res.render('education')
})

router.get('/experience', (req, res) => {
    res.render('experience')
})

router.get('/projects', (req, res) => {
    res.render('projects')
})

module.exports = router;