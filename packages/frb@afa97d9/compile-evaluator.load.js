montageDefine("afa97d9","compile-evaluator",{dependencies:["collections/shim-object","collections/map","collections/sorted-set","./operators","./scope","./parse"],factory:function(n,t,r){function e(n){return e.semantics.compile(n)}var u=n("collections/shim-object"),o=n("collections/map"),c=n("collections/sorted-set"),i=n("./operators");n("./scope");r.exports=e;var l={literal:function(n){return function(){return n.value}},value:function(n){return function(n){return n.value}},parameters:function(n){return function(n){return n.parameters}},element:function(n){return function(t){return t.document.getElementById(n.id)}},component:function(n){return function(t){return t.components.getObjectByLabel(n.label)}},tuple:function(n){var t=n.args.map(this.compile,this);return function(n){return t.map(function(t){return t(n)})}},record:function(n){var t,r,e=n.args,o={},c=u.keys(e);for(r=0;t=c[r];r++)o[t]=this.compile(e[t]);return function(n){var e={},c=u.keys(o);for(r=0;t=c[r];r++)e[t]=o[t](n);return e}}},f={mapBlock:function(n,t){return function(r){return n(r).map(function(n){return t(r.nest(n))})}},filterBlock:function(n,t){return function(r){return n(r).filter(function(n){return t(r.nest(n))})}},someBlock:function(n,t){return function(r){return n(r).some(function(n){return t(r.nest(n))})}},everyBlock:function(n,t){return function(r){return n(r).every(function(n){return t(r.nest(n))})}},sortedBlock:function(n,t){return function(r){return n(r).sorted(Function.by(function(n){return t(r.nest(n))}))}},sortedSetBlock:function(n,t){return function(r){function e(n){return t(r.nest(n))}function o(n,t){return u.compare(e(n),e(t))}function i(n,t){return u.equals(e(n),e(t))}return new c(n(r),i,o)}},groupBlock:function(n,t){return function(r){return n(r).group(function(n){return t(r.nest(n))})}},groupMapBlock:function(n,t){return function(r){return new o(n(r).group(function(n){return t(r.nest(n))}))}},minBlock:function(n,t){return function(r){return n(r).min(Function.by(function(n){return t(r.nest(n))}))}},maxBlock:function(n,t){return function(r){return n(r).max(Function.by(function(n){return t(r.nest(n))}))}},parent:function(n){return function(t){return n(t.parent)}},"with":function(n,t){return function(r){return t(r.nest(n(r)))}},"if":function(n,t,r){return function(e){var u=n(e);if(null!=u)return u?t(e):r(e)}},not:function(n){return function(t){return!n(t)}},and:function(n,t){return function(r){return n(r)&&t(r)}},or:function(n,t){return function(r){return n(r)||t(r)}},"default":function(n,t){return function(r){var e=n(r);return null==e&&(e=t(r)),e}},defined:function(n){return function(t){var r=n(t);return null!=r}},path:function(t,r){return function(u){var o=t(u),c=r(u),i=n("./parse");try{var l=i(c),f=e(l);return f(u.nest(o))}catch(a){}}}},a=u.clone(i,1);u.addEach(a,{property:function(n,t){return n[t]},get:function(n,t){return n.get(t)},mapContent:Function.identity,rangeContent:Function.identity,view:function(n,t,r){return n.slice(t,t+r)}});e.semantics={compilers:l,argCompilers:f,operators:a,compile:function(n){var t=this.compilers,r=this.argCompilers,e=this.operators;if(t.hasOwnProperty(n.type))return t[n.type].call(this,n);if(r.hasOwnProperty(n.type)){var u=n.args.map(this.compile,this);return 1===u.length?r[n.type].call(null,u[0]):2===u.length?r[n.type].call(null,u[0],u[1]):r[n.type].apply(null,u)}e.hasOwnProperty(n.type)||(e[n.type]=function(t){var r=Array.prototype.slice.call(arguments,1);if(!t[n.type])throw new TypeError("Can't call "+JSON.stringify(n.type)+" of "+t);return 1===r.length?t[n.type].call(t,r[0]):2===r.length?t[n.type].call(t,r[0],r[1]):t[n.type].apply(t,r)});var o=e[n.type],u=n.args.map(this.compile,this);return function(n){var t=u.map(function(t){return t(n)});if(t.every(i.defined))return 1===t.length?o.call(null,t[0]):2===t.length?o.call(null,t[0],t[1]):o.apply(null,t)}}}}});