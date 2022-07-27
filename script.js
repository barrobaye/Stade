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
            let chaise = document.createElement("div");
            chaise.id = "jaune"
            element.appendChild(chaise);
        }
    }
    for (const element of tri2) {
        let value = element.getAttribute("value");
        for (let i = 0; i < value; i++) {
            let chaise = document.createElement("div");
            chaise.id = "mouv"
            element.appendChild(chaise);
        }
    }
    for (const element of tric) {
        let value = element.getAttribute("value");
        for (let i = 0; i < value; i++) {
            let chaise = document.createElement("div");
            chaise.id = "vue"
            element.appendChild(chaise);
        }
    }

}