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
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol(),n$5=new WeakMap;class s$3{constructor(t,n,s){if(this._$cssResult$=!0,s!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n;}get styleSheet(){let e=this.o;const s=this.t;if(t$2&&void 0===e){const t=void 0!==s&&1===s.length;t&&(e=n$5.get(s)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n$5.set(s,e));}return e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",void 0,e$5),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,t,e$5)},i$3=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$4=window.trustedTypes,r$1=e$4?e$4.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$3={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e,r;const h=this.constructor._$Ep(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$3.toAttribute)(i,s.type);this._$El=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$El=null;}}_$AK(t,i){var s,e;const r=this.constructor,h=r._$Ev.get(t);if(void 0!==h&&this._$El!==h){const t=r.getPropertyOptions(h),n=t.converter,l=null!==(e=null!==(s=null==n?void 0:n.fromAttribute)&&void 0!==s?s:"function"==typeof n?n:null)&&void 0!==e?e:o$3.fromAttribute;this._$El=h,this[h]=l(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$3=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$3,n$3=`<${o$2}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>d(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),_=/'/g,g=/"/g,m=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),x=new WeakMap,T=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),E=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(m.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?g:_):d===g||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$3+y):s+e$3+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class C{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,s);if(this.el=C.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(m.test(l.tagName)){const t=l.textContent.split(e$3),s=t.length-1;if(s>0){l.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$3,t+1));)c.push({type:7,index:r}),t+=e$3.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.T(t);}j(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t));}T(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new C(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.j(h()),this.j(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.P(t);}P(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===w?void 0:t;}}const R=i$2?i$2.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==w?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.7");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=T(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

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

function getComputedStyle(element) {
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
  getComputedStyle(element).position === 'fixed') {
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
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
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

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
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

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
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
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

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

  if (getComputedStyle(body || html).direction === 'rtl') {
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
  var _getComputedStyle = getComputedStyle(element),
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
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
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

          var _getComputedStyle = getComputedStyle(popper),
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

class UnlockableLitElement extends s {
    constructor() {
        super(...arguments);
        this.name = 'unlockable';
        this.displayName = 'Unlockable';
        // Tags get merged upon assignment, to allow for Object.assign updating
        // I should probably just manually do tags.add(newtag) instead
        this._tags = new Set();
        this.unlocked = false;
        this.new = false;
        this.conditionString = 'Unlocked at start.';
        this.condition = () => true;
        this.visibleCondition = () => true;
        this._visible = false;
        this.secret = false;
        this.persistentUnlock = false;
        this.persistentValue = false;
    }
    set tags(val) {
        this._tags = new Set([...val, ...this._tags]);
    }
    get tags() {
        return this._tags;
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
            this.new = true;
            this.secret = false;
            this.dispatchEvent(new Event('unlockable-unlocked', { bubbles: true, composed: true }));
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
    e$2({ type: Boolean })
], UnlockableLitElement.prototype, "new", void 0);
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

  runner-idle:focus {
    outline: none;
  }

  .locked {
    display: none;
  }

  .nowrap {
    white-space: nowrap;
  }

  .danger {
    background-color: red;
    color: black;
  }

  h1 {
    margin: 0px;
    font-size: 1.5em;
  }

  h2,
  h3,
  h4 {
    margin: 0px;
    font-size: 1.1em;
  }

  h4 span {
    font-size: 0.8em;
    font-weight: normal;
    color: #000a;
  }

  hr {
    border: none;
    border-top: 2px solid #0004;
  }

  /* Checkboxes - All*/

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    border: 1px solid black;
    border-radius: 4px;
    margin: 2px;
    padding: 2px 4px;
    transition: all 0.2s ease-in-out;
    background: #fff2;
  }

  input[type='checkbox']:hover + label {
    background: #0002;
  }

  input[type='checkbox']:active + label {
    background: #0006;
  }

  input[type='checkbox']:checked + label {
    background: #0004;
  }

  input[type='checkbox']:checked:hover + label {
    background: #0004;
  }

  input[type='checkbox']:checked:active + label {
    background: #0002;
  }
  /* Checkboxes - Filter chips */

  input[type='checkbox'].filter:checked + label {
    border-color: transparent;
  }

  input[type='checkbox'].filter:checked + label:before {
    content: '✓';
    font-weight: bold;
  }

  /* In-game tag colors */

  .stamina,
  .staminaExp,
  .rest {
    --value-color: 200, 148, 4;
  }

  .distance,
  .walk,
  .jog,
  .run {
    --value-color: 0, 170, 255;
  }

  .health,
  .healthExp {
    --value-color: 240, 0, 0;
    --none-color: 255, 60, 60;
  }

  .mana,
  .manaExp {
    --value-color: 0, 0, 200;
  }

  .meditate,
  .walkingMeditation {
    --value-color: 147, 206, 195;
  }

  .manaDepth {
    --value-color: 70, 50, 130;
  }

  .sanity {
    --value-color: 255, 255, 255;
    --none-color: 0, 0, 0;
  }

  .nutrition,
  .eat {
    --value-color: 75, 170, 60;
  }

  .meat,
  .hunt {
    --value-color: 170, 60, 60;
  }
  .berry,
  .gather {
    --value-color: 141, 78, 133;
  }

  .speed,
  .trainSpeed {
    --value-color: 0, 120, 0;
  }

  .strength,
  .trainStrength {
    --value-color: 100, 100, 0;
  }

  span[class] {
    color: rgb(var(--value-color, initial));
  }

  .tippy-box {
    color: #000;
    background-color: #66ccfff0;
    border: 2px solid #0004;
  }

  .tippy-arrow:before {
    color: #66ccff;
  }
`;
// This applies this as a global stylesheet as well, but it's still necessary to
// import it in every component.
// This make other top-level elements use the styles, like tippy tooltips or the tutorial modals.
// This is currently the least caniuse thing in this codebase.
if (global_css.styleSheet)
    document.adoptedStyleSheets = [global_css.styleSheet];

let SmoothProgress = class SmoothProgress extends s {
    constructor() {
        super();
        this._value = 0;
        this._count = 0;
        this.max = 100;
        this.step = 1;
        this.target = 0;
        this.timer = setInterval(() => {
            if (this._count > 0) {
                this._count -= 1;
                this._value += this.step;
                this._value = Math.max(0, Math.min(this._value, this.max));
                this.requestUpdate();
            }
        }, 10);
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this.target = val;
        const frames = 50;
        this.step = (this.target - this._value) / frames;
        this._count += frames;
        // Twice as fast going down.
        // This should be configurable instead of hardcoded,
        // and it breaks if you go down to anything but 0.
        if (this.target < this._value) {
            this.step *= 2;
            this._count /= 2;
        }
    }
    render() {
        return $ ` <progress value=${this.value} max=${this.max}></progress> `;
    }
};
SmoothProgress.styles = [
    global_css,
    r$2 `
      progress {
        width: 100%;
      }
    `,
];
__decorate([
    e$2({ type: Number })
], SmoothProgress.prototype, "value", null);
__decorate([
    e$2({ type: Number })
], SmoothProgress.prototype, "max", void 0);
__decorate([
    e$2({ type: Number })
], SmoothProgress.prototype, "step", void 0);
__decorate([
    e$2({ type: Number })
], SmoothProgress.prototype, "target", void 0);
SmoothProgress = __decorate([
    n$1('smooth-progress')
], SmoothProgress);

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

const formatEng = (num, places = 4) => {
    const decimal = new Decimal(num);
    const { mantissa, exponent } = decimal;
    // Anything less than 0 should be shown?
    if (exponent < 0)
        return decimal.toFixed(-exponent);
    // Less than 100,000, just show in full
    if (exponent < 5)
        return decimal.toFixed(Math.max(0, places - exponent));
    return `${(mantissa * Math.pow(10, exponent % 3)).toPrecision(4)}e${Math.floor(exponent / 3) * 3}`;
};
const formatResourceValue = (value) => formatEng(value, 2);
const formatResourceCapacity = (capacity) => formatEng(capacity, 2);
const formatStat = (stat) => {
    return formatEng(stat);
};
const formatDelta = (delta, places = 4) => {
    if (delta.eq(0))
        return '';
    if (delta.lt(0))
        return delta.toFixed(places);
    return `+${delta.toFixed(places)}`;
};

/**
 * An ongoing activity.
 *
 * @fires activity-clicked - Indicates when the activity is clicked or dropped onto the Queue.
 */
let Activity = class Activity extends UnlockableLitElement {
    constructor() {
        super();
        this.name = 'activity';
        this.displayName = 'Activity';
        this.description = 'Description';
        this.tooltipContent = () => '';
        this.length = 1;
        this._tags = new Set(['activity']);
        this.options = [];
        this.uses = new Decimal(0);
        this.active = false;
        this.cost = new Map();
        this.effect = new Map();
        this.canAfford = (ri) => {
            for (const [key, value] of this.cost) {
                if (new Decimal(value(ri)).gt(ri.get(key).value)) {
                    return false;
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
        this.onCannotAfford = (ri) => {
            ri.log(`Cannot ${this.displayName}`);
            return false;
        };
        this.perform = (ri, step, optionIndex) => {
            if (this.canAfford(ri, step, optionIndex)) {
                // Log first so that the values are available still
                ri.log(`${this.displayName}. Gained ${[...this.effect]
                    .map(([k, v]) => `<span class='${k}'>${formatEng(v(ri, step, optionIndex))}</span> ${ri.get(k).displayName}`)
                    .join(', ')}${this.cost.size > 0
                    ? ` for ${[...this.cost]
                        .map(([k, v]) => `<span class='${k}'>${formatEng(v(ri, step, optionIndex))}</span> ${ri.get(k).displayName}`)
                        .join(', ')}`
                    : ''}`);
                // Pay all the costs.
                for (const [key, value] of this.cost) {
                    ri.gain(key, -value(ri, step, optionIndex));
                }
                // Perform the value-based effects.
                for (const [key, value] of this.effect) {
                    ri.gain(key, value(ri, step, optionIndex));
                }
                // Perform anything that can't be done in the value-based effects.
                this.performSpecial(ri, step, optionIndex);
                return true;
            }
            // Can't afford it.
            return this.onCannotAfford(ri, step, optionIndex);
        };
        this.performSpecial = (_ri, _step, _optionIndex) => {
            // Do nothing.
        };
        this.baseEffectString = '';
        this.tooltip = tippy(this, {
            allowHTML: true,
        });
        setTimeout(() => {
            this.classList.add(this.name);
        });
        // Way too often, make this respond to events
        setInterval(this._updateTooltip.bind(this), 100);
    }
    resetToInitials() {
        this.uses = new Decimal(0);
    }
    render() {
        this._updateTooltip();
        return $ `
      <juicy-draggable
        position=${'static'}
        dropselector=${'#activity-queue-container'}
        @juicy-draggable-stop=${this._onItemDropped}
      >
        <div class="drag activity" @click=${this._onStart}>
          ${this.displayName}
        </div>
      </juicy-draggable>
    `;
    }
    _updateTooltip() {
        var _a;
        (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.setContent(`
      ${this.description}
      <br>Base Effect: ${this.baseEffectString}
      <br>
      <br>${this.tooltipContent()}
      <br>
      <br>Uses: ${this.uses}`);
    }
    _onStart() {
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
    e$2()
], Activity.prototype, "name", void 0);
__decorate([
    e$2()
], Activity.prototype, "displayName", void 0);
__decorate([
    e$2()
], Activity.prototype, "description", void 0);
__decorate([
    e$2()
], Activity.prototype, "tooltipContent", void 0);
__decorate([
    e$2({ type: Number })
], Activity.prototype, "length", void 0);
__decorate([
    e$2()
], Activity.prototype, "_tags", void 0);
__decorate([
    e$2()
], Activity.prototype, "options", void 0);
__decorate([
    e$2({ type: Decimal })
], Activity.prototype, "uses", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], Activity.prototype, "active", void 0);
__decorate([
    e$2()
], Activity.prototype, "cost", void 0);
__decorate([
    e$2()
], Activity.prototype, "effect", void 0);
__decorate([
    e$2()
], Activity.prototype, "canAfford", void 0);
__decorate([
    e$2()
], Activity.prototype, "onCannotAfford", void 0);
__decorate([
    e$2()
], Activity.prototype, "perform", void 0);
__decorate([
    e$2()
], Activity.prototype, "performSpecial", void 0);
Activity = __decorate([
    n$1('ri-activity')
], Activity);

let ActivityQueueItem = class ActivityQueueItem extends s {
    constructor() {
        super();
        this.activity = new Activity();
        this.repeat = 1;
        this.activeIndex = 0;
        this.active = false;
        this.optionIndex = 0;
        this.tooltip = tippy(this, {
            content: ``,
            placement: 'top-start',
            allowHTML: true,
        });
        setTimeout(() => {
            this.classList.add(this.activity.name);
        });
    }
    get totalLength() {
        var _a;
        return this.activity ? this.repeat * ((_a = this.activity) === null || _a === void 0 ? void 0 : _a.length) : 0;
    }
    render() {
        var _a, _b, _c, _d, _e;
        this.tooltip.setContent(`${(_a = this.activity) === null || _a === void 0 ? void 0 : _a.tooltipContent()}`);
        return $ `
      <juicy-draggable
        position=${'static'}
        dropselector=${'ri-activity-queue-item'}
        @juicy-draggable-start=${this._onReorderStart}
        @juicy-draggable-move=${this._onReorderMove}
        @juicy-draggable-stop=${this._onReorderDrop}
      >
        <div class="queue-item" data-tippy-content="test">
          <div class="drag-handle">⠿</div>
          <div class="queue-item-label">
            <label class="${this.activity.name}"
              >${(_b = this.activity) === null || _b === void 0 ? void 0 : _b.displayName}</label
            >
            ${((_d = (_c = this.activity) === null || _c === void 0 ? void 0 : _c.options) === null || _d === void 0 ? void 0 : _d.length) > 0
            ? $ `
                  <select
                    name="options"
                    @change=${(e) => (this.optionIndex = e.target.value)}
                  >
                    ${(_e = this.activity) === null || _e === void 0 ? void 0 : _e.options.map((option, index) => $ `
                        <option value=${index}>${option}</option>
                      `)}
                  </select>
                `
            : w}
            <span>${this.activeIndex} / ${this.totalLength}</span>
          </div>
          <smooth-progress
            .value=${this.activeIndex}
            .max=${this.totalLength}
          ></smooth-progress>
          <div class="nowrap">x ${this.repeat}</div>
          <div>
            <button draggable="false" @click=${this._onMore}>+</button>
            <button @click=${this._onLess}>-</button>
            <button @click=${this._onEarlier}>▲</button>
            <button @click=${this._onLater}>▼</button>
            <button @click=${this._onSplit}>⟷</button>
            <button @click=${this._onDelete}>🗑</button>
          </div>
        </div>
      </juicy-draggable>
    `;
    }
    _onReorderStart(_) {
        setTimeout(() => {
            var _a;
            const queueItem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.queue-item');
            if (queueItem)
                queueItem.style.visibility = 'hidden';
        });
        setTimeout(() => {
            var _a;
            const dragHelper = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.drag-helper');
            if (dragHelper)
                dragHelper.style.visibility = 'visible';
        });
    }
    _onReorderMove(_) { }
    _onReorderDrop(e) {
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
    }
    _onMore() {
        this.repeat += 1;
    }
    _onLess() {
        if (this.repeat > 0)
            this.repeat -= 1;
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

      .queue-item,
      .drag-helper {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .queue-item > *,
      .drag-helper > * {
        padding: 4px;
      }

      .queue-item smooth-progress,
      .drag-helper smooth-progress,
      .queue-item progress,
      .drag-helper progress {
        width: 40%;
      }

      .queue-item-label {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    `,
];
__decorate([
    e$2({ type: Number })
], ActivityQueueItem.prototype, "repeat", void 0);
__decorate([
    e$2({ type: Number })
], ActivityQueueItem.prototype, "activeIndex", void 0);
__decorate([
    e$2({ type: Boolean })
], ActivityQueueItem.prototype, "active", void 0);
ActivityQueueItem = __decorate([
    n$1('ri-activity-queue-item')
], ActivityQueueItem);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=w,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w||null==r)return this._t=void 0,this.it=r;if(r===b)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

let Log = class Log extends s {
    constructor() {
        super(...arguments);
        this.entries = [];
        this.name = 'Log';
        this.filter = () => true;
    }
    render() {
        return $ `
      <div class="container">
        <div>${this.entries.filter(this.filter).slice(-100)}</div>
      </div>
      <h4>${this.name}</h4>
    `;
    }
};
Log.styles = r$2 `
    :host,
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      overflow-y: auto;
    }
    ::-webkit-scrollbar-track {
      background: black;
    }
    ::-webkit-scrollbar-thumb {
      background: red;
    }
    h4 {
      margin: 0px;
    }
  `;
__decorate([
    e$2({ type: Array, attribute: false })
], Log.prototype, "entries", void 0);
Log = __decorate([
    n$1('ri-log')
], Log);
let LogEntry = class LogEntry extends s {
    constructor() {
        super(...arguments);
        this.msg = '';
        this.datetime = Date.now();
        this.tick = new Decimal(0);
        this.tags = new Set();
        this.life = 0;
    }
    render() {
        // setTimeout(() => this.scrollIntoView());
        return $ `<div>
      ${this.life > 0 ? `${this.life}-` : w} ${this.tick} -
      ${o(this.msg)}
    </div>`;
    }
};
LogEntry.styles = [global_css];
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
    n$1('ri-log-entry')
], LogEntry);

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
        this.color = 'green';
        this._value = new Decimal(0);
        this.capacity = new Decimal(10);
        this.minimum = new Decimal(0);
        this.delta = new Decimal(0);
        this.initialCapacity = new Decimal(0);
        this.initialValue = new Decimal(0);
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
        this._value = val.clamp(this.minimum, this.capacity);
        if (this._value.equals(this.capacity)) {
            this.onMaxCapacity();
        }
        if (this._value.equals(this.minimum)) {
            this.onMinimum();
        }
    }
    get vacancy() {
        return this.capacity.minus(this.value);
    }
    setInitials() {
        this.initialCapacity = this.capacity;
        this.initialValue = this.value;
    }
    resetToInitials() {
        super.resetToInitials();
        this.capacity = this.initialCapacity;
        this.value = this.initialValue;
    }
    get valueHTML() {
        return `<span class='${this.name} resource-value'>${formatResourceValue(this.value)}</span>`;
    }
    render() {
        this.tooltip.setContent(`${this.description}`);
        return $ `
      <div class="ri-resource" ?hidden=${!this.unlocked}>
        <div class="ri-resource-label">
          <label>${this.displayName}</label>
          ${formatResourceValue(this.value)} /
          ${formatResourceCapacity(this.capacity)}
        </div>
        <div class="ri-resource-meter">
          <ri-meter
            class="value"
            .value=${this.value}
            .capacity=${this.capacity}
            .minimum=${this.minimum}
          ></ri-meter>
          <div class="delta">${formatDelta(this.delta, 0)}</div>
        </div>
      </div>
    `;
    }
};
Resource.styles = [
    global_css,
    r$2 `
      :host {
        width: 100%;
      }
      .ri-resource {
        display: flex;
        flex-direction: row;
        background: var(--bg-color);
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
      ri-meter.value {
        --color: rgb(var(--value-color));
        --height: 16px;
        --width: 100%;
      }
      ri-meter {
        height: 16px; //var(--height, 16px);
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
    e$2()
], Resource.prototype, "name", void 0);
__decorate([
    e$2()
], Resource.prototype, "displayName", void 0);
__decorate([
    e$2()
], Resource.prototype, "description", void 0);
__decorate([
    e$2()
], Resource.prototype, "color", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "_value", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "capacity", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "minimum", void 0);
__decorate([
    e$2({ type: Decimal })
], Resource.prototype, "delta", void 0);
Resource = __decorate([
    n$1('ri-resource')
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
    n$1('ri-meter')
], Meter);

let Stat = class Stat extends UnlockableLitElement {
    constructor() {
        super();
        this.name = 'stat';
        this.displayName = 'Stat';
        this.description = 'Description';
        this._tags = new Set(['stat']);
        this.value = new Decimal(1);
        this.delta = new Decimal(0);
        this.initialValue = new Decimal(0);
        this.tooltip = tippy(this, {
            content: `${this.description}`,
            placement: 'top-start',
            allowHTML: true,
        });
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
        return `<span class='${this.name} stat'>${formatStat(this.value)}</span>`;
    }
    render() {
        this.tooltip.setContent(`${this.description} `);
        return $ `
      <div>
        ${this.displayName}: ${o(this.valueHTML)}
        ${formatDelta(this.delta)}
      </div>
    `;
    }
};
Stat.styles = [global_css, r$2 ``];
__decorate([
    e$2()
], Stat.prototype, "name", void 0);
__decorate([
    e$2()
], Stat.prototype, "displayName", void 0);
__decorate([
    e$2()
], Stat.prototype, "description", void 0);
__decorate([
    e$2({ type: Decimal })
], Stat.prototype, "value", void 0);
__decorate([
    e$2({ type: Decimal })
], Stat.prototype, "delta", void 0);
Stat = __decorate([
    n$1('ri-stat')
], Stat);

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
    n$1('ri-tutorial')
], Tutorial);

function settings (ri) {
    var _a;
    // pause
    ri.gameSpeed = 0;
    const settings = document.querySelector('ri-settings');
    settings.ri = ri;
    if (settings) {
        const modal = (_a = settings.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-modal');
        if (modal) {
            modal.open();
        }
    }
}
let Settings = class Settings extends s {
    constructor() {
        super(...arguments);
        this.ri = undefined;
    }
    exportSave() {
        var _a, _b;
        const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('export-save');
        if (textarea)
            textarea.value = btoa(JSON.stringify((_b = this.ri) === null || _b === void 0 ? void 0 : _b.saveGame));
    }
    importSave() {
        var _a, _b;
        const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('import-save');
        if (textarea)
            (_b = this.ri) === null || _b === void 0 ? void 0 : _b.load(JSON.parse(atob(textarea.value)));
    }
    close() {
        var _a, _b;
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-modal')) === null || _b === void 0 ? void 0 : _b.close();
        this.unpause();
    }
    unpause() {
        const runnerIdle = document.querySelector('runner-idle');
        if (runnerIdle) {
            runnerIdle.gameSpeed = 1;
        }
    }
    render() {
        return $ `
      <ri-modal .closeOnOverlay=${true} .onClose=${this.unpause}>
        <button @click=${this.exportSave}>Export Save</button>
        <button @click=${this.importSave}>Import Save</button>
        <button
          @click=${(_) => {
            localStorage.removeItem('saveGame');
            window.location.reload();
        }}
          class="danger"
        >
          HARD RESET
        </button>
        <textarea readonly id="export-save"></textarea>
        <textarea id="import-save"></textarea>
        <button @click=${this.close}>Close</button>
      </ri-modal>
    `;
    }
};
Settings.styles = [global_css, r$2 ``];
Settings = __decorate([
    n$1('ri-settings')
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
        z-index: 100;
      }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 500px;
        background-color: white;
        border-radius: 5px;
        z-index: 101;
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
    n$1('ri-modal')
], Modal);

const click_target = document.getElementById('perception-click-target');
const ri = document.querySelector('runner-idle');
let lastMoved = Date.now();
click_target === null || click_target === void 0 ? void 0 : click_target.addEventListener('click', () => {
    ri.stats.perception.value = ri.stats.perception.value.plus(0.05);
    // ri.stats.requestUpdate();
    randomizeLocation();
    ri.focus();
});
function randomizeLocation() {
    lastMoved = Date.now();
    if (click_target) {
        click_target.style.top = Math.random() * 100 + '%';
        click_target.style.left = Math.random() * 100 + '%';
    }
}
setInterval(() => {
    if (Date.now() - lastMoved < 10 * 1000)
        return;
    if (Math.random() < 0.1) {
        randomizeLocation();
    }
}, 1000);

let FilterView = class FilterView extends s {
    constructor() {
        super(...arguments);
        this.subtitle = 'All the things!';
        this.filterables = [];
        this.possibleFilters = new Set();
        this.filters = new Set();
    }
    render() {
        return $ `
      <h4>${this.title}<span> - ${this.subtitle}</span></h4>
      <hr />
      <div class="filters">
        ${[...this.possibleFilters].map((filter) => $ `<input
              class="filter"
              type="checkbox"
              ?checked=${this.filters.has(filter.name)}
              id=${filter.name}
              value=${filter.name}
              @change=${this._onFilterToggle}
            /><label for="${filter.name}">${filter.displayName}</label>`)}
      </div>
      <hr />
      <div class="container">
        ${this.filterables
            .filter((filterable) => {
            let include = false;
            for (const tag of filterable.tags) {
                if (this.filters.has(tag)) {
                    include = true;
                    break;
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
            .map((filterable) => {
            const el = document.createElement(this.entryClass);
            el.filterable = filterable;
            return el;
        })}
      </div>
    `;
    }
    compare(a, b) {
        return a.compareDocumentPosition(b);
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
};
FilterView.styles = [
    global_css,
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
__decorate([
    e$2()
], FilterView.prototype, "entryClass", void 0);
FilterView = __decorate([
    n$1('ri-filter-view')
], FilterView);

// Unlockables display
let Unlockables = class Unlockables extends FilterView {
    constructor() {
        super(...arguments);
        this.title = 'Unlockables';
        this.subtitle = 'What will you work on next?';
        this.possibleFilters = new Set([
            { name: 'activity', displayName: 'Activity' },
            { name: 'stat', displayName: 'Stat' },
            { name: 'resource', displayName: 'Resource' },
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
        this.filters = new Set(['activity', 'stat', 'resource']);
    }
    compare(a, b) {
        if (a.unlocked && !b.unlocked)
            return -1;
        if (!a.unlocked && b.unlocked)
            return 1;
        if (a.new && !b.new)
            return -1;
        if (!a.new && b.new)
            return 1;
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
    global_css,
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
    n$1('ri-unlockables')
], Unlockables);

let UnlockablesEntry = class UnlockablesEntry extends s {
    constructor() {
        super();
        this.displayName = 'Unlockable';
        this.tags = new Set();
        this.addEventListener('mouseover', (_event) => {
            var _a;
            // Create and dispatch a custom event that can be handled by the parent that contains this.unlockable
            const customEvent = new CustomEvent('unlockable-hover', {
                detail: {
                    name: (_a = this.filterable) === null || _a === void 0 ? void 0 : _a.name,
                },
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(customEvent);
            this.requestUpdate();
        });
        this.tooltip = tippy(this, {
            allowHTML: true,
        });
    }
    render() {
        if (!this.filterable)
            return w;
        const unlockString = !this.filterable.visible
            ? 'Hidden'
            : this.filterable.conditionString;
        if (this.filterable.unlocked) {
            this.tooltip.setContent(`Required: ${unlockString} `);
        }
        else {
            this.tooltip.setContent(`Unlocks: ${this.filterable.secret ? 'Undiscovered' : this.filterable.displayName} `);
        }
        // setTimeout(() => this.scrollIntoView());
        return $ `<div
      class="${this.filterable.new ? 'new ' : ''} ${this.filterable.unlocked
            ? ''
            : 'locked - filterable'}"
    >
      ${this.filterable.unlocked ? this.filterable.displayName : unlockString}
    </div>`;
    }
};
UnlockablesEntry.styles = r$2 `
    :host {
      border: 1px black solid;
    }
    :host > div {
      padding: 2px;
    }

    div.locked {
      background: #fff8;
    }

    div.new {
      background: #ff0;
    }
  `;
__decorate([
    e$2({ attribute: false })
], UnlockablesEntry.prototype, "filterable", void 0);
UnlockablesEntry = __decorate([
    n$1('ri-unlockables-entry')
], UnlockablesEntry);

let FilterEntry = class FilterEntry extends s {
    render() {
        return $ `${this.filterable}`;
    }
};
__decorate([
    e$2({ attribute: false })
], FilterEntry.prototype, "filterable", void 0);
FilterEntry = __decorate([
    n$1('ri-filter-entry')
], FilterEntry);

let saveGame = JSON.parse(localStorage.getItem('saveGame') || 'null');
const saveVersion = 2;
const tickLength = 1000;
let lastTime = Date.now();
function StartGameLoopOn(runnerIdle) {
    requestAnimationFrame(() => StartGameLoopOn(runnerIdle));
    const now = Date.now();
    // If we're paused or lots of time has passed (background tab, really slow machine?),
    // bank the time and requestUpdate just in case.
    if (runnerIdle.gameSpeed == 0 || now - lastTime > 2000) {
        runnerIdle.resources.time.value = runnerIdle.resources.time.value.plus((now - lastTime) / 1000);
        lastTime = now;
        runnerIdle.requestUpdate();
        updateUnlocks(runnerIdle);
        save(runnerIdle);
    }
    // Otherwise, if we're using saved time and we have some, use it.
    else if (runnerIdle.useSavedTime &&
        runnerIdle.resources.time.value.gte(tickLength / 1000) &&
        now - lastTime > 100) {
        lastTime = now;
        gameLoop(runnerIdle);
        runnerIdle.resources.time.value = runnerIdle.resources.time.value.minus(tickLength / 1000);
    }
    // Otherwise just tick if possible
    else if (now - lastTime > tickLength) {
        gameLoop(runnerIdle);
        lastTime += tickLength;
    }
}
/**
 * This is the order of when things happen in a given tick
 * 1. Perform action
 * 2. Game updates
 * 3. State checks
 **/
function gameLoop(ri) {
    ri.tick = ri.tick.add(1);
    // Feature unlocks.
    if (ri.distance.gte(10) || ri.activityQueue.length < 2) {
        ri.unlockPanel('activities');
    }
    if ((ri.activities.jog.uses.gte(10) && ri.distance.gte(100)) ||
        ri.distance.gte(250)) {
        ri.unlockPanel('stats');
        ri.unlockPerceptionMinigame();
    }
    if ((ri.activityQueue.length > 2 && ri.distance.gte(300)) ||
        ri.distance.gte(400)) {
        ri.unlockPanel('queue-loop-delta');
    }
    if (ri.distance.gte(500)) {
        ri.unlockPanel('unlockables');
    }
    // Landmarks
    if (ri.distance.gte(ri.nextLandmark)) {
        if (ri.nextLandmark.equals(1e3)) {
            ri.log('You have reached the forest! You see some movement in the trees, and a rabbit pops out.');
            ri.activities.hunt.tryUnlock(true);
            // This next bit doesn't work because it only happens the first time you reach the landmark
            // const world = ri.shadowRoot?.querySelector('#world');
            // if (world) {
            //   world.classList.remove('locked');
            //   ri.style.gridTemplateAreas = [
            //     'speed-controls distance dev',
            //     'activity-queue resources stats',
            //     'activities resources unlockables',
            //     'queue-loop-delta resources unlockables',
            //     'activity-log log world',
            //   ]
            //     .map((el) => `"${el}"`)
            //     .join(' ');
            // }
        }
        else if (ri.nextLandmark.equals(1e4)) {
            ri.log('You have reached the arena. Fight for fun and profit!');
            ri.activities.fight.tryUnlock(true);
            // world.
        }
        ri.nextLandmark = ri.nextLandmark.times(10);
    }
    // ri.log(`Start time ${ri.tick}`);
    /* Keep a copy of the current values to calculate deltas late*/
    const oldStats = Object.values(ri.stats).map((stat) => ({
        value: stat.value,
        name: stat.name,
    }));
    const oldResources = Object.values(ri.resources).map((resource) => ({
        value: resource.value,
        name: resource.name,
    }));
    /* Utility functions for activities */
    function gain(resourceName, amountPerSecond) {
        const resource = ri.resources[resourceName];
        const oldValue = resource.value;
        resource.value = resource.value.plus(amountPerSecond);
        const delta = resource.value.minus(oldValue);
        return delta;
    }
    /* Determine this activity */
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
        queueItem = ri.activityQueue[ri.activityQueueIndex];
    }
    queueItem.activity.active = false;
    // check if it's out of repeats
    while (queueItem.activeIndex >= queueItem.totalLength ||
        queueItem.repeat == 0) {
        // if so, move to the next one
        queueItem.activeIndex = 0;
        ri.activityQueueIndex += 1;
        ri.activityQueueIndex %= ri.activityQueue.length;
        queueItem = ri.activityQueue[ri.activityQueueIndex];
    }
    // Make it active and set its internal index
    queueItem.activity.active = true;
    ri.activeActivity = queueItem.activity;
    queueItem.activeIndex += 1;
    // Restart queueLoopDelta tracking if we're at the beginning
    if (ri.activityQueueIndex == 0 && queueItem.activeIndex == 1) {
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
    /* Perform the active Activity */
    // This is a little complicated
    // since Activities can have a length > 1
    // and can be either incremental or all at once at the end, or combo!
    // First, get the current step the activity is on
    const step = queueItem.activeIndex % queueItem.activity.length;
    const inProgress = step != 0;
    let performed = ri.activeActivity.perform(ri, step, queueItem.optionIndex);
    let attempt = 1;
    // If it's not performed, keep going until one is.
    while (!performed && attempt < ri.activityQueue.length) {
        attempt += 1;
        queueItem.activeIndex = 0;
        ri.activityQueueIndex += 1;
        ri.activityQueueIndex %= ri.activityQueue.length;
        queueItem = ri.activityQueue[ri.activityQueueIndex];
        queueItem.activity.active = false;
        // check if it's out of repeats
        while (queueItem.activeIndex >= queueItem.totalLength ||
            queueItem.repeat == 0) {
            // if so, move to the next one
            queueItem.activeIndex = 0;
            ri.activityQueueIndex += 1;
            ri.activityQueueIndex %= ri.activityQueue.length;
            queueItem = ri.activityQueue[ri.activityQueueIndex];
        }
        // Make it active and set its internal index
        queueItem.activity.active = true;
        ri.activeActivity = queueItem.activity;
        queueItem.activeIndex += 1;
        performed = ri.activeActivity.perform(ri, step, queueItem.optionIndex);
    }
    // Completed!
    if (!inProgress) {
        ri.activeActivity.uses = ri.activeActivity.uses.add(1);
    }
    /* Update any tag-based actions */
    // Doing training activities adds focus, which depletes otherwise
    if (performed && ri.activeActivity.tags.has('train')) {
        // Gain focus capacity by training at max focus
        if (ri.resources.focus.value.gte(ri.resources.focus.capacity)) {
            ri.resources.focus.capacity = ri.resources.focus.capacity.plus(0.01);
        }
        gain('focus', 1);
    }
    else {
        // Focus drops by 1/s when not training
        ri.resources.focus.value = ri.resources.focus.value.minus(1).floor().max(0);
    }
    // Doing meditation activities adds manaDepth, which depletes otherwise
    if (performed && ri.activeActivity.tags.has('meditate')) {
        gain('manaDepth', 1);
    }
    else {
        ri.resources.manaDepth.value = ri.resources.manaDepth.value
            .times(0.9)
            .floor();
    }
    // Do all Resource.prototype.onTick()s
    for (const resource of Object.values(ri.resources)) {
        resource.onTick();
    }
    // Death
    if (ri.resources.health.value.lte(0)) {
        ri.log('You died! CURRENTLY NOT IMPLEMENTED');
        // setTimeout(ri.reincarnate.bind(ri));
    }
    updateUnlocks(ri);
    /* Set attributes */
    for (const unlockable of ri.unlockables) {
        if (unlockable.unlocked)
            unlockable.removeAttribute('hidden');
        else
            unlockable.setAttribute('hidden', '');
    }
    for (const activity of Object.values(ri.activities)) {
        activity.setAttribute('data-tooltip', `${activity.name}`);
    }
    /* Set resources gained this frame (deltas) */
    for (const oldStat of oldStats) {
        ri.stats[oldStat.name].delta = ri.stats[oldStat.name].value.minus(oldStat.value);
    }
    for (const oldResource of oldResources) {
        ri.resources[oldResource.name].delta = ri.resources[oldResource.name].value.minus(oldResource.value);
    }
    save(ri);
}
function updateUnlocks(ri) {
    var _a;
    for (const unlockable of ri.unlockables) {
        if (unlockable.tryUnlock()) {
            ri.log(`Unlocked ${unlockable.displayName}, condition: ${unlockable.conditionString}`, new Set(['unlockable', unlockable.name]));
            // Manually refresh all the unlockables. This is garbage.
            (_a = ri.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-unlockables').shadowRoot.querySelectorAll('ri-unlockables-entry').forEach((e) => e.requestUpdate());
        }
    }
}
function save(ri) {
    /* Copy all save data to saveGame*/
    saveGame.version = saveVersion;
    saveGame.life = ri.life;
    saveGame.tick = ri.tick;
    saveGame.lastTime = lastTime;
    saveGame.distance = ri.distance;
    saveGame.nextLandmark = ri.nextLandmark;
    saveGame.resources = Object.values(ri.resources).map((resource) => ({
        name: resource.name,
        value: resource.value,
        capacity: resource.capacity,
        unlocked: resource.unlocked,
        secret: resource.secret,
    }));
    saveGame.activities = Object.values(ri.activities).map((activity) => ({
        name: activity.name,
        uses: activity.uses,
        unlocked: activity.unlocked,
        secret: activity.secret,
    }));
    saveGame.stats = Object.values(ri.stats).map((stat) => ({
        name: stat.name,
        value: stat.value,
        unlocked: stat.unlocked,
        secret: stat.secret,
    }));
    saveGame.activityQueue = ri.activityQueue.map((queueItem) => ({
        name: queueItem.activity.name,
        repeat: queueItem.repeat,
        activeIndex: queueItem.activeIndex,
    }));
    // saveGame.activityQueueIndex = ri.activityQueueIndex;
    saveGame.log = ri.logEntries.slice(-100).map((logEntry) => ({
        msg: logEntry.msg,
        tags: Array.from(logEntry.tags),
        tick: logEntry.tick,
    }));
    // Save!
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
        this.distance = new Decimal(0);
        this.nextLandmark = new Decimal(1e3);
        this.logElement = new Log();
        this.activityLogElement = new Log();
        this.logEntries = [];
        this.lastResources = {};
        this.lastStats = {};
        this.lastQueueLoopDelta = {};
        this.lastDistance = 0;
        this.activeActivity = null;
        this.activities = {};
        this.activityQueue = [];
        this.activityQueueIndex = 0;
        this.resources = {};
        this.stats = {};
        this.useSavedTime = false;
        this.life = 0;
        /** Relates grid-areas to indices for placement during unlockPanel */
        this.unlockPanelMap = {
            world: [[3, 2]],
            activities: [[3, 1]],
            stats: [[1, 0]],
            'queue-loop-delta': [
                [3, 0],
                [4, 0],
            ],
            unlockables: [
                [1, 2],
                [2, 2],
                [3, 2],
            ],
        };
        setTimeout(this.focus.bind(this));
        this.logElement = document.createElement('ri-log');
        this.logElement.entries = this.logEntries;
        this.logElement.filter = (_) => true; // !logEntry.tags.has('activity');
        this.activityLogElement = document.createElement('ri-log');
        this.activityLogElement.id = 'activity-log';
        this.activityLogElement.name = 'Activity Log';
        this.activityLogElement.classList.add('locked');
        this.activityLogElement.entries = this.logEntries;
        this.activityLogElement.filter = (logEntry) => logEntry.tags.has('activity');
        this.init();
        if (saveGame == null) {
            saveGame = {};
            // setTimeout(() => tutorial(this), 0);
        }
        else {
            this.load(saveGame);
        }
        gameLoop(this);
        StartGameLoopOn(this);
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
        if (name === 'distance')
            return { value: this.distance, displayName: 'Distance' };
        if (name in this.resources)
            return this.resources[name];
        if (name in this.stats)
            return this.stats[name];
        // if (name in this.activities) return this.activities[name];
        throw new Error(`No such resource or stat: ${name}`);
    }
    set(name, value) {
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
        return this.set(name, new Decimal(this.get(name).value).plus(amount));
    }
    get queueLoopDelta() {
        if (Object.keys(this.lastResources).length == 0 ||
            Object.keys(this.lastStats).length == 0) {
            return {};
        }
        const resourceDelta = Object.fromEntries(Object.values(this.resources).reduce((acc, resource) => {
            return acc.concat([
                [
                    resource.name,
                    {
                        value: resource.value.minus(this.lastResources[resource.name].value),
                        capacity: resource.capacity.minus(this.lastResources[resource.name].capacity),
                    },
                ],
            ]);
        }, []));
        const statDelta = Object.fromEntries(Object.values(this.stats).reduce((acc, stat) => {
            return acc.concat([
                [
                    stat.name,
                    {
                        value: stat.value.minus(this.lastStats[stat.name].value),
                    },
                ],
            ]);
        }, []));
        return {
            distance: {
                displayName: 'Distance',
                value: this.distance.minus(this.lastDistance),
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
        ];
    }
    log(msg, tags = new Set()) {
        var _a, _b;
        if (Array.isArray(tags)) {
            tags = new Set(tags.map((tag) => tag.toLowerCase()));
        }
        const logEntry = document.createElement('ri-log-entry');
        logEntry.msg = msg;
        logEntry.datetime = Date.now();
        logEntry.tick = this.tick;
        logEntry.life = this.life;
        logEntry.tags = tags;
        this.logEntries.push(logEntry);
        this.requestUpdate();
        (_a = this.logElement) === null || _a === void 0 ? void 0 : _a.requestUpdate();
        (_b = this.activityLogElement) === null || _b === void 0 ? void 0 : _b.requestUpdate();
    }
    /** Unlocks a game feature panel */
    unlockPanel(panelId) {
        var _a;
        const panel = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(panelId);
        if (panel === null || panel === void 0 ? void 0 : panel.classList.contains('locked')) {
            panel.classList.remove('locked');
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
            capacity: new Decimal(10),
            value: new Decimal(10),
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
            capacity: new Decimal(10),
            onMaxCapacity: () => {
                this.resources.healthExp.value = this.resources.healthExp.value.minus(this.resources.healthExp.capacity);
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
            displayName: 'Nutrition',
            description: 'You need this to live.<br>Eat stuff to get more. You can find food in the forest (among other places).',
            capacity: new Decimal(4e3),
            value: new Decimal(4e3),
            onTick: () => {
                // Hunger
                if (this.tick.toNumber() % 1 == 0)
                    this.resources.nutrition.value =
                        this.resources.nutrition.value.minus(1);
                if (this.resources.nutrition.value.lte(0)) {
                    this.log("You're starving! Find some food, quick!");
                    this.gain('health', -1);
                }
                // TODO add ascetic/masochistic rewards for hunger? monk stuff?
                // TODO!!!! Karma as a hidden multi-life luck element
            },
            secret: true,
            conditionString: `Less than 90% Nutrition`,
            condition: () => this.resources.nutrition.value.lt(this.resources.nutrition.capacity.times(0.9)),
            visibleCondition: () => this.resources.nutrition.value.lt(this.resources.nutrition.capacity.times(0.9)),
            persistentValue: false,
            persistentUnlock: true,
        });
        this.resources.meat = document.createElement('ri-resource');
        this.resources.meat.classList.add('meat');
        Object.assign(this.resources.meat, {
            name: 'meat',
            displayName: 'Meat',
            capacity: new Decimal(25),
            value: new Decimal(0),
            secret: true,
            conditionString: `Find Meat`,
            condition: () => this.resources.meat.value.gt(0),
            visibleCondition: () => this.resources.meat.value.gt(0),
        });
        this.resources.manameat = document.createElement('ri-resource');
        this.resources.manameat.classList.add('manameat');
        Object.assign(this.resources.manameat, {
            name: 'manameat',
            displayName: 'Manameat',
            capacity: new Decimal(10),
            value: new Decimal(0),
            secret: true,
            conditionString: `Find Manameat`,
            condition: () => this.resources.manameat.value.gt(0),
            visibleCondition: () => this.resources.manameat.value.gt(0),
        });
        this.resources.berry = document.createElement('ri-resource');
        this.resources.berry.classList.add('berry');
        Object.assign(this.resources.berry, {
            name: 'berry',
            displayName: 'Berries',
            description: `Some wild berries. Nutritious and delicious!<br>`,
            capacity: new Decimal(100),
            value: new Decimal(0),
            secret: true,
            conditionString: `Find Berries`,
            condition: () => this.resources.berry.value.gt(0),
            visibleCondition: () => this.resources.berry.value.gt(0),
        });
        // Stamina
        this.resources.stamina = document.createElement('ri-resource');
        this.resources.stamina.classList.add('stamina');
        Object.assign(this.resources.stamina, {
            name: 'stamina',
            displayName: 'Stamina',
            description: 'The energy your body uses for physical activity',
            capacity: new Decimal(1),
            value: new Decimal(1),
        });
        //Stamina XP
        this.resources.staminaExp = document.createElement('ri-resource');
        this.resources.staminaExp.classList.add('staminaExp');
        Object.assign(this.resources.staminaExp, {
            name: 'staminaExp',
            displayName: 'Stamina XP',
            description: 'Max XP increases Stamina capacity',
            capacity: new Decimal(5),
            value: new Decimal(0),
            onMaxCapacity: () => {
                this.resources.staminaExp.value = this.resources.staminaExp.value.minus(this.resources.staminaExp.capacity);
                const oldCapacity = this.resources.stamina.capacity;
                // Add 10% but at least +1 Stamina
                this.resources.stamina.capacity = oldCapacity
                    .times(1.1)
                    .floor()
                    .max(oldCapacity.plus(1));
                this.log(`Increase Stamina Capacity by ${this.resources.stamina.capacity.minus(oldCapacity)}!`, ['stamina', 'capacity']);
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
            capacity: new Decimal(100),
            value: new Decimal(0),
            conditionString: 'Train 20 times',
            condition: () => this.activities.trainSpeed.uses.plus(this.activities.trainStrength.uses) > 20,
            // Visible if some 'train' activity is unlocked
            visibleCondition: () => Object.values(this.activities).some((activity) => activity.tags.has('train') && activity.unlocked),
        });
        this.resources.mana = document.createElement('ri-resource');
        this.resources.mana.classList.add('mana');
        Object.assign(this.resources.mana, {
            name: 'mana',
            displayName: 'Mana',
            capacity: new Decimal(10),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Unlock Meditate',
            condition: () => this.activities.meditate.unlocked,
            visibleCondition: () => this.activities.meditate.unlocked,
            persistentUnlock: true,
        });
        // Mana XP
        this.resources.manaExp = document.createElement('ri-resource');
        this.resources.manaExp.classList.add('manaExp');
        Object.assign(this.resources.manaExp, {
            name: 'manaExp',
            displayName: 'Mana XP',
            capacity: new Decimal(10),
            onMaxCapacity: () => {
                this.resources.manaExp.value = this.resources.manaExp.value.minus(this.resources.manaExp.capacity);
                const oldCapacity = this.resources.mana.capacity;
                this.resources.mana.capacity = this.resources.mana.capacity.plus(1);
                this.log(`Increase Mana Capacity by ${this.resources.mana.capacity.minus(oldCapacity)}!`, ['mana', 'capacity']);
                this.resources.manaExp.capacity = this.resources.manaExp.capacity
                    .times(1.2)
                    .floor();
            },
            value: new Decimal(0),
            secret: true,
            conditionString: 'Unlock Mana',
            condition: () => this.resources.mana.unlocked,
            visibleCondition: () => this.resources.mana.unlocked,
            persistentUnlock: true,
        });
        // Mana Depth
        this.resources.manaDepth = document.createElement('ri-resource');
        this.resources.manaDepth.classList.add('manaDepth');
        Object.assign(this.resources.manaDepth, {
            name: 'manaDepth',
            displayName: 'Mana Density',
            capacity: new Decimal(100),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Meditate 100 times',
            condition: () => this.activities.meditate.uses.gt(100),
            visibleCondition: () => this.activities.meditate.unlocked,
            persistentUnlock: true,
        });
        // Sanity
        this.resources.sanity = document.createElement('ri-resource');
        this.resources.sanity.classList.add('sanity');
        Object.assign(this.resources.sanity, {
            name: 'sanity',
            displayName: 'Sanity',
            capacity: new Decimal(10),
            value: new Decimal(10),
            secret: true,
            conditionString: 'Go insane',
            condition: () => this.resources.sanity.value.equals(0),
            visibleCondition: () => this.resources.sanity.value.equals(0),
            persistentUnlock: true,
            persistentValue: true,
        });
        // Time
        this.resources.time = document.createElement('ri-resource');
        this.resources.time.classList.add('time');
        Object.assign(this.resources.time, {
            name: 'time',
            displayName: 'Time',
            capacity: new Decimal(3600),
            value: new Decimal(0),
            secret: true,
            conditionString: 'Save 5 minutes of time',
            condition: () => this.resources.time.value.gte(300),
            visibleCondition: () => this.resources.time.value.gte(60),
            persistentUnlock: true,
        });
        /** ADD STATS **/
        // TODO Control, unlockable ability to act like you have lower stats
        this.stats.speed = document.createElement('ri-stat');
        this.stats.speed.classList.add('speed');
        Object.assign(this.stats.speed, {
            name: 'speed',
            displayName: 'Speed',
            shortName: 'SPD',
            value: new Decimal(1),
            description: "Increases distance traveled per second, but doesn't make it any easier.",
        });
        this.stats.strength = document.createElement('ri-stat');
        this.stats.strength.classList.add('strength');
        Object.assign(this.stats.strength, {
            name: 'strength',
            displayName: 'Strength',
            shortName: 'STR',
            description: 'For many things, improves how much you can do per second.',
            value: new Decimal(1),
            conditionString: 'Stamina capacity over 10',
            condition: () => this.resources.stamina.capacity.gte(10),
            visibleCondition: () => this.resources.stamina.capacity.gte(5),
        });
        this.stats.constitution = document.createElement('ri-stat');
        this.stats.constitution.classList.add('constitution');
        Object.assign(this.stats.constitution, {
            name: 'constitution',
            displayName: 'Constitution',
            shortName: 'CON',
            description: 'Improves how much you can heal and restore yourself per second.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Gain some Consitution',
            condition: () => this.stats.constitution.value.gt(1),
            visibleCondition: () => this.stats.constitution.value.gt(1),
        });
        this.stats.wisdom = document.createElement('ri-stat');
        this.stats.wisdom.classList.add('wisdom');
        Object.assign(this.stats.wisdom, {
            name: 'wisdom',
            displayName: 'Wisdom',
            shortName: 'WIS',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Meditate to a depth of 10',
            condition: () => this.resources.manaDepth.value.gte(10),
            visibleCondition: () => this.resources.manaDepth.unlocked,
            persistentUnlock: true,
            persistentValue: true,
        });
        this.stats.perception = document.createElement('ri-stat');
        this.stats.perception.classList.add('perception');
        Object.assign(this.stats.perception, {
            name: 'perception',
            displayName: 'Perception',
            shortName: 'PER',
            description: 'See more better.',
            value: new Decimal(1),
            secret: true,
            conditionString: 'Click a secret!',
            condition: () => this.stats.perception.value.gt(1),
            visibleCondition: () => this.stats.perception.value.gt(1),
            persistentUnlock: true,
            persistentValue: true,
        });
        this.activities = {};
        const activityNames = [
            'rest',
            'meditate',
            'walkingMeditation',
            'walk',
            'jog',
            'run',
            'trainStrength',
            'trainSpeed',
            'hunt',
            'gather',
            'eat',
            'fight',
        ];
        for (const activityName of activityNames) {
            this.activities[activityName] = document.createElement('ri-activity');
            const activity = this.activities[activityName];
            activity.setAttribute('name', activityName);
            activity.classList.add('activity', activityName);
            // Note that the following must be a => function for correct scoping of 'this'
            activity.addEventListener('activity-clicked', (event) => {
                const newActivityQueueItem = document.createElement('ri-activity-queue-item');
                if (event.target)
                    newActivityQueueItem.activity = event.target;
                this.activityQueue.push(newActivityQueueItem);
                this.requestUpdate();
            });
        }
        Object.assign(this.activities.rest, {
            displayName: 'Rest',
            description: 'Rest a while.',
            baseEffectString: 'Gain up to 5 stamina.',
            tooltipContent: () => {
                return `
      Constitution * Base = Stamina Gained
      <br>${this.stats.constitution.value.toFixed(2)} * ${5} = ${this.stats.constitution.value.times(5).toFixed(2)}
        `;
            },
            effect: new Map([
                [
                    'staminaExp',
                    (ri) => Decimal.min(ri.resources.stamina.vacancy, ri.stats.constitution.value.times(5)),
                ],
                ['stamina', (ri) => ri.stats.constitution.value.times(5)],
                ['health', (_ri) => 1],
            ]),
        });
        Object.assign(this.activities.walk, {
            displayName: 'Walk',
            description: 'A leisurely stroll',
            baseEffectString: 'Travel 1 meter for 1 stamina.',
            tooltipContent: () => {
                const staminaCost = this.stats.speed.value
                    .times(1)
                    .div(this.stats.strength.value);
                const distanceTraveled = this.stats.speed.value.times(1);
                return `
        Speed * Base = Distance Traveled
        <br> ${this.stats.speed.valueHTML} * ${1} = ${distanceTraveled.toFixed(2)}
        <br>Speed * Base / Strength = Stamina Cost
        <br> ${this.stats.speed.valueHTML} * ${1} / ${this.stats.strength.valueHTML} = <span class='stamina'>${staminaCost.toFixed(2)}</span>
        <br> Efficiency: ${distanceTraveled
                    .div(staminaCost)
                    .toFixed(2)} meters per stamina
        <br> Speed: ${distanceTraveled
                    .div(this.activities.walk.length)
                    .toFixed(2)} meters per second
`;
            },
            cost: new Map([
                ['stamina', (ri) => ri.stats.speed.value.div(ri.stats.strength.value)],
            ]),
            effect: new Map([['distance', (ri) => ri.stats.speed.value]]),
        });
        Object.assign(this.activities.jog, {
            displayName: 'Jog',
            description: 'A swift jog. Self-improvement!',
            baseEffectString: 'Travel 3 meters for 5 stamina.',
            tooltipContent: () => {
                const baseStaminaCost = 5;
                const baseDistance = 3;
                const staminaCost = this.stats.speed.value
                    .times(baseStaminaCost)
                    .div(this.stats.strength.value);
                const distanceTraveled = this.stats.speed.value.times(baseDistance);
                return `
        Speed * Base = Distance Traveled
        <br> ${this.stats.speed.valueHTML} * ${baseDistance} = <span class='distance'>${distanceTraveled.toFixed(2)}</span>
        <br>Speed * Base / Strength = Stamina Cost
        <br> ${this.stats.speed.valueHTML} * ${baseStaminaCost.toFixed(2)} / ${this.stats.strength.valueHTML} = <span class='stamina'>${staminaCost.toFixed(2)}</span>
        <br> Efficiency: ${distanceTraveled
                    .div(staminaCost)
                    .toFixed(2)} meters per stamina
        <br> Speed: ${distanceTraveled
                    .div(this.activities.jog.length)
                    .toFixed(2)} meters per second
        <br>
        <br>Has a tiny effect on some stats.
    `;
            },
            cost: new Map([
                [
                    'stamina',
                    (ri) => ri.stats.speed.value.div(ri.stats.strength.value).times(5),
                ],
            ]),
            effect: new Map([
                ['distance', (ri) => ri.stats.speed.value.times(3)],
                ['constitution', (_ri) => _ri.stats.speed.value.times(3).times(0.0001)],
            ]),
            // The extra space is to pad the number substring so lexicographical ordering preserves numeric ordering
            conditionString: 'Stamina capacity over  5',
            condition: () => this.resources.stamina.capacity.gte(5),
        });
        Object.assign(this.activities.run, {
            displayName: 'Run',
            description: "Going fast now! Don't hurt yourself!",
            baseEffectString: 'Travel 5 meters for 10 stamina.',
            tooltipContent: () => {
                const baseStaminaCost = 10;
                const baseDistance = 5;
                const staminaCost = this.stats.speed.value
                    .times(baseStaminaCost)
                    .div(this.stats.strength.value);
                const distanceTraveled = this.stats.speed.value.times(baseDistance);
                return `
        Speed * Base = Distance Traveled
        <br> ${this.stats.speed.valueHTML} * ${baseDistance} = <span class='distance'>${distanceTraveled.toFixed(2)}</span>
        <br>Speed * Base / Strength = Stamina Cost
        <br> ${this.stats.speed.valueHTML} * ${baseStaminaCost} / ${this.stats.strength.valueHTML} = <span class='stamina'>${staminaCost.toFixed(2)}</span>
        <br> Efficiency: ${distanceTraveled
                    .div(staminaCost)
                    .toFixed(2)} meters per stamina
        <br> Speed: ${distanceTraveled
                    .div(this.activities.run.length)
                    .toFixed(2)} meters per second
        <br>
        <br>Has a tiny effect on some stats.
    `;
            },
            cost: new Map([
                [
                    'stamina',
                    (ri) => ri.stats.speed.value.div(ri.stats.strength.value).times(10),
                ],
            ]),
            effect: new Map([
                ['distance', (ri) => ri.stats.speed.value.times(5)],
                ['constitution', (ri) => ri.stats.speed.value.times(5).times(0.0001)],
            ]),
            onCannotAfford: (ri) => {
                ri.log('You need more Stamina to Run.');
                return false;
            },
            // The extra space is to pad the number substring so lexicographical ordering preserves numeric ordering
            conditionString: 'Stamina capacity over 20',
            condition: () => this.resources.stamina.capacity.gte(20),
            visibleCondition: () => this.resources.stamina.capacity.gte(15),
        });
        Object.assign(this.activities.trainSpeed, {
            displayName: 'Train Speed',
            length: 5,
            description: 'Windspriiiiiiints!',
            baseEffectString: 'Train 0.05 speed for 10 stamina over 5 seconds',
            tooltipContent: () => {
                return `(100 + Focus)% * Base = Total Speed Gained
        <br> ${this.resources.focus.value
                    .div(100)
                    .plus(1)} * ${0.05} = <span class='speed'>${formatStat(this.resources.focus.value.div(100).plus(1).times(0.05))}</span>
        <br>Stamina Cost
        <br>2 per second * 5 seconds = 10 total
        `;
            },
            tags: new Set(['train']),
            cost: new Map([['stamina', () => 2]]),
            effect: new Map([
                [
                    'speed',
                    (ri, step) => step == 0
                        ? ri.resources.focus.value.div(100).plus(1).times(0.04)
                        : ri.resources.focus.value.div(100).plus(1).times(0.01),
                ],
            ]),
            conditionString: 'Stamina capacity over 15',
            condition: () => this.resources.stamina.capacity.gte(15),
            visibleCondition: () => this.resources.stamina.capacity.gte(10),
        });
        Object.assign(this.activities.trainStrength, {
            displayName: 'Train Strength',
            length: 5,
            description: 'Do you even lift?',
            baseEffectString: 'Train 0.05 strength for 10 stamina over 5 seconds.',
            tooltipContent: () => {
                return `(100 + Focus)% * Base = Total Strength Gained
        <br> ${this.resources.focus.value
                    .div(100)
                    .plus(1)} * ${0.05} = <span class='strength'>${formatStat(this.resources.focus.value.div(100).plus(1).times(0.05))}</span>
        <br>Stamina Cost
        <br>2 per second * 5 seconds = 10 total`;
            },
            tags: new Set(['train']),
            cost: new Map([['stamina', () => 2]]),
            effect: new Map([
                [
                    'strength',
                    (ri, step) => step == 0
                        ? ri.resources.focus.value.div(100).plus(1).times(0.04)
                        : ri.resources.focus.value.div(100).plus(1).times(0.01),
                ],
            ]),
            conditionString: 'Strength unlocked',
            condition: () => this.stats.strength.unlocked,
            visibleCondition: () => this.stats.strength.unlocked,
        });
        Object.assign(this.activities.meditate, {
            displayName: 'Meditate',
            description: 'Sit',
            baseEffectString: 'Gain 1 mana.',
            tooltipContent: () => {
                return ``;
            },
            tags: new Set(['meditate']),
            effect: new Map([
                ['mana', (ri) => ri.stats.wisdom.value],
                ['manaExp', (ri) => ri.stats.wisdom.value],
                ['wisdom', () => 0.001],
            ]),
            secret: true,
            conditionString: 'Rest 1000 times',
            condition: () => this.activities.rest.uses.gte(1000),
            visibleCondition: () => this.activities.rest.uses.gte(100),
            persistentUnlock: false,
        });
        Object.assign(this.activities.walkingMeditation, {
            displayName: 'Walking Meditation',
            description: 'Walk',
            tags: new Set(['meditate']),
            effect: new Set([
                ['distance', (ri) => ri.stats.wisdom.value],
                ['mana', (ri) => ri.stats.wisdom.value],
                ['manaExp', (ri) => ri.stats.wisdom.value],
            ]),
            secret: true,
            conditionString: 'Walked 1000 times and meditated 1000 times',
            condition: () => this.activities.walk.uses.gte(1000) &&
                this.activities.meditate.uses.gte(1000),
            visibleCondition: () => this.activities.walk.unlocked && this.activities.meditate.unlocked,
        });
        Object.assign(this.activities.fight, {
            displayName: 'Fight',
            conditionString: 'Find the arena',
            condition: () => false,
            visibleCondition: () => this.distance.gte(1000),
        });
        Object.assign(this.activities.hunt, {
            displayName: 'Hunt',
            description: 'Hunt animals.',
            baseEffectString: 'Rabbit - Gain 1 meat for 10 stamina over 5 seconds.',
            tooltipContent: () => `Costs Stamina each second. At the end of the hunt, you gain the rewards.`,
            length: 5,
            options: ['rabbit'],
            perform: (ri, step, optionIndex) => {
                if (ri.resources.stamina.value.gte(2)) {
                    ri.gain('stamina', -2);
                    if (step != 0) {
                        ri.log('Stalking your prey... Costs 2 stamina.', [
                            'stamina',
                            'activity',
                        ]);
                        return true;
                    }
                    let meatGained;
                    switch (ri.activities.hunt.options[optionIndex]) {
                        case 'rabbit':
                            meatGained = ri.gain('meat', Math.random() < 0.9 ? 1 : 0);
                            ri.log(`You hunt a rabbit.Gain ${meatGained} meat.`, [
                                'meat',
                                'activity',
                            ]);
                            break;
                        case 'deer':
                            meatGained = ri.gain('meat', Math.random() < 0.2 ? 5 : 0);
                            ri.log(`You hunt a deer.Gain ${meatGained} meat.`, [
                                'meat',
                                'activity',
                            ]);
                            break;
                        case 'slime':
                            meatGained = ri.gain('manameat', 1);
                            ri.log(`You hunt a slime.Gain ${meatGained} manameat.`, [
                                'manameat',
                                'activity',
                            ]);
                            break;
                    }
                    return true;
                }
                else {
                    if (step != 0) {
                        ri.log('You can barely keep your eyes open.', [
                            'stamina',
                            'activity',
                        ]);
                        return false;
                    }
                    ri.log('You are too tired to continue and your prey escapes.', [
                        'stamina',
                        'activity',
                    ]);
                    return false;
                }
            },
            conditionString: 'Reach the forest (1km)',
            condition: () => false,
        });
        Object.assign(this.activities.gather, {
            displayName: 'Gather',
            description: 'Gather food.',
            baseEffectString: 'Berries - 50% chance each second to get one Berries for 2 Stamina. 5 seconds each time.',
            tooltipContent: () => `Costs Stamina each second. Randomly find rewards.`,
            length: 5,
            options: ['berry'],
            perform: (ri, step, optionIndex) => {
                if (ri.resources.stamina.value.gte(2)) {
                    ri.gain('stamina', -2);
                    if (Math.random() < 0.5) {
                        ri.log('Searching for food... Costs 2 stamina.', [
                            'stamina',
                            'activity',
                        ]);
                        return true;
                    }
                    let berryGained;
                    switch (ri.activities.gather.options[optionIndex]) {
                        case 'berry':
                            berryGained = ri.gain('berry', 1);
                            ri.log(`You find some berries! Gain ${berryGained} berries.`, [
                                'berry',
                                'activity',
                            ]);
                            break;
                        default:
                            ri.log('You find nothing.', ['activity']);
                            break;
                    }
                    return true;
                }
                else {
                    if (step != 0) {
                        ri.log('You can barely keep your eyes open.', [
                            'stamina',
                            'activity',
                        ]);
                        return false;
                    }
                    ri.log('You are too tired to continue and you stumble away empty-handed.', ['stamina', 'activity']);
                    return false;
                }
            },
            secret: true,
            conditionString: 'Have perception above 2',
            condition: () => this.stats.perception.value.gte(2),
            visibleCondition: () => this.stats.perception.value.gt(1),
        });
        Object.assign(this.activities.eat, {
            displayName: 'Eat',
            description: 'Eat some food.',
            baseEffectString: `Meat - 100 Nutrition - Gain 0.01 Constitution.
      <br>Berries - 50 Nutrition - Gain 0.01 Wisdom.`,
            tooltipContent: () => `If you're too full, you won't eat anything.`,
            options: ['meat', 'berry'],
            perform: (ri, step, optionIndex) => {
                const options = ri.activeActivity.options;
                const option = options[optionIndex];
                const resource = this.resources[option];
                const nutritionNeededMap = { meat: 100, berry: 50 };
                if (ri.resources.nutrition.vacancy.lt(nutritionNeededMap[option])) {
                    ri.log(`You are too full to eat any more ${option}.`, [
                        'nutrition',
                        option,
                        'activity',
                    ]);
                    return false;
                }
                let nutritionGained, constitutionGained;
                if (resource.value.gte(1)) {
                    resource.value = resource.value.minus(1);
                    switch (resource.name) {
                        case 'meat':
                            nutritionGained = ri.gain('nutrition', 100);
                            constitutionGained = 0.01;
                            ri.stats.constitution.value =
                                ri.stats.constitution.value.plus(constitutionGained);
                            ri.log(`You eat some meat. Gain ${nutritionGained.toFixed(2)} Nutrition. Gain ${constitutionGained.toFixed(2)} Constitution`, ['nutrition', 'activity']);
                            break;
                        case 'berry':
                            nutritionGained = ri.gain('nutrition', 50);
                            ri.stats.wisdom.value = ri.stats.wisdom.value.plus(0.01);
                            ri.log('You eat some berries. Gain 50 nutrition. You feel a little different.', ['nutrition', 'berry', 'activity']);
                            ri.gain('mana', 5);
                            ri.gain('manaExp', 1);
                            break;
                    }
                    return true;
                }
            },
            conditionString: 'Find something edible',
            condition: () => this.resources.meat.value.gte(1) || this.resources.berry.value.gte(1),
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
        this.addEventListener('queue-item-split', (event) => {
            const originalQueueItem = event.composedPath()[0];
            const copyQueueItem = document.createElement('ri-activity-queue-item');
            const queueItemIndex = this.activityQueue.findIndex((queueItem) => queueItem == originalQueueItem);
            copyQueueItem.activity = originalQueueItem.activity;
            copyQueueItem.repeat = Math.floor(originalQueueItem.repeat / 2);
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
        // Listen for unlockable-hover events to update the unlockable to be not new
        this.addEventListener('unlockable-hover', (event) => {
            const e = event;
            const unlockable = this.unlockables.find((unlockable) => unlockable.name == e.detail.name);
            if (unlockable)
                unlockable.new = false;
        });
        this.addEventListener('unlockable-unlocked', (_) => {
            var _a, _b;
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ri-unlockables')) === null || _b === void 0 ? void 0 : _b.requestUpdate();
        });
    }
    togglePause() {
        if (this.gameSpeed == 0)
            this.gameSpeed = 1;
        else if (this.gameSpeed == 1)
            this.gameSpeed = 0;
    }
    load(saveGame) {
        if (saveGame.version == 1) {
            // Patch from v1 to v2
            saveGame.log = saveGame.log.slice(-100);
        }
        lastTime = saveGame.lastTime;
        this.life = saveGame.life;
        this.tick = new Decimal(saveGame.tick);
        this.distance = new Decimal(saveGame.distance);
        this.nextLandmark = new Decimal(saveGame.nextLandmark);
        for (const resourceData of saveGame.resources) {
            const resource = this.resources[resourceData.name];
            if (resource) {
                resource.capacity = new Decimal(resourceData.capacity);
                resource.value = new Decimal(resourceData.value);
                resource.unlocked = resourceData.unlocked;
                resource.secret = resourceData.secret;
            }
        }
        for (const activityData of saveGame.activities) {
            const activity = this.activities[activityData.name];
            if (activity) {
                activity.uses = new Decimal(activityData.uses);
                activity.unlocked = activityData.unlocked;
                activity.secret = activityData.secret;
            }
        }
        for (const statData of saveGame.stats) {
            const stat = this.stats[statData.name];
            if (stat) {
                stat.value = new Decimal(statData.value);
                stat.unlocked = statData.unlocked;
                stat.secret = statData.secret;
            }
        }
        this.activityQueue = [];
        for (const queueItemData of saveGame.activityQueue) {
            const queueItem = document.createElement('ri-activity-queue-item');
            queueItem.activity = this.activities[queueItemData.name];
            queueItem.repeat = queueItemData.repeat;
            queueItem.activeIndex = 0;
            queueItemData.activeIndex;
            this.activityQueue.push(queueItem);
        }
        function logEntryFromSave(entryData) {
            const logEntry = document.createElement('ri-log-entry');
            logEntry.msg = entryData.msg;
            logEntry.tick = entryData.tick;
            logEntry.tags = new Set(entryData.tags);
            return logEntry;
        }
        if (saveGame.log) {
            this.logEntries = saveGame.log.map((entry) => logEntryFromSave(entry));
            this.logElement.entries = this.logEntries;
            this.activityLogElement.entries = this.logEntries;
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
    firstUpdated() {
        if (this.shadowRoot)
            tippy(this.shadowRoot.querySelectorAll('[data-tippy-content]'));
    }
    render() {
        var _a;
        return $ `
      <div id="speed-controls">
        <div
          id="speed-select"
          @click=${(e) => {
            this.gameSpeed = e.composedPath()[0].getAttribute('data-value');
        }}
        >
          <div
            class="button speed-select-item ${this.gameSpeed == 0 ? 'selected' : w}"
            data-value=${0}
            data-tippy-content="Accumulate Time."
          >
            ⏸
          </div>
          <div
            class="button speed-select-item ${this.gameSpeed == 1 ? 'selected' : w}"
            data-value=${1}
            data-tippy-content="Each tick, one second passes."
          >
            ▶
          </div>
          <!-- <div class="button speed-select-item" data-value=${2}>2x</div>
          <div class="button speed-select-item" data-value=${5}>5x</div>
          <div class="button speed-select-item" data-value=${10}>10x</div> -->
        </div>
        Time: ${this.tick.times(tickLength / 1000)}s Saved time:
        ${this.resources.time.value.floor()}s
        <input
          type="checkbox"
          class="filter"
          id="use-saved-time"
          @change=${(e) => {
            this.useSavedTime = e.target.checked;
        }}
        /><label for="use-saved-time">Use Saved Time</label>
      </div>
      <div id="resources">
        <h4>Resources</h4>
        ${Object.values(this.resources)}
      </div>
      <div id="world" class="locked">
        <h4>World</h4>
      </div>
      <div id="stats" class="locked">
        <h4>Stats</h4>
        ${Object.values(this.stats)}
      </div>
      <div id="activities" class="locked">
        <h4>Activities <span>- Drag to the queue</span></h4>
        <div id="activities-container">${Object.values(this.activities)}</div>
      </div>
      <div id="activity-queue-container">
        <div id="activity-queue-header">
          <h4>
            Activity Queue<span>
              - Your plan of action! - If this starts acting weird, refresh the
              page! Your game saves every tick.</span
            >
          </h4>
          <span
            >${this.activityQueue.reduce((acc, queueItem, i) => i < this.activityQueueIndex
            ? acc + queueItem.totalLength
            : acc, 0) + ((_a = this.activityQueue[this.activityQueueIndex]) === null || _a === void 0 ? void 0 : _a.activeIndex)}
            / ${this.activityQueue.reduce((acc, q) => acc + q.totalLength, 0)}
          </span>
        </div>
          <div id="activityQueue">${Object.values(this.activityQueue)}</div>
        </div>
        ${this.logElement}
        <!-- ${this.activityLogElement} -->
        <ri-unlockables
          id="unlockables"
          class="locked"
          .filterables=${this.unlockables}
          .entryClass=${'ri-unlockables-entry'}
        ></ri-unlockables>
        <div id="distance" class="distance">
          <h1>Distance: ${this.distance.floor()} m</h1>
          <progress
            id="distance-progress"
            value=${this.distance.valueOf()}
            max=${this.nextLandmark.valueOf()}
          ></progress>
          <h1>${this.nextLandmark.toFixed(0)} m</h1>
        </div>
        <div id="queue-loop-delta" class="locked">
          <h4>Net Changes Last Loop</h4>
          <div class=".container">
            ${o(Object.entries(this.lastQueueLoopDelta)
            .filter((entry) => !entry[1].value.equals(0) ||
            (entry[1].capacity && !entry[1].capacity.equals(0)))
            // Repeatedly searching like this is expensive
            .filter((entry) => {
            const unlockable = this.unlockables.find((e) => e.name == entry[0]);
            if (unlockable)
                return unlockable.unlocked;
            return true;
        })
            .map((entry) => {
            var _a;
            const unlockable = this.unlockables.find((e) => e.name == entry[0]);
            return `
                <div class='row ${entry[0]}'>
                <span class='label'>${unlockable ? unlockable.displayName : entry[1].displayName}</span>
                <span>${formatDelta(entry[1].value)}</span>
                <span>${((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.capacity) && !entry[1].capacity.equals(0)
                ? ` Capacity ${formatDelta(entry[1].capacity)}`
                : ''}</span>
                <span>${entry[1].value
                .div(this.activityQueue.reduce((acc, el) => el.totalLength + acc, 0))
                .toFixed(4)}/s
                  </span>
                  </div>`;
        })
            .join(''))}
          </div>
        </div>
      </div>
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
            @click=${(_) => {
            localStorage.removeItem('saveGame');
            window.location.reload();
        }}
          >
            Wipe and Reload
          </button>
          <button
            @click=${(_) => {
            this.unlockables.forEach((unlockable) => unlockable.tryUnlock(true));
        }}
          >
            Unlock all unlockables
          </button>
          <button @click=${this.reincarnate}>Reincarnate</button>
        </div>
        <button
          @click=${(_) => {
            window.open('https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1', undefined, 'popup');
        }}
        >
          Don't click
        </button>
        <button
          @click=${(_) => {
            settings(this);
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
        grid-template-rows: 48px 1fr 1fr 1fr 12em;
        grid-column-gap: 12px;
        grid-row-gap: 8px;
        grid-template-areas:
          'speed-controls distance dev'
          'resources activity-queue right'
          'resources activity-queue right'
          'resources activity-queue right'
          'resources log right';
        height: 100%;
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

      #activity-queue-container {
        grid-area: activity-queue;
        overflow-y: auto;
      }

      #activity-queue-header {
        display: flex;
        justify-content: space-between;
      }

      #activityQueue {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: start;
        gap: 2px;
      }

      #activity-queue-container.drag-hover {
        background: #0002;
      }

      #activityQueue activity-queue-item {
        margin: 4px;
      }

      ri-log {
        grid-area: log;
      }

      ri-log#activity-log {
        grid-area: activity-log;
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

      #queue-loop-delta {
        grid-area: queue-loop-delta;
      }

      #queue-loop-delta > .container {
        display: flex;
      }
      .row {
        display: flex;
        background-color: rgba(var(--value-color), 0.2);
      }
      .row .label {
        min-width: 10ch;
        width: 20ch;
        color: initial;
      }
      .row .label ~ * {
        min-width: 10ch;
        width: 10ch;
        font-weight: bolder;
      }
    `,
];
RunnerIdle = __decorate([
    n$1('runner-idle')
], RunnerIdle);

export { RunnerIdle };
//# sourceMappingURL=game.js.map
