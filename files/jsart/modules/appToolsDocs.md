# JSArt AppTools Documentation
JSArt AppTools is a (work-in-progress) tool for making 2D apps (like games) inside of JSArt clients ([DayDun Random](https://daydun.com/random/), [Vanilla JSArt](https://ponali.github.io/files/jsart/index.html), [JSArt Modded](https://jsam.codersquack.nl/)...) without having to think about how it actually works behind the scenes, giving more context and understandability to your code.
This document includes a tutorial on how to get started and what functions are currently implemented.

## Getting started
You'll need to add two lines at the start and at the end of your code, they're the ones responsible for loading AppTools.
Copy-paste this line of code:
```
(()=>{if(x+y==0){if(!window.aptf){(()=>{fetch("https://ponali.github.io/files/jsart/modules/appTools.js").then(data=>data.text()).then((body)=>{window.aptf.func=new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);window.aptf.func();
```
Press enter a couple of times. If your text editor automatically indents your code, this is normal.
Remove any identation in your line and copy-paste this line of code:
```
})})();window.aptf={"func":(()=>{return 0;})};}}return window.at.result(i,t,x,y,mx,my,sw,sh);})();
```
Now, go back to the lines of code you made between the first and last one. We're going to start initiating variables (initiating ≠ setting.)
For this tutorial, let's say we're making an app with a counter that only counts up when the cursor is in the middle of the screen.
Since we need a variable for the counter, we're going to initiate it. Type `let counter;`.
We're going to define what the app is going to do when starting (initializing). It will have code that sets the counter variable to 0. Type:
```
at.func.init=(()=>{
    counter=0;
    at.initiated=true;
})
```
The reason why the line `at.initiated=true;` exists are for cases where you want to use functions that only outputs inside a callback function, or that takes time (uses a "onload" event). Common callback functions that would be used for initializing would be loading images (`Image.onload`), getting a file from fetch (`fetch("[file]").then(data=>data.text()).then(...)`) or XHR. Using this line tells AppTools that the app has initiated and can now draw content on the screen.
The `at.func.draw` function is where we can put our code on what to draw on the screen.