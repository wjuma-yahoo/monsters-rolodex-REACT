import { Component } from 'react'
import { map } from 'lodash'

import './card-list.styles.css'
import { Card } from '../card/card.component'

export class CardList extends Component {

    render() {
        return (
            <div className="monsters">
                {
                    map(this.props.monsters, monster => (
                        <Card monster={monster} />
                    ))
                }
            </div>
        )              
    }
}

