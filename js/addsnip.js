// taking all inputs as variable

let tittle = document.getElementById("tittle");
let lang = document.getElementById("langs");
let code = document.getElementById("code");
let tags = document.getElementById("tags");
const save = document.getElementById("saveBtn");
const cancle= document.getElementById("cancelBtn");

// using data to check/test is it works or not 
const data = [
    {c_id : 1 , tittle : `tittle` , code : `code` , tags : `tags` , lang : `lang` },
    {c_id : 2 , tittle : `tittle` , code : `code` , tags : `tags` , lang : `lang` },
]
const newd = JSON.stringify(data);
const setdata = localStorage.setItem("Data" , newd);

const wrealdata = localStorage.getItem("Data");
const realdata = JSON.parse(wrealdata);

function checkid(){
    let Lid = realdata.length;
    let index = Lid - 1;
    console.log(`index is ${index}`);
    console.log(`Lid is ${Lid}`);
}

save.onclick = ()=>{
    // checkdata();
    checkid();
    console.log(tittle.value);
}

cancle.onclick = () => {
    window.close();
}

function checkdata() {
    if(realdata){
        let lastid = realdata.length;
        let newcid = [lastid].tittle;
        console.log(lastid);
        console.log(realdata);
    }
    else{
        console.log("it doesnt exists")
    }
}