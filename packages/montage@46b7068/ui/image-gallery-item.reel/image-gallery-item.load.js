montageDefine("46b7068","ui/image-gallery-item.reel/image-gallery-item",{dependencies:["ui/component"],factory:function(e,t,s){var i=e("ui/component").Component;t.ImageGalleryItem=i.specialize({enterDocument:{value:function(){this._image.addEventListener("load",this,!1),this._image.addEventListener("error",this,!1)}},_src:{value:null},_needsUpdateStatus:{value:!1},__status:{value:null},_status:{get:function(){return this.__status},set:function(e){this.__status!==e&&(this.__status=e,this._needsUpdateStatus=!0,this.needsDraw=!0)}},handleLoad:{value:function(e){clearTimeout(this._loaderTimeout),this._status=null,e.target.removeEventListener("load",this,!1),e.target.removeEventListener("error",this,!1)}},handleError:{value:function(e){clearTimeout(this._loaderTimeout),this._status="error",e.target.removeEventListener("load",this,!1),e.target.removeEventListener("error",this,!1)}},_needsUpdateSource:{value:!1},src:{set:function(e){if(e){this._src!==e&&(this._src=e,this._needsUpdateSource=!0,this._status=null,this.needsDraw=!0)}}},_loaderTimeout:{value:null},draw:{value:function(){var e;if(this._needsUpdateStatus)switch(this._needsUpdateStatus=!1,this.__status){case"loading":this.loadingElement.style.display="block",this.errorElement.style.display="none";break;case"error":this.loadingElement.style.display="none",this.errorElement.style.display="block";break;default:this.loadingElement.style.display="none",this.errorElement.style.display="none"}this._needsUpdateSource&&(this._needsUpdateSource=!1,this._image.src=this._src,clearTimeout(this._loaderTimeout),e=this,this._loaderTimeout=setTimeout(function(){e._status="loading"},200),this._element.style.backgroundImage="url("+this._src+")")}}})}});