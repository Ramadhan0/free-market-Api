import express from 'express'

const indexRouter = express.Router()

indexRouter.get('/', (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

export default indexRouter;
