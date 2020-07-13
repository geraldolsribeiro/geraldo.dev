var REVEAL_USER_CONFIG = JSON.parse(document.getElementById('reveal-user-config').innerHTML);
var REVEAL_DEFAULT_CONFIG = JSON.parse(document.getElementById('reveal-default-config').innerHTML);


Reveal.initialize(
  Object.assign(
    {
      controls: true,     // mostra as setinhas na parte inferior
      progress: true,     // mostra uma barra de progresso
      center: true,       // centraliza os slides
      transition: 'fade',  // none/fade/slide/convex/concave/zoom
      // autoAnimateEasing: 'ease-out',
      // autoAnimateDuration: 0.8,
      // autoAnimateUnmatched: false,
      // controlsTutorial: true,
      // slideNumber: false,
      // hash: false,
      // overview: true,
      // width: 960,
      // height: 700,
      // width: "100%",
      // height: "100%",
      // margin: 0.1,
      // minScale: 0.2,
      // maxScale: 1.5,
    },
    REVEAL_DEFAULT_CONFIG,
    REVEAL_USER_CONFIG)
);
hljs.initHighlightingOnLoad();
