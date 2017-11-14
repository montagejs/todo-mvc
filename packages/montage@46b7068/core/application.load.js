montageDefine("46b7068","core/application",{dependencies:["./target","../window-loader/montage-window","./dom","./template"],factory:function(t,n,e){var i,o=t("./target").Target,a=t("../window-loader/montage-window").MontageWindow;t("./dom");var r="-is-first-load";n.Application=o.specialize({eventManager:{value:null},parentApplication:{value:null},name:{value:null},_isFirstLoad:{value:null},isFirstLoad:{get:function(){return this._isFirstLoad}},mainApplication:{get:function(){for(var t=this;t.parentApplication;)t=t.parentApplication;return t}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(t){null==this.parentApplication?["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(t)!==-1&&(this._windowsSortOrder=t):this.mainApplication.windowsSortOrder=t}},windows:{get:function(){if(null==this.parentApplication){if(!this._windows){var t=new a;t.application=this,t.window=window,this.window=t,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var t=new a;t.application=this,t.window=window,this._window=t}return this._window},set:function(t){this._window||(this._window=t)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(t){return t.defaultEventMananger}},focusWindow:{get:function(){var t=this.windows,n=this.windowsSortOrder;if("z-order"==n)return t[0];if("reverse-z-order"==n)return t[t.length-1];for(var e in t)if(t[e].focused)return t[e]}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(t,n,e){var i,o,r=this,l=new a,s={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},p={module:t,name:n,parent:window,callback:function(t,n){var e;i=t.document.application,l.window=t,l.application=i,l.component=n,i.window=l,r.attachedWindows.push(l),e=r.mainApplication.windowsSortOrder,"z-order"==e||"reverse-open-order"==e?r.windows.unshift(l):r.windows.push(l),o=document.createEvent("CustomEvent"),o.initCustomEvent("load",!0,!0,null),l.dispatchEvent(o)}};if(this===this.mainApplication&&!this._multipleWindow){this.window}if("object"==typeof e){var u,d,c="",w="";for(u in e)e.hasOwnProperty(u)&&(s[u]=e[u])}var h=["name"];for(u in s)h.indexOf(u)==-1&&(d=s[u],"boolean"==typeof d?d=d?"yes":"no":(d=String(d),d.match(/[ ,"]/)&&(d='"'+d.replace(/"/g,'\\"')+'"')),w+=c+u+"="+d,c=",");return global.require.loadPackage({name:"montage"}).then(function(t){var n=window.open(t.location+"window-loader/index.html","_blank",w);n.loadInfo=p}),l}},attachWindow:{value:function(t){var n,e=t.application.parentApplication;return e!==this&&(e&&e.detachWindow(t),t.parentApplication=this,this.attachedWindows.push(t),n=this.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?this.windows.unshift(t):this.windows.push(t),t.focus()),t}},detachWindow:{value:function(t){var n,e,i=this.windows;return void 0===t&&(t=this.window),e=t.application.parentApplication,e==this?(n=this.attachedWindows.indexOf(t),n!==-1&&this.attachedWindows.splice(n,1),n=i.indexOf(t),n!==-1&&i.splice(n,1),t.application.parentApplication=null):e&&e.detachWindow(t),t}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(e,i){var o,a=this;return this.name=e.packageDescription.name,this._loadApplicationContext(),n.application=a,t.async("ui/component").then(function(n){return o=n.__root__,o.element=document,t("./template").instantiateDocument(window.document,e).then(function(t){return a.callDelegateMethod("willFinishLoading",a),o.needsDraw=!0,i&&i(a),a})})}},_loadApplicationContext:{value:function(){if(null===this._isFirstLoad){var t=this.name+r,n=localStorage.getItem(t);if(null===n)try{localStorage.setItem(t,!0)}catch(e){console.log("In private mode you are")}this._isFirstLoad=!n}}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(t){return"alert"===t||"confirm"===t||"notify"===t}},_createPopupSlot:{value:function(t){var n=document.createElement("div");document.body.appendChild(n),n.style.zIndex=t,n.style.position="absolute";var e=new i;return e.element=n,e.attachToParentComponent(),e}},getPopupSlot:{value:function(n,e,o){var a=this;t.async("ui/slot.reel/slot").then(function(t){i=i||t.Slot,n=n||"custom";var r,l,s=a._isSystemPopup(n);if(a.popupSlots=a.popupSlots||{},s)switch(n){case"alert":r=19004;break;case"confirm":r=19003;break;case"notify":r=19002}else a._zIndex?a._zIndex=a._zIndex+1:a._zIndex=17e3,r=a._zIndex;l=a.popupSlots[n],l||(l=a.popupSlots[n]=a._createPopupSlot(r)),s||(l.element.style.zIndex=r),l.content=e,o.call(this,l)})}},returnPopupSlot:{value:function(t){var n=this;if(n.popupSlots&&n.popupSlots[t]){var e=n.popupSlots[t];e.content=null}}},_getActivePopupSlots:{value:function(){var t=[];if(this.popupSlots){var n=Object.keys(this.popupSlots);if(n&&n.length>0){var e,i,o=n.length;for(e=0;e<o;e++)i=this.popupSlots[n[e]],i&&null!==i.content&&t.push(i)}}return t}}})}});