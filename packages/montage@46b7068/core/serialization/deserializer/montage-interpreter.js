var Montage=require("../../core").Montage,MontageReviver=require("./montage-reviver").MontageReviver,Promise=require("../../promise").Promise,MontageInterpreter=Montage.specialize({_require:{value:null},_reviver:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw new Error("Function 'require' missing.");return this._reviver=(new MontageReviver).init(e,t),this._require=e,this}},instantiate:{value:function(e,t,i){var r;return r=(new MontageContext).init(e,this._reviver,t,i,this._require),r.getObjects()}},preloadModules:{value:function(e){var t,i,r,n,s=this._reviver,u=s.moduleLoader,o=[];for(var a in e)t=e[a],i=t.prototype||t.object,i&&(r=MontageReviver.parseObjectLocationId(i),n=u.getModule(r.moduleId,a),Promise.is(n)&&o.push(n));if(o.length>0)return Promise.all(o)}}}),MontageContext=Montage.specialize({_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},_objects:{value:null},_userObjects:{value:null},_serialization:{value:null},_reviver:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,t,i,r,n){if(this._reviver=t,this._serialization=e,this._objects=Object.create(null),i){this._userObjects=Object.create(null);for(var s in i)this._userObjects[s]=i[s]}return this._element=r,this._require=n,this}},setObjectLabel:{value:function(e,t){this._objects[t]=e}},getObject:{value:function(e){var t,i=this._serialization,r=this._reviver,n=this._objects;return e in n?n[e]:e in i?(t=r.reviveRootObject(i[e],this,e),e in n||(n[e]=t),t):Promise.reject(new Error("Object with label '"+e+"' was not found."))}},getObjects:{value:function(){var e,t=this,i=this._serialization,r=[];for(var n in i)e=this.getObject(n),Promise.is(e)&&r.push(e);return 0===r.length?Promise.resolve(this._invokeDidReviveObjects()):Promise.all(r).then(function(){return t._invokeDidReviveObjects()})}},hasUserObject:{value:function(e){var t=this._userObjects;return!!t&&e in t}},getUserObject:{value:function(e){var t=this._userObjects;if(t)return t[e]}},_invokeDidReviveObjects:{value:function(){var e,t=this,i=this._reviver;return"function"==typeof i.didReviveObjects&&(e=i.didReviveObjects(this._objects,this),Promise.is(e))?e.then(function(){return t._objects}):this._objects}},hasObject:{value:function(e){return e in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(t)}},setUnitsToDeserialize:{value:function(e,t,i){this._unitsToDeserialize.push({object:e,objectDesc:t,unitNames:i})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});exports.MontageInterpreter=MontageInterpreter,exports.MontageContext=MontageContext;