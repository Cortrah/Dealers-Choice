<template>
    <div id="stage">
        <p>
            go to the <a v-link="{ path: '/' }">splash page</a>
        </p>
        <p>
            or <a v-link="{ path: 'register' }">register</a>
        </p>
        <p>
            go to the <a v-link="{ path: 'tabletop' }">tabletop</a>
        </p>
        <p>
            go to the <a v-link="{ path: 'lobby' }">lobby</a>
        </p>
        <p>
            edit your <a v-link="{ path: 'profile' }">profile</a>
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
