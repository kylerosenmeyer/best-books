import axios from "axios"

export default {

    searchLibrary: function(req) {

        let query = req.query
        // console.log(`incoming query: ${query}`)

        let editedQuery = query.replace(/ /g, "+")
        let route = "/api/books/" + editedQuery

        return axios.get(route)
    },
    
    getBooks: function() {

        return axios.get("/api/library")
    },

    saveBook: function(book) {
        return axios.post("/api/savebook", book)
    },

    updateCollection: function() {
        return axios.get("/api/updateCollection")
    },

    removeBook: function(id) {

        let query = "/api/removebook/" + id
        return axios.delete(query)
    }
}