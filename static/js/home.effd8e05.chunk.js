(this["webpackJsonpedgemony-react-2021"]=this["webpackJsonpedgemony-react-2021"]||[]).push([[1],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r}));n(23);var c="https://edgemony-backend.herokuapp.com",a=function(e){return fetch(c+e).then((function(e){return e.json()}))},s=function(e,t){return fetch(c+e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},r=function(e){return fetch(c+e,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))}},24:function(e,t,n){"use strict";var c=n(25),a=n.n(c),s=n(1);t.a=function(e){var t=e.bgColor,n=e.text;return Object(s.jsx)("div",{className:a.a.Modal,style:{background:"".concat(t)},children:Object(s.jsx)("p",{children:n})})}},25:function(e,t,n){e.exports={Modal:"Modal_Modal__32mLz"}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(27),a=n.n(c),s=n(1),r=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(s.jsxs)("div",{className:a.a.friend,children:[Object(s.jsx)("img",{src:t.photo,alt:t.name}),Object(s.jsx)("p",{children:t.name})]})}},27:function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},34:function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},35:function(e,t,n){e.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},36:function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},48:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),s=n(26),r=n(45),o=n(46),i=n(34),d=n.n(i),j=n(1),u=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(j.jsxs)("div",{className:d.a.message,children:[Object(j.jsx)("h5",{children:t.sender}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(r.a)(new Date(t.date),new Date,{addSuffix:!0,locale:o.a})})}),Object(j.jsx)("p",{children:t.text})]})},l=n(22),h=n(24),b=n(35),f=n.n(b),m=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"},n=Object(a.useState)(!1),s=Object(c.a)(n,2),i=s[0],d=s[1];return Object(j.jsxs)("article",{className:f.a.post,children:[i&&Object(j.jsx)(h.a,{bgColor:"lightcoral",text:"Il post \xe8 stato rimosso"}),Object(j.jsx)("button",{onClick:function(){Object(l.b)("/posts/".concat(e.data.id)).then((function(){})),d(!0),setTimeout((function(){d(!1),window.location.href="/"}),3e3)},className:f.a.deleteBtn,children:"X"}),Object(j.jsx)("h3",{children:t.author}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(r.a)(new Date(t.date),new Date,{addSuffix:!0,locale:o.a})})}),Object(j.jsx)("p",{children:t.text}),t.photo?Object(j.jsx)("img",{src:t.photo,alt:t.author}):Object(j.jsx)(j.Fragment,{})]})},p=n(5),x=n(36),O=n.n(x),_=[],g=[],v=[];t.default=function(){var e=Object(a.useState)(_),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(v),i=Object(c.a)(o,2),d=i[0],h=i[1],b=Object(a.useState)(g),f=Object(c.a)(b,2),x=f[0],w=f[1];return Object(a.useEffect)((function(){Object(l.a)("/friends?_limit=4").then((function(e){return r(e)})),Object(l.a)("/messages?_limit=4").then((function(e){return w(e)})),Object(l.a)("/posts").then((function(e){return h(e.reverse())}))}),[]),Object(j.jsxs)("section",{className:O.a.home,children:[Object(j.jsx)("h3",{children:"Bevenuto utente"}),Object(j.jsxs)("div",{className:O.a.grid,children:[Object(j.jsx)("aside",{children:n.map((function(e,t){return Object(j.jsx)(s.a,{data:e},t)}))}),Object(j.jsxs)("main",{children:[Object(j.jsx)(p.b,{to:"/new-post",children:Object(j.jsx)("button",{className:O.a.createPostBtn,children:"+ Create a new post!"})}),d.map((function(e,t){return Object(j.jsx)(m,{data:e},t)}))]}),Object(j.jsx)("aside",{children:x.map((function(e,t){return Object(j.jsx)(u,{data:e},t)}))})]})]})}}}]);
//# sourceMappingURL=home.effd8e05.chunk.js.map