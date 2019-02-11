<template>
  <div id="app">
    <b-container>
      <b-row>
         <b-col cols="12">
            <ChartContainer />
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

// import axios from 'axios';

const data = require('./assets/db.json');

export default {
  name: 'app',
  components: {
    List,
    Profile,
    ChartContainer
  },
  data() {
    return {
      users: [],
      games: [],
      }
  },
  methods: {
    sortUsers() {
      let users = this.users
    
      users.sort((a, b) => {
        return b.time - a.time;
      })
    },
    // secondsToMinutes(seconds) {
    //   var minute = Math.floor(seconds / 60);
    //   seconds = seconds % 60;
    //   return ((minute < 10) ? "0"+minute : minute) + ":" + ((seconds < 10) ? "0"+seconds : seconds);
    // }
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
  }
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
