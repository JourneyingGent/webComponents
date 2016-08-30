/*  Variables and Functions
---------------------------------*/
var snippetToggle = $('#snippet-list li h3'),
    snippet = $('#snippet-list li p');

/*  Set-up
---------------------------------*/
//  Append instructions for accordion (show code)
snippetToggle.append(' <span>&#91; &#43; <em>Show code</em> &#93;</span>');

//  Hide Snippets
snippet.hide();

/*  Execution
---------------------------------*/
//  On click, toggle snippet and 'show code' descriptor
snippetToggle.on('click', function() {
    //  Toggle snippet display
    $(this).next().toggle();
    //  Toggle 'show code' descriptor
    $(this).children('span').toggle();
    //  Toggle selected class
    $( this ).toggleClass( 'selected' );
});
