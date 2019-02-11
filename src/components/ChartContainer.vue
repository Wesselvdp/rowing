<template>
    <div>
        <div>
            <LineChart :chartdata="chartData" :options="options"/>
        </div>

    </div>
</template>

<script>
import LineChart from './LineChart';
const game = require('../assets/match.json');

export default {
    name: 'ChartContainer',
    components: { LineChart },
    data: () => ({
        chartData: {
            labels: game.labels,
            datasets: [
                {
                    label: "Skadi",
                    data: [90, 93, 94, 89],
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: '#5252e4',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value) {
                            return +  ((Math.floor(value / 60) + 100) + (value % 60)) / 100;
                        }
                    },
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: {
                        display: true
                    }
                }],
            },
            legend: {
                display: true
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }),
   computed: {
        matchEntries: () => ({
            game.entries.map(entry => ({
                label: `${entry.label}`,
                data: entry.interval,
                fill: false,
                borderColor: '#5252e4',
                borderWidth: 1
            }))
        })
    }
}
</script>