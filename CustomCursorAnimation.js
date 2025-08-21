const cursor=document.querySelector("#cursor");
const main=document.querySelector("#main");

const image=document.querySelector("#image");

main.addEventListener("mousemove",(e)=>{
    // console.log("event performed",e.x );t
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out"

    })
})
image.addEventListener("mouseenter",()=>{
    console.log("image clicked");
    gsap.to(cursor,{
        scale:4, 
    })
})
image.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1,
    })
})