const express=require("express")
const { UserModel } = require("../Model/user.model")
const route=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

/**
 * @swagger
 *
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with email, password, age, and name.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                 type: integer
 *               name:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               password: secret
 *               age: 25
 *               name: John Doe
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request - request body is missing or invalid
 *       500:
 *         description: Internal server error
 */


route.post("/register",async(req,res)=>{
    const{email,password,age,name}=req.body
    try {
        bcrypt.hash(password,4,async(err,hash)=>{
            if(err){
                console.log(err)
            }
            else{
                const user= new UserModel({email,age,name,password:hash})
                await user.save()
                res.send("user registerd")
            }
        })
       
    } catch (error) {
        res.send(error)
    }
})

/**
 * @swagger
 *
 * /login:
 *   post:
 *     summary: Login as a registered user
 *     description: Login with email and password to get an authentication token for further actions.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               password: secret
 *     responses:
 *       200:
 *         description: Login successful - returns an authentication token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Message indicating the login was successful
 *                   example: login successfully
 *                 token:
 *                   type: string
 *                   description: Authentication token for further actions
 *       401:
 *         description: Unauthorized - email and/or password are incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating the login was unsuccessful
 *                   example: Wrong credentials
 *       500:
 *         description: Internal server error
 */


route.post("/login",async(req,res)=>{
    const{email,password}=req.body
try {
    //returns the first document that matches this email
    const user= await UserModel.findOne({email})

if(user){
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            const token=jwt.sign({"authorId":user._id,"authorname":user.name},"harshi")
            res.send({"msg":"login successfuly","token":token})
        }
        else{
            res.send("wrong data")
        }
    })
   
}
else{
res.send("Wrong credentials")
}
} catch (error) {
    res.send(error)
}

})


module.exports={
    route
}

