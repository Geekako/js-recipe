const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const mainasuButton = document.getElementById("mainasu-button")
const doubleButton = document.getElementById("double-button")

let count = 0

plusButton.onclick = function () {
  count += 1
  display.textContent = count
}

let count1 = 0

mainasuButton.onclick = function () {
  count1 -= 1
  display1.textContent = count1
}

let count2 = 0

doubleButton.onclick = function (n) {
  count2 = 2 * n
  display2.textContent = count2
}
