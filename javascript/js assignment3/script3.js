const clearButton = document.getElementById("clear");
const usernumber = document.getElementById("numberInput")
function calculate()
{
    let num, rem, sum=0;
    num = usernumber.value;
    document.getElementById("result").style.display="block";
    if(num === '' || +num <= 0)
    {
        alert("Enter a valid number");

    }else{
    while(num)
    {
        rem=num % 10;
        sum=sum + rem;
        num=Math.floor(num/10);
    }
}
    console.log(num);
    document.getElementById("result").value = sum;
    document.getElementById("result").innerHTML = sum;
}
const clearOp = () => {
    usernumber.value = '';
    document.getElementById("result").style.display="none";
}

clearButton.addEventListener('click', clearOp)
  