if(location.pathname.includes("/projects/")){
    console.log("PiP mode activated!");
    let pipbutton = document.createElement("img")
    pipbutton.src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC40MzY0MiIgaGVpZ2h0PSIxNy42Njg3OSIgdmlld0JveD0iMCwwLDE4LjQzNjQyLDE3LjY2ODc5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjg3MzQ3LC0xNzAuNzE0NzYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMDA2YmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQwLjkwMTU0LDE4My45NDQwMmwtOS4yNzgwNywtMC4wNTQyNXYtMTIuNDI1MDFoMTMuMTg0NjNsLTAuMDU0MjYsNy42NTAzNCIvPjxnPjxwYXRoIGQ9Ik0yNDQuMjExMjMsMTgzLjIzODY4bC00LjQ0OTEyLC00LjUwMzM5Ii8+PHBhdGggZD0iTTI0OC41NTE4NiwxODcuNjMzNTVsLTQuMzk0ODcsLTAuMDU0MjYiLz48cGF0aCBkPSJNMjQ4LjUxMDI1LDE4My4xOTQ3MmwwLjA0OTY0LDQuMzk0OTMiLz48cGF0aCBkPSJNMjQ4LjE4MjM5LDE4Ny4yNjQwOGwtNC40NDkxMywtNC41MDMzOSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==';
    pipbutton.setAttribute("id","pictureinpicture")
    pipbutton.style="background-color: transparent;width:2rem;height:2rem;padding: 0.375rem;cursor:pointer;"
    let video = document.createElement("video");
    let clicked = 0;
    let pipon = false;
    function pipbtnclick(){
        pipon=(!pipon);
        pipbutton.style.backgroundColor="hsla(215, 100%, 65%, 0.35)";
        if(!pipon){
            pipbutton.style.backgroundColor="transparent";
            document.exitPictureInPicture();
        } else {
            setTimeout(()=>{
                let piptry = video.requestPictureInPicture();
                console.log(piptry)
                window.dapiptry=piptry;
                video.play()
            },500)
        }
        clicked++;
        if(clicked==1){
            let stream = document.querySelectorAll("canvas")[0].captureStream();
            video.srcObject = stream;
        }
    }
    pipbutton.addEventListener("click",pipbtnclick,false)
    function uploadBtn(){
        if(!document.querySelectorAll(".stage-header_stage-menu-wrapper_15JJt")[0].children[0].innerHTML.includes('id="pictureinpicture"')){
            document.querySelectorAll(".stage-header_stage-menu-wrapper_15JJt")[0].children[0].appendChild(pipbutton)
        }
    }
    function wait(){
        if(document.querySelectorAll(".stage-header_stage-menu-wrapper_15JJt")){
            uploadBtn()
        }
    }
    let waitinterv = setInterval(wait,100)
}