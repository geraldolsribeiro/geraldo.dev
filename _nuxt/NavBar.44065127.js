import{_ as n}from"./logo.d2eabc24.js";import{i as a,o as l,b as o,e,F as d,V as c,t as u}from"./entry.861f7d22.js";const f={data(){return{links:[{url:"/about",title:"About"},{url:"/til",title:"Today I Learned"},{url:"/project",title:"Projects"},{url:"/paper",title:"Papers"},{url:"/certificate",title:"Certificates"}]}},methods:{toggleMenu(){console.log(this.$refs.menu),this.$refs.menu.classList.toggle("hidden"),this.$refs.menu.classList.toggle("w-full"),this.$refs.menu.classList.toggle("h-screen")}}},p={class:"bg-slate-800 text-blue-400 border-gray-200 px-2 sm:px-4 py-2.5"},m={class:"container flex flex-wrap justify-between items-center mx-auto"},h=e("a",{href:"/",class:"flex items-center"},[e("img",{src:n,class:"mr-3 h-6 sm:h-9",alt:"Geraldo Ribeiro"}),e("span",{class:"self-center text-xl font-semibold whitespace-nowrap hover:underline underline-offset-8"}," Geraldo Ribeiro ")],-1),g={ref:"menu",class:"hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-30 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6"},x={class:"md:hidden z-40 fixed top-4 right-6"},_=["href"],b={class:"flex mr-2 items-center md:hidden"};function v(y,s,k,w,i,r){return l(),o("div",null,[e("nav",p,[e("div",m,[h,e("ul",g,[e("li",x,[e("a",{href:"javascript:void(0)",class:"text-right text-blue-500 text-4xl font-bold",onClick:s[0]||(s[0]=(...t)=>r.toggleMenu&&r.toggleMenu(...t))},"\xD7")]),(l(!0),o(d,null,c(i.links,t=>(l(),o("li",null,[e("a",{href:t.url,class:"block py-2 pr-4 pl-3 text-blue-400 hover:text-white hover:underline underline-offset-8 rounded md:p-0","aria-current":"page"},u(t.title),9,_)]))),256))],512),e("div",b,[e("a",{href:"javascript:void(0)",class:"text-slate-500 text-2xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[1]||(s[1]=(...t)=>r.toggleMenu&&r.toggleMenu(...t))}," \u2630 ")])])])])}const M=a(f,[["render",v]]);export{M as default};