function look(elemId1, elemId2) {
    let elem1 = document.getElementById(elemId1);
    let elem2 = document.getElementById(elemId2);
    let elem3 = document.getElementById("portfolio_show");

    if (elem1.style.display === "block") {
        elem1.style.display = "none";
        elem2.style.filter = "none";
        elem3.scrollTo(0, 0);
    } else {
        elem1.style.display = "block";
        elem1.style.animation = "show 1s"
        elem2.style.filter = "blur(5px)";
        elem3.scrollTo(0, 0);
    }
}

function showPage(elemId1, elemId2, elemId3) {
    let elem1 = document.getElementById(elemId1);
    let elem2 = document.getElementById(elemId2);
    let elem3 = document.getElementById(elemId3);
    let elem4 = document.getElementById("portfolio_show");

    elem4.scrollTo(0, 0);
    elem1.style.display = "block";
    elem1.style.animation = "show 0.5s"
    elem2.style.display = "none";
    elem3.style.display = "none";
}