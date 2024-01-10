(()=>{if(x==0&&y==0){if(!window.aptf){(()=>{fetch("https://ponali.github.io/files/jsart/modules/appTools.js").then(data=>data.text()).then((body)=>{window.aptf.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);window.aptf.func();
	
	/* JSArt AppTools example
	Created by @Ponali */

	let txt, inputBef;
	at.func.init=(()=>{
		/* this function is only called once.
		this is where you should set variable values, load images, etc. */
		txt="Hello, World!";
		inputBef=false;
		/* once it's done, make sure to let AppTools know it finished */
		at.initiated=true;
	});
	at.func.draw=((t,mx,my,sw,sh)=>{
		/* this function is called every frame (60 times per second)
		this is where you should make your app think and render elements. */
		at.noStroke=false; /* Stroke should be disabled: text must be filled, but mustn't have a stroke. */
		if((mx<10)&&(!inputBef)){
			let inTxt=prompt("Enter new text: "); /* when using prompt() or generally alert functions, the mouse does not update, so a way of avoiding repetitions was added with the inputBef variable */
			if(inTxt){txt=inTxt;}
		}; inputBef=mx<10;
		
		at.background(20); /* You can use 3 numbers for RGB color. */
		at.setFill(250); /* Works like background, but supports an alpha channel. */
		at.textSettings.size=24;
		at.textSettings.align="left";
		at.drawText(txt,5,5,246); /* The last value corresponds to the maximum width of the text. */
	
		at.setFill(210);
		at.textSettings.size=12;
		at.textSettings.align="c"; /* instead of "left/center/right", use "l/c/r" */
		at.drawText("--- JSArt AppTools Example - @Ponali ---",0,220,240);
		at.drawText("Move your cursor to the left to change the text.",0,235,240);
	});

})})();window.aptf={"func":(()=>{return 0;})};}}return window.at.result(i,t,x,y,mx,my,sw,sh);})();