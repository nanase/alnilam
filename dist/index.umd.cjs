(function(o,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(o=typeof globalThis<"u"?globalThis:o||self,s(o.alnilam={},o.Vue))})(this,function(o,s){"use strict";var G=Object.defineProperty;var J=(o,s,m)=>s in o?G(o,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[s]=m;var x=(o,s,m)=>J(o,typeof s!="symbol"?s+"":s,m);function m(t,n){const e=s.getCurrentInstance();if(!e)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return e}const T=Symbol.for("vuetify:theme");function v(){m("useTheme");const t=s.inject(T,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}const f="vuetify-color-scheme";function u(t,n){n==="unspecified"?(t.global.name.value="",document.querySelectorAll(".color-responsive").forEach(e=>{var r;if(e.classList.remove("color-responsive-dark","color-responsive-light"),e instanceof HTMLObjectElement){const i=(r=e.contentDocument)==null?void 0:r.documentElement;i&&i.classList.remove("color-responsive-dark","color-responsive-light")}})):(t.global.name.value=n,document.querySelectorAll(".color-responsive").forEach(e=>{var r;if(n==="light"?(e.classList.add("color-responsive-light"),e.classList.remove("color-responsive-dark")):(e.classList.add("color-responsive-dark"),e.classList.remove("color-responsive-light")),e instanceof HTMLObjectElement){const i=(r=e.contentDocument)==null?void 0:r.documentElement;if(!i)return;n==="light"?(i.classList.add("color-responsive-light"),i.classList.remove("color-responsive-dark")):(i.classList.add("color-responsive-dark"),i.classList.remove("color-responsive-light"))}}))}function p(){return window.matchMedia?window.matchMedia("(prefers-color-scheme: light)").matches?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"unspecified":"unspecified"}function k(t){t.global.current.value.dark?(p()==="light"?localStorage.removeItem(f):localStorage.setItem(f,"light"),u(t,"light")):(p()==="dark"?localStorage.removeItem(f):localStorage.setItem(f,"dark"),u(t,"dark"))}function S(t){const n=localStorage.getItem(f);n==="light"?u(t,"light"):n==="dark"||p()==="dark"?u(t,"dark"):u(t,"light")}const P=s.defineComponent({__name:"ThemeToggleButton",setup(t){const n=v();function e(i){const l=localStorage.getItem(f);l===null?u(n,i.matches?"dark":"light"):(l==="dark"&&i.matches||l==="light"&&!i.matches)&&localStorage.removeItem(f)}function r(){k(n)}return s.onMounted(()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),S(n)}),s.onBeforeUnmount(()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}),(i,l)=>{const c=s.resolveComponent("v-btn"),y=s.resolveComponent("v-tooltip");return s.openBlock(),s.createBlock(y,{text:"テーマを切り替え","aria-label":"テーマを切り替え"},{activator:s.withCtx(({props:w})=>[s.createVNode(c,s.mergeProps({"data-test":"button"},w,{icon:s.unref(n).global.current.value.dark?"mdi-weather-night":"mdi-white-balance-sunny",onClick:r,"aria-label":"テーマを切り替え"}),null,16,["icon"])]),_:1})}}});function b(t,n,e){for(const r of e)if(!(typeof r[t]>"u")&&r[t]===n)return r;return null}function N(t,n,e){return n.map(r=>{const i=b(t,r[t],n),l=b(t,r[t],e);return i==null||l==null?null:{...i,...l}}).filter(r=>r!==null)}function I(t,n){return n==null?t.reduce((e,r)=>e+Number(r),0):t.reduce((e,r)=>e+n(r),0)}function j(t){return t==null||t.length===0}function A(t){return t.some((n,e)=>t.indexOf(n)!==e)}function L(t,n){if(!t)return 0;if(!n)return t.length;let e=0,r=0;for(const i of t)n(i,r,t)&&e++,r++;return e}function B(t,n){if(typeof n>"u"){const e=Array(t);let r=0;for(;r<t;)e[r]=r++;return e}else{const e=Array(n-t);let r=0,i=t;for(;i<n;)e[r++]=i++;return e}}function E(t,n){const e=Array(n);let r=0;for(;r<n;)e[r]=t/n*r++;return e}function V(t){let n=-1/0,e=1/0,r=-1,i=-1,l=0;for(const c of t)c>n&&(n=c,r=l),c<e&&(e=c,i=l),l++;return{max:n,min:e,maxIndex:r,minIndex:i}}function*$(t,n){const e=t.length,r=Array(n).fill(0);for(;;){yield r.map(l=>t[l]);let i=n-1;for(;i>=0&&(r[i]++,!(r[i]<e));)r[i]=0,i--;if(i<0)break}}const d={symbol:"",exponent:0},h=[{symbol:"Q",exponent:30},{symbol:"R",exponent:27},{symbol:"Y",exponent:24},{symbol:"Z",exponent:21},{symbol:"E",exponent:18},{symbol:"P",exponent:15},{symbol:"T",exponent:12},{symbol:"G",exponent:9},{symbol:"M",exponent:6},{symbol:"k",exponent:3},{symbol:"h",exponent:2},{symbol:"da",exponent:1},d,{symbol:"d",exponent:-1},{symbol:"c",exponent:-2},{symbol:"m",exponent:-3},{symbol:"μ",exponent:-6},{symbol:"u",exponent:-6},{symbol:"n",exponent:-9},{symbol:"p",exponent:-12},{symbol:"f",exponent:-15},{symbol:"a",exponent:-18},{symbol:"z",exponent:-21},{symbol:"y",exponent:-24},{symbol:"r",exponent:-27},{symbol:"q",exponent:-30}],a=class a{constructor(n,e){this.fraction=n,this.prefix=e}get actualValue(){return this.fraction*10**this.prefix.exponent}toString(){return`${this.fraction}${this.prefix.symbol}`}toSimpleString(n){return`${Number(this.fraction.toFixed(n))}${this.prefix.symbol}`}toFixed(n){return`${this.fraction.toFixed(n)}${this.prefix.symbol}`}static getPrefixSymbols(n){return h.filter(e=>e.exponent%(n?1:3)===0).map(e=>e.symbol)}static test(n){return a.siValuePattern.test(n??"")}static parse(n){const e=a.siValuePattern.exec(n??"");if(e==null)return new a(Number.NaN,d);const r=Number.parseFloat(e[1]),i=h.find(l=>l.symbol===e[2]);return new a(r,i)}static fit(n,e){if(!Number.isFinite(n)&&e.length===0)return new a(n,d);if(n!==0){const r=Math.sign(n);n=Math.abs(n);const i=e.map(l=>{const c=a.getPrefix(l),y=n*10**-c.exponent,w=Math.abs(y-500);return{prefix:c,practicalValue:y,rank:w}}).sort((l,c)=>l.rank-c.rank);return new a(i[0].practicalValue*r,i[0].prefix)}else return new a(0,d)}static fitBy(n,e){const r=a.getPrefix(e);if(!Number.isFinite(n))return new a(n,r);const i=Math.sign(n);n=Math.abs(n);const l=n*10**-r.exponent;return new a(l*i,r)}static getPrefix(n){const e=h.find(r=>r.symbol===n);if(!e)throw new Error(`Prefix symbol '${n}' is not defined.`);return e}static successor(n,e){const r=a.getPrefix(n),i=h.filter(c=>c.exponent>r.exponent&&c.exponent%(e?1:3)===0);if(i.length===0)return n;const l=i.slice(-1)[0];return i.filter(c=>c.exponent===l.exponent)[0].symbol}static predecessor(n,e){const r=a.getPrefix(n),i=h.filter(l=>l.exponent<r.exponent&&l.exponent%(e?1:3)===0);return i.length===0?n:i[0].symbol}};x(a,"siValuePattern",/^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);let g=a;const F={required:t=>!!t||"値を入力してください",value:t=>Number.isFinite(g.parse(t).fraction)||"不正な値です",notZero:t=>Number(t)!==0||"値を 0 にはできません",notNegative:t=>{const n=g.parse(t);return Number.isFinite(n.fraction)&&n.fraction>=0||"負値にはできません"}};function O(t){return t==null?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}class C{constructor(n){this.obj=n}}function M(t,n){if(typeof t<"u"&&t!=null)for(const e of Object.keys(n))n[e]instanceof C?t[e]=n[e].obj:n[e]===null?t[e]=null:!Array.isArray(n[e])&&typeof n[e]=="object"?t[e]=M(t[e],n[e]):t[e]=n[e];return t}function _(t,n,e,r){return typeof t>"u"||t==null?r:t?n:e}function q(t,n,e){return t!==t&&n!==n?0:t!==t?1:n!==n?-1:t==null&&n==null?0:t==null?1:n==null?-1:t<n?e==="descending"?1:-1:t>n?e==="descending"?-1:1:0}function R(t){return t.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&")}const D=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function H(t){return t.replace(D,(n,e)=>(e=e.toLowerCase(),e==="amp"?"&":e==="colon"?":":e==="quot"?'"':e==="lt"?"<":e==="gt"?">":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}function W(t,n){let e,r;const i=async function(){try{r=await t(),typeof r<"u"&&(e=setTimeout(i,r*1e3))}catch(l){n&&(r=await n(l),typeof r<"u"&&(e=setTimeout(i,r*1e3)))}};s.onMounted(async()=>{await i()}),s.onBeforeUnmount(()=>{clearTimeout(e)})}function z(t,n,e){const r=((e==null?void 0:e.type)??"local")==="local"?localStorage:sessionStorage,i=()=>{typeof t.value<"u"&&r.setItem(n,JSON.stringify(t.value))},l=()=>{const c=r.getItem(n);c!=null&&(t.value=JSON.parse(c))};return((e==null?void 0:e.immediate)??!0)&&((e==null?void 0:e.readable)??!0)&&l(),((e==null?void 0:e.writable)??!0)&&s.watch(()=>t.value,i,{immediate:(e==null?void 0:e.immediate)??!0}),{remove:()=>{r.removeItem(n)},save:i,load:l}}class Z{constructor(n,e){x(this,"_worker",null);this.workerConstructor=n,this.options=e}async invoke(n){return this._worker==null&&(this._worker=new this.workerConstructor(this.options)),await new Promise((e,r)=>{if(this._worker==null){r("worker is not initialized");return}this._worker.onmessage=function(i){e(i.data)},this._worker.onmessageerror=function(i){r(i)},this._worker.postMessage(n)})}get worker(){return this._worker}}o.BaseSIPrefix=d,o.RawObject=C,o.Rules=F,o.SIValue=g,o.ThemeToggleButton=P,o.VuetifyColorSchemeName=f,o.WorkerManager=Z,o.applyColorScheme=u,o.compareWithNull=q,o.count=L,o.deepAssign=M,o.definePeriodicCall=W,o.divide=E,o.empty=j,o.escapeRegex=R,o.existsDuplicate=A,o.findBy=b,o.findMinMax=V,o.generateForDepth=$,o.getPrefersColorScheme=p,o.mergeArrayBy=N,o.reapplyTheme=S,o.sequence=B,o.storage=z,o.sum=I,o.ternary=_,o.toggleTheme=k,o.unescapeHtml=H,o.withCommas=O,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});