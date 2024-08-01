(()=>{if(x==0&&y==0){
if(window.imgvw){
if(window.imgvw.menu==0){
	if(((cl==1&&mx>200&my>243&&k!=88)||k==82)&&window.imgvw.loaded==true){window.imgvw=null;}
	if((cl==1&&mx<59&my>243&&k!=88)&&window.imgvw.loaded==true){window.imgvw.menu=1;}
} else if(window.imgvw.menu==1){
	if(cl==1&&mx<34&&my<12){window.imgvw.menu=0;}
}
}
if(!window.imgvw){
window.imgvw = {"cnv":document.createElement("canvas"),"ctx":{},"dataURL":"","loaded":false,"menu":0,"imageOrigin":""};
window.imgvw.cnv.width=window.imgvw.cnv.height=512;
window.imgvw.ctx=window.imgvw.cnv.getContext("2d");

window.imgvw.toDataURL = ((url, callback)=>{
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'blob';
    xhr.onload = function(){
      var fr = new FileReader();
    
      fr.onload = function(){
        callback(this.result);
      };
    
      fr.readAsDataURL(xhr.response); // async call
    };
    
    xhr.send();
})

let link = (window.cimgurl ? window.cimgurl : "https://picsum.photos/512");
window.imgvw.imageOrigin = link;
window.imgvw.toDataURL(link, function(dataURL){
  window.imgvw.imge=document.createElement("img");
  window.imgvw.imge.src = dataURL;
  window.imgvw.imge.onload=(()=>{
			function getSizeFromRatio(ratio,sqsize){if(ratio>1){return [sqsize,Math.floor(sqsize/ratio)]} else {return [Math.floor(sqsize*ratio),sqsize]}};
			let size = getSizeFromRatio((window.imgvw.imge.width/window.imgvw.imge.height),512)
			window.imgvw.imageSize = size;
      window.imgvw.ctx.drawImage(window.imgvw.imge,Math.floor((512-(size[0]))/2),Math.floor((512-(size[1]))/2),size[0],size[1]);
			window.imgvw.imgdata = window.imgvw.ctx.getImageData(0,0,512,512);
			window.imgvw.loaded=true;
  })
});
}
}

let txte = (()=>{ if(x==0&&y==0){if(!window.imgvw.texte){(()=>{ fetch("https://jsart.ponali.repl.co/modules/txt-small.txt").then(data=>data.text()).then((body)=>{window.imgvw.texte.func= new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k",body);}) })();window.imgvw.texte={"func":(()=>{})};}} return window.imgvw.texte.func(i,t,x,y,mx,my,sw,sh,c,ic,cl,k); })();
let imgidx = (x*2)+(y*1024);
if(k==88){imgidx=(x+Math.floor(mx))+((y+Math.floor(my))*512);}
let idata = [window.imgvw.imgdata.data[(imgidx*4)],window.imgvw.imgdata.data[(imgidx*4)+1],window.imgvw.imgdata.data[(imgidx*4)+2]];
let infobar = (my>244&&window.imgvw.loaded&&k!=88&&window.imgvw.menu==0);
let fade = (1-(0.5*((y>243||y<13)&&infobar)))+(0.25*(y>243&&infobar&&x>200&&mx>200))+(0.25*(y>243&&infobar&&x<59&&mx<59));
if(window.imgvw.menu==1){fade=0.25+(0.25*(y<12&&my<12&&x<34&&mx<34));}
let scrui = (Math.min(Math.floor(fade*idata[0]),256)*65536)+(Math.min(Math.floor(fade*idata[1]),256)*256)+Math.min(Math.floor(fade*idata[2]),256);
let scrtxt = 0;
if(infobar){
	scrtxt=scrtxt|txte("Picsum Image Viewer by @Ponali",0,0,1)|txte("Details",0,244,0)|txte("Refresh",0,244,2);
} else if(window.imgvw.menu==1){
	scrtxt=scrtxt|txte("Back",0,0,0)|txte(("Natural image size: "+window.imgvw.imge.width+"x"+window.imgvw.imge.height),0,30,1)|txte(("Resized to "+window.imgvw.imageSize[0]+"x"+window.imgvw.imageSize[1]),0,60,1)|txte(("Source: "+window.imgvw.imageOrigin.slice(0,20)),0,90,1)|txte((""+window.imgvw.imageOrigin.slice(20,40)+"...".repeat(window.imgvw.imageOrigin.length>40)),0,110,1);
}
return (scrtxt ? scrtxt : scrui);
})();