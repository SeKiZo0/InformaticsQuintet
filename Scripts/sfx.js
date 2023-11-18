//https://codepen.io/GreenSock/pen/WNzLeWX
/*
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
//}*/
gsap.registerPlugin(ScrollTrigger);

let carA = gsap.timeline({
  scrollTrigger: {
    trigger: "#carContainer",
    start: "top bottom",
    scrub: false,
    toggleActions: "restart pause resume pause",
    markers: true
  }
})

carA.fromTo("#car1",
  //starting value, you can specify anything you want to change, keep in mind that this works similar to a transform animation
  { x: -0 },
  //ending value, here you will also have to specify duration and ease(https://gsap.com/docs/v3/Eases/)
  { x: 2000, duration: 1, ease: "power3.in", }
  //This is the position in the timeline specified in seconds(https://gsap.com/docs/v3/GSAP/Timeline/)
  , 6)

carA.fromTo("#car2",
  { x: -0 },
  { x: 2000, duration: 1, ease: "power3.in", },
  6.1)

carA.fromTo(".infoCard",
//uses percent instead of px(https://gsap.com/community/forums/topic/8148-animating-x-with-percentage/#:~:text=GSAP%20can%20do%20percentage%20x,and%20yPercent%20for%20responsive%20animations.&text=Codepen%20example%20of%20interactive%20responsive,HTML)
  { xPercent: -100 },
  { xPercent: 0 },
  7)
var lightCounter = 1
  gsap.utils.toArray(".light").forEach((light) => {
    let lightsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#carContainer",
        start: "top bottom",
        scrub: false,
        toggleActions: "restart pause resume pause",
        markers: true
      }
    })

    lightsTl.fromTo(light,{backgroundColor: "grey"},{backgroundColor: "red", delay:lightCounter})
    console.log(lightCounter += 1)
    if (lightCounter == 6) {
      lightsTl.fromTo(".light",{backgroundColor: "grey"},{backgroundColor: "green"})
    }
  })

 
//Morris section, everyone else can put their stuff above
//TODO I need to fix the rest of this

let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

morrisAnimation.pause()

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function () {

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

    morrisTl.fromTo(container, { x: -50, opacity: 0 }, { x: 50, opacity: 1, duration: 1 })

  })

  morrisAnimation.play()
})


var MorrisModal = new bootstrap.Modal(document.getElementById('morrisModal'));

// Event listener for modal shown event
MorrisModal._element.addEventListener('shown.bs.modal', function () {
  // Your code to handle modal completion
  // Refreshing scroll trigger
  ScrollTrigger.refresh();
});

