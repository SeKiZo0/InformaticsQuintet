//https://codepen.io/GreenSock/pen/WNzLeWX
/*
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
//}*/
gsap.registerPlugin(ScrollTrigger);
//let speed = 500;
//
// hills animation 
//gsap.to("#mountain1", {scrollTrigger : { scrub : 1 }, y: 0.001 * speed})




//Morris section, everyone else can put their stuff above

//This is when the animation starts, it initiates the process still neeed to fix the layers


let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

morrisAnimation.pause()

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function() {
  morrisAnimation.play()
})
