function run(){
	let exprs = document.querySelector("#experiments");
	fetch("/experiments.json").then(data=>data.text()).then((body)=>{
		try{
		exprs.innerHTML="";
		let json = JSON.parse(body);
		json.sort((a,b)=>{ if(a.reccomended==false&&b.reccomended==true){return 1;} if(a.reccomended==true&&b.reccomended==false){return -1}; return 0; })
			for(i=0;i<json.length;i++){
				let elem = document.createElement("div");
				let item = json[i];
				elem.setAttribute("class","expr-box");
				if(item.type=="project"){item.img="/examples/project.png"}
				if(item.img){elem.setAttribute("style",`background:url("${item.img}"); background-size:cover;`)}
				elem.innerHTML=`<div class="expr-hvname"><span>${item.name}</span></div>`;
				let requirements = "You need a(n) "+(item.type=="css" ? "CSS injector" : (item.type=="js" ? "JS Injector" : (item.type=="project" ? "working scratch client" : "[unknown]") ) );
				let code = (item.type=="css" ? `Use the code <pre>@import url("https://scratchexperimentation.ponali.repl.co${item.code}");</pre> to launch the experiment.` : (item.type=="js" ? `Use the code <pre>fetch("https://scratchexperimentation.ponali.repl.co${item.code}").then(d=>d.text()).then(b=>eval(b));</pre> to launch the experiment.` : (item.type=="project" ? `Use the link <a href='https://turbowarp.org/${item.projectId}'>here</a> to run the project.` : "[unknown]") ) );
				elem.addEventListener("click",(()=>{popup({display:1,title:item.name,description:item.how+"<br><span class='popup-title'>Requirements</span>"+requirements+"<br>"+code});}),false)
				exprs.appendChild(elem);
			}
		} catch (e) {
			exprs.innerHTML="<div id='error'>Error: "+e.stack+"</div>";
		}
	})

	function popup(data){
		if(data.display==0){
			let ppelem = document.querySelector("#popup");
			ppelem.innerHTML="<div id='classic-popup-box'><span class='popup-title'>"+data.title+"</span><span class='popup-description'>"+data.description+"</span><span class='popup-close'>Close</span></div>";
			ppelem.classList.remove("hidden")
			document.querySelector(".popup-close").addEventListener("click",closePopup,false)
		} else if(data.display==1){
			let ppelem = document.querySelector("#popup");
			ppelem.innerHTML="<div id='popup-box'><span class='popup-title'>"+data.title+"</span><span class='popup-description'>"+data.description+"</span><span class='popup-close'>Close</span></div>";
			ppelem.classList.remove("hidden")
			document.querySelector(".popup-close").addEventListener("click",closePopup,false)
		} else { throw "invalid display type"; }
	}

	function closePopup(){
		document.querySelector("#popup").classList.add("hidden");
		document.querySelector("#popup").innerHTML="";
	}

	popup({display:0,title:"Welcome",description:"We have updated the UI and rewritten all the code to make a much more modern look to the website. If you prefer the old look, click <a href='/old'>here</a>."})
}

window.onload=run;