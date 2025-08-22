const title = document.getElementById("top_title");
const text = title.textContent;
title.textContent = ""; // clear the text first

let i = 0;
function typeWriter() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); // speed
  }
}

window.onload = typeWriter; // start when page loads


// Trying out .onclick and .innertext
const top_title = document.querySelector("#top_title");

function change_top(){
  if (top_title.innerText == "Welcome") {
  top_title.innerText = "Don't Press Me";
   } else if (top_title.innerText == "Don't Press Me")
  top_title.innerText = "Stop it";
   else {
  top_title.innerText = "Welcome"
}
}

top_title.onclick = change_top;
// finished Trying out .onclick and .innertext
