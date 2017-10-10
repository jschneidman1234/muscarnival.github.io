(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
})(jQuery); // End of use strict

function login () {
  var email = $(".email")[0].value
  var password = $(".password")[0].value
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      window.location = 'https://muscarnival.github.io/waiver.html'
    })
    .catch(function(error) {
    var errorMessage = error.message;
    if (error) {
      console.log(error)
      alert(errorMessage)
    }
  })
}