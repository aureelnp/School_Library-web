/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const memberController =require(`../controllers/member.controller`)

/** load middleware for validation request */
// let  validateMember  = require(`../middlewares/member-validation`)

/** create route to get data with method "GET" */
app.get("/", memberController.getAllMember)

/** create route to add new member using method "POST" */
app.post("/", memberController.addMember)

/** create route to find member
* using method "POST" and path "find" */
app.post("/find", memberController.findMember)

/** create route to update member
* using method "PUT" and define parameter for "id" */
app.put("/:id", memberController.updateMember)

/** create route to delete member
* using method "DELETE" and define parameter for "id" */
app.delete("/:id", memberController.deleteMember)

/** create route to add new member using method "POST" */
app.post("/",memberController.addMember)
/** create route to update member
* using method "PUT" and define parameter for "id" */
app.put("/:id", memberController.updateMember)

/** export app in order to load in another file */
module.exports = app