<template>
    <div>
        <b-card @hover="hovering" :key="race.id" :race="race" v-for="race in races">
            {{race.label}}
        </b-card>      
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MatchRanking',
    props: {
        matchData: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            loaded: false,
            entries: {},
            races: {}
        }
    },
    methods: {
        rankRaces(races) {
            let newArray = [];
            newArray = races.map(race => {
                race.time = race.interval.reduce((total, amount) => total + amount);
                return race;
            });
            newArray.sort((a, b) => a.time - b.time);
            this.races = newArray
        },
        hovering(e) {
            console.alert('hovering!');
        }
    },
    // created() {
    //     this.races = entries.map(race => {
    //         race.time = race.interval.reduce((total, amount) => total + amount);

    //     return race;
    //     });
    //     this.races.sort((a, b) => a.time - b.time);

    // }
 
    async mounted () {
        this.loaded = false
        try {
            const {data: {entries: races}} = await axios.get('http://localhost:5000/api/match')
            this.entries = races
            this.rankRaces(races);
            this.loaded = true;
        } catch (e) {
            console.error(e)
        }
    }
}
</script>