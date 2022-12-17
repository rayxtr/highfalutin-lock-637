let detailData = JSON.parse(localStorage.getItem("detailCompany"));

function renderDetails() {
    let data = document.querySelector(".data");

    data.innerHTML = "";
    data.innerHTML = `
        <img src=${detailData.avatar} alt="">
        <p>${detailData.description}</p>
        <h1>${detailData.companyName}</h1>
        <p>${detailData.rating}</p>
        <p>${detailData.experience}</p>
        <p>${detailData.contact}</p>
        <p>${detailData.Salary}</p>
        <p>${detailData.location}</p>
        <p>${detailData.jobRole}</p>
    `
}
renderDetails();