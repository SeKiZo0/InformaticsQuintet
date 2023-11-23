//https://codepen.io/GreenSock/pen/WNzLeWX
/*
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
//}*/
gsap.registerPlugin(ScrollTrigger);

let carA = gsap.timeline({
  scrollTrigger: {
    trigger: "#carContainer",
    //first one is the part of the trigger that you want to start your animation at and the second one is the position on the viewport
    start: "top bottom",
    //set this to true if tou want your animation to scroll based, in other words you want to animate a progress bar that extends or shortens depending on the position of the page you're on
    scrub: false,
    //rather google this(or use from these examples https://codepen.io/GreenSock/pen/LYVKWGo)
    toggleActions: "restart pause resume pause",
    //markers: true
  }
})

carA.fromTo("#car1",
  //starting value, you can specify anything you want to change, keep in mind that this works similar to a transform animation
  { x: -0 },
  //ending value, here you will also have to specify duration and ease(https://gsap.com/docs/v3/Eases/)
  { x: 2000, duration: 0.9, ease: "power3.in", }
  //This is the position in the timeline specified in seconds(https://gsap.com/docs/v3/GSAP/Timeline/)
  , 2.5)

carA.fromTo("#car2",
  { x: -0 },
  { x: 2000, duration: 0.9, ease: "power3.in", },
  2.7)

carA.fromTo(".infoCard",
//uses percent instead of px(https://gsap.com/community/forums/topic/8148-animating-x-with-percentage/#:~:text=GSAP%20can%20do%20percentage%20x,and%20yPercent%20for%20responsive%20animations.&text=Codepen%20example%20of%20interactive%20responsive,HTML)
  { xPercent: -100 },
  { xPercent: 0 },
  3.6)

var lightCounter = 0.7
//for loop 
  gsap.utils.toArray(".light").forEach((light, i) => {
    let lightsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#carContainer",
        start: "top bottom",
        scrub: false,
        toggleActions: "restart pause resume pause",
        //markers: true
      }
    })
    console.log(i)
    lightsTl.fromTo(light,{backgroundColor: "grey"},{backgroundColor: "red", delay:lightCounter})
    console.log(lightCounter += 0.7)
    if (lightCounter >= 2.1) {
      lightsTl.fromTo(".light",{backgroundColor: "grey"},{backgroundColor: "green"})
    }
  })

  let avatarDelay=0
gsap.utils.toArray(".avatar-circle").forEach((avatar) => {
  let avatarTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#avatars",
      start: "top 25%",
      scrub: false,
      //markers: true,
      toggleActions: "restart pause resume pause",
    }
  })

  avatarTl.from(avatar, {y:100, opacity: 0, delay:avatarDelay})
  avatarDelay += 0.1
})

//RICO ANIMATIONS (Basically just copied from morris ლ(́◉◞౪◟◉‵ლ))

let ricoBtn = document.getElementById('rico');

ricoBtn.addEventListener('click', function () {
  //ACTIONS
  gsap.fromTo("#bike",  {opacity: 0, x: 200} ,{opacity: 1, x: 0, duration: 2, delay: 0.5});
  gsap.fromTo("#ricoTitle", {opacity: 0, y: -50, x: -50}, {opacity: 1, y: 0, x: 0, duration: 2, delay: 0.5});
  gsap.fromTo("#ricoArrow", {opacity: 0, y: -20}, { opacity: 1, y: 0, duration: 2, delay: 2.5});
})

 //the easiest but not the best way(depending on what you want to do) of using GSAP for animations is to use 
 /*gsap.fromTo(".classOfYourChoice(ids also work)",{cssAttribute:beforeValue},{cssAttribute:afterValue, duration:inSeconds, delay:inSeconds})*/
//Morris section, everyone else can put their stuff above
//TODO I need to fix the rest of this

//let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

//morrisAnimation.pause()

let morrisBTN = document.getElementById('morrisA')

morrisBTN.addEventListener('click', function () {

    let morrisTl = gsap.timeline({
      scrollTrigger: {
        scroller: ".block5",
        trigger: ".mContainer",
        start: "-100% top",
        scrub: false,
        //markers: true,
        toggleActions: "restart pause resume pause",
      }
    })
    morrisTl.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});
    morrisTl.fromTo(".mContainer", { x: -50, opacity: 0 }, { x: 50, opacity: 1, duration: 1 },1);
    morrisTl.fromTo("#m5Morris",{ x:0, opacity:1, scale:1} ,{ x:1000, scale:2, opacity:0, duration:1, delay:1},2);
    morrisTl.fromTo("#MorrisText", { x: -50, opacity: 0 }, { x: 5, opacity: 1, duration: 1 },3);
    morrisTl.to(".displacement",{attr: {r: 800},duration: 2},3);

    const MorrisLogo = document.querySelectorAll("#morrisLogo path");

    gsap.utils.toArray(MorrisLogo).forEach((letter,i) => {
      let letterTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mAbout",
          start: "-25% top",
          scrub: false,
          //markers: true,
          toggleActions: "restart pause resume pause",
        }
      })
    
    letterTl.fromTo(letter, {strokeDashoffset:(MorrisLogo[i].getTotalLength())},{strokeDashoffset:0, duration:1, delay: 2})
    })

  //morrisAnimation.play()
})

var MorrisModal = new bootstrap.Modal(document.getElementById('morrisModal'));

// Event listener for modal shown event
MorrisModal._element.addEventListener('shown.bs.modal', function () {
  // Your code to handle modal completion
  // Refreshing scroll trigger
  ScrollTrigger.refresh();
});



/*
for(let i=0; i<MorrisLogo.length; i++){
    console.log(`Letter ${i} is ${MorrisLogo[i].getTotalLength()}`)
}*/