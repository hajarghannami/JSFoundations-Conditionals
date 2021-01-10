const firstNum = 5; 
const secondNum = 3; 

let userOper  = prompt("Please enter an operation: "); 

if (userOper === '+') {

  console.log(firstNum + secondNum); 

} else if (userOper === '-') {

  console.log(firstNum - secondNum); 
  
} else if (userOper === '*') {

  console.log(firstNum * secondNum); 
} else if (userOper === '/') {

  console.log(firstNum / secondNum); 
}