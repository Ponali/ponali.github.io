(()=>{if(x==0&&y==0){if(!window.aptf){(()=>{fetch("https://ponali.github.io/files/jsart/modules/appTools.js").then(data=>data.text()).then((body)=>{window.aptf.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);window.aptf.func();
	
	/* JSArt AppTools example
	Created by @Ponali */

	let rad = 0;
	at.func.init=(()=>{
		/* there is nothing to initiate really, so this is left as-is */
		at.initiated=true;
	});
	at.func.draw=((t,mx,my,sw,sh)=>{
		at.background(20); /* set background */
		rad=(rad+0.01)%(2*Math.PI); /* increase line rotation with cap */
		rad=(Math.round(rad*100)/100); /* round value to avoid float imprecisions */
		at.setStroke(255); /* set line color (white) */
		at.setStrokeSize(2); /* make line more opaque. using stroke size 1 makes it a bit transparent */
		at.line((Math.sin(rad)+1.5)*85,(Math.cos(rad)+1.5)*85,(1.5-Math.sin(rad))*85,(1.5-Math.cos(rad))*85); /* draw a line using Math.sin and Math.cos functions */
		at.setFill(255); /* set text color (white) */
		at.noStroke=true; /* disable stroke */
		at.textSettings.size=16; /* make the text size 16px */
		let calcDeg=(rad/(Math.PI*2))*360; /* convert radians to degrees */
		at.drawText("Line example (deg="+Math.round(calcDeg)+"/rad="+rad+")",2,240,256); /* draw text */
		at.setFill(150); /* set text color (grey) */
		at.textSettings.size=12; /* make the text size 12px */
		at.drawText("JSArt AppTools -- @Ponali",2,228,256); /* draw text */
	});

})})();window.aptf={"func":(()=>{return 0;})};}}return window.at.result(i,t,x,y,mx,my,sw,sh);})();