(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3284bd5a"],{"241a":function(t,e,n){},"31f1":function(t,e,n){"use strict";n("6949")},3700:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["O"])("data-v-3f4be073"),o=a((function(t,e,n,a,o,r){var i=Object(c["C"])("van-icon");return Object(c["v"])(),Object(c["g"])("div",{class:"back-top",onClick:e[1]||(e[1]=function(){return t.backTop&&t.backTop.apply(t,arguments)}),style:{bottom:"".concat(t.bottom,"rem"),right:"".concat(t.right,"rem"),borderRadius:"circle"===t.mode?"50%":"0.08rem",opacity:t.opacity,zIndex:t.ZIndex}},[Object(c["i"])(i,{name:t.icon,color:t.color,size:"".concat(t.iconSize,"rem"),onClick:t.backTop},null,8,["name","color","size","onClick"])],4)})),r=(n("a9e3"),Object(c["j"])({name:"back-top",props:{mode:{type:String,default:function(){return"circle"}},bottom:{type:Number,default:function(){return 2}},right:{type:Number,default:function(){return.4}},scrollTop:{type:Number,default:function(){return 0}},top:{type:Number,default:function(){return 10}},icon:{type:String,default:function(){return"back-top"}},color:{type:String,default:function(){return"rgb(144, 147, 153)"}},iconSize:{type:Number,default:function(){return.48}},duration:{type:String,default:function(){return"auto"}}},setup:function(t){var e=Object(c["A"])(.6),n=Object(c["A"])(-1),a=Object(c["A"])("auto"),o=Object(c["A"])(0),r=Object(c["A"])(0);Object(c["L"])((function(){a.value=t.duration,o.value=t.scrollTop,r.value=t.top}));var i=function(){window.scrollTo({top:0,behavior:a.value})},u=Object(c["e"])((function(){return o.value>r.value}));return Object(c["K"])((function(){return u.value}),(function(t,c){t?(n.value=999,e.value=1):(e.value=0,setTimeout((function(){n.value=-1}),500))})),{opacity:e,ZIndex:n,is_scrollTop:o,is_top:r,showBackTop:u,behavior:a,backTop:i}}}));n("fa62");r.render=o,r.__scopeId="data-v-3f4be073";e["a"]=r},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),a=n("5899"),o="["+a+"]",r=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},6408:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=n("fe00"),o=n.n(a),r=n("d571"),i=n.n(r),u=Object(c["O"])("data-v-4728050a");Object(c["y"])("data-v-4728050a");var l={class:"article-details"},b={class:"details"},f={class:"article-info mb-40"},s={class:"title mb-40"},d={class:"date mb-20"},m={class:"author"},A={class:"sentence mb-70"},p=Object(c["i"])("img",{class:"icon-left mb-15",src:o.a},null,-1),O={class:"mb-15"},v=Object(c["i"])("img",{class:"icon-right",src:i.a},null,-1);Object(c["w"])();var j=u((function(t,e,n,a,o,r){var i=Object(c["C"])("van-nav-bar"),j=Object(c["C"])("van-skeleton"),Z=Object(c["C"])("warp-footer"),g=Object(c["C"])("back-top");return Object(c["v"])(),Object(c["g"])("div",l,[Object(c["i"])(i,{title:"文萃精编","left-arrow":"",fixed:!0,"safe-area-inset-top":!0,onClickLeft:t.onClickLeft},null,8,["onClickLeft"]),Object(c["i"])("div",b,[Object(c["i"])(j,{title:"",row:3,loading:t.loading},{default:u((function(){return[Object(c["i"])("div",f,[Object(c["i"])("div",s,Object(c["G"])(t.info.title),1),Object(c["i"])("div",d,Object(c["G"])(t.info.from_to),1),Object(c["i"])("div",m,Object(c["G"])(t.info.authorization),1)])]})),_:1},8,["loading"]),Object(c["i"])(j,{row:3,loading:t.loading},{default:u((function(){return[Object(c["i"])("div",A,[p,Object(c["i"])("p",O,Object(c["G"])(t.info.brief_introduction),1),v])]})),_:1},8,["loading"]),Object(c["i"])(j,{title:"",row:10,loading:t.loading},{default:u((function(){return[Object(c["i"])("div",{class:"rich-content",innerHTML:t.info.content},null,8,["innerHTML"])]})),_:1},8,["loading"])]),Object(c["i"])(Z),Object(c["i"])(g,{mode:"square",duration:"smooth",scrollTop:t.scrollTop},null,8,["scrollTop"])])})),Z=n("5530"),g=n("6c02"),h=n("b32d"),I=n("5621");function k(t){return Object(h["a"])({method:"get",url:"".concat(I["b"],"/hometeacherarticle_info"),params:t}).then((function(t){return t.data}))}var y=n("48b8"),T=n("9146"),N=n("9fe9"),S=n("3700"),E=n("d485"),w=Object(c["j"])({name:"article-details",components:{warpFooter:N["a"],backTop:S["a"]},setup:function(){var t=Object(g["c"])(),e=Object(c["A"])(!0),n=Object(c["z"])({info:{}}),a=Object(T["a"])(),o=a.onClickLeft,r=Object(E["a"])(),i=r.scrollTop,u=r.handleScroll;return Object(c["q"])((function(){k({article_id:t.query.id}).then((function(t){t.content=Object(y["b"])(t.content),n.info=t,e.value=!1}))})),Object(Z["a"])(Object(Z["a"])({},Object(c["H"])(n)),{},{onClickLeft:o,scrollTop:i,loading:e,handleScroll:u})}});n("31f1");w.render=j,w.__scopeId="data-v-4728050a";e["default"]=w},6949:function(t,e,n){},9146:function(t,e,n){"use strict";var c=n("afbc"),a=function(){var t=function(){c["a"].back()};return{onClickLeft:t}};e["a"]=a},"9fe9":function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["O"])("data-v-244f776d");Object(c["y"])("data-v-244f776d");var o={class:"warp-footer"},r={class:"top-rule mb-30"},i=Object(c["i"])("div",{class:"cooperation"},"商务合作电话：010-82146770 京ICP备17065032号-12",-1);Object(c["w"])();var u=a((function(t,e,n,a,u,l){return Object(c["v"])(),Object(c["g"])("div",o,[Object(c["i"])("div",r,[(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(t.nav,(function(e,n){return Object(c["v"])(),Object(c["g"])("div",{class:"item",key:n,onClick:function(n){return t.handleRouter(e.type)}},Object(c["G"])(e.title),9,["onClick"])})),128))]),i])})),l=n("5530"),b=n("6c02"),f=Object(c["j"])({name:"warp-footer",setup:function(){var t=Object(b["d"])(),e=Object(c["z"])({nav:[{title:"服务协议",type:1},{title:"隐私政策",type:2}]}),n=function(e){t.push({name:"privacy",query:{type:e}})};return Object(l["a"])(Object(l["a"])({},Object(c["H"])(e)),{},{handleRouter:n})}});n("d0be");f.render=u,f.__scopeId="data-v-244f776d";e["a"]=f},a9e3:function(t,e,n){"use strict";var c=n("83ab"),a=n("da84"),o=n("94ca"),r=n("6eeb"),i=n("5135"),u=n("c6b6"),l=n("7156"),b=n("c04e"),f=n("d039"),s=n("7c73"),d=n("241c").f,m=n("06cf").f,A=n("9bf2").f,p=n("58a8").trim,O="Number",v=a[O],j=v.prototype,Z=u(s(j))==O,g=function(t){var e,n,c,a,o,r,i,u,l=b(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:c=2,a=49;break;case 79:case 111:c=8,a=55;break;default:return+l}for(o=l.slice(2),r=o.length,i=0;i<r;i++)if(u=o.charCodeAt(i),u<48||u>a)return NaN;return parseInt(o,c)}return+l};if(o(O,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var h,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(Z?f((function(){j.valueOf.call(n)})):u(n)!=O)?l(new v(g(e)),n,I):g(e)},k=c?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;k.length>y;y++)i(v,h=k[y])&&!i(I,h)&&A(I,h,m(v,h));I.prototype=j,j.constructor=I,r(a,O,I)}},b6da:function(t,e,n){},d0be:function(t,e,n){"use strict";n("241a")},d485:function(t,e,n){"use strict";var c=n("7a23"),a=function(){var t=Object(c["A"])(0);Object(c["q"])((function(){window.addEventListener("scroll",e)}));var e=function(){t.value=document.documentElement.scrollTop/100};return Object(c["s"])((function(){window.removeEventListener("scroll",e)})),{scrollTop:t,handleScroll:e}};e["a"]=a},d571:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAAMFBMVEVMaXGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlzci71AAAAD3RSTlMAdxG7mcxm7jMi3VVEqogjU5PgAAAAfUlEQVR42k2PWRbFIAhDKU516Mv+d1tietrHB+EqYLSI0yNRO7MXoLLI0gNAi46JiOhI1KlzHMFScTb7/XMy603sTWwrJ7KduQQzxBzJW8vDl9SBtXnIWAXkF+gav0yGB2XRt6457gPj2dpc35vq1vb2PppkQmi1+Fbmr7gB610FrdiGSIYAAAAASUVORK5CYII="},fa62:function(t,e,n){"use strict";n("b6da")},fe00:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAAMFBMVEVMaXGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlzci71AAAAD3RSTlMA7kRVEXczuyJm3ZnMiKq3/XV3AAAAdElEQVR42lXPSRbEIAhFUQgamzRv/7tN0UyKyT1fxQMS1eSv1kjPOzA4IyrmjxWNvIl8JdKh+zU80aaMPNZWv0z35XLkYYSKhYPuNMhp4HAOkMqSeXcL6SsFK3t5l5pGa9lK0XIAb67Bzi3Vfk6FFRMd00k/++QF8mz5LGEAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-3284bd5a.b788023c.js.map