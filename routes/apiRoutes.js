const axios = require("axios")


module.exports = function(app) {
    console.log("apiRoutes loaded")


    app.get("/api/books", (err, res) => {
        
        if(err) { err => console.log(err) }

        console.log(`getBooks: ${res}`)
    })
    


    
    app.post("/api/books", (req, res) => {

        console.log(`postBooks: ${req.body}`)
        
        axios.get("https://www.googleapis.com/books/v1/volumes?q=quilting")
    })



    // app.delete("/api/books/:id", (req, res) => {

    //     console.log(`deleteBook: ${req.params.id} `)
    // })
    
}