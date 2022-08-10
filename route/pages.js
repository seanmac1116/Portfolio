const express = require('express');
const router = express.Router();
const Contacts = require('./models/contacts')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contacts', (req, res) => {
    res.render('contacts')
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

router.post('/submitContacts', (req, res) => {
    const contacts = new Contacts ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    })



    Contacts.collection.insertOne(contacts)
    .then(result => {
        res.render('contacts')
    })
    .catch(err => console.log(err));
})

module.exports = router;