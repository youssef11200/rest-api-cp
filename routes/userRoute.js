const express = require ('express')
const { addUser, getallUsers, getoneUser, updateUser } = require('../controller/userController')
const router = express.Router()
 /**
  * @param POST /user/addUser
  * @description ajout d'un nouvel produit
  * @access PUBLIC
  */


 router.post("/addUser",addUser)
  /**
  * @param GET /user
  * @description get all the Users
  * @access PUBLIC
  */
 router.get("/alluser",getallUsers)
 /**
  * @param GET /User/:id
  * @description get one User
  * @access PUBLIC
  */
 router.get("/:idUser",getoneUser)
  /**
  * @param PUT /User/:id
  * @description update Users
  * @access PUBLIC
  */
 router.put("/:idUser",updateUser)
 module.exports = router