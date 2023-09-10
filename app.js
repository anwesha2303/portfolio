const Dragger=document.querySelector(".dragme");
const on=document.querySelector(".on");
Draggable.create(".dragme", {
    type: "x",
    bounds:".slider",
});
document.querySelector(".home").addEventListener("mousemove",() => {
    if(Math.floor(Dragger.getBoundingClientRect().x) == Math.floor(on.getBoundingClientRect().x)){
        document.querySelector("#video2").style.opacity = 1;
        document.querySelector(".on-text").innerHTML ="";
    } else{
        document.querySelector("#video2").style.opacity =0;
        document.querySelector(".on-text").innerHTML="Turn Me On";
    }
});
var typed = new Typed(".autotype",
{
    strings: ["I am Web Designer"],
    typeSpeed: 150,
    backspeed: 150,
    loop: true,
});
gsap.from(".left,.right",{
   y: (-250),
   delay:0.5,
   duration:1,
   opacity:0,
   stagger: 0.2, 
});
gsap.from('.section p , .section h1',{
    x:-200,
    opacity:0,
    delay:0.5,
    duration:2,
    stagger: 1,
    scrollTrigger:{
        trigger:'.section p',
        scroller:'body',
        end:'90% 90%',
        scrub:2,
        // markers:true,
    }
},'a');
gsap.from('.image img',{
    x:200,
    opacity:0,
    delay:0.5,
    duration:3,
    scrollTrigger:{
        trigger:'.image img',
        scroller:'body',
        end:'90% 90%',
        scrub:5,
    }
},'a');
gsap.from('.services h3',{
    x:200,
    opacity:0,
    delay:0.5,
    duration:3,
    scrollTrigger:{
        trigger:'.services h3',
        scroller:'body',
    }
});
gsap.from('.card',{
    // scale:0,
    opacity:0,
    delay:0.5,
    duration:3,
    // stagger:0.3,
    scrollTrigger:{
        trigger:'.card',
        scroller:'body',
        // markers:true,
    }
});
gsap.from('.lastpage h',{
    y:200,
    opacity:0,
    delay:0.5,
    duration:1,
    scrollTrigger:{
    trigger:'.lastpage h',
    scroller:'body', 
    }
});