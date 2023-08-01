import { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
        <input type="search" className ='search-box' placeholder='Search Monsters'onChange={onSearchChange}
        />
        )
    }
}