(()=>{

// JSArt AppTools

let funcs={};
funcs.drawText=((text,x,y,width)=>{
	updateFillStroke();
	if(!text){console.error("Text must be specified when using the drawText function. The text will not be drawn.");return null;};
	window.at.c.tx.font = ([window.at.textSettings.style,window.at.textSettings.size.toString()+"px",window.at.textSettings.font]).filter((str)=>str!=='').join(" ");
	let al=window.at.textSettings.align;
	window.at.c.tx.textAlign = ((["l","left"]).includes(al)?"start":((["r","right"]).includes(al)?"end":((["c","middle"]).includes(al)?"center":al)));
	let alX=((["l","left"]).includes(al)?0:((["r","right"]).includes(al)?255:((["c","middle"]).includes(al)?127:al)))
	window.at.c.tx.fillText(text,x+alX,y+0,width);
	if(!window.at.noStroke){window.at.c.tx.strokeText(text,x+alX,y+0,width);}
});
funcs.setFill=((r,g,b,a)=>{
	r=Math.floor(Math.abs(r%256));g=Math.floor(Math.abs(g%256));b=Math.floor(Math.abs(b%256));a=Math.floor(Math.abs(a%256));
	if(!a){a=255;};if(!g&&!b){window.at.fill=[r,r,r,a]}else{window.at.fill=[r,g,b,a];}
	updateFillStroke();
});
funcs.setStroke=((r,g,b,a)=>{
	window.at.noStroke=false;
	r=Math.floor(Math.abs(r%256));g=Math.floor(Math.abs(g%256));b=Math.floor(Math.abs(b%256));a=Math.floor(Math.abs(a%256));
	if(!a){a=255;};if(!g&&!b){window.at.stroke=[r,r,r,a]}else{window.at.stroke=[r,g,b,a];}
	updateFillStroke();
});
funcs.noStroke=(()=>{window.at.noStroke=true;});
funcs.background=((r,g,b)=>{
	r=Math.floor(Math.abs(r%256));g=Math.floor(Math.abs(g%256));b=Math.floor(Math.abs(b%256));
	let fillBefore=window.at.fill;
	funcs.setFill(r,g,b);
	window.at.c.tx.fillRect(0,0,256,256);
	window.at.fill=fillBefore;
	updateFillStroke();
});

window.at={"initiated":false,"initializing":false,"func":{"init":()=>{},"draw":(t,mx,my,sw,sh)=>{}},"fill":[255,255,255],"stroke":[127,127,127],"noStroke":false,"textSettings":{"size":16,"font":"sans-serif","align":"left","style":""}};
window.at.c={"nv":document.createElement("canvas"),"nvimg":[]};
window.at.c.nv.width=window.at.c.nv.height=256;
window.at.c.tx=window.at.c.nv.getContext("2d");
window.at.c.tx.textBaseline="top";
window.at.result=((i,t,x,y,mx,my,sw,sh)=>{
	if(!window.at.initiated){
		if(!window.at.initializing){window.at.initializing=true;window.at.func.init()};
		return (0x101020+(((Math.floor((x+y+(t/50))/15)%2)+(((x-((t/50)%64)+64)%64)<32^(y%64)<32)/1.5)*0x30));
	} else {
		if(x+y==0){
			checkFuncs();
			window.at.c.tx.fillStyle="#000000";
			window.at.c.tx.fillRect(0,0,256,256);
			updateFillStroke();
			window.at.func.draw(t,mx,my,sw,sh);
			makeImage();
		};
		let img=window.at.c.nvimg,i=x+(y*256);
		return (img[(i*4)]*0x10000)+(img[(i*4)+1]*0x100)+img[(i*4)+2];
	}
});

function checkFuncs(){
	let funcList=Object.keys(funcs);
	for(i=0;i<funcList.length;i++){
		window.at[funcList[i]]=funcs[funcList[i]];
	}
}
function makeImage(){
	window.at.c.nvimg = window.at.c.tx.getImageData(0,0,256,256).data;
}
function updateFillStroke(){
	let fs="#";
	window.at.fill.forEach((a)=>{
		let b=a.toString(16);
		b="0".repeat(2-b.length)+b;
		fs+=b;
	});
	window.at.c.tx.fillStyle=fs;
	fs="#";
	window.at.stroke.forEach((a)=>{
		let b=a.toString(16);
		b="0".repeat(2-b.length)+b;
		fs+=b;
	});
	window.at.c.tx.strokeStyle=fs;
}

})();