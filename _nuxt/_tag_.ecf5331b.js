import{_ as l}from"./BackLink.vue_vue_type_script_setup_true_lang.ab3d97c1.js";import{_ as p}from"./TilHeading.vue_vue_type_script_setup_true_lang.8747715d.js";import{_ as u}from"./TilGrid.vue_vue_type_script_setup_true_lang.5b7ecad4.js";import{T as d,U as f,o as g,c as T,M as a,X as L,W as h,L as e,u as x,N as $}from"./entry.01054f4e.js";import"./ProseH1.c85d043a.js";import"./GridItemTitle.1f5da643.js";import"./GridItemDescription.397fb15a.js";import"./TilDate.vue_vue_type_script_setup_true_lang.824e4038.js";import"./index.7cd81b31.js";import"./TilTags.vue_vue_type_script_setup_true_lang.d3216004.js";import"./Grid.9f66714c.js";const k=$("Back to TIL list"),R={__name:"[tag]",async setup(w){let t,o;const s=d(),i=([t,o]=f(()=>L("til").where({tags:{$contains:s.params.tag}}).only(["_path","title","description","date","lastUpdate","tags"]).sort({_file:-1,$numeric:!0}).sort({date:-1}).limit(50).find()),t=await t,o(),t);return(n,y)=>{const r=l,_=p,c=u,m=h;return g(),T(m,{name:"wide"},{default:a(()=>[e(r,{url:"/tils"},{default:a(()=>[k]),_:1}),e(_,{tag:n.$route.params.tag},null,8,["tag"]),e(c,{filteredTilList:x(i)},null,8,["filteredTilList"])]),_:1})}}};export{R as default};
