gsap.registerPlugin(ScrollTrigger);

gsap.to(".blocks", {
    scrollTrigger: {
        trigger: ".blocks",
        start: "top 100%",
        end: "top 30%",
        scrub: 4,
        toggleActions : "restart none none none",
        pin: true

    }
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.blocks',
        pin: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        ease: 'linear',
      }
  })

  tl.to('.block .text', {
    height: 0,
    padding: 0,
    opacity: 0,
    stagger: .5,
  })
  tl.to('.block', {
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
    stagger: .5,
  }, '<')