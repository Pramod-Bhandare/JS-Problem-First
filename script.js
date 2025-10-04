function Hide() {
    let para = document.getElementById("mypara");
    let btn = document.querySelector("button");

    if (para.style.display === "none") {
        para.style.display = "block";   
        btn.textContent = "🙈 Hide Text"; 
    } else {
        para.style.display = "none";
        btn.textContent = "👁 Show Text";
    }
}
