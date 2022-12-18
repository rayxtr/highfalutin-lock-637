let login = document.getElementById("loginbtn").addEventListener("click",()=>{
  window.location.href="signin.html"
})
let register = document.getElementById("registerbtn").addEventListener("click",()=>{
  window.location.href="signup.html"
})
let landingPage = document.getElementById("dashboardlogo").addEventListener("click",()=>{
  window.location.href="index.html"
})

let fetchURL = "https://636d633891576e19e327545a.mockapi.io/companies";

let companyData = document.querySelector(".companyList>div");

let arr = [];
// fetch company data
async function fetchData(pageNumber = 1) {
  try {
    let res = await fetch(`${fetchURL}?page=${pageNumber}&limit=14`);
    let data = await res.json();
    arr = data;
    renderData(arr);
    let totalPage = 5;
    paginationData(totalPage);
  } catch (err) {
    console.log("Error Occurred");
  }
}

fetchData();

function renderData(comData) {
  // render data
  companyData.innerHTML = "";
  companyData.innerHTML = comData
    .map((item) => {
      return `
            <div class="combox" data-id=${item.id}>
                <div>
                    <img
                        src=${item.avatar}
                        alt="image"
                    />
                </div>
                <div>
                    <h3>${item.companyName}</h3>
                    <p><i class="fa-solid fa-star"></i> ${item.rating}</p>
                    <p>${item.location}</p>
                    <p>${item.jobRole}</p>
                </div>
            </div>
        `;
    })
    .join(" ");

  // company detail
  let comboxes = document.querySelectorAll(".combox");
  for (let combox of comboxes) {
    combox.addEventListener("click", (event) => {
      for (let i = 0; i < comData.length; i++) {
        if (comData[i].id === combox.dataset.id) {
          localStorage.setItem("detailCompany", JSON.stringify(comData[i]));
          window.location.href = "com_detail.html";
        }
      }
    });
  }
}

// filterPart
let inputJobButtons = document.querySelectorAll("#jobRole input");
for (let inputButton of inputJobButtons) {
  inputButton.addEventListener("click", (event) => {
    inputButton.setAttribute("checked", false);
    if (inputButton.checked) {
      inputButton.setAttribute("checked", true);
    }

    let inputValue = inputButton.value;
    let filteredComp = arr.filter((item) => {
      return item.jobRole === inputValue;
    });

    if (inputButton.checked) {
      renderData(filteredComp);
    } else {
      renderData(arr);
    }
  });
}

let inputLocationButtons = document.querySelectorAll("#location input");
for (let inputButton of inputLocationButtons) {
  inputButton.addEventListener("click", (event) => {
    inputButton.setAttribute("checked", false);
    if (inputButton.checked) {
      inputButton.setAttribute("checked", true);
    }

    let inputValue = inputButton.value;
    let filteredComp = arr.filter((item) => {
      return item.location === inputValue;
    });

    if (inputButton.checked) {
      renderData(filteredComp);
    } else {
      renderData(arr);
    }
  });
}

// Pagination part
function paginationData(totalPage) {
  let paginationSection = document.querySelector(".pagination");
  paginationSection.innerHTML = `
    ${createPagButton(totalPage).join(" ")}
  `;

  let pageButtons = document.querySelectorAll(".pagination-btn");
  for (let pageButton of pageButtons) {
    pageButton.addEventListener("click", (event) => {
      let pageNumber = event.target.dataset.id;
      // let limti = 16;
      fetchData(pageNumber);
    });
  }
}

function createPagButton(totalPage) {
  let array = [];
  for (let page = 1; page <= totalPage; page++) {
    array.push(
      `<div class="pagination-btn" ${page ? `data-id = ${page}` : ""}><h4 ${
        page ? `data-id = ${page}` : ""
      }>${page}</h4></div>`
    );
  }
  return array;
}

// hiringPart.nextElementSibling.children[0].classList.toggle("active");

let hiringParts = document.querySelectorAll(".hiring-part h3");

// for(let i=0; i<hiringParts.length; i++) {
//   hiringParts[i].addEventListener("click",function(event){
//     let main = hiringParts[i].nextElementSibling;

//     if(main.style.display == "grid") {
//       main.style.display = "none";
//     } else {
//       main.style.display = "grid";
//     }
//   })
// }

for (let i = 0; i < hiringParts.length; i++) {
  hiringParts[0].nextElementSibling.style.display = "block";
  hiringParts[0].style.borderBottom = "4px solid orange"
  hiringParts[i].addEventListener("click", function () {
    if (i == 0) {
      hiringParts[0].style.borderBottom = "4px solid orange"
      hiringParts[1].style.borderBottom = "none"
      hiringParts[2].style.borderBottom = "none"
      hiringParts[0].nextElementSibling.style.display = "block";
      hiringParts[1].nextElementSibling.style.display = "none";
      hiringParts[2].nextElementSibling.style.display = "none";
    } 
    else if (i == 1) {
      hiringParts[1].style.borderBottom = "4px solid orange"
      hiringParts[0].style.borderBottom = "none"
      hiringParts[2].style.borderBottom = "none"
      hiringParts[1].nextElementSibling.style.display = "block";
      hiringParts[0].nextElementSibling.style.display = "none";
      hiringParts[2].nextElementSibling.style.display = "none";
    } 
    else if (i == 2) {
      hiringParts[2].style.borderBottom = "4px solid orange"
      hiringParts[0].style.borderBottom = "none"
      hiringParts[1].style.borderBottom = "none"
      hiringParts[2].nextElementSibling.style.display = "block";
      hiringParts[0].nextElementSibling.style.display = "none";
      hiringParts[1].nextElementSibling.style.display = "none";
    }
  });
}
