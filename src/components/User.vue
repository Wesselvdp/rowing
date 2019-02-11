<template>
    <li class="user">
        <div>
            <img class="user__img" alt="profile image" src="../assets/profile.jpg">
        </div>
        <div>
            <p>
                {{username}}
            </p>
            <p>
                {{item.club}}
            </p>
        </div>
    </li>
</template>

<script>
export default {
    name: "User",
    props: ["item"],
    computed: {
        username: function () {
        return `${this.item.firstName} ${this.item.lastName}`
        }
    }
}
</script>

<style lang="scss">
    .user {
        display: flex;
        box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.125);
        padding: 9px;
        background-color: white;
        margin-bottom: 6px;
        border-top-left-radius: 43px;
        border-bottom-left-radius: 43px;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.0125);
        }

        &__img {
            width: 80px;
            border-radius: 50%;
            margin: -4px 15px -5px 0;
        }
    }
</style>