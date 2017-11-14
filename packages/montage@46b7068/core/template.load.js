montageDefine("46b7068","core/template",{dependencies:["./core","core/serialization/deserializer/montage-deserializer","./document-part","./document-resources","./serialization/serialization","./serialization/serializer/montage-labeler","./promise","./mini-url","./logger","./event/event-manager","./application"],factory:function(e,t,n){function i(e,t,n){var i,r,a=new d,s=e.documentElement.outerHTML,o=new l,u=e.documentElement;return i=a.createHtmlDocumentWithHtml(s,e.location.href),a.initWithDocument(i,t).then(function(){return a.setBaseUrl(e.location.href),r=a._createTemplateObjects(n),o.initWithTemplateAndFragment(a),a._instantiateObjects(r,u).then(function(e){return o.objects=e,a._invokeDelegates(o),o})})}var r,a=e("./core").Montage,s=e("core/serialization/deserializer/montage-deserializer").MontageDeserializer,l=e("./document-part").DocumentPart,o=e("./document-resources").DocumentResources,u=e("./serialization/serialization").Serialization,c=e("./serialization/serializer/montage-labeler").MontageLabeler,h=e("./promise").Promise,m=e("./mini-url"),d=(e("./logger").logger("template"),e("./event/event-manager").defaultEventManager,a.specialize({_SERIALIZATION_SCRIPT_TYPE:{value:"text/montage-serialization"},_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},PARAM_ATTRIBUTE:{value:"data-param"},_require:{value:null},_resources:{value:null},_baseUrl:{value:null},_instances:{value:null},_metadata:{value:null},_objectsString:{value:null},objectsString:{get:function(){return this._objectsString},set:function(e){this._objectsString=e,this._serialization&&this._serialization.initWithString(e),this.__deserializer=null}},__deserializer:{value:null},_deserializer:{get:function(){var e,t,n=this.__deserializer;if(!n){if(e=this._metadata){t=Object.create(null);for(var i in e)t[i]=e[i].require}n=(new s).init(this.objectsString,this._require,t),this.__deserializer=n}return n}},getDeserializer:{value:function(){return this._deserializer}},_serialization:{value:null},getSerialization:{value:function(){var e=this._serialization;return e||(e=this._serialization=new u,e.initWithString(this.objectsString)),e}},_isDirty:{value:!1},isDirty:{get:function(){return this._isDirty},set:function(e){this._isDirty!==e&&(this._isDirty=e,this.clearTemplateFromElementContentsCache())}},refresher:{value:null},_document:{value:null},document:{get:function(){return this._isDirty&&this.refresh(),this._document},set:function(e){this._document=e}},initWithRequire:{value:function(e){return this._require=e,this.document=this.createHtmlDocumentWithHtml(""),this.objectsString="",this}},initWithDocument:{value:function(e,t){var n=this;return this._require=t,this.setDocument(e),this.getObjectsString(e).then(function(e){return n.objectsString=e,n})}},initWithHtml:{value:function(e,t){var n=this;return this._require=t,this.document=this.createHtmlDocumentWithHtml(e),this.getObjectsString(this.document).then(function(e){return n.objectsString=e,n})}},initWithObjectsAndDocumentFragment:{value:function(e,t,n){return this._require=n,this.document=this.createHtmlDocumentWithHtml(""),this.document.body.appendChild(this.document.importNode(t,!0)),this.setObjects(e),this}},initWithModuleId:{value:function(e,t){var n=this;return this._require=t,this.createHtmlDocumentWithModuleId(e,t).then(function(i){var r=t(e).directory;return n.document=i,n.setBaseUrl(r),n.getObjectsString(i).then(function(e){return n.objectsString=e,n})})}},clone:{value:function(){var e=new d;return e._require=this._require,e._baseUrl=this._baseUrl,e.setDocument(this.document),e.objectsString=this.objectsString,e._instances=Object.clone(this._instances,1),e}},instantiate:{value:function(e){return this.instantiateWithInstances(null,e)}},instantiateWithInstances:{value:function(e,t){var n,i,r,a=this,s=new l;return e=e||this._instances,n=this._createMarkupDocumentFragment(t),r=this._getParameters(n),s.initWithTemplateAndFragment(this,n),s.startActingAsTopComponent(),s.parameters=r,i=this._createTemplateObjects(e),this._instantiateObjects(i,n).then(function(n){var i;return s.objects=n,a._invokeDelegates(s,e),s.stopActingAsTopComponent(),i=a.getResources(),!i.resourcesLoaded()&&i.hasResources()&&i.loadResources(t),s})}},_objectsInstantiationOptimized:{value:!1},_optimizeObjectsInstantiationPromise:{value:null},_optimizeObjectsInstantiation:{value:function(){var e,t=this;if(!this._objectsInstantiationOptimized)return this._optimizeObjectsInstantiationPromise||(e=this._deserializer.preloadModules(),e?this._optimizeObjectsInstantiationPromise=e.then(function(){t._objectsInstantiationOptimized=!0}):this._objectsInstantiationOptimized=!0),this._optimizeObjectsInstantiationPromise}},setBaseUrl:{value:function(e){this._baseUrl=e}},getBaseUrl:{value:function(){return this._baseUrl}},getResources:{value:function(){var e=this._resources;return e||(e=this._resources=new _,e.initWithTemplate(this)),e}},_createTemplateObjects:{value:function(t){var n=Object.create(t||null);return"undefined"==typeof r&&(r=e("./application").application),n.application=r,n.template=this,n}},_instantiateObjects:{value:function(e,t){var n,i=this._deserializer;return h.is(i)?i:(n=this._optimizeObjectsInstantiation(),n?n.then(function(){return i.deserialize(e,t)}):i.deserialize(e,t))}},_createMarkupDocumentFragment:{value:function(e){for(var t=e.createDocumentFragment(),n=this.document.body.childNodes,i=0,r=n.length;i<r;i++)t.appendChild(e.importNode(n[i],!0));return t}},getParameterName:{value:function(e){return e.getAttribute(this.PARAM_ATTRIBUTE)}},getParameters:{value:function(){return this._getParameters(this.document.body)}},_getParameters:{value:function(e){for(var t,n,i=e.querySelectorAll("*["+this.PARAM_ATTRIBUTE+"]"),r=i.length,a={},s=0;s<r;s++){if(t=i[s],n=this.getParameterName(t),n in a)throw new Error('The parameter "'+n+'" is declared more than once in '+this.getBaseUrl()+".");a[n]=t}return a}},hasParameters:{value:function(){return!!this.document.querySelector("*["+this.PARAM_ATTRIBUTE+"]")}},_invokeDelegates:{value:function(e,t){var n,i,r,a=e.objects,s=a.owner||t&&t.owner;for(var l in a)t&&l in t||(n=a[l],i=this._getObjectOwner(l,s),r=this._getObjectLabel(l),n&&("function"==typeof n._deserializedFromTemplate&&n._deserializedFromTemplate(i,r,e),"function"==typeof n.deserializedFromTemplate&&n.deserializedFromTemplate(i,r,e)));if(s){var o=this.getSerialization();o.isExternalObject("owner")||("function"==typeof s._templateDidLoad&&s._templateDidLoad(e),"function"==typeof s.templateDidLoad&&s.templateDidLoad(e))}}},setInstances:{value:function(e){this._instances=e}},getInstances:{value:function(){return this._instances}},setObjects:{value:function(e){this.objectsString=JSON.stringify(e,null,4)}},setObjectMetadata:{value:function(e,t,n,i){var r=this._metadata;r||(this._metadata=r=Object.create(null)),r[e]={require:t,label:n,owner:i},this.__deserializer=null}},getObjectMetadata:{value:function(e){var t=this._metadata;return t&&e in t?t[e]:{require:this._require,label:e}}},_getObjectOwner:{value:function(e,t){var n,i=this._metadata;return n=i&&e in i?i[e].owner:t}},_getObjectLabel:{value:function(e){var t,n=this._metadata;return t=n&&e in n?n[e].label:e}},setDocument:{value:function(e){this.document=this.cloneHtmlDocument(e),this.clearTemplateFromElementContentsCache()}},getObjectsString:{value:function(e){var t;return t=this.getInlineObjectsString(e),null===t?this.getExternalObjectsString(e):h.resolve(t)}},getInlineObjectsString:{value:function(e){var t="script[type='"+this._SERIALIZATION_SCRIPT_TYPE+"']",n=e.querySelector(t);return n?n.textContent:null}},getExternalObjectsString:{value:function(e){var t,n=e.querySelector('link[rel="serialization"]');return n?t=new h(function(e,t){var i=new XMLHttpRequest,r=n.getAttribute("href");i.open("GET",r),i.addEventListener("load",function(n){var i=n.target;200==i.status?e(i.responseText):t(new Error("Unable to retrive '"+r+"', code status: "+i.status))},!1),i.addEventListener("error",function(e){t(new Error("Unable to retrive '"+r+"' with error: "+e.error+"."))},!1),i.send()}):h.resolve(null)}},createHtmlDocumentWithHtml:{value:function(e,t){var n=document.implementation.createHTMLDocument("");return e&&(n.documentElement.innerHTML=e,t&&this.normalizeRelativeUrls(n,t)),n}},cloneHtmlDocument:{value:function(e){var t=document.implementation.createHTMLDocument(""),n=e.baseURI||e.URL;return t.replaceChild(t.importNode(e.documentElement,!0),t.documentElement),this.normalizeRelativeUrls(t,n),t}},createHtmlDocumentWithModuleId:{value:function(e,t){var n=this;return"function"!=typeof t?h.reject(new Error("Missing 'require' function to load module '"+e+"'.")):t.async(e).then(function(e){return n.createHtmlDocumentWithHtml(e.content,e.directory)})}},_removeObjects:{value:function(e){var t="script[type='"+this._SERIALIZATION_SCRIPT_TYPE+"'], link[rel='serialization']";Array.prototype.forEach.call(e.querySelectorAll(t),function(e){e.parentNode.removeChild(e)})}},_addObjects:{value:function(e,t){if(t){var n=e.createElement("script");n.setAttribute("type",this._SERIALIZATION_SCRIPT_TYPE),n.textContent=JSON.stringify(JSON.parse(t),null,4),e.head.appendChild(n)}}},_templateFromElementContentsCache:{value:null},clearTemplateFromElementContentsCache:{value:function(){this._templateFromElementContentsCache=null}},createTemplateFromElementContents:{value:function(e){var t,n,i,r=this._templateFromElementContentsCache;return r||(r=Object.create(null),this._templateFromElementContentsCache=r),e in r?Object.create(r[e]):(t=this.getElementById(e),i=this.document.createRange(),i.selectNodeContents(t),n=this.createTemplateFromRange(i),r[e]=n,Object.create(n))}},createTemplateFromElement:{value:function(e){var t,n;return t=this.getElementById(e),n=this.document.createRange(),n.selectNode(t),this.createTemplateFromRange(n)}},createTemplateFromRange:{value:function(e){var t,n,i,r,a,s=new u;return t=e.cloneContents(),n=this._getChildrenElementIds(t),s.initWithString(this.objectsString),i=s.getSerializationLabelsWithElements(n),a=s.extractSerialization(i,["owner"]),r=new d,r.initWithObjectsAndDocumentFragment(null,t,this._require),r.objectsString=a.getSerializationString(),r._resources=this.getResources(),r}},_createSerializationWithElementIds:{value:function(e){var t,n,i=new u;return i.initWithString(this.objectsString),t=i.getSerializationLabelsWithElements(e),n=i.extractSerialization(t,["owner"])}},expandParameters:{value:function(e){var t,n,i,r,a,s,l,o=[],u={},c=this.getSerialization(),h={};t=this.getParameters();for(var m in t)if(r=t[m],a=e.getTemplateArgumentElement(m),o.push.apply(o,this._getElementIds(a)),n=this.replaceNode(a,r))for(var d in n)u[d]=n[d];return h.elementIds=o,h.elementIdsCollisions=u,s=e.getTemplateArgumentSerialization(o),s.renameElementReferences(u),l=function(t){if(t.indexOf(":")>0)return e.resolveTemplateArgumentTemplateProperty(t)},i=c.mergeSerialization(s,{willMergeObjectWithLabel:l}),this.objectsString=c.getSerializationString(),h.labels=s.getSerializationLabels(),h.labelsCollisions=i,h}},_resolveElementIdCollisions:{value:function(e,t){var n,i,r,a,s;t=t||new c,r=this.getElementIds();for(var l,o=0;l=r[o];o++)t.addLabel(l);i=this._getElements(e);for(var l in i)this.getElementById(l)&&(a=i[l],s=t.generateLabel(t.getLabelBaseName(l)),this.setElementId(a,s),n||(n=Object.create(null)),n[l]=s);return n}},replaceNode:{value:function(e,t,n){var i;return i=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.replaceChild(e,t),i}},insertNodeBefore:{value:function(e,t,n){var i;return i=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.insertBefore(e,t),i}},appendNode:{value:function(e,t,n){var i;return i=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.appendChild(e),i}},getElementId:{value:function(e){if(e.getAttribute)return e.getAttribute(this._ELEMENT_ID_ATTRIBUTE)}},setElementId:{value:function(e,t){e.setAttribute(this._ELEMENT_ID_ATTRIBUTE,t)}},getElementIds:{value:function(){return this._getElementIds(this.document.body)}},_getElements:{value:function(e){var t,n,i="*["+this._ELEMENT_ID_ATTRIBUTE+"]",r={};t=e.querySelectorAll(i);for(var a,s=0;a=t[s];s++)n=this.getElementId(a),r[n]=a;return n=this.getElementId(e),n&&(r[n]=e),r}},_getChildrenElementIds:{value:function(e){var t,n="*["+this._ELEMENT_ID_ATTRIBUTE+"]",i=[];t=e.querySelectorAll(n);for(var r,a=0;r=t[a];a++)i.push(this.getElementId(r));return i}},_getElementIds:{value:function(e){var t,n=this._getChildrenElementIds(e);return t=this.getElementId(e),t&&n.push(t),n}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+"='"+e+"']";return this.document.querySelector(t)}},html:{get:function(){var e=this.document;return this._removeObjects(e),this._addObjects(e,this.objectsString),this._getDoctypeString(e.doctype)+"\n"+e.documentElement.outerHTML}},_getDoctypeString:{value:function(e){return"<!DOCTYPE "+e.name+(e.publicId?' PUBLIC "'+e.publicId+'"':"")+(!e.publicId&&e.systemId?" SYSTEM":"")+(e.systemId?' "'+e.systemId+'"':"")+">"}},normalizeRelativeUrls:{value:function(e,t){if("string"==typeof t&&""!==t&&"about:blank"!==t)for(var n="http://www.w3.org/1999/xlink",i=/^[\w\-]+:|^\//,r=d._NORMALIZED_TAG_NAMES.indexOf(e.tagName)!==-1?[e]:e.querySelectorAll(d._NORMALIZED_TAG_NAMES_SELECTOR),a=0,s=r.length;a<s;a++){var l,o=r[a];"image"===o.tagName?(l=o.getAttributeNS(n,"href"),i.test(l)||o.setAttributeNS(n,"href",m.resolve(t,l))):o.hasAttribute("src")?(l=o.getAttribute("src"),""===l||i.test(l)||o.setAttribute("src",m.resolve(t,l))):o.hasAttribute("href")&&(l=o.getAttribute("href"),""===l||i.test(l)||o.setAttribute("href",m.resolve(t,l)))}}},replaceContentsWithTemplate:{value:function(e){this._require=e._require,this._baseUrl=e._baseUrl,this._document=e._document,this.objectsString=e.objectsString,this._instances=e._instances,this._templateFromElementContentsCache=e._templateFromElementContentsCache,this._metadata=e._metadata}},refresh:{value:function(){this.isDirty&&(this.refresher&&"function"==typeof this.refresher.refreshTemplate?(this.refresher.refreshTemplate(this),this.isDirty=!1):console.warn("Not able to refresh without a refresher.refreshTemplate."))}}},{_templateCache:{value:{moduleId:Object.create(null)}},_getTemplateCacheKey:{value:function(e,t){return e=t.resolve(e),t.location+"#"+e}},getTemplateWithModuleId:{value:function(e,t){var n,i;return n=this._getTemplateCacheKey(e,t),i=this._templateCache.moduleId[n],i||(i=(new d).initWithModuleId(e,t),this._templateCache.moduleId[n]=i),i}},_NORMALIZED_TAG_NAMES:{value:["IMG","image","IFRAME","link","script"]},__NORMALIZED_TAG_NAMES_SELECTOR:{value:null},_NORMALIZED_TAG_NAMES_SELECTOR:{get:function(){return this.__NORMALIZED_TAG_NAMES_SELECTOR||(this.__NORMALIZED_TAG_NAMES_SELECTOR=this._NORMALIZED_TAG_NAMES.join(",")),this.__NORMALIZED_TAG_NAMES_SELECTOR}}})),_=a.specialize({_resources:{value:null},_resourcesLoaded:{value:!1},template:{value:null},rootUrl:{value:""},constructor:{value:function(){this._resources=Object.create(null)}},initWithTemplate:{value:function(e){this.template=e}},hasResources:{value:function(){return this.getStyles().length>0||this.getScripts().length>0}},resourcesLoaded:{value:function(){return this._resourcesLoaded}},loadResources:{value:function(e){return this._resourcesLoaded=!0,h.all([this.loadScripts(e),this.loadStyles(e)])}},getScripts:{value:function(){var e,t,n,i=this._resources.scripts;if(!i){t=this.template,i=this._resources.scripts=[],n=t.document.querySelectorAll("script");for(var r=0,a=n.length;r<a;r++)e=n[r],e.type!==this.template._SERIALIZATION_SCRIPT_TYPE&&i.push(e)}return i}},loadScripts:{value:function(e){var t=this.getScripts(),n=t.length;if(n){for(var i=[],r=0;r<n;r++)i.push(this.loadScript(t[r],e));return h.all(i)}return h.resolve()}},loadScript:{value:function(e,t){var n,i;return n=o.getInstanceForDocument(t),i=this._cloneScriptElement(e,t),n.addScript(i)}},_cloneScriptElement:{value:function(e,t){for(var n,i=t.createElement("script"),r=e.attributes,a=0,s=r.length;a<s;a++)n=r[a],i.setAttribute(n.name,n.value);return i.textContent=e.textContent,i}},getStyles:{value:function(){var e,t,n,i=this._resources.styles;return i||(n='link[rel="stylesheet"], style',e=this.template,t=e.document.querySelectorAll(n),i=Array.prototype.slice.call(t,0),this._resources.styles=i),i}},loadStyles:{value:function(e){var t,n=[];t=this.getStyles();for(var i=0,r=t.length;i<r;i++)n.push(this.loadStyle(t[i],e));return h.all(n)}},loadStyle:{value:function(e,t){var n,i;return n=e.getAttribute("href"),n?(i=o.getInstanceForDocument(t),i.preloadResource(n)):h.resolve()}},createStylesForDocument:{value:function(e){for(var t,n,i=this.getStyles(),r=[],a=0;n=i[a];a++)t=e.importNode(n,!0),r.push(t);return r}}}),v=a.specialize({getTemplateArgumentElement:{value:Function.noop},getTemplateArgumentSerialization:{value:Function.noop},resolveTemplateArgumentTemplateProperty:{value:Function.noop}});t.Template=d,t.TemplateArgumentProvider=v,t.TemplateResources=_,t.instantiateDocument=i}});