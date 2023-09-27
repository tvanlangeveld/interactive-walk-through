console.log('its is working')


let count = 0

let minusButton = document.querySelector('#minus-btn')
let plusButton = document.querySelector('#plus-btn')
let resetButton = document.querySelector('#reset-btn')
let counterElments = document.getElementById('counter')


function increase(){
  count++
  counterElments.innerHTML = count
}

function decrease() {
  count --
  counterElments.innerHTML = count

}

function reset(){
  count = 0
  counterElments.innerHTML = count

}


minusButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)
plusButton.addEventListener('click', increase)