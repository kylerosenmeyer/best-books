const 
  mongoose = require("mongoose"),
  Schema = mongoose.Schema


let bookSchema = new Schema({

      title: { type: String, required: true },
      authors: { type: Array, required: true },
      story: { type: String },
      pages: { type: Number },
      image: { type: String },
      link: { type: String },
      categories: { type: Array },
      date: { type: Date, default: Date.now }
    
    }),
    LibraryBook = mongoose.model("LibraryBook", bookSchema)

module.exports = {Book: LibraryBook}
