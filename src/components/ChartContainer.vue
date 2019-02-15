<template>
    <div>
        <div>
            <LineChart
            v-if="loaded"
            :chartData="chartData"
            :options="options"/>
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart';
import axios from 'axios';

export default {
    name: 'ChartContainer',
    components: { LineChart },
    data: () => ({
        loaded: false,
        chartData: {
            labels: null,
            datasets: null
        },
       options: {
           scales: {
            yAxes: [{
                    ticks: {
                        beginAtZero:false
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0
        }
    }),
    methods: {
        dataz: function(entries) {
            let matchData = [];
            matchData = entries.map(entry => {
                return {
                    label: entry.label,
                    data: entry.interval,
                    borderColor: entry.color
                };
            });

            this.chartData.datasets = matchData;
        },
    },
    async mounted () {
        this.loaded = false
        try {
            const match = await axios.get('https://raw.githubusercontent.com/Wesselvdp/rowing/master/src/db/match.json')
            // this.chartData = match.data
            // this.datasets = match.entries
            this.chartData.labels = match.data.labels
            this.dataz(match.data.entries)

            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    },
}
</script>