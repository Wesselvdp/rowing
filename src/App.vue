<template>
  <div id="app">
    <b-container>
      <b-row>
         <b-col cols="6">
            <MatchRanking  />
         </b-col>
         <b-col cols="6">
            <ChartContainer chartType="average" />
         </b-col>
         <b-col cols="6">
            <ChartContainer chartType="race" />
         </b-col>
      </b-row>
      <b-row>
         <b-col cols="12">
            <List title="Athletes" v-bind:array="users" v-bind:type="'user'"/>
         </b-col>
         <b-col cols="12">
            <List title="Matches" v-bind:array="games" v-bind:type="'game'"/>
         </b-col>
      </b-row>
    </b-container>

    <Profile />
    <img alt="Vue logo" src="./assets/logo.png">
    
   
  </div>
</template>

<script>
import List from './components/List';
import Profile from './components/Profile';
import ChartContainer from './components/ChartContainer';
import MatchRanking from './components/MatchRanking';

// import axios from 'axios';

const data = require('./db/db.json');

export default {
  name: 'app',
  components: {
    List,
    Profile,
    MatchRanking,
    ChartContainer
  },
  data() {
    return {
      users: [],
      games: [],
      }
  },
  created() {
    const fillUsers = () => this.users = [...data.users];
    const fillGames = () => this.games = [...data.games];
    fillUsers();
    fillGames();

    // const getData = async () => {
    //   const dataPromise = await axios.get('https://raw.githubusercontent.com/Wesselvdp/jsonplaceholder/master/db.json');
    //   const data = await dataPromise.data;
     
    //   fillUsers();
    //   fillGames();
    // }
    // getData();
  },
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.chart__wrapper {
  /* position: relative;
  height: 200px;
  width: 50%; */
}
</style>
