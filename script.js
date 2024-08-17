// let inputMain = document.querySelector('.input')
// function makeDelInput(event){
//   console.log(event.target.value)
// }
// let throttleInput = _.throttle(makeDelInput, 2000)
// inputMain.addEventListener('input', throttleInput)

//DEBOUNCE
// let inputMain = document.querySelector('.input')
// function makeDelInput(event){
//   console.log(event.target.value)
// }
// let debounceInput = _.debounce(makeDelInput, 2000)
// inputMain.addEventListener('input', debounceInput)

// MOUSE DEBOUNCE

// function showRandomNumb(event){
//   console.log(event.target)
// }
// let debounceMouse = _.debounce(showRandomNumb, 1000)
// window.addEventListener('mousemove', debounceMouse)

// GET NAME

// let input = document.querySelector('.input')
// let text = document.getElementById('text__change')
// function getInputText(event){
//   text.textContent = `Вітаємо ${event.target.value}`
// }
// let debounceText = _.debounce(getInputText, 2000)
// input.addEventListener('input', debounceText)

// RANDOM COORDINATES


// function moveOfMouse(event){
//   let circle = document.getElementById('point')
//   let span = document.getElementById('coord')

//   let x = event.offsetX
//   let y = event.offsetY
//   circle.setAttribute('cx', x)
//   circle.setAttribute('cy', y)
//   span.textContent = `x: ${x}; y: ${y}`
// }
// let box = document.getElementById('graph')
// let throttle = _.throttle(moveOfMouse, 100)
// box.addEventListener('mousemove', throttle)

//SLIDER

// let sliderBox = document.querySelector('.slider')
// let sliderInput = document.querySelector('.slider__input')

// function changeSliderSize(event){
//   let inputValue = event.target.value
//   let sliderImage = document.querySelector('.slider__image')
//   let newWidth = inputValue + "%"
//   sliderImage.style.width = newWidth
// }
// let debounceSlider = _.debounce(changeSliderSize, 1)
// sliderInput.addEventListener('input', debounceSlider)

// BOX MOVE

let boxRed = document.getElementById('box')
function moveTheBox(event){
  boxRed.style.position = "absolute"
  let x = event.clientX;
  let y = event.clientY;
  boxRed.style.top = `${y}px`;
  boxRed.style.left = `${x}px`;
}
let debounceBox = _.debounce(moveTheBox, 10)
document.addEventListener('mousemove', debounceBox)

