function changeImage() {
     if (
       document.getElementById("bulbImage").src ===
       "images/bulb-off.png"
     ) {
       document.getElementById("bulbImage").src =
         "images/bulb-off.png";
       document.getElementById("switch").innerHTML = "Desligar";
       document.getElementById("main").classList.remove("lightoff");
       document.getElementById("main").classList.add("lighton");
     } else if (
       document.getElementById("bulbImage").src ===
       "images/bulb-on.png"
     ) {
       document.getElementById("bulbImage").src =
         "images/bulb-off.png";
       document.getElementById("switch").innerHTML = "Ligar";
       document.getElementById("main").classList.add("lightoff");
       document.getElementById("main").classList.remove("lighton");
     }
   }
   
   document.getElementById("switch").addEventListener("click", changeImage);
   