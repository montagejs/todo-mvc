montageDefine("46b7068","ui/text-field.reel/text-field",{dependencies:["ui/text-input","../../composer/key-composer"],factory:function(e,t,o){var s=e("ui/text-input").TextInput,i=e("../../composer/key-composer").KeyComposer;t.TextField=s.specialize({constructor:{value:function(){s.constructor.call(this),this._keyComposer=new i,this._keyComposer.component=this,this._keyComposer.keys="enter",this.addComposer(this._keyComposer)}},hasTemplate:{value:!1},handleKeyPress:{value:function(e){this.disabled||e.keyComposer!==this._keyComposer||(this.takeValueFromElement(),this.dispatchActionEvent())}},prepareForActivationEvents:{value:function(){s.prototype.prepareForActivationEvents.call(this),this._keyComposer.addEventListener("keyPress",this,!1)}}})}});