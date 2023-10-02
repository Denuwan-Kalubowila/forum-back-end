import * as express from "express"
import * as cors from "cors"
import {AppDataSource} from "./data-source"
import { route } from "./routes/createUser"





AppDataSource.initialize()
.then(async ()=>{
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(route)

    app.listen(8000,()=>{
        console.log("Now running on port 8000")
    })
    
}).catch((err)=>{
    console.log(err)
})



