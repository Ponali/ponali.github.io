(()=>{
	/*
		@Ponali - replace input element with textarea for multiple line support
		please make sure to use this with JSArt browser.
	*/
	let inel=document.querySelector("input#formula");let txel=document.createElement("textarea");txel.setAttribute("id","formula");txel.value=inel.value;txel.style.fontFamily="monospace";inel.parentNode.replaceChild(txel,inel);txel.addEventListener("input",parse);
	window.brws.currentDemo="";
})();