(()=>{
	if((x+y)==0){
		if(window.dream){
			window.dream.interval++;
			window.dream.interval2++;
			if(window.dream.interval2==500){window.dream.interval2=0;window.dream.chklength=Math.floor(window.dream.chklength+50);}
			window.dream.useScreenCapture=0;
			if(window.dream.interval>80){
				window.dream.useScreenCapture=1;
				if(window.dream.interval>180){
					window.dream.interval=40-Math.floor(Math.random()*80);
					window.dream.useScreenCapture=0;
				}
				window.dream.screenCapture.push({"data":[],"mx":mx,"my":my,"cl":cl,"k":k,"sw":sw,"sh":sh});
			};
			window.dream.removing = 0;
			if(window.dream.screenCapture.length>window.dream.chklength){
				window.dream.screenCapture.splice(0,1);
				if(!window.dream.removeChance){
					window.dream.removeChance=Math.floor(Math.random()*20);
					console.log("setting chance")
				}
				window.dream.removing = 1;
			} else {
				window.dream.removeChance=0;
			};
			console.log(window.dream.removing+" remove")
		}else{
			window.dream = {"screenCapture":[],"interval":0,"useScreenCapture":0,"interval2":0,"chklength":100,"removing":0,"removeChance":0};
		}
	};
	if(window.dream.removing){
		let cursorChance = window.dream.removeChance%4;
		if((cursorChance==1)||(cursorChance==3)){
			mx = window.dream.screenCapture[0].mx;
		}
		if((cursorChance==2)||(cursorChance==3)){
			my = window.dream.screenCapture[0].my;
		};
		if((window.dream.removeChance%3)==2){
			cl = window.dream.screenCapture[0].cl;
		}
		if((window.dream.removeChance%5)==2){
			k = window.dream.screenCapture[0].k;
		}
	}
	let out = (()=>{ x=Math.floor((x/sw)*256);y=Math.floor((y/sh)*256);mx=(mx/sw)*256;my=(my/sh)*256;sw=256;sh=256; if(x==0&&y==0){if(!window.dftchr){(()=>{ fetch("https://ponali.github.io/files/jsart/demos/browser.js").then(data=>data.text()).then((body)=>{window.dftchr.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);}) })();window.dftchr={"func":(()=>{return 255;})};}} return window.dftchr.func(i,t,x,y,mx,my,sw,sh,c,ic,cl,k); })();
	/*if(window.dream.interval>180){
		window.dream.screenCapture[window.dream.screenCapture.length-1].data.push(out);
		let screen = window.dream.screenCapture[window.dream.screenCapture.length-100];
		if(x>(screen.mx-16)&&x<(screen.mx+16)&&y>(screen.my-16)&&y<(screen.my+16)){
			out = screen.data[x+(y*256)]*(screen.k+1);
		}
	};*/
	if(window.dream.useScreenCapture){
		window.dream.screenCapture[window.dream.screenCapture.length-1].data.push(out);
	}
	if(window.dream.removing){
		function show(screen,screenBefore){
			if(screen!=screenBefore){
				let dif = Math.min((Math.abs(Math.floor((screen-screenBefore)/65793))/256)*8,1);
				let rgbv = [(out&0xff0000)/0x10000,(out&0xff00)/0x100,out&0xff];
				let rgbv2 = [(screen&0xff0000)/0x10000,(screen&0xff00)/0x100,screen&0xff];
				let rgbv3 = [(rgbv2[0]*dif)+(rgbv[0]*(1-dif)),(rgbv2[1]*dif)+(rgbv[1]*(1-dif)),(rgbv2[2]*dif)+(rgbv[2]*(1-dif))];
				let val = (Math.floor(rgbv3[0])*0x10000)+(Math.floor(rgbv3[1])*0x100)+Math.floor(rgbv3[2]);
				out = val*rev;
				if(x+(y*256)==Math.floor(mx)+(Math.floor(my)*256)){console.log(dif,rgbv,rgbv2,rgbv3,val.toString(16));}
			};
		}
		let rev = 1;
		function show2(idxa,idxb){
			show(window.dream.screenCapture[idxa].data[x+(y*window.dream.screenCapture[1].sw)],window.dream.screenCapture[idxb].data[x+(y*window.dream.screenCapture[0].sw)]);
		}
		//if((window.dream.removeChance%7)==5){rev = -1;}
		//if((x+y)<10){return window.dream.removeChance*12;}
		for(i=0;i<Math.min(Math.floor(window.dream.screenCapture.length/100),4);i++){
			show2(1+(i*100),0+(i*100));
			show2(2+(i*100),1+(i*100));
		}
		//show2(window.dream.screenCapture.length-101,window.dream.screenCapture.length-102)
	}
	return out;
})();