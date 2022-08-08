import { Component } from 'react'

export class SearchBox extends Component {

    render() {
        return (
            <input 
                type="text" 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} 
            />
        )
    }
}