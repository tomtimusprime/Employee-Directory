import React, { Component } from 'react';
import './Pokecard.css';
const betterURL = (id) => {
    if(id < 10) {
        id = "00" +  id;
    }
    if(id >= 10 &&  id < 100) {
        id = "0" + id;
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

class Pokecard extends Component {
    render(){
        let imgSrc = `${betterURL(this.props.id)}`;
        console.log(betterURL(this.props.id));
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">Name: {this.props.name}</h1>
                <h1 className="Pokecard-data">Type: {this.props.type}</h1>
                <h1 className="Pokecard-data">Base exp: {this.props.exp}</h1>
                <img src={imgSrc} alt={this.props.name}/>
            </div>
        )
    }
}

export default Pokecard;