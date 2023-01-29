import express, { Express, Request, Response } from "express"
import cors from 'cors'
import Redis from 'ioredis'


const app: Express = express()

const PORT: number = 9000

const client = new Redis({
    host: 'redis-17091.c212.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 17091,
    password: 'T09yUJjxKBfNehd66pnMDXSZEISjgsx1'
})

app.use(cors())
app.listen(PORT, () => {
	console.log(`Listening on PORT : ${PORT}`)
})

app.get('/', async (req: Request, res: Response) => {

	let visit: string | null = await client.get("visits")
   

	if (visit) {
		let numVisit: number = +visit
		res.send(visit)
        numVisit++
		
		await client.set('visits', numVisit)
		

	}
	else {
		await client.set("visits", 1)
		res.send("0")
	}





})