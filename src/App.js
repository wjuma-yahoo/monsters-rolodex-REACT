import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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

        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder={'search monsters'} 
        />

        <CardList 
          monsters={filteredMonsters} 
        />

      </div>
    )
  }
}