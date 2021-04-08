var names = [];


function enter()
{
    var name1 = document.getElementById("name_of_student_1").value
    var name2 = document.getElementById("name_of_student_2").value
    var name3 = document.getElementById("name_of_student_3").value
    var name4 = document.getElementById("name_of_student_4").value

    names.push(name1, name2, name3, name4);

    console.log(names);

    document.getElementById("displayNames").innerHTML = names;
    document.getElementById("buttonEnter").style.display = "none";
    document.getElementById("buttonSort").style.display = "inline-block";
}

function sort()
{
    names.sort();
    console.log(names);
    document.getElementById("displayNames").innerHTML = names;
}

