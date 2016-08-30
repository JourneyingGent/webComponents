/* Set-up
-------------------------------------*/
//  Add js class to nav#main
$('nav#main').addClass('js');

//  Create a toggle button
$('nav.js').append('<div><button id="nav-toggle"type="button">Menu</button></div>');


/* Variables and Functions
-------------------------------------*/
var navToggle = $('button#nav-toggle'),
    navBar = $('nav#main'),
    navList = $('nav#main ul');

//  Check to see if window size is below 720px
function adjustBySize() {
  if ($( window ).width() >= 720) {

  //  Show desktop menu
    navBar.removeClass('js');
    navToggle.hide();
    navList.show();

  } else {

  //  Show mobile menu
    navBar.addClass('js');
    navToggle.show();
    navList.hide();
  };
};


/* Execution
-------------------------------------*/
//  On load adjust navbar to screen size
$( document ).ready( adjustBySize );

//  On window resize adjust navbar to screen size
$( window ).resize( adjustBySize );

//  On navToggle click, toggle the navList
navToggle.on('click', function() { navList.toggle(); });
