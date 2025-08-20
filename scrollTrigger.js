gsap.from(".page1 h1",{
    opacity:0,
    x:-200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page1 h1",
        // scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 70%",
        // end:"bottom 10%"
    }
})

gsap.from(".page1 p",{
    opacity:0,
    x:200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page1 p",
        // scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 90%",
        end:"bottom 40%"
    }
})

gsap.from(".page2 h1",{
    opacity:0,
    x:-200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page2 h1",
        scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 70%",
        end:"bottom 50%"
    }
})

gsap.from(".page2 p",{
    opacity:0,
    x:200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page2 p",
        scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 90%",
        end:"bottom 40%"
    }
})



gsap.from(".page3 h1",{
    opacity:0,
    x:-200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page3 h1",
        scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 70%",
        end:"bottom 50%"
    }
})

gsap.from(".page3 p",{
    opacity:0,
    x:200,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".page3 p",
        scrub:5,
        markers:true,
        scroller:"body",
        // start:"top 90%",
        end:"bottom 40%"
    }
})