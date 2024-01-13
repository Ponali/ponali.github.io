# JSArt AppTools Documentation
JSArt AppTools is a (work-in-progress) tool for making 2D apps (like games) inside of JSArt clients ([Vanilla JSArt](https://ponali.github.io/files/jsart/index.html), [JSArt Modded](https://jsam.codersquack.nl/)...) without having to think about how it actually works behind the scenes, giving more context and understandability to your code.
This document includes a tutorial on how to get started, a little troubleshooting guide and what functions are currently implemented.

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
});
```
The reason why the line `at.initiated=true;` exists are for cases where you want to use functions that only outputs inside a callback function, or that takes time (uses a "onload" event). Common callback functions that would be used for initializing would be loading images (`Image.onload`), getting a file from fetch (`fetch("[file]").then(data=>data.text()).then(...)`) or XHR. Using this line tells AppTools that the app has initiated and can now draw content on the screen.
The `at.func.draw` function is where we can put our code on what to draw on the screen. Inside, we can put the `at.drawText()` function to draw the counter. Type:
```
at.func.draw=((t,mx,my,sw,sh)=>{
    at.drawText("counter = "+counter, 10, 10);
});
```
If you're trying to use this with [JSArt Modded](https://jsam.codersquack.nl/), add the parameters `cl` and `k` in the function.
However, trying it right now does not do anything, because we didn't put code on where to think. We can put this code in the draw function. After the `at.drawText` line, Type `if(Math.abs(mx-(sw/2))<(sw/8)&&Math.abs(my-(sw/2))<(sw/8)){}`, and inside of that if function, type `counter++;`. Your code should look something like this:
```
(()=>{if(x+y==0){if(!window.aptf){(()=>{fetch("https://ponali.github.io/files/jsart/modules/appTools.js").then(data=>data.text()).then((body)=>{window.aptf.func=new Function("i","t","x","y","mx","my","sw","sh","c","ic","cl","k","return "+body);window.aptf.func();

    let counter;
    at.func.init=(()=>{
        counter=0;
        at.initiated=true;
    });
    at.func.draw=((t,mx,my,sw,sh)=>{
        at.drawText("counter = "+counter, 10, 10);
        if(Math.abs(mx-(sw/2))<(sw/8)&&Math.abs(my-(sw/2))<(sw/8)){
            counter++;
        }
    });
    
})})();window.aptf={"func":(()=>{return 0;})};}}return window.at.result(i,t,x,y,mx,my,sw,sh);})();
```
You just made your own app! All you need to do to run it is to put the code in a JSArt client and wait for it to happen.

## Troubleshooting
If you tried to run your app but there is no output, try the following:
- Refresh the page
- Go to the [DevTools](https://developer.chrome.com/docs/devtools/open) console and look for any errors. You may find some inside normal log messages and not error messages.
- Check for any bugs inside your code

If the same app runs even though you've updated the code:
- Refresh the app by typing into the [DevTools](https://developer.chrome.com/docs/devtools/open) console: `at=aptf=null;`. May cause bugs regarding initiating and stroke settings.
- Refresh the page

## Functions

`at.drawText(text,x,y,width)`
Draws text on the screen.
`text`: Text to draw.
`x`: X position of the text.
`y`: Y position of the text.
`width`: Maximum width the text can be (optional).
---
`at.setFill(r,g,b,a)`
Sets the fill color. If only `r` is set, then the color will be treated as a grayscale color.
`r`: Red channel. Ranges from 0-255.
`g`: Green channel. Ranges from 0-255.
`b`: Blue channel. Ranges from 0-255.
`a`: Opacity (Alpha channel). Ranges from 0-255. (optional)
---
`at.setStroke(r,g,b,a)`
Sets the stroke color. If only `r` is set, then the color will be treated as a grayscale color.
`r`: Red channel. Ranges from 0-255.
`g`: Green channel. Ranges from 0-255.
`b`: Blue channel. Ranges from 0-255.
`a`: Opacity (Alpha channel). Ranges from 0-255. (optional)
---
`at.setStrokeSize(size)`
Sets the size of the stroke.
`size`: Stroke size
---
`at.getStrokeSize()`
Returns the current size of the stroke.
---
`at.background(r,g,b)`
Fills the whole screen with a specified color. If only `r` is set, then the color will be treated as a grayscale color.
`r`: Red channel. Ranges from 0-255.
`g`: Green channel. Ranges from 0-255.
`b`: Blue channel. Ranges from 0-255.
---
`at.line(x1,y1,x2,y2)`
Draws a line from a 2D point to another.
`x1`: X position of the first point.
`y1`: y position of the first point.
`x2`: X position of the second point.
`y2`: y position of the second point.
---
`at.getScreenImg(x,y,w,h)`
Returns an image with a specified part of the screen to use with `at.drawImage`.
`x`: X position
`y`: Y position
`w`: Width
`h`: Height
---
`at.drawQuad(p1,p2,p3,p4)`
Draws a 2D quadrilateral shape.
`p1`: Array containing X position in index 0 and Y position in index 1, representing point 1 in the shape.
`p2`: Array containing X position in index 0 and Y position in index 1, representing point 2 in the shape.
`p3`: Array containing X position in index 0 and Y position in index 1, representing point 3 in the shape.
`p4`: Array containing X position in index 0 and Y position in index 1, representing point 4 in the shape.
---
`at.drawTriangle(p1,p2,p3)`
Draws a 2D triangle.
`p1`: Array containing X position in index 0 and Y position in index 1, representing point 1 in the shape.
`p2`: Array containing X position in index 0 and Y position in index 1, representing point 2 in the shape.
`p3`: Array containing X position in index 0 and Y position in index 1, representing point 3 in the shape.
---
`at.setOpacity(a)`
Sets the opacity for everything that is going to be rendered.
`a`: Opacity. Ranges from 0-1. (0 = invisible, 1 = opaque)
---
`at.getOpacity()`
Returns the opacity for everything that is going to be rendered. Ranges from 0-1. (0 = invisible, 1 = opaque)
---
`at.drawImage(im,x1,y1,w1,h1,x2,y2,w2,h2)`
Draws an image onto the screen. More detail [Here](https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage).
`im`:Image to draw.
`x1`:X position.
`y1`:Y position.
`w1`:Width. (optional)
`h1`:Height. (optional)