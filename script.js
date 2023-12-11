const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault(); //prevent default function is used to hold the value.

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
 results.innerHTML = `Please give  a valid height ${height}`;
}else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give  a valid height ${weight}`;
   }

   
 else{
   const bmi =  (weight / ((height*height)/10000)).toFixed(2);

   let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else {
            category = 'Overweight';
        }
 
   // To Show Result
   
   results.innerHTML = `<span>Your Body Mass Index is ${bmi}</span> <span>You are ${category}</span>`
 }  
    
})