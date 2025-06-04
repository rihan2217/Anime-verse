
let crsr = document.querySelector(".cursor");
let crsr_blr = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x +20 +"px";
    crsr.style.top = dets.y +"px";

    crsr_blr.style.left =dets.x -150 +"px";
    crsr_blr.style.top = dets.y -150 +"px";
})

gsap.to(".nav",{
    backgroundColor :"#000",
    height:"100px",
    duration:0.8,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})


gsap.to("main" ,{
    backgroundColor:"#000",
    scrollTrigger: {
              trigger: "main",
              scroller: "body",
              // markers:true,
              start: "top -25%",
              end: "top -70%",
              scrub: 2,
            },
})

let h4 =document.querySelectorAll(".nav h4");

h4.forEach(function(elem){
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale=3;
        crsr.style.border ="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale=1;
        crsr.style.border ="0px solid orange";
        crsr.style.backgroundColor="orange";
    })
})

gsap.from(".about-us img , .about-us-in",{
    y:90,
    opacity:0,
    dusration:1,
    stagger:0.4,
    scrollTrigger :{
        trigger:".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    dusration:1,
    stagger:0.1,
    scrollTrigger :{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})