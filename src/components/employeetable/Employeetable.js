import React, { Component } from 'react'
import Employeecard from '../employeecard/Employeecard.js';
import "./Employeetable.css";

class Employeetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "Search"
        };
    }
    
    static defaultProps = {
       pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', desknumber: 62},
            {id: 7, name: 'Squirtle', type: 'water', desknumber: 63},
            {id: 11, name: 'Metapod', type: 'bug', desknumber: 72},
            {id: 12, name: 'Butterfree', type: 'flying', desknumber: 178},
            {id: 25, name: 'Pikachu', type: 'electric', desknumber: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', desknumber: 95},
            {id: 94, name: 'Gengar', type: 'poison', desknumber: 225},
            {id: 133, name: 'Eevee', type: 'normal', desknumber: 65}
          ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1 className="center">Employee Directory</h1>
                <input className="center" type="text" placeholder="Search" value={this.state.search} />
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Employeecard id={p.id} name={p.name} type={p.type} exp={p.desknumber} />
                    ))}
                </div>
            </div>
        )
        
    }
}

export default Employeetable;