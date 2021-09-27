import React, { Component } from 'react'

export default class MyProfile extends Component {

    state = {
        firstName: "Brande",
        lastName: "Gilbert",
        city: "Atlanta",
        profilePic: "mypic.jpeg"
    }

    newPlace = () => {
        this.setState({city: this.state.city = "Bora Bora"})
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p>{this.state.city}</p>
                <img src={this.state.profilePic} height="400px" width="300px"></img>
                <button onClick={() => this.newPlace()}>Change The City</button>
            </div>
        )
    }
}
