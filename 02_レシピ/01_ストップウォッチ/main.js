const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  //countの更新
  count += 1
  //countを秒単位にして表示、countの値を 100 で割って表示している
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  //10msごとにcountUpを実行するように登録
  //setInterval(countUp, 10)
  //button.textContent = "stop"
  if (id === null) {
    //start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    //stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
