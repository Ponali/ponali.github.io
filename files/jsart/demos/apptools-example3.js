(()=>{if(x==0&&y==0){if(!window.aptf){(()=>{fetch("https://ponali.github.io/files/jsart/modules/appTools.js").then(data=>data.text()).then((body)=>{window.aptf.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);window.aptf.func();
	
	/* JSArt AppTools example
	Created by @Ponali */

	let frame,bgImg,curSize;
	at.func.init=(()=>{
		curSize=64;
		at.noStroke=true;
		frame=0;
		bgImg=new Image(512,512);
		bgImg.crossOrigin = "Anonymous";
		bgImg.src="https://picsum.photos/256";
		bgImg.onload=(()=>{
			at.initiated=true;
		});
	});
	at.func.draw=((t,mx,my,sw,sh)=>{
		/* mxa and mya are the same as mx and my, but with a cap that doesn't let the values be less than 0 nor be more than 255. */
		let mxa=Math.min(Math.max((mx-(curSize/2)),0),(sw-curSize));let mya=Math.min(Math.max((my-(curSize/2)),0),(sh-curSize));
		/* render background */
		at.background(20);
		at.setOpacity(0.5);
		at.drawImage(bgImg,0,0,256,256);
		at.setOpacity(1);
		at.setFill(255);
		at.textSettings.size=16;
		/* get background */
		let scrImg2=at.getScreenImg(0,0,sw,sh);
		
		/* render second screen */
		at.drawText("you found me!",12,10,256);
		at.textSettings.size=12;
		at.textSettings.align="r";
		at.drawText("picsum.photos",-2,2);
		at.setFill(15,240,15);
		at.drawTriangle([40,156],[130,176],[110,76]);
		at.setOpacity(0.7);
		at.setFill(0,255,255);
		at.drawRectangle(170-40,170-120,90,90);
		at.setFill(255,0,255);
		at.drawRectangle(160-40,180-120,90,90);
		at.setFill(255);
		at.drawImage(bgImg,160-30,180-60,90,90);
		at.setOpacity(1);
		at.textSettings.align="l";
		/* get a portion of this screen depending on the cursor position */
		let scrImg=at.getScreenImg(Math.floor(mxa),Math.floor(mya),curSize,curSize);
		
		/* render background again, but with gotten image */
		at.drawImage(scrImg2,0,0,sw,sh);
		/* render primary screen */
		at.textSettings.size=16;
		at.drawText("sample text",12,10,256);
		at.textSettings.size=12;
		at.textSettings.align="r";
		at.drawText("@Ponali",-2,2);
		at.setFill(0,255,0);
		at.drawTriangle([40,100],[130,80],[110,180]);
		at.setFill(255,0,255);
		at.drawRectangle(170-40,170-120,90,90);
		at.setFill(0,255,255);
		at.drawRectangle(160-40,180-120,90,90);
		at.setFill(255);
		at.drawImage(bgImg,160-50,180-60,90,90);
		/* render cursor portion of second screen from image */
		at.drawRectangle(Math.floor(mxa)-1,Math.floor(mya)-1,curSize+2,curSize+2);
		at.drawImage(scrImg,Math.floor(mxa),Math.floor(mya));
		
		/* information text */
		at.textSettings.align="l";
		at.textSettings.size=10;
		at.drawText("Note: lag may occur when using this function.",2,217,256-4);
		at.textSettings.size=12;
		at.drawText("move your cursor anywhere to see it getting changed",2,230,256-4);
		at.drawText("getScreenImg function example -- JSArt AppTools",2,243,256-4);
	});

})})();window.aptf={"func":(()=>{return 0;})};}}return window.at.result(i,t,x,y,mx,my,sw,sh);})();