export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:{"content-query-GRVaXZIIdV":{_path:"\u002Ftil\u002Fcpp-constexpr",_draft:e,_partial:e,_locale:"en",_empty:e,title:"C++ - otimização com constexpr",description:"Otimização com constexpr.",excerpt:{type:k,children:[{type:a,tag:l,props:{},children:[{type:b,value:m},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:b,value:o},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:b,value:q}]},{type:a,tag:d,props:{code:f,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{__ignoreMap:g},children:[{type:b,value:f}]}]}]},{type:a,tag:t,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:u,props:{},children:[{type:a,tag:v,props:{},children:[{type:a,tag:w,props:{href:x,rel:[y]},children:[{type:b,value:z}]}]}]}]},date:"2020-05-04T00:00:00.000Z",draft:true,tags:["C++","cpp","constexpr"],Thumbnail:"img\u002Fheaders\u002Fcpp.png",body:{type:k,children:[{type:a,tag:l,props:{},children:[{type:b,value:m},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:b,value:o},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:b,value:q}]},{type:a,tag:d,props:{code:f,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{__ignoreMap:g},children:[{type:a,tag:A,props:{class:"line"},children:[{type:a,tag:A,props:{},children:[{type:b,value:"#include \u003Ciostream\u003E\n#define LEN 10\nint len_foo() {\n    int i = 2;\n    return i;\n}\nconstexpr int len_foo_constexpr() {\n    return 5;\n}\n\n\u002F\u002F Pode ser usado em recursão\nconstexpr int fibonacci(const int n) {\n    return n == 1 || n == 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    char arr_1[10];                      \u002F\u002F legal\n    char arr_2[LEN];                     \u002F\u002F legal\n    int len = 10;\n    \u002F\u002F char arr_3[len];                  \u002F\u002F ilegal\n    const int len_2 = len + 1;\n    constexpr int len_2_constexpr = 1 + 2 + 3;\n    \u002F\u002F char arr_4[len_2];                \u002F\u002F ilegal, mas aceito por vários compiladores\n    \u002F\u002F len_2 apesar de constante não é formado somente por constantes\n    char arr_4[len_2_constexpr];         \u002F\u002F legal\n    \u002F\u002F char arr_5[len_foo()+5];          \u002F\u002F ilegal\n    char arr_6[len_foo_constexpr() + 1]; \u002F\u002F legal\n    \u002F\u002F 1, 1, 2, 3, 5, 8, 13, 21, 34, 55\n    std::cout \u003C\u003C fibonacci(10) \u003C\u003C std::endl;\n    return 0;\n}"}]}]}]}]}]},{type:a,tag:t,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:u,props:{},children:[{type:a,tag:v,props:{},children:[{type:a,tag:w,props:{href:x,rel:[y]},children:[{type:b,value:z}]}]}]}],toc:{title:g,searchDepth:j,depth:j,links:[{id:h,depth:j,text:i}]}},_type:"markdown",_id:"content:til:cpp-constexpr.md",_source:"content",_file:"til\u002Fcpp-constexpr.md",_extension:"md"}},prerenderedAt:1664045796249}}("element","text","code-inline","code",false,"#include \u003Ciostream\u003E\n#define LEN 10\nint len_foo() {\n    int i = 2;\n    return i;\n}\nconstexpr int len_foo_constexpr() {\n    return 5;\n}\n\n\u002F\u002F Pode ser usado em recursão\nconstexpr int fibonacci(const int n) {\n    return n == 1 || n == 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    char arr_1[10];                      \u002F\u002F legal\n    char arr_2[LEN];                     \u002F\u002F legal\n    int len = 10;\n    \u002F\u002F char arr_3[len];                  \u002F\u002F ilegal\n    const int len_2 = len + 1;\n    constexpr int len_2_constexpr = 1 + 2 + 3;\n    \u002F\u002F char arr_4[len_2];                \u002F\u002F ilegal, mas aceito por vários compiladores\n    \u002F\u002F len_2 apesar de constante não é formado somente por constantes\n    char arr_4[len_2_constexpr];         \u002F\u002F legal\n    \u002F\u002F char arr_5[len_foo()+5];          \u002F\u002F ilegal\n    char arr_6[len_foo_constexpr() + 1]; \u002F\u002F legal\n    \u002F\u002F 1, 1, 2, 3, 5, 8, 13, 21, 34, 55\n    std::cout \u003C\u003C fibonacci(10) \u003C\u003C std::endl;\n    return 0;\n}\n","","referências","Referências",2,"root","p","A linguagem C++ possui o conceito de expressões constantes (p.e. ","1+2",", ","3*4",")\nque SEMPRE produzem o mesmo resultado sem nenhum efeito colateral. Se\no compilador puder diretamente otimizar e embutir esta expressões no programa\nem tempo de compilação teremos um ganho de performance.","c++","pre","h2","ul","li","a","https:\u002F\u002Fitbook.xuxinkai.cn\u002Fread\u002Fmodern-cpp-tutorial-en\u002F02-usability.md","nofollow","Chapter 02: Language Usability Enhancements","span"))