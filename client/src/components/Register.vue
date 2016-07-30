<template>
    <div id="stage">
        <p>
            back to the <a v-link="{ path: '/' }">splash page</a> or <a v-link="{ path: 'login' }">login</a>
        </p>

        <h1>Register</h1>
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
            <div>
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

                <div>
                    <label for="checkbox" >
                        <input id="checkbox" type="checkbox" v-model="botChecked">
                        Use a Bot
                    </label>
                </div>

                <div v-if="botChecked">
                    <label>Ip Address</label>
                    <input id="ipAddress" type="text" placeholder="https://123.122.1.2"/>

                    <label>Port</label>
                    <input id="port" type="text" placeholder=":8080"/>
                </div>
            </div>
            <button @click="create()"> Create my account </button>
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
                puppyPicture: 'Cavalier',
                userName: 'Mina',
                botChecked: false,
                msg: 'Casual Card Table'
            }
        },
        methods: {
            toggleGogo: function (amt) {
                this.displayGogo = !this.displayGogo;
            },
            create: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.goLobby});
            },
            goLobby: function () {
                this.$route.router.go('/lobby');
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
