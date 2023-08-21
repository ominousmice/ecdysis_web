// Get the canvas
const canvas = document.querySelector('.canvas');
canvas.style.left = "0px";
canvas.style.top = "0px";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// Frame count
const frameCount = 203;

const currentFrame = (index) => `./imgs/${(index + 1).toString()}.jpg`;
const images = [];
let dict = {frame: 0};

for (let i = 0; i < frameCount; i++){
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

// Animate on scroll with gsap
gsap.to(dict, {
    frame: frameCount - 1, //Goes to the last frame
    snap: 'frame', //So it goes through every frame without missing any
    ease: 'none',
    scrollTrigger: {
        scrub: true,
        pin: 'canvas',
        end: '500%',
    },
    onUpdate: render, //So that the frames change
});

// When the page loads, render frame 0
images[0].onload = render;

function render(){
    // Make the canvas dimensions match the image
    // If not it isn't responsive
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(images[dict.frame], 0, 0, canvas.width, canvas.height);
}