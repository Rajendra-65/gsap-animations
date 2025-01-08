// gsap.to("#box1",{
//     x:300,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:1,
//     yoyo:true
//     // backgroundColor:"blue",
//     // borderRadius:"50%"
// })

// gsap.from("#box2",{
//     x:300,
//     duration:2,
//     delay:1
// })

// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.5
// })

// TimeLine

// gsap.to("#box1",{
//     x:300,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:300,
//     backgroundColor:'yellow',
//     duration:1.5,
//     delay:2.5
// })

// gsap.to('#box3',{
//     x:300,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

var tl = gsap.timeline()

// tl.to('#box1',{
//     x:300,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to('#box2',{
//     x:300,
//     duration:1.5
// })

// tl.to('#box3',{
//     x:300,
//     duration:1.5
// })

tl.from('h2',{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from('h4',{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})