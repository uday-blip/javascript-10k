// creating elements dynamically through id of the html elements 
let start=document.getElementById("startbtn");
let stop=document.getElementById("stopbtn");
let reset=document.getElementById("resetbtn");
let timer=document.getElementById("timer");
let min=0;
let sec=0
let is_time_running=false;
let time;
// dealing with the start button
start.onclick=()=>{
     if(is_time_running===true){
        return
     }
     is_time_running=true;
     time=setInterval(()=>{
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
     },1000)
}

// stoping the timer and updating is_time_running to false
stop.onclick=()=>{
    clearInterval(time);
    is_time_running=false;
}
// reseting the timer by clearing the setinterval and updating is_time_running to false
reset.onclick=()=>{
    clearInterval(time);
    min=0;
    sec=0;
    is_time_running=false;
    timer.textContent="00:00";
}