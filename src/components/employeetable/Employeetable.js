import React, { Component } from 'react'
import Employeecard from '../employeecard/Employeecard.js';
import "./Employeetable.css";

const pokemonArray = [
    { id: 4, name: 'Charmander', type: 'fire', desknumber: 62 },
    { id: 7, name: 'Squirtle', type: 'water', desknumber: 63 },
    { id: 11, name: 'Metapod', type: 'bug', desknumber: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', desknumber: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', desknumber: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', desknumber: 95 },
    { id: 94, name: 'Gengar', type: 'poison', desknumber: 225 },
    { id: 133, name: 'Eevee', type: 'normal', desknumber: 65 }
];

class Employeetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pokemon: []
        };
    }

    componentDidMount() {
        this.setState({ pokemon: pokemonArray })
    }

    updateSearch(event) {
        let filteredPokemon = pokemonArray.filter((contact) => {
            return contact.name.toLowerCase().startsWith(event.target.value.toLowerCase());
        })
        this.setState({ pokemon: filteredPokemon });
    }

    compareProps = () => {
        return (a, b) => {
            let comparison = 0;
            if (a.type > b.type) {
                comparison = 1;
            } else if (a.type < b.type) {
                comparison = -1;
            }
            return comparison;
        };
    };

    handleReset = () => {
        this.setState({ pokemon: pokemonArray });
    }

    handleSort = () => {
        let sortedArray = this.state.pokemon.slice().sort(this.compareProps());
        this.setState({ pokemon: sortedArray });
    };

    render() {

        return (
            <div className="Pokedex">
                <h1 className="center">Employee Directory</h1>
                <div className="searchBar">
                    <label>Search: </label>
                    <input className="center" type="text"
                        onChange={this.updateSearch.bind(this)}
                    />
                    </div>
                    <br></br>
                    <div className="buttons">
                        <button onClick={this.handleSort}>Sort by Type</button>
                        <button onClick={this.handleReset}>Reset Sort</button>
                    </div>

                <div className="Pokedex-cards">
                    {this.state.pokemon.map((contact) => {
                        return <Employeecard id={contact.id} name={contact.name} type={contact.type} exp={contact.desknumber} key={contact.id} />
                    })}
                </div>
            </div>
        )

    }
}

export default Employeetable;

// <div className="Pokedex-cards">
// {this.props.pokemon.map((p) => (
//     <Employeecard id={p.id} name={p.name} type={p.type} exp={p.desknumber} />
// ))}
// </div>

// event.target.value.substr(0, 20)
// let sortedTypes = this.props.pokemon.filter(
//     (contact) => {
//         return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
//     }
// );

// let filteredContacts = this.props.pokemon.filter(
//     (contact) => {
//         return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
//     }
// );
// <label for="type">Choose a type:</label>
//                 <select name="type" id="type">
//                     <option value="fire">Fire</option>
//                     <option value="water">Water</option>
//                     <option value="bug">Bug</option>
//                     <option value="flying">Flying</option>
//                     <option value="electric">Electric</option>
//                     <option value="normal">Flying</option>
//                     <option value="poison">Poison</option>
//                 </select>