montageDefine("aa0acb4","ui/loading.reel/loading",{dependencies:["montage/ui/component"],factory:function(n,a,e){var i=n("montage/ui/component").Component;a.Loading=i.specialize({_loading:{value:null},loading:{get:function(){return this._loading},set:function(n){this._loading!==n&&(this._loading=n,this.needsDraw=!0)}},draw:{value:function(){var n=this.element.classList,a=n.contains("animate");this.loading?a||n.add("animate"):a&&n.remove("animate")}}})}});