montageDefine("aa0acb4","ui/token-field/token.reel/token",{dependencies:["montage/ui/component"],factory:function(e,t,n){var l=e("montage/ui/component").Component;t.Token=l.specialize({_text:{value:null},text:{dependencies:["value","textPropertyPath"],get:function(){var e,t;return null==this._text&&(this._adHoc=!1,e=this.textPropertyPath,t=this.value,null!=e&&null!=t?"undefined"==typeof t[e]&&this.allowAdHocValues?(this._adHoc=!0,this._text=t):this._text=t[e]:this._text=t),this._text}},allowAdHocValues:{value:null},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._text=null}},textPropertyPath:{value:null},tokensController:{value:null},__adHoc:{value:null},_adHoc:{get:function(){return this.__adHoc},set:function(e){this.__adHoc=e,this.needsDraw=!0}},_deleteEl:{value:null},enterDocument:{value:function(e){e&&(window.Touch?this._deleteEl.addEventListener("touchend",this):this._deleteEl.addEventListener("click",this))}},draw:{value:function(){this.element.classList[this._adHoc?"add":"remove"]("montage-Token--adhoc")}},removeSelf:{value:function(){this.tokensController.selectedObjects=[this.value],this.tokensController.removeObjectsAtSelectedIndexes(),this.tokensController.selectedIndexes=[]}},handleClick:{value:function(e){this.removeSelf()}},handleTouchend:{value:function(e){this.removeSelf()}}})}});