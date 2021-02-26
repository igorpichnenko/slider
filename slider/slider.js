!function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventEmitter=void 0;var i=function(){function e(){this.events={}}return e.prototype.subscribe=function(e,t){!this.events[e]&&(this.events[e]=[]),this.events[e].push(t)},e.prototype.unsubscribe=function(e,t){this.events[e]=this.events[e].filter((function(e){return t!==e}))},e.prototype.emit=function(e,t){var r=this.events[e];r&&r.forEach((function(e){return e.call(null,t)}))},e}();t.EventEmitter=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.standardOptions=void 0;var i={orientation:"horizontal",type:"double",min:0,max:10,step:1,from:3,to:7,prefix:"₽",isPrefix:!0,isLabel:!0,isScale:!0,color:"orange",isScalePrefix:!0,scalePrefix:"₽",minMax:!1,fromTo:!1,isTrackPrefix:!0,trackPrefix:"₽",isColor:!0,changeColor:!0,isChangeColor:!0,isGradient:!0,gradient:"purple",gradientDeg:45,isColorOut:!1,onlyDivisions:!1,allColors:r(15).allColors};t.standardOptions=i},,,,,function(e,t,r){r(7),e.exports=r(16)},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),n=r(1);jQuery.fn.colorSlider=function(e){var t=i(i({},n.standardOptions),e);return new o.Presenter(t,this.get(0))}},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Presenter=void 0;var o=r(9),n=r(10),a=r(0),s=r(1),l=function(){function e(e,t){this.element=t,this.emitter=new a.EventEmitter,this.model=this.createModel(e),this.view=this.createView(this.model.state,t),this.bindSubscribe()}return e.prototype.upDataView=function(){this.view.upDataSlider()},e.prototype.setOptions=function(e){var t=i(i({},s.standardOptions),e);this.model.setData(t)},e.prototype.getOptions=function(){return this.model.state},e.prototype.createModel=function(e){return new o.Model(e)},e.prototype.createView=function(e,t){return new n.View(e,t)},e.prototype.bindSubscribe=function(){this.getNewData=this.getNewData.bind(this),this.sendNewPosition=this.sendNewPosition.bind(this),this.addSubscribtions()},e.prototype.addSubscribtions=function(){this.model.emitter.subscribe("newData",this.getNewData),this.view.emitter.subscribe("newPosition",this.sendNewPosition)},e.prototype.getNewData=function(e){this.view.upData(e),this.emitter.emit("newData",e)},e.prototype.sendNewPosition=function(e){var t=this.model.state,r=i(i({},t),e);this.model.setData(r)},e}();t.Presenter=l},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Model=void 0;var o=r(0),n=function(){function e(e){this.emitter=new o.EventEmitter,this.state=this.init(e)}return e.prototype.setData=function(e){var t=this.validateFromTo(e),r=this.validateMinMaxStep(e);this.state=i(i(i({},e),t),r),this.emitter.emit("newData",this.state)},e.prototype.init=function(e){return this.setData(e),this.state},e.prototype.validateMinMaxStep=function(e){var t=e.min,r=e.max,i=e.step;i<1&&(e.step=1);var o=Math.abs(r)/2;return i>o&&(e.step=o),r<=t&&r<0&&(e.min=t-i),t>=r&&r>0&&(e.min=t,e.max=t+i),r<0&&r<t&&(e.max=t+i,e.min=t),e},e.prototype.validateFromTo=function(e){var t=e.from,r=e.to,i=e.max,o=e.min,n=e.type,a=e.step;return"single"===n&&(e.to=i),o>t&&(e.from=o),r>i&&(e.to=i),i<0&&0===o&&(e.from=o,e.to=o),"double"===n&&t>=r&&(e.from=r-a),r<=o&&(e.to=o+a,e.from=o),t>0&&o<0&&i<0&&(e.from=o),i<o&&(e.to=o+a),e},e}();t.Model=n},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;var o=r(0),n=r(11),a=r(12),s=r(13),l=r(14),c=function(){function e(e,t){this.emitter=new o.EventEmitter,this.element=t,this.slider=this.createSlider(e,t),this.state=this.init(e),this.rollers=this.createRollers(this.state),this.bar=this.createBar(this.state),this.track=this.createTrack(this.state),this.scale=this.createScale(this.state),this.upData(this.state),this.bindEventListeners()}return e.prototype.init=function(e){var t=this.getSliderSize(e),r=this.getOneStep(e),o=this.slider;return i(i({},e),{size:t,oneStep:r,slider:o})},e.prototype.createSlider=function(e,t){var r=e.orientation,i=document.createElement("div");return i.className="slider slider_"+r,t.append(i),i},e.prototype.createTrack=function(e){return new a.Track(e)},e.prototype.createBar=function(e){return new l.Bar(e)},e.prototype.createRollers=function(e){return new n.Rollers(e)},e.prototype.createScale=function(e){return new s.Scale(e)},e.prototype.upData=function(e){var t=i(i({},this.state),e);this.rollers.upData(t),this.bar.upData(t),this.scale.upData(t),this.track.upData(t),this.state=i({},t)},e.prototype.upDataSlider=function(){this.slider.remove(),this.slider=this.createSlider(this.state,this.element),this.state=this.init(this.state),this.rollers=this.createRollers(this.state),this.scale=this.createScale(this.state),this.track=this.createTrack(this.state),this.bar=this.createBar(this.state),this.upData(this.state),this.bindEventListeners()},e.prototype.getOneStep=function(e){var t=e.min,r=e.max,i=e.step,o=Math.ceil((r-t)/i);return this.getSliderSize(e)/o},e.prototype.bindEventListeners=function(){this.onTrackClick=this.onTrackClick.bind(this),this.onScaleClick=this.onScaleClick.bind(this),this.addEventListeners()},e.prototype.addEventListeners=function(){var e=this.dragStart.bind(this);this.slider.addEventListener("touchstart",e),this.slider.addEventListener("mousedown",e),this.slider.addEventListener("click",this.onTrackClick),this.slider.addEventListener("scaleclick",this.onScaleClick)},e.prototype.dragStart=function(e){var t=e.target;if(this.getTargetType(t)){var r=this.drag.bind(this,t),i=function(){document.removeEventListener("mousemove",r),t.removeEventListener("touchmove",r),document.removeEventListener("mouseup",i),t.removeEventListener("touchend",i)};document.addEventListener("mousemove",r),t.addEventListener("touchmove",r),document.addEventListener("mouseup",i),t.addEventListener("touchend",i)}},e.prototype.drag=function(e,t){var r=this.state.orientation,i=0;t.preventDefault(),/roller/.test(e.className)&&(i="horizontal"===r?"touchmove"===t.type?this.convertPxToValue(t.touches[0].clientX):this.convertPxToValue(t.clientX):"touchmove"===t.type?this.convertPxToValue(t.touches[0].clientY):this.convertPxToValue(t.clientY),this.updatePosition(i,e))},e.prototype.getTargetType=function(e){var t=this.slider.querySelectorAll(".slider__roller");return t[0]&&t[0].contains(e)?"from":t[1].contains(e)?"to":"undefined"},e.prototype.onScaleClick=function(e){var t=e.detail.value;this.updatePosition(t)},e.prototype.onTrackClick=function(e){var t=this.state.orientation,r=e.target,i=0;if(!/scale/.test(r.className)){i="horizontal"===t?e.clientX:e.clientY;var o=this.convertPxToValue(i);this.updatePosition(o)}},e.prototype.updatePosition=function(e,t){var r=this.state,i=r.from,o=r.to,n=r.type,a=r.step;this.convertValueToColor(e);var s=Math.abs(i-e),l=Math.abs(o-e);"single"===n&&s?this.emitter.emit("newPosition",{from:e}):t?"from"===this.getTargetType(t)?(e>o-a&&(e=i),this.emitter.emit("newPosition",{from:e})):(e<i+a&&(e=o),this.emitter.emit("newPosition",{to:e})):"from"===(s<l?"from":"to")?this.emitter.emit("newPosition",{from:e}):this.emitter.emit("newPosition",{to:e})},e.prototype.convertPxToValue=function(e){var t=this.state,r=t.min,i=t.max,o=t.step,n=t.oneStep,a=t.size,s=t.orientation,l=this.getSliderPosition(),c=0;return(c="horizontal"===s?e-l:l+a-e)>a?i:c<0?r:Math.round(c/n)*o+r},e.prototype.convertValueToColor=function(e){var t=this.state,r=t.color,i=t.gradient,o=this.state,n=o.max,a=o.isColor,s=o.changeColor,l=e/n;if(!0===a){var c=0,d=0;!1===s?(c=Math.round(255*l*255*255),d=Math.round(255*l*254*254)):(c=Math.round(256*l*256*255),d=Math.round(254*l*254*254));var u=Math.abs(d);r="#"+Math.abs(c).toString(16),i="#"+u.toString(16),this.emitter.emit("newPosition",{color:r}),this.emitter.emit("newPosition",{gradient:i})}},e.prototype.getSliderPosition=function(){var e=this.state,t=e.orientation,r=e.slider;return"horizontal"===t?r.getBoundingClientRect().left:r.getBoundingClientRect().top},e.prototype.getSliderSize=function(e){return"horizontal"===e.orientation?this.slider.getBoundingClientRect().width:this.slider.getBoundingClientRect().height},e}();t.View=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Rollers=void 0;var i=function(){function e(e){this.create(e)}return e.prototype.create=function(e){var t=e.slider,r=e.orientation,i=document.createElement("div");i.className="slider__roller slider__roller_first slider__roller_"+r;var o=document.createElement("div");o.className="slider__roller_second\n      slider__roller\n      slider__roller_"+r,t.append(i),t.append(o),this.createTooltip(i,o,e),this.moveRollersAtValue(e,i,o),this.toggleRollers(e,o),this.updataColor(e,i,o)},e.prototype.createTooltip=function(e,t,r){var i=r.orientation,o=document.createElement("div");o.className="slider__tooltip_first slider__tooltip slider__tooltip_"+i;var n=document.createElement("div");n.className="slider__tooltip_second slider__tooltip slider__tooltip_"+i,e.append(o),t.append(n),this.updataOutTooltip(o,n,r)},e.prototype.updataOutTooltip=function(e,t,r){var i=r.to,o=r.from,n=r.color,a=r.prefix,s=r.isPrefix,l=r.isLabel,c=r.gradient,d=r.isColorOut,u=r.allColors,f=r.isChangeColor;!0===l&&(!0===s&&(e.innerHTML=""+o.toLocaleString()+a,t.innerHTML=""+i.toLocaleString()+a),!1===s&&(e.innerHTML=o.toLocaleString(),t.innerHTML=i.toLocaleString()));var p=u[n],h=u[c];void 0===h&&(h=c),void 0===p&&(p=n),!0===f&&!0===d&&(e.innerHTML=p.toLocaleString(),t.innerHTML=h.toLocaleString(),e.style.backgroundColor=""+n,t.style.backgroundColor=""+c,e.classList.add("slider__tooltip_bg"),t.classList.add("slider__tooltip_bg")),!1===l&&(e.classList.add("slider__tooltip_display-none"),t.classList.add("slider__tooltip_display-none"))},e.prototype.updataColor=function(e,t,r){var i=e.color,o=e.isGradient,n=e.gradient,a=e.isChangeColor,s=e.gradientDeg;!0===a&&(!0===o?(t.style.background="linear-gradient("+s+"deg, "+i+", "+n+")",r.style.background="linear-gradient("+s+"deg, "+i+", "+n+")"):(t.style.background=i,r.style.background=i))},e.prototype.moveRollersAtValue=function(e,t,r){var i=e.to,o=e.from,n=e.orientation,a=this.convertValueToPx(i,e),s=this.convertValueToPx(o,e),l=this.convertPxToProcent(a,e),c=this.convertPxToProcent(s,e);"horizontal"===n?(t.style.left=c+"%",r.style.left=l+"%"):(t.style.bottom=c+"%",r.style.bottom=l+"%")},e.prototype.upData=function(e){var t=e.slider,r=t.querySelector(".slider__roller_first"),i=t.querySelector(".slider__roller_second"),o=t.querySelector(".slider__tooltip_first"),n=t.querySelector(".slider__tooltip_second");this.moveRollersAtValue(e,r,i),this.toggleRollers(e,i),this.updataColor(e,r,i),this.updataOutTooltip(o,n,e)},e.prototype.convertValueToPx=function(e,t){var r=t.min,i=t.max,o=t.step,n=t.size,a=t.oneStep;return e===i?n:Math.round((e-r)/o)*a},e.prototype.convertPxToProcent=function(e,t){return 100*e/t.size},e.prototype.toggleRollers=function(e,t){var r=e.type;t.style.display="single"===r?"none":"block"},e}();t.Rollers=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var i=function(){function e(e){this.create(e)}return e.prototype.create=function(e){var t=e.slider,r=e.orientation,i=document.createElement("div");i.className="slider__track slider__track_"+r,t.append(i),this.createOutElement(i,e)},e.prototype.createOutElement=function(e,t){var r=t.orientation,i=document.createElement("div"),o=document.createElement("div");i.className="slider__out slider__out-start slider__out-start_"+r,o.className="slider__out slider__out-end slider__out-end_"+r,e.append(i),e.append(o),this.setStartEndTrackOut(i,o,t)},e.prototype.setStartEndTrackOut=function(e,t,r){var i=r.min,o=r.max,n=r.from,a=r.to,s=r.minMax,l=r.fromTo,c=r.isTrackPrefix,d=r.trackPrefix;!1===c&&(d=""),!0===s&&(e.innerHTML=""+i.toLocaleString()+d,t.innerHTML=""+o.toLocaleString()+d),!0===l&&(e.innerHTML=""+n.toLocaleString()+d,t.innerHTML=""+a.toLocaleString()+d)},e.prototype.upData=function(e){var t=e.slider,r=t.querySelector(".slider__out-start"),i=t.querySelector(".slider__out-end");this.setStartEndTrackOut(r,i,e)},e}();t.Track=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scale=void 0;var i=function(){function e(e){this.create(e)}return e.prototype.create=function(e){var t=e.slider,r=e.orientation,i=document.createElement("div");i.className="slider__scale slider__scale_"+r,t.append(i),this.addEventListeners(i),this.addScaleMarker(e,i),this.checkScale(e,i)},e.prototype.upData=function(e){var t=e.slider.querySelector(".slider__scale");this.checkScale(e,t),this.updataScaleMarker(e)},e.prototype.updataScaleMarker=function(e){var t=e.scalePrefix,r=e.isScalePrefix,i=e.onlyDivisions,o=e.slider,n=e.color;o.querySelectorAll(".slider__scale-value").forEach((function(e){!0===r?e.setAttribute("data-text",""+t):e.setAttribute("data-text",""),!0===i?(e.setAttribute("data-text",""),e.classList.add("slider__scale-value_fs-0")):e.classList.add("slider__scale-value_fs-normal")})),document.documentElement.style.setProperty("--scale-color"," "+n)},e.prototype.checkScale=function(e,t){var r=e.isScale;!1===r&&(t.style.display="none"),!0===r&&(t.style.display="")},e.prototype.addEventListeners=function(e){this.onScaleClick=this.onScaleClick.bind(this),e.addEventListener("click",this.onScaleClick)},e.prototype.addScaleMarker=function(e,t){for(var r=e.min,i=e.max,o=e.step,n=e.size,a=e.oneStep,s=this.getIncrement(e),l=s/o*a,c=document.createDocumentFragment(),d=0,u=r;u<i&&!(d>n-50);u+=s)this.createScaleMarker(c,u,d,e),d+=l;this.createScaleMarker(c,i,n,e),t.append(c)},e.prototype.getIncrement=function(e){var t=e.size,r=e.oneStep,i=e.step,o=Math.ceil(t/r);return Math.ceil(o/5)*i},e.prototype.createScaleMarker=function(e,t,r,i){var o=i.orientation,n=document.createElement("span");n.className="slider__scale-value slider__scale-value_"+o,e.append(n),n.innerHTML=t.toString(),this.updataScaleMarker(i);var a=this.convertPxToPercent(r,i);"horizontal"===o?n.style.left=a+"%":n.style.bottom=a+"%"},e.prototype.convertPxToPercent=function(e,t){return 100*e/t.size},e.prototype.onScaleClick=function(e){var t=e.target;if(t instanceof HTMLElement&&t.classList.contains("slider__scale-value")){var r=Number(t.innerHTML),i=new CustomEvent("scaleclick",{bubbles:!0,detail:{event:e,value:r}});t.dispatchEvent(i)}},e}();t.Scale=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bar=void 0;var i=function(){function e(e){this.create(e)}return e.prototype.create=function(e){var t=e.slider,r=e.orientation,i=document.createElement("div");i.className="slider__bar slider__bar_"+r,t.append(i),this.updataColor(e,i),this.updataBar(e,i)},e.prototype.upData=function(e){var t=e.slider.querySelector(".slider__bar");this.updataColor(e,t),this.updataBar(e,t)},e.prototype.updataColor=function(e,t){var r=e.color,i=e.isGradient,o=e.gradient,n=e.gradientDeg;!0===e.isChangeColor&&(t.style.background=!0===i?"linear-gradient("+n+"deg, "+r+", "+o+")":r)},e.prototype.getRollerPositions=function(e){var t=e.slider.querySelectorAll(".slider__roller");return[this.calculatePosition(t[0],e),this.calculatePosition(t[1],e)].sort((function(e,t){return e-t}))},e.prototype.calculatePosition=function(e,t){var r="horizontal"===t.orientation?"left":"top",i=Number.parseInt(getComputedStyle(e).width,10);return e.getBoundingClientRect()[r]+i/2},e.prototype.convertPxToProcent=function(e,t){return 100*e/t.size},e.prototype.updataBar=function(e,t){var r=e.type,i="horizontal"===e.orientation,o=i?"left":"top",n=i?"width":"height",a=this.getRollerPositions(e),s="single"===r,l=this.getNewSliderPos(e);if(s)if(i){var c=this.convertPxToProcent(Math.abs(a[1]-l),e);t.style[o]="0%",t.style[n]=c+"%"}else{c=100-(d=this.convertPxToProcent(Math.abs(a[1]-l),e));t.style[o]=d+"%",t.style[n]=c+"%"}else{var d=this.convertPxToProcent(Math.abs(a[0]-l),e);c=this.convertPxToProcent(Math.abs(a[1]-a[0]),e);t.style[o]=d+"%",t.style[n]=c+"%"}},e.prototype.getNewSliderPos=function(e){var t=e.orientation,r=e.slider;return"horizontal"===t?r.getBoundingClientRect().left:r.getBoundingClientRect().top},e}();t.Bar=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allColors=void 0;t.allColors={"#f0f8ff":"aliceblue","#faebd7":"antiquewhite","#00ffff":"aqua","#7fffd4":"aquamarine","#f0ffff":"azure","#f5f5dc":"beige","#ffe4c4":"bisque","#000000":"black","#ffebcd":"blanchedalmond","#0000ff":"blue","#8a2be2":"blueviolet","#a52a2a":"brown","#deb887":"burlywood","#5f9ea0":"cadetblue","#7fff00":"chartreuse","#d2691e":"chocolate","#ff7f50":"coral","#6495ed":"cornflowerblue","#fff8dc":"cornsilk","#dc143c":"crimson","#00008b":"darkblue","#008b8b":"darkcyan","#b8860b":"darkgoldenrod","#a9a9a9":"darkgray","#006400":"darkgreen","#bdb76b":"darkkhaki","#8b008b":"darkmagenta","#556b2f":"darkolivegreen","#ff8c00":"darkorange","#9932cc":"darkorchid","#8b0000":"darkred","#e9967a":"darksalmon","#8fbc8f":"darkseagreen","#483d8b":"darkslateblue","#5ddfbe":"aquamarine","#198000":"Зеленый","#2f4f4f":"darkslategray","#00ced1":"darkturquoise","#9400d3":"darkviolet","#ff1493":"deeppink","#00bfff":"deepskyblue","#696969":"dimgray","#1e90ff":"dodgerblue","#b22222":"firebrick","#fffaf0":"floralwhite","#228b22":"forestgreen","#ff00ff":"fuchsia","#dcdcdc":"gainsboro","#f8f8ff":"ghostwhite","#daa520":"goldenrod","#ffd700":"gold","#808080":"gray","#008000":"Зеленый","#adff2f":"greenyellow","#f0fff0":"honeydew","#ff69b4":"hotpink","#cd5c5c":"indianred","#4b0082":"indigo","#fffff0":"ivory","#f0e68c":"khaki","#fff0f5":"lavenderblush","#e6e6fa":"lavender","#7cfc00":"lawngreen","#fffacd":"lemonchiffon","#add8e6":"lightblue","#f08080":"lightcoral","#e0ffff":"lightcyan","#fafad2":"lightgoldenrodyellow","#d3d3d3":"lightgray","#90ee90":"lightgreen","#ffb6c1":"lightpink","#ffa07a":"lightsalmon","#20b2aa":"lightseagreen","#87cefa":"lightskyblue","#778899":"lightslategray","#b0c4de":"lightsteelblue","#ffffe0":"lightyellow","#00ff00":"lime","#32cd32":"limegreen","#faf0e6":"linen","#800000":"maroon","#66cdaa":"mediumaquamarine","#0000cd":"mediumblue","#ba55d3":"mediumorchid","#9370db":"mediumpurple","#3cb371":"mediumseagreen","#7b68ee":"mediumslateblue","#00fa9a":"mediumspringgreen","#48d1cc":"mediumturquoise","#c71585":"mediumvioletred","#191970":"midnightblue","#f5fffa":"mintcream","#ffe4e1":"mistyrose","#ffe4b5":"moccasin","#ffdead":"navajowhite","#000080":"navy","#fdf5e6":"oldlace","#808000":"olive","#6b8e23":"olivedrab","#ffa500":"orange","#ff4500":"orangered","#da70d6":"orchid","#eee8aa":"palegoldenrod","#98fb98":"palegreen","#afeeee":"paleturquoise","#db7093":"palevioletred","#ffefd5":"papayawhip","#ffdab9":"peachpuff","#cd853f":"peru","#ffc0cb":"pink","#dda0dd":"plum","#b0e0e6":"powderblue","#800080":"purple","#663399":"rebeccapurple","#ff0000":"Красный","#bc8f8f":"rosybrown","#4169e1":"royalblue","#8b4513":"saddlebrown","#fa8072":"salmon","#f4a460":"sandybrown","#2e8b57":"seagreen","#fff5ee":"seashell","#a0522d":"sienna","#c0c0c0":"silver","#87ceeb":"skyblue","#6a5acd":"slateblue","#708090":"slategray","#fffafa":"snow","#00ff7f":"springgreen","#4682b4":"steelblue","#d2b48c":"tan","#008080":"teal","#d8bfd8":"thistle","#ff6347":"tomato","#40e0d0":"turquoise","#ee82ee":"violet","#f5deb3":"wheat","#ffffff":"Белый","#f5f5f5":"whitesmoke","#ffff00":"Желтый","#9acd32":"Яблочно-зеленый","#e58000":"Морковный","#cc0000":"Бостонский-красный","#330000":"Коричневый","#7f8000":"Оливковый","#990000":"Сангрия","#b28000":"Темно-золотой","#4c8000":"Нежно-оливковый","#660000":"Коричнево-малиновый","#6c6000":"Оливковый","#6a55c3":"Пурпурно-синий","#67c8f6":"Ярко-голубой","#492f5c":"Глубокий-фиолетовый","#5cd1ec":"Голубой","#13ff42":"Ярко-зеленый","#1da426":"Пастельно-зеленый","#2fdbc0":"Бирюзовый","#386748":"Темно-зеленый","#59a9c1":"Темно-голубой","#146666":"Темно-бирюзовый","#c80993":"Фиолетово-красный","#fa0bf8":"Фуксия","#190132":"Темно-фиолетовый","#320262":"Темно-фиолетовый","#4b0397":"Индиго","#af0861":"Розовато-лиловый","#e10ac6":"Малиновый","#96072e":"Бургундский","#6404ca":"Пурпурно-синий","#7d05fc":"Фиолетовый","#320265":"Темный индиго","#0":"#000",orange:"Оранжевый",purple:"Фиолетовый","#4be74d":"Малахитовый","#653466":"Пурпурный","#329a33":"Зеленый","#194d1a":"Темно-зеленый","#fd02ff":"Розовый","#b11bb3":"Фиолетово-баклажанный","#e3b5e6":"Светло-розовый"}},function(e,t,r){}]);