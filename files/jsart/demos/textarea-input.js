(()=>{
	/*
		@Ponali - replace input element with textarea for multiple line support
		please make sure to use this with JSArt browser.
	*/
	try{
		let inel=document.querySelector("input#formula");let txel=document.createElement("textarea");txel.setAttribute("id","formula");txel.value=inel.value;txel.style.fontFamily="monospace";inel.parentNode.replaceChild(txel,inel);txel.addEventListener("input",parse);
	} catch (e){
		let tx=(e.stack?e.stack:(e.toString?e.toString():(e+"")));tx=(tx?tx:"(unknown)");alert("An error has occured. Here are common possible reasons why this happens:\n- Input element was already replaced by textarea\n- Input element can't be found\n- Code was fed directly into the input (this was designed to be ran with JSArt Browser)\n\nTechnical Information:\n"+tx);
	}
	window.brws.currentDemo="";
})();