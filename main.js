gsap.to('.gear',{duration:5, ease: "steps(-100)",rotation:360,repeat:-1,})
gsap.to('.face',{duration:8, x: 1000,repeat:-1,})

var face_move = gsap.timeline({repeat: -1, repeatDelay: 1});
face_move.to('.face',{duration:3, x: 200})
