let startsMultiple=((a,b)=>{
    for(let i=0;i<b.length;i++){
        if(a.startsWith(b[i])) return true;
    };
    return false;
})
let parseInstructions=((a)=>{
    let ins="",
    out=[],
    insideFor=false,
    bracketDeep=0;
    for(let i=0;i<a.length;i++){
        if(a[i]=="{"){bracketDeep++;};
        if(a[i]=="}"){
            bracketDeep--;
            if(bracketDeep==0){
                let insbef=ins;
                ins=[ins.slice(0,ins.indexOf("{")),parseInstructions(ins.slice(ins.indexOf("{")+1))];
                if(insbef.startsWith("else")&&startsMultiple(out[out.length-1][0],["if","else"])){ins.push(true)}
                out.push(ins);
                ins="";
                continue;
            }
        };
        if(startsMultiple(removeSpacing(ins),["for","while","until","if","else if"])){
            if(a[i]=="("){insideFor=true;}
            else if(a[i]==")"){insideFor=false;};
        };
        if(a[i]!=";"||insideFor||(bracketDeep!=0)){ins+=a[i];}
        else{out.push(ins);ins="";};
    };
    out.push(ins);
    return out.filter((a)=>a!="").map((a)=>a.slice(0+(a[0]==";")));
});
let removeSpacing=((a)=>{
    if(typeof(a)!="string") return a;
    let z=((a)=>{
        while(a[0]==" "||a[0]=="\n"){
            a=a.slice(1);
        };
        return a;
    }),
    y=((a)=>a.split("").reverse().join(""));
    return y(z(y(z(a))));
});
let func2let=((a)=>{
    let fl=((a)=>{
        if(typeof(a)!="string") return a;
        a=removeSpacing(a);
        if(!a.startsWith("function")){
            return a;
        };
        a=a.replace("function ","");
        let funcname=a.slice(0,a.indexOf("("));
        let funcprop=a.slice(a.indexOf("("))+"=>";
        console.log(funcprop)
        return `let ${funcname}=${funcprop}`;
    })
    for(let i=0;i<a.length;i++){
        if(typeof(a[i])=="object"){
            a[i]=func2let(a[i]);
        }else{
            a[i]=fl(a[i]);
        };
    };
    return a;
})
let windowify=((a)=>{
    let wf=((a)=>{
        if(typeof(a)!="string") return a;
        a=removeSpacing(a);
        if(!startsMultiple(a,["let","var","const"])){
            return a;
        };
        a=a.slice(a.indexOf(" "));
        a=a.split(",");
        let varnames=a.map(a=>removeSpacing(a.split("=")[0]));
        let values=a.map(a=>removeSpacing(a.split("=").slice(1).join("=")));
        a=[];
        for(let i=0;i<varnames.length;i++){
            a.push(`globalThis.${varnames[i]}=${values[i]}`);
            //a.push(`var ${varnames[i]}=${values[i]}`);
        }
        return unsemicolon(parseInstructions(a.join(";")));
    });
    for(let i=0;i<a.length;i++){
        if(typeof(a[i])=="object"){
            a[i]=windowify(a[i]);
        }else{
            a[i]=wf(a[i]);
        };
    };
    return a;
});
let for2while=((a)=>{
    let getSections=((a)=>{
        a=a.slice(a.indexOf("(")+1,a.indexOf(")"));
        return a.split(";").map(removeSpacing);
    });
    for(let i=0;i<a.length;i++){
        if(typeof(a[i])=="object"){
            if(a[i][0].startsWith("for")){
                let sections=getSections(a[i][0]);
                a[i][0]=`while(${sections[1]})`;
                a[i][1].push(sections[2]);
                a.splice(i,0,sections[0]);
            };
            a[i][1]=for2while(a[i][1]);
        };
    };
    return a;
});
let unsemicolon=((a)=>{
    if(a.length==1&&typeof(a[0])!="object"){
        return a[0].replaceAll(";","")
    }
    let out=[];
    for(let i=0;i<a.length;i++){
        let b=a[i];
        if(typeof(b)=="object"){
            let tmp=b[0]+"{"+unsemicolon(b[1])+"}";
            while(a[i+1]&&(a[i+1][2]==true)){
                b=a[i+1];
                tmp+=b[0]+"{"+unsemicolon(b[1])+"}";
                i++;
            };
            b=tmp;
        };
        if(b.endsWith(";")){
            b=b.slice(0,-1);
        };
        out.push("()=>{"+removeSpacing(b)+"}")
    };
    out=out.join(",");out=`[${out}].forEach(a=>a())`;
    return out;
});
function removeSemicolons(a,debug){
    try{
        if(!(a.includes(";")||a.includes("\n"))){return a;};
        a=a.replaceAll("\n",";");
        let debugtext="parsed instructions: ";
        const parsed=parseInstructions(a);
        debugtext+=JSON.stringify(parsed);
        let parseEdited=windowify(func2let(for2while(parsed)));
        debugtext+="\nedited: "+JSON.stringify(parseEdited);
        return (debugtext+"\n\nfinal: ").repeat(debug)+unsemicolon(parseEdited);
    }catch (e){
        return (e.stack?e.stack:e);
    }
}