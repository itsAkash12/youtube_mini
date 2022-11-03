let container = document.querySelector("#mainContainer");
let iframe = document.querySelector("#iframe");
let showHere = JSON.parse(localStorage.getItem("moviesData"));


let displayHere = (showHere) => {
    
        iframe.src=`http://www.youtube.com/embed/${showHere.id}`;
        let box = document.createElement("div");
        let des = document.createElement("p");
        des.innerText =showHere.name;

        box.append(des);
        container.append(box);
}

displayHere(showHere);