fetch("quiz.json")
.then(response => response.json())
.then(data1 => showInfo(data1));
function showInfo(data1) {
  console.table(data1)
}