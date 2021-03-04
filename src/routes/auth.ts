import { Request, Response, Router } from "express";
import { User } from "../entities/User";

const register = async(req:Request,res:Response) => {
    const {email,password,username} = req.body
    try {
       
        //TODO : validate data

        //TODO : create the user
        const user= new User({email,username,password})
        await user.save
        console.log("user-----",user)
        //TODO : return the user
        return res.json(user)

    } catch (error) {
        console.log("error----",error)
        return res.status(500).json(error)
    }
}
const router = Router()
router.post('/register',register)
export default router
