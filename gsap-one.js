// gsap.to("#box", {
//     x: 900,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.5,
// });

gsap.from("#box", {
    x:700,
    duration: 1,
    delay: 1,
    stagger: 1,
    repeat: -1,
    yoyo: true,
});

// gsap.from("h2", {
//     x:700,
//     duration: 2,
//     delay: 3,
// });

// gsap.from("h3", {
//     x:700,
//     duration: 2,
//     delay: 5,
// });