const someApp = {
  data() {
    return {
      result: {},
      list: [5, 6, 7, 8],
      message: "Waiting ...",
    };
  },
  computed: {
    bday(){
      return dayjs(this.result.dob.date).format('DD/MM/YYYY')
    }
  },

  // computed: {
  //     prettyBirthday() {
  //         return.this
  //     }

  // },
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

console.log("hi liz");

Vue.createApp(someApp).mount("#SomeApp");

/*  const btn = document.getElementById("btn");
        btn.addEventListener("click", function() {
        getPerson(getData);
        }); 

        function getData(response, callback) {
            const data = JSON.parse(response);
          
        const {
            name: { first },
            name: { last },
            picture: { large },
            location: { street },
            phone,
            email
          } = data.results[0];
        
          callback(first, last, large, street, phone, email);
        }
        function showData(first, last, large, street, phone, email) {
          document.getElementById("first").textContent = first;
          document.getElementById("last").textContent = last;
          document.getElementById("street").textContent = street;
          document.getElementById("phone").textContent = phone;
          document.getElementById("email").textContent = email;
          document.getElementById("photo").src = large;
        }
        */
