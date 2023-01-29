import { Request, Response } from "express"
import fs from "node:fs"
import ErrnoException = NodeJS.ErrnoException

enum Gender {
	Male = "Male",
	Female = "Female"
}

interface User {
	name: string,
	age: number,
	email: string,
	gender: Gender
}


export const createUser = async (req: Request, res: Response): Promise<void> => {
	const newUser: User = {
		"name": req.body.name,
		"age": req.body.age,
		"email": req.body.email,
		"gender": req.body.gender
	}
	
	await fs.readFile('data.json', 'utf-8',  (err: ErrnoException | null, data: string) => {

		const Contents: Array<User> = JSON.parse(data)

		Contents.push(newUser)

		fs.writeFile("data.json", JSON.stringify(Contents), (err: ErrnoException | null) => {
			if(err) {
				res.send('error found')
			}
			else {
				res.send('user successfully created')
			}
		
		})
	})
}

export const getUsers=async(req:Request,res:Response):Promise<void>=>{

    await fs.readFile("data.json","utf-8",(err:ErrnoException|null,data:string)=>{

        const Content: Array<User> = JSON.parse(data)

        res.json(Content)

    })
}

export const findUser = async (req: Request, res: Response): Promise<void> => {

    await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {

        const Contents: Array<User> = JSON.parse(data)
        
         const item =Contents.find((item: User) => item.email===req.query.email
            
           
        )
		if(item){
			res.json(item)
		}else{
			res.send("user not found")
		}

    })

}
export const updateUser = async (req: Request, res: Response): Promise<void> => {
	   
		
	    await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {

			const Contents: Array<User> = JSON.parse(data)

			const item =Contents.find((item: User) => item.email===req.params.email)

			if(item){
				item.email=req.body.email

				fs.writeFile("data.json", JSON.stringify(Contents), (err: ErrnoException | null) => {
					if(!err) {
						res.json(item)
					}
				})
	
		      
			}else{
				res.send("user not found")
			}
			
		})
	
	
	
		
}


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
	
	
		
		await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {

			const Contents: Array<User> = JSON.parse(data)

			const newContents: Array<User> = Contents.filter((item: User) => item.email !== req.params.email)

			fs.writeFile('data.json', JSON.stringify(newContents), (err: ErrnoException | null) => {
				
				if(!err) {
					res.send("user deleted")
				}
				else {
					res.send("error")
				}
			})
		})
	
}