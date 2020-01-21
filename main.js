
$(document).ready(function() {

    $("#random").click(function (){
        var mix = randomFaceMix();
        $("select#select_face_color").val(mix[0]);
        $("select#select_eyes").val(mix[1]);
        $("select#select_mouth").val(mix[2]);
    });

    var array_eyes =[
        "./sources/happy_eyes.png",
        "./sources/in-love_eyes.png",
        "./sources/tongue_eyes.png",
        "./sources/sad_eyes.png"
    ];
    var array_mouth=[
        "./sources/happy_mouth.png",
        "./sources/in-love_mouth.png",
        "./sources/tongue_mouth.png",
        "./sources/sad_mouth.png"
    ];

    var array_face_color=[
        "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)", //red
        "grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8)", //blue
        "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)",//green
        "grayscale(100%) brightness(120%) sepia(90%) hue-rotate(5deg) saturate(500%) contrast(0.7)",//yellow
        "grayscale(100%) brightness(110%) contrast(0.9)",   //grey
        "invert(30%) grayscale(100%) brightness(70%) contrast(4)" //black
    ];

    coloringFace();

    gsap.to('.gear',{duration:5, ease: "steps(-100)",rotation:360,repeat:-1,});

    var face_timeline = gsap.timeline({repeat: -1,onRepeat: removeEyeAndMouth});
    face_timeline.to('.face',{duration:2, x: 280, delay:2, onStart: coloringFace, onComplete: getSelectedEyes});
    face_timeline.to('.eye', {duration:2, y: 380,delay:3, onComplete: addEye});
    face_timeline.to('.face',{duration:2, x: 800, delay:1, rotation: 180, onComplete: getSelectedMouth});
    face_timeline.to('.mouth', {duration:2, y: 380,delay:1, onComplete: addMouth});
    face_timeline.to('.face',{duration:2, x: 1250, delay:1,rotation: 270});
    face_timeline.to('.face',{duration:2, y: 130, rotation: 360,ease:"bounce"});
    face_timeline.to('.face',{duration:2, x: 1400,rotation: 480});
    
    function coloringFace(){
        let id = $( "select#select_face_color option:checked").val();
        var face_color = array_face_color[id];
        $(".face").css('filter',face_color);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    function randomFaceMix(){
        var face_id = getRandomInt(array_face_color.length);
        var eye_id = getRandomInt(array_eyes.length);
        var mouth_id = getRandomInt(array_mouth.length);
        return  [face_id,eye_id,mouth_id]
    }
    
    function removeEyeAndMouth(){
        coloringFace();
        $(".face .face_eye").hide();
        $(".face .face_mouth").hide();
    }

    function getSelectedEyes(){
        let id = $( "select#select_eyes option:checked" ).val();
        var img = array_eyes[id];
        $('.eye').css('background-image', 'url(' + img + ')');
        $(".face .face_eye").css('background-image', 'url(' + img + ')');
    }
    
    function addEye(){
        $(".face .face_eye").show();
    }

    function getSelectedMouth(){
       let id = $( "select#select_mouth option:checked" ).val();
       var img = array_mouth[id];
       $('.mouth').css('background-image', 'url(' + img + ')');
       $(".face .face_mouth").css('background-image', 'url(' + img + ')');
    }
    
    function addMouth(){
        $(".face .face_mouth").show();
    }


});

