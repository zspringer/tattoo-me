webpackJsonp([0],{"/KFX":function(t,a,s){"use strict";function e(t){s("mgT0")}var n=s("AHJT"),o=s("C0Fz"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-65ad3460",null);a.a=c.exports},"02tQ":function(t,a){},"0aV6":function(t,a,s){"use strict";function e(t){s("LB0q")}var n=s("b4Gn"),o=s("j7sN"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-18178b5d",null);a.a=c.exports},"0m1V":function(t,a,s){"use strict";function e(t){s("02tQ")}var n=s("9B/p"),o=s("n/Tc"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-37b64901",null);a.a=c.exports},"1cvB":function(t,a){},"3GFY":function(t,a,s){"use strict";a.a={name:"artistgallery",props:["cardProp"],data:function(){return{}},mounted:function(){},methods:{zoomIn:function(t){this.$store.dispatch("zoomIn",t)},addFav:function(t){this.$store.dispatch("addFav",t)},deleteFav:function(t){this.$store.dispatch("deleteFav",t)},upvote:function(t){this.$store.dispatch("upvote",t)}}}},"4SLC":function(t,a,s){"use strict";function e(t){s("1cvB")}var n=s("FCkj"),o=s("D8Cu"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-119b525a",null);a.a=c.exports},"9B/p":function(t,a,s){"use strict";a.a={name:"mobile",data:function(){return{}},computed:{card:function(){return this.$store.state.mobileView}},components:{},methods:{addFav:function(t){this.$store.dispatch("addFav",t)},deleteFav:function(t){this.$store.dispatch("deleteFav",t)}}}},AHJT:function(t,a,s){"use strict";var e=s("rhdv");a.a={name:"search",data:function(){return{query:""}},methods:{search:function(){this.$store.dispatch("search",this.query)}},computed:{results:function(){return this.$store.state.results}},components:{Card:e.a}}},C0Fz:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("form",{attrs:{type:"submit"},on:{submit:function(a){a.preventDefault(),t.search()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.query},on:{input:function(a){a.target.composing||(t.query=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"res"},t._l(t.results,function(t){return s("div",[s("card",{attrs:{cardProp:t}})],1)}))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[!t.results.length>0?s("div",[s("h2",[t._v("No Results")])]):t._e()])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},D8Cu:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mobile"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[t.card.favorite?s("div",[s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/favorites"}},[s("button",{staticClass:"btn btn default glyphicon glyphicon-menu-left"})]),t._v(" "),s("button",{staticClass:"btn btn-default glyphicon glyphicon-usd"})],1)]):s("div",[s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/home"}},[s("button",{staticClass:"btn btn default glyphicon glyphicon-menu-left"})]),t._v(" "),s("button",{staticClass:"btn btn-default glyphicon glyphicon-usd"})],1)]),t._v(" "),t.card.favorite?s("div",[s("div",{staticClass:"col-xs-offset-7 col-xs-2"},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-remove",on:{click:function(a){t.deleteFav(t.card)}}})])]):s("div",[s("div",{staticClass:"col-xs-offset-7 col-xs-2"},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-ok-circle",on:{click:function(a){t.addFav(t.card)}}})])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("img",{attrs:{src:t.card.url,alt:"image"}})])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},FCkj:function(t,a,s){"use strict";a.a={name:"mobile",data:function(){return{}},computed:{card:function(){return this.$store.state.mobileView}},components:{},methods:{addFav:function(t){this.$store.dispatch("addFav",t)},deleteFav:function(t){this.$store.dispatch("deleteFav",t)}}}},FFp4:function(t,a,s){"use strict";function e(t){s("Yn4J")}var n=s("NMXa"),o=s("mTyJ"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-7a30acca",null);a.a=c.exports},Fs8J:function(t,a,s){"use strict";var e=s("rhdv");a.a={name:"home",data:function(){return{}},methods:{},computed:{activeCards:function(){return this.$store.state.activeCards}},mounted:function(){this.$store.dispatch("getTattoos")},components:{Card:e.a}}},GGG7:function(t,a){},GpeZ:function(t,a,s){"use strict";var e=s("r9qy"),n=s("VU/8"),o=n(e.a,null,null,null,null);a.a=o.exports},HpJ1:function(t,a,s){t.exports=s.p+"static/img/Tattoo-me.53048bc.png"},IcnI:function(t,a,s){"use strict";var e=s("mtWM"),n=s.n(e),o=s("7+uW"),i=s("NYxO"),r=s("YaEn"),c=!window.location.host.includes("localhost"),l=c?"//tattoo-me.herokuapp.com/":"//localhost:3000/",u=n.a.create({baseURL:l+"api/",timeout:4e4,withCredentials:!0}),d=n.a.create({baseURL:l,timeout:4e3,withCredentials:!0});o.a.use(i.a);var v=new i.a.Store({state:{activeCards:[],mobileView:[],results:[],favorites:[],userInfo:{},gallery:[]},mutations:{zoomIn:function(t,a){t.mobileView=a},setResults:function(t,a){t.activeCards=a},setSearchResults:function(t,a){t.results=a},setFavs:function(t,a){for(var s=a.data.data,e=0;e<s.length;e++){s[e].favorite=!0}t.favorites=s},setInfo:function(t,a){t.userInfo=a,console.log(t.userInfo)},setGallery:function(t,a){t.gallery=a},handleError:function(t,a){t.error=a}},actions:{getArtistGallery:function(t){var a=t.commit;t.dispatch;u("my-designs").then(function(t){a("setGallery",t.data.data)}).catch(function(){return console.log("error")})},zoomIn:function(t,a){var s=t.commit;t.dispatch;s("zoomIn",a)},search:function(t,a){var s=t.commit,e=(t.dispatch,a.toLowerCase().replace(/\s+/g,","));u("tattoos/search/tags/?tags="+e).then(function(t){s("setSearchResults",t.data.data)}).catch(function(){return console.log("error")})},login:function(t,a){var s=t.commit;t.dispatch;d.post("login",a).then(function(t){return"Invalid Email or Password"==t.data.message?console.log(t.data.message):(s("setInfo",t.data.data),r.a.push("home"),console.log(t.data.message))}).catch(function(){return console.log("error")})},register:function(t,a){var s=t.commit;t.dispatch;d.post("register",a).then(function(t){t.data.message?(s("setInfo",t.data.data),console.log("account created"),r.a.push("home")):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},logout:function(t){var a=(t.commit,t.dispatch);d.delete("logout").then(function(t){console.log(t.data.message),a("getAuth")}).catch(function(){return console.log("error")})},getAuth:function(t){var a=t.commit;t.dispatch;d("authenticate").then(function(t){if(!t.data.data)return r.a.push("/");a("setInfo",t.data.data),r.a.push("home")}).catch(function(t){console.log(t),r.a.push("/")})},sendDesign:function(t,a){var s=this,e=t.commit,n=(t.dispatch,a[0].tags.split(/\s+/));a[0].tags=[],u.post("tattoo/upload",a[0]).then(function(t){console.log("uploaded i think",t);var a=t.data.data._id;n.forEach(function(t){u.post("tags",{name:t}).then(function(t){u.put("tattoos/"+a+"/update",{tag:t.data.data._id}).then(function(t){console.log("Tagged tattoo:",t.data.data)}).catch(function(t){e("handleError",t)})}).catch(function(t){e("handleError",t)})},s)}).catch(function(t){e("handleError",t)})},upvote:function(t,a){var s=t.commit,e=t.dispatch;console.log("tattoo",a),u.put("tattoos/"+a+"/like").then(function(t){e("getTattoos")}).catch(function(t){s("handleError",t)})},getTattoos:function(t){var a=t.commit;t.dispatch;u("tattoos").then(function(t){a("setResults",t.data.data)}).catch(function(t){a("handleError",t)})},getFavs:function(t){var a=t.commit;t.dispatch;u("favorites").then(function(t){a("setFavs",t)})},addFav:function(t,a){var s=t.commit,e=t.dispatch,n={favorite:a._id};u.put("favorites",n).then(function(t){e("getFavs"),e("getTattoos")}).catch(function(t){s("handleError",t)})},deleteFav:function(t,a){var s=t.commit,e=t.dispatch,n={favorite:a._id};u.put("favorites/"+n.favorite).then(function(t){return e("getFavs"),e("getTattoos"),r.a.push("/favorites")}).catch(function(t){s("handleError",t)})},handleError:function(t,a){var s=t.commit;t.dispatch;s("handleError",a)}}});a.a=v},JO3F:function(t,a,s){"use strict";a.a={name:"navbar",data:function(){return{}}}},KMNp:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"add"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("form",{on:{submit:function(a){a.preventDefault(),t.openCloud(a)}}},[s("div",{staticClass:"form-group"},[s("button",{attrs:{id:"upload_widget_opener"}},[t._v("Upload Image")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags"},domProps:{value:t.tags},on:{input:function(a){a.target.composing||(t.tags=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"decimal",placeholder:"$"},domProps:{value:t.price},on:{input:function(a){a.target.composing||(t.price=a.target.value)}}})])])])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},LB0q:function(t,a){},M93x:function(t,a,s){"use strict";function e(t){s("GGG7")}var n=s("xJD8"),o=s("vl83"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,null,null);a.a=c.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n=s("M93x"),o=s("YaEn"),i=s("IcnI");e.a.config.productionTip=!0,new e.a({el:"#app",router:o.a,store:i.a,template:"<App/>",components:{App:n.a}})},NMXa:function(t,a,s){"use strict";var e=s("rhdv");a.a={name:"options",data:function(){return{}},methods:{},computed:{activeCards:function(){return this.$store.state.activeCards}},mounted:function(){this.$store.dispatch("getTattoos")},components:{Card:e.a}}},NU23:function(t,a,s){"use strict";a.a={name:"card",props:["cardProp"],data:function(){return{}},mounted:function(){},methods:{zoomIn:function(t){this.$store.dispatch("zoomIn",t)},addFav:function(t){this.$store.dispatch("addFav",t)},deleteFav:function(t){this.$store.dispatch("deleteFav",t)},upvote:function(t){this.$store.dispatch("upvote",t)}}}},OMmu:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"profile"},["regular"==t.info.accountType?s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h2",[t._v("\n                        "+t._s(t.info.name)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"col-xs-12"},[s("h2",[t._v("\n                        "+t._s(t.info.email)+"\n                    ")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:void 0==!t.info.purchased,expression:"!info.purchased == undefined"}]},[s("div",{staticClass:"col-xs-12"},[t._v("\n                        "+t._s(t.info.purchased)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"col-xs-12"},[s("button",{staticClass:"btn btn-default",on:{click:function(a){t.logout()}}},[t._v("Logout")])])])])]):s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-4"},[s("img",{attrs:{src:t.info.url,alt:"profile picture"}})]),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[t._v("\n                            "+t._s(t.info.name)+"\n                        ")]),t._v(" "),s("div",{staticClass:"col-xs-12"},[t._v("\n                            "+t._s(t.info.email)+"\n                        ")])])]),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("button",{staticClass:"btn btn-default",on:{click:function(a){t.logout()}}},[t._v("Logout")])])]),t._v(" "),s("hr"),t._v(" "),t._m(0),t._v(" "),s("hr"),t._v(" "),t._l(t.gallery,function(t){return s("div",[s("artistgallery",{attrs:{cardProp:t}})],1)})],2)])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h1",[t._v("My Gallery")])])])}],o={render:e,staticRenderFns:n};a.a=o},Pnfu:function(t,a){},QAWD:function(t,a){},RcId:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-offset-2 col-xs-3"},[s("h2",{staticClass:"words"},[t._v("Log In")]),t._v(" "),s("form",{on:{submit:function(a){a.preventDefault(),t.login(a)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.logEmail,expression:"logEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.logEmail},on:{input:function(a){a.target.composing||(t.logEmail=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.logPassword,expression:"logPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.logPassword},on:{input:function(a){a.target.composing||(t.logPassword=a.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Login")])])])]),t._v(" "),s("div",{staticClass:"col-xs-offset-2 col-xs-3"},[s("div",{staticClass:"text-center"},[s("h2",{staticClass:"words"},[t._v("Register")]),t._v(" "),s("form",{on:{submit:function(a){a.preventDefault(),t.register(a)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),s("div",{staticClass:"check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"one",value:"regular"},domProps:{checked:t._q(t.picked,"regular")},on:{__c:function(a){t.picked="regular"}}}),t._v(" "),s("label",{attrs:{for:"one"}},[t._v("Regular")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"two",value:"artist"},domProps:{checked:t._q(t.picked,"artist")},on:{__c:function(a){t.picked="artist"}}}),t._v(" "),s("label",{attrs:{for:"two"}},[t._v("Artist")])]),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Register")])])])])])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},RpkI:function(t,a,s){"use strict";function e(t){s("ZJKe")}var n=s("3GFY"),o=s("v9Vw"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-e03439fa",null);a.a=c.exports},RxCb:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[s("div",{staticClass:"col-xs-4"},[s("div",{staticClass:"card main"},[s("div",{staticClass:"card-block"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("img",{attrs:{src:t.cardProp.url,alt:"image"}})])]),t._v(" "),s("div",{staticClass:"row"},[t.cardProp.favorite?s("div",[s("div",{staticClass:"col-xs-2"},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-remove",on:{click:function(a){t.deleteFav(t.cardProp)}}})])]):s("div",[s("div",{staticClass:"col-xs-2"},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-heart",on:{click:function(a){t.addFav(t.cardProp)}}})])]),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/mobile"}},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-zoom-in",on:{click:function(a){t.zoomIn(t.cardProp)}}})])],1),t._v(" "),s("div",{staticClass:"col-xs-4"},[s("button",{staticClass:"btn btn-default"},[t._v("Buy "+t._s(t.cardProp.price))])]),t._v(" "),s("div",{staticClass:"col-xs-4"},[s("button",{staticClass:"vote btn btn-default glyphicon glyphicon-thumbs-up",on:{click:function(a){t.upvote(t.cardProp._id)}}},[t._v(" "+t._s(t.cardProp.likes))])])])])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},UH0w:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("img",{staticClass:"logo",attrs:{src:s("HpJ1")}})]),t._v(" "),e("hr")])])])}],o={render:e,staticRenderFns:n};a.a=o},UcZI:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bar"},[s("nav",{staticClass:"navbar navbar-inverse navbar-fixed-bottom"},[s("ul",[s("div",{staticClass:"col-xs-offset-1 col-xs-2"},[s("router-link",{attrs:{to:"/home"}},[s("li",[s("a",{staticClass:"glyphicon glyphicon-home",attrs:{href:"#"}})])])],1),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/search"}},[s("li",[s("a",{staticClass:"glyphicon glyphicon-search",attrs:{href:"#"}})])])],1),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/options"}},[s("li",[s("a",{staticClass:"glyphicon glyphicon-plus-sign",attrs:{href:"#"}})])])],1),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/favorites"}},[s("li",[s("a",{staticClass:"glyphicon glyphicon-heart",attrs:{href:"#"}})])])],1),t._v(" "),s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/profile"}},[s("li",[s("a",{staticClass:"glyphicon glyphicon-user",attrs:{href:"#"}})])])],1)])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},Uhhc:function(t,a){},VDia:function(t,a){},YaEn:function(t,a,s){"use strict";var e=s("7+uW"),n=s("/ocq"),o=s("lO7g"),i=s("4SLC"),r=s("/KFX"),c=s("xJsL"),l=s("aMNo"),u=s("o9cx"),d=s("FFp4"),v=s("0aV6"),f=s("il+h"),p=s("0m1V");e.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Login",component:c.a},{path:"/artistmobile",name:"Artistmoble",component:p.a},{path:"/add",name:"Add",component:f.a},{path:"/camera",name:"Camera",component:v.a},{path:"/options",name:"Options",component:d.a},{path:"/profile",name:"Profile",component:u.a},{path:"/favorites",name:"Favorites",component:l.a},{path:"/home",name:"Home",component:o.a},{path:"/search",name:"Search",component:r.a},{path:"/mobile",name:"Mobile",component:i.a}]})},Yn4J:function(t,a){},ZJKe:function(t,a){},a45v:function(t,a){},aMNo:function(t,a,s){"use strict";function e(t){s("QAWD")}var n=s("pQ9C"),o=s("sxYX"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-71c71562",null);a.a=c.exports},aNLA:function(t,a,s){"use strict";a.a={name:"add",data:function(){return{file:"",tags:"money",price:.99}},methods:{openCloud:function(){var t=this;cloudinary.openUploadWidget({cloud_name:"tattoo-me",upload_preset:"tattoopng"},function(a,s){s[0].tags=t.tags,s[0].price=t.price,t.$store.dispatch("sendDesign",s)})},addFile:function(){return this.$store.dispatch("addFile",this.file)}},computed:{},mounted:function(){},components:{}}},b4Gn:function(t,a,s){"use strict";var e=s("zvYZ");a.a={name:"camera",data:function(){return{on:!0}},methods:{turnOff:function(){this.on=!this.on,console.log("attempting to turn off");document.querySelector("#cam");console.log("cam",cam),cam.setAttribute("visible",!1),console.log("cam2",cam)},test:function(){console.log("testing the interception")}},computed:{},mounted:function(){this.$refs.vFrame.loadIframe()},components:{VueFrame:e.a}}},"dhL/":function(t,a){},fIT3:function(t,a,s){"use strict";function e(t){s("dhL/")}var n=s("z+5I"),o=s("UH0w"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-59e12ac3",null);a.a=c.exports},gndZ:function(t,a,s){"use strict";function e(t){s("VDia")}var n=s("JO3F"),o=s("UcZI"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-1f7472b0",null);a.a=c.exports},him6:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},t._l(t.activeCards,function(t){return s("div",[s("card",{attrs:{cardProp:t}})],1)}))])])},n=[],o={render:e,staticRenderFns:n};a.a=o},"il+h":function(t,a,s){"use strict";function e(t){s("Pnfu")}var n=s("aNLA"),o=s("KMNp"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-b0e692ce",null);a.a=c.exports},j7sN:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"camera",attrs:{id:"vue-frame"}},[s("vue-frame",{ref:"vFrame",staticClass:"vFrame form-control",attrs:{text:"VueJS",url:"../static/camera.html",frame:"myframe",type:"button"}}),t._v(" "),s("br"),t._v(" "),s("iframe",{attrs:{id:"myframe"}})],1)},n=[],o={render:e,staticRenderFns:n};a.a=o},jkcp:function(t,a){},lO7g:function(t,a,s){"use strict";function e(t){s("a45v")}var n=s("Fs8J"),o=s("him6"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-7958d817",null);a.a=c.exports},mTyJ:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"options"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("router-link",{attrs:{to:"search"}},[s("div",{staticClass:"panel top"},[s("h2",[t._v("Select Image From Gallery")]),t._v(" "),s("h2",{staticClass:"icon glyphicon glyphicon-search"})])])],1),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("router-link",{attrs:{to:"favorites"}},[s("div",{staticClass:"panel top"},[s("h2",[t._v("Choose From Your Favorites")]),t._v(" "),s("h2",{staticClass:"icon glyphicon glyphicon-heart"})])])],1),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("router-link",{attrs:{to:"camera"}},[s("div",{staticClass:"panel bot"},[s("h2",[t._v("Use Your Camera")]),t._v(" "),s("h2",{staticClass:"icon glyphicon glyphicon-camera"})])])],1),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("router-link",{attrs:{to:"add"}},[s("div",{staticClass:"panel bot"},[s("h2",[t._v("Upload Your Design")]),t._v(" "),s("h2",{staticClass:"icon glyphicon glyphicon-picture"})])])],1)])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-xs-12"},[s("h1",{staticClass:"header"},[t._v("Choose From These Options To Add To Your Active Queue")])])}],o={render:e,staticRenderFns:n};a.a=o},mViU:function(t,a){},mgT0:function(t,a){},"n/Tc":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mobile"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/profile"}},[s("button",{staticClass:"btn btn default glyphicon glyphicon-menu-left"})])],1)]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("img",{attrs:{src:t.card.url,alt:"image"}})])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},"nKb+":function(t,a,s){"use strict";a.a={name:"login",data:function(){return{name:"",email:"",password:"",logEmail:"",logPassword:"",picked:""}},methods:{login:function(){var t={email:this.logEmail,password:this.logPassword};this.$store.dispatch("login",t)},logout:function(){this.$store.dispatch("logout")},register:function(){var t={name:this.name,email:this.email,password:this.password,accountType:this.picked};this.$store.dispatch("register",t),name=""}},computed:{loggedIn:function(){return this.$store.state.loggedIn},registering:function(){return this.$store.state.registering},logging:function(){return this.$store.state.logging}}}},o9cx:function(t,a,s){"use strict";function e(t){s("jkcp")}var n=s("yoF/"),o=s("OMmu"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-7d5513a1",null);a.a=c.exports},pQ9C:function(t,a,s){"use strict";var e=s("rhdv");a.a={name:"favorites",data:function(){return{}},methods:{},computed:{favorites:function(){return this.$store.state.favorites}},mounted:function(){return this.$store.dispatch("getFavs")},components:{Card:e.a}}},r9qy:function(t,a,s){"use strict";var e=s("7+uW");a.a=e.a.component("vue-frame",{props:{url:{type:String,required:!0},text:{type:String,required:!0},frame:{type:String,required:!0},type:{type:String,default:"a"}},data:function(){return{}},mounted:function(){},methods:{loadIframe:function(){var t=document.getElementById(this.frame);t.src=this.url,t.onload=function(){}}},render:function(t){return t(this.type,{domProps:{innerHTML:this.text},on:{click:this.loadIframe}})}}),new e.a({name:"vue-frame",el:"#app"})},rhdv:function(t,a,s){"use strict";function e(t){s("mViU")}var n=s("NU23"),o=s("RxCb"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-d4544470",null);a.a=c.exports},sxYX:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"favorites"},[s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"res"},t._l(t.favorites,function(t){return s("div",[s("card",{attrs:{cardProp:t}})],1)}))])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h1",[t._v("Favorites")])])])}],o={render:e,staticRenderFns:n};a.a=o},v9Vw:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"artistgallery"},[s("div",{staticClass:"col-xs-4"},[s("div",{staticClass:"card main"},[s("div",{staticClass:"card-block"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("img",{attrs:{src:t.cardProp.url,alt:"image"}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-2"},[s("router-link",{attrs:{to:"/artistmobile"}},[s("button",{staticClass:"btn btn-default glyphicon glyphicon-zoom-in",on:{click:function(a){t.zoomIn(t.cardProp)}}})])],1),t._v(" "),s("div",{staticClass:"col-xs-4"},[s("button",{staticClass:"vote btn btn-default glyphicon glyphicon-thumbs-up",on:{click:function(a){t.upvote(t.cardProp)}}},[t._v(" "+t._s(t.cardProp.likes))])])])])])])])},n=[],o={render:e,staticRenderFns:n};a.a=o},vl83:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("logo"),t._v(" "),s("router-view"),t._v(" "),s("navbar")],1)},n=[],o={render:e,staticRenderFns:n};a.a=o},xJD8:function(t,a,s){"use strict";var e=s("gndZ"),n=s("fIT3");a.a={name:"app",components:{Navbar:e.a,Logo:n.a},mounted:function(){this.$store.dispatch("getAuth")}}},xJsL:function(t,a,s){"use strict";function e(t){s("Uhhc")}var n=s("nKb+"),o=s("RcId"),i=s("VU/8"),r=e,c=i(n.a,o.a,r,"data-v-60b1dd3e",null);a.a=c.exports},"yoF/":function(t,a,s){"use strict";var e=s("RpkI");a.a={name:"profile",data:function(){return{}},methods:{logout:function(){return this.$store.dispatch("logout")}},computed:{info:function(){return this.$store.state.userInfo},gallery:function(){return this.$store.state.gallery}},components:{Artistgallery:e.a},mounted:function(){return this.$store.dispatch("getArtistGallery")}}},"z+5I":function(t,a,s){"use strict";a.a={name:"logo",data:function(){return{}},computed:{},components:{}}}},["NHnr"]);
//# sourceMappingURL=app.9e5c976c8136ca241e56.js.map