const app = Vue.createApp({
  data() {
    return {
      title: "ホーム",
      text: "",
      list: []
    };
  },
  methods: {
    store() {
        this.list.push({text: this.text, preText: this.text, good: 0})
        this.text = ''
    },
    update(index){
      this.list[index].text = this.list[index].preText
      document.getElementById("exampleModal" + index).click();
    },
    deleteText(index){
      this.list.splice(index, 1);
    },
    good(index){
      console.log(this.list[index].good)
      this.list[index].good++
    }
  },
});

app.mount("#app");
