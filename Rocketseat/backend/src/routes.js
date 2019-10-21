//req.params = Acessar route params (para edição, delete)
//req.query é para acessar os query params (para filtros)
//req.body = acessa corpo da requisição
// GET, POST, PUT, DELETE

const express = require('express')
const multer =require('multer')
const uploadConfig=require('./config/upload')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes= express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions',SessionController.store)
routes.get('/session',SessionController.show)

routes.get('/user/:id',SessionController.show)

routes.get('/spots',SpotController.index)
routes.post('/spots',upload.single('thumbnail'),SpotController.store)

routes.get('/dashboard',DashboardController.show)

routes.post('/spots/:spot_id/bookings',BookingController.store)
module.exports = routes