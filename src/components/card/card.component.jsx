import { Component } from 'react'

import './card.styles.css'

export class Card extends Component {

    render() {

        const { name, email, id } = this.props.monster

        return(
            <div className="card">
                <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <div className="card-body">
                    <h5 className="card-title h5">{name}</h5>
                    <p className="card-text">{email}</p>
                </div>
            </div>
        )
    }
}