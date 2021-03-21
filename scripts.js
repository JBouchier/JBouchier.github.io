var src = "";

function onBtnClick(e) {
    var x = document.getElementById("img-cont");
    if (x.style.visibility !== "hidden") {
      x.style.visibility = "hidden";
    }
}

function onImgClick(e) {
    var viewer = document.getElementById("viewer");
    var x = document.getElementById("img-cont");
    viewer.src = e.src;
    if (x.style.visibility !== "hidden") {
        return;
    }
    x.style.visibility = "visible";
}