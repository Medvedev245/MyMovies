"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[331],{8830:function(n,e,t){t.d(e,{Bt:function(){return l},Hq:function(){return p},m4:function(){return s},ss:function(){return o},y:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/trending/movie/day".concat("?api_key=5be1c9c05ef299ccfab1d8ad724f7561","1&page=").concat(e),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=n.sent,console.log(t.data.results),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/credits?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/reviews?language=en-US&page=1"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,c.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},8331:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,a,i,c,o,s,u,l,p=t(5861),h=t(9439),d=t(4687),f=t.n(d),g=t(2791),Z=t(8830),I=t(7689),x=t(168),j=t(6487),m=t(1087),v=j.ZP.img(r||(r=(0,x.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),y=(0,j.ZP)(m.rU)(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n"]))),b=j.ZP.ul(i||(i=(0,x.Z)(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-evenly;\n  margin-bottom: 40px;\n"]))),J=j.ZP.li(c||(c=(0,x.Z)(["\n  width: 300px;\n  background-color: #82c9cb;\n  list-style: none;\n  border-radius: 10px;\n  border: 3px solid #fff;\n  overflow: hidden;\n"]))),W=j.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 15px;\n"]))),w=t(184),z=function(n){var e=n.elements,t=(0,I.TH)();return(0,w.jsx)(b,{children:e.map((function(n){return(0,w.jsx)(J,{children:(0,w.jsxs)(y,{to:"/movies/"+n.id,state:{from:t},children:[(0,w.jsx)(v,{src:"https://image.tmdb.org/t/p/w300"+n.poster_path,alt:n.title}),(0,w.jsxs)(W,{children:[(0,w.jsx)("span",{children:n.title}),(0,w.jsx)("span",{children:n.release_date})]})]})},n.id)}))})},M=j.ZP.p(s||(s=(0,x.Z)(["\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--iq-title-text);\n  font-family: Roboto, sans-serif;\n"]))),C=j.ZP.div(u||(u=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),N=(j.ZP.button(l||(l=(0,x.Z)(["\n  width: 250px;\n  height: 50px;\n  cursor: pointer;\n  border: 3px solid #fff;\n  border-radius: 10px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--iq-light-primary);\n  /* border-radius: 4px; */\n  background: var(--iq-title-text);\n"]))),t(2551)),Y=t(2784),O=function(n){n.loadMore;var e=n.onPageChange;return(0,w.jsx)(C,{children:(0,w.jsx)(Y.Z,{spacing:2,children:(0,w.jsx)(N.Z,{count:10,color:"primary",size:"large",onChange:e})})})},Q=function(){var n=(0,g.useState)([]),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,g.useState)(1),i=(0,h.Z)(a,2),c=i[0],o=i[1],s=(0,g.useState)(!1),u=(0,h.Z)(s,2),l=u[0],d=u[1];console.log(l),(0,g.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,Z.ss)(c);case 4:(e=n.sent).length&&r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:d(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(M,{children:"Trending today"}),(0,w.jsx)(z,{elements:t}),(0,w.jsx)(O,{loadMore:function(){o((function(n){return n+1}))},onPageChange:function(n,e){o(e)}})]})}}}]);
//# sourceMappingURL=331.16ce86b2.chunk.js.map