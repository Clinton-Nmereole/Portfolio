document.addEventListener("astro:page-load",()=>{const r=document.querySelector("[data-tech-wrapper]");let n=document.querySelector(".tech-card")?.cloneNode(!0);r.append(n);const t=document.querySelector("[data-tech-modal]"),e=document.querySelector("[data-tech-stop]");r.addEventListener("click",()=>{t.classList.toggle("hidden"),t.classList.add("flex")}),t.addEventListener("click",()=>{t.classList.remove("flex"),t.classList.toggle("hidden")}),e.addEventListener("click",l=>l.stopPropagation()),addEventListener("keydown",l=>{l.key==="Escape"&&(t.classList.remove("flex"),t.classList.toggle("hidden"))});const s=document.querySelector("[project-title]");Array.from(s.children).forEach((l,a)=>{l.addEventListener("mouseover",()=>{var i=document.querySelector('[project-title] img[id="'+a+'"]');i.classList.toggle("hidden"),i.classList.add("visible")}),l.addEventListener("mouseout",()=>{var i=document.querySelector('[project-title] img[id="'+a+'"]');i.classList.toggle("visible"),i.classList.add("hidden")})})});const p=document.getElementById("button");document.getElementById("form").addEventListener("submit",function(r){r.preventDefault(),p.textContent="Sending...";const n="default_service",t="template_q3qppdc";emailjs.sendForm(n,t,this).then(()=>{p.textContent="Send Email",alert("Sent!")},e=>{p.textContent="Send Email",alert(JSON.stringify(e))})});const L=r=>history.state&&history.replaceState(r,""),v=!!document.startViewTransition,m=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),b=r=>document.dispatchEvent(new Event(r)),w=()=>b("astro:page-load"),u="data-astro-transition-persist",k=new DOMParser;let h=0;history.state?(h=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):m()&&history.replaceState({index:h,scrollX,scrollY,intraPage:!1},"");const x=(r,n)=>{let t=!1,e=!1;return(...s)=>{if(t){e=!0;return}r(...s),t=!0,setTimeout(()=>{e&&(e=!1,r(...s)),t=!1},n)}};async function T(r){try{const n=await fetch(r),t=n.headers.get("content-type")?.replace(/;.*$/,"");return t!=="text/html"&&t!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:t}}catch{return null}}function S(){const r=document.querySelector('[name="astro-view-transitions-fallback"]');return r?r.getAttribute("content"):"animate"}function A(){for(const r of document.scripts)r.dataset.astroExec=""}function q(){let r=Promise.resolve();for(const n of Array.from(document.scripts)){if(n.dataset.astroExec==="")continue;const t=document.createElement("script");t.innerHTML=n.innerHTML;for(const e of n.attributes){if(e.name==="src"){const s=new Promise(d=>{t.onload=d});r=r.then(()=>s)}t.setAttribute(e.name,e.value)}t.dataset.astroExec="",n.replaceWith(t)}return r}function P(r){const n=r.effect;return!n||!(n instanceof KeyframeEffect)||!n.target?!1:window.getComputedStyle(n.target,n.pseudoElement).animationIterationCount==="infinite"}const R=r=>{r.href!==location.href&&history.pushState({index:++h,scrollX:0,scrollY:0},"",r.href),scrollTo({left:0,top:0,behavior:"instant"}),r.hash&&(location.href=r.href)};async function g(r,n,t,e){const s=a=>{const i=a.getAttribute(u),f=i&&r.head.querySelector(`[${u}="${i}"]`);if(f)return f;if(a.matches("link[rel=stylesheet]")){const o=a.getAttribute("href");return r.head.querySelector(`link[rel=stylesheet][href="${o}"]`)}return null},d=()=>{const a=document.documentElement,i=[...a.attributes].filter(({name:o})=>(a.removeAttribute(o),o.startsWith("data-astro-")));[...r.documentElement.attributes,...i].forEach(({name:o,value:c})=>a.setAttribute(o,c));for(const o of document.scripts)for(const c of r.scripts)if(!o.src&&o.textContent===c.textContent||o.src&&o.type===c.type&&o.src===c.src){c.dataset.astroExec="";break}for(const o of Array.from(document.head.children)){const c=s(o);c?c.remove():o.remove()}document.head.append(...r.head.children);const f=document.body;document.body.replaceWith(r.body);for(const o of f.querySelectorAll(`[${u}]`)){const c=o.getAttribute(u),y=document.querySelector(`[${u}="${c}"]`);y&&y.replaceWith(o)}t?scrollTo(t.scrollX,t.scrollY):R(n),b("astro:after-swap")},l=[];for(const a of r.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${u}="${a.getAttribute(u)}"], link[rel=stylesheet]`)){const i=document.createElement("link");i.setAttribute("rel","preload"),i.setAttribute("as","style"),i.setAttribute("href",a.getAttribute("href")),l.push(new Promise(f=>{["load","error"].forEach(o=>i.addEventListener(o,f)),document.head.append(i)}))}if(l.length&&await Promise.all(l),e==="animate"){const a=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const i=document.getAnimations().filter(c=>!a.includes(c)&&!P(c)),f=Promise.all(i.map(c=>c.finished)),o=()=>{d(),document.documentElement.dataset.astroTransitionFallback="new"};await f,o()}else d()}async function E(r,n,t){let e;const s=n.href,d=await T(s);if(d===null){location.href=s;return}d.redirected&&(n=new URL(d.redirected));const l=k.parseFromString(d.html,d.mediaType);if(l.querySelectorAll("noscript").forEach(a=>a.remove()),!l.querySelector('[name="astro-view-transitions-enabled"]')){location.href=s;return}t||history.replaceState({...history.state,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=r,v?e=document.startViewTransition(()=>g(l,n,t)).finished:e=g(l,n,t,S());try{await e}finally{await q(),A(),w()}}function $(r){if(document.querySelector(`link[rel=prefetch][href="${r}"]`))return;if(navigator.connection){let t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType||""))return}let n=document.createElement("link");n.setAttribute("rel","prefetch"),n.setAttribute("href",r),document.head.append(n)}if(v||S()!=="none"){let r=function(t){if(!m()){location.href=t;return}const e=new URL(t,location.href);location.origin===e.origin&&location.pathname===e.pathname&&location.search===e.search?(location.href!==e.href&&(history.replaceState({...history.state,intraPage:!0},""),history.pushState({index:++h,scrollX:0,scrollY:0},"",e.href)),e.hash?location.href=e.href:scrollTo({left:0,top:0,behavior:"instant"})):E("forward",e)};document.addEventListener("click",t=>{let e=t.target;e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!(!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||e.hasAttribute("download")||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented)&&(t.preventDefault(),r(e.href))}),addEventListener("popstate",t=>{if(!m()&&t.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const e=history.state;if(e.intraPage)scrollTo(e.scrollX,e.scrollY);else{const s=e.index,d=s>h?"forward":"back";h=s,E(d,new URL(location.href),e)}}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let s=e.target;s.origin===location.origin&&s.pathname!==location.pathname&&m()&&$(s.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",w);const n=()=>{L({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",x(n,300)),A()}