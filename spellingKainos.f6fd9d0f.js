parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Vhiv":[function(require,module,exports) {
var e=document.querySelector(".ml123");e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!0}).add({targets:".ml123 .letter",translateX:[40,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1200,delay:(e,t)=>500+30*t}).add({targets:".ml123 .letter",translateX:[0,-30],opacity:[1,0],easing:"easeInExpo",duration:1100,delay:(e,t)=>100+30*t});
},{}]},{},["Vhiv"], null)
//# sourceMappingURL=/TranslimitasKelyje/spellingKainos.f6fd9d0f.js.map