(()=>{
	if(x+y==0){
		if(!window.rtGac){
			alert("Real-time Glitchart compilation -- created by @Ponali\n/!\\ Some filters may lag.\n\nChangelog:\nv1.0.5: Added \"broken\" filter (breaks the screen)\nv1.0.4: Added 4 experiences.\nv1.0.3: Added 6 experiences.\nv1.0.2: Added \"projector\" filter (blurs x-axis)\nv1.0.1: Added 3 experiences.");
			window.rtGac={expA:0,expB:0,crt:0,proj:0,brok:0,change:0};
		};
		if(window.rtGac.change<t){
			window.rtGac.change=t+5000;
			window.rtGac.expA=Math.floor(Math.random()*20);
			window.rtGac.expB=Math.floor(Math.random()*20);
			while(window.rtGac.expA==window.rtGac.expB){
				window.rtGac.expB=Math.floor(Math.random()*20);
			};
			window.rtGac.crt=Math.random()>=0.8;
			window.rtGac.proj=Math.random()>=0.8;
			window.rtGac.brok=(Math.random()>=0.8)&&(!window.rtGac.proj);
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
			case 7:return Math.max(Math.min(Math.floor(Math.random()*60*Math.sin(x/27))+((Math.abs(y-128)<100&&Math.abs(x-128)<55)*100)+(Math.sqrt(((x-89)**2)+((y-133)**2))<8)*60+(((x+y<300)&&(Math.abs(y-128)<100&&Math.abs(x-128)<55))+((x+y<228)&&(Math.sqrt(((x-89)**2)+((y-133)**2))<8)))*20,255),0)*65793;
			case 8:return (Math.floor(Math.abs(x-127.5))==126)^(Math.floor(Math.abs(y-127.5))==126)?16776960:(Math.abs(Math.sqrt(((x-128)**2)+((y-128)**2))-(50+10*Math.sin(t/400)))<5?(((x+y)%2)*255)*65792:((Math.abs(Math.floor((x-128)/(y-128)+(t/1000)))%2)+(Math.abs(Math.floor((y-128)/(x-128)+(t/-1000)))%2))*37104);
			case 9:return 255*(y>=128)^(255<<Math.max(Math.min(Math.floor((x-60)/32-(1-Math.abs(y-128)/160))*8,31),-1))*(Math.sin((x/40)+(t/400))*10>Math.abs(y-128)-80);
			case 10:return ((((Math.abs((x+Math.sin(x*y)*(y/50)+Math.sin((y/50)+(t/500))*(2+Math.sin((x/100)+(y/10)+(t/300))*4))-128)<10&&Math.abs(y-128)<70)||(Math.abs((x+Math.sin(x*y)*(y/50)+Math.sin((y/50)+(t/500))*(2+Math.sin((x/100)+(y/10)+(t/300))*4))-128)<70&&Math.abs(y-128)<30))^(Math.abs((x+Math.sin(x*y)*(y/50)+Math.sin((y/50)+(t/500))*(2+Math.sin((x/100)+(y/10)+(t/300))*4))-128)<55&&Math.abs(y-128)<15))*16777215)^(((Math.sqrt((((x+Math.sin((t/400)+(y/10))*5)-128)**2)+((y-128)**2))<255/2.5)||(Math.abs(Math.sqrt(((x-128)**2)+((y-128)**2))-105)<1))*255)^x*256^y*65536;
			case 11:return ((Math.floor(255-Math.sqrt(x*y))*65536^y*256^x)^(0xffff*(x>128+Math.sin((t/600)+(y/100))*128))^(0xff0000*(x>128+Math.sin((t/600)+(y/100)+180)*128)))^((Math.sqrt(((((Math.abs(x-128)/(10+Math.sin(t/800)*4))%2)-1)**2)+((((Math.abs(y-128)/(10+Math.sin(t/800)*4))%2)-1)**2))>1)*0xffffff);
			case 12:return ((Math.abs(x-(Math.abs((t/1500)%2-1)*(256-64*2))-64)<64&&Math.abs(y-(Math.abs((t/1600)%2-1)*(256-64*2))-64)<64)*0xffffff)^(((x-128)/((y-128)**2/65536))+t);
			case 13:return ((((x*4)**(1+(((Math.sin(t/400)+1)/2)**3)*100))+((y*4)**(1+(((Math.sin(t/400)+1)/2)**3)*100)))**(1/(1+(((Math.sin(t/400)+1)/2)**3)*100)))*255;
			case 14:return (Math.abs(x-128)<99&Math.abs(y-220)<20)?-(((Math.floor(x/(1+(x<128)))/3)+(Math.floor(y/(1+(x<128)))/4)-(t/400))^Math.floor(x/(1+(x<128)))**(1.5+(Math.floor(y/(1+(x<128)))/256)))%2:(((Math.floor(((((x+(t/40))+y)%100)-y-100)/1.4)&0xff)*(65537-256))+65280)^(-(x>96+Math.sin(Math.sin(Math.sin((y/10)+(t/250))))*20))&0xff^-(x>160+Math.sin(Math.sin(Math.sin((y/10)+(t/300))))*20);
			case 15:return ~(((Math.sin((x+(t/50))/(2*Math.PI))*Math.sin(y/(2*Math.PI)))**0.5+1)*127.5)^(255-Math.abs((x*2)-255))*256^(255-Math.abs((y*2)-255))*65536;
			case 16:return (0xff&(((x**((x/128)+0.5+(y%2)))^(y**((x/128)+0.5+(y%2))))**(1/((x/128)+0.5+(y%2)))+(t/6)))^(((x^(y+Math.sin((t/400)+((x^y)/32))*10))*0x10100)^0xf000);
			case 17:return ((Math.sqrt((((x%128)-64)**2)+(((y%128)-64)**2))<=64)*0xffffff)^((x-128)*(y-128)+(t/2));
			case 18:return y<64?-(((x/4)*(y/4)+(Math.floor(t/50)*50/400))%2):(((Math.floor((x/32)+(t/-1000))%2)^(Math.sin(Math.sin(Math.sin((x/15)+(t/400))-t/200))*30+128<y))*0xffff8f)^-(((((y+(Math.sin((y/100)+(x/50)+(t/400))*10))-165)%40)+165)>185);
			case 19:return 0xffffff*((Math.abs(y-Math.abs(((t/(8000+x))%2)-1)*255)<10)^(Math.abs(x-Math.abs(((t/(8000+(y+256)))%2)-1)*255)<10));
			default:return Math.random()*0xffffff;
		}
	};
	if(window.rtGac.crt){x=Math.floor(x+(Math.random()*2)-1);};
	let a=(getExp(window.rtGac.expA)&0xffffff)^(getExp(window.rtGac.expB)&0xffffff);
	if(window.rtGac.crt){a = (()=>{ let out = a;function getRgb(val){return [(0xff0000&val)/0x10000,(0xff00&val)/0x100,0xff&val];};function getVal(rgb){return (rgb[0]*0x10000)+(rgb[1]*0x100)+rgb[2];};return getVal(getRgb(out).map((a)=>{return ((a/255)**2)*255}).map((a)=>{return Math.floor(a)})); })();}
	if(window.rtGac.proj){a=((cb)=>{function getRGB(val){return [(val&0xff0000)/0x10000,(val&0xff00)/0x100,val&0xff];};function getVal(rgb){return rgb[0]*0x10000+rgb[1]*0x100+rgb[2]};if(!window.rtGac.projRam||typeof(window.rtGac.projRam)!="object"){window.rtGac.projRam=[0,0,0];};let ca=getRGB((cb)%0xffffff&0xffffff);window.rtGac.projRam=window.rtGac.projRam.map((a,i)=>{if(!a){return 1;};return a+((ca[i]-a)/(2+(Math.sin(t/700)*2)+Math.random()*5))});return getVal(window.rtGac.projRam.map((a)=>{return Math.floor(a)}));})(a);}
	if(window.rtGac.brok){a=((cb)=>{function getRGB(val){return [(val&0xff0000)/0x10000,(val&0xff00)/0x100,val&0xff];};function getVal(rgb){return rgb[0]*0x10000+rgb[1]*0x100+rgb[2]};if(!window.rtGac.projRam||typeof(window.rtGac.projRam)!="object"||(x==0)){window.rtGac.projRam=[1,1,1];};let ca=getRGB((cb)%0xffffff&0xffffff);window.rtGac.projRam=window.rtGac.projRam.map((a,i)=>{if(!a){return 0;};return ca[i]-(a*((y/255)**2));});return getVal(window.rtGac.projRam.map((a)=>{return Math.floor(a)}));})(a)}
	return a;
})()