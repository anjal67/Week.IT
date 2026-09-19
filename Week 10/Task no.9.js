let numbers = [1,2,3,4,5,6];

let sum = 0;
let product = 1;

for(let i=0;i<numbers.length;i++)
{
    sum += numbers[i];
    product *= numbers[i];
}

document.write("Sum = " + sum + "<br>");

document.write("Product = " + product);