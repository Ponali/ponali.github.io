(function(Scratch) {
	'use strict';
	function cnv(){let a=document.createElement("canvas");return [a,a.getContext("2d")]}
	function label(a){return {blockType:Scratch.BlockType.LABEL,text:a}}
	class Extension{
		getInfo(){
			return {
				id:"ponaliImageManipulation",
				name:"Image Manipulation",
				color1:"#57bd97",
				color2:"#67cda7",
				// docsURI="https://ponali.github.io/files/imageManipulationDocs.html",
				blocks:[
					label("Create/Get Image"),
					{
						opcode:"fetchURL",
						text:"get image from URL [url]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							url:{
								type:Scratch.ArgumentType.STRING,
								defaultValue:"https://picsum.photos/128"
							}
						}
					},
					/*{
						opcode:"getImgDataURL",
						text:"get data URL from Blob [blob]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							blob:{
								type:Scratch.ArgumentType.STRING
							}
						}
					},*/
					{
						opcode:"createBlankImage",
						text:"create blank image as format [format] width [width] height [height] color [color]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							format:{type:Scratch.ArgumentType.STRING,defaultValue:"image/png"},
							width:{type:Scratch.ArgumentType.NUMBER,defaultValue:480},
							height:{type:Scratch.ArgumentType.NUMBER,defaultValue:360},
							color:{type:Scratch.ArgumentType.STRING,defaultValue:"#808080ff"}
						}
					},
					{
						opcode:"createGrainImage",
						text:"create grain image as format [format] width [width] height [height] use color? [color]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							format:{type:Scratch.ArgumentType.STRING,defaultValue:"image/png"},
							width:{type:Scratch.ArgumentType.NUMBER,defaultValue:480},
							height:{type:Scratch.ArgumentType.NUMBER,defaultValue:360},
							color:{type:Scratch.ArgumentType.BOOLEAN}
						}
					},
					{
						opcode:"stageScreenshot",
						text:"screenshot the stage",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{}
					},
					label("Edit Image"),
					{
						opcode:"convertImage",
						text:"convert image [img] to [format] with [detail]% quality",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							format:{type:Scratch.ArgumentType.STRING,defaultValue:"image/png"},
							detail:{type:Scratch.ArgumentType.NUMBER,defaultValue:100}
						}
					},
					{
						opcode:"cropImage",
						text:"crop image [img] x [x] y [y] width [width] height [height]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							x:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},
							y:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},
							width:{type:Scratch.ArgumentType.NUMBER,defaultValue:64},
							height:{type:Scratch.ArgumentType.NUMBER,defaultValue:64},
						}
					},
					{
						opcode:"resizeImage",
						text:"resize image [img] to width [width] height [height]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							width:{type:Scratch.ArgumentType.NUMBER,defaultValue:64},
							height:{type:Scratch.ArgumentType.NUMBER,defaultValue:64},
						}
					},
					{
						opcode:"flipHorizontalImage",
						text:"flip image horizontally [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
						}
					},
					{
						opcode:"flipVerticalImage",
						text:"flip image vertically [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
						}
					},
					{
						opcode:"rotateImage",
						text:"rotate [img] by [val] degrees",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:90}
						}
					},
					label("Image Effects"),
					{
						opcode:"imageSaturation",
						text:"set image [img] saturation to [val]%",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:100}
						}
					},
					{
						opcode:"imageHueRotate",
						text:"from [img] rotate hue [val] degrees",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:180}
						}
					},
					{
						opcode:"imageBrightness",
						text:"set image [img] brightness to [val]%",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:150}
						}
					},
					{
						opcode:"imageContrast",
						text:"set image [img] contrast to [val]%",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:200}
						}
					},
					{
						opcode:"imageInvert",
						text:"invert image color [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
						}
					},
					label("Image Pixel Modification"),
					{
						opcode:"imageColorMatrix",
						text:"use color matrix [clrmtx] on image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							clrmtx:{type:Scratch.ArgumentType.STRING,defaultValue:"[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]]"}
						}
					},
					{
						opcode:"imagePixelData",
						text:"get pixel data of image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageCreateFromData",
						text:"create image from pixel data [pxd] width [width] height [height]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							pxd:{type:Scratch.ArgumentType.STRING},
							width:{type:Scratch.ArgumentType.NUMBER,defaultValue:128},
							height:{type:Scratch.ArgumentType.NUMBER,defaultValue:128}
						}
					},
					{
						opcode:"imageParseChannel",
						text:"parse channel [ch] from image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							ch:{type:Scratch.ArgumentType.STRING,menu:"CHANNEL_MENU"}
						}
					},
					{
						opcode:"imageSetChannel",
						text:"set channel [ch] from image [img] to [chimg]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							ch:{type:Scratch.ArgumentType.STRING,menu:"CHANNEL_MENU"},
							chimg:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageMin",
						text:"get minimum values from image [img] and [img2]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							img2:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageMax",
						text:"get maximum values from image [img] and [img2]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							img2:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageAbsDif",
						text:"get absolute difference of values from image [img] and [img2] calculate alpha? [alpha]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							img2:{type:Scratch.ArgumentType.STRING},
							alpha:{type:Scratch.ArgumentType.BOOLEAN}
						}
					},
					{
						opcode:"imageColorProportions",
						text:"change color proportions to minimum [min] maximum [max] on image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							min:{type:Scratch.ArgumentType.NUMBER,defaultValue:0.2},
							max:{type:Scratch.ArgumentType.NUMBER,defaultValue:0.8}
						}
					},
					{
						opcode:"imageFade",
						text:"fade transition as time [val]% from image [img] to image [img2]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING},
							img2:{type:Scratch.ArgumentType.STRING},
							val:{type:Scratch.ArgumentType.NUMBER,defaultValue:50}
						}
					},
					label("Get Image Properties"),
					{
						opcode:"imageWidth",
						text:"get width of image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageHeight",
						text:"get height of image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING}
						}
					},
					{
						opcode:"imageGetFormat",
						text:"get type of image [img]",
						blockType:Scratch.BlockType.REPORTER,
						disableMonitor:true,
						arguments:{
							img:{type:Scratch.ArgumentType.STRING}
						}
					}
				],
				menus:{
					"CHANNEL_MENU":{
						acceptReporters:true,
						items:["red","green","blue","alpha"]
					}
				}
			};
		}
		fetchURL(args) {
			if(!args.url){args.url="https://picsum.photos/128"}
			return fetch(args.url, {method: "GET"}).then(response => response.blob()).then(b=>{
				return new Promise((resolve)=>{
					let c,x;let i=(new Image());
					[c,x]=cnv();
					i.src=URL.createObjectURL(b);
					i.onload=(()=>{
						[c.width,c.height]=[i.width,i.height];
						x.drawImage(i,0,0);
						resolve(c.toDataURL(b.type));
					});
				});
			}).catch(error => {
				console.warn(`[CloudLink] Fetch error: ${error}`);
			});
		}
		/*getImgDataURL(args){
			return new Promise((resolve)=>{
				let c,x;let i=(new Image());
				[c,x]=cnv();
				i.src=args.blob;i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					//console.log(c,i);
					resolve(c.toDataURL());
				});
			});
		}*/
		createBlankImage(args){
			let c,x;[c,x]=cnv();
			[c.width,c.height]=[args.width,args.height];
			x.fillStyle=args.color;x.fillRect(0,0,c.width,c.height);
			return c.toDataURL(args.format);
		}
		convertImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					resolve(c.toDataURL(args.format,Math.min(1,Math.max(0,args.detail/100))))
				});
			});
		}
		cropImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[args.width,args.height];
					x.drawImage(i,-args.x,-args.y);
					resolve(c.toDataURL())
				});
			});
		}
		resizeImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[args.width,args.height];
					x.drawImage(i,0,0,args.width,args.height);
					resolve(c.toDataURL())
				});
			});
		}
		imageSaturation(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.filter="saturate("+args.val+"%)";x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageHueRotate(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.filter="hue-rotate("+args.val+"deg)";x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageBrightness(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.filter="brightness("+args.val+"%)";x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageContrast(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.filter="contrast("+args.val+"%)";x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageInvert(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.filter="invert(100%)";x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		flipHorizontalImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.translate(c.width,0);x.scale(-1,1);x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		flipVerticalImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.translate(0,c.height);x.scale(1,-1);x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		rotateImage(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.translate(c.width/2,c.height/2);x.rotate(args.val*Math.PI/180);x.translate(c.width/-2,c.height/-2);
					x.drawImage(i,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageColorMatrix(args){
			return new Promise((resolve)=>{
				let cm=[eval(args.clrmtx)].flat(2);if(cm.length!=20){throw new Error("Color matrix may be invalid. Please use a 5x4 2d array or a array with 20 numbers.")};
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					let d=x.getImageData(0,0,c.width,c.height);
					let chunkSize = 4;
					for(let j=0;j<d.data.length;j+=chunkSize) {
						let chunk=d.data.slice(j,j+chunkSize);
						for(let k=0;k<chunkSize;k++){
							chunk[k]=(chunk[0]*cm[5*k]+chunk[1]*cm[1+5*k]+chunk[2]*cm[2+5*k]+chunk[3]*cm[3+5*k]+255*cm[4+5*k]);
						}
						[d.data[j],d.data[j+1],d.data[j+2],d.data[j+3]]=chunk;
					};
					x.clearRect(0,0,c.width,c.height);x.putImageData(d,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imagePixelData(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					let d=x.getImageData(0,0,c.width,c.height).data;
					console.log(d);
					let e=[];
					for(let j=0;j<d.length;j++){e[j]=d[j]};
					console.log(e);
					resolve(JSON.stringify(e))
				});
			});
		}
		imageWidth(args){
			return new Promise((resolve)=>{
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{resolve(i.width);});
			});
		}
		imageHeight(args){
			return new Promise((resolve)=>{
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{resolve(i.height);});
			});
		}
		imageCreateFromData(args){
			// omg finally a function that isn't async
			let c,x;[c,x]=cnv();
			let px=JSON.parse(args.pxd).map((a)=>parseInt(a));
			let d=x.createImageData(args.width,args.height);
			for(let i=0;i<px.length;i++){d.data[i]=px[i]};
			[c.width,c.height]=[args.width,args.height];
			x.putImageData(d,0,0);
			return c.toDataURL();
		}
		stageScreenshot(){
			// DO NOT REMOVE, USER HAS NOT GIVEN PERMISSION TO SAVE CAMERA IMAGES.
			if (this.runtime.ext_videoSensing || this.runtime.ioDevices.video.provider.enabled) {
				// user's camera is on, ask for permission to take a picture of them
				if (!(this.isCameraScreenshotEnabled)) {
					this.isCameraScreenshotEnabled = ProjectPermissionManager.RequestPermission("cameraPictures");
					if (!this.isCameraScreenshotEnabled) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="; // 1 pixel of white
				}
			}
			return new Promise(resolve => {
				vm.renderer.requestSnapshot(uri => {
					resolve(uri);
				});
			});
		}
		createGrainImage(args){
			let c,x;[c,x]=cnv();
			let d=x.createImageData(args.width,args.height);
			for(let i=0;i<d.data.length;i++){d.data[i]=Math.random()*255;if(!args.color){d.data[i]=d.data[Math.floor(i/4)*4]};if((i%4)==3){d.data[i]=255;}};
			[c.width,c.height]=[args.width,args.height];
			x.putImageData(d,0,0);
			return c.toDataURL(args.format);
		}
		imageFade(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let ia=(new Image());ia.src=args.img;
				ia.onload=(()=>{
					let ib=(new Image());ib.src=args.img2;
					ib.onload=(()=>{
						[c.width,c.height]=[ia.width,ia.height];
						x.drawImage(ia,0,0);x.globalAlpha=Math.max(args.val/100,0);x.drawImage(ib,0,0,ia.width,ia.height);
						resolve(c.toDataURL())
					});
				});
			});
		}
		imageGetFormat(args){
			return (new URL(args.img)).pathname.split(",")[0].split(";")[0]
		}
		imageParseChannel(args){
			return new Promise((resolve)=>{
				let ch=["red","green","blue","alpha"].indexOf(args.ch);
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					let d=x.getImageData(0,0,c.width,c.height).data;
					let e=[];
					for(let j=0;j<d.length;j++){if((j%4)==ch){e.push(d[j]);}};
					e=e.map((a)=>[a,a,a,255]).flat();
					d=x.createImageData(i.width,i.height);
					for(let j=0;j<e.length;j++){d.data[j]=e[j]};
					x.clearRect(0,0,c.width,c.height);
					x.putImageData(d,0,0);
					resolve(c.toDataURL())
				});
			});
		}
		imageSetChannel(args){
			return new Promise((resolve)=>{
				let ch=["red","green","blue","alpha"].indexOf(args.ch);
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				i.onload=(()=>{
					let chi=(new Image());chi.src=args.chimg;
					chi.onload=(()=>{
						[c.width,c.height]=[i.width,i.height];
						x.drawImage(i,0,0);
						let d=x.getImageData(0,0,c.width,c.height);
						x.clearRect(0,0,c.width,c.height);
						x.drawImage(chi,0,0,c.width,c.height);
						let chd=x.getImageData(0,0,c.width,c.height).data;
						for(let j=0;j<d.data.length;j+=4){d.data[j+ch]=chd[j];};
						x.clearRect(0,0,c.width,c.height);
						x.putImageData(d,0,0);
						resolve(c.toDataURL())
					});
				});
			});
		}
		imageMin(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let ia=(new Image());ia.src=args.img;
				ia.onload=(()=>{
					let ib=(new Image());ib.src=args.img2;
					ib.onload=(()=>{
						[c.width,c.height]=[ia.width,ia.height];
						x.drawImage(ia,0,0);
						let da=x.getImageData(0,0,c.width,c.height);
						x.clearRect(0,0,c.width,c.height);
						x.drawImage(ib,0,0,c.width,c.height);
						let db=x.getImageData(0,0,c.width,c.height).data;
						for(let j=0;j<da.data.length;j++){da.data[j]=Math.min(da.data[j],db[j])};
						x.clearRect(0,0,c.width,c.height);
						x.putImageData(da,0,0);
						resolve(c.toDataURL())
					});
				});
			});
		}
		imageMax(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let ia=(new Image());ia.src=args.img;
				ia.onload=(()=>{
					let ib=(new Image());ib.src=args.img2;
					ib.onload=(()=>{
						[c.width,c.height]=[ia.width,ia.height];
						x.drawImage(ia,0,0);
						let da=x.getImageData(0,0,c.width,c.height);
						x.clearRect(0,0,c.width,c.height);
						x.drawImage(ib,0,0,c.width,c.height);
						let db=x.getImageData(0,0,c.width,c.height).data;
						for(let j=0;j<da.data.length;j++){da.data[j]=Math.max(da.data[j],db[j])};
						x.clearRect(0,0,c.width,c.height);
						x.putImageData(da,0,0);
						resolve(c.toDataURL())
					});
				});
			});
		}
		imageAbsDif(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let ia=(new Image());ia.src=args.img;
				ia.onload=(()=>{
					let ib=(new Image());ib.src=args.img2;
					ib.onload=(()=>{
						[c.width,c.height]=[ia.width,ia.height];
						x.drawImage(ia,0,0);
						let da=x.getImageData(0,0,c.width,c.height);
						x.clearRect(0,0,c.width,c.height);
						x.drawImage(ib,0,0,c.width,c.height);
						let db=x.getImageData(0,0,c.width,c.height).data;
						for(let j=0;j<da.data.length;j++){da.data[j]=Math.abs(da.data[j]-db[j]);if(((j%4)==3)&&(!args.alpha)){da.data[j]=255;};};
						x.clearRect(0,0,c.width,c.height);
						x.putImageData(da,0,0);
						resolve(c.toDataURL())
					});
				});
			});
		}
		imageColorProportions(args){
			return new Promise((resolve)=>{
				let c,x;[c,x]=cnv();
				let i=(new Image());i.src=args.img;
				let min=args.min*255,max=args.max*255;
				i.onload=(()=>{
					[c.width,c.height]=[i.width,i.height];
					x.drawImage(i,0,0);
					let d=x.getImageData(0,0,c.width,c.height);
					for(let j=0;j<d.data.length;j++){if((j%4)!=3){d.data[j]=((d.data[j]/255)*(max-min)+min);};};
					x.clearRect(0,0,c.width,c.height);
					x.putImageData(d,0,0);
					resolve(c.toDataURL())
				});
			});
		}
	};
	Scratch.extensions.register(new Extension());
})(Scratch);