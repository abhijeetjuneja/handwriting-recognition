(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"2b36":function(e,t,a){},"2b83":function(e,t,a){},"349d":function(e,t,a){"use strict";var r=a("2b36"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("router-view")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"",mode:"out-in","appear-class":"invisible","appear-to-class":"animated bounceIn","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-brand",{attrs:{href:"/",variant:"primary"}},[e._v("HandWriting Recognition")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-navbar-nav",[a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:"PreviousResults"===e.currentView,expression:"currentView === 'PreviousResults'"}],staticStyle:{color:"white"},attrs:{href:"/"}},[e._v("Home")]),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:"Home"===e.currentView,expression:"currentView === 'Home'"}],staticStyle:{color:"white"},attrs:{href:"/previous-results"}},[e._v("Previous Results")])],1)],1)],1)],1)],1)],1)},o=[],l=(a("7f7f"),a("bc3a")),c=a.n(l),u=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{sm:"6",xs:"12","offset-sm":"3","offset-xs":"0"}},[a("br"),a("br"),a("transition",{attrs:{appear:"",mode:"out-in","appear-class":"invisible","appear-to-class":"animated bounceIn","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("b-card",{staticStyle:{background:"rgba(0,0,0,0.1)!important"}},[a("h5",[e._v("Upload Image to find Text")]),a("hr"),a("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:e.onSubmit}},[a("input",{ref:"file",attrs:{type:"file"},on:{change:e.onSelect}}),a("br"),a("br"),a("p",{staticStyle:{color:"red"}},[e._v(e._s(e.message))]),a("br"),a("b-row",{directives:[{name:"show",rawName:"v-show",value:!1===e.loader&&!0!==e.firstLoad,expression:"loader === false && firstLoad !== true"}],staticClass:"result-container text-center"},[a("b-col",{attrs:{sm:"6",xs:"12"}},[a("b-img",{directives:[{name:"show",rawName:"v-show",value:""!==e.imageUrl,expression:"imageUrl !== ''"}],attrs:{src:e.imageUrl,fluid:""}}),a("p",{directives:[{name:"show",rawName:"v-show",value:""===e.imageUrl,expression:"imageUrl === ''"}]},[e._v("Choose an Image and click generate")])],1),a("b-col",{attrs:{sm:"6",xs:"12"}},[a("p",[a("b",[e._v("Generated Text :")])]),a("b-form-textarea",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.loader,expression:"loader === true"}],staticClass:"result-container text-center"},[a("br"),a("br"),a("b-spinner",{staticClass:"ml-auto",staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"light",type:"grow",label:"Spinning"}})],1),a("br"),a("span",{directives:[{name:"show",rawName:"v-show",value:!0===e.loader,expression:"loader === true"}]},[a("b",[e._v("Processing ...")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:""===e.text&&""!==e.imageUrl,expression:"text === '' && imageUrl !== ''"}],staticStyle:{color:"red"}},[a("b",[e._v("Sorry there was no text detected in the image, pick a different one !")])]),a("br"),a("br"),a("b-button",{attrs:{disabled:0==e.valid},on:{click:e.onSubmit}},[e._v("Generate Text")])],1)],1)],1)],1)],1)},d=[],m=(a("6762"),a("78a3")),f=a.n(m),b={name:"Home",data:function(){return{file:"",message:"",valid:!1,firstLoad:!0,text:"",imageUrl:"",loader:!1}},mounted:function(){},computed:{},methods:{onSelect:function(){this.text="",this.imageUrl="";var e=this.$refs.file.files[0],t=["image/jpeg","image/jpg","image/png"];this.file=e,t.includes(e.type)?e.size>5e6?(this.valid=!1,this.message="Too large, max size is 5 MB"):(this.valid=!0,this.message=""):(this.valid=!1,this.message="Only images are supported!")},onSubmit:function(){var e=this,t=this;this.loader=!0;var a=new FormData;a.append("file",this.file),this.valid=!1,c.a.post(f.a+"images/add",a).then((function(a){t.text=a.data.result.text,t.imageUrl=a.data.result.imageUrl,e.file="",e.message="",e.firstLoad=!1,e.loader=!1})).catch((function(e){console.log(e)}))}}},v=b,h=(a("349d"),a("2877")),g=Object(h["a"])(v,p,d,!1,null,"f244ee06",null),w=g.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{directives:[{name:"show",rawName:"v-show",value:e.firstLoad,expression:"firstLoad"}]},[a("b-col",{attrs:{sm:"6",xs:"12","offset-sm":"3","offset-xs":"0"}},[a("br"),a("transition",{attrs:{appear:"",mode:"out-in","appear-class":"invisible","appear-to-class":"animated bounceIn","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("b-card",{staticStyle:{background:"rgba(0,0,0,0.1)!important"}},[a("h5",[e._v("Results")]),a("hr"),a("b-pagination",{attrs:{"total-rows":e.totalPages,"per-page":e.limit,align:"center"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),a("br"),e._l(e.paginate,(function(t){return a("b-row",{directives:[{name:"show",rawName:"v-show",value:!1===e.loader,expression:"loader === false"}],key:t.imageUrl,staticClass:"result-container"},[a("b-col",{staticClass:"result-container",attrs:{sm:"6",xs:"12"}},[a("b-img",{attrs:{src:t.imageUrl,fluid:""}})],1),a("b-col",{attrs:{sm:"6",xs:"12"}},[a("p",[a("b",[e._v("Generated Text :")])]),a("b-form-textarea",{staticClass:"result-container",model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"result.text"}})],1)],1)})),a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.loader,expression:"loader === true"}],staticClass:"result-container text-center"},[a("br"),a("br"),a("b-spinner",{staticClass:"ml-auto",staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"light",type:"grow",label:"Spinning"}}),a("br"),a("br")],1)],2)],1),a("br"),a("br")],1)],1)},y=[],_={name:"PreviousResults",data:function(){return{loader:!0,firstLoad:!0,results:[],page:1,limit:1,pages:[],total:0}},mounted:function(){this.fetchResults(1,1)},computed:{totalPages:function(){return Math.ceil(this.total/this.limit)},paginate:function(){if(this.results){this.page>=this.totalPages&&1!=this.page&&(this.page=this.totalPages);var e=this.page*this.limit-this.limit;return console.log(this.results.slice(e,e+this.limit),this.page),this.results.slice(e,e+this.limit)}}},watch:{page:function(){this.fetchResults(this.page,this.limit)}},methods:{fetchResults:function(e,t){var a=this;this.loader=!0,c.a.get(f.a+"results/all",{params:{page:e,limit:1}}).then((function(e){a.results=e.data.results,a.total=e.data.length,a.loader=!1,console.log(a.loader)})).catch((function(e){console.log(e)}))}}},S=_,O=(a("afc2"),Object(h["a"])(S,x,y,!1,null,"3efb9279",null)),N=O.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"",mode:"out-in","appear-class":"invisible","appear-to-class":"animated bounceIn","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("b-row",[a("b-col",{attrs:{sm:"6",xs:"12","offset-sm":"3","offset-xs":"0"}},[a("br"),a("br"),a("b-card",{staticClass:"text-center",staticStyle:{background:"rgba(0,0,0,0.1)!important",color:"white"}},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("h4",[e._v("404 Not Found")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")])],1)],1)],1)],1)},j=[],U={name:"NotFound",data:function(){return{}}},k=U,C=Object(h["a"])(k,P,j,!1,null,null,null),R=C.exports,I=new u["a"]({mode:"history",routes:[{path:"/",name:"Home",component:w},{path:"/previous-results",name:"PreviousResults",component:N},{path:"*",name:"NotFound",component:R}]}),$=I,T={name:"Navigation",data:function(){return{currentView:""}},mounted:function(){this.currentView=$.currentRoute.name},computed:{},watch:{$route:function(e,t){this.currentView=e.name}},methods:{}},L=T,V=Object(h["a"])(L,i,o,!1,null,null,null),H=V.exports,M={name:"app",components:{Navigation:H}},E=M,F=(a("034f"),Object(h["a"])(E,s,n,!1,null,null,null)),G=F.exports,z=a("5f5b"),J=(a("f9e3"),a("2dd8"),a("ecee")),B=a("c074"),D=a("ad3d");J["c"].add(B["a"],B["b"]),r["default"].component("font-awesome-icon",D["a"]),r["default"].config.productionTip=!1,r["default"].use(u["a"]),r["default"].use(z["a"]),new r["default"]({router:$,render:function(e){return e(G)}}).$mount("#app")},"64a9":function(e,t,a){},"78a3":function(e,t){var a="http://localhost:4000/api/";e.exports=a},afc2:function(e,t,a){"use strict";var r=a("2b83"),s=a.n(r);s.a}});
//# sourceMappingURL=app.18f6e737.js.map