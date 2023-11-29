import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component'

import './App.css';
import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';

class App extends Component{

  constructor(){
    super()

    this.state={
      monsters:[],
      searchField: ''
    }
    
  }

 
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> this.setState( ()=>{
      return {monsters:users}
    },
    ))
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(  
      ()=> {return {searchField}})}

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.includes(searchField)
    })

    return (
      <div className="App">

        <h1 className='app-title'>Monster Rolodex</h1>
        
       <SearchBox 
       onChangeHandler = {onSearchChange} 
       className='monsters-search-box' 
       placeholder='search monsters'/>
       <CardList  monsters ={filteredMonsters}/>

      </div>
    );
  }
  
}

export default App;
