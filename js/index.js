// Your code goes here

//stopPropagation stops the event from bubbling up the event chain.
//preventDefault prevents the default action the browser makes on that event.

// nav animation
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', (event) => {
	// event.target refers to the clicked <a> element
	// This is different than event.currentTarget which would refer to the parent <nav> in this context
	event.target.style.background = 'lightblue';
	event.stopPropagation();
	event.target.style.color = 'white';
	event.target.style.borderRadius = '5px';
});
