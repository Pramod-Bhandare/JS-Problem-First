let names = ["Pramod", "Ashwini", "Pitty", "Rahul"];
let index = 0; 

function changeName() {
    let para = document.getElementById("mypara");

    para.textContent = "Hi! I am " + names[index];

    index = (index + 1) % names.length;
}
