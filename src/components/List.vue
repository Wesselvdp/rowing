<template>
    <div>
        <h1>
            {{title}}
        </h1>
         <ul v-if="type == 'user'">
            <User v-bind:key="user.id" v-bind:item="user" v-for="user in array" />
        </ul>
         <ul v-if="type == 'game'">
            <Game v-bind:key="game.id" v-bind:item="game" v-for="game in array" />
        </ul>
    </div>
</template>

<script>
import User from './User.vue';
import Game from './Game.vue';

export default {
    name: 'List',
    props: {
        array: Array,
        title: String,
        type: String
    },
    components: {
        User,
        Game,
    },
}
</script>

<style lang="scss">
    ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 4rem;
    }
</style>