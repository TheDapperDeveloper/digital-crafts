import React from 'react'
import { DashboardLayout } from '../styled-components/DashboardStyle';

import Chart from './Chart';
import Table from './Table';

export default function Dashboard() {
    return (
        <DashboardLayout className="chart">
            <Chart/>
            <Table/>      
        </DashboardLayout>

    
    )
}
