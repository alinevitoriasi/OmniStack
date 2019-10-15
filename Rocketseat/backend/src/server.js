const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()


// GET, POST , PUT , DELETE
// req.query.idade = Acessar Query Params(filtro)
// req.params = Acessar route params(Adicao, delete)
// app.put('/users/:id',(req,res) =
// req.body = Acessa corpo da requisacao(criação e edição)

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ror3j.mongodb.net/test?retryWrites=true&w=majority&ssl=true', {
    useNewUrlParser:  true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)


app.listen(3333)
