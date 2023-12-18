function wineval(code) { return (() => { })["constructor"](code)() };
console.group("ScratchPlug")
console.log("scratchplug activated.")
let langcodelink = "https://scratchexperimentation.ponali.repl.co/spdata/lang/";
if (true/*soon*/) { langcodelink += "ideas.json" };
console.log(langcodelink)
fetch(langcodelink).then(data => { data.text() }).then(body => { console.log("loaded language code");console.log(body.slice(0,40));window._messages = wineval("return "+body); fetch("https://scratch.mit.edu/js/ideas.bundle.js").then(data => {console.log(data); data.text() }).then(body => { console.log("loaded scratch booter"); console.log(wineval(body)); }) })