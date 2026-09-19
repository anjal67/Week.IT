let x = 0;
let array = [];

function add_element_to_array()
{
    array[x] = document.getElementById("text1").value;

    alert("Element: " + array[x] + " Added at index " + x);

    x++;

    document.getElementById("text1").value = "";
}

function display_array()
{
    let output = "<hr>";

    for(let i = 0; i < array.length; i++)
    {
        output += "Element " + i + " = " + array[i] + "<br>";
    }

    document.getElementById("Result").innerHTML = output;
}