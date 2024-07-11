

*CSS Pseudo-Classes

Pseudo-classes enhance the visual appeal and interactivity of our website.

/* Link States */
a:link {
  color: gray; /* unvisited link */
}
a:visited {
  color: green; /* visited link */
}
a:active {
  color: black; /* active link */
}

/* Hover Effect */
/* Changes color to red when hovering over any element */

:hover {
  color: red;
}

/* Position Property */
/* Defines the position behavior of elements */

/* static (default): Positioned according to the normal flow of the document */

/* relative: Positioned relative to its normal position */

/* fixed: Positioned relative to the viewport, remains fixed even with scrolling */

/* absolute: Positioned relative to the nearest positioned ancestor (parent with position:relative), or to the initial containing block if no ancestor is positioned */

/* sticky: Moves with scrolling until reaching a specified position, then remains "sticky" */

/* Example of sticky positioning */
/* Element becomes sticky 100px from the top */
/* display: sticky; */
/* top: 100px; */
