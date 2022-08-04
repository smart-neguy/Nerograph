$(document).ready(function(){
/*adding sticky navigation*/

    $(".js--about-section").waypoint(function(direction){
        if(direction=="down") {
          $("nav").addClass("navbar");}

         else {
             $("nav").removeClass("navbar");


          }
    });

/*scrolling to contact section */
    $(".js--scroll-to-contact").click(function() {
        $('html, body').animate({scrollTop:$('.js--contact').offset().top},1000);
    })
    
/* smooth scrolling of navigation*/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="0"]')
    .click(function(event) {
        //on-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        &&
        location.hostname == this.hostname
    ) {
        // figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('name=' + this.hash.slice(1) + ']');
        //does a scroll target exist?
        if (target.length) {
            // only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // callback after animation
              // must change focus!
              var $target= $(target);
              $target.focus();
              if ($target.is(":focus")) {// checking if the target was focused
                return false;
              } else {
                  $target,attr('tabindex', '-1'); //Adding Tabindex for elements not focusable
                  $target.focus();// set focus again
              };
            });
        }
    }
});

/*animation on scroll*/ 
$(".js--about-section").waypoint(function(direction){
      $(".js--about-box").addClass(" animate__animated animate__fadeIn");
    }, {
          offset:'50%'
      });
$(".js--service-section").waypoint(function(direction){
      $(".js--service-box").addClass(" animate__animated animate__zoomIn");
    }, {
          offset:'30%'
      });
    
      $(".js--package-section").waypoint(function(direction){
        $(".js--starter").addClass(" animate__animated animate__pulse");
      });
      
});