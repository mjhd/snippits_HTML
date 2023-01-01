/*const saveScores = document.getElementById("intials").innerHTML
console.log(saveScores)
localStorage.setItem(text, saveScores);
JSON.parse(localStorage.getItem("text"))*/

let high_scores_kept = 5
let high_scores = (localStorage.getItem("our_quiz_high_scores") === null) ? Array() : JSON.parse(localStorage.getItem("our_quiz_high_scores"))
console.log(high_scores)

let current_score = localStorage.getItem("our_quiz_score_current")

/*function sort_by_index(a, b){
  return (a[0] > b[0]) ? a : b
}*/

function sort_by_index(start, list){
  let length =  list.length
  while(--length > start){
    if(list[length - 1][0] > list[length][0]){
      let current_item = list[length]
      list[length] = list[length - 1]
      list[length - 1] = current_item
    }
  }
  if(list.length - start + 1)
    sort_by_index(start + 1)
}


let scores_container = document.getElementById("scores-container")

for(let score of high_scores){
  //console.log(score)
  let score_element = document.createElement("li")
  score_element.innerHTML = score[1] + ":" + score[0]
  scores_container.append(score_element)
  //scores_container.innerHTML = scores_container.innerHTML + score[1] + ":" + score[0] + ", "
}

document.getElementById("save_score").addEventListener("click", function(event){
  if(high_scores.length < high_scores_kept || current_score > high_scores[0][0]){
    let user_name = document.getElementById("user_name").value
    high_scores.push([current_score, user_name])
    sort_by_index(high_scores, 0)
    console.log("new scores: " + high_scores)
    if(high_scores.length > high_scores_kept)
      high_scores.shift()
    localStorage.setItem("our_quiz_high_scores", JSON.stringify(high_scores))
  }
  event.target.remove()
})