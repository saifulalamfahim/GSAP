gsap.from(".page-1 div", {
   rotate:360,
   duration: 2
})

gsap.from(".page-2 div", {
    rotate:360,
    duration: 2,
    scrollTrigger: {
        trigger: ".page-2 div",
        scroll:"body",
        markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3,
    }
 })

 gsap.from(".page-3 div", {
    rotate:360,
    duration: 2,
    scrollTrigger: {
        trigger: ".page-3 div",
        scroll:"body",
        markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3,
    }
 });