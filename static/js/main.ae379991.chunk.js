(this["webpackJsonpapirest-react"]=this["webpackJsonpapirest-react"]||[]).push([[0],{22:function(e,a,t){},26:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(1),r=t.n(s),n=t(15),i=t.n(n);t(22),t(23),t(24),t.p,t(26);var o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,r=a.getLCP,n=a.getTTFB;t(e),c(e),s(e),r(e),n(e)}))},d=t(3),l=t(4),j=t(6),b=t(5),h="https://pedrojm.000webhostapp.com/",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAwgAAAMIBT4kc1wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHaSURBVEiJpdVPS1ZBFAbw373aH1GMsEUgGLoq24TZJvoAkRgUtAhCaBVW1MYWfYHCreUXkJYatCgQ3Bkto10pmLh150Ja5bTwXhrHee/rqwfO4j5zzvPMmTtzThFC0GRFUVzGLYxguII38RtfQwi/GglCCIccJe5hBaGNr1SxZZYrQz6A5SMQp76MgUYBjGPrGOS1b2E8K4BBbJ+AvPZtDB4QQDdWo6AveIyP+NtAtodPmMLnCF9FdywwkyROR5VdwwtM4ErlExV2PYqbTjhm6hvalTn3J7kb0eR4lvkfXSUmMeSg9erc+pPvoYrbQqK8iZ5jVNBb5cZcC6X9FxrbUgjhT6fbDyHsYimBR3ICPzslb8gdLh0+u/MnEEhzz5XYSMC0ok4szd0osZaAE0VRnOqUuSiK07iTwGsl1hNwCE87FcBLXEqwdRiz/+SD/21hD2/Qd4Tr2Ye38m1krA5arMDX9odL3fR28AEPM8QPqrWdDHnAYtyLRqPdP8cN7EbBUxmB2y2I65MYTdv1bLTri7iKV3iErozAhQaB2VYDZ64K+Iab6EF/i7M/24J8rt3InM8k5SrICcy3nclV8l38iBLPtBH4jskjDf2IoKhuynsULdbf4X5uvfZ/k1Fz8ISVz5MAAAAASUVORK5CYII=",p=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(e){var c;return Object(d.a)(this,t),(c=a.call(this,e)).state={listaProductos:[]},c}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pedrojm.000webhostapp.com/productos.php").then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({listaProductos:a})}))}},{key:"render",value:function(){var e=t.dibujarEnvios(this.state.listaProductos);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:" - API REST - PRODUCTOS -"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsx)("ul",{className:"navbar-nav",children:Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"/scriptBD",children:"Ver la Consulta - BD"})})})})]})}),Object(c.jsx)("section",{id:"envios",className:"padded",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12 text-center",children:Object(c.jsx)("h4",{style:{color:"white"},children:"Cat\xe1logo Productos"})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"col-md-12",children:e})]})]})}),Object(c.jsx)("footer",{id:"footer",className:"padded",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h6",{className:"text-center",children:" 2021 - Todos los derechos reservados "}),Object(c.jsxs)("div",{class:"col text-center",children:["PedroManuelJM ",Object(c.jsx)("a",{href:"https://github.com/PedroManuelJM",target:"_blank",class:"",role:"",children:Object(c.jsx)("img",{src:m})})]})]})})]})}}],[{key:"dibujarEnvios",value:function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 border-primary ",children:e.map((function(e){return Object(c.jsxs)("div",{className:"col image-container",children:[Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:h+"productos/"+e.imagenproducto,className:"card-img-top img-thumbnail rounded",alt:"..."}),Object(c.jsx)("div",{className:"0"===e.enoferta?"producto-sin-oferta":"producto-con-oferta",children:"Oferta"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("h5",{className:"card-title",children:[e.nombreproducto," ",e.caracteristica," "]}),Object(c.jsx)("p",{className:"card-text"}),Object(c.jsxs)("p",{children:["Precio ",Object(c.jsxs)("span",{className:"badge badge-pill badge-success",children:[" S/. ",parseFloat(e.precio).toFixed(2)]})," "]})]})]}),Object(c.jsx)("br",{})]})}))})})})}}]),t}(s.Component),u=t(10),A=(s.Component,t.p+"static/media/imagen1.ee2cfc74.PNG"),g=t.p+"static/media/imagen2.7eba77de.PNG",v=t.p+"static/media/imagen3.45daf803.PNG",O=t.p+"static/media/imagen4.51138fec.PNG";s.Component;i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),o()}},[[31,1,2]]]);
//# sourceMappingURL=main.ae379991.chunk.js.map