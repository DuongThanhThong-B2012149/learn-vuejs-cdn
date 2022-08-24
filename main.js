const app = Vue.createApp({
  template: "",
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    onLogEvent(event) {
      console.log("Running event...", event);
    },
    onLogEventWithParams(event, a, b) {
      console.log(a, b);
    },
    onMouseMoveEvent(event) {
      console.log("Running mouse move event...", event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
app.mount("#contact");
