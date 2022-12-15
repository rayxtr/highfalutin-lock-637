let fetchURL = "https://636d633891576e19e327545a.mockapi.io/companies?page=1&limit=10";

let companyData = document.querySelector(".companyList>div");

let arr = [];
// fetch company data
async function fetchData() {
    let res = await fetch(fetchURL);
    let data = await res.json();
    arr = data
    renderData(arr);
}

fetchData();

function renderData(comData) {
    // render data
    companyData.innerHTML = "";
    companyData.innerHTML = comData.map((item) => {
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
        `
    }).join(" ");

    // company detail
    let comboxes = document.querySelectorAll(".combox");
    for(let combox of comboxes) {
        combox.addEventListener("click", (event)=> {
            for(let i=0; i<comData.length; i++) {
                if(comData[i].id === combox.dataset.id) {
                    localStorage.setItem("detailCompany", JSON.stringify(comData[i]));
                    window.location.href = "#";
                }
            }
        })
    }

}

// filterPart
let inputButtons = document.querySelectorAll("#jobRole input");
for(let inputButton of inputButtons) {
    inputButton.addEventListener("change", (event)=> {
        // if(inputButton.checked = "") {
            // inputButton.removeAttribute("checked");    
        // }
        // inputButton.setAttribute(""checked, "");
        // console.log(inputButton.value)

        let inputValue = inputButton.value;

        // if(inputButton.checked !== "") {
        //     console.log("YES")
        // }

        let filteredComp = arr.filter((item)=> {
            let x = item.jobRole;
            let isFilter = true;
            for(let i=0; i<x.length; i++) {
                for(let j=0; j<inputValue.length; j++) {
                    if(x[i] !== inputValue[j]) {
                        isFilter = false;
                        break;
                    }
                }
            }
            
        })
        // for(let i=0; i<arr[i].jobRole.length; i++) {
        //     for(let j=0; j<inputButton.value.length; j++) {
        //         if()
        //     }
        // }
    })
}




// Pagination part