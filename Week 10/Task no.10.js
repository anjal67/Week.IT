function area(length, breadth)
{
    return length * breadth;
}

let length = parseFloat(prompt("Enter Length"));

let breadth = parseFloat(prompt("Enter Breadth"));

let result = area(length, breadth);

document.write("Area of Rectangle = " + result);