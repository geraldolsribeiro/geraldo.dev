import{_ as m}from"./BackLink.vue_vue_type_script_setup_true_lang.98694245.mjs";import{_ as h}from"./CertificateDate.vue_vue_type_script_setup_true_lang.39df55fc.mjs";import{h as p,o as a,a as c,b as t,L as o,w as l,M as f,t as x,O as u,P as g,N as k}from"./entry.a3b2d25d.mjs";import"./index.40aa078e.mjs";const v={data(){return{modalIsOpen:!1}},methods:{showModal(){this.modalIsOpen=!0},closeModal(){this.modalIsOpen=!1}}},w={class:"container bg-slate-900 relative mx-auto overflow-hidden py-8 px-4 sm:px-6 lg:px-8"},C=g("Back to certificate list"),b={class:"text-slate-300 my-3 text-4xl font-semibold"},I=["src","onclick"],N={class:"mx-auto prose prose-lg text-slate-400 markdown"},O={key:0,id:"modal",class:"nohidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"},y=["onclick"],B=["src"];function M($,V,j,z,n,s){const i=m,r=h,_=k,d=f;return a(),c("div",null,[t("div",w,[o(i,{url:"/certificate"},{default:l(()=>[C]),_:1}),o(d,null,{default:l(({doc:e})=>[t("h1",b,x(e.title),1),o(r,{date:e.date,school:e.inOrganizationName,schoolColor:e.schoolColor},null,8,["date","school","schoolColor"]),t("img",{src:e.miniImage,class:"mx-auto",onclick:s.showModal},null,8,I),t("div",N,[o(_,{value:e},null,8,["value"])]),n.modalIsOpen?(a(),c("div",O,[t("a",{class:"fixed z-90 top-6 right-8 text-white text-5xl font-bold",href:"javascript:void(0)",onclick:s.closeModal},"\xD7",8,y),t("img",{src:e.largeImage,class:"max-w-[800px] max-h-[600px] object-cover"},null,8,B)])):u("",!0)]),_:1})])])}const R=p(v,[["render",M]]);export{R as default};