let id=+prompt("enter the id of product :")
let product
console.log("before fetch api")
fetch("fetch.json").then(response=>response.json())
.then(data=>{
    product=data.products.find(p=>p.id===id)
    if(product){
        console.log("product found");
        console.log(product
        )
    }
    else{
        console.log("no products are found")
    }
    setTimeout(() => {
    console.log("after fetch api")
},2000)  
})
.catch(err=>console.log("error in fetching data",err));