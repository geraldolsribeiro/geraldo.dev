import{o as s,a,b as e,t as o,e as n,f as r,r as i}from"./entry.a3b2d25d.mjs";const u={class:"rounded"},d={class:"w-full"},c={class:"text-slate-400"},f={class:"w-full bg-slate-800 rounded-full"},p={computed:{scaleColor(){return this.value>=75?"bg-blue-500":this.value>=60?"bg-green-600":"bg-purple-600"}}},m=Object.assign(p,{__name:"BigFiveProgress",props:{value:{type:Number,default:75},title:{type:String,default:"Default title"},description:{type:String,default:"Default description"},icon:{type:String,default:"IconMarkdown"}},setup(t){return(l,_)=>(s(),a("div",u,[e("div",d,[e("h3",c,o(t.title),1),e("div",f,[e("div",{class:n([l.scaleColor,"text-xs font-medium text-blue-100 text-center p-1.5 leading-none rounded-full"]),style:r(`width: ${t.value}%`)},null,6)]),i(l.$slots,"default")])]))}});export{m as default};