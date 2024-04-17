let isLightOn = false;

const lampImg = document.getElementById('lamp');
const toggleBtn = document.getElementById('toggleButton');

toggleBtn.addEventListener('click', function() {
  if (isLightOn) {
    lampImg.src = 'images/bulb-on.png';
    toggleBtn.textContent = 'Apagar';
  } else {
    lampImg.src = 'images/bulb-off.png';
    toggleBtn.textContent = 'Acender';
  }

  isLightOn = !isLightOn;
});
