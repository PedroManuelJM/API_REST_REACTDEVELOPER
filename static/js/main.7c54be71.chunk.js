(this["webpackJsonpapirest-react"]=this["webpackJsonpapirest-react"]||[]).push([[0],{27:function(e,t,c){},31:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(20),i=c.n(n),o=(c(27),c(28),c(29),c(15)),d=c(2);c.p,c(31);var l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))},j=c(8),b=c(9),m=c(11),h=c(10),O="https://pedrojm.000webhostapp.com/",x=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).state={listaProductos:[]},a}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pedrojm.000webhostapp.com/productos.php").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({listaProductos:t})}))}},{key:"render",value:function(){var e=c.dibujarEnvios(this.state.listaProductos);return Object(a.jsx)("section",{id:"envios",className:"padded",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12 text-center",children:Object(a.jsx)("h4",{children:"Cat\xe1logo Productos"})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"col-md-12",children:e})]})]})})}}],[{key:"dibujarEnvios",value:function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 border-primary ",children:e.map((function(e){return Object(a.jsxs)("div",{className:"col image-container",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:O+"productos/"+e.imagenproducto,className:"card-img-top img-thumbnail rounded",alt:"..."}),Object(a.jsx)("div",{className:"0"===e.enoferta?"producto-sin-oferta":"producto-con-oferta",children:"Oferta"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title",children:[e.nombreproducto," ",e.caracteristica," "]}),Object(a.jsx)("p",{className:"card-text"}),Object(a.jsxs)("p",{children:["Precio ",Object(a.jsxs)("span",{className:"badge badge-pill badge-success",children:[" S/. ",parseFloat(e.precio).toFixed(2)]})," "]})]})]}),Object(a.jsx)("br",{})]})}))})})})}}]),c}(s.Component),u=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",children:"API REST - PRODUCTOS "}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsx)("ul",{className:"navbar-nav",children:Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/scriptBD",children:"Ver la Consulta - BD"})})})})]})})}}]),c}(s.Component),p=c.p+"static/media/imagen1.ee2cfc74.PNG",v=c.p+"static/media/imagen2.7eba77de.PNG",g=c.p+"static/media/imagen3.45daf803.PNG",A=c.p+"static/media/imagen4.51138fec.PNG",N=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsx)("section",{id:"envios",className:"padded",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-12 text-center",children:[Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:"Consulta de la BD - API REST"})]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("h4",{className:"text-left",children:"Script - conexi\xf3n "}),Object(a.jsx)("img",{src:p,className:"img-responsive"}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("h4",{className:"text-left",children:"Script - Productos "}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:v,className:"img-responsive"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:g,className:"img-responsive"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:A,className:"img-responsive"})]})]})]})})}}],[{key:"dibujarEnvios",value:function(e){return Object(a.jsx)(a.Fragment,{})}}]),c}(s.Component);var f=function(){return Object(a.jsx)("footer",{id:"footer",className:"padded",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h6",{className:"text-center",children:" 2021 - Todos los derechos reservados "}),Object(a.jsxs)("div",{class:"col text-center",children:["PedroManuelJM ",Object(a.jsx)("a",{href:"https://github.com/PedroManuelJM",target:"_blank",class:"",role:"",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAwgAAAMIBT4kc1wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHaSURBVEiJpdVPS1ZBFAbw373aH1GMsEUgGLoq24TZJvoAkRgUtAhCaBVW1MYWfYHCreUXkJYatCgQ3Bkto10pmLh150Ja5bTwXhrHee/rqwfO4j5zzvPMmTtzThFC0GRFUVzGLYxguII38RtfQwi/GglCCIccJe5hBaGNr1SxZZYrQz6A5SMQp76MgUYBjGPrGOS1b2E8K4BBbJ+AvPZtDB4QQDdWo6AveIyP+NtAtodPmMLnCF9FdywwkyROR5VdwwtM4ErlExV2PYqbTjhm6hvalTn3J7kb0eR4lvkfXSUmMeSg9erc+pPvoYrbQqK8iZ5jVNBb5cZcC6X9FxrbUgjhT6fbDyHsYimBR3ICPzslb8gdLh0+u/MnEEhzz5XYSMC0ok4szd0osZaAE0VRnOqUuSiK07iTwGsl1hNwCE87FcBLXEqwdRiz/+SD/21hD2/Qd4Tr2Ye38m1krA5arMDX9odL3fR28AEPM8QPqrWdDHnAYtyLRqPdP8cN7EbBUxmB2y2I65MYTdv1bLTri7iKV3iErozAhQaB2VYDZ64K+Iab6EF/i7M/24J8rt3InM8k5SrICcy3nclV8l38iBLPtBH4jskjDf2IoKhuynsULdbf4X5uvfZ/k1Fz8ISVz5MAAAAASUVORK5CYII="})})]})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(a.jsx)(d.a,{exact:!0,path:"/scriptBD",component:N})]}),Object(a.jsx)(f,{})]})}),document.getElementById("root")),l()}},[[36,1,2]]]);
//# sourceMappingURL=main.7c54be71.chunk.js.map