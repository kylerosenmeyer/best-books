import React, {Component} from "react"
import { Link } from "react-router-dom"

import LibraryCard from "../components/library-card"
import Container from "../components/container"
import Row from "../components/row"
import Column from "../components/column"
import Footer from "../components/footer"
import Jumbotron from "../components/jumbotron"
import Button from "../components/button"
import API from "../utility/api"

class Book extends Component {

  collection = {
    books: []
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {

    API.getBooks()
       .then( (res) => {

        let books = res.data
        
        console.log("----------------------------------------------")
        console.log(`check the first book:`)
        console.log(`check the book title: ${books[0].title}`)
        console.log(`check the book authors: ${books[0].authors}`)
        console.log(`check the book image: ${books[0].image}`)
        console.log(`check the book link: ${books[0].link}`)
        console.log(`check the book story: ${books[0].story}`)
        console.log(`check the book pagecount: ${books[0].pages}`)
        console.log(`check the book categories: ${books[0].categories}`)
        console.log("----------------------------------------------")

        this.collection.books = books
        this.setState(this.collection)

        })
       .catch(err => console.log(err))
  }

  readBook = (link) => {
    window.open(link, "_blank")
  }

  removeBook = (id) => {
    console.log(`check id: ${id}`)
    API.removeBook(id)
       .then((response) => {
         console.log(response.data)
         this.loadBooks()
       })
       .catch(err => console.log(err))
  }

  render() {

      return(

          <Container className="appWrapper">

          <Link to={"/"}>
            <Jumbotron title="Library App" subTitle="The best library app ever." />
          </Link>

          <Link to={"/"}>
            <Button className="return" name="Back to Search"/>
          </Link>
  
          <Row className="cardSection">
            <Column className="col-12">

              {this.collection.books.map((book, key)=> (
                <LibraryCard title={book.title} 
                      authors={book.authors}
                      image={book.image}
                      alt={book.title}
                      href={book.link}
                      story={book.story}
                      pageCount={book.pages}
                      categories={book.categories}
                      key={key} 
                      onChange={ () => { this.loadBooks() } }
                      readthisbook={ () => { this.readBook(book.link) } }
                      removethisbook={() => { this.removeBook(book._id) } }
                      />
              ))}
                  
            </Column>
          </Row>

          <Footer />
        </Container>
      )
  }
}

export default Book