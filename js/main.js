// to open add-snippet form from homepage

const addbtn = document.getElementById("addSnippetBtn");

addbtn.onclick = function(){
    window.open("add.html");
}

// visit snippet by click on snippet-card

let snippetCard = document.getElementById(`cardS`);

snippetCard.addEventListener(`click` , function(){
    window.open("detail.html");
});

// adding daynamic divs to homepage
let sinppetgrid = document.getElementById(`snippet-grid`);

function addingDiv(){
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



// getting local storage from device

let code = localStorage.getItem(`Code`);
let tittle = localStorage.getItem(`tittle`);
let tags = localStorage.getItem(`Tags`);
let lang = localStorage.getItem(`Langauge`);


if(checkLocal() , true){
    console.log("works");
    addingDiv();
}
else{
    console.log("Dont know");
}
function checkLocal(){

if(code !== null && tittle !== null && tags !== null && lang !== null) {
    console.log("it work");
}
else{
    console.log("it doent work");
}    
}

// for making js obj and store data in that 

const data = [
    {c_id : 1 , tittle : `${tittle}` , code : `${code}` , tags : `${tags}` , lang : `${lang}` },
    {c_id : 2 , tittle : `${tittle}` , code : `${code}` , tags : `${tags}` , lang : `${lang}` },
]

// const dataString = JSON.stringify(data);

// localStorage.setItem("Data" , dataString);

// const realdata = JSON.parse(dataString);
// console.log(realdata);

// let lastid = realdata.length;
// let lstIn = lastid - 1;
// console.log(lastid);
// console.log(lstIn);
