var playing = false;

var selfiepic = document.getElementById('selfie');
var audio = document.getElementById('audio');
var selfiedescription = document.getElementById('selfiedescription');

selfiepic.addEventListener("click", function (){
  if(playing){
    audio.pause();
    selfiedescription.innerHTML = "Click me to hear the sweet waves of the beach!";
    playing = false;
  }else{
    audio.play();
    selfiedescription.innerHTML = "Ugh the beach is tiring, click me and the sound goes away!";
    playing = true;
  }
});
