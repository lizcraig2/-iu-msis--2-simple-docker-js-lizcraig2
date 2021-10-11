const someApp = {
  data() {
    return {
      result: {},
      book: [],
      selectedBook: null,
      listbook: [],
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
  },
  
  /*squigly with comma goes here*/
  methods: {
    selectBook(b) {
      if (b == this.selectedBook) {
          return;
      }
      this.selectedBook = b;
      this.listbook = [];
      this.fetchBookData(this.selectedBook);
    },

    fetchBookData() {
      fetch('/api/student/')
        .then( response => response.json() )
        .then( (responseJson) => {
          console.log(responseJson);
          this.book = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },
      /*
    fetchBookData(b) {
      console.log("Fetching offer data for ", b);
      fetch('/api/student/?book=' + b.id)
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            this.book = responseJson;
        })
        .catch( (err) => {
            console.error(err);
        })
        .catch( (error) => {
            console.error(error);
        });
    }*/
  },
    created() {
      this.fetchBookData();
    },
    postNewBook(evt) {
      this.bookForm.id = this.selectedBook.id;
      console.log("Posting", this.bookForm);
      alert("Posting")

    },
}



//Does my console work?
console.log("hi liz");
//mount app I created
Vue.createApp(someApp).mount("#SomeApp");


