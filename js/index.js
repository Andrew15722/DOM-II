// Your code goes here

//stopPropagation stops the event from bubbling up the event chain.
//preventDefault prevents the default action the browser makes on that event.

// nav animation
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', (event) => {
	// event.target refers to the clicked <a> element
	// This is different than event.currentTarget which would refer to the parent <nav> in this context
	event.target.style.background = 'lightblue';
	event.target.style.color = 'white';
	event.target.style.borderRadius = '5px';
	event.target.style.padding = '2px 2px';
	console.log(nav);
});

nav.addEventListener('mouseout', (event) => {
	// event.target refers to the clicked <a> element
	// This is different than event.currentTarget which would refer to the parent <nav> in this context
	event.target.style.background = 'white';
	event.target.style.color = 'black';
	event.target.style.borderRadius = '0';
	event.target.style.padding = '0';
	console.log(nav);
});

//
const content = document.getElementByClassName('btn');
content.addEventListener('keydown', (event) => {
	console.log('hello');
});
