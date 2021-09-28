import React, { Component } from 'react'

export default class Cards extends Component {


    render() {
        return (
            <div className="cards">
                {this.props.details.data[0].pokemon.map((poke, index) => (<h1>{poke.name}</h1>))}
                <img src={this.props.details.data[0].pokemon[0].sprites.front}></img>
                

                {/* {this.props.details.data[0].pokemon[0].sprites.front.map((poke, index) => (<img src={this.poke.front}></img>))} */}
               
            
                
            </div>
        )
    }
}
