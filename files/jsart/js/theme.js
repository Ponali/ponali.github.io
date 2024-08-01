function togglethemes(){
	if(localStorage["theme"]=="dark"){document.body.classList.add("dark")}else if(localStorage["theme"]=="light"){/*its default dude*/} else {window.onerror({"stack":"Theme "+localStorage["theme"]+" is not valid."})};
	try{document.querySelector("#dark").addEventListener("click",()=>{document.body.classList.toggle("dark");if(document.body.classList.contains("dark")){localStorage["theme"]="dark"}else{localStorage["theme"]="light"}},false)}catch{console.log("theme button not found");}
}
window.addEventListener("load",togglethemes);