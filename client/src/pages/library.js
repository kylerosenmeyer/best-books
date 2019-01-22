import React, {Component} from "react"
import { Link } from "react-router-dom"

import Container from "../components/container"
import Row from "../components/row"
import Column from "../components/column"
import Card from "../components/card"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"
import Search from "../components/search"
import SubTitle from "../components/h3"
import Button from "../components/button"

// import test from "../test-data.json"
import API from "../utility/api"

class Library extends Component {

  search = {
      query: ""
  }

  library = {
    books: []
  }

  collection = {
    count: 0
  }

  componentDidMount() {
    this.updateCollection()
  }

  refreshLibrary = () => {
    this.setState(this.library)
    this.search.query = ""
    this.setState(this.search)
  }

  handleInputChange = (event) => {
    this.library.books = []
    let userSearch = event.target.value
    console.log(`userSearch: ${userSearch}`)

    this.search.query = userSearch
    this.setState(this.search)
  }

  handleUserSearch = (event) => {

    event.preventDefault()
    this.library.books = []

    API.searchLibrary(this.search)
       .then((response) => {
         console.log(response)
          let books = response.data
  
          for ( let i=0; i<books.length; i++ ) {
            let foundBook = {
              title: books[i].volumeInfo.title,
              authors: books[i].volumeInfo.authors,
              story: books[i].volumeInfo.description,
              pageCount: books[i].volumeInfo.pageCount,
              image: ( books[i].volumeInfo.imageLinks ? books[i].volumeInfo.imageLinks.thumbnail : "http://res.publicdomainfiles.com/pdf_view/84/13939536618078.png" ),
              href: books[i].volumeInfo.infoLink,
              categories: books[i].volumeInfo.categories
            }
            this.library.books.push(foundBook)
          }
          
          this.refreshLibrary()
        })
       .catch((err) => console.log(err))
        
    
  }

  saveThisBook = (title, authors, image, href, story, pagecount, categories) => {
    
    let book = {
          title: title,
          authors: authors,
          image: image,
          link: href,
          story: story,
          pages: pagecount,
          categories: categories
        }

    console.log("----------------------------------------------")
    console.log(`check the book title: ${book.title}`)
    console.log(`check the book authors: ${book.authors}`)
    console.log(`check the book image: ${book.image}`)
    console.log(`check the book link: ${book.link}`)
    console.log(`check the book story: ${book.story}`)
    console.log(`check the book pagecount: ${book.pages}`)
    console.log(`check the book categories: ${book.categories}`)
    console.log("----------------------------------------------")
    
    API.saveBook(book)
       .then(() => this.updateCollection() )
    
  }

  readBook = (link) => {
    window.open(link, "_blank")
  }

  updateCollection = () => {
    console.log(`updating collection.`)
    API.updateCollection()
       .then((newcount) => {
         this.collection.count = newcount.data
         this.setState(this.collection)
        })
  }

  render() {
    return (

      <Container className="appWrapper">

        <Link to={"/"}>
          <Jumbotron title="Best Books" subTitle="Access every book on the internet." />
        </Link>
        
        <Row className="headerRow">
          <Column className="col-12">
            <Container className="personalWrapper">
              <SubTitle className="personalTitle" 
                        subTitle={`You have ${this.collection.count} book(s) in your collection.`}
                        update={this.updateCollection}
                         />
              <Link to={"/library/"}>
                <Button className="openPersonalLibrary" name="Open" />      
              </Link>
            </Container>
          </Column>
        </Row>

        <Search value={this.search.query} update={this.handleInputChange} search={this.handleUserSearch}/>

        <Row className="cardSection">

        {this.library.books.length ? 
          ( 
            <Column className="col-12">
              {this.library.books.map((book, key)=> (
                <Card title={book.title} 
                      authors={book.authors}
                      image={book.image}
                      alt={book.title}
                      href={book.href}
                      story={book.story}
                      pageCount={book.pageCount}
                      categories={book.categories}
                      key={key} 
                      update={this.refreshLibrary}
                      savethisbook={ () => {this.saveThisBook(book.title, book.authors, book.image, book.href, book.story, book.pageCount, book.categories)}}
                      readthisbook={()=>{this.readBook(book.href)}}
                /> 
              ))}
            </Column>
           ) : (
            <SubTitle className="noMatch" subTitle="Search for a Book or Author." />
          ) } 
        </Row>

        <Footer />
      </Container>

      
    )
  }
}

  export default Library

