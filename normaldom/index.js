const root = document.getElementById("container");
const button = document.getElementById("btn");
console.log(root);
const h2 = document.createElement("h2");
const img = document.createElement("img");

function showData() {
    h2.innerText = "Welcome to DOM";
    h2.style.color = "red";
    h2.style.backgroundColor = "cyan";
    img.src = "https://via.placeholder.com/200";
    img.setAttribute("height", "200");
    img.setAttribute("width", "200");
    root.style.border = "2px dotted black";
    root.appendChild(img);
    root.appendChild(h2);
}
button.addEventListener("click", showData);