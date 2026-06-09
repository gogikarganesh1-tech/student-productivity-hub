function addTask(){
    let task=document.getElementById("task").value;

    let li=document.createElement("li");
    li.innerText=task;

    document.getElementById("taskList").appendChild(li);
}

function showCGPA(){
    let cgpa=document.getElementById("cgpa").value;

    document.getElementById("cgpaResult").innerHTML=
    "Your CGPA is "+cgpa;
}
function checkAttendance(){

    let attended =
    Number(document.getElementById("attended").value);

    let total =
    Number(document.getElementById("total").value);

    let percentage =
    (attended/total)*100;

    document.getElementById("attendanceResult")
    .innerHTML =
    "Attendance: " + percentage.toFixed(2) + "%";
}
