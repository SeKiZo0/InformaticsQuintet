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

carA.fromTo("#car3",
  { x: -0 },
  { x: 2000, duration: 0.9, ease: "power3.in", },
  2.6)

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
  });
  console.log(i);
  lightsTl.fromTo(light, { backgroundColor: "grey" }, { backgroundColor: "red", delay: lightCounter })
  console.log(lightCounter += 0.7);
  if (lightCounter >= 2.1) {
    lightsTl.fromTo(".light", { backgroundColor: "grey" }, { backgroundColor: "green" })
  }
})
  ;
let avatarDelay = 0
gsap.utils.toArray(".avatar-circle").forEach((avatar) => {
  let avatarTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#avatars",
      start: "top 25%",
      scrub: false,
      //markers: true,
      toggleActions: "restart pause resume pause",
    }
  });

  avatarTl.from(avatar, { y: 100, opacity: 0, delay: avatarDelay })
  avatarDelay += 0.1
});

//RICO ANIMATIONS (Basically just copied from morris ლ(́◉◞౪◟◉‵ლ))

let ricoBtn = document.getElementById('rico');

ricoBtn.addEventListener('click', function () {
  //ACTIONS
  gsap.fromTo("#bike", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  gsap.fromTo("#ricoTitle", { opacity: 0, y: -50, x: -50 }, { opacity: 1, y: 0, x: 0, duration: 1, delay: 0.5 });
  gsap.fromTo("#ricoArrow", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
});


//Ross ANIMATIONS (Basically just copied from morris ლ(́◉◞౪◟◉‵ლ))

let rossBtn = document.getElementById('ross');

rossBtn.addEventListener('click', function () {
  //ACTIONS
  gsap.fromTo("#carr", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 2, delay: 0.5 });
  gsap.fromTo("#RossText", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2, delay: 0.5 });
});

//the easiest but not the best way(depending on what you want to do) of using GSAP for animations is to use 
/*gsap.fromTo(".classOfYourChoice(ids also work)",{cssAttribute:beforeValue},{cssAttribute:afterValue, duration:inSeconds, delay:inSeconds})*/
//Morris section, everyone else can put their stuff above
//TODO I need to fix the rest of this

//let morrisAnimation = gsap.fromTo('.displacement',{attr: {r:0}},{attr: {r: 600},duration: 2});

//morrisAnimation.pause()

let morrisBTN = document.getElementById('morrisA');

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
  });
  morrisTl.fromTo('.displacement', { attr: { r: 0 } }, { attr: { r: 600 }, duration: 2 });
  morrisTl.fromTo(".mContainer", { x: -100, opacity: 0 }, { x: 10, opacity: 1, duration: 1 }, 1);
  morrisTl.fromTo("#m5Morris", { x: 0, opacity: 1, scale: 1 }, { x: 1000, scale: 2, opacity: 0, duration: 1, delay: 1 }, 2).to("#m5Morris", { x: 10000 });
  morrisTl.fromTo("#MorrisText", { x: -100, opacity: 0 }, { x: -10, opacity: 1, duration: 1 }, 3);
  morrisTl.to(".displacement", { attr: { r: 800 }, duration: 2 }, 3);

  const MorrisLogo = document.querySelectorAll("#morrisLogo path");

  gsap.utils.toArray(MorrisLogo).forEach((letter, i) => {
    let letterTl = gsap.timeline({
      scrollTrigger: {
        scroller: ".mContent",
        trigger: ".mAbout",
        start: "-100% top",
        scrub: false,
        //markers: true,
        toggleActions: "restart pause resume pause",
      }
    });

    letterTl.fromTo(letter, { strokeDashoffset: (MorrisLogo[i].getTotalLength()) }, { strokeDashoffset: 0, duration: 1, delay: 2 })
  });

  //morrisAnimation.play()
});

var container = document.querySelector(".morrisRight");
var mask = document.querySelector(".mMaskContainer");
//var maskContent = document.querySelector(".mMask-content");

container.addEventListener("mousemove", onMove);


function onMove(e) {

  var rect = e.target.getBoundingClientRect();
  var x = Math.round(((e.clientX - rect.left) / document.querySelector('.morrisRight').clientWidth) * 100); //x position within the element.
  var y = Math.round(((e.clientY - rect.top) / document.querySelector('.morrisRight').clientHeight) * 100);  //y position within the element.
  //console.log("Left? : " + x + " ; Top? : " + y + ".");

  gsap.to(mask, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out"
  })
}




var MorrisModal = new bootstrap.Modal(document.getElementById('morrisModal'));

// Event listener for modal shown event
MorrisModal._element.addEventListener('shown.bs.modal', function () {
  // Your code to handle modal completion
  // Refreshing scroll trigger
  ScrollTrigger.refresh();
});

let trackSVG = document.querySelector("#trackPath");
//console.log(trackSVG);
const point = trackSVG.getPointAtLength(10);
const point2 = trackSVG.getPointAtLength(12);
const point3 = trackSVG.getPointAtLength(18);
console.log(point);
console.log(point2);
console.log(point3);
const logo = document.getElementsByTagName("path");


const circle = document.querySelector('#RCar');

let sM = document.querySelector(".racetrack").clientHeight / 500
console.log(sM);

// Create an object that gsap can animate
const val = { distance: 0 };

var rotationCar = 0;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let scoremultiplier = 4;

let gameScore = document.getElementById("gameScore");

const carInfo = gsap.timeline({ paused: true }).to(val, {
  // Animate from distance 0 to the total distance
  distance: trackSVG.getTotalLength() - (60 + 920),
  // first point distance: trackSVG.getTotalLength() - (60 + 920),
  // second point :distance: trackSVG.getTotalLength()-(60+500),
  // last point : trackSVG.getTotalLength()-(60+290)
  duration: 2,

  // Function call on each frame of the animation
  onUpdate: () => {
    // Query a point at the new distance value
    const point1 = trackSVG.getPointAtLength(val.distance);
    const point2 = trackSVG.getPointAtLength(val.distance + 1);
    var rotate = Math.atan2(point2.y * sM - point1.y * sM, point2.x * sM - point1.x * sM);
    // Update the circle coordinates
    gsap.to(circle, { x: point1.x * sM - 20, y: point1.y * sM })
    //uses previous rotation value as reference
    gsap.fromTo(circle, { rotation: rotationCar }, { rotation: radians_to_degrees(rotate) })
    rotationCar = radians_to_degrees(rotate);
    scoremultiplier += getRandomArbitrary(0, 2);
    gameScore.innerHTML = "SCORE: " + Math.trunc(val.distance * scoremultiplier);
  },
  onComplete: function () {
    // Pause the timeline at the end of this animation
    carInfo.pause();
    gsap.fromTo("#point1", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
  },
}).to(val, {
  // Animate from distance 0 to the total distance
  distance: trackSVG.getTotalLength() - (60 + 500),
  // Make the animation lasts 5 seconds
  duration: 4,
  // Function call on each frame of the animation
  onStart: () => {
    gsap.fromTo("#point1", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0 });
  },
  onUpdate: () => {
    // Query a point at the new distance value
    const point1 = trackSVG.getPointAtLength(val.distance);
    const point2 = trackSVG.getPointAtLength(val.distance + 1);
    var rotate = Math.atan2(point2.y * sM - point1.y * sM, point2.x * sM - point1.x * sM);
    // Update the circle coordinates
    gsap.to(circle, { x: point1.x * sM - 20, y: point1.y * sM })
    //uses previous rotation value as reference
    gsap.fromTo(circle, { rotation: rotationCar }, { rotation: radians_to_degrees(rotate) })
    rotationCar = radians_to_degrees(rotate);
    scoremultiplier += getRandomArbitrary(0, 2);
    gameScore.innerHTML = "SCORE: " + Math.trunc(val.distance * scoremultiplier);
  },
  onComplete: function () {
    // Pause the timeline at the end of this animation
    carInfo.pause();
    gsap.fromTo("#point2", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
  },
}).to(val, {
  // Animate from distance 0 to the total distance
  distance: trackSVG.getTotalLength() - (60 + 290),
  // Make the animation lasts 5 seconds
  duration: 2,
  // Function call on each frame of the animation
  onStart: () => {
    gsap.fromTo("#point2", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0 });
  },
  onUpdate: () => {
    // Query a point at the new distance value
    const point1 = trackSVG.getPointAtLength(val.distance);
    const point2 = trackSVG.getPointAtLength(val.distance + 1);
    var rotate = Math.atan2(point2.y * sM - point1.y * sM, point2.x * sM - point1.x * sM);
    // Update the circle coordinates
    gsap.to(circle, { x: point1.x * sM - 20, y: point1.y * sM })
    //uses previous rotation value as reference
    gsap.fromTo(circle, { rotation: rotationCar }, { rotation: radians_to_degrees(rotate) })
    rotationCar = radians_to_degrees(rotate);
    scoremultiplier += getRandomArbitrary(0, 2);
    gameScore.innerHTML = "SCORE: " + Math.trunc(val.distance * scoremultiplier);
  },
  onComplete: function () {
    // Pause the timeline at the end of this animation
    carInfo.pause();
    gsap.fromTo("#point3", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
  },
}).to(val, {
  // Animate from distance 0 to the total distance
  distance: trackSVG.getTotalLength() - (60),
  // Make the animation lasts 5 seconds
  duration: 2,
  // Function call on each frame of the animation
  onStart: () => {
    gsap.fromTo("#point3", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0 });
  },
  onUpdate: () => {
    // Query a point at the new distance value
    const point1 = trackSVG.getPointAtLength(val.distance);
    const point2 = trackSVG.getPointAtLength(val.distance + 1);
    var rotate = Math.atan2(point2.y * sM - point1.y * sM, point2.x * sM - point1.x * sM);
    // Update the circle coordinates
    gsap.to(circle, { x: point1.x * sM - 20, y: point1.y * sM })
    //uses previous rotation value as reference
    gsap.fromTo(circle, { rotation: rotationCar }, { rotation: radians_to_degrees(rotate) })
    rotationCar = radians_to_degrees(rotate);
    scoremultiplier += getRandomArbitrary(0, 2);
    gameScore.innerHTML = "SCORE: " + Math.trunc(val.distance * scoremultiplier);
  },
  onComplete: function () {
    // Pause the timeline at the end of this animation
    const element = document.getElementById("avatars");
    console.log(element);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    carInfo.pause();
  },
});

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

document.querySelector(".racetrack").addEventListener("click", function () {
  carInfo.play();
});

document.querySelector("#point1").addEventListener("click", function () {
  carInfo.play();
});

document.querySelector("#point2").addEventListener("click", function () {
  carInfo.play();
});

document.querySelector("#point3").addEventListener("click", function () {
  carInfo.play();
});

/*
for(let i=0; i<MorrisLogo.length; i++){
    console.log(`Letter ${i} is ${MorrisLogo[i].getTotalLength()}`)
}*/


//Stephen Stuff
let stephenBTN = document.getElementById('stephen');

stephenBTN.addEventListener('click', function () {
  //ACTIONS
  let stephenTL = gsap.timeline({
    scrollTrigger: {
      scroller: ".block1",
      trigger: "#StephenText",
      start: "-1000% top",
      scrub: false,
      //markers: true,
      toggleActions: "restart pause resume pause",
    }
  })
  stephenTL.fromTo(".BMWM8", { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 2 });
  stephenTL.to(".BMWM8", { opacity: 0, x: -200, duration: 1 }, 2);
  stephenTL.fromTo("#StephenText", { x: -50, opacity: 0 }, { x: 5, opacity: 1, duration: 1 }, 3);
})

var stephenModal = new bootstrap.Modal(document.getElementById('stephenModal'));
const sMatrix = () => {
  // Initialising the canvas
  var canvas = document.querySelector('.sCanvas'),
      ctx = canvas.getContext('2d');
  
  // Setting the width and height of the canvas
  canvas.width = document.querySelector('.block1').clientWidth;
  canvas.height = document.querySelector('.block1').clientHeight;
  
  // Setting up the letters
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  letters = letters.split('');
  
  // Setting up the columns
  var fontSize = 10,
      columns = canvas.width / fontSize;
  
  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  
  // Setting up the draw function
  function draw() {
    ctx.fillStyle = 'rgba(67, 139, 247, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }
  
  // Loop the animation
  setInterval(draw, 33);
  }

// Event listener for modal shown event
stephenModal._element.addEventListener('shown.bs.modal', function () {
  // Your code to handle modal completion
  sMatrix();
  // Refreshing scroll trigger
  ScrollTrigger.refresh();
});

//Stephen Stuff

//Connor Stuff Start

//Connor Stuff End

//PODIUM BEHAVIOUR


