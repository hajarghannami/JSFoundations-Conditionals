let firstNum = prompt("Enter your first Number: ");
let secondNum = prompt("Enter your second Number: "); 

let userOper  = prompt("Enter an operation: "); 

if (userOper === '+') {

  console.log(firstNum + secondNum); 

} else if (userOper === '-') {

  console.log(firstNum - secondNum); 
  
} else if (userOper === '*') {

  console.log(firstNum * secondNum); 
} else if (userOper === '/') {

  console.log(firstNum / secondNum); 
}
