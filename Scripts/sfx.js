//https://codepen.io/GreenSock/pen/WNzLeWX
/*
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}*/
gsap.registerPlugin(ScrollTrigger);
let speed = 500;

// hills animation 
//gsap.to("#mountain1", {scrollTrigger : { scrub : 1 }, y: 0.001 * speed})

/*
let panels = gsap.utils.toArray(".panels")

panels.forEach((panel, i) => {
  
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: i === panels.length -1 ? false : true, 
    //end:"bottom ",
    snap: 1,
    pinSpacing: false 
  });
});
*/




//Morris section, everyone else can put their stuff above

//This is when the animation starts, it initiates the process still neeed to fix the layers
/*
let morrisTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#morrisP",
    start: "-30% top",
    end: "bottom top",
    scrub: false,
    //markers: true,
    toggleActions:"play none none reverse"
  }
})
*/
//This is a animation
let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

morrisAnimation.pause()

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function() {
  morrisAnimation.play()
})
