(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86a390ba"],{"0467":function(t,e,i){},"0a6c":function(t,e,i){},6128:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-theme-provider",{attrs:{light:""}},[i("v-container",{staticClass:"sample-page pa-0",class:{overlay:t.affected}},[i("v-toolbar",{staticClass:"px-6",attrs:{flat:"",height:150,text:""}},[i("v-img",{staticClass:"basic-logo",attrs:{src:"basic_logo.png"}}),i("v-spacer"),i("v-text-field",{staticClass:"search-input mt-8 mr-4",attrs:{label:"Search",solo:"",flat:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.mdiMagnify))])]},proxy:!0}])}),t.logout?i("v-btn",{staticClass:"affected-element",staticStyle:{background:"white !important"},attrs:{flat:"",text:"",ripple:!1,id:"login",color:"grey"},on:{click:t.logoutTrigger}},[t._v(" Logout ")]):i("v-btn",{staticClass:"affected-element",staticStyle:{background:"white !important"},attrs:{flat:"",text:"",ripple:!1,id:"login",color:"grey"},on:{click:t.loginTrigger}},[t._v(" Access through your institution ")])],1),i("v-col",[i("v-row",{staticClass:"px-3"},[i("v-col",{staticClass:"mt-4",attrs:{cols:"3"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticClass:"px-8 py-0 mt-2"},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"mb-2"},[t._v("KnowledgeWIKI")]),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("Wiki sign")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("Box")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("DNS")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("LNS")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("Drive")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("Play")])])],1),i("v-list-item",[i("v-list-item-content",{staticClass:"inner-content"},[i("a",{attrs:{href:"#"}},[t._v("TCS")])])],1)],1)],1)],1)],1),i("v-col",{staticClass:"mt-4",attrs:{cols:"6"}},[i("v-row",[i("v-col",[i("v-banner",{staticClass:"pl-0 pr-4 py-2"},[i("h3",[t._v("KnowledgeWIKI Support")]),i("br"),i("p",[t._v("On the following pages, you will find information on the different levels of integration available to service providers.")])])],1)],1),i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",flat:""}},[i("v-card-title",[t._v("Card Title")]),i("v-card-text",{staticClass:"pt-4 px-2 pb-0"},[i("p",{staticClass:"text--black"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])],1)],1),i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",flat:""}},[i("v-card-title",[t._v("Card Title")]),i("v-card-text",{staticClass:"pt-4 px-2 pb-0"},[i("p",{staticClass:"text--black"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])],1)],1)],1)],1),i("v-col",{staticClass:"mt-4",attrs:{cols:"3"}},[i("p",{staticClass:"mb-0 mt-3"},[t._v("Important Links")]),i("a",{attrs:{href:"#"}},[t._v("https://knowledgewiki.policy")])])],1)],1)],1)],1)},a=[],n=(i("99af"),i("94ed")),o={name:"CustomLink",props:{affected:{type:Boolean,default:!1},url:{type:String}},data:function(){return{mdiMagnify:n["b"]}},computed:{logout:function(){return!!this.$route.query.login}},methods:{loginTrigger:function(){var t=encodeURIComponent("".concat(this.url,"/custom-link?login=yes"));window.location.href="".concat(this.url,"/Shibboleth.sso/DS/seamless-access?target=").concat(t)},logoutTrigger:function(){window.location.href="".concat(this.url,"/custom-link")}}},c=o,r=(i("63f7"),i("2877")),l=i("6544"),d=i.n(l),u=i("e4e5"),v=i("8336"),h=i("b0af"),m=i("99d9"),p=i("62ad"),f=i("a523"),g=i("132d"),b=i("adda"),C=i("8860"),_=i("da13"),y=i("5d23"),k=i("0fd9"),x=i("2fa4"),w=i("8654"),S=i("480e"),V=i("71d9"),I=Object(r["a"])(c,s,a,!1,null,null,null);e["default"]=I.exports;d()(I,{VBanner:u["a"],VBtn:v["a"],VCard:h["a"],VCardText:m["a"],VCardTitle:m["b"],VCol:p["a"],VContainer:f["a"],VIcon:g["a"],VImg:b["a"],VList:C["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VRow:k["a"],VSpacer:x["a"],VTextField:w["a"],VThemeProvider:S["a"],VToolbar:V["a"]})},"615b":function(t,e,i){},"63f7":function(t,e,i){"use strict";i("0a6c")},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return r}));var s=i("b0af"),a=i("80d2"),n=Object(a["g"])("v-card__actions"),o=Object(a["g"])("v-card__subtitle"),c=Object(a["g"])("v-card__text"),r=Object(a["g"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("0481"),i("615b"),i("10d2")),n=i("297c"),o=i("1c87"),c=i("58df");e["a"]=Object(c["a"])(n["a"],o["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},e4e5:function(t,e,i){"use strict";var s=i("5530"),a=(i("0467"),i("10d2")),n=i("713a"),o=i("9d26"),c=i("0789"),r=i("e4cd"),l=i("f2e7"),d=i("58df"),u=i("80d2");e["a"]=Object(d["a"])(a["a"],r["a"],l["a"]).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=Object(s["a"])({},a["a"].options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(u["f"])(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var t;if(this.hasIcon)return t=this.icon?this.$createElement(o["a"],{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(n["a"],{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(u["l"])(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){return t(c["a"],[t("div",this.setBackgroundColor(this.color,{staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]}),[this.genWrapper()])])}})}}]);
//# sourceMappingURL=chunk-86a390ba.3321730a.js.map