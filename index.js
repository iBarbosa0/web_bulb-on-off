let btn = document.getElementById("toggleBtn");

let bulb = document.getElementById("bulb");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
     if (btn.textContent. includes("On")) {
          bulb.src = "/bulb-on.png";
          btn.textContent = "Turn Off";
     }else {
          bulb.src = "/bulb-off.png";
          btn.textContent = "Turn On";
     }
}