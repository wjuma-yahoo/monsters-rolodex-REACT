import { Component } from 'react'

import './search-box.styles.css'

export class SearchBox extends Component {

    render() {
        return (
            <input 
                className={'search-box'}
                type="text" 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} 
            />
        )
    }
}