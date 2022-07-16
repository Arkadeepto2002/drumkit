for(var i=0;i<document.querySelectorAll("button.drum").length;i++)
{
document.querySelectorAll("button.drum")[i].addEventListener("click",buttonclick);
}
document.addEventListener("keypress",keyclick)
function keyclick(event)
{
    makesound(event.key);
    buttonanimation(event.key);
}
function buttonclick()
{   
    var button_name=this.innerHTML;
    makesound(button_name);
    buttonanimation(button_name);
}
function makesound(key)
{   
    key=key.toLowerCase();
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
         case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(this);
            break;
    }
}
function buttonanimation(currentkey)
{   
    currentkey=currentkey.toLowerCase();
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200);
}