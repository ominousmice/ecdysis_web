// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Your animation code
gsap.to("#concepto", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: "#concepto",  // The element that triggers the animation
    start: "top center",    // When to start the animation
    end: "bottom 50%",   // When to end the animation
    scrub: true,            // Smoothly animate the property as you scroll
  }
});

gsap.to("#etapas", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: "#etapas",  // The element that triggers the animation
    start: "top center",    // When to start the animation
    end: "bottom 50%",   // When to end the animation
    scrub: true,            // Smoothly animate the property as you scroll
  }
});


gsap.to("#instalacion", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: "#instalacion",  // The element that triggers the animation
    start: "top center",    // When to start the animation
    end: "bottom 50%",   // When to end the animation
    scrub: true,            // Smoothly animate the property as you scroll
  }
});
