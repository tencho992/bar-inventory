var plusOne = document.getElementsByClassName("fa-check");
var minusOne = document.getElementsByClassName("fa-thumbs-down");

var trash = document.getElementsByClassName("fa-trash");

Array.from(plusOne).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const quantity = this.parentNode.parentNode.childNodes[3].innerText
        const inputValue = parseFloat(this.parentNode.parentNode.childNodes[5].value)
        console.log(inputValue)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'quantity': quantity,
            'newQuantity':inputValue
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(minusOne).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const quantity = this.parentNode.parentNode.childNodes[3].innerText
    const minusOne = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    // const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)

    fetch('messages/minusOne', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'quantity': quantity,
        'plusOne': plusOne
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const quantity = this.parentNode.parentNode.childNodes[3].innerText
         fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'quantity': quantity,
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
