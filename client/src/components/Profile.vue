<template>
    <div id="stage">
        <h1>{{ title }}</h1>
        <div>
            <label>Email</label>
            <br/>
            <input id="email" type="text" placeholder="Email"/>
            <br/>

            <label>Password</label>
            <br/>
            <input id="password" type="password" placeholder="Password"/>
            <br/>
            <br/>
            And go to the <a v-link="{ path: '/lobby' }">Lobby</a>
        </div>
        <br/>

        <div>
            <label>Username</label>
            <br/>
            <input id="userName" v-model="userName"
                   type="text" placeholder="Mina"/>

            <p>Select a Puppy</p>
            <div>
                <label for="checkbox" >
                    <input id="checkbox" type="checkbox" v-model="botChecked">
                    Or use a Bot
                </label>
            </div>

             <div v-if="botChecked">
                 <br/>
                 <img class="avatar" src="../assets/cav.png">
                 <br/>
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
                 <br/>
                 <label>Port</label>
                 <input id="port" type="text" placeholder=":8080"/>
                 <br/>
                 <br/>
             </div>
             <div v-else>
                <img class="avatar" src="../assets/cav.png">
                <br/>
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
             </div>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'Profile',
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
