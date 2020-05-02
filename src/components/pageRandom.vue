<template>
  <div class="page-random">
    <marquee class="header" behavior="scroll" direction="left">
      Random value
    </marquee>
    <div class="number">
      {{randomNumber}} ^ {{randomPowValue}} = {{ Math.pow(randomNumber, randomPowValue) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageRandom',
  computed: {
    randomNumber: function() {
      return 2 + Math.floor((10 - 2) * Math.random());
    },
    randomPowValue: function() {
      return 2 + Math.floor((7 - 2) * Math.random());
    }
  }
}
</script>

<style scoped>
  .page-random {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 2px dotted blue;
  }

  .header {
    color: blue;
    margin: 10px 0px 40px;
  }

  .number {
    color: black;
  }
</style>
