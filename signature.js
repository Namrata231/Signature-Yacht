var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"90px",
    duration:0.8,
    delay:2.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end: "top -100%",
        scrub:2
    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="2px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #4e8a8a"
        crsr.style.backgroundColor="#4e8a8a"
    })
})
gsap.from("#aboutus img, #about",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4
})
gsap.from(".card",{
    scale:0.9,
    opacity:0,
    duration:1,
    stagger:0.4
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
gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
       trigger:"#colon2",
       scroller:"body",
       start:"bottom 55%",
       end:"bottom 35%",
       scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
     }
} )
