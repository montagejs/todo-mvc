montageDefine("6aca627","old",{dependencies:["path","fs"],factory:function(e,n,r){function t(){function e(e){e&&(t.message=e.message,e=t,n(e))}function n(e){if(e){if(process.throwDeprecation)throw e;if(!process.noDeprecation){var n="fs: missing callback "+(e.stack||e.message);process.traceDeprecation?console.trace(n):console.error(n)}}}var r;if(a){var t=new Error;r=e}else r=n;return r}function o(e){return"function"==typeof e?e:t()}var i=e("path"),c="win32"===process.platform,s=e("fs"),a=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);i.normalize;if(c)var l=/(.*?)(?:[\/\\]+|$)/g;else var l=/(.*?)(?:[\/]+|$)/g;if(c)var f=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;else var f=/^[\/]*/;n.realpathSync=function(e,n){function r(){var n=f.exec(e);t=n[0].length,o=n[0],a=n[0],u="",c&&!y[a]&&(s.lstatSync(a),y[a]=!0)}if(e=i.resolve(e),n&&Object.prototype.hasOwnProperty.call(n,e))return n[e];var t,o,a,u,p=e,v={},y={};for(r();t<e.length;){l.lastIndex=t;var h=l.exec(e);if(u=o,o+=h[0],a=u+h[1],t=l.lastIndex,!(y[a]||n&&n[a]===a)){var g;if(n&&Object.prototype.hasOwnProperty.call(n,a))g=n[a];else{var d=s.lstatSync(a);if(!d.isSymbolicLink()){y[a]=!0,n&&(n[a]=a);continue}var x=null;if(!c){var O=d.dev.toString(32)+":"+d.ino.toString(32);v.hasOwnProperty(O)&&(x=v[O])}null===x&&(s.statSync(a),x=s.readlinkSync(a)),g=i.resolve(u,x),n&&(n[a]=g),c||(v[O]=x)}e=i.resolve(g,e.slice(t)),r()}}return n&&(n[p]=e),e},n.realpath=function(e,n,r){function t(){var n=f.exec(e);y=n[0].length,h=n[0],g=n[0],d="",c&&!S[g]?s.lstat(g,function(e){return e?r(e):(S[g]=!0,void a())}):process.nextTick(a)}function a(){if(y>=e.length)return n&&(n[x]=e),r(null,e);l.lastIndex=y;var t=l.exec(e);return d=h,h+=t[0],g=d+t[1],y=l.lastIndex,S[g]||n&&n[g]===g?process.nextTick(a):n&&Object.prototype.hasOwnProperty.call(n,g)?v(n[g]):s.lstat(g,u)}function u(e,t){if(e)return r(e);if(!t.isSymbolicLink())return S[g]=!0,n&&(n[g]=g),process.nextTick(a);if(!c){var o=t.dev.toString(32)+":"+t.ino.toString(32);if(O.hasOwnProperty(o))return p(null,O[o],g)}s.stat(g,function(e){return e?r(e):void s.readlink(g,function(e,n){c||(O[o]=n),p(e,n)})})}function p(e,t,o){if(e)return r(e);var c=i.resolve(d,t);n&&(n[o]=c),v(c)}function v(n){e=i.resolve(n,e.slice(y)),t()}if("function"!=typeof r&&(r=o(n),n=null),e=i.resolve(e),n&&Object.prototype.hasOwnProperty.call(n,e))return process.nextTick(r.bind(null,null,n[e]));var y,h,g,d,x=e,O={},S={};t()}}});