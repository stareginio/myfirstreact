(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),o=(n(29),n(23)),i=n(2),j=(n(30),n(19)),l=n(20),b=n(24),m=n(22),d=(n(31),n(0)),u=function(e){return Object(d.jsx)("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true",children:e.symbol})},A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={count:0},e}return Object(l.a)(n,[{key:"addCounter",value:function(){this.setState({count:this.state.count+1})}},{key:"resetCounter",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(u,{symbol:"\ud83d\udc0c "}),"current count = ",this.state.count,Object(d.jsx)(u,{symbol:" \ud83d\udc0c"})]}),Object(d.jsx)("button",{id:"button",onClick:function(t){return e.addCounter(t)},children:"add me!!"}),Object(d.jsx)("button",{id:"button",onClick:function(t){return e.resetCounter(t)},children:"reset me!!"})]})}}]),n}(a.a.Component),f=n(5),h=n(21),O=n.n(h).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),g=function(){return O.get("/employees")},x=(n(51),function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){g().then((function(e){a(e.data)})).catch((function(){console.log("sorry na ha :P")}))})),Object(d.jsxs)("div",{id:"employee",children:[Object(d.jsx)("h2",{children:"List of Employees"}),Object(d.jsxs)("table",{border:"1.5",children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Location"}),Object(d.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.department}),Object(d.jsx)("td",{children:e.location})]})}))]})]})}),q=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)(u,{symbol:"\ud83d\udc4b"})," Hello ",e.name]})})},p=function(){return O.get("/hello")},v=function(){var e=Object(c.useState)("hello, snail"),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){p().then((function(e){a(e.data)})).catch((function(e){console.log("Something went wrong...")}))})),n},K=(n(52),function(){return Object(d.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"Snail"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("div",{className:"navbar-nav",id:"navbarNavAltMarkup",children:[Object(d.jsx)("a",{className:"nav-link","aria-current":"page",href:"/",children:"Home"}),Object(d.jsx)("a",{className:"nav-link",href:"/",children:"Employees"}),Object(d.jsx)("a",{className:"nav-link",href:"/",children:"Add Employees"}),Object(d.jsx)("a",{className:"nav-link",href:"/",children:"Edit Employees"}),Object(d.jsx)("a",{className:"nav-link",href:"/",children:"Remove Employees"}),Object(d.jsx)("a",{className:"nav-link disabled",href:"/",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})});var C=function(){return Object(d.jsxs)("div",{className:"Home",children:[Object(d.jsx)(K,{}),Object(d.jsxs)("header",{className:"Home-header",children:[Object(d.jsx)("img",{src:"data:image/gif;base64,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",className:"Home-logo",alt:"logo"}),Object(d.jsx)("h1",{children:" s n a i l "}),Object(d.jsxs)("p",{id:"hello",children:[" ",v()," "]}),Object(d.jsx)(A,{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{id:"greet",children:[Object(d.jsx)(q,{name:"Snail Sr."}),Object(d.jsx)(q,{name:"Snail Jr."})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(x,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("img",{src:"https://i.gifer.com/7dTK.gif",className:"Home-gif",alt:"snel gif"}),Object(d.jsx)("a",{className:"Home-link",href:"https://www.youtube.com/watch?v=Tt7bzxurJ1I",target:"_blank",rel:"noopener noreferrer",children:"here's a cute dancing stick bug video"})]}),Object(d.jsx)("img",{id:"smol",src:"https://i.pinimg.com/originals/a6/06/21/a60621da98a79bfbdc0e3dd5524a32d3.gif",alt:"smol snel"})]})},I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"page not found..."})})},T=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",element:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{exact:!0,path:"*",element:Object(d.jsx)(I,{})})]})})})};var y=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(K,{}),Object(d.jsx)(T,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(53);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.d8f1d1c6.chunk.js.map