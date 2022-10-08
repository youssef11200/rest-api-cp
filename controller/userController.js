const userModel = require ('../models/user')
const addUser = async (req,res) => { 
 try {
       // console.log("Hello")
   let p = new userModel({...req.body})
   await p.save()
   res.send({user:p,msg:`User ${p.name} added successfuly`})
   // console.log({...req.body})
 } catch (error) {
    res.status(400).send(error.message)
 }
 }
 const getallUsers = async(req,res) => { 
    try {
        let allUsers = await userModel.find()
        res.send({allUsers})
    } catch (error) {
        res.status(400).send(error.message)   
    }
  }
  const getoneUser = async(req,res) => { 
    try {
        const {idUser} = req.params
        let oneUser = await userModel.findById(idUser)
        res.send({oneUser})
    } catch (error) {
        res.status(400).send(error.message)
    }
   }
   const updateUser = async(req,res) => { 
    try {
        const {idUser} = req.params
        let updatedUser = await userModel.updateOne({_id:idUser},{$set:{...req.body}})
        res.send({updatedUser,msg:"User updated success"})
    } catch (error) {
        res.status(400).send(error.message)
    }
    }
 module.exports = {addUser,getallUsers,getoneUser,updateUser}