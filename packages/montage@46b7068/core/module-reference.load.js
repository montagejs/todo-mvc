montageDefine("46b7068","core/module-reference",{dependencies:["./core"],factory:function(e,r,i){var t=e("./core").Montage;r.ModuleReference=t.specialize({initWithIdAndRequire:{value:function(e,r){if(!e||!r)throw new Error("Module ID and require required");return this.id=e,this.require=r,this}},id:{value:null},require:{value:null},_exports:{value:null},exports:{get:function(){return this._exports?this._exports:this._exports=this.require.async(this.id)}},resolve:{value:function(e){return e.identify(this.id,this.require)}},isModuleReference:{writable:!1,configurable:!1,value:!0}})}});