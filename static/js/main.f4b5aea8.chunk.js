(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),s=a.n(c),i=a(2),l=a(3),o=a(5),d=a(4),u=(a(15),a(0)),j=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#l",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#l",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#l",children:"Comics"})})]})})]})},h=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),m=a(6),b=a.n(m),f=a(7),O=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=8cf3a3e4276e9a02be2289bf4ce358a0",this._baseOffset=210,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var a,r,n,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:t._baseOffset,r=c.length>1&&void 0!==c[1]?c[1]:9,e.next=4,t.getResource("".concat(t._apiBase,"characters?limit=").concat(r,"&offset=").concat(a,"&").concat(t._apiKey));case 4:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return t._transformCharacter(e)})));case 6:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){var t=e.description.length>220?e.description.substr(0,220)+"...":e.description;return{id:e.id,name:e.name,description:t||"No description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.length?e.comics.items:[{resourceURI:"",name:"There are no comics with this character yet"}]}}},p=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=a.p+"static/media/error.42292aa1.gif",v=function(){return Object(u.jsx)("img",{style:{display:"block",width:"200px",height:"250px",objectFit:"contain",margin:"0 auto",transform:"none"},className:"error",src:x,alt:"error"})},g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!0,error:!1},e.serv=new O,e.updateChar=function(){e.setState({loading:!0});var t=Math.floor(400*Math.random()+1011e3);e.serv.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(t){e.setState({char:null,loading:!1,error:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.char,r=e.error,n=r?Object(u.jsx)(v,{}):null,c=t?Object(u.jsx)(p,{}):null,s=t||r?null:Object(u.jsx)(_,{char:a});return Object(u.jsxs)("div",{className:"randomchar",children:[n,c,s,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",children:Object(u.jsx)("div",{className:"inner",onClick:this.updateChar,children:"try it"})}),Object(u.jsx)("img",{src:h,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),_=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki;return Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{style:n.includes("image_not_available.jpg")?{objectFit:"fill"}:{},src:n,alt:a,className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,N=a(9),C=(a(19),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).serv=new O,e.elems={},e.state={list:[],loading:!0,error:!1,offset:210,charsEnded:!1},e.loadMoreWhenScrolledToBottom=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&e.updateList(9)},e.updateList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=e.state.offset+t;e.setState({loading:!0,error:!1,offset:a}),e.serv.getAllCharacters(a).then(e.onListLoaded).catch(e.onError)},e.onListLoaded=function(t){var a=t.length<9;e.setState((function(e){return{list:[].concat(Object(N.a)(e.list),Object(N.a)(t)),loading:!1,charsEnded:a}}))},e.onError=function(t){e.setState({list:[],error:!0,loading:!1})},e.onClickLoadMore=function(){e.updateList(9)},e.focusOnItem=function(t){for(var a=0,r=Object.values(e.elems);a<r.length;a++){var n=r[a];n&&n.classList.remove("char__item_selected")}e.elems[t].focus(),e.elems[t].classList.add("char__item_selected")},e.setRef=function(t){if(t){var a=t.getAttribute("data-id");e.elems[a]=t}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateList(),window.addEventListener("scroll",this.loadMoreWhenScrolledToBottom)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.loadMoreWhenScrolledToBottom)}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.list,r=t.loading,n=t.error,c=r?Object(u.jsx)(p,{}):null,s=n?Object(u.jsx)(v,{}):null,i=a.map((function(t,a){return Object(u.jsxs)("li",{ref:e.setRef,"data-id":t.id,className:"char__item",onClick:function(){e.props.onCharSelect(t.id),e.focusOnItem(t.id)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.props.onCharSelect(t.id),e.focusOnItem(t.id),a.preventDefault())},tabIndex:0,children:[Object(u.jsx)("img",{style:t.thumbnail.includes("image_not_available.jpg")?{objectFit:"fill"}:{},src:t.thumbnail,alt:t.name}),Object(u.jsx)("div",{className:"char__name",children:t.name}),c,s]},t.id)})),l=[],o=0;o<6;o++)l.push(Object(u.jsxs)("li",{style:{padding:0,display:"flex",alignItems:"center",backgroundColor:"white"},className:"char__item",children:[c,s]},o));return Object(u.jsxs)("div",{className:"char__list",children:[Object(u.jsx)("ul",{className:"char__grid",children:r||s?l:i}),Object(u.jsx)("button",{className:"button button__main button__long",onClick:this.onClickLoadMore,disabled:r,style:{display:this.state.charsEnded?"none":"block"},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component));C.defaultProps={onCharSelect:function(){console.log("default behavior")}};var k=C,w=(a(20),a(21),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.serv=new O,e.updateChar=function(){e.props.selectedChar&&(e.setState({loading:!0}),e.serv.getCharacter(e.props.selectedChar).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(t){e.setState({char:null,loading:!1,error:!0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.selectedChar!==this.props.selectedChar&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.char,r=e.error,n=t||r||a?null:Object(u.jsx)(w,{}),c=r?Object(u.jsx)(v,{}):null,s=t?Object(u.jsx)(p,{}):null,i=t||r||!a?null:Object(u.jsx)(S,{char:a});return Object(u.jsxs)("div",{className:"char__info",children:[c,s,n,i]})}}]),a}(r.Component),S=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{style:n.includes("image_not_available.jpg")?{objectFit:"fill"}:{},src:n,alt:a}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsx)("ul",{className:"char__comics-list",children:Object(u.jsx)(L,{comicsList:i})})]})},L=function(e){return e.comicsList.slice(0,10).map((function(e,t){return Object(u.jsx)("li",{"data-url":e.resourceURI,className:"char__comics-item",children:e.name},e.resourceURI)}))},E=T,M=a.p+"static/media/vision.067d4ae1.png",R=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(v,{}):this.props.children}}]),a}(r.Component),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelect=function(t){console.log(t),e.setState({selectedChar:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[null,Object(u.jsx)(j,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(R,{children:Object(u.jsx)(y,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(R,{children:Object(u.jsx)(k,{onCharSelect:this.onCharSelect})}),Object(u.jsx)(R,{children:Object(u.jsx)(E,{selectedChar:this.state.selectedChar})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:M,alt:"vision"})]})]})}}]),a}(r.Component),I=(r.Component,A);a(22);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.f4b5aea8.chunk.js.map