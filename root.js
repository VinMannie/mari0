!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(211),c=n(215),u=r(c),s=n(280),f=r(s),l=n(285),d=r(l),h=n(286),p=r(h),v=n(287),m=r(v),y=n(288),w=r(y),g=n(290),E=r(g),b=n(291),x=r(b),_=n(281),R=function(t,e,n,r,i,o,a,c){var u=o/e,s=new THREE.MeshBasicMaterial({color:new THREE.Color(a[0],a[1],a[2])});s.opacity=a[3],s.depthTest=!1,s.depthWrite=!1;var f=new THREE.MeshBasicMaterial({color:new THREE.Color(c[0],c[1],c[2])});f.opacity=c[3],f.depthTest=!1,f.depthWrite=!1;for(var l=0;l<e;l++){var d=r+l*u,h=new THREE.Mesh((0,x.default)(n,d,i,u),s),p=new THREE.Mesh((0,x.default)(n,d,i,l*u/e),f);h.geometry.dynamic=!0,p.geometry.dynamic=!0,t.add(h),t.add(p)}},T=0,P=function(){function t(e){i(this,t),this.context=e,this.defaultProgram=(0,m.default)(this.context,"\n      attribute vec3 VertexPosition;\n      uniform mediump mat4 Projection;\n\n      void main() {\n       gl_Position = Projection * vec4(VertexPosition, 1.0);\n      }","\n      uniform mediump vec4 GlobalColor;\n\n      void main() {\n        gl_FragColor = GlobalColor;\n      }"),this.context.useProgram(this.defaultProgram),this.enterState()}return o(t,[{key:"enterState",value:function(){this.handleClick=this.handleClick.bind(this),this.context.canvas.addEventListener("click",this.handleClick)}},{key:"update",value:function(t){T+=t,this.width=this.context.canvas.scrollWidth,this.height=this.context.canvas.scrollHeight;var e=this.width,n=this.height;if(this.renderer)this.arrow.material.opacity=Math.min(this.arrow.material.opacity+t/4,1),this.renderer.render(this.scene2D,this.camera2D,null,!0),this.renderer.render(this.scene,this.camera);else{var r=(0,E.default)(0,e,n,0),i=this.context.getUniformLocation(this.defaultProgram,"Projection");if(this.context.uniformMatrix4fv(i,this.context.FALSE,r),this.draw(t),THREE){this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(75,e/n,.1,1e3),this.camera.position.z=5,this.scene2D=new THREE.Scene,this.camera2D=new THREE.OrthographicCamera(0,e,0,n,.1,1e3);var o=n/4,a=n/4+n/3,c=a-o,u=a,s=a+n/3,f=s-u;R(this.scene2D,12,0,o,e,c,_.CLEAR,_.LGREEN),R(this.scene2D,12,0,u,e,f,_.LGREEN,_.DGREEN);var l=new THREE.Mesh((0,x.default)(0,s,e,n-s),new THREE.MeshBasicMaterial({color:new THREE.Color(_.DGREEN[0],_.DGREEN[1],_.DGREEN[2]),depthTest:!1,depthWrite:!1}));l.geometry.dynamic=!0,this.scene2D.add(l),this.renderer=new THREE.WebGLRenderer({canvas:this.context.canvas,context:this.context}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.autoClear=!1,this.renderer.setSize(this.width,this.height);var d=new THREE.TetrahedronGeometry(1);d.faces[0].color.setRGB(0,0,0),d.faces[1].color.setRGB(1,119/255,170/255),d.faces[2].color.setRGB(170/255,1,119/255),d.faces[3].color.setRGB(119/255,170/255,1);var h=new THREE.MeshBasicMaterial({transparent:!0,opacity:0,vertexColors:THREE.FaceColors});this.arrow=new THREE.Mesh(d,h),this.arrow.scale.set(.2,.2,.2),this.arrow.position.y=-3.5,this.arrow.lookAt(this.camera.position),this.arrow.rotateY(.25*Math.PI),this.arrow.rotateX(.5*Math.PI),this.scene.add(this.arrow);var p=new THREE.AmbientLight(16777215,1);this.scene.add(p);var v=new THREE.PointLight(16777215,1);v.position.set(0,0,this.camera.position.z),this.scene.add(v)}}}},{key:"draw",value:function(){var t=this.context,e=this.width,n=this.height;t.clearColor(1,1,1,1),t.clear(t.COLOR_BUFFER_BIT);var r=t.getUniformLocation(this.defaultProgram,"GlobalColor"),i=n/4,o=n/4+n/3,a=o-i,c=o,u=o+n/3,s=u-c;this.drawLineColorTransition(12,0,i,e,a,_.CLEAR,_.LGREEN),t.uniform4f(r,_.LGREEN[0],_.LGREEN[1],_.LGREEN[2],_.LGREEN[3]),(0,w.default)(t,this.defaultProgram,0,o,e,n-o),this.drawLineColorTransition(12,0,c,e,s,_.LGREEN,_.DGREEN),t.uniform4f(r,_.DGREEN[0],_.DGREEN[1],_.DGREEN[2],_.DGREEN[3]),(0,w.default)(t,this.defaultProgram,0,u,e,n-u)}},{key:"drawLineColorTransition",value:function(t,e,n,r,i,o,a){for(var c=this.context,u=c.getUniformLocation(this.defaultProgram,"GlobalColor"),s=i/t,f=0;f<t;f++){var l=n+f*s;c.uniform4f(u,o[0],o[1],o[2],o[3]),(0,w.default)(c,this.defaultProgram,e,l,r,s),c.uniform4f(u,a[0],a[1],a[2],a[3]),(0,w.default)(c,this.defaultProgram,e,l,r,f*s/t)}}},{key:"handleClick",value:function(t){var e=new THREE.Raycaster,n=new THREE.Vector2;n.x=t.x/this.width*2-1,n.y=2*-(t.y/this.height)+1,e.setFromCamera(n,this.camera);for(var r=e.intersectObjects(this.scene.children),i=!1,o=0;o<r.length;o++)if(r[o].object===this.arrow){i=!0;break}i&&(this.arrowTargetRotation=this.arrow.quaternion.clone(),this.gotoState("Opening"))}},{key:"exitState",value:function(){this.arrow.material.opacity=1,this.context.canvas.removeEventListener("click",this.handleClick)}}]),t}(),S=function(){var t=document.getElementById("bgCanvas");t.width=t.scrollWidth*window.devicePixelRatio,t.height=t.scrollHeight*window.devicePixelRatio};window.addEventListener("resize",S),S(),window.THREE=null,(0,u.default)(P),P.addState("Opening",f.default),P.addState("Main",d.default),P.addState("Closing",p.default);var O=new P(document.getElementById("bgCanvas").getContext("webgl"));(0,a.run)(function(t){O.update(t)})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.stopAll=e.stop=e.resume=e.pause=e.run=void 0;var i=n(212),o=r(i),a={},c=0,u=function(){var t=this.timer.delta,e=this.timer.time;this.callback(t,e),a[this.id]&&(this.timer.step(),this.timer.nextFrame(this.update))},s=function(t){var e=new o.default,n=c++,r={id:n,timer:e,callback:t};return r.update=u.bind(r),a[n]=r,e.step(),e.nextFrame(r.update),n},f=function(t){var e=a[t];e&&e.timer.cancelFrame()},l=function(t){var e=a[t];e&&e.timer.nextFrame(e.update)},d=function(t){var e=a[t];e&&(e.timer.cancelFrame(),delete a[t])},h=function(){for(var t in a)d(t)};e.run=s,e.pause=f,e.resume=l,e.stop=d,e.stopAll=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0});var a=n(213),c=r(a),u=n(214),s=0,f=0,l=null,d={},h=function(t){l=null;for(var e in d)d[e](t),delete d[e]},p=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?.25:arguments[0];i(this,t),this.microTime=(0,c.default)(),this.deltaTime=0,this.deltaTimeLimit=e,this.animationFrameID=null}return o(t,[{key:"cancelFrame",value:function(){delete d[this.animationFrameID],0===s&&((0,u.cancelAnimationFrame)(l),l=null)}},{key:"nextFrame",value:function(t){var e=f++;s++,d[e]=t,this.animationFrameID=e,null===l&&(l=(0,u.requestAnimationFrame)(h))}},{key:"step",value:function(){var t=(0,c.default)()-this.microTime;return this.deltaTime=Math.max(0,Math.min(this.deltaTimeLimit,t/1e3)),this.microTime+=t}},{key:"delta",get:function(){return this.deltaTime}},{key:"fps",get:function(){return 0===this.deltaTime?0:1/this.deltaTime}},{key:"time",get:function(){return this.microTime}}]),t}();e.default=p},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
// @license http://opensource.org/licenses/MIT
var n="performance"in window?window.performance:{},r=Date.now||function(){return(new Date).getTime()},i=void 0;if("now"in n==0){var o=r();n.timing&&n.timing.navigationStart&&(o=n.timing.navigationStart),i=function(){return r()-o}}else i=n.now.bind(n);e.default=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var n=e.requestAnimationFrame=window.requestAnimationFrame,r=e.cancelAnimationFrame=window.cancelAnimationFrame,i=0,o=["ms","moz","webkit","o"],a=0;a<o.length&&!n;++a)e.requestAnimationFrame=n=window[o[a]+"RequestAnimationFrame"],e.cancelAnimationFrame=r=window[o[a]+"CancelAnimationFrame"]||window[o[a]+"CancelRequestAnimationFrame"];n||(e.requestAnimationFrame=n=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),r=window.setTimeout(function(){t(e+n)},n);return i=e+n,r}),r||(e.cancelAnimationFrame=r=function(t){clearTimeout(t)})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(216),a=r(o),c=n(263),u=r(c),s="function",f=function(t){return("undefined"==typeof t?"undefined":i(t))===s},l="DEFAULT_NO_STATE",d=function(t){if(!(t instanceof Object))throw new TypeError('Value of argument "klass" violates contract, expected Object got '+(null===t?"null":"object"===("undefined"==typeof t?"undefined":i(t))&&t.constructor?t.constructor.name||"[Unknown Object]":"undefined"==typeof t?"undefined":i(t)));var e=new a.default,n={},r={};for(var o in t.prototype)if(t.prototype.hasOwnProperty(o)){var c=t.prototype[o];n[o]=c}t.prototype.gotoState=function(){var t=arguments.length<=0||void 0===arguments[0]?l:arguments[0];if("string"!=typeof t)throw new TypeError('Value of argument "stateName" violates contract, expected string got '+(null===t?"null":"object"===("undefined"==typeof t?"undefined":i(t))&&t.constructor?t.constructor.name||"[Unknown Object]":"undefined"==typeof t?"undefined":i(t)));var o=e.get(this),a=r[o],c=r[t];if(f(this.exitState)&&this.exitState(),null!==a)for(var s in a)a.hasOwnProperty(s)&&u.default.deleteProperty(this,s);if(c?Object.assign(this,c):Object.assign(this,n),e.set(this,t),f(this.enterState)){for(var d=arguments.length,h=Array(d>1?d-1:0),p=1;p<d;p++)h[p-1]=arguments[p];this.enterState.apply(this,h)}},t.addState=function(t,e){if("string"!=typeof t)throw new TypeError('Value of argument "stateName" violates contract, expected string got '+(null===t?"null":"object"===("undefined"==typeof t?"undefined":i(t))&&t.constructor?t.constructor.name||"[Unknown Object]":"undefined"==typeof t?"undefined":i(t)));if(!(e instanceof Object))throw new TypeError('Value of argument "state" violates contract, expected Object got '+(null===e?"null":"object"===("undefined"==typeof e?"undefined":i(e))&&e.constructor?e.constructor.name||"[Unknown Object]":"undefined"==typeof e?"undefined":i(e)));r[t]=e}};e.default=d},function(t,e,n){n(217),n(218),n(245),t.exports=n(230).WeakMap},function(t,e){},function(t,e,n){"use strict";var r=n(219),i=n(220),o=n(221),a=n(222);t.exports=n(226)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,n){var r=n(223),i=n(225);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(224);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(227),i=n(228),o=n(233),a=n(234),c=n(239),u=n(221),s=n(240),f=n(241),l=n(235).getProto,d=n(242)("iterator"),h=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",m="values",y=function(){return this};t.exports=function(t,e,n,w,g,E,b){s(n,e,w);var x,_,R=function(t){if(!h&&t in O)return O[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},T=e+" Iterator",P=g==m,S=!1,O=t.prototype,j=O[d]||O[p]||g&&O[g],M=j||R(g);if(j){var A=l(M.call(new t));f(A,T,!0),!r&&c(O,p)&&a(A,d,y),P&&j.name!==m&&(S=!0,M=function(){return j.call(this)})}if(r&&!b||!h&&!S&&O[d]||a(O,d,M),u[e]=M,u[T]=y,g)if(x={values:P?M:R(m),keys:E?M:R(v),entries:P?R("entries"):M},b)for(_ in x)_ in O||o(O,_,x[_]);else i(i.P+i.F*(h||S),e,x);return x}},function(t,e){t.exports=!0},function(t,e,n){var r=n(229),i=n(230),o=n(231),a="prototype",c=function(t,e,n){var u,s,f,l=t&c.F,d=t&c.G,h=t&c.S,p=t&c.P,v=t&c.B,m=t&c.W,y=d?i:i[e]||(i[e]={}),w=d?r:h?r[e]:(r[e]||{})[a];d&&(n=e);for(u in n)s=!l&&w&&u in w,s&&u in y||(f=s?w[u]:n[u],y[u]=d&&"function"!=typeof w[u]?n[u]:v&&s?o(f,r):m&&w[u]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[a]=t[a],e}(f):p&&"function"==typeof f?o(Function.call,f):f,p&&((y[a]||(y[a]={}))[u]=f))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(232);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=n(234)},function(t,e,n){var r=n(235),i=n(236);t.exports=n(237)?function(t,e,n){return r.setDesc(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=!n(238)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";var r=n(235),i=n(236),o=n(241),a={};n(234)(a,n(242)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r.create(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(235).setDesc,i=n(239),o=n(242)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(243)("wks"),i=n(244),o=n(229).Symbol;t.exports=function(t){return r[t]||(r[t]=o&&o[t]||(o||i)("Symbol."+t))}},function(t,e,n){var r=n(229),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(235),i=n(233),o=n(246),a=n(249),c=n(239),u=o.frozenStore,s=o.WEAK,f=Object.isExtensible||a,l={},d=n(262)("WeakMap",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){if(a(t)){if(!f(t))return u(this).get(t);if(c(t,s))return t[s][this._i]}},set:function(t,e){return o.def(this,t,e)}},o,!0,!0);7!=(new d).set((Object.freeze||Object)(l),7).get(l)&&r.each.call(["delete","has","get","set"],function(t){var e=d.prototype,n=e[t];i(e,t,function(e,r){if(a(e)&&!f(e)){var i=u(this)[t](e,r);return"set"==t?this:i}return n.call(this,e,r)})})},function(t,e,n){"use strict";var r=n(234),i=n(247),o=n(248),a=n(249),c=n(250),u=n(251),s=n(258),f=n(239),l=n(244)("weak"),d=Object.isExtensible||a,h=s(5),p=s(6),v=0,m=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},w=function(t,e){return h(t.a,function(t){return t[0]===e})};y.prototype={get:function(t){var e=w(this,t);if(e)return e[1]},has:function(t){return!!w(this,t)},set:function(t,e){var n=w(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,r){var o=t(function(t,i){c(t,o,e),t._i=v++,t._l=void 0,void 0!=i&&u(i,n,t[r],t)});return i(o.prototype,{delete:function(t){return!!a(t)&&(d(t)?f(t,l)&&f(t[l],this._i)&&delete t[l][this._i]:m(this).delete(t))},has:function(t){return!!a(t)&&(d(t)?f(t,l)&&f(t[l],this._i):m(this).has(t))}}),o},def:function(t,e,n){return d(o(e))?(f(e,l)||r(e,l,{}),e[l][t._i]=n):m(t).set(e,n),t},frozenStore:m,WEAK:l}},function(t,e,n){var r=n(233);t.exports=function(t,e){for(var n in e)r(t,n,e[n]);return t}},function(t,e,n){var r=n(249);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError(n+": use the 'new' operator!");return t}},function(t,e,n){var r=n(231),i=n(252),o=n(253),a=n(248),c=n(254),u=n(256);t.exports=function(t,e,n,s){var f,l,d,h=u(t),p=r(n,s,e?2:1),v=0;if("function"!=typeof h)throw TypeError(t+" is not iterable!");if(o(h))for(f=c(t.length);f>v;v++)e?p(a(l=t[v])[0],l[1]):p(t[v]);else for(d=h.call(t);!(l=d.next()).done;)i(d,p,l.value,e)}},function(t,e,n){var r=n(248);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(221),i=n(242)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(255),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(257),i=n(242)("iterator"),o=n(221);t.exports=n(230).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(224),i=n(242)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[i])?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(231),i=n(223),o=n(259),a=n(254),c=n(260);t.exports=function(t){var e=1==t,n=2==t,u=3==t,s=4==t,f=6==t,l=5==t||f;return function(d,h,p){for(var v,m,y=o(d),w=i(y),g=r(h,p,3),E=a(w.length),b=0,x=e?c(d,E):n?c(d,0):void 0;E>b;b++)if((l||b in w)&&(v=w[b],m=g(v,b,y),t))if(e)x[b]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:x.push(v)}else if(s)return!1;return f?-1:u||s?s:x}}},function(t,e,n){var r=n(225);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(249),i=n(261),o=n(242)("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&(n=n[o],null===n&&(n=void 0))),new(void 0===n?Array:n)(e)}},function(t,e,n){var r=n(224);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(235),i=n(229),o=n(228),a=n(238),c=n(234),u=n(247),s=n(251),f=n(250),l=n(249),d=n(241),h=n(237);t.exports=function(t,e,n,p,v,m){var y=i[t],w=y,g=v?"set":"add",E=w&&w.prototype,b={};return h&&"function"==typeof w&&(m||E.forEach&&!a(function(){(new w).entries().next()}))?(w=e(function(e,n){f(e,w,t),e._c=new y,void 0!=n&&s(n,v,e[g],e)}),r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","),function(t){var e="add"==t||"set"==t;t in E&&(!m||"clear"!=t)&&c(w.prototype,t,function(n,r){if(!e&&m&&!l(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,r);return e?this:i})}),"size"in E&&r.setDesc(w.prototype,"size",{get:function(){return this._c.size}})):(w=p.getConstructor(e,t,v,g),u(w.prototype,n)),d(w,t),b[t]=w,o(o.G+o.W+o.F,b),m||p.setStrong(w,t,v),w}},function(t,e,n){n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(276),n(277),n(278),t.exports=n(230).Reflect},function(t,e,n){var r=n(228),i=Function.apply,o=n(248);r(r.S,"Reflect",{apply:function(t,e,n){return i.call(t,e,o(n))}})},function(t,e,n){var r=n(235),i=n(228),o=n(232),a=n(248),c=n(249),u=Function.bind||n(230).Function.prototype.bind;i(i.S+i.F*n(238)(function(){function t(){}return!(Reflect.construct(function(){},[],t)instanceof t)}),"Reflect",{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(u.apply(t,i))}var s=n.prototype,f=r.create(c(s)?s:Object.prototype),l=Function.apply.call(t,f,e);return c(l)?l:f}})},function(t,e,n){var r=n(235),i=n(228),o=n(248);i(i.S+i.F*n(238)(function(){Reflect.defineProperty(r.setDesc({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){o(t);try{return r.setDesc(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(228),i=n(235).getDesc,o=n(248);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(228),i=n(248),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(240)(o,"Object",function(){var t,e=this,n=e._k;do if(e._i>=n.length)return{value:void 0,done:!0};while(!((t=n[e._i++])in e._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,n){function r(t,e){var n,a,s=arguments.length<3?t:arguments[2];return u(t)===s?t[e]:(n=i.getDesc(t,e))?o(n,"value")?n.value:void 0!==n.get?n.get.call(s):void 0:c(a=i.getProto(t))?r(a,e,s):void 0}var i=n(235),o=n(239),a=n(228),c=n(249),u=n(248);a(a.S,"Reflect",{get:r})},function(t,e,n){var r=n(235),i=n(228),o=n(248);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.getDesc(o(t),e)}})},function(t,e,n){var r=n(228),i=n(235).getProto,o=n(248);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,n){var r=n(228);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(228),i=n(248),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,n){var r=n(228);r(r.S,"Reflect",{ownKeys:n(275)})},function(t,e,n){var r=n(235),i=n(248),o=n(229).Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.getNames(i(t)),n=r.getSymbols;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(228),i=n(248),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,n){function r(t,e,n){var a,f,l=arguments.length<4?t:arguments[3],d=i.getDesc(u(t),e);if(!d){if(s(f=i.getProto(t)))return r(f,e,n,l);d=c(0)}return o(d,"value")?!(d.writable===!1||!s(l))&&(a=i.getDesc(l,e)||c(0),a.value=n,i.setDesc(l,e,a),!0):void 0!==d.set&&(d.set.call(l,n),!0)}var i=n(235),o=n(239),a=n(228),c=n(236),u=n(248),s=n(249);a(a.S,"Reflect",{set:r})},function(t,e,n){var r=n(228),i=n(279);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){var r=n(235).getDesc,i=n(249),o=n(248),a=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(231)(Function.call,r(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(281),o=n(282),a=r(o),c=n(283),u=r(c),s=n(284),f=r(s),l=document.getElementById("overlay"),d={enterState:function(){this.t=0},update:function(t){this.t+=t;var e=this.t/i.targetTransitionTime,n=this.width,r=this.height,o=r-(0,a.default)(0,1,e)*r;l.style.opacity=1-e;var c=o/4,s=o/4+o/3,d=s-c,h=s,p=s+o/3,v=p-h;(0,f.default)(this.scene2D,0,12,0,c,n,d),(0,f.default)(this.scene2D,24,12,0,h,n,v);var m=this.scene2D.children[48].geometry;(0,u.default)(m.vertices,0,p,n,r-p),m.verticesNeedUpdate=!0,this.arrow.position.y=7*(0,a.default)(0,1,e)-3.5,this.arrow.lookAt(this.camera.position),this.arrow.rotateY(.25*Math.PI),this.arrow.rotateX(.5*Math.PI+e*Math.PI*.5),this.renderer.render(this.scene2D,this.camera2D,null,!0),this.renderer.render(this.scene,this.camera),this.t>=i.targetTransitionTime&&this.gotoState("Main")},exitState:function(){delete this.t}};e.default=d},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.targetTransitionTime=2,e.CLEAR=[0,0,0,0],e.LGREEN=[.5,.66,.6,1],e.DGREEN=[.23,.53,.45,1]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){return Math.max(e,Math.min(t,n))},r=function(t,e,r){var i=n((r-t)/(e-t),0,1);return i*i*(3-2*i)};e.default=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,r,i){t[0].set(e+0,n+0,-1),t[1].set(e+r,n+0,-1),t[2].set(e+0,n+i,-1),t[3].set(e+r,n+i,-1)};e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(283),o=r(i),a=function(t,e,n,r,i,a,c){for(var u=c/n,s=0;s<n;s++){var f=i+s*u,l=t.children[e+2*s].geometry,d=t.children[e+2*s+1].geometry;(0,o.default)(l.vertices,r,f,a,u),(0,o.default)(d.vertices,r,f,a,s*u/n),l.verticesNeedUpdate=!0,d.verticesNeedUpdate=!0}};e.default=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=document.getElementById("overlay"),r={enterState:function(){n.style.display="none",this.handleClick=this.handleClick.bind(this),this.context.canvas.addEventListener("click",this.handleClick)},update:function(t){this.arrow.rotation.y+=t,this.renderer.render(this.scene2D,this.camera2D,null,!0),this.renderer.render(this.scene,this.camera)},handleClick:function(t){var e=new THREE.Raycaster,n=new THREE.Vector2;n.x=t.x/this.width*2-1,n.y=2*-(t.y/this.height)+1,e.setFromCamera(n,this.camera);for(var r=e.intersectObjects(this.scene.children),i=!1,o=0;o<r.length;o++)if(r[o].object===this.arrow){i=!0;break}i&&this.gotoState("Closing")},exitState:function(){n.style.display="",delete this.ui,this.context.canvas.removeEventListener("click",this.handleClick)}};e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(281),o=n(282),a=r(o),c=n(283),u=r(c),s=n(284),f=r(s),l=document.getElementById("overlay"),d={enterState:function(){this.t=0,this.arrowStartRotation=this.arrow.quaternion.clone()},update:function(t){this.t+=t;var e=this.t/i.targetTransitionTime,n=this.width,r=this.height,o=(0,a.default)(0,1,e)*r;l.style.opacity=e;var c=o/4,s=o/4+o/3,d=s-c,h=s,p=s+o/3,v=p-h;(0,f.default)(this.scene2D,0,12,0,c,n,d),(0,f.default)(this.scene2D,24,12,0,h,n,v);var m=this.scene2D.children[48].geometry;(0,u.default)(m.vertices,0,p,n,r-p),m.verticesNeedUpdate=!0,this.arrow.position.y=(0,a.default)(0,1,e)*-7+3.5,THREE.Quaternion.slerp(this.arrowStartRotation,this.arrowTargetRotation,this.arrow.quaternion,e),this.renderer.render(this.scene2D,this.camera2D,null,!0),this.renderer.render(this.scene,this.camera),this.t>=i.targetTransitionTime&&this.gotoState()},exitState:function(){delete this.t,delete this.arrowStartRotation,delete this.arrowTargetRotation}};e.default=d},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){var r=t.createProgram(),i=function(e,n){var i=t.createShader("vertex"===e?t.VERTEX_SHADER:t.FRAGMENT_SHADER);if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error("Could not compile "+e+" shader: "+t.getShaderInfoLog(i));t.attachShader(r,i)};if(i("vertex",e),i("fragment",n),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))throw new Error("Could not link the shader program!");return r};e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(289),o=r(i),a=function(t,e,n,r,i,a){(0,o.default)(t,e,"VertexPosition",3,[n,r,0,n,r+a,0,n+i,r+a,0,n+i,r,0]),t.drawArrays(t.TRIANGLE_FAN,0,4)};e.default=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,r,i){t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);var o=t.getAttribLocation(e,n);t.enableVertexAttribArray(o),t.vertexAttribPointer(o,r,t.FLOAT,!1,0,0)};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,r){var i=new Float32Array(16);return i[0]=2/(e-t),i[5]=2/(r-n),i[10]=-1,i[12]=-(e+t)/(e-t),i[13]=-(r+n)/(r-n),i[15]=1,i};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,r){var i=new THREE.Geometry;return i.vertices=[new THREE.Vector3(t+0,e+0,-1),new THREE.Vector3(t+n,e+0,-1),new THREE.Vector3(t+0,e+r,-1),new THREE.Vector3(t+n,e+r,-1)],i.faces=[new THREE.Face3(0,2,1),new THREE.Face3(2,3,1)],i.computeFaceNormals(),i};e.default=n}])});