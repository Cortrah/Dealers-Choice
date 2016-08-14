<template>
    <div id="chat">
        <h2>Players</h2>
        <ul id="playerList">
            <li v-for="player in players">
                {{ player.name }}
            </li>
        </ul>
        <h2>Discussion</h2>
        <textarea v-model="discussion" placeholder="discussion"></textarea>
        <br/>
        <input type="text" v-model="message" placeholder="my message">
        <br/>
        <br/>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'chat',
        props: ['store'],
        data () {
            return {
                discussion: '',
                message: '',
                players: this.store.players
            }
        }
    }
</script>

