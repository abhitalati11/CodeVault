// taking all inputs as variable

let tittle = document.getElementById("tittle");
let lang = document.getElementById("langs");
let code = document.getElementById("code");
let tags = document.getElementById("tags");
const save = document.getElementById("saveBtn");
const cancle= document.getElementById("cancelBtn");

let String = [tittle.value , lang.value , code , tags];
let codeString = JSON.stringify(String);


save.onclick = ()=>{
    localStorage.setItem("tittle" , tittle.value);
    localStorage.setItem("Langauge" , lang.value);
    localStorage.setItem("Code" , code.value);
    localStorage.setItem("Tags" , tags.value);
    localStorage.setItem("Data" , codeString);
    window.close();

    setTimeout(() => {
        window.reload();
    }, 6000);
}

cancle.onclick = () => {
    window.close();
}