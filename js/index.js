// Your code goes here

//stopPropagation stops the event from bubbling up the event chain.
//preventDefault prevents the default action the browser makes on that event.

// 1 nav animation
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function(event) {
	// event.target refers to the clicked <a> element
	// This is different than event.currentTarget which would refer to the parent <nav> in this context
	event.target.style.background = ' blue';
	event.target.style.color = 'white';
	event.target.style.borderRadius = '5px';
	event.target.style.padding = '2px 2px';
	event.stopPropagation();
});

nav.addEventListener('mouseout', function(event) {
	// event.target refers to the clicked <a> element
	// This is different than event.currentTarget which would refer to the parent <nav> in this context
	event.stopPropagation();
	event.target.style.background = 'white';
	event.target.style.color = 'black';
	event.target.style.borderRadius = '0';
	event.target.style.padding = '0';
});

// 2 background color gradient
// finally got this to work by replacing nav with document.
document.addEventListener('keydown', function(event) {
	event.target.style.background = 'linear-gradient(to right bottom, #2998ff, #7ed56f)';
});

// 3 mousedown / logo message/background
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', function(event) {
	event.target.style.border = '10px dashed yellow';
	event.target.style.background = 'purple';
	alert('BEEP BEEP!');
});

// 4 dbl click
const introPic = document.querySelector('.intro img');
const contentPic = document.querySelector('.content-destination img');
introPic.addEventListener('dblclick', function(event) {
	introPic.src = 'img/destination.jpg';
	contentPic.src = 'img/fun-bus.jpg';
	alert('you ruined it! LOOK!');
});

// 5 wheel scroll,  on scroll funbus picture rotates 720 deg
document.addEventListener('wheel', function(event) {
	introPic.style.transition = 'all 3s';
	introPic.style.transform = 'rotate(720deg)';
	introPic.style.zIndex = '10';
});

// 6 click
//any a tags clicked in the nav will go to the intro h2
nav.addEventListener('click', (event) => {
	const title = document.querySelector('.intro h2');
	title.textContent = event.target.textContent;
	title.style.fontSize = '75px';
	title.style.color = '#FF480C';
});

// 7 context menu / turns background red
document.addEventListener('contextmenu', (event) => {
	event.target.style.background = 'red';
});

// 8
window.addEventListener('resize', (event) => {
	// alert('If you wanna change views... okay');
	// introPic.style.transition = 'all 3s';
	// introPic.style.transform = 'rotate(720deg)';
	// contentPic.style.transition = 'all 3s';
	// contentPic.style.transform = 'rotate(720deg)';
});
