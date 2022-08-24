const app = Vue.createApp({
  template:
    "<h1>Hello from {{teamName}} and {{`${firstName} ${lastName}`}}</h1><p>{{isHello ? 'Chao ': '' }}</p><button v-on:click='isHello = true'>Hello</button><button @click='onChangeTeamName'>Change team name</button><button @click='onChangeName'>Change name but shorter</button><button @click='onToggleModal'>Toggle Modal</button><div class='modal' v-if='isShowModal'>  <h1>Modal</h1></div>",
  data() {
    return {
      teamName: "RHP team",
      firstName: "Duong",
      lastName: "Thong",
      isHello: false,
      isShowModal: true,
    };
  },
  methods: {
    onChangeTeamName(e) {
      this.teamName = "Herocode dev";
    },
    onChangeName(e) {
      this.firstName = "Herocode";
      this.lastName = "dev";
    },
    onToggleModal(e) {
      this.isShowModal = !this.isShowModal;
    },
  },
});
app.mount("#contact");
