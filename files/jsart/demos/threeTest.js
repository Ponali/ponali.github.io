(()=>{
  if(x+y==0){if(!window.threeTest){window.threeTest={};fetch("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js").then(data=>data.text()).then(body=>{console.log("fetch correct!");(new Function(body))();init()});};if(window.THREE){window.threeTest.animate()}else{console.log("Waiting initialisation to end...")};}
    function createWorld() {
    console.log("Creating world...");
        window.threeTest.scene = new THREE.Scene();
        window.threeTest.camera = new THREE.PerspectiveCamera(60,1,0.1,1000);
        window.threeTest.camera.position.z = 5;
        window.threeTest.renderer.setClearColor(0x000066);
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshLambertMaterial({color:0xffff00});
        window.threeTest.cube = new THREE.Mesh(geometry,material);
        window.threeTest.scene.add(window.threeTest.cube);
        window.threeTest.cube.scale.set(2,2,2);
        var light = new THREE.DirectionalLight(0xffffff,1);
        window.threeTest.scene.add(light);
        light.position.z = 5;
    }
  function getAvailableFont(){
    if(document.fonts.check("12px 'Fredoka One'")&&document.fonts.check("10px 'Fredoka One'")){return "'Fredoka One'"} /* jsam */
    if(document.fonts.check("12px Quicksand-Regular")&&document.fonts.check("10px Quicksand-Regular")){return "Quicksand-Regular"} /* jsart */
    return "Arial" /* system font: daydun random or unknown mod */
  };
  window.threeTest.render = function(){
    window.threeTest.renderer.render(window.threeTest.scene, window.threeTest.camera);
    let secCnv = document.createElement("canvas");secCnv.width=secCnv.height=256;let secCtx = secCnv.getContext("2d");
    let font = getAvailableFont();
    secCtx.drawImage(window.threeTest.canvas,0,0);secCtx.font="12px "+font;secCtx.fillStyle="#ffffff80";secCtx.fillText("JSArt + THREE.js testing",3,12);secCtx.font="10px "+font;secCtx.fillText("taken from this demo: threejs-demo.nhowe.repl.co",2,242);secCtx.fillText("@Ponali",2,252);
    let data = secCtx.getImageData(0,0,256,256).data;
    window.threeTest.cvpx=[];for(i=0;i<256*256;i++){let val=0;val+=data[(i*4)]<<16;val+=data[(i*4)+1]<<8;val+=data[(i*4)+2];window.threeTest.cvpx.push(val)}
  };
    function init() {
    console.log("initializing");
        window.threeTest.canvas = document.createElement("canvas");
    window.threeTest.canvas.width=window.threeTest.canvas.height=256;
        try {
            window.threeTest.renderer = new THREE.WebGLRenderer( { canvas: window.threeTest.canvas, antialias: true} );
      console.log("made renderer!");
        }
        catch (e) {
      console.log("Whoops!");
            console.log(e);
        }
    window.threeTest.animate = function() {
      window.threeTest.cube.rotation.x += 0.01;
      window.threeTest.cube.rotation.y += 0.02;

      window.threeTest.render();
    };
        createWorld();
    }

  return +(window.threeTest.cvpx?window.threeTest.cvpx:[])[x+(y*256)]

})();