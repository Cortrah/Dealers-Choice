<template>
    <div id="stage">
        <h1>{{ title }}</h1>
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

    export default {
        props: ['store'],
        data () {
            return {
                title: 'Log In'
            }
        },
        methods: {
            enter: function () {
                // this.$children;
                this.store.login();
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
