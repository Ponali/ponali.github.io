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