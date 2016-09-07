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
                        class="pure-button pure-button-primary">
                    Sign in
                </button>
                <button @click="login()"
                        class="pure-button pure-button-primary">
                    Login
                </button>
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
                console.log('about to get root');
                // this.store.bus.$emit('login-event');
                this.$http.get('/hapi', {
                    username: 'cort@cortwinters.net',
                    password: 'Octofish#8'}).then(
                    (response) => {
                            console.log(response);
                            // alert('ok');
                            // this.store.login();
                    }, (response) => {
                        // error
                });
            },
            login: function () {
                console.log('trying to login');
                this.$http.post('/hapi/api/login', {
                    username: 'cort@cortwinters.net',
                    password: 'Octofish#8'}).then(
                    (response) => {
                        console.log(response);
                    }, (response) => {
                        console.log(response);
                    });
            }
        }
    }
</script>
