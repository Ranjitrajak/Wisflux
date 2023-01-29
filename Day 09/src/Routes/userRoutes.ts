import express from "express"
import * as userController from '../controllers/userController'
const router = express.Router()

router.post('/create', userController.createUser)
router.get('/all', userController.getUsers)
router.get('/find', userController.findUser)
router.put('/:email', userController.updateUser)
router.delete('/delete/:email', userController.deleteUser)


export default router