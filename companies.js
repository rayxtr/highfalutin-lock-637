let fetchURL = "https://636d633891576e19e327545a.mockapi.io/companies";

let companyData = document.querySelector(".companyList>div");

let arr = [];
// fetch company data
async function fetchData(pageNumber = 1) {
  try {
    let res = await fetch(`${fetchURL}?page=${pageNumber}&limit=16`);
    let data = await res.json();
    arr = data;
    renderData(arr);
    let totalPage = 5;
    paginationData(totalPage);
  } catch (err) {
    alert("Error Occurred");
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
    // inputButton.setAttribute("checked", "");
    let inputValue = inputButton.value;
    let filteredComp = arr.filter((item) => {
      let x = item.jobRole;
      return item.jobRole === inputValue;
    });

    renderData(filteredComp);
  });
}

let inputLocationButtons = document.querySelectorAll("#location input");
for (let inputButton of inputLocationButtons) {
  inputButton.addEventListener("click", (event) => {
    let inputValue = inputButton.value;
    let filteredComp = arr.filter((item) => {
      let x = item.location;
      return item.location === inputValue;
    });

    renderData(filteredComp);
  })
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
      let limti = 16;
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
