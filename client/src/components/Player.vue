<template>
  <div class="player">
    <div class="name">
      {{ name }}
    </div>
    <img class="avatar" src="../assets/cav.png">
    <div class="bones">
      {{ bones }}
    </div>
  </div>
</template>

<script type="text/babel">

  export default {
    data () {
      return {
        name: 'Name',
        bones: 500
      }
    }
  }

</script>

<style scoped>

	.player {
    display: inline-flex;
    height: 150px;
    width: 150px;
	  color: #333333;
  	background-color: #EAEAEA;
  	background-alpa: 100%;
	}

  .name {
    color: #315fa2;
    background-color: #EAEAEA;
  }

	.avatar {
		height:100px;
		width:80px;
		background-color: #F5F5F5;
	}

  .bones {
    color: #878a56;
    background-color: #EAEAEA;
  }
</style>
