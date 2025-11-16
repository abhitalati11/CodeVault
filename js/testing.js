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