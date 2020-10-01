import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()

const port = process.env.SERVER_PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})