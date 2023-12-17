(()=>{
  if(x+y==0){
    if(!window.cubeEngine){
      window.cubeEngine={"svg":document.createElement("svg"),"c":{"anvas":document.createElement("canvas")}}
      window.cubeEngine.c.anvas.width=window.cubeEngine.c.anvas.height=256;
      window.cubeEngine.c.tx=window.cubeEngine.c.anvas.getContext("2d");
      window.cubeEngine.svg.width=window.cubeEngine.svg.height=256;
      window.cubeEngine.svg.innerHTML='<text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>';
    }
    window.cubeEngine.c.tx.clearRect(0,0,256,256)
    window.cubeEngine.c.tx.drawImage(window.cubeEngine.svg,0,0);
    window.cubeEngine.vdata=window.cubeEngine.c.tx.getImageData(0,0,256,256).data;
  }
  let idx = (x+(y*256))*4
  let vdata=window.cubeEngine.vdata;
  let alpha=vdata[idx+3]/256;
  return (Math.floor(vdata[idx+0]/alpha)*65536)+(Math.floor(vdata[idx+1]/alpha)*256)+Math.floor(vdata[idx+2]/alpha)
})()