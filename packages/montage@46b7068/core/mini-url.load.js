montageDefine("46b7068","core/mini-url",{dependencies:[],factory:function(t,e,s){"use strict";function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t,e,s,h){e=e||"&",s=s||"=";var a={};if("string"!=typeof t||0===t.length)return a;var n=/\+/g;t=t.split(e);var o=1e3;h&&"number"==typeof h.maxKeys&&(o=h.maxKeys);var i=t.length;o>0&&i>o&&(i=o);for(var l=0;l<i;++l){var p,c,u,f,m=t[l].replace(n,"%20"),v=m.indexOf(s);v>=0?(p=m.substr(0,v),c=m.substr(v+1)):(p=m,c=""),u=decodeURIComponent(p),f=decodeURIComponent(c),r(a,u)?Array.isArray(a[u])?a[u].push(f):a[u]=[a[u],f]:a[u]=f}return a}function n(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}}function o(t,e,s,h){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map(function(h){var r=encodeURIComponent(n(h))+s;return Array.isArray(t[h])?t[h].map(function(t){return r+encodeURIComponent(n(t))}).join(e):r+encodeURIComponent(n(t[h]))}).join(e):h?encodeURIComponent(n(h))+s+encodeURIComponent(n(t)):""}function i(t){return null===t}function l(t){return null===t||void 0===t}function p(t){return"string"==typeof t}function c(t){return"object"==typeof t}function u(t,e,s){if(t&&c(t)&&t instanceof h)return t;var r=new h;return r.parse(t,e,s),r}var f=/^([a-z0-9.+-]+:)/i,m=/:[0-9]*$/,v=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,y=["<",">",'"',"`"," ","\r","\n","\t"],g=["{","}","|","\\","^","`"].concat(y),d=["'"].concat(g),b=["%","/","?",";","#"].concat(d),j=["/","?","#"],O=255,q=/^[+a-z0-9A-Z_-]{0,63}$/,x=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,A={javascript:!0,"javascript:":!0},C={javascript:!0,"javascript:":!0},I={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};h.prototype.parse=function(t,e,s){if(!p(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t.indexOf("?"),r=h!==-1&&h<t.indexOf("#")?"?":"#",n=t.split(r),o=/\\/g;n[0]=n[0].replace(o,"/"),t=n.join(r);var i=t;if(i=i.trim(),!s&&1===t.split("#").length){var l=v.exec(i);if(l)return this.path=i,this.href=i,this.pathname=l[1],l[2]?(this.search=l[2],e?this.query=decodeDuerystring(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var c=f.exec(i);if(c){c=c[0];var u=c.toLowerCase();this.protocol=u,i=i.substr(c.length)}if(s||c||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var m="//"===i.substr(0,2);!m||c&&C[c]||(i=i.substr(2),this.slashes=!0)}if(!C[c]&&(m||c&&!I[c])){for(var y=-1,g=0;g<j.length;g++){var R=i.indexOf(j[g]);R!==-1&&(y===-1||R<y)&&(y=R)}var U,w;w=y===-1?i.lastIndexOf("@"):i.lastIndexOf("@",y),w!==-1&&(U=i.slice(0,w),i=i.slice(w+1),this.auth=decodeURIComponent(U)),y=-1;for(var g=0;g<b.length;g++){var R=i.indexOf(b[g]);R!==-1&&(y===-1||R<y)&&(y=R)}y===-1&&(y=i.length),this.host=i.slice(0,y),i=i.slice(y),this.parseHost(),this.hostname=this.hostname||"";var k="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!k)for(var $=this.hostname.split(/\./),g=0,z=$.length;g<z;g++){var D=$[g];if(D&&!D.match(q)){for(var H="",K=0,L=D.length;K<L;K++)H+=D.charCodeAt(K)>127?"x":D[K];if(!H.match(q)){var P=$.slice(0,g),Z=$.slice(g+1),_=D.match(x);_&&(P.push(_[1]),Z.unshift(_[2])),Z.length&&(i="/"+Z.join(".")+i),this.hostname=P.join(".");break}}}this.hostname.length>O?this.hostname="":this.hostname=this.hostname.toLowerCase();var E=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+E,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!A[u])for(var g=0,z=d.length;g<z;g++){var T=d[g];if(i.indexOf(T)!==-1){var B=encodeURIComponent(T);B===T&&(B=escape(T)),i=i.split(T).join(B)}}var G=i.indexOf("#");G!==-1&&(this.hash=i.substr(G),i=i.slice(0,G));var J=i.indexOf("?");if(J!==-1?(this.search=i.substr(J),this.query=i.substr(J+1),e&&(this.query=a(this.query)),i=i.slice(0,J)):e&&(this.search="",this.query={}),i&&(this.pathname=i),I[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var E=this.pathname||"",M=this.search||"";this.path=E+M}return this.href=this.format(),this},h.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",s=this.pathname||"",h=this.hash||"",r=!1,a="";this.host?r=t+this.host:this.hostname&&(r=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(a=o(this.query));var n=this.search||a&&"?"+a||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||I[e])&&r!==!1?(r="//"+(r||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):r||(r=""),h&&"#"!==h.charAt(0)&&(h="#"+h),n&&"?"!==n.charAt(0)&&(n="?"+n),s=s.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),n=n.replace("#","%23"),e+r+s+n+h},h.prototype.resolve=function(t){return this.resolveObject(u(t,!1,!0)).format()},h.prototype.resolveObject=function(t){if(p(t)){var e=new h;e.parse(t,!1,!0),t=e}for(var s=new h,r=Object.keys(this),a=0;a<r.length;a++){var n=r[a];s[n]=this[n]}if(s.hash=t.hash,""===t.href)return s.href=s.format(),s;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),c=0;c<o.length;c++){var u=o[c];"protocol"!==u&&(s[u]=t[u])}return I[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(t.protocol&&t.protocol!==s.protocol){if(!I[t.protocol]){for(var f=Object.keys(t),m=0;m<f.length;m++){var v=f[m];s[v]=t[v]}return s.href=s.format(),s}if(s.protocol=t.protocol,t.host||C[t.protocol])s.pathname=t.pathname;else{for(var y=(t.pathname||"").split("/");y.length&&!(t.host=y.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==y[0]&&y.unshift(""),y.length<2&&y.unshift(""),s.pathname=y.join("/")}if(s.search=t.search,s.query=t.query,s.host=t.host||"",s.auth=t.auth,s.hostname=t.hostname||t.host,s.port=t.port,s.pathname||s.search){var g=s.pathname||"",d=s.search||"";s.path=g+d}return s.slashes=s.slashes||t.slashes,s.href=s.format(),s}var b=s.pathname&&"/"===s.pathname.charAt(0),j=t.host||t.pathname&&"/"===t.pathname.charAt(0),O=j||b||s.host&&t.pathname,q=O,x=s.pathname&&s.pathname.split("/")||[],y=t.pathname&&t.pathname.split("/")||[],A=s.protocol&&!I[s.protocol];if(A&&(s.hostname="",s.port=null,s.host&&(""===x[0]?x[0]=s.host:x.unshift(s.host)),s.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===y[0]?y[0]=t.host:y.unshift(t.host)),t.host=null),O=O&&(""===y[0]||""===x[0])),j)s.host=t.host||""===t.host?t.host:s.host,s.hostname=t.hostname||""===t.hostname?t.hostname:s.hostname,s.search=t.search,s.query=t.query,x=y;else if(y.length)x||(x=[]),x.pop(),x=x.concat(y),s.search=t.search,s.query=t.query;else if(!l(t.search)){if(A){s.hostname=s.host=x.shift();var R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");R&&(s.auth=R.shift(),s.host=s.hostname=R.shift())}return s.search=t.search,s.query=t.query,i(s.pathname)&&i(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!x.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var U=x.slice(-1)[0],w=(s.host||t.host||x.length>1)&&("."===U||".."===U)||""===U,k=0,$=x.length;$>=0;$--)U=x[$],"."===U?x.splice($,1):".."===U?(x.splice($,1),k++):k&&(x.splice($,1),k--);if(!O&&!q)for(;k--;k)x.unshift("..");!O||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),w&&"/"!==x.join("/").substr(-1)&&x.push("");var z=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(A){s.hostname=s.host=z?"":x.length?x.shift():"";var R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");R&&(s.auth=R.shift(),s.host=s.hostname=R.shift())}return O=O||s.host&&x.length,O&&!z&&x.unshift(""),x.length?s.pathname=x.join("/"):(s.pathname=null,s.path=null),i(s.pathname)&&i(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=t.auth||s.auth,s.slashes=s.slashes||t.slashes,s.href=s.format(),s},h.prototype.parseHost=function(){var t=this.host,e=m.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)},s.exports.resolve=function(t,e){return u(t,!1,!0).resolve(e)}}});