// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Your animation code
gsap.to("#animateMe", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: "#animateMe",  // The element that triggers the animation
    start: "top center",    // When to start the animation
    end: "bottom center",   // When to end the animation
    scrub: true,            // Smoothly animate the property as you scroll
    markers: true
  }
});
