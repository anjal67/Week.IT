let marks = parseInt(prompt("Enter Marks"));

if (marks >= 80 && marks <= 100)
{
    alert("Distinction");
}
else if (marks >= 60)
{
    alert("First Division");
}
else if (marks >= 50)
{
    alert("Second Division");
}
else if (marks >= 40)
{
    alert("Third Division");
}
else
{
    alert("Fail");
}