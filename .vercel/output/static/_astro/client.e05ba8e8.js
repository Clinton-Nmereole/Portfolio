const c={context:void 0,registry:void 0};function R(e){c.context=e}function j(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}let k=U;const E=1,T=2,$={owned:null,cleanups:null,context:null,owner:null};var d=null;let L=null,g=null,h=null,x=null,C=0;function K(e,n){const t=g,i=d,l=e.length===0,o=n===void 0?i:n,f=l?$:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=l?e:()=>e(()=>b(()=>I(f)));d=f,g=null;try{return N(s,!0)}finally{g=t,d=i}}function _(e,n,t){const i=J(e,n,!1,E);B(i)}function b(e){if(g===null)return e();const n=g;g=null;try{return e()}finally{g=n}}function q(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&N(()=>{for(let l=0;l<e.observers.length;l+=1){const o=e.observers[l],f=L&&L.running;f&&L.disposed.has(o),(f?!o.tState:!o.state)&&(o.pure?h.push(o):x.push(o),o.observers&&P(o)),f||(o.state=E)}if(h.length>1e6)throw h=[],new Error},!1)),n}function B(e){if(!e.fn)return;I(e);const n=d,t=g,i=C;g=d=e,G(e,e.value,i),g=t,d=n}function G(e,n,t){let i;try{i=e.fn(n)}catch(l){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=t+1,W(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?q(e,i):e.value=i,e.updatedAt=t)}function J(e,n,t,i=E,l){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==$&&(d.owned?d.owned.push(o):d.owned=[o]),o}function O(e){if(e.state===0)return;if(e.state===T)return F(e);if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===E)B(e);else if(e.state===T){const i=h;h=null,N(()=>F(e,n[0]),!1),h=i}}function N(e,n){if(h)return e();let t=!1;n||(h=[]),x?t=!0:x=[],C++;try{const i=e();return Q(t),i}catch(i){t||(x=null),h=null,W(i)}}function Q(e){if(h&&(U(h),h=null),e)return;const n=x;x=null,n.length&&N(()=>k(n),!1)}function U(e){for(let n=0;n<e.length;n++)O(e[n])}function F(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const l=i.state;l===E?i!==n&&(!i.updatedAt||i.updatedAt<C)&&O(i):l===T&&F(i,n)}}}function P(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=T,t.pure?h.push(t):x.push(t),t.observers&&P(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const o=l.pop(),f=t.observerSlots.pop();i<l.length&&(o.sourceSlots[f]=i,l[i]=o,t.observerSlots[i]=f)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function V(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function W(e,n=d){throw V(e)}let Y=!1;function X(){Y=!0}function Z(e,n){if(Y&&c.context){const t=c.context;R(j());const i=b(()=>e(n||{}));return R(t),i}return b(()=>e(n||{}))}function z(e,n,t){let i=t.length,l=n.length,o=i,f=0,s=0,r=n[l-1].nextSibling,u=null;for(;f<l||s<o;){if(n[f]===t[s]){f++,s++;continue}for(;n[l-1]===t[o-1];)l--,o--;if(l===f){const a=o<i?s?t[s-1].nextSibling:t[o-s]:r;for(;s<o;)e.insertBefore(t[s++],a)}else if(o===s)for(;f<l;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[s]===n[l-1]){const a=n[--l].nextSibling;e.insertBefore(t[s++],n[f++].nextSibling),e.insertBefore(t[--o],a),n[l]=t[o]}else{if(!u){u=new Map;let w=s;for(;w<o;)u.set(t[w],w++)}const a=u.get(n[f]);if(a!=null)if(s<a&&a<o){let w=f,p=1,y;for(;++w<l&&w<o&&!((y=u.get(n[w]))==null||y!==a+p);)p++;if(p>a-s){const M=n[f];for(;s<a;)e.insertBefore(t[s++],M)}else e.replaceChild(t[s++],n[f++])}else f++;else n[f++].remove()}}}function D(e,n,t,i={}){let l;return K(o=>{l=o,n===document?e():ee(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{l(),n.textContent=""}}function ee(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return S(e,n,i,t);_(l=>S(e,n(),l,t),i)}function te(e,n,t={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=globalThis._$HY.load,c.gather=l=>v(n,l),c.registry=new Map,c.context={id:t.renderId||"",count:0},v(n,t.renderId);const i=D(e,n,[...n.childNodes],t);return c.context=null,i}function S(e,n,t,i,l){if(c.context){!t&&(t=[...e.childNodes]);let s=[];for(let r=0;r<t.length;r++){const u=t[r];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():s.push(u)}t=s}for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,f=i!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(c.context)return t;if(o==="number"&&(n=n.toString()),f){let s=t[0];s&&s.nodeType===3?s.data=n:s=document.createTextNode(n),t=A(e,t,i,s)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(c.context)return t;t=A(e,t,i)}else{if(o==="function")return _(()=>{let s=n();for(;typeof s=="function";)s=s();t=S(e,s,t,i)}),()=>t;if(Array.isArray(n)){const s=[],r=t&&Array.isArray(t);if(H(s,n,t,l))return _(()=>t=S(e,s,t,i,!0)),()=>t;if(c.context){if(!s.length)return t;for(let u=0;u<s.length;u++)if(s[u].parentNode)return t=s}if(s.length===0){if(t=A(e,t,i),f)return t}else r?t.length===0?m(e,s,i):z(e,t,s):(t&&A(e),m(e,s));t=s}else if(n.nodeType){if(c.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=A(e,t,i,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function H(e,n,t,i){let l=!1;for(let o=0,f=n.length;o<f;o++){let s=n[o],r=t&&t[o],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))l=H(e,s,r)||l;else if(u==="function")if(i){for(;typeof s=="function";)s=s();l=H(e,Array.isArray(s)?s:[s],Array.isArray(r)?r:[r])||l}else e.push(s),l=!0;else{const a=String(s);r&&r.nodeType===3&&r.data===a?e.push(r):e.push(document.createTextNode(a))}}return l}function m(e,n,t=null){for(let i=0,l=n.length;i<l;i++)e.insertBefore(n[i],t)}function A(e,n,t,i){if(t===void 0)return e.textContent="";const l=i||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const s=n[f];if(l!==s){const r=s.parentNode===e;!o&&!f?r?e.replaceChild(l,s):e.insertBefore(l,t):r&&s.remove()}else o=!0}}else e.insertBefore(l,t);return[l]}function v(e,n){const t=e.querySelectorAll("*[data-hk]");for(let i=0;i<t.length;i++){const l=t[i],o=l.getAttribute("data-hk");(!n||o.startsWith(n))&&!c.registry.has(o)&&c.registry.set(o,l)}}const ne=(...e)=>(X(),te(...e));var se=e=>(n,t,i,{client:l})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!e.hasAttribute("ssr"))return;const o=l==="only"?D:ne;let f,s={};if(Object.keys(i).length>0){if(l!=="only"){const p=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,y=>y===e?NodeFilter.FILTER_SKIP:y.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:y.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;f=p.nextNode();)s[f.getAttribute("name")||"default"]=f}for(const[p,y]of Object.entries(i))s[p]||(s[p]=document.createElement("astro-slot"),p!=="default"&&s[p].setAttribute("name",p),s[p].innerHTML=y)}const{default:r,...u}=s,a=e.dataset.solidRenderId,w=o(()=>Z(n,{...t,...u,children:r}),e,{renderId:a});e.addEventListener("astro:unmount",()=>w(),{once:!0})};export{se as default};