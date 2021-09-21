const someApp = {
  data() {
    return {
      result: {},
      list: [5, 6, 7, 8],
      message: "Waiting ...",
    };
  },
  // Source: https://day.js.org/
  computed: {
    bday(){
      return dayjs(this.result.dob.date).format('DD/MM/YYYY')
    }
  },


  created() {
    //Method 1:
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((parsedJson) => {
        this.result = parsedJson.results[0];
        console.log(this.result);
      })
      .catch((err) => 
        console.error(err)
      );
  }
  
}
//Does my console work?
console.log("hi liz");
//mount app I created
Vue.createApp(someApp).mount("#SomeApp");


