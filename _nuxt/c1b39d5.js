(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{489:function(t,e,o){var content=o(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("420de4ab",content,!0,{sourceMap:!1})},490:function(t,e,o){var content=o(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("e09ac50e",content,!0,{sourceMap:!1})},491:function(t,e,o){"use strict";var n={name:"Tags",props:["tags","type"],mounted:function(){console.log("printing tags:",this.tags)}},r=(o(492),o(39)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return"home"===t.type?o("div",{staticClass:"tags"},t._l(t.tags,(function(e){return o("datalist",{directives:[{name:"show",rawName:"v-show",value:t.tags.length>0,expression:"tags.length > 0"}],key:e.databaseId,staticClass:"tag h4 d-inline-block mr-3"},[o("nuxtLink",{staticClass:"d-inline-block text-decoration-none p-2 ml-0 border",attrs:{to:"/tag/"+t.$nuxt.$helpers.slugify(e.node.name)}},[t._v(t._s(e.node.name)+"\n\n      "),o("span",{staticClass:"tag--count text-muted"},[t._v(t._s(e.node.count))])])],1)})),0):"post"===t.type&&t.tags.nodes.length>0?o("div",{staticClass:"tags m-0"},t._l(t.tags,(function(e,n){return o("datalist",{key:n,staticClass:"tags--post m-0 d-inline-block"},t._l(e,(function(e){return o("data",{key:e.databaseId,staticClass:"badge bg-dark text-light mr-2 mt-2 p-2",domProps:{innerHTML:t._s(e.name)}})})),0)})),0):t._e()}),[],!1,null,null,null);e.a=component.exports},492:function(t,e,o){"use strict";o(489)},493:function(t,e,o){(e=o(57)(!1)).push([t.i,".tags{position:relative}.tags .tag--count{font-size:55%}",""]),t.exports=e},494:function(t,e,o){"use strict";o(490)},495:function(t,e,o){(e=o(57)(!1)).push([t.i,'article .post-excerpt{font-weight:200;font-size:1em;line-height:.8em}@media only screen and (min-width:360px){article .post--info-footer{flex-direction:row!important}}article .post--info-footer .post--author:not(:last-child):after{display:inline-block;border:none;content:"//";margin-right:5px}article .post--info-footer .post--author .post--author-avatar{width:24px!important;position:relative}article .post--info-footer .post--author .post--author-avatar img{width:100%}article .post--info-footer .post--categories:not(:last-child):after{display:inline-block;border:none;content:"//";margin:0 5px}article .post--info-footer .post--categories .post--category{border-bottom:2px solid orange}article .post--info-footer .post--categories .post--category:not(:last-child):after{display:inline-block;border:none;content:", ";margin-right:5px}p>img{width:100%!important;border-radius:5px}img[src*="#thumbnail"]{max-width:350px;height:auto}code{padding:2em!important;scrollbar-width:none;-ms-overflow-style:none}code::-webkit-scrollbar{display:none}span.emoji{display:-moz-inline-box;display:inline-block;vertical-align:baseline;*vertical-align:auto;*zoom:1;*display:inline;width:1em;height:1em;background-size:1em;background-repeat:no-repeat;text-indent:-9999px;background-position:50%,50%;background-size:contain}span.emoji-sizer{line-height:.81em;font-size:1em;margin:-2px 0}span.emoji-outer{display:-moz-inline-box;display:inline-block;*display:inline;height:1em;width:1em}span.emoji-inner{display:-moz-inline-box;display:inline-block;text-indent:-9999px;width:100%;height:100%;vertical-align:baseline;*vertical-align:auto;*zoom:1}img.emoji{width:1em;height:1em}',""]),t.exports=e},496:function(t,e,o){"use strict";var n={name:"Post",props:["post","type"],components:{Tags:o(491).a},mounted:function(){document.querySelectorAll("code").forEach((function(t){hljs.highlightBlock(t)}))},methods:{postEditUrl:function(t){return void 0===t.node?"http://localhost:undefined/wp-admin/post.php?post="+t.databaseId+"&action=edit":"http://localhost:undefined/wp-admin/post.php?post="+t.node.databaseId+"&action=edit"},postTags:function(t){console.log("loging post tags",t)}}},r=(o(494),o(39)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return"home"===t.type?o("div",[o("article",{staticClass:"mb-5 d-flex flex-column"},[o("div",[o("nuxtLink",{staticClass:"h2 text-capitalize",staticStyle:{width:"fit-content"},attrs:{to:"/blog/"+this.$helpers.slugify(t.post.node.slug)}},[t._v(t._s(t.post.node.title))]),t._v(" "),o("a",{staticClass:"small text-capitalize d-inline-block text-muted",staticStyle:{width:"fit-content"},attrs:{href:t.postEditUrl(t.post)}},[t._v("edit")])],1),t._v(" "),o("Tags",{attrs:{tags:t.post.node.tags,type:"post"}}),t._v(" "),o("blockquote",{directives:[{name:"show",rawName:"v-show",value:""!==t.post.node.excerpt,expression:"post.node.excerpt !== ''"}],staticClass:"blockquote post-excerpt mb-0",domProps:{innerHTML:t._s(t.post.node.excerpt)}}),t._v(" "),o("footer",{staticClass:"post--info-footer d-flex flex-column w-100 m-0"},[o("div",{staticClass:"post--author"},[o("span",{staticClass:"post--author-name m-0"},[t._v("By\n\t\t\t\t\t\t"),o("img",{staticClass:"post--author-avatar rounded-circle",attrs:{src:t.post.node.author.node.avatar.url,alt:t.post.node.author.node.name}}),t._v("\n\t\t\t\t\t\t"+t._s(t.post.node.author.node.name)+"\n\t\t\t\t\t")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.post.node.categories.nodes.length>0,expression:"post.node.categories.nodes.length > 0"}],staticClass:"post--categories m-0"},[o("div",{staticClass:"d-inline-block"},t._l(t.post.node.categories.nodes,(function(e,i){return o("nuxtLink",{key:i,staticClass:"post--category",attrs:{to:"/category/"+e.name}},[[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")]],2)})),1)]),t._v(" "),o("span",{staticClass:"post--date m-0 p-0"},[t._v("\n\t\t\t\t\t"+t._s(t._f("moment")(new Date(Date.parse(t.post.node.date)),"ddd, MMM Do YYYY"))+"\n\t\t\t\t")])])],1)]):"tag"===t.type?o("div",t._l(t.post.nodes,(function(e,n){return o("article",{key:n,staticClass:"mb-5 d-flex flex-column"},[o("div",[o("nuxtLink",{staticClass:"h2 text-capitalize",staticStyle:{width:"fit-content"},attrs:{to:"/blog/"+t.$nuxt.$helpers.slugify(e.slug)}},[t._v(t._s(e.title))]),t._v(" "),o("a",{staticClass:"small text-capitalize d-inline-block text-muted",staticStyle:{width:"fit-content"},attrs:{href:t.postEditUrl(e)}},[t._v("edit")])],1),t._v(" "),o("Tags",{attrs:{tags:e.tags,type:"post"}}),t._v(" "),o("blockquote",{directives:[{name:"show",rawName:"v-show",value:""!==e.excerpt,expression:"post.excerpt !== ''"}],staticClass:"blockquote post-excerpt mb-0",domProps:{innerHTML:t._s("<p>"+e.excerpt+"</p>")}}),t._v(" "),o("footer",{staticClass:"post--info-footer d-flex flex-column w-100 m-0"},[o("div",{staticClass:"post--author"},[o("span",{staticClass:"post--author-name m-0"},[t._v("By\n\t\t\t\t\t\t"),o("img",{staticClass:"post--author-avatar rounded-circle",attrs:{src:e.author.node.avatar.url,alt:e.author.node.name}}),t._v("\n\t\t\t\t\t\t"+t._s(e.author.node.name)+"\n\t\t\t\t\t")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.categories.nodes.length>0,expression:"post.categories.nodes.length > 0"}],staticClass:"post--categories m-0"},[o("div",{staticClass:"d-inline-block"},t._l(e.categories.nodes,(function(e,i){return o("nuxtLink",{key:i,staticClass:"post--category",attrs:{to:"/category/"+e.name}},[[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")]],2)})),1)]),t._v(" "),o("span",{staticClass:"post--date m-0 p-0"},[t._v("\n\t\t\t\t\t"+t._s(t._f("moment")(new Date(Date.parse(e.date)),"ddd, MMM Do YYYY"))+"\n\t\t\t\t")])])],1)})),0):"single-post"===t.type?o("main",[o("article",{staticClass:"container position-relative"},[o("div",[t._v("else")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"wp__content",domProps:{innerHTML:t._s(t.renderedContent)}})])]):t._e()}),[],!1,null,null,null);e.a=component.exports},498:function(t,e,o){"use strict";var n={props:{page:{type:Object,required:!0}}},r=o(39);Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("h1",{staticClass:"wp__title",domProps:{innerHTML:this._s(this.page.title.rendered)}}),this._v(" "),e("div",{staticClass:"wp__content",domProps:{innerHTML:this._s(this.page.content.rendered)}})])}),[],!1,null,null,null).exports},518:function(t,e,o){"use strict";o.r(e);o(29);var n=o(8),r=(o(498),o(496),{asyncData:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.route,n=t.app,r=t.error,o.prev=1,o.next=4,n;case 4:e.single=o.sent,console.log("hello",single),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(1),r(o.t0);case 11:case"end":return o.stop()}}),o,null,[[1,8]])})))()},created:function(){},data:function(){return{single:""}},props:["tag"],methods:{getRencentPosts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("posts/GET_POST_BY_ID");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}}}),l=o(39),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("check console")])}),[],!1,null,"6f2ac5fa",null);e.default=component.exports}}]);