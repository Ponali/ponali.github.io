(()=>{
	if(x==0&&y==0){
		if(window.fpschk){
			window.fpschk.currentFps = 1000/(t - window.fpschk.tStart);
			window.fpschk.tStart=t;
		} else {
			window.fpschk = {"tStart":t,"currentFps":60}
		}
	}
	let fps = window.fpschk.currentFps;
	let delta = 1/window.fpschk.currentFps;
	if(x+y==0){
		let defaultOptions = [{"category_name":"Particles","options":[{"name":"Borders counts as bouncy walls","type":"checkbox","ticked":false},{"name":"Add random color to particles","type":"checkbox","ticked":true}]},{"category_name":"Render","options":[{"name":"Particle appearance","type":"choose","options":["Glowing circle (default)","Simple circle","Dot"],"optionIdx":0},{"name":"Object collision formula","type":"choose","options":["OR (default)","Add","Replace"],"optionIdx":0}]}];
		if(!window.particles){
			console.log("setup started");
			window.particles=[];
			if(!localStorage["OPP-settings.json"]){
				localStorage["OPP-settings.json"]=JSON.stringify(defaultOptions);
			};
			window.particles.settings=JSON.parse(localStorage["OPP-settings.json"]);
			window.particles.c={"canvas":document.createElement("canvas"),"icons":{},"menu":0,"currentlyClicking":false,"settingsCategoryIdx":0};
			window.particles.c.canvas.width=window.particles.c.canvas.height=256;
			window.particles.c.ctx=window.particles.c.canvas.getContext("2d");
			console.log("setup checkpoint");
			let myFont = new FontFace('OPPcanvasUIFont', 'url(/font/fredoka_one.ttf)');
			myFont.load().then(function(font){console.log("font appended!");document.fonts.add(font)}); /* loads canvas font */
			function loadImg(id,src){let aimg = new Image();aimg.src=src;aimg.onload=(()=>{window.particles.c.icons[id]=aimg;console.log("loaded image "+id)});}
			loadImg("settings","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTM4Ljg2IDI1Ljk1Yy4wOC0uNjQuMTQtMS4yOS4xNC0xLjk1cy0uMDYtMS4zMS0uMTQtMS45NWw0LjIzLTMuMzFjLjM4LS4zLjQ5LS44NC4yNC0xLjI4bC00LTYuOTNjLS4yNS0uNDMtLjc3LS42MS0xLjIyLS40M2wtNC45OCAyLjAxYy0xLjAzLS43OS0yLjE2LTEuNDYtMy4zOC0xLjk3bC0uNzUtNS4zYy0uMDktLjQ3LS41LS44NC0xLS44NGgtOGMtLjUgMC0uOTEuMzctLjk5Ljg0bC0uNzUgNS4zYy0xLjIyLjUxLTIuMzUgMS4xNy0zLjM4IDEuOTdsLTQuOTgtMi4wMWMtLjQ1LS4xNy0uOTcgMC0xLjIyLjQzbC00IDYuOTNjLS4yNS40My0uMTQuOTcuMjQgMS4yOGw0LjIyIDMuMzFjLS4wOC42NC0uMTQgMS4yOS0uMTQgMS45NXMuMDYgMS4zMS4xNCAxLjk1bC00LjIyIDMuMzFjLS4zOC4zLS40OS44NC0uMjQgMS4yOGw0IDYuOTNjLjI1LjQzLjc3LjYxIDEuMjIuNDNsNC45OC0yLjAxYzEuMDMuNzkgMi4xNiAxLjQ2IDMuMzggMS45N2wuNzUgNS4zYy4wOC40Ny40OS44NC45OS44NGg4Yy41IDAgLjkxLS4zNy45OS0uODRsLjc1LTUuM2MxLjIyLS41MSAyLjM1LTEuMTcgMy4zOC0xLjk3bDQuOTggMi4wMWMuNDUuMTcuOTcgMCAxLjIyLS40M2w0LTYuOTNjLjI1LS40My4xNC0uOTctLjI0LTEuMjhsLTQuMjItMy4zMXptLTE0Ljg2IDUuMDVjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3eiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4=");
			console.log("setup semi-completed (async functions left)");
		}else{
			let c = window.particles.c;
			c.ctx.clearRect(0,0,256,256);
			if(!!c.menu){
				c.ctx.fillStyle="#80808050";
				c.ctx.fillRect(0,0,256,256);
			}
			c.ctx.font = '12px OPPcanvasUIFont';
			c.ctx.fillStyle="#ffffffb0";
			c.ctx.fillText("Open Particle Playground",5,15,246);
			c.ctx.fillStyle="#ffffff80";
			c.ctx.font = '8px OPPcanvasUIFont';
			c.ctx.fillText("Created by @Ponali",5,25,246);
			c.ctx.globalAlpha=0.5+(0.3*(mx>=235&&mx<251&&my>=5&&my<21));
			c.ctx.drawImage(c.icons.settings,235,5,16,16);
			c.ctx.globalAlpha=1;
			if(c.menu===1){
				c.ctx.font = '12px OPPcanvasUIFont';
				c.ctx.fillStyle="#ffffffb0";
				if(mx>=5&&mx<251&&my>=210&&my<222){
					c.ctx.fillStyle="#ffffffff";
					if((!!cl)&&(!c.currentlyClicking)){
						c.settingsCategoryIdx++;
						if(c.settingsCategoryIdx>window.particles.settings.length){c.settingsCategoryIdx=0;}
					};
				}
				c.ctx.fillText(window.particles.settings[c.settingsCategoryIdx].category_name,5,220,246);
				for(i=0;i<window.particles.settings[c.settingsCategoryIdx].options.length;i++){
					let text = window.particles.settings[c.settingsCategoryIdx].options[i].name;
					switch (window.particles.settings[c.settingsCategoryIdx].options[i].type){
						case "checkbox":let ticked=window.particles.settings[c.settingsCategoryIdx].options[i].ticked;text="✅".repeat(ticked)+"❌".repeat(!ticked)+text;break;
						case "choose":text="["+window.particles.settings[c.settingsCategoryIdx].options[i].options[window.particles.settings[c.settingsCategoryIdx].options[i].optionIdx]+"] "+text;break;
						default: text+=" (?)";break;
					}
					c.ctx.fillStyle="#ffffffb0";
					if(mx>=5&&mx<251&&my>=40+(i*20)&&my<52+(i*20)){
						c.ctx.fillStyle="#ffffffff";
						if((!!cl)&&(!c.currentlyClicking)){
							switch (window.particles.settings[c.settingsCategoryIdx].options[i].type){
								case "checkbox":window.particles.settings[c.settingsCategoryIdx].options[i].ticked=!window.particles.settings[c.settingsCategoryIdx].options[i].ticked;break;
								case "choose":window.particles.settings[c.settingsCategoryIdx].options[i].optionIdx++;if(window.particles.settings[c.settingsCategoryIdx].options[i].optionIdx>(window.particles.settings[c.settingsCategoryIdx].options[i].options.length-1)){window.particles.settings[c.settingsCategoryIdx].options[i].optionIdx=0;};break;
								default:alert("cannot edit option with unknown type");break;
							}
						};
					}
					c.ctx.fillText(text,5,50+(i*20),246);
				}
			};
			window.particles.c.rawData=window.particles.c.ctx.getImageData(0, 0, 256, 256).data;
			if(window.particles.settings!=JSON.parse(localStorage["OPP-settings.json"])){
				localStorage["OPP-settings.json"]=JSON.stringify(window.particles.settings)
			}
			if(!!cl){
				if(mx>=235&&mx<251&&my>=5&&my<21){
					if(!window.particles.c.currentlyClicking){
						window.particles.c.menu=(1-window.particles.c.menu)%2;
					}
				} else {
					if(!c.menu){
						let particleData = {"color":(0x10000*(Math.random()<=(1/3)))+(0x100*(Math.random()<=(1/3)))+(1*(Math.random()<=(1/3))),"x":mx,"y":my,"vx":20*(0.5-Math.random()),"vy":10};
						if(!window.particles.settings[0].options[1].ticked){
							particleData.color=0x10101;
						}
						window.particles.push(particleData);
					}
				}
			};
			window.particles.c.currentlyClicking=!!cl;
			let particleSpeed=10;
			function deathCheck(){
				for(i=0;i<window.particles.length;i++){
					window.particles[i].x-=(window.particles[i].vx/particleSpeed)*(delta*60);
					window.particles[i].y-=(window.particles[i].vy/particleSpeed)*(delta*60);
					if(!window.particles.c.menu){ window.particles[i].vy-=1; }
					if(window.particles[i].y>(sh+16)||window.particles[i].x>(sw+16)||window.particles[i].x<(-16)){
						window.particles.splice(i,1);
						i--;
					};
				};
			};
			function bounceCheck(){
				for(i=0;i<window.particles.length;i++){
					window.particles[i].x-=(window.particles[i].vx/particleSpeed)*(delta*60);
					window.particles[i].y-=(window.particles[i].vy/particleSpeed)*(delta*60);
					window.particles[i].vy-=1;
					if(window.particles[i].y>(sh-4)&&(!window.particles[i].noBounce)){
						window.particles[i].vx=window.particles[i].vx/1.05;
						window.particles[i].vy=Math.abs(window.particles[i].vy)/1.2;
						if(window.particles[i].vy<10){
							window.particles[i].noBounce=true;
						};
					};
					if(window.particles[i].noBounce&&window.particles[i].y>(sh+16)){
						window.particles.splice(i,1);
						i--;
					}
					if(window.particles[i].x>(sw-4)){
						window.particles[i].vx=Math.abs(window.particles[i].vx)/1.05;
					};
					if(window.particles[i].x<4){
						window.particles[i].vx=Math.abs(window.particles[i].vx)/-1.05;
					}
				};
			};
			if(!c.menu){
				if(window.particles.settings[0].options[0].ticked){
					bounceCheck()
				} else {
					deathCheck();
				}
			}
		};
	};
	let scr=0;
	function put(val){
		switch(window.particles.settings[1].options[1].optionIdx){
			case 0:scr=scr|val;break;
			case 1:scr+=val;break;
			case 2:if(val>=1){scr=val;};break;
		}
	}
	for(i=0;i<window.particles.length;i++){
		let val = 0;
		switch(window.particles.settings[1].options[0].optionIdx){
			case 0:val=(Math.floor(255-Math.min((8*(Math.pow((x-window.particles[i].x),2)+Math.pow((y-window.particles[i].y),2))),255))*window.particles[i].color);break;
			case 1:val=(Math.pow((x-window.particles[i].x),2)+Math.pow((y-window.particles[i].y),2)<10)*255*window.particles[i].color;break;
			case 2:val=(Math.floor(window.particles[i].x)==x&&Math.floor(window.particles[i].y)==y)*255*window.particles[i].color;break;
		};
		put(val);
	};
	let cidx = (((x)+(y*256))*4);
	let alpha = (window.particles.c.rawData[cidx+3])/255;
	let val = (Math.floor(window.particles.c.rawData[cidx]*alpha)*0x10000)+(Math.floor(window.particles.c.rawData[cidx+1]*alpha)*0x100)+Math.floor(window.particles.c.rawData[cidx+2]*alpha);
	put(val);
	return scr;
})();