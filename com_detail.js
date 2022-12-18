let detailData = JSON.parse(localStorage.getItem("detailCompany"));

function renderDetails() {
    let data = document.querySelector(".data");

    data.innerHTML = "";
    data.innerHTML = `
        <img src=${detailData.avatar} alt="">
        <p>${detailData.description}</p>
        <h2>${detailData.companyName}</h2>
        <p><i class="fa-solid fa-star"></i> ${detailData.rating}</p>
        <p>Experience : ${detailData.experience}</p>
        <p>Contact : ${detailData.contact}</p>
        <p>Salary : ${detailData.Salary}</p>
        <p>Location : ${detailData.location}</p>
        <p>Job Role : ${detailData.jobRole}</p>
    `
}
renderDetails();