import { Component } from 'react'

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
          },
          () => console.log(users)
        )
      })
  }

  render() {

    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    })

    return (
      <div style={{ textAlign: 'center' }}>

        <input 
          type="text" 
          placeholder="Buscar monster" 
          onChange={(e) => {
            let searchString = e.target.value.toLowerCase();
            
            this.setState(
              () => {
                return { searchString }
              }
            )
          }} 
        />
        
        {
          filteredMonsters.map(monster => {
            return <h1 key={monster.id}> { monster.name } </h1>
          }) 
        }

      </div>
    )
  }
}