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
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet("#nav-part2 h4");

    var video = document.querySelector("#video-container video");
    var videoContainer =document.querySelector("#video-container");
    videoContainer.addEventListener("mouseenter",()=>{
       videoContainer.addEventListener("mousemove",(dets)=>{
         gsap.to(".mousefollower",{
          opacity:0
         })
         gsap.to("#video-cursor",{
          left:dets.x -470,
          y:dets.y -270
         })
       })
    })

    videoContainer.addEventListener("mouseleave",()=>{
      gsap.to(".mousefollower",{
       opacity:1
      })
      gsap.to("#video-cursor",{
        left:"80%",
        top:"-10%"
      })
    })
    videoContainer.addEventListener("click", () => {
      if (video.paused) {
          video.play();
          video.style.opacity = 1;
          document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
          gsap.to("#video-cursor",{
            scale:0.5
          })
      } else {
          video.pause();
          video.style.opacity = 0; // Optional: visually indicate pause
          document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-line"></i>`
          gsap.to("#video-cursor",{
            scale:1
          })
      }
  });
  }
  var circle = document.querySelector(".circle");
  circle.addEventListener("mouseenter",()=>{
    gsap.to(circle,{
      scale:0.5
    })
  })
  circle.addEventListener("mouseleave",()=>{
    gsap.to(circle,{
      scale:1
    })
  })

function flagAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0
    })
  })

}
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}




flagAnimation();
LoadingAnimation();
locomotiveAnimation();
cursorAnimation();
sheryAnimation();


