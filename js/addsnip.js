// taking all inputs as variable

let tittle = document.getElementById("tittle");
let lang = document.getElementById("langs");
let code = document.getElementById("code");
let tags = document.getElementById("tags");
const save = document.getElementById("saveBtn");
const cancle= document.getElementById("cancelBtn");
localStorage.setItem("Data" , "there it is ")

function checkid(){
    let Lid = realAdd.length;
    let index = Lid - 1;
    console.log(`index is ${index}`);
    console.log(`Lid is ${Lid}`);
}

save.onclick = ()=>{
    checkdata();
    // checkid();
    // console.log(tittle.value);
}

cancle.onclick = () => {
    window.close();
}

function checkdata() {
    const realdata = JSON.parse(localStorage.getItem("Data"));
    console.log(realdata);
}