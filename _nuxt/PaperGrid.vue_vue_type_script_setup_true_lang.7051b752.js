import f from"./GridItemTitle.161267b3.js";import g from"./GridItemDescription.13f03193.js";import{a as x,o as e,b as n,M as o,w as r,F as _,V as i,N as u,t as a,e as t,j as w,W as k}from"./entry.3207ca2e.js";const v={class:"my-2 px-2 lg:mt-12 grid gap-4 md:gap-8 lg:gap-12 lg:grid-cols-2"},y=t("strong",null,"Abstract:",-1),L={class:"mt-3 text-slate-400 hover:text-slate-300"},b=t("strong",null,"Keywords:",-1),N={class:"mt-3 text-slate-400 hover:text-slate-300"},V=t("strong",null,"Authors:",-1),B={class:"mt-3 text-slate-400 hover:text-slate-300"},C=t("strong",null,"Download:",-1),T=x({__name:"PaperGrid",props:{filteredPaperList:null},setup(d){return(D,G)=>{const m=f,h=g,c=w,p=k;return e(),n("div",v,[o(p,{path:"/paper"},{default:r(({list:P})=>[(e(!0),n(_,null,i(d.filteredPaperList,s=>(e(),n("div",{key:s._path,class:"grid-item-with-gradient overflow-hidden"},[o(c,{href:s._path},{default:r(()=>[o(m,null,{default:r(()=>[u(a(s.title),1)]),_:2},1024),o(h,null,{default:r(()=>[y,u(" "+a(s.abstract),1)]),_:2},1024),t("p",L,[b,t("ul",null,[(e(!0),n(_,null,i(s.keywords,l=>(e(),n("li",null,a(l),1))),256))])]),t("p",N,[V,t("ul",null,[(e(!0),n(_,null,i(s.authors,l=>(e(),n("li",null,a(l),1))),256))])])]),_:2},1032,["href"]),t("p",B,[C,t("ul",null,[(e(!0),n(_,null,i(s.downloadLinks,l=>(e(),n("li",null,[o(c,{href:l,target:"_blank"},{default:r(()=>[u(a(l),1)]),_:2},1032,["href"])]))),256))])])]))),128))]),_:1})])}}});export{T as _};