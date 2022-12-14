
let profile = [{
    name: "Madhusudan Amoli",
    location: "Haridwar",
    contact: "010101010",
    email: "abc@gmail.com",
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rollskill: ["java", "javascript", "html", "css", "react"],
    softskill:["Time management"," Team Collaboration", "Good communication"," Problem Solving  "],
    education: {
        Graduation: "BCA",
        PostGraduation: "MCA",
        Other: "Masai School Full Stack Development"
    },
    experience: "Fresher"
}];
displaydata(profile);

function displaydata(profile) {
    let maincontainer = document.querySelector("#Main");
    let resume = document.querySelector("#resume");
    let headline = document.querySelector("#headline");
    let roleskil = document.querySelector("#roleskill");
    let softskill = document.querySelector("#keyskill");
    let education = document.querySelector("#education");
    let summary = document.querySelector("#projectsummary");



    profile.forEach((el) => {

        maincontainer.innerHTML = `

        <div id="full">
        <div class="name">
        <img src="${el.image}"/>
         <h2>${el.name}</h2>
        </div>
       <pre>
        <div class="detail">
        
        <p><i class="material-icons">&#xe55f;</i> ${el.location}</p>
        <p><i class="material-icons">&#xe551;</i> ${el.contact}</p>
        <p><i class="material-icons">&#xe2c7;</i> ${el.experience}        
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

resume.innerHTML =`
        <h2>Resume</h2>
        <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>

        <div id="btn">
        <button type="upload" id="upload">UPDATE RESUME</button>
        <span>Supports Formats: doc, docx, pdf, rtf, upto 2 mb</span>
        </div>

`
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
        
        <p>${el['education'].Other}</p>
        
`

roleskil.innerHTML=`
<h2>IT skill <button id="roleedit" class="edit"><i class="material-icons">&#xe254;</i></button</h2>
`
el["rollskill"].forEach((el)=>{
    let innerdiv = document.createElement("div");
    let li = document.createElement("li");
    li.innerText=el;
    innerdiv.append(li);
    
    roleskil.append(innerdiv);

});
softskill.innerHTML=`
<h2>Soft Skill <button id="softedit" class="edit"><i class="material-icons">&#xe254;</i></button</h2>
`

el["softskill"].forEach((el)=>{
    let innerdiv = document.createElement("div");
    let li = document.createElement("li");
    li.innerText=el;
    innerdiv.append(li);
    softskill.append(innerdiv); 
});

education.innerHTML=`
    <h2>Education <button id="eduedit" class="edit"><i class="material-icons">&#xe254;</i></button></h2>
   <div> <h3>Post Graduation: </h3>${el.education.PostGraduation}</div>
   <div>
    <h3>Graduation: </h3>${el.education.Graduation}
   </div>
   <div>
    <h3>Others: </h3>${el.education.Other}
   </div>
`
summary.innerHTML=`
<h2>Project Summary <button id="summedit" class="edit"><i class="material-icons">&#xe254;</i></button></h2>
`
 


    });

}



