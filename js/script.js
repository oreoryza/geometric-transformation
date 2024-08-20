
// ANIMATION //////////////////////////////////////////////////////////////////////////////
function revealFunction(){
    window.sr = ScrollReveal({duration:1200, distance:'80px', easing:'ease-out'});

    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false});
    sr.reveal('.reveal-bottom-d1', {origin:'bottom', delay:200, reset:false});
    sr.reveal('.reveal-bottom-d2', {origin:'bottom', delay:400, reset:false});
    sr.reveal('.reveal-bottom-d3', {origin:'bottom', delay:600, reset:false});
    sr.reveal('.reveal-right-delay', {origin:'right', delay:800, reset:false});
    sr.reveal('.reveal-right', {origin:'right', reset:false});
    sr.reveal('.reveal-left', {origin:'left', reset:false});
    sr.reveal('.reveal-left-delay', {origin:'left', delay:800, reset:false});
}

window.addEventListener('load', () => {
    revealFunction();
})