import express from "express"

import { addUser, getUser , deleteUserById , updateUserById , getUserById, getUserByAge} from "../controller/user.js"
//making router var to be able to use get,post http methods. all methods are availbl.
const router=express.Router()
//here inside router.get fun we can give url here our url is localhost="/"=root
router.get("/name",getUser)
//localhos:8080/user/name url for http get
router.post("/", addUser)  //localhos:8080/user url for http post method sends data in json as body so we use req.body


router.delete("/:id", deleteUserById)

router.put("/:id", updateUserById)  //100% changes 3 data chnged

router.get("/:id",getUserById)  //sending id as parameter so req.params

router.get("/:id",getUserByAge)
//this router we need to use in index.js file
export default router;