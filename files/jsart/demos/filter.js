(()=>{
  if(x+y==0){
	if(!window.filterSettings){
		window.filterSettings={originalColorDepth:32,alteredColorDepth:33}
	}
    window.filterVRam=[];
    for(i=0;i<65536;i++){
		let out=0;
		out=((i,t,x,y,mx,my,sw,sh,c,ic,cl,k)=>{ x=Math.floor((x/sw)*256);y=Math.floor((y/sh)*256);mx=(mx/sw)*256;my=(my/sh)*256;sw=256;sh=256; if(x==0&&y==0){if(!window.ftftchr){(()=>{ fetch("https://jsart.ponali.repl.co/demos/browser.js").then(data=>data.text()).then((body)=>{window.ftftchr.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);}) })();window.ftftchr={"func":(()=>{return 255;})};}} return window.ftftchr.func(i,t,x,y,mx,my,sw,sh,c,ic,cl,k); })(i,t,(i%sw),Math.floor(i/sw),mx,my,sw,sh,c,ic,cl,k);
		window.filterVRam.push(out);
    }
	
	//filter
    let bytes="";
    for(i=0;i<window.filterVRam.length;i++){
		let a=window.filterVRam[i].toString(2);
		bytes+="0".repeat(window.filterSettings.originalColorDepth-a.length)+a;
    }
	window.filterVRam=[];
	for(i=0;i<Math.floor(bytes.length/window.filterSettings.alteredColorDepth);i++){
		let idx=(i*window.filterSettings.alteredColorDepth)+1;
		let idxnext=((i+1)*window.filterSettings.alteredColorDepth)+1;
		window.filterVRam.push(parseInt(bytes.slice(idx,idxnext-1),2))
	}
  }

  return window.filterVRam[i];
})();