let exampleScripts=[
	{rgb:(!0),tx:"let sz=[1,1,1];return ((r,g,b,x,y)=>{let a=[r,g,b].map((a,b,c)=>abs(a-c[(b+1)%3]));sz=sz.map((c,b)=>max(a[b],c));return a.map((a,b)=>a/(sz[b]/255));})"},
	{rgb:(!0),tx:"let a=[0,0,0];return ((r,g,b,x,y)=>{let ratio=((y/255)**5)+0.1;y=y+28;let blur=3+sin(y/10.9)*sin(y/11.8)*sin(y/12.7)*sin(y/13.6)*sin(y/14.5)*sin(y/15.4)*sin(y/16.3)*sin(y/17.2)*sin(y/18.1)*sin(y/19)*60;blur=max(blur,1);a=[r,g,b].map((c)=>c*(1-ratio)+random()*255*ratio).map((c,d)=>a[d]+(c-a[d])/(blur+sin(d*8+(x+y*256)/2560)));return a;});"},
	{rgb:(!0),tx:"let keep=[0,0,0];return ((r,g,b,x,y)=>{keep=[r,g,b].map((a,b)=>(keep[b]+a)/1.5);return keep.map((a)=>abs((a/255+1)%2-1)*255)})"},
	{rgb:(!0),tx:"let c=[0,0,0];return ((r,g,b,x,y)=>{let a=[r,g,b];c=c.map((c,b)=>(abs(c-a[b])>50?a[b]:c));return c;})"},
	{rgb:(!0),tx:"let c=[0,0,0],d=0;return ((r,g,b,x,y)=>{let a=[r,g,b];c=c.map((c,b)=>{if(abs(c-a[b])>(70-d)){d=0;return a[b]};return c});d++;return c.map((a)=>a+(random()-0.5)*2*min(d,255)).map((a)=>min(max(a,0),255));})"},
	{rgb:(!0),tx:"function minr(a){let b=255;a.forEach((a)=>{b=min(b,a)});return b;};function maxr(a){let b=0;a.forEach((a)=>{b=max(b,a)});return b;};return ((r,g,b,x,y)=>{return [r,g,b].map((a,b,c)=>{let m=[minr(c),maxr(c)];return min((a-m[0])/(m[1]-m[0])*255,255)});});"},
	{rgb:(!0),tx:"colorPalleteLimit=6;// color pallete limit: goes from 0-8\nfunction limit(a,i,q){return min([floor,round,ceil][((i%256)^floor(i/256))%3](a/q)*q,255);};return ((r,g,b,x,y)=>{return [r,g,b].map((a)=>limit(a,x+y*256,2**colorPalleteLimit));})"},
	{rgb:(!0),tx:"let ratio=0; /* -1: cold. 0: normal. 1: hot. */\nreturn ((r,g,b,x,y)=>{let cold=[r,g,b].sort((a,b)=>a-b);let hot=[r,g,b].sort((a,b)=>b-a);return [r,g,b].map((a,b)=>(a*(1-abs(ratio)))+hot[b]*max(ratio,0)+cold[b]*(0-min(ratio,0)));})"},
	{rgb:(!0),tx:"return ((r,g,b,x,y)=>{x=x+(((r+g+b)/3/255-0.5)*64);y=y+(((r+g+b)/3/255-0.5)*64);let change=sqrt((x-127.5)**2+(y-255)**2)/6;let full=PI*2;return [r,g,b].map((a)=>(a-127.5)/127.5).map((a,b,c)=>c[(b)%3]*cos(change)+c[(b+1)%3]*cos(change+full/3)+c[(b+2)%3]*cos(change+full/3*2)).map((a)=>max(min(a*127.5+127.5,255),0));})"},
	{rgb:(!0),tx:"let mx=[0,0,0];return ((r,g,b,x,y)=>{mx=mx.map((a,c)=>max(a/1.001,[r,g,b][c]));return [r,g,b].map((a,b)=>(mx[b]-a)+(random()-0.5)*(r+g+b)/3).map((a)=>max(min(a,255),0))})"},
	{rgb:(!0),tx:'let staticRatio=0.1; // value from 0-1\nfunction rgb2cmyk(r,g,b){\n  [r,g,b]=[r,g,b].map((a)=>a/255)\n  let k=1-max(r,max(g,b));\n  let c=(1-r-k)/(1-k);\n  let m=(1-g-k)/(1-k);\n  let y=(1-b-k)/(1-k);\n  return [c,m,y,k]\n}; // call them from 0-1 values\n\nfunction cmyk2rgb(a){\n  let c,m,y,k;[c,m,y,k]=a;\n  [c,m,y,k]=[c,m,y,k].map((a)=>1-a)\n  let r=c*k;\n  let g=m*k;\n  let b=y*k;\n  return [r,g,b].map((a)=>a*255)\n}\n\nreturn ((r,g,b,x,y)=>{\n  let a=rgb2cmyk(r,g,b);\n  a=a.map((a)=>a*(1-staticRatio)+random()*staticRatio)\n  return cmyk2rgb(a);\n})'},
	{rgb:(!0),tx:'let hueRotate=120; // measurement is in degrees\n// thanks to Kamil for the conversion functions.\n// https://stackoverflow.com/a/54071699/860099\n// https://stackoverflow.com/a/64090995/860099\nfunction rgb2hsl(arr) {let r,g,b;[r,g,b]=arr.map((a)=>a/255)\n  let v=Math.max(r,g,b), c=v-Math.min(r,g,b), f=(1-Math.abs(v+v-c-1)); \n  let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); \n  return [60*(h<0?h+6:h), f ? c/f : 0, (v+v-c)/2];\n}\nfunction hsl2rgb(arr){\n  let h,s,l,r,g,b;[h,s,l]=arr;\n  let a=s*Math.min(l,1-l);\n  let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);\n  return [f(0),f(8),f(4)].map((a)=>a*255);\n}\nreturn ((r,g,b,x,y)=>{\n  let hsl=rgb2hsl([r,g,b]);\n  hsl[0]=hsl[0]+hueRotate;\n  return hsl2rgb(hsl);\n})'}
];
let hexEncode=((a)=>{return a.split("").map((b)=>b.charCodeAt().toString(16).padStart(2,"0")).join("")}),hexDecode=((a)=>{return a.match(/.{1,2}/g).map((a)=>String.fromCharCode(parseInt(a,16))).join("")}),
d=document,Q=(a)=>d.querySelectorAll(a),q=(a)=>Q(a)[0]
Object.getOwnPropertyNames(Math).forEach((a)=>{window[a]=Math[a]})
let c=document.querySelector("canvas"),x=c.getContext("2d"),currentImage=createPlainImage();
c.width=c.height=256,imgurl="",func=(()=>{});
function createPlainImage(){
	let img=document.createElement("img");
	img.crossOrigin="Anonymous";
	img.onload=changeImage;
	return img;
}
function getModifiedImageData(data){
	if(q("#io").value=="1"){return data;}
	let out=[];
	for(let ii=0;ii<data.length;ii+=4){
		out.push([data[ii],data[ii+1],data[ii+2]]);
	};
	return out;
};
function getOriginalImageData(dataog,data){
	if(q("#io").value=="2"){
		for(let ii in data){
			dataog.data[4*ii]=data[ii][0];
			dataog.data[4*ii+1]=data[ii][1];
			dataog.data[4*ii+2]=data[ii][2];
			dataog.data[4*ii+3]=255;
		}
	};
	return dataog;
}
function changeImage(){
	x.clearRect(0,0,256,256);
	x.drawImage(currentImage,0,0,256,256);
	let dataog=x.getImageData(0,0,256,256),data=getModifiedImageData(dataog.data);
	if(q("#io").value=="1"){
		for(di in data){data[di]=0xff&func(data[di],di%4,floor(di/4)%256,floor(floor(di/4)/256))};
	} else {
		for(di in data){data[di]=func(data[di][0],data[di][1],data[di][2],di%256,floor(di/256)).map((a)=>0xff&a);};
	};
	x.clearRect(0,0,256,256);
	x.putImageData(getOriginalImageData(dataog,data),0,0);
}
function update(a,b){func=b;if(a!=imgurl){currentImage.src=a+(a.includes("?")?(a.includes("#")?"&":"#"):"?")+Date.now().toString();imgurl=a;}else{changeImage();}};
function updateEL(){location.hash=[q("#imgurl").value,q("#func").value,q("#io").value].map(hexEncode).join("_");update(q("#imgurl").value,(new Function(q("#func").value))())}
q("#imgurl").addEventListener("change",updateEL);
q("#func").addEventListener("change",updateEL);
if(location.hash.replace("#","")!=""){
	let out=location.hash.replace("#","").split("_").map(hexDecode);
	q("#imgurl").value=out[0];
	q("#func").value=out[1];
	q("#io").value=out[2];
}
updateEL();
q("#refreshImgBtn").addEventListener("click",()=>{currentImage=createPlainImage();imgurl="";updateEL();});
function loadExample(n){
	q("#func").value=exampleScripts[n].tx;
	q("#io").value=exampleScripts[n].rgb+1;
	updateEL();
}
q("#loadExampleButton").addEventListener("click",()=>{
	loadExample(parseInt(q('#exampleID').value));
})