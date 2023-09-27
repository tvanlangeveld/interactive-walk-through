console.log('its is working')


let count = 0

let minusButton = document.querySelector('#minus-btn')
let plusButton = document.querySelector('#plus-btn')
let resetButton = document.querySelector('#reset-btn')
let counterElments = document.getElementById('counter')
let buttons = document.querySelectorAll('.theme-buttons')


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

}

function changeTheme(event){

  let classString = event.target.innerHTML

  document.querySelector('body').className = classString
  document.querySelector('main').className = classString
  let allButtons = document.querySelectorAll('button')


  for(let i = 0; i < allButtons.length; i++){
    let currentButton = allButtons[i]
    currentButton.classList = classString
  }

}


minusButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)
plusButton.addEventListener('click', increase)



for(let i = 0; i < buttons.length; i++){
  let currentButton = buttons[i]

  currentButton.addEventListener('click', changeTheme)
}
