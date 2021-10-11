import React from 'react'
import { ChartBorder } from '../styled-components/ChartStyle'
import Plot from 'react-plotly.js'
import { useSelector } from 'react-redux';


export default function Chart() {

    // const exoticCars = {
    //     x: ['Lamborghini', 'Rolls Royce', 'Aston Martin'],
    //     y: [20, 14, 23],
    //     name: 'Exotic Cars',
    //     type: 'bar', 
    //     marker: {
    //         color: 'rgb(255,95,120)'
    //     }
    //   };
      
    //  const luxuryWatches = {
    //     x: ['Audemars Piquet', 'Patek Phillipe', 'Hublot'],
    //     y: [12, 18, 29],
    //     name: 'Luxury Watches',
    //     type: 'bar',
    //     marker: {
    //         color: 'rgb(59,24,140)'
    //     }
    //   };

    const cars = useSelector ((state) => state.GraphData.exoticCars)
    const watches = useSelector((state) => state.GraphData.luxuryWatches)

    const data = [cars, watches];

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
