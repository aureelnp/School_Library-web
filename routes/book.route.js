/** load library express */
// const express = require(`express`)
// const router = express.Router();
// const bookController = require ('../controllers/book.controller')

// router.get('/getbook', bookController.getAllBooks)
// router.post('/insert', bookController.insertbook)

// module.exports = router

/** load library express */
const express = require(`express`)
/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load book's controller */
const bookController = require(`../controllers/book.controller`)

/** load function from simple-middleware */
const { midOne } = require(`../middlewares/simplemiddleware`)

/** create route to get data with method "GET" */
app.get("/", bookController.getAllBooks)

/** create route to find book* using method "POST" and path "find" */
app.post("/find", bookController.findBook)

/** create route to add new book using method "POST"**/
app.post("/", bookController.addBook)

/** create route to update book
* using method "PUT"
* and define parameter for "id" */
app.put("/:id", bookController.updateBook)

/** create route to delete book
* using method "DELETE" and define parameter for "id" */
app.delete("/:id", bookController.deleteBook)

/** create route to get data with method "GET" */
app.get("/",[midOne], bookController.getAllBooks)

/** export app in order to load in another file */
module.exports = app