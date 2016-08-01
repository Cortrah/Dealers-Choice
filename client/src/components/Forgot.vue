<template>
    <div id="stage">
        <h1>{{ title }}</h1>
        <div v-if="sent">
            If an account matched that address, an email will be sent with instructions.
            <br/>
            <br/>
        </div>
        <div v-else>
            <label>What's your email?</label>
            <br/>
            <input id="userName" type="text"/>
            <br/>
            <br/>
            <button @click="reset()"> Send reset </button>
        </div>
        <a v-link="{ path: 'login' }">Back to login</a>
        <br/>
        <br/>

    </div>
</template>

<script type="text/babel">

    export default {
        props: ['store'],
        data () {
            return {
                sent: false,
                title: 'Forgot your password?'
            }
        },
        methods: {
            reset: function () {
                this.sent = true;
            }
        }
    }
</script>
