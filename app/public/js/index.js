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
    } //;
  },
  // Source: https://day.js.org/
  computed: {
    bday(){
      return dayjs(this.result.dob.date).format('DD/MM/YYYY')
    }
  },
  
  /*squigly with comma goes here*/
  methods: {
    // selectBook(b) {
    //   if (b == this.selectedBook) {
    //       return;
    //   }
    //   this.selectedBook = b;
    //   this.listbook = [];
    //   this.fetchBookData(this.selectedBook);
    // },
    postBook(evt) {
      if (this.selectedBook === null) {
          this.postNewBook(evt);
      } else {
          this.postEditBook(evt);
      }
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
      this.selectedBook = b;
      this.bookForm = this.selectedBook;
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
    postEditBook(evt) {
      this.bookForm.id = this.selectedBook.id; /*first book form may be wrongused to have StudentId*/
      //this.bookForm.id = this.selectedBook.id;

      console.log("Updating!", this.bookForm);

      fetch('api/student/update.php', {
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
          this.resetBookForm();
        });
    },
    selectBookToEdit(o) {
        this.selectedBook = o;
        this.bookForm = Object.assign({}, this.selectedBook);
    },
    resetBookForm() {
        this.selectedBook = null;
        this.bookForm = {};
    },
  postDeleteBook(o) {
    if (!confirm("Are you sure you want to delete the book from "+o.title+"?")) {
        return;
    }
    fetch('api/student/delete.php', {
        method:'POST',
        body: JSON.stringify(o),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.book = json;
        
        this.resetBookForm();
      });
  }
},
    created() {
      this.fetchBookData();
    }
  }




//Does my console work?
console.log("hi liz");
//mount app I created
Vue.createApp(someApp).mount("#SomeApp");


