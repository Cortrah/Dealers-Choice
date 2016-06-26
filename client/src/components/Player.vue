<template>
    <div class="player">
        <div class="name">
            {{ name }}
        </div>
        <img class="avatar" v-bind:src="avatar">
        <div class="bones">
            {{ bones }}
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        props: ['name', 'bones'],
        data () {
            return {
                'avatar': '/static/img/cav.1e55ea6.png',
            }
        }
    }

</script>

<style scoped>

    .player {
        display: inline-block;
        height: 150px;
        width: 150px;
        color: #333333;
        background-color: #EAEAEA;
        background-alpa: 100%;
    }

    .name {
        color: #315fa2;
        background-color: #EAEAEA;
    }

    .avatar {
        height: 100px;
        width: 80px;
        background-color: #F5F5F5;
    }

    .bones {
        color: #878a56;
        background-color: #EAEAEA;
    }
</style>
