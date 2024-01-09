var numberofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++){   //selecting all button having class .drum
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHtml=this.innerHTML;
        makesound(buttoninnerHtml);
        buttonanimation(buttoninnerHtml);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();                
            break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        default:
            break;
    }
}

function buttonanimation(currentKey){
    var current_button=document.querySelector("."+currentKey);
    current_button.classList.add("pressed");
    setTimeout(function(){              //for remvoing the animation effect after being pressed after some 0.3s
        current_button.classList.remove("pressed");
    },300);     //set a delay for 300ms==0.3s
}