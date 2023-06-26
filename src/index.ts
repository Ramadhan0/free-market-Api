import express from 'express'
import mongoose from 'mongoose'
import indexRouter from './modules'
import { PORT, DB_URL } from './config/app.config'

const app = express()

// mongodb connection
mongoose.connect(DB_URL as string)
    .then(result => app.listen(PORT, () => console.log(`app running on port ${PORT}`)))
    .catch(err => console.log(err))


app.use('/', indexRouter)
