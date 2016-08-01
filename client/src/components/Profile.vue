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
                   type="text" placeholder="Mina"/>

            <label>Password</label>
            <input id="password" type="password" placeholder="Password"/>
        </div>
        <br/>

        <div>
            <p>Select a Puppy</p>
            <img class="avatar" src="../assets/cav.png">
            <select v-model="puppyPicture">
                <option selected>Cavalier</option>
                <option>Pug</option>
                <option>Boston Terrier</option>
                <option>Neufi</option>
                <option>Border Collie</option>
                <option>Mini Schnauser</option>
                <option>Lab Mix</option>
            </select>
            <br/>
            <br/>

            <div>
                <label for="checkbox" >
                    <input id="checkbox" type="checkbox" v-model="botChecked">
                    Or use a Bot
                </label>
            </div>
            <div v-if="botChecked">
                <br/>
                <img class="avatar" src="../assets/cav.png">
                <select v-model="botPicture">
                    <option selected>Protobot</option>
                    <option>Nodebot</option>
                    <option>Streambot</option>
                    <option>Grammarbot</option>
                    <option>Lambdabot</option>
                    <option>Eventbot</option>
                    <option>nullbot</option>
                </select>
                <br/>
                <br/>
                <label>Ip Address</label>
                <input id="ipAddress" type="text" placeholder="https://123.122.1.2"/>

                <label>Port</label>
                <input id="port" type="text" placeholder=":8080"/>
            </div>
        </div>
        <br/>
        And go to the <a v-link="{ path: '/lobby' }">Lobby</a>
    </div>
</template>

<script type="text/babel">

    export default {
        props: ['store'],
        data () {
            return {
                displayGogo: true,
                puppyPicture: 'Cavalier',
                userName: 'Mina',
                botChecked: false,
                title: 'Profile'
            }
        },
        methods: {
            toggleGogo: function (amt) {
                this.displayGogo = !this.displayGogo;
            },
            createAccount: function () {
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
<style>
    .avatar {
        width: 75px;
        height: 90px
    }
</style>
