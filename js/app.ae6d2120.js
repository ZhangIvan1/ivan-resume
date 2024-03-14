(function(){"use strict";var n={5346:function(n,t,e){var r=e(6369),o=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},i=[],s=function(){var n=this,t=n._self._c;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}}),t("div",{on:{click:function(t){return n.test()}}},[n._v("test")])])},l=[],u=e(187),a=e.n(u),c={name:"StyleEditor",props:["code"],computed:{highlightedCode:function(){return a().highlight(this.code,a().languages.css)},codeInStyleTag:function(){return`<style>${this.code}</style>`}},methods:{goBottom(){this.$refs.container.scrollTop=1e5},test(){console.warn("test-test",this.codeInStyleTag),console.warn("test-5",a().highlight(this.code,a().languages.css))}}},d=c,h=e(1001),m=(0,h.Z)(d,s,l,!1,null,"72e9e815",null),f=m.exports,g=function(){var n=this,t=n._self._c;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},p=[],w=e(5068),v={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?(0,w.TU)(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}},y=v,b=(0,h.Z)(y,g,p,!1,null,"86939056",null),k=b.exports,E={name:"App",components:{StyleEditor:f,ResumeEditor:k},data(){return{interval:0,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 最近看到一个很好玩的库\n* 身为front end engineer, 终生学习者。\n* 我也来学习一波，也来写一份自我介绍吧！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写自我介绍了 */\n\n\n","\n/* 这个自我介绍好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 读者 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"李维涛\n----\n\n我觉得自己的标签： 前端开发里最爱篮球的一部分人\n\n技能\n----\n\n* 前端开发\n* 中距离投篮\n* 善于交流分享开心\n\n爱情经历\n----\n\n1. 高中校园爱情到至今\n\n链接\n----\n\n* [GitHub](https://github.com/weitao-Li)\n"}},created(){this.makeResume()},methods:{makeResume:async function(){await this.progressivelyShowStyle(0),await this.progressivelyShowResume(),await this.progressivelyShowStyle(1),await this.showHtml(),await this.progressivelyShowStyle(2)},showHtml:function(){return new Promise(((n,t)=>{this.enableHtml=!0,n()}))},progressivelyShowStyle(n){return new Promise(((t,e)=>{let r=this.interval,o=async function(){let e=this.fullStyle[n];if(!e)return;let i=this.fullStyle.filter(((t,e)=>e<=n)).map((n=>n.length)).reduce(((n,t)=>n+t),0),s=i-e.length;if(this.currentStyle.length<i){let n=this.currentStyle.length-s,t=e.substring(n,n+1)||" ";this.currentStyle+=t,"\n"===e.substring(n-1,n)&&this.$refs.styleEditor&&this.$nextTick((()=>{this.$refs.styleEditor.goBottom()})),setTimeout(o,r)}else t()}.bind(this);o()}))},progressivelyShowResume(){return new Promise(((n,t)=>{let e=this.fullMarkdown.length,r=this.interval,o=()=>{if(this.currentMarkdown.length<e){this.currentMarkdown=this.fullMarkdown.substring(0,this.currentMarkdown.length+1);this.currentMarkdown[this.currentMarkdown.length-1];let n=this.currentMarkdown[this.currentMarkdown.length-2];"\n"===n&&this.$refs.resumeEditor&&this.$nextTick((()=>this.$refs.resumeEditor.goBottom())),setTimeout(o,r)}else n()};o()}))}}},S=E,M=(0,h.Z)(S,o,i,!1,null,null,null),T=M.exports;r.ZP.config.productionTip=!1,new r.ZP({render:n=>n(T)}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var s=1/0;for(c=0;c<n.length;c++){r=n[c][0],o=n[c][1],i=n[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[u])}))?r.splice(u--,1):(l=!1,i<s&&(s=i));if(l){n.splice(c--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,s=r[0],l=r[1],u=r[2],a=0;if(s.some((function(t){return 0!==n[t]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(u)var c=u(e)}for(t&&t(r);a<s.length;a++)i=s[a],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},r=self["webpackChunkwli_resume"]=self["webpackChunkwli_resume"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5346)}));r=e.O(r)})();
//# sourceMappingURL=app.ae6d2120.js.map