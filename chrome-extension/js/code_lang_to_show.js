Array.from(document.querySelectorAll('[data-lang]')).forEach(elem => {
	const lang = elem.getAttribute('data-lang');
	elem.title = lang;
});
