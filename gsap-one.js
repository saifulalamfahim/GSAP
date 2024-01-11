 
var tl = gsap.timeline();

tl.from("nav", {
    opacity:0,
    duration:0.5,
    delay:0.3,
});

tl.from("nav img, nav li, .button", {
    y: -100,
    duration:0.5,
    stagger: 1,
    opacity: 0,
});


tl.from(".hero h1,.hero h2,.hero h3 ", {
    scale:2,
    stagger:1,
    opacity:0,
});

tl.from(".hero p", {
    opacity:0,
});

tl.to(".hero p", {
    y:50,
    repeat: -1,
    duration:1,
    yoyo:true,
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