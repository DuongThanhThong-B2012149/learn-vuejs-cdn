const app = Vue.createApp({
  template: "",
  data() {
    return {
      classTesting: "testClass",
      products: [
        {
          name: "Sản phẩm A",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
        },
        {
          name: "Sản phẩm B",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
        },
        {
          name: "Sản phẩm C",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
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
