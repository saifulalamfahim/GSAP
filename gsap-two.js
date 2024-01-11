gsap.from(".page-1 div", {
   rotate:360,
   duration: 2
})

gsap.from(".page-2 div", {
    rotate:360,
    duration: 2,
    scrollTrigger: ".page-2 div"
 })

 gsap.from(".page-3 div", {
    rotate:360,
    duration: 2,
    scrollTrigger: ".page-3 div"
 });