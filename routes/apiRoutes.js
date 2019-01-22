const 
    axios = require("axios"),
    librarian = require("../controllers/librarian")


module.exports = function(app) {
    console.log("apiRoutes loaded")


    app.get("/api/books/:query", (req, res) => {
        
        let query = req.params.query

        let url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=20"
        console.log(`url ${url}`)
        axios.get(url)
             .then( function(response) { res.json(response.data.items) } )
    })

    
    app.post("/api/savebook", (req, res) => {

        let book = req.body
        console.log("----------------------------------------------")
        console.log(`check the req title: ${book.title}`)
        console.log(`check the req authors: ${book.authors}`)
        console.log(`check the req image: ${book.image}`)
        console.log(`check the req link: ${book.href}`)
        console.log(`check the req story: ${book.story}`)
        console.log(`check the req category: ${book.category}`)
        console.log(`check the req pagecount: ${book.pagecount}`)
        console.log("----------------------------------------------")

        let cb = function(response) { res.json(response) }
        librarian.create(book, cb)
        
    })

    app.get("/api/library", (req, res) => {

        let cb = function(response) { res.json(response) }
        librarian.findAll(cb)
    })

    app.get("/api/updateCollection", (req, res) => {

        let cb = function(response) { res.json(response) }
        librarian.count(cb)
    })

    app.delete("/api/removebook/:id", (req, res) => {

        let book = req.params.id,
            cb = function(response) { res.send(response) }

        console.log("----------------------------------------------")
        console.log(`check the delete ID request: ${book}`)
        console.log("----------------------------------------------")

        librarian.delete(book, cb)
    })



    // app.delete("/api/books/:id", (req, res) => {

    //     console.log(`deleteBook: ${req.params.id} `)
    // })
    
}