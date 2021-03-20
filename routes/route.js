const express = require('express') 
const router = express.Router()
const User = require ('../models/User')



//get useres
router.get('/Getuser', (req, res) => {
    User.find()
        .then((User) => res.send(User))
        .catch((err) => console.error(err))
})

//add user 
router.post ('/Adduser' , (req , res )=>{
    const {name , age , phone} = req.body
    const newContact = new Contact ({
        name , age , phone
    })
    newContact.save()
    .then((User) =>res.send(User))
    .catch(err=>console.log(err))
})

//delete user
router.delete('/Deleteuser/:_id', (req, res) => {
    const { _id } = req.params
    User.Delete({ _id })
        .then((User) => res.send(User))
        .catch((err) => console.error(err))
})

//update user
router.put('/Updateuser/:_id', (req, res) => {
    const { _id } = req.params
    const { name, age, email, phone } = req.body

    User.findByIdAndUpdate({ _id }, { $set: { name, age,  phone } })
        .then((User) => res.send(User))
        .catch((err) => console.error(err))
})


module.exports = router
