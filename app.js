const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const https = require('https')
const fs = require('fs')

app.set('view engine', 'pug')
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(function(req, res, next){
    next()
})
.get('/accueil', function(req, res){
    res.redirect('/')
})
.get('/contact', function(req, res){
    res.render('contact', {title: 'contact'})
})
.post('/contact', function(req, res){
    console.log(req.body)
    res.render('contact'), {title:'contact'}
})
.get('/agenda', function(req, res){
    res.render('agenda', {title: 'agenda'})
})
.get('/presentation', function(req, res){
    res.render('presentation', {title: 'presentation'})
})
.get('/formation', function(req, res){
    res.render('formation', {title : 'formation'})
})
.get('/formation-kine', function(req, res){
    res.render('formation1', {title : 'formation'})
})
.get('/formation2', function(req, res){
    res.render('formation2', {title : 'formation'})
})
.get('/formation3', function(req, res){
    res.render('formation3', {title : 'formation'})
})
.get('/formation4', function(req, res){
    res.render('formation4', {title : 'formation'})
})
.get('/coaching', function(req, res){
    res.render('coaching', {title : 'coaching'})
})
.get('/boutique', function(req, res){
    res.render('boutique', {title: 'boutique'})
})
.get('/questionnaire', function(req, res){
    res.render('questionnaire', {title: 'questionnaire'})
})
.get('/blog', function(req, res){
    res.render('blog', {title: 'blog'})
})
.get('/inscription', function(req, res){
    res.render('inscription', {title: 'inscription'})
})
.get('/newsletter', function(req, res){
    res.render('newsletter', {title: 'newsletter'})
})
.get('/', function(req, res){
    res.render('accueil', {title : 'accueil'})
})
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app).listen(443);
app.listen(80, function(){
    console.log('Running on 51.210.103.168')
})
