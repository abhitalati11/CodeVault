// to open add-snippet form from homepage

const addbtn = document.getElementById("addSnippetBtn");

addbtn.onclick = function(){
    window.open("add.html");
}

// visit snippet by click on snippet-card

let snippetCard = document.getElementById(`cardS`);

// snippetCard.addEventListener(`click` , function(){
//     window.open("detail.html");
// });

// adding daynamic divs to homepage
let sinppetgrid = document.getElementById(`snippet-grid`);

function addingDiv(){
}



// getting local storage from device


const rawdata = localStorage.getItem("Data");
const realdata = JSON.parse(rawdata);


if(localStorage.getItem("Data")){
    // console.log("works");
    for(let i = 0 ; i < realdata.length ; i++){
        console.log(realdata[i].tittle);
        let code = realdata[i].code;
        let tittle = realdata[i].tittle;
        let tags = realdata[i].tags;
        let lang = realdata[i].lang;

        // adding div function
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
    console.log("Dont know");
}
// function checkLocal(){

// if(code !== null && tittle !== null && tags !== null && lang !== null) {
//     // console.log("it work");
// }
// else{
//     // console.log("it doent work");
// }    
// }
