gsap.registerPlugin(ScrollTrigger);

function addFullSectAnimation(id) {
    let fullsect = gsap.timeline({
        scrollTrigger: {
            trigger: '#'+id,
            pin: true,
            start: 'top top',
            end: 'bottom 100%',
            scrub: 1,
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 3 }, 
                delay: 0.2,
                ease: 'power1.inOut'
            }
        }
    });
    
    fullsect.addLabel('title')
        .from(`#${id} h1`, { yPercent: -50, autoAlpha: 0 })
        .addLabel('description')
        .from(`#${id} p`, { yPercent: -50, autoAlpha: 0 })
        .addLabel('image')
        .from(`#${id} img`, { yPercent: -50, autoAlpha: 0 })
        .addLabel('end')
        .to('#'+id, {autoAlpha: 0});
}

function addColorAnimation(id, to) {
    let color = gsap.timeline({
        scrollTrigger: {
            trigger: "#"+id,
            start: 'top top',
            end: "bottom 100%",
            scrub: 1,
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 3 }, 
                delay: 0.2,
                ease: 'power1.inOut'
            }
        }
    });

    color.addLabel('black').from("body", {backgroundColor: "#010101"}).addLabel('color').to("body", {backgroundColor: to})
}

function addFixedAnimation(id) {
    let fullsect = gsap.timeline({
        scrollTrigger: {
            trigger: '#'+id,
            pin: true,
            start: 'top top',
            end: 'bottom 100%',
            scrub: 1,
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 3 }, 
                delay: 0.2,
                ease: 'power1.inOut'
            }
        }
    });

    fullsect.addLabel('title')
        .from(`#${id} h1`, { yPercent: -50, autoAlpha: 0 })
        .to('#'+id, {autoAlpha: 0});
}

addFullSectAnimation("about")
addFullSectAnimation("borderless");
addFullSectAnimation("researchable");
addColorAnimation("colorchange", "#FFFFFF");
addFixedAnimation("onlyhere");
addFixedAnimation("newway");

const tl = gsap.timeline();
tl.from("#hero img", {yPercent: 50, autoAlpha: 0, duration: 1})
.from("#hero p", {yPercent: -25, autoAlpha: 0})
.from("#hero a", {yPercent: -25, autoAlpha: 0})