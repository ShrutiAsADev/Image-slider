// Select all the slides
const slides = document.querySelectorAll('.slide');

// Arrange slides
/** 
	
	THIS CAN BE DONE WITH CSS BUT REQUIRES MORE CODE 
**/
slides.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
})

// decides whether the NEXT or the PREVIOUS image will be shown 
let counter = 0;

// show the next image
nextBtn.addEventListener('click', () => {
	counter++;
	move();
})

// show tbe previous image
prevBtn.addEventListener('click', () => {
	counter--;
	move();
})

// move the image according to the value of the variable * counter * 
function move() {
	// if there is no image after the current image
	if (counter === slides.length) {
		counter = 0;
	}
	
	// if there is no image before the current image
	if (counter < 0) {
	  counter = slides.length - 1;
	}
	
	// change position
	slides.forEach(slide => {
		slide.style.transform = `translateX(-${counter * 100}%`;
	})
}
