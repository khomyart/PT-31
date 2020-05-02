<template>
  <div class="page-cube">
    <div class="header">
      Cube
    </div>
    <div class="number">
      {{ $route.params.inputNumber }} ^ 3 = {{ Math.pow($route.params.inputNumber, 3) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageCube',
}
</script>

<style scoped>
  .page-cube {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 2px double green;
  }

  .header {
    color: green;
    margin: 10px 0px 40px;
  }

  .number {
    color: red;
  }
</style>
