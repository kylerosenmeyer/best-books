import React, {Component} from "react"

class Button extends Component {
    
    render(){
        
        return (
            
            <button className={this.props.className} data-href={this.props.href} data-saved={this.props.saved}>This is a Button</button>
        )
    }
}

export default Button