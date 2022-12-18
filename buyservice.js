
let firstdata =JSON.parse( localStorage.getItem("buyfirst"))||[];

console.log(firstdata);

let second = JSON.parse(localStorage.getItem("buysecond"));

let third = JSON.parse(localStorage.getItem("buythird"));

if(firstdata!==null){
    displaydata(firstdata);
}else if(second!==null){
    displaydata(second);
}
else if(third!==null){
    displaydata(third);
}




function displaydata(firstdata){

     document.querySelector("#cartmain").innerHTML="";
    let cart = document.querySelector("#cartmain");
    
    firstdata.forEach((el)=>{

        cart.innerHTML=`
        
        <div>
    <p >Name of Service: </p><span>${el.name}</span>
    <p class="price">Price: </p><span>${el.price}</span>

    <p class="feedback"></p>
    
    </div>
        

        `
        
    })
    



}


function displaydata(second){

     document.querySelector("#cartmain").innerHTML="";
    let cart = document.querySelector("#cartmain");
    
    second.forEach((el)=>{

        cart.innerHTML=`
        
        <div>
    <p>Name of Service: ${el.name}</p>
    <p class="price">Price: ${el.price}</p>
        </div>

        `
    })
    



}


function displaydata(third){

     document.querySelector("#cartmain").innerHTML="";
    let cart = document.querySelector("#cartmain");
    
    third.forEach((el)=>{

        cart.innerHTML=`
        
        <div>
    <p>Name of Service: ${el.name}</p>
    <p class="price">Price: ${el.price}</p>
        </div>

        `
    })
    



}


let buynow = document.querySelector("#buyit");

buynow.addEventListener("click",otp);

let pass = Math.floor(Math.random()*9000+1000);
let ins = document.querySelector("#pas");
ins.setAttribute("value",pass);
function otp(){
    
    

    
    let ot = window.prompt("Enter you pin");
    
    let promise = new Promise((res,rej)=>{

        if(ot==pass){
            res("Payment Succesfull :D");
        }else{
            rej("Incorrect PIN!!!!!!!!!!")
        }
    });
    promise.then((data)=>{alert(data);window.location.href="/job.html"}).catch((err)=>alert(err));

}

let logout = document.querySelector("#logout");
logout.addEventListener("click",()=>{
    window.location.href="./index.html";
})