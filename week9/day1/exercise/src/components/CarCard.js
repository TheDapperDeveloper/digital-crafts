
import React, { Component } from 'react'
import './CarCard.css';

export default class CarCard extends Component {
     state = { Bugatti:{
        make: "Bugatti",
        model: "La voiture noire",
        engine: "v16",
        horsepower: "1500",
        price: "19000000",
        image: [
          {
            primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
            secondary:
              "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
          },
        ],
        transmission: "7 speed dual clutch",
        topSpeed: [{ US: "261", Metric: "420" }],
        changeImage: true,
        },
        carImage: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"
      };
      
      ChangePhoto = () => {
          let photo = this.state.changeImage 
          ? this.state.Bugatti.image[0].primary 
          : this.state.Bugatti.image[0].secondary;

          this.setState({carImage: photo, changeImage: !this.state.changeImage})
      }
   

    render() {

        return (
            <div className="card-container">
                <div className="cards">
                <h2>{this.state.Bugatti.make}</h2>
                <h3>{this.state.Bugatti.model}</h3>
                <h4>{this.state.Bugatti.engine}</h4>
                <h4>{this.state.Bugatti.horsepower}</h4>
                <h4>{this.state.Bugatti.price}</h4>
                <img height="400px" width="500px" src={this.state.carImage}></img>
                <h4>{this.state.Bugatti.transmission}</h4>
                <h4>{this.state.Bugatti.topSpeed[0].US}</h4>
                <button onClick={() => this.ChangePhoto()}>Change the Photo</button>
                </div>
            </div>   
        )
    }
}
