<template>
    <div id="stage">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <h1>{{ title }}</h1>

                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Email">

                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password">

                <label for="remember" class="pure-checkbox">
                    <input id="remember" type="checkbox"> Remember me
                </label>
                <br/>

                <button @click="enter()"
                        class="pure-button pure-button-primary"> Sign in </button>
                <a v-link="{ path: 'forgot' }">forgot your password?</a>

            </fieldset>
        </form>

    </div>
</template>

<script type="text/babel">

    export default {
        name: 'Login',
        props: ['store'],
        data () {
            return {
                title: 'Sign In'
            }
        },
        methods: {
            enter: function () {
                // this.$children;
                this.store.login();
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.go('lobby')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
