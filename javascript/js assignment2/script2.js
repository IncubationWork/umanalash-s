const clearButton = document.getElementById("demobutton");
const usernumber = document.getElementById("numberInput");
function displayEvenNumbers() {
  document.getElementById("output").style.display = 'block';
    let number = usernumber.value;
    var evenNumbers = [];
    if(number === ''|| +number <= 0)
    {
      alert("Enter a valid number");
    }else{
    for (var num = 1; num <= number; num++) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      }
    }
    }
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Even numbers up to " + number + ":<br>" + evenNumbers.join(", ");
  }
  const clearOp = () => {
    usernumber.value = '';
    document.getElementById("output").style.display = 'none';
}

clearButton.addEventListener('click', clearOp)