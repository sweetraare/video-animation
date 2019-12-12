const intro = document.querySelector('.intro');
let video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// ScrollMagic:

const controller = new ScrollMagic.Controller();
// with this scene I make te video to be pinned until I get to the button (duration)
const scene = new ScrollMagic.Scene({
    duration: 20000,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

// Video Animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
    scrollPos = e.scrollPos/ 1000 ; // divide to 1000 to have seconds
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    video.currentTime = delay;
}, 33.3);

