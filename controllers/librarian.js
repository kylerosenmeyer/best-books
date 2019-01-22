const db = require("../models/book")

module.exports = {
  findAll: function(cb) {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(books => {
        // console.log(`books: ${books}`)
        cb(books)
      })
      .catch(err => console.log(err))
  },

  create: function(book, cb) {

    db.Book
      .findOne({title: book.title})
      .then( response => {
        if (!response) {

          db.Book
            .create(book)
            .then(book => {
              console.log(book)
              cb("saved")
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  },

  count: function(cb) {
    db.Book 
      .countDocuments({})
      .then(number => {
        console.log(`Collection length: ${number}.`)
        cb(number)
      })
  },

  delete: function(book, cb) {
    db.Book
      .findById({ _id: book })
      .then(foundbook => foundbook.remove())
      .then(cb("book deleted."))
      .catch(err => console.log(err))
  }
}


