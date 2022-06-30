var block = document.getElementById("ran1");
const tokk = document.querySelectorAll("[tokk]");
let hr = document.createElement("hr");


 /*
var a = 12;
for (let i = 0; i < a ; i++) {
    block.appendChild(img);
} */
show()

function show() {
    for (const element of tokk) {
        let value = element.getAttribute("value");
        console.log(value);
        for (let i = 0; i < value; i++) {
            let img = document.createElement("img");
            img.src = "img/chaise.png";
            img.id = "jaune"
            element.appendChild(img);
        }
    }
}