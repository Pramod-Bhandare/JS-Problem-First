function Hide() {
    let para = document.getElementById("mypara");

    if (para.style.opacity === "0") {
        para.style.opacity = "1";
        para.style.transform = "scale(1)";
        para.style.display = "block";
    } else {
        para.style.opacity = "0";
        para.style.transform = "scale(0.9)";
        setTimeout(() => {
            para.style.display = "none";
        }, 300); // wait for animation
    }
}
