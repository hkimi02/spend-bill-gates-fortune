function verification(entrer) {
    let car = "1234567890[]()+-.*,/%";
    for (var i = 0; i < entrer.length; i++) {
        if (car.indexOf(car.charAt(i)) == -1) {
            return false;
        }
        return true;
    }
}

function ajouter(car) {
    document.getElementById("eq").innerHTML += car;
}

function effacer() {
    document.getElementById("eq").innerHTML = "";
}

function calcul() {
    let res = document.getElementById("eq");
    if (verification(res.innerText)) {
        res.innerHTML = eval(res.innerText);
    }
}