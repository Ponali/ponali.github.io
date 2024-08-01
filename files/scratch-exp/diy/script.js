onload=(()=>{

var zip = new JSZip();
let upload = document.createElement("input")
upload.setAttribute("type","file")
upload.setAttribute("accept",".sb3,application/x.scratch.sb3")
document.querySelector("button#upload").addEventListener("click",function(){
	upload.click();
},false)

upload.addEventListener('change',function(){
		fetch(window.URL.createObjectURL(upload.files[0])).then(data=>data.text()).then(body=>{
			zip.loadAsync(unescape(btoa(escape(body))),{base64:true})
			zip.file("project.json").async("string").then(function (data) {
  			document.querySelector("#left").innerText=data;
			});
		})
});
	
})