montageDefine("489b8c2","js/release/schedule",{dependencies:["./util"],factory:function(e,t,n){"use strict";var o,i=e("./util"),s=function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")},r=i.getNativePromise();if(i.isNode&&"undefined"==typeof MutationObserver){var a=global.setImmediate,c=process.nextTick;o=i.isRecentNode?function(e){a.call(global,e)}:function(e){c.call(process,e)}}else if("function"==typeof r&&"function"==typeof r.resolve){var u=r.resolve();o=function(e){u.then(e)}}else o="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?"undefined"!=typeof setImmediate?function(e){setImmediate(e)}:"undefined"!=typeof setTimeout?function(e){setTimeout(e,0)}:s:function(){var e=document.createElement("div"),t={attributes:!0},n=!1,o=document.createElement("div"),i=new MutationObserver(function(){e.classList.toggle("foo"),n=!1});i.observe(o,t);var s=function(){n||(n=!0,o.classList.toggle("foo"))};return function(n){var o=new MutationObserver(function(){o.disconnect(),n()});o.observe(e,t),s()}}();n.exports=o}});