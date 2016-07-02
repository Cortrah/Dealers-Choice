<template>
    <div id="stage">
        <img class="logo" src="../assets/cav.png">
        <div class="splash">
            <h1>{{ msg }}</h1>
        </div>
        <button @click="toggleGogo">Toggle</button>
        <p id="gogo" v-show="displayGogo" class='animated' transition="flipy">
            A simple poker game
        </p>
        <p>
            go to the <a v-link="{ path: 'tabletop' }">tabletop</a>
        </p>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue'

    Vue.transition('flipy', {
       enterClass: 'flipInX',
       leaveClass: 'flipOutX'
    });

    export default {
        data () {
            return {
                displayGogo: true,
                msg: 'Casual Card Table'
            }
        },
        methods: {
            toggleGogo: function (amt) {
                this.displayGogo = !this.displayGogo;
            }
        }
    }
</script>

<style>
    .logo {
        width: 151px;
        height: 185px
    }
</style>
