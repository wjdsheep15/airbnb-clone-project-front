__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"FadeEffect",{enumerable:!0,get:function(){return t.FadeEffect}}),Object.defineProperty(e,"RelativeMoveEffect",{enumerable:!0,get:function(){return f.RelativeMoveEffect}}),Object.defineProperty(e,"ScaleEffect",{enumerable:!0,get:function(){return n.ScaleEffect}});var t=r(d[0]),f=r(d[1]),n=r(d[2])}),"06dba3",["e9cc00","c78ea4","22d731"]);
__d((function(g,r,i,a,m,e,d){'use strict';m.exports=r(d[0])}),"09a5e5",["b1e39b"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionCoordinator=void 0;var s=n(r(d[2]));function o(){const t=r(d[3]);return o=function(){return t},t}var l=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),v=r(d[8]),w=r(d[9]),f=r(d[10]),y=r(d[11]),T=t(r(d[12])),k=r(d[13]),S=r(d[14]),b=r(d[15]),h=r(d[16]),A=r(d[17]);function V(t){const n=t||document.body;let s=[];'true'===t?.getAttribute('view-transition-element')&&s.push(t),s=[...s,...Array.from(n.querySelectorAll('[view-transition-element="true"]'))];const o=Array.from(document.querySelectorAll("[data-transition-layer] [view-transition-element=\"true\"]"));return s.filter((t=>!o.includes(t)))}function C(t){return null==t?null:t.scrollHeight>t.clientHeight?t:C(t.parentElement)}function P(t){const n=window.getComputedStyle(t);let s=n.getPropertyValue('view-transition-name');const o=v.MagicTransition.polyfill.supportsNative.peek();if(!(s&&'none'!==s||o)){if('none'===n.display)return;s=n.getPropertyValue('--view-transition-name')}return s}function M(){const t=document.querySelectorAll('[data-scrollable="true"]');t&&t.forEach((t=>{t.scrollTop=Number(t.getAttribute('view-transition-scroll-offset'))}))}function E(t,n){let s=t.getBoundingClientRect();if(n){const n=C(t);if('HTML'!==n?.tagName){const{scrollTop:t}=n||{scrollTop:0};s=DOMRect.fromRect({...s.toJSON(),y:s.y+t})}}const l=null==(u=t)?null:Array.from(u.querySelectorAll('[data-scrollable="true"]'));var u;l?.forEach((t=>{const{scrollTop:n}=t;t.setAttribute('view-transition-scroll-offset',`${n}`)}));const c=P(t);if(!c||'none'===c)return{elementName:null,transitionElement:null};t.querySelectorAll('[data-pressable=true]').forEach((t=>{t.setAttribute('style','display: contents')}));const p=t.outerHTML;return{name:c,transitionElement:{element:(0,A.jsx)(b.StaticTransitionElement,{content:p,inert:!0}),dimensions:s,ready:(0,o().signal)(!1)}}}function N(){const t=document.querySelector("[view-transition]"),n=t=>t.effect.getTiming().iterations!==1/0,s=t.getAnimations({subtree:!0}).filter((t=>n(t))),o=Promise.allSettled(s.map((t=>t.finished)));return T.default.getBootstrap('enable_animation_early_finish')?{animations:Promise.race([new Promise((t=>setTimeout(t,5e3))),o])}:{animations:o}}function _(t){const{polyfill:n,ready:s}=v.MagicTransition;if(!n.filled.peek()){const o='startViewTransition'in document&&null!==document.startViewTransition;o&&(n.startViewTransition.value=document.startViewTransition.bind(document)),document.startViewTransition=t,n.supportsNative.value=o,n.filled.value=!0,v.MagicTransition.native.value=o&&!n.disableNative.value,s.peek()||requestAnimationFrame((()=>{s.value=!0}))}}function q(){const{polyfill:t}=v.MagicTransition;t.filled.peek()&&(t.startViewTransition.value&&(document.startViewTransition=t.startViewTransition.value),t.filled.value=!1)}function D(){let t;return[new Promise((n=>{t=n})),function(){t()}]}function O(){const[t,n]=D(),[s,l]=D(),[u,c]=D(),p=(0,o().signal)(!1);return{finished:t,isTransitionSkipped:p,ready:s,setFinished:n,setReady:l,setUpdateCallbackDone:c,skipTransition:function(){p.value=!0},updateCallbackDone:u}}const F=s.default.memo((()=>{const t=(0,s.useRef)(null),{instance:n}=v.MagicTransition,{waitForNextValue:b}=(0,c.useNextSignalValue)(),{scheduler:C}=(0,p.usePostTaskScheduler)({strategy:'recycle'}),P=(0,u.useComputed)((()=>{const t=Array.from(n.transitionGroups.value.values());return n.stage.value.step===f.ViewTransitionStage.CaptureOld&&(t.length>0&&t.every((t=>null===t.imagePair.old.value||t.imagePair.old.value.ready.value)))})),D=(0,u.useComputed)((()=>{const t=Array.from(n.transitionGroups.value.values());return n.stage.value.step===f.ViewTransitionStage.CaptureNew&&(!(t.length>0)||t.every((t=>null===t.imagePair.new.value||t.imagePair.new.value.ready.value)))}));function F(){const t=V(n.scope.peek()),s=new Map;if(!t.length)return;t.forEach((t=>{const{name:l,transitionElement:u}=E(t,!0);if(!l)return;const c={name:l,order:n.layers.value++,imagePair:{old:(0,o().signal)(u),new:(0,o().signal)(null)},transition:n};if(s.has(l))throw console.error(`[view-transition-name="${l}"] already exists`,{existing:s.get(l)?.imagePair.old.peek()?.element,new:u.element}),new Error(`[view-transition-name="${l}"] already exists`);s.set(l,c)}));const l=b(P,(t=>!!t));return n.transitionGroups.value=s,l}function x(){n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CaptureNew,n.stage.peek());const t=V(n.scope.peek()),s=v.MagicTransition.shouldUseLiveContent.peek();if(!t.length)return;const l=new Map(n.transitionGroups.peek()),u=[];t.forEach((t=>{const{name:c,transitionElement:p}=E(t);if(!c)return;if(u.includes(c))throw new Error(`[view-transition-name="${c}"] already exists`);u.push(c);const v={...p,live:s,mounted:!1,container:null},w=l.get(c)||{name:c,order:n.layers.value++,imagePair:{old:(0,o().signal)(null),new:(0,o().signal)(v)},transition:n};w.imagePair.new.value=v,l.set(c,w)}));const c=b(D,(t=>!!t));return(0,o().batch)((()=>{n.transitionGroups.value=l,n.portalState.value.readyForPortal.value=!0})),c}function H(){(0,o().batch)((()=>{(0,S.setHistoryNavigationEffects)(),document.documentElement.style.setProperty('--view-transition_capture-old',' '),document.documentElement.style.setProperty('--view-transition_capture-new','initial'),v.MagicTransition.anyActive.value=!0,n.layers.value=0,n.active.value=!0,n.transitionGroups.value=new Map,n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CaptureOld,n.stage.peek())}))}function R(){(0,o().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.FreezeScreen,n.stage.peek())})),M()}async function U(){(0,o().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.DOMUpdate,n.stage.peek()),n.updateCallbackDone.value=C.postTask(n.wait,{priority:'user-blocking'})})),await n.updateCallbackDone.peek(),B(),t.current?.setUpdateCallbackDone()}function G(){const{polyfill:t}=v.MagicTransition;if((0,o().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CreateAnimations,n.stage.peek())})),!t.supportsNative.peek()&&T.default.getBootstrap('enable_polyfill_view_transitions')){const t=document.querySelector('[data-testid="site-content"]');t&&(t.setAttribute('style','height: 100%'),M())}}function $(){t.current?.setReady(),(0,o().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.StartAnimations,n.stage.peek())}))}function j(){(0,o().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.Complete,n.stage.peek())})),t.current?.setFinished()}function B(){document.documentElement.style.setProperty('--view-transition_capture-old','initial'),document.documentElement.style.setProperty('--view-transition_capture-new',' ')}async function L(){await new Promise((t=>requestAnimationFrame((()=>setTimeout(t,0))))),(0,o().batch)((()=>{(0,S.clearHistoryNavigationEffects)(),n.transitionGroups.value=new Map,v.MagicTransition.anyActive.value=!1,n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.Idle,n.stage.peek()),n.active.value=!1,n.className.value=null,n.style.value=null,n.scope.value=null,n.portalState.value={readyForPortal:(0,o().signal)(!1),portalComplete:(0,o().signal)(!1)},n.domUpdateCallbacks.clear(),document.documentElement.style.setProperty('--view-transition_capture-old',null),document.documentElement.style.setProperty('--view-transition_capture-new',null)}));const s=document.querySelectorAll('[data-scrollable="true"]');s?.forEach((t=>{t.removeAttribute('view-transition-scroll-offset')})),document.querySelector('[data-testid="site-content"]')?.removeAttribute('style'),t.current=null}function z(t){if(v.MagicTransition.debugging.enabled.peek()&&v.MagicTransition.debugging.pauseAfterStage.peek()===t){console.log(`Pausing after stage: ${t}`);const n=new AbortController,s=b(v.MagicTransition.debugging.pauseAfterStage,(n=>t!==n),n.signal),o=b(v.MagicTransition.debugging.enabled,(t=>!t),n.signal);return s.then((()=>{console.log(`Resuming after stage: ${t}`),n.signal.aborted||n.abort()})),o.then((()=>{n.signal.aborted||n.abort()})),Promise.race([s,o])}}const I=(0,l.useEvent)((async s=>{s&&n.domUpdateCallbacks.add(s),await z(f.ViewTransitionStage.Idle),await C.postTask((()=>H()));try{if(await C.postTask((()=>F())),await z(f.ViewTransitionStage.CaptureOld),await C.postTask(R),await z(f.ViewTransitionStage.FreezeScreen),await C.postTask(U),await z(f.ViewTransitionStage.DOMUpdate),!t.current?.isTransitionSkipped.peek()){await C.postTask((()=>x())),await z(f.ViewTransitionStage.CaptureNew),await C.postTask(G),await z(f.ViewTransitionStage.CreateAnimations);const{animations:t}=await C.postTask(N);await C.postTask($),await z(f.ViewTransitionStage.StartAnimations),await t}}catch(t){n.stage.peek().step===f.ViewTransitionStage.CaptureOld&&await C.postTask(U),console.log(t)}finally{await C.postTask(j),await z(f.ViewTransitionStage.Complete),await C.postTask(L)}})),J=(0,l.useEvent)((s=>{const{activeViewTransition:o,polyfill:l}=v.MagicTransition,u='object'==typeof s,c=u?s.update:s;if(u){const{classNames:t,enableHistory:n,style:o}=s;(0,k.configure)({className:t,enableHistory:n,style:o})}if(l.supportsNative.peek()&&!l.disableNative.peek()){H();const t=l.startViewTransition.value((async()=>{(0,w.flushSync)((async()=>{await(c?.())})),await n.wait(),B()}));return t.ready.then((async()=>{await C.yield(),n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CreateAnimations,n.stage.peek())})),t.updateCallbackDone.then((async()=>{await C.yield(),n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.DOMUpdate,n.stage.peek())})),t.finished.then((async()=>{await C.yield(),L(),o.value=null})),o.value=t,t}if(!l.supportsNative.peek()&&!T.default.getBootstrap('enable_polyfill_view_transitions')){const t={finished:Promise.resolve(),ready:Promise.resolve(),updateCallbackDone:Promise.resolve(),skipTransition:()=>{}};return c?.(),t}return t.current=O(),I(c),t.current})),K=v.MagicTransition.instance;return K.start.peek()!==J&&(K.start.value=J,q(),_(J)),(0,A.jsx)(h.RootStyleSync,{viewTransition:n})}));e.ViewTransitionCoordinator=F}),"0e2830",["ba7a76","45f788","a27fc3","a954a0","f4e9c4","265637","8994c5","53bb4a","83da1f","480c9d","64bb33","5e4d5c","c235f8","c32f72","99778d","c850f3","a94de2","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.attachTransitionElement=function({element:t,setRoot:n,transitionElement:o}){t&&!o.peek().ready.peek()&&(s(t)?o.value.ready.value=!0:n(t))},e.readyToApply=function(t,o){let s=!1;switch(t.transition.stage.value.step){case n.ViewTransitionStage.CaptureOld:case n.ViewTransitionStage.FreezeScreen:case n.ViewTransitionStage.DOMUpdate:case n.ViewTransitionStage.CaptureNew:s='frozen';break;case n.ViewTransitionStage.CreateAnimations:case n.ViewTransitionStage.StartAnimations:case n.ViewTransitionStage.Complete:s='apply'}if(!s)return null;if('frozen'===s)return{[`frozen-view-transition-${o}`]:t.name};return{[`view-transition-${o}`]:t.name}};var t=r(d[0]),n=r(d[1]);t.cssFragment`
  height: auto;
  left: 0;
  mix-blend-mode: var(--view-transition_forced-blend-mode, var(--view-transition_mix-blend-mode));
  position: absolute;
  top: 0;
  width: 100%;

  /* This assumes we will have a static wrapper, if we ever allow live content
  in the old side we need to update this. */
  > [data-static-element-wrapper] > [view-transition-element] [view-transition-element] {
    --view-transition_visibility: hidden;
  }

  > [data-static-element-wrapper] > [view-transition-element] {
    left: 0;
    top: 0;
    margin: 0;
    translate: 0;
    opacity: 1;
    flex: 1;
  }
`;function o(t,n){return n?n.hasAttribute(t)?n:o(t,n.parentElement):null}function s(t){if('none'===window.getComputedStyle(t).display)return!0;const n=o('view-transition-image-pair',t.parentElement);if(!n)return!1;if('none'===window.getComputedStyle(n).display)return!0;const s=o('view-transition-group',n.parentElement);if(!s)return!1;if('none'===window.getComputedStyle(s).display)return!0;const l=o('view-transition',s.parentElement);return!!l&&'none'===window.getComputedStyle(l).display}}),"1bd331",["4786a8","64bb33"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScaleEffect=void 0;var t=r(d[0]),n=r(d[1]);const s='scale',f=t=>{if(!t)return'';let f='';const{startScale:o,endScale:c}=t,l=new Map;return(0,n.setIfDefined)('--view-transition-scale-effect_from',o,l),(0,n.setIfDefined)('--view-transition-scale-effect_to',c,l),(0,n.setCommonOptions)(s,t,l),l.forEach(((t,n)=>{f+=`${n}: ${t};`})),f},o=t.cssFragment`
  @keyframes ${s} {
    from {
      filter: var(--view-transition_from-filter);
      visibility: visible;
      scale: var(--view-transition-scale-effect_from, 1);
    }

    to {
      filter: var(--view-transition_to-filter);
      scale: var(--view-transition-scale-effect_to, 0);
    }
  }
`,c={name:s,apply:n=>t.cssFragment`
      ${o}
      ${f(n)}
      animation: ${c.animation};
    `,animation:(0,n.makeAnimationDefaults)(s)};e.ScaleEffect=c}),"22d731",["4786a8","d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComputed=function(u){var o=(0,t.useRef)(u);return o.current=u,(0,t.useMemo)((function(){return(0,n.computed)((function(){return o.current()}))}),s)},e.useSignal=function(u){return(0,t.useMemo)((function(){return(0,n.signal)(u)}),s)},e.useSignalEffect=function(u){var o=(0,t.useRef)(u);o.current=u,(0,t.useEffect)((function(){return(0,n.effect)((function(){return o.current()}))}),s)},e.useSignals=function(n){return M(n)};var n=r(d[0]),t=(function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!=typeof n&&"function"!=typeof n)return{default:n};var u=f(t);if(u&&u.has(n))return u.get(n);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in n)if("default"!==s&&Object.prototype.hasOwnProperty.call(n,s)){var l=c?Object.getOwnPropertyDescriptor(n,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=n[s]}o.default=n,u&&u.set(n,o);return o})(r(d[1])),u=r(d[2]);o(r(d[3])),o(r(d[4]));function o(n){return n&&n.__esModule?n:{default:n}}function f(n){if("function"!=typeof WeakMap)return null;var t=new WeakMap,u=new WeakMap;return(f=function(n){return n?u:t})(n)}new Map;var c,s=[],l=Symbol.for("react.element"),p=function(){},v=Symbol.dispose||Symbol.for("Symbol.dispose");function b(n,t){var u=t.effect.S();return c=t,y.bind(t,n,u)}function y(n,t){t(),c=n}(S={u:0,effect:{s:void 0,c:function(){},S:function(){return p},d:function(){}},subscribe:function(){return p},getSnapshot:function(){return 0},S:function(){},f:function(){}})[v]=function(){};var S,h,O=Promise.prototype.then.bind(Promise.resolve());function M(o){void 0===o&&(o=0),h||(h=O((function(){var n;h=void 0,null==(n=c)||n.f()})));var f=(0,t.useRef)();null==f.current&&(f.current=(function(t){var u,o,f,s,l=0,p=(0,n.effect)((function(){o=this}));return o.c=function(){l=l+1|0,s&&s()},(u={u:t,effect:o,subscribe:function(n){return s=n,function(){l=l+1|0,s=void 0,p()}},getSnapshot:function(){return l},S:function(){if(null!=c){var n=c.u,t=this.u;0==n&&0==t||0==n&&1==t?(c.f(),f=b(void 0,this)):1==n&&0==t||2==n&&0==t||(f=b(c,this))}else f=b(void 0,this)},f:function(){null==f||f(),f=void 0}})[v]=function(){this.f()},u})(o));var s=f.current;return(0,u.useSyncExternalStore)(s.subscribe,s.getSnapshot,s.getSnapshot),s.S(),s}Object.defineProperties(n.Signal.prototype,{$$typeof:{configurable:!0,value:l},type:{configurable:!0,value:function(n){var t=n.data,u=M(1);try{return t.value}finally{u.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}})}),"250cdf",["a954a0","a27fc3","69b03d","14def0","09a5e5"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.signalToRef=t,e.useSignalToRef=function(l){const o=(0,u.useSignal)(null),s=l||o;(0,n.useEffect)((()=>function(){s.value=null}),[s]);const f=(0,n.useMemo)((()=>t(s)),[s]),c=[s,f];return c.signal=s,c.ref=f,c};var n=r(d[0]),u=r(d[1]);function t(n){return u=>{n.value=u}}}),"2637d5",["a27fc3","e086eb"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionDebugger=void 0;var t=r(d[0]),n=r(d[1]),u=r(d[2]);const o=(0,t.memo)((function(){return(0,t.useEffect)((()=>{if(window.__vt=u.MagicTransition,!u.MagicTransition.debugging.evaluated.peek()){u.MagicTransition.debugging.evaluated.value=!0;try{const t=new URLSearchParams(window.location.search);if(null!==t.get('vt-native')){const n=t.get('vt-native')||'true';u.MagicTransition.polyfill.disableNative.value='true'!==n}null!==t.get('vt-step')&&(u.MagicTransition.debugging.enabled.value=!0,u.MagicTransition.debugging.pauseAfterStage.value=t.get('vt-step'))}catch{}}return()=>{delete window.__vt}}),[]),(0,n.useSignalEffect)((()=>{const{debugging:t}=u.MagicTransition;if(!t.enabled.value)return;const{stage:n}=u.MagicTransition.instance,{step:o}=n.value;console.log(`Step(${o})`)})),null}));e.ViewTransitionDebugger=o}),"2c1e81",["a27fc3","265637","83da1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransition=function(){var t=(0,o.useSignals)(1);try{const w=(0,n.useCx)(),{transitionGroups:f,stage:T,className:E,style:_}=s.MagicTransition.instance,{disableNative:y,supportsNative:h}=s.MagicTransition.polyfill,x=(0,o.useComputed)((()=>!y.value&&h.value));(0,o.useSignalEffect)((()=>{const t=x.value;document.documentElement.classList.toggle('dir',t),document.documentElement.classList.toggle('native',t),p.viewTransition_native.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),p.viewTransition_slideInAndFade.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),p.viewTransition_slideInFromEdge.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),p.viewTransition_slideUpFromBottom.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),p.viewTransition_contextualGrow.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t)));const n=Array.from(E.value||[]);n.forEach((t=>{t.split(' ').forEach((t=>document.documentElement.classList.toggle(t,!0)))}));const o={..._.value||{}};return Object.keys(o).forEach((t=>{document.documentElement.style.setProperty(t,`${o[t]}`)})),()=>{n.forEach((t=>{document.documentElement.classList.remove(...t.split(' '))})),Object.keys(o).forEach((t=>{document.documentElement.style.removeProperty(t)}))}}));const b=(0,o.useComputed)((()=>{const{step:t}=T.value;return t===l.ViewTransitionStage.CaptureOld})),C=(0,o.useComputed)((()=>{switch(T.value.step){case l.ViewTransitionStage.StartAnimations:case l.ViewTransitionStage.Complete:return!0;default:return!1}}));function F(t){const n=f.peek().get('root')?.imagePair,o=n?.[t].peek()?.dimensions;return o&&!b.peek()?{[`--view-transition_${t}-root-clip`]:`inset(-${o.bottom}px ${o.left}px)`}:{}}const L={'--view-transition_visibility':b.value?'hidden':'visible','--view-transition_play-state':C.value?'running':'paused','--view-transition_overflow':C.value?'visible':'hidden',...F('old'),...F('new')};return x.value?(0,v.jsx)(c.ViewTransitionCoordinator,{},"native"):(0,v.jsxs)("div",{className:w(p.root,p.viewTransitionContainer,p.viewTransition_contextualGrow,p.viewTransition_slideInAndFade,p.viewTransition_slideInFromEdge,p.viewTransition_slideUpFromBottom,...Array.from(E.value||[])),children:[(0,v.jsx)("div",{"view-transition":"true",className:w(p.viewTransition,'view-transition','polyfill',!x.value&&'slideUpFromBottom_polyfill'),style:L,children:Array.from(f.value.entries()).map((([t,n])=>(0,v.jsx)(u.ViewTransitionGroup,{group:n},t)))}),(0,v.jsx)(c.ViewTransitionCoordinator,{},"polyfill")]})}finally{t.f()}};t(r(d[1])),r(d[2]);var n=r(d[3]),o=r(d[4]),s=r(d[5]),l=r(d[6]),c=r(d[7]),u=r(d[8]),v=(r(d[9]),r(d[10]),r(d[11]),r(d[12]),r(d[13]),r(d[14]),r(d[15]));const p={root:"r1awnid5",viewTransition_native:"v1oc6b3k",viewTransition:"v7e8swd",viewTransitionContainer:"v1d1mri8",viewTransition_contextualGrow:"vlugpmm",viewTransition_slideInAndFade:"vgnbcm1",viewTransition_slideInFromEdge:"v1agkal2",viewTransition_slideUpFromBottom:"vqw89vp"}}),"3ba102",["ba7a76","a27fc3","ea4b89","4786a8","e086eb","83da1f","64bb33","0e2830","df7672","cc5217","63fa06","5bf8dc","74aca7","958172","929c43","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flushSync=function(n){const u=(0,t.getReactDom18)();if(!u)return void n();const{flushSync:c}=u;c(n)},e.useDeferredValue=function(n){const u=(0,t.getReact18)();if(!u)return n;const{useDeferredValue:c}=u;return c(n)};var t=r(d[0])}),"480c9d",["a9f639"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),c=r(d[4]),s=r(d[5]);const y={enter:{old:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({startOpacity:'var(--contextual-grow_start-opacity, 1)',endOpacity:'var(--contextual-grow_end-opacity, 0)',delay:'var(--contextual-grow_fade-delay, 50ms)',duration:75})};
          ${c.ScaleEffect.apply({endScale:'var(--contextual-grow_scale--end, 0.94)'})};
          animation: ${c.FadeEffect.animation}, ${c.ScaleEffect.animation};
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 0.6));
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `},exit:{new:t.cssFragment`
        ${n.a11y.motion} {
          ${c.ScaleEffect.apply({startScale:'var(--contextual-grow_scale--end, 0.94)',endScale:'var(--contextual-grow_scale--start, 1)'})};
          animation: ${c.ScaleEffect.animation};
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }

        ${(0,l.descendantElements)()} {
          --view-transition_visibility: visible;
        }
      `}},f={enter:{old:t.cssFragment`
        ${n.a11y.motion} {
          mix-blend-mode: normal;
          ${c.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `,new:t.cssFragment`
        ${n.a11y.motion} {
          mix-blend-mode: normal;
          ${c.FadeEffect.apply({startOpacity:'var(--contextual-grow_content-start-opacity, 0)',duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `},exit:{old:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `,new:t.cssFragment`
        ${n.a11y.motion} {
          mix-blend-mode: normal;
          ${c.FadeEffect.apply({duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `}},p={enter:{old:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({duration:75,startOpacity:1,endOpacity:0,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})};
          ${c.ScaleEffect.apply()};
          animation: ${c.FadeEffect.animation}, ${c.ScaleEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `,new:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({startOpacity:1,duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          ${c.ScaleEffect.apply()};
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `},exit:{old:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({startOpacity:1,duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})};
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `,new:t.cssFragment`
        ${n.a11y.motion} {
          ${c.FadeEffect.apply({duration:75,delay:'var(--contextual-grow_fade-delay, 50ms)',timingFunction:`${t.theme.motion.linearCurve.animationTimingFunction}`})}
          animation: ${c.FadeEffect.animation};
        }

        ${n.a11y.noMotion} {
          ${c.FadeEffect.apply()};
        }
      `}},$=t.cssFragment`
  ::view-transition {
    --view-transition_duration: 500ms;
  }

  ::view-transition-group(container),
  ::view-transition-group(container-content) {
    mix-blend-mode: normal;
    overflow: hidden;
    border-radius: var(--container-border-radius, 15px);
  }

  ::view-transition-group(container) {
    border-bottom: var(--container-border, none);
  }

  &.exit::view-transition-old(container) {
    ${p.exit.old}
  }

  &.enter::view-transition-old(container) {
    ${p.enter.old};
  }

  &.enter::view-transition-new(container) {
    ${p.enter.new}
  }

  ::view-transition-new(container-content) {
    mix-blend-mode: normal;
  }

  &.enter::view-transition-old(container-content) {
    ${f.enter.old}
  }

  &.enter::view-transition-new(container-content) {
    ${f.enter.new}
  }

  &.exit::view-transition-old(container-content) {
    ${f.exit.old}
  }

  &.exit::view-transition-new(container-content) {
    ${f.exit.new}
  }

  &.exit::view-transition-new(container) {
    ${p.exit.new}
  }

  &.enter::view-transition-new(root) {
    display: none;
  }

  &.exit::view-transition-old(root) {
    display: none;
  }

  /* Scale out the old screen */
  &.enter::view-transition-old(root) {
    ${y.enter.old}
  }

  &.exit::view-transition-new(root) {
    ${y.exit.new}
  }

  /**
   * This shows all of the old elements during the transition that would
   * otherwise be hidden due to nested elements. It also ensures that if a list
   * pattern is implemented, that the singluar list item is hidden as it will be
   * promoted.
   */
  ::view-transition-group(root) {
    ::view-transition-new {
      > [data-static-element-wrapper] > [view-transition-element] {
        visibility: visible;
      }
    }

    /* stylelint-disable-next-line selector-max-type */
    ${(0,l.frozenViewTransition)('old')},
    ::view-transition-old {
      /* stylelint-disable-next-line selector-max-type */
      ${(0,l.descendantElements)()} {
        --view-transition_visibility: visible;
        /* stylelint-disable-next-line selector-max-type */
        [active-element='true'] {
          visibility: hidden;
        }
      }
    }
  }
`,w={name:o.DLSTransitionPattern.ContextualGrow,customize:t=>(0,s.extendPattern)(w,t),fragment:$,mapping:[['--contextual-grow_scale--end',{key:'endScale'}],['--contextual-grow_scale--start',{key:'startScale'}],['--contextual-grow_start-opacity',{key:'startOpacity'}],['--contextual-grow_end-opacity',{key:'endOpacity'}],['--contextual-grow_fade-delay',{key:'fadeDelay'}],['--contextual-grow_content-start-opacity',{key:'contentStartOpacity'}]]}}),"5bf8dc",["4786a8","daa5d1","83da1f","dbb634","06dba3","f3229a"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionNew=function({group:t}){const w=(0,l.useCx)(),f=(0,u.useSignal)(t.imagePair.new),y=(0,u.useSignal)(null),{portalState:k}=c.MagicTransition.instance;let q='';const{ref:h}=(0,o.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{f.value&&(t>0||n>0)&&(f.value.ready.value=!0)},skip:!f.value||f.value.ready.value});if(f.value?.live&&y.value&&(k.value.readyForPortal.value&&(0,n().batch)((()=>{t.imagePair.new.value&&(t.imagePair.new.value.mounted=!0,t.imagePair.new.value.container=y.value)})),k.value.portalComplete.value)){const t=y.value?.querySelector('[view-transition-element]');t?q=`-${getComputedStyle(t).paddingTop}`:c.MagicTransition.instance.stage.value.step===_.ViewTransitionStage.CreateAnimations&&(f.value.live=!1)}const S=(0,v.readyToApply)(t,'new');return(0,s.jsx)("div",{ref:t=>{(0,v.attachTransitionElement)({element:t,setRoot:h,transitionElement:f}),y.value=t},className:w(p.container,S&&'view-transition-new'),style:{'--view-transition_new-top':q},...S,children:!f.value?.live&&f.value?.element})};t(r(d[1])),r(d[2]);function n(){const t=r(d[3]);return n=function(){return t},t}var l=r(d[4]),o=r(d[5]),u=r(d[6]),_=r(d[7]),c=r(d[8]),v=r(d[9]),s=(r(d[10]),r(d[11]));const p={container:"csra6u8 atm_e2_1wugsn5 atm_fq_idpfg4 atm_jd_1lh6wy9 atm_mk_stnw88 atm_tk_idpfg4 atm_vy_1osqo2v atm_uoiimy_o3fak9 atm_tk_13nbyhl atm_uoiimy_15vqwwr_k0svna atm_fq_idpfg4_1gcqmc9 atm_tk_idpfg4_1gcqmc9 atm_gi_idpfg4_1gcqmc9 atm_v1_idpfg4_1gcqmc9 atm_k4_kb7nvz_1gcqmc9 atm_am_kb7nvz_1gcqmc9"}}),"63fa06",["ba7a76","a27fc3","ea4b89","a954a0","4786a8","c376e0","265637","64bb33","83da1f","1bd331","e9cc00","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.TransitionLayer=void 0;var o=n(r(d[2])),s=(r(d[3]),r(d[4])),l=r(d[5]),u=r(d[6]),c=r(d[7]),v=t(r(d[8])),_=r(d[9]),y=r(d[10]),f=r(d[11]),b=r(d[12]),p=r(d[13]),w=(r(d[14]),r(d[15]));const h={globalTopLayer:"g5l85gq",transitionLayer:"t12eeqg1 atm_8w_1bu657g atm_f3_idpfg4 atm_mj_1apkgb0 atm_mk_10saobi atm_vb_glywfm atm_wq_115503r",noMotion:"njfy9s2 atm_11hwh6k_1vnutw1 atm_5e3br3_ccgtyg",noAnimation:"n1pvftv9 atm_11hwh6k_1myh56b atm_5e3br3_dgxjpe"},T=(0,o.memo)((function(){var t=(0,_.useSignals)(1);try{const n=(0,l.useCx)(),{anyActive:T,debugging:j,instance:L}=y.MagicTransition,[S,x]=(0,o.useState)(null);async function k(){await u.scheduler.yield(),h.globalTopLayer.split(' ').forEach((t=>document.documentElement.classList.toggle(t,!0)))}null===S&&x((0,c.isWebSafari)()),null===s.motionPreference.system.peek()&&((0,s.initialize)(),k(),y.MagicTransition.polyfill.disableNative.value=v.default.getBootstrap('disable_native_view_transitions')),y.ScrollDriven.ready.value||y.ScrollDriven.install();const M=(0,_.useComputed)((()=>{if(!(j.enabled.value&&T.value))return!1;switch(L.stage.value.step){case f.ViewTransitionStage.Idle:case f.ViewTransitionStage.Complete:return!1;default:return!0}})),P={'--transition-layer_pointer-events':M.value?'auto':'none','--view-transition_forced-blend-mode':S?'normal':void 0},V=s.motionPreference.user.value,q=s.motionPreference.system.value;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:n(h.transitionLayer,q&&'no-motion'===V&&h.noMotion,q&&'no-animation'===V&&h.noAnimation),"data-transition-layer":!0,"data-testid":"transition-layer","aria-hidden":!0,style:P,inert:M.value?void 0:'true',children:(0,w.jsx)(b.ViewTransition,{})}),(0,w.jsx)(p.ViewTransitionDebugger,{})]})}finally{t.f()}}));e.TransitionLayer=T}),"6b4e79",["ba7a76","45f788","a27fc3","ea4b89","daa5d1","4786a8","a2c93f","e9b7bf","c235f8","e086eb","83da1f","64bb33","3ba102","2c1e81","fd0cff","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]),t=r(d[1]),o=r(d[2]),f=r(d[3]),s=r(d[4]);const l={enter:{old:n.cssFragment`
        ${t.a11y.motion} {
          ${s.RelativeMoveEffect.apply({startX:0,endX:'calc(-1 * var(--slide-in-and-fade_offset-x-to, 200px))',duration:500})};
          ${s.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75})};
          animation: ${s.FadeEffect.animation}, ${s.RelativeMoveEffect.animation};
          animation-duration: var(--slide-in-and-fade_fade-out-duration, 75ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        ${t.a11y.noMotion} {
          ${s.FadeEffect.apply({startOpacity:1,endOpacity:0})};
        }
      `,new:n.cssFragment`
        ${t.a11y.motion} {
          ${s.RelativeMoveEffect.apply({endX:0,startX:'var(--slide-in-and-fade_offset-x-from, 200px)',duration:500})};
          ${s.RelativeMoveEffect.align()}
          ${s.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350})};
          animation: ${s.FadeEffect.animation}, ${s.RelativeMoveEffect.animation};
          animation-duration: var(--slide-in-and-fade_fade-in-duration, 350ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        ${t.a11y.noMotion} {
          ${s.FadeEffect.apply({startOpacity:0,endOpacity:1})};
        }

        background: var(--view-transition_panel-background, #fff);
      `},exit:{old:n.cssFragment`
        ${t.a11y.motion} {
          ${s.RelativeMoveEffect.apply({startX:0,endX:'var(--slide-in-and-fade_offset-x-to, 200px)',duration:500})};
          ${s.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75})};
          animation: ${s.FadeEffect.animation}, ${s.RelativeMoveEffect.animation};
          animation-duration: var(--slide-in-and-fade_fade-out-duration, 75ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        ${t.a11y.noMotion} {
          ${s.FadeEffect.apply({startOpacity:1,endOpacity:0})};
        }

        background: var(--view-transition_panel-background, #fff);
      `,new:n.cssFragment`
        ${t.a11y.motion} {
          ${s.RelativeMoveEffect.apply({endX:0,startX:'calc(-1 * var(--slide-in-and-fade_offset-x-from, 200px))',duration:500})};
          ${s.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350})};
          animation: ${s.FadeEffect.animation}, ${s.RelativeMoveEffect.animation};
          animation-duration: var(--slide-in-and-fade_fade-in-duration, 350ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        ${t.a11y.noMotion} {
          ${s.FadeEffect.apply({startOpacity:0,endOpacity:1})};
        }

        --view-transition_mix-blend-mode: normal;
      `}},c=n.cssFragment`
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-group(screen) {
    animation: none;
  }

  ::view-transition-image-pair(screen) {
    mix-blend-mode: normal;
    display: grid;
    height: 100%;
    overflow: hidden;
  }

  ::view-transition-old(screen),
  ::view-transition-new(screen) {
    display: flex;
    grid-area: 1 / 1;
    mix-blend-mode: normal;
    position: static;
  }

  ::view-transition-new(screen) {
    animation: none;
  }

  &.enter::view-transition-old(screen) {
    ${l.enter.old}
  }

  &.enter::view-transition-new(screen) {
    ${l.enter.new}
  }

  &.exit::view-transition-new(screen) {
    ${l.exit.new}
  }

  &.exit::view-transition-old(screen) {
    ${l.exit.old}
  }
`,p={name:o.DLSTransitionPattern.SlideInAndFade,customize:n=>(0,f.extendPattern)(p,n),fragment:c,mapping:[['--slide-in-and-fade_fade-in-duration',{key:'fadeInDuration',type:'duration'}],['--slide-in-and-fade_fade-out-duration',{key:'fadeOutDuration',type:'duration'}],['--slide-in-and-fade_move-duration',{key:'moveDuration',type:'duration'}]]}}),"74aca7",["4786a8","daa5d1","83da1f","f3229a","06dba3"]);
__d((function(g,r,i,a,m,e,d){"use strict";var s=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0,e.useWaitForResizeObserverPolyfill=function(){return{waitForResizeObserver:(0,u.useEvent)((async()=>!('ResizeObserver'in window)&&(window.ResizeObserver=await o(),!0)))}};var n=s(r(d[1])),t=r(d[2]),u=r(d[3]);async function o(){return(await r(d[5])(d[4]).then(n.default)).default}let l=!1;e.useResizeObserverPolyfill=()=>{const[s,n]=(0,t.useState)(!!l&&'ResizeObserver'in window),u=(0,t.useRef)(!1);return s||(l=!0,'ResizeObserver'in window?n(!0):(async function(){u.current||(u.current=!0,window.ResizeObserver=await o(),n(!0))})()),s}}),"7f17e4",["ba7a76","45f788","a27fc3","f4e9c4","bf224d","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNextSignalValue=function(){const n=(0,t.useRef)(new Set),u=(0,t.useRef)(!1),c=(0,t.useCallback)(((t,c,o)=>u.current||o?.aborted?Promise.reject(new Error('Component has unmounted')):new Promise((u=>{const s=t.subscribe((t=>{if(!c||c(t)){try{s?.()}catch{}u(t),n.current.delete(s)}}));o?.addEventListener('abort',(()=>{try{s?.()}catch{}u(null)})),n.current.add(s)}))),[]);return(0,t.useEffect)((()=>{const t=n.current;return()=>{u.current=!0,t.forEach((t=>t())),t.clear()}}),[]),{waitForNextValue:c}};var t=r(d[0])}),"8994c5",["a27fc3"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]),f=r(d[4]);const l={enter:{old:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({endX:0,startX:0,endY:'calc(-1 * var(--slide-up-from-bottom_offset-y-to, 5.5%))',startScale:'var(--slide-up-from-bottom_scale--start, 1)',endScale:'var(--slide-up-from-bottom_scale--end, 0.94)',duration:500})}
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_start-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `,new:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_offset-y-from, 100%)',endY:'var(--slide-up-from-bottom_offset-y-to-polyfill, 0px)',timingFunction:`${t.theme.motion.enterCurve.animationTimingFunction}`,duration:500})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
          animation-timing-function: var(
            --view-transition_timing-function,
            ${t.theme.motion.standardCurve.animationTimingFunction}
          );
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `,oldRoot:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_root-offset-y-from, 24px)',endY:'var(--slide-up-from-bottom_root-offset-y-to, 2%)',startScale:'var(--slide-up-from-bottom_scale--start, 1)',endScale:'var(--slide-up-from-bottom_scale--end, 0.94)',duration:500})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `,newRoot:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({endY:'var(--slide-up-from-bottom_root-offset-y-to, 2%)',startScale:'var(--slide-up-from-bottom_scale--end, 0.94)',endScale:'var(--slide-up-from-bottom_scale--start, 1)',duration:500})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `},exit:{old:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_offset-y-to-polyfill, 0px)',endY:'var(--slide-up-from-bottom_offset-y-from, 100%)',timingFunction:` ${t.theme.motion.exitCurve.animationTimingFunction}`,duration:300})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 300ms);
          animation-timing-function: var(
            --view-transition_timing-function,
            ${t.theme.motion.exitCurve.animationTimingFunction}
          );
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }

        z-index: 1;
      `,new:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({endX:0,startX:0,startY:'calc(-1 * var(--slide-up-from-bottom_offset-y-to, 5.5%))',startScale:'var(--slide-up-from-bottom_scale--end, 0.94)',endScale:'var(--slide-up-from-bottom_scale--start, 1)',duration:500})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `,oldRoot:t.cssFragment`
        ${o.a11y.motion} {
          ${f.RelativeMoveEffect.apply({endY:'var(--slide-up-from-bottom_root-offset-y-from, 24px)',duration:500})};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        ${o.a11y.noMotion} {
          ${f.FadeEffect.apply()};
        }
      `}},p=t.cssFragment`
  /* normal blending that allows new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;

  ::view-transition-group(screen) {
    z-index: 1;
    /* depends on gap between previous/new context sheets */
    clip-path: inset(calc(-1 * var(--slide-up-from-bottom_root-offset-y-from, 24px)) 0 0 0);
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root),
  ::view-transition-new(root) {
    display: none;
  }

  ::view-transition-old(minimized-screen),
  ::view-transition-new(minimized-screen) {
    display: none;
  }

  ::view-transition-group(minimized-screen) {
    z-index: -1;
  }

  ::view-transition-old(*),
  ::view-transition-new(*) {
    mix-blend-mode: normal;
  }

  &.enter::view-transition-old(screen) {
    ${l.enter.old};
  }

  &.enter::view-transition-new(screen) {
    ${l.enter.new};
  }

  &.exit::view-transition-old(screen) {
    ${l.exit.old};
  }

  &.exit::view-transition-new(screen) {
    ${l.exit.new};
  }

  &.enter::view-transition-old(root) {
    ${l.enter.oldRoot};
  }

  &.enter::view-transition-new(root) {
    ${l.enter.newRoot};
  }

  &.exit::view-transition-old(root) {
    ${l.exit.oldRoot};
  }
`,c={name:n.DLSTransitionPattern.SlideUpFromBottom,customize:t=>(0,s.extendPattern)(c,t),fragment:p,mapping:[['--slide-up-from-bottom_scale--end',{key:'screenEndScale'}],['--slide-up-from-bottom_scale--start',{key:'screenStartScale'}],['--slide-up-from-bottom_root-offset-y-from',{key:'rootStartY'}],['--slide-up-from-bottom_root-offset-y-to',{key:'rootEndY'}],['--slide-up-from-bottom_root-offset-x-from',{key:'rootStartX'}],['--slide-up-from-bottom_root-offset-x-to',{key:'rootEndX'}],['--slide-up-from-bottom_slide-up-duration',{key:'slideUpDuration',type:'duration'}],['--slide-up-from-bottom_slide-down-duration',{key:'slideDownDuration',type:'duration'}]]}}),"929c43",["4786a8","daa5d1","83da1f","f3229a","06dba3"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]),t=r(d[1]),o=r(d[2]),s=r(d[3]),l=r(d[4]);const f={enter:{old:n.cssFragment`
        ${t.a11y.motion} {
          ${l.RelativeMoveEffect.apply({duration:500,endX:'-30%'})};
          animation-duration: var(--slide-in-from-edge_slide-out-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_start-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
        }

        ${t.a11y.noMotion} {
          ${l.FadeEffect.apply()};
        }
      `,new:n.cssFragment`
        height: 100%;

        ${t.a11y.motion} {
          ${l.RelativeMoveEffect.apply({duration:500,startX:'100%'})};
          ${l.RelativeMoveEffect.align()}
          animation-duration: var(--slide-in-from-edge_slide-in-duration, 500ms);
        }

        ${t.a11y.noMotion} {
          ${l.FadeEffect.apply()};
        }
      `},exit:{old:n.cssFragment`
        ${t.a11y.motion} {
          ${l.RelativeMoveEffect.apply({duration:500,endX:'100%'})};
          animation-duration: var(--slide-in-from-edge_slide-out-duration, 500ms);
          height: 100%;
        }

        ${t.a11y.noMotion} {
          ${l.FadeEffect.apply()};
        }

        z-index: 1;
      `,new:n.cssFragment`
        ${t.a11y.motion} {
          ${l.RelativeMoveEffect.apply({duration:500,startX:'-30%'})};
          animation-duration: var(--slide-in-from-edge_slide-in-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        ${t.a11y.noMotion} {
          ${l.FadeEffect.apply()};
        }
      `}},v=n.cssFragment`
  ::view-transition-new(root) {
    animation: none;
    opacity: 1;
    mix-blend-mode: normal;
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-group(screen) {
    clip-path: inset(0 0 -400px 0);
    animation: none;
  }

  ::view-transition-image-pair(screen) {
    display: grid;
    height: 100%;
  }

  ::view-transition-new(screen),
  ::view-transition-old(screen) {
    background: var(--view-transition_panel-background, #fff);
    grid-area: 1 / 1;
    position: static;
    mix-blend-mode: normal;
    display: flex;
  }

  &.enter::view-transition-new(screen) {
    ${f.enter.new}
  }

  &.enter::view-transition-old(screen) {
    ${f.enter.old}
  }

  &.exit::view-transition-new(screen) {
    ${f.exit.new}
  }

  &.exit::view-transition-old(screen) {
    ${f.exit.old}
  }
`,c={name:o.DLSTransitionPattern.SlideInFromEdge,customize:n=>(0,s.extendPattern)(c,n),fragment:v,mapping:[['--slide-in-from-edge_slide-in-duration',{key:'slideInDuration',type:'duration'}],['--slide-in-from-edge_slide-out-duration',{key:'slideOutDuration',type:'duration'}]]}}),"958172",["4786a8","daa5d1","83da1f","f3229a","06dba3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RootStyleSync=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);const c=(0,t.memo)((function({viewTransition:t}){const c=(0,n.useComputed)((()=>{if(s.MagicTransition.native.value)return!1;const{step:n}=t.stage.value;switch(n){case o.ViewTransitionStage.FreezeScreen:case o.ViewTransitionStage.DOMUpdate:case o.ViewTransitionStage.CaptureNew:case o.ViewTransitionStage.StartAnimations:case o.ViewTransitionStage.CreateAnimations:case o.ViewTransitionStage.Complete:return!0;default:return!1}})),u=(0,n.useComputed)((()=>{if(s.MagicTransition.native.value)return!1;const{step:n}=t.stage.value;switch(n){case o.ViewTransitionStage.CaptureOld:case o.ViewTransitionStage.FreezeScreen:case o.ViewTransitionStage.DOMUpdate:case o.ViewTransitionStage.CaptureNew:case o.ViewTransitionStage.StartAnimations:case o.ViewTransitionStage.CreateAnimations:return!0;default:return!1}}));return(0,n.useSignalEffect)((()=>{const n=t.scope.value||document.body,{style:o}=n,l=c.value;o.setProperty('--view-transition_visibility',l?'hidden':'visible'),o.setProperty('--view-transition_pointer-events',l?'none':'auto'),o.setProperty('--view-transition_overflow',l?'hidden':'visible'),s.MagicTransition.native.value||document.documentElement.classList.toggle('view-transition',u.value)})),null}));e.RootStyleSync=c}),"a94de2",["a27fc3","265637","83da1f","64bb33"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useOnResize=function({skip:c,element:s,onlyWhen:o,onResize:l}){const{waitForResizeObserver:f}=(0,u.useWaitForResizeObserverPolyfill)(),h=(0,n.useRef)(null),v=(0,n.useRef)(null),R=(0,n.useRef)(null),b=(0,n.useRef)(null),z=(0,t.useEvent)((n=>{let t,u;if(n[0].borderBoxSize?.length){const{blockSize:c,inlineSize:s}=n[0].borderBoxSize[0];u=c,t=s}else u=n[0].contentRect.height,t=n[0].contentRect.width;u!==h.current&&(R.current=h.current,h.current=u),t!==v.current&&(b.current=v.current,v.current=t),o&&!o({entries:n,height:u,previousHeight:R.current,previousWidth:b.current,width:t})||l({entries:n,previousHeight:R.current,previousWidth:b.current,width:t,height:u})})),p=(0,n.useRef)(null),w=(0,n.useRef)(s),O=(0,n.useRef)(s?[{element:s}]:[]),k=(0,n.useCallback)(((n,t)=>{p.current?p.current?.observe(n,t):O.current.push({element:n,options:t})}),[]),S=(0,n.useCallback)((n=>{p.current?.unobserve(n)}),[]);w.current!==s&&(w.current&&S(w.current),s&&(k(s),w.current=s));const W=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(!c){if(!W.current){if(!('ResizeObserver'in window))return void f().then((()=>{W.current=!0,n()}));W.current=!0}return n(),()=>p.current?.disconnect()}function n(){p.current=new ResizeObserver(z),O.current.forEach((({element:n,options:t})=>{k(n,t)})),O.current=[]}}),[c,W,z,k,f]),{observe:k,unobserve:S}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"aac0d2",["a27fc3","f4e9c4","7f17e4"]);
__d((function(g,r,i,a,m,e,d){
/**
   * @license React
   * react-jsx-dev-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
'use strict';var t=Symbol.for("react.fragment");e.Fragment=t,e.jsxDEV=void 0}),"b1e39b",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useElementSize=function(l){const{element:s,monitor:c,skip:h,mode:o,onSizeChanged:f,threshold:v=5}=l||{},b=(0,n.useRef)(h),p=(0,n.useRef)(null),k=(0,n.useRef)(null),w=(0,n.useCallback)((n=>{k.current=n}),[]),[R,S]=(0,n.useState)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),y=(0,t.useSignal)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),{observe:z,unobserve:W}=(0,u.useOnResize)({skip:h,onlyWhen:({height:n,previousHeight:t,previousWidth:u,width:l})=>{const s=null===t||Math.abs(n-t)>v,h=null===u||Math.abs(l-u)>v;return'height'===c?s:'width'===c?h:h||s},onResize:n=>{const t={...n,target:p.current};switch(o){case'callback-only':f?.(t);break;case'signal':y.value=t;break;default:S(t),f?.(t)}}}),_=(0,n.useCallback)(((n,t)=>{p.current!==n&&(p.current&&W(p.current),p.current=n,n&&z(n,t))}),[z,W]);(0,t.useSignalEffect)((()=>{s&&_(s.value)})),b.current!==h&&(b.current=h,h?(k.current=p.current,_(null)):(_(k.current),k.current=null));if('callback-only'===o)return{ref:_};if('signal'===o)return{ref:_,dimensions:y};return{...R,ref:h?w:_}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"c376e0",["a27fc3","e086eb","aac0d2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeMoveEffect=void 0;var t=r(d[0]),n=r(d[1]);const o='relative-move',v=t=>{if(!t)return'';let v='';const{startX:f,startY:s,endX:l,endY:c,startScale:w,endScale:_}=t,p=new Map;return(0,n.setIfDefined)('--view-transition-relative-move-effect_from-x',f,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_from-y',s,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-x',l,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-y',c,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_scale-from',w,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_scale-to',_,p),(0,n.setCommonOptions)(o,t,p),p.forEach(((t,n)=>{v+=`${n}: ${t};`})),v},f=t.cssFragment`
  /* normal blending to allow new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;
  --view-transition-fade-effect_opacity-from: 1;

  @keyframes ${o} {
    from {
      filter: var(--view-transition_from-filter);
      visibility: visible;
      transform: translate(
        var(--view-transition-relative-move-effect_from-x, 0),
        var(--view-transition-relative-move-effect_from-y, 0)
      );
      scale: var(--view-transition-relative-move-effect_scale-from, 1);
    }

    to {
      filter: var(--view-transition_to-filter);
      transform: translate(
        var(--view-transition-relative-move-effect_to-x, 0),
        var(--view-transition-relative-move-effect_to-y, 0)
      );
      scale: var(--view-transition-relative-move-effect_scale-to, 1);
    }
  }
`,s={name:o,align:()=>"\n    margin-top: calc(\n      var(--view-transition-group-new_top, 0) - var(--view-transition-group-old_top, 0)\n    );\n  ",apply:n=>t.cssFragment`
      ${f}
      ${v(n)}
      animation: ${s.animation};
    `,animation:(0,n.makeAnimationDefaults)(o)};e.RelativeMoveEffect=s}),"c78ea4",["4786a8","d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.StaticTransitionElement=function({className:t,content:_,inert:c}){const l=(0,n.useCx)();return(0,s.jsx)("div",{"data-static-element-wrapper":!0,className:l(c&&o,t),dangerouslySetInnerHTML:{__html:_||''},style:c?void 0:{width:'100%'}})};t(r(d[1])),r(d[2]);var n=r(d[3]),s=r(d[4]);const o="wy88p0g atm_9s_1txwivl atm_e2_1osqo2v atm_vy_1osqo2v"}),"c850f3",["ba7a76","a27fc3","ea4b89","4786a8","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionOld=function({group:t}){const v=(0,_.useCx)(),p=(0,l.useSignal)(t.imagePair.old),y=(0,n.useRef)(null),{stage:q}=c.MagicTransition.instance,{step:h}=q.value,{ref:w}=(0,s.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{(t>0||n>0)&&(p.value.ready.value=!0)},skip:p.value.ready.value}),C=(0,o.readyToApply)(t,'old'),k=!!y.current?.querySelector('[data-scrollable="true"]');return(0,u.jsx)("div",{ref:t=>{y.current=t,(0,o.attachTransitionElement)({element:t,setRoot:w,transitionElement:p})},className:v(f.container,C&&'view-transition-old',k&&'scrollContent'),style:{top:(()=>{if('FreezeScreen'!==h&&'DOMUpdate'!==h&&'CaptureNew'!==h)return 0;if(y.current&&y.current.firstChild&&y.current.firstChild.firstChild){const t=y.current.firstChild.firstChild,{y:n}=t.getBoundingClientRect();return p.value.dimensions.y-n+"px"}})()},...C,children:p.value.element})};var n=t(r(d[1])),_=(r(d[2]),r(d[3])),s=r(d[4]),l=r(d[5]),c=r(d[6]),o=(r(d[7]),r(d[8])),u=r(d[9]);const f={container:"cycesm atm_e2_1wugsn5 atm_fq_idpfg4 atm_jd_1lh6wy9 atm_mk_stnw88 atm_tk_idpfg4 atm_vy_1osqo2v atm_uoiimy_15vqwwr_k0svna atm_fq_idpfg4_1gcqmc9 atm_tk_idpfg4_1gcqmc9 atm_gi_idpfg4_1gcqmc9 atm_v1_idpfg4_1gcqmc9 atm_k4_kb7nvz_1gcqmc9 atm_am_kb7nvz_1gcqmc9 atm_e2_1osqo2v_2bsxw8 atm_j6_t94yts_2bsxw8 atm_e2_1osqo2v_1nidq11"}}),"cc5217",["45f788","a27fc3","ea4b89","4786a8","c376e0","265637","83da1f","e9cc00","1bd331","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(n){return`--view-transition-${n}-effect`}function t(t,o,u){const s=n(t);return void 0!==u?`var(${s}_${o}, var(--view-transition_${o}, ${u}))`:`var(${s}_${o}, var(--view-transition_${o}))`}Object.defineProperty(e,"__esModule",{value:!0}),e.makeAnimationDefaults=function(n,u){const{delay:s,duration:c,timingFunction:$}={...o,...u},v=`var(--reduced-motion_duration, ${t(n,'duration',`${c}ms`)})`,f=t(n,'timing-function',$),_=t(n,'delay',s);return`${v} ${f} ${_} 1 normal var(--view-transition_fill-mode, both) var(--view-transition_play-state,paused) ${n}`},e.setCommonOptions=function(t,o,s){const c=n(t),{duration:$,delay:v,timingFunction:f}=o,_='number'==typeof v?`${v}ms`:v;u(`${c}_duration`,$?`${$}ms`:void 0,s),u(`${c}_transition_timing-function`,f,s),u(`${c}_delay`,_,s)},e.setIfDefined=u;const o={delay:'0ms',duration:200,timingFunction:r(d[0]).theme.motion.standardCurve.animationTimingFunction};function u(n,t,o){void 0!==t&&o.set(n,t)}}),"d3ae23",["4786a8"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]),n=r(d[1]);const o='move',s=t=>{if(!t)return'';let s='';const{startX:f,startY:v,endX:w,endY:_}=t,h=new Map;return(0,n.setIfDefined)('--view-transition-move-effect_from-x',f,h),(0,n.setIfDefined)('--view-transition-move-effect_from-y',v,h),(0,n.setIfDefined)('--view-transition-move-effect_to-x',w,h),(0,n.setIfDefined)('--view-transition-move-effect_to-y',_,h),(0,n.setCommonOptions)(o,t,h),h.forEach(((t,n)=>{s+=`${n}: ${t};`})),s},f=t.cssFragment`
  @keyframes move {
    from {
      height: var(--view-transition-group-old_height);
      width: var(--view-transition-group-old_width);
      transform: translate(
        var(--view-transition-move-effect_from-x, 0),
        var(--view-transition-move-effect_from-y, 0)
      );
    }

    to {
      height: var(--view-transition-group-new_height);
      width: var(--view-transition-group-new_width);
      transform: translate(var(--view-transition_to-x, 0), var(--view-transition_to-y, 0));
    }
  }
`,v={name:o,apply:n=>t.cssFragment`
      /* normal blending to allow new view to
    sit on top & hide old view */
      --view-transition_mix-blend-mode: normal;

      ${f}
      ${s(n)}
      animation: ${v.animation};
    `,animation:(0,n.makeAnimationDefaults)(o)}}),"d79a65",["4786a8","d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeVariablesForDimensions=function(t,o){return{[`--${t}_bottom`]:`${o.bottom}px`,[`--${t}_height`]:`${o.height}px`,[`--${t}_left`]:`${o.left}px`,[`--${t}_right`]:`${o.right}px`,[`--${t}_top`]:`${o.top}px`,[`--${t}_width`]:`${o.width}px`}}}),"d7d648",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.descendantElements=function(){return'[data-static-element-wrapper] > [view-transition-element] [view-transition-element]'},e.frozenViewTransition=function(n){return`[frozen-view-transition-${n}]`}}),"dbb634",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionGroup=function({group:n}){const _=(0,t.useCx)();let p={};const c=(0,o.useSignal)(n.transition.stage);null!==n.imagePair.old.value&&(p={...p,'--view-transition-group_default-z-index':`${n.order}`,...(0,l.makeVariablesForDimensions)('view-transition-group-old',n.imagePair.old.value.dimensions)});null!==n.imagePair.new.value&&(p={...p,'--view-transition-group_default-z-index':`${n.order}`,...(0,l.makeVariablesForDimensions)('view-transition-group-new',n.imagePair.new.value.dimensions)});if(null!==n.imagePair.new.value&&null!==n.imagePair.old.value){const t=n.imagePair.old.value.dimensions,o=n.imagePair.new.value.dimensions;p={...p,'--view-transition_to-x':o.left-t.left+"px",'--view-transition_to-y':o.top-t.top+"px"}}const f=(0,o.useComputed)((()=>{switch(c.value.step){case s.ViewTransitionStage.CreateAnimations:case s.ViewTransitionStage.StartAnimations:case s.ViewTransitionStage.Complete:return!0;default:return!1}}));return(0,v.jsx)("div",{className:_(w.viewTransitionGroup,f.value&&w.viewTransitionGroup_ready,'view-transition-group'),"view-transition-group":n.name,style:p,children:(0,v.jsx)(u.ViewTransitionImagePair,{group:n})})};n(r(d[1])),r(d[2]);var t=r(d[3]),o=r(d[4]),s=r(d[5]),u=r(d[6]),l=r(d[7]),v=(r(d[8]),r(d[9]));const w={viewTransitionGroup:"vzn3yxr atm_mk_stnw88 atm_fq_1m3yd0t atm_e2_1b79tz6 atm_tk_188z2w6 atm_vy_1x8kabd atm_wq_18yhkr9",viewTransitionGroup_ready:"v1gapt2j atm_1wocbx7_ewfl5b atm_kmfq6o_4jg895 atm_p_r0455r"}}),"df7672",["ba7a76","a27fc3","ea4b89","4786a8","265637","64bb33","e87ed7","d7d648","d79a65","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"batch",{enumerable:!0,get:function(){return n().batch}}),Object.defineProperty(e,"computed",{enumerable:!0,get:function(){return n().computed}}),Object.defineProperty(e,"effect",{enumerable:!0,get:function(){return n().effect}}),Object.defineProperty(e,"signal",{enumerable:!0,get:function(){return n().signal}}),Object.defineProperty(e,"useComputed",{enumerable:!0,get:function(){return t.useComputed}}),Object.defineProperty(e,"useSignal",{enumerable:!0,get:function(){return t.useSignal}}),Object.defineProperty(e,"useSignalEffect",{enumerable:!0,get:function(){return t.useSignalEffect}}),Object.defineProperty(e,"useSignalToRef",{enumerable:!0,get:function(){return u.useSignalToRef}}),Object.defineProperty(e,"useSignals",{enumerable:!0,get:function(){return t.useSignals}});var t=r(d[1]),u=r(d[2])}),"e086eb",["a954a0","250cdf","2637d5"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionImagePair=function({group:n}){const c=(0,t.useCx)(),w=(0,s.useSignal)(n.imagePair.old),_=(0,s.useSignal)(n.imagePair.new);return(0,l.jsxs)("div",{"view-transition-image-pair":n.name,className:c(v.viewTransitionImagePair,'view-transition-image-pair'),children:[null!==w.value&&(0,l.jsx)(u.ViewTransitionOld,{group:n}),null!==_.value&&(0,l.jsx)(o.ViewTransitionNew,{group:n})]})};n(r(d[1])),r(d[2]);var t=r(d[3]),s=r(d[4]),o=r(d[5]),u=r(d[6]),l=r(d[7]);const v={viewTransitionImagePair:"vcfxpj2 atm_fb_1cl4t0h atm_mk_stnw88 atm_f3_idpfg4"}}),"e87ed7",["ba7a76","a27fc3","ea4b89","4786a8","265637","63fa06","cc5217","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FadeEffect=void 0;var t=r(d[0]),n=r(d[1]);const o='fade',f=t=>{if(!t)return'';let f='';const{startOpacity:c,endOpacity:s}=t,p=new Map;return(0,n.setIfDefined)('--view-transition-fade-effect_opacity-from',c,p),(0,n.setIfDefined)('--view-transition-fade-effect_opacity-to',s,p),(0,n.setCommonOptions)(o,t,p),p.forEach(((t,n)=>{f+=`${n}: ${t};`})),f},c=t.cssFragment`
  @keyframes ${o} {
    from {
      opacity: var(--view-transition-fade-effect_opacity-from, 0);
      visibility: visible;
    }
    to {
      opacity: var(--view-transition-fade-effect_opacity-to, 1);
    }
  }
`,s={name:o,apply:n=>t.cssFragment`
      --view-transition_mix-blend-mode: plus-lighter;
      opacity: var(--view-transition-fade-effect_opacity-from);

      ${c}
      ${f(n)}
      animation: ${s.animation};
    `,animation:(0,n.makeAnimationDefaults)(o,{timingFunction:'linear'})};e.FadeEffect=s}),"e9cc00",["4786a8","d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extendPattern=function(s,f){const{newScreenEndX:o,newScreenEndY:c,newScreenStartX:_,newScreenStartY:u,scrimStartBrightness:$,scrimEndBrightness:S}=f,{name:h}=s;let p='';const D=new Map;return(0,n.setIfDefined)(`--${h}_offset-y-to`,c,D),(0,n.setIfDefined)(`--${h}_offset-y-from`,u,D),(0,n.setIfDefined)(`--${h}_offset-x-to`,o,D),(0,n.setIfDefined)(`--${h}_offset-x-from`,_,D),(0,n.setIfDefined)('--scrim-animation_start-brightness',$,D),(0,n.setIfDefined)('--scrim-animation_end-brightness',S,D),(0,n.setCommonOptions)(h,f,D),D.forEach(((n,t)=>{p+=`${t}: ${n};`})),s.mapping.forEach((([n,{key:s,type:o}])=>{if(void 0!==f[s]){const c=t(o||'string',f[s]);p+=`${n}: ${c};`}})),p};var n=r(d[0]);function t(n,t){return'duration'===n?`${t}ms`:t}}),"f3229a",["d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";r(d[0]).cssFragment`
  :root {
    @supports (transition-timing-function: linear(0, 0 0%)) {
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-standard-curve-animation-timing-function: linear(
        0,
        0.02044 2.46%,
        0.08322 5.391%,
        0.46561 17.652%,
        0.63901 24.342%,
        0.76663 31.093%,
        0.85981 38.454%,
        0.92965 47.845%,
        0.97154 59.516%,
        0.99189 74.867%,
        0.9991
      );
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-enter-curve-animation-timing-function: linear(
        0,
        0.01942 1.83%,
        0.07956 4.02%,
        0.47488 13.851%,
        0.65981 19.572%,
        0.79653 25.733%,
        0.89048 32.693%,
        0.95081 41.254%,
        0.98361 52.535%,
        0.99665 68.277%,
        0.99988
      );
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-exit-curve-animation-timing-function: linear(
        0,
        0.01942 1.83%,
        0.07956 4.02%,
        0.47488 13.851%,
        0.65981 19.572%,
        0.79653 25.733%,
        0.89048 32.693%,
        0.95081 41.254%,
        0.98361 52.535%,
        0.99665 68.277%,
        0.99988
      );
    }
  }
`}),"fd0cff",["4786a8"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/magic-transitions/TransitionLayer.27d421821a.js.map