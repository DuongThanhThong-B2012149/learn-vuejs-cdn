const app = Vue.createApp({
  template: "",
  data() {
    return {
      classTesting: "testClass",
      products: [
        {
          id: 1,
          name: "Sản phẩm A",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
          isActive: false,
        },
        {
          id: 2,
          name: "Sản phẩm B",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
          isActive: false,
        },
        {
          id: 3,
          name: "Sản phẩm C",
          price: 120.0,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
          isActive: true,
        },
      ],
    };
  },
  methods: {
    onToggleCard(event, id) {
      this.products = this.products.map((product, index) => {
        if (product.id === id) product.isActive = !product.isActive;
        return product;
      });
    },
  },
});
app.mount("#contact");
