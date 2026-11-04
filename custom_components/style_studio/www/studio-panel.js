var Is=Object.defineProperty;var Vs=(i,e,t)=>e in i?Is(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var g=(i,e,t)=>Vs(i,typeof e!="symbol"?e+"":e,t);var Ne=globalThis,Pe=Ne.ShadowRoot&&(Ne.ShadyCSS===void 0||Ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),Ct=new WeakMap,ae=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Pe&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ct.set(t,e))}return e}toString(){return this.cssText}},Et=i=>new ae(typeof i=="string"?i:i+"",void 0,tt),v=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,a,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[o+1],i[0]);return new ae(t,i,tt)},zt=(i,e)=>{if(Pe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),a=Ne.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=t.cssText,i.appendChild(s)}},st=Pe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return Et(t)})(i):i;var{is:Fs,defineProperty:Ks,getOwnPropertyDescriptor:Js,getOwnPropertyNames:qs,getOwnPropertySymbols:Ys,getPrototypeOf:Zs}=Object,De=globalThis,Tt=De.trustedTypes,Xs=Tt?Tt.emptyScript:"",Qs=De.reactiveElementPolyfillSupport,ie=(i,e)=>i,at={toAttribute(i,e){switch(e){case Boolean:i=i?Xs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ot=(i,e)=>!Fs(i,e),jt={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:Ot};Symbol.metadata??=Symbol("metadata"),De.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,t);a!==void 0&&Ks(this.prototype,e,a)}}static getPropertyDescriptor(e,t,s){let{get:a,set:o}=Js(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){let l=a?.call(this);o?.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jt}static _$Ei(){if(this.hasOwnProperty(ie("elementProperties")))return;let e=Zs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie("properties"))){let t=this.properties,s=[...qs(t),...Ys(t)];for(let a of s)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,a]of t)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let a=this._$Eu(t,s);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)t.unshift(st(a))}else e!==void 0&&t.push(st(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:at).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,t){let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let o=s.getPropertyOptions(a),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:at;this._$Em=a;let l=r.fromAttribute(t,o.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,s,a=!1,o){if(e!==void 0){let r=this.constructor;if(a===!1&&(o=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??Ot)(o,t)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:a,wrapped:o},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[a,o]of s){let{wrapped:r}=o,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[ie("elementProperties")]=new Map,T[ie("finalized")]=new Map,Qs?.({ReactiveElement:T}),(De.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,Nt=i=>i,Be=ot.trustedTypes,Pt=Be?Be.createPolicy("lit-html",{createHTML:i=>i}):void 0,rt="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+j,ea=`<${nt}>`,R=document,re=()=>R.createComment(""),ne=i=>i===null||typeof i!="object"&&typeof i!="function",lt=Array.isArray,Wt=i=>lt(i)||typeof i?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Bt=/>/g,H=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ht=/'/g,Mt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,ct=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),n=ct(1),La=ct(2),Ga=ct(3),$=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Rt=new WeakMap,M=R.createTreeWalker(R,129);function Gt(i,e){if(!lt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(e):e}var Ut=(i,e)=>{let t=i.length-1,s=[],a,o=e===2?"<svg>":e===3?"<math>":"",r=oe;for(let l=0;l<t;l++){let c=i[l],d,m,p=-1,_=0;for(;_<c.length&&(r.lastIndex=_,m=r.exec(c),m!==null);)_=r.lastIndex,r===oe?m[1]==="!--"?r=Dt:m[1]!==void 0?r=Bt:m[2]!==void 0?(Lt.test(m[2])&&(a=RegExp("</"+m[2],"g")),r=H):m[3]!==void 0&&(r=H):r===H?m[0]===">"?(r=a??oe,p=-1):m[1]===void 0?p=-2:(p=r.lastIndex-m[2].length,d=m[1],r=m[3]===void 0?H:m[3]==='"'?Mt:Ht):r===Mt||r===Ht?r=H:r===Dt||r===Bt?r=oe:(r=H,a=void 0);let u=r===H&&i[l+1].startsWith("/>")?" ":"";o+=r===oe?c+ea:p>=0?(s.push(d),c.slice(0,p)+rt+c.slice(p)+j+u):c+j+(p===-2?l:u)}return[Gt(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},le=class i{constructor({strings:e,_$litType$:t},s){let a;this.parts=[];let o=0,r=0,l=e.length-1,c=this.parts,[d,m]=Ut(e,t);if(this.el=i.createElement(d,s),M.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=M.nextNode())!==null&&c.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(rt)){let _=m[r++],u=a.getAttribute(p).split(j),f=/([.?@])?(.*)/.exec(_);c.push({type:1,index:o,name:f[2],strings:u,ctor:f[1]==="."?Me:f[1]==="?"?Re:f[1]==="@"?We:L}),a.removeAttribute(p)}else p.startsWith(j)&&(c.push({type:6,index:o}),a.removeAttribute(p));if(Lt.test(a.tagName)){let p=a.textContent.split(j),_=p.length-1;if(_>0){a.textContent=Be?Be.emptyScript:"";for(let u=0;u<_;u++)a.append(p[u],re()),M.nextNode(),c.push({type:2,index:++o});a.append(p[_],re())}}}else if(a.nodeType===8)if(a.data===nt)c.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(j,p+1))!==-1;)c.push({type:7,index:o}),p+=j.length-1}o++}}static createElement(e,t){let s=R.createElement("template");return s.innerHTML=e,s}};function W(i,e,t=i,s){if(e===$)return e;let a=s!==void 0?t._$Co?.[s]:t._$Cl,o=ne(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(i),a._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=a:t._$Cl=a),a!==void 0&&(e=W(i,a._$AS(i,e.values),a,s)),e}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,a=(e?.creationScope??R).importNode(t,!0);M.currentNode=a;let o=M.nextNode(),r=0,l=0,c=s[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new F(o,o.nextSibling,this,e):c.type===1?d=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(d=new Le(o,this,e)),this._$AV.push(d),c=s[++l]}r!==c?.index&&(o=M.nextNode(),r++)}return M.currentNode=R,a}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},F=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,a){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),ne(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=le.createElement(Gt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(t);else{let o=new He(a,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=Rt.get(e.strings);return t===void 0&&Rt.set(e.strings,t=new le(e)),t}k(e){lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,a=0;for(let o of e)a===t.length?t.push(s=new i(this.O(re()),this.O(re()),this,this.options)):s=t[a],s._$AI(o),a++;a<t.length&&(this._$AR(s&&s._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Nt(e).nextSibling;Nt(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,a,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,a){let o=this.strings,r=!1;if(o===void 0)e=W(this,e,t,0),r=!ne(e)||e!==this._$AH&&e!==$,r&&(this._$AH=e);else{let l=e,c,d;for(e=o[0],c=0;c<o.length-1;c++)d=W(this,l[s+c],t,c),d===$&&(d=this._$AH[c]),r||=!ne(d)||d!==this._$AH[c],d===h?e=h:e!==h&&(e+=(d??"")+o[c+1]),this._$AH[c]=d}r&&!a&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Me=class extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Re=class extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},We=class extends L{constructor(e,t,s,a,o){super(e,t,s,a,o),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??h)===$)return;let s=this._$AH,a=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==h&&(s===h||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Le=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},It={M:rt,P:j,A:nt,C:1,L:Ut,R:He,D:Wt,V:W,I:F,H:L,N:Re,U:We,B:Me,F:Le},ta=ot.litHtmlPolyfillSupport;ta?.(le,F),(ot.litHtmlVersions??=[]).push("3.3.3");var Vt=(i,e,t)=>{let s=t?.renderBefore??e,a=s._$litPart$;if(a===void 0){let o=t?.renderBefore??null;s._$litPart$=a=new F(e.insertBefore(re(),o),o,void 0,t??{})}return a._$AI(i),a};var dt=globalThis,w=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};w._$litElement$=!0,w.finalized=!0,dt.litElementHydrateSupport?.({LitElement:w});var sa=dt.litElementPolyfillSupport;sa?.({LitElement:w});(dt.litElementVersions??=[]).push("4.2.2");var O={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=i=>(...e)=>({_$litDirective$:i,values:e}),K=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:aa}=It,Ft=i=>i;var Jt=i=>i.strings===void 0,Kt=()=>document.createComment(""),J=(i,e,t)=>{let s=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(t===void 0){let o=s.insertBefore(Kt(),a),r=s.insertBefore(Kt(),a);t=new aa(o,r,i,i.options)}else{let o=t._$AB.nextSibling,r=t._$AM,l=r!==i;if(l){let c;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==r._$AU&&t._$AP(c)}if(o!==a||l){let c=t._$AA;for(;c!==o;){let d=Ft(c).nextSibling;Ft(s).insertBefore(c,a),c=d}}}return t},D=(i,e,t=i)=>(i._$AI(e,t),i),ia={},Ue=(i,e=ia)=>i._$AH=e,qt=i=>i._$AH,Ie=i=>{i._$AR(),i._$AA.remove()};var C=Ge(class extends K{constructor(i){if(super(i),i.type!==O.PROPERTY&&i.type!==O.ATTRIBUTE&&i.type!==O.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Jt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===$||e===h)return e;let t=i.element,s=i.name;if(i.type===O.PROPERTY){if(e===t[s])return $}else if(i.type===O.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return $}else if(i.type===O.ATTRIBUTE&&t.getAttribute(s)===e+"")return $;return Ue(i),e}});var Yt="style-studio-popup-format";function ht(){try{return localStorage.getItem(Yt)!=="legacy"}catch{return!0}}function Zt(i){try{localStorage.setItem(Yt,i?"standalone":"legacy")}catch{}}function Ve(i,e,t=ht()){return t?{...i,cards:e}:{type:"vertical-stack",cards:[i,...e]}}function G(i){return i.type==="vertical-stack"?i.cards.slice(1):i.cards??[]}function Xt(i){if(i?.type==="custom:bubble-card"&&i.card_type==="pop-up")return i;let e=i?.type==="vertical-stack"?i.cards?.[0]:null;return e?.type==="custom:bubble-card"&&e.card_type==="pop-up"?e:null}var oa={title:"Stijl",next:"Volgende",back:"Terug",more_options:"Meer opties",what_to_do:"Wat wil je doen?",ip_choose:"Ander icoon kiezen",ip_search:"Zoek een icoon, bijvoorbeeld badkamer of zolder",ip_none:"Geen icoon gevonden.",tab_sidebar:"Zijbalk",tab_themes:"Thema's",tab_rooms:"Kamers en pop-ups",tab_climate:"Klimaat",tab_people:"Per persoon",tab_check:"Controle en herstel",coming:"Dit onderdeel komt in een volgende versie.",glass_intro:"De zijbalk wordt opgemaakt door de uitbreiding Glass Sidebar. Hier stel je die in; wijzigingen gelden voor iedereen en verschijnen direct. De kleuren van de zijbalk stel je in bij Thema's.",glass_missing_title:"Uitbreiding: Glass Sidebar",glass_missing:"Met de uitbreiding Glass Sidebar wordt je zijbalk een zwevend glazen paneel, met groepen en kopjes. Installeer hem via HACS en herstart Home Assistant; daarna stel je hem hier in. De kleuren van de zijbalk stel je ook zonder uitbreiding in bij Thema's.",glass_not_added_title:"Glass Sidebar is ge\xEFnstalleerd",glass_not_added:"Voeg hem nog toe: Instellingen \u203A Apparaten en diensten \u203A Integratie toevoegen \u203A Glass Sidebar. Daarna stel je hem hier in.",glass_not_loaded:"Glass Sidebar is uitgeschakeld of niet geladen. Je kunt instellingen opslaan, maar je ziet ze pas als Glass Sidebar weer draait.",glass_old:"Je hebt Glass Sidebar {version}. Style Studio is gemaakt voor {min} of nieuwer; werk Glass Sidebar bij via HACS. Opties die jouw versie nog niet kent, doen niets.",open_glass:"Alle instellingen van Glass Sidebar openen",open_glass_hint:"Daar staan ook stijlen, tint, iconen per groep, het snelmenu en meer telefoonopties. Hier stel je de basis in.",shape:"Vorm",floating:"Zwevend",floating_hint:"Een losse balk met ruimte eromheen.",inset:"Afstand tot de rand",radius:"Hoeken",glass:"Glas",blur:"Vervaging",opacity:"Dekking",opacity_hint:"Lager is meer doorzichtig.",glass_cards:"Glazen dashboardkaarten",glass_cards_hint:"Kaarten worden doorschijnend. Kan zwaar zijn op oudere tablets.",active:"Actieve pagina",highlight_soft:"Zacht",highlight_vivid:"Vol",own_accent:"Eigen kleur",own_accent_hint:"Uit: de kleur van het thema.",motion:"Iconen bewegen bij aanwijzen",phone:"Telefoon",phone_hint:"Voor schermen tot 600 pixels breed.",mobile_width:"Breedte van het menu",mobile_text_size:"Tekstgrootte",mobile_blur:"Pagina achter het menu vervagen",groups:"Groepen",groups_hint:"Sleep items naar een groep, of tik een item aan en kies Hierheen. Items zonder groep staan bovenaan.",ungrouped:"Zonder groep",ungrouped_hint:"Staan bovenaan, in de volgorde van Home Assistant.",add_group:"Groep toevoegen",new_group:"Nieuwe groep",group_name:"Naam van de groep",move_here:"Hierheen",move_up:"Omhoog",move_down:"Omlaag",move_left:"Naar voren",move_right:"Naar achteren",remove_group:"Groep verwijderen",remove_group_confirm:"Verwijderen? De items gaan terug naar Zonder groep.",hide:"Verbergen",show:"Tonen",missing:"niet gevonden",empty_group:"Sleep items hierheen.",preview:"Voorbeeld",preview_hint:"Wordt pas echt toegepast als je opslaat.",device_phone:"Telefoon",device_tablet:"Tablet",device_desktop:"Pc",page_light:"Lichte pagina",page_dark:"Donkere pagina",expanded:"Uitgeklapt",unsaved:"Niet opgeslagen wijzigingen",cancel:"Annuleren",save:"Opslaan",saved:"Opgeslagen",undo:"Vorige versie terugzetten",undo_confirm:"De instellingen van voor de laatste keer opslaan komen terug. Doorgaan?",undone:"Vorige versie teruggezet",nothing_to_undo:"Er is geen vorige versie",yes:"Ja",no:"Nee",discard_confirm:"Je hebt wijzigingen die niet zijn opgeslagen. Weggooien?",error:"Er ging iets mis: {message}",th_do_edit:"Mijn thema aanpassen",th_do_edit_text:"Kleuren, hoeken en pop-ups van een thema dat je in Style Studio maakte.",th_do_new:"Een nieuw thema maken",th_do_new_text:"Begin met je huidige thema, een voorgemaakte stijl of een kopie.",th_do_use:"Een thema gebruiken",th_do_use_text:"Voor jezelf, of als standaard voor iedereen.",st_which_theme:"Welk thema?",st_colors:"Kleuren",st_shape:"Vorm en pop-ups",st_name_save:"Naam en opslaan",th_use_title:"Kies een thema",th_use_hint:"Voor mij gebruiken zet het thema meteen op dit scherm. Per persoon iets anders? Dat doe je bij Per persoon.",th_other_themes:"Andere thema's in Home Assistant",themes_intro:"Bepaal elke kleur in Home Assistant: menu, bovenbalk, kaarten, pop-ups, vensters, schakelaars en meer. Begin met een paar basiskleuren; de rest rekent Style Studio uit. Onder Alles aanpassen kun je elke kleur apart zetten.",your_themes:"Je thema's",new_theme:"Nieuw thema",start_from:"Begin met",start_current:"Je huidige thema",or_preset:"Of kies een voorgemaakte stijl:",my_theme:"Mijn thema",fixed_colors:"{count} kleuren komen vast uit het gekopieerde thema en volgen Snel niet.",follow_quick:"Laat alles Snel volgen",copy_existing:"Of kopieer een bestaand thema",pick_theme:"Kies een thema",copy_suffix:"kopie",theme_name:"Naam",badge_default:"standaard",badge_not_loaded:"niet geladen",quick:"Snel",quick_hint:"Hieruit worden alle andere kleuren berekend.",c_background:"Achtergrond",c_card:"Kaarten",c_text:"Tekst",c_accent:"Accent (actief, knoppen, schakelaars)",c_sidebar:"Zijbalk",c_icons:"Iconen",c_icons_hint:"Uit: een rustige tint van je accentkleur. Nooit meer het standaardblauw.",c_icons_own:"Eigen kleur voor iconen",c_header:"Bovenbalk",header_same:"Bovenbalk zelfde kleur als de achtergrond",corners:"Hoeken van kaarten",shadow:"Schaduw",shadow_none:"Geen",shadow_soft:"Zacht",shadow_strong:"Sterk",card_opacity:"Dekking van kaarten",card_opacity_hint:"Lager laat de achtergrond door de kaarten heen zien.",popups:"Pop-ups",popup_solid:"Ondoorzichtig",popup_glass:"Glas",popup_opacity:"Dekking van pop-ups",all_vars:"Alles aanpassen",all_vars_hint:"Leeg veld: de berekende kleur (grijs). Je mag elke CSS-waarde gebruiken, ook rgba() of een verloop. Een paar plekken in de instellingen van Home Assistant hebben vaste kleuren en volgen geen thema.",reset:"Terug naar berekend",custom_vars:"Eigen variabelen",custom_vars_hint:"Voor variabelen die hierboven niet staan, bijvoorbeeld van een andere kaart.",var_name:"Naam, zonder --",var_value:"Waarde",add_var:"Toevoegen",remove:"Verwijderen",whole_screen:"Ook tonen op dit hele scherm",whole_screen_hint:"Alleen in deze browser, tot je opslaat of annuleert.",show_popup:"Pop-up tonen",delete_theme:"Thema verwijderen",delete_confirm:"Thema {name} verwijderen? Je kunt het daarna nog terugzetten.",deleted:"Verwijderd",set_default:"Standaard voor iedereen",set_default_hint:"Voor iedereen die in het profiel geen eigen thema koos.",default_set:"{name} is nu het standaardthema",is_default:"Dit is het standaardthema",saved_theme:"Opgeslagen. Kies hieronder voor wie het geldt.",use_for_me:"Voor mij gebruiken",using_now:"Dit scherm gebruikt nu {name}",warn_not_loaded:"Home Assistant heeft dit thema niet geladen. Zet in configuration.yaml: frontend: themes: !include_dir_merge_named themes, en herstart Home Assistant.",err_file_exists:"themes/style_studio.yaml bestaat al en is niet door Style Studio gemaakt. Hernoem of verwijder dat bestand eerst.",err_name_taken:"Er is al een thema met deze naam.",err_reload_failed:"Home Assistant kon de thema's niet laden ({message}). Je vorige thema's staan weer terug.",err_bad_name:"Gebruik in de naam alleen letters, cijfers, spaties en - _ ( ) & + '.",people_not_loaded:"Deze thema's van Style Studio staan hier niet, omdat Home Assistant ze niet geladen heeft: {names}. Kijk bij Controle en herstel.",pv_title:"Thuis",pv_tab2:"Kamers",pv_living:"Woonkamer",pv_lights:"3 lampen aan",pv_kitchen:"Keuken",pv_off:"Uit",pv_climate:"Airco",pv_weather:"Zonnig, 21\xB0",pv_switch:"Ventilator",pv_popup:"Woonkamer",people_intro:"Geef iedereen een eigen thema en zijbalkvolgorde. Het wordt toegepast als die persoon Home Assistant opent, op elk apparaat \xE9\xE9n keer; daarna kan diegene in het profiel nog zelf iets anders kiezen.",person_theme:"Thema",person_sidebar:"Zijbalk (volgorde en verborgen items)",self_choice:"Zelf kiezen",like_person:"Zoals {name} nu",copy_all_from:"Alles kopi\xEBren van",pick_person:"Kies een persoon",now_uses:"Gebruikt nu: {value}",ha_default:"standaard",unknown:"onbekend",hidden_count:"{count} verborgen",order_count:"{count} in eigen volgorde",applied:"Toegepast",pending:"Wordt toegepast als {name} Home Assistant opent",never_seen:"Nog niet gezien sinds Style Studio er is",last_seen:"Laatst gezien {when}",devices:"{count} apparaten",device_one:"1 apparaat",app_badge:"app",no_themes_yet:"Er zijn nog geen thema's geladen. Maak er eerst een bij Thema's.",climate_intro:"Maak per airco een pop-up met temperatuur, standen, ventilator en zwenken. Je ziet het voorbeeld eerst; pas daarna zet Style Studio het op een dashboard, met eerst een back-up van dat dashboard.",no_climate:"Er zijn geen klimaat-apparaten (climate.*) gevonden.",cl_popup:"Pop-up",cl_st_which:"Welke airco?",cl_st_parts:"Wat moet erin?",cl_short_temperature:"temperatuur",cl_short_modes:"{count} standen",cl_place_hint:"Staat er al een pop-up voor deze airco, dan wordt die vervangen. Er gaat eerst een back-up van het dashboard mee.",cl_name:"Naam",cl_hash:"Adres (#)",cl_hash_hint:"Openen met een knop of link naar dit adres, bijvoorbeeld /lovelace/0{hash}.",cl_parts:"Onderdelen",cl_temperature:"Temperatuur met min en plus",cl_temperature_hint:"Van {min}\xB0 tot {max}\xB0, stap {step}\xB0.",cl_modes:"Standen",cl_fan:"Ventilator",cl_fan_none:"Deze airco geeft geen ventilatorstanden door.",cl_swing_title:"Zwenken",cl_swing_v:"Omhoog/omlaag zwenken",cl_swing_h:"Links/rechts zwenken",cl_swing_none:"Deze airco geeft dit niet door als aan/uit.",cl_louvers:"Lamelstanden (de pijltjes in de app van de fabrikant) geeft deze integratie niet door aan Home Assistant. Die kun je hier dus niet instellen.",cl_place:"Op een dashboard zetten",cl_dashboard:"Dashboard",cl_view:"Weergave",cl_opener:"Ook een knop in de weergave die de pop-up opent",cl_add:"Op dashboard zetten",cl_add_confirm:"Pop-up {hash} op {view} zetten? Er gaat eerst een back-up van dit dashboard naar style_studio/backups. Een eerdere pop-up met hetzelfde adres wordt vervangen.",cl_added:"Op {view} gezet ({replaced} vervangen). Back-up gemaakt.",cl_readonly:"Dit dashboard staat in YAML-modus; Style Studio kan het niet aanpassen. Kopieer de kaartcode hieronder.",cl_panel_view:"Deze weergave heeft maar \xE9\xE9n kaart (paneelmodus); kies een andere.",cl_code:"Kaartcode",cl_code_hint:"Plakken in een handmatige kaart, als je het zelf wilt plaatsen.",copy:"Kopi\xEBren",copied:"Gekopieerd",needs_cards:"Nodig via HACS: {cards}. Zonder deze kaarten werkt de pop-up niet; het voorbeeld hieronder is een tekening.",preview_drawing:"Tekening van het resultaat",preview_real:"Echte kaarten; de knoppen werken echt",cl_section:"Airco",cl_now_label:"Nu",mode_off:"Uit",mode_cool:"Koel",mode_heat:"Warm",mode_auto:"Auto",mode_dry:"Droog",mode_fan_only:"Fan",mode_heat_cool:"Koel/warm",fan_auto:"Auto",fan_low:"Laag",fan_medium:"Midden",fan_middle:"Midden",fan_high:"Hoog",rooms_intro:"Maak en bewerk kamertegels met een pop-up, en andere kaarten, op je eigen dashboards. Kies een dashboard: Style Studio vindt de kamers die er al op staan, ook als je ze zelf gemaakt hebt. Elke wijziging zie je eerst in het voorbeeld, en er gaat altijd eerst een back-up van het dashboard naar style_studio/backups.",pf_title:"Pop-up-vorm",pf_hint:"Bubble Card 3.2 en nieuwer gebruikt een nieuwe vorm. Oude pop-ups werken daar nog, met een melding om ze om te zetten.",pf_new:"Nieuw (3.2+)",pf_old:"Oud",rm_do_edit:"Een kamer aanpassen",rm_do_edit_text:"Naam, icoon of lampen veranderen van een kamer die al op je dashboard staat.",rm_do_add:"Een kamer toevoegen",rm_do_add_text:"Een nieuwe kamertegel met pop-up op je dashboard zetten.",rm_do_card:"Een kaart toevoegen",rm_do_card_text:"Een groet, sc\xE8nes, huisstatus of het weer.",rm_do_page:"Een complete pagina maken",rm_do_page_text:"In \xE9\xE9n keer een pagina met al je kamers, per verdieping.",st_which_room:"Welke kamer?",st_name_icon:"Naam en icoon",st_lights:"Welke lampen?",st_climate:"Airco",st_save:"Opslaan",st_where:"Waar komt hij?",st_which_card:"Welke kaart?",st_scenes:"Welke sc\xE8nes?",st_add:"Toevoegen",lbl_page:"Pagina",lbl_heading:"Onder welk kopje",st_save_edit:"Je eigen opmaak blijft: alleen naam, icoon, lampen en airco veranderen. Er gaat eerst een back-up van het dashboard mee.",st_save_like:"De kamer krijgt dezelfde opmaak als {name}. Er gaat eerst een back-up van het dashboard mee.",st_save_standard:"De kamer krijgt de standaardopmaak van Style Studio. Er gaat eerst een back-up van het dashboard mee.",rm_other_room:"Een andere kamer",rm_no_lights_chosen:"Nog geen lampen gekozen.",oc_greeting_text:"Goedemorgen of goedemiddag, met de dag, lampen aan, wie er thuis is en de temperatuur.",oc_scenes_text:"Knoppen om je sc\xE8nes aan te zetten.",oc_status_text:"Bijna lege batterijen en apparaten die offline zijn.",oc_weather_text:"Het weer met de verwachting.",done_again:"Klaar. Wat wil je nu doen?",bg_do:"Een achtergrond instellen",bg_do_text:"Een foto, kleur of verloop achter een pagina van je dashboard.",bg_st_page:"Welke pagina?",bg_all_pages:"Alle pagina's",bg_has:"heeft al een achtergrond",bg_st_kind:"Welke achtergrond?",bg_kind_image:"Foto",bg_kind_color:"Kleur",bg_kind_gradient:"Verloop",bg_kind_none:"Geen achtergrond",bg_none_text:"De achtergrond van deze pagina wordt weggehaald; dan geldt weer de achtergrond van je thema.",bg_upload:"Foto uploaden",bg_uploading:"Bezig\u2026",bg_upload_hint:"JPG, PNG, WEBP, GIF of AVIF, tot 15 MB. Grote foto's worden verkleind, zodat je dashboard snel blijft laden.",bg_uploaded:"Foto staat klaar en is gekozen.",bg_uploaded_shrunk:"Foto staat klaar en is gekozen. Hij is verkleind voor snel laden.",bg_no_photos:"Nog geen foto's. Upload er een, of zet foto's in de map /config/www; die verschijnen hier vanzelf.",bg_delete_photo:"Foto verwijderen",bg_delete_confirm:"Foto {name} verwijderen van de schijf? Een pagina die hem nog gebruikt, toont dan geen foto meer.",bg_deleted:"Foto verwijderd.",bg_url:"Of een adres",bg_url_hint:"Begint met / (bijvoorbeeld /local/foto.jpg) of met https://",bg_err_type:"Dit is geen foto die ik kan gebruiken. Kies een JPG, PNG, WEBP, GIF of AVIF.",bg_err_big:"Deze foto is te groot (meer dan 15 MB).",bg_color:"Kleur",bg_from:"Van",bg_to:"Naar",bg_angle:"Richting",bg_preset_sunset:"Zonsondergang",bg_preset_ocean:"Oceaan",bg_preset_night:"Nacht",bg_preset_sand:"Zand",bg_preset_rose:"Roze",bg_st_look:"Hoe moet het eruit zien?",bg_fit:"Passen",bg_fit_cover:"Bedekken",bg_fit_contain:"Helemaal tonen",bg_fit_tile:"Herhalen",bg_dim:"Donkerder of lichter",bg_dim_hint:"Naar links donkerder, naar rechts lichter. Handig als tekst op de foto moeilijk te lezen is.",bg_fixed:"Blijft staan als je scrolt",bg_align:"Waar op het scherm",bg_align_center:"Midden",bg_align_top:"Boven",bg_align_bottom:"Onder",bg_align_left:"Links",bg_align_right:"Rechts",bg_preview_hint:"Zo ongeveer ziet de pagina eruit. Je kaarten komen er bovenop.",bg_save_text:"Pagina: {pages}. Er gaat eerst een back-up van het dashboard mee.",bg_theme_hint:"Voor alle pagina's tegelijk: zet een achtergrond in je thema, bij Alles aanpassen \u203A Dashboardpagina's.",bg_set:"Achtergrond zetten",bg_remove:"Achtergrond weghalen",bg_confirm:"Achtergrond zetten op: {pages}? Er gaat eerst een back-up van het dashboard naar style_studio/backups.",bg_remove_confirm:"Achtergrond weghalen van: {pages}? Er gaat eerst een back-up van het dashboard naar style_studio/backups.",bg_done:"Achtergrond gezet. Open het dashboard om hem te zien. Back-up gemaakt.",bg_removed:"Achtergrond weggehaald. Back-up gemaakt.",rm_view_intro:"Of maak in \xE9\xE9n keer een complete weergave, met een kolom per verdieping uit je ruimtes. Je andere weergaven blijven zoals ze zijn.",rm_whole_view:"Complete weergave maken",rm_add_room:"Kamer toevoegen",rm_design:"Opmaak",rm_like:"Zoals {name}",rm_standard:"Standaard van Style Studio",rm_new_room:"Nieuwe kamer",rm_room:"Kamer",rm_from_area:"uit je ruimtes",rm_lights_pick:"Lampen",rm_filter:"Zoeken",rm_climate_pick:"Airco in de pop-up",rm_no_climate:"Geen",rm_where:"Plaats",rm_section:"Sectie",rm_is_at:"Staat op {view} \u203A {section}",rm_keeps_design:"Je eigen opmaak blijft: alleen naam, icoon, lampen en airco worden aangepast.",rm_put:"Op dashboard zetten",rm_update:"Wijzigingen opslaan",rm_put_confirm:"Kamer {name} op {view} \u203A {section} zetten? Eerst gaat er een back-up van het dashboard naar style_studio/backups.",rm_update_confirm:"Kamer {name} op het dashboard aanpassen? Alleen naam, icoon, lampen en airco veranderen. Eerst gaat er een back-up naar style_studio/backups.",rm_put_done:"Op het dashboard gezet. Back-up gemaakt.",rm_update_done:"Aangepast. Back-up gemaakt.",rm_hash_taken:"Er staat al een kamer met adres {hash} op dit dashboard; kies een andere naam.",rm_no_rooms_found:"Nog geen kamers met pop-up op dit dashboard.",oc_title:"Andere kaarten",oc_hint:"Kaarten van Home Assistant zelf: ze volgen je thema en hebben niets uit HACS nodig.",oc_greeting:"Groet",oc_scenes:"Sc\xE8nes",oc_status:"Huisstatus",oc_weather:"Weer",oc_no_scenes:"Geen sc\xE8nes gevonden.",oc_no_weather:"Geen weer-entiteit gevonden.",oc_add:"Toevoegen",oc_add_confirm:"{card} toevoegen aan {view} \u203A {section}? Eerst gaat er een back-up van het dashboard naar style_studio/backups.",oc_added:"Toegevoegd. Back-up gemaakt.",no_areas:"Er zijn nog geen ruimtes. Maak ze in Instellingen \u203A Ruimtes, labels en zones, en wijs je lampen toe.",rm_view:"Weergave",rm_title:"Titel",rm_path:"Adres",rm_popups:"Pop-ups",rm_solid:"Ondoorzichtig",rm_glass:"Glas",rm_opacity:"Dekking",rm_width:"Breedte op de pc",rm_height:"Ruimte boven de pop-up op de telefoon",rm_header:"Kopknoppen tonen",rm_other:"Overig",rm_lights:"{count} lampen",rm_light_one:"1 lamp",rm_no_lights:"geen lampen",rm_include:"Meenemen",rm_climate:"Airco-knop",rm_climate_hint:"Opent {hash}; maak die pop-up bij Klimaat.",rm_icon:"Icoon (mdi:\u2026)",rm_create:"Weergave maken",rm_create_confirm:"Weergave {title} maken op dit dashboard? Er gaat eerst een back-up van het dashboard naar style_studio/backups.",rm_replace_confirm:"Weergave {title} bestaat al en wordt vervangen. Er gaat eerst een back-up van het dashboard naar style_studio/backups. Doorgaan?",rm_created:"Weergave {title} gemaakt. Open het dashboard om hem te zien.",rm_pick_room:"Tik op een kamer in het voorbeeld om de pop-up te zien.",rm_on:"aan",rm_off:"Uit",rm_climate_label:"Airco",check_intro:"Hier vind je wat het uiterlijk in de weg kan zitten, en zet je eerdere versies terug. Er wordt niets veranderd zonder dat je het bevestigt.",ck_checks:"Controle",ck_again:"Opnieuw controleren",ck_ok:"In orde",ck_cardmod_sidebar:"Thema {theme} maakt met card-mod de zijbalk of de hele app op ({keys}). Dat botst met Glass Sidebar. Haal die regels uit het thema.",ck_cardmod_other:"Thema {theme} gebruikt card-mod ({keys}). Dat werkt naast Style Studio, maar die stijlen volgen de kleuren hier niet.",ck_no_cardmod:"Geen card-mod-stijlen voor de zijbalk in de thema's die in gebruik zijn.",ck_cardmod_handled:"Thema {theme} maakt ook de zijbalk op met card-mod. Glass Sidebar zet dat deel uit; de rest van het thema werkt gewoon.",ck_cardmod_unused:"{count} andere ge\xEFnstalleerde thema's gebruiken card-mod, maar niemand gebruikt ze nu: {names}.",ck_cardmod_unused_one:"Nog een ge\xEFnstalleerd thema gebruikt card-mod, maar niemand gebruikt het nu: {names}.",ck_devices_none_old:"Geen apparaat gebruikt na de update nog oude bestanden.",ck_devices_waiting:"Nog niet geopend sinds de update naar {version}; ze laden de nieuwe bestanden vanzelf zodra Home Assistant opent:",ck_browser_mod:"Browser Mod denkt in deze browser dat hij het standaarddashboard beheert (default_dashboard_plugin_conflict).",ck_browser_mod_ok:"Geen Browser Mod-conflict in deze browser.",ck_fix:"Oplossen",ck_fix_confirm:"De instelling isDefaultPanelManaged uit deze browser verwijderen?",ck_fixed:"Opgelost. Herlaad de pagina.",ck_not_loaded:"Thema's die Home Assistant niet laadt: {names}. Zet in configuration.yaml: frontend: themes: !include_dir_merge_named themes.",ck_loaded:"Alle thema's van Style Studio zijn geladen.",ck_devices_ok:"Alle apparaten gebruiken versie {version}.",ck_devices_old:"Deze apparaten openden Home Assistant na de update, maar gebruiken nog oude bestanden:",ck_device:"{user} \xB7 {kind} \xB7 {version} \xB7 {when}",ck_app:"Companion-app",ck_browser:"browser",ck_app_cache:"In de Companion-app: Instellingen \u203A Companion-app \u203A Probleemoplossing \u203A Frontend-cache wissen. In een browser: herladen.",ck_fixed_styles:"Vaste kleuren en rondingen in dashboards",ck_fixed_hint:"Kleuren en rondingen die in een kaart zelf staan, volgen geen thema. Daarom lijkt een thema op sommige dashboards niets te doen. Style Studio stelt per waarde een themavariabele voor; de oude waarde blijft als reserve.",ck_scan:"Dashboards doorzoeken",ck_none_found:"Geen vaste kleuren of rondingen gevonden.",ck_found:"{count} plekken",ck_found_one:"1 plek",ck_no_suggestion:"geen themakleur met deze waarde",ck_apply:"Gekozen voorstellen toepassen",ck_apply_confirm:"{count} waarden in dashboard {name} vervangen? Er gaat eerst een back-up naar style_studio/backups; je kunt hem hieronder terugzetten.",ck_applied:"Toegepast in {name}. Back-up gemaakt.",ck_backups:"Back-ups en geschiedenis",ck_dashboards:"Dashboards",ck_themes:"Thema's",ck_glass:"Glass Sidebar",ck_people:"Per persoon",ck_nothing:"Nog niets bewaard.",ck_restore:"Terugzetten",ck_restore_confirm:"Deze versie terugzetten? Wat er nu staat, wordt eerst bewaard.",ck_restored:"Teruggezet",warn_old_panel:"Dit scherm gebruikt een oude versie van het paneel ({old}, server {new}). Herlaad de pagina. In de Companion-app: Instellingen \u203A Companion-app \u203A Probleemoplossing \u203A Frontend-cache wissen."},Qt={title:"Style",next:"Next",back:"Back",more_options:"More options",what_to_do:"What do you want to do?",ip_choose:"Choose another icon",ip_search:"Search an icon, for example bathroom or attic",ip_none:"No icon found.",tab_sidebar:"Sidebar",tab_themes:"Themes",tab_rooms:"Rooms and pop-ups",tab_climate:"Climate",tab_people:"People",tab_check:"Check and restore",coming:"This part comes in a later version.",glass_intro:"The sidebar is styled by the Glass Sidebar add-on. You set it up here; changes apply to everyone and show right away. Sidebar colors are set under Themes.",glass_missing_title:"Add-on: Glass Sidebar",glass_missing:"The Glass Sidebar add-on turns your sidebar into a floating glass panel, with groups and headings. Install it through HACS and restart Home Assistant; then set it up here. Sidebar colors can be set under Themes without the add-on.",glass_not_added_title:"Glass Sidebar is installed",glass_not_added:"Add it too: Settings \u203A Devices & services \u203A Add integration \u203A Glass Sidebar. Then set it up here.",glass_not_loaded:"Glass Sidebar is disabled or not loaded. You can save settings, but you'll only see them once Glass Sidebar runs again.",glass_old:"You have Glass Sidebar {version}. Style Studio is made for {min} or newer; update Glass Sidebar through HACS. Options your version doesn't know do nothing.",open_glass:"Open all Glass Sidebar settings",open_glass_hint:"There you also find styles, tint, icons per group, the quick menu and more phone options. Here you set the basics.",shape:"Shape",floating:"Floating",floating_hint:"A separate panel with space around it.",inset:"Distance to the edge",radius:"Corners",glass:"Glass",blur:"Blur",opacity:"Opacity",opacity_hint:"Lower is more see-through.",glass_cards:"Glass dashboard cards",glass_cards_hint:"Cards become translucent. Can be heavy on older tablets.",active:"Active page",highlight_soft:"Soft",highlight_vivid:"Solid",own_accent:"Own color",own_accent_hint:"Off: the theme's color.",motion:"Icons move on hover",phone:"Phone",phone_hint:"For screens up to 600 pixels wide.",mobile_width:"Menu width",mobile_text_size:"Text size",mobile_blur:"Blur the page behind the menu",groups:"Groups",groups_hint:"Drag items into a group, or tap an item and choose Move here. Items without a group stay at the top.",ungrouped:"No group",ungrouped_hint:"Shown at the top, in Home Assistant's order.",add_group:"Add group",new_group:"New group",group_name:"Group name",move_here:"Move here",move_up:"Up",move_down:"Down",move_left:"Earlier",move_right:"Later",remove_group:"Remove group",remove_group_confirm:"Remove? Its items go back to No group.",hide:"Hide",show:"Show",missing:"not found",empty_group:"Drag items here.",preview:"Preview",preview_hint:"Only applied once you save.",device_phone:"Phone",device_tablet:"Tablet",device_desktop:"Desktop",page_light:"Light page",page_dark:"Dark page",expanded:"Expanded",unsaved:"Unsaved changes",cancel:"Cancel",save:"Save",saved:"Saved",undo:"Restore previous version",undo_confirm:"The settings from before the last save come back. Continue?",undone:"Previous version restored",nothing_to_undo:"There is no previous version",yes:"Yes",no:"No",discard_confirm:"You have unsaved changes. Throw them away?",error:"Something went wrong: {message}",th_do_edit:"Change my theme",th_do_edit_text:"Colors, corners and pop-ups of a theme you made in Style Studio.",th_do_new:"Make a new theme",th_do_new_text:"Start from your current theme, a preset or a copy.",th_do_use:"Use a theme",th_do_use_text:"For yourself, or as the default for everyone.",st_which_theme:"Which theme?",st_colors:"Colors",st_shape:"Shape and pop-ups",st_name_save:"Name and save",th_use_title:"Pick a theme",th_use_hint:"Use for me puts the theme on this screen right away. Something else per person? See People.",th_other_themes:"Other themes in Home Assistant",themes_intro:"Set every color in Home Assistant: menu, top bar, cards, pop-ups, dialogs, switches and more. Start with a few base colors; Style Studio works out the rest. Under Change everything you can set each color on its own.",your_themes:"Your themes",new_theme:"New theme",start_from:"Start with",start_current:"Your current theme",or_preset:"Or pick a preset:",my_theme:"My theme",fixed_colors:"{count} colors are fixed from the copied theme and don't follow Quick.",follow_quick:"Let everything follow Quick",copy_existing:"Or copy an existing theme",pick_theme:"Pick a theme",copy_suffix:"copy",theme_name:"Name",badge_default:"default",badge_not_loaded:"not loaded",quick:"Quick",quick_hint:"All other colors are worked out from these.",c_background:"Background",c_card:"Cards",c_text:"Text",c_accent:"Accent (active, buttons, switches)",c_sidebar:"Sidebar",c_icons:"Icons",c_icons_hint:"Off: a calm tone of your accent color. Never the default blue again.",c_icons_own:"Own color for icons",c_header:"Top bar",header_same:"Top bar in the background color",corners:"Card corners",shadow:"Shadow",shadow_none:"None",shadow_soft:"Soft",shadow_strong:"Strong",card_opacity:"Card opacity",card_opacity_hint:"Lower lets the background show through cards.",popups:"Pop-ups",popup_solid:"Solid",popup_glass:"Glass",popup_opacity:"Pop-up opacity",all_vars:"Change everything",all_vars_hint:"Empty field: the worked-out color (grey). Any CSS value works, also rgba() or a gradient. A few places in Home Assistant's settings have fixed colors and don't follow any theme.",reset:"Back to worked-out",custom_vars:"Own variables",custom_vars_hint:"For variables not listed above, for example from another card.",var_name:"Name, without --",var_value:"Value",add_var:"Add",remove:"Remove",whole_screen:"Also show on this whole screen",whole_screen_hint:"Only in this browser, until you save or cancel.",show_popup:"Show pop-up",delete_theme:"Delete theme",delete_confirm:"Delete theme {name}? You can still restore it afterwards.",deleted:"Deleted",set_default:"Default for everyone",set_default_hint:"For everyone who didn't pick a theme in their profile.",default_set:"{name} is now the default theme",is_default:"This is the default theme",saved_theme:"Saved. Pick below who it's for.",use_for_me:"Use for me",using_now:"This screen now uses {name}",warn_not_loaded:"Home Assistant didn't load this theme. Add to configuration.yaml: frontend: themes: !include_dir_merge_named themes, and restart Home Assistant.",err_file_exists:"themes/style_studio.yaml already exists and wasn't made by Style Studio. Rename or remove that file first.",err_name_taken:"There is already a theme with this name.",err_reload_failed:"Home Assistant couldn't load the themes ({message}). Your previous themes are back.",err_bad_name:"Use only letters, digits, spaces and - _ ( ) & + ' in the name.",people_not_loaded:"These Style Studio themes aren't listed because Home Assistant didn't load them: {names}. See Check and restore.",pv_title:"Home",pv_tab2:"Rooms",pv_living:"Living room",pv_lights:"3 lights on",pv_kitchen:"Kitchen",pv_off:"Off",pv_climate:"Air conditioning",pv_weather:"Sunny, 21\xB0",pv_switch:"Fan",pv_popup:"Living room",people_intro:"Give everyone their own theme and sidebar order. It is applied when that person opens Home Assistant, once on each device; after that they can still pick something else in their profile.",person_theme:"Theme",person_sidebar:"Sidebar (order and hidden items)",self_choice:"Their own choice",like_person:"Like {name} now",copy_all_from:"Copy everything from",pick_person:"Pick a person",now_uses:"Uses now: {value}",ha_default:"default",unknown:"unknown",hidden_count:"{count} hidden",order_count:"{count} in own order",applied:"Applied",pending:"Applied when {name} opens Home Assistant",never_seen:"Not seen since Style Studio was added",last_seen:"Last seen {when}",devices:"{count} devices",device_one:"1 device",app_badge:"app",no_themes_yet:"No themes are loaded yet. Make one under Themes first.",climate_intro:"Make a pop-up per air conditioner with temperature, modes, fan and swing. You see the preview first; only then does Style Studio put it on a dashboard, after a backup of that dashboard.",no_climate:"No climate devices (climate.*) found.",cl_popup:"Pop-up",cl_st_which:"Which air conditioner?",cl_st_parts:"What goes in it?",cl_short_temperature:"temperature",cl_short_modes:"{count} modes",cl_place_hint:"An earlier pop-up for this air conditioner is replaced. The dashboard is backed up first.",cl_name:"Name",cl_hash:"Address (#)",cl_hash_hint:"Open it with a button or link to this address, for example /lovelace/0{hash}.",cl_parts:"Parts",cl_temperature:"Temperature with minus and plus",cl_temperature_hint:"From {min}\xB0 to {max}\xB0, step {step}\xB0.",cl_modes:"Modes",cl_fan:"Fan",cl_fan_none:"This air conditioner doesn't report fan modes.",cl_swing_title:"Swing",cl_swing_v:"Swing up/down",cl_swing_h:"Swing left/right",cl_swing_none:"This air conditioner doesn't report this as on/off.",cl_louvers:"Louver positions (the arrows in the manufacturer's app) aren't passed to Home Assistant by this integration, so they can't be set here.",cl_place:"Put on a dashboard",cl_dashboard:"Dashboard",cl_view:"View",cl_opener:"Also a button in the view that opens the pop-up",cl_add:"Put on dashboard",cl_add_confirm:"Put pop-up {hash} on {view}? A backup of this dashboard goes to style_studio/backups first. An earlier pop-up with the same address is replaced.",cl_added:"Put on {view} ({replaced} replaced). Backup made.",cl_readonly:"This dashboard is in YAML mode; Style Studio can't change it. Copy the card code below.",cl_panel_view:"This view holds a single card (panel mode); pick another one.",cl_code:"Card code",cl_code_hint:"Paste into a manual card if you want to place it yourself.",copy:"Copy",copied:"Copied",needs_cards:"Needed through HACS: {cards}. Without these cards the pop-up doesn't work; the preview below is a drawing.",preview_drawing:"Drawing of the result",preview_real:"Real cards; the buttons really work",cl_section:"Air conditioning",cl_now_label:"Now",mode_off:"Off",mode_cool:"Cool",mode_heat:"Heat",mode_auto:"Auto",mode_dry:"Dry",mode_fan_only:"Fan",mode_heat_cool:"Heat/cool",fan_auto:"Auto",fan_low:"Low",fan_medium:"Medium",fan_middle:"Middle",fan_high:"High",rooms_intro:"Make and edit room tiles with a pop-up, and other cards, on your own dashboards. Pick a dashboard: Style Studio finds the rooms already on it, also ones you made yourself. You see every change in the preview first, and the dashboard is always backed up to style_studio/backups first.",pf_title:"Pop-up format",pf_hint:"Bubble Card 3.2 and newer uses a new format. Old pop-ups still work there, with a notice to migrate them.",pf_new:"New (3.2+)",pf_old:"Old",rm_do_edit:"Change a room",rm_do_edit_text:"Change the name, icon or lights of a room that's already on your dashboard.",rm_do_add:"Add a room",rm_do_add_text:"Put a new room tile with a pop-up on your dashboard.",rm_do_card:"Add a card",rm_do_card_text:"A greeting, scenes, house status or the weather.",rm_do_page:"Make a whole page",rm_do_page_text:"A page with all your rooms per floor, in one go.",st_which_room:"Which room?",st_name_icon:"Name and icon",st_lights:"Which lights?",st_climate:"Air conditioning",st_save:"Save",st_where:"Where does it go?",st_which_card:"Which card?",st_scenes:"Which scenes?",st_add:"Add",lbl_page:"Page",lbl_heading:"Under which heading",st_save_edit:"Your own design stays: only name, icon, lights and air conditioning change. The dashboard is backed up first.",st_save_like:"The room gets the same design as {name}. The dashboard is backed up first.",st_save_standard:"The room gets Style Studio's own design. The dashboard is backed up first.",rm_other_room:"Another room",rm_no_lights_chosen:"No lights chosen yet.",oc_greeting_text:"Good morning or afternoon, with the day, lights on, who's home and the temperature.",oc_scenes_text:"Buttons to turn your scenes on.",oc_status_text:"Low batteries and devices that are offline.",oc_weather_text:"The weather with the forecast.",done_again:"Done. What do you want to do now?",bg_do:"Set a background",bg_do_text:"A photo, color or gradient behind a page of your dashboard.",bg_st_page:"Which page?",bg_all_pages:"All pages",bg_has:"already has a background",bg_st_kind:"Which background?",bg_kind_image:"Photo",bg_kind_color:"Color",bg_kind_gradient:"Gradient",bg_kind_none:"No background",bg_none_text:"The background of this page is removed; your theme's background applies again.",bg_upload:"Upload a photo",bg_uploading:"Working\u2026",bg_upload_hint:"JPG, PNG, WEBP, GIF or AVIF, up to 15 MB. Big photos are shrunk so your dashboard keeps loading fast.",bg_uploaded:"Photo is ready and chosen.",bg_uploaded_shrunk:"Photo is ready and chosen. It was shrunk for fast loading.",bg_no_photos:"No photos yet. Upload one, or put photos in the /config/www folder; they show up here by themselves.",bg_delete_photo:"Delete photo",bg_delete_confirm:"Delete photo {name} from the disk? A page that still uses it will show no photo.",bg_deleted:"Photo deleted.",bg_url:"Or an address",bg_url_hint:"Starts with / (for example /local/photo.jpg) or with https://",bg_err_type:"That's not a photo I can use. Pick a JPG, PNG, WEBP, GIF or AVIF.",bg_err_big:"This photo is too big (over 15 MB).",bg_color:"Color",bg_from:"From",bg_to:"To",bg_angle:"Direction",bg_preset_sunset:"Sunset",bg_preset_ocean:"Ocean",bg_preset_night:"Night",bg_preset_sand:"Sand",bg_preset_rose:"Pink",bg_st_look:"How should it look?",bg_fit:"Fit",bg_fit_cover:"Cover",bg_fit_contain:"Show whole photo",bg_fit_tile:"Repeat",bg_dim:"Darker or lighter",bg_dim_hint:"Darker to the left, lighter to the right. Handy when text on the photo is hard to read.",bg_fixed:"Stays in place when you scroll",bg_align:"Where on the screen",bg_align_center:"Middle",bg_align_top:"Top",bg_align_bottom:"Bottom",bg_align_left:"Left",bg_align_right:"Right",bg_preview_hint:"Roughly how the page will look. Your cards go on top.",bg_save_text:"Page: {pages}. The dashboard is backed up first.",bg_theme_hint:"For all pages at once: set a background in your theme, under Change everything \u203A Dashboard pages.",bg_set:"Set background",bg_remove:"Remove background",bg_confirm:"Set the background on: {pages}? The dashboard is backed up to style_studio/backups first.",bg_remove_confirm:"Remove the background from: {pages}? The dashboard is backed up to style_studio/backups first.",bg_done:"Background set. Open the dashboard to see it. Backup made.",bg_removed:"Background removed. Backup made.",rm_view_intro:"Or make a whole view at once, with a column per floor from your areas. Your other views stay as they are.",rm_whole_view:"Make a whole view",rm_add_room:"Add room",rm_design:"Design",rm_like:"Like {name}",rm_standard:"Style Studio's own",rm_new_room:"New room",rm_room:"Room",rm_from_area:"from your areas",rm_lights_pick:"Lights",rm_filter:"Search",rm_climate_pick:"Air conditioning in the pop-up",rm_no_climate:"None",rm_where:"Place",rm_section:"Section",rm_is_at:"On {view} \u203A {section}",rm_keeps_design:"Your own design stays: only name, icon, lights and air conditioning change.",rm_put:"Put on dashboard",rm_update:"Save changes",rm_put_confirm:"Put room {name} on {view} \u203A {section}? The dashboard is backed up to style_studio/backups first.",rm_update_confirm:"Change room {name} on the dashboard? Only name, icon, lights and air conditioning change. A backup goes to style_studio/backups first.",rm_put_done:"Put on the dashboard. Backup made.",rm_update_done:"Changed. Backup made.",rm_hash_taken:"This dashboard already has a room with address {hash}; pick another name.",rm_no_rooms_found:"No rooms with a pop-up on this dashboard yet.",oc_title:"Other cards",oc_hint:"Home Assistant's own cards: they follow your theme and need nothing from HACS.",oc_greeting:"Greeting",oc_scenes:"Scenes",oc_status:"House status",oc_weather:"Weather",oc_no_scenes:"No scenes found.",oc_no_weather:"No weather entity found.",oc_add:"Add",oc_add_confirm:"Add {card} to {view} \u203A {section}? The dashboard is backed up to style_studio/backups first.",oc_added:"Added. Backup made.",no_areas:"There are no areas yet. Make them under Settings \u203A Areas, labels & zones, and assign your lights.",rm_view:"View",rm_title:"Title",rm_path:"Address",rm_popups:"Pop-ups",rm_solid:"Solid",rm_glass:"Glass",rm_opacity:"Opacity",rm_width:"Width on desktop",rm_height:"Space above the pop-up on phones",rm_header:"Show header buttons",rm_other:"Other",rm_lights:"{count} lights",rm_light_one:"1 light",rm_no_lights:"no lights",rm_include:"Include",rm_climate:"Air conditioning button",rm_climate_hint:"Opens {hash}; make that pop-up under Climate.",rm_icon:"Icon (mdi:\u2026)",rm_create:"Make view",rm_create_confirm:"Make view {title} on this dashboard? A backup of the dashboard goes to style_studio/backups first.",rm_replace_confirm:"View {title} already exists and will be replaced. A backup of the dashboard goes to style_studio/backups first. Continue?",rm_created:"View {title} made. Open the dashboard to see it.",rm_pick_room:"Tap a room in the preview to see its pop-up.",rm_on:"on",rm_off:"Off",rm_climate_label:"Air conditioning",check_intro:"Find what can get in the way of the look, and put back earlier versions. Nothing is changed without your confirmation.",ck_checks:"Checks",ck_again:"Check again",ck_ok:"OK",ck_cardmod_sidebar:"Theme {theme} styles the sidebar or the whole app with card-mod ({keys}). That clashes with Glass Sidebar. Remove those lines from the theme.",ck_cardmod_other:"Theme {theme} uses card-mod ({keys}). That works next to Style Studio, but those styles don't follow the colors here.",ck_no_cardmod:"No card-mod sidebar styles in the themes in use.",ck_cardmod_handled:"Theme {theme} also styles the sidebar with card-mod. Glass Sidebar switches that part off; the rest of the theme just works.",ck_cardmod_unused:"{count} other installed themes use card-mod, but nobody uses them now: {names}.",ck_cardmod_unused_one:"One more installed theme uses card-mod, but nobody uses it now: {names}.",ck_devices_none_old:"No device still uses old files after the update.",ck_devices_waiting:"Not opened since the update to {version}; they load the new files by themselves once Home Assistant opens:",ck_browser_mod:"Browser Mod thinks it manages the default dashboard in this browser (default_dashboard_plugin_conflict).",ck_browser_mod_ok:"No Browser Mod conflict in this browser.",ck_fix:"Fix",ck_fix_confirm:"Remove the isDefaultPanelManaged setting from this browser?",ck_fixed:"Fixed. Reload the page.",ck_not_loaded:"Themes Home Assistant doesn't load: {names}. Add to configuration.yaml: frontend: themes: !include_dir_merge_named themes.",ck_loaded:"All Style Studio themes are loaded.",ck_devices_ok:"All devices run version {version}.",ck_devices_old:"These devices opened Home Assistant after the update but still use old files:",ck_device:"{user} \xB7 {kind} \xB7 {version} \xB7 {when}",ck_app:"Companion app",ck_browser:"browser",ck_app_cache:"In the Companion app: Settings \u203A Companion app \u203A Troubleshooting \u203A Reset frontend cache. In a browser: reload.",ck_fixed_styles:"Fixed colors and corners in dashboards",ck_fixed_hint:"Colors and corners written into a card don't follow any theme. That's why a theme seems to do nothing on some dashboards. Style Studio suggests a theme variable per value; the old value stays as a fallback.",ck_scan:"Search dashboards",ck_none_found:"No fixed colors or corners found.",ck_found:"{count} places",ck_found_one:"1 place",ck_no_suggestion:"no theme color with this value",ck_apply:"Apply chosen suggestions",ck_apply_confirm:"Replace {count} values in dashboard {name}? A backup goes to style_studio/backups first; you can restore it below.",ck_applied:"Applied in {name}. Backup made.",ck_backups:"Backups and history",ck_dashboards:"Dashboards",ck_themes:"Themes",ck_glass:"Glass Sidebar",ck_people:"People",ck_nothing:"Nothing kept yet.",ck_restore:"Restore",ck_restore_confirm:"Restore this version? What is there now is kept first.",ck_restored:"Restored",warn_old_panel:"This screen runs an old version of the panel ({old}, server {new}). Reload the page. In the Companion app: Settings \u203A Companion app \u203A Troubleshooting \u203A Reset frontend cache."};function Fe(i){let e=(i?.locale?.language||i?.language||"nl").startsWith("nl")?oa:Qt;return(t,s={})=>(e[t]??Qt[t]??t).replace(/\{(\w+)\}/g,(a,o)=>s[o]??"")}var b=class extends w{constructor(){super(),this._busy=!1,this._confirm=null}get t(){return Fe(this.hass)}get dirty(){return!1}_ask(e,t){this._confirm={text:e,action:t}}_showToast(e){this._toast=e,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=null,4e3)}_error(e){this._showToast(this.t("error",{message:e?.message??e}))}async _run(e,t){this._busy=!0;try{await e(),t&&this._showToast(t)}catch(s){this._error(s)}finally{this._busy=!1}}_choices(e,t,s){return n`
      <h2 class="choices-title">${e}</h2>
      <div class="choices">
        ${t.map(a=>n`<button class="choice" data-choice=${a.key} @click=${()=>s(a.key)}>
            <ha-icon .icon=${a.icon}></ha-icon>
            <b>${a.title}</b>
            <span>${a.text}</span>
          </button>`)}
      </div>
    `}_back(e,t){return n`<button class="back" @click=${t}>
      <ha-icon icon="mdi:arrow-left"></ha-icon>${e}
    </button>`}_steps(e,t,s,a=h){return n`<ol class="steps">
      ${e.map((o,r)=>{let l=r<t?"done":r===t?"open":"later";return n`<li class="step ${l}">
          <button class="step-head" ?disabled=${l==="later"} @click=${()=>s(r)}>
            <span class="number">${l==="done"?n`<ha-icon icon="mdi:check"></ha-icon>`:r+1}</span>
            <span class="step-title">${o.title}</span>
            ${l==="done"&&o.summary?n`<small class="step-summary">${o.summary}</small>`:h}
          </button>
          ${l==="open"?n`<div class="step-body">
                ${o.content}
                ${r<e.length-1?n`<button
                      class="primary next"
                      ?disabled=${o.ready===!1}
                      @click=${()=>s(r+1)}
                    >
                      ${this.t("next")}
                    </button>`:a}
              </div>`:h}
        </li>`})}
    </ol>`}_more(e){return n`<details class="more">
      <summary>${this.t("more_options")}</summary>
      ${e}
    </details>`}_set(){}_warning(e){return n`<div class="warning"><ha-icon icon="mdi:alert-outline"></ha-icon>${e}</div>`}_switch(e,t,s,a){return n`
      <label class="row">
        <span>
          ${s}
          ${a?n`<small>${a}</small>`:h}
        </span>
        <input
          type="checkbox"
          class="switch"
          .checked=${e[t]}
          @change=${o=>this._set(t,o.target.checked)}
        />
      </label>
    `}_slider(e,t,s,a,o,r,l=!1,c){return n`
      <label class="row slider ${l?"off":""}">
        <span>
          ${s}
          ${c?n`<small>${c}</small>`:h}
        </span>
        <span class="inline">
          <input
            type="range"
            min=${a}
            max=${o}
            step="1"
            .value=${String(e[t])}
            ?disabled=${l}
            @input=${d=>this._set(t,Number(d.target.value))}
          />
          <output>${e[t]}${r}</output>
        </span>
      </label>
    `}_segment(e,t,s){return n`
      <div class="segment" role="radiogroup">
        ${s.map(([a,o])=>n`<button
            role="radio"
            aria-checked=${e[t]===a?"true":"false"}
            class=${e[t]===a?"active":""}
            @click=${()=>this._set(t,a)}
          >
            ${o}
          </button>`)}
      </div>
    `}_popupFormat(){let e=ht();return n`
      <div class="row">
        <span>
          ${this.t("pf_title")}
          <small>${this.t("pf_hint")}</small>
        </span>
        <div class="segment small" role="radiogroup">
          ${[[!0,this.t("pf_new")],[!1,this.t("pf_old")]].map(([t,s])=>n`<button
              role="radio"
              aria-checked=${e===t?"true":"false"}
              class=${e===t?"active":""}
              @click=${()=>{Zt(t),this.requestUpdate()}}
            >
              ${s}
            </button>`)}
        </div>
      </div>
    `}_color(e,t,s,a){return n`
      <label class="row">
        <span>
          ${s}
          ${a?n`<small>${a}</small>`:h}
        </span>
        <input type="color" .value=${e[t]} @input=${o=>this._set(t,o.target.value)} />
      </label>
    `}_bar({left:e=h,onCancel:t,onSave:s,canSave:a=this.dirty}){if(this._confirm){let{text:o,action:r}=this._confirm;return n`
        <footer class="bar">
          <span class="grow">${o}</span>
          <button @click=${()=>this._confirm=null}>${this.t("no")}</button>
          <button
            class="primary"
            @click=${()=>{this._confirm=null,r()}}
          >
            ${this.t("yes")}
          </button>
        </footer>
      `}return e===h&&!this._toast&&!a?h:n`
      <footer class="bar">
        ${e}
        <span class="grow">${this._toast??(this.dirty?this.t("unsaved"):"")}</span>
        ${a?n`
              <button ?disabled=${this._busy} @click=${t}>${this.t("cancel")}</button>
              <button class="primary" ?disabled=${this._busy} @click=${s}>
                ${this.t("save")}
              </button>
            `:h}
      </footer>
    `}};g(b,"properties",{hass:{attribute:!1},narrow:{type:Boolean},_busy:{state:!0},_toast:{state:!0},_confirm:{state:!0}}),g(b,"styles",v`
    :host {
      display: block;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: 0;
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
      opacity: 0.5;
    }

    .primary {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 999px;
      padding: 8px 18px;
      font-weight: 500;
    }

    .warning {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px 14px;
      margin-bottom: 12px;
      border-radius: var(--ss-radius, 12px);
      background: color-mix(in srgb, var(--warning-color, #ffa600) 16%, var(--card-background-color));
      line-height: 1.4;
    }

    .warning ha-icon {
      color: var(--warning-color, #ffa600);
      flex-shrink: 0;
    }

    .intro {
      margin: 0 0 16px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .card {
      background: var(--ha-card-background, var(--card-background-color));
      border-radius: var(--ss-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, none);
      border: 1px solid var(--ha-card-border-color, var(--divider-color));
      padding: 16px;
      margin-bottom: 16px;
    }

    h2 {
      margin: 0 0 8px;
      font-size: 16px;
      font-weight: 500;
    }

    .hint,
    small {
      display: block;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
      margin: 0 0 8px;
    }

    .row small {
      margin: 2px 0 0;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 440px);
      gap: 16px;
      align-items: start;
    }

    .preview {
      position: sticky;
      top: 16px;
    }

    @media (max-width: 900px) {
      .layout {
        grid-template-columns: minmax(0, 1fr);
      }

      .preview {
        position: static;
        order: -1;
      }
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 10px 0;
      min-height: 32px;
    }

    .row + .row {
      border-top: 1px solid color-mix(in srgb, var(--divider-color) 60%, transparent);
    }

    .row.off {
      opacity: 0.45;
    }

    .inline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    input[type="range"] {
      width: 180px;
      accent-color: var(--primary-color);
    }

    @media (max-width: 600px) {
      .row.slider {
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
      }

      .row.slider .inline,
      .row.slider input[type="range"] {
        flex: 1;
        width: auto;
      }
    }

    output {
      min-width: 44px;
      text-align: end;
      font-variant-numeric: tabular-nums;
      color: var(--secondary-text-color);
    }

    input[type="color"] {
      width: 40px;
      height: 32px;
      padding: 0;
      flex-shrink: 0;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: none;
      cursor: pointer;
    }

    input[type="text"] {
      font: inherit;
      min-width: 0;
      padding: 6px 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .switch {
      appearance: none;
      position: relative;
      width: 40px;
      height: 22px;
      margin: 0;
      flex-shrink: 0;
      border-radius: 999px;
      background: var(--switch-unchecked-track-color, #bbb);
      cursor: pointer;
      transition: background-color 150ms;
    }

    .switch::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      transition: transform 150ms;
    }

    .switch:checked {
      background: var(--primary-color);
    }

    .switch:checked::after {
      transform: translateX(18px);
    }

    .switch:focus-visible,
    button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .segment {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 4px;
      margin: 4px 8px 8px 0;
      border-radius: 999px;
      background: var(--secondary-background-color);
    }

    .segment button {
      padding: 6px 14px;
      border-radius: 999px;
    }

    .segment button.active {
      background: var(--card-background-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
      font-weight: 500;
    }

    .segment.small button {
      padding: 4px 10px;
      font-size: 13px;
    }

    .segment small {
      display: inline;
      margin: 0 0 0 4px;
      font-size: 11px;
    }

    .bar {
      position: sticky;
      bottom: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 -16px;
      padding: 10px 16px calc(10px + env(safe-area-inset-bottom, 0px));
      background: var(--card-background-color);
      border-top: 1px solid var(--divider-color);
      min-height: 40px;
    }

    .bar button:not(.primary) {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-radius: 999px;
    }

    .bar .grow {
      flex: 1;
      min-width: 120px;
      color: var(--secondary-text-color);
    }

    .choices-title {
      margin: 8px 0 12px;
      font-size: 18px;
    }

    .choices {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }

    .choice {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      padding: 18px;
      text-align: start;
      border-radius: var(--ss-radius, 12px);
      border: 1px solid var(--divider-color);
      background: var(--ha-card-background, var(--card-background-color));
      transition: border-color 120ms, transform 120ms;
    }

    .choice:hover {
      border-color: var(--primary-color);
      transform: translateY(-1px);
    }

    .choice ha-icon {
      color: var(--primary-color);
      --mdc-icon-size: 32px;
      margin-bottom: 4px;
    }

    .choice b {
      font-size: 16px;
    }

    .choice span {
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin: 0 0 12px;
      padding: 6px 10px 6px 4px;
      border-radius: 999px;
      color: var(--primary-color);
      font-weight: 500;
    }

    .steps {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .step {
      border-radius: var(--ss-radius, 12px);
      border: 1px solid var(--divider-color);
      background: var(--ha-card-background, var(--card-background-color));
    }

    .step.open {
      border-color: var(--primary-color);
    }

    .step.later {
      opacity: 0.55;
    }

    .step-head {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      text-align: start;
    }

    .step-head:disabled {
      opacity: 1;
    }

    .number {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      border-radius: 50%;
      background: var(--secondary-background-color);
      font-weight: 600;
      --mdc-icon-size: 18px;
    }

    .step.open .number,
    .step.done .number {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }

    .step-title {
      font-size: 16px;
      font-weight: 500;
    }

    .step-summary {
      flex-basis: 100%;
      margin: 0 0 0 40px;
    }

    .step-body {
      padding: 0 16px 16px 56px;
    }

    @media (max-width: 600px) {
      .step-body {
        padding-left: 16px;
      }
    }

    .next {
      margin-top: 12px;
    }

    .more {
      margin-top: 12px;
      border-top: 1px solid var(--divider-color);
      padding-top: 8px;
    }

    .more summary {
      cursor: pointer;
      color: var(--secondary-text-color);
      font-size: 14px;
      padding: 6px 0;
    }
  `);var ra=i=>(i??"lovelace").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").slice(0,64);async function E(i,e){let t=[],s=i.panels?.lovelace;t.push({url_path:null,title:e,editable:(s?.config?.mode??"storage")==="storage"});try{let a=await i.callWS({type:"lovelace/dashboards/list"});for(let o of a)!o.url_path||o.url_path==="lovelace"||t.push({url_path:o.url_path,title:o.title||o.url_path,editable:o.mode==="storage"})}catch{}return t}async function y(i,e){return i.callWS({type:"lovelace/config",url_path:e,force:!1})}async function A(i,e,t,s){await i.callWS({type:"style_studio/backups/create",kind:"dashboards",key:ra(e),data:{url_path:e,config:t}}),await i.callWS({type:"lovelace/config/save",url_path:e,config:s})}function es(i,e,t){let s=0;for(let{card:a,match:o}of e)if(i.type==="sections"){i.sections??=[];let r=!1;for(let c of i.sections){let d=(c.cards??[]).findIndex(o);if(d!==-1){c.cards[d]=a,s+=1,r=!0;break}}if(r)continue;let l=i.sections.find(c=>(c.cards??[]).some(d=>d.type==="heading"&&d.heading===t));l||(l={type:"grid",cards:[{type:"heading",heading:t}]},i.sections.push(l)),l.cards.push(a)}else{i.cards??=[];let r=i.cards.findIndex(o);r!==-1?(i.cards[r]=a,s+=1):i.cards.push(a)}return s}async function ts(i,e){let t=()=>e.filter(s=>!customElements.get(s));if(!t().length)return[];try{let s=await i.callWS({type:"lovelace/resources"});for(let a of s)t().some(o=>a.url.includes(o.replace(/^hui-/,"")))&&(a.type==="module"?await import(a.url).catch(()=>{}):await new Promise(o=>{let r=document.createElement("script");r.src=a.url,r.onload=r.onerror=o,document.head.append(r)}))}catch{}return await Promise.race([Promise.all(e.map(s=>customElements.whenDefined(s))),new Promise(s=>setTimeout(s,3e3))]),t()}async function ss(i,e){let t=await window.loadCardHelpers?.().catch(()=>null);if(!t)return null;let s=t.createCardElement(e);return s.hass=i,s}var as=/(?<!var\([^)]*)#[0-9a-fA-F]{6}\b/g,is=/border-radius\s*:\s*(\d+(?:\.\d+)?px)/g,na=["primary-color","accent-color","state-light-active-color","state-climate-active-color","primary-text-color","secondary-text-color","card-background-color","primary-background-color","secondary-background-color","sidebar-background-color","app-header-background-color","divider-color","error-color","warning-color","success-color","info-color"];function la(i){let e=String(i).trim().toLowerCase();if(/^#[0-9a-f]{6}$/.test(e))return e;let t=e.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/);return t?`#${t.slice(1,4).map(s=>Number(s).toString(16).padStart(2,"0")).join("")}`:null}var ca={"#44739e":"state-icon-color","#03a9f4":"primary-color","#ff9800":"accent-color","#fdd835":"state-light-active-color","#212121":"primary-text-color","#727272":"secondary-text-color","#fafafa":"primary-background-color"};function os(i=document.documentElement){let e=getComputedStyle(i),t=new Map;for(let s of na){let a=la(e.getPropertyValue(`--${s}`));a&&!t.has(a)&&t.set(a,s)}for(let[s,a]of Object.entries(ca))t.has(s)||t.set(s,a);return t}var pt=i=>`var(--ha-card-border-radius, ${i})`,da=(i,e)=>`var(--${i}, ${e})`;function rs(i,e){let t=new Map,s=(o,r,l)=>{let c=`${o}:${r.toLowerCase()}`;if(!t.has(c)){let m=o==="color"?e.get(r.toLowerCase()):null;t.set(c,{kind:o,value:r,count:0,places:new Set,suggestion:o==="radius"?pt(r):m?da(m,r):null})}let d=t.get(c);d.count+=1,d.places.add(l)},a=(o,r)=>{if(Array.isArray(o)){o.forEach(l=>a(l,r));return}if(o&&typeof o=="object"){let l=o.type?`${r} \u203A ${String(o.type).replace(/^custom:/,"")}`:r;for(let[c,d]of Object.entries(o))c==="border-radius"&&typeof d=="string"&&/^\d+(\.\d+)?px$/.test(d.trim())?s("radius",d.trim(),l):a(d,l);return}if(typeof o=="string"){for(let l of o.matchAll(as))s("color",l[0],r);for(let l of o.matchAll(is))s("radius",l[1],r)}};return(i.views??[]).forEach((o,r)=>a(o,o.title??o.path??`${r+1}`)),[...t.values()].map(o=>({...o,places:[...o.places]})).sort((o,r)=>r.count-o.count)}function ns(i,e){let t=new Map(e.filter(r=>r.kind==="color"&&r.suggestion).map(r=>[r.value.toLowerCase(),r.suggestion])),s=new Set(e.filter(r=>r.kind==="radius").map(r=>r.value)),a=r=>r.replace(as,l=>t.get(l.toLowerCase())??l).replace(is,(l,c)=>s.has(c)?`border-radius: ${pt(c)}`:l),o=r=>Array.isArray(r)?r.map(o):r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([l,c])=>l==="border-radius"&&typeof c=="string"&&s.has(c.trim())?[l,pt(c.trim())]:[l,o(c)])):typeof r=="string"?a(r):r;return o(i)}var ls="isDefaultPanelManaged";function ha(i){try{return localStorage.getItem(i)}catch{return null}}var ce=class extends b{connectedCallback(){super.connectedCallback(),this._refresh()}async _refresh(){try{let[e,t,s]=await Promise.all([this.hass.callWS({type:"style_studio/check"}),this.hass.callWS({type:"style_studio/history/list"}),this.hass.callWS({type:"style_studio/backups/list",kind:"dashboards"})]);this._check=e,this._history=t,this._backups=s.backups}catch(e){this._error(e)}}async _scanDashboards(){this._run(async()=>{let e=os(),t=(await E(this.hass,this.hass.localize("panel.states")||"Overview")).filter(a=>a.editable),s=[];for(let a of t)try{let o=await y(this.hass,a.url_path);s.push({dashboard:a,findings:rs(o,e)})}catch{}this._scan=s,this._chosen=new Set(s.flatMap(a=>a.findings.filter(o=>o.suggestion).map(o=>this._findingKey(a.dashboard,o))))})}_findingKey(e,t){return`${e.url_path??""}|${t.kind}|${t.value.toLowerCase()}`}_toggle(e,t){let s=new Set(this._chosen);t?s.add(e):s.delete(e),this._chosen=s}_apply(e){let t=e.findings.filter(a=>a.suggestion&&this._chosen.has(this._findingKey(e.dashboard,a))),s=t.reduce((a,o)=>a+o.count,0);this._ask(this.t("ck_apply_confirm",{count:s,name:e.dashboard.title}),()=>this._run(async()=>{let a=await y(this.hass,e.dashboard.url_path);await A(this.hass,e.dashboard.url_path,a,ns(a,t)),await this._refresh(),await this._scanDashboards()},this.t("ck_applied",{name:e.dashboard.title})))}_fixBrowserMod(){this._ask(this.t("ck_fix_confirm"),()=>{try{localStorage.removeItem(ls)}catch{}this.requestUpdate(),this._showToast(this.t("ck_fixed"))})}_restoreHistory(e,t){this._ask(this.t("ck_restore_confirm"),()=>this._run(async()=>{await this.hass.callWS({type:"style_studio/history/restore",key:e,index:t}),await this._refresh()},this.t("ck_restored")))}_restoreBackup(e){this._ask(this.t("ck_restore_confirm"),()=>this._run(async()=>{let{data:t}=await this.hass.callWS({type:"style_studio/backups/read",kind:"dashboards",file:e.file}),s=await y(this.hass,t.url_path).catch(()=>({}));await A(this.hass,t.url_path,s,t.config),this._scan=null,await this._refresh()},this.t("ck_restored")))}_when(e){return new Date(e).toLocaleString(this.hass.locale?.language??"nl",{dateStyle:"medium",timeStyle:"short"})}render(){return this._check?n`
      <p class="intro">${this.t("check_intro")}</p>
      ${this._checksCard()} ${this._fixedCard()} ${this._restoreCard()} ${this._bar({})}
    `:h}_item(e,t,s=h){return n`<div class="item ${e?"ok":"warn"}">
      <ha-icon icon=${e?"mdi:check-circle":"mdi:alert-circle"}></ha-icon>
      <div class="text">${t}</div>
      ${s}
    </div>`}_checksCard(){let e=this._check,t=e.card_mod_themes.filter(u=>u.in_use),s=e.card_mod_themes.filter(u=>!u.in_use),a=t.filter(u=>u.sidebar),o=t.filter(u=>!u.sidebar),r=e.version_since?new Date(e.version_since).getTime():0,l=Date.now()-336*3600*1e3,c=e.devices.filter(u=>u.version!==e.version&&new Date(u.at).getTime()>l),d=c.filter(u=>new Date(u.at).getTime()>r),m=c.filter(u=>new Date(u.at).getTime()<=r),p=ha(ls)==="true",_=u=>n`<ul>
      ${u.map(f=>n`<li>
          ${this.t("ck_device",{user:f.user,kind:f.app?this.t("ck_app"):this.t("ck_browser"),version:f.version,when:this._when(f.at)})}
        </li>`)}
    </ul>`;return n`
      <div class="card">
        <div class="title-row">
          <h2>${this.t("ck_checks")}</h2>
          <button class="small" ?disabled=${this._busy} @click=${()=>this._refresh()}>
            <ha-icon icon="mdi:refresh"></ha-icon>${this.t("ck_again")}
          </button>
        </div>
        ${a.length?a.map(u=>e.glass_handles_themes?this._item(!0,this.t("ck_cardmod_handled",{theme:u.theme})):this._item(!e.glass_sidebar,this.t("ck_cardmod_sidebar",{theme:u.theme,keys:u.keys.join(", ")}))):this._item(!0,this.t("ck_no_cardmod"))}
        ${o.map(u=>this._item(!0,this.t("ck_cardmod_other",{theme:u.theme,keys:u.keys.join(", ")})))}
        ${s.length?this._item(!0,this.t(s.length===1?"ck_cardmod_unused_one":"ck_cardmod_unused",{count:s.length,names:s.map(u=>u.theme).join(", ")})):h}
        ${p?this._item(!1,this.t("ck_browser_mod"),n`<button class="small" @click=${this._fixBrowserMod}>${this.t("ck_fix")}</button>`):this._item(!0,this.t("ck_browser_mod_ok"))}
        ${e.themes_not_loaded.length?this._item(!1,this.t("ck_not_loaded",{names:e.themes_not_loaded.join(", ")})):this._item(!0,this.t("ck_loaded"))}
        ${d.length?this._item(!1,n`${this.t("ck_devices_old")} ${_(d)}
                <small>${this.t("ck_app_cache")}</small>`):this._item(!0,m.length?this.t("ck_devices_none_old"):this.t("ck_devices_ok",{version:e.version}))}
        ${m.length?this._item(!0,n`${this.t("ck_devices_waiting",{version:e.version})} ${_(m)}`):h}
      </div>
    `}_fixedCard(){return n`
      <div class="card">
        <h2>${this.t("ck_fixed_styles")}</h2>
        <p class="hint">${this.t("ck_fixed_hint")}</p>
        <button class="primary" ?disabled=${this._busy} @click=${this._scanDashboards}>
          ${this.t("ck_scan")}
        </button>
        ${this._scan?this._scan.every(e=>!e.findings.length)?n`<p>${this.t("ck_none_found")}</p>`:this._scan.filter(e=>e.findings.length).map(e=>this._dashboardFindings(e)):h}
      </div>
    `}_dashboardFindings(e){let t=e.findings.filter(s=>s.suggestion&&this._chosen.has(this._findingKey(e.dashboard,s)));return n`
      <div class="dashboard" data-dashboard=${e.dashboard.title}>
        <h3>${e.dashboard.title}</h3>
        ${e.findings.map(s=>{let a=this._findingKey(e.dashboard,s);return n`<label class="finding ${s.suggestion?"":"none"}">
            <input
              type="checkbox"
              aria-label=${s.value}
              ?disabled=${!s.suggestion}
              .checked=${C(this._chosen.has(a))}
              @change=${o=>this._toggle(a,o.target.checked)}
            />
            ${s.kind==="color"?n`<span class="swatch" style="background:${s.value}"></span>`:n`<ha-icon icon="mdi:rounded-corner"></ha-icon>`}
            <code>${s.value}</code>
            <span class="arrow">→</span>
            <code class="suggestion">${s.suggestion??this.t("ck_no_suggestion")}</code>
            <small title=${s.places.join(`
`)}>${s.count===1?this.t("ck_found_one"):this.t("ck_found",{count:s.count})} · ${s.places.slice(0,2).join(", ")}${s.places.length>2?" \u2026":""}</small>
          </label>`})}
        <button class="small" ?disabled=${this._busy||!t.length} @click=${()=>this._apply(e)}>
          ${this.t("ck_apply")}
        </button>
      </div>
    `}_restoreCard(){let e=[["themes",this.t("ck_themes")],["glass_sidebar",this.t("ck_glass")],["people",this.t("ck_people")]];return n`
      <div class="card">
        <h2>${this.t("ck_backups")}</h2>
        <details open>
          <summary>${this.t("ck_dashboards")} (${this._backups.length})</summary>
          ${this._backups.length?this._backups.map(t=>n`<div class="version">
                  <span>${t.key}</span>
                  <small>${this._when(t.saved_at)}</small>
                  <button class="small" ?disabled=${this._busy} @click=${()=>this._restoreBackup(t)}>
                    ${this.t("ck_restore")}
                  </button>
                </div>`):n`<p class="hint">${this.t("ck_nothing")}</p>`}
        </details>
        ${e.map(([t,s])=>n`<details>
            <summary>${s} (${this._history[t].length})</summary>
            ${this._history[t].length?this._history[t].map(a=>n`<div class="version">
                    <span>${a.summary}</span>
                    <small>${this._when(a.saved_at)}</small>
                    <button
                      class="small"
                      ?disabled=${this._busy}
                      @click=${()=>this._restoreHistory(t,a.index)}
                    >
                      ${this.t("ck_restore")}
                    </button>
                  </div>`):n`<p class="hint">${this.t("ck_nothing")}</p>`}
          </details>`)}
      </div>
    `}};g(ce,"properties",{...b.properties,_check:{state:!0},_scan:{state:!0},_chosen:{state:!0},_history:{state:!0},_backups:{state:!0}}),g(ce,"styles",[b.styles,v`
      .title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px 0;
        border-top: 1px solid var(--divider-color);
        line-height: 1.4;
      }

      .item .text {
        flex: 1;
      }

      .item ul {
        margin: 4px 0;
        padding-inline-start: 18px;
      }

      .item.ok > ha-icon {
        color: var(--success-color, #43a047);
      }

      .item.warn > ha-icon {
        color: var(--warning-color, #ffa600);
      }

      .small {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 999px;
        color: var(--primary-color);
        font-weight: 500;
        white-space: nowrap;
      }

      .dashboard {
        margin-top: 16px;
        padding-top: 8px;
        border-top: 1px solid var(--divider-color);
      }

      h3 {
        margin: 4px 0 8px;
        font-size: 15px;
        font-weight: 500;
      }

      .finding {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 6px 0;
      }

      .finding.none {
        opacity: 0.6;
      }

      .finding input {
        accent-color: var(--primary-color);
      }

      .finding small {
        flex-basis: 100%;
        margin: 0 0 0 26px;
      }

      .swatch {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
      }

      code {
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 6px;
        background: var(--secondary-background-color);
      }

      .arrow {
        color: var(--secondary-text-color);
      }

      details {
        border-top: 1px solid var(--divider-color);
        padding: 8px 0;
      }

      summary {
        cursor: pointer;
        font-weight: 500;
      }

      .version {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
      }

      .version span {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .version small {
        margin: 0;
      }
    `]);customElements.get("ss-check-tab")||customElements.define("ss-check-tab",ce);function ut(i,e,t){if(typeof i!="string"||!i.trim().startsWith("[[["))return i;let s=i.trim().slice(3,-3);try{return new Function("entity","states","hass","variables",s)(t,e.states,e,{})}catch{return""}}var de=class extends w{constructor(){super(),this.needs=[],this._real=null,this._missing=null}async updated(e){if(e.has("config")||e.has("needs")){let t=await ts(this.hass,this.needs);this._missing=t;let s=t.length?null:await ss(this.hass,this.config);this._real=s}this._real&&(this._real.hass=this.hass)}render(){return this.config?this.bare?this._real??this._draw(this.config):n`
      ${this._missing?.length?n`<p class="warning">${this.t("needs_cards",{cards:this._missing.join(", ")})}</p>`:h}
      <small>${this._real?this.t("preview_real"):this.t("preview_drawing")}</small>
      <div class="frame">${this._real??this._draw(this.config)}</div>
    `:h}_draw(e){let t=this.hass.states?.[e.entity];switch(e.type){case"vertical-stack":return n`<div class="stack">${e.cards.map(s=>this._draw(s))}</div>`;case"horizontal-stack":return n`<div class="hstack">${e.cards.map(s=>this._draw(s))}</div>`;case"grid":return n`
          ${e.title?n`<div class="title">${e.title}</div>`:h}
          <div class="grid" style="grid-template-columns: repeat(${e.columns??3}, minmax(0, 1fr))">
            ${e.cards.map(s=>this._draw(s))}
          </div>
        `;case"heading":return n`<div class="title big">${e.heading}</div>`;case"custom:button-card":{let s=(e.state??[]).find(l=>l.operator==="template"&&ut(l.value,this.hass,t)),a=s?s.styles?.card?"active":"lit":"",o=(e.styles?.grid??[]).some(l=>l["grid-template-areas"]),r=(e.styles?.card??[]).map(l=>Object.entries(l)[0]).filter(([l])=>l==="height");return n`<div
          class="button ${a} ${o?"room":""}"
          style=${r.map(([l,c])=>`${l}:${c}`).join(";")}
        >
          ${e.show_icon!==!1&&e.icon?o?n`<span class="room-icon"><ha-icon .icon=${e.icon}></ha-icon></span>`:n`<ha-icon .icon=${e.icon}></ha-icon>`:h}
          ${e.show_name!==!1&&e.name?n`<span class="name ${e.styles?.name?.some(l=>l["font-size"]==="28px")?"huge":""}">${ut(e.name,this.hass,t)}</span>`:h}
          ${e.show_label?n`<small>${ut(e.label,this.hass,t)}</small>`:h}
        </div>`}case"custom:bubble-card":return e.card_type==="pop-up"?n`<div class="popup-head">
            <span class="round"><ha-icon .icon=${e.icon??"mdi:circle"}></ha-icon></span>
            <b>${e.name}</b>
            <code>${e.hash}</code>
          </div>`:n`<div class="pill">
          <span class="round"><ha-icon .icon=${e.icon??t?.attributes?.icon??"mdi:lightbulb"}></ha-icon></span>
          <b>${e.name??t?.attributes?.friendly_name??e.entity}</b>
          <small>${t?t.attributes?.[e.attribute]??t.state:""}${e.attribute==="current_temperature"?"\xB0":""}</small>
        </div>`;case"tile":return n`<div class="tile ${t?.state==="on"?"on":""}">
          <span class="round"><ha-icon .icon=${t?.attributes?.icon??"mdi:lightbulb"}></ha-icon></span>
          <span><b>${e.name??t?.attributes?.friendly_name??e.entity}</b><small>${t?.state??""}</small></span>
        </div>`;case"markdown":{let s=String(e.content??"").replace(/\{%[\s\S]*?%\}/g,"").replace(/\{\{[\s\S]*?\}\}/g,"\u2026").split(`
`).filter(a=>a.trim());return n`<div class="markdown">
          ${s.map(a=>a.startsWith("#")?n`<b class="md-title">${a.replace(/^#+\s*/,"")}</b>`:n`<span>${a.replace(/\*\*/g,"")}</span>`)}
        </div>`}case"weather-forecast":return n`<div class="tile weather">
          <span class="round"><ha-icon icon="mdi:weather-partly-cloudy"></ha-icon></span>
          <span><b>${t?.attributes?.friendly_name??e.entity}</b><small>${t?`${t.state} \xB7 ${t.attributes?.temperature??""}\xB0`:""}</small></span>
        </div>`;default:return n`<div class="unknown">${e.type}</div>`}}};g(de,"properties",{hass:{attribute:!1},config:{attribute:!1},needs:{attribute:!1},t:{attribute:!1},bare:{type:Boolean},_real:{state:!0},_missing:{state:!0}}),g(de,"styles",v`
    :host {
      display: block;
    }

    small {
      display: block;
      color: var(--secondary-text-color);
      font-size: 12px;
      margin-bottom: 6px;
    }

    .warning {
      margin: 0 0 8px;
      padding: 10px 12px;
      border-radius: 10px;
      background: color-mix(in srgb, var(--warning-color, #ffa600) 16%, var(--card-background-color));
      font-size: 13px;
      line-height: 1.4;
    }

    .frame {
      padding: 14px;
      border-radius: 24px;
      background: var(--bubble-pop-up-background-color, var(--card-background-color));
      border: 1px solid var(--divider-color);
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hstack {
      display: flex;
      gap: 10px;
    }

    .title {
      margin: 6px 0 -2px 4px;
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
    }

    .title.big {
      font-size: 16px;
      color: var(--primary-text-color);
    }

    .grid {
      display: grid;
      gap: 8px;
    }

    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 64px;
      padding: 8px 4px;
      border-radius: 18px;
      background: var(--bubble-main-background-color, var(--secondary-background-color));
      text-align: center;
      font-size: 13px;
      font-weight: 500;
    }

    .button small {
      margin: 0;
    }

    .button.active {
      background: var(--state-climate-active-color, var(--primary-color));
      color: var(--text-primary-color, #fff);
    }

    .button.active small {
      color: inherit;
    }

    .button.room {
      align-items: flex-start;
      text-align: start;
      min-height: 96px;
      padding: 14px;
      border-radius: var(--ha-card-border-radius, 16px);
      background: var(--ha-card-background, var(--card-background-color));
      border: 1px solid var(--divider-color);
      font-weight: 600;
    }

    .button.room .room-icon {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--secondary-background-color);
      color: var(--state-icon-color);
      --mdc-icon-size: 22px;
      margin-bottom: 6px;
    }

    .button.room.lit .room-icon {
      background: var(--bubble-icon-background-color, var(--secondary-background-color));
      color: var(--state-light-active-color);
    }

    .button.room small {
      font-weight: 400;
    }

    .name.huge {
      font-size: 28px;
      font-weight: 600;
    }

    .popup-head,
    .pill,
    .tile {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .popup-head code {
      margin-inline-start: auto;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    .pill,
    .tile {
      padding: 8px;
      border-radius: 999px;
      background: var(--bubble-main-background-color, var(--secondary-background-color));
    }

    .tile {
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--ha-card-background, var(--card-background-color));
      border: 1px solid var(--divider-color);
    }

    .tile small,
    .pill small {
      margin: 0;
    }

    .pill small {
      margin-inline-start: auto;
      padding-inline-end: 8px;
    }

    .round {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      flex-shrink: 0;
      background: color-mix(in srgb, var(--primary-color) 18%, transparent);
      color: var(--primary-color);
    }

    .tile.on .round {
      color: var(--state-light-active-color, var(--primary-color));
    }

    .markdown {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px;
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--ha-card-background, var(--card-background-color));
      border: 1px solid var(--divider-color);
      font-size: 13px;
    }

    .md-title {
      font-size: 18px;
    }

    .unknown {
      padding: 8px;
      border: 1px dashed var(--divider-color);
      border-radius: 8px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `);customElements.get("ss-card-preview")||customElements.define("ss-card-preview",de);var pa={off:"mdi:power",cool:"mdi:snowflake",heat:"mdi:fire",auto:"mdi:thermostat-auto",dry:"mdi:water-percent",fan_only:"mdi:fan",heat_cool:"mdi:sun-snowflake-variant"},ua={auto:"mdi:fan-auto",low:"mdi:fan-speed-1",medium:"mdi:fan-speed-2",middle:"mdi:fan-speed-2",high:"mdi:fan-speed-3"},Y=i=>String(i).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"airco";function Ke(i){let e=i?.attributes??{},t=s=>{if(!Array.isArray(s)||s.length<2)return null;let a=s.find(r=>String(r).toLowerCase()==="off"),o=s.find(r=>r!==a);return a&&o?{off:a,on:o}:null};return{modes:Array.isArray(e.hvac_modes)?e.hvac_modes:[],fanModes:Array.isArray(e.fan_modes)?e.fan_modes:[],swing:t(e.swing_modes),swingHorizontal:t(e.swing_horizontal_modes),temperature:e.temperature!==void 0||e.target_temp_low===void 0,min:Number(e.min_temp??16),max:Number(e.max_temp??30),step:Number(e.target_temp_step??.5)}}function cs(i,e,t){let s=Ke(e);return{entity:i,name:t,hash:`#airco-${Y(t.replace(/^airco\s*/i,"")||i.split(".")[1])}`,modes:[...s.modes],fan:s.fanModes.length>0,swing:!!s.swing,swing_horizontal:!!s.swingHorizontal,temperature:s.temperature,opener:!0}}var _a={card:[{"background-color":"var(--state-climate-active-color, var(--primary-color))"}],name:[{color:"var(--text-primary-color, #fff)"}],icon:[{color:"var(--text-primary-color, #fff)"}],label:[{color:"var(--text-primary-color, #fff)"}]};function U(i,{name:e,icon:t,tap:s,active:a,extra:o={}}){return{type:"custom:button-card",entity:i,name:e,icon:t,show_state:!1,show_name:!0,show_icon:!!t,tap_action:s??{action:"none"},hold_action:{action:"none"},styles:{card:[{"border-radius":"18px"},{padding:"10px 4px"},{"box-shadow":"none"},{"background-color":"var(--bubble-main-background-color, var(--secondary-background-color))"}],name:[{"font-size":"13px"},{"font-weight":"500"}],icon:[{width:"24px"}]},...a?{state:[{operator:"template",value:`[[[ return ${a}; ]]]`,styles:_a}]}:{},...o}}var q=(i,e,t)=>({action:"perform-action",perform_action:e,target:{entity_id:i},data:t});function ds(i,e,t){let{entity:s}=i,a=Ke(e),o=[{type:"custom:bubble-card",card_type:"pop-up",hash:i.hash,name:i.name,icon:"mdi:air-conditioner",entity:s}];if(i.temperature){let _=S=>`Math.round((${S}) * 10) / 10`,u=`Number(entity.attributes.temperature ?? ${a.min})`,f={card:[{height:"88px"}],icon:[{width:"36px"}]};o.push({type:"grid",columns:3,square:!1,cards:[U(s,{icon:"mdi:minus",tap:q(s,"climate.set_temperature",{temperature:`[[[ return Math.max(${a.min}, ${_(`${u} - ${a.step}`)}); ]]]`}),extra:{show_name:!1,styles:{card:f.card,icon:f.icon}}}),U(s,{name:"[[[ return (entity.attributes.temperature ?? '\u2013') + '\xB0'; ]]]",extra:{show_label:!0,label:`[[[ return '${t.now} ' + (entity.attributes.current_temperature ?? '\u2013') + '\xB0'; ]]]`,styles:{card:f.card,name:[{"font-size":"28px"},{"font-weight":"600"}],label:[{"font-size":"12px"},{opacity:"0.7"}]}}}),U(s,{icon:"mdi:plus",tap:q(s,"climate.set_temperature",{temperature:`[[[ return Math.min(${a.max}, ${_(`${u} + ${a.step}`)}); ]]]`}),extra:{show_name:!1,styles:{card:f.card,icon:f.icon}}})]})}let r=a.modes.filter(_=>i.modes.includes(_));r.length&&o.push({type:"grid",title:t.mode,columns:Math.min(r.length,3),square:!1,cards:r.map(_=>U(s,{name:t.modes[_]??_,icon:pa[_]??"mdi:thermostat",tap:q(s,"climate.set_hvac_mode",{hvac_mode:_}),active:`entity.state === '${_}'`}))}),i.fan&&a.fanModes.length&&o.push({type:"grid",title:t.fan,columns:Math.min(a.fanModes.length,4),square:!1,cards:a.fanModes.map(_=>U(s,{name:t.fanModes[_]??String(_).charAt(0).toUpperCase()+String(_).slice(1),icon:ua[_]??"mdi:fan",tap:q(s,"climate.set_fan_mode",{fan_mode:_}),active:`entity.attributes.fan_mode === '${_}'`}))});let l=[];if(i.swing&&a.swing){let{on:_,off:u}=a.swing;l.push(U(s,{name:t.swingVertical,icon:"mdi:arrow-up-down",tap:q(s,"climate.set_swing_mode",{swing_mode:`[[[ return entity.attributes.swing_mode === '${u}' ? '${_}' : '${u}'; ]]]`}),active:`entity.attributes.swing_mode !== '${u}'`}))}if(i.swing_horizontal&&a.swingHorizontal){let{on:_,off:u}=a.swingHorizontal;l.push(U(s,{name:t.swingHorizontal,icon:"mdi:arrow-left-right",tap:q(s,"climate.set_swing_horizontal_mode",{swing_horizontal_mode:`[[[ return entity.attributes.swing_horizontal_mode === '${u}' ? '${_}' : '${u}'; ]]]`}),active:`entity.attributes.swing_horizontal_mode !== '${u}'`}))}l.length&&o.push({type:"grid",title:t.swing,columns:l.length,square:!1,cards:l});let[c,...d]=o,m=Ve(c,d),p=i.opener?{type:"custom:bubble-card",card_type:"button",button_type:"name",entity:s,name:i.name,icon:"mdi:air-conditioner",show_state:!0,show_attribute:!0,attribute:"current_temperature",tap_action:{action:"navigate",navigation_path:i.hash},button_action:{tap_action:{action:"navigate",navigation_path:i.hash}}}:null;return{popup:m,opener:p}}var hs=i=>e=>Xt(e)?.hash===i,ps=i=>e=>e?.type==="custom:bubble-card"&&e.card_type==="button"&&(e.tap_action?.navigation_path===i||e.button_action?.tap_action?.navigation_path===i);var I=["button-card","bubble-card"],he=class extends b{constructor(){super(),this._options={},this._dashboard=null,this._views=null,this._view=0,this._step=0}connectedCallback(){super.connectedCallback();let e=this._entities()[0];e&&this._pickEntity(e),this._loadDashboards()}_entities(){return Object.keys(this.hass.states).filter(e=>e.startsWith("climate.")).sort()}_defaultName(e){let t=this.hass.entities?.[e],s=t?.area_id??this.hass.devices?.[t?.device_id]?.area_id,a=s?this.hass.areas?.[s]?.name:null,o=this.hass.states[e]?.attributes?.friendly_name??e;return a?`${this.t("cl_section")} ${a.toLowerCase()}`:o}_pickEntity(e){this._entity=e,this._options[e]||(this._options={...this._options,[e]:cs(e,this.hass.states[e],this._defaultName(e))})}get _opts(){return this._options[this._entity]}_set(e,t){this._options={...this._options,[this._entity]:{...this._opts,[e]:t}}}async _loadDashboards(){this._dashboards=await E(this.hass,this.hass.localize("panel.states")||"Overview");let e=this._dashboards.find(t=>t.editable)??this._dashboards[0];e&&this._pickDashboard(e.url_path)}async _pickDashboard(e){this._dashboard=e,this._views=null;try{let t=await y(this.hass,e);this._views=t.views??[],this._view=0}catch(t){this._views=[],this._error(t)}}get _labels(){let e=this.t,t=Object.fromEntries(["off","cool","heat","auto","dry","fan_only","heat_cool"].map(a=>[a,e(`mode_${a}`)])),s=Object.fromEntries(["auto","low","medium","middle","high"].map(a=>[a,e(`fan_${a}`)]));return{now:e("cl_now_label"),mode:e("cl_modes"),fan:e("cl_fan"),swing:e("cl_swing_title"),swingVertical:e("cl_swing_v"),swingHorizontal:e("cl_swing_h"),modes:t,fanModes:s}}_cards(){return ds(this._opts,this.hass.states[this._entity],this._labels)}_put(){let e=this._dashboards.find(a=>a.url_path===this._dashboard),t=this._views[this._view],s=t?.title??t?.path??`${this._view+1}`;this._ask(this.t("cl_add_confirm",{hash:this._opts.hash,view:s}),()=>this._run(async()=>{let a=await y(this.hass,e.url_path),o=JSON.parse(JSON.stringify(a)),r=o.views[this._view],{popup:l,opener:c}=this._cards(),d=[{card:l,match:hs(this._opts.hash)}];c&&d.push({card:c,match:ps(this._opts.hash)});let m=es(r,d,this.t("cl_section"));await A(this.hass,e.url_path,a,o),this._views=o.views,this._showToast(this.t("cl_added",{view:s,replaced:m}))}))}render(){let e=this._entities();if(!e.length)return n`<p class="intro">${this.t("climate_intro")}</p>
        <div class="card"><p class="hint">${this.t("no_climate")}</p></div>`;let t=this._opts,{popup:s}=this._cards(),a=d=>this._step=d,o=this._views?.[this._view],r=(this._dashboards??[]).find(d=>d.url_path===this._dashboard),l=!this._busy&&r?.editable&&o&&o.type!=="panel",c=[{title:this.t("cl_st_which"),summary:this.hass.states[this._entity]?.attributes.friendly_name??this._entity,content:n`<div class="tiles">
          ${e.map(d=>n`<button class="tile ${d===this._entity?"active":""}" @click=${()=>this._pickEntity(d)}>
              <ha-icon icon="mdi:air-conditioner"></ha-icon>${this.hass.states[d].attributes.friendly_name??d}
            </button>`)}
        </div>`},{title:this.t("cl_st_parts"),summary:this._partsSummary(),content:this._parts()},{title:this.t("st_where"),content:this._place(s)}];return n`
      <p class="intro">${this.t("climate_intro")}</p>
      <div class="layout">
        <div>
          ${this._steps(c,this._step,a,n`<button class="primary next" ?disabled=${!l} @click=${this._put}>${this.t("cl_add")}</button>`)}
        </div>
        <aside class="card preview">
          <h2>${this.t("preview")}</h2>
          <div class="popup-title">
            <ha-icon icon="mdi:air-conditioner"></ha-icon><b>${t.name}</b>
          </div>
          <ss-card-preview
            .hass=${this.hass}
            .t=${this.t}
            .needs=${I}
            .config=${{type:"vertical-stack",cards:G(s)}}
          ></ss-card-preview>
        </aside>
      </div>
      ${this._bar({canSave:!1})}
    `}_partsSummary(){let e=this._opts,t=[];return e.temperature&&t.push(this.t("cl_short_temperature")),e.modes.length&&t.push(this.t("cl_short_modes",{count:e.modes.length})),e.fan&&t.push(this.t("cl_fan")),(e.swing||e.swing_horizontal)&&t.push(this.t("cl_swing_title")),t.join(" \xB7 ")}_parts(){let e=this._opts,t=Ke(this.hass.states[this._entity]);return n`
      ${this._switch(e,"temperature",this.t("cl_temperature"),this.t("cl_temperature_hint",{min:t.min,max:t.max,step:t.step}))}
      <div class="row column">
        <span>${this.t("cl_modes")}</span>
        <div class="modes">
          ${t.modes.map(s=>n`<label class="mode">
              <input
                type="checkbox"
                .checked=${C(e.modes.includes(s))}
                @change=${a=>this._set("modes",a.target.checked?[...e.modes,s]:e.modes.filter(o=>o!==s))}
              />
              ${this.t(`mode_${s}`)}
            </label>`)}
        </div>
      </div>
      ${t.fanModes.length?this._switch(e,"fan",this.t("cl_fan"),t.fanModes.join(", ")):this._unavailable(this.t("cl_fan"),this.t("cl_fan_none"))}
      ${t.swing?this._switch(e,"swing",this.t("cl_swing_v")):this._unavailable(this.t("cl_swing_v"),this.t("cl_swing_none"))}
      ${t.swingHorizontal?this._switch(e,"swing_horizontal",this.t("cl_swing_h")):this._unavailable(this.t("cl_swing_h"),this.t("cl_swing_none"))}
      <p class="note"><ha-icon icon="mdi:information-outline"></ha-icon>${this.t("cl_louvers")}</p>
    `}_unavailable(e,t){return n`<div class="row off">
      <span>${e}<small>${t}</small></span>
      <ha-icon icon="mdi:minus-circle-outline"></ha-icon>
    </div>`}_place(e){let t=this._opts,s=this._dashboards??[],a=s.find(r=>r.url_path===this._dashboard),o=this._views?.[this._view];return n`
      ${s.length>1?n`<label class="row">
            <span>${this.t("cl_dashboard")}</span>
            <select @change=${r=>this._pickDashboard(r.target.value||null)}>
              ${s.map(r=>n`<option value=${r.url_path??""} ?selected=${r.url_path===this._dashboard}>${r.title}</option>`)}
            </select>
          </label>`:h}
      ${a&&!a.editable?this._warning(this.t("cl_readonly")):h}
      <label class="row">
        <span>${this.t("lbl_page")}</span>
        <select @change=${r=>this._view=Number(r.target.value)}>
          ${(this._views??[]).map((r,l)=>n`<option value=${l} ?selected=${l===this._view}>${r.title??r.path??l+1}</option>`)}
        </select>
      </label>
      ${o?.type==="panel"?this._warning(this.t("cl_panel_view")):h}
      ${this._switch(t,"opener",this.t("cl_opener"))}
      <p class="hint">${this.t("cl_place_hint")}</p>
      ${this._more(n`
        <label class="row">
          <span>${this.t("cl_name")}</span>
          <input type="text" .value=${t.name} @input=${r=>this._set("name",r.target.value)} />
        </label>
        <label class="row">
          <span>
            ${this.t("cl_hash")}
            <small>${this.t("cl_hash_hint",{hash:t.hash})}</small>
          </span>
          <input
            type="text"
            .value=${t.hash}
            @change=${r=>{let l=r.target.value.trim().replace(/^#?/,"#").replace(/[^#a-z0-9_-]/gi,"-");this._set("hash",l.length>1?l:t.hash)}}
          />
        </label>
        ${this._popupFormat()}
        <p class="hint">${this.t("cl_code_hint")}</p>
        <button
          class="small"
          @click=${async()=>{await navigator.clipboard?.writeText(JSON.stringify(e,null,2)),this._showToast(this.t("copied"))}}
        >
          <ha-icon icon="mdi:content-copy"></ha-icon>${this.t("copy")}
        </button>
        <pre>${JSON.stringify(e,null,2)}</pre>
      `)}
    `}};g(he,"properties",{...b.properties,_entity:{state:!0},_options:{state:!0},_dashboards:{state:!0},_dashboard:{state:!0},_views:{state:!0},_view:{state:!0},_step:{state:!0}}),g(he,"styles",[b.styles,v`
      .tiles {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tile {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }

      .tile ha-icon {
        color: var(--primary-color);
      }

      .tile.active {
        border-color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
      }

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }

      .chip.active {
        border-color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
      }

      .row.column {
        flex-direction: column;
        align-items: stretch;
      }

      .modes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 14px;
      }

      .mode {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .mode input {
        accent-color: var(--primary-color);
      }

      .note {
        display: flex;
        gap: 8px;
        margin: 8px 0 0;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }

      .note ha-icon {
        flex-shrink: 0;
        --mdc-icon-size: 18px;
      }

      select {
        font: inherit;
        max-width: 220px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .place {
        margin-top: 8px;
      }

      .small {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 999px;
        color: var(--primary-color);
        font-weight: 500;
      }

      summary {
        cursor: pointer;
        font-weight: 500;
      }

      pre {
        max-height: 320px;
        overflow: auto;
        padding: 10px;
        border-radius: 8px;
        background: var(--secondary-background-color);
        font-size: 12px;
      }

      .popup-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .popup-title code {
        margin-inline-start: auto;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      @media (max-width: 600px) {
        .row {
          flex-wrap: wrap;
        }
      }
    `]);customElements.get("ss-climate-tab")||customElements.define("ss-climate-tab",he);var _t=i=>i==null?i:JSON.parse(JSON.stringify(i)),mt=(i,e)=>JSON.stringify(i??null)===JSON.stringify(e??null),pe=class extends b{connectedCallback(){super.connectedCallback(),this._load()}async _load(){try{this._accept(await this.hass.callWS({type:"style_studio/people/get"}))}catch(e){this._error(e)}}_accept(e){this._state=e,this._draft=this._fromSaved()}_fromSaved(){return Object.fromEntries(this._state.users.map(e=>{let t=this._state.persons[e.id]??{};return[e.id,{theme:t.theme??null,sidebar:_t(t.sidebar??null)}]}))}get dirty(){return!!this._state&&!mt(this._draft,this._fromSaved())}_setPerson(e,t){this._draft={...this._draft,[e]:{...this._draft[e],...t}},this._toast=null}_latest(e){return this._state.reports.find(t=>t.user_id===e)??null}_devices(e){return this._state.reports.filter(t=>t.user_id===e)}_save(){this._run(async()=>{this._accept(await this.hass.callWS({type:"style_studio/people/save",persons:this._draft})),clearTimeout(this._refresh),this._refresh=setTimeout(()=>!this.dirty&&this._load(),4e3)},this.t("saved"))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._refresh)}_undo(){this._ask(this.t("undo_confirm"),()=>this._run(async()=>{let e=await this.hass.callWS({type:"style_studio/people/undo"});if(!e.restored)throw new Error(this.t("nothing_to_undo"));this._accept(e)},this.t("undone")))}_when(e){let t=(new Date(e).getTime()-Date.now())/1e3,s=new Intl.RelativeTimeFormat(this.hass.locale?.language??"nl",{numeric:"auto"});for(let[a,o]of[["day",86400],["hour",3600],["minute",60]])if(Math.abs(t)>=o)return s.format(Math.round(t/o),a);return s.format(0,"minute")}render(){if(!this._state||!this._draft)return h;let{users:e,themes:t}=this._state;return n`
      <p class="intro">${this.t("people_intro")}</p>
      ${t.length?h:this._warning(this.t("no_themes_yet"))}
      ${this._state.not_loaded?.length?this._warning(this.t("people_not_loaded",{names:this._state.not_loaded.join(", ")})):h}
      <div class="people">${e.map(s=>this._person(s))}</div>
      ${this._bar({left:this._state.history?n`<button ?disabled=${this._busy} @click=${this._undo}>
              <ha-icon icon="mdi:history"></ha-icon>${this.t("undo")}
            </button>`:h,onCancel:()=>this._draft=this._fromSaved(),onSave:()=>this._save()})}
    `}_person(e){let t=this._draft[e.id],s=this._state.persons[e.id]??{},a=this._latest(e.id),o=this._devices(e.id),r=this._state.users.filter(c=>c.id!==e.id),l=r.filter(c=>this._latest(c.id)?.sidebar);return n`
      <div class="card person" data-user=${e.name}>
        <div class="head">
          <ha-icon icon=${e.is_admin?"mdi:account-star":"mdi:account"}></ha-icon>
          <div class="who">
            <h2>${e.name}</h2>
            <small>
              ${a?n`${this.t("last_seen",{when:this._when(a.at)})} ·
                  ${o.length===1?this.t("device_one"):this.t("devices",{count:o.length})}
                  ${o.some(c=>c.app)?n`<em>${this.t("app_badge")}</em>`:h}`:this.t("never_seen")}
            </small>
          </div>
        </div>

        <div class="row">
          <span>
            ${this.t("person_theme")}
            <small>${this.t("now_uses",{value:a?a.theme||this.t("ha_default"):this.t("unknown")})}</small>
            ${this._status(e,t.theme,s.theme,a?.theme,a)}
          </span>
          <select
            aria-label="${this.t("person_theme")} (${e.name})"
            .value=${t.theme??""}
            @change=${c=>this._setPerson(e.id,{theme:c.target.value||null})}
          >
            <option value="" ?selected=${!t.theme}>${this.t("self_choice")}</option>
            ${this._themeOptions(t.theme)}
          </select>
        </div>

        ${this._more(n`
        <div class="row">
          <span>
            ${this.t("person_sidebar")}
            <small>${this._sidebarSummary(t.sidebar??a?.sidebar)}</small>
            ${this._status(e,t.sidebar,s.sidebar,a?.sidebar,a)}
          </span>
          <select
            aria-label="${this.t("person_sidebar")} (${e.name})"
            @change=${c=>{let d=c.target.value;d===""?this._setPerson(e.id,{sidebar:null}):d!=="keep"&&this._setPerson(e.id,{sidebar:_t(this._latest(d).sidebar)})}}
          >
            <option value="" ?selected=${!t.sidebar}>${this.t("self_choice")}</option>
            ${t.sidebar?n`<option value="keep" selected>${this._sidebarSummary(t.sidebar)}</option>`:h}
            ${l.map(c=>n`<option value=${c.id}>${this.t("like_person",{name:c.name})}</option>`)}
            ${a?.sidebar?n`<option value=${e.id}>${this.t("like_person",{name:e.name})}</option>`:h}
          </select>
        </div>
          <label class="row copy">
            <span>${this.t("copy_all_from")}</span>
            <select
              aria-label="${this.t("copy_all_from")} (${e.name})"
              @change=${c=>{let d=c.target.value;if(c.target.value="",!d)return;let m=this._draft[d];this._setPerson(e.id,{theme:m.theme??this._latest(d)?.theme??null,sidebar:_t(m.sidebar??this._latest(d)?.sidebar??null)})}}
            >
              <option value="">${this.t("pick_person")}</option>
              ${r.map(c=>n`<option value=${c.id}>${c.name}</option>`)}
            </select>
          </label>
        `)}
      </div>
    `}_themeOptions(e){let t=[...this._state.themes];return e&&!t.includes(e)&&t.push(e),t.map(s=>n`<option ?selected=${s===e}>${s}</option>`)}_sidebarSummary(e){return e?[this.t("order_count",{count:e.panelOrder?.length??0}),this.t("hidden_count",{count:e.hiddenPanels?.length??0})].join(" \xB7 "):this.t("unknown")}_status(e,t,s,a,o){if(t==null||!mt(t,s))return h;let r=o&&mt(a,s);return n`<small class=${r?"ok":"wait"}>
      <ha-icon icon=${r?"mdi:check-circle":"mdi:clock-outline"}></ha-icon>
      ${r?this.t("applied"):this.t("pending",{name:e.name})}
    </small>`}};g(pe,"properties",{...b.properties,_state:{state:!0},_draft:{state:!0}}),g(pe,"styles",[b.styles,v`
      .people {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        gap: 16px;
      }

      @media (max-width: 600px) {
        .people {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .person {
        margin: 0;
      }

      .head {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color);
      }

      .head > ha-icon {
        color: var(--primary-color);
        --mdc-icon-size: 28px;
      }

      .who {
        flex: 1;
        min-width: 140px;
      }

      .who h2 {
        margin: 0;
      }

      .who small {
        margin: 0;
      }

      em {
        font-style: normal;
        font-size: 11px;
        padding: 1px 6px;
        margin-inline-start: 4px;
        border-radius: 999px;
        background: var(--secondary-background-color);
      }

      .copy {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      select {
        font: inherit;
        max-width: 200px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      small.ok,
      small.wait {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;
      }

      small.ok {
        color: var(--success-color, #43a047);
      }

      small ha-icon {
        --mdc-icon-size: 16px;
      }

      @media (max-width: 600px) {
        .row {
          flex-direction: column;
          align-items: stretch;
        }

        select {
          max-width: none;
        }
      }
    `]);customElements.get("ss-people-tab")||customElements.define("ss-people-tab",pe);var us=(i,e,t)=>{let s=new Map;for(let a=e;a<=t;a++)s.set(i[a],a);return s},_s=Ge(class extends K{constructor(i){if(super(i),i.type!==O.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);let a=[],o=[],r=0;for(let l of i)a[r]=s?s(l,r):r,o[r]=t(l,r),r++;return{values:o,keys:a}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,s]){let a=qt(i),{values:o,keys:r}=this.dt(e,t,s);if(!Array.isArray(a))return this.ut=r,o;let l=this.ut??=[],c=[],d,m,p=0,_=a.length-1,u=0,f=o.length-1;for(;p<=_&&u<=f;)if(a[p]===null)p++;else if(a[_]===null)_--;else if(l[p]===r[u])c[u]=D(a[p],o[u]),p++,u++;else if(l[_]===r[f])c[f]=D(a[_],o[f]),_--,f--;else if(l[p]===r[f])c[f]=D(a[p],o[f]),J(i,c[f+1],a[p]),p++,f--;else if(l[_]===r[u])c[u]=D(a[_],o[u]),J(i,a[p],a[_]),_--,u++;else if(d===void 0&&(d=us(r,u,f),m=us(l,p,_)),d.has(l[p]))if(d.has(l[_])){let S=m.get(r[u]),ee=S!==void 0?a[S]:null;if(ee===null){let te=J(i,a[p]);D(te,o[u]),c[u]=te}else c[u]=D(ee,o[u]),J(i,a[p],ee),a[S]=null;u++}else Ie(a[_]),_--;else Ie(a[p]),p++;for(;u<=f;){let S=J(i,c[f+1]);D(S,o[u]),c[u++]=S}for(;p<=_;){let S=a[p++];S!==null&&Ie(S)}return this.ut=r,Ue(i,c),$}});var ms=[{key:"sunset",from:"#f6d365",to:"#fda085",angle:135},{key:"ocean",from:"#2193b0",to:"#6dd5ed",angle:160},{key:"night",from:"#232526",to:"#414345",angle:180},{key:"sand",from:"#f4efe6",to:"#e6d9c3",angle:160},{key:"rose",from:"#fbd3e9",to:"#f6a5c0",angle:135}],gs=["#f4efe6","#fbf1f4","#e8f0fa","#e9f3ec","#2b2f36","#111418"],bs={kind:"image",url:"",color:"#f4efe6",from:"#f6d365",to:"#fda085",angle:135,fit:"cover",align:"center",fixed:!0,dim:0},gt=/^#[0-9a-f]{6}$/i,Je=i=>typeof i=="string"&&/^(\/|https?:\/\/)[^"'()\\\s]+$/.test(i),ma={cover:"cover",contain:"contain",tile:"auto"},ga=["center","top","bottom","left","right"];function bt(i,{preview:e=!1}={}){let t=i.fixed&&!e?" fixed":"";if(i.kind==="color")return gt.test(i.color)?i.color:null;if(i.kind==="gradient")return!gt.test(i.from)||!gt.test(i.to)?null:`linear-gradient(${Math.round(i.angle)}deg, ${i.from}, ${i.to})${t}`;if(i.kind!=="image"||!Je(i.url))return null;let s=[],a=Math.max(-60,Math.min(60,Math.round(i.dim||0)));if(a){let c=a<0?`rgba(0, 0, 0, ${-a/100})`:`rgba(255, 255, 255, ${a/100})`;s.push(`linear-gradient(${c}, ${c})${t}`)}let o=ga.includes(i.align)?i.align:"center",r=ma[i.fit]??"cover",l=i.fit==="tile"?"repeat":"no-repeat";return s.push(`${o} / ${r} ${l} url("${i.url}")${t} var(--primary-background-color)`),s.join(", ")}function fs(i){if(!i)return null;let e=typeof i=="string"?i:null;if(typeof i=="object")return i.image?{kind:"image",url:i.image}:{kind:"other"};let t=e.match(/url\((['"]?)(.*?)\1\)/);return t?{kind:"image",url:t[2]}:/gradient\(/i.test(e)?{kind:"gradient"}:/^\s*(#[0-9a-f]{3,8}|rgba?\(|hsla?\(|[a-z]+)\s*$/i.test(e)?{kind:"color"}:{kind:"other"}}var ba=2560;async function fa(i){let e={blob:i,name:i.name,shrunk:!1};if(/\.(gif|avif)$/i.test(i.name))return e;let t;try{t=await createImageBitmap(i)}catch{return e}let s=Math.min(1,ba/Math.max(t.width,t.height));if(s===1&&i.size<3e6)return e;let a=document.createElement("canvas");a.width=Math.round(t.width*s),a.height=Math.round(t.height*s);let o=a.getContext("2d");o.fillStyle="#ffffff",o.fillRect(0,0,a.width,a.height),o.drawImage(t,0,0,a.width,a.height);let r=await new Promise(l=>a.toBlob(l,"image/jpeg",.86));return!r||r.size>=i.size?e:{blob:r,name:i.name.replace(/\.[^.]+$/,"")+".jpg",shrunk:!0}}async function vs(i,e){let t=await fa(e),s=await i.fetchWithAuth(`/api/style_studio/upload?name=${encodeURIComponent(t.name)}`,{method:"POST",body:t.blob}),a=await s.json().catch(()=>({}));if(!s.ok){let o=new Error(a.message??`${s.status}`);throw o.code=a.code,o}return{...a,shrunk:t.shrunk}}var va=i=>JSON.parse(JSON.stringify(i)),ue=class extends b{constructor(){super(),this._b={...bs},this._pages=new Set([0]),this._photos=[],this._step=0}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._dashboards=(await E(this.hass,this.hass.localize("panel.states")||"Overview")).filter(e=>e.editable),this._dashboards[0]&&await this._pickDashboard(this._dashboards[0].url_path),await this._loadPhotos()}async _pickDashboard(e){this._dashboard=e;try{this._config=await y(this.hass,e)}catch{this._config={views:[]}}this._pages=new Set([0])}async _loadPhotos(){try{this._photos=(await this.hass.callWS({type:"style_studio/backgrounds/list"})).photos}catch(e){this._error(e)}}_set(e,t){this._b={...this._b,[e]:t},this._toast=null}get _views(){return this._config?.views??[]}_togglePage(e){let t=new Set(this._pages);t.has(e)?t.delete(e):t.add(e),this._pages=t}get _css(){return this._b.kind==="none"?null:bt(this._b)}_upload(e){e&&this._run(async()=>{try{let t=await vs(this.hass,e);await this._loadPhotos(),this._b={...this._b,kind:"image",url:t.url},this._showToast(t.shrunk?this.t("bg_uploaded_shrunk"):this.t("bg_uploaded"))}catch(t){let s={unsupported_type:"bg_err_type",too_big:"bg_err_big",not_a_picture:"bg_err_type"}[t.code];throw s?new Error(this.t(s)):t}})}_deletePhoto(e){this._ask(this.t("bg_delete_confirm",{name:e.name}),()=>this._run(async()=>{await this.hass.callWS({type:"style_studio/backgrounds/delete",name:e.name}),await this._loadPhotos(),this._b.url===e.url&&this._set("url","")},this.t("bg_deleted")))}_pageNames(){return[...this._pages].sort((e,t)=>e-t).map(e=>this._views[e]?.title??this._views[e]?.path??`${e+1}`).join(", ")}_save(){let e=this._css,t=this._b.kind==="none";this._ask(this.t(t?"bg_remove_confirm":"bg_confirm",{pages:this._pageNames()}),()=>this._run(async()=>{let s=await y(this.hass,this._dashboard),a=va(s);for(let o of this._pages){let r=a.views[o];r&&(t?delete r.background:r.background=e)}await A(this.hass,this._dashboard,s,a),this.dispatchEvent(new CustomEvent("done",{detail:this.t(t?"bg_removed":"bg_done")}))}))}render(){if(!this._dashboards)return h;if(!this._dashboards.length)return n`<div class="card"><p class="hint">${this.t("cl_readonly")}</p></div>`;let e=this._b,t=[["image",this.t("bg_kind_image")],["color",this.t("bg_kind_color")],["gradient",this.t("bg_kind_gradient")],["none",this.t("bg_kind_none")]],s=[{title:this.t("bg_st_page"),summary:this._pageNames(),ready:this._pages.size>0,content:this._pagePicker()},{title:this.t("bg_st_kind"),summary:t.find(([a])=>a===e.kind)?.[1],ready:e.kind!=="image"||Je(e.url),content:n`
          <div class="segment" role="radiogroup">
            ${t.map(([a,o])=>n`<button
                role="radio"
                data-kind=${a}
                aria-checked=${e.kind===a?"true":"false"}
                class=${e.kind===a?"active":""}
                @click=${()=>this._set("kind",a)}
              >
                ${o}
              </button>`)}
          </div>
          ${this._kindContent()}
        `},...e.kind==="image"?[{title:this.t("bg_st_look"),content:this._look()}]:[],{title:this.t("st_save"),content:n`<p class="hint">${this.t("bg_save_text",{pages:this._pageNames()})}</p>
          <p class="hint">${this.t("bg_theme_hint")}</p>`}];return n`
      <div class="layout">
        <div>
          ${this._steps(s,this._step,a=>this._step=a,n`<button class="primary next" ?disabled=${this._busy||this._pages.size===0||e.kind!=="none"&&!this._css} @click=${this._save}>
              ${e.kind==="none"?this.t("bg_remove"):this.t("bg_set")}
            </button>`)}
        </div>
        <aside class="card preview">
          <h2>${this.t("preview")}</h2>
          ${this._preview()}
        </aside>
      </div>
      ${this._bar({canSave:!1})}
    `}_pagePicker(){let e=this._views;return n`
      ${this._dashboards.length>1?n`<label class="row">
            <span>${this.t("cl_dashboard")}</span>
            <select @change=${t=>this._pickDashboard(t.target.value||null)}>
              ${this._dashboards.map(t=>n`<option value=${t.url_path??""} ?selected=${t.url_path===this._dashboard}>${t.title}</option>`)}
            </select>
          </label>`:h}
      <div class="tiles">
        ${e.map((t,s)=>{let a=fs(t.background);return n`<button
            class="tile ${this._pages.has(s)?"active":""}"
            aria-pressed=${this._pages.has(s)?"true":"false"}
            @click=${()=>this._togglePage(s)}
          >
            <ha-icon .icon=${t.icon??"mdi:view-dashboard-outline"}></ha-icon>
            <span>
              <b>${t.title??t.path??s+1}</b>
              ${a?n`<small>${this.t("bg_has")}</small>`:h}
            </span>
          </button>`})}
        ${e.length>1?n`<button
              class="tile"
              @click=${()=>this._pages=this._pages.size===e.length?new Set:new Set(e.keys())}
            >
              <ha-icon icon="mdi:select-all"></ha-icon>${this.t("bg_all_pages")}
            </button>`:h}
      </div>
    `}_kindContent(){let e=this._b;return e.kind==="none"?n`<p class="hint">${this.t("bg_none_text")}</p>`:e.kind==="color"?n`
        <div class="swatches">
          ${gs.map(t=>n`<button
              class="swatch ${e.color===t?"chosen":""}"
              style="background:${t}"
              aria-label=${t}
              @click=${()=>this._set("color",t)}
            ></button>`)}
        </div>
        ${this._color(e,"color",this.t("bg_color"))}
      `:e.kind==="gradient"?n`
        <div class="swatches">
          ${ms.map(t=>n`<button
              class="swatch wide"
              style="background:linear-gradient(${t.angle}deg, ${t.from}, ${t.to})"
              title=${this.t(`bg_preset_${t.key}`)}
              aria-label=${this.t(`bg_preset_${t.key}`)}
              @click=${()=>this._b={...e,from:t.from,to:t.to,angle:t.angle}}
            ></button>`)}
        </div>
        ${this._color(e,"from",this.t("bg_from"))} ${this._color(e,"to",this.t("bg_to"))}
        ${this._slider(e,"angle",this.t("bg_angle"),0,360,"\xB0")}
      `:this._photoPicker()}_photoPicker(){let e=this._b;return n`
      <input
        type="file"
        hidden
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
        @change=${t=>{this._upload(t.target.files[0]),t.target.value=""}}
      />
      <button
        class="primary upload"
        ?disabled=${this._busy}
        @click=${()=>this.renderRoot.querySelector('input[type="file"]').click()}
      >
        <ha-icon icon="mdi:upload"></ha-icon>${this._busy?this.t("bg_uploading"):this.t("bg_upload")}
      </button>
      <small class="hint">${this.t("bg_upload_hint")}</small>
      ${this._photos.length?n`<div class="photos">
            ${this._photos.slice(0,60).map(t=>n`<div class="photo ${e.url===t.url?"chosen":""}">
                <button
                  class="thumb"
                  title=${t.name}
                  aria-label=${t.name}
                  aria-pressed=${e.url===t.url?"true":"false"}
                  @click=${()=>this._set("url",t.url)}
                >
                  <img src=${t.url} alt="" loading="lazy" />
                </button>
                ${t.source==="upload"?n`<button class="remove" title=${this.t("bg_delete_photo")} aria-label="${this.t("bg_delete_photo")} ${t.name}" @click=${()=>this._deletePhoto(t)}>
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>`:h}
              </div>`)}
          </div>`:n`<p class="hint">${this.t("bg_no_photos")}</p>`}
      ${this._more(n`
        <label class="row">
          <span>
            ${this.t("bg_url")}
            <small>${this.t("bg_url_hint")}</small>
          </span>
          <input
            type="text"
            .value=${e.url}
            placeholder="/local/foto.jpg"
            @change=${t=>Je(t.target.value.trim())&&this._set("url",t.target.value.trim())}
          />
        </label>
      `)}
    `}_look(){let e=this._b;return n`
      <div class="row">
        <span>${this.t("bg_fit")}</span>
        ${this._segment(e,"fit",[["cover",this.t("bg_fit_cover")],["contain",this.t("bg_fit_contain")],["tile",this.t("bg_fit_tile")]])}
      </div>
      ${this._slider(e,"dim",this.t("bg_dim"),-60,60,"%",!1,this.t("bg_dim_hint"))}
      ${this._switch(e,"fixed",this.t("bg_fixed"))}
      ${this._more(n`
        <div class="row">
          <span>${this.t("bg_align")}</span>
          ${this._segment(e,"align",["center","top","bottom","left","right"].map(t=>[t,this.t(`bg_align_${t}`)]))}
        </div>
      `)}
    `}_preview(){let e=this._b.kind==="none"?null:bt(this._b,{preview:!0});return n`
      <div class="page" style=${e?`background:${e}`:""}>
        <div class="fake-card wide"><b></b><i></i></div>
        <div class="fake-card"><b></b><i></i></div>
        <div class="fake-card"><b></b><i></i></div>
        <div class="fake-card"><b></b><i></i></div>
      </div>
      <p class="hint">${this.t("bg_preview_hint")}</p>
    `}};g(ue,"properties",{...b.properties,_dashboards:{state:!0},_dashboard:{state:!0},_config:{state:!0},_pages:{state:!0},_b:{state:!0},_photos:{state:!0},_step:{state:!0}}),g(ue,"styles",[b.styles,v`
      select {
        font: inherit;
        max-width: 240px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .tiles {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 8px;
      }

      .tile {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        text-align: start;
      }

      .tile ha-icon {
        color: var(--primary-color);
      }

      .tile small {
        display: block;
        margin: 0;
      }

      .tile.active {
        border-color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
      }

      .upload {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin: 12px 0 4px;
      }

      .photos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
        margin: 12px 0;
        max-height: 320px;
        overflow-y: auto;
      }

      .photo {
        position: relative;
        border-radius: 10px;
        border: 2px solid transparent;
      }

      .photo.chosen {
        border-color: var(--primary-color);
      }

      .thumb {
        display: block;
        width: 100%;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
      }

      .thumb img {
        display: block;
        width: 100%;
        height: 72px;
        object-fit: cover;
        background: var(--secondary-background-color);
      }

      .remove {
        position: absolute;
        top: 2px;
        inset-inline-end: 2px;
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.55);
        color: #fff;
        --mdc-icon-size: 16px;
      }

      .swatches {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 12px 0 4px;
      }

      .swatch {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid var(--divider-color);
      }

      .swatch.wide {
        width: 64px;
        border-radius: 12px;
      }

      .swatch.chosen {
        border-color: var(--primary-color);
      }

      .page {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        padding: 14px;
        height: 260px;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--primary-background-color);
        overflow: hidden;
        align-content: start;
      }

      .fake-card {
        height: 80px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        background: var(--ha-card-background, var(--card-background-color));
        box-shadow: var(--ha-card-box-shadow, none);
      }

      .fake-card.wide {
        grid-column: 1 / -1;
        height: 64px;
      }

      .fake-card b,
      .fake-card i {
        display: block;
        height: 8px;
        border-radius: 4px;
        background: var(--secondary-text-color);
        opacity: 0.35;
      }

      .fake-card i {
        width: 60%;
        margin-top: 8px;
      }
    `]);customElements.get("ss-background-flow")||customElements.define("ss-background-flow",ue);var ks=[["mdi:sofa","woonkamer bank living room"],["mdi:sofa-outline","woonkamer bank living room"],["mdi:television","tv televisie"],["mdi:bed","slaapkamer bed bedroom"],["mdi:bed-king","slaapkamer bed bedroom"],["mdi:bunk-bed","kinderkamer kids"],["mdi:baby-carriage","babykamer baby"],["mdi:fridge","keuken koelkast kitchen"],["mdi:stove","keuken fornuis kitchen"],["mdi:silverware-fork-knife","eetkamer dining"],["mdi:table-chair","eettafel dining"],["mdi:shower","badkamer douche bathroom"],["mdi:bathtub","badkamer bad bathroom"],["mdi:toilet","toilet wc"],["mdi:washing-machine","waskamer wasmachine laundry"],["mdi:desk","kantoor bureau office"],["mdi:laptop","werkkamer office"],["mdi:hanger","kledingkamer kast wardrobe"],["mdi:wardrobe","kast wardrobe"],["mdi:door","hal deur hall door"],["mdi:door-open","voordeur entree door"],["mdi:stairs","trap overloop stairs"],["mdi:home","huis home"],["mdi:home-outline","huis home"],["mdi:home-roof","zolder attic"],["mdi:home-floor-0","begane grond ground floor"],["mdi:home-floor-1","eerste verdieping first floor"],["mdi:garage","garage"],["mdi:car","auto oprit car"],["mdi:flower","tuin bloemen garden"],["mdi:tree","tuin boom garden"],["mdi:grass","gazon tuin lawn"],["mdi:grill","bbq barbecue"],["mdi:pool","zwembad pool"],["mdi:hot-tub","jacuzzi hot tub"],["mdi:dumbbell","fitness sport gym"],["mdi:gamepad-variant","spelen gamen games"],["mdi:bookshelf","bibliotheek boeken books"],["mdi:music","muziek music"],["mdi:paw","huisdier dieren pets"],["mdi:ceiling-light","plafondlamp lamp light"],["mdi:floor-lamp","staande lamp lamp"],["mdi:lamp","lamp schemerlamp"],["mdi:lightbulb","lamp licht light"],["mdi:led-strip-variant","ledstrip led"],["mdi:air-conditioner","airco klimaat climate"],["mdi:fan","ventilator fan"],["mdi:radiator","verwarming radiator heating"],["mdi:thermometer","temperatuur temperature"],["mdi:cctv","camera beveiliging"],["mdi:shield-home","beveiliging alarm security"],["mdi:server","server techniek meterkast"],["mdi:solar-power","zonnepanelen solar"],["mdi:lightning-bolt","energie stroom energy"],["mdi:battery","batterij thuisbatterij battery"],["mdi:water","water"],["mdi:weather-sunny","weer zon weather"],["mdi:account-group","familie gezin family"],["mdi:heart","favoriet favorite"],["mdi:star","ster favoriet star"]],_e=null;async function ka(){if(_e)return _e;try{_e=(await(await fetch("/static/mdi/iconList.json")).json()).map(t=>typeof t=="string"?[`mdi:${t}`,t]:[`mdi:${t.name}`,[t.name,...t.keywords??[]].join(" ")])}catch{_e=[]}return _e}var me=class extends w{constructor(){super(),this._open=!1,this._query="",this._all=[]}async _toggle(){this._open=!this._open,this._open&&!this._all.length&&(this._all=await ka())}_pick(e){this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:e}))}_matches(){let e=this._query.toLowerCase().trim().split(/\s+/).filter(Boolean);if(!e.length)return ks;let t=([o,r])=>e.every(l=>o.includes(l)||r.includes(l)),s=[...ks.filter(t)],a=new Set(s.map(([o])=>o));for(let o of this._all){if(s.length>=120)break;!a.has(o[0])&&t(o)&&s.push(o)}return s}render(){let e=this._open?this._matches():[];return n`
      <button class="current" aria-expanded=${this._open?"true":"false"} @click=${this._toggle}>
        <ha-icon .icon=${this.value}></ha-icon>
        <span>${this.t("ip_choose")}</span>
      </button>
      ${this._open?n`<div class="panel">
            <input
              type="search"
              placeholder=${this.t("ip_search")}
              aria-label=${this.t("ip_search")}
              .value=${this._query}
              @input=${t=>this._query=t.target.value}
            />
            <div class="grid">
              ${e.map(([t])=>n`<button
                  class="icon ${t===this.value?"chosen":""}"
                  title=${t.replace("mdi:","")}
                  aria-label=${t.replace("mdi:","")}
                  @click=${()=>this._pick(t)}
                >
                  <ha-icon .icon=${t}></ha-icon>
                </button>`)}
            </div>
            ${e.length?h:n`<p>${this.t("ip_none")}</p>`}
          </div>`:h}
    `}};g(me,"properties",{value:{},t:{attribute:!1},_open:{state:!0},_query:{state:!0},_all:{state:!0}}),g(me,"styles",v`
    :host {
      display: block;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: 0;
      cursor: pointer;
    }

    .current {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px 8px 8px;
      border-radius: 999px;
      border: 1px solid var(--divider-color);
    }

    .current ha-icon {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: color-mix(in srgb, var(--primary-color) 16%, transparent);
      color: var(--primary-color);
    }

    .panel {
      margin-top: 10px;
      padding: 10px;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
    }

    input {
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      padding: 8px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
      gap: 4px;
      max-height: 240px;
      overflow-y: auto;
      margin-top: 8px;
    }

    .icon {
      display: grid;
      place-items: center;
      height: 44px;
      border-radius: 10px;
    }

    .icon:hover {
      background: var(--secondary-background-color);
    }

    .icon.chosen {
      background: color-mix(in srgb, var(--primary-color) 20%, transparent);
      color: var(--primary-color);
    }

    p {
      color: var(--secondary-text-color);
      font-size: 13px;
    }
  `);customElements.get("ss-icon-picker")||customElements.define("ss-icon-picker",me);var wa="__other";function ft(i,e){let t=a=>{let o=i.entities?.[a];return!o||o.hidden?!1:(o.area_id??i.devices?.[o.device_id]?.area_id)===e},s=Object.keys(i.states).filter(t).sort();return{lights:s.filter(a=>a.startsWith("light.")),climate:s.find(a=>a.startsWith("climate."))??null}}function ws(i,e){let t=Object.values(i.floors??{}).sort((a,o)=>(a.level??0)-(o.level??0)||a.name.localeCompare(o.name)).map(a=>({id:a.floor_id,name:a.name,areas:[]})),s={id:wa,name:e,areas:[]};for(let a of Object.values(i.areas??{}).sort((o,r)=>o.name.localeCompare(r.name)))(t.find(o=>o.id===a.floor_id)??s).areas.push(a.area_id);return[...t,s].filter(a=>a.areas.length)}function xs(i,e){let{lights:t,climate:s}=ft(i,e.area_id);return{include:t.length>0||!!s,name:e.name,icon:e.icon||"mdi:home-outline",lights:t,climate:s,climate_button:!!s}}var Z=i=>`#l-${Y(i)}`,vt=i=>`#airco-${Y(i)}`;function ge(i,e){let t=JSON.stringify(i.lights),s=`${t}.some((e) => states[e] && states[e].state === 'on')`;return{type:"custom:button-card",name:i.name,icon:i.icon,show_label:!0,label:`[[[ const on = ${t}.filter((e) => states[e] && states[e].state === 'on').length; return on ? on + ' ${e.on}' : '${e.off}'; ]]]`,tap_action:{action:"navigate",navigation_path:Z(i.name)},hold_action:{action:"none"},styles:{grid:[{"grid-template-areas":'"i" "n" "l"'},{"justify-items":"start"}],card:[{padding:"14px"},{"border-radius":"var(--ha-card-border-radius, 16px)"},{"min-height":"96px"}],img_cell:[{width:"40px"},{height:"40px"},{"border-radius":"50%"},{"background-color":"var(--secondary-background-color)"},{"justify-content":"center"}],icon:[{width:"22px"},{color:"var(--state-icon-color)"}],name:[{"font-weight":"600"},{"justify-self":"start"},{"margin-top":"10px"}],label:[{"justify-self":"start"},{"font-size":"12px"},{color:"var(--secondary-text-color)"}]},state:[{operator:"template",value:`[[[ return ${s}; ]]]`,styles:{img_cell:[{"background-color":"var(--bubble-icon-background-color, var(--secondary-background-color))"}],icon:[{color:"var(--state-light-active-color)"}]}}]}}function be(i,e,t){let s={type:"custom:bubble-card",card_type:"pop-up",hash:Z(i.name),name:i.name,icon:i.icon,show_header:e.show_header,width_desktop:`${e.width_desktop}px`,margin_top_mobile:`${e.margin_top_mobile}%`,bg_opacity:e.glass?String(e.opacity):"100",bg_blur:e.glass?"14":"0"},a=[s];for(let o of i.lights)a.push({type:"tile",entity:o,features:[{type:"light-brightness"}]});return i.climate&&i.climate_button&&a.push(fe(i.climate,i.name,t)),Ve(s,a.slice(1))}function fe(i,e,t){let s=vt(e);return{type:"custom:bubble-card",card_type:"button",button_type:"name",entity:i,name:t.climate,icon:"mdi:air-conditioner",show_state:!0,show_attribute:!0,attribute:"current_temperature",tap_action:{action:"navigate",navigation_path:s},button_action:{tap_action:{action:"navigate",navigation_path:s}}}}function ys(i,e,t){let s=e.filter(a=>a.rooms.length).map(a=>({type:"grid",cards:[{type:"heading",heading:a.name},...a.rooms.map(o=>ge(o,t)),...a.rooms.map(o=>be(o,i.popup,t))]}));return{title:i.title,path:i.path,icon:"mdi:home-floor-plan",type:"sections",max_columns:Math.max(1,Math.min(4,s.length)),sections:s}}var ve=class extends b{connectedCallback(){super.connectedCallback();let e=ws(this.hass,this.t("rm_other"));this._order=Object.fromEntries(e.map(t=>[t.id,[...t.areas]])),this._floorNames=Object.fromEntries(e.map(t=>[t.id,t.name])),this._rooms=Object.fromEntries(Object.values(this.hass.areas??{}).map(t=>[t.area_id,xs(this.hass,t)])),this._settings={title:this.t("tab_rooms").split(" ")[0],path:"kamers",popup:{glass:!1,opacity:80,width_desktop:540,margin_top_mobile:20,show_header:!0}},this._open=null,this._loadDashboards()}async _loadDashboards(){this._dashboards=await E(this.hass,this.hass.localize("panel.states")||"Overview"),this._dashboard=(this._dashboards.find(e=>e.editable)??this._dashboards[0])?.url_path??null}get _labels(){return{on:this.t("rm_on"),off:this.t("rm_off"),climate:this.t("rm_climate_label")}}_floors(){return Object.entries(this._order).map(([e,t])=>({id:e,name:this._floorNames[e],rooms:t.map(s=>this._rooms[s]).filter(s=>s?.include)}))}_room(e,t){this._rooms={...this._rooms,[e]:{...this._rooms[e],...t}}}_move(e,t,s){let a=[...this._order[e]],o=t+s;o<0||o>=a.length||([a[t],a[o]]=[a[o],a[t]],this._order={...this._order,[e]:a})}_setPopup(e,t){this._settings={...this._settings,popup:{...this._settings.popup,[e]:t}}}_create(){let e=this._dashboards.find(a=>a.url_path===this._dashboard),{title:t,path:s}=this._settings;this._run(async()=>{let a=await y(this.hass,e.url_path),o=(a.views??[]).some(r=>r.path===s);this._ask(this.t(o?"rm_replace_confirm":"rm_create_confirm",{title:t}),()=>this._run(async()=>{let r=JSON.parse(JSON.stringify(a));r.views??=[];let l=ys(this._settings,this._floors(),this._labels),c=r.views.findIndex(d=>d.path===s);c===-1?r.views.push(l):r.views[c]=l,await A(this.hass,e.url_path,a,r)},this.t("rm_created",{title:t})))})}render(){if(!Object.keys(this.hass.areas??{}).length)return n`<p class="hint">${this.t("no_areas")}</p>`;let e=this._settings,t=e.popup,s=this._dashboards??[],a=s.find(o=>o.url_path===this._dashboard);return n`
      <p class="hint">${this.t("rm_view_intro")}</p>
      <div class="layout">
        <div class="settings">
          <div class="card">
            <h2>${this.t("rm_view")}</h2>
            <label class="row">
              <span>${this.t("cl_dashboard")}</span>
              <select @change=${o=>this._dashboard=o.target.value||null}>
                ${s.map(o=>n`<option value=${o.url_path??""} ?selected=${o.url_path===this._dashboard}>
                    ${o.title}
                  </option>`)}
              </select>
            </label>
            ${a&&!a.editable?this._warning(this.t("cl_readonly")):h}
            <label class="row">
              <span>${this.t("rm_title")}</span>
              <input
                type="text"
                .value=${e.title}
                @input=${o=>this._settings={...e,title:o.target.value}}
              />
            </label>
            <label class="row">
              <span>${this.t("rm_path")}</span>
              <input
                type="text"
                .value=${e.path}
                @change=${o=>this._settings={...e,path:Y(o.target.value)||"kamers"}}
              />
            </label>
          </div>

          <div class="card">
            <h2>${this.t("rm_popups")}</h2>
            <div class="segment" role="radiogroup">
              ${[[!1,this.t("rm_solid")],[!0,this.t("rm_glass")]].map(([o,r])=>n`<button
                  role="radio"
                  aria-checked=${t.glass===o?"true":"false"}
                  class=${t.glass===o?"active":""}
                  @click=${()=>this._setPopup("glass",o)}
                >
                  ${r}
                </button>`)}
            </div>
            ${t.glass?this._popupSlider("opacity",this.t("rm_opacity"),30,100,"%"):h}
            ${this._popupFormat()}
            ${this._popupSlider("width_desktop",this.t("rm_width"),360,900,"px")}
            ${this._popupSlider("margin_top_mobile",this.t("rm_height"),0,60,"%")}
            <label class="row">
              <span>${this.t("rm_header")}</span>
              <input
                type="checkbox"
                class="switch"
                .checked=${C(t.show_header)}
                @change=${o=>this._setPopup("show_header",o.target.checked)}
              />
            </label>
          </div>

          ${Object.entries(this._order).map(([o,r])=>this._floorCard(o,r))}

          <button
            class="primary create"
            ?disabled=${this._busy||!a?.editable||!this._floors().some(o=>o.rooms.length)}
            @click=${this._create}
          >
            ${this.t("rm_create")}
          </button>
        </div>

        <aside class="card preview">
          <h2>${this.t("preview")}</h2>
          ${this._preview()}
        </aside>
      </div>
      ${this._bar({})}
    `}_popupSlider(e,t,s,a,o){let r=this._settings.popup;return n`
      <label class="row slider">
        <span>${t}</span>
        <span class="inline">
          <input
            type="range"
            min=${s}
            max=${a}
            step="1"
            .value=${String(r[e])}
            @input=${l=>this._setPopup(e,Number(l.target.value))}
          />
          <output>${r[e]}${o}</output>
        </span>
      </label>
    `}_floorCard(e,t){return n`
      <div class="card floor" data-floor=${this._floorNames[e]}>
        <h2>${this._floorNames[e]}</h2>
        ${t.map((s,a)=>{let o=this._rooms[s];return n`
            <div class="room ${o.include?"":"off"}">
              <input
                type="checkbox"
                aria-label="${this.t("rm_include")} ${o.name}"
                .checked=${C(o.include)}
                @change=${r=>this._room(s,{include:r.target.checked})}
              />
              <ha-icon .icon=${o.icon}></ha-icon>
              <div class="fields">
                <input
                  type="text"
                  aria-label=${this.t("cl_name")}
                  .value=${o.name}
                  @input=${r=>this._room(s,{name:r.target.value})}
                />
                <input
                  type="text"
                  class="icon-field"
                  aria-label=${this.t("rm_icon")}
                  .value=${o.icon}
                  @change=${r=>/^mdi:[a-z0-9-]+$/.test(r.target.value.trim())&&this._room(s,{icon:r.target.value.trim()})}
                />
                <details>
                  <summary>
                    ${o.lights.length===1?this.t("rm_light_one"):o.lights.length?this.t("rm_lights",{count:o.lights.length}):this.t("rm_no_lights")}
                  </summary>
                  ${this._lightChoices(s,o)}
                </details>
                ${o.climate?n`<label class="climate">
                      <input
                        type="checkbox"
                        .checked=${C(o.climate_button)}
                        @change=${r=>this._room(s,{climate_button:r.target.checked})}
                      />
                      ${this.t("rm_climate")}
                      <small>${this.t("rm_climate_hint",{hash:vt(o.name)})}</small>
                    </label>`:h}
              </div>
              <span class="moves">
                <button class="icon" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>this._move(e,a,-1)}>
                  <ha-icon icon="mdi:arrow-up"></ha-icon>
                </button>
                <button
                  class="icon"
                  title=${this.t("move_down")}
                  ?disabled=${a===t.length-1}
                  @click=${()=>this._move(e,a,1)}
                >
                  <ha-icon icon="mdi:arrow-down"></ha-icon>
                </button>
              </span>
            </div>
          `})}
      </div>
    `}_lightChoices(e,t){let s=Object.keys(this.hass.states).filter(a=>a.startsWith("light.")).sort();return n`<div class="lights">
      ${s.map(a=>n`<label>
          <input
            type="checkbox"
            .checked=${C(t.lights.includes(a))}
            @change=${o=>this._room(e,{lights:o.target.checked?[...t.lights,a]:t.lights.filter(r=>r!==a)})}
          />
          ${this.hass.states[a].attributes.friendly_name??a}
        </label>`)}
    </div>`}_preview(){let e=this._floors().filter(s=>s.rooms.length),t=e.flatMap(s=>s.rooms).find(s=>s.name===this._open)??null;return n`
      <div class="columns">
        ${e.map(s=>n`<div class="column">
            <div class="floor-name">${s.name}</div>
            ${s.rooms.map(a=>n`<button class="pick" @click=${()=>this._open=a.name}>
                <ss-card-preview
                  bare
                  .hass=${this.hass}
                  .t=${this.t}
                  .needs=${I}
                  .config=${ge(a,this._labels)}
                ></ss-card-preview>
              </button>`)}
          </div>`)}
      </div>
      ${t?n`<div class="popup-title">
              <ha-icon .icon=${t.icon}></ha-icon><b>${t.name}</b>
              <button class="icon" @click=${()=>this._open=null}><ha-icon icon="mdi:close"></ha-icon></button>
            </div>
            <ss-card-preview
              .hass=${this.hass}
              .t=${this.t}
              .needs=${I}
              .config=${{type:"vertical-stack",cards:G(be(t,this._settings.popup,this._labels))}}
            ></ss-card-preview>`:n`<p class="hint">${this.t("rm_pick_room")}</p>`}
    `}};g(ve,"properties",{...b.properties,_settings:{state:!0},_rooms:{state:!0},_order:{state:!0},_dashboards:{state:!0},_dashboard:{state:!0},_selected:{state:!0},_open:{state:!0}}),g(ve,"styles",[b.styles,v`
      select {
        font: inherit;
        max-width: 220px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .room {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px 0;
        border-top: 1px solid var(--divider-color);
      }

      .room.off .fields,
      .room.off > ha-icon {
        opacity: 0.45;
      }

      .room > input[type="checkbox"] {
        margin-top: 10px;
        accent-color: var(--primary-color);
      }

      .room > ha-icon {
        margin-top: 6px;
        color: var(--primary-color);
      }

      .fields {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 6px 10px;
        align-items: center;
      }

      .fields > input[type="text"] {
        flex: 1;
        min-width: 140px;
      }

      .fields .icon-field {
        flex: 0 1 170px;
        font-size: 13px;
      }

      details {
        flex-basis: 100%;
        font-size: 13px;
      }

      summary {
        cursor: pointer;
        color: var(--secondary-text-color);
      }

      .lights {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        gap: 4px 12px;
        margin-top: 6px;
      }

      .lights label,
      .climate {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }

      .climate {
        flex-basis: 100%;
        flex-wrap: wrap;
      }

      .climate small {
        margin: 0;
      }

      .moves {
        display: flex;
      }

      .icon {
        display: inline-flex;
        padding: 6px;
        border-radius: 50%;
      }

      .create {
        margin-bottom: 16px;
      }

      .columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
      }

      .column {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .floor-name {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }

      .pick {
        padding: 0;
        text-align: start;
      }

      .popup-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 16px 0 8px;
      }

      .popup-title button {
        margin-inline-start: auto;
      }
    `]);customElements.get("ss-rooms-view")||customElements.define("ss-rooms-view",ve);var Ss=/\[\s*(?:["'`]light\.[a-z0-9_]+["'`]\s*,?\s*)+\]/g,As=/(const\s+NAME\s*=\s*)(["'`])((?:\\.|(?!\2).)*)\2/,Cs=/(const\s+ICON\s*=\s*)(["'`])((?:\\.|(?!\2).)*)\2/,z=i=>JSON.parse(JSON.stringify(i));function Es(i){return i?.tap_action?.navigation_path??i?.button_action?.tap_action?.navigation_path??null}function ke(i){if(i?.type==="custom:bubble-card"&&i.card_type==="pop-up")return i;let e=i?.type==="vertical-stack"?i.cards?.[0]:null;return e?.type==="custom:bubble-card"&&e.card_type==="pop-up"?e:null}function zs(i){return i.type==="vertical-stack"?{list:i.cards,start:1}:(i.cards??=[],{list:i.cards,start:0})}function X(i,e){if(Array.isArray(i))i.forEach((t,s)=>{typeof t=="string"?i[s]=e(t):X(t,e)});else if(i&&typeof i=="object")for(let[t,s]of Object.entries(i))typeof s=="string"?i[t]=e(s):X(s,e)}function $s(i,e){let t=null;return X(z(i),s=>{let a=s.match(e);return a&&t===null&&(t=a[3]),s}),t}function xa(i){let e=null;return X(z(i),t=>{let s=t.match(Ss);return s&&!e&&(e=JSON.parse(s[0].replace(/['`]/g,'"').replace(/,\s*\]/,"]"))),t}),e}function ya(i,e){(i.views??[]).forEach((t,s)=>{let a=(o,r)=>(o??[]).forEach((l,c)=>{e(l,{...r,index:c}),Array.isArray(l?.cards)&&!ke(l)&&a(l.cards,{...r,nested:!0})});a(t.cards,{view:s,section:null}),(t.sections??[]).forEach((o,r)=>a(o.cards,{view:s,section:r}))})}function Q(i){return i?.type!=="sections"?[{index:null,label:i?.title??""}]:(i.sections??[]).map((e,t)=>{let s=(e.cards??[]).find(a=>a.type==="heading")?.heading;return{index:t,label:s??`#${t+1}`}})}function qe(i){let e=new Map,t=a=>(e.has(a)||e.set(a,{hash:a,tile:null,popup:null}),e.get(a));ya(i,(a,o)=>{let r=ke(a);r?.hash?.startsWith("#")&&(t(r.hash).popup={...o});let l=Es(a);if(l?.startsWith("#")&&!r&&!l.startsWith("#airco")){let c=t(l);c.tile||(c.tile={...o})}});let s=[];for(let a of e.values()){if(!a.popup)continue;let o=N(i,a.popup),r=ke(o),l=zs(z(o)),c=l.list.slice(l.start),d=a.tile?N(i,a.tile):null,m=c.map(p=>p.entity).filter(p=>p?.startsWith("light."));s.push({hash:a.hash,name:r.name??(d&&($s(d,As)??d.name))??a.hash,icon:r.icon??(d&&($s(d,Cs)??d.icon))??"mdi:home-outline",lights:m.length?m:(d&&xa(d))??[],climate:c.find(p=>p.entity?.startsWith("climate."))?.entity??null,tile:a.tile,popup:a.popup})}return s.sort((a,o)=>a.name.localeCompare(o.name))}function N(i,e){let t=i.views[e.view];return(e.section===null?t.cards:t.sections[e.section].cards)[e.index]}function Ye(i,e,t){let s=z(i),{name:a,icon:o,lights:r}=t,l=JSON.stringify(r);if(e.tile){let k=N(s,e.tile);typeof k.name=="string"&&!k.name.includes("[[[")&&(k.name=a),typeof k.icon=="string"&&!k.icon.includes("[[[")&&(k.icon=o),X(k,V=>V.replace(As,(Oe,se,B)=>`${se}${B}${a.replace(B,`\\${B}`)}${B}`).replace(Cs,(Oe,se,B)=>`${se}${B}${o}${B}`).replace(Ss,l))}let c=N(s,e.popup),d=ke(c);d.name=a,d.icon=o;let m=zs(c),p=m.list.slice(m.start),_=k=>k.entity?.startsWith("climate.")||Es(k)?.startsWith("#airco");if("climate"in t){let k=p.find(_);p=p.filter(V=>!_(V)),t.climate&&p.push(k?.entity===t.climate?k:t.climateCard)}let u=k=>k.entity?.startsWith("light."),f=p.findIndex(u),S=f===-1?{type:"tile",features:[{type:"light-brightness"}]}:p[f],ee=r.map(k=>{let V=p.find(se=>se.entity===k);if(V)return V;let Oe={...z(S),entity:k};return delete Oe.name,Oe}),te=p.filter(k=>!u(k)),At=f===-1?0:p.slice(0,f).filter(k=>!u(k)).length,Us=[...te.slice(0,At),...ee,...te.slice(At)];return m.list.splice(m.start,m.list.length-m.start,...z(Us)),s}function kt(i,e,t,s){let a=z(i),o=a.views[e];if(o.type==="sections"){o.sections??=[];let r=o.sections[t]??(o.sections.push({type:"grid",cards:[]}),o.sections.at(-1));r.cards??=[],r.cards.push(...s)}else o.cards??=[],o.cards.push(...s);return a}function Ts(i,e,t,s){let a=z(i),o=e.tile?z(N(a,e.tile)):null,r=z(N(a,e.popup)),l=t.hash;if(o){X(o,u=>u===e.hash?l:u);for(let u of[o.tap_action,o.button_action?.tap_action])u?.navigation_path===e.hash&&(u.navigation_path=l)}ke(r).hash=l;let m=Ye({views:[{cards:[o??{type:"markdown"},r]}]},{...e,...{tile:o?{view:0,section:null,index:0}:null,popup:{view:0,section:null,index:1}}},{name:t.name,icon:t.icon,lights:t.lights,climate:t.climate,climateCard:s}),[p,_]=m.views[0].cards;return o?[p,_]:[_]}var $a={nl:["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"],en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},Sa={nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Os={nl:{morning:"Goedemorgen",afternoon:"Goedemiddag",evening:"Goedenavond",lights:"lampen aan",home:"thuis",batteries:"Bijna lege batterijen",offline:"Niet beschikbaar",allGood:"Alles in orde"},en:{morning:"Good morning",afternoon:"Good afternoon",evening:"Good evening",lights:"lights on",home:"home",batteries:"Low batteries",offline:"Unavailable",allGood:"All good"}},js=i=>`[${i.map(e=>`'${e}'`).join(", ")}]`;function Ns(i,e){let t=Os[i],s=e?` \xB7 {{ state_attr('${e}', 'temperature') }}{{ state_attr('${e}', 'temperature_unit') }}`:"";return{type:"markdown",text_only:!0,content:["{% set h = now().hour %}",`## {{ '${t.morning}' if h < 12 else '${t.afternoon}' if h < 18 else '${t.evening}' }}, {{ user }}`,`{{ ${js($a[i])}[now().weekday()] }} {{ now().day }} {{ ${js(Sa[i])}[now().month - 1] }}`,"",`{{ states.light | selectattr('state', 'eq', 'on') | list | count }} ${t.lights} \xB7 {{ states.person | selectattr('state', 'eq', 'home') | list | count }} ${t.home}${s}`].join(`
`)}}function Ps(i){let e=t=>({action:"perform-action",perform_action:"scene.turn_on",target:{entity_id:t}});return{type:"grid",columns:Math.min(3,Math.max(1,i.length)),square:!1,cards:i.map(t=>({type:"tile",entity:t,tap_action:e(t),icon_tap_action:e(t)}))}}function Ds(i){let e=Os[i];return{type:"markdown",content:["{% set low = namespace(names=[]) %}","{% for s in states.sensor if s.attributes.device_class == 'battery' and s.state | is_number and s.state | float < 20 %}","{% set low.names = low.names + [s.name ~ ' (' ~ s.state ~ '%)'] %}","{% endfor %}","{% set off = states | selectattr('state', 'eq', 'unavailable') | list | count %}","{% if low.names or off %}",`{% if low.names %}**${e.batteries}:** {{ low.names | join(', ') }}{% endif %}`,"",`{% if off %}**${e.offline}:** {{ off }}{% endif %}`,"{% else %}",`\u2713 ${e.allGood}`,"{% endif %}"].join(`
`)}}function Bs(i){return{type:"weather-forecast",entity:i,forecast_type:"daily",show_forecast:!0}}var Aa={glass:!1,opacity:80,width_desktop:540,margin_top_mobile:20,show_header:!0},wt="__other",we=class extends b{constructor(){super(),this._mode=null,this._step=0,this._filter="",this._scenes=[]}connectedCallback(){super.connectedCallback(),this._loadDashboards()}get _lang(){return(this.hass?.locale?.language||this.hass?.language||"nl").startsWith("nl")?"nl":"en"}get _labels(){return{on:this.t("rm_on"),off:this.t("rm_off"),climate:this.t("rm_climate_label")}}async _loadDashboards(){this._dashboards=(await E(this.hass,this.hass.localize("panel.states")||"Overview")).filter(e=>e.editable),this._dashboards[0]&&await this._pickDashboard(this._dashboards[0].url_path)}async _pickDashboard(e){this._dashboard=e;try{this._config=await y(this.hass,e)}catch{this._config={views:[]}}this._place={view:0,section:Q(this._config.views?.[0])[0]?.index??0},this._model=this._found()[0]?.hash??null,this._room=null}_found(){return this._config?qe(this._config):[]}_start(e){this._mode=e,this._step=0,this._room=null,this._source=null,this._card=null,this._scenes=[],this._filter="",this._toast=null,this._draft={name:"",icon:"mdi:home-outline",lights:[],climate:null}}_pickFound(e){let t=this._found().find(s=>s.hash===e);this._room=t,this._draft={name:t.name,icon:t.icon,lights:[...t.lights],climate:t.climate}}_pickSource(e){if(this._source=e,e===wt){this._draft={name:this.t("rm_new_room"),icon:"mdi:home-outline",lights:[],climate:null};return}let t=this.hass.areas[e],{lights:s,climate:a}=ft(this.hass,t.area_id);this._draft={name:t.name,icon:t.icon||"mdi:home-outline",lights:s,climate:a};let o=this.hass.floors?.[t.floor_id]?.name?.toLowerCase(),r=Q(this._config.views?.[this._place.view]).find(l=>o&&l.label.toLowerCase()===o);r&&(this._place={...this._place,section:r.index})}_suggestions(){let e=new Set(this._found().map(t=>t.hash));return Object.values(this.hass.areas??{}).filter(t=>!e.has(Z(t.name))).sort((t,s)=>t.name.localeCompare(s.name))}_set(e,t){this._draft={...this._draft,[e]:t},this._toast=null}get dirty(){return!!this._mode&&!["page","background"].includes(this._mode)&&this._step>0}_changedConfig(){let e=this._draft;return Ye(this._config,this._room,{...e,climateCard:e.climate?fe(e.climate,e.name,this._labels):null})}_newRoom(){return{...this._draft,include:!0,climate_button:!!this._draft.climate}}_newCards(e=this._config){let t=this._newRoom(),s=qe(e).find(a=>a.hash===this._model);if(s){let a=t.climate?fe(t.climate,t.name,this._labels):null;return Ts(e,s,{...t,hash:Z(t.name)},a)}return[ge(t,this._labels),be(t,Aa,this._labels)]}_otherConfig(){let e=Object.keys(this.hass.states).find(t=>t.startsWith("weather."));switch(this._card){case"scenes":return this._scenes.length?Ps(this._scenes):null;case"status":return Ds(this._lang);case"weather":return e?Bs(e):null;case"greeting":return Ns(this._lang,e);default:return null}}_placeText(e,t){let s=this._config.views[e],a=Q(s).find(o=>o.index===t)?.label??"";return{view:s?.title??s?.path??`${e+1}`,section:a}}async _finish(e,t){await this._run(async()=>{await e(),await this._pickDashboard(this._dashboard),this._mode=null},t)}_saveEdit(){let e=this._room.hash;this._ask(this.t("rm_update_confirm",{name:this._draft.name}),()=>this._finish(async()=>{let t=await y(this.hass,this._dashboard),s=Ye(t,qe(t).find(a=>a.hash===e),{...this._draft,climateCard:this._draft.climate?fe(this._draft.climate,this._draft.name,this._labels):null});await A(this.hass,this._dashboard,t,s)},this.t("rm_update_done")))}_saveNew(){let e=Z(this._draft.name);if(this._found().some(s=>s.hash===e)){this._showToast(this.t("rm_hash_taken",{hash:e}));return}let t=this._placeText(this._place.view,this._place.section);this._ask(this.t("rm_put_confirm",{name:this._draft.name,...t}),()=>this._finish(async()=>{let s=await y(this.hass,this._dashboard),a=kt(s,this._place.view,this._place.section,this._newCards(s));await A(this.hass,this._dashboard,s,a)},this.t("rm_put_done")))}_saveCard(){let e=this._otherConfig(),t=this._placeText(this._place.view,this._place.section);this._ask(this.t("oc_add_confirm",{card:this.t(`oc_${this._card}`),...t}),()=>this._finish(async()=>{let s=await y(this.hass,this._dashboard);await A(this.hass,this._dashboard,s,kt(s,this._place.view,this._place.section,[e]))},this.t("oc_added")))}render(){return this._dashboards?this._dashboards.length?this._mode?n`
      ${this._back(this.t("back"),()=>this._mode=null)}
      ${this._mode==="background"?n`<ss-background-flow
            .hass=${this.hass}
            .narrow=${this.narrow}
            @done=${async e=>{this._mode=null,await this._pickDashboard(this._dashboard),this._showToast(e.detail)}}
          ></ss-background-flow>`:this._mode==="page"?n`<div class="card"><ss-rooms-view .hass=${this.hass} .narrow=${this.narrow}></ss-rooms-view></div>`:n`<div class="layout">
            <div>${this._flow()}</div>
            <aside class="card preview">
              <h2>${this.t("preview")}</h2>
              ${this._preview()}
            </aside>
          </div>`}
      ${this._bar({canSave:!1})}
    `:this._startScreen():n`<div class="card"><p class="hint">${this.t("cl_readonly")}</p></div>`:h}_startScreen(){return n`
      <p class="intro">${this.t("rooms_intro")}</p>
      ${this._choices(this._toast?this.t("done_again"):this.t("what_to_do"),[{key:"edit",icon:"mdi:pencil-outline",title:this.t("rm_do_edit"),text:this.t("rm_do_edit_text")},{key:"add",icon:"mdi:plus-box-outline",title:this.t("rm_do_add"),text:this.t("rm_do_add_text")},{key:"card",icon:"mdi:card-plus-outline",title:this.t("rm_do_card"),text:this.t("rm_do_card_text")},{key:"background",icon:"mdi:image-outline",title:this.t("bg_do"),text:this.t("bg_do_text")},{key:"page",icon:"mdi:view-dashboard-outline",title:this.t("rm_do_page"),text:this.t("rm_do_page_text")}],e=>this._start(e))}
      ${this._bar({canSave:!1})}
    `}_flow(){let e=d=>this._step=d,t=this._draft,s=Object.keys(this.hass.states).filter(d=>d.startsWith("climate.")),a={title:this.t("st_name_icon"),summary:t.name,ready:!!t.name.trim(),content:this._nameIcon()},o={title:this.t("st_lights"),summary:t.lights.length?this.t("rm_lights",{count:t.lights.length}):this.t("rm_no_lights_chosen"),content:this._lightList()},r=s.length?[{title:this.t("st_climate"),summary:t.climate?this.hass.states[t.climate]?.attributes.friendly_name:this.t("rm_no_climate"),content:this._climatePicker(s)}]:[];if(this._mode==="edit"){let d=[{title:this.t("st_which_room"),summary:this._room?.name,ready:!!this._room,content:n`${this._dashboardPicker()} ${this._roomButtons()}`},a,o,...r,{title:this.t("st_save"),content:n`<p class="hint">${this.t("st_save_edit")}</p>`}];return this._steps(d,this._step,e,this._finishButton(this.t("st_save"),()=>this._saveEdit()))}if(this._mode==="add"){let d=this._found().find(p=>p.hash===this._model),m=[{title:this.t("st_where"),summary:Object.values(this._placeText(this._place.view,this._place.section)).filter(Boolean).join(" \u203A "),content:n`${this._dashboardPicker()} ${this._placePicker()}`},{title:this.t("st_which_room"),summary:t.name,ready:!!this._source,content:this._sourceButtons()},a,o,...r,{title:this.t("st_save"),content:n`<p class="hint">
              ${d?this.t("st_save_like",{name:d.name}):this.t("st_save_standard")}
            </p>
            ${this._more(this._designPicker())}`}];return this._steps(m,this._step,e,this._finishButton(this.t("rm_put"),()=>this._saveNew()))}let l=Object.keys(this.hass.states).filter(d=>d.startsWith("scene.")).sort(),c=[{title:this.t("st_which_card"),summary:this._card?this.t(`oc_${this._card}`):"",ready:!!this._card,content:this._cardButtons()},...this._card==="scenes"?[{title:this.t("st_scenes"),summary:`${this._scenes.length}`,ready:this._scenes.length>0,content:l.length?n`<div class="checks">
                    ${l.map(d=>n`<label>
                        <input
                          type="checkbox"
                          .checked=${C(this._scenes.includes(d))}
                          @change=${m=>this._scenes=m.target.checked?[...this._scenes,d]:this._scenes.filter(p=>p!==d)}
                        />
                        ${this.hass.states[d].attributes.friendly_name??d}
                      </label>`)}
                  </div>`:n`<p class="hint">${this.t("oc_no_scenes")}</p>`}]:[],{title:this.t("st_where"),content:n`${this._dashboardPicker()} ${this._placePicker()}`}];return this._steps(c,this._step,e,this._finishButton(this.t("st_add"),()=>this._saveCard(),!this._otherConfig()))}_finishButton(e,t,s=!1){return n`<button class="primary next" ?disabled=${this._busy||s} @click=${t}>${e}</button>`}_dashboardPicker(){return this._dashboards.length<2?h:n`<label class="row">
      <span>${this.t("cl_dashboard")}</span>
      <select @change=${e=>this._pickDashboard(e.target.value||null)}>
        ${this._dashboards.map(e=>n`<option value=${e.url_path??""} ?selected=${e.url_path===this._dashboard}>${e.title}</option>`)}
      </select>
    </label>`}_placePicker(){let e=this._config.views??[],t=this._place,s=Q(e[t.view]);return n`
      <label class="row">
        <span>${this.t("lbl_page")}</span>
        <select
          @change=${a=>this._place={view:Number(a.target.value),section:Q(e[Number(a.target.value)])[0]?.index??0}}
        >
          ${e.map((a,o)=>n`<option value=${o} ?selected=${o===t.view}>${a.title??a.path??o+1}</option>`)}
        </select>
      </label>
      ${e[t.view]?.type==="sections"?n`<label class="row">
            <span>${this.t("lbl_heading")}</span>
            <select @change=${a=>this._place={...t,section:Number(a.target.value)}}>
              ${s.map(a=>n`<option value=${a.index} ?selected=${a.index===t.section}>${a.label}</option>`)}
            </select>
          </label>`:h}
    `}_roomButtons(){let e=this._found();return e.length?n`<div class="tiles">
      ${e.map(t=>n`<button class="tile ${this._room?.hash===t.hash?"active":""}" @click=${()=>this._pickFound(t.hash)}>
          <ha-icon .icon=${t.icon}></ha-icon>${t.name}
        </button>`)}
    </div>`:n`<p class="hint">${this.t("rm_no_rooms_found")}</p>`}_sourceButtons(){return n`<div class="tiles">
      ${this._suggestions().map(e=>n`<button
          class="tile ${this._source===e.area_id?"active":""}"
          @click=${()=>this._pickSource(e.area_id)}
        >
          <ha-icon .icon=${e.icon||"mdi:home-outline"}></ha-icon>${e.name}
        </button>`)}
      <button class="tile ${this._source===wt?"active":""}" @click=${()=>this._pickSource(wt)}>
        <ha-icon icon="mdi:plus"></ha-icon>${this.t("rm_other_room")}
      </button>
    </div>`}_cardButtons(){return n`<div class="tiles wide">
      ${[["greeting","mdi:hand-wave-outline"],["scenes","mdi:palette-outline"],["status","mdi:home-alert-outline"],["weather","mdi:weather-partly-cloudy"]].map(([t,s])=>n`<button
          class="tile ${this._card===t?"active":""}"
          data-card=${t}
          @click=${()=>this._card=t}
        >
          <ha-icon .icon=${s}></ha-icon>
          <span><b>${this.t(`oc_${t}`)}</b><small>${this.t(`oc_${t}_text`)}</small></span>
        </button>`)}
    </div>`}_nameIcon(){let e=this._draft;return n`
      <label class="row">
        <span>${this.t("cl_name")}</span>
        <input type="text" .value=${e.name} @input=${t=>this._set("name",t.target.value)} />
      </label>
      <ss-icon-picker .value=${e.icon} .t=${this.t} @change=${t=>this._set("icon",t.detail)}></ss-icon-picker>
    `}_climatePicker(e){let t=this._draft;return n`<label class="row">
      <span>${this.t("rm_climate_pick")}</span>
      <select @change=${s=>this._set("climate",s.target.value||null)}>
        <option value="" ?selected=${!t.climate}>${this.t("rm_no_climate")}</option>
        ${e.map(s=>n`<option value=${s} ?selected=${s===t.climate}>${this.hass.states[s].attributes.friendly_name??s}</option>`)}
      </select>
    </label>`}_lightList(){let e=this._draft,t=Object.keys(this.hass.states).filter(s=>s.startsWith("light.")).map(s=>({id:s,name:this.hass.states[s].attributes.friendly_name??s})).filter(s=>!this._filter||s.name.toLowerCase().includes(this._filter)||s.id.includes(this._filter)).sort((s,a)=>s.name.localeCompare(a.name));return n`
      <input
        type="search"
        class="search"
        placeholder=${this.t("rm_filter")}
        aria-label=${this.t("rm_filter")}
        .value=${this._filter}
        @input=${s=>this._filter=s.target.value.toLowerCase()}
      />
      <div class="checks">
        ${_s(t,s=>s.id,s=>n`<label>
            <input
              type="checkbox"
              .checked=${C(e.lights.includes(s.id))}
              @change=${a=>this._set("lights",a.target.checked?[...e.lights,s.id]:e.lights.filter(o=>o!==s.id))}
            />
            ${s.name}
          </label>`)}
      </div>
    `}_designPicker(){return n`
      <label class="row">
        <span>${this.t("rm_design")}</span>
        <select @change=${e=>this._model=e.target.value||null}>
          ${this._found().map(e=>n`<option value=${e.hash} ?selected=${e.hash===this._model}>${this.t("rm_like",{name:e.name})}</option>`)}
          <option value="" ?selected=${!this._model}>${this.t("rm_standard")}</option>
        </select>
      </label>
      ${this._model?h:this._popupFormat()}
    `}_preview(){if(this._mode==="card"){let s=this._otherConfig();return s?n`<ss-card-preview .hass=${this.hass} .t=${this.t} .needs=${[]} .config=${s}></ss-card-preview>`:n`<p class="hint">${this.t("st_which_card")}</p>`}if(this._mode==="edit"&&!this._room)return n`<p class="hint">${this.t("st_which_room")}</p>`;if(this._mode==="add"&&!this._source)return n`<p class="hint">${this.t("st_which_room")}</p>`;let e,t;if(this._mode==="edit"){let s=this._changedConfig();e=this._room.tile?N(s,this._room.tile):null,t=G(N(s,this._room.popup))}else{let s=this._newCards();e=s.length===2?s[0]:null,t=G(s.at(-1))}return n`
      ${e?n`<div class="tile-preview">
            <ss-card-preview bare .hass=${this.hass} .t=${this.t} .needs=${I} .config=${e}></ss-card-preview>
          </div>`:h}
      <div class="popup-title"><ha-icon .icon=${this._draft.icon}></ha-icon><b>${this._draft.name}</b></div>
      <ss-card-preview
        .hass=${this.hass}
        .t=${this.t}
        .needs=${I}
        .config=${{type:"vertical-stack",cards:t}}
      ></ss-card-preview>
    `}};g(we,"properties",{...b.properties,_mode:{state:!0},_step:{state:!0},_dashboards:{state:!0},_dashboard:{state:!0},_config:{state:!0},_room:{state:!0},_source:{state:!0},_draft:{state:!0},_place:{state:!0},_filter:{state:!0},_model:{state:!0},_card:{state:!0},_scenes:{state:!0}}),g(we,"styles",[b.styles,v`
      select {
        font: inherit;
        max-width: 240px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .tiles {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tile {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        text-align: start;
      }

      .tile ha-icon {
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .tile.active {
        border-color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
      }

      .tiles.wide {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }

      .tiles.wide .tile {
        align-items: flex-start;
      }

      .tile small {
        display: block;
        margin: 2px 0 0;
      }

      .search {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        padding: 8px 10px;
        margin-bottom: 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .checks {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 6px 12px;
        max-height: 280px;
        overflow-y: auto;
      }

      .checks label {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .checks input {
        accent-color: var(--primary-color);
      }

      .tile-preview {
        max-width: 220px;
        margin-bottom: 12px;
      }

      .popup-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
    `]);customElements.get("ss-rooms-tab")||customElements.define("ss-rooms-tab",we);var xe=-1,ye=class extends w{constructor(){super(),this.items=[],this.categories=[],this.hidden=[],this._selected=null,this._confirm=null,this._dropTarget=null}_emit(e,t=this.hidden){let s=this.canHide?{categories:e,hidden:t}:{categories:e};this.dispatchEvent(new CustomEvent("change",{detail:s}))}_clone(){return this.categories.map(e=>({...e,panels:[...e.panels]}))}_move(e,t,s=null){let a=this._clone();for(let o of a)o.panels=o.panels.filter(r=>r!==e);if(t!==xe){let o=a[t].panels,r=s===null?-1:o.indexOf(s);o.splice(r===-1?o.length:r,0,e)}this._emit(a)}_shift(e,t,s){let a=this._clone(),o=a[t].panels,r=o.indexOf(e),l=r+s;r===-1||l<0||l>=o.length||([o[r],o[l]]=[o[l],o[r]],this._emit(a))}_toggleHidden(e){let t=this.hidden.includes(e)?this.hidden.filter(s=>s!==e):[...this.hidden,e];this._emit(this.categories,t)}_addGroup(){let e=new Set(this.categories.map(s=>s.name.toLowerCase())),t=this.t("new_group");for(let s=2;e.has(t.toLowerCase());s+=1)t=`${this.t("new_group")} ${s}`;this._emit([...this._clone(),{name:t,panels:[]}])}_rename(e,t){let s=this._clone();s[e].name=t.trim()||s[e].name,this._emit(s)}_swapGroups(e,t){let s=this._clone(),a=e+t;a<0||a>=s.length||([s[e],s[a]]=[s[a],s[e]],this._emit(s))}_removeGroup(e){this._confirm=null,this._emit(this._clone().filter((t,s)=>s!==e))}_item(e){return this.items.find(t=>t.path===e)??{path:e,title:e,icon:"mdi:help",missing:!0}}render(){let e=new Set(this.categories.flatMap(s=>s.panels)),t=this.items.filter(s=>!e.has(s.path));return n`
      ${this._zone(xe,t,n`
        <div class="title">
          <strong>${this.t("ungrouped")}</strong>
          <span class="hint">${this.t("ungrouped_hint")}</span>
        </div>
      `)}
      ${this.categories.map((s,a)=>this._zone(a,s.panels.map(o=>this._item(o)),this._groupHeader(s,a)))}
      <button class="add" ?disabled=${this.disabled} @click=${this._addGroup}>
        <ha-icon icon="mdi:plus"></ha-icon>${this.t("add_group")}
      </button>
    `}_groupHeader(e,t){return this._confirm===t?n`
        <div class="title confirm">
          <span>${this.t("remove_group_confirm")}</span>
          <button class="danger" @click=${()=>this._removeGroup(t)}>${this.t("yes")}</button>
          <button @click=${()=>this._confirm=null}>${this.t("no")}</button>
        </div>
      `:n`
      <div class="title">
        <input
          .value=${e.name}
          maxlength="40"
          aria-label=${this.t("group_name")}
          ?disabled=${this.disabled}
          @change=${s=>this._rename(t,s.target.value)}
        />
        <button
          class="icon"
          title=${this.t("move_up")}
          ?disabled=${this.disabled||t===0}
          @click=${()=>this._swapGroups(t,-1)}
        >
          <ha-icon icon="mdi:arrow-up"></ha-icon>
        </button>
        <button
          class="icon"
          title=${this.t("move_down")}
          ?disabled=${this.disabled||t===this.categories.length-1}
          @click=${()=>this._swapGroups(t,1)}
        >
          <ha-icon icon="mdi:arrow-down"></ha-icon>
        </button>
        <button
          class="icon"
          title=${this.t("remove_group")}
          ?disabled=${this.disabled}
          @click=${()=>this._confirm=t}
        >
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </button>
      </div>
    `}_zone(e,t,s){let a=this._selected,o=a&&a.group!==e;return n`
      <section
        class="zone ${this._dropTarget===e?"over":""}"
        @dragover=${r=>this._dragOver(r,e)}
        @dragleave=${()=>this._dropTarget=null}
        @drop=${r=>this._drop(r,e,null)}
      >
        ${s}
        <div class="chips">
          ${t.map(r=>this._chip(r,e))}
          ${!t.length&&e!==xe?n`<span class="hint">${this.t("empty_group")}</span>`:h}
        </div>
        ${o?n`<button class="here" @click=${()=>this._moveSelected(e)}>
              <ha-icon icon="mdi:arrow-down-bold"></ha-icon>${this.t("move_here")}
            </button>`:h}
      </section>
    `}_chip(e,t){let s=this.hidden.includes(e.path),a=this._selected?.path===e.path,o=t===xe?[]:this.categories[t].panels,r=o.indexOf(e.path);return n`
      <div
        class="chip ${s?"hidden":""} ${a?"selected":""}"
        draggable=${this.disabled?"false":"true"}
        @dragstart=${l=>{l.dataTransfer.setData("text/plain",e.path),l.dataTransfer.effectAllowed="move"}}
        @dragend=${()=>this._dropTarget=null}
        @drop=${l=>{l.stopPropagation(),this._drop(l,t,e.path)}}
      >
        <button
          class="label"
          ?disabled=${this.disabled}
          aria-pressed=${a?"true":"false"}
          @click=${()=>this._selected=a?null:{path:e.path,group:t}}
        >
          <ha-icon .icon=${e.icon}></ha-icon>
          <span>${e.title}</span>
          ${e.missing?n`<em>${this.t("missing")}</em>`:h}
        </button>
        ${a&&t!==xe?n`
              <button
                class="icon"
                title=${this.t("move_left")}
                ?disabled=${r===0}
                @click=${()=>this._shift(e.path,t,-1)}
              >
                <ha-icon icon="mdi:chevron-left"></ha-icon>
              </button>
              <button
                class="icon"
                title=${this.t("move_right")}
                ?disabled=${r===o.length-1}
                @click=${()=>this._shift(e.path,t,1)}
              >
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            `:h}
        ${this.canHide?n`<button
              class="icon"
              title=${s?this.t("show"):this.t("hide")}
              ?disabled=${this.disabled}
              @click=${()=>this._toggleHidden(e.path)}
            >
              <ha-icon icon=${s?"mdi:eye-off-outline":"mdi:eye-outline"}></ha-icon>
            </button>`:h}
      </div>
    `}_dragOver(e,t){this.disabled||(e.preventDefault(),e.dataTransfer.dropEffect="move",this._dropTarget=t)}_drop(e,t,s){if(this.disabled)return;e.preventDefault(),this._dropTarget=null;let a=e.dataTransfer.getData("text/plain");a&&a!==s&&this._move(a,t,s)}_moveSelected(e){let{path:t}=this._selected;this._selected={path:t,group:e},this._move(t,e)}};g(ye,"properties",{items:{attribute:!1},categories:{attribute:!1},hidden:{attribute:!1},disabled:{type:Boolean},canHide:{type:Boolean},t:{attribute:!1},_selected:{state:!0},_confirm:{state:!0},_dropTarget:{state:!0}}),g(ye,"styles",v`
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .zone {
      border: 1px dashed var(--divider-color);
      border-radius: 12px;
      padding: 10px;
      transition: background-color 120ms;
    }

    .zone.over {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      border-color: var(--primary-color);
    }

    .title {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }

    .title.confirm span {
      flex: 1;
    }

    .title input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-weight: 600;
      padding: 6px 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .hint {
      color: var(--secondary-text-color);
      font-size: 13px;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      background: var(--secondary-background-color);
      border: 1px solid transparent;
      cursor: grab;
      max-width: 100%;
    }

    .chip.selected {
      border-color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
    }

    .chip.hidden .label {
      opacity: 0.45;
      text-decoration: line-through;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: 0;
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
      opacity: 0.4;
    }

    .label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 4px 6px 10px;
      min-width: 0;
    }

    .label span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .label em {
      font-size: 12px;
      color: var(--error-color);
    }

    .label ha-icon,
    .icon ha-icon {
      --mdc-icon-size: 18px;
    }

    .icon {
      display: inline-flex;
      padding: 6px;
      border-radius: 999px;
    }

    .icon:hover:not(:disabled) {
      background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    }

    .danger {
      color: var(--error-color);
      font-weight: 600;
      padding: 6px 10px;
    }

    .confirm button:not(.danger) {
      padding: 6px 10px;
    }

    .here,
    .add {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      color: var(--primary-color);
      font-weight: 500;
    }

    .here {
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .add {
      align-self: flex-start;
      margin-top: 0;
    }
  `);customElements.get("ss-groups-editor")||customElements.define("ss-groups-editor",ye);var Hs={phone:{width:430,height:640},tablet:{width:768,height:600},desktop:{width:760,height:560}},$e=class extends w{constructor(){super(),this.settingsLabel="Settings",this.items=[],this.device="desktop",this.page="light",this.expanded=!0,this._scale=1}connectedCallback(){super.connectedCallback(),this._resize=new ResizeObserver(()=>this._fit()),this._resize.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resize?.disconnect()}updated(e){e.has("device")&&this._fit()}_fit(){let{width:e}=Hs[this.device];this._scale=Math.min(1,this.clientWidth/e)||1}render(){let e=this.settings;if(!e)return h;let{width:t,height:s}=Hs[this.device];return n`
      <div class="viewport" style="height:${s*this._scale}px">
        <div
          class="screen ${this.page}"
          style="width:${t}px;height:${s}px;transform:scale(${this._scale})"
        >
          ${this.device==="desktop"?this._desktop(e):this._modal(e)}
        </div>
      </div>
    `}_desktop(e){let t=e.floating?e.inset:0,s=(this.expanded?256:56)+t*2;return n`
      <div class="desktop">
        <div class="shell" style="width:${s}px;padding:${t}px;${this._shell(e)}">
          ${this._sidebar(e,{radius:e.floating?e.radius:0,floating:e.floating})}
        </div>
        ${this._page()}
      </div>
    `}_modal(e){let t=this.device==="phone",s=t&&e.floating?e.inset:0,a=t?Math.min(430*.9,e.mobile_width):256;return n`
      ${this._page()}
      <div class="backdrop ${t&&e.mobile_blur?"blurred":""}"></div>
      <div class="drawer ${t?"":"plain"}" style="width:${a}px;padding:${s}px">
        ${this._sidebar(e,{radius:t&&e.floating?e.radius:0,floating:t&&e.floating,opacity:t?Math.min(e.opacity+12,100):e.opacity,phone:t,expanded:!0})}
      </div>
    `}_shell(e){return e.shell==="custom"?`background:${e.shell_color}`:e.shell==="theme"?"background:var(--primary-background-color)":"background:transparent"}_sidebar(e,{radius:t,floating:s,opacity:a=e.opacity,phone:o=!1,expanded:r=this.expanded}){let l=Math.min(Math.max((e.floating?e.radius:0)-6,8),14),c=[`border-radius:${t}px`,`--ss-opacity:${a}%`,`--ss-blur:${e.blur}px`,`--ss-item-radius:${l}px`,`--ss-phone-text:${e.mobile_text_size??14}px`,e.accent?`--sidebar-selected-icon-color:${e.accent};--sidebar-selected-text-color:${e.accent}`:""].join(";"),d=this._rows(e),m=d.find(p=>p.item)?.item.path;return n`
      <nav
        class="sidebar ${s?"floating":""} ${o?"phone":""} ${r?"expanded":""} ${e.highlight}"
        style=${c}
      >
        <div class="menu">
          <ha-icon icon="mdi:menu"></ha-icon>
          ${r?n`<span>Home Assistant</span>`:h}
        </div>
        <div class="list">
          ${d.map(p=>p.heading!==void 0?n`<div class="heading">${r?p.heading:""}</div>`:n`
                  <div
                    class="item ${p.item.path===m?"selected":""} ${e.hover_motion?"motion":""}"
                  >
                    <ha-icon .icon=${p.item.icon}></ha-icon>
                    ${r?n`<span>${p.item.title}</span>`:h}
                  </div>
                `)}
        </div>
        <div class="spacer"></div>
        <div class="item">
          <ha-icon icon="mdi:cog"></ha-icon>
          ${r?n`<span>${this.settingsLabel}</span>`:h}
        </div>
      </nav>
    `}_rows(e){let t=new Set(e.hidden??[]),s=new Set(e.categories.flatMap(l=>l.panels)),a=new Map(this.items.map(l=>[l.path,l])),o=this.items.filter(l=>!s.has(l.path)&&!t.has(l.path)).map(l=>({item:l})),r=new Set;for(let l of e.categories){let c=l.panels.filter(d=>!r.has(d)&&!t.has(d)&&a.has(d)).map(d=>a.get(d));c.forEach(d=>r.add(d.path)),c.length&&(o.push({heading:l.name}),o.push(...c.map(d=>({item:d}))))}return o}_page(){return n`
      <div class="page">
        <div class="toolbar"></div>
        <div class="cards">
          ${[0,1,2,3,4,5].map(()=>n`<div class="card"></div>`)}
        </div>
      </div>
    `}};g($e,"properties",{settings:{attribute:!1},items:{attribute:!1},device:{},page:{},expanded:{type:Boolean},settingsLabel:{},_scale:{state:!0}}),g($e,"styles",v`
    :host {
      display: block;
      min-width: 0;
    }

    .viewport {
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
    }

    .screen {
      position: relative;
      overflow: hidden;
      transform-origin: top left;
      font-family: var(--ha-font-family-body, Roboto, sans-serif);
      --page-bg: var(--primary-background-color, #fafafa);
      background: var(--page-bg);
    }

    /* Like the floor plan dashboard that turned the gap black. */
    .screen.dark {
      --page-bg: radial-gradient(circle at 70% 30%, #2b3440, #0d1117 70%);
    }

    .desktop {
      display: flex;
      height: 100%;
    }

    .shell {
      box-sizing: border-box;
      flex-shrink: 0;
      height: 100%;
    }

    .page {
      position: relative;
      flex: 1;
      height: 100%;
      background: var(--page-bg);
    }

    .screen > .page {
      position: absolute;
      inset: 0;
    }

    .toolbar {
      height: 56px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
      padding: 0 16px;
    }

    .card {
      height: 96px;
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--card-background-color, #fff);
      box-shadow: var(--ha-card-box-shadow, none);
    }

    .dark .card {
      background: rgba(255, 255, 255, 0.08);
    }

    .backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.32);
    }

    .backdrop.blurred {
      backdrop-filter: blur(8px) saturate(1.2);
    }

    .drawer {
      position: absolute;
      inset: 0 auto 0 0;
      box-sizing: border-box;
    }

    .drawer.plain {
      background: var(--sidebar-background-color, var(--card-background-color, #fff));
    }

    .sidebar {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      color: var(--sidebar-text-color, var(--primary-text-color));
      background: color-mix(
        in srgb,
        var(--sidebar-background-color, var(--card-background-color, #fff)) var(--ss-opacity),
        transparent
      );
      backdrop-filter: blur(var(--ss-blur)) saturate(1.5);
    }

    .sidebar.floating {
      border: 1px solid color-mix(in srgb, var(--divider-color, #888) 60%, transparent);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.12);
    }

    .sidebar.floating.phone {
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 20px;
      height: 56px;
      padding: 0 16px;
      font-size: 20px;
      flex-shrink: 0;
    }

    .list {
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      overflow: hidden;
    }

    .spacer {
      flex: 1;
    }

    .heading {
      padding: 14px 16px 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sidebar:not(.expanded) .heading {
      height: 1px;
      padding: 0;
      margin: 8px 16px;
      background: var(--divider-color);
    }

    .item {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      gap: 20px;
      min-height: 40px;
      margin: 0 4px;
      padding: 0 12px;
      border-radius: var(--ss-item-radius);
      font-size: 14px;
      white-space: nowrap;
      color: var(--sidebar-text-color, var(--primary-text-color));
      flex-shrink: 0;
    }

    .phone .item {
      min-height: 48px;
      font-size: var(--ss-phone-text);
    }

    .item ha-icon {
      color: var(--sidebar-icon-color, var(--secondary-text-color));
      transition: transform 160ms ease-out;
    }

    .item.motion:hover ha-icon {
      transform: translateX(2px);
    }

    .item.selected {
      font-weight: 600;
      color: var(--sidebar-selected-text-color, var(--primary-color));
    }

    .item.selected ha-icon {
      color: var(--sidebar-selected-icon-color, var(--primary-color));
    }

    .item.selected::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: inherit;
      background: var(--sidebar-selected-icon-color, var(--primary-color));
      opacity: 0.14;
    }

    .vivid .item.selected::before {
      opacity: 1;
      background: linear-gradient(
        135deg,
        color-mix(in srgb, var(--sidebar-selected-icon-color, var(--primary-color)) 78%, black),
        color-mix(in srgb, var(--sidebar-selected-icon-color, var(--primary-color)) 60%, black)
      );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        0 6px 18px -4px
          color-mix(in srgb, var(--sidebar-selected-icon-color, var(--primary-color)) 70%, transparent);
    }

    .vivid .item.selected,
    .vivid .item.selected ha-icon {
      color: #fff;
    }

    @media (prefers-reduced-motion: reduce) {
      .item.motion:hover ha-icon {
        transform: none;
      }
    }
  `);customElements.get("ss-sidebar-preview")||customElements.define("ss-sidebar-preview",$e);var Ca=new Set(["config","profile","notfound"]),Ms=i=>i==null?i:JSON.parse(JSON.stringify(i)),Ea=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function za(i,e){let t=o=>String(o).split(".").map(r=>parseInt(r,10)||0),[s,a]=[t(i),t(e)];for(let o=0;o<Math.max(s.length,a.length);o+=1)if((s[o]??0)!==(a[o]??0))return(s[o]??0)<(a[o]??0);return!1}var Se=class extends b{constructor(){super(),this._draft=null,this._device=window.innerWidth<=600?"phone":window.innerWidth<=870?"tablet":"desktop",this._page="light",this._expanded=!0,this._haSidebar={},this._step=0}connectedCallback(){super.connectedCallback(),this.hass.callWS({type:"frontend/get_user_data",key:"sidebar"}).then(e=>this._haSidebar=e?.value??{}).catch(()=>{})}willUpdate(e){e.has("glass")&&(this._draft=Ms(this.glass?.sidebar??null))}get dirty(){return this._draft!==null&&!Ea(this._draft,this.glass?.sidebar??null)}_set(e,t){this._edit({[e]:t})}_edit(e){this._draft={...this._draft,...e},this._toast=null}_reload(){this.dispatchEvent(new CustomEvent("reload"))}_save(){this._run(async()=>{await this.hass.callWS({type:"style_studio/sidebar/save",sidebar:this._draft}),this._reload()},this.t("saved"))}_undo(){this._ask(this.t("undo_confirm"),()=>this._run(async()=>{let{restored:e}=await this.hass.callWS({type:"style_studio/sidebar/undo"});if(!e)throw new Error(this.t("nothing_to_undo"));this._reload()},this.t("undone")))}_items(){let e=this._haSidebar.panelOrder??[],t=new Set(this._haSidebar.hiddenPanels??[]),s=a=>{let o=e.indexOf(a);return o===-1?e.length:o};return Object.values(this.hass.panels??{}).filter(a=>(a.title||a.url_path==="lovelace")&&!Ca.has(a.url_path)&&!t.has(a.url_path)).map(a=>({path:a.url_path,icon:a.icon||"mdi:view-dashboard",title:this._panelTitle(a)})).sort((a,o)=>s(a.path)-s(o.path)||(o.path==="lovelace")-(a.path==="lovelace")||a.title.localeCompare(o.title))}_panelTitle(e){return e.title?this.hass.localize(`panel.${e.title}`)||e.title:this.hass.localize("panel.states")||"Overview"}render(){let e=this.glass;if(!e)return h;if(!e.version&&!e.added)return n`<div class="card">
        <h2>${this.t("glass_missing_title")}</h2>
        <p class="hint">${this.t("glass_missing")}</p>
      </div>`;if(!e.added||!this._draft)return n`<div class="card">
        <h2>${this.t("glass_not_added_title")}</h2>
        <p class="hint">${this.t("glass_not_added")}</p>
      </div>`;let t=this._draft;return n`
      <p class="intro">${this.t("glass_intro")}</p>
      ${e.settings_page?n`<a class="settings-link" href=${e.settings_page}>
            <ha-icon icon="mdi:open-in-app"></ha-icon>${this.t("open_glass")}
            <small>${this.t("open_glass_hint")}</small>
          </a>`:h}
      ${e.version&&za(e.version,e.min_version)?this._warning(this.t("glass_old",{version:e.version,min:e.min_version})):h}
      ${e.loaded?h:this._warning(this.t("glass_not_loaded"))}
      <div class="layout">
        <div class="settings">
          ${this._steps([{title:this.t("shape"),summary:t.floating?this.t("floating"):"",content:n`
                  ${this._switch(t,"floating",this.t("floating"),this.t("floating_hint"))}
                  ${this._slider(t,"inset",this.t("inset"),0,24,"px",!t.floating)}
                  ${this._slider(t,"radius",this.t("radius"),0,32,"px",!t.floating)}
                `},{title:this.t("glass"),content:n`
                  ${this._slider(t,"blur",this.t("blur"),0,40,"px")}
                  ${this._slider(t,"opacity",this.t("opacity"),40,100,"%",!1,this.t("opacity_hint"))}
                  ${this._switch(t,"glass_cards",this.t("glass_cards"),this.t("glass_cards_hint"))}
                `},{title:this.t("active"),content:n`
                  ${this._segment(t,"highlight",[["soft",this.t("highlight_soft")],["vivid",this.t("highlight_vivid")]])}
                  <label class="row">
                    <span>
                      ${this.t("own_accent")}
                      <small>${this.t("own_accent_hint")}</small>
                    </span>
                    <span class="inline">
                      ${t.accent?n`<input type="color" .value=${t.accent} @input=${s=>this._set("accent",s.target.value)} />`:h}
                      <input
                        type="checkbox"
                        class="switch"
                        .checked=${!!t.accent}
                        @change=${s=>this._set("accent",s.target.checked?"#f59e0b":null)}
                      />
                    </span>
                  </label>
                  ${this._switch(t,"hover_motion",this.t("motion"))}
                `},{title:this.t("phone"),content:n`
                  <p class="hint">${this.t("phone_hint")}</p>
                  ${this._slider(t,"mobile_width",this.t("mobile_width"),240,360,"px")}
                  ${this._slider(t,"mobile_text_size",this.t("mobile_text_size"),12,20,"px")}
                  ${this._switch(t,"mobile_blur",this.t("mobile_blur"))}
                `},{title:this.t("groups"),content:n`
                  <p class="hint">${this.t("groups_hint")}</p>
                  <ss-groups-editor
                    .items=${this._items()}
                    .categories=${t.categories}
                    .t=${this.t}
                    @change=${s=>this._edit(s.detail)}
                  ></ss-groups-editor>
                `}],this._step,s=>this._step=s,n`<button class="primary next" ?disabled=${this._busy||!this.dirty} @click=${()=>this._save()}>
              ${this.t("save")}
            </button>`)}
        </div>

        <aside class="card preview">
          <h2>${this.t("preview")}</h2>
          <p class="hint">${this.t("preview_hint")}</p>
          <div class="segment small">
            ${["phone","tablet","desktop"].map(s=>n`<button
                class=${s===this._device?"active":""}
                @click=${()=>this._device=s}
              >
                ${this.t(`device_${s}`)}
                <small>${{phone:430,tablet:768,desktop:1920}[s]}</small>
              </button>`)}
          </div>
          <div class="segment small">
            ${["light","dark"].map(s=>n`<button
                class=${s===this._page?"active":""}
                @click=${()=>this._page=s}
              >
                ${this.t(`page_${s}`)}
              </button>`)}
            ${this._device==="desktop"?n`<button
                  class=${this._expanded?"active":""}
                  @click=${()=>this._expanded=!this._expanded}
                >
                  ${this.t("expanded")}
                </button>`:h}
          </div>
          <ss-sidebar-preview
            .settings=${t}
            .items=${this._items()}
            .device=${this._device}
            .page=${this._page}
            .expanded=${this._expanded}
            .settingsLabel=${this.hass.localize("panel.config")||"Settings"}
          ></ss-sidebar-preview>
        </aside>
      </div>
      ${this._bar({left:e.history?n`<button ?disabled=${this._busy} @click=${this._undo}>
              <ha-icon icon="mdi:history"></ha-icon>${this.t("undo")}
            </button>`:h,onCancel:()=>this._draft=Ms(this.glass.sidebar),onSave:()=>this._save()})}
    `}};g(Se,"properties",{...b.properties,glass:{attribute:!1},_draft:{state:!0},_device:{state:!0},_page:{state:!0},_expanded:{state:!0},_haSidebar:{state:!0},_step:{state:!0}});Se.styles=[b.styles,v`
    .settings-link {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      padding: 12px 14px;
      margin-bottom: 16px;
      border-radius: var(--ss-radius, 12px);
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
    }

    .settings-link small {
      flex-basis: 100%;
      margin: 0;
      font-weight: 400;
    }
  `];customElements.get("ss-sidebar-tab")||customElements.define("ss-sidebar-tab",Se);var Ta=["active","auto","cool","dry","heat","heat_cool","fan_only"],Ae=class extends w{render(){if(!this.vars)return h;let e=Object.entries(this.vars).map(([s,a])=>`--${s}:${a}`).join(";"),t=this.t;return n`
      <div class="screen" style=${e}>
        <div class="sidebar">
          <div class="dot"></div>
          <div class="nav selected"><ha-icon icon="mdi:view-dashboard"></ha-icon></div>
          <div class="nav"><ha-icon icon="mdi:lightning-bolt"></ha-icon></div>
          <div class="nav"><ha-icon icon="mdi:map"></ha-icon></div>
          <div class="nav"><ha-icon icon="mdi:palette-swatch-outline"></ha-icon></div>
        </div>
        <div class="main">
          <div class="header">
            <span class="title">${t("pv_title")}</span>
            <span class="tab active">${t("pv_title")}</span>
            <span class="tab">${t("pv_tab2")}</span>
          </div>
          <div class="content">
            <div class="blob"></div>
            <div class="weather">
              <ha-icon icon="mdi:weather-sunny"></ha-icon>
              <span>${t("pv_weather")}</span>
            </div>
            <div class="grid">
              <div class="card tile on">
                <span class="icon"><ha-icon icon="mdi:sofa"></ha-icon></span>
                <span><b>${t("pv_living")}</b><small>${t("pv_lights")}</small></span>
              </div>
              <div class="card tile">
                <span class="icon"><ha-icon icon="mdi:fridge"></ha-icon></span>
                <span><b>${t("pv_kitchen")}</b><small>${t("pv_off")}</small></span>
              </div>
            </div>
            <div class="card">
              <div class="line">
                <ha-icon icon="mdi:fan" class="state"></ha-icon>
                <span>${t("pv_switch")}</span>
                <span class="switch on"></span>
              </div>
              <div class="line">
                <span class="slider"><span></span></span>
              </div>
              <div class="line climate">
                <ha-icon icon="mdi:air-conditioner" class="state"></ha-icon>
                <span>${t("pv_climate")}</span>
                <span class="modes">
                  ${Ta.map(s=>n`<i title=${s} style="background:var(--state-climate-${s}-color)"></i>`)}
                </span>
              </div>
            </div>
          </div>
          ${this.popup?n`
                <div class="popup">
                  <div class="popup-head">
                    <span class="icon"><ha-icon icon="mdi:sofa"></ha-icon></span>
                    <b>${t("pv_popup")}</b>
                  </div>
                  <div class="buttons">
                    <span class="bubble on"><ha-icon icon="mdi:ceiling-light"></ha-icon></span>
                    <span class="bubble"><ha-icon icon="mdi:floor-lamp"></ha-icon></span>
                    <span class="bubble"><ha-icon icon="mdi:television"></ha-icon></span>
                  </div>
                  <div class="field">${t("pv_climate")}</div>
                </div>
              `:h}
        </div>
      </div>
    `}};g(Ae,"properties",{vars:{attribute:!1},t:{attribute:!1},popup:{type:Boolean}}),g(Ae,"styles",v`
    :host {
      display: block;
    }

    .screen {
      display: flex;
      height: 440px;
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      font-family: var(--ha-font-family-body, Roboto, sans-serif);
      font-size: 13px;
      color: var(--primary-text-color);
      background: var(--primary-background-color);
    }

    ha-icon {
      --mdc-icon-size: 18px;
    }

    .sidebar {
      width: 52px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 10px 0;
      background: var(--sidebar-background-color);
      border-inline-end: 1px solid var(--divider-color);
    }

    .dot {
      width: 22px;
      height: 22px;
      margin-bottom: 8px;
      border-radius: 50%;
      background: var(--sidebar-text-color);
      opacity: 0.25;
    }

    .nav {
      position: relative;
      display: grid;
      place-items: center;
      width: 38px;
      height: 34px;
      border-radius: 10px;
      color: var(--sidebar-icon-color);
    }

    .nav.selected {
      color: var(--sidebar-selected-icon-color);
    }

    .nav.selected::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: var(--sidebar-selected-icon-color);
      opacity: 0.14;
    }

    .main {
      position: relative;
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: flex-end;
      gap: 14px;
      height: 44px;
      padding: 0 14px;
      flex-shrink: 0;
      background: var(--app-header-background-color);
      color: var(--app-header-text-color);
    }

    .title {
      align-self: center;
      font-size: 16px;
      margin-inline-end: auto;
    }

    .tab {
      padding: 0 2px 10px;
      opacity: 0.75;
    }

    .tab.active {
      opacity: 1;
      border-bottom: 2px solid var(--app-header-selection-bar-color);
    }

    .content {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 12px;
      overflow: hidden;
    }

    /* Something behind the cards, so card and pop-up opacity show. */
    .blob {
      position: absolute;
      width: 220px;
      height: 220px;
      right: -40px;
      top: 30px;
      border-radius: 50%;
      background: var(--primary-color);
      opacity: 0.35;
      filter: blur(30px);
    }

    .card,
    .weather {
      position: relative;
      background: var(--ha-card-background, var(--card-background-color));
      border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color));
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, none);
      backdrop-filter: blur(12px);
    }

    .weather {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      background: var(--weather-card-gradient);
    }

    .weather ha-icon {
      color: var(--weather-card-accent);
      --mdc-icon-size: 26px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .tile {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
    }

    .tile small,
    .line small {
      display: block;
      color: var(--secondary-text-color);
    }

    .icon {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      flex-shrink: 0;
      position: relative;
      color: var(--state-icon-color);
    }

    .icon::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: var(--state-icon-color);
      opacity: 0.15;
    }

    .on .icon {
      color: var(--state-light-active-color);
    }

    .on .icon::before {
      background: var(--state-light-active-color);
      opacity: 0.2;
    }

    .card:not(.tile) {
      padding: 4px 12px;
    }

    .line {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 36px;
    }

    .line + .line {
      border-top: 1px solid var(--divider-color);
    }

    .line > span:nth-child(2) {
      flex: 1;
    }

    .state {
      color: var(--state-fan-active-color);
    }

    .climate .state {
      color: var(--state-climate-cool-color);
    }

    .switch {
      position: relative;
      width: 34px;
      height: 14px;
      border-radius: 999px;
      background: var(--switch-checked-track-color);
      opacity: 0.9;
    }

    .switch::after {
      content: "";
      position: absolute;
      top: -3px;
      right: -2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--switch-checked-button-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .slider {
      flex: 1;
      height: 6px;
      border-radius: 999px;
      background: var(--slider-bar-color);
    }

    .slider span {
      display: block;
      width: 62%;
      height: 100%;
      border-radius: inherit;
      background: var(--slider-color);
    }

    .modes {
      display: flex;
      gap: 4px;
    }

    .modes i {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .popup {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 58%;
      padding: 14px;
      border-radius: 24px 24px 0 0;
      background: var(--bubble-pop-up-background-color, var(--card-background-color));
      backdrop-filter: blur(14px);
      box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .popup-head {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
    }

    .buttons {
      display: flex;
      gap: 10px;
    }

    .bubble {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--bubble-main-background-color);
      color: var(--state-icon-color);
    }

    .bubble.on {
      background: var(--bubble-button-background-color);
      color: var(--state-light-active-color);
    }

    .field {
      padding: 10px 12px;
      border-radius: 14px;
      background: var(--bubble-secondary-background-color);
    }
  `);customElements.get("ss-theme-preview")||customElements.define("ss-theme-preview",Ae);var $t=[{key:"basis",nl:"Basis",en:"Basics",vars:[["primary-color","Hoofdkleur","Primary color","color"],["accent-color","Accentkleur","Accent color","color"],["light-primary-color","Hoofdkleur licht","Primary color, light","color"],["dark-primary-color","Hoofdkleur donker","Primary color, dark","color"],["text-primary-color","Tekst op de hoofdkleur","Text on primary color","color"],["primary-background-color","Achtergrond","Background","color"],["secondary-background-color","Tweede achtergrond","Secondary background","color"],["divider-color","Scheidingslijnen","Dividers","color"]]},{key:"text",nl:"Tekst",en:"Text",vars:[["primary-text-color","Tekst","Text","color"],["secondary-text-color","Tekst, tweede","Secondary text","color"],["disabled-text-color","Tekst, uitgeschakeld","Disabled text","color"]]},{key:"header",nl:"Bovenbalk",en:"Top bar",vars:[["app-header-background-color","Achtergrond","Background","color"],["app-header-text-color","Tekst en iconen","Text and icons","color"],["app-header-selection-bar-color","Streep onder actieve tab","Active tab bar","color"],["app-header-edit-background-color","Achtergrond bij bewerken","Background while editing","color"],["app-header-edit-text-color","Tekst bij bewerken","Text while editing","color"]]},{key:"sidebar",nl:"Zijbalk (menu)",en:"Sidebar (menu)",vars:[["sidebar-background-color","Achtergrond","Background","color"],["sidebar-text-color","Tekst","Text","color"],["sidebar-icon-color","Iconen","Icons","color"],["sidebar-selected-icon-color","Icoon actieve pagina","Active page icon","color"],["sidebar-selected-text-color","Tekst actieve pagina","Active page text","color"]]},{key:"cards",nl:"Kaarten",en:"Cards",vars:[["card-background-color","Achtergrond","Background","color"],["ha-card-background","Achtergrond (dashboard)","Background (dashboard)","color"],["ha-card-border-color","Rand","Border","color"],["ha-card-border-width","Randdikte","Border width","size"],["ha-card-border-radius","Hoeken","Corners","size"],["ha-card-box-shadow","Schaduw","Shadow","shadow"]]},{key:"popups",nl:"Pop-ups (Bubble Card)",en:"Pop-ups (Bubble Card)",vars:[["bubble-pop-up-background-color","Achtergrond pop-up","Pop-up background","color"],["bubble-pop-up-main-background-color","Achtergrond inhoud","Content background","color"],["bubble-main-background-color","Knoppen, achtergrond","Buttons, background","color"],["bubble-secondary-background-color","Tweede achtergrond","Secondary background","color"],["bubble-button-background-color","Knop","Button","color"],["bubble-icon-background-color","Achter iconen","Behind icons","color"]]},{key:"dialogs",nl:"Vensters (meer info, instellingen)",en:"Dialogs (more info, settings)",vars:[["ha-dialog-surface-background","Achtergrond","Background","color"],["mdc-theme-surface","Achtergrond (oudere vensters)","Background (older dialogs)","color"],["dialog-box-shadow","Schaduw","Shadow","shadow"],["ha-dialog-border-radius","Hoeken","Corners","size"]]},{key:"controls",nl:"Schakelaars en schuiven",en:"Switches and sliders",vars:[["switch-checked-color","Schakelaar aan","Switch on","color"],["switch-checked-button-color","Knopje aan","Knob on","color"],["switch-checked-track-color","Baan aan","Track on","color"],["switch-unchecked-button-color","Knopje uit","Knob off","color"],["switch-unchecked-track-color","Baan uit","Track off","color"],["slider-color","Schuif","Slider","color"],["slider-bar-color","Baan van de schuif","Slider track","color"]]},{key:"inputs",nl:"Invoervelden",en:"Input fields",vars:[["input-fill-color","Achtergrond","Background","color"],["mdc-text-field-fill-color","Achtergrond (oudere velden)","Background (older fields)","color"],["input-ink-color","Tekst","Text","color"],["input-label-ink-color","Label","Label","color"],["code-editor-background-color","Code-editor","Code editor","color"]]},{key:"states",nl:"Status en iconen",en:"States and icons",vars:[["state-icon-color","Icoon (uit)","Icon (off)","color"],["paper-item-icon-color","Icoon in button-card en oudere kaarten","Icon in button-card and older cards","color"],["paper-item-icon-active-color","Icoon aan in button-card en oudere kaarten","Icon on in button-card and older cards","color"],["state-icon-active-color","Icoon aan","Icon on","color"],["state-active-color","Aan (algemeen)","On (general)","color"],["state-light-active-color","Lamp aan","Light on","color"],["state-switch-active-color","Schakelaar aan","Switch on","color"],["state-fan-active-color","Ventilator aan","Fan on","color"],["state-cover-active-color","Zonwering open","Cover open","color"],["state-input_boolean-active-color","Hulpschakelaar aan","Toggle helper on","color"],["state-automation-active-color","Automatisering aan","Automation on","color"],["state-script-active-color","Script actief","Script running","color"],["state-binary_sensor-active-color","Sensor actief","Binary sensor on","color"],["state-media_player-active-color","Mediaspeler aan","Media player on","color"],["state-person-home-color","Persoon thuis","Person home","color"],["state-inactive-color","Uit (algemeen)","Off (general)","color"],["state-unavailable-color","Niet beschikbaar","Unavailable","color"]]},{key:"climate",nl:"Airco-ring",en:"Climate ring",vars:[["state-climate-active-color","Actief","Active","color"],["state-climate-auto-color","Auto","Auto","color"],["state-climate-cool-color","Koelen","Cool","color"],["state-climate-dry-color","Drogen","Dry","color"],["state-climate-heat-color","Verwarmen","Heat","color"],["state-climate-heat_cool-color","Koelen en verwarmen","Heat and cool","color"],["state-climate-fan_only-color","Alleen ventilator","Fan only","color"]]},{key:"alerts",nl:"Meldingen",en:"Alerts",vars:[["error-color","Fout","Error","color"],["warning-color","Waarschuwing","Warning","color"],["success-color","Gelukt","Success","color"],["info-color","Informatie","Info","color"]]},{key:"dashboard",nl:"Dashboardpagina's",en:"Dashboard pages",vars:[["lovelace-background","Achtergrond van alle pagina's (kleur, verloop of foto)","Background of all pages (color, gradient or photo)","text"]]},{key:"weather",nl:"Weerkaart",en:"Weather card",vars:[["weather-card-gradient","Achtergrond (verloop)","Background (gradient)","text"],["weather-card-accent","Accent","Accent","color"]]}],Ce=new Set($t.flatMap(i=>i.vars.map(([e])=>e))),P={background:"#f4efe6",card:"#fffaf2",text:"#3b3127",accent:"#f59e0b",sidebar:"#fbf6ec",header:null,icon:null,radius:16,shadow:"soft",card_opacity:100,popup:"solid",popup_opacity:80},Ws={sand:{nl:"Zand en geel",en:"Sand and yellow",base:{...P}},pink:{nl:"Roze",en:"Pink",base:{...P,background:"#fbf1f4",card:"#fffafc",text:"#3d2b33",accent:"#e8749e",sidebar:"#fdf5f8"}},dark:{nl:"Donker",en:"Dark",base:{...P,background:"#111418",card:"#1b1f25",text:"#e6e8eb",accent:"#f5b301",sidebar:"#161a1f",shadow:"none"}},glass:{nl:"Glas",en:"Glass",base:{...P,background:"#dfe7ef",card:"#ffffff",text:"#1f2a37",accent:"#3b82f6",sidebar:"#f3f6fa",radius:20,card_opacity:62,popup:"glass",popup_opacity:72}}},xt={none:"none",soft:"0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 14px rgba(0, 0, 0, 0.06)",strong:"0 2px 4px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.14)"};function Ze(i){let e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function ja([i,e,t]){return`#${[i,e,t].map(s=>Math.round(s).toString(16).padStart(2,"0")).join("")}`}function x(i,e,t){let[s,a]=[Ze(i),Ze(e)];return ja(s.map((o,r)=>o*t+a[r]*(1-t)))}function Rs(i,e){if(e>=100)return i;let[t,s,a]=Ze(i);return`rgba(${t}, ${s}, ${a}, ${e/100})`}function Ls(i){let[e,t,s]=Ze(i).map(a=>{let o=a/255;return o<=.03928?o/12.92:((o+.055)/1.055)**2.4});return .2126*e+.7152*t+.0722*s}function yt(i){return Ls(i)>.45?"#1f1f1f":"#ffffff"}var Oa=i=>Ls(i)<.2;function Ee(i){let e={...P,...i},t=Oa(e.background),s=e.header??e.background,a=Rs(e.card,e.card_opacity),o=x(e.text,e.background,.62),r=e.icon??x(e.accent,e.text,.6),l=x(e.text,e.background,t?.16:.12),c=e.popup==="glass"?Rs(e.card,e.popup_opacity):e.card,d=(m,p)=>x(m,e.card,p);return{"primary-color":e.accent,"accent-color":e.accent,"light-primary-color":x(e.accent,e.background,.4),"dark-primary-color":x(e.accent,"#000000",.8),"text-primary-color":yt(e.accent),"primary-background-color":e.background,"secondary-background-color":x(e.text,e.background,t?.06:.04),"divider-color":l,"primary-text-color":e.text,"secondary-text-color":o,"disabled-text-color":x(e.text,e.background,.38),"app-header-background-color":s,"app-header-text-color":s===e.background?e.text:yt(s),"app-header-selection-bar-color":e.accent,"app-header-edit-background-color":x(e.text,e.background,.75),"app-header-edit-text-color":yt(x(e.text,e.background,.75)),"sidebar-background-color":e.sidebar,"sidebar-text-color":e.text,"sidebar-icon-color":o,"sidebar-selected-icon-color":e.accent,"sidebar-selected-text-color":t?e.accent:x(e.accent,e.text,.7),"card-background-color":a,"ha-card-background":a,"ha-card-border-color":l,"ha-card-border-width":"1px","ha-card-border-radius":`${e.radius}px`,"ha-card-box-shadow":xt[e.shadow]??xt.soft,"bubble-pop-up-background-color":c,"bubble-pop-up-main-background-color":c,"bubble-main-background-color":x(e.text,e.card,t?.08:.05),"bubble-secondary-background-color":x(e.text,e.card,t?.12:.08),"bubble-button-background-color":d(e.accent,.22),"bubble-icon-background-color":d(e.accent,.18),"ha-dialog-surface-background":e.card,"mdc-theme-surface":e.card,"dialog-box-shadow":xt.strong,"ha-dialog-border-radius":`${Math.max(e.radius+8,12)}px`,"switch-checked-color":e.accent,"switch-checked-button-color":e.accent,"switch-checked-track-color":e.accent,"switch-unchecked-button-color":t?"#9aa0a6":"#fafafa","switch-unchecked-track-color":x(e.text,e.background,.35),"slider-color":e.accent,"slider-bar-color":x(e.accent,e.background,.3),"input-fill-color":x(e.text,e.card,.05),"mdc-text-field-fill-color":x(e.text,e.card,.05),"input-ink-color":e.text,"input-label-ink-color":o,"code-editor-background-color":e.card,"state-icon-color":r,"paper-item-icon-color":r,"paper-item-icon-active-color":e.accent,"state-icon-active-color":e.accent,"state-active-color":e.accent,"state-light-active-color":e.accent,"state-switch-active-color":e.accent,"state-fan-active-color":e.accent,"state-cover-active-color":e.accent,"state-input_boolean-active-color":e.accent,"state-automation-active-color":e.accent,"state-script-active-color":e.accent,"state-binary_sensor-active-color":e.accent,"state-media_player-active-color":e.accent,"state-person-home-color":e.accent,"state-inactive-color":x(e.text,e.background,.4),"state-unavailable-color":x(e.text,e.background,.3),"state-climate-active-color":e.accent,"state-climate-auto-color":"#43a047","state-climate-cool-color":"#2196f3","state-climate-dry-color":"#efbd07","state-climate-heat-color":"#ff8100","state-climate-heat_cool-color":"#ffa000","state-climate-fan_only-color":"#00bcd4","error-color":"#db4437","warning-color":"#ffa600","success-color":"#43a047","info-color":"#039be5","weather-card-gradient":`linear-gradient(135deg, ${d(e.accent,.35)}, ${e.card})`,"weather-card-accent":e.accent}}function ze(i){return{...Ee(i.base),...i.overrides}}function Xe(i){let e=a=>{let o=String(i[a]??"").trim();return/^#[0-9a-f]{6}$/i.test(o)?o.toLowerCase():null},t={...P};t.background=e("primary-background-color")??t.background,t.card=e("card-background-color")??e("ha-card-background")??t.card,t.text=e("primary-text-color")??t.text,t.accent=e("primary-color")??t.accent,t.sidebar=e("sidebar-background-color")??t.background,t.header=e("app-header-background-color");let s={};for(let[a,o]of Object.entries(i))(typeof o=="string"||typeof o=="number")&&(s[a]=String(o));return{base:t,overrides:s}}var Qe=i=>i==null?i:JSON.parse(JSON.stringify(i));function Na(i){let e=String(i).trim().toLowerCase();if(/^#[0-9a-f]{6}$/.test(e))return e;if(/^#[0-9a-f]{3}$/.test(e))return`#${[...e.slice(1)].map(s=>s+s).join("")}`;let t=e.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/);return t?`#${t.slice(1,4).map(s=>Number(s).toString(16).padStart(2,"0")).join("")}`:null}var Gs=(i,e)=>JSON.stringify(i)===JSON.stringify(e),Pa=/^#[0-9a-f]{6}$/i,et="new",Te=class extends b{constructor(){super(),this._selected=null,this._draft=null,this._picking=!1,this._wholeScreen=!1,this._popup=!0,this._newVar={key:"",value:""},this._applied=null,this._mode=null,this._step=0}connectedCallback(){super.connectedCallback(),this._load()}disconnectedCallback(){super.disconnectedCallback(),this._applyToScreen(null)}updated(){this._applyToScreen(this._wholeScreen&&this._draft?ze(this._draft):null)}get _lang(){return(this.hass?.locale?.language||this.hass?.language||"nl").startsWith("nl")?"nl":"en"}get _saved(){return this._state?.themes.find(e=>e.id===this._selected)??null}get dirty(){if(!this._draft)return!1;if(this._selected===et)return!this._pristine||!Gs(this._editable(this._draft),this._pristine);let e=this._saved;return!e||!Gs(this._editable(this._draft),this._editable(e))}_editable(e){return{name:e.name,base:e.base,overrides:e.overrides}}async _load(e){try{this._state=await this.hass.callWS({type:"style_studio/themes/get"}),e&&this._select(e)}catch(t){this._error(t)}}_select(e){let t=this._state.themes.find(s=>s.id===e);this._selected=t?e:null,this._draft=t?Qe(this._editable(t)):null,this._picking=!t}_applyToScreen(e){let t=document.documentElement;if(this._applied){for(let[s,a]of Object.entries(this._applied))a?t.style.setProperty(s,a):t.style.removeProperty(s);this._applied=null}if(e){this._applied={};for(let[s,a]of Object.entries(e))this._applied[`--${s}`]=t.style.getPropertyValue(`--${s}`),t.style.setProperty(`--${s}`,a)}}_uniqueName(e){let t=new Set([...this._state.themes.map(a=>a.name.toLowerCase()),...Object.keys(this._state.others).map(a=>a.toLowerCase())]),s=e;for(let a=2;t.has(s.toLowerCase());a+=1)s=`${e} ${a}`;return s}_startNew(e,t,s={}){this._selected=et,this._picking=!1,this._draft={name:this._uniqueName(e),base:Qe(t),overrides:Qe(s)},this._pristine=null}_current(){let e=this.hass.selectedTheme?.theme;if(e&&e!=="default"&&this._state.others[e])return{name:e,...Xe(this._state.others[e])};let t=getComputedStyle(document.documentElement),s={};for(let a of Ce){let o=Na(t.getPropertyValue(`--${a}`));o&&(s[a]=o)}return{name:this.t("my_theme"),base:Xe(s).base,overrides:{}}}_startFromCurrent(){let e=this._state.themes.find(o=>o.name===this.hass.selectedTheme?.theme);if(e){this._select(e.id);return}let{name:t,base:s,overrides:a}=this._current();this._startNew(t===this.t("my_theme")?t:`${t} (${this.t("copy_suffix")})`,s,a),this._pristine=Qe(this._draft)}_set(e,t){this._draft={...this._draft,base:{...this._draft.base,[e]:t}},this._toast=null}_override(e,t){let s={...this._draft.overrides};t===""||t==null?delete s[e]:s[e]=t,this._draft={...this._draft,overrides:s},this._toast=null}_save(){let e={...this._draft,vars:ze(this._draft)};this._selected!==et&&(e.id=this._selected),this._run(async()=>{try{let t=await this.hass.callWS({type:"style_studio/themes/save",theme:e});this._wholeScreen=!1,this._state=t,this._select(t.theme.id),this._mode="use"}catch(t){throw this._known(t)}},this.t("saved_theme",{file:this._state.file}))}get _nameOk(){return/^[\p{L}\p{N}_][\p{L}\p{N}_ .()&+'-]*$/u.test((this._draft?.name??"").trim())}_known(e){if(e?.code==="reload_failed")return new Error(this.t("err_reload_failed",{message:e.message}));let t={file_exists:"err_file_exists",name_taken:"err_name_taken"}[e?.code];return t?new Error(this.t(t)):e}_delete(){this._ask(this.t("delete_confirm",{name:this._saved.name}),()=>this._run(async()=>{this._state=await this.hass.callWS({type:"style_studio/themes/delete",theme_id:this._selected}),this._select(null),this._mode=null},this.t("deleted")))}_undo(){this._ask(this.t("undo_confirm"),()=>this._run(async()=>{let e=await this.hass.callWS({type:"style_studio/themes/undo"});if(!e.restored)throw new Error(this.t("nothing_to_undo"));this._state=e,this._select(this._selected)},this.t("undone")))}_setDefault(e=this._saved.name){this._run(async()=>{this._state=await this.hass.callWS({type:"style_studio/themes/set_default",name:e})},this.t("default_set",{name:e}))}_begin(e){this._mode=e,this._step=0,this._select(null),this._toast=null,e==="new"&&this._startFromCurrent()}_home(){let e=()=>{this._wholeScreen=!1,this._select(null),this._mode=null};this.dirty?this._ask(this.t("discard_confirm"),e):e()}render(){return this._state?this._mode?this._mode==="use"?n`${this._back(this.t("back"),()=>this._home())} ${this._useList()} ${this._bar({canSave:!1})}`:n`
      ${this._back(this.t("back"),()=>this._home())}
      <div class="layout">
        <div>${this._flow()}</div>
        ${this._draft?this._previewCard():n`<aside class="card preview"><p class="hint">${this.t("st_which_theme")}</p></aside>`}
      </div>
      ${this._bar({canSave:!1})}
    `:this._startScreen():h}_startScreen(){let e=[];return this._state.themes.length&&e.push({key:"edit",icon:"mdi:palette-outline",title:this.t("th_do_edit"),text:this.t("th_do_edit_text")}),e.push({key:"new",icon:"mdi:plus-circle-outline",title:this.t("th_do_new"),text:this.t("th_do_new_text")},{key:"use",icon:"mdi:account-check-outline",title:this.t("th_do_use"),text:this.t("th_do_use_text")}),n`
      <p class="intro">${this.t("themes_intro")}</p>
      ${this._choices(this.t("what_to_do"),e,t=>this._begin(t))}
      ${this._bar({left:this._state.history?n`<button ?disabled=${this._busy} @click=${this._undo}>
              <ha-icon icon="mdi:history"></ha-icon>${this.t("undo")}
            </button>`:h,canSave:!1})}
    `}_flow(){let e=l=>this._step=l,t=this._draft,s=this._mode==="edit"?{title:this.t("st_which_theme"),summary:t?.name,ready:!!t,content:this._themeTiles()}:{title:this.t("start_from"),summary:t?.name,ready:!!t,content:this._picker()};if(!t)return this._steps([s],0,e);let a={...P,...t.base},o=this._selected!==et?this._saved:null,r=[s,{title:this.t("st_colors"),content:this._colors(a)},{title:this.t("st_shape"),content:this._shape(a)},{title:this.t("st_name_save"),content:n`
          ${o&&!this._state.loaded.includes(o.name)?this._warning(this.t("warn_not_loaded")):h}
          <label class="row">
            <span>${this.t("theme_name")}</span>
            <input
              type="text"
              class="name"
              maxlength="50"
              .value=${t.name}
              @input=${l=>{this._draft={...this._draft,name:l.target.value}}}
            />
          </label>
          ${this._nameOk?h:n`<p class="hint bad">${this.t("err_bad_name")}</p>`}
          ${this._more(n`${this._allVars()}
            ${o?n`<button class="small danger" ?disabled=${this._busy} @click=${this._delete}>
                  <ha-icon icon="mdi:delete-outline"></ha-icon>${this.t("delete_theme")}
                </button>`:h}`)}
        `}];return this._steps(r,this._step,e,n`<button class="primary next" ?disabled=${this._busy||!this._nameOk} @click=${()=>this._save()}>
        ${this.t("save")}
      </button>`)}_themeTiles(){let{themes:e,loaded:t}=this._state;return n`<div class="chips">
      ${e.map(s=>n`<button
          class="chip ${s.id===this._selected?"active":""}"
          @click=${()=>this._select(s.id)}
        >
          <span class="swatch" style="background:${s.vars["primary-color"]}"></span>
          ${s.name}
          ${t.includes(s.name)?h:n`<em class="bad">${this.t("badge_not_loaded")}</em>`}
        </button>`)}
    </div>`}_colors(e){let t=Ee(e);return n`
      ${this._fixedNotice()}
      ${this._color(e,"background",this.t("c_background"))}
      ${this._color(e,"card",this.t("c_card"))}
      ${this._color(e,"text",this.t("c_text"))}
      ${this._color(e,"accent",this.t("c_accent"))}
      ${this._color(e,"sidebar",this.t("c_sidebar"))}
      <label class="row">
        <span>
          ${this.t("c_icons")}
          <small>${this.t("c_icons_hint")}</small>
        </span>
        <span class="inline">
          ${e.icon?n`<input
                type="color"
                aria-label=${this.t("c_icons")}
                .value=${e.icon}
                @input=${s=>this._set("icon",s.target.value)}
              />`:h}
          <input
            type="checkbox"
            class="switch"
            aria-label=${this.t("c_icons_own")}
            .checked=${!!e.icon}
            @change=${s=>this._set("icon",s.target.checked?t["state-icon-color"]:null)}
          />
        </span>
      </label>
      <label class="row">
        <span>${this.t("header_same")}</span>
        <span class="inline">
          ${e.header?n`<input
                type="color"
                aria-label=${this.t("c_header")}
                .value=${e.header}
                @input=${s=>this._set("header",s.target.value)}
              />`:h}
          <input
            type="checkbox"
            class="switch"
            .checked=${!e.header}
            @change=${s=>this._set("header",s.target.checked?null:e.background)}
          />
        </span>
      </label>
    `}_shape(e){return n`
      ${this._slider(e,"radius",this.t("corners"),0,28,"px")}
      <div class="row">
        <span>${this.t("shadow")}</span>
        ${this._segment(e,"shadow",[["none",this.t("shadow_none")],["soft",this.t("shadow_soft")],["strong",this.t("shadow_strong")]])}
      </div>
      ${this._slider(e,"card_opacity",this.t("card_opacity"),40,100,"%",!1,this.t("card_opacity_hint"))}
      <div class="row">
        <span>${this.t("popups")}</span>
        ${this._segment(e,"popup",[["solid",this.t("popup_solid")],["glass",this.t("popup_glass")]])}
      </div>
      ${e.popup==="glass"?this._slider(e,"popup_opacity",this.t("popup_opacity"),30,100,"%"):h}
    `}_allVars(){let e=this._draft,t=Ee({...P,...e.base}),s=ze(e);return n`
      <h3>${this.t("all_vars")}</h3>
      <p class="hint">${this.t("all_vars_hint")}</p>
      ${$t.map(a=>n`
          <details>
            <summary>
              ${a[this._lang]}
              <span class="dots">
                ${a.vars.filter(([,,,o])=>o==="color").slice(0,6).map(([o])=>n`<i style="background:${s[o]}"></i>`)}
              </span>
            </summary>
            ${a.vars.map(([o,r,l,c])=>this._varRow(o,this._lang==="nl"?r:l,c,t[o]))}
          </details>
        `)}
      <h3>${this.t("custom_vars")}</h3>
      <p class="hint">${this.t("custom_vars_hint")}</p>
      ${Object.entries(e.overrides).filter(([a])=>!Ce.has(a)).map(([a,o])=>this._varRow(a,`--${a}`,"text","",o,!0))}
      <div class="row add-var">
        <input
          type="text"
          placeholder=${this.t("var_name")}
          .value=${this._newVar.key}
          @input=${a=>this._newVar={...this._newVar,key:a.target.value}}
        />
        <input
          type="text"
          placeholder=${this.t("var_value")}
          .value=${this._newVar.value}
          @input=${a=>this._newVar={...this._newVar,value:a.target.value}}
        />
        <button
          class="small"
          ?disabled=${!/^[a-z0-9][a-z0-9_-]*$/.test(this._newVar.key.replace(/^--/,""))||!this._newVar.value}
          @click=${()=>{this._override(this._newVar.key.replace(/^--/,""),this._newVar.value),this._newVar={key:"",value:""}}}
        >
          ${this.t("add_var")}
        </button>
      </div>
    `}_previewCard(){return n`<aside class="card preview">
      <h2>${this.t("preview")}</h2>
      <ss-theme-preview .vars=${ze(this._draft)} .t=${this.t} ?popup=${this._popup}></ss-theme-preview>
      <label class="row">
        <span>${this.t("show_popup")}</span>
        <input type="checkbox" class="switch" .checked=${this._popup} @change=${e=>this._popup=e.target.checked} />
      </label>
      <label class="row">
        <span>
          ${this.t("whole_screen")}
          <small>${this.t("whole_screen_hint")}</small>
        </span>
        <input
          type="checkbox"
          class="switch"
          .checked=${this._wholeScreen}
          @change=${e=>this._wholeScreen=e.target.checked}
        />
      </label>
    </aside>`}_useList(){let{themes:e,loaded:t,default_theme:s}=this._state,a=(o,r)=>n`<div class="use-row" data-theme=${o}>
      <span class="swatch" style="background:${r??"var(--primary-color)"}"></span>
      <b>${o}</b>
      ${o===s?n`<em>${this.t("badge_default")}</em>`:h}
      <span class="grow"></span>
      <button class="small" ?disabled=${!t.includes(o)&&!this._state.others[o]} @click=${()=>this._useForMe(o)}>
        ${this.t("use_for_me")}
      </button>
      ${o===s?h:n`<button class="small" title=${this.t("set_default_hint")} @click=${()=>this._setDefault(o)}>
            ${this.t("set_default")}
          </button>`}
    </div>`;return n`
      <div class="card">
        <h2>${this.t("th_use_title")}</h2>
        <p class="hint">${this.t("th_use_hint")}</p>
        ${e.map(o=>a(o.name,o.vars["primary-color"]))}
        ${Object.keys(this._state.others).length?n`<details class="more">
              <summary>${this.t("th_other_themes")}</summary>
              ${Object.entries(this._state.others).map(([o,r])=>a(o,r["primary-color"]))}
            </details>`:h}
      </div>
    `}_useForMe(e=this._saved.name){document.querySelector("home-assistant")?.dispatchEvent(new CustomEvent("settheme",{detail:{theme:e}})),this._showToast(this.t("using_now",{name:e}))}_picker(){let e=Object.keys(this._state.others),t=this._current();return n`
      <div>
        <button class="current" @click=${()=>this._startFromCurrent()}>
          <ha-icon icon="mdi:palette-swatch"></ha-icon>
          <span>
            <b>${this.t("start_current")}</b>
            <small>${t.name}</small>
          </span>
        </button>
        <p class="hint">${this.t("or_preset")}</p>
        <div class="presets">
          ${Object.entries(Ws).map(([s,a])=>{let o=Ee(a.base);return n`<button
              class="preset"
              data-preset=${s}
              @click=${()=>this._startNew(a[this._lang],a.base)}
            >
              <span class="mini" style="background:${o["primary-background-color"]}">
                <i style="background:${o["sidebar-background-color"]}"></i>
                <b style="background:${o["card-background-color"]}"><s style="background:${o["primary-color"]}"></s></b>
              </span>
              ${a[this._lang]}
            </button>`})}
        </div>
        ${e.length?n`<label class="row">
              <span>${this.t("copy_existing")}</span>
              <select
                @change=${s=>{let a=s.target.value;if(!a)return;let{base:o,overrides:r}=Xe(this._state.others[a]);this._startNew(`${a} (${this.t("copy_suffix")})`,o,r)}}
              >
                <option value="">${this.t("pick_theme")}</option>
                ${e.map(s=>n`<option>${s}</option>`)}
              </select>
            </label>`:h}
      </div>
    `}_fixedNotice(){let e=Object.keys(this._draft.overrides).filter(t=>Ce.has(t));return e.length?n`<div class="fixed">
      <span>${this.t("fixed_colors",{count:e.length})}</span>
      <button
        class="small"
        @click=${()=>{let t=Object.fromEntries(Object.entries(this._draft.overrides).filter(([s])=>!Ce.has(s)));this._draft={...this._draft,overrides:t}}}
      >
        ${this.t("follow_quick")}
      </button>
    </div>`:h}_varRow(e,t,s,a,o=this._draft.overrides[e],r=!1){let l=o??"",c=o??a;return n`
      <div class="var ${o!==void 0?"own":""}">
        <span class="label">${t}<code>--${e}</code></span>
        <span class="inline">
          ${s==="color"?n`<input
                type="color"
                aria-label=${t}
                .value=${Pa.test(c)?c:"#000000"}
                @input=${d=>this._override(e,d.target.value)}
              />`:h}
          <input
            type="text"
            aria-label=${t}
            .value=${l}
            placeholder=${a}
            @change=${d=>this._override(e,d.target.value.trim())}
          />
          ${o!==void 0?n`<button
                class="icon"
                title=${r?this.t("remove"):this.t("reset")}
                @click=${()=>this._override(e,null)}
              >
                <ha-icon icon=${r?"mdi:delete-outline":"mdi:restore"}></ha-icon>
              </button>`:n`<span class="icon-space"></span>`}
        </span>
      </div>
    `}};g(Te,"properties",{...b.properties,_state:{state:!0},_selected:{state:!0},_draft:{state:!0},_picking:{state:!0},_wholeScreen:{state:!0},_popup:{state:!0},_newVar:{state:!0},_mode:{state:!0},_step:{state:!0}}),g(Te,"styles",[b.styles,v`
      .use-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 10px 0;
        border-top: 1px solid var(--divider-color);
      }

      .use-row .grow {
        flex: 1;
      }

      .use-row em {
        font-style: normal;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .danger {
        color: var(--error-color);
        margin-top: 12px;
      }

      h3 {
        margin: 12px 0 4px;
        font-size: 15px;
        font-weight: 500;
      }

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }

      .chip.active {
        border-color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color));
      }

      .chip em {
        font-style: normal;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .chip em.bad {
        color: var(--error-color);
      }

      .chip.add {
        color: var(--primary-color);
      }

      .swatch {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
      }

      .presets {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 10px;
        margin-bottom: 8px;
      }

      .preset {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        text-align: start;
      }

      .preset:hover {
        border-color: var(--primary-color);
      }

      .mini {
        display: flex;
        height: 64px;
        border-radius: 8px;
        overflow: hidden;
        gap: 6px;
      }

      .mini i {
        width: 18px;
      }

      .mini b {
        flex: 1;
        margin: 8px 8px 8px 0;
        border-radius: 6px;
        padding: 6px;
      }

      .mini s {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      select {
        font: inherit;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .name {
        flex: 1;
        max-width: 280px;
      }

      details {
        border-top: 1px solid var(--divider-color);
      }

      summary {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 0;
        cursor: pointer;
        font-weight: 500;
      }

      .dots {
        display: inline-flex;
        gap: 3px;
        margin-inline-start: auto;
      }

      .dots i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
      }

      .var {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 6px 0 6px 8px;
        border-inline-start: 3px solid transparent;
      }

      .var.own {
        border-inline-start-color: var(--primary-color);
      }

      .var .label {
        min-width: 0;
      }

      .var code {
        display: block;
        font-size: 11px;
        color: var(--secondary-text-color);
        overflow-wrap: anywhere;
      }

      .var input[type="text"] {
        width: 190px;
      }

      .icon {
        display: inline-flex;
        padding: 6px;
        border-radius: 50%;
      }

      .icon-space {
        width: 30px;
      }

      .add-var input {
        flex: 1;
      }

      .small {
        padding: 6px 12px;
        border-radius: 999px;
        color: var(--primary-color);
        font-weight: 500;
      }

      .current {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px;
        margin-bottom: 12px;
        border-radius: 12px;
        border: 1px solid var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
        text-align: start;
      }

      .current small {
        margin: 0;
      }

      .fixed {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 10px 12px;
        margin-bottom: 8px;
        border-radius: 10px;
        background: var(--secondary-background-color);
        font-size: 13px;
      }

      .fixed span {
        flex: 1;
        min-width: 200px;
      }

      .note {
        color: var(--secondary-text-color);
        padding: 0 8px;
      }

      @media (max-width: 600px) {
        .var {
          flex-direction: column;
          align-items: stretch;
        }

        .var input[type="text"] {
          flex: 1;
          width: auto;
        }
      }
    `]);customElements.get("ss-themes-tab")||customElements.define("ss-themes-tab",Te);var St="0.9.0";var Da=["themes","sidebar","rooms","climate","people","check"],je=class extends w{constructor(){super(),this._tab="themes",this._leaving=null}get t(){return Fe(this.hass)}willUpdate(e){e.has("hass")&&this.hass&&!this._loading&&(this._loading=this._load())}async _load(){try{this._data=await this.hass.callWS({type:"style_studio/get"})}catch(e){this._error=e.message??String(e)}}_pickTab(e){if(e===this._tab)return;this.renderRoot.querySelector(".tab-content > *")?.dirty?this._leaving=e:this._tab=e}render(){return n`
      <div class="toolbar">
        ${this.narrow?n`<button class="icon" @click=${this._toggleMenu} aria-label="Menu">
              <ha-icon icon="mdi:menu"></ha-icon>
            </button>`:h}
        <h1>${this.t("title")}</h1>
      </div>
      <main>
        ${this._error?n`<div class="warning">${this.t("error",{message:this._error})}</div>`:h}
        ${this._data?this._content():h}
      </main>
    `}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_content(){return n`
      ${this._staleVersion()?n`<div class="warning">
            <ha-icon icon="mdi:alert-outline"></ha-icon>
            ${this.t("warn_old_panel",{old:this._staleVersion(),new:this._data.version})}
          </div>`:h}
      <nav class="tabs">
        ${Da.map(e=>n`<button
            class=${e===this._tab?"active":""}
            @click=${()=>this._pickTab(e)}
          >
            ${this.t(`tab_${e}`)}
          </button>`)}
      </nav>
      ${this._leaving?n`<div class="leaving">
            <span>${this.t("discard_confirm")}</span>
            <button @click=${()=>this._leaving=null}>${this.t("no")}</button>
            <button
              class="primary"
              @click=${()=>{this._tab=this._leaving,this._leaving=null}}
            >
              ${this.t("yes")}
            </button>
          </div>`:h}
      <div class="tab-content">${this._tabContent()}</div>
    `}_staleVersion(){let e=window.__styleStudio?.version;return St!==this._data.version?St:e&&e!==this._data.version?e:null}_tabContent(){switch(this._tab){case"themes":return n`<ss-themes-tab .hass=${this.hass} .narrow=${this.narrow}></ss-themes-tab>`;case"check":return n`<ss-check-tab .hass=${this.hass} .narrow=${this.narrow}></ss-check-tab>`;case"rooms":return n`<ss-rooms-tab .hass=${this.hass} .narrow=${this.narrow}></ss-rooms-tab>`;case"climate":return n`<ss-climate-tab .hass=${this.hass} .narrow=${this.narrow}></ss-climate-tab>`;case"people":return n`<ss-people-tab .hass=${this.hass} .narrow=${this.narrow}></ss-people-tab>`;case"sidebar":return n`<ss-sidebar-tab
          .hass=${this.hass}
          .narrow=${this.narrow}
          .glass=${this._data.glass_sidebar}
          @reload=${()=>this._load()}
        ></ss-sidebar-tab>`;default:return n`<div class="card coming">${this.t("coming")}</div>`}}};g(je,"properties",{hass:{attribute:!1},narrow:{type:Boolean},panel:{attribute:!1},_data:{state:!0},_tab:{state:!0},_leaving:{state:!0}}),g(je,"styles",v`
    /* Home Assistant gives a panel a fixed-height box and cuts off what
       sticks out, so the panel scrolls by itself. That also keeps the Save
       bar at the bottom of the screen. */
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      box-sizing: border-box;
      background: var(--primary-background-color);
      color: var(--primary-text-color);
      font-family: var(--ha-font-family-body, Roboto, sans-serif);
      --ss-radius: var(--ha-card-border-radius, 12px);
    }

    .toolbar {
      display: flex;
      align-items: center;
      gap: 8px;
      height: var(--header-height, 56px);
      padding: 0 16px;
      flex-shrink: 0;
    }

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }

    main {
      flex: 1;
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 16px;
      box-sizing: border-box;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: 0;
      cursor: pointer;
    }

    button.icon {
      display: inline-flex;
      padding: 8px;
      border-radius: 50%;
    }

    .primary {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 999px;
      padding: 8px 18px;
      font-weight: 500;
    }

    .warning,
    .leaving {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      padding: 12px 14px;
      margin-bottom: 12px;
      border-radius: var(--ss-radius);
      background: color-mix(in srgb, var(--warning-color, #ffa600) 16%, var(--card-background-color));
      line-height: 1.4;
    }

    .warning ha-icon {
      color: var(--warning-color, #ffa600);
      flex-shrink: 0;
    }

    .leaving span {
      flex: 1;
    }

    .leaving button:not(.primary) {
      padding: 8px 12px;
    }

    .tabs {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }

    .tabs button {
      padding: 10px 14px;
      white-space: nowrap;
      border-bottom: 2px solid transparent;
      color: var(--secondary-text-color);
    }

    .tabs button.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      font-weight: 500;
    }

    .card {
      background: var(--ha-card-background, var(--card-background-color));
      border-radius: var(--ss-radius);
      border: 1px solid var(--ha-card-border-color, var(--divider-color));
      padding: 16px;
      margin-bottom: 16px;
    }

    .coming {
      color: var(--secondary-text-color);
    }
  `);customElements.get("style-studio-panel")||customElements.define("style-studio-panel",je);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
