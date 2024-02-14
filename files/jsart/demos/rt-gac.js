(()=>{
	if(x+y==0){
		if(!window.rtGac){
			alert("Real-time Glitchart compilation -- created by @Ponali\n/!\\ CRT coloring effect may lag.");
			window.rtGac={expA:0,expB:0,crt:0,change:0};
		};
		if(window.rtGac.change<t){
			window.rtGac.change=t+5000;
			window.rtGac.expA=Math.floor(Math.random()*7);
			window.rtGac.expB=Math.floor(Math.random()*7);
			while(window.rtGac.expA==window.rtGac.expB){
				window.rtGac.expB=Math.floor(Math.random()*7);
			};
			window.rtGac.crt=Math.random()>=0.8;
		};
	};
	function getExp(a){
		switch(a){
			case 0:return Math.floor(((Math.cos((y-(sh/2))/9)*Math.cos((x-(sw/2))/9))+1)*127.5)*0x10101/(255.5+(Math.sin(t/1000)*0.3))
			case 1:return (Math.floor(Math.min(Math.max(((Math.cos(x/(6.5*Math.PI))**(1+2*Math.floor(8*(Math.sin(t/200)+1))))*100)+y-128,0),1)*255)*65793)
			case 2:return ((x*(x+400)/100-((t/5)%253))+500^(y*(x+400)/100)+((t/5)%253))*65537
			case 3:return ((((x%64)-32)*Math.sin(t/300)+16)+(((y%64)-32)*Math.cos(t/320)+16)<32)*16777215
			case 4:return (Math.abs((((x%32)-16)*Math.sin(t/400)+16)+(((y%32)-16)*Math.cos(t/300)+16)-32)<2)*16777215
			case 5:return Math.floor((Math.sin((Math.sqrt((x**2)+(y**2))-(t/30))/8)+1)*127.5)+(Math.floor((Math.sin((Math.sqrt(((x-128)**2)+((y-128)**2))-(t/25))/8)+1)*127.5)*0x100)+(Math.floor((Math.sin((Math.sqrt(((x-256)**2)+((y-256)**2))-(t/20))/8)+1)*127.5)*0x10000)
			case 6:return ((Math.sqrt((((x+(Math.sin((t/130)+(y/6)+(x))*2))-128)**2)+((y-128)**2))<80&&!(Math.sqrt((((x+(Math.sin((t/130)+(y/6)+(x))*2))-160)**2)+((y-128)**2))<80)||(x>115&&x<210&&Math.abs(y-128)<20)&&((x+y+(t/(1+9*((t%1700)<1200))))%20<10))*0x808080)+Math.floor(((Math.sin(x/(10+Math.sin((y/40)+(t/700))))+1)/2)*0x7f)*0x10101
			default:return 0;
		}
	};
	if(window.rtGac.crt){x=Math.floor(x+(Math.random()*2)-1);};
	let a=(getExp(window.rtGac.expA)&0xffffff)^(getExp(window.rtGac.expB)&0xffffff);
	if(window.rtGac.crt){
		return (()=>{ let out = a;function getRgb(val){return [(0xff0000&val)/0x10000,(0xff00&val)/0x100,0xff&val];};function getVal(rgb){return (rgb[0]*0x10000)+(rgb[1]*0x100)+rgb[2];};return getVal(getRgb(out).map((a)=>{return ((a/255)**2)*255}).map((a)=>{return Math.floor(a)})); })();
	} else {
		return a;
	}
})()