<template>
    <div class="player">
        <div class="name">
            <span v-show="dealer">
                Dealer
            </span>
            {{ name }} : {{ betting }}
        </div>
        <img class="avatar" :src="avatar">
        <div class="bones">
            {{ bones }}
        </div>
        <button @click='check()'>check</button>
        <button @click='call()'>call</button>
        <button @click='fold()'>fold</button>
        <input class="betInput" v-model='betAmmount' v-on:keyup.enter='bet'>
        <button @click='bet()'>bet</button>
        <button @click='raise()'>raise</button>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'Player',
        props: ['name', 'bones', 'betting', 'dealer'],
        betAmmount: 0,
        methods: {
            check: function () {
                this.$dispatch('check', this.name);
            },
            bet: function () {
                this.betting = this.betAmmount;
                this.$dispatch('bet', this.name, this.betAmmount);
                this.betAmmount = '';
            },
            call: function () {
                this.betting = this.betAmmount;
                this.$dispatch('call', this.name, this.betAmmount);
                this.betAmmount = '';
            },
            raise: function () {
                this.betting = this.betAmmount;
                this.$dispatch('raise', this.name, this.betAmmount);
                this.betAmmount = '';
            },
            fold: function () {
                this.betting = this.betAmmount;
                this.$dispatch('fold', this.name);
                this.betAmmount = '';
            }
        },
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
        height: 200px;
        width: 150px;
        margin: 5px;
        padding: 5px;
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
        padding: 5px;
        background-color: #F5F5F5;
    }

    .bones {
        color: #878a56;
        background-color: #EAEAEA;
    }

    .betInput {
        width: 40px;
        margin: 5px;
        color: #315fa2;
        background-color: #EAEAEA;
    }
</style>
