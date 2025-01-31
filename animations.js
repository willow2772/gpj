document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header h1');
  
  if (header) {
    function pulsateHeader() {
      header.style.transition = 'transform 0.5s ease-in-out';
      header.style.transform = 'scale(1.05) rotate(2deg)';
      
      setTimeout(() => {
        header.style.transform = 'scale(1) rotate(-2deg)';
      }, 500);
    }

    setInterval(pulsateHeader, 2000);
  }
});