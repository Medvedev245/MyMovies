"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{8830:function(e,t,n){n.d(t,{Bt:function(){return d},Hq:function(){return u},m4:function(){return s},ss:function(){return c},y:function(){return l}});var a=n(5861),o=n(4687),r=n.n(o),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day".concat("?api_key=5be1c9c05ef299ccfab1d8ad724f7561","1&page=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(r().mark((function e(t){var n,a,o=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,i.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=").concat(n),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"}});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},1530:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a,o,r,i,c,s,l,d,u=n(5861),p=n(9439),v=n(4687),h=n.n(v),g=n(2791),m=n(8830),f=n(7689),Z=n(168),x=n(6487),b=n(1087),y=x.ZP.img(a||(a=(0,Z.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n  @media screen and (max-width: 800px) {\n    width: 70%;\n  }\n"]))),I=(0,x.ZP)(b.rU)(o||(o=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n"]))),j=x.ZP.ul(r||(r=(0,Z.Z)(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-evenly;\n  margin-bottom: 40px;\n"]))),C=x.ZP.li(i||(i=(0,Z.Z)(["\n  width: 300px;\n  background-color: var(--bg-elemeent);\n  list-style: none;\n  border-radius: 10px;\n  border: 3px solid #fff;\n  overflow: hidden;\n"]))),w=x.ZP.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 15px;\n"]))),z=n(184),M=function(e){var t=e.elements,n=(0,f.TH)();return(0,z.jsx)(j,{children:t.map((function(e){return(0,z.jsx)(C,{children:(0,z.jsxs)(I,{to:"/movies/"+e.id,state:{from:n},children:[(0,z.jsx)(y,{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title}),(0,z.jsxs)(w,{children:[(0,z.jsx)("span",{children:e.title}),(0,z.jsx)("span",{children:e.release_date})]})]})},e.id)}))})},N=x.ZP.p(s||(s=(0,Z.Z)(["\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--iq-title-text);\n  font-family: Roboto, sans-serif;\n"]))),k=x.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),P=(x.ZP.button(d||(d=(0,Z.Z)(["\n  width: 250px;\n  height: 50px;\n  cursor: pointer;\n  border: 3px solid #fff;\n  border-radius: 10px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--iq-light-primary);\n  /* border-radius: 4px; */\n  background: var(--iq-title-text);\n"]))),n(7462)),O=n(3366),S=n(3733),B=n(838),W=n(1402),R=n(9703),J=n(6681);function L(e){return(0,J.ZP)("MuiPagination",e)}(0,R.Z)("MuiPagination",["root","ul","outlined","text"]);var Y=n(3433),F=n(1711),T=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var Q=n(4942),U=n(3616);function G(e){return(0,J.ZP)("MuiPaginationItem",e)}var A=(0,R.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),D=n(3967),q=n(7356),E=n(4036),V=n(6189),X=(0,V.Z)((0,z.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),_=(0,V.Z)((0,z.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),K=(0,V.Z)((0,z.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),H=(0,V.Z)((0,z.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),$=n(6934),ee=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],te=function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat((0,E.Z)(n.size))],"text"===n.variant&&t["text".concat((0,E.Z)(n.color))],"outlined"===n.variant&&t["outlined".concat((0,E.Z)(n.color))],"rounded"===n.shape&&t.rounded,"page"===n.type&&t.page,("start-ellipsis"===n.type||"end-ellipsis"===n.type)&&t.ellipsis,("previous"===n.type||"next"===n.type)&&t.previousNext,("first"===n.type||"last"===n.type)&&t.firstLast]},ne=(0,$.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:te})((function(e){var t=e.theme,n=e.ownerState;return(0,P.Z)({},t.typography.body2,(0,Q.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto"},"&.".concat(A.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),"small"===n.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),ae=(0,$.ZP)(q.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:te})((function(e){var t,n,a=e.theme,o=e.ownerState;return(0,P.Z)({},a.typography.body2,(n={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary},(0,Q.Z)(n,"&.".concat(A.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,Q.Z)(n,"&.".concat(A.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,Q.Z)(n,"transition",a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short})),(0,Q.Z)(n,"&:hover",{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,Q.Z)(n,"&.".concat(A.selected),(t={backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,U.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}}},(0,Q.Z)(t,"&.".concat(A.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,U.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),(0,Q.Z)(t,"&.".concat(A.disabled),{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}),t)),n),"small"===o.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===o.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:a.typography.pxToRem(15)},"rounded"===o.shape&&{borderRadius:(a.vars||a).shape.borderRadius})}),(function(e){var t=e.theme,n=e.ownerState;return(0,P.Z)({},"text"===n.variant&&(0,Q.Z)({},"&.".concat(A.selected),(0,P.Z)({},"standard"!==n.color&&(0,Q.Z)({color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}},"&.".concat(A.focusVisible),{backgroundColor:(t.vars||t).palette[n.color].dark}),(0,Q.Z)({},"&.".concat(A.disabled),{color:(t.vars||t).palette.action.disabled}))),"outlined"===n.variant&&(0,Q.Z)({border:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(A.selected),(0,P.Z)({},"standard"!==n.color&&(0,Q.Z)({color:(t.vars||t).palette[n.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / 0.5)"):(0,U.Fq)(t.palette[n.color].main,.5)),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.activatedOpacity,")"):(0,U.Fq)(t.palette[n.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,U.Fq)(t.palette[n.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(A.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,U.Fq)(t.palette[n.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,Q.Z)({},"&.".concat(A.disabled),{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}))))})),oe=(0,$.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,n=e.ownerState;return(0,P.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===n.size&&{fontSize:t.typography.pxToRem(18)},"large"===n.size&&{fontSize:t.typography.pxToRem(22)})})),re=g.forwardRef((function(e,t){var n=(0,W.Z)({props:e,name:"MuiPaginationItem"}),a=n.className,o=n.color,r=void 0===o?"standard":o,i=n.component,c=n.components,s=void 0===c?{}:c,l=n.disabled,d=void 0!==l&&l,u=n.page,p=n.selected,v=void 0!==p&&p,h=n.shape,g=void 0===h?"circular":h,m=n.size,f=void 0===m?"medium":m,Z=n.slots,x=void 0===Z?{}:Z,b=n.type,y=void 0===b?"page":b,I=n.variant,j=void 0===I?"text":I,C=(0,O.Z)(n,ee),w=(0,P.Z)({},n,{color:r,disabled:d,selected:v,shape:g,size:f,type:y,variant:j}),M=(0,D.Z)(),N=function(e){var t=e.classes,n=e.color,a=e.disabled,o=e.selected,r=e.size,i=e.shape,c=e.type,s=e.variant,l={root:["root","size".concat((0,E.Z)(r)),s,i,"standard"!==n&&"color".concat((0,E.Z)(n)),"standard"!==n&&"".concat(s).concat((0,E.Z)(n)),a&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[c]],icon:["icon"]};return(0,B.Z)(l,G,t)}(w),k=("rtl"===M.direction?{previous:x.next||s.next||H,next:x.previous||s.previous||K,last:x.first||s.first||X,first:x.last||s.last||_}:{previous:x.previous||s.previous||K,next:x.next||s.next||H,first:x.first||s.first||X,last:x.last||s.last||_})[y];return"start-ellipsis"===y||"end-ellipsis"===y?(0,z.jsx)(ne,{ref:t,ownerState:w,className:(0,S.Z)(N.root,a),children:"\u2026"}):(0,z.jsxs)(ae,(0,P.Z)({ref:t,ownerState:w,component:i,disabled:d,className:(0,S.Z)(N.root,a)},C,{children:["page"===y&&u,k?(0,z.jsx)(oe,{as:k,ownerState:w,className:N.icon}):null]}))})),ie=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],ce=(0,$.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant]]}})({}),se=(0,$.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function le(e,t,n){return"page"===e?"".concat(n?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var de=g.forwardRef((function(e,t){var n=(0,W.Z)({props:e,name:"MuiPagination"}),a=n.boundaryCount,o=void 0===a?1:a,r=n.className,i=n.color,c=void 0===i?"standard":i,s=n.count,l=void 0===s?1:s,d=n.defaultPage,u=void 0===d?1:d,v=n.disabled,h=void 0!==v&&v,g=n.getItemAriaLabel,m=void 0===g?le:g,f=n.hideNextButton,Z=void 0!==f&&f,x=n.hidePrevButton,b=void 0!==x&&x,y=n.renderItem,I=void 0===y?function(e){return(0,z.jsx)(re,(0,P.Z)({},e))}:y,j=n.shape,C=void 0===j?"circular":j,w=n.showFirstButton,M=void 0!==w&&w,N=n.showLastButton,k=void 0!==N&&N,R=n.siblingCount,J=void 0===R?1:R,Q=n.size,U=void 0===Q?"medium":Q,G=n.variant,A=void 0===G?"text":G,D=(0,O.Z)(n,ie),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,n=void 0===t?1:t,a=e.componentName,o=void 0===a?"usePagination":a,r=e.count,i=void 0===r?1:r,c=e.defaultPage,s=void 0===c?1:c,l=e.disabled,d=void 0!==l&&l,u=e.hideNextButton,v=void 0!==u&&u,h=e.hidePrevButton,g=void 0!==h&&h,m=e.onChange,f=e.page,Z=e.showFirstButton,x=void 0!==Z&&Z,b=e.showLastButton,y=void 0!==b&&b,I=e.siblingCount,j=void 0===I?1:I,C=(0,O.Z)(e,T),w=(0,F.Z)({controlled:f,default:s,name:o,state:"page"}),z=(0,p.Z)(w,2),M=z[0],N=z[1],k=function(e,t){f||N(t),m&&m(e,t)},S=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))},B=S(1,Math.min(n,i)),W=S(Math.max(i-n+1,n+1),i),R=Math.max(Math.min(M-j,i-n-2*j-1),n+2),J=Math.min(Math.max(M+j,n+2*j+2),W.length>0?W[0]-2:i-1),L=[].concat((0,Y.Z)(x?["first"]:[]),(0,Y.Z)(g?[]:["previous"]),(0,Y.Z)(B),(0,Y.Z)(R>n+2?["start-ellipsis"]:n+1<i-n?[n+1]:[]),(0,Y.Z)(S(R,J)),(0,Y.Z)(J<i-n-1?["end-ellipsis"]:i-n>n?[i-n]:[]),(0,Y.Z)(W),(0,Y.Z)(v?[]:["next"]),(0,Y.Z)(y?["last"]:[])),Q=function(e){switch(e){case"first":return 1;case"previous":return M-1;case"next":return M+1;case"last":return i;default:return null}},U=L.map((function(e){return"number"===typeof e?{onClick:function(t){k(t,e)},type:"page",page:e,selected:e===M,disabled:d,"aria-current":e===M?"true":void 0}:{onClick:function(t){k(t,Q(e))},type:e,page:Q(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?M>=i:M<=1)}}));return(0,P.Z)({items:U},C)}((0,P.Z)({},n,{componentName:"Pagination"})),E=q.items,V=(0,P.Z)({},n,{boundaryCount:o,color:c,count:l,defaultPage:u,disabled:h,getItemAriaLabel:m,hideNextButton:Z,hidePrevButton:b,renderItem:I,shape:C,showFirstButton:M,showLastButton:k,siblingCount:J,size:U,variant:A}),X=function(e){var t=e.classes,n={root:["root",e.variant],ul:["ul"]};return(0,B.Z)(n,L,t)}(V);return(0,z.jsx)(ce,(0,P.Z)({"aria-label":"pagination navigation",className:(0,S.Z)(X.root,r),ownerState:V,ref:t},D,{children:(0,z.jsx)(se,{className:X.ul,ownerState:V,children:E.map((function(e,t){return(0,z.jsx)("li",{children:I((0,P.Z)({},e,{color:c,"aria-label":m(e.type,e.page,e.selected),shape:C,size:U,variant:A}))},t)}))})}))})),ue=de,pe=n(8736),ve=(0,n(278).ZP)(),he=n(7078),ge=n(8519),me=n(5295),fe=n(1184),Ze=n(5682),xe=["component","direction","spacing","divider","children","className","useFlexGap"],be=(0,me.Z)(),ye=ve("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function Ie(e){return(0,he.Z)({props:e,name:"MuiStack",defaultTheme:be})}function je(e,t){var n=g.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,o){return e.push(a),o<n.length-1&&e.push(g.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var Ce=function(e){var t=e.ownerState,n=e.theme,a=(0,P.Z)({display:"flex",flexDirection:"column"},(0,fe.k9)({theme:n},(0,fe.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,Ze.hB)(n),r=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),i=(0,fe.P$)({values:t.direction,base:r}),c=(0,fe.P$)({values:t.spacing,base:r});"object"===typeof i&&Object.keys(i).forEach((function(e,t,n){if(!i[e]){var a=t>0?i[n[t-1]]:"column";i[e]=a}}));a=(0,pe.Z)(a,(0,fe.k9)({theme:n},c,(function(e,n){return t.useFlexGap?{gap:(0,Ze.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,Q.Z)({},"margin".concat((a=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,Ze.NA)(o,e))};var a})))}return a=(0,fe.dt)(n.breakpoints,a)};var we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?ye:t,a=e.useThemeProps,o=void 0===a?Ie:a,r=e.componentName,i=void 0===r?"MuiStack":r,c=function(){return(0,B.Z)({root:["root"]},(function(e){return(0,J.ZP)(i,e)}),{})},s=n(Ce),l=g.forwardRef((function(e,t){var n=o(e),a=(0,ge.Z)(n),r=a.component,i=void 0===r?"div":r,l=a.direction,d=void 0===l?"column":l,u=a.spacing,p=void 0===u?0:u,v=a.divider,h=a.children,g=a.className,m=a.useFlexGap,f=void 0!==m&&m,Z=(0,O.Z)(a,xe),x={direction:d,spacing:p,useFlexGap:f},b=c();return(0,z.jsx)(s,(0,P.Z)({as:i,ownerState:x,ref:t,className:(0,S.Z)(b.root,g)},Z,{children:v?je(h,v):h}))}));return l}({createStyledComponent:(0,$.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiStack"})}}),ze=we,Me=function(e){e.loadMore;var t=e.onPageChange;return(0,z.jsx)(k,{children:(0,z.jsx)(ze,{spacing:2,children:(0,z.jsx)(ue,{count:10,color:"primary",size:"large",onChange:t})})})},Ne=function(){var e=(0,g.useState)([]),t=(0,p.Z)(e,2),n=t[0],a=t[1],o=(0,g.useState)(1),r=(0,p.Z)(o,2),i=r[0],c=r[1],s=(0,g.useState)(!1),l=(0,p.Z)(s,2),d=l[0],v=l[1];console.log(d),(0,g.useEffect)((function(){var e=function(){var e=(0,u.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,(0,m.ss)(i);case 4:(t=e.sent).length&&a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:v(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(N,{children:"Trending today"}),(0,z.jsx)(M,{elements:n}),(0,z.jsx)(Me,{loadMore:function(){c((function(e){return e+1}))},onPageChange:function(e,t){c(t)}})]})}}}]);
//# sourceMappingURL=530.05e3023e.chunk.js.map