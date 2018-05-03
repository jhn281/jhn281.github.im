var phone = document.getElementById('phone');
var helloAudio = document.getElementById('hello-audio');
var ticklishAudio = document.getElementById('ticklish-audio');

phone.addEventListener('mouseover', function(){
  if(helloAudio.paused){
    helloAudio.play();
  }
});

phone.addEventListener('click', function(){
  if(ticklishAudio.paused){
    ticklishAudio.play();
  }
});
