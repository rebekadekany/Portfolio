var prev = 0;
var $window = $(window);
var navbar = $('.navbar');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

export default NavUp;