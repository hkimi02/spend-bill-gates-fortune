function verif(prix) {
    var p = document.getElementById("worth");
    if (132100000000000 <= prix) {
        console.log(true);
    } else {
        console.log(false);
    };
}

function buySmthng(prix, id_number) {
    let num = document.getElementById(id_number);
    let fort = document.getElementById("worth");
    if (verif(prix)) {
        fort.innerHTML -= prix;
        num.innerHTML++;
    } else {
        alert("sell something");
    };
};


function sellsmthng() {
    if (num > 0) {
        num.innerHTML--;
        fort.innerHTML += prix.innerHTML;

    }
}