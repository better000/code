(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb1abbc"],{"109d":function(t,a,s){"use strict";var e=s("6179"),i=s.n(e);i.a},1512:function(t,a,s){},"21c6":function(t,a,s){t.exports=s.p+"img/default_head.e1aff007.jpg"},"3ef8":function(t,a,s){},4887:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.heroData?e("div",{staticClass:"hero"},[e("top-bar",{staticClass:"hero-nav fc-w"},[e("div",{staticClass:"fs13 flex1",attrs:{slot:"center"},slot:"center"},[t._v(" DNF "),e("span",{staticClass:"pl8"},[t._v("攻略站")])]),e("router-link",{staticClass:"more fs12",attrs:{slot:"right",to:"/",tag:"div"},slot:"right"},[t._v(" 更多英雄 "),e("span",{staticClass:"arrow-r fs20"},[t._v(">")])])],1),e("div",{staticClass:"hero-banner"},[e("img",{attrs:{src:t.heroData.banner,alt:""}}),e("div",{staticClass:"hero-info fc-w"},[e("div",{staticClass:"show-text"},[t._v(t._s(t.heroData.title))]),e("h3",{staticClass:"fs17 bold show-text"},[t._v(t._s(t.heroData.name))]),e("div",{staticClass:"ani-1"},[t._v(t._s(t.heroData.cate.map((function(t){return t.name})).join("/")))]),e("ul",{staticClass:"d-flex ani-2"},t._l(t.scores,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(t.scores_name[s])+" "),e("i",{staticClass:"hero-attr",style:{"background-position":.82*-(3-s)+"rem "+.82*-(a-1)+"rem"}})])})),0)]),e("div",{staticClass:"skin fc-2 ani-4",on:{click:function(a){t.showSkin=!0}}},[t._v(" 皮肤："+t._s(t.heroData.skins.length)+" "),e("i")])]),e("div",{staticClass:"main"},[0==t.heroData.skills.length?e("div",{staticClass:"tip2"},[e("img",{attrs:{src:s("def9"),alt:""}})]):t._e(),e("hcard",{staticClass:"pt8",attrs:{data:["英雄初识","进阶攻略"],padding:!1,around:"",navBorder:""},scopedSlots:t._u([{key:"default",fn:function(a){return["英雄初识"===a.item?e("div",[e("div",{staticClass:"b-bottom p0-15"},[e("div",{staticClass:"hero-video d-flex jc-between"},[e("span",{on:{click:function(a){t.showVideo=!0}}},[e("i",{staticClass:"i-video"}),t._v(" 英雄介绍视频 ")]),e("span",{on:{click:function(a){t.showPhoto=!0}}},[e("i",{staticClass:"i-photo"}),t._v(" 一图识英雄 ")])]),e("ul",{staticClass:"hero-skills m15-0"},t._l(t.heroData.skills,(function(a,s){return e("li",{key:a._id,class:{active:t.currentIndex==s},on:{click:function(a){t.currentIndex=s}}},[e("img",{attrs:{src:a.icon}})])})),0),e("div",{staticClass:"skill-info"},[e("h3",{staticClass:"p3-0"},[e("span",{staticClass:"fs15 bold mr15"},[t._v(t._s(t.currentSkill.name))]),e("span",{staticClass:"fs12 fc-2",staticStyle:{color:"#7a7a80"}},[t._v("(冷却值："+t._s(t.currentSkill.delay)+"消耗："+t._s(t.currentSkill.cost)+")")])]),e("p",{staticClass:"desc p15-0"},[t._v(t._s(t.currentSkill.desc))]),e("p",{staticClass:"detail p15-0"},[t._v("小提示："+t._s(t.currentSkill.tips))])])]),e("div",{staticClass:"suggest fs13"},[e("card",{attrs:{title:"出装推荐",bold:""}},[e("i",{attrs:{slot:"icon-l"},slot:"icon-l"}),e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"mt-8 down_wind b-bottom"},[e("h5",{staticClass:"pb8 fs15"},[t._v("顺风出装")]),e("ul",{staticClass:"d-flex jc-between"},t._l(t.heroData.downWind.equipment,(function(a){return e("li",{key:a._id},[e("img",{attrs:{src:a.icon,alt:""}}),e("div",{staticClass:"t-center"},[t._v(t._s(a.name))])])})),0),e("p",{staticClass:"p15-0",staticStyle:{color:"#7a7a80"}},[t._v("小提示："+t._s(t.heroData.downWind.tips))])]),e("div",{staticClass:"mt8 up_wind"},[e("h5",{staticClass:"pb8 fs15"},[t._v("逆风出装")]),e("ul",{staticClass:"d-flex jc-between"},t._l(t.heroData.upWind.equipment,(function(a){return e("li",{key:a._id},[e("img",{attrs:{src:a.icon,alt:""}}),e("div",{staticClass:"t-center"},[t._v(t._s(a.name))])])})),0),e("p",{staticClass:"p15-0",staticStyle:{color:"#7a7a80"}},[t._v("小提示："+t._s(t.heroData.upWind.tips))])])])]),e("card",{attrs:{title:"使用技巧",bold:""}},[e("i",{attrs:{slot:"icon-l"},slot:"icon-l"}),e("p",{staticClass:"pb8",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.heroData.usageTips))])]),e("card",{attrs:{title:"对抗技巧",bold:""}},[e("i",{attrs:{slot:"icon-l"},slot:"icon-l"}),e("p",{staticClass:"pb8",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.heroData.battleTips))])]),e("card",{attrs:{title:"团战技巧",bold:""}},[e("i",{attrs:{slot:"icon-l"},slot:"icon-l"}),e("p",{staticClass:"pb8",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.heroData.teamTips))])]),e("card",{attrs:{title:"英雄关系",bold:""}},[e("i",{attrs:{slot:"icon-l"},slot:"icon-l"}),e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"b-bottom"},[e("h3",[t._v("最佳搭档")]),t._l(t.heroData.partners,(function(a){return e("div",{key:a._id,staticClass:"best-partners d-flex p5-0"},[e("img",{attrs:{src:a.hero.avatar,alt:""}}),e("p",{staticClass:"flex1 pl10"},[t._v(t._s(a.desc))])])}))],2),e("div",{staticClass:"b-bottom"},[e("h3",[t._v("被谁克制")]),t._l(t.heroData.restrained,(function(a){return e("div",{key:a._id,staticClass:"best-partners d-flex p5-0"},[e("img",{attrs:{src:a.hero.avatar,alt:""}}),e("p",{staticClass:"flex1 pl10"},[t._v(t._s(a.desc))])])}))],2),e("div",{staticClass:"b-bottom"},[e("h3",[t._v("克制谁")]),t._l(t.heroData.restraint,(function(a){return e("div",{key:a._id,staticClass:"best-partners d-flex p5-0"},[e("img",{attrs:{src:a.hero.avatar,alt:""}}),e("p",{staticClass:"flex1 pl10"},[t._v(t._s(a.desc))])])}))],2)])])],1)]):t._e(),"进阶攻略"===a.item?e("div",{staticClass:"strategy-plus"},[e("img",{attrs:{src:s("def9"),alt:""}})]):t._e()]}}],null,!1,3533627588)})],1),e("van-popup",{attrs:{"close-icon":"close",position:"top"},model:{value:t.showVideo,callback:function(a){t.showVideo=a},expression:"showVideo"}},[e("top-bar",{staticClass:"hero-nav fc-w"},[e("div",{staticClass:"fs13 flex1",attrs:{slot:"center"},slot:"center"},[t._v(" DNF"),e("span",{staticClass:"pl8"},[t._v("攻略站")])]),e("router-link",{staticClass:"more fs12",attrs:{slot:"right",to:"/",tag:"div"},slot:"right"},[t._v("更多英雄"),e("span",{staticClass:"arrow-r fs20"},[t._v(">")])])],1),e("div",{staticClass:"hero-video-container"},[e("div",{staticClass:"title d-flex"},[e("i",{staticClass:"arrow-l",on:{click:function(a){t.showVideo=!1}}}),e("strong",{staticClass:"video-title"},[t._v(t._s(t.heroData.shipin.title))])]),e("div",{staticClass:"video"},[e("video",{attrs:{src:t.heroData.shipin.video,controls:""}})]),e("div",{staticClass:"video-info"},[e("img",{staticClass:"hero-avatar",attrs:{src:s("21c6"),alt:""}}),e("div",{staticClass:"info"},[e("p",{staticClass:"p-title"},[t._v(t._s(t.heroData.shipin.title))]),e("p",{},[t._v(" 投稿："+t._s(t.heroData.shipin.submit)+" 粉丝："+t._s(t.heroData.shipin.fan))]),e("p",{},[t._v("个性签名：")])])]),e("div",{staticClass:"you-like"},[e("span",{staticClass:"icon-related"}),t._v(" 猜您喜欢")])])],1),e("van-popup",{attrs:{position:"top",closeable:"","close-icon":"close"},model:{value:t.showPhoto,callback:function(a){t.showPhoto=a},expression:"showPhoto"}},[e("img",{staticClass:"photo",attrs:{src:t.heroData.photo,alt:""},on:{click:function(a){t.showPhoto=!1}}})]),e("van-popup",{attrs:{position:"top"},model:{value:t.showSkin,callback:function(a){t.showSkin=a},expression:"showSkin"}},[t.heroData.skins?e("div",[e("div",{staticClass:"skins-container"},[e("div",{staticClass:"title d-flex"},[e("i",{staticClass:"arrow-l",on:{click:function(a){t.showSkin=!1}}}),e("strong",{staticClass:"skin-title"},[t._v(t._s(t.heroData.name)+" ·皮肤")])])]),e("van-swipe",{attrs:{autoplay:2e3}},t._l(t.heroData.skins,(function(a,s){return e("van-swipe-item",{key:"7"+s,staticClass:"skin-item"},[e("img",{attrs:{src:a.img}}),e("p",{},[t._v(t._s(a.name))])])})),1)],1):t._e(),0==t.heroData.skins.length?e("div",{staticClass:"tip"},[e("img",{attrs:{src:s("def9"),alt:""}})]):t._e()])],1):t._e()},i=[],n=(s("96cf"),s("1da1")),r=s("735b"),o=s("3750"),l=s("d917"),c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clearfix card bgc-w",class:{padding:t.padding}},[t.title?s("div",{class:{padding:!t.padding}},[s("div",{staticClass:"title p15-0",class:{"title-border":t.titleBorder,mb12:t.titleMargin}},[t._t("icon-l"),s("span",{staticClass:"pl20 fs16",class:{bold:t.bold}},[t._v(t._s(t.title))]),t._t("icon-r"),t._t("img")],2)]):t._e(),t._t("nav"),0!==t.data.length&&t.nav?s("div",{staticClass:"card-nav-bar fc-2 mb15",class:{"nav-border":t.navBorder,"nav-margin":!t.padding,"d-flex":!t.auto,"jc-around":!t.auto,auto:t.auto}},t._l(t.data,(function(a,e){return s("div",{key:e,staticClass:"nav-item fs13",on:{click:function(s){return t.navClick(e,a.name)}}},[s("span",{class:{active:t.currentIndex===e}},[t._v(t._s(a.name?a.name:a))])])})),0):t._e(),t._t("content"),0!==t.data.length?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{"slide-change":t.slideChange}},t._l(t.data,(function(a,e){return s("swiper-slide",{key:e,staticStyle:{padding:"0 0.0082rem"}},[t._t("default",null,{item:a})],2)})),1):t._e(),t._t("bottom")],2)},d=[],u=(s("b0c0"),{name:"Card",data:function(){return{swiperOption:{autoHeight:!0},currentIndex:0,currentTitle:"最新"}},props:{title:{type:String,default:""},data:{type:Array,default:function(){return[]}},nav:{type:Boolean,default:!0},titleBorder:{type:Boolean,default:!1},navBorder:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},around:{type:Boolean,default:!0},bold:{type:Boolean,default:!1},padding:{type:Boolean,default:!0},titleMargin:{type:Boolean,default:!0}},methods:{navClick:function(t,a){this.$refs.mySwiper.swiper.slideTo(t),this.currentTitle=a,this.$emit("cardNavClick",this.currentIndex,this.currentTitle)},slideChange:function(){this.currentIndex=this.$refs.mySwiper.swiper.realIndex,this.currentTitle=this.data[this.currentIndex]&&this.data[this.currentIndex].name,this.$emit("cardNavClick",this.currentIndex,this.currentTitle)}}}),p=u,h=(s("109d"),s("2877")),f=Object(h["a"])(p,c,d,!1,null,"686645ee",null),v=f.exports,_={name:"Hero",props:{id:{required:!0}},computed:{currentSkill:function(){return this.heroData.skills[this.currentIndex]}},components:{TopBar:o["a"],Card:l["a"],Hcard:v},data:function(){return{showPhoto:!1,showSkin:!1,showVideo:!1,heroData:{},scores_name:["难度","技能","攻击","生存"],scores:[],currentIndex:0}},methods:{getHeroById:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["d"])(this.id);case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:for(s in a.data.scores)this.scores.push(a.data.scores[s]);this.heroData=a.data;case 7:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},created:function(){this.getHeroById(),this.$store.commit("hideTopBar"),this.$store.commit("hideNavBbar"),this.isTranslate=!0}},m=_,C=(s("eec5"),Object(h["a"])(m,e,i,!1,null,"dd9b6cf0",null));a["default"]=C.exports},6179:function(t,a,s){},"735b":function(t,a,s){"use strict";s.d(a,"a",(function(){return i})),s.d(a,"f",(function(){return n})),s.d(a,"e",(function(){return r})),s.d(a,"g",(function(){return o})),s.d(a,"c",(function(){return l})),s.d(a,"b",(function(){return c})),s.d(a,"d",(function(){return d}));var e=s("1bab");function i(){return Object(e["a"])({url:"/home/ads"})}function n(){return Object(e["a"])({url:"/home/news"})}function r(){return Object(e["a"])({url:"/home//heros"})}function o(){return Object(e["a"])({url:"/home//videos"})}function l(t){return Object(e["a"])({url:"/home//graphics",params:t})}function c(t){return Object(e["a"])({url:"/home//article/".concat(t)})}function d(t){return Object(e["a"])({url:"/home//hero/".concat(t)})}},a243:function(t,a,s){"use strict";var e=s("1512"),i=s.n(e);i.a},b0c0:function(t,a,s){var e=s("83ab"),i=s("9bf2").f,n=Function.prototype,r=n.toString,o=/^\s*function ([^ (]*)/,l="name";!e||l in n||i(n,l,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},d917:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clearfix card bgc-w",class:{padding:t.padding}},[t.title?s("div",{class:{padding:!t.padding}},[s("div",{staticClass:"title p15-0",class:{"title-border":t.titleBorder,mb12:t.titleMargin}},[t._t("icon-l"),s("span",{staticClass:"pl20 fs16",class:{bold:t.bold}},[t._v(t._s(t.title))]),t._t("icon-r"),t._t("img")],2)]):t._e(),t._t("nav"),0!==t.data.length&&t.nav?s("div",{staticClass:"card-nav-bar fc-2 mb15",class:{"nav-border":t.navBorder,"nav-margin":!t.padding,"d-flex":!t.auto,"jc-between":!t.auto,auto:t.auto}},t._l(t.data,(function(a,e){return s("div",{key:e,staticClass:"nav-item fs13",on:{click:function(s){return t.navClick(e,a.name)}}},[s("span",{class:{active:t.currentIndex===e}},[t._v(t._s(a.name?a.name:a))])])})),0):t._e(),t._t("content"),0!==t.data.length?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{"slide-change":t.slideChange}},t._l(t.data,(function(a,e){return s("swiper-slide",{key:e,staticStyle:{padding:"0 0.0082rem"}},[t._t("default",null,{item:a})],2)})),1):t._e(),t._t("bottom")],2)},i=[],n=(s("b0c0"),{name:"Card",data:function(){return{swiperOption:{autoHeight:!0},currentIndex:0,currentTitle:"最新"}},props:{title:{type:String,default:""},data:{type:Array,default:function(){return[]}},nav:{type:Boolean,default:!0},titleBorder:{type:Boolean,default:!1},navBorder:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},around:{type:Boolean,default:!0},bold:{type:Boolean,default:!1},padding:{type:Boolean,default:!0},titleMargin:{type:Boolean,default:!0}},methods:{navClick:function(t,a){this.$refs.mySwiper.swiper.slideTo(t),this.currentTitle=a,this.$emit("cardNavClick",this.currentIndex,this.currentTitle)},slideChange:function(){this.currentIndex=this.$refs.mySwiper.swiper.realIndex,this.currentTitle=this.data[this.currentIndex]&&this.data[this.currentIndex].name,this.$emit("cardNavClick",this.currentIndex,this.currentTitle)}}}),r=n,o=(s("a243"),s("2877")),l=Object(o["a"])(r,e,i,!1,null,"99f31fe8",null);a["a"]=l.exports},def9:function(t,a,s){t.exports=s.p+"img/tip.c15b85be.png"},eec5:function(t,a,s){"use strict";var e=s("3ef8"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-7bb1abbc.b36f62d7.js.map