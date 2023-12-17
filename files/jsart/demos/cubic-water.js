(()=>{
	/* Cubic Water */
	if(x==0&&y==0){
		if(window.cubicw){
			for(i=0;i<window.cubicw.bgcubes.length;i++){
				let cube = window.cubicw.bgcubes[i];
				cube.x=((cube.x-128)*(1+((256-cube.y)/32768)))+128;
				cube.y=cube.y-=1;
				if(cube.y<-32){
					window.cubicw.bgcubes[i]={"x":Math.floor(Math.random()*224),"y":Math.floor(Math.random()*224)+256,"color":Math.floor(Math.random()*256)};
				}
			};
			return 0xffffff*(t%2)
		}else{
			window.cubicw={"bgcubes":[]};
			for(i=0;i<40;i++){
				window.cubicw.bgcubes.push({"x":Math.floor(Math.random()*224),"y":Math.floor(Math.random()*224),"color":Math.floor(Math.random()*256)});
			};
		};
	};
	let bg1 = (255-y)*256;
	let bg2=0;
	for(i=0;i<window.cubicw.bgcubes.length;i++){
		let cube = window.cubicw.bgcubes[i];
		if(x>=cube.x&&x<(cube.x+16)&&y>=cube.y&&y<(cube.y+16)){
			bg2=cube.color;
		};
	};
	let bg = (bg2 ? bg2 : bg1);
	let main=0;
	if(y>128+((Math.sin((x/50)+(t/400))+Math.sin((x+(t/4))/70))*20)){main=128;};
	return (main ? (main+bg) : bg);
})();