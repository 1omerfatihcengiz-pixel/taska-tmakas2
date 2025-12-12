import * as app2 from "./app2.js";

const tas = document.querySelector(".tasbutonu");
const kagit = document.querySelector(".kagitbutonu");
const makas = document.querySelector(".makasbutonu");

const vsText = document.getElementById("ff");
document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});
let playerHP = 100;
let pcHP = 100;

function taskahitmakas() {
    const hesaplanan = ["tas","kagit","makas"];
    const heaplayan = app2.sifrdanikiyekadarrandom();
    return hesaplanan[heaplayan];
}

function kazananbulucu(p1, pc) {
    if (p1 === pc) {
        return "berabere";
    }
    if (
        (p1 === "tas" && pc === "makas") ||
        (p1 === "kagit" && pc === "tas") ||
        (p1 === "makas" && pc === "kagit")
    ) {
        return "p1 kazandı";   
    } else {
        return "pc kazandı";  
    }
}

function oyun(p1_ci) {
    const pc_ci = taskahitmakas();
    const son = kazananbulucu(p1_ci, pc_ci);

 
    if (son === "p1 kazandı") {
        pcHP -= 20;
    } else if (son === "pc kazandı") {
        playerHP -= 20;
    }


    document.getElementById("hpPlayer").style.width = playerHP + "%";
    document.getElementById("hpPC").style.width = pcHP + "%";

    vsText.textContent = `Sen: ${p1_ci} | PC: ${pc_ci} → ${son}`;


    if (playerHP <= 0) {
        alert("PC kazandı! Oyun bitti.");
    }
    if (pcHP <= 0) {
        alert("Sen kazandın! Oyun bitti.");
    }
}

// BUTONLAR
tas.addEventListener("click", () => oyun("tas"));
kagit.addEventListener("click", () => oyun("kagit"));
makas.addEventListener("click", () => oyun("makas"));
