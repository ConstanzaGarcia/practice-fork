window.onload = function () {
    var btn = document.getElementById("button-change");
    var txt = document.getElementById("paragraph");
    var btnDos = document.getElementById("magic");
    var txtDos = document.getElementById("txt");

    btn.addEventListener("click", function () {
        txt.innerHTML = "<h2> Git & Github TE AMAMOS</h2>";
    })

    btnDos.addEventListener("click", function() {
        // txtDos.InnerHTML= " ";
        txtDos.classList.add("disappear");

    })

}