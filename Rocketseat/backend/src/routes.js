// const express = require('express')
// const SessionController = require('./controllers/SessionController')
// const routes= express.Router()



// routes.post('/sessions',SessionController.store)
// routes.post('/spots',SpotController.store)

// module.exports = routes


const app = require('express')

//req.params = Acessar route params (para edição, delete)
//req.query é para acessar os query params (para filtros)
//req.body = acessa corpo da requisição


// GET, POST, PUT, DELETE
var routes = app.Router()

routes.post('/users', (req, res) => {
    return res.json(req.body)
})

module.exports = routes