const t1= gsap.timeline({delay: 1.75});
const movements=[-100, 300, 150, -300, -90, 100, -200];

gsap.set("h1",{y:100});
gsap.set(".counter p",{y : 35});

t1.to("h1",{
    y:0,
    duration: 1,
    ease:"power3.out",
    stagger:0.1,
});

t1.to(".counter p",{
    y:0,
    duration: 0.5,
    ease:"power3.out",
},
"-=0.5"
);


t1.to(".counter p",{
    y:-35,
    duration: 0.5,
    ease:"power3.out",
    delay:0.5
});

t1.to(".counter p",{
    y:-70,
    duration: 0.5,
    ease:"power3.out",
    delay:0.5
});

t1.to(".counter p",{
    y:-105,
    duration: 0.5,
    ease:"power3.out",
    delay:0.75
});

t1.from("tagline",{
    y:40,
    opacity:0,
},"-=4"
);

t1.to("h1",{
    fontSize:"20vw",
    duration:1,
    ease:"power3.out",
});

t1.to(".header.items",{
    clipPath:"none",
    duration:0.1,
},"<");

t1.to(".block",{
    clipPath: "polygon(0% 0%, 100% 0%,100% 0%, 0% 0%)",
    duration:0.5,
    stagger: {
        amount:0.5,
        from:"random",
        ease: "power3.out"
    },
},
"<");



t1.from(".logo, .link, footer p", {
    y:40,
    opacity:0,
    stagger:0.2,
});


