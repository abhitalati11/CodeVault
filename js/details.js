let backbtn = document.getElementById(`backBtn`);
let copybtn = document.getElementById(`copyBtn`);

backbtn.onclick = () => {
    window.close();
}

copybtn.onclick = () => {
    let copy = document.getElementById(`toCopy`);
    console.log(copy);
}