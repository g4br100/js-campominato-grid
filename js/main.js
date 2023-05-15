const button = document.getElementById("button");
const container = document.querySelector(".container");
button.addEventListener("click",
function () {
    const difficolta = document.getElementById("difficolta").value;
    container.innerHTML = "";
    if (difficolta === "Facile") {
        boxnum = 100;
    } else if (difficolta === "Medio") {
        boxnum = 81;
    } else if (difficolta === "Difficile") {
        boxnum = 49;
    }
    for (let i = 1; i <= boxnum; i++) {
        const nwbox = document.createElement("div");
        container.append(nwbox);
        let boxnum = i;
        nwbox.innerHTML += boxnum;
        if (difficolta === "Facile"){
            nwbox.classList.add("box-1");
        } else if (difficolta === "Medio"){
            nwbox.classList.add("box-2");
        } else if (difficolta === "Difficile"){
            nwbox.classList.add("box-3");
        }
        nwbox.addEventListener("click",
        function () {
            nwbox.style.backgroundColor = "green";
        }
        );
    }
}
);

