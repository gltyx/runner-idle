/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol(),n$7=new WeakMap;class s$3{constructor(t,n,s){if(this._$cssResult$=!0,s!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n;}get styleSheet(){let e=this.o;const s=this.t;if(t$2&&void 0===e){const t=void 0!==s&&1===s.length;t&&(e=n$7.get(s)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n$7.set(s,e));}return e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",void 0,e$5),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,t,e$5)},i$4=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$4=window.trustedTypes,r$1=e$4?e$4.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$3={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$6=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$6};class a$2 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$4(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e,r;const h=this.constructor._$Ep(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$3.toAttribute)(i,s.type);this._$El=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$El=null;}}_$AK(t,i){var s,e;const r=this.constructor,h=r._$Ev.get(t);if(void 0!==h&&this._$El!==h){const t=r.getPropertyOptions(h),n=t.converter,l=null!==(e=null!==(s=null==n?void 0:n.fromAttribute)&&void 0!==s?s:"function"==typeof n?n:null)&&void 0!==e?e:o$3.fromAttribute;this._$El=h,this[h]=l(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$6)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$2}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$3=globalThis.trustedTypes,s$1=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$3=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$3,n$5=`<${o$2}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u=t=>d$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a$1=/>/g,f=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),_=/'/g,g$1=/"/g,m$1=/^(?:script|style|textarea|title)$/i,p$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p$1(1),b$2=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),x=new WeakMap,T=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),E=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v:void 0!==u[1]?d=a$1:void 0!==u[2]?(m$1.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?g$1:_):d===g$1||d===_?d=f:d===v||d===a$1?d=c$1:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$5:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$3+y):s+e$3+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class C{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,s);if(this.el=C.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(m$1.test(l.tagName)){const t=l.textContent.split(e$3),s=t.length-1;if(s>0){l.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$3,t+1));)c.push({type:7,index:r}),t+=e$3.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b$2)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b$2&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.T(t);}j(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t));}T(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new C(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.j(h()),this.j(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b$2,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b$2&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.P(t);}P(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===w?void 0:t;}}const R=i$3?i$3.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==w?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b$2)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.7");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=T(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return b$2}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$3=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

// A is m x n. B is n x p. product is m x p.
function multiplyMatrices(A, B) {
	let m = A.length;

	if (!Array.isArray(A[0])) {
		// A is vector, convert to [[a, b, c, ...]]
		A = [A];
	}

	if (!Array.isArray(B[0])) {
		// B is vector, convert to [[a], [b], [c], ...]]
		B = B.map(x => [x]);
	}

	let p = B[0].length;
	let B_cols = B[0].map((_, i) => B.map(x => x[i])); // transpose B
	let product = A.map(row => B_cols.map(col => {
		let ret = 0;

		if (!Array.isArray(row)) {
			for (let c of col) {
				ret += row * c;
			}

			return ret;
		}

		for (let i=0; i < row.length; i++) {
			ret += row[i] * (col[i] || 0);
		}

		return ret;
	}));

	if (m === 1) {
		product = product[0]; // Avoid [[a, b, c, ...]]
	}

	if (p === 1) {
		return product.map(x => x[0]); // Avoid [[a], [b], [c], ...]]
	}

	return product;
}

/**
 * Various utility functions
 */

/**
 * Check if a value is a string (including a String object)
 * @param {*} str - Value to check
 * @returns {boolean}
 */
function isString (str) {
	return type(str) === "string";
}

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {*} o - Value to check
 * @returns {string}
 */
function type (o) {
	let str = Object.prototype.toString.call(o);

	return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}

/**
 * Round a number to a certain number of significant digits
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */
function toPrecision(n, precision) {
	n = +n;
	precision = +precision;
	let integerLength = (Math.floor(n) + "").length;

	if (precision > integerLength) {
		return +n.toFixed(precision - integerLength);
	}
	else {
		let p10 = 10 ** (integerLength - precision);
		return Math.round(n / p10) * p10;
	}
}

/**
* Parse a CSS function, regardless of its name and arguments
* @param String str String to parse
* @return {{name, args, rawArgs}}
*/
function parseFunction (str) {
	if (!str) {
		return;
	}

	str = str.trim();

	const isFunctionRegex = /^([a-z]+)\((.+?)\)$/i;
	const isNumberRegex = /^-?[\d.]+$/;
	let parts = str.match(isFunctionRegex);

	if (parts) {
		// It is a function, parse args
		let args = [];
		parts[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, ($0, arg) => {
			if (/%$/.test(arg)) {
				// Convert percentages to 0-1 numbers
				arg = new Number(arg.slice(0, -1) / 100);
				arg.type = "<percentage>";
			}
			else if (/deg$/.test(arg)) {
				// Drop deg from degrees and convert to number
				// TODO handle other units too
				arg = new Number(+arg.slice(0, -3));
				arg.type = "<angle>";
				arg.unit = "deg";
			}
			else if (isNumberRegex.test(arg)) {
				// Convert numerical args to numbers
				arg = new Number(arg);
				arg.type = "<number>";
			}

			if ($0.startsWith("/")) {
				// It's alpha
				arg = arg instanceof Number? arg : new Number(arg);
				arg.alpha = true;
			}

			args.push(arg);
		});

		return {
			name: parts[1].toLowerCase(),
			rawName: parts[1],
			rawArgs: parts[2],
			// An argument could be (as of css-color-4):
			// a number, percentage, degrees (hue), ident (in color())
			args
		};
	}
}

function last(arr) {
	return arr[arr.length - 1];
}

function interpolate (start, end, p) {
	if (isNaN(start)) {
		return end;
	}

	if (isNaN(end)) {
		return start;
	}

	return start + (end - start) * p;
}

function interpolateInv (start, end, value) {
	return (value - start) / (end - start);
}

function mapRange(from, to, value) {
	return interpolate(to[0], to[1], interpolateInv(from[0], from[1], value));
}

function parseCoordGrammar (coordGrammars) {
	return coordGrammars.map(coordGrammar => {
		return coordGrammar.split("|").map(type => {
			type = type.trim();
			let range = type.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);

			if (range) {
				let ret = new String(range[1]);
				ret.range = [+range[2], +range[3]];
				return ret;
			}

			return type;
		});
	});
}

var util = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isString: isString,
	type: type,
	toPrecision: toPrecision,
	parseFunction: parseFunction,
	last: last,
	interpolate: interpolate,
	interpolateInv: interpolateInv,
	mapRange: mapRange,
	parseCoordGrammar: parseCoordGrammar,
	multiplyMatrices: multiplyMatrices
});

/**
 * A class for adding deep extensibility to any piece of JS code
 */
class Hooks {
	add (name, callback, first) {
		if (typeof arguments[0] != "string") {
			// Multiple hooks
			for (var name in arguments[0]) {
				this.add(name, arguments[0][name], arguments[1]);
			}

			return;
		}

		(Array.isArray(name)? name : [name]).forEach(function(name) {
			this[name] = this[name] || [];

			if (callback) {
				this[name][first? "unshift" : "push"](callback);
			}
		}, this);
	}

	run (name, env) {
		this[name] = this[name] || [];
		this[name].forEach(function(callback) {
			callback.call(env && env.context? env.context : env, env);
		});
	}
}
/**
 * The instance of {@link Hooks} used throughout Color.js
 */
const hooks = new Hooks();

// Global defaults one may want to configure

var defaults = {
	gamut_mapping: "lch.c",
	precision: 5,
	deltaE: "76", // Default deltaE method
};

const WHITES = {
	// for compatibility, the four-digit chromaticity-derived ones everyone else uses
	D50: [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585],
	D65: [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290],
};

function getWhite(name) {
	if (Array.isArray(name)) {
		return name;
	}

	return WHITES[name];
}

// Adapt XYZ from white point W1 to W2
function adapt$1 (W1, W2, XYZ, options = {}) {
	W1 = getWhite(W1);
	W2 = getWhite(W2);

	if (!W1 || !W2) {
		throw new TypeError(`Missing white point to convert ${!W1? "from" : ""}${!W1&&!W2? "/" : ""}${!W2? "to" : ""}`);
	}

	if (W1 === W2) {
		// Same whitepoints, no conversion needed
		return XYZ;
	}

	let env = {W1, W2, XYZ, options};

	hooks.run("chromatic-adaptation-start", env);

	if (!env.M) {
		if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) {
			env.M = [
				[  1.0479298208405488,    0.022946793341019088,  -0.05019222954313557 ],
				[  0.029627815688159344,  0.990434484573249,     -0.01707382502938514 ],
				[ -0.009243058152591178,  0.015055144896577895,   0.7518742899580008  ]
			];
		}
		else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) {

			env.M = [
				[  0.9554734527042182,   -0.023098536874261423,  0.0632593086610217   ],
				[ -0.028369706963208136,  1.0099954580058226,    0.021041398966943008 ],
				[  0.012314001688319899, -0.020507696433477912,  1.3303659366080753   ]
			];
		}
	}

	hooks.run("chromatic-adaptation-end", env);

	if (env.M) {
		return multiplyMatrices(env.M, env.XYZ);
	}
	else {
		throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
	}
}

const ε$3 = .000075;

/**
 * Class to represent a color space
 */
class ColorSpace {
	constructor (options) {
		this.id = options.id;
		this.name = options.name;
		this.base = options.base ? ColorSpace.get(options.base) : null;
		this.aliases = options.aliases;

		if (this.base) {
			this.fromBase = options.fromBase;
			this.toBase = options.toBase;
		}

		// Coordinate metadata

		let coords = options.coords ?? this.base.coords;
		this.coords = coords;

		// White point

		let white = options.white ?? this.base.white ?? "D65";
		this.white = getWhite(white);

		// Sort out formats

		this.formats = options.formats ?? {};

		for (let name in this.formats) {
			let format = this.formats[name];
			format.type ||= "function";
			format.name ||= name;
		}

		if (options.cssId && !this.formats.functions?.color) {
			this.formats.color = { id: options.cssId };
			Object.defineProperty(this, "cssId", {value: options.cssId});
		}
		else if (this.formats?.color && !this.formats?.color.id) {
			this.formats.color.id = this.id;
		}

		// Other stuff
		this.referred = options.referred;

		// Compute ancestors and store them, since they will never change
		this.#path = this.#getPath().reverse();

		hooks.run("colorspace-init-end", this);
	}

	inGamut (coords, {epsilon = ε$3} = {}) {
		if (this.isPolar) {
			// Do not check gamut through polar coordinates
			coords = this.toBase(coords);

			return this.base.inGamut(coords, {epsilon});
		}

		let coordMeta = Object.values(this.coords);

		return coords.every((c, i) => {
			let meta = coordMeta[i];

			if (meta.type !== "angle" && meta.range) {
				if (Number.isNaN(c)) {
					// NaN is always in gamut
					return true;
				}

				let [min, max] = meta.range;
				return (min === undefined || c >= min - epsilon)
				    && (max === undefined || c <= max + epsilon);
			}

			return true;
		});
	}

	get cssId () {
		return this.formats.functions?.color?.id || this.id;
	}

	get isPolar() {
		for (let id in this.coords) {
			if (this.coords[id].type === "angle") {
				return true;
			}
		}

		return false;
	}

	#processFormat(format) {
		if (format.coords && !format.coordGrammar) {
			format.type ||= "function";
			format.name ||= "color";

			// Format has not been processed
			format.coordGrammar = parseCoordGrammar(format.coords);

			let coordFormats = Object.entries(this.coords).map(([id, coordMeta], i) => {
				// Preferred format for each coord is the first one
				let outputType = format.coordGrammar[i][0];

				let fromRange = coordMeta.range || coordMeta.refRange;
				let toRange = outputType.range, suffix = "";

				// Non-strict equals intentional since outputType could be a string object
				if (outputType == "<percentage>") {
					toRange = [0, 100];
					suffix = "%";
				}
				else if (outputType == "<angle>") {
					suffix = "deg";
				}

				return  {fromRange, toRange, suffix};
			});

			format.serializeCoords = (coords, precision) => {
				return coords.map((c, i) => {
					let {fromRange, toRange, suffix} = coordFormats[i];

					if (fromRange && toRange) {
						c = mapRange(fromRange, toRange, c);
					}

					c = toPrecision(c, precision);

					if (suffix) {
						c += suffix;
					}

					return c;
				})
			};
		}

		return format;
	}

	getFormat (format) {
		if (typeof format === "object") {
			format = this.#processFormat(format);
			return format;
		}

		let ret;
		if (format === "default") {
			// Get first format
			ret = Object.values(this.formats)[0];
		}
		else {
			ret = this.formats[format];
		}

		if (ret) {
			ret = this.#processFormat(ret);
			return ret;
		}

		return null;
	}

	#path

	#getPath () {
		let ret = [this];

		for (let space = this; space = space.base;) {
			ret.push(space);
		}

		return ret;
	}

	to (space, coords) {
		if (arguments.length === 1) {
			[space, coords] = [space.space, space.coords];
		}

		space = ColorSpace.get(space);

		if (this === space) {
			// Same space, no change needed
			return coords;
		}

		// Convert NaN to 0, which seems to be valid in every coordinate of every color space
		coords = coords.map(c => Number.isNaN(c)? 0 : c);

		// Find connection space = lowest common ancestor in the base tree
		let myPath = this.#path;
		let otherPath = space.#path;

		let connectionSpace, connectionSpaceIndex;

		for (let i=0; i < myPath.length; i++) {
			if (myPath[i] === otherPath[i]) {
				connectionSpace = myPath[i];
				connectionSpaceIndex = i;
			}
			else {
				break;
			}
		}

		if (!connectionSpace) {
			// This should never happen
			throw new Error(`Cannot convert between color spaces ${this} and ${space}: no connection space was found`);
		}

		// Go up from current space to connection space
		for (let i = myPath.length - 1; i > connectionSpaceIndex; i--) {
			coords = myPath[i].toBase(coords);
		}

		// Go down from connection space to target space
		for (let i = connectionSpaceIndex + 1; i < otherPath.length; i++) {
			coords = otherPath[i].fromBase(coords);
		}

		return coords;
	}

	from (space, coords) {
		if (arguments.length === 1) {
			[space, coords] = [space.space, space.coords];
		}

		space = ColorSpace.get(space);

		return space.to(this, coords);
	}

	toString () {
		return `${this.name} (${this.id})`;
	}

	getMinCoords () {
		let ret = [];

		for (let id in this.coords) {
			let meta = this.coords[id];
			let range = meta.range || meta.refRange;
			ret.push(range?.min ?? 0);
		}

		return ret;
	}

	static registry = {}

	// Returns array of unique color spaces
	static get all () {
		return [...new Set(Object.values(ColorSpace.registry))];
	}

	static register (id, space) {
		if (arguments.length === 1) {
			space = arguments[0];
			id = space.id;
		}

		space = this.get(space);

		if (this.registry[id] && this.registry[id] !== space) {
			throw new Error(`Duplicate color space registration: '${id}'`);
		}
		this.registry[id] = space;

		// Register aliases when called without an explicit ID.
		if (arguments.length === 1 && space.aliases) {
			for (let alias of space.aliases) {
				this.register(alias, space);
			}
		}

		return space;
	}

	/**
	 * Lookup ColorSpace object by name
	 * @param {ColorSpace | string} name
	 */
	static get (space, ...alternatives) {
		if (!space || space instanceof ColorSpace) {
			return space;
		}

		let argType = type(space);

		if (argType === "string") {
			// It's a color space id
			let ret = ColorSpace.registry[space.toLowerCase()];

			if (!ret) {
				throw new TypeError(`No color space found with id = "${space}"`);
			}

			return ret;
		}

		if (alternatives.length) {
			return ColorSpace.get(...alternatives);
		}

		throw new TypeError(`${space} is not a valid color space`);
	}

	/**
	 * Get metadata about a coordinate of a color space
	 *
	 * @static
	 * @param {Array | string} ref
	 * @param {ColorSpace | string} [workingSpace]
	 * @return {Object}
	 */
	static resolveCoord (ref, workingSpace) {
		let coordType = type(ref);
		let space, coord;

		if (coordType === "string") {
			if (ref.includes(".")) {
				// Absolute coordinate
				[space, coord] = ref.split(".");
			}
			else {
				// Relative coordinate
				[space, coord] = [, ref];
			}
		}
		else if (Array.isArray(ref)) {
			[space, coord] = ref;
		}
		else {
			// Object
			space = ref.space;
			coord = ref.coordId;
		}

		space = ColorSpace.get(space);

		if (!space) {
			space = workingSpace;
		}

		if (!space) {
			throw new TypeError(`Cannot resolve coordinate reference ${ref}: No color space specified and relative references are not allowed here`);
		}

		coordType = type(coord);

		if (coordType === "number" || coordType === "string" && coord >= 0) {
			// Resolve numerical coord
			let meta = Object.entries(space.coords)[coord];

			if (meta) {
				return {space, id: meta[0], index: coord, ...meta[1]}
			}
		}

		space = ColorSpace.get(space);

		let normalizedCoord = coord.toLowerCase();

		let i = 0;
		for (let id in space.coords) {
			let meta = space.coords[id];

			if (id.toLowerCase() === normalizedCoord || meta.name?.toLowerCase() === normalizedCoord) {
				return {space, id, index: i, ...meta};
			}

			i++;
		}

		throw new TypeError(`No "${coord}" coordinate found in ${space.name}. Its coordinates are: ${Object.keys(space.coords).join(", ")}`);
	}

	static DEFAULT_FORMAT = {
		type: "functions",
		name: "color",
	}
}

var XYZ_D65 = new ColorSpace({
	id: "xyz-d65",
	name: "XYZ D65",
	coords: {
		x: {name: "X"},
		y: {name: "Y"},
		z: {name: "Z"},
	},
	white: "D65",
	formats: {
		color: {
			ids: ['xyz-d65', 'xyz'],
		}
	},
	aliases: ['xyz'],
});

/**
 * Convenience class for RGB color spaces
 * @extends {ColorSpace}
 */
class RGBColorSpace extends ColorSpace {
	/**
	 * Creates a new RGB ColorSpace.
	 * If coords are not specified, they will use the default RGB coords.
	 * Instead of `fromBase()` and `toBase()` functions,
	 * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
	 * @param {*} options - Same options as {@link ColorSpace} plus:
	 * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
	 * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
	 */
	constructor (options) {
		if (!options.coords) {
			options.coords = {
				r: {
					range: [0, 1],
					name: "Red"
				},
				g: {
					range: [0, 1],
					name: "Green"
				},
				b: {
					range: [0, 1],
					name: "Blue"
				}
			};
		}

		if (!options.base) {
			options.base = XYZ_D65;
		}

		if (options.toXYZ_M && options.fromXYZ_M) {
			options.toBase ??= rgb => {
				let xyz = multiplyMatrices(options.toXYZ_M, rgb);

				if (this.white !== this.base.white) {
					// Perform chromatic adaptation
					xyz = adapt$1(this.white, this.base.white, xyz);
				}

				return xyz;
			};

			options.fromBase ??= xyz => {
				xyz = adapt$1(this.base.white, this.white, xyz);
				return multiplyMatrices(options.fromXYZ_M, xyz);
			};
		}

		options.referred ??= "display";

		super(options);
	}
}

// CSS color to Color object
function parse (str) {
	let env = {str};
	hooks.run("parse-start", env);

	if (env.color) {
		return env.color;
	}

	env.parsed = parseFunction(env.str);

	if (env.parsed) {
		// Is a functional syntax
		let name = env.parsed.name;

		if (name === "color") {
			// color() function
			let id = env.parsed.args.shift();
			let alpha = env.parsed.rawArgs.indexOf("/") > 0? env.parsed.args.pop() : 1;

			for (let space of ColorSpace.all) {
				let colorSpec = space.getFormat("color");

				if (colorSpec) {
					if (id === colorSpec.id || colorSpec.ids?.includes(id)) {
						// From https://drafts.csswg.org/css-color-4/#color-function
						// If more <number>s or <percentage>s are provided than parameters that the colorspace takes, the excess <number>s at the end are ignored.
						// If less <number>s or <percentage>s are provided than parameters that the colorspace takes, the missing parameters default to 0. (This is particularly convenient for multichannel printers where the additional inks are spot colors or varnishes that most colors on the page won’t use.)
						let argCount = Object.keys(space.coords).length;
						let coords = Array(argCount).fill(0);
						coords.forEach((_, i) => coords[i] = env.parsed.args[i] || 0);

						return {spaceId: space.id, coords, alpha};
					}
				}
			}

			// Not found
			let didYouMean = "";
			if (id in ColorSpace.registry) {
				// Used color space id instead of color() id, these are often different
				let cssId = ColorSpace.registry[id].formats?.functions?.color?.id;

				if (cssId) {
					didYouMean = `Did you mean color(${cssId})?`;
				}
			}
			throw new TypeError(`Cannot parse color(${id}). ` + (didYouMean || "Missing a plugin?"));
		}
		else {
			for (let space of ColorSpace.all) {
				// color space specific function
				let format = space.getFormat(name);
				if (format && format.type === "function") {
					let alpha = 1;

					if (format.lastAlpha || last(env.parsed.args).alpha) {
						alpha = env.parsed.args.pop();
					}

					let coords = env.parsed.args;

					if (format.coordGrammar) {
						Object.entries(space.coords).forEach(([id, coordMeta], i) => {
							let coordGrammar = format.coordGrammar[i];
							let providedType = coords[i]?.type;

							// Find grammar alternative that matches the provided type
							// Non-strict equals is intentional because we are comparing w/ string objects
							coordGrammar = coordGrammar.find(c => c == providedType);

							// Check that each coord conforms to its grammar
							if (!coordGrammar) {
								// Type does not exist in the grammar, throw
								let coordName = coordMeta.name || id;
								throw new TypeError(`${providedType} not allowed for ${coordName} in ${name}()`);
							}

							let fromRange = coordGrammar.range;

							if (providedType === "<percentage>") {
								fromRange ||= [0, 1];
							}

							let toRange = coordMeta.range || coordMeta.refRange;

							if (fromRange && toRange) {

								coords[i] = mapRange(fromRange, toRange, coords[i]);
							}
						});
					}

					return {
						spaceId: space.id,
						coords, alpha
					};
				}
			}
		}
	}
	else {
		// Custom, colorspace-specific format
		for (let space of ColorSpace.all) {

			for (let formatId in space.formats) {
				let format = space.formats[formatId];

				if (format.type !== "custom") {
					continue;
				}

				if (format.test && !format.test(env.str)) {
					continue;
				}

				let color = format.parse(env.str);

				if (color) {
					color.alpha ??= 1;
					return color;
				}
			}
		}
	}


	// If we're here, we couldn't parse
	throw new TypeError(`Could not parse ${str} as a color. Missing a plugin?`);
}

/**
 * Resolves a color reference (object or string) to a plain color object
 * @param {Color | {space, coords, alpha} | string} color
 * @returns {{space, coords, alpha}}
 */
function getColor (color) {
	if (!color) {
		throw new TypeError("Empty color reference");
	}

	if (isString(color)) {
		color = parse(color);
	}

	// Object fixup
	let space = color.space || color.spaceId;

	if (!(space instanceof ColorSpace)) {
		// Convert string id to color space object
		color.space = ColorSpace.get(space);
	}

	if (color.alpha === undefined) {
		color.alpha = 1;
	}

	return color;
}

/**
 * Get the coordinates of a color in another color space
 *
 * @param {string | ColorSpace} space
 * @returns {number[]}
 */
function getAll (color, space) {
	space = ColorSpace.get(space);
	return space.from(color);
}

function get (color, prop) {
	let {space, index} = ColorSpace.resolveCoord(prop, color.space);
	let coords = getAll(color, space);
	return coords[index];
}

function setAll (color, space, coords) {
	space = ColorSpace.get(space);
	color.coords = space.to(color.space, coords);
	return color;
}

// Set properties and return current instance
function set$1 (color, prop, value) {
	color = getColor(color);

	if (arguments.length === 2 && type(arguments[1]) === "object") {
		// Argument is an object literal
		let object = arguments[1];
		for (let p in object) {
			set$1(color, p, object[p]);
		}
	}
	else {
		if (typeof value === "function") {
			value = value(get(color, prop));
		}

		let {space, index} = ColorSpace.resolveCoord(prop, color.space);
		let coords = getAll(color, space);
		coords[index] = value;
		setAll(color, space, coords);
	}

	return color;
}

var XYZ_D50 = new ColorSpace({
	id: "xyz-d50",
	name: "XYZ D50",
	white: "D50",
	base: XYZ_D65,
	fromBase: coords => adapt$1(XYZ_D65.white, "D50", coords),
	toBase: coords => adapt$1("D50", XYZ_D65.white, coords),
	formats: {
		color: {}
	},
});

// κ * ε  = 2^3 = 8
const ε$2 = 216/24389;  // 6^3/29^3 == (24/116)^3
const ε3 = 24/116;
const κ = 24389/27;   // 29^3/3^3

let white = WHITES.D50;

var lab = new ColorSpace({
	id: "lab",
	name: "Lab",
	coords: {
		l: {
			refRange: [0, 100],
			name: "L"
		},
		a: {
			refRange: [-125, 125]
		},
		b: {
			refRange: [-125, 125]
		}
	},

	// Assuming XYZ is relative to D50, convert to CIE Lab
	// from CIE standard, which now defines these as a rational fraction
	white,

	base: XYZ_D50,
	// Convert D50-adapted XYX to Lab
	//  CIE 15.3:2004 section 8.2.1.1
	fromBase (XYZ) {
		// compute xyz, which is XYZ scaled relative to reference white
		let xyz = XYZ.map((value, i) => value / white[i]);

		// now compute f
		let f = xyz.map(value => value > ε$2 ? Math.cbrt(value) : (κ * value + 16)/116);

		return [
			(116 * f[1]) - 16, 	 // L
			500 * (f[0] - f[1]), // a
			200 * (f[1] - f[2])  // b
		];
	},
	// Convert Lab to D50-adapted XYZ
	// Same result as CIE 15.3:2004 Appendix D although the derivation is different
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	toBase (Lab) {
		// compute f, starting with the luminance-related term
		let f = [];
		f[1] = (Lab[0] + 16)/116;
		f[0] = Lab[1]/500 + f[1];
		f[2] = f[1] - Lab[2]/200;

		// compute xyz
		let xyz = [
			f[0]   > ε3  ?  Math.pow(f[0], 3)            : (116*f[0]-16)/κ,
			Lab[0] > 8   ?  Math.pow((Lab[0]+16)/116, 3) : Lab[0]/κ,
			f[2]   > ε3  ?  Math.pow(f[2], 3)            : (116*f[2]-16)/κ
		];

		// Compute XYZ by scaling xyz by reference white
		return xyz.map((value, i) => value * white[i]);
	},

	formats: {
		"lab": {
			coords: ["<percentage> | <number>", "<number>", "<number>"],
		}
	}
});

function constrain (angle) {
	return ((angle % 360) + 360) % 360;
}

function adjust (arc, angles) {
	if (arc === "raw") {
		return angles;
	}

	let [a1, a2] = angles.map(constrain);

	let angleDiff = a2 - a1;

	if (arc === "increasing") {
		if (angleDiff < 0) {
			a2 += 360;
		}
	}
	else if (arc === "decreasing") {
		if (angleDiff > 0) {
			a1 += 360;
		}
	}
	else if (arc === "longer") {
		if (-180 < angleDiff && angleDiff < 180) {
			if (angleDiff > 0) {
				a2 += 360;
			}
			else {
				a1 += 360;
			}
		}
	}
	else if (arc === "shorter") {
		if (angleDiff > 180) {
			a1 += 360;
		}
		else if (angleDiff < -180) {
			a2 += 360;
		}
	}

	return [a1, a2];
}

var lch = new ColorSpace({
	id: "lch",
	name: "LCH",
	coords: {
		l: {
			refRange: [0, 100],
			name: "Lightness"
		},
		c: {
			refRange: [0, 150],
			name: "Chroma"
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue"
		}
	},

	base: lab,
	fromBase (Lab) {
		// Convert to polar form
		let [L, a, b] = Lab;
		let hue;
		const ε = 0.02;

		if (Math.abs(a) < ε && Math.abs(b) < ε) {
			hue = NaN;
		}
		else {
			hue = Math.atan2(b, a) * 180 / Math.PI;
		}

		return [
			L, // L is still L
			Math.sqrt(a ** 2 + b ** 2), // Chroma
			constrain(hue) // Hue, in degrees [0 to 360)
		];
	},
	toBase (LCH) {
		// Convert from polar form
		let [Lightness, Chroma, Hue] = LCH;
		// Clamp any negative Chroma
		if (Chroma < 0) {
			Chroma = 0;
		}		// Deal with NaN Hue
		if (isNaN(Hue)) {
			Hue = 0;
		}
		return [
			Lightness, // L is still L
			Chroma * Math.cos(Hue * Math.PI / 180), // a
			Chroma * Math.sin(Hue * Math.PI / 180)  // b
		];
	},

	formats: {
		"lch": {
			coords: ["<percentage> | <number>", "<number>", "<number> | <angle>"],
		}
	}
});

// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.

const Gfactor = 25 ** 7;
const π$1 = Math.PI;
const r2d = 180 / π$1;
const d2r$1 = π$1 / 180;

function deltaE2000 (color, sample, {kL = 1, kC = 1, kH = 1} = {}) {
	// Given this color as the reference
	// and the function parameter as the sample,
	// calculate deltaE 2000.

	// This implementation assumes the parametric
	// weighting factors kL, kC and kH
	// for the influence of viewing conditions
	// are all 1, as sadly seems typical.
	// kL should be increased for lightness texture or noise
	// and kC increased for chroma noise

	let [L1, a1, b1] = lab.from(color);
	let C1 = lch.from(lab, [L1, a1, b1])[1];
	let [L2, a2, b2] = lab.from(sample);
	let C2 = lch.from(lab, [L2, a2, b2])[1];

	// Check for negative Chroma,
	// which might happen through
	// direct user input of LCH values

	if (C1 < 0) {
		C1 = 0;
	}
	if (C2 < 0) {
		C2 = 0;
	}

	let Cbar = (C1 + C2)/2; // mean Chroma

	// calculate a-axis asymmetry factor from mean Chroma
	// this turns JND ellipses for near-neutral colors back into circles
	let C7 = Cbar ** 7;

	let G = 0.5 * (1 - Math.sqrt(C7/(C7 + Gfactor)));

	// scale a axes by asymmetry factor
	// this by the way is why there is no Lab2000 colorspace
	let adash1 = (1 + G) * a1;
	let adash2 = (1 + G) * a2;

	// calculate new Chroma from scaled a and original b axes
	let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
	let Cdash2 = Math.sqrt(adash2 ** 2 + b2 ** 2);

	// calculate new hues, with zero hue for true neutrals
	// and in degrees, not radians

	let h1 = (adash1 === 0 && b1 === 0)? 0: Math.atan2(b1, adash1);
	let h2 = (adash2 === 0 && b2 === 0)? 0: Math.atan2(b2, adash2);

	if (h1 < 0) {
		h1 += 2 * π$1;
	}
	if (h2 < 0) {
		h2 += 2 * π$1;
	}

	h1 *= r2d;
	h2 *= r2d;

	// Lightness and Chroma differences; sign matters
	let ΔL = L2 - L1;
	let ΔC = Cdash2 - Cdash1;

	// Hue difference, getting the sign correct
	let hdiff = h2 - h1;
	let hsum = h1 + h2;
	let habs = Math.abs(hdiff);
	let Δh;

	if (Cdash1 * Cdash2 === 0) {
		Δh = 0;
	}
	else if (habs <= 180) {
		Δh = hdiff;
	}
	else if (hdiff > 180) {
		Δh = hdiff - 360;
	}
	else if (hdiff < -180) {
		Δh = hdiff + 360;
	}
	else {
		console.log("the unthinkable has happened");
	}

	// weighted Hue difference, more for larger Chroma
	let ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(Δh * d2r$1 / 2);

	// calculate mean Lightness and Chroma
	let Ldash = (L1 + L2)/2;
	let Cdash = (Cdash1 + Cdash2)/2;
	let Cdash7 = Math.pow(Cdash, 7);

	// Compensate for non-linearity in the blue region of Lab.
	// Four possibilities for hue weighting factor,
	// depending on the angles, to get the correct sign
	let hdash;
	if (Cdash1 * Cdash2 === 0) {
		hdash = hsum;   // which should be zero
	}
	else if (habs <= 180) {
		hdash = hsum / 2;
	}
	else if (hsum < 360) {
		hdash = (hsum + 360) / 2;
	}
	else {
		hdash = (hsum - 360) / 2;
	}

	// positional corrections to the lack of uniformity of CIELAB
	// These are all trying to make JND ellipsoids more like spheres

	// SL Lightness crispening factor
	// a background with L=50 is assumed
	let lsq = (Ldash - 50) ** 2;
	let SL = 1 + ((0.015 * lsq) / Math.sqrt(20 + lsq));

	// SC Chroma factor, similar to those in CMC and deltaE 94 formulae
	let SC = 1 + 0.045 * Cdash;

	// Cross term T for blue non-linearity
	let T = 1;
	T -= (0.17 * Math.cos((     hdash - 30)  * d2r$1));
	T += (0.24 * Math.cos(  2 * hdash        * d2r$1));
	T += (0.32 * Math.cos(((3 * hdash) + 6)  * d2r$1));
	T -= (0.20 * Math.cos(((4 * hdash) - 63) * d2r$1));

	// SH Hue factor depends on Chroma,
	// as well as adjusted hue angle like deltaE94.
	let SH = 1 + 0.015 * Cdash * T;

	// RT Hue rotation term compensates for rotation of JND ellipses
	// and Munsell constant hue lines
	// in the medium-high Chroma blue region
	// (Hue 225 to 315)
	let Δθ = 30 * Math.exp(-1 * (((hdash - 275)/25) ** 2));
	let RC = 2 * Math.sqrt(Cdash7/(Cdash7 + Gfactor));
	let RT = -1 * Math.sin(2 * Δθ * d2r$1) * RC;

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (kL * SL)) ** 2;
	dE += (ΔC / (kC * SC)) ** 2;
	dE += (ΔH / (kH * SH)) ** 2;
	dE += RT * (ΔC / (kC * SC)) * (ΔH / (kH * SH));
	return Math.sqrt(dE);
	// Yay!!!
}

const ε$1 = .000075;

/**
 * Check if a color is in gamut of either its own or another color space
 * @return {Boolean} Is the color in gamut?
 */
function inGamut (color, space = color.space, {epsilon = ε$1} = {}) {
	color = getColor(color);
	space = ColorSpace.get(space);
	let coords = color.coords;

	if (space !== color.space) {
		coords = space.from(color);
	}

	return space.inGamut(coords, {epsilon});
}

function clone(color) {
	return {
		space: color.space,
		coords: color.coords.slice(),
		alpha: color.alpha
	};
}

/**
 * Force coordinates to be in gamut of a certain color space.
 * Mutates the color it is passed.
 * @param {Object} options
 * @param {string} options.method - How to force into gamut.
 *        If "clip", coordinates are just clipped to their reference range.
 *        If in the form [colorSpaceId].[coordName], that coordinate is reduced
 *        until the color is in gamut. Please note that this may produce nonsensical
 *        results for certain coordinates (e.g. hue) or infinite loops if reducing the coordinate never brings the color in gamut.
 * @param {ColorSpace|string} options.space - The space whose gamut we want to map to
 */
function toGamut (color, {method = defaults.gamut_mapping, space = color.space} = {}) {
	if (isString(arguments[1])) {
		space = arguments[1];
	}

	space = ColorSpace.get(space);

	if (inGamut(color, space, {epsilon: 0})) {
		return color;
	}

	// 3 spaces:
	// color.space: current color space
	// space: space whose gamut we are mapping to
	// mapSpace: space with the coord we're reducing
	let spaceColor = to(color, space);

	if (method !== "clip" && !inGamut(color, space)) {
		let clipped = toGamut(clone(spaceColor), {method: "clip", space});
		if (deltaE2000(color, clipped) > 2) {
			// Reduce a coordinate of a certain color space until the color is in gamut
			let coordMeta = ColorSpace.resolveCoord(method);
			let mapSpace = coordMeta.space;
			let coordId = coordMeta.id;

			let mappedColor = to(spaceColor, mapSpace);
			let bounds = coordMeta.range || coordMeta.refRange;
			let min = bounds[0];
			let ε = .01; // for deltaE
			let low = min;
			let high = get(mappedColor, coordId);

			while (high - low > ε) {
				let clipped = clone(mappedColor);
				clipped = toGamut(clipped, {space, method: "clip"});
				let deltaE = deltaE2000(mappedColor, clipped);

				if (deltaE - 2 < ε) {
					low = get(mappedColor, coordId);
				}
				else {
					high = get(mappedColor, coordId);
				}

				set$1(mappedColor, coordId, (low + high) / 2);
			}

			spaceColor = to(mappedColor, space);
		}
		else {
			spaceColor = clipped;
		}
	}

	if (method === "clip" // Dumb coord clipping
		// finish off smarter gamut mapping with clip to get rid of ε, see #17
		|| !inGamut(spaceColor, space, {epsilon: 0})
	) {
		let bounds = Object.values(space.coords).map(c => c.range || []);

		spaceColor.coords = spaceColor.coords.map((c, i) => {
			let [min, max] = bounds[i];

			if (min !== undefined) {
				c = Math.max(min, c);
			}

			if (max !== undefined) {
				c = Math.min(c, max);
			}

			return c;
		});
	}

	if (space !== color.space) {
		spaceColor = to(spaceColor, color.space);
	}

	color.coords = spaceColor.coords;
	return color;
}

toGamut.returns = "color";

/**
 * Convert to color space and return a new color
 * @param {Object|string} space - Color space object or id
 * @param {Object} options
 * @param {boolean} options.inGamut - Whether to force resulting color in gamut
 * @returns {Color}
 */
function to (color, space, {inGamut} = {}) {
	color = getColor(color);
	space = ColorSpace.get(space);

	let coords = space.from(color);
	let ret = {space, coords, alpha: color.alpha};

	if (inGamut) {
		ret = toGamut(ret);
	}

	return ret;
}

to.returns = "color";

/**
 * Generic toString() method, outputs a color(spaceId ...coords) function, a functional syntax, or custom formats defined by the color space
 * @param {Object} options
 * @param {number} options.precision - Significant digits
 * @param {boolean} options.inGamut - Adjust coordinates to fit in gamut first? [default: false]
 */
function serialize (color, {
	precision = defaults.precision,
	format = "default",
	inGamut: inGamut$1 = true,
	...customOptions
} = {}) {
	let ret;

	color = getColor(color);

	let formatId = format;
	format = color.space.getFormat(format)
		   ?? color.space.getFormat("default")
		   ?? ColorSpace.DEFAULT_FORMAT;

	inGamut$1 ||= format.toGamut;

	let coords = color.coords;

	// Convert NaN to zeros to have a chance at a valid CSS color
	// Also convert -0 to 0
	// This also clones it so we can manipulate it
	coords = coords.map(c => c? c : 0);

	if (inGamut$1 && !inGamut(color)) {
		coords = toGamut(clone(color), inGamut$1 === true? undefined : inGamut$1).coords;
	}

	if (format.type === "custom") {
		customOptions.precision = precision;

		if (format.serialize) {
			ret = format.serialize(coords, color.alpha, customOptions);
		}
		else {
			throw new TypeError(`format ${formatId} can only be used to parse colors, not for serialization`);
		}
	}
	else {
		// Functional syntax
		let name = format.name || "color";

		if (format.serializeCoords) {
			coords = format.serializeCoords(coords, precision);
		}
		else {
			if (precision !== null) {
				coords = coords.map(c => toPrecision(c, precision));
			}
		}

		let args = [...coords];

		if (name === "color") {
			// If output is a color() function, add colorspace id as first argument
			let cssId = format.id || format.ids?.[0] || color.space.id;
			args.unshift(cssId);
		}

		let alpha = color.alpha;
		if (precision !== null) {
			alpha = toPrecision(alpha, precision);
		}

		let strAlpha = color.alpha < 1? ` ${format.commas? "," : "/"} ${alpha}` : "";
		ret = `${name}(${args.join(format.commas? ", " : " ")}${strAlpha})`;
	}

	return ret;
}

// convert an array of linear-light rec2020 values to CIE XYZ
// using  D65 (no chromatic adaptation)
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// 0 is actually calculated as  4.994106574466076e-17
const toXYZ_M$5 = [
	[ 0.6369580483012914, 0.14461690358620832,  0.1688809751641721  ],
	[ 0.2627002120112671, 0.6779980715188708,   0.05930171646986196 ],
	[ 0.000000000000000,  0.028072693049087428, 1.060985057710791   ]
];

// from ITU-R BT.2124-0 Annex 2 p.3
const fromXYZ_M$5 = [
	[  1.716651187971268,  -0.355670783776392, -0.253366281373660  ],
	[ -0.666684351832489,   1.616481236634939,  0.0157685458139111 ],
	[  0.017639857445311,  -0.042770613257809,  0.942103121235474  ]
];

var REC2020Linear = new RGBColorSpace({
	id: "rec2020-linear",
	name: "Linear REC.2020",
	white: "D65",
	toXYZ_M: toXYZ_M$5,
	fromXYZ_M: fromXYZ_M$5
});

// import sRGB from "./srgb.js";

const α = 1.09929682680944;
const β = 0.018053968510807;

var REC2020 = new RGBColorSpace({
	id: "rec2020",
	name: "REC.2020",
	base: REC2020Linear,
	// Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
	toBase (RGB) {
		return RGB.map(function (val) {
			if (val < β * 4.5 ) {
				return val / 4.5;
			}

			return Math.pow((val + α -1 ) / α, 1/0.45);
		});
	},
	fromBase (RGB) {
		return RGB.map(function (val) {
			if (val >= β ) {
				return α * Math.pow(val, 0.45) - (α - 1);
			}

			return 4.5 * val;
		});
	},
	formats: {
		color: {},
	}
});

const toXYZ_M$4 = [
	[0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
	[0.2289745640697488, 0.6917385218365064,  0.079286914093745],
	[0.0000000000000000, 0.04511338185890264, 1.043944368900976]
];

const fromXYZ_M$4 = [
	[ 2.493496911941425,   -0.9313836179191239, -0.40271078445071684],
	[-0.8294889695615747,   1.7626640603183463,  0.023624685841943577],
	[ 0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];

var P3Linear = new RGBColorSpace({
	id: "p3-linear",
	name: "Linear P3",
	white: "D65",
	toXYZ_M: toXYZ_M$4,
	fromXYZ_M: fromXYZ_M$4
});

// This is the linear-light version of sRGB
// as used for example in SVG filters
// or in Canvas

// This matrix was calculated directly from the RGB and white chromaticities
// when rounded to 8 decimal places, it agrees completely with the official matrix
// see https://github.com/w3c/csswg-drafts/issues/5922
const toXYZ_M$3 = [
	[ 0.41239079926595934, 0.357584339383878,   0.1804807884018343  ],
	[ 0.21263900587151027, 0.715168678767756,   0.07219231536073371 ],
	[ 0.01933081871559182, 0.11919477979462598, 0.9505321522496607  ]
];

// This matrix is the inverse of the above;
// again it agrees with the official definition when rounded to 8 decimal places
const fromXYZ_M$3 = [
	[  3.2409699419045226,  -1.537383177570094,   -0.4986107602930034  ],
	[ -0.9692436362808796,   1.8759675015077202,   0.04155505740717559 ],
	[  0.05563007969699366, -0.20397695888897652,  1.0569715142428786  ]
];

var sRGBLinear = new RGBColorSpace({
	id: "srgb-linear",
	name: "Linear sRGB",
	white: "D65",
	toXYZ_M: toXYZ_M$3,
	fromXYZ_M: fromXYZ_M$3,
	formats: {
		color: {}
	},
});

/* List of CSS color keywords
 * Note that this does not include currentColor, transparent,
 * or system colors
 */

// To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))
var KEYWORDS = {
	"aliceblue": [240 / 255, 248 / 255, 1],
	"antiquewhite": [250 / 255, 235 / 255, 215 / 255],
	"aqua": [0, 1, 1],
	"aquamarine": [127 / 255, 1, 212 / 255],
	"azure": [240 / 255, 1, 1],
	"beige": [245 / 255, 245 / 255, 220 / 255],
	"bisque": [1, 228 / 255, 196 / 255],
	"black": [0, 0, 0],
	"blanchedalmond": [1, 235 / 255, 205 / 255],
	"blue": [0, 0, 1],
	"blueviolet": [138 / 255, 43 / 255, 226 / 255],
	"brown": [165 / 255, 42 / 255, 42 / 255],
	"burlywood": [222 / 255, 184 / 255, 135 / 255],
	"cadetblue": [95 / 255, 158 / 255, 160 / 255],
	"chartreuse": [127 / 255, 1, 0],
	"chocolate": [210 / 255, 105 / 255, 30 / 255],
	"coral": [1, 127 / 255, 80 / 255],
	"cornflowerblue": [100 / 255, 149 / 255, 237 / 255],
	"cornsilk": [1, 248 / 255, 220 / 255],
	"crimson": [220 / 255, 20 / 255, 60 / 255],
	"cyan": [0, 1, 1],
	"darkblue": [0, 0, 139 / 255],
	"darkcyan": [0, 139 / 255, 139 / 255],
	"darkgoldenrod": [184 / 255, 134 / 255, 11 / 255],
	"darkgray": [169 / 255, 169 / 255, 169 / 255],
	"darkgreen": [0, 100 / 255, 0],
	"darkgrey": [169 / 255, 169 / 255, 169 / 255],
	"darkkhaki": [189 / 255, 183 / 255, 107 / 255],
	"darkmagenta": [139 / 255, 0, 139 / 255],
	"darkolivegreen": [85 / 255, 107 / 255, 47 / 255],
	"darkorange": [1, 140 / 255, 0],
	"darkorchid": [153 / 255, 50 / 255, 204 / 255],
	"darkred": [139 / 255, 0, 0],
	"darksalmon": [233 / 255, 150 / 255, 122 / 255],
	"darkseagreen": [143 / 255, 188 / 255, 143 / 255],
	"darkslateblue": [72 / 255, 61 / 255, 139 / 255],
	"darkslategray": [47 / 255, 79 / 255, 79 / 255],
	"darkslategrey": [47 / 255, 79 / 255, 79 / 255],
	"darkturquoise": [0, 206 / 255, 209 / 255],
	"darkviolet": [148 / 255, 0, 211 / 255],
	"deeppink": [1, 20 / 255, 147 / 255],
	"deepskyblue": [0, 191 / 255, 1],
	"dimgray": [105 / 255, 105 / 255, 105 / 255],
	"dimgrey": [105 / 255, 105 / 255, 105 / 255],
	"dodgerblue": [30 / 255, 144 / 255, 1],
	"firebrick": [178 / 255, 34 / 255, 34 / 255],
	"floralwhite": [1, 250 / 255, 240 / 255],
	"forestgreen": [34 / 255, 139 / 255, 34 / 255],
	"fuchsia": [1, 0, 1],
	"gainsboro": [220 / 255, 220 / 255, 220 / 255],
	"ghostwhite": [248 / 255, 248 / 255, 1],
	"gold": [1, 215 / 255, 0],
	"goldenrod": [218 / 255, 165 / 255, 32 / 255],
	"gray": [128 / 255, 128 / 255, 128 / 255],
	"green": [0, 128 / 255, 0],
	"greenyellow": [173 / 255, 1, 47 / 255],
	"grey": [128 / 255, 128 / 255, 128 / 255],
	"honeydew": [240 / 255, 1, 240 / 255],
	"hotpink": [1, 105 / 255, 180 / 255],
	"indianred": [205 / 255, 92 / 255, 92 / 255],
	"indigo": [75 / 255, 0, 130 / 255],
	"ivory": [1, 1, 240 / 255],
	"khaki": [240 / 255, 230 / 255, 140 / 255],
	"lavender": [230 / 255, 230 / 255, 250 / 255],
	"lavenderblush": [1, 240 / 255, 245 / 255],
	"lawngreen": [124 / 255, 252 / 255, 0],
	"lemonchiffon": [1, 250 / 255, 205 / 255],
	"lightblue": [173 / 255, 216 / 255, 230 / 255],
	"lightcoral": [240 / 255, 128 / 255, 128 / 255],
	"lightcyan": [224 / 255, 1, 1],
	"lightgoldenrodyellow": [250 / 255, 250 / 255, 210 / 255],
	"lightgray": [211 / 255, 211 / 255, 211 / 255],
	"lightgreen": [144 / 255, 238 / 255, 144 / 255],
	"lightgrey": [211 / 255, 211 / 255, 211 / 255],
	"lightpink": [1, 182 / 255, 193 / 255],
	"lightsalmon": [1, 160 / 255, 122 / 255],
	"lightseagreen": [32 / 255, 178 / 255, 170 / 255],
	"lightskyblue": [135 / 255, 206 / 255, 250 / 255],
	"lightslategray": [119 / 255, 136 / 255, 153 / 255],
	"lightslategrey": [119 / 255, 136 / 255, 153 / 255],
	"lightsteelblue": [176 / 255, 196 / 255, 222 / 255],
	"lightyellow": [1, 1, 224 / 255],
	"lime": [0, 1, 0],
	"limegreen": [50 / 255, 205 / 255, 50 / 255],
	"linen": [250 / 255, 240 / 255, 230 / 255],
	"magenta": [1, 0, 1],
	"maroon": [128 / 255, 0, 0],
	"mediumaquamarine": [102 / 255, 205 / 255, 170 / 255],
	"mediumblue": [0, 0, 205 / 255],
	"mediumorchid": [186 / 255, 85 / 255, 211 / 255],
	"mediumpurple": [147 / 255, 112 / 255, 219 / 255],
	"mediumseagreen": [60 / 255, 179 / 255, 113 / 255],
	"mediumslateblue": [123 / 255, 104 / 255, 238 / 255],
	"mediumspringgreen": [0, 250 / 255, 154 / 255],
	"mediumturquoise": [72 / 255, 209 / 255, 204 / 255],
	"mediumvioletred": [199 / 255, 21 / 255, 133 / 255],
	"midnightblue": [25 / 255, 25 / 255, 112 / 255],
	"mintcream": [245 / 255, 1, 250 / 255],
	"mistyrose": [1, 228 / 255, 225 / 255],
	"moccasin": [1, 228 / 255, 181 / 255],
	"navajowhite": [1, 222 / 255, 173 / 255],
	"navy": [0, 0, 128 / 255],
	"oldlace": [253 / 255, 245 / 255, 230 / 255],
	"olive": [128 / 255, 128 / 255, 0],
	"olivedrab": [107 / 255, 142 / 255, 35 / 255],
	"orange": [1, 165 / 255, 0],
	"orangered": [1, 69 / 255, 0],
	"orchid": [218 / 255, 112 / 255, 214 / 255],
	"palegoldenrod": [238 / 255, 232 / 255, 170 / 255],
	"palegreen": [152 / 255, 251 / 255, 152 / 255],
	"paleturquoise": [175 / 255, 238 / 255, 238 / 255],
	"palevioletred": [219 / 255, 112 / 255, 147 / 255],
	"papayawhip": [1, 239 / 255, 213 / 255],
	"peachpuff": [1, 218 / 255, 185 / 255],
	"peru": [205 / 255, 133 / 255, 63 / 255],
	"pink": [1, 192 / 255, 203 / 255],
	"plum": [221 / 255, 160 / 255, 221 / 255],
	"powderblue": [176 / 255, 224 / 255, 230 / 255],
	"purple": [128 / 255, 0, 128 / 255],
	"rebeccapurple": [102 / 255, 51 / 255, 153 / 255],
	"red": [1, 0, 0],
	"rosybrown": [188 / 255, 143 / 255, 143 / 255],
	"royalblue": [65 / 255, 105 / 255, 225 / 255],
	"saddlebrown": [139 / 255, 69 / 255, 19 / 255],
	"salmon": [250 / 255, 128 / 255, 114 / 255],
	"sandybrown": [244 / 255, 164 / 255, 96 / 255],
	"seagreen": [46 / 255, 139 / 255, 87 / 255],
	"seashell": [1, 245 / 255, 238 / 255],
	"sienna": [160 / 255, 82 / 255, 45 / 255],
	"silver": [192 / 255, 192 / 255, 192 / 255],
	"skyblue": [135 / 255, 206 / 255, 235 / 255],
	"slateblue": [106 / 255, 90 / 255, 205 / 255],
	"slategray": [112 / 255, 128 / 255, 144 / 255],
	"slategrey": [112 / 255, 128 / 255, 144 / 255],
	"snow": [1, 250 / 255, 250 / 255],
	"springgreen": [0, 1, 127 / 255],
	"steelblue": [70 / 255, 130 / 255, 180 / 255],
	"tan": [210 / 255, 180 / 255, 140 / 255],
	"teal": [0, 128 / 255, 128 / 255],
	"thistle": [216 / 255, 191 / 255, 216 / 255],
	"tomato": [1, 99 / 255, 71 / 255],
	"turquoise": [64 / 255, 224 / 255, 208 / 255],
	"violet": [238 / 255, 130 / 255, 238 / 255],
	"wheat": [245 / 255, 222 / 255, 179 / 255],
	"white": [1, 1, 1],
	"whitesmoke": [245 / 255, 245 / 255, 245 / 255],
	"yellow": [1, 1, 0],
	"yellowgreen": [154 / 255, 205 / 255, 50 / 255]
};

let coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");

var sRGB = new RGBColorSpace({
	id: "srgb",
	name: "sRGB",
	base: sRGBLinear,
	fromBase: rgb => {
		// convert an array of linear-light sRGB values in the range 0.0-1.0
		// to gamma corrected form
		// https://en.wikipedia.org/wiki/SRGB
		return rgb.map(val => {
			let sign = val < 0? -1 : 1;
			let abs = val * sign;

			if (abs > 0.0031308) {
				return sign * (1.055 * (abs ** (1/2.4)) - 0.055);
			}

			return 12.92 * val;
		});
	},
	toBase: rgb => {
		// convert an array of sRGB values in the range 0.0 - 1.0
		// to linear light (un-companded) form.
		// https://en.wikipedia.org/wiki/SRGB
		return rgb.map(val => {
			let sign = val < 0? -1 : 1;
			let abs = val * sign;

			if (abs < 0.04045) {
				return val / 12.92;
			}

			return sign * (((abs + 0.055) / 1.055) ** 2.4);
		});
	},
	formats: {
		"rgb": {
			coords: coordGrammar,
		},
		"color": { /* use defaults */ },
		"rgba": {
			coords: coordGrammar,
			commas: true,
			lastAlpha: true,
		},
		"hex": {
			type: "custom",
			toGamut: true,
			test: str => /^#([a-f0-9]{3,4}){1,2}$/i.test(str),
			parse (str) {
				if (str.length <= 5) {
					// #rgb or #rgba, duplicate digits
					str = str.replace(/[a-f0-9]/gi, "$&$&");
				}

				let rgba = [];
				str.replace(/[a-f0-9]{2}/gi, component => {
					rgba.push(parseInt(component, 16) / 255);
				});

				return {
					spaceId: "srgb",
					coords: rgba.slice(0, 3),
					alpha: rgba.slice(3)[0]
				};
			},
			serialize: (coords, alpha, {
				collapse = true // collapse to 3-4 digit hex when possible?
			} = {}) => {
				if (alpha < 1) {
					coords.push(alpha);
				}

				coords = coords.map(c => Math.round(c * 255));

				let collapsible = collapse && coords.every(c => c % 17 === 0);

				let hex = coords.map(c => {
					if (collapsible) {
						return (c/17).toString(16);
					}

					return c.toString(16).padStart(2, "0");
				}).join("");

				return "#" + hex;
			}
		},
		"keyword": {
			type: "custom",
			test: str => /^[a-z]+$/i.test(str),
			parse (str) {
				str = str.toLowerCase();
				let ret = {spaceId: "srgb", coords: null, alpha: 1};

				if (str === "transparent") {
					ret.coords = KEYWORDS.black;
					ret.alpha = 0;
				}
				else {
					ret.coords = KEYWORDS[str];
				}

				if (ret.coords) {
					return ret;
				}
			}
		},
	}
});

var P3 = new RGBColorSpace({
	id: "p3",
	name: "P3",
	base: P3Linear,
	// Gamma encoding/decoding is the same as sRGB
	fromBase: sRGB.fromBase,
	toBase: sRGB.toBase,
	formats: {
		color: {
			id: "display-p3",
		}
	},
});

// Default space for CSS output. Code in Color.js makes this wider if there's a DOM available
defaults.display_space = sRGB;

if (typeof CSS !== "undefined" && CSS.supports) {
	// Find widest supported color space for CSS
	for (let space of [lab, REC2020, P3]) {
		let coords = space.getMinCoords();
		let color = {space, coords, alpha: 1};
		let str = serialize(color);

		if (CSS.supports("color", str)) {
			defaults.display_space = space;
			break;
		}
	}
}

/**
 * Returns a serialization of the color that can actually be displayed in the browser.
 * If the default serialization can be displayed, it is returned.
 * Otherwise, the color is converted to Lab, REC2020, or P3, whichever is the widest supported.
 * In Node.js, this is basically equivalent to `serialize()` but returns a `String` object instead.
 *
 * @export
 * @param {{space, coords} | Color | string} color
 * @param {*} [options={}] Options to be passed to serialize()
 * @param {ColorSpace | string} [options.space = defaults.display_space] Color space to use for serialization if default is not supported
 * @returns {String} String object containing the serialized color with a color property containing the converted color (or the original, if no conversion was necessary)
 */
function display (color, {space = defaults.display_space, ...options} = {}) {
	let ret = serialize(color, options);

	if (typeof CSS === "undefined" || CSS.supports("color", ret) || !defaults.display_space) {
		ret = new String(ret);
		ret.color = color;
	}
	else {
		// If we're here, what we were about to output is not supported
		// Fall back to fallback space
		let fallbackColor = to(color, space);
		ret = new String(serialize(fallbackColor, options));
		ret.color = fallbackColor;
	}

	return ret;
}

/**
 * Euclidean distance of colors in an arbitrary color space
 */
function distance(color1, color2, space = "lab") {
	space = ColorSpace.get(space);

	let coords1 = space.from(color1);
	let coords2 = space.from(color2);

	return Math.sqrt(coords1.reduce((acc, c1, i) => {
		let c2 = coords2[i];
		if (isNaN(c1) || isNaN(c2)) {
			return acc;
		}

		return acc + (c2 - c1) ** 2;
	}, 0));
}

function equals (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	return color1.space === color2.space
		   && color1.alpha === color2.alpha
		   && color1.coords.every((c, i) => c === color2.coords[i]);
}

// WCAG 2.0 contrast https://www.w3.org/TR/WCAG20-TECHS/G18.html
function contrast (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let L1 = color1.luminance;
	let L2 = color2.luminance;

	if (L2 > L1) {
		[L1, L2] = [L2, L1];
	}

	return (L1 + .05) / (L2 + .05);
}

function register$4(Color) {
	Color.defineFunction("contrast", contrast);
}

var contrast$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': contrast,
	register: register$4
});

/**
 * Relative luminance
 */

function getLuminance(color) {
	return get(color, [XYZ_D65, "y"]);
}

function setLuminance(color) {
	set(color, [XYZ_D65, "y"], value);
}

function register$3(Color) {
	Object.defineProperty(Color.prototype, "luminance", {
		get () {
			return getLuminance(this);
		},
		set (value) {
			setLuminance(this);
		}
	});
}

var luminance = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getLuminance: getLuminance,
	setLuminance: setLuminance,
	register: register$3
});

// Chromaticity coordinates
function uv (color) {
	let [X, Y, Z] = color.getAll(XYZ_D65);
	let denom = X + 15 * Y + 3 * Z;
	return [4 * X / denom, 9 * Y / denom];
}

function xy (color) {
	let [X, Y, Z] = color.getAll(XYZ_D65);
	let  sum = X + Y + Z;
	return [X / sum, Y / sum];
}

function register$2(Color) {
	// no setters, as lightness information is lost
	// when converting color to chromaticity
	Object.defineProperty(Color.prototype, "uv", {
		get () {
			return uv(this);
		}
	});

	Object.defineProperty(Color.prototype, "xy", {
		get () {
			return xy(this);
		}
	});
}

var chromaticity = /*#__PURE__*/Object.freeze({
	__proto__: null,
	uv: uv,
	xy: xy,
	register: register$2
});

const DELTAE_METHODS = {};

function deltaE (c1, c2, o = {}) {
	if (isString(o)) {
		o = {method: o};
	}

	let {method = defaults.deltaE, ...rest} = o;

	c1 = getColor(c1);
	c2 = getColor(c2);

	if (method in DELTAE_METHODS) {
		return DELTAE_METHODS[method](c1, c2, rest);
	}

	throw new TypeError(`Unknown deltaE method: ${method}`);
}
function registerMethod(name, code) {
	let id = name.replace(/^deltaE/, "");
	DELTAE_METHODS[id] = code;
}

function register$1(Color) {
	Color.defineFunction("deltaE", deltaE);

	for (let method in DELTAE_METHODS) {
		let methodName = "deltaE" + method;

		Color.defineFunction(methodName, function(c1, c2, o) {
			c1 = getColor(c1);
			return DELTAE_METHODS[method](c1, c2, o);
		});
	}
}

var deltaE$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DELTAE_METHODS: DELTAE_METHODS,
	'default': deltaE,
	registerMethod: registerMethod,
	register: register$1
});

function deltaE76 (color, sample) {
	return distance(color, sample, "lab");
}

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// CMC by the Color Measurement Committee of the
// Bradford Society of Dyeists and Colorsts, 1994.
// Uses LCH rather than Lab,
// with different weights for L, C and H differences
// A nice increase in accuracy for modest increase in complexity
const π = Math.PI;
const d2r = π / 180;

function deltaECMC (color, sample, {l = 2, c = 1} = {}) {
	// Given this color as the reference
	// and a sample,
	// calculate deltaE CMC.

	// This implementation assumes the parametric
	// weighting factors l:c are 2:1
	// which is typical for non-textile uses.

	let [L1, a1, b1] = lab.from(color);
	let [, C1, H1] = lch.from(lab, [L1, a1, b1]);
	let [L2, a2, b2] = lab.from(sample);
	let C2 = lch.from(lab, [L2, a2, b2])[1];

	// let [L1, a1, b1] = color.getAll(lab);
	// let C1 = color.get("lch.c");
	// let H1 = color.get("lch.h");
	// let [L2, a2, b2] = sample.getAll(lab);
	// let C2 = sample.get("lch.c");

	// Check for negative Chroma,
	// which might happen through
	// direct user input of LCH values

	if (C1 < 0) {
		C1 = 0;
	}
	if (C2 < 0) {
		C2 = 0;
	}

	// we don't need H2 as ΔH is calculated from Δa, Δb and ΔC

	// Lightness and Chroma differences
	// These are (color - sample), unlike deltaE2000
	let ΔL = L1 - L2;
	let ΔC = C1 - C2;

	let Δa = a1 - a2;
	let Δb = b1 - b2;

	// weighted Hue difference, less for larger Chroma difference

	let H2 = (Δa ** 2) + (Δb ** 2) - (ΔC ** 2);
	// due to roundoff error it is possible that, for zero a and b,
	// ΔC > Δa + Δb is 0, resulting in attempting
	// to take the square root of a negative number

	// trying instead the equation from Industrial Color Physics
	// By Georg A. Klein

	// let ΔH = ((a1 * b2) - (a2 * b1)) / Math.sqrt(0.5 * ((C2 * C1) + (a2 * a1) + (b2 * b1)));
	// console.log({ΔH});
	// This gives the same result to 12 decimal places
	// except it sometimes NaNs when trying to root a negative number

	// let ΔH = Math.sqrt(H2); we never actually use the root, it gets squared again!!

	// positional corrections to the lack of uniformity of CIELAB
	// These are all trying to make JND ellipsoids more like spheres

	// SL Lightness crispening factor, depends entirely on L1 not L2
	let SL = 0.511;	// linear portion of the Y to L transfer function
	if (L1 >= 16) {	// cubic portion
		SL = (0.040975 * L1) / (1 + 0.01765 * L1);
	}

	// SC Chroma factor
	let SC = ((0.0638 * C1) / (1 + 0.0131 * C1)) + 0.638;

	// Cross term T for blue non-linearity
	let T;
	if ( Number.isNaN(H1)) {
		H1 = 0;
	}

	if (H1 >= 164 && H1 <= 345) {
		T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
	}
	else {
		T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
	}
	// console.log({T});

	// SH Hue factor also depends on C1,
	let C4 = Math.pow(C1, 4);
	let F = Math.sqrt(C4 / (C4 + 1900));
	let SH = SC * ((F * T) + 1 - F);

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (l * SL)) ** 2;
	dE += (ΔC / (c * SC)) ** 2;
	dE += (H2 / (SH ** 2));
	// dE += (ΔH / SH)  ** 2;
	return Math.sqrt(dE);
	// Yay!!!
}

const Yw$1 = 203;	// absolute luminance of media white

var XYZ_Abs_D65 = new ColorSpace({
// Absolute CIE XYZ, with a D65 whitepoint,
// as used in most HDR colorspaces as a starting point.
// SDR spaces are converted per BT.2048
// so that diffuse, media white is 203 cd/m²
	id: "xyz-abs-d65",
	name: "Absolute XYZ D65",
	coords: {
		x: {
			refRange: [0, 9504.7],
			name: "Xa",
		},
		y: {
			refRange: [0, 10000],
			name: "Ya",
		},
		z: {
			refRange: [0, 10888.3],
			name: "Za",
		}
	},

	base: XYZ_D65,
	fromBase (XYZ) {
		// Make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		return XYZ.map (v => Math.max(v * Yw$1, 0));
	},
	toBase (AbsXYZ) {
		// Convert to media-white relative XYZ
		return AbsXYZ.map(v => Math.max(v / Yw$1, 0));
	}
});

const b$1 = 1.15;
const g = 0.66;
const n$1 = 2610 / (2 ** 14);
const ninv$1 = (2 ** 14) / 2610;
const c1$2 = 3424 / (2 ** 12);
const c2$2 = 2413 / (2 ** 7);
const c3$2 = 2392 / (2 ** 7);
const p = 1.7 * 2523 / (2 ** 5);
const pinv = (2 ** 5) / (1.7 * 2523);
const d = -0.56;
const d0 = 1.6295499532821566E-11;

const XYZtoCone_M = [
	[  0.41478972, 0.579999,  0.0146480 ],
	[ -0.2015100,  1.120649,  0.0531008 ],
	[ -0.0166008,  0.264800,  0.6684799 ]
];
// XYZtoCone_M inverted
const ConetoXYZ_M = [
	[  1.9242264357876067,  -1.0047923125953657,  0.037651404030618   ],
	[  0.35031676209499907,  0.7264811939316552, -0.06538442294808501 ],
	[ -0.09098281098284752, -0.3127282905230739,  1.5227665613052603  ]
];
const ConetoIab_M = [
	[  0.5,       0.5,       0        ],
	[  3.524000, -4.066708,  0.542708 ],
	[  0.199076,  1.096799, -1.295875 ]
];
// ConetoIab_M inverted
const IabtoCone_M = [
	[ 1,                   0.1386050432715393,   0.05804731615611886 ],
	[ 0.9999999999999999, -0.1386050432715393,  -0.05804731615611886 ],
	[ 0.9999999999999998, -0.09601924202631895, -0.8118918960560388  ]
];

var Jzazbz = new ColorSpace({
	id: "jzazbz",
	name: "Jzazbz",
	coords: {
		jz: {
			refRange: [0, 1],
			name: "Jz",
		},
		az: {
			refRange: [-0.5, 0.5],
		},
		bz: {
			refRange: [-0.5, 0.5],
		}
	},

	base: XYZ_Abs_D65,
	fromBase (XYZ) {
		// First make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		// BT.2048 says media white Y=203 at PQ 58

		let [ Xa, Ya, Za ] = XYZ;

		// modify X and Y
		let Xm = (b$1 * Xa) - ((b$1 - 1) * Za);
		let Ym = (g * Ya) - ((g - 1) * Xa);

		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoCone_M, [ Xm, Ym, Za ]);

		// PQ-encode LMS
		let PQLMS = LMS.map (function (val) {
			let num = c1$2 + (c2$2 * ((val / 10000) ** n$1));
			let denom = 1 + (c3$2 * ((val / 10000) ** n$1));

			return (num / denom)  ** p;
		});

		// almost there, calculate Iz az bz
		let [ Iz, az, bz] = multiplyMatrices(ConetoIab_M, PQLMS);
		// console.log({Iz, az, bz});

		let Jz = ((1 + d) * Iz) / (1 + (d * Iz)) - d0;
		return [Jz, az, bz];
	},
	toBase (Jzazbz) {
		let [Jz, az, bz] = Jzazbz;
		let Iz = (Jz + d0) / (1 + d - d * (Jz + d0));

		// bring into LMS cone domain
		let PQLMS = multiplyMatrices(IabtoCone_M, [ Iz, az, bz ]);

		// convert from PQ-coded to linear-light
		let LMS = PQLMS.map(function (val){
			let num = (c1$2 - (val ** pinv));
			let denom = (c3$2 * (val ** pinv)) - c2$2;
			let x = 10000 * ((num / denom) ** ninv$1);

			return (x); 	// luminance relative to diffuse white, [0, 70 or so].
		});

		// modified abs XYZ
		let [ Xm, Ym, Za ] = multiplyMatrices(ConetoXYZ_M, LMS);

		// restore standard D50 relative XYZ, relative to media white
		let Xa = (Xm + ((b$1 -1) * Za)) / b$1;
		let Ya = (Ym + ((g -1) * Xa)) / g;
		return [ Xa, Ya, Za ];
	},

	formats: {
		// https://drafts.csswg.org/css-color-hdr/#Jzazbz
		"color": {}
	}
});

var jzczhz = new ColorSpace({
	id: "jzczhz",
	name: "JzCzHz",
	coords: {
		jz: {
			refRange: [0, 1],
			name: "Jz",
		},
		cz: {
			refRange: [0, 1],
			name: "Chroma",
		},
		hz: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		}
	},

	base: Jzazbz,
	fromBase (jzazbz) {
		// Convert to polar form
		let [Jz, az, bz] = jzazbz;
		let hue;
		const ε = 0.0002; // chromatic components much smaller than a,b

		if (Math.abs(az) < ε && Math.abs(bz) < ε) {
			hue = NaN;
		}
		else {
			hue = Math.atan2(bz, az) * 180 / Math.PI;
		}

		return [
			Jz, // Jz is still Jz
			Math.sqrt(az ** 2 + bz ** 2), // Chroma
			constrain(hue) // Hue, in degrees [0 to 360)
		];
	},
	toBase (jzczhz) {
		// Convert from polar form
		// debugger;
		return [
			jzczhz[0], // Jz is still Jz
			jzczhz[1] * Math.cos(jzczhz[2] * Math.PI / 180), // az
			jzczhz[1] * Math.sin(jzczhz[2] * Math.PI / 180)  // bz
		];
	},
	formats: {
		color: {}
	},
});

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// Uses JzCzHz, which has improved perceptual uniformity
// and thus a simple Euclidean root-sum of ΔL² ΔC² ΔH²
// gives good results.

function deltaEJz (color, sample) {
	// Given this color as the reference
	// and a sample,
	// calculate deltaE in JzCzHz.
	let [Jz1, Cz1, Hz1] = jzczhz.from(color);
	let [Jz2, Cz2, Hz2] = jzczhz.from(sample);

	// Lightness and Chroma differences
	// sign does not matter as they are squared.
	let ΔJ = Jz1 - Jz2;
	let ΔC = Cz1 - Cz2;

	// length of chord for ΔH
	if ((Number.isNaN(Hz1)) && (Number.isNaN(Hz2))) {
		// both undefined hues
		Hz1 = 0;
		Hz2 = 0;
	} else
	if (Number.isNaN(Hz1)) {
		// one undefined, set to the defined hue
		Hz1 = Hz2;
	} else
	if (Number.isNaN(Hz2)) {
		Hz2 = Hz1;
	}

	let Δh = Hz1 - Hz2;
	let ΔH = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin((Δh / 2) * (Math.PI / 180));

	return Math.sqrt(ΔJ ** 2 + ΔC ** 2 + ΔH ** 2);
}

const c1$1 = 3424 / 4096;
const c2$1 = 2413 / 128;
const c3$1 = 2392 / 128;
const m1 = 2610 / 16384;
const m2 = 2523 / 32;
const im1 = 16384 / 2610;
const im2 = 32 / 2523;

// The matrix below includes the 4% crosstalk components
// and is from the Dolby "What is ICtCp" paper"
const XYZtoLMS_M$1 = [
	[ 0.3592,  0.6976, -0.0358],
	[-0.1922,  1.1004,  0.0755],
	[ 0.0070,  0.0749,  0.8434]
];
// linear-light Rec.2020 to LMS, again with crosstalk
// rational terms from Jan Fröhlich,
// Encoding High Dynamic Range andWide Color Gamut Imagery, p.97
// and ITU-R BT.2124-0 p.2
/*
const Rec2020toLMS_M = [
	[ 1688 / 4096,  2146 / 4096,   262 / 4096 ],
	[  683 / 4096,  2951 / 4096,   462 / 4096 ],
	[   99 / 4096,   309 / 4096,  3688 / 4096 ]
];
*/
// this includes the Ebner LMS coefficients,
// the rotation, and the scaling to [-0.5,0.5] range
// rational terms from Fröhlich p.97
// and ITU-R BT.2124-0 pp.2-3
const LMStoIPT_M = [
	[  2048 / 4096,   2048 / 4096,       0      ],
	[  6610 / 4096, -13613 / 4096,  7003 / 4096 ],
	[ 17933 / 4096, -17390 / 4096,  -543 / 4096 ]
];

// inverted matrices, calculated from the above
const IPTtoLMS_M = [
	[0.99998889656284013833, 0.00860505014728705821,  0.1110343715986164786 ],
	[1.0000111034371598616, -0.00860505014728705821, -0.1110343715986164786 ],
	[1.000032063391005412,   0.56004913547279000113, -0.32063391005412026469],
];
/*
const LMStoRec2020_M = [
	[ 3.4375568932814012112,   -2.5072112125095058195,   0.069654319228104608382],
	[-0.79142868665644156125,   1.9838372198740089874,  -0.19240853321756742626 ],
	[-0.025646662911506476363, -0.099240248643945566751, 1.1248869115554520431  ]
];
*/
const LMStoXYZ_M$1 = [
	[ 2.0701800566956135096,   -1.3264568761030210255,    0.20661600684785517081 ],
	[ 0.36498825003265747974,   0.68046736285223514102,  -0.045421753075853231409],
	[-0.049595542238932107896, -0.049421161186757487412,  1.1879959417328034394  ]
];

// Only the PQ form of ICtCp is implemented here. There is also an HLG form.
// from Dolby, "WHAT IS ICTCP?"
// https://professional.dolby.com/siteassets/pdfs/ictcp_dolbywhitepaper_v071.pdf
// and
// Dolby, "Perceptual Color Volume
// Measuring the Distinguishable Colors of HDR and WCG Displays"
// https://professional.dolby.com/siteassets/pdfs/dolby-vision-measuring-perceptual-color-volume-v7.1.pdf
var ictcp = new ColorSpace({
	id: "ictcp",
	name: "ICTCP",
	// From BT.2100-2 page 7:
	// During production, signal values are expected to exceed the
	// range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
	// signal degradation during cascaded processing. Such values of E′,
	// below 0.0 or exceeding 1.0, should not be clipped during production
	// and exchange.
	// Values below 0.0 should not be clipped in reference displays (even
	// though they represent “negative” light) to allow the black level of
	// the signal (LB) to be properly set using test signals known as “PLUGE”
	coords: {
		i: {
			refRange: [0, 1],	// Constant luminance,
			name: "I"
		},
		ct: {
			refRange: [-0.5, 0.5],	// Full BT.2020 gamut in range [-0.5, 0.5]
			name: "CT"
		},
		cp: {
			refRange: [-0.5, 0.5],
			name: "CP"
		}
	},

	base: XYZ_Abs_D65,
	fromBase (XYZ) {
		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoLMS_M$1, XYZ);

		return LMStoICtCp(LMS);
	},
	toBase (ICtCp) {
		let LMS = ICtCptoLMS(ICtCp);

		return multiplyMatrices(LMStoXYZ_M$1, LMS);
	},
	formats: {
		color: {}
	},
});

function LMStoICtCp (LMS) {
	// apply the PQ EOTF
	// we can't ever be dividing by zero because of the "1 +" in the denominator
	let PQLMS = LMS.map (function (val) {
		let num = c1$1 + (c2$1 * ((val / 10000) ** m1));
		let denom = 1 + (c3$1 * ((val / 10000) ** m1));

		return (num / denom)  ** m2;
	});

	// LMS to IPT, with rotation for Y'C'bC'r compatibility
	return multiplyMatrices(LMStoIPT_M, PQLMS);
}

function ICtCptoLMS (ICtCp) {
	let PQLMS = multiplyMatrices(IPTtoLMS_M, ICtCp);

	// From BT.2124-0 Annex 2 Conversion 3
	let LMS = PQLMS.map (function (val) {
		let num  = Math.max((val ** im2) - c1$1, 0);
		let denom = (c2$1 - (c3$1 * (val ** im2)));
		return 10000 * ((num / denom) ** im1);
	});

	return LMS;
}

// Delta E in ICtCp space,
// which the ITU calls Delta E ITP, which is shorter
// formulae from ITU Rec. ITU-R BT.2124-0

function deltaEITP (color, sample) {
	// Given this color as the reference
	// and a sample,
	// calculate deltaE in ICtCp
	// which is simply the Euclidean distance

	let [ I1, T1, P1 ] = ictcp.from(color);
	let [ I2, T2, P2 ] = ictcp.from(sample);

	// the 0.25 factor is to undo the encoding scaling in Ct
	// the 720 is so that 1 deltaE = 1 JND
	// per  ITU-R BT.2124-0 p.3

	return 720 * Math.sqrt((I1 - I2) ** 2 + (0.25 * (T1 -T2) ** 2) + (P1 - P2) ** 2);
}

// Recalculated for consistent reference white
// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
const XYZtoLMS_M = [
	[ 0.8190224432164319,    0.3619062562801221,   -0.12887378261216414 ],
	[ 0.0329836671980271,    0.9292868468965546,     0.03614466816999844 ],
	[ 0.048177199566046255,  0.26423952494422764,    0.6335478258136937  ]
];
// inverse of XYZtoLMS_M
const LMStoXYZ_M = [
	[  1.2268798733741557,  -0.5578149965554813,   0.28139105017721583],
	[ -0.04057576262431372,  1.1122868293970594,  -0.07171106666151701],
	[ -0.07637294974672142, -0.4214933239627914,   1.5869240244272418 ]
];
const LMStoLab_M = [
	[  0.2104542553,   0.7936177850,  -0.0040720468 ],
	[  1.9779984951,  -2.4285922050,   0.4505937099 ],
	[  0.0259040371,   0.7827717662,  -0.8086757660 ]
];
// LMStoIab_M inverted
const LabtoLMS_M = [
	[ 0.99999999845051981432,  0.39633779217376785678,   0.21580375806075880339  ],
	[ 1.0000000088817607767,  -0.1055613423236563494,   -0.063854174771705903402 ],
	[ 1.0000000546724109177,  -0.089484182094965759684, -1.2914855378640917399   ]
];

var OKLab = new ColorSpace({
	id: "oklab",
    name: "OKLab",
    coords: {
		l: {
			refRange: [0, 1],
			name: "L"
		},
		a: {
			refRange: [-0.4, 0.4]
		},
		b: {
			refRange: [-0.4, 0.4]
		}
    },

	// Note that XYZ is relative to D65
  white: "D65",
	base: XYZ_D65,
	fromBase (XYZ) {
		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoLMS_M, XYZ);

		// non-linearity
		let LMSg = LMS.map(val => Math.cbrt(val));

		return multiplyMatrices(LMStoLab_M, LMSg);

	},
	toBase (OKLab) {
		// move to LMS cone domain
		let LMSg = multiplyMatrices(LabtoLMS_M, OKLab);

		// restore linearity
		let LMS = LMSg.map(val => val ** 3);

		return multiplyMatrices(LMStoXYZ_M, LMS);
	},

	formats: {
		"oklab": {
			coords: ["<percentage>", "<number>", "<number>"],
		}
	}
});

// More accurate color-difference formulae

function deltaEOK (color, sample) {
	// Given this color as the reference
	// and a sample,
	// calculate deltaEOK, term by term as root sum of squares
	let [L1, a1, b1] = OKLab.from(color);
	let [L2, a2, b2] = OKLab.from(sample);
	let ΔL = L1 - L2;
	let Δa = a1 - a2;
	let Δb = b1 - b2;
	return Math.sqrt(ΔL ** 2 + Δa ** 2 + Δb ** 2);
}

var deltaEMethods = /*#__PURE__*/Object.freeze({
	__proto__: null,
	deltaE76: deltaE76,
	deltaECMC: deltaECMC,
	deltaE2000: deltaE2000,
	deltaEJz: deltaEJz,
	deltaEITP: deltaEITP,
	deltaEOK: deltaEOK
});

function lighten (color, amount = .25) {
	let space = ColorSpace.get("oklch", "lch");
	let lightness = [space, "l"];
	return set$1(color, lightness, l => l * (1 + amount));
}

function darken (color, amount = .25) {
	let space = ColorSpace.get("oklch", "lch");
	let lightness = [space, "l"];
	return set$1(color, lightness, l => l * (1 - amount));
}

var variations = /*#__PURE__*/Object.freeze({
	__proto__: null,
	lighten: lighten,
	darken: darken
});

/**
 * Functions related to color interpolation
 */

/**
 * Return an intermediate color between two colors
 * Signatures: mix(c1, c2, p, options)
 *             mix(c1, c2, options)
 *             mix(color)
 * @param {Color | string} c1 The first color
 * @param {Color | string} [c2] The second color
 * @param {number} [p=.5] A 0-1 percentage where 0 is c1 and 1 is c2
 * @param {Object} [o={}]
 * @return {Color}
 */
function mix (c1, c2, p = .5, o = {}) {
	[c1, c2] = [getColor(c1), getColor(c2)];

	if (type(p) === "object") {
		[p, o] = [.5, p];
	}

	let {space, outputSpace} = o;

	let r = range(c1, c2, {space, outputSpace});
	return r(p);
}

/**
 *
 * @param {Color | string | Function} c1 The first color or a range
 * @param {Color | string} [c2] The second color if c1 is not a range
 * @param {Object} [options={}]
 * @return {Color[]}
 */
function steps (c1, c2, options = {}) {
	let colorRange;

	if (isRange(c1)) {
		// Tweaking existing range
		[colorRange, options] = [c1, c2];
		[c1, c2] = colorRange.rangeArgs.colors;
	}

	let {
		maxDeltaE, deltaEMethod,
		steps = 2, maxSteps = 1000,
		...rangeOptions
	} = options;

	if (!colorRange) {
		[c1, c2] = [getColor(c1), getColor(c2)];
		colorRange = range(c1, c2, rangeOptions);
	}

	let totalDelta = deltaE(c1, c2);
	let actualSteps = maxDeltaE > 0? Math.max(steps, Math.ceil(totalDelta / maxDeltaE) + 1) : steps;
	let ret = [];

	if (maxSteps !== undefined) {
		actualSteps = Math.min(actualSteps, maxSteps);
	}

	if (actualSteps === 1) {
		ret = [{p: .5, color: colorRange(.5)}];
	}
	else {
		let step = 1 / (actualSteps - 1);
		ret = Array.from({length: actualSteps}, (_, i) => {
			let p = i * step;
			return {p, color: colorRange(p)};
		});
	}

	if (maxDeltaE > 0) {
		// Iterate over all stops and find max deltaE
		let maxDelta = ret.reduce((acc, cur, i) => {
			if (i === 0) {
				return 0;
			}

			let ΔΕ = deltaE(cur.color, ret[i - 1].color, deltaEMethod);
			return Math.max(acc, ΔΕ);
		}, 0);

		while (maxDelta > maxDeltaE) {
			// Insert intermediate stops and measure maxDelta again
			// We need to do this for all pairs, otherwise the midpoint shifts
			maxDelta = 0;

			for (let i = 1; (i < ret.length) && (ret.length < maxSteps); i++) {
				let prev = ret[i - 1];
				let cur = ret[i];

				let p = (cur.p + prev.p) / 2;
				let color = colorRange(p);
				maxDelta = Math.max(maxDelta, deltaE(color, prev.color), deltaE(color, cur.color));
				ret.splice(i, 0, {p, color: colorRange(p)});
				i++;
			}
		}
	}

	ret = ret.map(a => a.color);

	return ret;
}
/**
 * Interpolate to color2 and return a function that takes a 0-1 percentage
 * @param {Color | string | Function} color1 The first color or an existing range
 * @param {Color | string} [color2] If color1 is a color, this is the second color
 * @param {Object} [options={}]
 * @returns {Function} A function that takes a 0-1 percentage and returns a color
 */
function range (color1, color2, options = {}) {
	if (isRange(color1)) {
		// Tweaking existing range
		let [r, options] = [color1, color2];

		return range(...r.rangeArgs.colors, {...r.rangeArgs.options, ...options});
	}

	let {space, outputSpace, progression, premultiplied} = options;

	color1 = getColor(color1);
	color2 = getColor(color2);

	// Make sure we're working on copies of these colors
	color1 = clone(color1);
	color2 = clone(color2);

	let rangeArgs = {colors: [color1, color2], options};

	if (space) {
		space = ColorSpace.get(space);
	}
	else {
		space = ColorSpace.registry[defaults.interpolationSpace] || color1.space;
	}

	outputSpace = outputSpace? ColorSpace.get(outputSpace) : space;

	color1 = to(color1, space);
	color2 = to(color2, space);

	// Gamut map to avoid areas of flat color
	color1 = toGamut(color1);
	color2 = toGamut(color2);

	// Handle hue interpolation
	// See https://github.com/w3c/csswg-drafts/issues/4735#issuecomment-635741840
	if (space.coords.h && space.coords.h.type === "angle") {
		let arc = options.hue = options.hue || "shorter";

		let hue = [space, "h"];
		let [θ1, θ2] = [get(color1, hue), get(color2, hue)];
		[θ1, θ2] = adjust(arc, [θ1, θ2]);
		set$1(color1, hue, θ1);
		set$1(color2, hue, θ2);
	}

	if (premultiplied) {
		// not coping with polar spaces yet
		color1.coords = color1.coords.map(c => c * color1.alpha);
		color2.coords = color2.coords.map(c => c * color2.alpha);
	}

	return Object.assign(p => {
		p = progression? progression(p) : p;
		let coords = color1.coords.map((start, i) => {
			let end = color2.coords[i];
			return interpolate(start, end, p);
		});

		let alpha = interpolate(color1.alpha, color2.alpha, p);
		let ret = {space, coords, alpha};

		if (premultiplied) {
			// undo premultiplication
			ret.coords = ret.coords.map(c => c / alpha);
		}

		if (outputSpace !== space) {
			ret = to(ret, outputSpace);
		}

		return ret;
	}, {
		rangeArgs
	});
}
function isRange (val) {
	return type(val) === "function" && !!val.rangeArgs;
}
defaults.interpolationSpace = "lab";

function register(Color) {
	Color.defineFunction("mix", mix, {returns: "color"});
	Color.defineFunction("range", range, {returns: "function<color>"});
	Color.defineFunction("steps", steps, {returns: "array<color>"});
}

var interpolation = /*#__PURE__*/Object.freeze({
	__proto__: null,
	mix: mix,
	steps: steps,
	range: range,
	isRange: isRange,
	register: register
});

var HSL = new ColorSpace({
	id: "hsl",
	name: "HSL",
	coords: {
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue"
		},
		s: {
			range: [0, 100],
			name: "Saturation"
		},
		l: {
			range: [0, 100],
			name: "Lightness"
		}
	},

	base: sRGB,

	// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
	fromBase: rgb => {
		let max = Math.max(...rgb);
		let min = Math.min(...rgb);
		let [r, g, b] = rgb;
		let [h, s, l] = [NaN, 0, (min + max)/2];
		let d = max - min;

		if (d !== 0) {
			s = (l === 0 || l === 1) ? 0 : (max - l) / Math.min(l, 1 - l);

			switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4;
			}

			h = h * 60;
		}

		return [h, s * 100, l * 100];
	},

	// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
	toBase: hsl => {
		let [h, s, l] = hsl;
		h = h % 360;

		if (h < 0) {
			h += 360;
		}

		s /= 100;
		l /= 100;

		function f(n) {
			let k = (n + h/30) % 12;
			let a = s * Math.min(l, 1 - l);
			return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
		}

		return [f(0), f(8), f(4)];
	},

	formats: {
		"hsl": {
			toGamut: true,
			coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
		},
		"hsla": {
			coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
			commas: true,
			lastAlpha: true,
		}
	},
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var HSV = new ColorSpace({
	id: "hsv",
	name: "HSV",
	coords: {
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue"
		},
		s: {
			range: [0, 100],
			name: "Saturation"
		},
		v: {
			range: [0, 100],
			name: "Value"
		}
	},

	base: HSL,
	// https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
	fromBase (hsl) {
		let [h, s, l] = hsl;
		s /= 100;
		l /= 100;

		let v = l + s * Math.min(l, 1 - l);

		return [
			h, // h is the same
			v === 0? 0 : 200 * (1 - l / v), // s
			100 * v
		];
	},
	// https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
	toBase (hsv) {
		let [h, s, v] = hsv;

		s /= 100;
		v /= 100;

		let l = v * (1 - s/2);

		return [
			h, // h is the same
			(l === 0 || l === 1)? 0 : ((v - l) / Math.min(l, 1 - l)) * 100,
			l * 100
		];
	},
	formats: {
		color: {
			toGamut: true,
		}
	}
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var hwb = new ColorSpace({
	id: "hwb",
	name: "HWB",
	coords: {
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue"
		},
		w: {
			range: [0, 100],
			name: "Whiteness"
		},
		b: {
			range: [0, 100],
			name: "Blackness"
		}
	},

	base: HSV,
	fromBase (hsv) {
		let [h, s, v] = hsv;

		return [h, v * (100 - s) / 100, 100 - v];
	},
	toBase (hwb) {
		let [h, w, b] = hwb;

		// Now convert percentages to [0..1]
		w /= 100;
		b /= 100;

		// Achromatic check (white plus black >= 1)
		let sum = w + b;
		if (sum >= 1) {
			 let gray = w / sum;
			 return [h, 0, gray * 100];
		}

		let v = (1 - b);
		let s = (v === 0) ? 0 : 1 - w / v;
		return [h, s * 100, v * 100];
	},

	formats: {
		"hwb": {
			toGamut: true,
			coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
		}
	}
});

// convert an array of linear-light a98-rgb values to CIE XYZ
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// has greater numerical precision than section 4.3.5.3 of
// https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
// but the values below were calculated from first principles
// from the chromaticity coordinates of R G B W
const toXYZ_M$2 = [
	[ 0.5766690429101305,   0.1855582379065463,   0.1882286462349947  ],
	[ 0.29734497525053605,  0.6273635662554661,   0.07529145849399788 ],
	[ 0.02703136138641234,  0.07068885253582723,  0.9913375368376388  ]
];

const fromXYZ_M$2 = [
	[  2.0415879038107465,    -0.5650069742788596,   -0.34473135077832956 ],
	[ -0.9692436362808795,     1.8759675015077202,    0.04155505740717557 ],
	[  0.013444280632031142,  -0.11836239223101838,   1.0151749943912054  ]
];

var A98Linear = new RGBColorSpace({
	id: "a98rgb-linear",
	name: "Linear Adobe® 98 RGB compatible",
	white: "D65",
	toXYZ_M: toXYZ_M$2,
	fromXYZ_M: fromXYZ_M$2
});

var a98rgb = new RGBColorSpace({
	id: "a98rgb",
	name: "Adobe® 98 RGB compatible",
	base: A98Linear,
	toBase: RGB => RGB.map(val => Math.pow(Math.abs(val), 563 / 256) * Math.sign(val)),
	fromBase: RGB => RGB.map(val => Math.pow(Math.abs(val), 256 / 563) * Math.sign(val)),
	formats: {
		color: {
			id: "a98-rgb"
		}
	},
});

// convert an array of  prophoto-rgb values to CIE XYZ
// using  D50 (so no chromatic adaptation needed afterwards)
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
const toXYZ_M$1 = [
	[ 0.7977604896723027,  0.13518583717574031,  0.0313493495815248     ],
	[ 0.2880711282292934,  0.7118432178101014,   0.00008565396060525902 ],
	[ 0.0,                 0.0,                  0.8251046025104601     ]
];

const fromXYZ_M$1 = [
	[  1.3457989731028281,  -0.25558010007997534,  -0.05110628506753401 ],
	[ -0.5446224939028347,   1.5082327413132781,    0.02053603239147973 ],
	[  0.0,                  0.0,                   1.2119675456389454  ]
];

var ProPhotoLinear = new RGBColorSpace({
	id: "prophoto-linear",
	name: "Linear ProPhoto",
	white: "D50",
	base: XYZ_D50,
	toXYZ_M: toXYZ_M$1,
	fromXYZ_M: fromXYZ_M$1
});

const Et = 1/512;
const Et2 = 16/512;

var prophoto = new RGBColorSpace({
	id: "prophoto",
	name: "ProPhoto",
	base: ProPhotoLinear,
	toBase(RGB) {
		// Transfer curve is gamma 1.8 with a small linear portion
		return RGB.map(v => v < Et2? v / 16 : v ** 1.8);
	},
	fromBase(RGB) {
		return RGB.map(v => v >= Et? v ** (1/1.8) : 16 * v);
	},
	formats: {
		color: {
			id: "prophoto-rgb"
		}
	},
});

var oklch = new ColorSpace({
	id: "oklch",
	name: "OKLCh",
	coords: {
		l: {
			refRange: [0, 1],
			name: "Lightness"
		},
		c: {
			refRange: [0, 0.4],
			name: "Chroma"
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue"
		}
	},
	white: "D65",

	base: OKLab,
	fromBase (oklab) {
		// Convert to polar form
		let [L, a, b] = oklab;
		let h;
		const ε = 0.0002; // chromatic components much smaller than a,b

		if (Math.abs(a) < ε && Math.abs(b) < ε) {
			h = NaN;
		}
		else {
			h = Math.atan2(b, a) * 180 / Math.PI;
		}

		return [
			L, // OKLab L is still L
			Math.sqrt(a ** 2 + b ** 2), // Chroma
			constrain(h) // Hue, in degrees [0 to 360)
		];
	},
	// Convert from polar form
	toBase (oklch) {
		let [L, C, h] = oklch;
		let a, b;

		// check for NaN hue
		if (isNaN(h)) {
			a = 0;
			b = 0;
		}
		else {
			a = C * Math.cos(h * Math.PI / 180);
			b = C * Math.sin(h * Math.PI / 180);
		}

		return [ L, a, b ];
	},

	formats: {
		"oklch": {
			coords: ["<percentage>", "<number>", "<number> | <angle>"],
		}
	}
});

const Yw = 203;	// absolute luminance of media white, cd/m²
const n = 2610 / (2 ** 14);
const ninv = (2 ** 14) / 2610;
const m = 2523 / (2 ** 5);
const minv = (2 ** 5) / 2523;
const c1 = 3424 / (2 ** 12);
const c2 = 2413 / (2 ** 7);
const c3 = 2392 / (2 ** 7);

var rec2100Pq = new RGBColorSpace({
	id: "rec2100pq",
	name: "REC.2100-PQ",
	base: REC2020Linear,
	toBase (RGB) {
		// given PQ encoded component in range [0, 1]
		// return media-white relative linear-light
		return RGB.map(function (val) {
			let x = ((Math.max(((val ** minv) - c1), 0) / (c2 - (c3 * (val ** minv)))) ** ninv);
			return (x * 10000 / Yw); 	// luminance relative to diffuse white, [0, 70 or so].
		});
	},
	fromBase (RGB) {
		// given media-white relative linear-light
		// returnPQ encoded component in range [0, 1]
		return RGB.map(function (val) {
			let x = Math.max(val * Yw / 10000, 0); 	// absolute luminance of peak white is 10,000 cd/m².
			let num = (c1 + (c2 * (x ** n)));
			let denom = (1 + (c3 * (x ** n)));

			return ((num / denom)  ** m);
		});
	},
	formats: {
		color: {
			id: "rec2100-pq"
		},
	},
});

// FIXME see https://github.com/LeaVerou/color.js/issues/190

const a = 0.17883277;
const b = 0.28466892; // 1 - (4 * a)
const c = 0.55991073; // 0.5 - a * Math.log(4 *a)

var rec2100Hlg = new RGBColorSpace({
	id: "rec2100hlg",
	cssid: "rec2100-hlg",
	name: "REC.2100-HLG",
	referred: "scene",

	base: REC2020Linear,
	toBase (RGB) {
		// given HLG encoded component in range [0, 1]
		// return media-white relative linear-light
		return RGB.map(function (val) {
			if (val <= 1/12) {
				return Math.sqrt( 3 * val);
			}
			return a * Math.log(12 * val - b) + c;
		});
	},
	fromBase (RGB) {
		// given media-white relative linear-light
		// return HLG encoded component in range [0, 1]
		// per ITU Rec BT.2390
		return RGB.map(function (val) {
			if (val <= 0.5) {
				return (val ** 2) / 3;
			}
			return Math.exp(((val - c) / a) + b) / 12;
		});
	},
	formats: {
		color: {
			id: "rec2100-hlg"
		},
	},
});

const CATs = {};

hooks.add("chromatic-adaptation-start", env => {
	if (env.options.method) {
		env.M = adapt(env.W1, env.W2, env.options.method);
	}
});

hooks.add("chromatic-adaptation-end", env => {
	if (!env.M) {
		env.M = adapt(env.W1, env.W2, env.options.method);
	}
});

function defineCAT ({id, toCone_M, fromCone_M}) {
	// Use id, toCone_M, fromCone_M like variables
	CATs[id] = arguments[0];
}
function adapt (W1, W2, id = "Bradford") {
	// adapt from a source whitepoint or illuminant W1
	// to a destination whitepoint or illuminant W2,
	// using the given chromatic adaptation transform (CAT)
	// debugger;
	let method = CATs[id];

	let [ρs, γs, βs] = multiplyMatrices(method.toCone_M, W1);
	let [ρd, γd, βd] = multiplyMatrices(method.toCone_M, W2);

	// all practical illuminants have non-zero XYZ so no division by zero can occur below
	let scale = [
		[ρd/ρs,    0,      0      ],
		[0,        γd/γs,  0      ],
		[0,        0,      βd/βs  ]
	];
	// console.log({scale});

	let scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
	let adapt_M	= multiplyMatrices(method.fromCone_M, scaled_cone_M);
	// console.log({scaled_cone_M, adapt_M});
	return adapt_M;
}
defineCAT({
	id: "von Kries",
	toCone_M: [
		[  0.4002400,  0.7076000, -0.0808100 ],
		[ -0.2263000,  1.1653200,  0.0457000 ],
		[  0.0000000,  0.0000000,  0.9182200 ]
	],
	fromCone_M: [
		[  1.8599364, -1.1293816,  0.2198974 ],
		[  0.3611914,  0.6388125, -0.0000064 ],
		[  0.0000000,  0.0000000,  1.0890636 ]
	]
});

defineCAT({
	id: "Bradford",
	// Convert an array of XYZ values in the range 0.0 - 1.0
	// to cone fundamentals
	toCone_M: [
		[  0.8951000,  0.2664000, -0.1614000 ],
		[ -0.7502000,  1.7135000,  0.0367000 ],
		[  0.0389000, -0.0685000,  1.0296000 ]
	],
	// and back
	fromCone_M: [
		[  0.9869929, -0.1470543,  0.1599627 ],
		[  0.4323053,  0.5183603,  0.0492912 ],
		[ -0.0085287,  0.0400428,  0.9684867 ]
	]
});

defineCAT({
	id: "CAT02",
	// with complete chromatic adaptation to W2, so D = 1.0
	toCone_M: [
		[  0.7328000,  0.4296000, -0.1624000 ],
		[ -0.7036000,  1.6975000,  0.0061000 ],
		[  0.0030000,  0.0136000,  0.9834000 ]
	],
	fromCone_M: [
		[  1.0961238, -0.2788690,  0.1827452 ],
		[  0.4543690,  0.4735332,  0.0720978 ],
		[ -0.0096276, -0.0056980,  1.0153256 ]
	]
});

defineCAT({
	id: "CAT16",
	toCone_M: [
		[  0.401288,  0.650173, -0.051461 ],
		[ -0.250268,  1.204414,  0.045854 ],
		[ -0.002079,  0.048952,  0.953127 ]
	],
	// the extra precision is needed to avoid roundtripping errors
	fromCone_M: [
		[  1.862067855087233e+0, -1.011254630531685e+0,   1.491867754444518e-1 ],
		[  3.875265432361372e-1,  6.214474419314753e-1,  -8.973985167612518e-3 ],
		[ -1.584149884933386e-2, -3.412293802851557e-2,   1.049964436877850e+0 ]
	]
});

Object.assign(WHITES, {
	// whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
	// all normalized to Y (luminance) = 1.00000
	// Illuminant A is a tungsten electric light, giving a very warm, orange light.
	A:  [1.09850, 1.00000, 0.35585],

	// Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
	C:   [0.98074, 1.000000, 1.18232],

	// The daylight series of illuminants simulate natural daylight.
	// The color temperature (in degrees Kelvin/100) ranges from
	// cool, overcast daylight (D50) to bright, direct sunlight (D65).
	D55: [0.95682, 1.00000, 0.92149],
	D75: [0.94972, 1.00000, 1.22638],

	// Equal-energy illuminant, used in two-stage CAT16
	E:   [1.00000, 1.00000, 1.00000],

	// The F series of illuminants represent fluorescent lights
	F2:  [0.99186, 1.00000, 0.67393],
	F7:  [0.95041, 1.00000, 1.08747],
	F11: [1.00962, 1.00000, 0.64350],
});

// The ACES whitepoint
// see TB-2018-001 Derivation of the ACES White Point CIE Chromaticity Coordinates
// also https://github.com/ampas/aces-dev/blob/master/documents/python/TB-2018-001/aces_wp.py
// Similar to D60
WHITES.ACES = [0.32168/0.33767, 1.00000, (1.00000 - 0.32168 - 0.33767)/0.33767];

// convert an array of linear-light ACEScc values to CIE XYZ
const toXYZ_M = [
	[  0.6624541811085053,   0.13400420645643313,  0.1561876870049078  ],
	[  0.27222871678091454,  0.6740817658111484,   0.05368951740793705 ],
	[ -0.005574649490394108, 0.004060733528982826, 1.0103391003129971  ]
];
const fromXYZ_M = [
	[  1.6410233796943257,   -0.32480329418479,    -0.23642469523761225  ],
	[ -0.6636628587229829,    1.6153315916573379,   0.016756347685530137 ],
	[  0.011721894328375376, -0.008284441996237409, 0.9883948585390215   ]
];

var ACEScg = new RGBColorSpace({
	id: "acescg",
	name: "ACEScg",

	// ACEScg – A scene-referred, linear-light encoding of ACES Data
	// https://docs.acescentral.com/specifications/acescg/
	// uses the AP1 primaries, see section 4.3.1 Color primaries
	coords: {
		r: {
			range: [0, 65504],
			name: "Red"
		},
		g: {
			range: [0, 65504],
			name: "Green"
		},
		b: {
			range: [0, 65504],
			name: "Blue"
		}
	},

	referred: "scene",

	white: WHITES.ACES,

	toXYZ_M,
	fromXYZ_M,

	formats: {
		color: {}
	},
});

// export default Color;

const ε = 2 ** -16;

// the smallest value which, in the 32bit IEEE 754 float encoding,
// decodes as a non-negative value
const ACES_min_nonzero = -0.35828683;

// brightest encoded value, decodes to 65504
const ACES_cc_max = (Math.log2(65504) + 9.72) / 17.52; // 1.468

var acescc = new RGBColorSpace({
	id: "acescc",
	name: "ACEScc",
	// see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
	// https://docs.acescentral.com/specifications/acescc/
	// uses the AP1 primaries, see section 4.3.1 Color primaries

	// Appendix A: "Very small ACES scene referred values below 7 1/4 stops
	// below 18% middle gray are encoded as negative ACEScc values.
	// These values should be preserved per the encoding in Section 4.4
	// so that all positive ACES values are maintained."
	coords: {
		r: {
			range: [ACES_min_nonzero, ACES_cc_max],
			name: "Red"
		},
		g: {
			range: [ACES_min_nonzero, ACES_cc_max],
			name: "Green"
		},
		b: {
			range: [ACES_min_nonzero, ACES_cc_max],
			name: "Blue"
		}
	},
	referred: "scene",

	base: ACEScg,
	// from section 4.4.2 Decoding Function
	toBase (RGB) {
		const low = (9.72 - 15) / 17.52; // -0.3014

		return RGB.map(function (val) {
			if (val <= low) {
				return (2 ** ((val * 17.52) - 9.72) - ε) * 2; // very low values, below -0.3014
			}
			else if (val < ACES_cc_max) {
				return 2 ** ((val * 17.52) - 9.72);
			}
			else { // val >= ACES_cc_max
				return 65504;
			}
		});
	},

	// Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
	fromBase (RGB) {
		return RGB.map(function (val) {
			if (val <= 0) {
				return (Math.log2(ε) + 9.72) / 17.52; // -0.3584
			}
			else if (val < ε) {
				return  (Math.log2(ε + val * 0.5) + 9.72) / 17.52;
			}
			else { // val >= ε
				return  (Math.log2(val) + 9.72) / 17.52;
			}
		});
	},
	// encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
	// encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
	formats: {
		color: {}
	}
});

var spaces = /*#__PURE__*/Object.freeze({
	__proto__: null,
	XYZ_D65: XYZ_D65,
	XYZ_D50: XYZ_D50,
	XYZ_ABS_D65: XYZ_Abs_D65,
	Lab: lab,
	LCH: lch,
	sRGB_Linear: sRGBLinear,
	sRGB: sRGB,
	HSL: HSL,
	HWB: hwb,
	HSV: HSV,
	P3_Linear: P3Linear,
	P3: P3,
	A98RGB_Linear: A98Linear,
	A98RGB: a98rgb,
	ProPhoto_Linear: ProPhotoLinear,
	ProPhoto: prophoto,
	REC_2020_Linear: REC2020Linear,
	REC_2020: REC2020,
	OKLab: OKLab,
	OKLCH: oklch,
	Jzazbz: Jzazbz,
	JzCzHz: jzczhz,
	ICTCP: ictcp,
	REC_2100_PQ: rec2100Pq,
	REC_2100_HLG: rec2100Hlg,
	ACEScg: ACEScg,
	ACEScc: acescc
});

/**
 * Class that represents a color
 */
class Color {
	/**
	 * Creates an instance of Color.
	 * Signatures:
	 * - `new Color(stringToParse)`
	 * - `new Color(otherColor)`
	 * - `new Color({space, coords, alpha})`
	 * - `new Color(space, coords, alpha)`
	 * - `new Color(spaceId, coords, alpha)`
	 */
	constructor (...args) {
		let color;

		if (args.length === 1) {
			color = getColor(args[0]);
		}

		let space, coords, alpha;

		if (color) {
			space = color.space || color.spaceId;
			coords = color.coords;
			alpha = color.alpha;
		}
		else {
			// default signature new Color(ColorSpace, array [, alpha])
			[space, coords, alpha] = args;
		}

		this.#space = ColorSpace.get(space);
		this.coords = coords? coords.slice() : [0, 0, 0];
		this.alpha = alpha < 1? alpha : 1; // this also deals with NaN etc

		// Convert "NaN" to NaN
		for (let i = 0; i < this.coords.length; i++) {
			if (this.coords[i] === "NaN") {
				this.coords[i] = NaN;
			}
		}

		// Define getters and setters for each coordinate
		for (let id in this.#space.coords) {
			Object.defineProperty(this, id, {
				get: () => this.get(id),
				set: value => this.set(id, value)
			});
		}
	}

	#space

	get space() {
		return this.#space;
	}

	get spaceId() {
		return this.#space.id;
	}

	clone () {
		return new Color(this.space, this.coords, this.alpha);
	}

	toJSON () {
		return {
			spaceId: this.spaceId,
			coords: this.coords,
			alpha: this.alpha
		};
	}

	display (...args) {
		let ret = display(this, ...args);

		// Convert color object to Color instance
		ret.color = new Color(ret.color);

		return ret;
	}

	/**
	 * Get a color from the argument passed
	 * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
	 */
	static get (color, ...args) {
		if (color instanceof Color) {
			return color;
		}

		return new Color(color, ...args);
	}

	static defineFunction (name, code, {instance = true, returns} = {}) {
		let func = function (...args) {
			let ret = code(...args);

			if (returns === "color") {
				ret = Color.get(ret);
			}
			else if (returns === "function<color>") {
				let f = ret;
				ret = function(...args) {
					let ret = f(...args);
					return Color.get(ret);
				};
				// Copy any function metadata
				Object.assign(ret, f);
			}
			else if (returns === "array<color>") {
				ret = ret.map(c => Color.get(c));
			}

			return ret;
		};

		if (!(name in Color)) {
			Color[name] = func;
		}

		if (instance) {
			Color.prototype[name] = function (...args) {
				return func(this, ...args);
			};
		}
	}

	static defineFunctions(o) {
		for (let name in o) {
			Color.defineFunction(name, o[name], o[name]);
		}
	}

	static extend (exports) {
		if (exports.register) {
			exports.register(Color);
		}
		else {
			// No register method, just add the module's functions
			for (let name in exports) {
				Color.defineFunction(name, exports[name], exports[name]);
			}
		}
	}
}
Color.defineFunctions({
	get,
	getAll,
	set: set$1,
	setAll,
	to,
	equals,
	inGamut,
	toGamut,
	distance,
	toString: serialize,
});

Object.assign(Color, {
	util,
	hooks,
	WHITES,
	Space: ColorSpace,
	spaces: ColorSpace.registry,
	parse,

	// Global defaults one may want to configure
	defaults
});

for (let key of Object.keys(spaces)) {
	ColorSpace.register(spaces[key]);
}

/**
 * This plugin defines getters and setters for color[spaceId]
 * e.g. color.lch on *any* color gives us the lch coords
 */

// Add space accessors to existing color spaces
for (let id in ColorSpace.registry) {
	addSpaceAccessors(id, ColorSpace.registry[id]);
}

// Add space accessors to color spaces not yet created
hooks.add("colorspace-init-end", addSpaceAccessors);

function addSpaceAccessors (id, space) {
	// Coordinates can be looked up by both id and name
	Object.keys(space.coords);
	Object.values(space.coords).map(c => c.name);


	let propId = id.replace(/-/g, "_");

	Object.defineProperty(Color.prototype, propId, {
		// Convert coords to coords in another colorspace and return them
		// Source colorspace: this.spaceId
		// Target colorspace: id
		get () {
			let ret = this.getAll(id);

			if (typeof Proxy === "undefined") {
				// If proxies are not supported, just return a static array
				return ret;
			}

			// Enable color.spaceId.coordName syntax
			return new Proxy(ret, {
				has: (obj, property) => {
					try {
						ColorSpace.resolveCoord([space, property]);
						return true;
					}
					catch(e) {}

					return Reflect.has(obj, property);
				},
				get: (obj, property, receiver) => {
					if (property && typeof property !== "symbol" && !(property in obj)) {
						let {index} = ColorSpace.resolveCoord([space, property]);

						if (index >= 0) {
							return obj[index];
						}
					}

					return Reflect.get(obj, property, receiver);
				},
				set: (obj, property, value, receiver) => {
					if (property && typeof property !== "symbol" && !(property in obj) || property >= 0) {
						let {index} = ColorSpace.resolveCoord([space, property]);

						if (index >= 0) {
							obj[index] = value;

							// Update color.coords
							this.setAll(id, obj);

							return true;
						}
					}

					return Reflect.set(obj, property, value, receiver);
				},
			});
		},
		// Convert coords in another colorspace to internal coords and set them
		// Target colorspace: this.spaceId
		// Source colorspace: id
		set (coords) {
			this.setAll(id, coords);
		},
		configurable: true,
		enumerable: true
	});
}

// Import all modules of Color.js
for (let method in deltaEMethods) {
	let id = method.replace(/^deltaE/, "");
	registerMethod(id, deltaEMethods[method]);
}
Color.extend(deltaE$1);
Color.extend(variations);
Color.extend(contrast$1);
Color.extend(chromaticity);
Color.extend(luminance);
Color.extend(interpolation);

function createZeroes(count) {
    let result = '';
    while (result.length < count) {
        result += '0';
    }
    return result;
}
const cache = [];
function repeatZeroes(count) {
    if (count <= 0) {
        return '';
    }
    const cached = cache[count];
    if (cached !== undefined) {
        return cached;
    }
    const computed = createZeroes(count);
    cache[count] = computed;
    return computed;
}
function trailZeroes(places) {
    return places > 0 ? '.' + repeatZeroes(places) : '';
}
// For example: if two exponents are more than 17 apart,
// consider adding them together pointless, just return the larger one
const MAX_SIGNIFICANT_DIGITS = 17;
// Highest value you can safely put here is Number.MAX_SAFE_INTEGER-MAX_SIGNIFICANT_DIGITS
const EXP_LIMIT = 9e15;
// The largest exponent that can appear in a Number, though not all mantissas are valid here.
const NUMBER_EXP_MAX = 308;
// The smallest exponent that can appear in a Number, though not all mantissas are valid here.
const NUMBER_EXP_MIN = -324;
// Tolerance which is used for Number conversion to compensate floating-point error.
const ROUND_TOLERANCE = 1e-10;
// We need this lookup table because Math.pow(10, exponent)
// when exponent's absolute value is large is slightly inaccurate.
// You can fix it with the power of math... or just make a lookup table.
// Faster AND simpler
const powersOf10 = [];
for (let i = NUMBER_EXP_MIN + 1; i <= NUMBER_EXP_MAX; i++) {
    powersOf10.push(Number('1e' + i));
}
const indexOf0InPowersOf10 = 323;
function powerOf10(power) {
    return powersOf10[power + indexOf0InPowersOf10];
}
const D = (value) => value instanceof Decimal ? value : new Decimal(value);
const ME = (mantissa, exponent) => new Decimal().fromMantissaExponent(mantissa, exponent);
const ME_NN = (mantissa, exponent) => new Decimal().fromMantissaExponent_noNormalize(mantissa, exponent);
function affordGeometricSeries(resourcesAvailable, priceStart, priceRatio, currentOwned) {
    const actualStart = priceStart.mul(priceRatio.pow(currentOwned));
    return Decimal.floor(resourcesAvailable.div(actualStart).mul(priceRatio.sub(1)).add(1).log10() /
        priceRatio.log10());
}
function sumGeometricSeries(numItems, priceStart, priceRatio, currentOwned) {
    return priceStart
        .mul(priceRatio.pow(currentOwned))
        .mul(Decimal.sub(1, priceRatio.pow(numItems)))
        .div(Decimal.sub(1, priceRatio));
}
function affordArithmeticSeries(resourcesAvailable, priceStart, priceAdd, currentOwned) {
    // n = (-(a-d/2) + sqrt((a-d/2)^2+2dS))/d
    // where a is actualStart, d is priceAdd and S is resourcesAvailable
    // then floor it and you're done!
    const actualStart = priceStart.add(currentOwned.mul(priceAdd));
    const b = actualStart.sub(priceAdd.div(2));
    const b2 = b.pow(2);
    return b
        .neg()
        .add(b2.add(priceAdd.mul(resourcesAvailable).mul(2)).sqrt())
        .div(priceAdd)
        .floor();
}
function sumArithmeticSeries(numItems, priceStart, priceAdd, currentOwned) {
    const actualStart = priceStart.add(currentOwned.mul(priceAdd));
    // (n/2)*(2*a+(n-1)*d)
    return numItems
        .div(2)
        .mul(actualStart.mul(2).plus(numItems.sub(1).mul(priceAdd)));
}
function efficiencyOfPurchase(cost, currentRpS, deltaRpS) {
    return cost.div(currentRpS).add(cost.div(deltaRpS));
}
function cmp(left, right) {
    // TODO: sign(a-b) might be better? https://github.com/Patashu/break_infinity.js/issues/12
    if (left.m === 0) {
        if (right.m === 0) {
            return 0;
        }
        if (right.m < 0) {
            return 1;
        }
        if (right.m > 0) {
            return -1;
        }
    }
    if (right.m === 0) {
        if (left.m < 0) {
            return -1;
        }
        if (left.m > 0) {
            return 1;
        }
    }
    if (left.m > 0) {
        if (right.m < 0) {
            return 1;
        }
        if (left.e > right.e) {
            return 1;
        }
        if (left.e < right.e) {
            return -1;
        }
        if (left.m > right.m) {
            return 1;
        }
        if (left.m < right.m) {
            return -1;
        }
        return 0;
    }
    if (left.m < 0) {
        if (right.m > 0) {
            return -1;
        }
        if (left.e > right.e) {
            return -1;
        }
        if (left.e < right.e) {
            return 1;
        }
        if (left.m > right.m) {
            return 1;
        }
        if (left.m < right.m) {
            return -1;
        }
        return 0;
    }
    throw Error('Unreachable code');
}
/**
 * The Decimal's value is simply mantissa * 10^exponent.
 */
class Decimal {
    constructor(value) {
        /**
         * A number (double) with absolute value between [1, 10) OR exactly 0.
         * If mantissa is ever 10 or greater, it should be normalized
         * (divide by 10 and add 1 to exponent until it is less than 10,
         * or multiply by 10 and subtract 1 from exponent until it is 1 or greater).
         * Infinity/-Infinity/NaN will cause bad things to happen.
         */
        this.mantissa = NaN;
        /**
         * A number (integer) between -EXP_LIMIT and EXP_LIMIT.
         * Non-integral/out of bounds will cause bad things to happen.
         */
        this.exponent = NaN;
        if (value === undefined) {
            this.m = 0;
            this.e = 0;
        }
        else if (value instanceof Decimal) {
            this.fromDecimal(value);
        }
        else if (typeof value === 'number') {
            this.fromNumber(value);
        }
        else {
            this.fromString(value);
        }
    }
    get m() {
        return this.mantissa;
    }
    set m(value) {
        this.mantissa = value;
    }
    get e() {
        return this.exponent;
    }
    set e(value) {
        this.exponent = value;
    }
    get s() {
        return this.sign();
    }
    set s(value) {
        if (value === 0) {
            this.e = 0;
            this.m = 0;
            return;
        }
        if (this.sgn() !== value) {
            this.m = -this.m;
        }
    }
    //#region fromMantissaExponent
    fromMantissaExponent(mantissa, exponent) {
        // SAFETY: don't let in non-numbers
        if (!isFinite(mantissa) || !isFinite(exponent)) {
            return this.fromDecimal(DECIMAL_NaN);
        }
        this.m = mantissa;
        this.e = exponent;
        // Non-normalized mantissas can easily get here, so this is mandatory.
        this.normalize();
        return this;
    }
    static fromMantissaExponent(mantissa, exponent) {
        return new Decimal().fromMantissaExponent(mantissa, exponent);
    }
    //#endregion
    //#region fromMantissaExponent_noNormalize
    /**
     * Well, you know what you're doing!
     */
    fromMantissaExponent_noNormalize(mantissa, exponent) {
        this.m = mantissa;
        this.e = exponent;
        return this;
    }
    static fromMantissaExponent_noNormalize(mantissa, exponent) {
        return new Decimal().fromMantissaExponent_noNormalize(mantissa, exponent);
    }
    //#endregion
    //#region fromDecimal
    fromDecimal(value) {
        this.m = value.m;
        this.e = value.e;
        return this;
    }
    static fromDecimal(value) {
        return new Decimal().fromDecimal(value);
    }
    //#endregion
    //#region fromNumber
    fromNumber(value) {
        if (!isFinite(value)) {
            return this.fromMantissaExponent_noNormalize(value, 0);
        }
        if (value === 0) {
            this.m = 0;
            this.e = 0;
            return this;
        }
        this.e = Math.floor(Math.log10(Math.abs(value)));
        // SAFETY: handle 5e-324, -5e-324 separately
        this.m =
            this.e === NUMBER_EXP_MIN
                ? (value * 10) / 1e-323
                : value / powerOf10(this.e);
        // SAFETY: Prevent weirdness.
        this.normalize();
        return this;
    }
    static fromNumber(value) {
        return new Decimal().fromNumber(value);
    }
    //#endregion
    //#region fromString
    fromString(value) {
        if (value.indexOf('e') !== -1) {
            const parts = value.split('e');
            this.m = parseFloat(parts[0]);
            this.e = parseFloat(parts[1]);
            return this.normalize();
        }
        if (value === 'NaN') {
            return this.fromDecimal(DECIMAL_NaN);
        }
        this.fromNumber(parseFloat(value));
        if (this.isNaN()) {
            throw Error('[DecimalError] Invalid argument: ' + value);
        }
        return this;
    }
    static fromString(value) {
        return new Decimal().fromString(value);
    }
    //#endregion
    //#region fromValue
    fromValue(value) {
        if (value instanceof Decimal) {
            return this.fromDecimal(value);
        }
        if (typeof value === 'number') {
            return this.fromNumber(value);
        }
        if (typeof value === 'string') {
            return this.fromString(value);
        }
        this.m = 0;
        this.e = 0;
        return this;
    }
    static fromValue(value) {
        return new Decimal().fromValue(value);
    }
    static fromValue_noAlloc(value) {
        return value instanceof Decimal ? value : new Decimal(value);
    }
    //#endregion
    //#region abs
    abs() {
        return ME_NN(Math.abs(this.m), this.e);
    }
    static abs(value) {
        return D(value).abs();
    }
    //#endregion
    //#region neg
    neg() {
        return ME_NN(-this.m, this.e);
    }
    static neg(value) {
        return D(value).neg();
    }
    negate() {
        return this.neg();
    }
    static negate(value) {
        return D(value).neg();
    }
    negated() {
        return this.neg();
    }
    static negated(value) {
        return D(value).neg();
    }
    //#endregion
    //#region sgn
    sgn() {
        return Math.sign(this.m);
    }
    static sgn(value) {
        return D(value).sgn();
    }
    sign() {
        return this.sgn();
    }
    static sign(value) {
        return D(value).sgn();
    }
    //#endregion
    //#region round
    round() {
        if (this.e < -1) {
            return new Decimal(0);
        }
        if (this.e < MAX_SIGNIFICANT_DIGITS) {
            return new Decimal(Math.round(this.toNumber()));
        }
        return this;
    }
    static round(value) {
        return D(value).round();
    }
    //#endregion
    //#region floor
    floor() {
        if (!this.isFinite()) {
            return this;
        }
        if (this.e < -1) {
            return Math.sign(this.m) >= 0 ? new Decimal(0) : new Decimal(-1);
        }
        if (this.e < MAX_SIGNIFICANT_DIGITS) {
            return new Decimal(Math.floor(this.toNumber()));
        }
        return this;
    }
    static floor(value) {
        return D(value).floor();
    }
    //#endregion
    //#region ceil
    ceil() {
        if (this.e < -1) {
            return Math.sign(this.m) > 0 ? new Decimal(1) : new Decimal(0);
        }
        if (this.e < MAX_SIGNIFICANT_DIGITS) {
            return new Decimal(Math.ceil(this.toNumber()));
        }
        return this;
    }
    static ceil(value) {
        return D(value).ceil();
    }
    //#endregion
    //#region trunc
    trunc() {
        if (this.e < 0) {
            return new Decimal(0);
        }
        if (this.e < MAX_SIGNIFICANT_DIGITS) {
            return new Decimal(Math.trunc(this.toNumber()));
        }
        return this;
    }
    static trunc(value) {
        return D(value).trunc();
    }
    //#endregion
    //#region add
    add(value) {
        // figure out which is bigger, shrink the mantissa of the smaller
        // by the difference in exponents, add mantissas, normalize and return
        // TODO: Optimizations and simplification may be possible, see https://github.com/Patashu/break_infinity.js/issues/8
        if (!this.isFinite()) {
            return this;
        }
        const decimal = D(value);
        if (!decimal.isFinite()) {
            return decimal;
        }
        if (this.m === 0) {
            return decimal;
        }
        if (decimal.m === 0) {
            return this;
        }
        let biggerDecimal;
        let smallerDecimal;
        if (this.e >= decimal.e) {
            biggerDecimal = this;
            smallerDecimal = decimal;
        }
        else {
            biggerDecimal = decimal;
            smallerDecimal = this;
        }
        if (biggerDecimal.e - smallerDecimal.e > MAX_SIGNIFICANT_DIGITS) {
            return biggerDecimal;
        }
        // Have to do this because adding numbers that were once integers but scaled down is imprecise.
        // Example: 299 + 18
        const mantissa = Math.round(1e14 * biggerDecimal.m +
            1e14 * smallerDecimal.m * powerOf10(smallerDecimal.e - biggerDecimal.e));
        return ME(mantissa, biggerDecimal.e - 14);
    }
    static add(value, other) {
        return D(value).add(other);
    }
    plus(value) {
        return this.add(value);
    }
    static plus(value, other) {
        return D(value).add(other);
    }
    //#endregion
    //#region sub
    sub(value) {
        return this.add(D(value).neg());
    }
    static sub(value, other) {
        return D(value).sub(other);
    }
    subtract(value) {
        return this.sub(value);
    }
    static subtract(value, other) {
        return D(value).sub(other);
    }
    static minus(value, other) {
        return D(value).sub(other);
    }
    minus(value) {
        return this.sub(value);
    }
    //#endregion
    //#region mul
    mul(value) {
        // This version avoids an extra conversion to Decimal, if possible. Since the
        // mantissa is -10...10, any number short of MAX/10 can be safely multiplied in
        if (typeof value === 'number') {
            if (value < 1e307 && value > -1e307) {
                return ME(this.m * value, this.e);
            }
            // If the value is larger than 1e307, we can divide that out of mantissa (since it's
            // greater than 1, it won't underflow)
            return ME(this.m * 1e-307 * value, this.e + 307);
        }
        const decimal = typeof value === 'string' ? new Decimal(value) : value;
        return ME(this.m * decimal.m, this.e + decimal.e);
    }
    static mul(value, other) {
        return D(value).mul(other);
    }
    multiply(value) {
        return this.mul(value);
    }
    static multiply(value, other) {
        return D(value).mul(other);
    }
    times(value) {
        return this.mul(value);
    }
    static times(value, other) {
        return D(value).mul(other);
    }
    //#endregion
    //#region div
    div(value) {
        return this.mul(D(value).recip());
    }
    static div(value, other) {
        return D(value).div(other);
    }
    divide(value) {
        return this.div(value);
    }
    static divide(value, other) {
        return D(value).div(other);
    }
    divideBy(value) {
        return this.div(value);
    }
    dividedBy(value) {
        return this.div(value);
    }
    //#endregion
    //#region recip
    recip() {
        return ME(1 / this.m, -this.e);
    }
    static recip(value) {
        return D(value).recip();
    }
    reciprocal() {
        return this.recip();
    }
    static reciprocal(value) {
        return D(value).recip();
    }
    reciprocate() {
        return this.recip();
    }
    static reciprocate(value) {
        return D(value).reciprocate();
    }
    //#endregion
    //#region cmp
    /**
     * -1 for less than value, 0 for equals value, 1 for greater than value
     */
    cmp(value) {
        const decimal = D(value);
        if (this.isNaN()) {
            if (decimal.isNaN()) {
                return 0;
            }
            return -1;
        }
        if (decimal.isNaN()) {
            return 1;
        }
        return cmp(this, decimal);
    }
    static cmp(value, other) {
        return D(value).cmp(other);
    }
    compare(value) {
        return this.cmp(value);
    }
    static compare(value, other) {
        return D(value).cmp(other);
    }
    //#endregion
    //#region eq
    eq(value) {
        const decimal = D(value);
        return this.e === decimal.e && this.m === decimal.m;
    }
    static eq(value, other) {
        return D(value).eq(other);
    }
    equals(value) {
        return this.eq(value);
    }
    static equals(value, other) {
        return D(value).eq(other);
    }
    //#endregion
    //#region neq
    neq(value) {
        return !this.eq(value);
    }
    static neq(value, other) {
        return D(value).neq(other);
    }
    notEquals(value) {
        return this.neq(value);
    }
    static notEquals(value, other) {
        return D(value).notEquals(other);
    }
    //#endregion
    //#region lt
    lt(value) {
        const decimal = D(value);
        if (this.m === 0) {
            return decimal.m > 0;
        }
        if (decimal.m === 0) {
            return this.m <= 0;
        }
        if (this.e === decimal.e) {
            return this.m < decimal.m;
        }
        if (this.m > 0) {
            return decimal.m > 0 && this.e < decimal.e;
        }
        return decimal.m > 0 || this.e > decimal.e;
    }
    static lt(value, other) {
        return D(value).lt(other);
    }
    lessThan(other) {
        if (this.isNaN()) {
            return false;
        }
        const decimal = D(other);
        if (decimal.isNaN()) {
            return false;
        }
        return cmp(this, decimal) < 0;
    }
    //#endregion
    //#region lte
    lte(value) {
        return !this.gt(value);
    }
    static lte(value, other) {
        return D(value).lte(other);
    }
    lessThanOrEqualTo(other) {
        if (this.isNaN()) {
            return false;
        }
        const decimal = D(other);
        if (decimal.isNaN()) {
            return false;
        }
        return cmp(this, decimal) < 1;
    }
    //#endregion
    //#region gt
    gt(value) {
        const decimal = D(value);
        if (this.m === 0) {
            return decimal.m < 0;
        }
        if (decimal.m === 0) {
            return this.m > 0;
        }
        if (this.e === decimal.e) {
            return this.m > decimal.m;
        }
        if (this.m > 0) {
            return decimal.m < 0 || this.e > decimal.e;
        }
        return decimal.m < 0 && this.e < decimal.e;
    }
    static gt(value, other) {
        return D(value).gt(other);
    }
    greaterThan(other) {
        if (this.isNaN()) {
            return false;
        }
        const decimal = D(other);
        if (decimal.isNaN()) {
            return false;
        }
        return cmp(this, decimal) > 0;
    }
    //#endregion
    //#region gte
    gte(value) {
        return !this.lt(value);
    }
    static gte(value, other) {
        return D(value).gte(other);
    }
    greaterThanOrEqualTo(other) {
        if (this.isNaN()) {
            return false;
        }
        const decimal = D(other);
        if (decimal.isNaN()) {
            return false;
        }
        return cmp(this, decimal) > -1;
    }
    //#endregion
    //#region max
    max(value) {
        const decimal = D(value);
        return this.lt(decimal) ? decimal : this;
    }
    static max(value, other) {
        return D(value).max(other);
    }
    //#endregion
    //#region min
    min(value) {
        const decimal = D(value);
        return this.gt(decimal) ? decimal : this;
    }
    static min(value, other) {
        return D(value).min(other);
    }
    //#endregion
    //#region clamp
    clamp(min, max) {
        return this.max(min).min(max);
    }
    static clamp(value, min, max) {
        return D(value).clamp(min, max);
    }
    //#endregion
    //#region clampMin
    clampMin(min) {
        return this.max(min);
    }
    static clampMin(value, min) {
        return D(value).clampMin(min);
    }
    //#endregion
    //#region clampMax
    clampMax(max) {
        return this.min(max);
    }
    static clampMax(value, max) {
        return D(value).clampMax(max);
    }
    //#endregion
    //#region cmp_tolerance
    cmp_tolerance(value, tolerance) {
        const decimal = D(value);
        return this.eq_tolerance(decimal, tolerance) ? 0 : this.cmp(decimal);
    }
    static cmp_tolerance(value, other, tolerance) {
        return D(value).cmp_tolerance(other, tolerance);
    }
    compare_tolerance(value, tolerance) {
        return this.cmp_tolerance(value, tolerance);
    }
    static compare_tolerance(value, other, tolerance) {
        return D(value).cmp_tolerance(other, tolerance);
    }
    //#endregion
    //#region eq_tolerance
    /**
     * Tolerance is a relative tolerance, multiplied by the greater of the magnitudes of the two arguments.
     * For example, if you put in 1e-9, then any number closer to the
     * larger number than (larger number)*1e-9 will be considered equal.
     */
    eq_tolerance(value, tolerance) {
        const decimal = D(value);
        // https://stackoverflow.com/a/33024979
        // return abs(a-b) <= tolerance * max(abs(a), abs(b))
        return Decimal.lte(this.sub(decimal).abs(), Decimal.max(this.abs(), decimal.abs()).mul(tolerance));
    }
    static eq_tolerance(value, other, tolerance) {
        return D(value).eq_tolerance(other, tolerance);
    }
    equals_tolerance(value, tolerance) {
        return this.eq_tolerance(value, tolerance);
    }
    static equals_tolerance(value, other, tolerance) {
        return D(value).eq_tolerance(other, tolerance);
    }
    //#endregion
    //#region neq_tolerance
    neq_tolerance(value, tolerance) {
        return !this.eq_tolerance(value, tolerance);
    }
    static neq_tolerance(value, other, tolerance) {
        return D(value).neq_tolerance(other, tolerance);
    }
    notEquals_tolerance(value, tolerance) {
        return this.neq_tolerance(value, tolerance);
    }
    static notEquals_tolerance(value, other, tolerance) {
        return D(value).notEquals_tolerance(other, tolerance);
    }
    //#endregion
    //#region lt_tolerance
    lt_tolerance(value, tolerance) {
        const decimal = D(value);
        return !this.eq_tolerance(decimal, tolerance) && this.lt(decimal);
    }
    static lt_tolerance(value, other, tolerance) {
        return D(value).lt_tolerance(other, tolerance);
    }
    //#endregion
    //#region lte_tolerance
    lte_tolerance(value, tolerance) {
        const decimal = D(value);
        return this.eq_tolerance(decimal, tolerance) || this.lt(decimal);
    }
    static lte_tolerance(value, other, tolerance) {
        return D(value).lte_tolerance(other, tolerance);
    }
    //#endregion
    //#region gt_tolerance
    gt_tolerance(value, tolerance) {
        const decimal = D(value);
        return !this.eq_tolerance(decimal, tolerance) && this.gt(decimal);
    }
    static gt_tolerance(value, other, tolerance) {
        return D(value).gt_tolerance(other, tolerance);
    }
    //#endregion
    //#region gte_tolerance
    gte_tolerance(value, tolerance) {
        const decimal = D(value);
        return this.eq_tolerance(decimal, tolerance) || this.gt(decimal);
    }
    static gte_tolerance(value, other, tolerance) {
        return D(value).gte_tolerance(other, tolerance);
    }
    //#endregion
    //#region log10
    log10() {
        return this.e + Math.log10(this.m);
    }
    static log10(value) {
        return D(value).log10();
    }
    //#endregion
    //#region absLog10
    absLog10() {
        return this.e + Math.log10(Math.abs(this.m));
    }
    static absLog10(value) {
        return D(value).absLog10();
    }
    //#endregion
    //#region pLog10
    pLog10() {
        return this.m <= 0 || this.e < 0 ? 0 : this.log10();
    }
    static pLog10(value) {
        return D(value).pLog10();
    }
    //#endregion
    //#region log
    log(base) {
        // UN-SAFETY: Most incremental game cases are log(number := 1 or greater, base := 2 or greater).
        // We assume this to be true and thus only need to return a number, not a Decimal,
        // and don't do any other kind of error checking.
        return (Math.LN10 / Math.log(base)) * this.log10();
    }
    static log(value, base) {
        return D(value).log(base);
    }
    logarithm(base) {
        return this.log(base);
    }
    static logarithm(value, base) {
        return D(value).log(base);
    }
    //#endregion
    //#region log2
    log2() {
        return 3.321928094887362 * this.log10();
    }
    static log2(value) {
        return D(value).log2();
    }
    //#endregion
    //#region ln
    ln() {
        return 2.302585092994045 * this.log10();
    }
    static ln(value) {
        return D(value).ln();
    }
    //#endregion
    //#region pow10
    static pow10(value) {
        if (Number.isInteger(value)) {
            return ME_NN(1, value);
        }
        return ME(Math.pow(10, value % 1), Math.trunc(value));
    }
    //#endregion
    //#region pow
    pow(value) {
        // UN-SAFETY: Accuracy not guaranteed beyond ~9~11 decimal places.
        // TODO: Decimal.pow(new Decimal(0.5), 0); or Decimal.pow(new Decimal(1), -1);
        //  makes an exponent of -0! Is a negative zero ever a problem?
        const numberValue = value instanceof Decimal ? value.toNumber() : value;
        // TODO: Fast track seems about neutral for performance.
        //  It might become faster if an integer pow is implemented,
        //  or it might not be worth doing (see https://github.com/Patashu/break_infinity.js/issues/4 )
        // Fast track: If (this.e*value) is an integer and mantissa^value
        // fits in a Number, we can do a very fast method.
        const temp = this.e * numberValue;
        let newMantissa;
        if (Number.isSafeInteger(temp)) {
            newMantissa = Math.pow(this.m, numberValue);
            if (isFinite(newMantissa) && newMantissa !== 0) {
                return ME(newMantissa, temp);
            }
        }
        // Same speed and usually more accurate.
        const newExponent = Math.trunc(temp);
        const residue = temp - newExponent;
        newMantissa = Math.pow(10, numberValue * Math.log10(this.m) + residue);
        if (isFinite(newMantissa) && newMantissa !== 0) {
            return ME(newMantissa, newExponent);
        }
        // return Decimal.exp(value*this.ln());
        const result = Decimal.pow10(numberValue * this.absLog10()); // this is 2x faster and gives same values AFAIK
        if (this.sign() === -1) {
            if (Math.abs(numberValue % 2) === 1) {
                return result.neg();
            }
            else if (Math.abs(numberValue % 2) === 0) {
                return result;
            }
            return DECIMAL_NaN;
        }
        return result;
    }
    static pow(value, other) {
        // Fast track: 10^integer
        if (typeof value === 'number' &&
            value === 10 &&
            typeof other === 'number' &&
            Number.isInteger(other)) {
            return ME_NN(1, other);
        }
        return D(value).pow(other);
    }
    //#endregion
    //#region exp
    exp() {
        const x = this.toNumber();
        // Fast track: if -706 < this < 709, we can use regular exp.
        if (-706 < x && x < 709) {
            return Decimal.fromNumber(Math.exp(x));
        }
        return Decimal.pow(Math.E, x);
    }
    static exp(value) {
        return D(value).exp();
    }
    //#endregion
    //#region sqr
    sqr() {
        return ME(Math.pow(this.m, 2), this.e * 2);
    }
    static sqr(value) {
        return D(value).sqr();
    }
    //#endregion
    //#region sqrt
    sqrt() {
        if (this.m < 0) {
            return DECIMAL_NaN;
        }
        if (this.e % 2 !== 0) {
            return ME(Math.sqrt(this.m) * 3.16227766016838, Math.floor(this.e / 2));
        }
        // Mod of a negative number is negative, so != means '1 or -1'
        return ME(Math.sqrt(this.m), Math.floor(this.e / 2));
    }
    static sqrt(value) {
        return D(value).sqrt();
    }
    //#endregion
    //#region cube
    cube() {
        return ME(Math.pow(this.m, 3), this.e * 3);
    }
    static cube(value) {
        return D(value).cube();
    }
    //#endregion
    //#region cbrt
    cbrt() {
        let sign = 1;
        let mantissa = this.m;
        if (mantissa < 0) {
            sign = -1;
            mantissa = -mantissa;
        }
        const newMantissa = sign * Math.pow(mantissa, 1 / 3);
        const mod = this.e % 3;
        if (mod === 1 || mod === -1) {
            return ME(newMantissa * 2.154434690031883, Math.floor(this.e / 3));
        }
        if (mod !== 0) {
            return ME(newMantissa * 4.641588833612778, Math.floor(this.e / 3));
        }
        // mod != 0 at this point means 'mod == 2 || mod == -2'
        return ME(newMantissa, Math.floor(this.e / 3));
    }
    static cbrt(value) {
        return D(value).cbrt();
    }
    //#endregion
    //#region cbrt
    dp() {
        if (!this.isFinite()) {
            return NaN;
        }
        if (this.exponent >= MAX_SIGNIFICANT_DIGITS) {
            return 0;
        }
        const mantissa = this.mantissa;
        let places = -this.exponent;
        let e = 1;
        while (Math.abs(Math.round(mantissa * e) / e - mantissa) > ROUND_TOLERANCE) {
            e *= 10;
            places++;
        }
        return places > 0 ? places : 0;
    }
    static dp(value) {
        return D(value).dp();
    }
    decimalPlaces() {
        return this.dp();
    }
    static decimalPlaces(value) {
        return D(value).dp();
    }
    //#endregion
    /**
     * If you're willing to spend 'resourcesAvailable' and want to buy something
     * with exponentially increasing cost each purchase (start at priceStart,
     * multiply by priceRatio, already own currentOwned), how much of it can you buy?
     * Adapted from Trimps source code.
     */
    static affordGeometricSeries(resourcesAvailable, priceStart, priceRatio, currentOwned) {
        return affordGeometricSeries(D(resourcesAvailable), D(priceStart), D(priceRatio), currentOwned);
    }
    /**
     * How much resource would it cost to buy (numItems) items if you already have currentOwned,
     * the initial price is priceStart and it multiplies by priceRatio each purchase?
     */
    static sumGeometricSeries(numItems, priceStart, priceRatio, currentOwned) {
        return sumGeometricSeries(numItems, D(priceStart), D(priceRatio), currentOwned);
    }
    /**
     * If you're willing to spend 'resourcesAvailable' and want to buy something with additively
     * increasing cost each purchase (start at priceStart, add by priceAdd, already own currentOwned),
     * how much of it can you buy?
     */
    static affordArithmeticSeries(resourcesAvailable, priceStart, priceAdd, currentOwned) {
        return affordArithmeticSeries(D(resourcesAvailable), D(priceStart), D(priceAdd), D(currentOwned));
    }
    /**
     * How much resource would it cost to buy (numItems) items if you already have currentOwned,
     * the initial price is priceStart and it adds priceAdd each purchase?
     * Adapted from http://www.mathwords.com/a/arithmetic_series.htm
     */
    static sumArithmeticSeries(numItems, priceStart, priceAdd, currentOwned) {
        return sumArithmeticSeries(D(numItems), D(priceStart), D(priceAdd), D(currentOwned));
    }
    /**
     * When comparing two purchases that cost (resource) and increase your resource/sec by (deltaRpS),
     * the lowest efficiency score is the better one to purchase.
     * From Frozen Cookies:
     * http://cookieclicker.wikia.com/wiki/Frozen_Cookies_(JavaScript_Add-on)#Efficiency.3F_What.27s_that.3F
     */
    static efficiencyOfPurchase(cost, currentRpS, deltaRpS) {
        return efficiencyOfPurchase(D(cost), D(currentRpS), D(deltaRpS));
    }
    static randomDecimalForTesting(absMaxExponent) {
        // NOTE: This doesn't follow any kind of sane random distribution, so use this for testing purposes only.
        // 5% of the time, have a mantissa of 0
        if (Math.random() * 20 < 1) {
            return ME_NN(0, 0);
        }
        let mantissa = Math.random() * 10;
        // 10% of the time, have a simple mantissa
        if (Math.random() * 10 < 1) {
            mantissa = Math.round(mantissa);
        }
        mantissa *= Math.sign(Math.random() * 2 - 1);
        const exponent = Math.floor(Math.random() * absMaxExponent * 2) - absMaxExponent;
        return ME(mantissa, exponent);
        /*
          Examples:
    
          randomly test pow:
    
          var a = Decimal.randomDecimalForTesting(1000);
          var pow = Math.random()*20-10;
          if (Math.random()*2 < 1) { pow = Math.round(pow); }
          var result = Decimal.pow(a, pow);
          ["(" + a.toString() + ")^" + pow.toString(), result.toString()]
    
          randomly test add:
    
          var a = Decimal.randomDecimalForTesting(1000);
          var b = Decimal.randomDecimalForTesting(17);
          var c = a.mul(b);
          var result = a.add(c);
          [a.toString() + "+" + c.toString(), result.toString()]
        */
    }
    /**
     * When mantissa is very denormalized, use this to normalize much faster.
     */
    normalize() {
        if (this.m >= 1 && this.m < 10) {
            return this;
        }
        // TODO: I'm worried about mantissa being negative 0 here which is why I set it again, but it may never matter
        if (this.m === 0) {
            this.m = 0;
            this.e = 0;
            return this;
        }
        const tempExponent = Math.floor(Math.log10(Math.abs(this.m)));
        this.m =
            tempExponent === NUMBER_EXP_MIN
                ? (this.m * 10) / 1e-323
                : this.m / powerOf10(tempExponent);
        this.e += tempExponent;
        return this;
    }
    toNumber() {
        // Problem: new Decimal(116).toNumber() returns 115.99999999999999.
        // TODO: How to fix in general case? It's clear that if toNumber() is
        //  VERY close to an integer, we want exactly the integer.
        //  But it's not clear how to specifically write that.
        //  So I'll just settle with 'exponent >= 0 and difference between rounded
        //  and not rounded < 1e-9' as a quick fix.
        // UN-SAFETY: It still eventually fails.
        // Since there's no way to know for sure we started with an integer,
        // all we can do is decide what tradeoff we want between 'yeah I think
        // this used to be an integer' and 'pfft, who needs THAT many decimal
        // places tracked' by changing ROUND_TOLERANCE.
        // https://github.com/Patashu/break_infinity.js/issues/52
        // Currently starts failing at 800002. Workaround is to do .Round()
        // AFTER toNumber() if you are confident you started with an integer.
        // var result = this.m*Math.pow(10, this.e);
        if (!this.isFinite()) {
            return this.mantissa;
        }
        if (this.e > NUMBER_EXP_MAX) {
            return this.m > 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        }
        if (this.e < NUMBER_EXP_MIN) {
            return 0;
        }
        // SAFETY: again, handle 5e-324, -5e-324 separately
        if (this.e === NUMBER_EXP_MIN) {
            return this.m > 0 ? 5e-324 : -5e-324;
        }
        const result = this.m * powerOf10(this.e);
        if (!isFinite(result) || this.e < 0) {
            return result;
        }
        const resultRounded = Math.round(result);
        if (Math.abs(resultRounded - result) < ROUND_TOLERANCE) {
            return resultRounded;
        }
        return result;
    }
    mantissaWithDecimalPlaces(places) {
        if (!this.isFinite()) {
            return this.mantissa;
        }
        if (this.m === 0) {
            return 0;
        }
        // https://stackoverflow.com/a/37425022
        const len = places + 1;
        const numDigits = Math.ceil(Math.log10(Math.abs(this.m)));
        const rounded = Math.round(this.m * Math.pow(10, len - numDigits)) *
            Math.pow(10, numDigits - len);
        return parseFloat(rounded.toFixed(Math.max(len - numDigits, 0)));
    }
    toString() {
        if (!this.isFinite()) {
            return this.mantissa.toString();
        }
        if (this.e <= -EXP_LIMIT || this.m === 0) {
            return '0';
        }
        if (this.e < 21 && this.e > -7) {
            return this.toNumber().toString();
        }
        return this.m + 'e' + (this.e >= 0 ? '+' : '') + this.e;
    }
    toExponential(places) {
        // https://stackoverflow.com/a/37425022
        // TODO: Some unfixed cases:
        //  new Decimal("1.2345e-999").toExponential()
        //  "1.23450000000000015e-999"
        //  new Decimal("1e-999").toExponential()
        //  "1.000000000000000000e-999"
        // TBH I'm tempted to just say it's a feature.
        // If you're doing pretty formatting then why don't you know how many decimal places you want...?
        if (!this.isFinite()) {
            return this.mantissa.toString();
        }
        if (this.e <= -EXP_LIMIT || this.m === 0) {
            return '0' + trailZeroes(places) + 'e+0';
        }
        // two cases:
        // 1) exponent is < 308 and > -324: use basic toFixed
        // 2) everything else: we have to do it ourselves!
        if (this.e > NUMBER_EXP_MIN && this.e < NUMBER_EXP_MAX) {
            return this.toNumber().toExponential(places);
        }
        if (!isFinite(places)) {
            places = MAX_SIGNIFICANT_DIGITS;
        }
        const len = places + 1;
        const numDigits = Math.max(1, Math.ceil(Math.log10(Math.abs(this.m))));
        const rounded = Math.round(this.m * Math.pow(10, len - numDigits)) *
            Math.pow(10, numDigits - len);
        return (rounded.toFixed(Math.max(len - numDigits, 0)) +
            'e' +
            (this.e >= 0 ? '+' : '') +
            this.e);
    }
    toFixed(places) {
        if (!this.isFinite()) {
            return this.mantissa.toString();
        }
        if (this.e <= -EXP_LIMIT || this.m === 0) {
            return '0' + trailZeroes(places);
        }
        // two cases:
        // 1) exponent is 17 or greater: just print out mantissa with the appropriate number of zeroes after it
        // 2) exponent is 16 or less: use basic toFixed
        if (this.e >= MAX_SIGNIFICANT_DIGITS) {
            const mantissa = this.m.toString().replace('.', ''); //, this.e + 1, "0");
            const mantissaZeroes = repeatZeroes(this.e - mantissa.length + 1);
            return mantissa + mantissaZeroes + trailZeroes(places);
        }
        return this.toNumber().toFixed(places);
    }
    toPrecision(places) {
        if (this.e <= -7) {
            return this.toExponential(places - 1);
        }
        if (places > this.e) {
            return this.toFixed(places - this.e - 1);
        }
        return this.toExponential(places - 1);
    }
    valueOf() {
        return this.toString();
    }
    toJSON() {
        return this.toString();
    }
    toStringWithDecimalPlaces(places) {
        return this.toExponential(places);
    }
    pow_base(value) {
        return D(value).pow(this);
    }
    factorial() {
        // Using Stirling's Approximation.
        // https://en.wikipedia.org/wiki/Stirling%27s_approximation#Versions_suitable_for_calculators
        const n = this.toNumber() + 1;
        return Decimal.pow((n / Math.E) *
            Math.sqrt(n * Math.sinh(1 / n) + 1 / (810 * Math.pow(n, 6))), n).mul(Math.sqrt((2 * Math.PI) / n));
    }
    // Some hyperbolic trig functions that happen to be easy
    sinh() {
        return this.exp().sub(this.negate().exp()).div(2);
    }
    cosh() {
        return this.exp().add(this.negate().exp()).div(2);
    }
    tanh() {
        return this.sinh().div(this.cosh());
    }
    asinh() {
        return Decimal.ln(this.add(this.sqr().add(1).sqrt()));
    }
    acosh() {
        return Decimal.ln(this.add(this.sqr().sub(1).sqrt()));
    }
    atanh() {
        if (this.abs().gte(1)) {
            return Number.NaN;
        }
        return Decimal.ln(this.add(1).div(new Decimal(1).sub(this))) / 2;
    }
    /**
     * Joke function from Realm Grinder
     */
    ascensionPenalty(ascensions) {
        if (ascensions === 0) {
            return this;
        }
        return this.pow(Math.pow(10, -ascensions));
    }
    /**
     * Joke function from Cookie Clicker. It's 'egg'
     */
    egg() {
        return this.add(9);
    }
    isFinite() {
        return isFinite(this.mantissa);
    }
    isNaN() {
        // NaN is the only value to be not equal to self.
        return this.mantissa !== this.mantissa;
    }
    isPositiveInfinity() {
        return this.mantissa === POSITIVE_INFINITY.mantissa;
    }
    isNegativeInfinity() {
        return this.mantissa === NEGATIVE_INFINITY.mantissa;
    }
    static get MAX_VALUE() {
        return MAX_VALUE;
    }
    static get MIN_VALUE() {
        return MIN_VALUE;
    }
    static get NUMBER_MAX_VALUE() {
        return NUMBER_MAX_VALUE;
    }
    static get NUMBER_MIN_VALUE() {
        return NUMBER_MIN_VALUE;
    }
    static get NaN() {
        return DECIMAL_NaN;
    }
    static get POSITIVE_INFINITY() {
        return POSITIVE_INFINITY;
    }
    static get NEGATIVE_INFINITY() {
        return NEGATIVE_INFINITY;
    }
}
const MAX_VALUE = ME_NN(1, EXP_LIMIT);
const MIN_VALUE = ME_NN(1, -EXP_LIMIT);
const NUMBER_MAX_VALUE = D(Number.MAX_VALUE);
const NUMBER_MIN_VALUE = D(Number.MIN_VALUE);
const DECIMAL_NaN = ME_NN(Number.NaN, 0);
const POSITIVE_INFINITY = ME_NN(Number.POSITIVE_INFINITY, 0);
const NEGATIVE_INFINITY = ME_NN(Number.NEGATIVE_INFINITY, 0);

class UnlockableLitElement extends s {
    constructor() {
        super();
        this.name = 'unlockable';
        this.displayName = 'Unlockable';
        // Tags get merged upon assignment, to allow for Object.assign updating
        // I should probably just manually do tags.add(newtag) instead
        this._tags = new Set();
        this.unlocked = false;
        this.conditionString = 'Unlocked at start.';
        this.condition = () => true;
        this.visibleCondition = () => true;
        this._progress = () => new Decimal(0);
        this._visible = false;
        this.secret = false;
        this.hiddenByPlayer = false;
        this.persistentUnlock = false;
        this.persistentValue = false;
        this.onUnlock = () => { };
        this.addEventListener('mouseover', () => {
            this.new = false;
            ri.requestUpdate();
        });
    }
    set tags(val) {
        this._tags = new Set([...val, ...this._tags]);
    }
    get tags() {
        return this._tags;
    }
    get new() {
        return this.classList.contains('new');
    }
    set new(value) {
        this.classList.toggle('new', value);
    }
    get progress() {
        return () => new Decimal((this.unlocked ? 1 : 0) || this._progress());
    }
    set progress(value) {
        this._progress = value;
    }
    get visible() {
        if (this._visible)
            return true;
        this._visible = this.visibleCondition();
        return this._visible;
    }
    setInitials() { }
    resetToInitials() { }
    tryUnlock(cheat = false) {
        // Only unlock once
        if (this.unlocked)
            return false;
        if (this.condition() || cheat) {
            this.unlocked = true;
            this.hidden = false;
            this.new = true;
            this.secret = false;
            this.onUnlock();
            Object.values(ri.activities)
                .filter((activity) => activity.options.includes(this.name))
                .forEach((activity) => activity.requestUpdate());
            Object.values(ri.spells)
                .filter((spell) => spell.options.includes(this.name))
                .forEach((spell) => spell.requestUpdate());
            return true;
        }
        return false;
    }
}
__decorate([
    e$2()
], UnlockableLitElement.prototype, "name", void 0);
__decorate([
    e$2()
], UnlockableLitElement.prototype, "displayName", void 0);
__decorate([
    e$2({ type: Boolean })
], UnlockableLitElement.prototype, "unlocked", void 0);
__decorate([
    e$2()
], UnlockableLitElement.prototype, "conditionString", void 0);
__decorate([
    e$2({ type: Function })
], UnlockableLitElement.prototype, "condition", void 0);
__decorate([
    e$2({ type: Function })
], UnlockableLitElement.prototype, "visibleCondition", void 0);
__decorate([
    e$2({ type: Boolean })
], UnlockableLitElement.prototype, "secret", void 0);
__decorate([
    e$2({ type: Boolean })
], UnlockableLitElement.prototype, "hiddenByPlayer", void 0);

// <!--getrootless
// Okay, I've got to rewrite this whole thing or just redo it myself
const findAllDeep = (parent, selectors, depth = null) => {
    const nodes = new Set();
    const currentDepth = 1;
    const recordResult = (nodesArray) => {
        for (const node of nodesArray) {
            nodes.add(node);
        }
    };
    const recursiveSeek = (_parent) => {
        // check for selectors in lightdom
        recordResult(_parent.querySelectorAll(selectors));
        if (_parent.shadowRoot) {
            // check for selectors in shadowRoot
            recordResult(_parent.shadowRoot.querySelectorAll(selectors));
            // look for nested components with shadowRoots
            for (const child of [..._parent.shadowRoot.querySelectorAll('*')].filter((i) => i.shadowRoot)) {
                // make sure we haven't hit our depth limit
                if (depth === null || currentDepth < depth) {
                    recursiveSeek(child);
                }
            }
        }
    };
    recursiveSeek(parent);
    return nodes;
};
const draggable = (function definition() {
    function addEventListener(element, eventName, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
        }
        else {
            element['on' + eventName] = handler;
        }
    }
    function removeEventListener(element, eventName, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false);
        }
        else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler);
        }
        else {
            element['on' + eventName] = null;
        }
    }
    function isDisabled(element) {
        return element.hasAttribute('data-draggable-disabled');
    }
    let currentElement;
    let currentDropElement;
    let currentOptions;
    const fairlyHighZIndex = 10;
    function draggable(options) {
        const element = options.element;
        const handle = options.handle || element;
        const position = options.position;
        const dragElement = setPositionType(element, position, options.dragHelperClass);
        let on = 0;
        let started = false;
        setDraggableListeners(dragElement);
        addEventListener(document.getRootNode(), 'mousemove', function (event) {
            if (isDisabled(element)) {
                return;
            }
            if (on != 2 || started) {
                return;
            }
            if (position == 'static') {
                copyElement(element, dragElement);
            }
            currentOptions = options;
            started = startDragging(event, dragElement);
        });
        addEventListener(handle, 'mousemove', function (event) {
            if (isDisabled(element)) {
                return;
            }
            event.preventDefault();
        });
        addEventListener(handle, 'mousedown', function () {
            if (isDisabled(element)) {
                return;
            }
            on = 1;
            setTimeout(function () {
                if (on == 1) {
                    on = 2;
                }
            }, 50);
        });
        addEventListener(document, 'mouseup', function () {
            on = 0;
            started = false;
        });
        return dragElement;
    }
    function setPositionType(element, position, dragHelperClass) {
        if (position == 'static') {
            const div = document.createElement('div');
            div.className = dragHelperClass;
            div.style.position = 'fixed';
            element.parentNode.insertBefore(div, element);
            return div;
        }
        if (!position) {
            position = 'absolute';
        }
        element.style.position = position;
        return element;
    }
    function setDraggableListeners(element) {
        element.draggableListeners = {
            start: [],
            drag: [],
            stop: [],
            highlight: [],
        };
        element.whenDragStarts = addListener(element, 'start');
        element.whenDragging = addListener(element, 'drag');
        element.whenDragStops = addListener(element, 'stop');
        element.whenDragHighlight = addListener(element, 'highlight');
    }
    function copyElement(from, to) {
        const rec = from.getBoundingClientRect();
        to.innerHTML = from.innerHTML;
        to.style.width = inPixels(from.offsetWidth);
        to.style.height = inPixels(from.offsetHeight);
        to.style.left = inPixels(rec.left);
        to.style.top = inPixels(rec.top);
    }
    function startDragging(event, element) {
        clearSelection();
        currentElement && sendToBack(currentElement);
        currentElement = bringToFront(element);
        currentElement.classList.add(currentOptions.draggingClass);
        const initialPosition = getInitialPosition(currentElement);
        currentElement.style.left = inPixels(initialPosition.left);
        currentElement.style.top = inPixels(initialPosition.top);
        currentElement.lastXPosition = event.clientX;
        currentElement.lastYPosition = event.clientY;
        const okToGoOn = triggerEvent('start', {
            x: initialPosition.left,
            y: initialPosition.top,
            mouseEvent: event,
        });
        if (!okToGoOn) {
            currentElement.classList.remove(currentOptions.draggingClass);
            return false;
        }
        addDocumentListeners();
        return true;
    }
    function stopDragging(event) {
        removeDocumentListeners();
        const left = parseInt(currentElement.style.left, 10);
        const top = parseInt(currentElement.style.top, 10);
        if (currentDropElement) {
            currentDropElement.classList.remove(currentOptions.dragHoverClass);
        }
        triggerEvent('stop', {
            x: left,
            y: top,
            mouseEvent: event,
            dropElement: currentDropElement,
            dragElement: currentElement,
        });
        currentElement.classList.remove(currentOptions.draggingClass);
    }
    function addListener(element, type) {
        return function (listener) {
            element.draggableListeners[type].push(listener);
        };
    }
    function triggerEvent(type, args) {
        let result = true;
        const listeners = currentElement.draggableListeners[type];
        for (let i = listeners.length - 1; i >= 0; i--) {
            if (listeners[i](args) === false)
                result = false;
        }
        return result;
    }
    function sendToBack(element) {
        const decreasedZIndex = fairlyHighZIndex - 1;
        element.style['z-index'] = decreasedZIndex;
        element.style['zIndex'] = decreasedZIndex;
    }
    function bringToFront(element) {
        element.style['z-index'] = fairlyHighZIndex;
        element.style['zIndex'] = fairlyHighZIndex;
        return element;
    }
    function addDocumentListeners() {
        addEventListener(document, 'selectstart', cancelDocumentSelection);
        addEventListener(document, 'mousemove', repositionElement);
        addEventListener(document, 'mouseup', stopDragging);
    }
    function getInitialPosition(element) {
        const rec = element.getBoundingClientRect();
        const style = element.currentStyle || window.getComputedStyle(element);
        return {
            top: rec.top - parseInt(style.marginTop),
            left: rec.left - parseInt(style.marginLeft),
        };
    }
    function inPixels(value) {
        return value + 'px';
    }
    function cancelDocumentSelection(event) {
        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        event.returnValue = false;
        return false;
    }
    function repositionElement(event) {
        event.preventDefault && event.preventDefault();
        event.returnValue = false;
        const style = currentElement.style;
        const elementXPosition = parseInt(style.left, 10);
        const elementYPosition = parseInt(style.top, 10);
        const elementNewXPosition = elementXPosition + (event.clientX - currentElement.lastXPosition);
        const elementNewYPosition = elementYPosition + (event.clientY - currentElement.lastYPosition);
        style.left = inPixels(elementNewXPosition);
        style.top = inPixels(elementNewYPosition);
        style.right = 'auto';
        style.bottom = 'auto';
        currentElement.lastXPosition = event.clientX;
        currentElement.lastYPosition = event.clientY;
        highlightDropElement(event);
        triggerEvent('drag', {
            x: elementNewXPosition,
            y: elementNewYPosition,
            mouseEvent: event,
        });
    }
    function highlightDropElement(event) {
        currentDropElement = null;
        if (!currentOptions.dropSelector) {
            return null;
        }
        const items = Array.from(findAllDeep(document.querySelector('runner-idle'), currentOptions.dropSelector));
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const rec = item.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;
            if (x >= rec.left && x <= rec.right && y >= rec.top && y <= rec.bottom) {
                currentDropElement = item;
                item.classList.add(currentOptions.dragHoverClass);
                triggerEvent('highlight', { x: x, y: y, item: item, mouseEvent: event });
            }
            else {
                item.classList.remove(currentOptions.dragHoverClass);
            }
        }
    }
    function removeDocumentListeners() {
        removeEventListener(document, 'selectstart', cancelDocumentSelection);
        removeEventListener(document, 'mousemove', repositionElement);
        removeEventListener(document, 'mouseup', stopDragging);
    }
    function clearSelection() {
        var _a;
        (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    }
    return draggable;
})();
class JuicyDraggable extends s {
    constructor() {
        super();
        this.dragHelperClass = '';
        this.dragHoverClass = '';
        this.draggingClass = '';
        this.elementId = '';
        this.handleId = '';
        this.element = document.createElement('div');
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    attributeChangedCallback(attributeName) {
        var _a, _b;
        let value;
        switch (attributeName) {
            case 'disabled':
                value = this.hasAttribute('disabled');
                if (value) {
                    (_a = this.element) === null || _a === void 0 ? void 0 : _a.setAttribute('data-draggable-disabled', 'disabled');
                }
                else {
                    (_b = this.element) === null || _b === void 0 ? void 0 : _b.removeAttribute('data-draggable-disabled');
                }
                break;
        }
    }
    connectedCallback() {
        let element = null;
        let handle = null;
        if (this.shadowRoot)
            return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = '<slot id="content"></slot>';
        this.refreshAttributeValues();
        if (!this.elementId) {
            element = this.children[0];
        }
        else {
            element = this.querySelector('#' + this.elementId);
        }
        if (this.handleId) {
            handle = this.querySelector('#' + this.handleId);
        }
        this.dragHelperClass = this.dragHelperClass || 'drag-helper';
        this.dragHoverClass = this.dragHoverClass || 'drag-hover';
        this.draggingClass = this.draggingClass || 'dragging';
        if (element)
            this.element = element;
        element = draggable({
            element: element,
            handle: handle,
            position: this.position,
            dropSelector: this.dropSelector,
            dragHelperClass: this.dragHelperClass,
            dragHoverClass: this.dragHoverClass,
            draggingClass: this.draggingClass,
        });
        element.whenDragStarts((e) => {
            const event = new CustomEvent('juicy-draggable-start', { detail: e });
            this.dispatchEvent(event);
            return !(event.detail.cancel === true);
        });
        element.whenDragging((e) => {
            const event = new CustomEvent('juicy-draggable-move', { detail: e });
            this.dispatchEvent(event);
        });
        element.whenDragStops((e) => {
            const event = new CustomEvent('juicy-draggable-stop', { detail: e });
            this.dispatchEvent(event);
        });
        element.whenDragHighlight((e) => {
            const event = new CustomEvent('juicy-draggable-highlight', { detail: e });
            this.dispatchEvent(event);
        });
    }
    getScreenSize() {
        const w = window;
        const d = document;
        const e = d.documentElement;
        const g = d.getElementsByTagName('body')[0];
        const x = w.innerWidth || e.clientWidth || g.clientWidth;
        const y = w.innerHeight || e.clientHeight || g.clientHeight;
        return { x: x, y: y };
    }
    refreshAttributeValues() {
        const attributes = [
            'elementId',
            'handleId',
            'position',
            'dropSelector',
            'dragHelperClass',
            'dragHoverClass',
            'draggingClass',
            'disabled',
        ];
        for (let i = 0; i < attributes.length; i++) {
            const a = attributes[i];
            if (this.hasAttribute(a)) {
                this[a] = this.attributes[a].nodeValue;
                this.attributeChangedCallback(a);
            }
        }
    }
}
__decorate([
    e$2()
], JuicyDraggable.prototype, "position", void 0);
__decorate([
    e$2()
], JuicyDraggable.prototype, "dropSelector", void 0);
//Throws a weird exception in IE;
//JuicyDraggable.disabled = false;
customElements.define('juicy-draggable', JuicyDraggable);

const global_css = r$2 `
  * {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  .fullscreen {
    position: absolute !important;
    z-index: 1000 !important;
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box !important;
    background: rgb(var(--background-color, 127, 127, 127)) !important;
  }

  option:hover,
  option::selection {
    background: linear-gradient(black, black);
  }

  runner-idle:focus {
    outline: none;
  }

  runner-idle.paused,
  runner-idle.paused:focus {
    outline: 4px red solid;
    outline-offset: -4px;
  }

  .locked {
    display: none;
  }

  .new {
    outline: 4px solid rgb(var(--alert-color, red));
    /* box-shadow: 0px 0px 0px 4px red; */
    border-radius: 4px;
  }

  @keyframes blink {
    from,
    to {
      outline-color: rgb(var(--alert-color, red));
    }

    50% {
      outline-color: rgb(var(--black, black));
    }
  }

  .unlockables-entry-hovered {
    outline: 4px solid rgb(var(--black, black));
    animation: blink 0.5s infinite;
  }

  .hiddenByPlayer {
    color: #222;
    background-color: #888;
    border: 1px solid black;
  }

  .nowrap {
    white-space: nowrap;
  }

  .danger {
    color: red;
  }
  .danger-bg {
    background-color: red !important;
  }

  .expand {
    width: 100%;
  }

  .row-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .row-container > * {
    margin: 4px;
  }

  .chip {
    border: 1px solid black;
    border-radius: 4px;
    padding: 2px 4px;
    transition: all 0.2s ease-in-out;
    background: #fff2;
  }

  div.options-container {
    overflow-y: auto;
    max-height: 18em;
  }

  h1,
  h1 * {
    margin: 0px;
    font-size: 1.5rem;
  }

  h2,
  h3,
  h4 {
    margin: 0px;
    font-size: 1.1rem;
  }

  h4 span {
    font-size: 0.8em;
    font-weight: normal;
    color: #000a;
  }

  .subheader,
  .subheader * {
    font-size: 0.9rem;
    color: #000a;
  }

  .preference-active {
    background-color: #fff2;
  }

  hr {
    border: none;
    border-top: 2px solid #0004;
  }

  .svg-container > {
    transform: translateY(-100%);
  }

  .js-plotly-plot .modebar {
    display: flex;
  }

  button {
    background: transparent;
    border-radius: 4px;
  }
  button:hover {
    background: #0004;
  }

  /* Checkboxes - All*/

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:hover + label {
    background: #fff2;
  }

  input[type='checkbox']:active + label {
    background: #fff6;
  }

  input[type='checkbox']:checked + label {
    background: #fff4;
  }

  input[type='checkbox']:checked:hover + label {
    background: #fff4;
  }

  input[type='checkbox']:checked:active + label {
    background: #fff2;
  }
  /* Checkboxes - Filter chips */

  input[type='checkbox'].filter:checked + label {
    border-color: #0002;
  }

  input[type='checkbox'].filter:checked + label:before {
    content: '✓';
    font-weight: bold;
  }

  /* Top-level colors, a la DF */

  :root {
    --white: 255, 255, 255;
    --black: 0, 0, 0;
    --red: 230, 0, 0;
    --light-red: 255, 180, 180;
    --green: 0, 200, 0;
    --light-green: 75, 170, 60;
    --blue: 0, 0, 200;
    --light-blue: 143, 218, 255;
    --yellow: 210, 230, 00;
    --orange: 220, 60, 20;
    --brown: 123, 63, 0;
    --light-brown: 200, 148, 4;
    --purple: 123, 24, 245;
    --dark-purple: 70, 50, 130;
    --light-purple: 190, 165, 200;
    --dark-magenta: 75, 0, 75;
    --maroon: 170, 60, 60;

    --alert-color: 255, 0, 0;
    --stamina-color: var(--light-brown);
    --mana-color: 0, 127, 191;
    --health-color: var(--red);
  }

  /*** In-game tag colors ***/

  /** Activities first **/
  .rest {
    --none-color: var(--stamina-color);
  }

  .walk,
  [class*='walk'],
  [class*='run'],
  .run {
    --value-color: var(--stamina-color);
    --none-color: var(--light-blue);
  }
  .jog,
  [class*='jog'] {
    --value-color: var(--stamina-color);
    --none-color: var(--red);
  }

  [class*='jump'] {
    --value-color: var(--yellow);
    --none-color: var(--orange);
  }
  [class*='dash'] {
    --value-color: var(--orange);
    --none-color: var(--yellow);
  }
  .trainStrength {
    --value-color: var(--stamina-color);
    --none-color: var(--orange);
  }

  .trainSpeed {
    --value-color: var(--stamina-color);
    --none-color: var(--yellow);
  }

  .focus {
    --value-color: var(--stamina-color);
    --none-color: var(--light-red);
  }

  .hunt {
    --value-color: var(--stamina-color);
    --none-color: 170, 60, 60;
  }

  .gather {
    --value-color: var(--stamina-color);
    --none-color: var(--purple);
  }

  .cook {
    --value-color: var(--orange);
    --none-color: var(--black);
  }

  .eat {
    --value-color: var(--maroon);
    --none-color: var(--light-green);
  }

  .fight {
    --value-color: var(--health-color);
  }

  .distance {
    --value-color: var(--light-blue);
    --none-color: var(--blue);
  }

  .stamina,
  .staminaExp {
    --value-color: var(--stamina-color);
  }

  .health,
  .healthExp {
    --value-color: var(--health-color);
    --none-color: var(--light-red);
  }

  .mana,
  .manaExp {
    /* --value-color: var(--blue); */
    --value-color: var(--mana-color);
  }

  .meditate,
  .walkingMeditation {
    --value-color: unset;
    --none-color: var(--mana-color);
  }

  .manaDepth {
    --value-color: var(--dark-purple);
    --none-color: var(--white);
  }

  .spaceMagic {
    --value-color: var(--dark-magenta);
    --none-color: var(--white);
  }

  .time,
  .timeMagic {
    --none-color: var(--dark-magenta);
    --value-color: var(--white);
  }

  .sanity,
   /* Overloaded, spell and resource. Luckily it's okay*/
  .light,
  .lightMagic {
    --value-color: var(--white);
    --none-color: var(--black);
  }

  .fire,
  .fireMagic,
  .lightFire,
  .flame {
    --value-color: var(--orange);
    --none-color: var(--light-red);
  }

  .nutrition {
    --value-color: var(--light-green);
  }

  .meat {
    --value-color: var(--maroon);
    --none-color: var(--light-red);
  }
  .cookedMeat {
    --value-color: var(--brown);
    --none-color: var(--light-red);
  }
  .berry {
    --value-color: var(--purple);
    --none-color: var(--light-purple);
  }
  .pemmican {
    --value-color: var(--brown);
    --none-color: var(--light-purple);
  }
  .fish,
  .fishing {
    --value-color: var(--blue);
    --none-color: var(--light-red);
  }
  .bait {
    --value-color: var(--light-red);
    --none-color: var(--blue);
  }

  .wood {
    --value-color: var(--brown);
    --none-color: var(--light-brown);
  }

  ri-stat {
    --none-color: 0, 0, 0;
    --value-color: var(--white);
  }

  .speed {
    --value-color: var(--yellow);
  }

  .strength {
    --value-color: var(--orange);
    --none-color: var(--white);
  }

  .constitution {
    --value-color: var(--red);
    --none-color: var(--white);
  }

  .wisdom {
    --value-color: var(--purple);
  }

  .perception {
    --value-color: var(--light-purple);
  }

  .fancy {
    border-radius: 4px;
    padding: 1px 2px;
    /* -webkit-text-stroke: 1px #0002; */
  }
  .fancy,
  .fancy select,
  .fancy option {
    background-color: rgb(var(--value-color, initial), 1);
  }
  .fancy,
  .fancy * {
    font-weight: bold;
    color: rgb(var(--none-color, initial));
  }

  .fancy.invert,
  .fancy.invert * {
    color: rgb(var(--value-color, initial));
    background-color: rgb(var(--none-color, initial), 1);
  }

  .fancy.invert,
  .fancy.cutout-background {
    background-color: rgb(var(--none-color, initial), 0.8);
  }

  .fancy.cutout,
  .fancy.cutout * {
    color: black;
    mix-blend-mode: screen;
  }

  .tippy-box {
    color: #000;
    background-color: #66ccfff0;
    border: 2px solid #0004;
    transition: all 1s ease-in-out;
    min-width: 200px;
    max-width: 1000px;
    line-height: 1.5;
  }

  .tippy-box[data-state='hidden'] {
    opacity: 0;
  }
  .tippy-box[data-state='visible'] {
    opacity: 1;
  }

  .tippy-content {
    margin: 4px;
  }

  .tippy-arrow:before {
    color: #66ccff;
  }

  .costeffect {
    font-weight: bold;
  }
`;
// This applies this as a global stylesheet as well, but it's still necessary to
// import it in every component.
// This make other top-level elements use the styles, like tippy tooltips or the tutorial modals.
// This is currently the least caniuse thing in this codebase.
if (global_css.styleSheet)
    document.adoptedStyleSheets = [global_css.styleSheet];

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=e$1(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b$2}});

let SmoothProgress = class SmoothProgress extends s {
    constructor() {
        super(...arguments);
        this.value = new Decimal(0);
        this.min = new Decimal(0);
        this.max = new Decimal(1);
        this.text = '';
    }
    render() {
        return $ `<div class="progress-container">
      <div
        data-text=${this.text}
        class="progress-bar"
        style=${i({
            width: `${this.value.add(this.min).div(this.max).times(100)}%`,
        })}
      >
        <slot></slot>
      </div>
    </div>`;
    }
};
SmoothProgress.styles = [
    global_css,
    r$2 `
      :host {
        padding: 0px;
      }
      .progress-container {
        width: 100%;
        height: 100%;
        background-color: #fff8;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
      }
      .progress-bar {
        /* width: 50%; */
        height: 100%;
        background-color: rgb(var(--value-color, var(--none-color, black)), 1);
        transition: width 0.5s ease-out;
      }

      .progress-bar::before {
        content: attr(data-text);
        white-space: nowrap;
        position: absolute;
        top: calc(50% - 0.6em);
        left: 1ch;
        mix-blend-mode: difference;
        /* color: #888; */
        color: rgb(var(--value-color, var(--none-color, black)), 1);
        /* --hue: 0;
        --saturation: 100%;
        --lightness: 100%;
        color: hsl(var(--hue), var(--saturation), var(--lightness)); */
        font-weight: bolder;
      }
    `,
];
__decorate([
    e$2({ type: Decimal })
], SmoothProgress.prototype, "value", void 0);
__decorate([
    e$2({ type: Decimal })
], SmoothProgress.prototype, "min", void 0);
__decorate([
    e$2({ type: Decimal })
], SmoothProgress.prototype, "max", void 0);
__decorate([
    e$2()
], SmoothProgress.prototype, "text", void 0);
SmoothProgress = __decorate([
    n$3('smooth-progress')
], SmoothProgress);

const formatCostEffect = (item, quantity = 1) => {
    var _a;
    // if (item.tooltip) {
    //   setTimeout(() => {
    //     const oldCostTooltips = item.costTooltips;
    //     const oldEffectTooltips = item.effectTooltips;
    //     const costTooltips = tippy(
    //       item.tooltip.popper.querySelectorAll('[data-cost-string]')!,
    //       {
    //         duration: 0,
    //         delay: 0,
    //         allowHTML: true,
    //       }
    //     );
    //     item.costTooltips = costTooltips;
    //     const effectTooltips = tippy(
    //       item.tooltip.popper.querySelectorAll('[data-effect-string]')!,
    //       {
    //         duration: 0,
    //         delay: 0,
    //         allowHTML: true,
    //       }
    //     );
    //     item.effectTooltips = effectTooltips;
    //     item.costTooltips.forEach((tooltip) => {
    //       tooltip.setContent(
    //         `${[...item.cost].map(([, {string}]) => string?.(-1, 0))}`
    //       );
    //     });
    //     effectTooltips.forEach((tooltip) => {
    //       tooltip.setContent(
    //         `${[...item.effect]
    //           .filter(([k]) => tooltip.reference.classList.contains(k))
    //           .map(([, {string}]) => string?.(-1, 0))}`
    //       );
    //     });
    //     if (oldCostTooltips) {
    //       oldCostTooltips.forEach((tooltip) => {
    //         if (!costTooltips.includes(tooltip) && !tooltip.popper.isConnected)
    //           tooltip.destroy();
    //       });
    //     }
    //     if (oldEffectTooltips) {
    //       oldEffectTooltips.forEach((tooltip) => {
    //         if (!effectTooltips.includes(tooltip) && !tooltip.popper.isConnected)
    //           tooltip.destroy();
    //       });
    //     }
    //   }, 0);
    // }
    return `<span class='costeffect'>${item.cost.size > 0
        ? `<span style="font-size: 1.2em">Cost:</span><br>${[...item.cost]
            // .filter(([k, v]) => ri.get(k)?.unlocked)
            .map(([k, v]) => {
            var _a, _b;
            const costAmount = new Decimal(v.value(-1, 0)).times(quantity);
            return `<span class='fancy ${k}' data-cost-string>${costAmount.lt(0) ? '+' : ''}${formatEng(costAmount.abs())}</span> ${ri.get(k).displayName}
            ${ri.preferences.showDetails && ((_a = v.string) === null || _a === void 0 ? void 0 : _a.call(v, -1, 0))
                ? `<span class='subheader'>[${(_b = v.string) === null || _b === void 0 ? void 0 : _b.call(v, -1, 0)}]</span>`
                : ''}`;
        })
            .join('<br>')} `
        : ''} ${item.effect.size > 0
        ? `${item.cost.size > 0 ? '<br>' : ''}<span style="font-size: 1.2em">Effect:</span><br>${[...item.effect]
            .filter(([k, v]) => { var _a; return (_a = ri.get(k)) === null || _a === void 0 ? void 0 : _a.unlocked; })
            .filter(([k, v]) => { var _a, _b; return !((_b = (_a = ri.get(k)) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.has('hide-effect')); })
            .map(([k, v]) => {
            var _a, _b;
            return `<span class='fancy ${k}' data-effect-string>${formatEng(new Decimal(v.value(-1, 0)).times(quantity))}</span> ${ri.get(k).displayName}
            ${ri.preferences.showDetails && ((_a = v.string) === null || _a === void 0 ? void 0 : _a.call(v, -1, 0))
                ? `<span class='subheader'>[${(_b = v.string) === null || _b === void 0 ? void 0 : _b.call(v, -1, 0)}]</span>`
                : ''}`;
        })
            .join('<br>')}
          `
        : ''}<br>Length: ${formatTime(((_a = item.length) !== null && _a !== void 0 ? _a : 1) * quantity)}
  ${item.chance
        ? `<br>Chance of success: ${formatEng(new Decimal(item.chance(0)).times(100), 3)}% ${ri.preferences.showDetails && item.chanceString
            ? `<span class='subheader'>[${item.chanceString(-1, 0)}]</span>`
            : ''}`
        : ''}</span>`;
};
const logisticChance = (input, steepness, midpoint) => {
    input = new Decimal(input);
    steepness = new Decimal(steepness);
    midpoint = new Decimal(midpoint);
    return new Decimal(1).div(input.minus(midpoint).times(steepness).times(-1).exp().plus(1));
};
const formatEng = (num, places = 4) => {
    const decimal = new Decimal(num);
    const { mantissa, exponent } = decimal;
    // Anything less than 1 should be shown
    if (exponent < 0)
        return decimal.toFixed(places - exponent).replace(/0+$/, '');
    // Less than 100,000, just show in full
    if (exponent < 5) {
        if (mantissa % 1 == 0) {
            return decimal.toFixed(0);
        }
        return decimal.toFixed(Math.max(0, places - exponent));
    }
    return `${(mantissa * Math.pow(10, exponent % 3)).toPrecision(4)}e${Math.floor(exponent / 3) * 3}`;
};
const formatResourceValue = (value) => formatEng(value);
const formatResourceCapacity = (capacity) => formatEng(capacity);
const formatStat = (stat) => {
    return formatEng(stat);
};
const formatStatDelta = (delta, places = 4) => {
    let res = '';
    if (delta.eq(0))
        return res;
    if (delta.exponent >= -4) {
        res = formatEng(delta, places - Math.min(places, -delta.exponent));
    }
    if (delta.lt(0))
        return `-${res.slice(1)}`;
    return `+${res}`;
};
const formatDelta = (delta, places = 4) => {
    if (delta.eq(0))
        return '';
    if (delta.lt(0))
        return formatEng(delta, places);
    return `+${formatEng(delta, places)}`;
};
const formatTime = (seconds, short = false) => {
    seconds = new Decimal(seconds);
    let result = '';
    const places = seconds.lt(1) ? 0 : 0;
    const minutes = seconds.div(60).floor();
    const hours = minutes.div(60).floor();
    const days = hours.div(24).floor();
    const years = days.div(365).floor();
    if (years.gte(1))
        result += `${years.toFixed(0)}${short ? ':' : 'y'}`;
    if (days.gte(1))
        result += `${days.minus(years.times(365)).toFixed(0)}${short ? ':' : 'd'}`;
    if (hours.gte(1))
        result += `${hours.minus(days.times(24)).toFixed(0)}${short ? ':' : 'h'}`;
    if (minutes.gte(1))
        result += `${minutes.minus(hours.times(60)).toFixed(0)}${short ? ':' : 'm'}`;
    return (result += `${seconds.minus(minutes.times(60)).toFixed(places)}${short ? '' : 's'}`);
};
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const fancy = (name, string = '', invert = false) => {
    if (string == '')
        string = capitalizeFirstLetter(name);
    return `<span class='fancy ${invert ? 'invert' : ''} ${name}'>${string}</span>`;
};
function sumActivitiesByTag(tag, prop) {
    return activitiesByTag(tag).reduce((acc, activity) => {
        if (!Reflect.has(activity, prop))
            return acc;
        return acc.add(activity[prop]);
    }, new Decimal(0));
}
function activitiesByTag(tag) {
    return Object.values(ri.activities).filter((activity) => activity.tags.has(tag));
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement$1(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement$1(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement$1(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
  return document.body;
};

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */

function actualContains(parent, child) {
  var target = child;

  while (target) {
    var _target$getRootNode;

    if (parent.contains(target)) {
      return true;
    }

    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }

  return false;
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? // @ts-ignore
!!window.msCrypto : false;

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

{
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      var _name;

      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }

    popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }

    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    } // Clicked on the event listeners target


    if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    instance.state.isMounted = true;
    createPopperInstance();
    /* istanbul ignore else */

    {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

Object.assign({}, applyStyles$1, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

tippy.setDefaultProps({
  render: render
});

const ToolTippy = (superClass, tippyOptions) => {
    class ToolTippyClass extends superClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            this.tooltip = tippy(this);
            this.costTooltips = [];
            this.effectTooltips = [];
            this.tooltipContent = () => '';
            this.tooltip.setProps({
                allowHTML: true,
                interactive: true,
                interactiveBorder: 10,
                maxWidth: 'none',
                delay: [350, 0],
                duration: [null, 0],
                ...tippyOptions,
            });
            setInterval(this._updateTooltip.bind(this), 100);
        }
        _updateTooltip() {
            this.tooltip.setContent(this.tooltipContent());
        }
    }
    return ToolTippyClass;
};

function evaluateCost(cost, step, optionIndex) {
    return new Map([...cost].map(([key, { value, string }]) => [
        key,
        { value: value(step, optionIndex), string: string === null || string === void 0 ? void 0 : string(step, optionIndex) },
    ]));
}

/**
 * An ongoing activity.
 *
 * @fires activity-clicked - Indicates when the activity is clicked or dropped onto the Queue.
 */
let Activity = class Activity extends ToolTippy(UnlockableLitElement) {
    constructor() {
        super();
        this.optionData = {};
        this.name = 'activity';
        this.displayName = 'Activity';
        this.description = 'Description';
        this.length = 1;
        this._tags = new Set(['activity']);
        this.optionIndex = 0;
        this.scrolled = false;
        this._options = [];
        this.optionsByTag = [];
        this.uses = new Decimal(0);
        this.consecutiveUses = new Decimal(0);
        this.tooltipContent = () => '';
        this.cost = new Map();
        this.effect = new Map();
        this.allowPartial = false;
        this.replacesActivity = '';
        this.canAfford = (step, optionIndex, chanceRoll, dryRun) => {
            var _a;
            let cost = this.cost;
            // For Activities with options, override the cost with the selected option's cost.
            if (this.options.length > 0) {
                const beforePerform = this.beforePerform(step, optionIndex, chanceRoll);
                cost = (_a = beforePerform.cost) !== null && _a !== void 0 ? _a : this.cost;
            }
            for (const [key, { value }] of cost) {
                const val = new Decimal(value(step, optionIndex));
                const item = ri.get(key);
                if (val.gt(0)) {
                    if (val.gt(item.value)) {
                        if (!dryRun) {
                            ri.log(`Cannot ${this.displayName} - Not enough ${item.displayName}, need ${formatEng(val)} have ${formatEng(item.value)}. Need ${formatEng(val.minus(item.value))} more.`, [
                                'activity',
                                this.name,
                                'mergeable',
                                `merge_${this.name}`,
                                'error',
                            ]);
                        }
                        return false;
                    }
                }
                else if (val.lt(0)) {
                    if (val.times(-1).gt(item.vacancy)) {
                        if (!dryRun) {
                            ri.log(`Cannot ${this.displayName} - Too much ${item.displayName}, need ${formatEng(val.times(-1))} space have ${formatEng(item.vacancy)}. Need ${formatEng(item.vacancy
                                .plus(val)
                                .times(-1))} less.`, [
                                'activity',
                                this.name,
                                'mergeable',
                                `merge_${this.name}`,
                                'error',
                            ]);
                        }
                        return false;
                    }
                }
            }
            return true;
        };
        /** Callback function when you can't afford the activity.
         *
         * @param ri The RunnerIdle instance
         * @param step The step number
         * @param optionIndex The index of the option
         * @returns `true` if it takes time, `false` if it can be skipped
         */
        this.onCannotAfford = () => {
            // ri.log(`Cannot ${this.displayName} - ${}`, ['activity', this.name]);
            return false;
        };
        this.onUnlock = () => {
            if (this.replacesActivity != '') {
                this.replace(ri.activities[this.replacesActivity]);
                ri.log(`Replaced ${this.displayName} with ${ri.activities[this.replacesActivity].displayName}`, [`activity`, this.name, 'persistent']);
            }
        };
        this.beforePerform = (step, optionIndex, chanceRoll) => {
            var _a, _b, _c;
            if (this.options.length > 0) {
                const optionName = this.options[optionIndex];
                const option = this.optionData[optionName];
                if (option.chance && chanceRoll > option.chance(step, optionIndex)) {
                    this.cost = (_a = option.failCost) !== null && _a !== void 0 ? _a : option.cost;
                    return {
                        cancel: true,
                        logString: `${option.displayName}`,
                        takesTime: true,
                        cost: (_b = option.failCost) !== null && _b !== void 0 ? _b : option.cost,
                        effect: (_c = option.failEffect) !== null && _c !== void 0 ? _c : new Map(),
                    };
                }
                return {
                    cancel: false,
                    cost: option.cost,
                    effect: option.effect,
                };
            }
            return {};
        };
        this.perform = (step, optionIndex) => {
            var _a, _b, _c;
            const chanceRoll = Math.random();
            // If this Activity cannot be partially done and this is the first step,
            // check if we can afford the entire Activity.
            let affordableStep = step;
            if (!this.allowPartial && step == 1)
                affordableStep = -1;
            if (this.canAfford(affordableStep, optionIndex, chanceRoll)) {
                const beforePerform = this.beforePerform(step, optionIndex, chanceRoll);
                const logString = (_a = beforePerform.logString) !== null && _a !== void 0 ? _a : '';
                const cost = (_b = beforePerform.cost) !== null && _b !== void 0 ? _b : this.cost;
                const effect = (_c = beforePerform.effect) !== null && _c !== void 0 ? _c : this.effect;
                // Log first so that the values are available still
                ri.logCostEffect(this, logString, evaluateCost(cost, step, optionIndex), evaluateCost(effect, step, optionIndex), ['activity']);
                // Pay all the costs.
                for (const [key, v] of cost) {
                    ri.gain(key, -v.value(step, optionIndex));
                }
                // Perform the value-based effects.
                for (const [key, v] of effect) {
                    ri.gain(key, v.value(step, optionIndex));
                }
                // Perform anything that can't be done in the value-based effects.
                this.performSpecial(step, optionIndex);
                return true;
            }
            // Can't afford it.
            return this.onCannotAfford(step, optionIndex);
        };
        this.performSpecial = (_step, _optionIndex) => {
            // Do nothing.
        };
        this.baseEffectString = '';
        setTimeout(() => {
            this.classList.add(this.name);
            this.toggleHiddenByPlayer(this.hiddenByPlayer);
        });
    }
    get tags() {
        const optionsCostEffects = Object.entries(this.optionData)
            .filter(([optionName, optionData]) => this.options.includes(optionName))
            .flatMap(([, optionData]) => [...optionData.cost, ...optionData.effect].map(([key]) => key));
        return new Set([
            ...this._tags,
            ...[...this.cost, ...this.effect].map(([key]) => key),
            ...optionsCostEffects,
        ]);
    }
    set tags(value) {
        this._tags = new Set([...this._tags, ...value]);
    }
    get options() {
        return [
            ...this._options,
            ...this.optionsByTag.flatMap((tag) => Object.keys(ri.resources).filter((resourceName) => {
                const resource = ri.resources[resourceName];
                return (resource.unlocked &&
                    resource.tags.has(tag) &&
                    resource.name in this.optionData);
            })),
        ];
    }
    set options(value) {
        this._options = value;
    }
    unlockOption(optionName) {
        this._options.push(optionName);
        this.requestUpdate();
    }
    get timeSpent() {
        return this.uses.times(this.length);
    }
    resetToInitials() {
        super.resetToInitials();
        this.uses = new Decimal(0);
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        this._updateTooltip();
        return $ `
      <juicy-draggable
        position=${'static'}
        dropselector=${'#activity-queue'}
        @juicy-draggable-stop=${this._onItemDropped}
      >
        <div class="drag activity fancy" @click=${this._onStart}>
          ${this.displayName}
          ${this.options.length > 0
            ? $ `
                <select
                  name="options"
                  class=${this.options[this.optionIndex]}
                  @click=${(e) => e.stopPropagation()}
                  @change=${(e) => (this.optionIndex = Number(e.target.value))}
                >
                  ${this.options.map((option, index) => $ `
                      <option
                        value=${index}
                        class=${this.options[index]}
                        ?selected=${index == this.optionIndex}
                      >
                        ${option}
                      </option>
                    `)}
                </select>
              `
            : w}
        </div>
      </juicy-draggable>
    `;
    }
    _updateTooltip() {
        var _a, _b, _c;
        const optionsContainer = (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.popper.querySelector('.options-container');
        if (optionsContainer && optionsContainer.scrollTop != 0)
            return;
        let costEffectString;
        if (this.options.length > 0) {
            costEffectString = '<div class="options-container">';
            for (const optionName of this.options) {
                const option = this.optionData[optionName];
                costEffectString += `<br>${option.displayName}<br>${formatCostEffect({ ...option, length: (_b = option.length) !== null && _b !== void 0 ? _b : this.length }, 1)}<br>`;
            }
            costEffectString += '</div>';
        }
        else {
            costEffectString = formatCostEffect(this, 1);
        }
        (_c = this.tooltip) === null || _c === void 0 ? void 0 : _c.setContent(`${this.description}<br><br>${costEffectString}${this.tooltipContent() ? '<br><br>' + this.tooltipContent() : ''} <br><br>Uses: ${this.uses}<br>Time Spent: ${formatTime(this.timeSpent)}<br>Tags: ${[...this._tags]}`);
    }
    replace(activity) {
        activity.toggleHiddenByPlayer(true);
        ri.activityQueue.forEach((queueItem) => {
            if (queueItem.activity == activity) {
                queueItem.activity = this;
            }
        });
    }
    toggleHiddenByPlayer(force) {
        if (force !== undefined) {
            this.hiddenByPlayer = force;
        }
        else {
            this.hiddenByPlayer = !this.hiddenByPlayer;
        }
        if (this.hiddenByPlayer) {
            this.classList.add('hiddenByPlayer');
        }
        else {
            this.classList.remove('hiddenByPlayer');
        }
        ri.requestUpdate();
    }
    _onStart(e) {
        if (e.ctrlKey || e.metaKey) {
            this.toggleHiddenByPlayer();
            return;
        }
        const event = new Event('activity-clicked', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    _onItemDropped(e) {
        const drop = e.detail.dropElement;
        if (!drop)
            return;
        const event = new Event('activity-clicked', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
};
Activity.styles = [
    global_css,
    r$2 `
      div.drag,
      div.drag-helper.dragging {
        background-color: rgb(var(--value-color, initial), 1);
        font-size: 1.5em;
        border: 1px solid black;
        border-radius: 4px;
        margin: 2px;
        padding: 2px 4px;
      }

      div.drag {
        transition-duration: 0.25s;
        cursor: move;
      }

      div.drag:hover {
        background-color: #0008;
        color: white;
      }

      div.drag-helper {
        display: none;
      }

      div.drag-helper.dragging {
        display: block;
        cursor: move;
      }
    `,
];
__decorate([
    e$2({ type: Number })
], Activity.prototype, "optionIndex", void 0);
__decorate([
    e$2()
], Activity.prototype, "_options", void 0);
__decorate([
    e$2()
], Activity.prototype, "optionsByTag", void 0);
Activity = __decorate([
    n$3('ri-activity')
], Activity);

let ActivityQueueItem = class ActivityQueueItem extends ToolTippy(s, {
    placement: 'top-start',
}) {
    constructor() {
        super();
        this.activity = new Activity();
        this.repeat = 1;
        this.activeIndex = 0;
        this.active = false;
        this.option = '';
        this.tooltipContent = this._tooltipContent;
        setTimeout(() => {
            this.classList.add(this.activity.name);
        });
    }
    get totalLength() {
        var _a;
        return this.activity ? this.repeat * ((_a = this.activity) === null || _a === void 0 ? void 0 : _a.length) : 0;
    }
    get optionIndex() {
        var _a, _b;
        return (_b = (_a = this.activity) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.findIndex((o) => o === this.option);
    }
    _tooltipContent() {
        if (this.activity.options.length > 0 && this.option) {
            return formatCostEffect(this.activity.optionData[this.option], this.repeat);
        }
        return formatCostEffect(this.activity, this.repeat);
    }
    render() {
        var _a, _b, _c, _d;
        return $ `
      <juicy-draggable
        position=${'static'}
        dropselector=${'ri-activity-queue-item'}
        @juicy-draggable-start=${this._onReorderStart}
        @juicy-draggable-move=${this._onReorderMove}
        @juicy-draggable-stop=${this._onReorderDrop}
      >
        <div class="queue-item" ?active=${this.active}>
          <div class="drag-handle">⠿</div>
          <div class="queue-item-label">
            <div class="queue-item-label-header">
              <label
                class="fancy ${this.activity.name} ${[...this.activity.tags]
            .filter((tag) => tag.includes('Magic'))
            .join(' ')}"
                >${(_a = this.activity) === null || _a === void 0 ? void 0 : _a.displayName}</label
              >
              ${((_c = (_b = this.activity) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.length) > 0
            ? $ `
                    <select
                      name="options"
                      class="fancy ${this.option}"
                      @change=${(e) => {
                var _a, _b;
                return (this.option =
                    (_b = (_a = this.activity) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b[e.target.value]);
            }}
                    >
                      ${(_d = this.activity) === null || _d === void 0 ? void 0 : _d.options.map((option, index) => {
                var _a;
                return $ `
                          <option
                            value=${index}
                            class=${(_a = this.activity) === null || _a === void 0 ? void 0 : _a.options[index]}
                            ?selected=${index ==
                    this.activity.options.findIndex((o) => o === this.option)}
                          >
                            ${option}
                          </option>
                        `;
            })}
                    </select>
                  `
            : w}
            </div>
            <div class="nowrap">
              <span class="repeat">${this.repeat}</span>
              <button
                @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
                @click=${this._onMore}
              >
                +
              </button>
              <button
                @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
                @click=${this._onLess}
              >
                -
              </button>
            </div>
          </div>
          <smooth-progress
            class="${this.activity.name} ${[...this.activity.tags]
            .filter((tag) => tag.includes('Magic'))
            .join(' ')}"
            .value=${new Decimal(this.activeIndex)}
            .max=${new Decimal(this.totalLength)}
            .text=${`${formatTime(this.activeIndex)} /
              ${formatTime(this.totalLength)}`}
          >
          </smooth-progress>
          <div>
            <button
              @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
              @click=${this._onEarlier}
            >
              ▲
            </button>
            <button
              @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
              @click=${this._onLater}
            >
              ▼
            </button>
            <button
              @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
              @click=${this._onSplit}
            >
              ⟷
            </button>
            <button
              @mousemove=${(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
              @click=${this._onDelete}
            >
              🗑
            </button>
          </div>
        </div>
      </juicy-draggable>
    `;
    }
    _onReorderStart(_) {
        setTimeout(() => {
            var _a, _b;
            const queueItem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.queue-item');
            if (queueItem)
                queueItem.style.visibility = 'hidden';
            const dragHelper = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.drag-helper');
            if (dragHelper)
                dragHelper.style.visibility = 'visible';
        });
    }
    _onReorderMove(_) { }
    _onReorderDrop(e) {
        setTimeout(() => {
            var _a, _b, _c, _d, _e, _f;
            const queueItem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.queue-item');
            if (queueItem)
                queueItem.style.visibility = 'visible';
            const dragHelper = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.drag-helper');
            if (dragHelper)
                dragHelper.style.visibility = 'hidden';
            const drop = e.detail.dropElement;
            if (drop) {
                const event = new CustomEvent('queue-item-reorder', {
                    detail: {
                        from: Object.values((_d = (_c = this.parentNode) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : {}).indexOf(this),
                        to: Object.values((_f = (_e = this.parentNode) === null || _e === void 0 ? void 0 : _e.children) !== null && _f !== void 0 ? _f : {}).indexOf(drop),
                    },
                    bubbles: true,
                    composed: true,
                });
                this.dispatchEvent(event);
            }
        });
    }
    _onMore(e) {
        let numClicks = 1;
        if (e.ctrlKey)
            numClicks *= 5;
        if (e.shiftKey)
            numClicks *= 10;
        this.repeat += numClicks;
    }
    _onLess(e) {
        let numClicks = 1;
        if (e.ctrlKey)
            numClicks *= 5;
        if (e.shiftKey)
            numClicks *= 10;
        this.repeat -= numClicks;
        if (this.repeat < 0)
            this.repeat = 0;
    }
    _onEarlier() {
        const event = new Event('queue-item-earlier', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    _onLater() {
        const event = new Event('queue-item-later', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    _onSplit() {
        const event = new Event('queue-item-split', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    _onDelete() {
        const event = new Event('queue-item-deleted', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
};
ActivityQueueItem.styles = [
    global_css,
    r$2 `
      :host {
        width: 100%;
        background-color: rgb(var(--value-color, initial), 0.2);
      }

      [active] {
        background-color: #fff8;
      }

      .queue-item,
      .drag-helper {
        display: flex;
        width: 100%;
        justify-content: space-between;
        transition: background-color 0.1s ease-in-out;
      }

      .queue-item > *,
      .drag-helper > * {
        padding: 4px;
      }

      .queue-item smooth-progress,
      .drag-helper smooth-progress,
      .queue-item progress,
      .drag-helper progress {
        width: 25%;
      }

      .queue-item-label {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .queue-item-label-header {
        min-width: 60%;
      }

      .drag-hover {
        background: #0002;
      }

      .drag-handle {
        padding: 2px;
        padding-top: 5px; // Manually centering braille icon. Ew.
      }

      label {
        font-size: 1.5em;
      }

      .repeat {
        font-size: 1.25em;
        padding: 4px;
      }
      .repeat::before {
        content: 'x';
        padding-right: 2px;
      }
    `,
];
__decorate([
    e$2({ type: Number })
], ActivityQueueItem.prototype, "repeat", void 0);
__decorate([
    e$2({ type: Number })
], ActivityQueueItem.prototype, "activeIndex", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], ActivityQueueItem.prototype, "active", void 0);
__decorate([
    e$2()
], ActivityQueueItem.prototype, "option", void 0);
ActivityQueueItem = __decorate([
    n$3('ri-activity-queue-item')
], ActivityQueueItem);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$1{constructor(i){if(super(i),this.it=w,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w||null==r)return this._t=void 0,this.it=r;if(r===b$2)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

let FilterView = class FilterView extends s {
    constructor() {
        super(...arguments);
        this.name = 'FilterView';
        this.subtitle = 'All the things!';
        this.filterables = [];
        this.possibleFilters = new Set();
        this.filters = new Set();
        /** If true, requires an intersection of all filters
         * instead of just a single filter to be true.
         */
        this.intersection = false;
        this.reverse = false;
        this.replace = false;
        this.entryClass = 'div';
        this._replacements = {};
    }
    get _currentFilterables() {
        return this.filterables
            .filter((filterable) => {
            var _a;
            let include = this.intersection;
            for (const filter of this.filters) {
                // Skip any special filters
                if ((_a = [...this.possibleFilters].find((f) => f.name === filter)) === null || _a === void 0 ? void 0 : _a.condition)
                    continue;
                if (this.intersection) {
                    if (!filterable.tags.has(filter)) {
                        include = false;
                        break;
                    }
                }
                else {
                    if (filterable.tags.has(filter)) {
                        include = true;
                        break;
                    }
                }
            }
            for (const filter of this.possibleFilters) {
                if (filter.condition) {
                    if (filter.only) {
                        if (this.filters.has(filter.name)) {
                            include = filter.condition(filterable);
                        }
                        continue;
                    }
                    if (!this.filters.has(filter.name) &&
                        filter.condition(filterable)) {
                        include = false;
                        break;
                    }
                }
            }
            return include;
        })
            .map((filterable) => {
            if (this.replace) {
                let el = this._replacements[filterable.name];
                if (!el) {
                    el = document.createElement(this.entryClass);
                    el.filterable = filterable;
                    this._replacements[filterable.name] = el;
                }
                else {
                    el.requestUpdate();
                }
                return el;
            }
            return filterable;
        })
            .sort(this.reverse ? (a, b) => this.compare(b, a) : this.compare);
    }
    get _currentFilters() {
        return [...this.possibleFilters]
            .filter((filter) => filter.condition ||
            this.filterables.some((f) => (!('unlocked' in f) || f.unlocked) && f.tags.has(filter.name)))
            .map((filter) => $ `<input
            type="checkbox"
            class="filter"
            ?checked=${this.filters.has(filter.name)}
            id=${filter.name}
            value=${filter.name}
            @change=${this._onFilterToggle}
          /><label class="filter chip ${filter.name}" for=${filter.name}
            >${filter.displayName}</label
          >`);
    }
    render() {
        return $ `
      <div class="top-container">
        <div class="header">
          <h4>${this.name}<span> - ${this.subtitle}</span></h4>
          <div class='filter-view-options'>
            <input
              type="checkbox"
              id="intersection"
              ?checked=${this.intersection}
              @change=${(event) => {
            this.intersection = event.target.checked;
            this.requestUpdate();
        }}
            /><label class="chip" for="intersection">Invert Filters</label>
            <button
            @click=${this._onFullscreenToggle}
            >⤢</button>
          </div>
        </div>
        <hr />
        <div class="filters">
          <!-- <strong>Filters: </strong> -->
          ${this._currentFilters}
        </div>
        <hr />
        </div>
        <div class="bottom-container">
            ${this._currentFilterables}
        </div>
      </div>
    `;
    }
    compare(a, b) {
        return 0;
    }
    _onFilterToggle(e) {
        if (e.target.checked) {
            if (e.target.value)
                this.filters.add(e.target.value);
        }
        else {
            this.filters.delete(e.target.value);
        }
        this.requestUpdate();
    }
    _onFullscreenToggle() {
        this.classList.toggle('fullscreen');
    }
};
FilterView.styles = [
    global_css,
    r$2 `
      :host {
        display: flex;
        flex-direction: column;
      }
      .header,
      .filters,
      .bottom-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
      }
      .bottom-container {
        overflow-y: auto;
      }
      .bottom-container * {
        margin: 4px;
      }
      .header {
        justify-content: space-between;
      }
      .top-container,
      .bottom-container {
        width: auto;
        height: auto;
      }
    `,
];
__decorate([
    e$2({ type: Array })
], FilterView.prototype, "filterables", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], FilterView.prototype, "intersection", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], FilterView.prototype, "reverse", void 0);
__decorate([
    e$2({ type: Boolean })
], FilterView.prototype, "replace", void 0);
__decorate([
    e$2()
], FilterView.prototype, "entryClass", void 0);
__decorate([
    e$2()
], FilterView.prototype, "_replacements", void 0);
FilterView = __decorate([
    n$3('ri-filter-view')
], FilterView);

let Log = class Log extends FilterView {
    constructor() {
        super(...arguments);
        this.name = 'Log';
        this.subtitle = 'Wait, what was that?';
        this.intersection = true;
        this.reverse = true;
        this.possibleFilters = new Set([
            { name: 'activity', displayName: 'Activity' },
            { name: 'spell', displayName: 'Spell' },
            { name: 'health', displayName: 'Health' },
            { name: 'unlockable', displayName: 'Unlocks' },
        ]);
        this.filters = new Set([]);
    }
};
Log.styles = [
    ...FilterView.styles,
    r$2 `
      :host {
        overflow: hidden;
      }
      .bottom-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-wrap: nowrap;
      }
      .bottom-container * {
        margin: 0px;
      }
      .bottom-container *:nth-child(even) {
        background-color: rgb(var(--black, 0, 0, 0), 0.05);
      }
      .bottom-container *:nth-child(odd) {
        background-color: rgb(var(--white, 255, 255, 255), 0.1);
      }
    `,
];
Log = __decorate([
    n$3('ri-log')
], Log);
let LogEntry = class LogEntry extends s {
    constructor() {
        super(...arguments);
        this.msg = '';
        this.type = '';
        this.important = true;
        this.datetime = Date.now();
        this.tick = new Decimal(0);
        this.tags = new Set();
        this.life = 0;
        this.duration = 1;
    }
    render() {
        setTimeout(() => this._scrollIntoView());
        return $ `<div class="container">
      <div class="header">
        ${`${this.life > 0 ? `${this.life}-` : ''} ${formatTime(this.tick, true)} -`}
      </div>
      <div class="msg ${this.tags.has('error') ? 'error' : ''}">
        ${o(this.msg)}
      </div>
    </div>`;
    }
    _scrollIntoView() {
        if (!this.parentElement)
            return;
        this.parentElement.scrollTop = this.parentElement.scrollHeight;
    }
};
LogEntry.styles = [
    global_css,
    r$2 `
      :host {
        width: 100%;
        content-visibility: auto;
      }
      .container,
      .header,
      .msg {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .msg {
        width: 100%;
      }
      .msg.error {
        background-color: #f22; //rgb(var(--alert-color, 255, 0, 0));
        color: rgb(var(--white, 255, 255, 255));
        font-weight: bolder;
      }
    `,
];
__decorate([
    e$2()
], LogEntry.prototype, "msg", void 0);
__decorate([
    e$2({ type: Number })
], LogEntry.prototype, "datetime", void 0);
__decorate([
    e$2({ attribute: false })
], LogEntry.prototype, "tick", void 0);
__decorate([
    e$2({ attribute: false })
], LogEntry.prototype, "tags", void 0);
__decorate([
    e$2({ type: Number })
], LogEntry.prototype, "life", void 0);
LogEntry = __decorate([
    n$3('ri-log-entry')
], LogEntry);

let ActivityLogEntry = class ActivityLogEntry extends LogEntry {
    constructor() {
        super(...arguments);
        this.cost = new Map();
        this.effect = new Map();
        this.name = '';
        this.important = false;
        this.displayName = '';
        this.logString = '';
    }
    add(data) {
        this.duration += 1;
        const { cost, effect } = data;
        for (const [key, { value, string: str }] of cost) {
            if (this.cost.has(key)) {
                const { value: oldValue, string: oldString } = this.cost.get(key);
                this.cost.set(key, {
                    value: new Decimal(oldValue).add(value),
                    string: `${oldString} + ${str}`,
                });
            }
            else {
                this.cost.set(key, { value, string: str });
            }
        }
        for (const [key, { value, string: str }] of effect) {
            if (this.effect.has(key)) {
                const { value: oldValue, string: oldString } = this.effect.get(key);
                this.effect.set(key, {
                    value: new Decimal(oldValue).add(value),
                    string: `${oldString} + ${str}`,
                });
            }
            else {
                this.effect.set(key, { value, string: str });
            }
        }
        this.requestUpdate();
    }
    render() {
        setTimeout(() => this._scrollIntoView());
        return $ `<div class="container">
      <div class="header">
        ${`${this.life > 0 ? `${this.life}-` : ''} ${formatTime(this.tick, true)} -`}
      </div>
      <div class="msg">
        <span class="fancy ${this.name}"
          >${this.displayName}${this.duration > 1
            ? ` x${this.duration}`
            : ''}</span
        >
        ${this.logString}<span class="effect"
          >${o([...this.effect]
            .filter(([k, { value }]) => { var _a; return !new Decimal(value).eq(0) && ((_a = ri === null || ri === void 0 ? void 0 : ri.get(k)) === null || _a === void 0 ? void 0 : _a.unlocked); })
            .map(([k, v]) => {
            var _a;
            return `<span class='fancy ${k}'>${formatEng(v.value)}</span> ${(_a = ri === null || ri === void 0 ? void 0 : ri.get(k)) === null || _a === void 0 ? void 0 : _a.displayName}`;
        })
            .join(', '))}</span
        ><span class="expand"></span>${this.cost.size > 0
            ? o(`${[...this.cost]
                .filter(([k, { value }]) => { var _a; return new Decimal(value).gt(0) && ((_a = ri === null || ri === void 0 ? void 0 : ri.get(k)) === null || _a === void 0 ? void 0 : _a.unlocked); })
                .map(([k, v]) => {
                var _a;
                return `<span class='fancy ${k}'>-${formatEng(v.value)}</span> ${(_a = ri === null || ri === void 0 ? void 0 : ri.get(k)) === null || _a === void 0 ? void 0 : _a.displayName}`;
            })
                .join(', ')}`)
            : ''}
      </div>
    </div>`;
    }
};
ActivityLogEntry = __decorate([
    n$3('ri-activity-log-entry')
], ActivityLogEntry);

/**
 * A resource; e.g. Stamina
 *
 */
let Resource = class Resource extends UnlockableLitElement {
    constructor() {
        super();
        this.name = 'resource';
        this.displayName = this.name;
        this.description = 'Description';
        this._tags = new Set(['resource']);
        this._value = new Decimal(0);
        this.baseCapacity = new Decimal(10);
        this.minimum = new Decimal(0);
        this.delta = new Decimal(0);
        this.initialCapacity = new Decimal(0);
        this.initialValue = new Decimal(0);
        this.valueFormatter = formatResourceValue;
        this.capacityFormatter = formatResourceCapacity;
        this.beforeLoss = (_newValue) => { };
        this.beforeGain = (_newValue) => { };
        /** Callback function triggered when value is set to capacity or higher.
         *  Note that this will run each time the value is set to the capacity or above,
         *  including when it's already at max capacity!
         */
        this.onMaxCapacity = () => { };
        /** Callback function triggered when value is set to minimum or lower.
         *  Note that this will run each time the value is set to the minimum or below,
         *  including when it's already at minimum!
         */
        this.onMinimum = () => { };
        this.onTick = () => { };
        this.tooltip = tippy(this, {
            content: `${this.description}`,
            placement: 'top-start',
            allowHTML: true,
        });
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (this._value.lt(val)) {
            this.beforeGain(val);
        }
        else if (this._value.gt(val)) {
            this.beforeLoss(val);
        }
        val = val.clamp(this.minimum, this.capacity);
        this._value = val;
        if (this._value.equals(this.capacity)) {
            this.onMaxCapacity();
        }
        if (this._value.equals(this.minimum)) {
            this.onMinimum();
        }
    }
    get capacity() {
        return this.baseCapacity;
    }
    set capacity(value) {
        this.baseCapacity = value;
    }
    get full() {
        return this.value.gte(this.capacity);
    }
    get vacancy() {
        return this.capacity.minus(this.value);
    }
    setInitials() {
        this.initialCapacity = this.baseCapacity;
        this.initialValue = this.value;
    }
    resetToInitials() {
        super.resetToInitials();
        this.baseCapacity = this.initialCapacity;
        this.value = this.initialValue;
    }
    get valueHTML() {
        return `<span class='${this.name} fancy resource-value'>${this.valueFormatter(this.value)}</span> ${this.displayName}`;
    }
    render() {
        this.tooltip.setContent(`${this.description}`);
        return $ `
      <div
        class="ri-resource"
        ?hidden=${!this.unlocked}
        @click=${this._onClick}
      >
        <div class="ri-resource-label">
          <span class="fancy">${this.displayName}</span>
        </div>
        <div class="ri-resource-meter">
          <smooth-progress
            class="value"
            .value=${new Decimal(this.value)}
            .max=${new Decimal(this.capacity)}
            .min=${new Decimal(this.minimum)}
            .text=${`${this.valueFormatter(this.value)} /
              ${this.capacityFormatter(this.capacity)}`}
          ></smooth-progress>
          <div class="delta">${formatDelta(this.delta, 0)}</div>
        </div>
      </div>
    `;
    }
    _onClick(e) {
        if (e.ctrlKey || e.metaKey) {
            this.hiddenByPlayer = !this.hiddenByPlayer;
            if (this.hiddenByPlayer) {
                this.classList.add('hiddenByPlayer');
            }
            else {
                this.classList.remove('hiddenByPlayer');
            }
            ri.requestUpdate();
            return;
        }
    }
};
Resource.styles = [
    global_css,
    r$2 `
      :host {
      }
      .ri-resource {
        display: flex;
        flex-direction: row;
        background: rgb(var(--value-color), 0.2);
        justify-content: space-between;
        width: 100%;
      }
      // shadow DOM css above overrides div[hidden]{display:none;}
      .ri-resource[hidden] {
        display: none;
      }
      .ri-resource-label,
      .ri-resource-meter {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .ri-resource-label {
        width: 50%;
      }
      .ri-resource-meter {
        width: 50%;
      }
      /* ri-meter.value {
        --color: rgb(var(--value-color));
        --height: 16px;
        --width: 100%;
      } */
      smooth-progress {
        height: 20px; //var(--height, 16px);
        width: 100%;
      }
      .delta {
        min-width: 48px;
        display: flex;
        justify-content: flex-end;
      }
    `,
];
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "_value", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "baseCapacity", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "minimum", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "delta", void 0);
Resource = __decorate([
    n$3('ri-resource')
], Resource);
let Meter = class Meter extends s {
    constructor() {
        super(...arguments);
        this.value = new Decimal(0);
        this.capacity = new Decimal(0);
        this.minimum = new Decimal(0);
    }
    render() {
        return $ `
      <meter
        value=${this.value.toNumber()}
        max=${this.capacity.toNumber()}
        min=${this.minimum.toNumber()}
      ></meter>
    `;
    }
};
Meter.styles = r$2 `
    meter::-webkit-meter-optimum-value {
      background: var(--color, green);
    }
    meter::-webkit-meter-bar {
      background: rgb(var(--none-color, none), 1);
      height: var(--height, 16px);
    }
    meter {
      height: var(--height, 16px);
      width: var(--width, 128px);
      vertical-align: baseline;
    }
  `;
__decorate([
    e$2({ type: Decimal, attribute: false })
], Meter.prototype, "value", void 0);
__decorate([
    e$2({ type: Decimal, attribute: false })
], Meter.prototype, "capacity", void 0);
__decorate([
    e$2({ type: Decimal, attribute: false })
], Meter.prototype, "minimum", void 0);
Meter = __decorate([
    n$3('ri-meter')
], Meter);

let Resources = class Resources extends FilterView {
    constructor() {
        super(...arguments);
        this.name = 'Resources';
        this.subtitle = 'Only some is never enough.';
        this.intersection = true;
        this.possibleFilters = new Set([
            { name: 'body', displayName: 'Body' },
            { name: 'mind', displayName: 'Mind' },
            { name: 'train', displayName: 'Training' },
            { name: 'meditate', displayName: 'Meditation' },
            { name: 'food', displayName: 'Food' },
            { name: 'special', displayName: 'Special' },
            { name: 'experience', displayName: 'XP' },
            {
                name: 'hiddenByPlayer',
                displayName: 'Hidden',
                condition: (a) => a.hiddenByPlayer,
            },
        ]);
        this.filters = new Set([]);
    }
    get resources() {
        return this.filterables;
    }
    set resources(value) {
        this.filterables = value;
    }
    render() {
        const superRender = super.render();
        return $ `
    ${superRender}
      <div class='space-filling'><hr/></div>
        <div id="queue-loop-delta">
          <h4>Net Changes Last Loop</h4>
          <div class=".container">
            ${function () {
            return o(Object.entries(ri.lastQueueLoopDelta)
                .filter(([_string, filterable]) => {
                var _a;
                if ('unlocked' in filterable && !filterable.unlocked)
                    return false;
                let include = this.intersection;
                for (const filter of this.filters) {
                    // Skip any special filters
                    if ((_a = [...this.possibleFilters].find((f) => f.name === filter)) === null || _a === void 0 ? void 0 : _a.condition)
                        continue;
                    if (this.intersection) {
                        if (!filterable.tags.has(filter)) {
                            include = false;
                            break;
                        }
                    }
                    else {
                        if (filterable.tags.has(filter)) {
                            include = true;
                            break;
                        }
                    }
                }
                for (const filter of this.possibleFilters) {
                    if (filter.condition) {
                        if (filter.only) {
                            if (this.filters.has(filter.name)) {
                                include = filter.condition(filterable);
                            }
                            continue;
                        }
                        if (!this.filters.has(filter.name) &&
                            filter.condition(filterable)) {
                            include = false;
                            break;
                        }
                    }
                }
                return include;
            })
                .sort(this.compare)
                .filter((entry) => !entry[1].value.equals(0) ||
                (entry[1].capacity && !entry[1].capacity.equals(0)))
                // Repeatedly searching like this is expensive
                .filter((entry) => {
                const unlockable = ri.unlockables.find((e) => e.name == entry[0]);
                if (unlockable)
                    return unlockable.unlocked;
                return true;
            })
                .map((entry) => {
                var _a, _b;
                const unlockable = ri.unlockables.find((e) => e.name == entry[0]);
                return `
                <div class="ri-loop-delta ${entry[0]}" ${entry[0] == 'distance' || (unlockable === null || unlockable === void 0 ? void 0 : unlockable.unlocked)
                    ? ''
                    : 'hidden'}>
                  <div class="ri-loop-delta-label">
                    <span class="fancy ${unlockable === null || unlockable === void 0 ? void 0 : unlockable.name}">${unlockable ? unlockable.displayName : entry[1].displayName}</span>
                    ${formatResourceValue(entry[1].value)}
                  </div>
                  <span>${((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.capacity) && !entry[1].capacity.equals(0)
                    ? ` Capacity ${formatDelta(entry[1].capacity)}`
                    : ''}</span>
                  <span>${formatDelta(entry[1].perSecond)}/s
                    </span>
                    <span class="${((_b = entry[1].perSecond) === null || _b === void 0 ? void 0 : _b.lt(0)) ? 'danger' : ''}">${entry[1].timeToFullOrEmpty
                    ? formatTime(entry[1].timeToFullOrEmpty())
                    : ''}</span>
                  </div>`;
            })
                .join(''));
        }.bind(this)()}
          </div>
        </div>
      </div>`;
    }
};
Resources.styles = [
    ...FilterView.styles,
    r$2 `
      /** Override FilterView Styles */
      .top-container {
        height: auto;
      }
      .bottom-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-y: auto;
        margin: -4px;
      }
      .bottom-container * {
        margin: 4px 4px 0px;
        width: calc(100% - 8px);
      }

      /* .space-filling {
        width: 100%;
        height: 100%;
      } */

      /** Net Changes stuff */

      #queue-loop-delta {
        max-height: 25%;
      }
      #queue-loop-delta.container {
        overflow-y: auto;
      }

      .ri-loop-delta {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        background-color: rgb(var(--value-color), 0.2);
      }

      .ri-loop-delta-label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%;
      }
    `,
];
Resources = __decorate([
    n$3('ri-resources')
], Resources);

let Stat = class Stat extends UnlockableLitElement {
    constructor() {
        super();
        this.name = 'stat';
        this.displayName = 'Stat';
        this.shortName = '???';
        this.description = 'Description';
        this._tags = new Set(['stat']);
        this._value = new Decimal(1);
        this.min = new Decimal(1);
        this.delta = new Decimal(0);
        this.initialValue = new Decimal(0);
        this.beforeChange = (_newValue) => { };
        this.tooltip = tippy(this, {
            content: `${this.description}`,
            placement: 'top-start',
            allowHTML: true,
        });
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (value.lt(this.min))
            value = this.min;
        this.beforeChange(value);
        this._value = value;
    }
    init(value) {
        this.value = new Decimal(value);
        this.setInitials();
    }
    setInitials() {
        this.initialValue = this.value;
    }
    resetToInitials() {
        super.resetToInitials();
        this.value = this.initialValue;
    }
    get valueHTML() {
        return this.getValueHTML();
    }
    getValueHTML(fancy = true, named = true) {
        return `<span><span class='${this.name} ${fancy ? 'fancy' : ''} stat'>
    ${formatStat(this.value)}</span> ${named ? this.shortName : ''}</span>`;
    }
    render() {
        this.tooltip.setContent(`<strong>${this.displayName}</strong><br>${this.description} `);
        getComputedStyle(this);
        return $ `
      <div class=${this.name + ' fancy container'}>
        <div class="value">${o(this.getValueHTML(false, false))}</div>
        <div class="short-name">${this.shortName}</div>
        <div class="delta">${formatStatDelta(this.delta)}</div>
      </div>
    `;
    }
};
Stat.styles = [
    global_css,
    r$2 `
      :host {
        min-width: 7ch;
        height: 4em;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 4px;
      }
      .container * {
        min-height: 1fr;
      }
      .value {
        font-size: 1.4rem;
      }
    `,
];
__decorate([
    e$2()
], Stat.prototype, "name", void 0);
__decorate([
    e$2()
], Stat.prototype, "displayName", void 0);
__decorate([
    e$2()
], Stat.prototype, "shortName", void 0);
__decorate([
    e$2()
], Stat.prototype, "description", void 0);
__decorate([
    e$2({ type: Decimal })
], Stat.prototype, "_value", void 0);
__decorate([
    e$2({ type: Decimal })
], Stat.prototype, "delta", void 0);
Stat = __decorate([
    n$3('ri-stat')
], Stat);

let Activities = class Activities extends FilterView {
    constructor() {
        super(...arguments);
        this.name = 'Activities';
        this.subtitle = 'Click or drag to the queue. Control + click to hide/show.';
        this.intersection = true;
        this.possibleFilters = new Set([
            ...Object.values(ri.resources)
                .filter((resource) => resource.unlocked && !resource.name.includes('Exp'))
                .map((resource) => ({
                name: resource.name,
                displayName: resource.displayName,
            })),
            // {name: 'combat', displayName: 'Combat'},
            { name: 'travel', displayName: 'Travel' },
            { name: 'meditate', displayName: 'Meditation' },
            { name: 'train', displayName: 'Training' },
            ...Object.values(ri.stats)
                .filter((stat) => stat.unlocked)
                .map((stat) => ({
                name: stat.name,
                displayName: stat.displayName,
            })),
            {
                name: 'hiddenByPlayer',
                displayName: 'Hidden',
                condition: (a) => a.hiddenByPlayer,
            },
        ]);
        this.filters = new Set([]);
    }
    get activities() {
        return this.filterables;
    }
    set activities(value) {
        this.filterables = value;
    }
    get _currentFilterables() {
        return this.filterables
            .filter((filterable) => {
            var _a;
            let include = this.intersection;
            for (const filter of this.filters) {
                // Skip any special filters
                if ((_a = [...this.possibleFilters].find((f) => f.name === filter)) === null || _a === void 0 ? void 0 : _a.condition)
                    continue;
                if (this.intersection) {
                    if (!filterable.tags.has(filter)) {
                        include = false;
                        break;
                    }
                }
                else {
                    if (filterable.tags.has(filter)) {
                        include = true;
                        break;
                    }
                }
            }
            for (const filter of this.possibleFilters) {
                if (filter.condition) {
                    if (filter.only) {
                        if (this.filters.has(filter.name)) {
                            include = filter.condition(filterable);
                        }
                        continue;
                    }
                    if (!this.filters.has(filter.name) &&
                        filter.condition(filterable)) {
                        include = false;
                        break;
                    }
                }
            }
            return include;
        })
            .sort(this.reverse ? (a, b) => this.compare(b, a) : this.compare);
    }
};
Activities = __decorate([
    n$3('ri-activities')
], Activities);

let Tutorial = class Tutorial extends s {
    constructor() {
        super(...arguments);
        this.stage = 0;
    }
    next() {
        this.stage += 1;
    }
    currentStageContent(stage) {
        var _a, _b;
        let runnerIdle;
        switch (stage) {
            case 0:
                return $ `
          <p>
            <!-- You awake to find yourself in a dark room.
            <br />
            Suddenly, a portal opens up! With nothing else going on, you walk
            through it. Upon exiting the portal, you find yourself at the start
            of a path winding down through the endless blue sky.
            <br />
            After walking for a while, the path starts to crumble beneath you,
            and you slip through the cracks. After falling for what feels like
            forever, the ground looms large before you. A booming voice calls
            out <span style="font-variant: small-caps;">"NOT SO FAST"</span>.

            <strong>BAM!</strong> -->

            Upon exiting the portal, you find yourself at the start of a path
            winding down through the endless blue sky! With a foreboding sense
            of déjà vu, you start to walk.
          </p>
          <p>Click the "Next" button to continue.</p>
          <button @click="${this.next}">Next</button>
        `;
            case 1:
                return $ `
          <h1></h1>
          <p>
            This is a tutorial to help you get started. If you're familiar with
            other games in this subgenre, like Groundhog Life, Idle Loops,
            Immortality Idle, or Cavernous II, you can probably skip this
            tutorial, and if you aren't you should go play them after this!
          </p>
          <p>There's not much of a tutorial here yet, sorry!</p>
          <p>Click the "Next" button to continue.</p>
          <button @click="${this.next}">Next</button>
        `;
            default:
                (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-modal')) === null || _b === void 0 ? void 0 : _b.close();
                // Unpause
                runnerIdle = document.querySelector('runner-idle');
                if (runnerIdle) {
                    runnerIdle.gameSpeed = 1;
                }
                break;
        }
    }
    render() {
        return $ `
      <ri-modal .closeOnOverlay=${false}>
        ${this.currentStageContent(this.stage)}
      </ri-modal>
    `;
    }
};
Tutorial.styles = [global_css, r$2 ``];
__decorate([
    e$2({ type: Number })
], Tutorial.prototype, "stage", void 0);
Tutorial = __decorate([
    n$3('ri-tutorial')
], Tutorial);

function settings () {
    var _a, _b, _c;
    // pause
    const settings = document.querySelector('ri-settings');
    settings.oldGameSpeed = ri.gameSpeed;
    ri.gameSpeed = 0;
    if (settings) {
        const modal = (_a = settings.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-modal');
        if (modal) {
            modal.open();
            (_c = (_b = settings.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById('main-plot')) === null || _c === void 0 ? void 0 : _c.plot();
        }
    }
}
let Settings = class Settings extends s {
    constructor() {
        super(...arguments);
        this.oldGameSpeed = 0;
    }
    exportSave() {
        var _a;
        const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('export-save');
        if (textarea)
            textarea.value = btoa(JSON.stringify(ri.saveGame));
    }
    importSave() {
        var _a;
        const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('import-save');
        if (textarea)
            ri.load(JSON.parse(atob(textarea.value)));
    }
    close() {
        var _a, _b;
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-modal')) === null || _b === void 0 ? void 0 : _b.close();
        this.unpause();
    }
    toggle(prop, force) {
        ri.preferences[prop] = force !== null && force !== void 0 ? force : !ri.preferences[prop];
        ri.requestUpdate();
        this.requestUpdate();
    }
    unpause() {
        const runnerIdle = document.querySelector('runner-idle');
        if (runnerIdle) {
            runnerIdle.gameSpeed = this.oldGameSpeed;
        }
    }
    render() {
        return $ `
      <ri-modal .closeOnOverlay=${true} .onClose=${this.unpause}>
        <div class="container">
          <button @click=${this.exportSave}>Export Save</button>
          <button @click=${this.importSave}>Import Save</button>
          <button
            @click=${(_) => {
            var _a;
            if (window.confirm('Do you really want to delete your save? THIS IS IRREVERSIBLE.')) {
                (_a = document.querySelector('runner-idle')) === null || _a === void 0 ? void 0 : _a.resetSave();
            }
        }}
            class="danger"
          >
            HARD RESET
          </button>
          <textarea readonly id="export-save"></textarea>
          <textarea id="import-save"></textarea>
          <button
            @click=${() => this.toggle('darkMode')}
            class="${ri.preferences.darkMode ? 'toggled' : ''}"
          >
            Dark Mode
          </button>
          <button
            @click=${() => this.toggle('lightEffects')}
            class="${ri.preferences.lightEffects ? 'toggled' : ''}"
          >
            Light affects background color
          </button>
          <button
            @click=${() => this.toggle('showDetails')}
            class="${ri.preferences.showDetails ? 'toggled' : ''}"
          >
            Show Detailed Calculations
          </button>
          <!-- <button
            @click=${() => this.toggle('saveTimeOffline')}
            class="${ri.preferences.saveTimeOffline ? 'toggled' : ''}"
          >
            Save Time Offline
          </button> -->
          <button @click=${this.close}>Close</button>
          <br />
          <button @click=${() => window.open('https://discord.gg/WS87ea4gQY')}>
            Discord
          </button>
          <ri-plot
            id="main-plot"
            .data=${ri.history}
            .keys=${ri
            ? [
                'distance',
                ...Object.keys(ri.stats).filter((s) => ri.stats[s].unlocked),
                ...Object.keys(ri.resources).filter((r) => ri.resources[r].unlocked),
            ]
            : []}
          ></ri-plot>
        </div>
      </ri-modal>
    `;
    }
};
Settings.styles = [
    global_css,
    r$2 `
      * {
        transition: all 0.2s ease-in-out;
      }
      .modal {
        background-color: red;
      }
      button {
        background-color: #fff4;
      }

      .toggled {
        background-color: green;
        color: white;
      }
      .toggled:hover {
        background-color: darkgreen;
      }
    `,
];
Settings = __decorate([
    n$3('ri-settings')
], Settings);

let Modal = class Modal extends s {
    constructor() {
        super();
        this.active = false;
        this.closeOnOverlay = false;
        this.hidden = !this.active;
    }
    render() {
        return $ `
      <div
        class="overlay"
        @click=${this.closeOnOverlay ? this.close : null}
      ></div>
      <div class="modal">
        <slot></slot>
      </div>
    `;
    }
    open() {
        this.active = true;
        this.hidden = false;
    }
    close() {
        this.active = false;
        this.hidden = true;
        this.onClose();
    }
    onClose() { }
};
Modal.styles = [
    global_css,
    r$2 `
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1001;
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        /* transform: translate(-50%, -50%); */
        width: 100vw;
        height: 100vh;
        background-color: rgb(var(--background-color, 255, 255, 255));
        border-radius: 5px;
        z-index: 1002;
      }
    `,
];
__decorate([
    e$2({ type: Boolean, reflect: true })
], Modal.prototype, "active", void 0);
__decorate([
    e$2({ type: Boolean })
], Modal.prototype, "closeOnOverlay", void 0);
Modal = __decorate([
    n$3('ri-modal')
], Modal);

const click_target = document.getElementById('perception-click-target');
let lastMoved = Date.now();
const startDate = Date.now();
click_target === null || click_target === void 0 ? void 0 : click_target.addEventListener('click', () => {
    ri.stats.perception.value = ri.stats.perception.value.plus(0.05);
    // ri.stats.requestUpdate();
    randomizeLocation();
    ri.focus();
});
function randomizeLocation() {
    lastMoved = Date.now();
    if (click_target) {
        click_target.style.top = `${Math.random() * Math.max(270, window.innerHeight)}px`;
        click_target.style.left = `${Math.random() * Math.max(480, window.innerWidth)}px`;
    }
}
setInterval(() => {
    // Make it easier if it's been over 15 minutes and the player hasn't clicked
    if (Date.now() - startDate > 1000 * 60 * 15 &&
        ri.stats.perception.value.eq(1)) {
        click_target === null || click_target === void 0 ? void 0 : click_target.classList.add('big');
    }
    else {
        click_target === null || click_target === void 0 ? void 0 : click_target.classList.remove('big');
    }
    if (Date.now() - lastMoved < 10 * 1000)
        return;
    if (Math.random() < 0.1) {
        randomizeLocation();
    }
}, 1000);

let Spell = class Spell extends Activity {
    constructor() {
        super();
        this.name = 'spell';
        this.displayName = 'Spell';
        this._tags = new Set(['spell']);
        this.optionIndex = 0;
        this.length = 1;
        this.cooldown = new Decimal(1);
        this._currentCooldown = new Decimal(0);
        this.level = 1;
        this.uses = new Decimal(0);
        this.active = false;
        this.cost = new Map();
        this.getCostString = () => '';
        this.effect = new Map();
        this.getEffectString = () => '';
        // @property() override canAfford: (
        //   step: number,
        //   optionIndex: number
        // ) => boolean = (step, optionIndex) => {
        //   for (const [key, {value, string}] of this.cost) {
        //     if (
        //       new Decimal(value(step, optionIndex)).gt(
        //         (ri.get(key) as IValuable).value
        //       )
        //     ) {
        //       return false;
        //     }
        //   }
        //   return true;
        // };
        this.baseEffectString = '';
        this.perform = (step, optionIndex) => {
            var _a, _b, _c;
            const chanceRoll = Math.random();
            if (this.canAfford(step, optionIndex, 1)) {
                if (this.currentCooldown.lte(0.01)) {
                    const beforePerform = this.beforePerform(step, optionIndex, chanceRoll);
                    (_a = beforePerform.logString) !== null && _a !== void 0 ? _a : '';
                    const cost = (_b = beforePerform.cost) !== null && _b !== void 0 ? _b : this.cost;
                    const effect = (_c = beforePerform.effect) !== null && _c !== void 0 ? _c : this.effect;
                    ri.stats.intelligence.value = ri.stats.intelligence.value.plus(0.001 * this.level);
                    // Reset cooldown
                    this.currentCooldown = this.cooldown;
                    // Update magic stats
                    for (const tag of this.tags) {
                        if (tag.includes('Magic'))
                            ri.gain(tag, 0.01);
                    }
                    ri.logCostEffect(this, '', evaluateCost(cost, step, optionIndex), evaluateCost(effect, step, optionIndex), ['spell']);
                    for (const [key, { value }] of cost) {
                        ri.gain(key, -value(step, optionIndex));
                    }
                    // Perform the value-based effects.
                    for (const [key, { value }] of effect) {
                        ri.gain(key, value(step, optionIndex));
                    }
                    // Perform anything that can't be done in the value-based effects.
                    this.performSpecial(step, optionIndex);
                    this.uses = this.uses.plus(1);
                    return true;
                }
                else {
                    ri.log(`${this.displayName} is on cooldown ${formatTime(this.currentCooldown)} left`, ['spell', this.name]);
                    return false;
                }
            }
            else {
                // Can't afford it.
                this.onCannotAfford(step, optionIndex);
                return false;
            }
        };
        this.performSpecial = (_step, _optionIndex) => {
            // Do nothing.
        };
        setTimeout(() => {
            this.classList.add(this.name, ...this.tags);
        });
    }
    get currentCooldown() {
        return this._currentCooldown;
    }
    set currentCooldown(value) {
        this._currentCooldown = value.clamp(0, this.cooldown);
        this.requestUpdate();
    }
    cast(step, optionIndex) {
        this.perform(step, optionIndex);
    }
    render() {
        return $ `
      <juicy-draggable
        position=${'static'}
        dropselector=${'#activity-queue'}
        @juicy-draggable-stop=${this._onItemDropped}
      >
        <div
          class="chip spell fancy ${this.name}
          ${this.canAfford(-1, 0, 1, true) ? '' : 'cannot-afford'}
          ${this.currentCooldown.gt(0) ? 'cooldown' : ''}"
          @click=${this._onClick}
        >
          ${this.currentCooldown.gt(0)
            ? formatEng(this.currentCooldown, 1)
            : this.displayName}
          ${this.options.length > 0
            ? $ `
                <select
                  name="options"
                  class=${this.options[this.optionIndex]}
                  @click=${(e) => e.stopPropagation()}
                  @change=${(e) => (this.optionIndex = Number(e.target.value))}
                >
                  ${this.options.map((option, index) => $ `
                      <option
                        value=${index}
                        class=${this.options[index]}
                        ?selected=${index == this.optionIndex}
                      >
                        ${option}
                      </option>
                    `)}
                </select>
              `
            : w}
        </div>
      </juicy-draggable>
    `;
    }
    _updateTooltip() {
        var _a, _b;
        let costEffectString;
        if (this.options.length > 0) {
            costEffectString = '<div class="options-container">';
            for (const optionName of this.options) {
                const option = this.optionData[optionName];
                costEffectString += `<br>${option.displayName}<br>${formatCostEffect({ ...option, length: (_a = option.length) !== null && _a !== void 0 ? _a : this.length }, 1)}<br>`;
            }
            costEffectString += '</div>';
        }
        else {
            costEffectString = formatCostEffect(this, 1);
        }
        (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.setContent(`${this.description}<br><br>${costEffectString}${this.tooltipContent() ? '<br><br>' + this.tooltipContent() : ''}
      <br><br>Cooldown: ${formatTime(this.currentCooldown)}/${formatTime(this.cooldown)}
      <br>Uses: ${this.uses}<br>Time Spent: ${formatTime(this.timeSpent)}<br>Tags: ${[...this._tags]}`);
    }
    _onClick() {
        const event = new CustomEvent('spell-clicked', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    _onItemDropped(e) {
        const drop = e.detail.dropElement;
        if (!drop)
            return;
        const event = new Event('spell-dropped', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
};
Spell.styles = [
    global_css,
    r$2 `
      :host {
        min-width: 3em;
        text-align: center;
      }
      .container {
        border: 1px black solid;
        padding: 4px;
      }
      div.drag,
      div.drag-helper.dragging {
        background-color: rgb(var(--value-color, initial), 1);
        font-size: 1.5em;
        border: 1px solid black;
        border-radius: 4px;
        margin: 2px;
        padding: 2px 4px;
      }

      div.drag {
        transition-duration: 0.25s;
        cursor: move;
      }

      div.drag:hover {
        background-color: #0008;
        color: white;
      }

      div.drag-helper {
        display: none;
      }

      div.drag-helper.dragging {
        display: block;
        cursor: move;
      }

      .cooldown,
      .cannot-afford {
        opacity: 0.5;
      }
    `,
];
__decorate([
    e$2()
], Spell.prototype, "name", void 0);
__decorate([
    e$2()
], Spell.prototype, "displayName", void 0);
__decorate([
    e$2({ type: Number })
], Spell.prototype, "optionIndex", void 0);
__decorate([
    e$2({ type: Number })
], Spell.prototype, "length", void 0);
__decorate([
    e$2({ type: Decimal })
], Spell.prototype, "cooldown", void 0);
__decorate([
    e$2({ type: Decimal })
], Spell.prototype, "uses", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], Spell.prototype, "active", void 0);
__decorate([
    e$2()
], Spell.prototype, "cost", void 0);
__decorate([
    e$2()
], Spell.prototype, "getCostString", void 0);
__decorate([
    e$2()
], Spell.prototype, "effect", void 0);
__decorate([
    e$2()
], Spell.prototype, "getEffectString", void 0);
__decorate([
    e$2()
], Spell.prototype, "baseEffectString", void 0);
__decorate([
    e$2()
], Spell.prototype, "perform", void 0);
__decorate([
    e$2()
], Spell.prototype, "performSpecial", void 0);
Spell = __decorate([
    n$3('ri-spell')
], Spell);

let Spells = class Spells extends FilterView {
    constructor() {
        super();
        this.name = 'Spells';
        this.subtitle = 'Click to cast, drag to queue.';
        this.intersection = true;
        this.possibleFilters = new Set([
            { name: 'lightMagic', displayName: 'Light' },
            { name: 'fireMagic', displayName: 'Fire' },
            { name: 'timeMagic', displayName: 'Time' },
            { name: 'spaceMagic', displayName: 'Space' },
            { name: 'combat', displayName: 'Combat' },
        ]);
        this.filters = new Set([]);
        // realtime spells (mostly Time Magic) cooldown according to irl time,
        // while others cooldown based on game time.
        let lastTime = 0;
        const loop = (now) => {
            if (!lastTime)
                lastTime = now;
            for (const spell of this.spells.filter((spell) => spell.tags.has('realtime'))) {
                spell.currentCooldown = spell.currentCooldown.minus((now - lastTime) / 1000);
            }
            lastTime = now;
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
    get spells() {
        return this.filterables;
    }
    set spells(value) {
        this.filterables = value;
    }
};
Spells = __decorate([
    n$3('ri-spells')
], Spells);

let SmoothValue = class SmoothValue extends s {
    constructor() {
        super();
        this._value = new Decimal(0);
        this._count = 0;
        this.step = new Decimal(1);
        this.target = new Decimal(0);
        this.places = 1;
        this.timer = setInterval(() => {
            if (this._count > 0) {
                this._count -= 1;
                this._value = this._value.plus(this.step);
                this.requestUpdate();
            }
        }, 10);
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this.target = val;
        const frames = 100;
        this.step = this.target.minus(this._value).div(frames);
        this._count += frames;
    }
    get formattedValue() {
        return formatEng(this.value, this.places);
    }
    render() {
        return $ `${this.formattedValue}`;
    }
};
SmoothValue.styles = [
    global_css,
    r$2 `
      progress {
        width: 100%;
      }
    `,
];
__decorate([
    e$2({ type: Decimal, attribute: 'data-value' })
], SmoothValue.prototype, "value", null);
__decorate([
    e$2({ type: Decimal })
], SmoothValue.prototype, "step", void 0);
__decorate([
    e$2({ type: Decimal })
], SmoothValue.prototype, "target", void 0);
__decorate([
    e$2({ type: Number })
], SmoothValue.prototype, "places", void 0);
SmoothValue = __decorate([
    n$3('smooth-value')
], SmoothValue);

let FilterEntry = class FilterEntry extends s {
    render() {
        return $ `${this.filterable}`;
    }
};
__decorate([
    e$2({ attribute: false })
], FilterEntry.prototype, "filterable", void 0);
FilterEntry = __decorate([
    n$3('ri-filter-entry')
], FilterEntry);

// Unlockables display
let Unlockables = class Unlockables extends FilterView {
    constructor() {
        super(...arguments);
        this.name = 'Unlockables';
        this.replace = true;
        this.subtitle = 'What will you work on next?';
        this.possibleFilters = new Set([
            { name: 'activity', displayName: 'Activity' },
            { name: 'stat', displayName: 'Stat' },
            { name: 'resource', displayName: 'Resource' },
            { name: 'spell', displayName: 'Spell' },
            {
                name: 'hidden',
                displayName: 'Hidden',
                condition: (item) => !item.visible,
            },
            {
                name: 'unlocked',
                displayName: 'Locked Only',
                condition: (item) => !item.unlocked,
                only: true,
            },
            {
                name: 'undiscovered',
                displayName: 'Undiscovered Only',
                condition: (item) => item.secret,
                only: true,
            },
        ]);
        this.filters = new Set(['activity', 'stat', 'resource', 'spell']);
    }
    compare(a, b) {
        a = a.filterable;
        b = b.filterable;
        if (a.unlocked && !b.unlocked)
            return -1;
        if (!a.unlocked && b.unlocked)
            return 1;
        // if (a.new && !b.new) return -1;
        // if (!a.new && b.new) return 1;
        if (a.unlocked && b.unlocked) ;
        if (!a.unlocked && !b.unlocked) {
            if (a.secret && !b.secret)
                return 1;
            if (!a.secret && b.secret)
                return -1;
            if (!a.visible && b.visible)
                return 1;
            if (a.visible && !b.visible)
                return -1;
            if (a.conditionString < b.conditionString)
                return -1;
            if (a.conditionString > b.conditionString)
                return 1;
        }
        return a.compareDocumentPosition(b);
    }
};
Unlockables.styles = [
    ...FilterView.styles,
    r$2 `
      .filters,
      .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
      }
      .container * {
        margin: 4px;
      }
    `,
];
Unlockables = __decorate([
    n$3('ri-unlockables')
], Unlockables);

// TODO Add percent completeness as a visible progression (div with % completed as width)
let UnlockablesEntry = class UnlockablesEntry extends ToolTippy(s, { interactive: false }) {
    constructor() {
        super();
        this.name = 'Unlockable';
        this.displayName = 'Unlockable';
        this.tags = new Set();
        this.addEventListener('mouseover', () => {
            var _a;
            (_a = this.filterable) === null || _a === void 0 ? void 0 : _a.classList.add('unlockables-entry-hovered');
        });
        this.addEventListener('mouseout', () => {
            var _a;
            (_a = this.filterable) === null || _a === void 0 ? void 0 : _a.classList.remove('unlockables-entry-hovered');
        });
    }
    render() {
        if (!this.filterable)
            return w;
        const unlockString = !this.filterable.visible
            ? 'Hidden'
            : this.filterable.conditionString;
        // setTimeout(() => this.scrollIntoView());
        return $ `<div
      class="${this.filterable.new ? 'new' : ''} ${this.filterable.unlocked
            ? ''
            : 'entry-locked'}"
    >
      <smooth-progress .value=${new Decimal(this.filterable.progress())}>
        <div class="nowrap label">
          ${this.filterable.unlocked
            ? this.filterable.displayName
            : o(unlockString)}
        </div>
      </smooth-progress>
    </div>`;
    }
    _updateTooltip() {
        var _a, _b, _c, _d, _e;
        const unlockString = !((_a = this.filterable) === null || _a === void 0 ? void 0 : _a.visible)
            ? 'Hidden'
            : (_b = this.filterable) === null || _b === void 0 ? void 0 : _b.conditionString;
        if ((_c = this.filterable) === null || _c === void 0 ? void 0 : _c.unlocked) {
            this.tooltip.setContent(`Required: ${unlockString}`);
        }
        else {
            this.tooltip.setContent(`Unlocks: ${((_d = this.filterable) === null || _d === void 0 ? void 0 : _d.secret)
                ? 'Undiscovered'
                : (_e = this.filterable) === null || _e === void 0 ? void 0 : _e.displayName} `);
        }
    }
};
UnlockablesEntry.styles = [
    global_css,
    r$2 `
      :host {
        /* border: 1px rgb(var(--black, black)) solid; */
        --value-color: 180, 180, 180;
        --none-color: 20, 20, 20;
      }

      div {
        transition: 1s linear all;
        border: 1px rgb(var(--value-color, black)) solid;
        border-radius: 10px;
        /* background: inherit; */
      }

      .label {
        padding: 2px;
        /* mix-blend-mode: difference; */
        color: rgb(var(--none-color));
        font-weight: bold;
      }

      div.entry-locked {
        background: #fff8;
        border-color: rgb(var(--black, black));
        border-width: 2px;
      }
    `,
];
__decorate([
    e$2({ attribute: false })
], UnlockablesEntry.prototype, "filterable", void 0);
UnlockablesEntry = __decorate([
    n$3('ri-unlockables-entry')
], UnlockablesEntry);

let Plot = class Plot extends s {
    constructor() {
        super(...arguments);
        this.data = [];
        this.keys = [];
    }
    plot() {
        var _a;
        const plotElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('plot');
        if (!plotElement)
            return;
        const data = [];
        for (const key of this.keys) {
            data.push({
                x: [...Array(this.data.length).keys()],
                y: [
                    ...this.data.map((point) => { var _a, _b; return (_b = (key in point ? (_a = point[key][0]) === null || _a === void 0 ? void 0 : _a.toNumber() : 0)) !== null && _b !== void 0 ? _b : 0; }),
                ],
                type: 'scatter',
                mode: 'lines+markers',
                name: key,
            });
        }
        // Plotly.newPlot(plotElement, data, layout);
    }
    render() {
        return $ `<div id="plot"></div>`;
    }
};
Plot.styles = [global_css, r$2 ``];
__decorate([
    e$2()
], Plot.prototype, "data", void 0);
__decorate([
    e$2()
], Plot.prototype, "keys", void 0);
Plot = __decorate([
    n$3('ri-plot')
], Plot);

let saveGame = JSON.parse(localStorage.getItem('saveGame') || 'null');
const saveVersion = 6;
const tickLength = 1000;
let lastTime = Date.now();
let lastSpellCooldownTime = Date.now();
let lastSaved = Date.now();
let oldStats = [];
let oldResources = [];
// I know.
const ri = document.querySelector('runner-idle');
window.ri = ri; // Just for live working on it.
window.Decimal = Decimal;
function StartGameLoop() {
    requestAnimationFrame(() => StartGameLoop());
    const now = Date.now();
    // If we're paused or lots of time has passed (background tab, really slow machine?),
    // bank the time and requestUpdate just in case.
    if (ri.gameSpeed == 0 || now - lastTime > 2000) {
        ri.resources.time.value = ri.resources.time.value.plus((now - lastTime) / 1000);
        lastSpellCooldownTime = now;
        lastTime = now;
        ri.requestUpdate();
        updateUnlocks();
        save();
    }
    // If we're not paused, update the game.
    else {
        // If we're using saved time and we have some, use it.
        if (ri.useSavedTime &&
            ri.resources.time.value.gte(tickLength / 1000) &&
            new Decimal(1000)
                .div(ri.resources.time.value.div(10).max(10))
                .lt(now - lastTime)) {
            // updateSpellCooldowns(tickLength);
            lastSpellCooldownTime = now;
            lastTime = now;
            gameLoop();
            ri.resources.time.value = ri.resources.time.value.minus(tickLength / 1000);
        }
        // Otherwise just tick if possible
        else {
            if (lastSpellCooldownTime - lastTime > 900)
                lastSpellCooldownTime = lastTime - 1000;
            // updateSpellCooldowns(now - lastSpellCooldownTime);
            lastSpellCooldownTime = now;
            if (now - lastTime > tickLength) {
                gameLoop();
                lastTime += tickLength;
            }
        }
    }
}
const updateSpellCooldowns = (dt) => {
    // Realtime spells are updated in a separate loop (see spells.ts)
    for (const spell of Object.values(ri.spells).filter((spell) => !spell.tags.has('realtime'))) {
        if (spell.currentCooldown.gt(0)) {
            spell.currentCooldown = spell.currentCooldown.minus(dt / 1000);
        }
    }
};
/**
 * This is the order of when things happen in a given tick
 * 1. Perform action
 * 2. Game updates
 * 3. State checks
 **/
let insertedCSS = false;
let canUseTime = false;
function gameLoop() {
    var _a;
    if (ri.steppingOneFrame) {
        ri.steppingOneFrame = false;
        ri.gameSpeed = 0;
    }
    ri.tick = ri.tick.add(1);
    updateSpellCooldowns(tickLength);
    // Feature unlocks. These must happen every time the game is loaded.
    if (ri.activities.jog.unlocked ||
        ri.activities.meditate.unlocked ||
        !ri.activityQueue.some((q) => q.activity.name == 'rest') ||
        !ri.activityQueue.some((q) => q.activity.name == 'walk')) {
        ri.unlockPanel('activities');
        ri.unlockPanel('activity-queue');
    }
    if (ri.distance.gte(25) ||
        ri.tick.gt(600) ||
        ri.activityQueue.reduce((acc, a) => acc + a.totalLength, 0) > 2 ||
        ri.activities.meditate.unlocked ||
        ri.activities.jog.unlocked) {
        ri.unlockPanel('unlockables');
    }
    if (Object.values(ri.stats).some((stat) => stat.unlocked)) {
        ri.unlockPanel('stats');
        ri.unlockPerceptionMinigame();
    }
    if (Object.values(ri.spells).some((spell) => spell.unlocked)) {
        ri.unlockPanel('spells');
    }
    if (!canUseTime && ri.resources.time.unlocked) {
        const useSavedTimeToggle = (_a = ri.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('use-saved-time-toggle');
        if (useSavedTimeToggle) {
            canUseTime = true;
            useSavedTimeToggle.hidden = false;
        }
    }
    // Option unlocks
    // Forest
    const gather = ri.activities.gather;
    const hunt = ri.activities.hunt;
    if (ri.distance.gte(1e3)) {
        if (!gather.options.includes('wood')) {
            gather.unlockOption('wood');
        }
    }
    // Hunt
    if (ri.stats.perception.value.gte(1.6) &&
        hunt.unlocked &&
        !hunt.options.includes('deer')) {
        hunt.unlockOption('deer');
    }
    if (ri.stats.perception.value.gte(3) &&
        hunt.unlocked &&
        !hunt.options.includes('boar')) {
        hunt.unlockOption('boar');
    }
    // Gather
    if (ri.stats.perception.value.gte(2) && !gather.options.includes('berry')) {
        gather.tryUnlock(true);
        gather.unlockOption('berry');
    }
    if (ri.distance.gte(100e3) && !gather.options.includes('bait')) {
        gather.tryUnlock(true);
        gather.unlockOption('bait');
    }
    if (!ri.activities.cook.options.includes('pemmican') &&
        ri.resources.meat.unlocked &&
        ri.resources.berry.unlocked) {
        ri.activities.cook.tryUnlock(true);
        ri.activities.cook.unlockOption('pemmican');
    }
    // Landmarks. These only ever happen once.
    if (ri.distance.gte(ri.nextLandmark)) {
        if (ri.nextLandmark.equals(1e4)) {
            ri.log('You have reached the forest! You see some movement in the trees, and a rabbit pops out.', ['persistent']);
            ri.activities.hunt.tryUnlock(true);
        }
        else if (ri.nextLandmark.equals(1e5)) ;
        ri.nextLandmark = ri.nextLandmark.times(10);
    }
    /* Determine this activity */ //TODO Refactor, this is so bad
    // If there're no activities to do, add a rest
    if (!ri.activityQueue.some((queueItem) => queueItem.repeat > 0)) {
        const restQueueItem = document.createElement('ri-activity-queue-item');
        restQueueItem.activity = ri.activities.rest;
        restQueueItem.repeat = 1;
        ri.activityQueue.push(restQueueItem);
    }
    // Get the current activity
    let queueItem = ri.activityQueue[ri.activityQueueIndex];
    // If we didn't find one, continue until we do
    while (!queueItem) {
        ri.activityQueueIndex += 1;
        ri.activityQueueIndex %= ri.activityQueue.length;
        queueItem.active = false;
        queueItem = ri.activityQueue[ri.activityQueueIndex];
        queueItem.active = true;
    }
    // check if it's out of repeats
    while (queueItem.activeIndex >= queueItem.totalLength ||
        queueItem.repeat == 0) {
        // if so, move to the next one
        // queueItem.activeIndex = 0;
        ri.activityQueueIndex += 1;
        ri.activityQueueIndex %= ri.activityQueue.length;
        queueItem.active = false;
        queueItem = ri.activityQueue[ri.activityQueueIndex];
        queueItem.active = true;
        queueItem.activeIndex = 0;
    }
    ri.activeActivity = queueItem.activity;
    queueItem.activeIndex += 1;
    function resetLoopDelta() {
        // Restart queueLoopDelta tracking if we're at the beginning
        if (ri.activityQueueIndex == 0 &&
            (queueItem.activeIndex == 0 || queueItem.activeIndex == 1)) {
            ri.activityQueue.forEach((queueItem, i) => {
                if (i !== ri.activityQueueIndex)
                    queueItem.activeIndex = 0;
            });
            ri.lastQueueLoopDelta = ri.queueLoopDelta;
            ri.lastDistance = ri.distance;
            ri.lastResources = Object.fromEntries(Object.values(ri.resources).map((r) => [
                r.name,
                {
                    value: r.value,
                    capacity: r.capacity,
                },
            ]));
            ri.lastStats = Object.fromEntries(Object.values(ri.stats).map((s) => [
                s.name,
                {
                    value: s.value,
                },
            ]));
        }
    }
    resetLoopDelta();
    /* Perform the active Activity */
    // TODO Clean this whole thing up
    // First, get the current step the activity is on
    let step = queueItem.activeIndex % queueItem.activity.length;
    const inProgress = step != 0;
    let performed = ri.activeActivity.perform(step, queueItem.optionIndex);
    if (!performed)
        queueItem.activeIndex -= 1;
    // If it's not performed, keep going until one is or we hit the start/end of the queue.
    let attempts = 1;
    while (!performed &&
        ri.activityQueueIndex != 0 &&
        attempts < ri.activityQueue.length) {
        attempts += 1;
        // queueItem.activeIndex = 0;
        ri.activityQueueIndex += 1;
        ri.activityQueueIndex %= ri.activityQueue.length;
        queueItem.active = false;
        queueItem = ri.activityQueue[ri.activityQueueIndex];
        queueItem.active = true;
        queueItem.activeIndex = 0;
        if (ri.activityQueueIndex == 0) {
            resetLoopDelta();
        }
        // check if it's out of repeats
        while (queueItem.activeIndex >= queueItem.totalLength ||
            queueItem.repeat == 0) {
            // if so, move to the next one
            // queueItem.activeIndex = 0;
            ri.activityQueueIndex += 1;
            ri.activityQueueIndex %= ri.activityQueue.length;
            queueItem = ri.activityQueue[ri.activityQueueIndex];
            queueItem.activeIndex = 0;
        }
        // Make it active and set its internal index
        ri.activeActivity = queueItem.activity;
        queueItem.activeIndex += 1;
        step = queueItem.activeIndex % queueItem.activity.length;
        performed = ri.activeActivity.perform(step, queueItem.optionIndex);
        if (!performed)
            queueItem.activeIndex -= 1;
    }
    // Completed!
    if (!inProgress && performed) {
        ri.activeActivity.uses = ri.activeActivity.uses.add(1);
        if (ri.lastCompletedActivity == ri.activeActivity) {
            ri.activeActivity.consecutiveUses =
                ri.activeActivity.consecutiveUses.add(1);
        }
        else {
            ri.activeActivity.consecutiveUses = new Decimal(1);
        }
        ri.lastCompletedActivity = ri.activeActivity;
    }
    updateUnlocks();
    // Do all Resource.prototype.onTick()s
    for (const resource of Object.values(ri.resources)) {
        resource.onTick(performed, ri.activeActivity);
    }
    updateUnlocks();
    /* Set attributes */
    for (const unlockable of ri.unlockables) {
        if (unlockable.unlocked && unlockable.hidden) {
            unlockable.hidden = false;
        }
    }
    for (const spell of Object.values(ri.spells)) {
        if (spell.unlocked) {
            spell.requestUpdate();
        }
    }
    /* Set resources gained this frame (deltas) */
    for (const oldStat of oldStats) {
        ri.stats[oldStat.name].delta = ri.stats[oldStat.name].value.minus(oldStat.value);
    }
    for (const oldResource of oldResources) {
        ri.resources[oldResource.name].delta = ri.resources[oldResource.name].value.minus(oldResource.value);
    }
    /* Keep a copy of the current values to calculate deltas next time*/
    oldStats = Object.values(ri.stats).map((stat) => ({
        value: stat.value,
        name: stat.name,
    }));
    oldResources = Object.values(ri.resources).map((resource) => ({
        value: resource.value,
        name: resource.name,
    }));
    // // Disabled for performance reasons.
    // ri.history.push({
    //   ...Object.fromEntries(
    //     Object.entries(ri.stats)
    //       .filter(([, v]) => v.unlocked)
    //       .map(([k, v]) => [k, [v.value]])
    //   ),
    //   ...Object.fromEntries(
    //     Object.entries(ri.resources)
    //       .filter(([k, v]) => v.unlocked)
    //       .map(([k, v]) => [k, [v.value, v.capacity]])
    //   ),
    //   distance: [ri.distance, 0],
    // });
    // ri.history = ri.history.slice(-600);
    const now = Date.now();
    if (lastSaved < now - 1 * 1000) {
        lastSaved = now;
        save();
    }
}
function updateUnlocks() {
    for (const unlockable of ri.unlockables) {
        if (unlockable.tryUnlock()) {
            ri.log(`Unlocked ${unlockable.displayName}, condition: ${unlockable.conditionString}`, ['unlockable', unlockable.name, 'persistent']);
        }
    }
}
function save() {
    if (!ri.saveP)
        return;
    /* Copy all save data to saveGame*/
    saveGame.version = saveVersion;
    saveGame.life = ri.life;
    saveGame.tick = ri.tick;
    saveGame.lastTime = lastTime;
    saveGame.lastSpellCooldownTime = lastSpellCooldownTime;
    saveGame.distance = ri.distance;
    saveGame.nextLandmark = ri.nextLandmark;
    saveGame.unlockedPanels = [...ri.unlockedPanels];
    saveGame.resources = Object.values(ri.resources).map((resource) => ({
        name: resource.name,
        value: resource.value,
        baseCapacity: resource.baseCapacity,
        unlocked: resource.unlocked,
        secret: resource.secret,
        new: resource.new,
        hiddenByPlayer: resource.hiddenByPlayer,
    }));
    saveGame.activities = Object.values(ri.activities).map((activity) => ({
        name: activity.name,
        uses: activity.uses,
        unlocked: activity.unlocked,
        secret: activity.secret,
        new: activity.new,
        hiddenByPlayer: activity.hiddenByPlayer,
    }));
    saveGame.spells = Object.values(ri.spells).map((spell) => ({
        name: spell.name,
        uses: spell.uses,
        unlocked: spell.unlocked,
        secret: spell.secret,
        new: spell.new,
        hiddenByPlayer: spell.hiddenByPlayer,
        currentCooldown: spell.currentCooldown.ceil(),
    }));
    saveGame.stats = Object.values(ri.stats).map((stat) => ({
        name: stat.name,
        value: stat.value,
        unlocked: stat.unlocked,
        secret: stat.secret,
        new: stat.new,
        hiddenByPlayer: stat.hiddenByPlayer,
    }));
    saveGame.loadouts = ri.loadouts.map((loadout, i) => {
        if (ri.lastLoadoutIndex == i) {
            return ri.activityQueue.map((queueItem) => ({
                name: queueItem.activity.name,
                repeat: queueItem.repeat,
                activeIndex: queueItem.activeIndex,
                option: queueItem.option,
            }));
        }
        return loadout.map((queueItem) => ({
            name: queueItem.activity.name,
            repeat: queueItem.repeat,
            activeIndex: queueItem.activeIndex,
            option: queueItem.option,
        }));
    });
    saveGame.selectedLoadoutIndex = ri.lastLoadoutIndex;
    saveGame.activityQueueIndex = ri.activityQueueIndex;
    saveGame.log = ri.shortenLogEntries().map((logEntry) => {
        if (logEntry.msg) {
            return {
                msg: logEntry.msg,
                tags: Array.from(logEntry.tags),
                tick: logEntry.tick,
            };
        }
        if (logEntry.cost || logEntry.effect) {
            return {
                name: logEntry.name,
                displayName: logEntry.displayName,
                cost: [...logEntry.cost.entries()],
                effect: [...logEntry.effect.entries()],
                logString: logEntry.logString,
                tags: Array.from(logEntry.tags),
                tick: logEntry.tick,
            };
        }
    });
    saveGame.preferences = ri.preferences;
    // saveGame.history = ri.history.slice(-600);
    localStorage.setItem('saveGame', JSON.stringify(saveGame));
}
/**
 * The top element for runnerIdle.
 * Holds overarching gamestate and coordinates everything.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let RunnerIdle = class RunnerIdle extends s {
    constructor() {
        super();
        this.tick = new Decimal(0);
        this.gameSpeed = 1;
        this.preferences = {
            darkMode: false,
            showDetails: true,
            lightEffects: true,
            disablePerceptionMinigame: false,
            saveTimeOffline: false,
        };
        this.distance = new Decimal(0);
        this.nextLandmark = new Decimal(1e4);
        this.unlockedPanels = new Set();
        this.logEntries = [];
        this.lastResources = {};
        this.lastStats = {};
        this.lastQueueLoopDelta = {};
        this.lastDistance = 0;
        this.history = [];
        this.lastQueueDeltaTime = new Decimal();
        this.activeActivity = null;
        this.activities = {};
        this.activityOptionsUnlockables = {};
        this.loadouts = [[], [], [], [], []];
        this.lastLoadoutIndex = 0;
        this.activityQueue = this.loadouts[this.lastLoadoutIndex];
        this.activityQueueIndex = 0;
        this.resources = {};
        this.stats = {};
        this.spells = {};
        this.useSavedTime = false;
        this.life = 0;
        /** Relates grid-areas to indices for placement during unlockPanel */
        this.unlockPanelMap = {
            world: [[3, 2]],
            activities: [[3, 1]],
            stats: [[1, 0]],
            'activity-queue': [
                [1, 1],
                [2, 1],
            ],
            'queue-loop-delta': [
                [3, 0],
                [4, 0],
            ],
            unlockables: [
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2],
            ],
            spells: [
                // [3, 2],
                [4, 2],
            ],
        };
        this.saveP = true;
        this.lastLightValue = new Decimal(NaN);
        this.lastDarkMode = false;
        this.lastLightEffects = true;
        setTimeout(this.focus.bind(this));
        this.init();
        if (saveGame == null) {
            saveGame = {};
            // setTimeout(() => tutorial(this), 0);
        }
        else {
            this.load(saveGame);
        }
        gameLoop();
        StartGameLoop();
    }
    getActivityUsesByTag(tag) {
        return Object.values(this.activities)
            .filter((activity) => activity.tags.has(tag))
            .reduce((acc, activity) => acc.add(activity.uses), new Decimal(0));
    }
    unlockPerceptionMinigame() {
        document
            .getElementById('perception-click-target')
            .removeAttribute('hidden');
    }
    get saveGame() {
        return saveGame;
    }
    get(name) {
        if (name.slice(-9) == ':capacity') {
            const resourceName = name.slice(0, -9);
            const item = this.get(resourceName);
            return {
                value: item.value,
                baseCapacity: item.baseCapacity,
                capacity: item.capacity,
                displayName: `${this.get(resourceName).displayName} capacity`,
                unlocked: item.unlocked,
                tags: item.tags,
            };
        }
        if (name === 'distance')
            return { value: this.distance, displayName: 'Distance', unlocked: true };
        if (name in this.resources)
            return this.resources[name];
        if (name in this.stats)
            return this.stats[name];
        // if (name in this.activities) return this.activities[name];
        throw new Error(`No such resource or stat: ${name}`);
    }
    set(name, value) {
        if (name.slice(-9) == ':capacity') {
            const item = this.get(name.slice(0, -9));
            if (item.baseCapacity) {
                item.baseCapacity = new Decimal(value);
                return item.baseCapacity;
            }
            // if (item.capacity) {
            //   item.capacity = value;
            //   return item.capacity!;
            // }
            throw new Error(`${name} does not have a capacity property. Are you sure it's a Resource?`);
        }
        if (name === 'distance') {
            this.distance = new Decimal(value);
            return this.distance;
        }
        if (name in this.resources) {
            this.resources[name].value = new Decimal(value);
            return this.resources[name].value;
        }
        if (name in this.stats) {
            this.stats[name].value = new Decimal(value);
            return this.stats[name].value;
        }
        throw new Error(`No such resource or stat: ${name}`);
    }
    gain(name, amount) {
        if (name.slice(-9) == ':capacity') {
            const item = this.get(name.slice(0, -9));
            if (item.baseCapacity) {
                item.baseCapacity = item.baseCapacity.plus(amount);
                return item.baseCapacity;
            }
            // if (item.capacity) {
            //   item.capacity = item.capacity.plus(amount);
            //   return item.capacity;
            // }
            throw new Error(`${name} does not have a capacity property. Are you sure it's a Resource?`);
        }
        const oldValue = this.get(name).value;
        this.set(name, oldValue.plus(amount));
        return amount;
    }
    get queueLoopDelta() {
        const lastTime = this.lastQueueDeltaTime;
        this.lastQueueDeltaTime = this.tick;
        if (Object.keys(this.lastResources).length == 0 ||
            Object.keys(this.lastStats).length == 0) {
            return {};
        }
        const resourceDelta = Object.fromEntries(Object.values(this.resources).reduce((acc, resource) => {
            const value = resource.value.minus(this.lastResources[resource.name].value);
            const perSecond = value.div(this.tick.minus(lastTime));
            return acc.concat([
                [
                    resource.name,
                    {
                        value,
                        tags: resource.tags,
                        capacity: resource.capacity.minus(this.lastResources[resource.name].capacity),
                        perSecond,
                        timeToFullOrEmpty: () => perSecond.gt(0)
                            ? resource.vacancy.div(perSecond)
                            : perSecond.lt(0)
                                ? resource.value.div(-perSecond)
                                : new Decimal(0),
                        unlocked: resource.unlocked,
                    },
                ],
            ]);
        }, []));
        const statDelta = Object.fromEntries(Object.values(this.stats).reduce((acc, stat) => {
            const value = stat.value.minus(this.lastStats[stat.name].value);
            const perSecond = value.div(this.tick.minus(lastTime));
            return acc.concat([
                [
                    stat.name,
                    {
                        value,
                        tags: stat.tags,
                        unlocked: stat.unlocked,
                        perSecond,
                    },
                ],
            ]);
        }, []));
        return {
            distance: {
                displayName: 'Distance',
                tags: new Set(['distance']),
                unlocked: true,
                value: this.distance.minus(this.lastDistance),
                perSecond: this.distance
                    .minus(this.lastDistance)
                    .div(this.tick.minus(lastTime)),
            },
            ...resourceDelta,
            ...statDelta,
        };
    }
    get unlockables() {
        return [
            ...Object.values(this.activities),
            ...Object.values(this.resources),
            ...Object.values(this.stats),
            ...Object.values(this.spells),
            ...Object.values(this.activityOptionsUnlockables),
        ];
    }
    logCostEffect(activity, logString, cost, effect, tags = new Set()) {
        var _a, _b;
        const lastEntry = this.logEntries[0];
        const mergeID = activity.name;
        if ((lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.mergeID) === mergeID) {
            lastEntry.add({
                cost,
                effect,
            });
            return;
        }
        const activityLogEntry = document.createElement('ri-activity-log-entry');
        activityLogEntry.name = activity.name;
        activityLogEntry.displayName = activity.displayName;
        activityLogEntry.cost = cost;
        activityLogEntry.effect = effect;
        activityLogEntry.datetime = Date.now();
        activityLogEntry.tick = this.tick;
        activityLogEntry.life = this.life;
        activityLogEntry.mergeID = mergeID;
        activityLogEntry.tags = new Set([...tags, activity.name]);
        // TODO Dedupe this
        this.logEntries.unshift(activityLogEntry);
        if (this.logEntries.length > 1000) {
            this.shortenLogEntries();
        }
        // this.requestUpdate();
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-log')) === null || _b === void 0 ? void 0 : _b.requestUpdate();
        document.querySelector('ri-settings').requestUpdate();
    }
    log(msg, tags = new Set()) {
        var _a, _b;
        if (Array.isArray(tags)) {
            // tags = new Set(tags.map((tag) => tag.toLowerCase()));
            tags = new Set(tags);
        }
        const logEntry = document.createElement('ri-log-entry');
        logEntry.msg = msg;
        logEntry.datetime = Date.now();
        logEntry.tick = this.tick;
        logEntry.life = this.life;
        logEntry.tags = tags;
        this.logEntries.unshift(logEntry);
        if (this.logEntries.length > 1000) {
            this.shortenLogEntries();
        }
        // this.requestUpdate();
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-log')) === null || _b === void 0 ? void 0 : _b.requestUpdate();
        document.querySelector('ri-settings').requestUpdate();
    }
    shortenLogEntries() {
        return this.logEntries
            .filter((entry) => entry.tags.has('persistent'))
            .slice(0, 500);
    }
    /** Unlocks a game feature panel */
    unlockPanel(panelId) {
        var _a;
        const panel = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(panelId);
        if (panel === null || panel === void 0 ? void 0 : panel.classList.contains('locked')) {
            panel.classList.remove('locked');
            if (!this.unlockedPanels.has(panelId)) {
                panel.classList.add('new');
                panel.addEventListener('mouseover', () => {
                    panel.classList.remove('new');
                });
                this.unlockedPanels.add(panelId);
            }
            const currentGridTemplateAreas = window.getComputedStyle(this).gridTemplateAreas;
            const GTAArray = currentGridTemplateAreas
                .split('" "')
                .map((arr) => arr.split(' '));
            if (GTAArray.length == 5) {
                for (const [row, col] of this.unlockPanelMap[panelId]) {
                    let finalPanelId = panelId;
                    if (col == 0 && row == 0)
                        finalPanelId = `"${finalPanelId}`;
                    if (col == GTAArray[0].length && row == GTAArray.length)
                        finalPanelId = `${panelId}"`;
                    GTAArray[row][col] = finalPanelId;
                }
                this.style.gridTemplateAreas = GTAArray.map((arr) => arr.join(' ')).join('" "');
            }
        }
    }
    resetSave() {
        localStorage.removeItem('saveGame');
        this.saveP = false;
        window.location.reload();
    }
    init() {
        /** ADD RESOURCES **/
        // Note if you're bughunting:
        // Caution! value has a setter that clamps to [0, capacity],
        // so capacity assignments must happen before value assignments
        // or the value can be clamped to the prior capacity.
        // Object.assign appears to use this order,
        // but this is sketchy voodoo.
        // SKETCHY FREAKING VOODOO. We are in the land of undefined behaviour and it is BAD.
        // TODO: Refactor (Fix, honestly.) to use arrays? Make a class for clamped values directly?
        this.resources.health = document.createElement('ri-resource');
        this.resources.health.classList.add('health');
        Object.assign(this.resources.health, {
            name: 'health',
            displayName: 'Health',
            description: 'Your health.<h2 style="margin:0px;color:orangered;"> If it reaches 0, you die!</h2>But death is not the end...',
            tags: ['body'],
            capacity: new Decimal(10),
            value: new Decimal(10),
            onMinimum: () => this.log(`<span class='danger'>You died.</span> Currently not implemented.`, ['death']),
            conditionString: 'Take damage for the first time',
            condition: () => this.resources.health.value.lt(this.resources.health.capacity),
            visibleCondition: () => this.resources.health.value.lt(this.resources.health.capacity),
        });
        this.resources.healthExp = document.createElement('ri-resource');
        this.resources.healthExp.classList.add('healthExp');
        Object.assign(this.resources.healthExp, {
            name: 'healthExp',
            displayName: 'Health XP',
            description: "<strong>What doesn't kill you makes you stronger.</strong><br>Gain by having less than full Health.<br>Raises Health capacity when full.",
            tags: ['body', 'experience'],
            capacity: new Decimal(10),
            onMaxCapacity: () => {
                this.resources.healthExp._value = this.resources.healthExp._value.minus(this.resources.healthExp.capacity);
                const oldCapacity = this.resources.health.capacity;
                this.resources.health.capacity = this.resources.health.capacity.plus(1);
                this.log(`Increase Health Capacity by ${this.resources.health.capacity.minus(oldCapacity)}!`, ['health', 'capacity']);
                this.resources.healthExp.capacity = this.resources.healthExp.capacity
                    .times(1.1)
                    .floor();
            },
            onTick: () => {
                // HealthExp gain per second based on current health
                // "What doesn't kill you makes you stronger"
                if (this.resources.health.value.lte(this.resources.health.capacity)) {
                    // this.resources.healthExp = this.resources.health.capacity - this.resources.health.value
                    const healthExpGained = this.resources.health.vacancy.div(100);
                    this.resources.healthExp.value =
                        this.resources.healthExp.value.plus(healthExpGained);
                    // logResource('healthExp', healthExpGained);
                }
            },
            value: new Decimal(0),
            secret: true,
            conditionString: 'Unlock Health',
            condition: () => this.resources.health.unlocked,
            visibleCondition: () => this.resources.health.unlocked,
        });
        this.resources.nutrition = document.createElement('ri-resource');
        this.resources.nutrition.classList.add('nutrition');
        Object.assign(this.resources.nutrition, {
            name: 'nutrition',
            displayName: 'Satiation',
            description: `Food fills you up! Goes down by 1 point every 5 seconds at base.
      <br>Using Stamina uses more.
      <br>There are no benefits or downsides to Satiation (for now),
      <br>it just limits how much food you can eat.`,
            tags: ['body', 'food'],
            capacity: new Decimal(100),
            value: new Decimal(0),
            onTick: () => {
                // Hunger
                if (this.tick.toNumber() % 5 == 0)
                    this.resources.nutrition.value =
                        this.resources.nutrition.value.minus(1);
            },
            onMinimum: () => {
                // this.log("You're starving! Find some food, quick!");
                // this.gain('health', -1);
                // TODO add ascetic/masochistic rewards for hunger? monk stuff?
                // TODO!!!! Karma as a hidden multi-life luck element
            },
            secret: true,
            conditionString: `Find some food`,
            condition: () => Object.values(this.resources).some((r) => r.tags.has('food') && r.unlocked),
            visibleCondition: () => Object.values(this.resources).some((r) => r.tags.has('food') && r.unlocked),
        });
        this.resources.wood = document.createElement('ri-resource');
        this.resources.wood.classList.add('wood');
        Object.assign(this.resources.wood, {
            name: 'wood',
            displayName: 'Wood',
            description: '<span class="fancy wood">Wood</span> is used to build things.<br>You can find <span class="fancy wood">Wood</span> in the forest (among other places).',
            tags: ['wood', 'raw'],
            baseCapacity: new Decimal(10),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Gather Wood',
            condition: () => this.resources.wood.value.gt(0),
            visibleCondition: () => this.activities.gather.unlocked &&
                this.activities.gather.options.includes('wood'),
        });
        Object.defineProperty(this.resources.wood, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.meat = document.createElement('ri-resource');
        this.resources.meat.classList.add('meat');
        Object.assign(this.resources.meat, {
            name: 'meat',
            displayName: 'Meat',
            description: '<span class="fancy meat">Meat</span>, raw and bloody. I guess you could eat this?',
            tags: ['food', 'raw'],
            baseCapacity: new Decimal(25),
            value: new Decimal(0),
            secret: true,
            conditionString: `Get Meat`,
            condition: () => this.resources.meat.value.gt(0),
            visibleCondition: () => this.resources.meat.value.gt(0),
        });
        Object.defineProperty(this.resources.meat, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.fish = document.createElement('ri-resource');
        this.resources.fish.classList.add('fish');
        Object.assign(this.resources.fish, {
            name: 'fish',
            displayName: 'Fish',
            description: `<span class="fancy fish">Fish</span>, raw and fishy. I guess you could eat this?
        <br>I'm just kidding, it's delicious.`,
            tags: ['food', 'raw'],
            baseCapacity: new Decimal(100),
            value: new Decimal(0),
            secret: true,
            conditionString: `Get Fish`,
            condition: () => this.resources.fish.value.gt(0),
            visibleCondition: () => this.resources.fish.value.gt(0),
        });
        Object.defineProperty(this.resources.fish, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.bait = document.createElement('ri-resource');
        this.resources.bait.classList.add('bait');
        Object.assign(this.resources.bait, {
            name: 'bait',
            displayName: 'Bait',
            description: `<span class="fancy bait">Bait</span>, raw and baity.
      <br>${fancy('fish', 'Fish')} can't get enough of the stuff.`,
            tags: [],
            baseCapacity: new Decimal(100),
            value: new Decimal(0),
            secret: true,
            conditionString: `Get bait`,
            condition: () => this.resources.bait.value.gt(0),
            visibleCondition: () => this.resources.bait.value.gt(0),
        });
        Object.defineProperty(this.resources.bait, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.cookedMeat = document.createElement('ri-resource');
        this.resources.cookedMeat.classList.add('cookedMeat');
        Object.assign(this.resources.cookedMeat, {
            name: 'cookedMeat',
            displayName: 'Cooked Meat',
            description: 'A well-cooked (and not well-done) piece of <span class="fancy cookedMeat">Cooked Meat</span>. Much better than the raw stuff.',
            tags: ['food', 'cooked'],
            baseCapacity: new Decimal(25),
            value: new Decimal(0),
            secret: true,
            conditionString: `Make it medium-rare`,
            condition: () => this.resources.cookedMeat.value.gt(0),
            visibleCondition: () => this.resources.meat.value.gt(0),
        });
        Object.defineProperty(this.resources.cookedMeat, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.pemmican = document.createElement('ri-resource');
        this.resources.pemmican.classList.add('pemmican');
        Object.assign(this.resources.pemmican, {
            name: 'pemmican',
            displayName: 'Pemmican',
            description: 'A packed together mixture of ground-up dried <span class="fancy meat">Meat</span>, fat, and mystery <span class="fancy berry">Berries</span>.<br>Very nutritious!',
            tags: ['food', 'cooked'],
            baseCapacity: new Decimal(100),
            secret: true,
            conditionString: `Mix some meat and berries`,
            condition: () => this.resources.pemmican.value.gt(0),
            visibleCondition: () => this.resources.meat.unlocked && this.resources.berry.unlocked,
        });
        Object.defineProperty(this.resources.pemmican, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.manameat = document.createElement('ri-resource');
        this.resources.manameat.classList.add('manameat');
        Object.assign(this.resources.manameat, {
            name: 'manameat',
            displayName: 'Manameat',
            tags: ['food'],
            baseCapacity: new Decimal(10),
            value: new Decimal(0),
            secret: true,
            conditionString: `Find Manameat`,
            condition: () => this.resources.manameat.value.gt(0),
            visibleCondition: () => this.resources.manameat.value.gt(0),
        });
        Object.defineProperty(this.resources.manameat, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        this.resources.berry = document.createElement('ri-resource');
        this.resources.berry.classList.add('berry');
        Object.assign(this.resources.berry, {
            name: 'berry',
            displayName: 'Berries',
            tags: ['food'],
            description: `Some wild <span class="fancy berry">Berries</span>. Nutritious and delicious!<br>They make you feel a little strange.`,
            baseCapacity: new Decimal(100),
            value: new Decimal(0),
            secret: true,
            conditionString: `Find Berries (${fancy('perception', 'PER')}: 2 and Gather)`,
            condition: () => this.resources.berry.value.gt(0),
            visibleCondition: () => this.stats.perception.value.gt(1),
        });
        Object.defineProperty(this.resources.berry, 'capacity', {
            get: function () {
                return this.baseCapacity.times(Math.max(ri.stats.spaceMagic.value.log10(), 1));
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        // Stamina
        this.resources.stamina = document.createElement('ri-resource');
        this.resources.stamina.classList.add('stamina');
        Object.assign(this.resources.stamina, {
            name: 'stamina',
            displayName: 'Stamina',
            description: 'The energy your body uses for physical activity.<br>Restore by <span class="fancy rest">Resting</span>.',
            tags: ['body', 'train'],
            baseCapacity: new Decimal(1),
            value: new Decimal(1),
            beforeGain: (_newValue) => {
                ri.resources.staminaExp.value = ri.resources.staminaExp.value.plus(_newValue
                    .min(ri.resources.stamina.capacity)
                    .minus(ri.resources.stamina.value));
            },
            beforeLoss: (_newValue) => {
                ri.resources.nutrition.value = ri.resources.nutrition.value.minus(1
                // ri.resources.stamina.value.minus(_newValue.max(0)).div(10)
                );
            },
        });
        Object.defineProperty(this.resources.stamina, 'capacity', {
            get: function () {
                return this.baseCapacity.times(ri.stats.endurance.value.times(10).log10());
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        //Stamina XP
        this.resources.staminaExp = document.createElement('ri-resource');
        this.resources.staminaExp.classList.add('staminaExp');
        Object.assign(this.resources.staminaExp, {
            name: 'staminaExp',
            displayName: 'Stamina XP',
            description: 'Gain Stamina XP by restoring your Stamina.<br>Stamina capacity increases on max XP.',
            tags: ['body', 'train', 'experience', 'hide-effect'],
            capacity: new Decimal(5),
            value: new Decimal(0),
            onMaxCapacity: () => {
                this.resources.staminaExp._value =
                    this.resources.staminaExp._value.minus(this.resources.staminaExp.capacity);
                const oldCapacity = this.resources.stamina.baseCapacity;
                // Add 10% but at least +1 Stamina
                this.resources.stamina.capacity = oldCapacity
                    .times(1.1)
                    .floor()
                    .max(oldCapacity.plus(1));
                this.log(`<strong>Increase Stamina Capacity by ${this.resources.stamina.capacity.minus(oldCapacity)}!</strong>`, ['stamina', 'capacity']);
                // Add 30% but at least +1 Stamina XP
                this.resources.staminaExp.capacity = this.resources.staminaExp.capacity
                    .times(1.3)
                    .floor()
                    .max(this.resources.staminaExp.capacity.plus(1));
            },
        });
        // Focus
        this.resources.focus = document.createElement('ri-resource');
        this.resources.focus.classList.add('focus');
        Object.assign(this.resources.focus, {
            name: 'focus',
            displayName: 'Focus',
            description: `In the ZONE. Increases Training effectiveness.<br>Push your limits to improve.`,
            tags: ['body', 'train'],
            capacity: new Decimal(100),
            value: new Decimal(0),
            onTick: (performed, activity) => {
                if (performed && activity.tags.has('train')) {
                    // Gain focus capacity by training at max focus
                    if (ri.resources.focus.value.gte(ri.resources.focus.capacity)) {
                        ri.resources.focus.capacity = ri.resources.focus.capacity.plus(0.1);
                    }
                    ri.gain('focus', 1);
                }
                else {
                    // Focus drops by 1/s when not training
                    ri.resources.focus.value = ri.resources.focus.value.minus(1).max(0);
                }
            },
            conditionString: 'Train 20 times',
            condition: () => sumActivitiesByTag('train', 'uses').gte(20),
            progress: () => sumActivitiesByTag('train', 'uses').div(20),
            // Visible if some 'train' activity is unlocked
            visibleCondition: () => Object.values(this.activities).some((activity) => activity.tags.has('train') && activity.unlocked),
        });
        this.resources.mana = document.createElement('ri-resource');
        this.resources.mana.classList.add('mana');
        Object.assign(this.resources.mana, {
            name: 'mana',
            displayName: 'Mana',
            description: 'Magical energy. Used for Spells.',
            tags: ['mind', 'meditate'],
            baseCapacity: new Decimal(1),
            value: new Decimal(0),
            beforeGain: (_newValue) => {
                ri.resources.manaExp.value = ri.resources.manaExp.value.plus(_newValue.minus(ri.resources.mana.value));
            },
            secret: true,
            conditionString: 'Get Mana',
            condition: () => this.resources.mana.value.gt(0),
            visibleCondition: () => this.resources.mana.value.gt(0),
            persistentUnlock: true,
        });
        Object.defineProperty(this.resources.mana, 'capacity', {
            get: function () {
                return this.baseCapacity.times(ri.stats.wisdom.value.times(10).log10());
            },
            set: function (value) {
                this.baseCapacity = value;
            },
        });
        // Mana XP
        this.resources.manaExp = document.createElement('ri-resource');
        this.resources.manaExp.classList.add('manaExp');
        Object.assign(this.resources.manaExp, {
            name: 'manaExp',
            displayName: 'Mana XP',
            description: 'Gain Mana XP by gaining Mana.<br>Mana capacity increases on max XP.',
            tags: ['mind', 'meditate', 'experience'],
            capacity: new Decimal(10),
            onMaxCapacity: () => {
                this.resources.manaExp._value = this.resources.manaExp._value.minus(this.resources.manaExp.capacity);
                const oldCapacity = this.resources.mana.baseCapacity;
                this.resources.mana.baseCapacity = oldCapacity.plus(1);
                this.log(`Increase Mana Capacity by ${this.resources.mana.capacity.minus(oldCapacity)}!`, ['mana', 'capacity']);
                this.resources.manaExp.capacity = this.resources.manaExp.capacity
                    .times(1.5)
                    .floor();
            },
            value: new Decimal(0),
            secret: true,
            conditionString: 'Unlock Mana',
            condition: () => this.resources.mana.unlocked,
            visibleCondition: () => this.resources.mana.unlocked || this.resources.manaDepth.unlocked,
            persistentUnlock: true,
        });
        // Mana Depth
        this.resources.manaDepth = document.createElement('ri-resource');
        this.resources.manaDepth.classList.add('manaDepth');
        Object.assign(this.resources.manaDepth, {
            name: 'manaDepth',
            displayName: 'Mana Density',
            description: `The density of the Mana around you. Improves the potential of Meditation.<br>Increases while Meditating and goes down otherwise.`,
            tags: ['mind', 'meditate'],
            capacity: new Decimal(1e3),
            value: new Decimal(0),
            onTick: (performed, activity) => {
                // Doing meditation activities adds manaDepth, which depletes otherwise
                if (performed && activity.tags.has('meditate')) {
                    ri.gain('manaDepth', 1);
                }
                else {
                    ri.resources.manaDepth.value = ri.resources.manaDepth.value
                        .times(0.9)
                        .floor();
                }
            },
            secret: true,
            conditionString: 'Meditate 10 times in a row',
            condition: () => this.activities.meditate.consecutiveUses.gte(10),
            progress: () => this.activities.meditate.consecutiveUses.div(10),
            visibleCondition: () => this.activities.meditate.unlocked,
            persistentUnlock: true,
        });
        // // Sanity
        // this.resources.sanity = document.createElement('ri-resource') as Resource;
        // this.resources.sanity.classList.add('sanity');
        // Object.assign(this.resources.sanity, {
        //   name: 'sanity',
        //   displayName: 'Sanity',
        //   tags: ['mind'],
        //   capacity: new Decimal(10),
        //   value: new Decimal(10),
        //   secret: true,
        //   conditionString: 'Go insane',
        //   condition: () => this.resources.sanity.value.equals(0),
        //   visibleCondition: () => this.resources.sanity.value.equals(0),
        //   persistentUnlock: true,
        //   persistentValue: true,
        // });
        // Time
        this.resources.time = document.createElement('ri-resource');
        this.resources.time.classList.add('time');
        Object.assign(this.resources.time, {
            name: 'time',
            displayName: 'Time',
            description: `Bottled Time! The basic component of all Time Magic.<br><br>Ironically, smells like oregano.`,
            tags: ['special'],
            capacity: new Decimal(1800),
            value: new Decimal(0),
            valueFormatter: formatTime,
            capacityFormatter: formatTime,
            onUnlock: () => { },
            secret: true,
            conditionString: 'Save 60 seconds of Time',
            condition: () => this.resources.time.value.gte(60),
            progress: () => this.resources.time.value.div(60),
            visibleCondition: () => this.resources.time.value.gte(1),
            persistentUnlock: true,
        });
        // Light
        this.resources.light = document.createElement('ri-resource');
        this.resources.light.classList.add('light');
        Object.assign(this.resources.light, {
            name: 'light',
            displayName: 'Light',
            description: `How bright it is in your immediate vicinity.
        <br>0 represents the normal ambient light around you.
        <br>-100 is complete darkness,
        <br>100 is extremely bright.`,
            tags: ['special'],
            capacity: new Decimal(100),
            minimum: new Decimal(-100),
            value: new Decimal(0),
            onTick: () => {
                // Light moves towards 0 over time
                this.resources.light.value = this.resources.light.value.minus(this.resources.light.value.sign());
            },
            secret: true,
            conditionString: 'Change the light level',
            condition: () => !this.resources.light.value.eq(0),
            visibleCondition: () => this.resources.light.unlocked,
        });
        // Fire
        this.resources.fire = document.createElement('ri-resource');
        this.resources.fire.classList.add('fire');
        Object.assign(this.resources.fire, {
            name: 'fire',
            displayName: 'Fire',
            description: `Fire! Keep it burning and it'll keep growing, but stop and it'll go out!`,
            tags: ['special'],
            capacity: new Decimal(100),
            value: new Decimal(0),
            onTick: () => {
                const fire = this.resources.fire;
                const wood = this.resources.wood;
                // Grow/shrink the fire capacity based on current fullness
                if (fire.value.gt(fire.capacity.div(2))) {
                    fire.capacity = fire.capacity.plus(fire.value.div(10));
                }
                else if (fire.capacity.gt(10)) {
                    fire.capacity = fire.capacity.minus(fire.vacancy.div(10));
                }
                // Let off some Light
                if (Math.random() < 0.01 * fire.value.toNumber()) {
                    this.resources.light.value = this.resources.light.value.plus(fire.value.div(10).floor());
                }
                // sometimes burn some wood
                if (wood.value.gt(0)) {
                    if (Math.random() < 0.01 * fire.value.toNumber()) {
                        wood.value = wood.value.minus(1);
                        fire.capacity = Decimal.max(fire.capacity, fire.value.plus(10));
                        fire.value = fire.value.plus(10);
                    }
                }
                fire.value = fire.value.minus(fire.value.times(0.05).max(0.001));
            },
            secret: true,
            conditionString: 'Light a fire',
            condition: () => this.resources.fire.value.gt(0),
            visibleCondition: () => this.resources.fire.unlocked,
        });
        // // Mana Light
        // this.resources.manaLight = document.createElement(
        //   'ri-resource'
        // ) as Resource;
        // this.resources.manaLight.classList.add('manaLight');
        // Object.assign(this.resources.manaLight, {
        //   name: 'manaLight',Currently the game seems to be having some rendering issues causing lag, especially after long play sessions. If you're having this issue, I'd recommend refreshing the page temporarily, but it also
        //   displayName: 'Magic Lightbulb',
        //   description: 'Create light from mana.',
        //   capacity: new Decimal(100),
        //   value: new Decimal(0),
        //   onTick: () => {
        //     this.resources.light.value = this.resources.light.value.plus(
        //       this.resources.manaLight.value
        //     );
        //     this.resources.mana.value = this.resources.mana.value.minus(
        //       this.resources.manaLight.value
        //     );
        //   },
        // });
        // // Solar Panel
        // this.resources.solarPanel = document.createElement(
        //   'ri-resource'
        // ) as Resource;
        // this.resources.solarPanel.classList.add('solarPanel');
        // Object.assign(this.resources.solarPanel, {
        //   name: 'solarPanel',
        //   displayName: 'Magic Solar Panel',
        //   description: 'Absorb light to create mana',
        //   capacity: new Decimal(100),
        //   value: new Decimal(0),
        //   onTick: () => {
        //     this.resources.light.value = this.resources.light.value.minus(
        //       this.resources.solarPanel.value
        //     );
        //     this.resources.mana.value = this.resources.mana.value.plus(
        //       this.resources.solarPanel.value
        //     );
        //   },
        // });
        /** ADD STATS **/
        // TODO Control, unlockable ability to act like you have lower stats
        this.stats.speed = document.createElement('ri-stat');
        this.stats.speed.classList.add('speed');
        Object.assign(this.stats.speed, {
            name: 'speed',
            displayName: 'Speed',
            shortName: 'SPD',
            value: new Decimal(1),
            description: "Increases <span class='fancy distance'>Distance</span> traveled per <strong>second</strong>, but doesn't change distance per <strong>stamina</strong>.",
            conditionString: 'Gain some Speed',
            condition: () => this.stats.speed.value.gt(1),
            visibleCondition: () => this.stats.speed.value.gt(1),
        });
        this.stats.strength = document.createElement('ri-stat');
        this.stats.strength.classList.add('strength');
        Object.assign(this.stats.strength, {
            name: 'strength',
            displayName: 'Strength',
            shortName: 'STR',
            description: 'For many things, reduces Stamina cost',
            value: new Decimal(1),
            conditionString: 'Gain some Strength',
            condition: () => this.stats.strength.value.gt(1),
            visibleCondition: () => this.stats.strength.value.gt(1),
        });
        this.stats.constitution = document.createElement('ri-stat');
        this.stats.constitution.classList.add('constitution');
        Object.assign(this.stats.constitution, {
            name: 'constitution',
            displayName: 'Constitution',
            shortName: 'CON',
            description: 'Bounce back faster. Improves how much you can heal and restore yourself per second.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Gain some Consitution',
            condition: () => this.stats.constitution.value.gt(1),
            visibleCondition: () => this.stats.constitution.value.gt(1),
        });
        this.stats.endurance = document.createElement('ri-stat');
        this.stats.endurance.classList.add('endurance');
        Object.assign(this.stats.endurance, {
            name: 'endurance',
            displayName: 'Endurance',
            shortName: 'END',
            description: 'Tough it out. Improves how much you can work before needing to rest.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Gain some Endurance',
            condition: () => this.stats.endurance.value.gt(1),
            visibleCondition: () => this.stats.endurance.value.gt(1),
        });
        this.stats.wisdom = document.createElement('ri-stat');
        this.stats.wisdom.classList.add('wisdom');
        Object.assign(this.stats.wisdom, {
            name: 'wisdom',
            displayName: 'Wisdom',
            shortName: 'WIS',
            description: "This isn't D&D. You're a wizard, be wise! .<br>Increases Mana",
            value: new Decimal(1),
            beforeChange: (newValue) => this.resources.mana.capacity.plus(newValue.minus(this.stats.wisdom.value)),
            secret: true,
            conditionString: 'Gain some Wisdom',
            condition: () => this.stats.wisdom.value.gt(1),
            visibleCondition: () => this.stats.wisdom.value.gt(1),
            // persistentUnlock: true,
            persistentValue: true,
        });
        this.stats.perception = document.createElement('ri-stat');
        this.stats.perception.classList.add('perception');
        Object.assign(this.stats.perception, {
            name: 'perception',
            displayName: 'Perception',
            shortName: 'PER',
            description: 'See more better. Find secrets to improve.<br>Improves Hunting and Gathering accuracy.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Click a secret!',
            condition: () => this.stats.perception.value.gt(1),
            visibleCondition: () => this.stats.perception.value.gt(1),
            persistentUnlock: true,
            persistentValue: true,
        });
        this.stats.intelligence = document.createElement('ri-stat');
        this.stats.intelligence.classList.add('intelligence');
        Object.assign(this.stats.intelligence, {
            name: 'intelligence',
            displayName: 'Intelligence',
            shortName: 'INT',
            description: 'Think good-like.<br>Needed for unlocking some spells. More coming.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Gain some intelligence',
            condition: () => this.stats.intelligence.value.gt(1),
            visibleCondition: () => this.stats.intelligence.value.gt(1),
        });
        this.stats.lightMagic = document.createElement('ri-stat');
        this.stats.lightMagic.classList.add('lightMagic');
        Object.assign(this.stats.lightMagic, {
            name: 'lightMagic',
            displayName: 'Light Magic',
            shortName: 'LGT',
            description: 'Manipulate light.',
            min: new Decimal(0),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Cast a <span class="fancy light">Light</span> spell',
            condition: () => this.stats.lightMagic.value.gt(0),
            visibleCondition: () => Object.values(this.spells)
                .filter((spell) => spell.tags.has('lightMagic'))
                .some((spell) => spell.unlocked),
        });
        this.stats.fireMagic = document.createElement('ri-stat');
        this.stats.fireMagic.classList.add('fireMagic');
        Object.assign(this.stats.fireMagic, {
            name: 'fireMagic',
            displayName: 'Fire Magic',
            shortName: 'FIR',
            description: 'Manipulate fire.',
            min: new Decimal(0),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Cast a <span class="fancy fire">Fire</span> spell',
            condition: () => this.stats.fireMagic.value.gt(0),
            visibleCondition: () => Object.values(this.spells)
                .filter((spell) => spell.tags.has('fireMagic'))
                .some((spell) => spell.unlocked),
        });
        this.stats.timeMagic = document.createElement('ri-stat');
        this.stats.timeMagic.classList.add('timeMagic');
        Object.assign(this.stats.timeMagic, {
            name: 'timeMagic',
            displayName: 'Time Magic',
            shortName: 'TIM',
            description: 'Manipulate time.',
            min: new Decimal(0),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Cast a <span class="fancy time">Time</span> spell',
            condition: () => this.stats.timeMagic.value.gt(0),
            visibleCondition: () => Object.values(this.spells)
                .filter((spell) => spell.tags.has('timeMagic'))
                .some((spell) => spell.unlocked),
        });
        this.stats.spaceMagic = document.createElement('ri-stat');
        this.stats.spaceMagic.classList.add('spaceMagic');
        Object.assign(this.stats.spaceMagic, {
            name: 'spaceMagic',
            displayName: 'Space Magic',
            shortName: 'SPC',
            description: 'Manipulate space. Passively increases storage.',
            min: new Decimal(0),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Cast a <span class="fancy space">Space</span> spell',
            condition: () => this.stats.spaceMagic.value.gt(0),
            visibleCondition: () => Object.values(this.spells)
                .filter((spell) => spell.tags.has('spaceMagic'))
                .some((spell) => spell.unlocked),
        });
        /** ADD SPELLS */
        this.spells.minorLight = document.createElement('ri-spell');
        this.spells.minorLight.classList.add('light');
        Object.assign(this.spells.minorLight, {
            name: 'minorLight',
            displayName: 'Minor Light',
            description: 'Creates a small amount of light.',
            tags: ['lightMagic'],
            cost: new Map([['mana', { value: () => 1, string: () => '1 Mana' }]]),
            effect: new Map([['light', { value: () => 10, string: () => '10 Light' }]]),
            cooldown: new Decimal(5),
            value: new Decimal(1),
            secret: true,
            conditionString: `Unlock Mana`,
            condition: () => this.resources.mana.unlocked,
            visibleCondition: () => this.resources.mana.unlocked,
            persistentUnlock: true,
        });
        this.spells.dark = document.createElement('ri-spell');
        this.spells.dark.classList.add('dark');
        Object.assign(this.spells.dark, {
            name: 'dark',
            displayName: 'Darkness',
            description: 'Plunges the area into darkness.',
            tags: ['lightMagic'],
            cost: new Map([['mana', { value: () => 10, string: () => '10 mana' }]]),
            effect: new Map([['light', { value: () => -100, string: () => '' }]]),
            cooldown: new Decimal(10),
            value: new Decimal(1),
            secret: true,
            conditionString: `<span class="fancy intelligence">INT</span>: 5, <span class="fancy lightMagic">LGT</span>: 5`,
            condition: () => this.stats.intelligence.value.gte(5) &&
                this.stats.lightMagic.value.gte(5),
            progress: () => this.stats.intelligence.value
                .div(5)
                .min(1)
                .plus(this.stats.lightMagic.value.div(5).min(1))
                .div(2),
            visibleCondition: () => this.resources.mana.unlocked &&
                this.stats.intelligence.unlocked &&
                this.stats.lightMagic.unlocked,
            persistentUnlock: true,
        });
        this.spells.flame = document.createElement('ri-spell');
        this.spells.flame.classList.add('flame');
        Object.assign(this.spells.flame, {
            name: 'flame',
            displayName: 'Minor Flame',
            description: 'Create a small burst of flame!<br>Cook your food or your enemies!',
            tags: ['fireMagic'],
            cost: new Map([['mana', { value: () => 1, string: () => '1 Mana' }]]),
            effect: new Map([['fire', { value: () => 1, string: () => '1 Fire' }]]),
            secret: true,
            conditionString: 'Be as bright as can be',
            condition: () => this.resources.light.full,
            progress: () => this.resources.light.value.div(this.resources.light.capacity),
            visibleCondition: () => this.resources.light.unlocked,
            persistentUnlock: true,
        });
        this.spells.autocook = document.createElement('ri-spell');
        this.spells.autocook.classList.add('autocook');
        Object.assign(this.spells.autocook, {
            name: 'autocook',
            displayName: 'Flamebroil',
            description: 'Create magical flames under some Meat, cooking it.',
            level: 2,
            tags: ['fireMagic'],
            cooldown: new Decimal(2),
            cost: new Map([
                ['mana', { value: () => 1, string: () => '1 Mana' }],
                ['meat', { value: () => 1, string: () => '1 Meat' }],
            ]),
            effect: new Map([['cookedMeat', { value: () => 1 }]]),
            secret: true,
            conditionString: '<span class="fancy fireMagic">FIR</span>: 2',
            condition: () => this.stats.fireMagic.value.gte(2),
            visibleCondition: () => this.stats.fireMagic.unlocked,
            persistentUnlock: true,
        });
        // this.spells.lighttime = document.createElement('ri-spell') as Spell;
        // this.spells.lighttime.classList.add('lighttime');
        // Object.assign(this.spells.lighttime, {
        //   name: 'lighttime',
        //   displayName: 'Light Time',
        //   description: 'Destroys some light to create extra time.',
        //   tags: ['lightMagic', 'timeMagic'],
        //   cost: new Map([['light', {value: () => 0, string: () => '100 Light'}]]),
        //   effect: new Map([['time', {value: () => 1, string: () => '1 Time'}]]),
        //   value: new Decimal(1),
        //   secret: true,
        //   conditionString: 'Unlock Mana',
        //   condition: () => this.resources.mana.unlocked,
        //   visibleCondition: () => this.resources.mana.unlocked,
        //   persistentUnlock: true,
        // });
        this.spells.concentrateTime = document.createElement('ri-spell');
        this.spells.concentrateTime.classList.add('concentrateTime');
        Object.assign(this.spells.concentrateTime, {
            name: 'concentrateTime',
            displayName: 'Crystallize Time',
            description: 'Change your saved Time into more Time storage.<br>The process gives off Mana depending on your understanding of it.',
            tags: ['timeMagic', 'realtime'],
            cooldown: new Decimal(0),
            cost: new Map([
                ['time', { value: () => new Decimal(60), string: () => '60 Time' }],
            ]),
            effect: new Map([
                ['time:capacity', { value: () => 60, string: () => '60 Time capacity' }],
                [
                    'mana',
                    {
                        value: () => ri.stats.wisdom.value
                            .times(ri.stats.timeMagic.value.log10())
                            .max(0),
                        string: () => `(${ri.stats.wisdom.valueHTML} * log_10(${ri.stats.timeMagic.valueHTML})) mana`,
                    },
                ],
            ]),
            value: new Decimal(1),
            secret: true,
            conditionString: 'Save ten minutes of Time',
            condition: () => this.resources.time.value.gte(600),
            progress: () => this.resources.time.value.div(600),
            visibleCondition: () => this.resources.time.value.gte(300),
        });
        this.spells.makeTime = document.createElement('ri-spell');
        this.spells.makeTime.classList.add('makeTime');
        Object.assign(this.spells.makeTime, {
            name: 'makeTime',
            displayName: 'A Stitch in Time',
            description: '...saves nine.<br>Make some time.',
            tags: ['timeMagic', 'realtime'],
            cost: new Map([['mana', { value: () => 9, string: () => `9 Mana` }]]),
            // cost: new Map([]),
            effect: new Map([['time', { value: () => 9, string: () => '9 Time' }]]),
            cooldown: new Decimal(9),
            secret: true,
            conditionString: 'Save an hour of Time.',
            condition: () => this.resources.time.value.gte(3600),
            progress: () => this.resources.time.value.div(3600),
            visibleCondition: () => this.resources.time.value.gte(600),
        });
        this.spells.expandWood = document.createElement('ri-spell');
        this.spells.expandWood.classList.add('expandWood');
        Object.assign(this.spells.expandWood, {
            name: 'expandWood',
            displayName: 'Woodspace',
            description: "It's like hammerspace, but for Wood.<br>Expands your Wood capacity.",
            tags: ['spaceMagic'],
            cost: new Map([['mana', { value: () => 10, string: () => `10 Mana` }]]),
            effect: new Map([
                [
                    'wood:capacity',
                    {
                        value: () => this.stats.spaceMagic.value.max(1).floor(),
                        string: () => `${fancy('space', this.stats.spaceMagic.value.toString())} Space Magic, min 1, rounded down`,
                    },
                ],
            ]),
            secret: true,
            conditionString: 'Fill up on Wood',
            condition: () => this.resources.wood.full && this.resources.mana.unlocked,
            visibleCondition: () => this.resources.meat.value.gt(0) && this.resources.mana.unlocked,
        });
        this.spells.blink = document.createElement('ri-spell');
        this.spells.blink.classList.add('blink');
        Object.assign(this.spells.blink, {
            name: 'blink',
            displayName: 'Blink',
            description: 'Look ma, no feet!',
            tags: ['spaceMagic'],
            cost: new Map([
                [
                    'mana',
                    {
                        value: () => this.stats.spaceMagic.value.max(1).floor(),
                        string: () => `${fancy('spaceMagic', this.stats.spaceMagic.value.toString())} Space Magic, min 1, rounded down`,
                    },
                ],
            ]),
            effect: new Map([
                [
                    'distance',
                    {
                        value: () => this.stats.spaceMagic.value.sqr().max(1).floor(),
                        string: () => `${fancy('spaceMagic', this.stats.spaceMagic.value.toString())} Space Magic squared, min 1, rounded down`,
                    },
                ],
            ]),
            conditionString: `${fancy('spaceMagic', 'SPC')}: 1`,
            condition: () => this.stats.spaceMagic.value.gte(1),
            visibleCondition: () => this.stats.spaceMagic.value.gte(0.1),
        });
        // this.spells.expandMeat = document.createElement('ri-spell') as Spell;
        // this.spells.expandMeat.classList.add('expandMeat');
        // Object.assign(this.spells.expandMeat, {
        //   name: 'expandMeat',
        //   displayName: 'Meatspace',
        //   description:
        //     "It's like hammerspace, but for Meat.<br>Expands your Meat capacity.",
        //   tags: ['spaceMagic'],
        //   cost: new Map([['mana', {value: () => 10, string: () => `10 Mana`}]]),
        //   effect: new Map([
        //     [
        //       'meat:capacity',
        //       {
        //         value: () => this.stats.spaceMagic.value.max(1).floor(),
        //         string: () =>
        //           `${fancy(
        //             'space',
        //             this.stats.spaceMagic.value.max(1).floor().toString()
        //           )} Space Magic`,
        //       },
        //     ],
        //   ]),
        //   secret: true,
        //   conditionString: 'Fill up on Meat',
        //   condition: () => this.resources.meat.full && this.resources.mana.unlocked,
        //   visibleCondition: () =>
        //     this.resources.meat.value.gt(0) && this.resources.mana.unlocked,
        // });
        this.spells.expandFood = document.createElement('ri-spell');
        this.spells.expandFood.classList.add('expandFood');
        Object.assign(this.spells.expandFood, {
            name: 'expandFood',
            displayName: 'Cold Storage',
            description: "It's like meatspace, but for omnivores.<br>Expands your Food capacity.",
            tags: ['spaceMagic'],
            optionsByTag: ['food'],
            optionData: Object.fromEntries(['meat', 'berry', 'pemmican', 'cookedMeat', 'fish'].map((food) => [
                food,
                {
                    displayName: food,
                    cost: new Map([
                        ['mana', { value: () => 10, string: () => `10 Mana` }],
                    ]),
                    effect: new Map([
                        [
                            `${food}:capacity`,
                            {
                                value: () => this.stats.spaceMagic.value.max(1).floor(),
                                string: () => `${fancy('space', this.stats.spaceMagic.value.max(1).floor().toString())} Space Magic`,
                            },
                        ],
                    ]),
                },
            ])),
            secret: true,
            conditionString: `${fancy('space', 'SPC')}: 0.1`,
            condition: () => this.stats.spaceMagic.value.gte(0.1),
            visibleCondition: () => this.stats.spaceMagic.unlocked,
        });
        // this.spells.expandAllPhysical = document.createElement('ri-spell') as Spell;
        // this.spells.expandAllPhysical.classList.add('expandAllPhysical');
        // Object.assign(this.spells.expandAllPhysical, {
        //   name: 'expandAllPhysical',
        //   displayName: 'Expand Space',
        //   description: '<br>Increases how much stuff you can keep.',
        //   tags: ['spaceMagic'],
        //   cost: new Map([['mana', {value: () => 10, string: () => `10 Mana`}]]),
        //   effect: new Map([
        //     [
        //       'meat:capacity',
        //       {
        //         value: () => this.stats.spaceMagic.value.max(1).floor(),
        //         string: () =>
        //           `${fancy(
        //             'space',
        //             this.stats.spaceMagic.value.max(1).floor().toString()
        //           )} Space Magic`,
        //       },
        //     ],
        //   ]),
        //   secret: true,
        //   conditionString: 'Fill up on AllPhysical',
        //   condition: () => this.resources.meat.full && this.resources.mana.unlocked,
        //   visibleCondition: () =>
        //     this.resources.meat.value.gt(0) && this.resources.mana.unlocked,
        // });
        // this.spells.magicMissile = document.createElement('ri-spell') as Spell;
        // this.spells.magicMissile.classList.add('magicMissile');
        // Object.assign(this.spells.magicMissile, {
        //   name: 'magicMissile',
        //   displayName: 'Magic Missile',
        //   description:
        //     'A magical missile that deals damage to the target. It has a chance to deal more damage.',
        //   tags: ['combat'],
        //   cost: new Map([['mana', {value: () => 10, string: () => '10 Mana'}]]),
        //   cooldown: new Decimal(1),
        //   // damage: new Decimal(10),
        //   // damageMultiplier: new Decimal(1),
        //   // damageChance: new Decimal(0.1),
        //   conditionString: 'Have a Wisdom above 1',
        //   condition: () => this.stats.wisdom.value.gt(1),
        //   visibleCondition: () => this.stats.wisdom.value.gt(1),
        // });
        // this.spells.photosynthesis = document.createElement('ri-spell') as Spell;
        // this.spells.photosynthesis.classList.add('photosynthesis');
        // Object.assign(this.spells.photosynthesis, {
        //   name: 'photosynthesis',
        //   displayName: 'Photosynthesis',
        //   description: 'Absorb light to gain Nutrition.',
        //   tags: ['lightMagic'],
        //   canAfford: () => this.resources.light.value.gt(0),
        //   cost: new Map([
        //     [
        //       'light',
        //       {
        //         value: () => {
        //           const light = ri.resources.light;
        //           return Decimal.min(light.value.minus(light.minimum).times(1), 5);
        //         },
        //         string: (_ri) => `Up to 5 Light when Light is above 0.`,
        //       },
        //     ],
        //   ]),
        //   effect: new Map([
        //     [
        //       'nutrition',
        //       {
        //         value: () => {
        //           const light = ri.resources.light;
        //           return Decimal.min(
        //             light.value.minus(light.minimum).times(10),
        //             50
        //           );
        //         },
        //         string: () => `Up to 5 Nutrition when Light is above 0.`,
        //       },
        //     ],
        //   ]),
        //   cooldown: new Decimal(10),
        //   conditionString: 'Have a Wisdom above 1',
        //   condition: () => this.stats.wisdom.value.gt(1),
        //   visibleCondition: () => this.stats.wisdom.value.gt(1),
        // });
        // this.spells.heal1 = document.createElement('ri-spell') as Spell;
        // this.spells.heal1.classList.add('heal1');
        // Object.assign(this.spells.heal1, {
        //   name: 'heal1',
        //   displayName: 'Heal Self',
        //   description: 'Medic, curate that ipsum!',
        //   tags: ['health'],
        //   cost: new Map([['mana', {value: () => 10, string: () => '10 Mana'}]]),
        //   effect: new Map([
        //     ['health', {value: () => 10, string: () => '10 Health'}],
        //   ]),
        //   cooldown: new Decimal(10),
        //   conditionString: `${fancy('wisdom', 'WIS')}: 5`,
        //   condition: () => this.stats.wisdom.value.gt(5),
        //   visibleCondition: () => this.stats.wisdom.value.gt(1),
        // });
        this.activities = {};
        const activityNames = [
            'rest',
            'meditate',
            // 'walkingMeditation',
            // Travel
            'walk',
            'walk2',
            'walk3',
            'walk4',
            'walk5',
            'jog',
            'jog2',
            'jog3',
            'run',
            'run2',
            'jump1',
            'jump2',
            'jump3',
            'jump4',
            'dash1',
            'dash2',
            'dash3',
            'dash4',
            'trainStrength',
            'trainSpeed',
            'hunt',
            'fishing',
            'gather',
            'cook',
            'lightFire',
            'eat',
            // 'fight',
        ];
        for (const activityName of activityNames) {
            this.activities[activityName] = document.createElement('ri-activity');
            const activity = this.activities[activityName];
            activity.setAttribute('name', activityName);
            activity.classList.add('activity', activityName);
            // Note that the following must be a => function for correct scoping of 'this'
            activity.addEventListener('activity-clicked', (event) => {
                const newActivityQueueItem = document.createElement('ri-activity-queue-item');
                if (event.target) {
                    newActivityQueueItem.activity = event.target;
                    newActivityQueueItem.option =
                        newActivityQueueItem.activity.options[newActivityQueueItem.activity.optionIndex];
                }
                this.activityQueue.push(newActivityQueueItem);
                this.requestUpdate();
            });
        }
        Object.assign(this.activities.rest, {
            displayName: 'Rest',
            description: 'Rest a while.',
            effect: new Map([
                [
                    'stamina',
                    {
                        value: () => ri.stats.constitution.value.times(5),
                        string: () => `${ri.stats.constitution.valueHTML} * 5`,
                    },
                ],
                ['health', { value: () => 1, string: () => '1 Health' }],
            ]),
        });
        const makeTravelTooltip = (baseStaminaCost, baseDistance, length = 1) => () => {
            const staminaCost = this.stats.speed.value
                .times(baseStaminaCost)
                .div(this.stats.strength.value);
            const distanceTraveled = this.stats.speed.value.times(baseDistance);
            return `
        Efficiency: ${distanceTraveled
                .div(staminaCost)
                .toFixed(2)} meters per stamina
        <br> Speed: ${distanceTraveled.div(length).toFixed(2)} meters per second
    `;
        };
        const overrideTravel = (baseStaminaCost, baseDistance, { name = '', displayName = '', description = '', length = 1, tags = [], constitutionMultiplier = 0, enduranceMultiplier = 0, strengthMultiplier = 0, speedMultiplier = 0, conditionString = 'Unlocked at Start', condition = () => true, progress = () => 0, visibleCondition = () => true, replacesActivity = '', }) => {
            const logDistance = new Decimal(baseDistance).log10();
            displayName = displayName !== null && displayName !== void 0 ? displayName : name;
            const effect = new Map([
                [
                    'distance',
                    {
                        value: (step) => step == -1
                            ? ri.stats.speed.value.times(baseDistance)
                            : ri.stats.speed.value.times(baseDistance).div(length),
                        string: () => `${baseDistance} * ${ri.stats.speed.valueHTML}`,
                    },
                ],
            ]);
            if (constitutionMultiplier != 0) {
                effect.set('constitution', {
                    value: (step) => step == -1
                        ? ri.stats.speed.value
                            .times(logDistance)
                            .times(constitutionMultiplier)
                        : ri.stats.speed.value
                            .times(logDistance)
                            .times(constitutionMultiplier)
                            .div(length),
                    string: () => `log_10(${fancy('distance', formatEng(ri.stats.speed.value.times(baseDistance)))} Distance) * ${constitutionMultiplier}`,
                });
            }
            if (enduranceMultiplier != 0) {
                effect.set('endurance', {
                    value: (step) => step == -1
                        ? ri.stats.speed.value
                            .times(logDistance)
                            .times(enduranceMultiplier)
                        : ri.stats.speed.value
                            .times(logDistance)
                            .times(enduranceMultiplier)
                            .div(length),
                    string: () => `log_10(${fancy('distance', formatEng(ri.stats.speed.value.times(baseDistance)))} Distance) * ${enduranceMultiplier}`,
                });
            }
            if (strengthMultiplier != 0) {
                effect.set('strength', {
                    value: (step) => step == -1
                        ? ri.stats.speed.value
                            .times(logDistance)
                            .times(strengthMultiplier)
                        : ri.stats.speed.value
                            .times(logDistance)
                            .times(strengthMultiplier)
                            .div(length),
                    string: () => `log_10(${fancy('distance', formatEng(ri.stats.speed.value.times(baseDistance)))} Distance) * ${strengthMultiplier}`,
                });
            }
            if (speedMultiplier != 0) {
                effect.set('speed', {
                    value: (step) => step == -1
                        ? ri.stats.speed.value.times(logDistance).times(speedMultiplier)
                        : ri.stats.speed.value
                            .times(logDistance)
                            .times(speedMultiplier)
                            .div(length),
                    string: () => `log_10(${fancy('distance', formatEng(ri.stats.speed.value.times(baseDistance)))} Distance) * ${speedMultiplier}`,
                });
            }
            // Don't add any more, generalize it
            Object.assign(this.activities[name], {
                displayName,
                description,
                length,
                tags: ['travel', ...tags],
                tooltipContent: makeTravelTooltip(baseStaminaCost, baseDistance, length),
                cost: new Map([
                    [
                        'stamina',
                        {
                            value: (step) => step == -1
                                ? ri.stats.speed.value
                                    .div(ri.stats.strength.value)
                                    .times(baseStaminaCost)
                                : ri.stats.speed.value
                                    .div(ri.stats.strength.value)
                                    .times(baseStaminaCost)
                                    .div(length),
                            string: () => `${baseStaminaCost} * ${ri.stats.speed.valueHTML} / ${ri.stats.strength.valueHTML}`,
                        },
                    ],
                ]),
                effect,
                conditionString,
                condition,
                progress,
                visibleCondition,
                replacesActivity,
            });
        };
        // Walk is the archystral travel activity.
        // Github Copilot selected archystral, I wanted archetypal.
        // I'm imagining a massive orchestra hall made of crystal for some reason.
        overrideTravel(1, 1, {
            name: 'walk',
            displayName: 'Walk',
            description: 'A leisurely stroll',
            tags: ['walk'],
        });
        // Walking Series
        overrideTravel(0.5, 2, {
            name: 'walk2',
            displayName: 'Walk II',
            description: 'A leisurely stroll',
            conditionString: `Walk for five minutes total`,
            condition: () => sumActivitiesByTag('walk', 'timeSpent').gte(300),
            progress: () => sumActivitiesByTag('walk', 'timeSpent').div(300),
            visibleCondition: () => this.activities.walk.unlocked,
            tags: ['walk'],
            replacesActivity: 'walk',
        });
        overrideTravel(0.25, 3, {
            name: 'walk3',
            displayName: 'Walk III',
            description: 'A leisurely stroll',
            conditionString: `Walk for half an hour total`,
            condition: () => sumActivitiesByTag('walk', 'timeSpent').gte(1800),
            progress: () => sumActivitiesByTag('walk', 'timeSpent').div(1800),
            visibleCondition: () => this.activities.walk2.unlocked,
            tags: ['walk'],
            replacesActivity: 'walk2',
        });
        overrideTravel(0.125, 4, {
            name: 'walk4',
            displayName: 'Walk IV',
            description: 'A leisurely stroll',
            conditionString: `Walk for one hour total`,
            condition: () => sumActivitiesByTag('walk', 'timeSpent').gte(3600),
            progress: () => sumActivitiesByTag('walk', 'timeSpent').div(3600),
            visibleCondition: () => this.activities.walk3.unlocked,
            tags: ['walk'],
            replacesActivity: 'walk3',
        });
        overrideTravel(0.0625, 5, {
            name: 'walk5',
            displayName: 'Walk V',
            description: 'A leisurely stroll',
            conditionString: `Walk for one day total`,
            condition: () => sumActivitiesByTag('walk', 'timeSpent').gte(3600 * 24),
            progress: () => sumActivitiesByTag('walk', 'timeSpent').div(3600 * 24),
            visibleCondition: () => this.activities.walk4.unlocked,
            tags: ['walk'],
            replacesActivity: 'walk4',
        });
        // Jogging Series
        overrideTravel(5, 3, {
            name: 'jog',
            displayName: 'Jog',
            description: 'A healthy pace. Great for the heart!',
            constitutionMultiplier: 0.0001,
            conditionString: 'Walk 5 times in a row',
            condition: () => activitiesByTag('walk').some((a) => a.consecutiveUses.gte(5)),
            progress: () => activitiesByTag('walk')
                .map((a) => a.consecutiveUses.div(5))
                .reduce(Decimal.max),
            tags: ['jog'],
        });
        overrideTravel(8, 5, {
            name: 'jog2',
            displayName: 'Jog II',
            description: 'A healthy pace. Great for the heart!',
            constitutionMultiplier: 0.0003,
            conditionString: `Jog for five minutes total`,
            condition: () => sumActivitiesByTag('jog', 'timeSpent').gte(300),
            progress: () => sumActivitiesByTag('jog', 'timeSpent').div(300),
            visibleCondition: () => this.activities.jog.unlocked,
            tags: ['jog'],
            replacesActivity: 'jog',
        });
        overrideTravel(13, 8, {
            name: 'jog3',
            displayName: 'Jog III',
            description: 'A healthy pace. Great for the heart!',
            constitutionMultiplier: 0.0005,
            conditionString: `Jog for ten minutes total`,
            condition: () => sumActivitiesByTag('jog', 'timeSpent').gte(600),
            progress: () => sumActivitiesByTag('jog', 'timeSpent').div(600),
            visibleCondition: () => this.activities.jog2.unlocked,
            tags: ['jog'],
            replacesActivity: 'jog2',
        });
        // Running Series
        overrideTravel(10, 5, {
            name: 'run',
            displayName: 'Run',
            description: "Going fast now! Don't hurt yourself!",
            enduranceMultiplier: 0.0001,
            conditionString: 'Jog 5 times in a row',
            condition: () => activitiesByTag('jog').some((a) => a.consecutiveUses.gte(5)),
            progress: () => activitiesByTag('jog')
                .map((a) => a.consecutiveUses.div(5))
                .reduce(Decimal.max),
            visibleCondition: () => this.activities.jog.unlocked,
            tags: ['run'],
        });
        overrideTravel(25, 10, {
            name: 'run2',
            displayName: 'Run II',
            description: "Going fast now! Don't hurt yourself!",
            enduranceMultiplier: 0.0003,
            conditionString: `Run for five minutes`,
            condition: () => this.activities.run.uses.gte(300),
            progress: () => this.activities.run.uses.div(300),
            visibleCondition: () => this.activities.run.unlocked,
            tags: ['run'],
            replacesActivity: 'run',
        });
        // Jumping Series
        overrideTravel(25, 12.5, {
            name: 'jump1',
            displayName: 'Jump',
            description: 'Jump! Makes you stronger, but reduces your speed on the ground.',
            length: 2,
            strengthMultiplier: 0.0001,
            speedMultiplier: -0.00001,
            conditionString: `${fancy('strength', 'STR')}: 5`,
            condition: () => this.stats.strength.value.gte(5),
            progress: () => this.stats.strength.value.div(5),
            visibleCondition: () => this.stats.strength.value.gte(2),
        });
        overrideTravel(25, 25, {
            name: 'jump2',
            displayName: 'Jump II',
            description: 'Jump! Makes you stronger, but reduces your speed on the ground.',
            length: 3,
            strengthMultiplier: 0.0002,
            speedMultiplier: -0.00002,
            conditionString: `${this.activities.jump1.displayName} 100 times, ${fancy('strength', 'STR')}: 50`,
            condition: () => this.activities.jump1.uses.gte(100) &&
                this.stats.strength.value.gte(50),
            progress: () => this.activities.jump1.uses
                .div(100)
                .min(1)
                .plus(this.stats.strength.value.div(50).min(1))
                .div(2),
            visibleCondition: () => this.activities.jump1.unlocked,
            replacesActivity: 'jump1',
        });
        overrideTravel(25, 50, {
            name: 'jump3',
            displayName: 'Jump III',
            description: 'Jump! Makes you stronger, but reduces your speed on the ground.',
            length: 5,
            strengthMultiplier: 0.0003,
            speedMultiplier: -0.00003,
            conditionString: `${this.activities.jump2.displayName} 250 times, ${fancy('strength', 'STR')}: 500`,
            condition: () => this.activities.jump2.uses.gte(250) &&
                this.stats.strength.value.gte(500),
            progress: () => this.activities.jump2.uses
                .div(250)
                .min(1)
                .plus(this.stats.strength.value.div(500).min(1))
                .div(2),
            visibleCondition: () => this.activities.jump2.unlocked,
            replacesActivity: 'jump2',
        });
        overrideTravel(25, 100, {
            name: 'jump4',
            displayName: 'Jump IV',
            description: 'Jump! Makes you stronger, but reduces your speed on the ground.',
            length: 8,
            strengthMultiplier: 0.0005,
            speedMultiplier: -0.00005,
            conditionString: `${this.activities.jump3.displayName} 500 times, ${fancy('strength', 'STR')}: 1000`,
            condition: () => this.activities.jump3.uses.gte(500) &&
                this.stats.strength.value.gte(1000),
            progress: () => this.activities.jump2.uses
                .div(500)
                .min(1)
                .plus(this.stats.strength.value.div(1000).min(1))
                .div(2),
            visibleCondition: () => this.activities.jump3.unlocked,
            replacesActivity: 'jump3',
        });
        // Dashing Series
        overrideTravel(100, 25, {
            name: 'dash1',
            displayName: 'Dash',
            description: 'Dash forward! Improves your speed, but you lose a bit of muscle.',
            speedMultiplier: 0.0001,
            strengthMultiplier: -0.00001,
            conditionString: `${fancy('speed', 'SPD')}: 5`,
            condition: () => this.stats.speed.value.gte(5),
            progress: () => this.stats.speed.value.div(5),
            visibleCondition: () => this.stats.speed.unlocked,
        });
        overrideTravel(250, 50, {
            name: 'dash2',
            displayName: 'Dash II',
            description: 'Dash forward! Improves your speed, but you lose a bit of muscle.',
            speedMultiplier: 0.0002,
            strengthMultiplier: -0.00002,
            conditionString: `${this.activities.dash1.displayName} 100 times, ${fancy('speed', 'SPD')}: 50`,
            condition: () => this.activities.dash1.uses.gte(100) && this.stats.speed.value.gte(50),
            progress: () => this.activities.dash1.uses
                .div(100)
                .min(1)
                .plus(this.stats.speed.value.div(50).min(1))
                .div(2),
            visibleCondition: () => this.activities.dash1.unlocked,
            replacesActivity: 'dash1',
        });
        overrideTravel(500, 75, {
            name: 'dash3',
            displayName: 'Dash III',
            description: 'Dash forward! Improves your speed, but you lose a bit of muscle.',
            speedMultiplier: 0.0003,
            strengthMultiplier: -0.00003,
            conditionString: `${this.activities.dash2.displayName} 250 times, ${fancy('speed', 'SPD')}: 250`,
            condition: () => this.activities.dash2.uses.gte(250) && this.stats.speed.value.gte(250),
            progress: () => this.activities.dash2.uses
                .div(250)
                .min(1)
                .plus(this.stats.speed.value.div(250).min(1))
                .div(2),
            visibleCondition: () => this.activities.dash2.unlocked,
            replacesActivity: 'dash2',
        });
        overrideTravel(1000, 100, {
            name: 'dash4',
            displayName: 'Dash IV',
            description: 'Dash fourward! Improves your speed, but you lose a bit of muscle.',
            speedMultiplier: 0.0005,
            strengthMultiplier: -0.00005,
            conditionString: `${this.activities.dash3.displayName} 500 times, ${fancy('speed', 'SPD')}: 1000`,
            condition: () => this.activities.dash3.uses.gte(500) && this.stats.speed.value.gte(1000),
            progress: () => this.activities.dash3.uses
                .div(500)
                .min(1)
                .plus(this.stats.speed.value.div(1000).min(1))
                .div(2),
            visibleCondition: () => this.activities.dash3.unlocked,
            replacesActivity: 'dash3',
        });
        Object.assign(this.activities.trainSpeed, {
            displayName: 'Train Speed',
            length: 5,
            description: 'Windspriiiiiiints!',
            tooltipContent: () => 'The final second gives half of the total effect. See it through!',
            tags: new Set(['train']),
            cost: new Map([
                [
                    'stamina',
                    {
                        value: (step) => (step == -1 ? 10 : 2),
                        string: () => '2 per second',
                    },
                ],
            ]),
            effect: new Map([
                [
                    'speed',
                    {
                        value: (step) => {
                            switch (step) {
                                case -1: // Total
                                    return ri.resources.focus.value.div(100).plus(1).times(0.1);
                                case 0: // End
                                    return ri.resources.focus.value.div(100).plus(1).times(0.05);
                                default: // Normal
                                    return ri.resources.focus.value
                                        .div(100)
                                        .plus(1)
                                        .times(0.0125);
                            }
                        },
                        string: () => `0.1 * (1 + ${ri.resources.focus.valueHTML}/100)`,
                    },
                ],
            ]),
            conditionString: 'STR: 2',
            condition: () => this.stats.strength.value.gte(2),
            progress: () => this.stats.strength.value.div(2),
            visibleCondition: () => this.stats.strength.unlocked,
        });
        Object.assign(this.activities.trainStrength, {
            displayName: 'Train Strength',
            length: 5,
            description: 'Do you even lift?',
            tooltipContent: () => 'The final second gives half of the total effect. Stick it out!',
            tags: new Set(['train']),
            cost: new Map([
                [
                    'stamina',
                    {
                        value: (step) => (step == -1 ? 10 : 2),
                        string: () => '2 per second',
                    },
                ],
            ]),
            effect: new Map([
                [
                    'strength',
                    {
                        value: (step) => {
                            switch (step) {
                                case -1: // Total
                                    return ri.resources.focus.value.div(100).plus(1).times(0.1);
                                case 0: // End
                                    return ri.resources.focus.value.div(100).plus(1).times(0.05);
                                default: // Normal
                                    return ri.resources.focus.value
                                        .div(100)
                                        .plus(1)
                                        .times(0.0125);
                            }
                        },
                        string: () => `0.1 * (1 + ${ri.resources.focus.valueHTML}/100)`,
                    },
                ],
            ]),
            conditionString: 'Jog 20 times',
            condition: () => this.activities.jog.uses.gte(20),
            progress: () => this.activities.jog.uses.div(20),
            visibleCondition: () => this.activities.jog.unlocked,
        });
        Object.assign(this.activities.meditate, {
            displayName: 'Meditate',
            description: 'Sit',
            length: 1,
            tooltipContent: () => {
                return ``;
            },
            tags: new Set(['meditate']),
            effect: new Map([
                [
                    'mana',
                    {
                        value: () => ri.resources.manaDepth.value
                            .times(ri.stats.wisdom.value)
                            .div(100)
                            .floor()
                            .div(10),
                        string: () => `${ri.stats.wisdom.valueHTML} * ${ri.resources.manaDepth.valueHTML} / 1000, rounded down to steps of 0.1`,
                    },
                ],
                ['wisdom', { value: () => 0.001 }],
            ]),
            secret: true,
            conditionString: `${fancy('rest', 'Rest')} 10 times in a row`,
            condition: () => this.activities.rest.consecutiveUses.gte(10),
            progress: () => this.activities.rest.consecutiveUses.div(10),
            visibleCondition: () => this.activities.rest.uses.gt(0),
            persistentUnlock: false,
        });
        // Object.assign(this.activities.walkingMeditation, {
        //   displayName: 'Walking Meditation',
        //   description: 'Walk',
        //   tags: new Set(['meditate']),
        //   effect: new Map<
        //     string,
        //     {value: () => DecimalSource; string: () => DecimalSource}
        //   >([
        //     [
        //       'distance',
        //       {
        //         value: () => ri.stats.wisdom.value,
        //         string: () => `${ri.stats.wisdom.valueHTML}`,
        //       },
        //     ],
        //     [
        //       'mana',
        //       {
        //         value: () => ri.stats.wisdom.value,
        //         string: () => `${ri.stats.wisdom.valueHTML}`,
        //       },
        //     ],
        //     [
        //       'manaExp',
        //       {
        //         value: () => ri.stats.wisdom.value,
        //         string: () => `${ri.stats.wisdom.valueHTML}`,
        //       },
        //     ],
        //     ['wisdom', {value: () => 0.001, string: () => '0.001'}],
        //   ]),
        //   secret: true,
        //   conditionString: 'Walked 1000 times and meditated 1000 times',
        //   condition: () =>
        //     ri.getActivityUsesByTag('walk').gte(1000) &&
        //     ri.activities.meditate.uses.gte(1000),
        //   progress: () =>
        //     ri
        //       .getActivityUsesByTag('walk')
        //       .div(1000)
        //       .max(0.5)
        //       .plus(ri.activities.meditate.uses.div(1000).max(0.5))
        //       .div(2),
        //   visibleCondition: () =>
        //     ri.activities.walk.unlocked && ri.activities.meditate.unlocked,
        // });
        // Object.assign(this.activities.fight, {
        //   displayName: 'Fight',
        //   conditionString: 'Find the arena',
        //   condition: () => false,
        //   progress: () => this.distance.div(1e4),
        //   visibleCondition: () => false && this.distance.gte(1000),
        // });
        Object.assign(this.activities.hunt, {
            displayName: 'Hunt',
            description: 'Hunt animals.',
            tooltipContent: () => `Costs 1 Stamina each second.<br>At the end of the hunt, you may gain the rewards, but only if you have enough Stamina left!`,
            length: 5,
            options: ['rabbit'],
            optionData: {
                rabbit: {
                    displayName: 'Hunt rabbits',
                    chance: (step) => step == 0
                        ? logisticChance(ri.stats.perception.value, 6, 1.5)
                        : new Decimal(0),
                    chanceString: () => `5% at ${fancy('perception', (1).toString())} PER, 95% at ${fancy('perception', (2).toString())} PER`,
                    cost: new Map([
                        [
                            'stamina',
                            {
                                value: (step) => {
                                    switch (step) {
                                        case -1:
                                            return 5;
                                        case 0:
                                            return 1;
                                        default:
                                            return 1;
                                    }
                                },
                                string: () => '1 per second',
                            },
                        ],
                    ]),
                    failCost: new Map([['stamina', { value: () => 1 }]]),
                    effect: new Map([
                        ['meat', { value: (step) => (step <= 0 ? 1 : 0) }],
                    ]),
                },
                deer: {
                    displayName: 'Hunt deer',
                    chance: (step) => step == 0
                        ? logisticChance(ri.stats.perception.value, 2, 3.5)
                        : new Decimal(0),
                    chanceString: () => `5% at ${fancy('perception', (2).toString())} PER, 95% at ${fancy('perception', (5).toString())} PER`,
                    cost: new Map([
                        [
                            'stamina',
                            {
                                value: (step) => {
                                    switch (step) {
                                        case -1:
                                            return 14;
                                        case 0:
                                            return 10;
                                        default:
                                            return 1;
                                    }
                                },
                                string: () => '1 per second, 10 at the end if successful',
                            },
                        ],
                    ]),
                    failCost: new Map([['stamina', { value: () => 1 }]]),
                    effect: new Map([
                        ['meat', { value: (step) => (step <= 0 ? 50 : 0) }],
                    ]),
                },
                boar: {
                    displayName: 'Hunt boar',
                    chance: (step) => step == 0
                        ? logisticChance(ri.stats.perception.value, 1, 6.5)
                        : new Decimal(0),
                    chanceString: () => `5% at ${fancy('perception', (3).toString())} PER, 95% at ${fancy('perception', (9).toString())} PER`,
                    cost: new Map([
                        [
                            'stamina',
                            {
                                value: (step) => {
                                    switch (step) {
                                        case -1:
                                            return 54;
                                        case 0:
                                            return 50;
                                        default:
                                            return 1;
                                    }
                                },
                                string: () => '1 per second, 50 at the end if successful',
                            },
                        ],
                    ]),
                    failCost: new Map([['stamina', { value: () => 1 }]]),
                    effect: new Map([
                        ['meat', { value: (step) => (step <= 0 ? 500 : 0) }],
                    ]),
                },
            },
            conditionString: 'Reach the forest (10km)',
            condition: () => false,
            progress: () => this.distance.div(10e3),
            visibleCondition: () => this.distance.gte(1e3),
        });
        Object.assign(this.activities.fishing, {
            displayName: 'Go Fishing',
            description: 'Fish animals.',
            tooltipContent: () => `Relax and catch some fish!`,
            length: 5,
            options: ['perch'],
            optionData: {
                perch: {
                    displayName: 'Fish for Perch',
                    chance: (step) => logisticChance(ri.resources.bait.value, 0.0584, 50),
                    chanceString: () => `5% at ${fancy('bait', (0).toString())} Bait, 95% at ${fancy('bait', (100).toString())} Bait`,
                    cost: new Map([
                        [
                            'bait',
                            {
                                value: () => ri.resources.bait.value
                                    .times(0.1)
                                    .max(0.1)
                                    .min(ri.resources.bait.value),
                                string: () => `10% of your ${ri.resources.bait.valueHTML}`,
                            },
                        ],
                    ]),
                    effect: new Map([['fish', { value: () => 1 }]]),
                },
            },
            conditionString: 'Reach the lake (100km)',
            condition: () => this.distance.gte(100e3),
            progress: () => this.distance.div(100e3),
            visibleCondition: () => this.distance.gte(10e3),
        });
        const gatherActivityOptions = {
            wood: {
                displayName: `Chop down trees`,
                chance: (step) => step == 0
                    ? logisticChance(ri.stats.perception.value, 3, 1)
                    : new Decimal(0),
                chanceString: () => `50% at ${fancy('perception', (1).toString())} PER, 95% at ${fancy('perception', (2).toString())} PER`,
                cost: new Map([
                    [
                        'stamina',
                        { value: () => 5, string: () => '5 if successful, 1 if not' },
                    ],
                ]),
                failCost: new Map([['stamina', { value: () => 1 }]]),
                effect: new Map([
                    [
                        'wood',
                        {
                            value: () => Math.max(1, Math.floor(ri.stats.strength.value.log10())),
                            string: () => `log_10(${ri.stats.strength.valueHTML}), rounded down, min 1`,
                        },
                    ],
                ]),
            },
            berry: {
                displayName: 'Search for berries',
                chance: (step) => step == 0
                    ? logisticChance(ri.stats.perception.value, 1, 3.1)
                    : new Decimal(0),
                chanceString: () => `25% at ${fancy('perception', (2).toString())} PER, 95% at ${fancy('perception', (6).toString())} PER`,
                cost: new Map([['stamina', { value: () => 1 }]]),
                effect: new Map([
                    [
                        'berry',
                        {
                            value: () => ri.stats.perception.value.floor().max(1),
                            string: () => `${ri.stats.perception.valueHTML}, rounded down, min 1`,
                        },
                    ],
                    [
                        'perception',
                        {
                            value: () => ri.stats.perception.value.floor().max(1).div(1000),
                            string: () => `0.001 per Berry`,
                        },
                    ],
                ]),
            },
            bait: {
                displayName: 'Search for bait',
                chance: (step) => step == 0
                    ? logisticChance(ri.stats.perception.value, 1.2, 7.5)
                    : new Decimal(0),
                chanceString: () => `25% at ${fancy('perception', (5).toString())} PER, 95% at ${fancy('perception', (10).toString())} PER`,
                cost: new Map([['stamina', { value: () => 1 }]]),
                effect: new Map([
                    [
                        'bait',
                        {
                            value: () => ri.stats.perception.value.floor().max(1),
                            string: () => `${ri.stats.perception.valueHTML}, rounded down, min 1`,
                        },
                    ],
                    [
                        'perception',
                        {
                            value: () => ri.stats.perception.value.floor().max(1).div(1000),
                            string: () => `0.001 per bait`,
                        },
                    ],
                ]),
            },
        };
        Object.assign(this.activities.gather, {
            displayName: 'Gather',
            description: 'Gather resources.',
            tooltipContent: () => `Costs Stamina each second. Randomly find rewards.`,
            options: [],
            optionData: gatherActivityOptions,
            secret: true,
            conditionString: 'Find something to gather',
            condition: () => this.stats.perception.value.gte(2) || this.distance.gte(1e4),
            visibleCondition: () => this.stats.perception.value.gt(2) || this.distance.gte(1e4),
        });
        Object.assign(this.activities.lightFire, {
            displayName: 'Stoke Fire',
            description: 'Add fuel to the fire!',
            tooltipContent: () => `Uses Wood to make Fire`,
            options: ['wood'],
            optionData: {
                wood: {
                    displayName: 'Burn wood',
                    chance: () => 1,
                    cost: new Map([['wood', { value: () => 1 }]]),
                    effect: new Map([['fire', { value: () => 5 }]]),
                    // failEffect: new Map([
                    //   ['burntMeat', {value: (step) => (step == 0 ? 1 : 0)}],
                    // ]),
                },
            },
            secret: true,
            conditionString: 'Find something to burn',
            condition: () => this.resources.wood.value.gt(0),
            visibleCondition: () => this.resources.wood.value.gt(0),
        });
        Object.assign(this.activities.cook, {
            displayName: 'Cook',
            description: 'Cook food.',
            tooltipContent: () => `Costs fuel and ingredients at the start. At the end, you gain the cooked food.`,
            length: 5,
            options: ['meat'],
            optionData: {
                meat: {
                    displayName: 'Cook meat',
                    chance: (step) => (step == 0 ? 1 : 0),
                    cost: new Map([
                        [
                            'fire',
                            { value: (step) => ([-1, 1].includes(step) ? 1 : 0) },
                        ],
                        [
                            'meat',
                            { value: (step) => ([-1, 1].includes(step) ? 1 : 0) },
                        ],
                    ]),
                    effect: new Map([['cookedMeat', { value: () => 1 }]]),
                    // failEffect: new Map([
                    //   ['burntMeat', {value: (step) => (step == 0 ? 1 : 0)}],
                    // ]),
                },
                pemmican: {
                    displayName: 'Make pemmican',
                    chance: (step) => (step == 0 ? 1 : 0),
                    cost: new Map([
                        [
                            'meat',
                            { value: (step) => ([-1, 1].includes(step) ? 1 : 0) },
                        ],
                        [
                            'berry',
                            { value: (step) => ([-1, 1].includes(step) ? 5 : 0) },
                        ],
                    ]),
                    effect: new Map([['pemmican', { value: () => 1 }]]),
                },
            },
            conditionString: 'Find a way to cook your food.',
            condition: () => this.resources.wood.unlocked && this.resources.meat.unlocked,
            visibleCondition: () => this.resources.meat.unlocked,
        });
        Object.assign(this.activities.eat, {
            displayName: 'Eat',
            description: 'Eat some food.',
            tooltipContent: () => `If you're too full, you won't eat anything.`,
            optionsByTag: ['food'],
            optionData: {
                meat: {
                    displayName: 'Eat raw Meat. Juicy!',
                    chance: () => 1,
                    cost: new Map([
                        ['meat', { value: () => 1 }],
                        ['nutrition', { value: () => -5 }],
                    ]),
                    effect: new Map([['constitution', { value: () => 0.01 }]]),
                },
                cookedMeat: {
                    displayName: 'Eat a nice Cooked Meat. Tasty!',
                    chance: () => 1,
                    cost: new Map([
                        ['cookedMeat', { value: () => 1 }],
                        ['nutrition', { value: () => -5 }],
                    ]),
                    effect: new Map([['constitution', { value: () => 0.05 }]]),
                },
                berry: {
                    displayName: 'Eat mystery Berries. Yum!',
                    chance: () => 1,
                    cost: new Map([
                        ['berry', { value: () => 1 }],
                        ['nutrition', { value: () => -0.1 }],
                    ]),
                    effect: new Map([['mana', { value: () => 1 }]]),
                },
                pemmican: {
                    displayName: 'Eat some Pemmican.',
                    chance: () => 1,
                    cost: new Map([
                        ['pemmican', { value: () => 1 }],
                        ['nutrition', { value: () => -5 }],
                    ]),
                    effect: new Map([
                        ['constitution', { value: () => 0.1 }],
                        ['mana', { value: () => 10 }],
                    ]),
                },
                fish: {
                    displayName: 'Eat some Fish.',
                    chance: () => 1,
                    cost: new Map([
                        ['fish', { value: () => 1 }],
                        ['nutrition', { value: () => -5 }],
                    ]),
                    effect: new Map([
                    // ['constitution', {value: () => 0.1}],
                    // ['mana', {value: () => 2}],
                    ]),
                },
            },
            conditionString: 'Find some food',
            condition: () => Object.values(this.resources).some((r) => r.tags.has('food') && r.unlocked),
            visibleCondition: () => Object.values(this.resources).some((r) => r.tags.has('food') && r.unlocked),
        });
        for (const unlockable of this.unlockables) {
            unlockable.setAttribute('hidden', '');
            unlockable.setInitials();
        }
        this.activityQueue = [];
        const restQueueItem = document.createElement('ri-activity-queue-item');
        restQueueItem.activity = this.activities.rest;
        restQueueItem.repeat = 1;
        const walkQueueItem = document.createElement('ri-activity-queue-item');
        walkQueueItem.activity = this.activities.walk;
        walkQueueItem.repeat = 1;
        this.activityQueue.push(restQueueItem);
        this.activityQueue.push(walkQueueItem);
        this.activityQueueIndex = 0;
        this.tabIndex = -1;
        this.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'Space':
                    this.togglePause();
                    break;
            }
            this.requestUpdate();
        });
        this.addEventListener('spell-clicked', (event) => {
            const spell = event.composedPath()[0];
            spell.cast(0, spell.optionIndex);
            if (!this.useSavedTime || this.gameSpeed == 0)
                this.requestUpdate();
        });
        this.addEventListener('spell-dropped', (event) => {
            const spell = event.composedPath()[0];
            // spell.cast(this, 0, 0);
            const spellQueueItem = document.createElement('ri-activity-queue-item');
            spellQueueItem.activity = spell;
            this.activityQueue.push(spellQueueItem);
            this.requestUpdate();
        });
        this.addEventListener('queue-item-split', (event) => {
            const originalQueueItem = event.composedPath()[0];
            const copyQueueItem = document.createElement('ri-activity-queue-item');
            const queueItemIndex = this.activityQueue.findIndex((queueItem) => queueItem == originalQueueItem);
            copyQueueItem.activity = originalQueueItem.activity;
            copyQueueItem.optionIndex = originalQueueItem.optionIndex;
            copyQueueItem.repeat = Math.max(Math.min(originalQueueItem.repeat, 1), Math.floor(originalQueueItem.repeat / 2));
            originalQueueItem.repeat = Math.ceil(originalQueueItem.repeat / 2);
            this.activityQueue.splice(queueItemIndex + 1, 0, copyQueueItem);
            this.requestUpdate();
        });
        this.addEventListener('queue-item-deleted', (event) => {
            this.activityQueue = this.activityQueue.filter((queueItem) => queueItem != event.composedPath()[0]);
            this.requestUpdate();
        });
        this.addEventListener('queue-item-reorder', (event) => {
            const e = event;
            const oldIndex = e.detail.from;
            const newIndex = e.detail.to;
            const element = this.activityQueue.splice(oldIndex, 1)[0];
            this.activityQueue.splice(newIndex, 0, element);
            // check if the old item was active
            if (oldIndex == this.activityQueueIndex) {
                this.activityQueueIndex = oldIndex;
            }
            // check if the new location is active
            if (newIndex == this.activityQueueIndex) {
                this.activityQueueIndex = newIndex;
            }
            // splice is in-place, so manually request an update
            this.requestUpdate();
        });
        this.addEventListener('queue-item-earlier', (event) => {
            // original index for the clicked item
            const oldIndex = this.activityQueue.findIndex((queueItem) => queueItem == event.composedPath()[0]);
            if (oldIndex == 0)
                return;
            // check if the item is active
            if (oldIndex == this.activityQueueIndex) {
                this.activityQueueIndex -= 1;
            }
            // check if the new location is active
            if (oldIndex == this.activityQueueIndex - 1) {
                this.activityQueueIndex += 1;
            }
            // Modulo, not remainder, so -1 flips to the end
            this.activityQueueIndex =
                ((this.activityQueueIndex % this.activityQueue.length) +
                    this.activityQueue.length) %
                    this.activityQueue.length;
            this.activityQueue.splice(oldIndex, 1);
            this.activityQueue.splice(oldIndex - 1, 0, event.composedPath()[0]);
            this.requestUpdate();
        });
        this.addEventListener('queue-item-later', (event) => {
            const oldIndex = this.activityQueue.findIndex((queueItem) => queueItem == event.composedPath()[0]);
            // check if the item is active
            if (oldIndex == this.activityQueueIndex) {
                this.activityQueueIndex += 1;
            }
            // check if the new location is active
            if (oldIndex == this.activityQueueIndex + 1) {
                this.activityQueueIndex -= 1;
            }
            // Modulo, not remainder, so -1 flips to the end
            this.activityQueueIndex =
                ((this.activityQueueIndex % this.activityQueue.length) +
                    this.activityQueue.length) %
                    this.activityQueue.length;
            this.activityQueue.splice(oldIndex, 1);
            this.activityQueue.splice(oldIndex + 1, 0, event.composedPath()[0]);
            this.requestUpdate();
        });
    }
    togglePause() {
        if (this.gameSpeed == 0)
            this.gameSpeed = 1;
        else if (this.gameSpeed == 1)
            this.gameSpeed = 0;
        if (this.gameSpeed == 0) {
            ri.classList.add('paused');
        }
        else {
            ri.classList.remove('paused');
        }
    }
    load(saveGame) {
        var _a, _b, _c, _d, _e;
        if (saveGame.version < 6) {
            return;
        }
        lastTime = saveGame.lastTime;
        lastSpellCooldownTime = saveGame.lastSpellCooldownTime;
        this.life = saveGame.life;
        this.tick = new Decimal(saveGame.tick);
        this.distance = new Decimal(saveGame.distance);
        this.nextLandmark = new Decimal(saveGame.nextLandmark);
        this.unlockedPanels = new Set(saveGame.unlockedPanels);
        for (const resourceData of saveGame.resources) {
            const resource = this.resources[resourceData.name];
            if (resource) {
                resource.baseCapacity = new Decimal(resourceData.baseCapacity);
                // Set _value to bypass the setter call (beforeGain etc.)
                resource._value = new Decimal(resourceData.value);
                resource.unlocked = resourceData.unlocked;
                resource.secret = resourceData.secret;
                resource.new = resourceData.new;
                resource.hiddenByPlayer = resourceData.hiddenByPlayer;
            }
        }
        for (const statData of saveGame.stats) {
            const stat = this.stats[statData.name];
            if (stat) {
                stat.value = new Decimal(statData.value);
                stat.unlocked = statData.unlocked;
                stat.secret = statData.secret;
                stat.new = statData.new;
                stat.hiddenByPlayer = statData.hiddenByPlayer;
            }
        }
        for (const activityData of saveGame.activities) {
            const activity = this.activities[activityData.name];
            if (activity) {
                activity.uses = new Decimal(activityData.uses);
                activity.unlocked = activityData.unlocked;
                activity.secret = activityData.secret;
                activity.new = activityData.new;
                activity.hiddenByPlayer = activityData.hiddenByPlayer;
            }
        }
        for (const spellData of saveGame.spells) {
            const spell = this.spells[spellData.name];
            if (spell) {
                spell.uses = new Decimal(spellData.uses);
                spell.unlocked = spellData.unlocked;
                spell.secret = spellData.secret;
                spell.new = spellData.new;
                spell.hiddenByPlayer = spellData.hiddenByPlayer;
                spell.currentCooldown = new Decimal(spellData.currentCooldown);
            }
        }
        this.activityQueue = [];
        for (const queueItemData of saveGame.loadouts[(_a = saveGame.selectedLoadoutIndex) !== null && _a !== void 0 ? _a : 0]) {
            const queueItem = document.createElement('ri-activity-queue-item');
            if (queueItemData.name in this.activities)
                queueItem.activity = this.activities[queueItemData.name];
            else if (queueItemData.name in this.spells)
                queueItem.activity = this.spells[queueItemData.name];
            else
                throw new Error('Unknown activity or spell: ' + queueItemData.name);
            queueItem.repeat = queueItemData.repeat;
            queueItem.activeIndex = 0;
            queueItem.option = (_b = queueItemData.option) !== null && _b !== void 0 ? _b : queueItem.activity.options[0];
            this.activityQueue.push(queueItem);
        }
        for (const i in this.loadouts) {
            // Reset the loadout to default
            this.loadouts[i] = [];
            // Add the queues to the loadout
            if ((_c = saveGame.loadouts) === null || _c === void 0 ? void 0 : _c[i]) {
                for (const queueItemData of saveGame.loadouts[i]) {
                    const queueItem = document.createElement('ri-activity-queue-item');
                    if (queueItemData.name in this.activities)
                        queueItem.activity = this.activities[queueItemData.name];
                    else if (queueItemData.name in this.spells)
                        queueItem.activity = this.spells[queueItemData.name];
                    else
                        throw new Error('Unknown activity or spell: ' + queueItemData.name);
                    queueItem.repeat = queueItemData.repeat;
                    queueItem.activeIndex = 0;
                    queueItem.option =
                        (_d = queueItemData.option) !== null && _d !== void 0 ? _d : queueItem.activity.options[0];
                    this.loadouts[i].push(queueItem);
                }
            }
        }
        this.lastLoadoutIndex = saveGame.selectedLoadoutIndex;
        function logEntryFromSave(entryData) {
            if (entryData.cost || entryData.effect) {
                const activityLogEntry = document.createElement('ri-activity-log-entry');
                activityLogEntry.name = entryData.name;
                activityLogEntry.displayName = entryData.displayName;
                activityLogEntry.cost = new Map(entryData.cost);
                activityLogEntry.effect = new Map(entryData.effect);
                activityLogEntry.logString = entryData.logString;
                activityLogEntry.tick = entryData.tick;
                activityLogEntry.tags = new Set(entryData.tags);
                return activityLogEntry;
            }
            const logEntry = document.createElement('ri-log-entry');
            logEntry.msg = entryData.msg;
            logEntry.tick = entryData.tick;
            logEntry.tags = new Set(entryData.tags);
            return logEntry;
        }
        if (saveGame.log) {
            this.logEntries = saveGame.log.map((entry) => logEntryFromSave(entry));
        }
        if (saveGame.history) {
            this.history = (_e = saveGame.history) === null || _e === void 0 ? void 0 : _e.map((el) => {
                return Object.fromEntries(Object.entries(el).map(([k, v]) => {
                    try {
                        v = [new Decimal(v[0]), new Decimal(v[1])];
                    }
                    catch (e) {
                        return [k, 0];
                    }
                    return [k, v];
                }));
            });
        }
        if (saveGame.preferences) {
            this.preferences = saveGame.preferences;
        }
    }
    reincarnate() {
        this.log('Suddenly, you find yourself back at the portal. You remember some things from your past lives that might make your life easier.');
        for (const unlockable of this.unlockables) {
            if (!unlockable.persistentUnlock) {
                unlockable.unlocked = false;
            }
            if (!unlockable.persistentValue) {
                unlockable.resetToInitials();
            }
        }
        this.life += 1;
        this.tick = new Decimal(0);
        this.distance = new Decimal(0);
        this.nextLandmark = new Decimal(1000);
        this.activityQueue = this.activityQueue.filter((queueItem) => { var _a; return (_a = queueItem.activity) === null || _a === void 0 ? void 0 : _a.condition(); });
    }
    render() {
        var _a, _b, _c;
        // This is delicate, relies on no one else changing global_css
        // Also extremenly expensive cause of layout.
        // Two weeks later and I have no idea how this works, comment your code
        let backgroundColor = new Color('#66ccff');
        let refresh = false;
        if (this.preferences.darkMode) {
            backgroundColor = new Color('#00111a');
        }
        if (this.lastDarkMode != this.preferences.darkMode) {
            refresh = true;
            this.lastDarkMode = this.preferences.darkMode;
        }
        if (this.lastLightEffects != this.preferences.lightEffects) {
            refresh = true;
            this.lastLightEffects = this.preferences.lightEffects;
        }
        if (refresh || !this.resources.light.value.eq(this.lastLightValue)) {
            if (insertedCSS)
                (_a = global_css.styleSheet) === null || _a === void 0 ? void 0 : _a.deleteRule(0);
            if (ri.preferences.lightEffects) {
                backgroundColor.hwb.w *= this.resources.light.value
                    .div(100)
                    .plus(1)
                    .toNumber();
                backgroundColor.hwb.b *= this.resources.light.value
                    .div(100)
                    .times(-1)
                    .plus(1)
                    .toNumber();
                backgroundColor.lch.c *= this.resources.light.value
                    .div(100)
                    .div(3)
                    .plus(1)
                    .toNumber();
                backgroundColor.lch.l *= this.resources.light.value
                    .div(100)
                    .div(3)
                    .plus(1)
                    .toNumber();
            }
            const maxColorComponent = Math.max(backgroundColor.r, backgroundColor.g, backgroundColor.b, 1);
            (_b = global_css.styleSheet) === null || _b === void 0 ? void 0 : _b.insertRule(`*{--background-color: ${((backgroundColor.r * 255) /
                maxColorComponent).toFixed(0)} ${((backgroundColor.g * 255) / maxColorComponent).toFixed(0)} ${((backgroundColor.b * 255) / maxColorComponent).toFixed(0)};}`, 0);
            insertedCSS = true;
        }
        this.lastLightValue = this.resources.light.value;
        return $ `
      <div id="speed-controls">
        <div
          id="speed-select"
          @click=${(e) => {
            const target = e.composedPath()[0];
            if (!target.hasAttribute('data-value'))
                return;
            this.gameSpeed = target.getAttribute('data-value');
            if (this.gameSpeed == 0) {
                ri.classList.add('paused');
            }
            else {
                ri.classList.remove('paused');
            }
            ri.requestUpdate();
        }}
        >
          <div
            class="button speed-select-item ${this.gameSpeed == 0 ? 'selected' : ''}"
            data-value=${0}
            data-tippy-content="Accumulate Time."
          >
            ⏸
          </div>
          <div
            class="button speed-select-item ${this.gameSpeed == 1 ? 'selected' : ''}"
            data-value=${1}
            data-tippy-content="Each second, one second passes."
          >
            ▶
          </div>
          <!-- <div class="button speed-select-item" data-value=${2}>2x</div>
          <div class="button speed-select-item" data-value=${5}>5x</div>
          <div class="button speed-select-item" data-value=${10}>10x</div> -->
        </div>
          <button
          ?disabled=${this.gameSpeed != 0}
            @click=${() => {
            if (!this.steppingOneFrame) {
                this.steppingOneFrame = true;
                this.gameSpeed = 1;
                ri.requestUpdate();
            }
        }}
          >
            ▶|
          </button>
        Time: ${formatTime(this.tick.times(tickLength / 1000))}
        
        <input
          type="checkbox"
          class="filter"
          id="use-saved-time"
          @change=${(e) => {
            this.useSavedTime = e.target.checked;
        }}
        /><label class="chip" id="use-saved-time-toggle" hidden for="use-saved-time">Use Saved Time: ${formatTime(this.resources.time.value.floor())}</label>
      </div>
      <ri-resources
        id="resources"
        .filterables=${Object.values(this.resources)}
      ></ri-resources>
      </div>
      <div id="stats" class="locked">
        <h4>Stats</h4>
        <div id="stats-container" class="container">
          ${Object.values(this.stats).filter((s) => s.unlocked)}
        </div>
      </div>
      <ri-activities
        id="activities"
        class="locked"
        .activities=${Object.values(this.activities)}
      ></ri-activities>
      <div id="activity-queue">
        <div id="activity-queue-header">
          <h4>
            Activity Queue<span>
              - Your plan of action! - If this starts acting weird, refresh the
              page! Your game saves every tick.<br>Ctrl + click = 5x, Shift + click = 10x, Ctrl + Shift + click = 50x</span
            >
          </h4>
          <select
                @change=${(event) => {
            var _a;
            this.loadouts[this.lastLoadoutIndex] = this.activityQueue;
            this.lastLoadoutIndex = Number((_a = event.target) === null || _a === void 0 ? void 0 : _a.value);
            this.activityQueue = this.loadouts[this.lastLoadoutIndex];
            this.activityQueueIndex = 0;
            this.requestUpdate();
        }}
          >${this.loadouts.map((loadout, i) => $ `<option value=${i} ?selected=${this.lastLoadoutIndex === i}>
                Loadout ${i}
              </option>`)}</select>
          <span
            >${this.activityQueue.reduce((acc, queueItem, i) => i < this.activityQueueIndex
            ? acc + queueItem.totalLength
            : acc, 0) + ((_c = this.activityQueue[this.activityQueueIndex]) === null || _c === void 0 ? void 0 : _c.activeIndex)}
            / ${this.activityQueue.reduce((acc, q) => acc + q.totalLength, 0)}
          </span>
        </div>
        <div id="activity-queue-container">${Object.values(this.activityQueue)}</div>
      </div>
      <ri-log id="log" .filterables=${[...this.logEntries].reverse()}></ri-log>
      <ri-unlockables
        id="unlockables"
        class="locked"
        .filterables=${this.unlockables}
        .entryClass=${'ri-unlockables-entry'}
      ></ri-unlockables>
      <div id="distance" class="distance">
        <h1>
          Distance:
          <span class="fancy distance"
            ><smooth-value .value=${this.distance}></smooth-value
          ></span>
          m
        </h1>
        <progress
          id="distance-progress"
          value=${this.distance.valueOf()}
          max=${this.nextLandmark.valueOf()}
        ></progress>
        <h1>${formatEng(this.nextLandmark, 1)} m</h1>
      </div>
      <ri-spells
        id="spells"
        class="locked"
        .spells=${Object.values(this.spells)}
      ></ri-spells>
      <div class="dev">
        <h4>Dev Tools</h4>
        <input
          type="text"
          @input=${(event) => {
            if (event.target.value == 'bandit') {
                event.target.nextElementSibling.hidden = false;
                event.target.hidden = true;
            }
        }}
        />
        <div class="container" hidden>
          <button
            @click=${() => {
            this.resetSave();
        }}
          >
            Wipe and Reload
          </button>
          <button
            @click=${() => {
            this.unlockables.forEach((unlockable) => unlockable.tryUnlock(true));
            this.distance = new Decimal('1e6');
        }}
          >
            Unlock all unlockables
          </button>
          <button @click=${this.reincarnate}>Reincarnate</button>
        </div>
        <button
          @click=${() => {
            window.open('https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1', undefined, 'popup');
        }}
        >
          Don't click
        </button>
        <button
          @click=${() => {
            settings();
        }}
        >
          Settings
        </button>
      </div>
    `;
    }
};
RunnerIdle.styles = [
    global_css,
    r$2 `
      :host {
        display: grid;
        grid-template-columns: minmax(400px, 1fr) 2fr minmax(400px, 1fr);
        grid-template-rows: 48px minmax(12em, 2fr) 2fr 2fr minmax(12em, 3fr);
        grid-column-gap: 12px;
        grid-row-gap: 8px;
        grid-template-areas:
          'speed-controls distance dev'
          'resources activity-queue right'
          'resources activity-queue right'
          'resources activity-queue right'
          'resources log right';
        height: 100%;
        overflow: auto;
        background-color: rgb(var(--background-color));
      }

      :host > * {
        border: 2px #0004 solid;
        border-radius: 4px;
        padding: 8px;
        background: #fff4;
      }

      .dev {
        grid-area: dev;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .dev > * {
        margin: 4px;
      }
      #speed-controls {
        grid-area: speed-controls;
        display: flex;
        align-items: center;
      }
      #speed-controls > * {
        margin: 2px;
      }

      #resources {
        grid-area: resources;
        overflow-y: auto;
      }
      #resources > * {
        --bg-color: rgba(var(--value-color), 0.2);
      }

      #activities {
        grid-area: activities;
      }

      #activities-container {
        display: flex;
        direction: row;
        flex-wrap: wrap;
        overflow-y: auto;
      }

      #stats {
        grid-area: stats;
        overflow-y: auto;
      }

      #distance {
        grid-area: distance;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      #distance > * {
        white-space: nowrap;
      }

      #distance progress {
        width: 100%;
        height: 32px;
      }

      #distance progress::-webkit-progress-value {
        background-color: rbg(var(--value-color, green));
      }

      #world {
        grid-area: world;
        overflow-y: auto;
      }

      #world progress {
        width: 64px;
      }

      #activity-queue {
        grid-area: activity-queue;
        overflow-y: auto;
      }

      #activity-queue-header {
        display: flex;
        justify-content: space-between;
      }

      #activity-queue-container {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: start;
        gap: 2px;
      }

      #activity-queue.drag-hover {
        background: #0002;
      }

      #activity-queue-container activity-queue-item {
        margin: 4px;
      }

      ri-log {
        grid-area: log;
      }

      ri-log#activity-log {
        grid-area: activity-log;
      }

      #spells {
        grid-area: spells;
      }

      #unlockables {
        grid-area: unlockables;
      }

      #speed-select {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .speed-select-item {
        border: 1px solid black;
        border-radius: 4px;
        margin: 2px;
        padding: 2px 4px;
      }

      .speed-select-item.selected {
        background: #0004;
      }

      #stats-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      #stats-container > * {
        margin: 2px;
      }
    `,
];
__decorate([
    e$2({ type: Decimal })
], RunnerIdle.prototype, "tick", void 0);
RunnerIdle = __decorate([
    n$3('runner-idle')
], RunnerIdle);

export { RunnerIdle, ri };
//# sourceMappingURL=game.js.map
