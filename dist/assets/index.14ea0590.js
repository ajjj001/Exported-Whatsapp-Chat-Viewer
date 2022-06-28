const ir=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}};ir();function X(){}function tr(t){return t()}function R(){return Object.create(null)}function L(t){t.forEach(tr)}function cr(t){return typeof t=="function"}function nr(t,r){return t!=t?r==r:t!==r||t&&typeof t=="object"||typeof t=="function"}function gr(t){return Object.keys(t).length===0}function s(t,r){t.appendChild(r)}function _(t,r,e){t.insertBefore(r,e||null)}function z(t){t.parentNode.removeChild(t)}function er(t,r){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(r)}function h(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function k(){return B(" ")}function or(t,r,e,a){return t.addEventListener(r,e,a),()=>t.removeEventListener(r,e,a)}function w(t,r,e){e==null?t.removeAttribute(r):t.getAttribute(r)!==e&&t.setAttribute(r,e)}function dr(t){return Array.from(t.childNodes)}function N(t,r){r=""+r,t.wholeText!==r&&(t.data=r)}function q(t,r){for(let e=0;e<t.options.length;e+=1){const a=t.options[e];if(a.__value===r){a.selected=!0;return}}t.selectedIndex=-1}function lr(t){const r=t.querySelector(":checked")||t.options[0];return r&&r.__value}let U;function E(t){U=t}const Y=[],H=[],S=[],T=[],wr=Promise.resolve();let I=!1;function pr(){I||(I=!0,wr.then(ar))}function M(t){S.push(t)}const $=new Set;let A=0;function ar(){const t=U;do{for(;A<Y.length;){const r=Y[A];A++,E(r),sr(r.$$)}for(E(null),Y.length=0,A=0;H.length;)H.pop()();for(let r=0;r<S.length;r+=1){const e=S[r];$.has(e)||($.add(e),e())}S.length=0}while(Y.length);for(;T.length;)T.pop()();I=!1,$.clear(),E(t)}function sr(t){if(t.fragment!==null){t.update(),L(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(M)}}const br=new Set;function yr(t,r){t&&t.i&&(br.delete(t),t.i(r))}function mr(t,r,e,a){const{fragment:o,on_mount:c,on_destroy:g,after_update:d}=t.$$;o&&o.m(r,e),a||M(()=>{const l=c.map(tr).filter(cr);g?g.push(...l):L(l),t.$$.on_mount=[]}),d.forEach(M)}function hr(t,r){const e=t.$$;e.fragment!==null&&(L(e.on_destroy),e.fragment&&e.fragment.d(r),e.on_destroy=e.fragment=null,e.ctx=[])}function ur(t,r){t.$$.dirty[0]===-1&&(Y.push(t),pr(),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function vr(t,r,e,a,o,c,g,d=[-1]){const l=U;E(t);const i=t.$$={fragment:null,ctx:null,props:c,update:X,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(l?l.$$.context:[])),callbacks:R(),dirty:d,skip_bound:!1,root:r.target||l.$$.root};g&&g(i.root);let p=!1;if(i.ctx=e?e(t,r.props||{},(n,y,...x)=>{const F=x.length?x[0]:y;return i.ctx&&o(i.ctx[n],i.ctx[n]=F)&&(!i.skip_bound&&i.bound[n]&&i.bound[n](F),p&&ur(t,n)),y}):[],i.update(),p=!0,L(i.before_update),i.fragment=a?a(i.ctx):!1,r.target){if(r.hydrate){const n=dr(r.target);i.fragment&&i.fragment.l(n),n.forEach(z)}else i.fragment&&i.fragment.c();r.intro&&yr(t.$$.fragment),mr(t,r.target,r.anchor,r.customElement),ar()}E(l)}class fr{$destroy(){hr(this,1),this.$destroy=X}$on(r,e){const a=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return a.push(e),()=>{const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}$set(r){this.$$set&&!gr(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}const xr=t=>{let r=[];const e=t.split(/\r\n|\n/),a=/\[(\d{1,2}\/\d{1,2}\/\d{4}.*?)\]|(\d{2}\/\d{2}\/\d{4}.*?)\s\-/,o=/-\s(.*?):|]\s(.*?):/;return e.forEach(c=>{const g=c.match(a),d=c.match(o);if(g&&!d){r.push({time:null,sender:null,message:c});return}if(g&&d){const l=c.substring(c.indexOf(d[0])+d[0].length).trim();r.push({time:g[1]||g[2],sender:d[1]||d[2],message:l});return}r[r.length-1].message+=`
`+c}),r};function Z(t,r,e){const a=t.slice();a[8]=r[e];const o=a[8].sender===a[2];return a[9]=o,a}function K(t,r,e){const a=t.slice();return a[12]=r[e],a}function V(t){let r,e,a,o,c,g,d=t[4],l=[];for(let i=0;i<d.length;i+=1)l[i]=W(K(t,d,i));return{c(){r=h("div"),e=h("label"),e.textContent="Select a Sender",a=k(),o=h("select");for(let i=0;i<l.length;i+=1)l[i].c();w(e,"for","senders"),w(e,"class","block mb-2 text-sm font-medium "),w(o,"id","senders"),w(o,"class","bg-gray-600 rounded-md w-full border-none"),t[2]===void 0&&M(()=>t[6].call(o))},m(i,p){_(i,r,p),s(r,e),s(r,a),s(r,o);for(let n=0;n<l.length;n+=1)l[n].m(o,null);q(o,t[2]),c||(g=or(o,"change",t[6]),c=!0)},p(i,p){if(p&20){d=i[4];let n;for(n=0;n<d.length;n+=1){const y=K(i,d,n);l[n]?l[n].p(y,p):(l[n]=W(y),l[n].c(),l[n].m(o,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=d.length}p&20&&q(o,i[2])},d(i){i&&z(r),er(l,i),c=!1,g()}}}function W(t){let r,e=t[12]+"",a,o,c;return{c(){r=h("option"),a=B(e),r.__value=o=t[12],r.value=r.__value,r.selected=c=t[2]===t[12]},m(g,d){_(g,r,d),s(r,a)},p(g,d){d&16&&e!==(e=g[12]+"")&&N(a,e),d&16&&o!==(o=g[12])&&(r.__value=o,r.value=r.__value),d&20&&c!==(c=g[2]===g[12])&&(r.selected=c)},d(g){g&&z(r)}}}function G(t){let r,e,a;return{c(){r=D("svg"),e=D("path"),a=D("path"),w(e,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),w(e,"fill","currentColor"),w(a,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),w(a,"fill","currentFill"),w(r,"role","status"),w(r,"class","w-8 h-8 mt-4 text-gray-200 animate-spin dark:text-gray-600 fill-teal-600 "),w(r,"viewBox","0 0 100 101"),w(r,"fill","none"),w(r,"xmlns","http://www.w3.org/2000/svg")},m(o,c){_(o,r,c),s(r,e),s(r,a)},d(o){o&&z(r)}}}function J(t){let r,e=t[8].sender+"",a;return{c(){r=h("p"),a=B(e),w(r,"class","font-medium text-teal-400 ")},m(o,c){_(o,r,c),s(r,a)},p(o,c){c&2&&e!==(e=o[8].sender+"")&&N(a,e)},d(o){o&&z(r)}}}function Q(t){let r,e=t[8].time+"",a;return{c(){r=h("p"),a=B(e),w(r,"class","text-xs self-end opacity-70")},m(o,c){_(o,r,c),s(r,a)},p(o,c){c&2&&e!==(e=o[8].time+"")&&N(a,e)},d(o){o&&z(r)}}}function rr(t){let r,e,a,o=t[8].message+"",c,g,d,l,i=t[8].sender&&!t[9]&&J(t),p=t[8].time&&Q(t);return{c(){r=h("div"),i&&i.c(),e=k(),a=h("p"),c=B(o),g=k(),p&&p.c(),d=k(),w(r,"class",l=`px-4 py-2 rounded-md flex flex-col gap-1 max-w-[70%] break-all whitespace-pre-line
          ${t[9]?"bg-teal-600 self-end":"bg-gray-800"}
          ${!t[8].sender&&"bg-gray-800 text-yellow-200 self-center opacity-70"}`)},m(n,y){_(n,r,y),i&&i.m(r,null),s(r,e),s(r,a),s(a,c),s(r,g),p&&p.m(r,null),s(r,d)},p(n,y){n[8].sender&&!n[9]?i?i.p(n,y):(i=J(n),i.c(),i.m(r,e)):i&&(i.d(1),i=null),y&2&&o!==(o=n[8].message+"")&&N(c,o),n[8].time?p?p.p(n,y):(p=Q(n),p.c(),p.m(r,d)):p&&(p.d(1),p=null),y&22&&l!==(l=`px-4 py-2 rounded-md flex flex-col gap-1 max-w-[70%] break-all whitespace-pre-line
          ${n[9]?"bg-teal-600 self-end":"bg-gray-800"}
          ${!n[8].sender&&"bg-gray-800 text-yellow-200 self-center opacity-70"}`)&&w(r,"class",l)},d(n){n&&z(r),i&&i.d(),p&&p.d()}}}function kr(t){let r,e,a,o,c,g,d,l,i,p,n,y,x,F,O,u=!t[3]&&t[4].length>0&&V(t),f=t[3]&&G(),C=t[1],v=[];for(let b=0;b<C.length;b+=1)v[b]=rr(Z(t,C,b));return{c(){r=h("main"),e=h("div"),a=h("div"),o=h("a"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 fill-white "><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>',c=k(),g=h("div"),d=h("label"),d.textContent="Upload Exported Text File",l=k(),i=h("input"),p=k(),u&&u.c(),n=k(),f&&f.c(),y=k(),x=h("div");for(let b=0;b<v.length;b+=1)v[b].c();w(o,"href",`
        https://github.com/ajjj001/Exported-Whatsapp-Chat-Viewer
      `),w(o,"class","flex justify-center "),w(o,"target","_blank"),w(d,"class","block mb-2 text-sm font-medium "),w(d,"for","file_input"),w(i,"class","w-full text-sm bg-gray-600 rounded-md cursor-pointer "),w(i,"type","file"),w(i,"name","file"),w(i,"accept","text/plain"),w(g,"class","flex-1"),w(a,"class","flex flex-col md:flex-row gap-4 mb-4"),w(x,"class","flex flex-col gap-4"),w(e,"class","container"),w(r,"class","bg-gray-900 min-h-screen text-white flex flex-col items-center p-4 svelte-85txjh")},m(b,j){_(b,r,j),s(r,e),s(e,a),s(a,o),s(a,c),s(a,g),s(g,d),s(g,l),s(g,i),s(a,p),u&&u.m(a,null),s(e,n),f&&f.m(e,null),s(e,y),s(e,x);for(let m=0;m<v.length;m+=1)v[m].m(x,null);F||(O=or(i,"change",t[5]),F=!0)},p(b,[j]){if(!b[3]&&b[4].length>0?u?u.p(b,j):(u=V(b),u.c(),u.m(a,null)):u&&(u.d(1),u=null),b[3]?f||(f=G(),f.c(),f.m(e,y)):f&&(f.d(1),f=null),j&6){C=b[1];let m;for(m=0;m<C.length;m+=1){const P=Z(b,C,m);v[m]?v[m].p(P,j):(v[m]=rr(P),v[m].c(),v[m].m(x,null))}for(;m<v.length;m+=1)v[m].d(1);v.length=C.length}},i:X,o:X,d(b){b&&z(r),u&&u.d(),f&&f.d(),er(v,b),F=!1,O()}}}function zr(t,r,e){let a,o=[],c,g=!1,d=[];const l=async()=>{e(1,o=[]),e(3,g=!0);const y=await a[0].text();e(1,o=xr(y)),e(4,d=[...new Set(o.map(x=>x.sender))].filter(x=>x)),e(2,c=d[0]),e(3,g=!1)};function i(){a=this.files,e(0,a)}function p(){c=lr(this),e(2,c),e(4,d)}return t.$$.update=()=>{t.$$.dirty&1&&a!=null&&a[0]&&l()},[a,o,c,g,d,i,p]}class _r extends fr{constructor(r){super(),vr(this,r,zr,kr,nr,{})}}new _r({target:document.getElementById("app")});