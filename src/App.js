import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> setMonsters(users));
     
  },[])
  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
      setFilteredMonsters(newFilteredMonsters)
     
  },[monsters, searchField])

  return(
    <div className='App'>
      <div className='app-title'>
        <h1>Monsters Rolodex</h1>
      </div>
      <SearchBox 
      onChangeHandler = {onSearchChange} 
      className='monsters-search-box'
      placeholder='search monsters'
      />
      <CardList  monsters ={filteredMonsters}/>

    </div>
  )
}

export default App;
