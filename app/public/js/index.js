const someApp = {
  data() {
    return {
      result: {},
      book: [],
      selectedBook: null,
      listbook: [],
      list: [5, 6, 7, 8],
      message: "Waiting ...",
      bookForm: {},
      books: []
    };
  },
  // Source: https://day.js.org/
  computed: {
    bday(){
      return dayjs(this.result.dob.date).format('DD/MM/YYYY')
    }
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
    selectBook(b) {
      this.selectedBooks = b;
      this.bookForm = this.selectedBooks;
    },


    postNewBook(evt) {
      console.log("Posting:", this.bookForm);
      // alert("Posting!");

      fetch('api/student/create.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.book = json;
          
          // reset the form
          this.bookForm = {};
        });
    },

  },
  
    created() {
      this.fetchBookData();
    },
    
}



//Does my console work?
console.log("hi liz");
//mount app I created
Vue.createApp(someApp).mount("#SomeApp");


