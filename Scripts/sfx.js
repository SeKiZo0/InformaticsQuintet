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

//let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

//morrisAnimation.pause()
/*
gsap.fromTo(".displacement", {
  scrollTrigger: {
    scroller: ".block5",
    trigger: ".mContent",
    start: "top top",
    scrub: true
  },
  attr: {r:0},
  attr: {r: 600}
})
*/

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function() {

  gsap.utils.toArray(".mContainer").forEach((container) => {
    
    let morrisTl = gsap.timeline({
      scrollTrigger: {
        scroller: ".block5",
        trigger: container,
        start: "-100% top",
        scrub: false,
        //markers: true,
        
      }
    })
  
  morrisTl.fromTo(container,{x:-50, opacity:0},{x:50, opacity:1, duration: 1})
  
  })
  
  //morrisAnimation.play()
})


var MorrisModal = new bootstrap.Modal(document.getElementById('morrisModal'));

// Event listener for modal shown event
MorrisModal._element.addEventListener('shown.bs.modal', function () {
    // Your code to handle modal completion
    ScrollTrigger.refresh();
});

let carA = gsap.timeline({
  scrollTrigger: {
    trigger: "#carContainer1",
    start: "top bottom",
    scrub: false,
    toggleActions:"play none none reverse",
    markers: true
  }
})

carA.fromTo("#car1",{x:-50}, {x:2000, duration: 1, delay:5})

let carB = gsap.timeline({
  scrollTrigger: {
    trigger: "#carContainer2",
    start: "top bottom",
    scrub: false,
    toggleActions:"play none none reverse",
    markers: true
  }
})

carB.fromTo("#car2",{x:-50}, {x:2000, duration: 1, delay:4.9})

