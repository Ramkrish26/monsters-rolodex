import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [allMonsters, setAllMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(allMonsters);

  const onSearchTextChange = (event) => {
    setSearchKeyword(event.target.value.toLowerCase());
  }

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setAllMonsters(users));
    }, []
  );

  useEffect(
    () => {
      const filteredResult = allMonsters.filter(monster => monster.name.toLowerCase().includes(searchKeyword));
      setfilteredMonsters(filteredResult);
    }, [allMonsters, searchKeyword]
  );

  return (
    < div className='App' >
      <h1 className='app-title'>Monsters Rolodex </h1>
      <SearchBox className='search-box'
        onSearchChangeHandler={onSearchTextChange}
        placeHolder={'Search monsters'} />
      <CardList monsters={filteredMonsters} />
    </div >
  );

}

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchKeyword: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(
//         () => {
//           return { monsters: users };
//         }
//       ));
//   }

//   onSearchTextChange = (event) => this.setState(
//     () => {
//       return { searchKeyword: event.target.value.toLowerCase() }
//     }
//   )

//   render() {
//     const filteredResult = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchKeyword));
//     return (
//       < div className='App' >
//         <h1 className='app-title'>Monsters Rolodex </h1>
//         <SearchBox className='search-box'
//           onSearchChangeHandler={this.onSearchTextChange}
//           placeHolder={'Search monsters'} />
//         <CardList monsters={filteredResult} />
//       </div >
//     );
//   }
// }

export default App;
