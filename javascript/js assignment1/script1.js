const userAge = document.getElementById("age");
const clearButton = document.getElementById('demobutton');

 function myFunction() {
    let age = userAge.value; 
  
    console.log(typeof age);
    if(age === '' || +age <= 0)
    {
    alert("Please fill a validate number");
        document.getElementById("demo").style.visibility = "hidden";
    }
    else if(+age<18 && +age >0 ){
    
        document.getElementById("demo").innerHTML='Not Eligible';
        document.getElementById("demo").style.visibility = "visible";
        document.getElementById("demo").className="color1";
    }
    else
    {
        document.getElementById("demo").innerHTML='Eligible';
        document.getElementById("demo").style.visibility = "visible";
        document.getElementById("demo").className="color2";
    }
}

const clearOp = () => {
    userAge.value = '';
    document.getElementById("demo").style.visibility = "hidden";
}

clearButton.addEventListener('click', clearOp)