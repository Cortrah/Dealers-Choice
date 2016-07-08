<template>
    <div id="stage">
        <img class="logo" src="../assets/cav.png">
        <div class="splash">
            <h1>{{ msg }}</h1>{{ count }}
        </div>
        <button @click="toggleGogo">Toggle</button>
        <p id="gogo" v-show="displayGogo" class='animated' transition="flipy">
            A simple poker game
        </p>
        <div v-if="!loggedIn">
            <p>
                please feel free to either <a v-link="{ path: 'register' }">register</a>
            </p>
            <p>
                or <a v-link="{ path: 'login' }">signin</a>
            </p>
        </div>
        <div v-else>
            <p>
                go to the <a v-link="{ path: 'lobby' }">lobby</a>
            </p>
            <p>
                go to the <a v-link="{ path: 'logout' }">sign out</a>
            </p>
        </div>
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
                loggedIn: false,
                displayGogo: true,
                msg: 'Casual Card Table'
            }
        },
        vuex: {
            getters: {
                count: state => state.count
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
