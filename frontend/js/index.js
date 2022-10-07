window.onload = function() {
    setTimeout(function() {
        window.location.href = "./homepg.html";
    }, 5000);
    setInterval(function() {
        let elt = document.querySelector(".dots-blinking");
        if(elt.innerHTML === "")
            document.querySelector(".dots-blinking").innerHTML = ".";
        else if(elt.innerHTML === ".")
            document.querySelector(".dots-blinking").innerHTML = "..";
        else if(elt.innerHTML === "..")
            document.querySelector(".dots-blinking").innerHTML = "...";
        else
            document.querySelector(".dots-blinking").innerHTML = "";
    }, 500);
}