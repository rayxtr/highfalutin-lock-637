var companyData=[]
var allUserData=[]

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  window.addEventListener("load",(eve
    )=>{
        compdata()
    })

//append company data
let dataOpt = document.querySelector("#selectdata");
dataOpt.addEventListener("change", (event) => {
  if (dataOpt.value == "company") {
       compdata()
  } else {
    userdata();
  }
});

async function compdata() {
  try {
    let alldata = await fetch(
      "https://636d633891576e19e327545a.mockapi.io/companies"
    );
    if(alldata.ok){
        let data = await alldata.json();
    companyData=[...data]
    renderCompany(data);
    }
  } catch (error) {
    alert("bad request");
  }
}

async function userdata() {
  try {
    let alldata = await fetch(
      "https://639a1a15e916a46ec0a9808d.mockapi.io/userdata"
    );
    if(alldata.ok){
        let data = await alldata.json();
    allUserData=[...data]
    renderUser(data);
    }
  } catch (error) {
    alert("Bad reqest");
  }
}
function renderCompany(data) {
  let tabelCont = document.querySelector(".maincontainer");
  let tabelhead = document.querySelector(".comp_tbl_head");
  tabelhead.innerHTML = `
  
        <div class="comp_logo">
           <h4>Logo</h4>
        </div>
        <div class="comp_name">
            <h4>Name of the Company</h4>
        </div>
        <div class="job_role">
            <h4>Job Role</h4>
        </div>
        <div class="Edit_sec">
            <h4>Edit Data</h4>
        </div>
        <div class="delet_sec">
            <h4>Delete Data</h4>
        </div>
       
  `;
  tabelCont.innerHTML = "";
  let newdata = data.map((item) => {
    return `
    <div class="task">
        <div class="comp_logo">
           <img src="${item.avatar}" alt="${item.companyName}">
        </div>
        <div class="comp_name">
            <h4>${item.companyName}</h4>
        </div>
        <div class="job_role">
            <h4>${item.jobRole}</h4>
        </div>
        <div class="Edit_sec">
            <button clas="edt_btn">Edit Data</button>
        </div>
        <div class="delet_sec">
            <button class="dlt_btn">Delete Data</button>
        </div>
        
    </div>
    `;
  });
  tabelCont.innerHTML = newdata.join(" ");
}

function renderUser(data) {
  let tabelCont = document.querySelector(".maincontainer");
  let tabelhead = document.querySelector(".comp_tbl_head");
  tabelhead.innerHTML = `
    
    <div class="profile_pic">
        <h4>Profile</h4>
    </div>
    <div class="username">
        <h4>User Name</h4>
    </div>
    <div class="email_id">
        <h4>Email ID</h4>
    </div>
    <div class="phone_num">
        <h4>Phone Number</h4>
    </div>
    <div class="date">
        <h4>Created Date</h4>
    </div>
         
    `;
  tabelCont.innerHTML = "";
  let newdata = data.map((item) => {
    return `
    <div class="task">
    <div class="profile_pic">
        <img src="
        ${item.avatar}" alt="${item.name}">
    </div>
    <div class="username">
        <h4>${item.name}</h4>
    </div>
    <div class="email_id">
        <h4>${item.email}</h4>
    </div>
    <div class="phone_num">
        <h4>${item.phone}</h4>
    </div>
    <div class="date">
        <h5>${item.createdAt}</h5>
    </div>
   </div>
      `;
  });
  tabelCont.innerHTML = newdata.join(" ");
}

//search functionality
let serbtn=document.querySelector("#search_data")
serbtn.addEventListener("change",(event)=>{

    let datashow = document.querySelector("#selectdata");
    if (datashow.value === "company" ||"all_data") {
        let showdata=document.querySelector("#search_data").value;
        if(showdata.length>0){
            let tempdata=companyData.filter((item)=>{
                let ans=item.companyName.toLowerCase().includes(showdata.toLowerCase()) || item.jobRole.toLowerCase().includes(showdata.toLowerCase())
                return ans
            })
            renderCompany(tempdata)
        }else{
            renderCompany(companyData)
        }
        
    }
})