// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  var hoverElements = [
    {id: 'one', enter: makeBlue, leave: makeWhite},
    {id: 'two', enter: makeGreen, leave: makeWhite},
    {id: 'three', enter: makeOrange, leave: makeWhite}
  ]
  hoverElements.forEach(addHovers)
  
  var clickElements = [
    {id: 'four', click: purpleToggle}
  ]
  clickElements.forEach(addClicks)
}

function addHovers (config) {
  // First, we have to find the element:
  var element = document.getElementById(config.id)

  // Next, we add an event listener to it:
  element.addEventListener('mouseenter', config.enter)

  // Finally, we add one to make the colour white again
  element.addEventListener('mouseleave', config.leave)
}

function addClicks (config) {
  var element = document.getElementById(config.id)
  element.addEventListener('click', config.click)
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function purpleToggle (evt) {
  if (evt.target.style.backgroundColor === 'purple') {
    evt.target.style.backgroundColor = 'white'
  } else {
    evt.target.style.backgroundColor = 'purple'
  }
}
