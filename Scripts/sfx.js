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
let morrisAnimation2 = gsap.fromTo('#morrisModal',{width: "99%"},{width:"100%",duration: 2});

morrisAnimation.pause()
morrisAnimation2.pause()

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function() {
  gsap.utils.toArray(".mContainer").forEach((container) => {

    let morrisTl = gsap.timeline({
      scrollTrigger: {
        scroller: ".block5",
        trigger: container,
        start: "20% top",
        scrub: false,
        markers: true,
        toggleActions:"play none none reverse"
      }
    })
  
  morrisTl.fromTo(container,{x:-1000, y:200},{x:500,y:200, duration: 2})
  
  })
  morrisAnimation.play()
  morrisAnimation2.play()

})

