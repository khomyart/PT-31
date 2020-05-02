<template>
  <div class="page-square">
    <div class="header">
      Square
    </div>
    <div class="number">
      {{ $route.params.inputNumber }} ^ 2 = {{ Math.pow($route.params.inputNumber, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageSquare',
}
</script>

<style scoped>
  .page-square {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 2px solid red;
  }

  .header {
    color: red;
    margin: 10px 0px 40px;
  }

  .number {
    color: blue;
  }
</style>
