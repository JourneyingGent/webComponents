/*  Variables and Functions
---------------------------------*/
var accordionTogg = $('ul li h3'),
    accordion = $('ul li p');

/*  Set-up
---------------------------------*/
//  Append instructions for accordion (show code)
accordionTogg.append(' <span>&#91; &#43; <em>Show</em> &#93;</span>');

//  Hide accordions
accordion.hide();

/*  Execution
---------------------------------*/
//  On click, toggle accordion and 'show code' descriptor
accordionTogg.on('click', function() {
    //  Toggle accordion display
    $(this).next().slideToggle();
    //  Toggle 'show code' descriptor
    $(this).children('span').toggle();
    //  Toggle selected class
    $( this ).toggleClass( 'selected' );
});
