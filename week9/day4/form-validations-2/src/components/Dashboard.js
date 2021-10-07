import React from 'react'
import { DashboardLayout } from '../styled-components/DashboardStyle';

import Chart from './Chart';
import Table from './Table';

export default function Dashboard() {

    const data = [
        {
            workorder:"Mow the lawn",
            
            
        },
        {
            workorder:"Do the laundry",
            
        },
        {
            workorder:"Cook dinner",
            
        },
    ]
    
    const columns = [
        {
            Header: 'Work Orders',
            accessor: 'workorder'
        },
        {
            Header: 'Work Orders',
            accessor: 'order1'
        },
        {
            Header: 'Work Orders',
            accessor: 'order2'
        },
        {
            Header: 'Work Orders',
            accessor: 'order3'
        }
    ]
    return (
        <DashboardLayout className="chart">
            <Chart/>
            <Table data={data} columns={columns}/>      
        </DashboardLayout>

    
    )
}
