const axios = require("axios")


module.exports = function(app) {
    console.log("apiRoutes loaded")


    axios.get("/api/books", (err, res) => {
        
        if(err) { err => console.log(err) }

        console.log(`getBooks: ${res}`)
    })
    


    
    axios.post("/api/books", (req, res) => {

        console.log(`postBooks: ${req.body}`)
    })



    axios.delete("/api/books/:id", (req, res) => {

        console.log(`deleteBook: ${req.params.id} `)
    })
    
}