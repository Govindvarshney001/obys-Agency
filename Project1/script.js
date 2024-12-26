const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });
  
  function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  function LoadingAnimation() {
    const tl = gsap.timeline();
    tl.from(".line h1", {
      y: 150,
      stagger: 0.5,
      duration: 0.6,
      delay: 0.5,
    });
    tl.from("line1-par1", {
      opacity: 0,
      onStart: () => {
        const h5timer = document.querySelector("#line1-part1 h5");
        let grow = 0;
        const interval = setInterval(() => {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
            clearInterval(interval);
          }
        }, 35);
      },
    });
    tl.to(".line h2", {
      animationName: "anime",
      opacity: 1,
    });
    tl.to("#loader", {
      opacity: 0,
      duration: 0.4,
      delay: 5,
    });
    tl.from("#page1", {
      delay: 0.2,
      y: 1600,
      opacity: 0,
      duration: 0.5,
      ease: Power4,
    });
    tl.to("#loader", {
      display: "none",
    });
    tl.from("#nav", {
      opacity: 0,
    });
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
      y: 120,
      stagger: 0.2,
    });
  }
  
  function cursorAnimation() {
    const cursor = document.getElementById("cursor");
    const cursorPos = { x: 0, y: 0 };
    const targetPos = { x: 0, y: 0 };
    const speed = 0.1;
  
    document.addEventListener("mousemove", (event) => {
      targetPos.x = event.clientX;
      targetPos.y = event.clientY;
    });
  
    function updateCursor() {
      cursorPos.x += (targetPos.x - cursorPos.x) * speed;
      cursorPos.y += (targetPos.y - cursorPos.y) * speed;
  
      cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
  
      requestAnimationFrame(updateCursor); // Continue the animation
    }
  
    updateCursor(); // Start the cursor animation
  
    // Optional: Magnet effect using Shery.js
    Shery.makeMagnet("#nav-part2 h4");
  }
  
  LoadingAnimation();
  locomotiveAnimation();
  cursorAnimation();
  