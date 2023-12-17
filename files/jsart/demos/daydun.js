(()=>{
	if(x+y==0){
		if(window.daydunSupport){
			window.daydunSupport.sw=document.querySelector("input#width").valueAsNumber;
			window.daydunSupport.sh=document.querySelector("input#height").valueAsNumber;
		} else {
			window.daydunSupport={"sw":document.querySelector("input#width").valueAsNumber,"sh":document.querySelector("input#height").valueAsNumber,"mouseDown":0,"keyvents":0};
			let ignorekeys = [32,37,38,39,40]
			window.addEventListener("mousedown",(e)=>{
				window.daydunSupport.mouseDown = 1
			})
			window.addEventListener("mouseup",(e)=>{
				window.daydunSupport.mouseDown = 0
			})
			window.addEventListener("touchstart",(e)=>{
				window.daydunSupport.mouseDown = 1
			})
			window.addEventListener("touchend",(e)=>{
				window.daydunSupport.mouseDown = 0
			})
			window.addEventListener("keyup",(e)=>{
				window.daydunSupport.keyvents = 0
			})
			window.addEventListener("keydown",(e)=>{
				if (ignorekeys.includes(e.keyCode)){
					e.preventDefault()
				}
				window.daydunSupport.keyvents = e.keyCode
			})
		};
	}
	function CalculateC(x,y){ let ox = x - width / 2;let oy = y - height / 2;let mx = -(width / 2);let my = -(height / 2);let dist = Math.sqrt((ox ** 2) + (oy ** 2));let max = Math.sqrt((mx ** 2) + (my ** 2));let out = max - dist;if (out > 256) {out = 255;};return [out, dist] };
	let pxC=CalculateC(x,y);
	let out = (()=>{ let sw=window.daydunSupport.sw; let sh=window.daydunSupport.sh; let c=pxC[0]; let ic=pxC[1]; let cl=window.daydunSupport.mouseDown; let k=window.daydunSupport.keyvents;  x=Math.floor((x/sw)*256);y=Math.floor((y/sh)*256);mx=(mx/sw)*256;my=(my/sh)*256;sw=256;sh=256; if(x==0&&y==0){if(!window.ftchr){(()=>{ fetch("https://ponali.github.io/files/jsart/demos/browser.js").then(data=>data.text()).then((body)=>{window.ftchr.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);}) })();window.ftchr={"func":(()=>{return 255;})};}} return window.ftchr.func(i,t,x,y,mx,my,sw,sh,c,ic,cl,k); })();
	return out;
})();

// code to launch:
// (()=>{ if(x==0&&y==0){if(!window.dyftchr){(()=>{ fetch("https://ponali.github.io/files/jsart/demos/daydun.js").then(data=>data.text()).then((body)=>{window.dyftchr.func= new Function("i","t","x","y","mx","my","return "+body);}) })();window.dyftchr={"func":(()=>{return 0xff00ff;})};}} return window.dyftchr.func(i,t,x,y,mx,my); })()