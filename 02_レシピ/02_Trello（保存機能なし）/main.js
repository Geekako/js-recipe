//step1ー要素を取得する(はじめから HTML に書かれている 3 つを取得)//
const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

//step2-カードを追加する//
addButton.onclick = function () {
  //入力欄の値を取り出して、textに入れる
  const text = inputElement.value

  //card作成
  const card = document.createElement("div")
  card.className = "card" //クラス名を変更

  //こtodoを作成
  const todo = document.createElement("div")
  todo.className = "todo" //クラス名を変更
  todo.textContent = text //textContentを変更

  //こtodoをcardの中に追加
  card.append(todo)

  // 削除ボタン を作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタン を押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }

  // 削除ボタン を card の中に追加する
  card.append(deleteButton)

  //cardをcontainerの中に追加
  container.append(card)

  //入力欄を空にする
  inputElement.value = ""
}
