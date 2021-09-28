import React, { Component } from 'react'

export default class Cards extends Component {
    state = {
        flipped: false,
    }

    flipPic = () => {
        this.setState({
        flipped: !this.state.flipped
    });
    }

    deletePoke = (id) => {
        const newData = this.props.pokemon.filter(i => i.id !== id)
        this.setState({pokemon: newData})

    }

    render() {
        const { flipped } = this.state;
        const { name, hp, sprites} = this.props.pokemon;
        
        return (
            <div className="cards">
                <img src={flipped ? sprites.back : sprites.front} />
                <p>{name}</p>
                <p>HP: {hp}</p>
                <button onClick={this.flipPic}>Flip</button>
                {this.props.pokemon.map((item, id) => (<button onClick={() => this.deletePoke(id)}>Delete</button>))}   
            </div>
        )
    }
}
