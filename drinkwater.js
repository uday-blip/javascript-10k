//Hydration remainder according  user requirement using js
let total_time=parseFloat(prompt("enter the required time in terms of hours:"));
let total_time_in_milliseconds=total_time* 60 * 60 *1000;
let gap= 30*60*1000 ;
let hydration = setInterval(()=>{
    alert("Time to drink water !");
    console.log("hydrate yourself in this time ")
},gap);
setTimeout(()=>{
    clearInterval(hydration);
    alert("this remainder ends now ");
},total_time_in_milliseconds);



