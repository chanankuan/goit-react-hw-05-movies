"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{8143:function(n,e,t){t(2791);e.Z=t.p+"static/media/player.3117d05d2ccd02497da662e1bd37ed59.svg"},1799:function(n,e,t){t.d(e,{fO:function(){return f},vJ:function(){return h},TP:function(){return d},MS:function(){return m},CE:function(){return g},Df:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1591),c=t.p+"static/media/default-backdrop.118a8dfe1c8c6643d999.jpeg",u=t(5303),s=function(n){var e=n.id,t=n.imdb_id,r=n.original_language,a=n.original_title,i=n.overview,o=n.backdrop_path,s=n.poster_path,l=n.release_date,p=n.tagline,f=n.title,d=n.vote_average,g=n.runtime,h=n.genres;return{id:e,imdb_id:t,original_language:r,original_title:a,overview:i,backdrop_path:o?"https://image.tmdb.org/t/p/w300".concat(o):c,poster_path:s?"https://image.tmdb.org/t/p/w300".concat(s):u,release_date:l.slice(0,4),tagline:p,title:f,vote_average:d,runtime:g,genres:h.map((function(n){return n.name})).join(", ")}},l=t(3708);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?language=en-US",l.Y);case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t),l.Y);case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?language=en-US"),l.Y);case 2:return t=n.sent,r=t.data,a=s(r),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?language=en-US"),l.Y);case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?language=en-US"),l.Y);case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?language=en-US"),l.Y);case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.filter((function(n){return"Official Trailer"===n.name}))[0]);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5973:function(n,e,t){t.d(e,{$0:function(){return p},J5:function(){return d},JO:function(){return g},W2:function(){return l},zx:function(){return f}});var r,a,i,o,c,u=t(168),s=t(3081),l=s.Z.div(r||(r=(0,u.Z)(["\n  padding: 20px;\n  margin: 0 auto;\n  @media screen and (min-width: 375px) {\n    max-width: 375px;\n  }\n  @media screen and (min-width: 768px) {\n    padding-left: 32px;\n    padding-right: 32px;\n    max-width: 768px;\n  }\n  @media screen and (min-width: 980px) {\n    max-width: 980px;\n  }\n"]))),p=s.Z.section(a||(a=(0,u.Z)([""]))),f=s.Z.button(i||(i=(0,u.Z)(["\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n"]))),d=s.Z.img(o||(o=(0,u.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),g=s.Z.img(c||(c=(0,u.Z)([""])))},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(8273),a=t(184),i=function(){return(0,a.jsx)("div",{style:{position:"fixed",left:0,top:0,width:"100vw",height:"100vh",backdropFilter:"blur(10px)",zIndex:999},children:(0,a.jsx)(r.rj,{color:"#00BFFF",height:80,width:80,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},2887:function(n,e,t){t.d(e,{Z:function(){return S}});t(2791);var r=t(7689),a=t(5303);var i,o,c,u,s,l,p,f,d,g,h=t.p+"static/media/star.c4baa38127e1580cceb5153bf65f5c17.svg",m=t(8143),x=t(168),v=t(3081),Z=t(1087),w=t(5973),b=v.Z.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 40px;\n"]))),j=v.Z.li(o||(o=(0,x.Z)(["\n  flex-basis: calc((100% - 20px) / 2);\n  &:hover {\n    .poster {\n      transition: filter 200ms ease-in-out;\n      filter: brightness(0.8);\n    }\n    .player {\n      transition: opacity 200ms ease-in-out;\n      opacity: 1;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 4 * 20px) / 5);\n  }\n"]))),A=(0,v.Z)(Z.rU)(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),y=v.Z.img(u||(u=(0,x.Z)(["\n  display: block;\n  object-fit: cover;\n  aspect-ratio: 0.66;\n  margin-bottom: 20px;\n"]))),J=(0,v.Z)(w.J5)(s||(s=(0,x.Z)(["\n  opacity: 0;\n"]))),C=v.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),Y=v.Z.h3(p||(p=(0,x.Z)(["\n  flex: 1;\n  font-weight: 400;\n  font-size: 1rem;\n  margin-bottom: 10px;\n"]))),T=v.Z.div(f||(f=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n"]))),k=v.Z.p(d||(d=(0,x.Z)(["\n  font-size: 0.8rem;\n  margin-right: 20px;\n  line-height: 150%;\n"]))),U=v.Z.p(g||(g=(0,x.Z)(["\n  display: flex;\n  column-gap: 5px;\n  font-size: 0.8rem;\n  line-height: 150%;\n  & > img {\n    padding-bottom: 2px;\n  }\n"]))),B=t(184),S=function(n){var e=n.movies,t=(0,r.TH)();return(0,B.jsx)(b,{name:"movieList",children:e.map((function(n){var e=n.id,r=n.title,i=n.original_title,o=n.release_date,c=n.poster_path,u=n.vote_average;return(0,B.jsx)(j,{children:(0,B.jsxs)(A,{to:"/movies/".concat(e),state:{from:t},children:[(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)(y,{className:"poster",src:c?"https://image.tmdb.org/t/p/w300/".concat(c):a,alt:r}),(0,B.jsx)(J,{className:"player",src:m.Z,alt:"Player icon"})]}),(0,B.jsxs)(C,{children:[(0,B.jsx)(Y,{children:r===i?r:"".concat(i," (").concat(r,")")}),(0,B.jsxs)(T,{children:[(0,B.jsx)(k,{children:o?o.slice(0,4):"-"}),(0,B.jsxs)(U,{children:[(0,B.jsx)("img",{src:h,alt:"Star icon",width:15}),u?u.toFixed(1):"-"]})]})]})]})},e)}))})}},3708:function(n,e,t){t.d(e,{Y:function(){return r}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc"}}},6631:function(n,e,t){t.d(e,{r:function(){return a}});var r=t(5667),a=function(n){r.OK.scrollTo(n,{duration:500,smooth:!0,offset:-120})}},5706:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r=t(9439),a=t(2791),i=t(1087),o=t(5264),c=t(5973),u=t(168),s=t(3081);var l,p,f,d,g=t.p+"static/media/Search.0bd2d1e6eb1822ff2c44bd4427254f8d.svg",h=s.Z.h1(l||(l=(0,u.Z)(["\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 24px;\n"]))),m=s.Z.form(p||(p=(0,u.Z)(["\n  font-size: 0.8rem;\n  line-height: 150%;\n  display: flex;\n  width: 100%;\n  max-width: 375px;\n  border-radius: 16px;\n  background: #3a3f47;\n  padding: 10px 25px;\n  margin-bottom: 40px;\n"]))),x=s.Z.input(f||(f=(0,u.Z)(["\n  width: 90%;\n  height: 100%;\n  color: #fff;\n  background: #3a3f47;\n  border: none;\n  outline: none;\n  padding: 0;\n  &::placeholder {\n    color: #67686d;\n  }\n"]))),v=s.Z.input(d||(d=(0,u.Z)(["\n  width: 10%;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-position: right center;\n  border: none;\n  background-color: #3a3f47;\n  padding: 0;\n"])),"url(".concat(g,")")),Z=t(184),w=function(n){var e=n.handleSubmit,t=(0,a.useState)(""),i=(0,r.Z)(t,2),o=i[0],c=i[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,Z.jsx)(x,{type:"text",placeholder:"Search",value:o,onChange:function(n){c(n.target.value)}}),(0,Z.jsx)(v,{type:"submit",value:""})]})})},b=t(2887),j=t(854),A=t(1799),y=t(7658),J=t(1582),C=t(2532),Y=t(6631),T=function(n){var e=n.totalPages,t=n.handleChangePage,a=(0,i.lr)(),o=(0,r.Z)(a,1)[0],c=Number(o.get("page"))||1;return(0,Z.jsx)(J.Z,{spacing:2,alignItems:"center",children:(0,Z.jsx)(y.Z,{count:e,onChange:t,onClick:function(){return(0,Y.r)("movieList")},color:"primary",page:c,sx:{color:"#fff","& .MuiPaginationItem-root":{color:"#fff","&:hover":{backgroundColor:C.r.palette.primary.main}}}})})},k=function(){return(0,Z.jsx)("img",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},src:"data:image/png;base64,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",alt:"Start exploring"})},U=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1],s=(0,a.useState)(!0),l=(0,r.Z)(s,2),p=l[0],f=l[1],d=(0,a.useState)(null),g=(0,r.Z)(d,2),m=g[0],x=g[1],v=(0,a.useState)(!1),y=(0,r.Z)(v,2),J=y[0],C=y[1],Y=(0,a.useState)(!1),U=(0,r.Z)(Y,2),B=U[0],S=U[1],M=(0,i.lr)(),R=(0,r.Z)(M,2),K=R[0],z=R[1];(0,a.useEffect)((function(){var n=K.get("query"),e=K.get("page")||1;n&&(C(!0),f(!1),(0,A.fO)(n,e).then((function(n){var e=n.results,t=n.total_pages;0===e.length?S(!0):S(!1),u(e),x(t)})).catch((function(){o.Notify.failure("Oops. Something went wrong. Please refresh the page")})).finally((function(){C(!1)})))}),[K]);return(0,Z.jsx)(c.$0,{children:(0,Z.jsxs)(c.W2,{children:[(0,Z.jsx)(h,{children:"What do you want to watch?"}),(0,Z.jsx)(w,{handleSubmit:function(n){n&&z({query:n})}}),t.length>0&&(0,Z.jsx)(b.Z,{movies:t}),p&&(0,Z.jsx)(k,{}),J&&(0,Z.jsx)(j.a,{}),B&&(0,Z.jsx)("h2",{children:"No results. Please try another search."}),m>1&&(0,Z.jsx)(T,{totalPages:m,handleChangePage:function(n,e){var t=K.get("query");(K.get("page")||1!==e)&&z({query:t,page:e})}})]})})}},5303:function(n,e,t){n.exports=t.p+"static/media/default-movie-poster.71253f31d01ef6cdd4cc.jpeg"}}]);
//# sourceMappingURL=206.6b5e080c.chunk.js.map