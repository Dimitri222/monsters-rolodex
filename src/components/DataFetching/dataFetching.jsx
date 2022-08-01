import React, {Component} from "react";
import Card from "../card/card.component";
import SearchField from "../searchField/searchField.component";

import "./dataFetching.css";

class DataFetching extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: '',
            
        }


        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) =>{
         this.setState({ searchField: e.target.value},() => "Search Field Update" ) 
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(monsters => monsters.json())
        .then(users => this.setState({monsters: users}))
    }

    render(){
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(mon =>
            mon.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return(
            <div>
              {/* Search Input Component */}
             <SearchField placeholder = "Search Monsters" handleChange = {this.handleChange}/>
                
                <div className="CardList">
                {
                    filteredMonsters.map(monsters => 
                        <Card key = {monsters.id} img ={monsters.id} name ={monsters.name} email = {monsters.email} />
                        )
                }
                </div>
            </div>
        )
    }
}

export default DataFetching;