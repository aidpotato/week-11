// function greet(username, time = 'day'){
//     console.log(`good ${time} ${username}`);
// }

// greet('bob')

// const greet = function (name)

// {
//     console.log(`hello ${name}`);
// }

// greet('neda')


// const greet = (name) =>

// {
//     console.log(`hello ${name}`);
// }

// greet('neda')
// let input = prompt('enter the radius of a circle')

// function circle_area(input){
//     const piy = ((input**2) * Math.PI);
//     console.log(`the area with the radius ${input} is ${piy}`)
// }

// circle_area(input);

"neda version"
const radiusPara = document.querySelector('#radius');
console.log(radiusPara);
const resultPara = document.querySelector('#result');
console.log(resultPara);

function calculateRadius(radias){
    if (isNaN(radias)){
        // alert('this is not a number');
        resultPara.textContent = ('you entered a non number')
    }else {
        const area = Math.PI * radias ** 2;
        return area;    
    }
}
let userValue = prompt('enter a number');
let result = calculateRadius(userValue);
radiusPara.textContent += userValue;


if (result !== undefined) {
    alert(`the area with hte circle with radius ${uservalue} is ${result.toFixed(2)}`)
}