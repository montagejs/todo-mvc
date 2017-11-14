var Component=require("montage/ui/component").Component,dom=require("montage/core/dom");exports.InputRange=Component.specialize({_min:{value:null},min:{get:function(){return this._min},set:function(t){this._min="string"==typeof t?parseFloat(t):t,this.needsDraw=!0}},_max:{value:null},max:{get:function(){return this._max},set:function(t){this._max="string"==typeof t?parseFloat(t):t,this.needsDraw=!0}},_step:{value:null},step:{get:function(){return this._step},set:function(t){this._step="string"==typeof t?parseFloat(t):t,this.needsDraw=!0}},_width:{value:null},width:{get:function(){return this._width},set:function(t){this._width="string"==typeof t?parseFloat(t):t,this.needsDraw=!0}},percent:{value:null},_valueSyncedWithPosition:{value:null},_value:{value:null},value:{get:function(){return this._value},set:function(t,e){this._value="string"==typeof t?parseFloat(t):t,e?this._valueSyncedWithPosition=!0:(this._valueSyncedWithPosition=!1,this.needsDraw=!0)}},_handleEl:{value:null},_translateComposer:{value:null},_sliderWidth:{value:null},__positionX:{value:null},_positionX:{get:function(){return this.__positionX},set:function(t,e){null===t||isNaN(t)||(this.__positionX=t,e||this._calculateValueFromPosition(),this.needsDraw=!0)}},_touchOnHandle:{value:null},__clickTarget:{value:null},_clickTarget:{get:function(){return this.__clickTarget},set:function(t){this.__clickTarget=t,this.needsDraw=!0}},_handleWidth:{value:null},_calculateValueFromPosition:{value:function(){if(this._sliderWidth>0){var t=this.percent=this._positionX/this._sliderWidth*100,e=this.min+t/100*(this.max-this.min);Object.getPropertyDescriptor(this,"value").set.call(this,e,!0),this._valueSyncedWithPosition=!0}}},_calculatePositionFromValue:{value:function(){if(this._sliderWidth){var t,e=(this.value,this.max-this.min);t=(this.value-this.min)/e*100;var i=t/100*this._sliderWidth;Object.getPropertyDescriptor(this,"_positionX").set.call(this,i,!0),this.percent=t,this._valueSyncedWithPosition=!0}else this._valueSyncedWithPosition=!1}},enterDocument:{value:function(t){t&&(this.min=this.min||this.element.getAttribute("min")||0,this.max=this.max||this.element.getAttribute("max")||100,this.step=this.step||this.element.getAttribute("step")||1,this.value=this.value||this.element.getAttribute("value")||0)}},prepareForActivationEvents:{value:function(){this._translateComposer.addEventListener("translateStart",this,!1),this._translateComposer.addEventListener("translate",this,!1),this._translateComposer.addEventListener("translateEnd",this,!1),this._addEventListeners()}},_addEventListeners:{value:function(){window.Touch?this.element.addEventListener("touchstart",this,!1):this.element.addEventListener("mousedown",this,!1),this._touchOnHandle=!1}},_removeEventListeners:{value:function(){window.Touch?this.element.removeEventListener("touchstart",this,!1):this.element.removeEventListener("mousedown",this,!1)}},_startTranslateX:{enumerable:!1,value:null},_startPositionX:{enumerable:!1,value:null},handleTranslateStart:{value:function(t){this._startTranslateX=t.translateX,this._startPositionX=this.__positionX,this._removeEventListeners(),this._valueSyncedWithPosition=!1}},handleTranslate:{value:function(t){if(!window.Touch||window.Touch&&this._touchOnHandle){var e=this._startPositionX+t.translateX-this._startTranslateX;e<0?e=0:e>this._sliderWidth&&(e=this._sliderWidth),this._positionX=e}}},handleTranslateEnd:{value:function(t){this._addEventListeners()}},handleMousedown:{value:function(t){this._clickTarget={x:t.pageX,y:t.pageY}}},handleTouchstart:{value:function(t){var e=t.targetTouches[0];this._touchOnHandle=e.target===this._handleEl}},surrenderPointer:{value:function(t,e){return!1}},willDraw:{value:function(){if(this._handleWidth=this._handleEl.offsetWidth,this._sliderWidth=this.element.offsetWidth-this._handleWidth,this._clickTarget){var t=dom.convertPointFromNodeToPage(this.element).x,e=this._clickTarget.x-(t+this._handleWidth/2);e<0&&(e=0),this._positionX=e,this._clickTarget=null}this._valueSyncedWithPosition||this._calculatePositionFromValue()}},draw:{value:function(){var t=this._handleEl;null!=t.style.webkitTransform?t.style.webkitTransform="translate3d("+this._positionX+"px,0,0)":null!=t.style.MozTransform?t.style.MozTransform="translate3d("+this._positionX+"px,0,0)":null!=t.style.transform?t.style.transform="translate3d("+this._positionX+"px,0,0)":t.style.left=this._positionX+"px"}}});