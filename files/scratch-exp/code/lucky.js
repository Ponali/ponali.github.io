if(location.pathname.includes("/search/")){
    console.log("I'm feeling lucky!");
    let luckybtn = document.createElement("button");
    luckybtn.innerHTML="I'm feeling lucky";
    luckybtn.style="background-color:black;color:white;"
    luckybtn.addEventListener("click",function(){
        fetch("https://api.scratch.mit.edu/search/projects?limit=32&offset=0&language=fr&mode=popular"+location.search.replace("?","&")).then((data)=>data.text()).then((body)=>{location.assign("https://scratch.mit.edu/projects/"+JSON.parse(body)[Math.floor(Math.random()*(JSON.parse(body).length-1))].id)})
    },false)
    $(".sort-controls")[0].appendChild(luckybtn);
}