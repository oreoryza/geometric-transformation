// TRANSLATE /////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    // The current position of mouse
    let x = 0;
    let y = 0;

    // Query the element
    const ele = document.getElementById('drag');

    // Handle the mousedown event
    // that's triggered when user drags the element
    const mouseDownHandler = function (e) {
        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;

        // Attach the listeners to document
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        // Set the position of element
        ele.style.top = (ele.offsetTop + dy) + 'px';
        ele.style.left = (ele.offsetLeft + dx) + 'px';

        // Reassign the position of mouse
        x = e.clientX;
        y = e.clientY;
    };

    const mouseUpHandler = function () {
        // Remove the handlers of mousemove and mouseup
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    ele.addEventListener('mousedown', mouseDownHandler);
});

// RANDOM MOVE GREEN CICRLE
var circ = document.querySelectorAll('.catch');
var newq;
let h,w,nh,nw,s; 

function newPosition(){   
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  s = Math.floor(Math.random()*1000) + 500
  return [nh,nw,s];       
}

circ.forEach(function circ(myclass) {
  var newq = newPosition();
  $(myclass).animate({ 
    top: newq[0], left: newq[1] 
    },
    newq[2],   function(){
    circ(myclass);        
  });
});

// OVERLAPPING FOR CATCH GREEN BALL
$(document).ready(function() {
    var $draggable = $('#drag');
    var $circle = $('#circle');
    var $bubble1 = $('.catch-1');
    var $bubble2 = $('.catch-2');
    var overlapTimer = null
  
    $draggable.on('mousemove', function() {
      var draggableRect = $draggable[0].getBoundingClientRect();
      var circleRect = $circle[0].getBoundingClientRect();
  
      // ifelse condition when orange circle over green circle
      if (isOverlapping(draggableRect, circleRect)) {
        $circle.css('background-color', 'red');
        if (!overlapTimer) {
            $bubble1.css('visibility', 'hidden');
            $bubble1.css('animation', 'none');
            $bubble2.css('visibility', 'visible');
            overlapTimer = setTimeout(function() {
              $draggable.css('border-color', 'black');
              alert("Achievement Unlocked: " + " 'The Chosen One'");
            }, 3000);
          }
        
      } else {
        $circle.css('background-color', '');
        $bubble1.css('visibility', 'visible');
        $bubble1.css('animation', '');
        $bubble2.css('visibility', 'hidden');
        clearTimeout(overlapTimer);
        overlapTimer = null;
      }
    });
  });
  
  // detect if its overlapping
  function isOverlapping(rect1, rect2) {
    return !(rect1.right < rect2.left ||
               rect1.left > rect2.right ||
               rect1.bottom < rect2.top ||
               rect1.top > rect2.bottom);
  }


// GUIDE VIEW ///////////////////////////////////////////////////////////////////
const guideButton = document.getElementById("guide-btn");
const guide = document.getElementById("guide-cont");
const gotIt = document.getElementById("got-it")

guideButton.addEventListener("click", () => {
    guide.style.visibility = "visible"
})

gotIt.addEventListener("click", () => {
    guide.style.visibility = "hidden"
})