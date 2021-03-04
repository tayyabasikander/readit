import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express'
import morgan from 'morgan';
import authRoutes from './routes/auth'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.get('/',(_,res)=>res.send('Hello world'))
app.use('/api/auth',authRoutes)
app.listen(5000,async ()=>{
    console.log("server running at http://localhost:5000")
    try {
        await createConnection()
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
})