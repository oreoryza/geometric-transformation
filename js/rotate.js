// ROTATE
let box = document.querySelector(".rotate-obj");
let boxBoundingRect = box.getBoundingClientRect();
let boxCenter= {
	x: boxBoundingRect.left + boxBoundingRect.width/2, 
  y: boxBoundingRect.top + boxBoundingRect.height/2
};

document.addEventListener("mousemove", e => {
	let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);	    
	box.style.transform = `rotate(${angle}deg)`;
    document.getElementById('deg').innerHTML = angle;
});


const guideButton = document.getElementById("guide-btn");
const guide = document.getElementById("guide-cont");
const gotIt = document.getElementById("got-it")

guideButton.addEventListener("click", () => {
    guide.style.visibility = "visible"
})

gotIt.addEventListener("click", () => {
    guide.style.visibility = "hidden"
})