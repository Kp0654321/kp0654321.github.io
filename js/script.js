window.onload = function() {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const opcionesBtn = document.getElementById("Opciones");
    const menu = document.getElementById("menu");
    const menuButtons = document.querySelectorAll("#menu button");

    if(isAndroid){
        document.getElementById("Opciones").style.display = "visible"
        opcionesBtn.style.display = "block";
        menu.classList.add("Android");
        menuButtons.forEach(b => b.style.display = "none");

        opcionesBtn.addEventListener("click", () => {
            menu.classList.toggle("Mostrar");
            const mostrar = menu.classList.contains("Mostrar");
            menuButtons.forEach(b => b.style.display = mostrar ? "block" : "none");
        });
    } else {
        opcionesBtn.style.display = "none";
        menuButtons.forEach(b => b.style.display = "inline-flex");
    }
};