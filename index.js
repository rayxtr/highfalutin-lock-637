let companyURL ="https://636d633891576e19e327545a.mockapi.io/companies"


//Navigation Bar 


//Search Section 

//Company Hiring Section 

//Featured Companies 

//Job Across Popular roles 

//Sponsered Companies  

//Interview Prepration Section  

//Grow your Career through Learning  

//Video Profile  

//Footer  

// testing
async function fetchdata(){
    try {
        let res = await fetch(companyURL)
        let data = await res.json()
       console.log(data)
       renderdata(data)
    } catch (error) {
        alert("someting went wrong")
    }
}
fetchdata();


 function renderdata(arr){
    let renderCard = document.querySelector("#searchsection")
    arr.forEach(element => {
        let card = document.createElement("div")
      let name = document.createElement("h3");
      name.innerText = element.companyName;
//console.log(name)
      let image = document.createElement("img");
      image.setAttribute("src",element.avatar)
     
      card.append(name,image)
      renderCard.append(card)
     // console.log()


})
}
