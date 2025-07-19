function Hide() {
    let para = document.getElementById("mypara");
    
    if (para.style.display === "none") {
        para.style.display = "block";  // Show paragraph
    } else {
        para.style.display = "none";   // Hide paragraph
    }
}
