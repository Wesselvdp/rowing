<template>
    <li class="game">
        <div class="text-center">
            <img class="game__img" alt="profile image" src="../assets/profile.jpg">
        </div>
        <div>
            <h2>
                {{item.name}}
            </h2>

        </div>
    </li>
</template>

<script>
export default {
    name: "Game",
    props: ["item"],
    computed: {
        // username: function () {
        // return `${this.item.firstName} ${this.item.lastName}`
        // }
    }
}
</script>

<style lang="scss">
    .game {
        box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.125);
        padding: 9px;
        background-color: white;
        margin-bottom: 6px;
        transition: all 0.3s ease;
        margin-top: 40px;
        margin-bottom: 3rem;

        &:hover {
            transform: translateY(-10px);
        }

        &__img {
            width: 80px;
            border-radius: 50%;
            margin: 0 auto;
            transform: translateY(-60%);
        }
    }
</style>