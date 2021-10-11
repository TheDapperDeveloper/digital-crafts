import React from 'react'
import { ChartBorder } from '../styled-components/ChartStyle'
import Plot from 'react-plotly.js'
import { useSelector } from 'react-redux';


export default function Chart() {

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
