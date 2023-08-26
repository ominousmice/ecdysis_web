document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    gsap.registerPlugin(ScrollTrigger);
  
    sections.forEach((section) => {
        gsap.to(section, {
            backgroundColor: "black",
            y: 50,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                scrub: true,
                markers: true,
            },
        });
    });
});
