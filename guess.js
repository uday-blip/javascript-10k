let random=Math.floor(Math.random()*100)
let input=document.getElementById("input")
let button=document.getElementById("btn")
let message = document.getElementById("message");

console.log(random)

let chances=0
button.onclick=()=>{
    let guess=parseInt(input.value)
    if(chances>=3){
        message.innerText="chances exceeded"
        return;
    }
    chances+=1

    if(guess==random){
       message.innerText= ` You've won in ${chances} chances! The number was ${random}.`;
    }else if(guess < random){
         message.innerText = " Your guess is too low.";
    }else if(guess>random){
          message.innerText = " Your guess is too high.";
    }

    if(chances === 3 && guess!=random){
        message.innerText = ` Game Over! The correct number was ${random}.`;
    }
}