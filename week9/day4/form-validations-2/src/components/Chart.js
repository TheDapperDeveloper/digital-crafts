import React from 'react'
import { ChartBorder } from '../styled-components/ChartStyle'
import Plot from 'react-plotly.js'

export default function Chart() {

    const exoticCars = {
        x: ['Lamborghini', 'Rolls Royce', 'Aston Martin'],
        y: [20, 14, 23],
        name: 'Exotic Cars',
        type: 'bar'
      };
      
     const luxuryWatches = {
        x: ['Audemars Piquet', 'Patek Phillipe', 'Hublot'],
        y: [12, 18, 29],
        name: 'Luxury Watches',
        type: 'bar'
      };

      const data = [exoticCars, luxuryWatches];

      const layout = {barmode: 'group'};

    return (
        <ChartBorder>
            <Plot data={data}
            layout={{title: "Brande's Car and Watch Inventory"}}
            look={layout}
            />
            
        </ChartBorder>
    )
}
