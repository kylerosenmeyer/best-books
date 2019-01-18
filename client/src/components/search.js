import React, {Component} from "react"
import Container from "../components/container"
import Row from "../components/row"
import Column from "../components/column"
import SubTitle from "../components/h3"
import Button from "../components/button"
import Input from "../components/input"

class ReactComponent extends Component {
    
    render(){
        
        return (
            <Container className="searchWrapper">
                <Row className="searchRow">
                    <Column className="col-12">
                        <SubTitle className="searchTitle" subTitle="Search the Library"/>
                        <Input className="searchInput" />
                        <Button className="searchSubmit" name="Find Books"/>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default ReactComponent