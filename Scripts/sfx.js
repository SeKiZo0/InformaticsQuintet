//https://codepen.io/GreenSock/pen/WNzLeWX
/*
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}*/
gsap.registerPlugin(ScrollTrigger);
let speed = 500;

// hills animation 
//gsap.to("#mountain1", {scrollTrigger : { scrub : 1 }, y: 0.001 * speed})



let panels = gsap.utils.toArray(".panels")

panels.forEach((panel, i) => {
  
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: i === panels.length -1 ? false : true, 
    end:"bottom ",
    pinSpacing: false 
  });
});

//Morris section, everyone else can put their stuff above
