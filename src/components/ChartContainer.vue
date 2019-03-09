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
    props: {
        chartType: {
            type: String,
            default: null
            }
    },
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
                        beginAtZero: false,
                        callback: function(seconds) {
                            let minute = Math.floor(seconds / 60);
                            seconds = seconds % 60;
                            return ((minute < 10) ? "0"+minute : minute) + ":" + ((seconds < 10) ? "0"+seconds : seconds);
                        }
                    }
                }],
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    }),
    methods: {
        formatDataSets(entries) {
        let matchData = [];
        matchData = entries.map(entry => {
            let {label, interval, color} = entry;
           if (this.chartType === 'race') {
               interval.reduce(function(acc, current, i, arr) {
                    return (
                        arr[i] = acc + current
                        
                    )
               }, 0);

               interval = interval.map((curr, i) => {
                   const getMultiplier = i => {
                       if(i === 0) {
                            return 4;
                       } else if (i === 1) {
                           return 2;
                       } else if (i === 2) {
                           return 1.3333;
                       } else if (i === 3) {
                           return 1;
                       } 
                   };

                    const multi = getMultiplier(i)

                    return curr * multi;

                //    val = i * multiplier;
               })
           }
            return {
                label: label,
                data: interval,
                borderColor: color,
                fill: false,
                borderWidth: 1,
            };
        });

        this.chartData.datasets = matchData;
        }
    },
    async mounted () {
        this.loaded = false
        try {
            const {data: {labels, entries}} = await axios.get('http://localhost:5000/api/match')
            this.chartData.labels = labels
            this.formatDataSets(entries)
            this.loaded = true;
        } catch (e) {
            console.error(e)
        }
    },
}
</script>