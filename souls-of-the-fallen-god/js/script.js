/* Smooth Mouse Scroll */

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 960,
	speedAsDuration: true
});

/* Lazy Image & Video Loading*/

const observer = lozad();
observer.observe();

/* Smooth Menu Scroll */

const sections = document.querySelectorAll(".sections");
const menuelements = document.querySelectorAll(".navbarmenuelementlink");

window.addEventListener('scroll', ()=> {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      currentSection = section.getAttribute('id');
    }
  })

  menuelements.forEach(menuelement => {
    menuelement.classList.remove('active');
    if(menuelement.classList.contains(currentSection)){
      menuelement.classList.add('active');
    }
  })

  console.log(currentSection);
 
})

/* Features Audio Controls */

$('#feature01audiocontrol').click(function(){
  if( $("#feature01video").prop('muted') ) {
    $("#feature01video").prop('muted', false);
    $("#feature01audiocontrol").removeClass('fa-volume-mute');
    $("#feature01audiocontrol").addClass('fa-volume-up');
    $("#feature02video").prop('muted', true);
    $("#feature02audiocontrol").removeClass('fa-volume-up');
    $("#feature02audiocontrol").addClass('fa-volume-mute');
    $("#feature03video").prop('muted', true);
    $("#feature03audiocontrol").removeClass('fa-volume-up');
    $("#feature03audiocontrol").addClass('fa-volume-mute');
  } else {
    $("#feature01video").prop('muted', true);
    $("#feature01audiocontrol").removeClass('fa-volume-up');
    $("#feature01audiocontrol").addClass('fa-volume-mute');
  }
});

$('#feature02audiocontrol').click(function(){
  if( $("#feature02video").prop('muted') ) {
    $("#feature02video").prop('muted', false);
    $("#feature02audiocontrol").removeClass('fa-volume-mute');
    $("#feature02audiocontrol").addClass('fa-volume-up');
    $("#feature01video").prop('muted', true);
    $("#feature01audiocontrol").removeClass('fa-volume-up');
    $("#feature01audiocontrol").addClass('fa-volume-mute');
    $("#feature03video").prop('muted', true);
    $("#feature03audiocontrol").removeClass('fa-volume-up');
    $("#feature03audiocontrol").addClass('fa-volume-mute');
  } else {
    $("#feature02video").prop('muted', true);
    $("#feature02audiocontrol").removeClass('fa-volume-up');
    $("#feature02audiocontrol").addClass('fa-volume-mute');
  }
});

$('#feature03audiocontrol').click(function(){
  if( $("#feature03video").prop('muted') ) {
    $("#feature03video").prop('muted', false);
    $("#feature03audiocontrol").removeClass('fa-volume-mute');
    $("#feature03audiocontrol").addClass('fa-volume-up');
    $("#feature01video").prop('muted', true);
    $("#feature01audiocontrol").removeClass('fa-volume-up');
    $("#feature01audiocontrol").addClass('fa-volume-mute');
    $("#feature02video").prop('muted', true);
    $("#feature02audiocontrol").removeClass('fa-volume-up');
    $("#feature02audiocontrol").addClass('fa-volume-mute');
 } else {
    $("#feature03video").prop('muted', true);
    $("#feature03audiocontrol").removeClass('fa-volume-up');
    $("#feature03audiocontrol").addClass('fa-volume-mute');
  }
});

/* Lightbox for Images */

imgLightbox(document.body || "");

(function(root) {
  "use strict";
  if (root.imgLightbox) {
    imgLightbox("img-lightbox-link", {
      onCreated: function() {
        /* show your preloader */
      },
      onLoaded: function() {
        /* hide your preloader */
      },
      onError: function() {
        /* hide your preloader */
      },
      onClosed: function() {
        /* hide your preloader */
      },
      rate: 500 /* default: 500 */,
      touch: false /* default: false - use with care for responsive images in links on vertical mobile screens */
    });
  }
})("undefined" !== typeof window ? window : this);