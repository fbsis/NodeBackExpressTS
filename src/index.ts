import express from 'express'
import cors from 'cors'

class App{
    public express: express.Application
    
    public constructor(){
        this.express = express()
        this.express.use(express.json())
        this.express.use(cors())


    }
}
new App().express.listen(3000);