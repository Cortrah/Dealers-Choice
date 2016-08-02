<template>
    <div id="stage">
        <h1>{{ title }}</h1>
            <div>
                <label>First Name</label>
                <input id="firstName" type="text" placeholder="First Name"/>

                <label>Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name"/>
                <br/>

                <label>Email</label>
                <input id="email" type="text" placeholder="Email"/>
                <br/>

                <label>Username</label>
                <input id="userName" v-model="userName"
                       type="text"/>

                <label>Password</label>
                <input id="password" type="password" placeholder="Password"/>
            </div>
            <br/>
            <button @click="createAccount()"> Create my account </button>
            <br/>
            <br/>
    </div>
</template>

<script type="text/babel">

    export default {
        data () {
            return {
                userName: '',
                title: 'Register'
            }
        },
        methods: {
            createAccount: function () {
                // this.$children;
                this.store.login();
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.go('profile')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
