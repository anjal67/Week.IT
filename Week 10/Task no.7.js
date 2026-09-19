document.write("<table border='1' cellspacing='0' cellpadding='10'>");

document.write("<tr>");
document.write("<th>ID</th>");
document.write("<th>Name</th>");
document.write("<th>Course</th>");
document.write("</tr>");

for(let i = 1; i <= 10; i++)
{
    if(i % 2 == 0)
        document.write("<tr bgcolor='lightgray'>");
    else
        document.write("<tr bgcolor='white'>");

    document.write("<td>" + i + "</td>");
    document.write("<td>Student " + i + "</td>");
    document.write("<td>BSc Computing</td>");
    document.write("</tr>");
}

document.write("</table>");