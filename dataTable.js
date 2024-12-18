﻿/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define('external/hammer.min',[],function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");

define('util/util',[], function () {

    Warn = function (t) { return { type: 'warning', t: t } }

    Err = function (t) { return { type: 'error', t: t } }

    return {

        dgrToRad: 0.0174532925,

        extend: function (destination, source) {

            if (typeof destination == 'object' &&
                destination.length > 0) {
                var o = new Object()

                destination.forEach((d) => {
                    o = this._extend(o, source);
                    o = this._extend(o, d);
                });
                return o;
            }
            else {
                return this._extend(destination, source);
            }
        },
        _extend: function (source, destination) {
            var destination = destination || new Object();
            for (var k in source) {
                if (source.hasOwnProperty(k)) {
                    destination[k] = source[k];
                }
            }
            return destination;
        },

        mixin: function (baseObject, data) {
            var b = this.extend(new baseObject, data);
            return b;
        },

        round: function (n, decimals) {
            return Number(Math.round(n + 'e' + decimals) + 'e-' + decimals)

        },

        // Wrapper function to enable stack traces in DOM eventhandlers
        eventHandler: function (cb, errorBox) {
            if (typeof cb == 'function') {
                try {
                    return cb();
                }
                catch (err) {
                    console.log(err);
                    if (errorBox)
                        errorBox.showErrorMsg(err.toString())
                }
            }
        },

        trim: function (s) {
            // remove trailing and leading space
            return s.replace(/^\s*|\s*$/, '')
        },

        toFirstCharUppercase: function (str) {
            var _str = String(str);
            var pos = 0;
            return _str.toString().charAt(pos).toLocaleUpperCase() + _str.slice(pos + 1);
        },

        hasClassName: function (el, cls) {
            var na = String(el.className).split(' '),
                str = ''

            na.forEach(function (name) {
                str += "." + name
            })

            if (String(str).match('.' + cls))
                return true
            return false
        },

        /**
         * @description Adds classname(s) to this element. Keeps classnames and 
         * checks if the classname is already applied
         * @param {String} className Name of class 
         */
        addClassName: function (el, className) {
            var clsNames = String(el.className).split(' '),
                str = clsNames.join(" ")
            clsNames.forEach((clsName) => {
                if (!this.hasClassName(el, className) &&
                    !str.match(className)) {
                    str += ' ' + className
                }
            })
            el.className = str
        },

        removeClassName: function (el, className) {
            var na = String(el.className).split(' '),
            str = ''

            na.forEach(function (name) {
                if (className != name)
                    str += name + ' '
            })
            el.className = str
        },

        httpRequest: function (url, params, __cbSuccess__, method) {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for older browsers
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    __cbSuccess__(this.responseText)
                }
            };
            xmlhttp.open(method || "GET", url, true);
            xmlhttp.send(params);
        },

        getXmlParser: function (xmlStr) {

            if (typeof window.DOMParser != "undefined") {
                parseXml = function (xmlStr) {
                    return (new window.DOMParser()).parseFromString(xmlStr, "text/xml");
                };
            } else if (typeof window.ActiveXObject != "undefined" &&
                    new window.ActiveXObject("Microsoft.XMLDOM")) {

                // Support for IE 8
                parseXml = function (xmlStr) {
                    var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(xmlStr);
                    return xmlDoc;
                };
            } else {
                throw new Error("No XML parser found");
            }
            return parseXml;
        },


        toJson: function (str) {
            if (typeof str == 'string') {
                var inp = new String(str).replace(/\n|\r|\t/g, '')
                inp = inp
                        .replace(/{\s*'/g, '{"')
                        .replace(/:\s*'/g, ':"')
                        .replace(/'\s*:/g, '":')
                        .replace(/'\s*}/g, '"}')
                        .replace(/,\s*'/g, ',"')
                        .replace(/'\s*,/g, '",')
                        .replace(/\]\s*'/g, ']"')
                        .replace(/'\s*\]/g, '"]')
                        .replace(/\[\s*'/g, '["')
                        .replace(/\[\s*'/g, '["')

                var json = JSON.parse(inp)
                return json
            }
            return str
        },

        splitQuotedBy: function (txt, del, stripEscape) {
            var ret = [],
                str = "",
                parts = [],
            
                startsWithNQuotes = function(str, max){
                    var n = 0
                    for(var nn = 0; nn < str.length; nn++){
                        if(str.charAt(nn) == '"')
                            n++
                        else if(str.charAt(nn) != '"')
                            break;
                    }
                    return Math.min(max,n);
                }

            if(typeof txt == 'string')
                parts = txt.split(del);
            else return [txt]
        
            // Quit on empty line
            if( typeof txt == 'string' && ! txt.match(/[^\t][^\n]/))
                return []
                            
            var s = [];
        
            parts.forEach(function (p) {
            
                for(var n = 0; n < p.length; n++){
                    if(s.length > 0 && startsWithNQuotes(p.substr(n), s.length) == s.length){
                        n += s.length - 1
                        s.pop()
                    }
                    else if(startsWithNQuotes(p.substr(n), s.length + 1) == s.length + 1){
                        n += s.length
                        s.push('')
                    }
                }
        
                // Add part to previous or push part
                if (s.length > 0 ) {
                    str += p + del
                }
                else{
                    str += p + del
                    if(stripEscape){
                        str = str.replace(/["](\w)/g, "$1")
                        str = str.replace(/(\w)["]/g, "$1")
                        str = str.replace(/["]["]/g, '"')
                    }
                    ret.push(str)
                    str = ''
                }
            })
        
            // We could get here if found only one quote
            if (str != '') {
                var lns = str.split(del)
                ret.push.apply(ret, lns)
            }
        
            return ret
        },

        /*makeFloat: function(str){
            if(String(str).indexOf(".") === -1)
                return parseFloat(String(str).replace(/[,]/g, "").split(/\W![-]/)[0])
            else
                return parseFloat(String(str).replace(/[,]/g, ""))
        },*/

        isNaN: function (str) {
            if (str == "") return true
            return isNaN(str)
        }

    }
})
;
var dataTable = new Vue({

    el: '#datatable',

    data: {
        opened: false,
        rows: [],                    // All rows
        rows2: [],                  // Visible rows
        nCols: 0,
        leftCol: 1,
        selectedColumns: [],
        selectedRows: [],
        hasHandlers: false,
        selectedColAsX: null,
        selectedColsAsY: [],
        colXIsNumeric: false,
        colYIsNumeric: true,
        negativeValues: 2,          // 0 == all positive, 1 == all negative or all positive, 2 == both negative and positive, 3 == same as last sign, 4 == same sign per row
        lastSign: null,             // null == no, 0 == positive, 1 == negative
        strt: 0,
        firstCol: null,
        maxCols: Infinity,
        editable: false,
        canAddTo: false,
        startRow: 1,
        endRow: -Infinity,
        lastSelectedRow: false,
        isTimeFormat: false,         // Set by makeFloat()
        xValueIsSeconds: false,
        yValueIsSeconds: false
    },

    mounted: function () {
        this.reset()
        this.addFirstRow(26)
    },

    methods: {

        reset: function () {

            for (var c = 1; c < this.nCols + 1; c++) {
                this.unmarkColumnAs(c)
            }

            this.markColumns()

            this.modeTableChart = false

            this.startRow = 1
            this.leftCol = 1
            this.selectedColumns = []
            this.selectedRows = []
            this.lastSelectedRow = false

            this.markRows()

            this.setVisibleColumns()

            this.selectedColAsX = null
            this.selectedColsAsY = []
            this.canAddTo = false

            this.lastSign = null
            this.firstCol = null
            this.strt = 0
            this.isTimeFormat = false
            this.xValueIsSeconds = false
            this.yValueIsSeconds = false

        },

        minimum: function (ar) {
            var min = Infinity

            ar.forEach((o, row) => {
                if (o != "" && o < min)
                    min = o
            })
            return min
        },

        maximum: function (ar) {
            var max = -Infinity

            ar.forEach((o, row) => {
                if (!isNaN(o) && o > max)
                    max = o
            })
            return max
        },

        selectAllRows: function () {

            if (this.selectedColAsX) {

                this.selectedRows = []

                for (var n = 1; n < this.rows.length; n++) {
                    this.selectedRows.push(n)
                }

                this.markRows()
            }

        },

        toggleSelection: function () {

            if (this.selectedRows.length > 0) {
                this.reset()
            }
            else {
                this.selectAllRows()
            }
        },

        // With editable = true
        onBlurField: function (evnt) {
            var val = evnt.srcElement.innerHTML.replace(/&nbsp;|\s\s/g, "")
            this.setValue(evnt.srcElement.getAttribute('row'), evnt.srcElement.getAttribute('col') - 1, val)
        },

        // For use in selectors
        getElId: function () {
            return "#" + this.$el.id
        },

        showMap: function () {
            this.modeTableChart = true
        },

        showTable: function () {
            this.modeTableChart = false
        },

        calcSelectedRows: function () {
            var sel = this.getSelectionValuesObject()

            if (sel.items[0])
                return sel.items[0].length
        },

        canAddToSelection: function () { },

        // Called to set state of icon
        isValidSelection: function (o) {

            var minCols = 0
            if (o && o.minCols)
                minCols = o.minCols

            if (typeof o == 'event')
                return this.selectedColAsX && this.selectedColsAsY.length > 0
            else {

                if (o && o.minCols && this.selectedColsAsY.length < o.minCols)
                    return false

                if (o && o.maxRows && this.calcSelectedRows() < o.maxRows)
                    return this.selectedColAsX && this.selectedColsAsY.length >= minCols
                else if (o && o.maxRows)
                    return false
                else
                    return this.selectedColAsX && this.selectedColsAsY.length >= minCols
            }
        },

        setValue: function (row, col, value) {
            this.rows[row][col].value = String(value)
        },

        // Check validity of colon values
        checkSign: function (col) {
            var mode = this.negativeValues,
                vs = this.getColValues(col, this.calcStartRow([col])),
                valid = true,
                neg = false,
                pos = false,
                fCol = []

            vs.forEach((v, n) => {

                // Break on not numeric data
                if (isNaN(v = this.makeFloat(v)))
                    return

                // All must be positive
                if (mode == 0) {
                    if (v < 0) {
                        valid = false
                        return
                    }

                }

                    // All negative or all positive
                else if (mode == 1) {
                    if (v > 0) pos = true
                    if (v < 0) neg = true

                }

                    // Both
                else if (mode == 2) {
                    valid = true
                    return
                }

                else if (mode == 3) {
                    if (!this.lastSign) {
                        if (v > 0) pos = true
                        if (v < 0) neg = true
                    }
                    else if (this.lastSign == 1) {
                        if (v < 0) {
                            valid = false
                            return
                        }
                    }
                    else if (this.lastSign == 2) {
                        if (v > 0) {
                            valid = false
                            return
                        }
                    }
                }
                else if (mode == 4) {
                    if (!this.firstCol) {
                        fCol.push(this.makeFloat((v)))
                        if (this.strt == 0)
                            this.strt = n
                    }
                    else {
                        if (v > 0 && this.firstCol[n - this.strt] < 0)
                            valid = false
                        else if (v < 0 && this.firstCol[n - this.strt] > 0)
                            valid = false
                    }
                }
            })

            if (mode == 4) {
                if (!this.firstCol) {
                    this.firstCol = fCol
                    return true
                }
                else return valid
            }

            if (mode == 3) {

                if (!this.lastSign) {
                    if (neg && !pos)
                        this.lastSign = 2
                    else if (pos && !neg)
                        this.lastSign = 1

                    return (neg && !pos) || (pos && !neg)
                }

                else {
                    return valid
                }

            }

            if (mode != 1)
                return valid
            else return (neg && !pos) || (pos && !neg)

        },

        // Check for two consecutive numeric values
        // Can have empty cells in between
        calcStartRow: function (cols) {
            var o = Infinity

            if (this.colXIsNumeric == false && this.colYIsNumeric == false)
                return 1

            var xs = this.getColValues(this.selectedColAsX, this.colXIsNumeric, false);

            cols.forEach((col) => {
                var val = this.getColValues(col, 0, true, true),
                     n = Infinity,
                     m = null;

                val.forEach((v, row) => {

                    //if(o) return

                    v = this.makeFloat(v)

                    if (!isNaN(v)) {
                        if (!m && xs[row] != "") 
                            m = row// - 1
                        if (n != Infinity && m < o)
                            o = m
                        n = m
                    }
                    else {
                        n = Infinity
                    }
                })
            })

            return o || Infinity
        },

        calcEndRow: function (cols) {
            var xs = this.getColValues(this.selectedColAsX, this.startRow, this.colXIsNumeric),
                m = -Infinity,
                e = -Infinity

            // Take highest of x
            xs.forEach((x, n) => {
                if (x)
                    m = n
            })

            // Take highest of Y
            if (this.selectedColsAsY.length > 0) {

                this.selectedColsAsY.forEach((col) => {
                    var strt = this.calcStartRow(this.selectedColsAsY),
                        val = this.getColValues(col, strt, this.colYIsNumeric),
                        brk = false

                    val.forEach((v, row) => {

                        if (brk) return

                        if (!v || v == '' && row + strt - 1 > e) {
                            e = row + strt - 1
                            brk = true
                        }
                    })
                })
            }

            // If highest Y is lower then higest X
            if (e < m)
                m = e

            return m
        },

        colDataIsNumeric: function (col) {
            var cols = [col],
                start = this.calcStartRow(cols)

            return start < 100
        },

        // calculate the occurences as separate data element
        calcNoYColumnData: function (ar) {
            var oc = []

            ar.forEach((el) => {

                if (!el) return

                if (oc[el]) {
                    oc[el].n++
                }
                else {
                    oc[el] = { n: 1, v: el }
                }
            })

            var oc2 = []
            for (p in oc) {
                oc2.push(oc[p])
            }

            return oc2
        },

        getSelectionValuesObjectNotNumeric: function () {

            var vals = this.getColValues(this.selectedColAsX, 1),
                items = [];
            vals.forEach((x, n) => {
                var is = []
                this.selectedColsAsY.forEach((col) => {
                    var v = this.getColValues(col, 1)
                    v.forEach((y, nn) => {
                        if (n == nn)
                            is.push({ from: 0, to: y, n: y && !isNaN(y) })
                    })
                })
                items.push({ label: x, data: is, n: x && !isNaN(x) })
            })


            return { items: items }

        },

        getSelectionValuesObject: function (divisor, groupLast, calculation) {

            if (this.colXIsNumeric == false && this.colYIsNumeric == false) {
                return this.getSelectionValuesObjectNotNumeric()
            }

            if (!divisor)
                divisor = 1

            if (this.colYIsNumeric && this.selectedColsAsY)
                this.startRow = this.calcStartRow(this.selectedColsAsY)
            else
                this.startRow = 0


            var a = [], // Col values
                b = [], // To find index of previous cols with addAllColumns
                items = [], // The result to be returned
                xs = this.getColValues(this.selectedColAsX, this.startRow, this.colXIsNumeric),
                endRow = null,
                tot = 0,
                noYColumn = false;

            if (this.selectedColsAsY.length > 0) {
                this.selectedColsAsY.forEach((col, m) => {
                    var val = this.getColValues(col, this.startRow, this.colYIsNumeric),
                        is = [],
                        inData = false,
                        n = 0,
                        brk = false,		// Break on row with NaN data                    
                        tot1 = 0,
                        tot2 = 0;

                    val.forEach((v, row) => {

                        if (brk) return

                        var v2 = parseFloat(String(v).replace(/[,]/g, ""))

                        if (!isNaN(v2)) {

                            inData = true

                            /*if(v2 / divisor > maxY)
                                maxY = v2 / divisor

                            if(v2 / divisor < minY)
                                minY = v2 / divisor

                            */if (true) {
                                is.push({ to: v2 })

                                if (!calculation) {
                                    if (v2 > 0)
                                        tot1 = v2
                                    else
                                        tot2 = v2
                                }

                                if (xs[row]) {
                                    a.push({ label: xs[row], data: is, row: n++ })
                                    b.push(row)
                                }
                                is = []
                            }

                        }
                        else if (inData)
                            brk = true
                        endRow = row
                    })

                    // Insert item separator
                    if (true || !addAllColumns || m == this.selectedColsAsY.length - 1) {
                        items.push(a)
                        a = []
                    }

                    if (brk) return
                })

            }

                // No Y colum selected
            else {

                var vals = this.getColValues(this.selectedColAsX, 1, false),
                    ocs = this.calcNoYColumnData(vals)

                var r = 0,
                    qa = [],
                    _minY = Infinity,
                    _maxY = -Infinity

                noYColumn = true

                ocs.forEach((oc) => {
                    if (oc.n < _minY)
                        _minY = oc.n
                    if (oc.n > _maxY)
                        _maxY = oc.n
                    qa.push({ label: oc.v, row: r++, data: [{ to: oc.n }] })
                })
                items.push(qa)

            }

            var headers = []
                superHeaders = [];

            if (this.selectedColsAsY.length > 0) {
                this.selectedColsAsY.forEach((col) => {
                    headers.push({ col: col, header: this.getColHeader(col, this.startRow, noYColumn) })
                })
            }
            else {
                headers.push({ col: this.selectedColAsX, header: this.getColHeader(this.selectedColAsX, this.startRow, noYColumn) })
            }

            // Super labels
            if (items.length % 2 == 0) {

                if (this.selectedColsAsY.length > 0) {

                    var fnd = 0,
                        row = false

                    for (var c = 1; c < this.startRow; c++) {

                        fnd = 0
                        this.selectedColsAsY.forEach((col) => {

                            var lbl = this.rows[c][col - 1].origValue
                            if (lbl)
                                fnd++

                        })

                        if (fnd == 2)
                            row = c
                    }

                    if (row) {

                        this.selectedColsAsY.forEach((col) => {
                            var lbl = this.rows[row][col - 1].origValue
                            if (lbl)
                                superHeaders.push({ header: lbl })
                        })
                    }
                    else {

                        var r1 = '',
                            r2 = '';

                        this.selectedColsAsY.forEach((col, n) => {

                            if (n < this.selectedColsAsY.length / 2) {

                                r1 += this.getColHeader(col, 0, true) + ' '

                            }
                            else {
                                r2 += this.getColHeader(col, 0, true) + ' '
                            }

                        })

                        //superHeaders.push({ header: r1 })
                        // superHeaders.push({ header: r2 })
                    }

                }

            }


            return {
                items: items,
                headers: headers,
                superHeaders: superHeaders,
                yValueIsSeconds: this.yValueIsSeconds, xValueIsSeconds: this.xValueIsSeconds
            }
        },

        // Return array of column values
        getColValues: function (col, start, makeNumeric, allRows) {

            var ret = []

            this.rows.forEach((row, n) => {

                if (n >= start && row[col - 1]) {

                    if (!allRows && this.selectedRows.length > 1
                        && this.selectedRows.indexOf(n) == -1)
                        return

                    var f = this.makeFloat(row[col - 1].value)
                    if (!isNaN(f) && makeNumeric && start >= 0)
                        ret.push(f)
                    else if (start >= 0) {
                        var str = row[col - 1].value || ''
                        str = this.removeChars(str)
                        ret.push(str)
                    }
                }

            })

            return ret
        },

        // Get column header field contents
        getColHeader: function (col, start, labelIsColumnLetter) {
            var str = '',
                brk = false


            // First try for non numeric value in first selected row
            var q = null
            if (this.selectedRows[0]) {
                q = this.findColHeader(this.rows[this.minimum(this.selectedRows)], col)
                if (q)
                    brk = true
            }

            if (q) {
                str = q
            }
            else {
                this.rows.forEach((row, n) => {

                    if (brk) return

                    if (labelIsColumnLetter) {
                        var q = this.findColHeader(row, col)

                        if (q) {
                            str = q
                            brk = true
                        }

                    } else {

                        // Skip letter indications if no rows selected
                        if (n < 1 && !this.selectedRows[0]) return


                        // Try this row
                        var q = this.findColHeader(row, col)
                    }

                    if (q) {
                        str = q
                        brk = true
                    }

                })
            }

            if (!brk) {
                str = this.findColHeader(this.rows[0], col)
            }

            if(!str) str= ""

            return str
        },

        // Must not be numeric
        findColHeader: function (row, col) {
            if (row[col - 1]) {
                if (isNaN(row[col - 1].value) && row[col - 1].origValue) {

                    str = this.removeChars(row[col - 1].origValue)

                    return str
                }
                else return false;
            }
            return false
        },

        // Remove all newlines and tabs
        removeChars: function (str) {
            if (str && str != "")
                return str.replace(/\r?\n|\r|\t/g, "")
            else return str
        },

        // Init handler for visible columns
        initSwipeHandler: function () {

            requirejs(["external/hammer.min"], (H) => {

                var mngr = new H(this.$el, [[{ direction: Hammer.DIRECTION_HORIZONTAL }]]),
                    t1 = 0;

                // This is for horizontal double finger scroll on trackpad
                this.$el.addEventListener('wheel', (event) => 
                { 

                    if(event.deltaY == 0){
                        
                        var t = event.timeStamp

                        if(t1 == 0 || t > t1 + 200){
                            if(event.wheelDeltaY == 0){
                                
                                if(Math.abs(event.wheelDeltaX) < 50) return

                                if(event.wheelDeltaX > 0){
                                    if (this.leftCol > 1)
                                        this.leftCol -= 1
                                    else
                                        this.leftCol = 1
                                }
                                else{
                                    if (this.leftCol < this.nCols + 1)
                                        this.leftCol += 1
                                }
                            }
                            this.setVisibleColumns()
                            t1 = t
                        }
                    }

                })

                mngr.on("swipe", (event) => {

                    var w = parseInt(window.screen.width / 150 / 2)

                    if (w < 1)
                        w = 1

                    if (event.direction == H.DIRECTION_RIGHT) {
                        if (this.leftCol - w > 1)
                            this.leftCol -= w
                        else
                            this.leftCol = 1
                    }
                    else if (event.direction == H.DIRECTION_LEFT) {
                        if (this.leftCol + w < this.nCols + 1)
                            this.leftCol += w
                    }
                    this.setVisibleColumns()
                })

            })

            // Scroll mouse and mousepad
            this.$el.addEventListener('wheel', (event) => {

                if (!this.modeTableChart) {
                    if (event.shiftKey) {
                        if (event.deltaY > 0) {
                            if (this.leftCol < this.nCols + 1)
                                this.leftCol++
                        }
                        else if (event.deltaY < 0) {
                            if (this.leftCol > 1)
                                this.leftCol--
                        }
                        this.setVisibleColumns()
                    }
                }
            })
        },

        setVisibleColumns: function () {

            // Hide columns before this.leftCol
            for (var n = 1; n < this.nCols + 1; n++) {

                var a = document.querySelectorAll(this.getElId() +
//                    " .dataTable .dataTableRow .dataTableField:nth-child("  +  (n+1) + ")"
                      " .dataTable .dataTableRow .dataTableField[col='" + (n) + "']"
                )
                if (n < this.leftCol && a && a.length > 0) {
                    a.forEach((fieldEl) => {
                        fieldEl.style.display = 'none'
                    })
                }
                else if (a && a.length > 0) {
                    a.forEach((fieldEl) => {
                        fieldEl.style.display = 'block'
                    })
                }

            }
        },

        // Init a handler of 'type' on elements of 'a'
        initHandler: function (type, a, __cb__) {

            requirejs(["external/hammer.min"], (H) => {

                if (a && a.length > 0 && typeof __cb__ == 'function') {
                    a.forEach((el) => {

                        var mngr = new H.Manager(el)

                        mngr.add(new H.Tap({}))
                        mngr.add(new H.Press({ time: 500 }))

                        if (type == 'click')
                            el.addEventListener(type, function () { __cb__(el) })

                        else if (type == 'press') {
                            mngr.on("press", function (event) {
                                __cb__(event)
                            })

                        }
                        else if (type == 'tap') {
                            mngr.on("tap", function (event) {
                                __cb__(event)
                            })
                        }
                    })
                }
            })
        },

        // Init handlers on column titles
        initFirstRowHandlers: function () {
            var a = document.querySelectorAll(
                this.getElId() + " .dataTable .dataTableRow:nth-child(1)")

            this.initHandler('tap', a, (event) => {
                var el = event.srcEvent.srcElement,
                    n = parseInt(el.getAttribute('col'))

                if (!this.selectedColsAsY
                    || (this.selectedColsAsY.indexOf(n) > -1 || this.selectedColsAsY.length + 1 <= this.maxCols))
                    this.toggleSelectedColumn(n)
            })
        },

        // Init handler on rows
        initFirstColHandlers: function () {
            var a = document.querySelectorAll(
                this.getElId() + " .dataTable .dataTableRow")

            this.initHandler('tap', a, (event) => {
                var el = event.srcEvent.srcElement,
                    n = parseInt(el.getAttribute('row'))

                if (this.selectedColAsX) {
                    if (this.lastSelectedRow !== false && event.srcEvent.shiftKey == true) {
                        for (var c = this.lastSelectedRow + 1; c <= n; c++) {
                            this.toggleSelectedRow(c)
                        }
                        this.lastSelectedRow = false
                        this.markRows()
                    }
                    else {
                        if (n > 0) {
                            this.toggleSelectedRow(n)
                            this.lastSelectedRow = n
                            this.markRows()
                        }
                    }
                }
            })
            this.initHandler('press', a, (event) => {
                var el = event.srcEvent.srcElement,
                    n = parseInt(el.getAttribute('row'))

                if (this.lastSelectedRow !== false) {
                    for (var c = this.lastSelectedRow + 1; c < n; c++) {
                        this.toggleSelectedRow(c)
                    }
                    this.lastSelectedRow = false
                    this.markRows()
                }
                else {
                    if (n > 0) {
                        this.toggleSelectedRow(n)
                        this.lastSelectedRow = n
                        this.markRows()
                    }
                }
            })
        },

        // Add or remove index from a
        toggleSelectedIndex: function (a, index) {
            var fnd = false

            if (index < 1) return

            a.forEach((c, n) => {
                if (fnd) return

                if (c == index) {
                    fnd = true
                    a.splice(n, 1)
                }

            })

            if (!fnd)
                a.push(index)

            return a

        },

        // Toggle selectedness of row
        toggleSelectedRow: function (index) {

            var cs = this.toggleSelectedIndex(this.selectedRows, index)
            if (cs)
                this.selectedRows = cs

        },

        // Toggle selectedness of column
        toggleSelectedColumn: function (index) {

            if (index > 0) {

                if (this.selectedColsAsY.indexOf(index) > -1) {
                    var n = this.selectedColsAsY.indexOf(index);
                    if (n > -1)
                        this.selectedColsAsY.splice(n, 1)
                    this.unmarkColumnAs(index)

                    if (this.selectedColsAsY.length == 0) {
                        this.lastSign = null
                        this.firstCol = null
                        this.strt = 0
                    }
                }
                else if (this.selectedColAsX == index) {
                    this.selectedColAsX = null
                    this.unmarkColumnAs(index)
                }
                else {

                    if (this.selectedColAsX === null) {

                        if (!this.colXIsNumeric || (this.colDataIsNumeric(index) && this.checkSign(index))) {

                            this.selectedColAsX = index

                            this.markColumnAs(index, 'X')

                            if (this.colXIsNumeric) {
                                var timeV = this.makeColValuesNumeric(index)
                                this.isTimeFormat = false
                                if (timeV) {
                                    this.xValueIsSeconds = true
                                }
                                else
                                    this.xValueIsSeconds = false
                            }

                        }
                    }
                    else if ((!this.colYIsNumeric || (this.colDataIsNumeric(index) && this.checkSign(index)))) {

                        this.selectedColsAsY.push(index)

                        this.selectedColsAsY.forEach((i, n) => {
                            this.markColumnAs(i, 'Y' + (n + 1))
                        })

                        if (this.colYIsNumeric) {
                            var timeV = this.makeColValuesNumeric(index)
                            if (timeV) {
                                this.yValueIsSeconds = true
                            }
                        }
                    }
                }

                this.selectedColumns = this.selectedColsAsY.concat()

                if (this.selectedColAsX)
                    this.selectedColumns.push(this.selectedColAsX)

                // Update state this.selectedColumns
                this.selectedColsAsY.forEach((i, n) => {
                    this.markColumnAs(i, 'Y' + (n + 1))
                })
                this.markColumns()

            }
        },

        makeFloat: function (str) {

            var tSep = ',',
                decSep = 0.01.toLocaleString().substring(1, 2),
                f = null

            // Replace thousands
            // 100,000 -> 100000
            // 100,000.10 -> 100000.1
            if (String(str).match(/[,][0-9]{3}/)) {
                return parseFloat(String(str).replace(/[,]([0-9]{3})/g, '$1'))
            }

                // Parse time international format hh:mm:ss
            else if (String(str).match(/^[0-9]{2}[:][0-9]{2}[:][0-9]{2}|[0-9]{2}[:][0-9]{2}[:][0-9]{2}$/)) {
                var parts = String(str).split(/[:]/),
                    totB60 = 0;

                this.isTimeFormat = true

                parts.forEach((p, n) => {
                    if (n == 0) {
                        totB60 += 60 * 60 * parseInt(p)
                    }
                    else if (n == 1) {
                        totB60 += 60 * parseInt(p)
                    }
                    else if (n == 2) {
                        totB60 += parseFloat(p)
                    }
                })
                return totB60
            }

                // Parse time international format mm:ss
            else if ((String(str).match(/^[0-9]{2}[:][0-9]{2}|[0-9]{2}[:][0-9]{2}$/))) {
                var parts = String(str).split(/[:]/),
                    totB60 = 0;

                this.isTimeFormat = true

                parts.forEach((p, n) => {
                    if (n == 0) {
                        totB60 += 60 * parseInt(p)
                    }
                    else if (n == 1) {
                        totB60 += parseFloat(p)
                    }
                })
                return totB60
            }

                // If a decimal sign in the input, replace it
                // 10,00 -> 10
                // 100.000 -> 100
                // 10,5-11,5 -> 10.5 
                // 10.5 (q) -> 10.5
            else if (String(str).indexOf(decSep) > -1) {

                f = parseFloat(String(str).replace(new RegExp(decSep, "g"), ",").split(/\W!/)[0])

                if (!isNaN(f))
                    return f

                else {
                    return parseFloat(String(str).split(/\W!/)[0])
                }
            }
            else return parseFloat(String(str).split(/\W!/)[0])
        },

        makeColValuesNumeric: function (index) {

            this.rows.forEach((row, n) => {
                if (n > this.startRow && row[index - 1]) {
                    var opt = !isNaN(this.makeFloat(row[index - 1].value)) ? this.makeFloat(row[index - 1].value) : row[index - 1].value,
                        str = isNaN(opt) ? row[index - 1].value : opt

                    if (str === 0)
                        str = '0'

                    this.setValue(n, index - 1, str || '')
                }
            })

            return this.isTimeFormat
        },

        // Get column title
        getColumnHeaderField: function (col) {
            return document.querySelector(
                this.getElId() +
                " .dataTable .dataTableRow:nth-child(1) " +
                //" .dataTableField:nth-child(" + (col+1) +")"
                //" .dataTableField:nth-child(" + (col + this.leftCol) +")"
                " .dataTableField[col='" + (col) + "']"
            )
        },

        // Mark selected columns
        markColumnAs: function (col, type) {
            var q = this.getColumnHeaderField(col)

            // ...
            if (!String(q.getAttribute('style')).match('none')) {
                q.setAttribute('style', 'color:red;')
                q.innerHTML = type
            }
        },

        // Unmark columns as X or Y
        unmarkColumnAs: function (col) {
            var q = this.getColumnHeaderField(col)
            q.setAttribute('style', '')
            q.innerHTML = q.getAttribute('origvalue')

            var d = this.rows

            d.forEach((d, row) => {

                var origValue = d[col - 1].origValue
                if (origValue)
                    this.setValue(row, col - 1, origValue);
            })

        },

        // Mark as selected or not
        markColumns: function () {

            requirejs(["util/util"], (util) => {

                var a = document.querySelectorAll(
                    this.getElId() +
                    " .dataTable .dataTableRow .dataTableField")

                if (a && a.length > 0)
                    a.forEach((el, n) => {

                        var fnd = false
                        this.selectedColumns.forEach((column) => {

                            if (parseInt(el.getAttribute('col')) == column) {
                                util.addClassName(el, 'highCol')
                                fnd = true
                            }
                        })

                        if (!fnd) {
                            util.removeClassName(el, 'highCol')
                        }
                    })
            })
        },

        // Mark as selected or not
        markRows: function () {

            requirejs(["util/util"], (util) => {

                var a = document.querySelectorAll(
                    this.getElId() +
                    " .dataTable .dataTableRow .dataTableField")

                if (a && a.length > 0)
                    a.forEach((el, n) => {

                        if (this.selectedRows.indexOf(
                                parseInt(el.getAttribute('row'))) > -1)
                            util.addClassName(el, 'highRow')
                        else {
                            util.removeClassName(el, 'highRow')
                        }

                    })
            })
        },

        // Add first row to data set (A, B, C, ...)
        addFirstRow: function (nCols) {
            var r = []
            for (var n = 0; n < nCols + 1; n++) {
                r.push({ value: this.AThroughZZ(n), origValue: this.AThroughZZ(n) })
            }
            this.rows = [r]
            this.rows2 = [r]
        },

        AThroughZZ: function (n) {
            var posis = 0,
                pos = [],
                m = n

            for (var c = 0; m >= 0; m -= Math.pow(26, ++c))
                posis++

            // n = 10
            // n = 11
            // n = 21
            // n = 210
            for (var c = posis; c > 0; c--) {
                if (c > 1) {
                    m = Math.floor((Math.pow(26, c - 1) + n - (Math.pow(26, c - 1) - 1)) / Math.pow(26, c - 1))
                    // m = f((10 + 10 - 9) / 10) = 1 
                    // m = f((10 + 21 - 9) / 10) = 2
                    // m = f(10 + 11 - 9) / 10) = 1
                    // m = f(100 + 210 - 99) / 100) = 2
                    m -= 1
                }
                else
                    m = n

                pos.push(m % (26))
                // 210 - 2 * 100
                n -= m * Math.pow(26, c - 1)
            }
            pos = pos.map(function (p) { return String.fromCharCode(p + 65) })
            return pos.join('')
        },

        // Add rows 1 and higher
        addRows: function (rows) {

            if (rows) {
                rows.forEach((row, n) => {

                    if (row.length < this.nCols) {
                        for (var n = row.length; n < this.nCols; n++)
                            row.push({})
                    }
                    if (row.length > this.nCols) {
                        for (var n = row.length; n > this.nCols; n--)
                            row.splice(-1)
                    }

                    this.rows.push(row)

                    if (n < 999)
                        this.rows2.push(row)
                })
            }
            this.initFirstColHandlers()

        },

        addDataTableRow: function () {
            var r = []

            if (this.nCols == 0)
                this.nCols = 26

            for (var n = 0; n < 26; n++) {
                r.push({ value: '' })
            }

            this.addRows([r])

            if (this.rows.length == 2) {
                this.initFirstRowHandlers()
            }
        }
    }
})

define("dataTable", function(){});

