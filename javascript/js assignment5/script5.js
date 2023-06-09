/*const clearButton = document.getElementById("clear");
const usernumber = document.getElementById("input");
function squareroot()
{
    let number = [];
    number = usernumber.value;
    if(number === '' || +number <=0)
    {
        alert("Enter a valid number");
    }else if(number > 0){
           number = map(function(num)
           {
            return number * 2;
           });
    }
    console.log(number);
    document.getElementById("result").value = number;
}
const clearOp = () => {
    usernumber.value = '';
    document.getElementById("clear");
}

clearButton.addEventListener('click', clearOp)*/




const clearButton = document.getElementById("clear");
const resultElement = document.getElementById("result");

document.getElementById("button").addEventListener("click", function() {
    resultElement.style.display = 'block';
    var number= document.getElementById("input").value;
    var numbers = number.split(",");
    if(number === '')
    {
        alert("Enter a valid number");
  resultElement.style.visibility = 'hidden';

    }else{
    var squared = numbers.map(function(number) {
      var inputNumber = parseFloat(number);
      return inputNumber * inputNumber;
    });
    }

    resultElement.textContent = "Squared Numbers: " + squared.join(", ");

  });

const clearOp = () => {
  input.value = '';
  resultElement.style.display = 'none';
}

clearButton.addEventListener('click', clearOp)