<template>
  <div class="wrapper">
    <h1>First, pick the algorithm you'd like to visualize</h1>
    <img src="../assets/images/pick-algo.png" />
    <h1>Second, select the size of the data you'd like to visualize</h1>
    <img src="../assets/images/data-size.png" class="img-controller" />
    <h1>Third, click "Sort" and watch your algorithm of choice do the magic</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
}

.wrapper h1 {
  text-align: center;
  margin: 45px 0;
}

.img-controller {
  width: 30%;
  text-align: center;
  margin: 0 auto;
}
</style>
