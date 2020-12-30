const express = require('express')
const app = express()
const data = require('../data.json')
const ctrl = require('./controller')
const port = 4321

//endpoints

app.get('/api/movies', ctrl.getMovies )
app.get('/api/movies/:id', ctrl.getSingleMovie )


app.listen(port, ()=>console.log(`Listening on port ${port}`))