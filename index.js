const form = document.querySelector("form");
form.addEventListener('submit', function calculate(e){
    e.preventDefault();
    let num1 = document.querySelector("#value1").value;
    let num2 = document.querySelector("#value2").value;
    const operation = document.querySelector("#operationSelector").value;
    let output = document.querySelector(".output");
    if (operation === "Addition") {
        output.innerHTML = Number(num1) + Number(num2); 
        form.reset();
    }
    else if(operation === "Subtraction"){
        output.innerHTML = Number(num1) - Number(num2); 
        form.reset();
    }
    else if(operation === "Multiplication"){
        output.innerHTML = Number(num1) * Number(num2); 
        form.reset();
    }
    else if(operation === "Division"){
        output.innerHTML = Number(num1) / Number(num2); 
        form.reset();
    }
});