(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{57:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(25),i=s.n(c),r=s(10),o=s(2),l=s(1);var j=function(){return Object(l.jsx)("span",{children:"About this page: i built it because i love movies`"})},m=s(13),u=s.n(m),d=s(26),b=s(27),v=s(28),h=s(32),p=s(31),x=s(29),O=s.n(x);s(57);var g=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,c=e.genres;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:n,alt:s,title:s}),Object(l.jsx)("div",{className:"movie_data"}),Object(l.jsx)("h3",{className:"movie__title",style:{backgroundColor:"royalblue"},children:s}),Object(l.jsx)("h5",{className:"movie__year",children:t}),Object(l.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})},f=(s(58),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json/sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));var y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})};var _=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(l.jsx)(o.a,{path:"/about",component:j})]})};i.a.render(Object(l.jsx)(_,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.d303738a.chunk.js.map