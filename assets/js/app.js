window.onload = function () {
        var btn = document.getElementById("button-change");
        var btnDos = document.getElementById("magic");
    
    btn.addEventListener("click", function () {
        var txt = document.getElementById("paragraph");
        txt.innerHTML = "<h2> Git & Github TE AMAMOS</h2>"
    })

    btnDos.addEventListener("click", function() {
        var txtDos = document.getElementById("txt");
        // txtMagic.InnerHTML= " ";
        txtDos.classList.add("disappear");

    })

}