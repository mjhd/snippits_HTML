window.addEventListener("load", function(){
  const header = {
    'Accept': 'application/json',
    'Authorization': 'Bearer GRFzIeeQkGJ7qVOgPN0E'
  }
  fetch("https://the-one-api.dev/v2/book", { headers: header })
    .then((response) => response.json())
    .then(data => {
      //console.log(data)
      //console.log(data.docs)
      //console.log(typeof(data.docs))
      /*for(let book of data.docs)
        console.log(book)*/
      let output = document.getElementById("output").querySelector("tbody")
      for(let book of data.docs){
        let row = document.createElement("tr")
        let book_id = document.createElement("td")
        let book_name = document.createElement("td")
        book_id.innerHTML = book._id
        book_name.innerHTML = book.name
        row.append(book_id)
        row.append(book_name)
        output.append(row)
      }
    })
    .catch(error => {
      console.log("You messed up: " + error)
    })
})