<template>
    <div id="stage">
        <h1>Log In</h1>
        <label>Username or email</label>
        <br/>
        <input id="userName" type="text"/>
        <br/>
        <label>Password</label>
        <br/>
        <input id="password" type="password"/>
        <br/>
        <br/>
        <button @click="enter()"> sign in </button> <a v-link="{ path: 'forgot' }">forgot your password?</a>
        <br/>
        <br/>
        or <a v-link="{ path: 'register' }">register</a>
        <br/>
        <br/>
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
            },
            enter: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.go('lobby')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
