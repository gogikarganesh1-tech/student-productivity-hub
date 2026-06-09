function addTask(){

    let task =
    document.getElementById("task").value;

    let li =
    document.createElement("li");

    li.innerText = task;

    document.getElementById("taskList")
    .appendChild(li);

    let tasks =
    JSON.parse(localStorage.getItem("tasks"))
    || [];

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
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
let time = 1500;

function startTimer(){

    let interval =
    setInterval(function(){

        let minutes =
        Math.floor(time/60);

        let seconds =
        time%60;

        document.getElementById("timer")
        .innerHTML =
        minutes + ":" +
        (seconds<10?"0":"") +
        seconds;

        time--;

        if(time<0){
            clearInterval(interval);
            alert("Study Session Complete!");
        }

    },1000);
}
