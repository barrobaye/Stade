var block = document.getElementById("ran1");
const tokk = document.querySelectorAll("[tokk]");
let hr = document.createElement("hr");
const tri2 = document.querySelectorAll("[tri2]");
const tric = document.querySelectorAll("[tric]");


 /*
var a = 12;
for (let i = 0; i < a ; i++) {
    block.appendChild(img);
} */
show()

function show() {
    for (const element of tokk) {
        let value = element.getAttribute("value");
      
        for (let i = 0; i < value; i++) {
            let img = document.createElement("img");
            img.src = "img/chaise.png";
            img.id = "jaune"
            element.appendChild(img);
        }
    }
    for (const element of tri2) {
        let value = element.getAttribute("value");
        for (let i = 0; i < value; i++) {
            let img = document.createElement("img");
            img.src = "img/chaisetribune2.png";
            img.id = "mouv"
            element.appendChild(img);
        }
    }
    for (const element of tric) {
        let value = element.getAttribute("value");
        for (let i = 0; i < value; i++) {
            let img = document.createElement("img");
            img.src = "img/chaisetribune4.png";
            img.id = "vue"
            element.appendChild(img);
        }
    }

}