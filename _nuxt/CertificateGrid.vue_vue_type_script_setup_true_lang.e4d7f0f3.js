import f from"./GridItemTitle.102a57d5.js";import{a as g,o as e,c as _,w as o,M as n,b as l,V as r,e as a,O as x,t as C,F as c,j as w,W as k}from"./entry.861f7d22.js";import{_ as $}from"./CertificateDate.vue_vue_type_script_setup_true_lang.dd6112dd.js";import v from"./Grid.93a82e75.js";const B=["src","width","height"],I={class:"flex flex-wrap"},L=["src","title","alt"],N={class:"mt-6"},T=g({__name:"CertificateGrid",props:{filteredCertificateList:null},setup(m){return(V,G)=>{const d=f,i=w,h=$,u=k,p=v;return e(),_(p,null,{default:o(()=>[n(u,{path:"/certificate"},{default:o(({list:b})=>[(e(!0),l(c,null,r(m.filteredCertificateList,t=>(e(),l("div",{key:t._path,class:"grid-item-with-gradient"},[n(i,{href:t._path},{default:o(()=>[a("img",{src:t.miniImage,width:t.miniImageWidth,height:t.miniImageHeight,class:"mx-auto mb-2"},null,8,B),n(d,null,{default:o(()=>[x(C(t.title),1)]),_:2},1024)]),_:2},1032,["href"]),a("div",I,[(e(!0),l(c,null,r(t.tags,s=>(e(),_(i,{to:`/certificate/tag/${s}`,class:"flex"},{default:o(()=>[a("img",{src:`/certificate/logos/${s}.svg`,title:s,alt:s,class:"w-12 h-12 m-2"},null,8,L)]),_:2},1032,["to"]))),256))]),a("div",N,[n(h,{date:t.date,school:t.inOrganizationName,schoolColor:t.schoolColor},null,8,["date","school","schoolColor"])])]))),128))]),_:1})]),_:1})}}});export{T as _};