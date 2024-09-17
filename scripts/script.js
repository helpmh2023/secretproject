particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 75,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#dadada"
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2.75,
            "direction": "none",
            "random": true,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
  });
  
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOut = document.querySelector("[data-cursor-out]");
  
  window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
  
      // Instantly move the inner dot
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  
      // Animate the outer circle using transform
      cursorOut.style.transform = `translate(${posX-20}px, ${posY-20}px)`;
  });
  
  

  