 
var tl = gsap.timeline();

tl.from("nav", {
    opacity:0,
    duration:2,
    delay:0.3,
});

tl.from("nav img, nav li, .button", {
    y: -100,
    duration:1,
    stagger: 1,
    opacity: 0,
})




// gsap.to("#box", {
//     x: 900,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.5,
// });

// var tl = gsap.timeline();

// tl.to("h1", {
//     x:700,
//     duration: 1,
// });

// tl.to("h2", {
//     x:700,
//     duration: 2,
// });

// tl.to("h3", {
//     x:700,
//     duration: 2,
// });