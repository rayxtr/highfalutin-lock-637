
let profile = JSON.parse(localStorage.getItem("accdata"))||[];

 displaydata(profile);
 

function displaydata(profile){
    let maincontainer = document.querySelector("#Main");
    profile.forEach((el)=>{
        maincontainer.innerHTML = `

                <div id="full">
                <div class="name">
                 <img src="${el.image}"/>
                  <h2>${el.fname} ${el.lname}</h2>
               </div>
                <pre>
                 <div class="detail">
                
                 <p><i class="material-icons">&#xe55f;</i> ${el.location}</p>
                 <p><i class="material-icons">&#xe551;</i> ${el.mob}</p>
                 <p><i class="material-icons">&#xe2c7;</i> ${el.exp}        
         </p>
         <p><i class="material-icons">&#xe0be;</i> ${el.email}</p>
            
             </div>
             </pre>
             </div>
                 <div id="pending">
                 <h2>Pending Actions</h2>
                 <hr>
                 <p>Add Profile Summary</p>
                 <p>Complete your profile </p>
                 <a href="">View All</a>
                 </div>
             `
    });
};










///////////////////////////////////////////////


let savedata = [{
    
    rollskill: ["java", "javascript", "html", "css", "react"],
    softskill:["Time management"," Team Collaboration", "Good communication"," Problem Solving  "],
    education: {
        Graduation: "BCA",
        PostGraduation: "MCA",
        Other: "Masai School Full Stack Development"
    },
    experience: "Fresher"
}];
displaysave(savedata);

function displaysave(savedata){
    let resume = document.querySelector("#resume");
    let headline = document.querySelector("#headline");
    let roleskil = document.querySelector("#roleskill");
    let softskill = document.querySelector("#keyskill");
    let education = document.querySelector("#education");
    let summary = document.querySelector("#projectsummary");
    
    savedata.forEach((el)=>{

        resume.innerHTML =`
        <h2>Resume</h2>
        <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>

        <div id="btn">
       <button type="upload" id="upload">UPDATE RESUME</button>
      <span>Supports Formats: doc, docx, pdf, rtf, upto 2 mb</span>
        </div>`

 let btn = document.querySelector("#upload");
btn.addEventListener("click",opendialog);

function opendialog(e){
let dv = document.querySelector("#btn");
    let x = document.createElement("input");
x.setAttribute("type","file");

dv.append(x);

}
headline.innerHTML=`
        <h2>Resume Headline <button id="headedit" class="edit"><i class="material-icons">&#xe254;</i></button></h2>
        
        <input type="text"  readonly  class="value head" value="${el['education'].Other}">
        
`

roleskil.innerHTML=`
<h2>IT skill <button id="roleedit" class="edit"><i class="material-icons">&#xe254;</i></button</h2>
`
el["rollskill"].forEach((el)=>{
    let innerdiv = document.createElement("div");
    let li = document.createElement("li");
    let input =  document.createElement("input");
   input.className="value mainskill";
   input.readOnly=true;
    input.setAttribute("value",`${el}`);
    li.append(input);
   innerdiv.append(li);
    roleskil.append(innerdiv);  
  
});
softskill.innerHTML=`
<h2>Soft Skill <button id="softedit" class="edit"><i class="material-icons">&#xe254;</i></button</h2>
`

el["softskill"].forEach((el)=>{
    let innerdiv = document.createElement("div");
    
    let li = document.createElement("li");
   let input =  document.createElement("input");
   input.className="value softskill";
    input.readOnly=true;
    input.setAttribute("value",`${el}`);
    li.append(input);
   innerdiv.append(li);
    softskill.append(innerdiv); 
});
education.innerHTML=`
    <h2>Education <button id="eduedit" class="edit"><i class="material-icons">&#xe254;</i></button></h2>
   <div> <h3>Post Graduation: </h3><input type="text" id="pg" readonly value="${el.education.PostGraduation}" class="value education"></div>
   <div>
    <h3>Graduation: </h3><input type="text" id="grad" readonly value="${el.education.Graduation}" class="value education">
   </div>
   <div>
    <h3>Others: </h3><input type="text" id="oth" readonly value="${el.education.Other}"class="value education">
   </div>
`
summary.innerHTML=`
<h2>Project Summary <button id="summedit" class="edit"><i class="material-icons">&#xe254;</i></button></h2>

<input type="text" readonly value="${el.education.Graduation}" class="value" id="summarychange">
`

    });

};
//////////////////////////////////////////////////////////
////////////////////////////////////////////////



 let newdata = [];

let summarybutton = document.querySelector("#summedit");
summarybutton.addEventListener("click",(e)=>{
    e.preventDefault();
let inp = document.querySelector("#summarychange");
inp.removeAttribute("readonly");
inp.style.backgroundColor="gray";
inp.style.color="white";
});

let educationedit = document.querySelector("#eduedit");

educationedit.addEventListener("click",(e)=>{
let allinpu = document.querySelectorAll(".education");

for(x of allinpu){
    x.removeAttribute("readonly");
    x.style.backgroundColor="gray";
    x.style.color="white";
}
});

let softskilledit = document.querySelector("#softedit");
softskilledit.addEventListener("click",()=>{
    let allinput = document.querySelectorAll(".softskill");
    for(x of allinput){
        x.removeAttribute("readonly");
        x.style.backgroundColor="gray";
        x.style.color="white";
    }
});


let mainskilledit = document.querySelector("#roleedit");
mainskilledit.addEventListener("click",()=>{

    let allinput = document.querySelectorAll(".mainskill");

    for(let x of allinput){
        x.removeAttribute("readonly");
        x.style.backgroundColor="gray";
        x.style.color="white";
    }

});

let headlinebutton = document.querySelector("#headedit");
headlinebutton.addEventListener("click",()=>{
    let inp = document.querySelector(".head");
    inp.removeAttribute("readonly");
    inp.style.backgroundColor="gray";
    inp.style.color="white";
});
////////////////////////////////////////

let savebutton = document.querySelector("#save");

/////////////////////////////////////////////////
//////////////////////////////////////////////
savebutton.addEventListener("click",savdata);

function savdata(e){
e.preventDefault();

let headline= document.querySelector(".head").value;

let allinput1 = document.querySelectorAll(".mainskill");
let rollskill=[];
for(x of allinput1){
    rollskill.push(x.value);
}

let allinput2 = document.querySelectorAll(".softskill");

let softskill=[];
for(x of allinput2){
    softskill.push(x.value);

}

let education={};

let PostGraduation = document.querySelector("#pg").value;
let Graduation = document.querySelector("#grad").value;
let Others = document.querySelector("#oth").value;

education.PostGraduation=PostGraduation;
education.Graduation=Graduation;
education.Other=Others;

let summary = document.querySelector("#summarychange").value;

let detailobj={
    headline,rollskill,softskill,education,summary
}
newdata.push(detailobj);
displaysave(newdata);
}



let logout = document.querySelector("#logout");
logout.addEventListener("click",()=>{
    window.location.href="./index.html";
})
