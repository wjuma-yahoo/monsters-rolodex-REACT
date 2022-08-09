import { Component } from 'react'
import { map } from 'lodash'

export class CardList extends Component {

    render() {

        console.log('Render')

        const renderedMonsters = map(this.props.monsters, monster => {
            return <h1 key={monster.id}> { monster.name } </h1>
        })

        return (
            <>
               { renderedMonsters } 
            </>
        )
    }
}

