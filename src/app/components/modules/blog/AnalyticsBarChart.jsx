
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/system';


const xData = [...Array(30).keys()]


export default function AnalyticsBarChart({ none, blogViews, state, cont2 }) {
    const None = none;
    const BlogViews = blogViews;


    const series = [
        { data: None, label: 'None', id: 'None', stack: 'total', color: '#E3E8EF' },
        { data: BlogViews, label: 'BlogViews', id: 'BlogViews', stack: 'total', color: '#3195EF' },

    ];

    return (
        <BarChart
            sx={{ display: state == cont2 ? 'block' : 'none' }}
            height={400}
            width={1000}
            series={series}
            xAxis={[{ data: xData }]}
            yAxis={[{ max: 25 }]}
            grid={{ horizontal: true }}
            slotProps={{
                legend: {
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    direction: 'row',
                },
            }}
        />
    );
}

