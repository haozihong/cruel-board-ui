(function(e){function t(t){for(var a,r,o=t[0],s=t[1],c=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&f.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;i.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("9f4d")},1:function(e,t,n){e.exports=n("56d7")},1470:function(e,t,n){},2:function(e,t){},"28c2":function(e,t,n){},3:function(e,t){},"49b9":function(e,t,n){e.exports=n.p+"img/YouXiuLogo.a3266f82.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("acb6"),n("450d");var a=n("c673"),l=n.n(a),i=(n("e3ea"),n("7bc3")),r=n.n(i),o=(n("fd71"),n("a447")),s=n.n(o),c=(n("bdc7"),n("aa2f")),u=n.n(c),d=(n("de31"),n("c69e")),f=n.n(d),p=(n("a769"),n("5cc3")),b=n.n(p),h=(n("a673"),n("7b31")),g=n.n(h),m=(n("adec"),n("3d2d")),v=n.n(m),k=(n("f4f9"),n("c2cc")),y=n.n(k),_=(n("7a0f"),n("0f6c")),w=n.n(_),x=(n("b5c2"),n("20cf")),C=n.n(x),V=(n("b84d"),n("c216")),S=n.n(V),R=(n("8f24"),n("76b9")),N=n.n(R),I=(n("0c67"),n("299c")),T=n.n(I),j=(n("5466"),n("ecdf")),D=n.n(j),O=(n("38a0"),n("ad41")),E=n.n(O),M=(n("ae26"),n("845f")),A=n.n(M),B=(n("1951"),n("eedf")),P=n.n(B),z=(n("6611"),n("e772")),L=n.n(z),F=(n("1f1a"),n("4e4b")),q=n.n(F),G=(n("d4df"),n("7fc1")),H=n.n(G),Y=(n("c526"),n("1599")),$=n.n(Y),Q=(n("560b"),n("dcdc")),X=n.n(Q),Z=(n("a7cc"),n("df33")),J=n.n(Z),K=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",[n("Header")],1),n("el-main",[n("CruelBoardTable",{staticStyle:{height:"100%"}})],1)],1)],1)},W=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header"}},[a("el-link",{attrs:{id:"logo-title",href:"https://wisdompeak.github.io/lc-score-board/",target:"_blank",underline:!1}},[a("div",[a("img",{attrs:{src:n("49b9"),alt:"logo"}}),a("h1",{staticClass:"hidden-xs-only"},[e._v("残酷刷题群")])])]),a("div",{attrs:{id:"links"}},[a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{underline:!1},on:{click:function(t){e.joiningInfoVisible=!0}}},[e._v("入群")]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{underline:!1},on:{click:function(t){e.rulesVisible=!0}}},[e._v("群规")]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{href:"https://bit.ly/2X0NW4e",target:"_blank",icon:"el-icon-link"}},[e._v("每日题列表")]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{underline:!1},on:{click:function(t){e.otherInfoVisible=!0}}},[e._v("其他链接")]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{underline:!1},on:{click:function(t){e.curveFormVisible=!0}}},[e._v("统计")])],1),a("el-dialog",{attrs:{title:"入群割韭菜",visible:e.joiningInfoVisible,center:""},on:{"update:visible":function(t){e.joiningInfoVisible=t}}},[a("p",[e._v("\n      If you are interested in joining this group, please contact:\n      "),a("el-link",{attrs:{type:"primary",icon:"el-icon-message",href:"mailto:guan.huifeng@gmail.com"}},[e._v("guan.huifeng@gmail.com")]),e._v(".\n    ")],1),a("p",[e._v("\n      Make sure you agree with our "),a("el-link",{attrs:{type:"primary",href:"https://wisdompeak.github.io/lc-score-board/rules.html",target:"_blank"}},[e._v("terms and regulations")]),e._v(".\n      Think twice before you apply.\n    ")],1),a("p",[e._v("\n      ["),a("el-link",{attrs:{type:"danger",href:"https://wisdompeak.github.io/lc-score-board/Blacklist/Darren_Zang.html",target:"_blank"}},[e._v("Blacklisted Persons")]),e._v("]\n    ")],1)]),a("el-dialog",{attrs:{visible:e.rulesVisible,center:""},on:{"update:visible":function(t){e.rulesVisible=t}}},[a("template",{slot:"title"},[a("a",{staticClass:"el-dialog__title",attrs:{href:"https://board.cruelcoding.com/rules.html",target:"_blank"}},[a("i",{staticClass:"el-icon-link"}),e._v(" 群规\n      ")])]),a("iframe",{attrs:{src:"https://board.cruelcoding.com/rules.html",frameborder:"0",width:"100%",height:"600px"}})],2),a("el-dialog",{attrs:{title:"其他链接",width:"40%",visible:e.otherInfoVisible,center:""},on:{"update:visible":function(t){e.otherInfoVisible=t}}},[a("p",[a("el-link",{attrs:{type:"danger",href:"https://wisdompeak.github.io/lc-score-board/rules.html",target:"_blank"}},[e._v("\n      群规\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://docs.google.com/presentation/d/11Vv8RnbGZm8hQEa9T6DhxtMtsBknI1Io0nfcFVVOYUw/",target:"_blank"}},[e._v("\n      Happy New Year! See 2020 Year-end Review! 残酷群2020年会\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://wisdompeak.github.io/lc-score-board/cup.html",target:"_blank"}},[e._v("\n      Looking for more challenges? Try Wisdom Cup!\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://wisdompeak.github.io/lc-score-board/resources.html",target:"_blank"}},[e._v("\n      Recommended resources\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://www.google.com/maps/d/viewer?mid=1c1t3qKsKxTTnDD_P2BsFsrL7p8l9Bou8",target:"_blank"}},[e._v("\n      See where we are from\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://wisdompeak.github.io/lc-score-board/sd.html",target:"_blank"}},[e._v("\n      Cruel System Design Group 残酷系统设计群\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://wisdompeak.github.io/lc-score-board/graduates.html",target:"_blank"}},[e._v("\n      Graduated members and archived scores\n    ")])],1),a("p",[a("el-link",{attrs:{type:"primary",href:"https://faq.cruelcoding.com/",target:"_blank"}},[e._v("\n      FAQ\n    ")])],1)]),a("el-dialog",{attrs:{title:"统计（点击看大图）",visible:e.curveFormVisible,center:""},on:{"update:visible":function(t){e.curveFormVisible=t}}},[a("el-image",{attrs:{src:"https://board.cruelcoding.com/Img/curve.png",fit:"contain","preview-src-list":["https://board.cruelcoding.com/Img/curve.png"]}})],1)],1)},te=[],ne={name:"Header",data:function(){return{joiningInfoVisible:!1,rulesVisible:!1,otherInfoVisible:!1,curveFormVisible:!1}}},ae=ne,le=(n("86dd"),n("2877")),ie=Object(le["a"])(ae,ee,te,!1,null,"3b4c2d6a",null),re=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{height:"2rem","white-space":"nowrap"},attrs:{id:"boardCheckboxGroup"}},[n("el-checkbox",{attrs:{label:"残酷排名",size:"mini"},model:{value:e.cruelRankingColVisible,callback:function(t){e.cruelRankingColVisible=t},expression:"cruelRankingColVisible"}}),n("el-checkbox",{attrs:{label:"Days",size:"mini"},model:{value:e.daysColVisible,callback:function(t){e.daysColVisible=t},expression:"daysColVisible"}}),n("el-checkbox",{attrs:{label:"工号",size:"mini"},model:{value:e.workNumColVisible,callback:function(t){e.workNumColVisible=t},expression:"workNumColVisible"}}),n("el-checkbox",{attrs:{label:"LC Rating",size:"mini"},model:{value:e.ratingColVisible,callback:function(t){e.ratingColVisible=t},expression:"ratingColVisible"}}),n("el-checkbox",{attrs:{size:"mini",value:!0}},[e._v("\n      显示最近\n      "),n("el-select",{staticStyle:{width:"60px"},attrs:{"allow-create":"",filterable:"","default-first-option":"",size:"mini"},model:{value:e.contestsShowingNumRaw,callback:function(t){e.contestsShowingNumRaw=t},expression:"contestsShowingNumRaw"}},e._l(e.contestsNumOptions,(function(e){return n("el-option",{key:e,attrs:{value:e}})})),1),e._v("\n      场周赛\n    ")],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{id:"boardTable",data:e.qunyouData,"row-style":{height:"30px"},"cell-style":{padding:"0"},"header-row-style":{height:"40px"},"header-cell-style":{padding:"0px"},stripe:"",height:"calc(100% - 1.8rem)","default-sort":{prop:"cruelScore",order:"ascending"}}},[n("el-table-column",{attrs:{type:"index"}}),e.cruelRankingColVisible?n("el-table-column",{attrs:{align:"center",prop:"cruelRanking",label:"残酷排名",width:"48"}},[n("template",{slot:"header"},[n("div",{staticStyle:{"font-size":"13px","line-height":"1.3"}},[e._v("残酷排名")])])],2):e._e(),n("el-table-column",{attrs:{label:"LC ID",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("a",{attrs:{href:t.row.lcLink}},[e._v(e._s(""+t.row.lcId))])]}}])}),e.daysColVisible?n("el-table-column",{attrs:{align:"center",prop:"days",label:"Days",width:"80",sortable:""}}):e._e(),e.workNumColVisible?n("el-table-column",{attrs:{align:"center",prop:"workNum",label:"工号",width:"80",sortable:""}}):e._e(),e.ratingColVisible?n("el-table-column",{attrs:{align:"center",prop:"lcRating",label:"Rating",width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{style:"color: #"+(t.row.lcRating>=2100?"A30000":"0426A4")},[e._v("\n          "+e._s(t.row.lcRating)+"\n        ")])]}}],null,!1,2370465636)}):e._e(),n("el-table-column",{attrs:{align:"center",prop:"cruelScore",label:"滚动积分",width:"100",sortable:"","sort-by":"cruelRanking","sort-orders":["ascending","descending"]}}),e._l(e.contestsShowingNum<e.contests.length?e.contestsShowingNum:e.contests.length,(function(t){return n("el-table-column",{key:t,attrs:{align:"center",prop:"contest"+e.contests[t-1].contestIndex+"Ranking",label:e.contests[t-1].contestIndex+" ("+e.contests[t-1].participantNum+")",sortable:"",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[n("el-tooltip",{attrs:{disabled:e.colorTipDisabled,effect:"light",placement:"left",transition:"el-fade-in",enterable:!1,"open-delay":1e3}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("深绿色 4 题"),n("br"),e._v("鲜绿色 3 题"),n("br"),e._v("亮黄色 2 题"),n("br"),e._v("杏仁白 1 题")]),n("div",{style:"background: #"+a.row.contestRankings[t-1].rankingClr+"; color: black",on:{click:function(t){e.colorTipDisabled=!e.colorTipDisabled}}},[e._v("\n            "+e._s(-2===a.row.contestRankings[t-1].attendance?"未入群":-1===a.row.contestRankings[t-1].attendance?"缺赛":a.row.contestRankings[t-1].ranking+" | "+a.row.contestRankings[t-1].score)+"\n          ")])])]}}],null,!0)},[n("template",{slot:"header"},[n("span",{staticStyle:{display:"inline-block"}},[n("div",{staticStyle:{"font-size":"13px","line-height":"1.3"}},[e._v(e._s(e.contests[t-1].contestIndex)+"场")]),n("div",{staticStyle:{"font-size":"11px","line-height":"1.1"}},[e._v(e._s(e.contests[t-1].participantNum)+"人")])])])],2)}))],2)],1)},se=[],ce=(n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("fb6a"),n("4e82"),n("159b"),n("1146")),ue=n.n(ce),de=3,fe=8,pe={name:"CruelBoardTable",data:function(){return{daysColVisible:!1,workNumColVisible:!1,ratingColVisible:!0,cruelRankingColVisible:!1,contestsShowingNumRaw:de,colorTipDisabled:!1,contests:[],qunyouData:[]}},computed:{contestsShowingNum:function(){return Math.max(de,Math.min(this.contests.length,this.contestsShowingNumRaw))},contestsNumOptions:function(){for(var e=[de],t=Math.round(this.contests.length/fe),n=1;n<=t;++n)e.push(Math.round((this.contests.length-de)/t*n)+de);return e}},methods:{},mounted:function(){var e=this;this.axios.get("./lc-score-board/generateEXCEL/index.xlsx",{responseType:"arraybuffer",headers:{"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"}}).then((function(t){var n=new Uint8Array(t.data),a=ue.a.read(n,{type:"array",cellStyles:!0}),l=a.Sheets[a.SheetNames[0]],i=0;while(void 0===l[ue.a.utils.encode_cell({c:0,r:i})])++i;for(var r=5,o=r;void 0!==l[ue.a.utils.encode_cell({r:i-3,c:o})];o+=2)e.contests.push({id:e.contests.length,contestIndex:l[ue.a.utils.encode_cell({r:i-3,c:o})].v,participantNum:l[ue.a.utils.encode_cell({r:i-2,c:o})].v});for(var s=[],c=i;void 0!==l["A".concat(c+1)];++c){var u,d,f={cruelRanking:l["A".concat(c+1)].v,lcId:l["B".concat(c+1)].v,lcLink:l["B".concat(c+1)].l.Rel.Target,days:l["C".concat(c+1)].v,workNum:0,lcRating:l["D".concat(c+1)].v,cruelScore:l["E".concat(c+1)].v,contestRankings:[],company:null!==(u=null===(d=l[ue.a.utils.encode_cell({r:c,c:5+2*e.contests.length})])||void 0===d?void 0:d.v.slice(0,-5))&&void 0!==u?u:""};s.push(f.days);for(var p=0;p<e.contests.length;++p){var b,h,g=l[ue.a.utils.encode_cell({r:c,c:5+2*p})].v,m=null!==(b=null===(h=l[ue.a.utils.encode_cell({r:c,c:5+2*p})].s.fgColor)||void 0===h?void 0:h.rgb)&&void 0!==b?b:"EAEAEA",v=l[ue.a.utils.encode_cell({r:c,c:6+2*p})].v;f["contest".concat(e.contests[p].contestIndex,"Ranking")]=g<0?1/0:g,f.contestRankings.push({ranking:g<0?1/0:g,rankingClr:m,score:v,attendance:g})}e.qunyouData.push(f)}s.sort((function(e,t){return t-e}));for(var k={},y=0;y<s.length;++y)s[y]in k||(k[s[y]]=y+1);e.qunyouData.forEach((function(e){return e.workNum=k[e.days]}))}))}},be=pe,he=(n("d1cd"),n("b571"),Object(le["a"])(be,oe,se,!1,null,"3e8041da",null)),ge=he.exports,me={name:"App",components:{Header:re,CruelBoardTable:ge}},ve=me,ke=(n("034f"),Object(le["a"])(ve,U,W,!1,null,null,null)),ye=ke.exports,_e=(n("0fae"),n("e05f"),n("bc3a")),we=n.n(_e),xe=n("2106"),Ce=n.n(xe),Ve=n("a584");K["default"].use(J.a),K["default"].use(X.a),K["default"].use($.a),K["default"].use(H.a),K["default"].use(q.a),K["default"].use(L.a),K["default"].use(P.a),K["default"].use(A.a),K["default"].use(E.a),K["default"].use(D.a),K["default"].use(T.a),K["default"].use(N.a),K["default"].use(S.a),K["default"].use(C.a),K["default"].use(w.a),K["default"].use(y.a),K["default"].use(v.a),K["default"].use(g.a),K["default"].use(b.a),K["default"].use(f.a),K["default"].use(u.a),K["default"].use(s.a),K["default"].use(r.a),K["default"].use(l.a),K["default"].use(Ce.a,we.a),K["default"].use(Ve["a"],{config:{id:"G-E2QRC2LZ7M"}}),K["default"].config.productionTip=!1,new K["default"]({render:function(e){return e(ye)}}).$mount("#app")},"86dd":function(e,t,n){"use strict";n("1470")},"9f4d":function(e,t,n){},b571:function(e,t,n){"use strict";n("d508")},d1cd:function(e,t,n){"use strict";n("28c2")},d508:function(e,t,n){}});
//# sourceMappingURL=app.2d276fe8.js.map