let divs = document.querySelectorAll(".move");

let i =0;
let slideshow = setInterval(divslide,2000);

function divslide(){

    divs.forEach((elem,i)=>{

        elem.style.display="none";

    });

    if(i==divs.length){
        i=0;
    }
    divs[i].style.display="grid";
   
    i++;

}




let buyf={
    name:"Resume display",
    price:2047
}
let buys={
    name:"Priority Applicant",
    price:942

}
let buyt={
    name:"Job Booster",
    price:2047
}

let firstservice = document.querySelector(".firstservice");

firstservice.addEventListener("click",buy1);

function buy1(){
let name = buyf.name;
let price = buyf.price;

let savefirst={
    name:name,
    price:price
}
let arr=[];
arr.push(savefirst);

localStorage.setItem("buyfirst",JSON.stringify(arr));
window.location.href="./BuyService.html";
}

let secondservice = document.querySelector(".secondservice");
secondservice.addEventListener("click",buy2);

function buy2(){

    let name = buys.name;
    let price =buys.price;

    let savefirst = {
        name:name,
        price:price
    }
    let arr=[];
    arr.push(savefirst);

    localStorage.setItem("buysecond",JSON.stringify(arr));
    window.location.href="./BuyService.html";
}

let thirdservice = document.querySelector(".thirdservice");
thirdservice.addEventListener("click",buy3);

function buy3(){

    let name = buys.name;
    let price =buys.price;

    let savefirst = {
        name:name,
        price:price
    }
    let arr=[];
    arr.push(savefirst);

    localStorage.setItem("buythird",JSON.stringify(arr));
    window.location.href="./BuyService.html";
}

let form = document.querySelector("form");
form.addEventListener("submit",callit);

function callit(){

    let name = document.querySelector("#name").value;

    alert(`${name} Thank you for contacting us we will get back to you soon....`);

}
