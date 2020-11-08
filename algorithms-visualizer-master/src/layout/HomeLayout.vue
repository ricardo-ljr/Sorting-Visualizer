<template>
  <div class="wrapper">
    <md-toolbar class="md-transparent">
      <span class="md-title">{{ title }} </span
      ><span class="small-txt"> - made with Vue Material</span>
      <div class="md-toolbar-section-end">
        <md-button class="md-accent" v-on:click="$router.push('how-to')"
          >How to</md-button
        >
        <md-button
          class="md-accent"
          v-on:click="$router.push('sorting-algorithms')"
          >Sorting Algorithms</md-button
        >
        <md-button
          class="md-accent"
          v-on:click="$router.push('pathfinding-algorithms')"
          >* Path Algorithms - In Progress, but give it a try *</md-button
        >
      </div>
    </md-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.md-content.md-theme-default {
  background-color: #fafafa;
}

.small-txt {
  font-size: 12px;
  margin-left: 20px;
  margin-top: 12px;
  margin-bottom: 8px;
}

.md-layout-item {
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
    content: " ";
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
}
.graph-wrapper {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
</style>
