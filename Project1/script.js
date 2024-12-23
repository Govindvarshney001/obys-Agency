var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.5,
    duration:0.6,
    delay:0.5
})
tl.from("line1-par1",{
    opacity:0,
    onStart:()=>{
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow =0;
         setInterval(()=>{
            if(grow<100){
                h5timer.innerHTML = grow++;
            }else{
                h5timer.innerHTML = grow;
            }
        },35)
    }
})
tl.to('.line h2',{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})
tl.to("#laoder",{
    display:"none"
})
