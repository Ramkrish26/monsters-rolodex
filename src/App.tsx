import { useEffect, useState, ChangeEvent } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [allMonsters, setAllMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setfilteredMonsters] = useState(allMonsters);

  const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(event.target.value.toLowerCase());
  }

  useEffect(
    () => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
        setAllMonsters(users);
      }
      fetchUsers();
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
