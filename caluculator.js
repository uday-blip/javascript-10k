let inp_1=document.getElementById("num1")
inp_1.addEventListener("focus",()=>{
    inp_1.style.backgroundColor="coral"
});
let inp_2=document.getElementById("num2")
    inp_2.addEventListener("blur",()=>{
        inp_2.style.backgroundColor="gray"
});
// for sum of two numbers 
let add=document.getElementById("add");
    add.style.backgroundColor="#FFD1E0"
    add.addEventListener("click",()=>{
        let sum=Number(inp_1.value)+Number(inp_2.value)
        console.log(`the sum of both inputs is ${sum}`);
    });
//for subtraction of two numbers
let sub=document.getElementById("sub");
    sub.addEventListener("click",()=>{
        sub.style.backgroundColor="#E0FFFF"
        let diff=Number(inp_1.value)-Number(inp_2.value)
        console.log(`the difference is ${diff}`);
    });
// for multiplication of numbers
let product=document.getElementById("mul")
    product.addEventListener("click",()=>{
        product.style.backgroundColor=" #E6E6FA"
        let mul=Number(inp_1.value)*Number(inp_2.value)
        console.log(`the product is ${mul}`);
    });
// for division of numbers 
let divide=document.getElementById("div")
    divide.addEventListener("click",()=>{
        divide.style.backgroundColor="#E0FFFF"
        let division=Number(inp_1.value)/Number(inp_2.value)
        console.log(`the quotient of division is ${division}`);
    });

