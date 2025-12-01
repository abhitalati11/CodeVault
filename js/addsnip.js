// taking all inputs as variable

let tittle = document.getElementById("tittle");
let lang = document.getElementById("langs");
let code = document.getElementById("code");
let tags = document.getElementById("tags");
const save = document.getElementById("saveBtn");
const cancle= document.getElementById("cancelBtn");

save.onclick = ()=>{
    console.log(tittle.value , lang.value , tags.value);
}

cancle.onclick = () => {
    window.close();
}
