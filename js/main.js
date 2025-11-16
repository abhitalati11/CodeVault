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