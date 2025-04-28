'use strict'

import express from 'express' //Servidor HTTP
import morgan from 'morgan' //Logs
import helmet from 'helmet' //Seguridad para HTTP
import cors from 'cors' //Acceso al API\

import validarPasswordRoutes from '../src/routes/validarPassword.routes.js'
import romanoAEnteroRoutes from '../src/routes/romanoAEntero.routes.js'
import conversorTemperaturaRoutes from '../src/routes/conversorTemperatura.routes.js'
import generadorPasswordRoutes from '../src/routes/generadorPassword.routes.js'


const configs = (app)=>{
    app.use(express.json()) 
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    // app.use(limiter)
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/api/password', validarPasswordRoutes)
    app.use('/api/romano', romanoAEnteroRoutes)
    app.use('/api/temperatura', conversorTemperaturaRoutes)
    app.use('/api/generador', generadorPasswordRoutes)
}


export const initServer = async()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT || 3000)
        console.log(`Server running in port ${process.env.PORT || 3000}`)
    } catch(err) {
        console.error('Server init failed', err)
    }
}