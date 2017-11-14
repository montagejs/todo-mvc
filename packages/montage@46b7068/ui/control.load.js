montageDefine("46b7068","ui/control",{dependencies:["ui/component","core/deprecate","collections/map"],factory:function(e,t,n){var i=e("ui/component").Component,a=(e("core/deprecate"),e("collections/map")),s=t.Control=i.specialize({constructor:{value:function(){this.defineBindings({"classList.has('montage--disabled')":{"<-":"disabled"},"classList.has('montage--active')":{"<-":"active"}})}},dispatchActionEvent:{value:function(){return this.dispatchEvent(this.createActionEvent())}},actionCompletionPromise:{value:void 0},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new a),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}},hasTemplate:{get:function(){return!this.hasStandardElement}},standardElementTagName:{value:"INPUT"},_hasStandardElement:{value:null},hasStandardElement:{get:function(){return"boolean"==typeof this._hasStandardElement?this._hasStandardElement:this._hasStandardElement=this.element.tagName===this.standardElementTagName}},prepareForActivationEvents:{value:function(){this.element.addEventListener("focus",this,!1),this.element.addEventListener("blur",this,!1)}},active:{value:!1},enabled:{get:function(){return!this.disabled},set:function(e){"boolean"==typeof e&&(this.disabled=!e)}},_focusBlur:{value:void 0},focus:{value:function(){this._focusBlur=1,this.needsDraw=!0,this.preparedForActivationEvents||this._prepareForActivationEvents()}},blur:{value:function(){this._focusBlur=0,this.needsDraw=!0}},hasFocus:{enumerable:!1,value:!1},_elementNeedsTabIndexRegex:{value:/INPUT|TEXTAREA|A|SELECT|BUTTON|LABEL/},_elementNeedsTabIndex:{value:function(){return null===this.element.tagName.match(this._elementNeedsTabIndexRegex)}},draw:{value:function(){this._elementNeedsTabIndex()&&(this._preventFocus?this.element.removeAttribute("tabindex"):this.element.setAttribute("tabindex","0")),1===this._focusBlur?this._element.focus():0!==this._focusBlur&&this.drawsFocusOnPointerActivation||this._element.blur(),this._focusBlur=void 0}},acceptsActiveTarget:{get:function(){var e=this.callDelegateMethod("shouldBeginEditing",this);return e!==!1}},willBecomeActiveTarget:{value:function(e){this.hasFocus=!0,this.callDelegateMethod("didBeginEditing",this)}},surrendersActiveTarget:{value:function(e){var t=this.callDelegateMethod("shouldEndEditing",this);return t!==!1&&(this.hasFocus=!1,this.callDelegateMethod("didEndEditing",this),!0)}},_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){this._preventFocus=!!e,this.needsDraw=!0}},drawsFocusOnPointerActivation:{value:!1},handleFocus:{enumerable:!1,value:function(e){this.hasFocus=!0,this.drawsFocusOnPointerActivation=!0}},handleBlur:{enumerable:!1,value:function(e){this.hasFocus=!1,this.drawsFocusOnPointerActivation=!1,this.callDelegateMethod("didEndEditing",this),this.dispatchActionEvent()}},_value:{value:null},elementValue:{get:function(){return this.element.value}},value:{get:function(){return this._value},set:function(e,t){if(e!==this._value){var n;if(!this.delegate||void 0===(n=this.callDelegateMethod("shouldAcceptValue",this,e))||n){if(this.converter){var i;try{i=this.converter.revert(e),this.error=null,this._value=i}catch(a){this._value=e,this.error=""!==e&&void 0!==e&&null!==e?a:null}}else this._value=e,this.error=null;this.callDelegateMethod("didChange",this),this._elementAttributeValues.value=e,this.needsDraw=!0}}}},converter:{value:null},_error:{value:null},error:{get:function(){return this._error},set:function(e){this._error=e,this.errorMessage=this._error?this._error.message:null,this.needsDraw=!0}},_errorMessage:{value:null},errorMessage:{get:function(){return this._errorMessage},set:function(e){this._errorMessage=e}},takeValueFromElement:{value:function(){this.value=this.elementValue}},isContinuous:{value:!1}});s.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},form:null,name:null,readonly:{value:!1,dataType:"boolean"}})}});