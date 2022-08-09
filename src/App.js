import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';

export class App extends Component {

  constructor () {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(
          () => {
            return {monsters: users}
          }
        )
      })
  }

  onSearchChange = (event) => {
    let searchString = event.target.value.toLowerCase();
    this.setState(
      () => {
        return { searchString }
      }
    )
  }

  render() {

    const { searchString, monsters } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <div style={{ textAlign: 'center' }}>

        <input 
          type="text" 
          placeholder="Buscar monster" 
          onChange={onSearchChange} 
        />

        {/* <input 
          type="text" 
          placeholder="Buscar monster" 
          onChange={onSearchChange} 
        />
        
        {
          filteredMonsters.map(monster => {
            return <h1 key={monster.id}> { monster.name } </h1>
          }) 
        } */}

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}