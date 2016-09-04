# NavBar ReadMe

This is an accessible navigation bar, meaning that it will work with or with out javaScript. It also responds to screen size. The style-sheet and javaScript could use a little explaining.

## CSS

There are two parts to this style-sheet, a non-js nav bar and a js enabled bar.

For the non-js styling, the links and the header are all visible, this is meant to be viewed with javaScript disabled and on screens above 720px.

For the latter styling, the *js* class is added to nav; this adds specificity and overrides the previous commands. It positions the list of links and hides it, then positions the div that contains the button.

## JavaScript
**Utilizes jQuery**

Before any script is run, a *js* class is added to the nav element, then a button is added to nav.js. This is done so the button exists before it is added as a variable.

The function, *adjustBySize* checks the window size and toggles the *js* class, as well as the visibility of the menu button and links, depending on whether it is above or below 720px.

In the execution of the script, *adjustBySize* is called on load and on screen resize. Clicking the menu button toggles the list of links.
