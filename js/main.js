console.log("~ Created by YD in 2025");

function openadd(){
    window.open("add.html");
}
// adding daynamic divs to homepage
let sinppetgrid = document.getElementById(`snippet-grid`);

// getting local storage from device

const rawdata = localStorage.getItem("Data");
const realdata = JSON.parse(rawdata);

if(localStorage.getItem("Data")){
    // console.log("works");
    for(let i = 0 ; i < realdata.length ; i++){
        // console.log(realdata[i].tittle);
        let code = realdata[i].code;
        let tittle = realdata[i].tittle;
        let tags = realdata[i].tags;
        let lang = realdata[i].lang;

        // adding divs dynamically 
        let newdiv = document.createElement(`div`);
        newdiv.className = "snippet-card";
        newdiv.id = "cards";

        sinppetgrid.appendChild(newdiv);

        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        h3.innerText = tittle;
        p1.innerText = `Language: ${lang}`;
        p2.innerText = `Tags: ${tags}`;

        newdiv.appendChild(h3);
        newdiv.appendChild(p1);
        newdiv.appendChild(p2);


    }
}
else{
    //making notice para to show when card is not there 
    let impcard = document.createElement(`div`);
    impcard.className = "msg";

    let notice = document.createElement(`p`);
    notice.innerText = "Add some snippet to show here";

    impcard.appendChild(notice);
    document.querySelector(`main`).appendChild(impcard);
}

let snippetcard = document.querySelectorAll(".snippet-card");

// snippetcard.addEventListener("click" , function(){console.log("donwe")})
// console.log(snippetcard)
snippetcard.forEach(snippetcard => {
    snippetcard.addEventListener(`click` , () => {
        console.log(realdata.length)
    })
})

