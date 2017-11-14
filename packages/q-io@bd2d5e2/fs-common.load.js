montageDefine("bd2d5e2","fs-common",{dependencies:["q","./fs-boot","./fs-root","./fs-mock"],factory:function(t,n,e){var r=t("q"),i=t("./fs-boot"),o=t("./fs-root"),u=t("./fs-mock"),s=function(t){return Array.prototype.concat.apply([],t)};n.update=function(t,n){function e(t){var n=this;return t=t||this.ROOT,o(n,t)}function c(t){this.node=t,this.size=t.size}for(var f in i)t[f]=i[f];t.read=function(t,n,e,i){return"object"==typeof n?i=n:"object"==typeof e?(i=e,i.flags=n):(i=i||{},i.flags=n,i.charset=e),i.flags=i.flags||"r",r.when(this.open(t,i),function(t){return t.read()},function(r){throw r.message="Can't read "+t+" because "+r.message,r.path=t,r.flags=n,r.charset=e,r})},t.write=function(t,n,e,i,o){var u=this;return"object"==typeof e?o=e:"object"==typeof i?(o=i,o.flags=e):(o=o||{},o.flags=e,o.charset=i),e=o.flags||"w",e.indexOf("b")!==-1?n instanceof Buffer||(n=new Buffer(n)):n instanceof Buffer&&(e+="b"),o.flags=e,r.when(u.open(t,o),function(t){return r.when(t.write(n),function(){return t.close()})})},t.append=function(t,n,e,i,o){var u=this;return"object"==typeof e?o=e:"object"==typeof i?(o=i,o.flags=e):(o=o||{},o.flags=e,o.charset=i),e=o.flags||"a",n instanceof Buffer&&(e+="b"),o.flags=e,r.when(u.open(t,o),function(t){return r.when(t.write(n),function(){return t.close()})})},t.move=function(t,n){var e=this;return this.rename(t,n)["catch"](function(r){if(r.crossDevice)return e.copyTree(t,n).then(function(){return e.removeTree(t)});throw r})},t.copy=function(t,n){var e=this;return r.when(e.stat(t),function(i){var o=i.node.mode;return r.all([e.open(t,{flags:"rb"}),e.open(n,{flags:"wb",mode:o})])}).spread(function(t,n){return r.when(t.forEach(function(t){return n.write(t)}),function(){return r.all([t.close(),n.close()])})})},t.copyTree=function(t,n){var e=this;return r.when(e.stat(t),function(i){return i.isFile()?e.copy(t,n):i.isDirectory()?e.exists(n).then(function(o){function u(){return r.when(e.list(t),function(i){return r.all(i.map(function(r){return e.copyTree(e.join(t,r),e.join(n,r))}))})}return o?u():r.when(e.makeDirectory(n,i.node.mode),u)}):i.isSymbolicLink()?e.symbolicCopy(t,n):void 0})},t.listTree=function(t,n){var e=this;t=String(t||""),t||(t="."),n=n||function(){return!0};var i=e.stat(t);return r.when(i,function(i){var o=[];try{var u=n(t,i)}catch(s){return r.reject(s)}return r.when(u,function(u){return u&&o.push([t]),null!==u&&i.isDirectory()?r.when(e.list(t),function(r){return o.push.apply(o,r.map(function(r){var i=e.join(t,r);return e.listTree(i,n)})),o}):o})},function(t){return[]}).then(r.all).then(s)},t.listDirectoryTree=function(t){return this.listTree(t,function(t,n){return n.isDirectory()})},t.makeTree=function(t,n){t=String(t);var e=this,i=e.split(t),o=[];return e.isAbsolute(t)&&o.push(i.shift()||e.ROOT),i.reduce(function(t,i){return r.when(t,function(){o.push(i);var t=e.join(o)||".",u=e.makeDirectory(t,n);return r.when(u,null,function(t){if(!t.exists)throw t})})},void 0)},t.removeTree=function(t){var n=this;return r.when(n.statLink(t),function(e){return e.isSymbolicLink()?n.remove(t):e.isDirectory()?n.list(t).then(function(e){return r.all(e.map(function(e){return n.removeTree(n.join(t,e))})).then(function(){return n.removeDirectory(t)})}):n.remove(t)})},t.symbolicCopy=function(t,n,e){var i=this;return r.when(i.relative(n,t),function(t){return i.symbolicLink(n,t,e||"file")})},t.exists=function(t){return r.when(this.stat(t),function(){return!0},function(){return!1})},t.isFile=function(t){return r.when(this.stat(t),function(t){return t.isFile()},function(t){return!1})},t.isDirectory=function(t){return r.when(this.stat(t),function(t){return t.isDirectory()},function(t){return!1})},t.isSymbolicLink=function(t){return r.when(this.statLink(t),function(t){return t.isSymbolicLink()},function(t){return!1})},t.lastModified=function(t){var n=this;return n.stat(t).invoke("lastModified")},t.lastAccessed=function(t){var n=this;return n.stat(t).invoke("lastAccessed")},t.absolute=function(t){return this.isAbsolute(t)?this.normal(t):this.join(n(),t)},t.relative=function(t,n){var e=this;return r.when(this.isDirectory(t),function(r){return r?e.relativeFromDirectory(t,n):e.relativeFromFile(t,n)})},t.relativeFromFile=function(t,n){var e=this;for(t=e.absolute(t),n=e.absolute(n),t=t.split(e.SEPARATORS_RE()),n=n.split(e.SEPARATORS_RE()),t.pop();t.length&&n.length&&n[0]==t[0];)t.shift(),n.shift();for(;t.length;)t.shift(),n.unshift("..");return n.join(e.SEPARATOR)},t.relativeFromDirectory=function(t,e){for(e||(e=t,t=n()),t=this.absolute(t),e=this.absolute(e),t=t.split(this.SEPARATORS_RE()),e=e.split(this.SEPARATORS_RE()),2===t.length&&""===t[1]&&t.pop();t.length&&e.length&&e[0]==t[0];)t.shift(),e.shift();for(;t.length;)t.shift(),e.unshift("..");return e.join(this.SEPARATOR)},t.contains=function(t,n){var e,r;if(t=this.absolute(t),n=this.absolute(n),t=t.split(this.SEPARATORS_RE()),n=n.split(this.SEPARATORS_RE()),2===t.length&&""===t[1]&&t.pop(),t.length>n.length)return!1;for(e=0,r=t.length;e<r&&t[e]===n[e];e++);return e==r},t.reroot=e,t.toObject=function(t){var n=this,e=n.listTree(t||"",function(t,n){return n.isFile()});return r.when(e,function(t){var e={};return r.all(t.map(function(t){return r.when(n.read(t,"rb"),function(n){e[t]=n})})).then(function(){return e})})},t.merge=function(t){var n,e={};return t.forEach(function(t){n=r.when(n,function(){return t.listTree("",function(t,n){return n.isFile()}).then(function(n){return r.all(n.map(function(n){return r.when(t.read(n,"rb"),function(t){e[n]=t})}))})})}),r.when(n,function(){return u(e)})},t.Stats=c;var a=["isDirectory","isFile","isBlockDevice","isCharacterDevice","isSymbolicLink","isFIFO","isSocket"];a.forEach(function(t){c.prototype[t]=function(){return this.node[t]()}}),c.prototype.lastModified=function(){return new Date(this.node.mtime)},c.prototype.lastAccessed=function(){return new Date(this.node.atime)}}}});