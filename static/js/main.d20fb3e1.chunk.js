(this.webpackJsonpsolve=this.webpackJsonpsolve||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(4),s=c.n(o),r=(c(9),c(2)),l=(c(10),c(0));var i=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(parseInt(localStorage.getItem("pos"))||0),s=Object(r.a)(o,2),i=s[0],u=s[1],g=Object(n.useState)(parseInt(localStorage.getItem("neg"))||0),m=Object(r.a)(g,2),j=m[0],p=m[1],f="play.png",b="pause.jpg",I=Object(n.useState)(parseInt(localStorage.getItem("img"))||f),O=Object(r.a)(I,2),S=O[0],d=O[1],v=Object(n.useState)(parseInt(localStorage.getItem("ctr"))||-1),h=Object(r.a)(v,2),x=h[0],N=h[1];return Object(n.useEffect)((function(){localStorage.getItem("pos")&&u(parseInt(localStorage.getItem("pos"))),localStorage.getItem("neg")&&p(parseInt(localStorage.getItem("neg"))),localStorage.getItem("ctr")&&N(parseInt(localStorage.getItem("ctr"))),localStorage.getItem("img")&&d(localStorage.getItem("img"))}),[]),Object(n.useEffect)((function(){localStorage.setItem("pos",parseInt(i)),localStorage.setItem("neg",parseInt(j)),localStorage.setItem("ctr",parseInt(x)),localStorage.setItem("img",S)}),[i,j,x,S]),Object(n.useEffect)((function(){var e=new Audio("beep.mp3"),t=new Audio("beep3.mp3"),c=new Audio("beep4.mp3");x<0||a(x%35?setTimeout((function(){e.play(),N((function(e){return e+1}))}),1e3):x%140===0?setTimeout((function(){t.play(),N((function(e){return e+1}))}),1e3):setTimeout((function(){c.play(),N((function(e){return e+1}))}),1e3))}),[x]),Object(n.useEffect)((function(){S===b?N((function(){return localStorage.getItem("ctr")&&localStorage.getItem("ctr")>0?localStorage.getItem("ctr"):1})):(N(-1),clearTimeout(c))}),[S]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"pos",onClick:function(){u((function(e){return e+1}))},children:[Object(l.jsx)("div",{onClick:function(){u(-1),p(0),d(f)},className:"reset",children:"Reset"}),Object(l.jsx)("div",{className:"npos",children:i}),Object(l.jsx)("div",{className:"per",children:parseInt(1e4*i/(i-j))/100}),Object(l.jsx)("img",{src:"black.jpeg",className:"antipos",onClick:function(){u((function(e){return e-2}))}})]}),Object(l.jsxs)("div",{className:"neg",onClick:function(){p((function(e){return e-2}))},children:[Object(l.jsx)("div",{className:"nval",children:j}),Object(l.jsx)("img",{src:"white.jpg",className:"antineg",onClick:function(){p((function(e){return e+4}))}})]}),Object(l.jsx)("div",{className:"pp",children:Object(l.jsx)("img",{src:S,className:"img",onClick:function(){d((function(e){return b}))}})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(i,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.d20fb3e1.chunk.js.map