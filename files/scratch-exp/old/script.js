let scratch = "Scratch is a website that helps you how to code and using a social network, made by MIT.<br>More information at <a href='https://scratch.mit.edu/about' target='_blank'>scratch.mit.edu/about</a>"
function updateExperiments(){
	fetch("/experiments.json").then(data=>data.text()).then(function(jsont){
		let json = JSON.parse(jsont);
		window.experimentsjson=json;
		experiments.innerHTML="";
		console.log(json);
		json.sort((a, b)=>{
    		return b.reccomended - a.reccomended;
		});
		console.log(json)
		for(i=0;i<json.length;i++){
			let locali = i;
			console.log(json[i])
			let elem = document.createElement("div");
			elem.setAttribute("class","experiment")
			elem.innerHTML="<br><span title=\""+json[i].name+"\"'>"+json[i].name+"</span>"+" <img src='https://turbowarp.org/favicon.ico' height='16' alt='Unshared Scratch Project' title='Unshared Scratch Project'></img>".repeat(json[i].project&&json[i].unshared)+" <img src='https://scratch.mit.edu/favicon.ico' height='16' alt='Scratch Project' title='Scratch Project'></img>".repeat(json[i].project&&(!json[i].unshared))+" <img src='/wheel.png' height='16' alt='Might be different for some users' title='Might be different for some users'></img>".repeat(json[i].different)+" <img src='/alert.png' height='16' alt='Run it at your own risk!' title='Run it at your own risk!'></img>".repeat(json[i].dangerous||json[i].working)+" <img src='/workinprgss.png' height='16' alt='Experiment in Work in progress' title='Experiment in Work in progress'></img>".repeat(json[i].working)+" <img src='https://cdn.scratch.mit.edu/scratchr2/static/__631147950d9c399250074fc214591758__/djangobb_forum/img/smilies/smile.png' height='16' alt='Reccomended' title='Reccomended'></img>".repeat(json[i].reccomended)+"<br><br><small>"+json[i].description+"</small><br>";
			let btnhow = document.createElement("button");
			btnhow.addEventListener("click",function(){
				popupMessage(json[locali].how);
			},false)
			btnhow.innerHTML="How does it work?";
			elem.appendChild(btnhow)
			if(!json[i].project){
			let btncode = document.createElement("button");
			btncode.addEventListener("click",function(){
				if(json[locali].working){
					popupMessage("<font size='5'>Are you sure?</font><br>This is in work in progress, it could make your scratch experience worser!<br><button onclick='window.location.assign(experimentsjson["+locali+"].code);'>Take me</button>")
				} else {
					window.location.assign(json[locali].code);
				}
			},false)
			btncode.innerHTML="Code";
			elem.appendChild(btncode)
			} else {
				let btntake = document.createElement("button");
				btntake.addEventListener("click",function(){
					window.location.assign("https://scratch.mit.edu/projects/".repeat(!json[locali].unshared)+"https://turbowarp.org/".repeat(json[locali].unshared)+json[locali]["projectId"]+"/");
				},false)
				btntake.innerHTML="Take me";
				elem.appendChild(btntake)
			}
			experiments.appendChild(elem);
		}
	})
}
setTimeout(()=>{updateExperiments();setInterval(updateExperiments,60000)},1000);
function popupMessage(msg){
	document.getElementById("popup").classList.remove("inactive");
	document.querySelector("#popupmsg div").innerHTML=msg;
}