import Cors from 'cors'
import initMiddleware from '../../_lib/initMiddleware'
import { METHODS } from 'http'

const cors = initMiddleware(
    Cors({
        origin:"http://localhost:3001",
        METHODS: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true
    })
)

export{
    cors
}