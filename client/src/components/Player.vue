<template>
  <div class="player">
    <p>{{ name }}</p>
    <img class="avatar" src="../assets/cav.png">
    <p>{{ stacks }}</p>
  </div>
</template>

<script type="text/babel">
	export default {
	  data () {
	    return {
	      name: 'Name',
	      stacks: 20000
	    }
	  }
	}
</script>

<style scoped>

	.player {
	  color: #333333;
  	background-color: #EAEAEA;
  	background-alpa: 100%;
	}

	.avatar {
		height:125px;
		width:101px;
		background-color: #F5F5F5;
	}
</style>
