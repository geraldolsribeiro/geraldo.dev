import r from"./ContentSlot.ca20fcac.mjs";import{i as o,G as u,A as f,I as c}from"./entry.a3b2d25d.mjs";const p=o({name:"Markdown",extends:r,setup(t){const{parent:e}=c(),{between:n,default:a}=u(),s=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:s,between:n,parent:e}}});export{p as default};