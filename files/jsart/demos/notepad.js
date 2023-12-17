(()=>{
	function checkKey(){
		function addCharacter(chr){
			if(window.notepad.keyLength===0||(window.notepad.keyLength>30&&((window.notepad.keyLength%8)===1))){
				window.notepad.currentText+=chr;
			}
			window.notepad.keyLength+=1/65536;
		}
		function backspace(){
			if(window.notepad.keyLength===0||(window.notepad.keyLength>30&&((window.notepad.keyLength%8)===1))){
				window.notepad.currentText=window.notepad.currentText.slice(0,(window.notepad.currentText.length-1));
			}
			window.notepad.keyLength+=1/65536;
		}
		let codes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let uppercase = window.notepad.capsLock&&window.notepad.shift;
		if(k==17){
			window.notepad.textMode=0;
		} else if(k==16){
			window.notepad.textMode=1;
		} else if(k>=65&&k<=90){
			addCharacter(codes[(k-65)+(26*uppercase)])
		} else if(k==32){
			addCharacter(" ")
		} else if(k==8){
			backspace();
		} else if(k<=0) {
			window.notepad.keyLength=0;
		}
	};
	if(window.notepad){checkKey();}
	if(x==0&&y==0){
		if(window.notepad){
			let ct = window.notepad.currentText.split("\n");
			let lenmax = (window.notepad.textMode===0?21:32);
			for(i=0;i<ct.length;i++){
				if(ct[i].length>lenmax){
					let elem = ct[i];
					let last=elem.slice(0,lenmax).lastIndexOf(" ");
					if(last<=0){last=Math.floor(lenmax/2);} // this prevents jsart from crashing due to an infinite loop
					ct[i]=elem.slice(0,last);
					ct.splice(i+1, 0, elem.slice(last+1));
				}
			}
			window.notepad.displayedText=ct;
		}else{
			window.notepad={"currentText":"Welcome to Notepad for JSArt!","displayedText":[],"fetched":{},"textMode":0,"capsLock":false,"shift":false,"keyLength":0};
			fetch("https://jsart.ponali.repl.co/modules/txt-small.txt").then(data=>data.text()).then(body=>{
				window.notepad.fetched.textSm=(new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k",body));
			});
			fetch("https://jsart.ponali.repl.co/modules/txt-engine.txt").then(data=>data.text()).then(body=>{
				window.notepad.fetched.text=(new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k",body));
			});
		}
	}
	let textE = window.notepad.fetched.text(i,t,x,y,mx,my,sw,sh,c,ic,ic,cl,k);
	let textESm = window.notepad.fetched.textSm(i,t,x,y,mx,my,sw,sh,c,ic,cl,k);
	let ntext = (window.notepad.textMode===0?textE:textESm);
	let scrui = 0;
	let scrtxt = 0;
	scrtxt+=textESm("Notepad"+window.notepad.keyLength,0,0,0);
	scrui+=0x808080;
	if(y>=12){
		scrui=0;
		let dsptxt = window.notepad.displayedText;
		for(i=0;i<dsptxt.length;i++){
			scrtxt+=ntext(dsptxt[i],0,20+(i*12),1);
		}
	}
	return (scrtxt?scrtxt:scrui)
})();