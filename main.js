const app = Vue.createApp({
  template: "",
  data() {
    return {
      products: [
        {
          name: "Sản phẩm A",
          price: 120.0,
        },
        {
          name: "Sản phẩm B",
          price: 120.0,
        },
        {
          name: "Sản phẩm C",
          price: 120.0,
        },
      ],
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
