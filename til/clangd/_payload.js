export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:{"content-query-SJr6UlRjrH":{_path:"\u002Ftil\u002Fclangd",_draft:h,_partial:h,_locale:"en",_empty:h,title:"Clangd + vim",description:f,excerpt:{type:m,children:[{type:a,tag:g,props:{code:i,language:n},children:[{type:a,tag:o,props:{},children:[{type:a,tag:g,props:{__ignoreMap:f},children:[{type:c,value:i}]}]}]},{type:a,tag:p,props:{id:j},children:[{type:c,value:k}]},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:s,props:{href:t,rel:[u]},children:[{type:c,value:v}]}]}]}]},date:"2020-10-18T00:00:00.000Z",draft:true,tags:["clangd"],Thumbnail:"img\u002Fheaders\u002Fc++.jpg",body:{type:m,children:[{type:a,tag:g,props:{code:i,language:n},children:[{type:a,tag:o,props:{},children:[{type:a,tag:g,props:{__ignoreMap:f},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:"ct-910c81"},children:[{type:c,value:"echo"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" -e "}]},{type:a,tag:b,props:{class:"ct-da3c8d"},children:[{type:c,value:"'deb http:\u002F\u002Fapt.llvm.org\u002Fstretch\u002F llvm-toolchain-stretch-8 main\\ndeb-src http:\u002F\u002Fapt.llvm.org\u002Fstretch\u002F llvm-toolchain-stretch-8 main\\n'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" \\"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  "}]},{type:a,tag:b,props:{class:"ct-cd3e73"},children:[{type:c,value:"\u003E"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" \u002Fetc\u002Fapt\u002Fsources.list.d\u002Fllvm-toolchain.list"}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"apt install clang-8 clang-tools-8 clang-format-8"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"apt install libc++-8-dev libclang-8-dev libc++abi-8-dev"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"update-alternatives --install \u002Fusr\u002Fbin\u002Fclang clang \u002Fusr\u002Fbin\u002Fclang-8 100"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"update-alternatives --install \u002Fusr\u002Fbin\u002Fclang++ clang++ \u002Fusr\u002Fbin\u002Fclang++-8 100"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"update-alternatives --install \u002Fusr\u002Fbin\u002Fclangd clangd \u002Fusr\u002Fbin\u002Fclangd-8 100"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"update-alternatives --install \u002Fusr\u002Fbin\u002Fclang-format clang-format \u002Fusr\u002Fbin\u002Fclang-format-8 100"}]}]}]}]}]},{type:a,tag:p,props:{id:j},children:[{type:c,value:k}]},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:s,props:{href:t,rel:[u]},children:[{type:c,value:v}]}]}]},{type:a,tag:"style",children:[{type:c,value:".ct-cd3e73{color:#F92672}.ct-da3c8d{color:#E6DB74}.ct-c00ea5{color:#F8F8F2}.ct-910c81{color:#66D9EF}"}]}],toc:{title:f,searchDepth:l,depth:l,links:[{id:j,depth:l,text:k}]}},_type:"markdown",_id:"content:til:clangd.md",_source:"content",_file:"til\u002Fclangd.md",_extension:"md"}},prerenderedAt:1664073334304}}("element","span","text","ct-c00ea5","line","","code",false,"echo -e 'deb http:\u002F\u002Fapt.llvm.org\u002Fstretch\u002F llvm-toolchain-stretch-8 main\\ndeb-src http:\u002F\u002Fapt.llvm.org\u002Fstretch\u002F llvm-toolchain-stretch-8 main\\n' \\\n  \u003E \u002Fetc\u002Fapt\u002Fsources.list.d\u002Fllvm-toolchain.list\n\napt install clang-8 clang-tools-8 clang-format-8\napt install libc++-8-dev libclang-8-dev libc++abi-8-dev\nupdate-alternatives --install \u002Fusr\u002Fbin\u002Fclang clang \u002Fusr\u002Fbin\u002Fclang-8 100\nupdate-alternatives --install \u002Fusr\u002Fbin\u002Fclang++ clang++ \u002Fusr\u002Fbin\u002Fclang++-8 100\nupdate-alternatives --install \u002Fusr\u002Fbin\u002Fclangd clangd \u002Fusr\u002Fbin\u002Fclangd-8 100\nupdate-alternatives --install \u002Fusr\u002Fbin\u002Fclang-format clang-format \u002Fusr\u002Fbin\u002Fclang-format-8 100\n","referências","Referências",2,"root","bash","pre","h2","ul","li","a","https:\u002F\u002Fgist.github.com\u002Fbinshengliu\u002F3d3fba46471d1fa42fa5a2070abf52e0","nofollow","Install Clang-8 on Debian Stretch"))