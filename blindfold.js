browser.runtime.onMessage.addListener((e) => {
	let elts = document.getElementsByClassName("main-board");
	if (!elts) return;
	
	if (e.isBlindfold) {
		elts[0].classList.add("blindfold");
	} else {
		elts[0].classList.remove("blindfold");
	}
});
