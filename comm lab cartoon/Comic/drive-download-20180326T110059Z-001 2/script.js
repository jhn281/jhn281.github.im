console.log("hello");

var slides = document.getElementsByClassName("mySlides");

let choice_drink=document.getElementById("drinkc");
let choice_end=document.getElementById("endc");

let button_smoothie = document.getElementById("smoothieselect");
let button_liquor = document.getElementById("liquorselect");

let button_yes = document.getElementById("yesselect");
let button_no = document.getElementById("noselect");

let button_repeat= document.getElementById("repeatc");

let button_next = document.getElementById("next_button");


slides[0].style.display="block";


choice_drink.style.display="none";
button_smoothie.style.display="none";
button_liquor.style.display="none";

choice_end.style.display="none";
button_yes.style.display="none";
button_no.style.display="none";

button_repeat.style.display="none";



button_next.addEventListener('click', () => {

	console.log("button clicked");

	if(slides[0].style.display=="block"){
	console.log("img2");
	slides[0].style.display="none";
	slides[1].style.display="block";
   }

   else if(slides[1].style.display=="block"){
	console.log("drink option");
	slides[1].style.display="none";
	choice_drink.style.display="block";
    button_smoothie.style.display="block";
    button_liquor.style.display="block";
    button_next.style.display="none";
	
   }

   else if(slides[2].style.display=="block"){
	console.log("image4");
	slides[2].style.display="none";
	slides[3].style.display="block";
	
   }

    else if(slides[3].style.display=="block"){
	console.log("end choice");
	slides[3].style.display="none";
	choice_end.style.display="block";
    button_yes.style.display="block";
    button_no.style.display="block";
    button_next.style.display="none";

	
   }

   else if(slides[4].style.display=="block"){
	console.log("image6");
	slides[4].style.display="none";
	slides[5].style.display="block";
	button_next.style.display="none";
	button_repeat.style.display="block";
	
   }

})




button_smoothie.addEventListener('click', () => {

	console.log("smoothie clicked");

	choice_drink.style.transitionDuration = "1s";
	choice_drink.style.display="none";
    button_smoothie.style.display="none";
    button_liquor.style.display="none";

	slides[2].style.display="block";
	button_next.style.display="block";


})

button_liquor.addEventListener('click', () => {

	console.log("smoothie clicked");

	choice_drink.style.transitionDuration = "1s";
	choice_drink.style.display="none";
    button_smoothie.style.display="none";
    button_liquor.style.display="none";

	slides[2].style.display="block";
	button_next.style.display="block";


})


button_yes.addEventListener('click', () => {

	console.log("yes clicked");

	choice_end.style.transitionDuration = "1s";
	choice_end.style.display="none";
    button_yes.style.display="none";
    button_no.style.display="none";

	slides[4].style.display="block";
	button_next.style.display="block";


})

button_no.addEventListener('click', () => {

	console.log("no clicked");

	choice_end.style.transitionDuration = "1s";
	choice_end.style.display="none";
    button_yes.style.display="none";
    button_no.style.display="none";

	slides[4].style.display="block";
	button_next.style.display="block";


})

button_repeat.addEventListener('click', () => {

	console.log("repeat clicked");

	slides[5].style.display="none";
	slides[0].style.display="block";
	button_repeat.style.display="none";
	button_next.style.display="block";


})