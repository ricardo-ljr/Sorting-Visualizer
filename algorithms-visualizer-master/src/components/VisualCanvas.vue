<template>
  <div class="visual-canvas-wrapper flex flex-auto">
    <canvas ref="visual-canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VisualCanvas",
  props: {
    data: null
  },
  watch: {
    data: function() {
      this.provider.context.clearRect(
        0,
        0,
        this.$refs["visual-canvas"].width,
        this.$refs["visual-canvas"].height
      );
    }
  },
  data() {
    return {
      provider: {
        context: null
      }
    };
  },

  provide() {
    return {
      provider: this.provider
    };
  },

  mounted() {
    this.provider.context = this.$refs["visual-canvas"].getContext("2d");
    this.provider.context.clearRect(
      0,
      0,
      this.$refs["visual-canvas"].width,
      this.$refs["visual-canvas"].height
    );

    this.$refs["visual-canvas"].width = this.$refs[
      "visual-canvas"
    ].parentElement.clientWidth;
    this.$refs["visual-canvas"].height = this.$refs[
      "visual-canvas"
    ].parentElement.clientHeight;
  }
};
</script>


<style scoped>
</style>
