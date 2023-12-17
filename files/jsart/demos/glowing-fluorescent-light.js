(()=>{
	if(x==0&&y==0){
		if(window.vd){
			window.vd.deg+=0.01;
			if(window.vd.deg>(Math.PI*2)){
				window.vd.deg=0;
				window.vd.visual++;
				if(window.vd.visual==4){
					window.vd.visual=0;
				}
			}
		}else{
			window.vd={"visual":0,"ram":[],"deg":(Math.PI/2)};
			for(i=0;i<65536;i++){
				window.vd.ram.push(i)
			};
		};
	};
	function pxl(px,py){
		function val2rgb(val){
			return [Math.floor(val%256),Math.floor(val/256)%256,Math.floor(val/65536)%256];
		};
		function rgb2val(arr){
			r=Math.floor(arr[2]);
			g=Math.floor(arr[1]);
			b=Math.floor(arr[0]);
			return (r*65536)+(g*256)+b;
		};
		let rvl = 0x808080;let rvl2 = rvl;
		switch (window.vd.visual){
			case 0:
				rvl = window.vd.ram[((px-1)*1)+((py-1)*256)];
				rvl2 = window.vd.ram[((px+1)*1)+((py+1)*256)];
				break;
			case 1:
				rvl = window.vd.ram[((px)*1)+(((py+1)%256)*256)];
				rvl2 = window.vd.ram[((0-py)*1)+(((px+128)%256)*256)];
				break;
			case 2:
				rvl = window.vd.ram[((px+Math.floor(Math.cos(((y/10)+(t/250)))*2))*1)+(((py+1+Math.floor(Math.sin(((x/10)+(t/150)))*2))%256)*256)];
				rvl2 = window.vd.ram[((px)*1)+((py)*256)];
				break;
			case 3:
				rvl = window.vd.ram[(Math.floor(((px-128)*Math.sin(t/1000))+128)*1)+(Math.floor(((py-128)*Math.cos(t/1000))+128)*256)];
				rvl2 = window.vd.ram[(Math.floor((px+py)/1.6)*1)+((Math.floor((py+px-16)/1.6))*256)];
		};
		let rmcl1 = val2rgb((rvl ? rvl : 0));
		let rmcl2 = val2rgb(rvl2 ? rvl2 : 0);
		let rmcl = [Math.floor((rmcl1[0]+rmcl2[0])/(1.00*2)),Math.floor((rmcl1[1]+rmcl2[1])/(1.00*2)),Math.floor((rmcl1[2]+rmcl2[2])/(1.00*2))];
		if(((Math.sin(window.vd.deg)*(x-128))+(Math.cos(window.vd.deg)*(y-128))>-1&&(Math.sin(window.vd.deg)*(x-128))+(Math.cos(window.vd.deg)*(y-128))<1)){
			return rgb2val([(Math.sin((window.vd.deg*2)+0)+1)*127,(Math.sin((window.vd.deg*2)+180)+1)*127,(Math.sin((window.vd.deg*2)+360)+1)*127]);
		};
		return rgb2val(rmcl);
	};
	let clr = pxl(x,y);
	window.vd.ram[(x*1)+(y*256)]=clr;
	return clr;
})()