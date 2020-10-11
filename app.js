const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(function(req, res, next){
    next()
})
.get('/accueil', function(req, res){
    res.render('accueil', {title : 'Accueil'})
})
.get('/contact', function(req, res){
    res.render('contact', {title: 'Contact'})
})
.post('/contact', function(req, res){
    console.log(req.body)
    res.render('contact'), {title:'Contact'}
})
.get('/presentation', function(req, res){
    res.render('presentation', {title: 'Présentation'})
})
.get('/formations', function(req, res){
    res.render('formations', {title : 'Formations'})
})
.get('/coaching', function(req, res){
    res.render('coaching', {title : 'Coaching'})
})
.get('/boutique', function(req, res){
    res.render('boutique', {title: 'Boutique'})
})
.get('/questionnaire', function(req, res){
    res.render('questionnaire', {title: 'Questionnaire'})
})
.get('/blog', function(req, res){
    res.render('blog', {title: 'Blog'})
})
.get('/', function(req, res){
    res.redirect('/accueil')
})

app.listen(3000, function(){
    console.log('Running on http://localhost:3000/')
})
