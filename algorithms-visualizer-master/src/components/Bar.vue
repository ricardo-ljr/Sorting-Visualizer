<script>
const percentWidthToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.width / 100) * percent);
const percentHeightToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.height / 100) * percent);

export default {
  inject: ["provider"],

  props: {
    x1: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },
    x2: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    },

    value: {
      type: Number,
      default: 0
    },

    color: {
      type: String,
      default: "#72a8ff"
    },

    time: {
      type: Number,
      default: new Date().getTime()
    }
  },

  data() {
    return {
      oldBox: {
        x: null,
        y: null,
        w: null,
        h: null
      }
    };
  },

  computed: {
    calculatedBox() {
      const ctx = this.provider.context;
      const calculated = {
        x: percentWidthToPix(this.x1, ctx),
        y: percentHeightToPix(this.y1, ctx),
        w: percentWidthToPix(this.x2 - this.x1, ctx),
        h: percentHeightToPix(this.y2 - this.y1, ctx),
        time: this.time
      };

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.oldBox = calculated;
      return calculated;
    }
  },

  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;

    const oldBox = this.oldBox;

    const newBox = this.calculatedBox;

    ctx.beginPath();

    if (oldBox.w == newBox.w && oldBox.x == newBox.x) {
      ctx.clearRect(oldBox.x, oldBox.y - 2, oldBox.w, oldBox.h - 2);
    }

    ctx.rect(newBox.x + 1, newBox.y - 1, newBox.w - 2, newBox.h - 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    return null;
  }
};
</script>