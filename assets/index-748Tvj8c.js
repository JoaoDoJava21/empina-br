var fp=i=>{throw TypeError(i)};var or=(i,t,e)=>t.has(i)?fp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);function dp(i,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="170",pp=0,wh=1,mp=2,Ll=1,gp=2,si=3,Ri=0,je=1,kn=2,Ci=0,Gs=1,ja=2,Rh=3,Ph=4,_p=5,Ji=100,vp=101,xp=102,yp=103,Mp=104,Sp=200,bp=201,Tp=202,Ep=203,yc=204,Mc=205,Cp=206,Ap=207,wp=208,Rp=209,Pp=210,Lp=211,Dp=212,Ip=213,Up=214,Sc=0,bc=1,Tc=2,$s=3,Ec=4,Cc=5,Ac=6,wc=7,Dl=0,Np=1,Op=2,Ai=0,kp=1,Fp=2,Bp=3,pf=4,zp=5,Gp=6,Vp=7,mf=300,qs=301,js=302,Rc=303,Pc=304,oo=306,Ya=1e3,es=1001,Lc=1002,pn=1003,Hp=1004,Qr=1005,Gn=1006,bo=1007,ns=1008,ui=1009,gf=1010,_f=1011,Ir=1012,Il=1013,is=1014,Vn=1015,Xr=1016,Ul=1017,Nl=1018,Ys=1020,vf=35902,xf=1021,yf=1022,wn=1023,Mf=1024,Sf=1025,Vs=1026,Js=1027,Ol=1028,kl=1029,bf=1030,Fl=1031,Bl=1033,Ia=33776,Ua=33777,Na=33778,Oa=33779,Dc=35840,Ic=35841,Uc=35842,Nc=35843,Oc=36196,kc=37492,Fc=37496,Bc=37808,zc=37809,Gc=37810,Vc=37811,Hc=37812,Wc=37813,Xc=37814,$c=37815,qc=37816,jc=37817,Yc=37818,Jc=37819,Zc=37820,Kc=37821,ka=36492,Qc=36494,tl=36495,Tf=36283,el=36284,nl=36285,il=36286,Wp=3200,Xp=3201,zl=0,$p=1,Ti="",Ve="srgb",tr="srgb-linear",co="linear",pe="srgb",ds=7680,Lh=519,qp=512,jp=513,Yp=514,Ef=515,Jp=516,Zp=517,Kp=518,Qp=519,sl=35044,Dh="300 es",ai=2e3,Ja=2001;class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,Za=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function t0(i,t){return(i%t+t)%t}function Eo(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],S=s[4],v=s[7],D=s[2],E=s[5],A=s[8];return r[0]=a*_+o*b+c*D,r[3]=a*g+o*S+c*E,r[6]=a*p+o*v+c*A,r[1]=l*_+h*b+u*D,r[4]=l*g+h*S+u*E,r[7]=l*p+h*v+u*A,r[2]=f*_+d*b+m*D,r[5]=f*g+d*S+m*E,r[8]=f*p+d*v+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Yt;function Cf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function e0(){const i=Ka("canvas");return i.style.display="block",i}const Ih={};function Sr(i){i in Ih||(Ih[i]=!0,console.warn(i))}function n0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function i0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function s0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Oh=[.3127,.329],kh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[tr]:{primaries:Uh,whitePoint:Oh,transfer:co,toXYZ:kh,fromXYZ:Fh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Uh,whitePoint:Oh,transfer:pe,toXYZ:kh,fromXYZ:Fh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let ps;class r0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=Ka("canvas")),ps.width=t.width,ps.height=t.height;const n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let a0=0;class Af{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?r0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o0=0;class Ye extends er{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=es,s=es,r=Gn,a=ns,o=wn,c=ui,l=Ye.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ci(),this.name="",this.source=new Af(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=mf;Ye.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(d+1)/2,D=(p+1)/2,E=(h+f)/4,A=(u+_)/4,w=(m+g)/4;return S>v&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=A/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=w/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends er{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Af(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends c0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-o;const p=c*f+l*d+h*m+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),E=Math.atan2(D,p*b);g=Math.sin(g*E)/D,o=Math.sin(o*E)/D}const v=o*b;if(c=c*g+f*v,l=l*g+d*v,h=h*g+m*v,u=u*g+_*v,g===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-o*d,t[e+2]=l*m+h*d+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new P,Bh=new Mn;class os{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),ea.subVectors(this.max,cr),ms.subVectors(t.a,cr),gs.subVectors(t.b,cr),_s.subVectors(t.c,cr),pi.subVectors(gs,ms),mi.subVectors(_s,gs),Ni.subVectors(ms,_s);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!Ro(e,ms,gs,_s,ea)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,ms,gs,_s,ea))?!1:(na.crossVectors(pi,mi),e=[na.x,na.y,na.z],Ro(e,ms,gs,_s,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,ta=new os,ms=new P,gs=new P,_s=new P,pi=new P,mi=new P,Ni=new P,cr=new P,ea=new P,na=new P,Oi=new P;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);const o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const h0=new os,lr=new P,Po=new P;class nr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):h0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Po)),this.expandByPoint(lr.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new P,Lo=new P,ia=new P,gi=new P,Do=new P,sa=new P,Io=new P;class Rf{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lo.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Lo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ia),o=gi.dot(this.direction),c=-gi.dot(ia),l=gi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lo).addScaledVector(ia,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){Do.subVectors(e,t),sa.subVectors(n,t),Io.crossVectors(Do,sa);let a=this.direction.dot(Io),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);const c=o*this.direction.dot(sa.crossVectors(gi,sa));if(c<0)return null;const l=o*this.direction.dot(Do.cross(gi));if(l<0||c+l>a)return null;const h=-o*gi.dot(Io);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,m,_,g){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,m,_,g)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f+_*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u0,t,f0)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),ra.crossVectors(un,_i),s[0]=_i.x,s[4]=ra.x,s[8]=un.x,s[1]=_i.y,s[5]=ra.y,s[9]=un.y,s[2]=_i.z,s[6]=ra.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],S=n[7],v=n[11],D=n[15],E=s[0],A=s[4],w=s[8],M=s[12],x=s[1],L=s[5],F=s[9],B=s[13],W=s[2],q=s[6],X=s[10],tt=s[14],H=s[3],ht=s[7],gt=s[11],Ct=s[15];return r[0]=a*E+o*x+c*W+l*H,r[4]=a*A+o*L+c*q+l*ht,r[8]=a*w+o*F+c*X+l*gt,r[12]=a*M+o*B+c*tt+l*Ct,r[1]=h*E+u*x+f*W+d*H,r[5]=h*A+u*L+f*q+d*ht,r[9]=h*w+u*F+f*X+d*gt,r[13]=h*M+u*B+f*tt+d*Ct,r[2]=m*E+_*x+g*W+p*H,r[6]=m*A+_*L+g*q+p*ht,r[10]=m*w+_*F+g*X+p*gt,r[14]=m*M+_*B+g*tt+p*Ct,r[3]=b*E+S*x+v*W+D*H,r[7]=b*A+S*L+v*q+D*ht,r[11]=b*w+S*F+v*X+D*gt,r[15]=b*M+S*B+v*tt+D*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+g*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=u*g*l-_*f*l+_*c*d-o*g*d-u*c*p+o*f*p,S=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,v=h*_*l-m*u*l+m*o*d-a*_*d-h*o*p+a*u*p,D=m*u*c-h*_*c-m*o*f+a*_*f+h*o*g-a*u*g,E=e*b+n*S+s*v+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=b*A,t[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*A,t[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*p+n*c*p)*A,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*A,t[4]=S*A,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*A,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*A,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*A,t[8]=v*A,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*p-e*u*p)*A,t[10]=(a*_*r-m*o*r+m*n*l-e*_*l-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*A,t[12]=D*A,t[13]=(h*_*s-m*u*s+m*n*f-e*_*f-h*n*g+e*u*g)*A,t[14]=(m*o*s-a*_*s-m*n*c+e*_*c+a*n*g-e*o*g)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,_=a*h,g=a*u,p=o*u,b=c*l,S=c*h,v=c*u,D=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*D,s[1]=(d+v)*D,s[2]=(m-S)*D,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(m+S)*A,s[9]=(g-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ai){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,m;if(o===ai)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ja)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ai){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,d=(n+s)*h;let m,_;if(o===ai)m=(a+r)*u,_=-2*u;else if(o===Ja)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new P,En=new ce,u0=new P(0,0,0),f0=new P(1,1,1),_i=new P,ra=new P,un=new P,zh=new ce,Gh=new Mn;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let d0=0;const Vh=new P,xs=new Mn,ti=new ce,aa=new P,hr=new P,p0=new P,m0=new Mn,Hh=new P(1,0,0),Wh=new P(0,1,0),Xh=new P(0,0,1),$h={type:"added"},g0={type:"removed"},ys={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Pe extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new P,e=new Pn,n=new Mn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Yt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hr,aa,this.up):ti.lookAt(aa,hr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($h),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g0),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($h),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,p0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,m0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new P(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new P,ei=new P,No=new P,ni=new P,Ms=new P,Ss=new P,qh=new P,Oo=new P,ko=new P,Fo=new P,Bo=new _e,zo=new _e,Go=new _e;class yn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ei.subVectors(n,e),No.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(ei),c=Cn.dot(No),l=ei.dot(ei),h=ei.dot(No),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bo.setScalar(0),zo.setScalar(0),Go.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ei.subVectors(t,e),Cn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),Oo.subVectors(t,n);const c=Ms.dot(Oo),l=Ss.dot(Oo);if(c<=0&&l<=0)return e.copy(n);ko.subVectors(t,s);const h=Ms.dot(ko),u=Ss.dot(ko);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ms,a);Fo.subVectors(t,r);const d=Ms.dot(Fo),m=Ss.dot(Fo);if(m>=0&&d<=m)return e.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ss,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return qh.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(qh,o);const p=1/(g+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=t0(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vo(a,r,t+1/3),this.g=Vo(a,r,t),this.b=Vo(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ae.fromWorkingColorSpace(qe.copy(this),t),Math.round(He(qe.r*255,0,255))*65536+Math.round(He(qe.g*255,0,255))*256+Math.round(He(qe.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ve){ae.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(oa);const n=Eo(vi.h,oa.h,e),s=Eo(vi.s,oa.s,e),r=Eo(vi.l,oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new rt;rt.NAMES=Lf;let _0=0;class Li extends er{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ci(),this.name="",this.blending=Gs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Mc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bn extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new P,ca=new st;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class Df extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class If extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let v0=0;const _n=new ce,Ho=new Pe,bs=new P,fn=new os,ur=new os,Oe=new P;class Le extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?If:Df)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(fn.min,ur.min),fn.expandByPoint(Oe),Oe.addVectors(fn.max,ur.max),fn.expandByPoint(Oe)):(fn.expandByPoint(ur.min),fn.expandByPoint(ur.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),Oe.add(bs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new P,c[w]=new P;const l=new P,h=new P,u=new P,f=new st,d=new st,m=new st,_=new P,g=new P;function p(w,M,x){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[w].add(_),o[M].add(_),o[x].add(_),c[w].add(g),c[M].add(g),c[x].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,M=b.length;w<M;++w){const x=b[w],L=x.start,F=x.count;for(let B=L,W=L+F;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new P,v=new P,D=new P,E=new P;function A(w){D.fromBufferAttribute(s,w),E.copy(D);const M=o[w];S.copy(M),S.sub(D.multiplyScalar(D.dot(M))).normalize(),v.crossVectors(E,M);const L=v.dot(c[w])<0?-1:1;a.setXYZW(w,S.x,S.y,S.z,L)}for(let w=0,M=b.length;w<M;++w){const x=b[w],L=x.start,F=x.count;for(let B=L,W=L+F;B<W;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new ce,ki=new Rf,la=new nr,Yh=new P,ha=new P,ua=new P,fa=new P,Wo=new P,da=new P,Jh=new P,pa=new P;class Qt extends Pe{constructor(t=new Le,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Wo.fromBufferAttribute(u,t),a?da.addScaledVector(Wo,h):da.addScaledVector(Wo.sub(e),h))}e.add(da)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(la.containsPoint(ki.origin)===!1&&(ki.intersectSphere(la,Yh)===null||ki.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,D=S;v<D;v+=3){const E=o.getX(v),A=o.getX(v+1),w=o.getX(v+2);s=ma(this,p,t,n,l,h,u,E,A,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const b=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);s=ma(this,a,t,n,l,h,u,b,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,D=S;v<D;v+=3){const E=v,A=v+1,w=v+2;s=ma(this,p,t,n,l,h,u,E,A,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const b=g,S=g+1,v=g+2;s=ma(this,a,t,n,l,h,u,b,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function x0(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ri,o),c===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(pa);return l<e.near||l>e.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ha),i.getVertexPosition(c,ua),i.getVertexPosition(l,fa);const h=x0(i,t,e,n,ha,ua,fa,Jh);if(h){const u=new P;yn.getBarycoord(Jh,ha,ua,fa,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,c,l,u,new st)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,c,l,u,new st)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};yn.getNormal(ha,ua,fa,f.normal),h.face=f,h.barycoord=u}return h}class Di extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function m(_,g,p,b,S,v,D,E,A,w,M){const x=v/A,L=D/w,F=v/2,B=D/2,W=E/2,q=A+1,X=w+1;let tt=0,H=0;const ht=new P;for(let gt=0;gt<X;gt++){const Ct=gt*L-B;for(let Ht=0;Ht<q;Ht++){const Mt=Ht*x-F;ht[_]=Mt*b,ht[g]=Ct*S,ht[p]=W,l.push(ht.x,ht.y,ht.z),ht[_]=0,ht[g]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Ht/A),u.push(1-gt/w),tt+=1}}for(let gt=0;gt<w;gt++)for(let Ct=0;Ct<A;Ct++){const Ht=f+Ct+q*gt,Mt=f+Ct+q*(gt+1),V=f+(Ct+1)+q*(gt+1),Z=f+(Ct+1)+q*gt;c.push(Ht,Mt,Z),c.push(Mt,V,Z),H+=6}o.addGroup(d,H,M),d+=H,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function y0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const M0={clone:Zs,merge:Qe};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nf extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new P,Zh=new st,Kh=new st;class en extends Nf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Kh),e.subVectors(Kh,Zh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,Es=1;class T0 extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Ts,Es,t,e);s.layers=this.layers,this.add(s);const r=new en(Ts,Es,t,e);r.layers=this.layers,this.add(r);const a=new en(Ts,Es,t,e);a.layers=this.layers,this.add(a);const o=new en(Ts,Es,t,e);o.layers=this.layers,this.add(o);const c=new en(Ts,Es,t,e);c.layers=this.layers,this.add(c);const l=new en(Ts,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Of extends Ye{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class E0 extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Of(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Di(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Ci});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===ns&&(e.minFilter=Gn),new T0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Xo=new P,C0=new P,A0=new Yt;class $i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xo.subVectors(n,e).cross(C0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||A0.getNormalMatrix(t),s=this.coplanarPoint(Xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new nr,ga=new P;class Gl{constructor(t=new $i,e=new $i,n=new $i,s=new $i,r=new $i,a=new $i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],b=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,g-d,v-p).normalize(),n[1].setComponents(c+r,f+l,g+d,v+p).normalize(),n[2].setComponents(c+a,f+h,g+m,v+b).normalize(),n[3].setComponents(c-a,f-h,g-m,v-b).normalize(),n[4].setComponents(c-o,f-u,g-_,v-S).normalize(),e===ai)n[5].setComponents(c+o,f+u,g+_,v+S).normalize();else if(e===Ja)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function w0(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Pi extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const b=p*f-a;for(let S=0;S<l;S++){const v=S*u-r;m.push(v,-b,0),_.push(0,0,1),g.push(S/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const S=b+l*p,v=b+l*(p+1),D=b+1+l*(p+1),E=b+1+l*p;d.push(S,v,E),d.push(v,D,E)}this.setIndex(d),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:I0,alphatest_pars_fragment:U0,aomap_fragment:N0,aomap_pars_fragment:O0,batching_pars_vertex:k0,batching_vertex:F0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:q0,color_fragment:j0,color_pars_fragment:Y0,color_pars_vertex:J0,color_vertex:Z0,common:K0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:cm,envmap_pars_fragment:lm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:fm,fog_pars_vertex:dm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:xm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:bm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Em,lights_physical_fragment:Cm,lights_physical_pars_fragment:Am,lights_fragment_begin:wm,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:km,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:$m,normal_fragment_maps:qm,normal_pars_fragment:jm,normal_pars_vertex:Ym,normal_vertex:Jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:cg,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:fg,shadowmask_pars_fragment:dg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:vg,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:bg,uv_pars_fragment:Tg,uv_pars_vertex:Eg,uv_vertex:Cg,worldpos_vertex:Ag,background_vert:wg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ig,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Og,distanceRGBA_frag:kg,equirect_vert:Fg,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Hg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:$g,meshmatcap_frag:qg,meshnormal_vert:jg,meshnormal_frag:Yg,meshphong_vert:Jg,meshphong_frag:Zg,meshphysical_vert:Kg,meshphysical_frag:Qg,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:a_,sprite_frag:o_},ft={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};On.physical={uniforms:Qe([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const _a={r:0,b:0,g:0},Bi=new Pn,c_=new ce;function l_(i,t,e,n,s,r,a){const o=new rt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const v=m(b);v===null?p(o,c):v&&v.isColor&&(p(v,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){const v=m(S);v&&(v.isCubeTexture||v.mapping===oo)?(h===void 0&&(h=new Qt(new Di(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Zs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(S.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Bi)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qt(new Pi(2,2),new qn({name:"BackgroundMaterial",uniforms:Zs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(_a,Uf(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:g}}function h_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,L,F,B,W){let q=!1;const X=u(B,F,L);r!==X&&(r=X,l(r.object)),q=d(x,B,F,W),q&&m(x,B,F,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(x,L,F,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,L,F){const B=F.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let X=q[B];return X===void 0&&(X=f(c()),q[B]=X),X}function f(x){const L=[],F=[],B=[];for(let W=0;W<e;W++)L[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function d(x,L,F,B){const W=r.attributes,q=L.attributes;let X=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){const gt=W[H];let Ct=q[H];if(Ct===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Ct=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Ct=x.instanceColor)),gt===void 0||gt.attribute!==Ct||Ct&&gt.data!==Ct.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function m(x,L,F,B){const W={},q=L.attributes;let X=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){let gt=q[H];gt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));const Ct={};Ct.attribute=gt,gt&&gt.data&&(Ct.data=gt.data),W[H]=Ct,X++}r.attributes=W,r.attributesNum=X,r.index=B}function _(){const x=r.newAttributes;for(let L=0,F=x.length;L<F;L++)x[L]=0}function g(x){p(x,0)}function p(x,L){const F=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;F[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),W[x]!==L&&(i.vertexAttribDivisor(x,L),W[x]=L)}function b(){const x=r.newAttributes,L=r.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==x[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function S(x,L,F,B,W,q,X){X===!0?i.vertexAttribIPointer(x,L,F,W,q):i.vertexAttribPointer(x,L,F,B,W,q)}function v(x,L,F,B){_();const W=B.attributes,q=F.getAttributes(),X=L.defaultAttributeValues;for(const tt in q){const H=q[tt];if(H.location>=0){let ht=W[tt];if(ht===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const gt=ht.normalized,Ct=ht.itemSize,Ht=t.get(ht);if(Ht===void 0)continue;const Mt=Ht.buffer,V=Ht.type,Z=Ht.bytesPerElement,bt=V===i.INT||V===i.UNSIGNED_INT||ht.gpuType===Il;if(ht.isInterleavedBufferAttribute){const lt=ht.data,Ft=lt.stride,Wt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<H.locationSize;zt++)g(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let zt=0;zt<H.locationSize;zt++)S(H.location+zt,Ct/H.locationSize,V,gt,Ft*Z,(Wt+Ct/H.locationSize*zt)*Z,bt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<H.locationSize;lt++)g(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let lt=0;lt<H.locationSize;lt++)S(H.location+lt,Ct/H.locationSize,V,gt,Ct*Z,Ct/H.locationSize*lt*Z,bt)}}else if(X!==void 0){const gt=X[tt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(H.location,gt);break;case 3:i.vertexAttrib3fv(H.location,gt);break;case 4:i.vertexAttrib4fv(H.location,gt);break;default:i.vertexAttrib1fv(H.location,gt)}}}}b()}function D(){w();for(const x in n){const L=n[x];for(const F in L){const B=L[F];for(const W in B)h(B[W].object),delete B[W];delete L[F]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const F in L){const B=L[F];for(const W in B)h(B[W].object),delete B[W];delete L[F]}delete n[x.id]}function A(x){for(const L in n){const F=n[L];if(F[x.id]===void 0)continue;const B=F[x.id];for(const W in B)h(B[W].object),delete B[W];delete F[x.id]}}function w(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function u_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function f_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vn&&!w)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:E}}function d_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new $i,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,S=b*4;let v=p.clippingState||null;c.value=v,v=h(m,f,S,d);for(let D=0;D!==S;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function p_(i){let t=new WeakMap;function e(a,o){return o===Rc?a.mapping=qs:o===Pc&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rc||o===Pc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new E0(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ff extends Nf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,Qh=[.125,.215,.35,.446,.526,.582],Zi=20,$o=new Ff,tu=new rt;let qo=null,jo=0,Yo=0,Jo=!1;const qi=(1+Math.sqrt(5))/2,Cs=1/qi,eu=[new P(-qi,Cs,0),new P(qi,Cs,0),new P(-Cs,0,qi),new P(Cs,0,qi),new P(0,qi,-Cs),new P(0,qi,Cs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,jo,Yo),this._renderer.xr.enabled=Jo,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Xr,format:wn,colorSpace:tr,depthBuffer:!1},s=nu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(r)),this._blurMaterial=g_(r,t,e)}return s}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s){const o=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tu),h.toneMapping=Ai,h.autoClear=!1;const d=new Bn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new Qt(new Di,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(tu),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;va(s,b*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qs||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;va(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const p=[];let b=0;for(let A=0;A<Zi;++A){const w=A/_,M=Math.exp(-w*w/2);p.push(M),A===0?b+=M:A<g&&(b+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;const v=this._sizeLods[s],D=3*v*(s>S-Bs?s-S+Bs:0),E=4*(this._cubeSize-v);va(e,D,E,3*v,2*v),c.setRenderTarget(e),c.render(u,$o)}}function m_(i){const t=[],e=[],n=[];let s=i;const r=i-Bs+1+Qh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Bs?c=Qh[a-i+Bs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*d),S=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,w=E>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];b.set(M,_*m*E),S.set(f,g*m*E);const x=[E,E,E,E,E,E];v.set(x,p*m*E)}const D=new Le;D.setAttribute("position",new Je(b,_)),D.setAttribute("uv",new Je(S,g)),D.setAttribute("faceIndex",new Je(v,p)),t.push(D),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nu(i,t,e){const n=new ss(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g_(i,t,e){const n=new Float32Array(Zi),s=new P(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function iu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function su(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function __(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Rc||c===Pc,h=c===qs||c===js;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new rl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new rl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function v_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function x_(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let S=0,v=b.length;S<v;S+=3){const D=b[S+0],E=b[S+1],A=b[S+2];f.push(D,E,E,A,A,D)}}else if(m!==void 0){const b=m.array;_=m.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const D=S+0,E=S+1,A=S+2;f.push(D,E,E,A,A,D)}}else return;const g=new(Cf(f)?If:Df)(f,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function y_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S_(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let D=o.attributes.position.count*v,E=1;D>t.maxTextureSize&&(E=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*E*4*u),w=new wf(A,D,E,u);w.type=Vn,w.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const F=p[L],B=b[L],W=S[L],q=D*E*4*L;for(let X=0;X<F.count;X++){const tt=X*M;m===!0&&(s.fromBufferAttribute(F,X),A[q+tt+0]=s.x,A[q+tt+1]=s.y,A[q+tt+2]=s.z,A[q+tt+3]=0),_===!0&&(s.fromBufferAttribute(B,X),A[q+tt+4]=s.x,A[q+tt+5]=s.y,A[q+tt+6]=s.z,A[q+tt+7]=0),g===!0&&(s.fromBufferAttribute(W,X),A[q+tt+8]=s.x,A[q+tt+9]=s.y,A[q+tt+10]=s.z,A[q+tt+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new st(D,E)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function b_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Bf extends Ye{constructor(t,e,n,s,r,a,o,c,l,h=Vs){if(h!==Vs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=is),n===void 0&&h===Js&&(n=Ys),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zf=new Ye,ru=new Bf(1,1),Gf=new wf,Vf=new l0,Hf=new Of,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function C_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function A_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function w_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Ne(e,n)}}function R_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),Ne(e,n)}}function P_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),Ne(e,n)}}function L_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function B_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=Ef,r=ru):r=zf,e.setTexture2D(t||r,s)}function z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function G_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hf,s)}function V_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gf,s)}function H_(i){switch(i){case 5126:return T_;case 35664:return E_;case 35665:return C_;case 35666:return A_;case 35674:return w_;case 35675:return R_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return I_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return O_;case 36295:return k_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(i,t){i.uniform1fv(this.addr,t)}function X_(i,t){const e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function $_(i,t){const e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function q_(i,t){const e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function j_(i,t){const e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y_(i,t){const e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J_(i,t){const e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z_(i,t){i.uniform1iv(this.addr,t)}function K_(i,t){i.uniform2iv(this.addr,t)}function Q_(i,t){i.uniform3iv(this.addr,t)}function tv(i,t){i.uniform4iv(this.addr,t)}function ev(i,t){i.uniform1uiv(this.addr,t)}function nv(i,t){i.uniform2uiv(this.addr,t)}function iv(i,t){i.uniform3uiv(this.addr,t)}function sv(i,t){i.uniform4uiv(this.addr,t)}function rv(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zf,r[a])}function av(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vf,r[a])}function ov(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hf,r[a])}function cv(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gf,r[a])}function lv(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return $_;case 35666:return q_;case 35674:return j_;case 35675:return Y_;case 35676:return J_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return Q_;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return cv}}class hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H_(e.type)}}class uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}}class fv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function dv(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){uu(e,l===void 0?new hv(o,i,t):new uv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new fv(o),uu(e,u)),e=u}}}class Fa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);dv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function fu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pv=37297;let mv=0;function gv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const du=new Yt;function _v(i){ae._getMatrix(du,ae.workingColorSpace,i);const t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case co:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gv(i.getShaderSource(t),a)}else return s}function vv(i,t){const e=_v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xv(i,t){let e;switch(t){case kp:e="Linear";break;case Fp:e="Reinhard";break;case Bp:e="Cineon";break;case pf:e="ACESFilmic";break;case Gp:e="AgX";break;case Vp:e="Neutral";break;case zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xa=new P;function yv(){ae.getLuminanceCoefficients(xa);const i=xa.x.toFixed(4),t=xa.y.toFixed(4),e=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Sv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function br(i){return i!==""}function mu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(Tv,Cv)}const Ev=new Map;function Cv(i,t){let e=Zt[t];if(e===void 0){const n=Ev.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(Av,wv)}function wv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Pv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case js:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function Dv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case Np:t="ENVMAP_BLENDING_MIX";break;case Op:t="ENVMAP_BLENDING_ADD";break}return t}function Iv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Rv(e),l=Pv(e),h=Lv(e),u=Dv(e),f=Iv(e),d=Mv(e),m=Sv(r),_=s.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(g=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=al(a),a=mu(a,e),a=gu(a,e),o=al(o),o=mu(o,e),o=gu(o,e),a=_u(a),o=_u(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+g+a,v=b+p+o,D=fu(s,s.VERTEX_SHADER,S),E=fu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(E).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,E);else{const tt=pu(s,D,"vertex"),H=pu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+tt+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(E),w=new Fa(s,_),M=bv(s,_)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,pv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let Nv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kv(t),e.set(t,n)),n}}class kv{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}}function Fv(i,t,e,n,s,r,a){const o=new Pf,c=new Ov,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,x,L,F,B){const W=F.fog,q=B.geometry,X=M.isMeshStandardMaterial?F.environment:null,tt=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),H=tt&&tt.mapping===oo?tt.image.height:null,ht=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=gt!==void 0?gt.length:0;let Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let Mt,V,Z,bt;if(ht){const de=On[ht];Mt=de.vertexShader,V=de.fragmentShader}else Mt=M.vertexShader,V=M.fragmentShader,c.update(M),Z=c.getVertexShaderID(M),bt=c.getFragmentShaderID(M);const lt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Wt=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,se=!!M.map,Q=!!M.matcap,ot=!!tt,R=!!M.aoMap,Ot=!!M.lightMap,nt=!!M.bumpMap,At=!!M.normalMap,ut=!!M.displacementMap,Gt=!!M.emissiveMap,Tt=!!M.metalnessMap,C=!!M.roughnessMap,y=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,et=M.iridescence>0,Y=M.sheen>0,Dt=M.transmission>0,pt=y&&!!M.anisotropyMap,Et=k&&!!M.clearcoatMap,Kt=k&&!!M.clearcoatNormalMap,at=k&&!!M.clearcoatRoughnessMap,wt=et&&!!M.iridescenceMap,Vt=et&&!!M.iridescenceThicknessMap,Xt=Y&&!!M.sheenColorMap,Rt=Y&&!!M.sheenRoughnessMap,te=!!M.specularMap,Jt=!!M.specularColorMap,xe=!!M.specularIntensityMap,I=Dt&&!!M.transmissionMap,mt=Dt&&!!M.thicknessMap,$=!!M.gradientMap,J=!!M.alphaMap,St=M.alphaTest>0,_t=!!M.alphaHash,qt=!!M.extensions;let Ce=Ai;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Xe={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:V,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&B.instanceColor!==null,instancingMorph:Wt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:tr,alphaToCoverage:!!M.alphaToCoverage,map:se,matcap:Q,envMap:ot,envMapMode:ot&&tt.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Ot,bumpMap:nt,normalMap:At,displacementMap:f&&ut,emissiveMap:Gt,normalMapObjectSpace:At&&M.normalMapType===$p,normalMapTangentSpace:At&&M.normalMapType===zl,metalnessMap:Tt,roughnessMap:C,anisotropy:y,anisotropyMap:pt,clearcoat:k,clearcoatMap:Et,clearcoatNormalMap:Kt,clearcoatRoughnessMap:at,dispersion:j,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Vt,sheen:Y,sheenColorMap:Xt,sheenRoughnessMap:Rt,specularMap:te,specularColorMap:Jt,specularIntensityMap:xe,transmission:Dt,transmissionMap:I,thicknessMap:mt,gradientMap:$,opaque:M.transparent===!1&&M.blending===Gs&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:St,alphaHash:_t,combine:M.combine,mapUv:se&&_(M.map.channel),aoMapUv:R&&_(M.aoMap.channel),lightMapUv:Ot&&_(M.lightMap.channel),bumpMapUv:nt&&_(M.bumpMap.channel),normalMapUv:At&&_(M.normalMap.channel),displacementMapUv:ut&&_(M.displacementMap.channel),emissiveMapUv:Gt&&_(M.emissiveMap.channel),metalnessMapUv:Tt&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:pt&&_(M.anisotropyMap.channel),clearcoatMapUv:Et&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(M.sheenRoughnessMap.channel),specularMapUv:te&&_(M.specularMap.channel),specularColorMapUv:Jt&&_(M.specularColorMap.channel),specularIntensityMapUv:xe&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:mt&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(At||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(se||J),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:se&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(b(x,M),S(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=m[M.type];let L;if(x){const F=On[x];L=M0.clone(F.uniforms)}else L=M.uniforms;return L}function D(M,x){let L;for(let F=0,B=h.length;F<B;F++){const W=h[F];if(W.cacheKey===x){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Uv(i,x,M,r),h.push(L)),L}function E(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:w}}function Bv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||zv),n.length>1&&n.sort(f||xu),s.length>1&&s.sort(f||xu)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Gv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new yu,i.set(n,[a])):s>=r.length?(a=new yu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new rt};break;case"SpotLight":e={position:new P,direction:new P,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wv=0;function Xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $v(i){const t=new Vv,e=Hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ce,a=new ce;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,b=0,S=0,v=0,D=0,E=0,A=0;l.sort(Xv);for(let M=0,x=l.length;M<x;M++){const L=l[M],F=L.color,B=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],B);A++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const tt=L.shadow,H=e.get(L);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=X,d++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[_]=X;const tt=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,tt.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=tt.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,v++}_++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=X,g++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const tt=L.shadow,H=e.get(L);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==S||w.numSpotShadows!==v||w.numSpotMaps!==D||w.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,w.directionalLength=d,w.pointLength=m,w.spotLength=_,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=S,w.numSpotShadows=v,w.numSpotMaps=D,w.numLightProbes=A,n.version=Wv++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Mu(i){const t=new $v(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function qv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Mu(i),t.set(s,[o])):r>=a.length?(o=new Mu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class jv extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yv extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kv(i,t,e){let n=new Gl;const s=new st,r=new st,a=new _e,o=new jv({depthPacking:Xp}),c=new Yv,l={},h=e.maxTextureSize,u={[Ri]:je,[je]:Ri,[kn]:kn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Jv,fragmentShader:Zv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let p=this.type;this.render=function(E,A,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==si&&this.type===si,W=p===si&&this.type!==si;for(let q=0,X=E.length;q<X;q++){const tt=E[q],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ht=H.getFrameExtents();if(s.multiply(ht),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const Ct=this.type!==si?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new ss(s.x,s.y,Ct),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const gt=H.getViewportCount();for(let Ct=0;Ct<gt;Ct++){const Ht=H.getViewport(Ct);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),F.viewport(a),H.updateMatrices(tt,Ct),n=H.getFrustum(),v(A,w,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===si&&b(H,w),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,x,L)};function b(E,A){const w=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ss(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,w,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,w,d,_,null)}function S(E,A,w,M){let x=null;const L=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=w.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,B=A.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let q=W[B];q===void 0&&(q=x.clone(),W[B]=q,A.addEventListener("dispose",D)),x=q}if(x.visible=A.visible,x.wireframe=A.wireframe,M===si?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=w}return x}function v(E,A,w,M,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const B=t.update(E),W=E.material;if(Array.isArray(W)){const q=B.groups;for(let X=0,tt=q.length;X<tt;X++){const H=q[X],ht=W[H.materialIndex];if(ht&&ht.visible){const gt=S(E,ht,M,x);E.onBeforeShadow(i,E,A,w,B,gt,H),i.renderBufferDirect(w,null,B,gt,E,H),E.onAfterShadow(i,E,A,w,B,gt,H)}}}else if(W.visible){const q=S(E,W,M,x);E.onBeforeShadow(i,E,A,w,B,q,null),i.renderBufferDirect(w,null,B,q,E,null),E.onAfterShadow(i,E,A,w,B,q,null)}}const F=E.children;for(let B=0,W=F.length;B<W;B++)v(F[B],A,w,M,x)}function D(E){E.target.removeEventListener("dispose",D);for(const w in l){const M=l[w],x=E.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Qv={[Sc]:bc,[Tc]:Ac,[Ec]:wc,[$s]:Cc,[bc]:Sc,[Ac]:Tc,[wc]:Ec,[Cc]:$s};function tx(i,t){function e(){let I=!1;const mt=new _e;let $=null;const J=new _e(0,0,0,0);return{setMask:function(St){$!==St&&!I&&(i.colorMask(St,St,St,St),$=St)},setLocked:function(St){I=St},setClear:function(St,_t,qt,Ce,Xe){Xe===!0&&(St*=Ce,_t*=Ce,qt*=Ce),mt.set(St,_t,qt,Ce),J.equals(mt)===!1&&(i.clearColor(St,_t,qt,Ce),J.copy(mt))},reset:function(){I=!1,$=null,J.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,$=null,J=null,St=null;return{setReversed:function(_t){if(mt!==_t){const qt=t.get("EXT_clip_control");mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=St;St=null,this.setClear(Ce)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?lt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(_t){$!==_t&&!I&&(i.depthMask(_t),$=_t)},setFunc:function(_t){if(mt&&(_t=Qv[_t]),J!==_t){switch(_t){case Sc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=_t}},setLocked:function(_t){I=_t},setClear:function(_t){St!==_t&&(mt&&(_t=1-_t),i.clearDepth(_t),St=_t)},reset:function(){I=!1,$=null,J=null,St=null,mt=!1}}}function s(){let I=!1,mt=null,$=null,J=null,St=null,_t=null,qt=null,Ce=null,Xe=null;return{setTest:function(de){I||(de?lt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(de){mt!==de&&!I&&(i.stencilMask(de),mt=de)},setFunc:function(de,Sn,Jn){($!==de||J!==Sn||St!==Jn)&&(i.stencilFunc(de,Sn,Jn),$=de,J=Sn,St=Jn)},setOp:function(de,Sn,Jn){(_t!==de||qt!==Sn||Ce!==Jn)&&(i.stencilOp(de,Sn,Jn),_t=de,qt=Sn,Ce=Jn)},setLocked:function(de){I=de},setClear:function(de){Xe!==de&&(i.clearStencil(de),Xe=de)},reset:function(){I=!1,mt=null,$=null,J=null,St=null,_t=null,qt=null,Ce=null,Xe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,S=null,v=null,D=null,E=null,A=new rt(0,0,0),w=0,M=!1,x=null,L=null,F=null,B=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=tt>=2);let ht=null,gt={};const Ct=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Mt=new _e().fromArray(Ct),V=new _e().fromArray(Ht);function Z(I,mt,$,J){const St=new Uint8Array(4),_t=i.createTexture();i.bindTexture(I,_t),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<$;qt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(mt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return _t}const bt={};bt[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc($s),nt(!1),At(wh),lt(i.CULL_FACE),R(Ci);function lt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ft(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Wt(I,mt){return u[I]!==mt?(i.bindFramebuffer(I,mt),u[I]=mt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function zt(I,mt){let $=d,J=!1;if(I){$=f.get(mt),$===void 0&&($=[],f.set(mt,$));const St=I.textures;if($.length!==St.length||$[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,qt=St.length;_t<qt;_t++)$[_t]=i.COLOR_ATTACHMENT0+_t;$.length=St.length,J=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,J=!0);J&&i.drawBuffers($)}function se(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Q={[Ji]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};Q[yp]=i.MIN,Q[Mp]=i.MAX;const ot={[Sp]:i.ZERO,[bp]:i.ONE,[Tp]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[wp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[Rp]:i.ONE_MINUS_DST_COLOR,[Ap]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Ip]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,mt,$,J,St,_t,qt,Ce,Xe,de){if(I===Ci){_===!0&&(Ft(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),I!==_p){if(I!==g||de!==M){if((p!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,v=Ji),de)switch(I){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,S=null,D=null,E=null,A.set(0,0,0),w=0,g=I,M=de}return}St=St||mt,_t=_t||$,qt=qt||J,(mt!==p||St!==v)&&(i.blendEquationSeparate(Q[mt],Q[St]),p=mt,v=St),($!==b||J!==S||_t!==D||qt!==E)&&(i.blendFuncSeparate(ot[$],ot[J],ot[_t],ot[qt]),b=$,S=J,D=_t,E=qt),(Ce.equals(A)===!1||Xe!==w)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Xe),A.copy(Ce),w=Xe),g=I,M=!1}function Ot(I,mt){I.side===kn?Ft(i.CULL_FACE):lt(i.CULL_FACE);let $=I.side===je;mt&&($=!$),nt($),I.blending===Gs&&I.transparent===!1?R(Ci):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function At(I){I!==pp?(lt(i.CULL_FACE),I!==L&&(I===wh?i.cullFace(i.BACK):I===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),L=I}function ut(I){I!==F&&(X&&i.lineWidth(I),F=I)}function Gt(I,mt,$){I?(lt(i.POLYGON_OFFSET_FILL),(B!==mt||W!==$)&&(i.polygonOffset(mt,$),B=mt,W=$)):Ft(i.POLYGON_OFFSET_FILL)}function Tt(I){I?lt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function C(I){I===void 0&&(I=i.TEXTURE0+q-1),ht!==I&&(i.activeTexture(I),ht=I)}function y(I,mt,$){$===void 0&&(ht===null?$=i.TEXTURE0+q-1:$=ht);let J=gt[$];J===void 0&&(J={type:void 0,texture:void 0},gt[$]=J),(J.type!==I||J.texture!==mt)&&(ht!==$&&(i.activeTexture($),ht=$),i.bindTexture(I,mt||bt[I]),J.type=I,J.texture=mt)}function k(){const I=gt[ht];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(I){Mt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Mt.copy(I))}function Rt(I){V.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function te(I,mt){let $=l.get(mt);$===void 0&&($=new WeakMap,l.set(mt,$));let J=$.get(I);J===void 0&&(J=i.getUniformBlockIndex(mt,I.name),$.set(I,J))}function Jt(I,mt){const J=l.get(mt).get(I);c.get(mt)!==J&&(i.uniformBlockBinding(mt,J,I.__bindingPointIndex),c.set(mt,J))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,gt={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,S=null,v=null,D=null,E=null,A=new rt(0,0,0),w=0,M=!1,x=null,L=null,F=null,B=null,W=null,Mt.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ft,bindFramebuffer:Wt,drawBuffers:zt,useProgram:se,setBlending:R,setMaterial:Ot,setFlipSided:nt,setCullFace:At,setLineWidth:ut,setPolygonOffset:Gt,setScissorTest:Tt,activeTexture:C,bindTexture:y,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:wt,texImage3D:Vt,updateUBOMapping:te,uniformBlockBinding:Jt,texStorage2D:Kt,texStorage3D:at,texSubImage2D:Y,texSubImage3D:Dt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Et,scissor:Xt,viewport:Rt,reset:xe}}function Su(i,t,e,n){const s=ex(n);switch(e){case xf:return i*t;case Mf:return i*t;case Sf:return i*t*2;case Ol:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case bf:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case yf:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case Ia:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:case Nc:return Math.max(i,16)*Math.max(t,8)/4;case Dc:case Uc:return Math.max(i,8)*Math.max(t,8)/2;case Oc:case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Qc:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tf:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(i){switch(i){case ui:case gf:return{byteLength:1,components:1};case Ir:case _f:case Xr:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case is:case Il:case Vn:return{byteLength:4,components:1};case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return d?new OffscreenCanvas(C,y):Ka("canvas")}function _(C,y,k){let j=1;const et=Tt(C);if((et.width>k||et.height>k)&&(j=k/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*et.width),Dt=Math.floor(j*et.height);u===void 0&&(u=m(Y,Dt));const pt=y?m(Y,Dt):u;return pt.width=Y,pt.height=Dt,pt.getContext("2d").drawImage(C,0,0,Y,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Dt+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,k,j,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const Dt=et?co:ae.getTransfer(j);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Dt===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,y){let k;return C?y===null||y===is||y===Ys?k=i.DEPTH24_STENCIL8:y===Vn?k=i.DEPTH32F_STENCIL8:y===Ir&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===is||y===Ys?k=i.DEPTH_COMPONENT24:y===Vn?k=i.DEPTH_COMPONENT32F:y===Ir&&(k=i.DEPTH_COMPONENT16),k}function D(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function E(C){const y=C.target;y.removeEventListener("dispose",E),w(y),y.isVideoTexture&&h.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),x(y)}function w(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,j=f.get(k);if(j){const et=j[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(k)}n.remove(C)}function M(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const k=C.source,j=f.get(k);delete j[y.__cacheKey],a.memory.textures--}function x(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let et=0;et<y.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[j][et]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,et=k.length;j<et;j++){const Y=n.get(k[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(C)}let L=0;function F(){L=0}function B(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function W(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function q(C,y){const k=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(k,C,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function X(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){V(k,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function tt(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){V(k,C,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function H(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Z(k,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const ht={[Ya]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Lc]:i.MIRRORED_REPEAT},gt={[pn]:i.NEAREST,[Hp]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Ct={[qp]:i.NEVER,[Qp]:i.ALWAYS,[jp]:i.LESS,[Ef]:i.LEQUAL,[Yp]:i.EQUAL,[Kp]:i.GEQUAL,[Jp]:i.GREATER,[Zp]:i.NOTEQUAL};function Ht(C,y){if(y.type===Vn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===bo||y.magFilter===Qr||y.magFilter===ns||y.minFilter===Gn||y.minFilter===bo||y.minFilter===Qr||y.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ht[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ht[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ht[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==Qr&&y.minFilter!==ns||y.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Mt(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));const j=y.source;let et=f.get(j);et===void 0&&(et={},f.set(j,et));const Y=W(y);if(Y!==C.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),et[Y].usedTimes++;const Dt=et[C.__cacheKey];Dt!==void 0&&(et[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&M(y)),C.__cacheKey=Y,C.__webglTexture=et[Y].texture}return k}function V(C,y,k){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const et=Mt(C,y),Y=y.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+k);const Dt=n.get(Y);if(Y.version!==Dt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const pt=ae.getPrimaries(ae.workingColorSpace),Et=y.colorSpace===Ti?null:ae.getPrimaries(y.colorSpace),Kt=y.colorSpace===Ti||pt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let at=_(y.image,!1,s.maxTextureSize);at=Gt(y,at);const wt=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type);let Xt=S(y.internalFormat,wt,Vt,y.colorSpace,y.isVideoTexture);Ht(j,y);let Rt;const te=y.mipmaps,Jt=y.isVideoTexture!==!0,xe=Dt.__version===void 0||et===!0,I=Y.dataReady,mt=D(y,at);if(y.isDepthTexture)Xt=v(y.format===Js,y.type),xe&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Xt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Xt,at.width,at.height,0,wt,Vt,null));else if(y.isDataTexture)if(te.length>0){Jt&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,te[0].width,te[0].height);for(let $=0,J=te.length;$<J;$++)Rt=te[$],Jt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Rt.width,Rt.height,wt,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Rt.width,Rt.height,0,wt,Vt,Rt.data);y.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,at.width,at.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,wt,Vt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,at.width,at.height,0,wt,Vt,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,te[0].width,te[0].height,at.depth);for(let $=0,J=te.length;$<J;$++)if(Rt=te[$],y.format!==wn)if(wt!==null)if(Jt){if(I)if(y.layerUpdates.size>0){const St=Su(Rt.width,Rt.height,y.format,y.type);for(const _t of y.layerUpdates){const qt=Rt.data.subarray(_t*St/Rt.data.BYTES_PER_ELEMENT,(_t+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,_t,Rt.width,Rt.height,1,wt,qt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Rt.width,Rt.height,at.depth,wt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Rt.width,Rt.height,at.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Rt.width,Rt.height,at.depth,wt,Vt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Rt.width,Rt.height,at.depth,0,wt,Vt,Rt.data)}else{Jt&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,te[0].width,te[0].height);for(let $=0,J=te.length;$<J;$++)Rt=te[$],y.format!==wn?wt!==null?Jt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Rt.width,Rt.height,wt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Rt.width,Rt.height,wt,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Rt.width,Rt.height,0,wt,Vt,Rt.data)}else if(y.isDataArrayTexture)if(Jt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,at.width,at.height,at.depth),I)if(y.layerUpdates.size>0){const $=Su(at.width,at.height,y.format,y.type);for(const J of y.layerUpdates){const St=at.data.subarray(J*$/at.data.BYTES_PER_ELEMENT,(J+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,at.width,at.height,1,wt,Vt,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Vt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,at.width,at.height,at.depth,0,wt,Vt,at.data);else if(y.isData3DTexture)Jt?(xe&&e.texStorage3D(i.TEXTURE_3D,mt,Xt,at.width,at.height,at.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,at.width,at.height,at.depth,0,wt,Vt,at.data);else if(y.isFramebufferTexture){if(xe)if(Jt)e.texStorage2D(i.TEXTURE_2D,mt,Xt,at.width,at.height);else{let $=at.width,J=at.height;for(let St=0;St<mt;St++)e.texImage2D(i.TEXTURE_2D,St,Xt,$,J,0,wt,Vt,null),$>>=1,J>>=1}}else if(te.length>0){if(Jt&&xe){const $=Tt(te[0]);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}for(let $=0,J=te.length;$<J;$++)Rt=te[$],Jt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Vt,Rt):e.texImage2D(i.TEXTURE_2D,$,Xt,wt,Vt,Rt);y.generateMipmaps=!1}else if(Jt){if(xe){const $=Tt(at);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Vt,at)}else e.texImage2D(i.TEXTURE_2D,0,Xt,wt,Vt,at);g(y)&&p(j),Dt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Z(C,y,k){if(y.image.length!==6)return;const j=Mt(C,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const Y=n.get(et);if(et.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const Dt=ae.getPrimaries(ae.workingColorSpace),pt=y.colorSpace===Ti?null:ae.getPrimaries(y.colorSpace),Et=y.colorSpace===Ti||Dt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let J=0;J<6;J++)!Kt&&!at?wt[J]=_(y.image[J],!0,s.maxCubemapSize):wt[J]=at?y.image[J].image:y.image[J],wt[J]=Gt(y,wt[J]);const Vt=wt[0],Xt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),te=S(y.internalFormat,Xt,Rt,y.colorSpace),Jt=y.isVideoTexture!==!0,xe=Y.__version===void 0||j===!0,I=et.dataReady;let mt=D(y,Vt);Ht(i.TEXTURE_CUBE_MAP,y);let $;if(Kt){Jt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,Vt.width,Vt.height);for(let J=0;J<6;J++){$=wt[J].mipmaps;for(let St=0;St<$.length;St++){const _t=$[St];y.format!==wn?Xt!==null?Jt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St,0,0,_t.width,_t.height,Xt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St,te,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St,0,0,_t.width,_t.height,Xt,Rt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St,te,_t.width,_t.height,0,Xt,Rt,_t.data)}}}else{if($=y.mipmaps,Jt&&xe){$.length>0&&mt++;const J=Tt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,J.width,J.height)}for(let J=0;J<6;J++)if(at){Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,wt[J].width,wt[J].height,Xt,Rt,wt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,wt[J].width,wt[J].height,0,Xt,Rt,wt[J].data);for(let St=0;St<$.length;St++){const qt=$[St].image[J].image;Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St+1,0,0,qt.width,qt.height,Xt,Rt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St+1,te,qt.width,qt.height,0,Xt,Rt,qt.data)}}else{Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Xt,Rt,wt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Xt,Rt,wt[J]);for(let St=0;St<$.length;St++){const _t=$[St];Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St+1,0,0,Xt,Rt,_t.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,St+1,te,Xt,Rt,_t.image[J])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),Y.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function bt(C,y,k,j,et,Y){const Dt=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),Et=S(k.internalFormat,Dt,pt,k.colorSpace),Kt=n.get(y),at=n.get(k);if(at.__renderTarget=y,!Kt.__hasExternalTextures){const wt=Math.max(1,y.width>>Y),Vt=Math.max(1,y.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,Et,wt,Vt,y.depth,0,Dt,pt,null):e.texImage2D(et,Y,Et,wt,Vt,0,Dt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),At(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,at.__webglTexture,0,nt(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,at.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const j=y.depthTexture,et=j&&j.isDepthTexture?j.type:null,Y=v(y.stencilBuffer,et),Dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=nt(y);At(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Y,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,C)}else{const j=y.textures;for(let et=0;et<j.length;et++){const Y=j[et],Dt=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),Et=S(Y.internalFormat,Dt,pt,Y.colorSpace),Kt=nt(y);k&&At(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Et,y.width,y.height):At(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const et=j.__webglTexture,Y=nt(y);if(y.depthTexture.format===Vs)At(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Js)At(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=j}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ft(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[j],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(C,y,k){const j=n.get(C);y!==void 0&&bt(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Wt(C)}function se(C){const y=C.texture,k=n.get(C),j=n.get(y);C.addEventListener("dispose",A);const et=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)k.__webglFramebuffer[pt][Et]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let pt=0,Et=et.length;pt<Et;pt++){const Kt=n.get(et[pt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&At(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const Et=et[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const Kt=r.convert(Et.format,Et.colorSpace),at=r.convert(Et.type),wt=S(Et.internalFormat,Kt,at,Et.colorSpace,C.isXRRenderTarget===!0),Vt=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)bt(k.__webglFramebuffer[pt][Et],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else bt(k.__webglFramebuffer[pt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,Et=et.length;pt<Et;pt++){const Kt=et[pt],at=n.get(Kt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Ht(i.TEXTURE_2D,Kt),bt(k.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),Ht(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)bt(k.__webglFramebuffer[Et],C,y,i.COLOR_ATTACHMENT0,pt,Et);else bt(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,pt,0);g(y)&&p(pt),e.unbindTexture()}C.depthBuffer&&Wt(C)}function Q(C){const y=C.textures;for(let k=0,j=y.length;k<j;k++){const et=y[k];if(g(et)){const Y=b(C),Dt=n.get(et).__webglTexture;e.bindTexture(Y,Dt),p(Y),e.unbindTexture()}}}const ot=[],R=[];function Ot(C){if(C.samples>0){if(At(C)===!1){const y=C.textures,k=C.width,j=C.height;let et=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),pt=y.length>1;if(pt)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Et]);const Kt=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,et,i.NEAREST),c===!0&&(ot.length=0,R.length=0,ot.push(i.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ot.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Et]);const Kt=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function At(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Gt(C,y){const k=C.colorSpace,j=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==tr&&k!==Ti&&(ae.getTransfer(k)===pe?(j!==wn||et!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=At}function ix(i,t){function e(n,s=Ti){let r;const a=ae.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.BYTE;if(n===_f)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Xr)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===yf)return i.RGB;if(n===wn)return i.RGBA;if(n===Mf)return i.LUMINANCE;if(n===Sf)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===bf)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Ia||n===Ua||n===Na||n===Oa)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Ic||n===Uc||n===Nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===kc||n===Fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===kc)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bc||n===zc||n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===$c||n===qc||n===jc||n===Yc||n===Jc||n===Zc||n===Kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Qc||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tf||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sx extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ge extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lx extends er{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const _=new cx,g=e.getContextAttributes();let p=null,b=null;const S=[],v=[],D=new st;let E=null;const A=new en;A.viewport=new _e;const w=new en;w.viewport=new _e;const M=[A,w],x=new sx;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=S[V];return Z===void 0&&(Z=new Ko,S[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=S[V];return Z===void 0&&(Z=new Ko,S[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=S[V];return Z===void 0&&(Z=new Ko,S[V]=Z),Z.getHandSpace()};function B(V){const Z=v.indexOf(V.inputSource);if(Z===-1)return;const bt=S[Z];bt!==void 0&&(bt.update(V.inputSource,V.frame,l||a),bt.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let V=0;V<S.length;V++){const Z=v[V];Z!==null&&(v[V]=null,S[V].disconnect(Z))}L=null,F=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const Z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ss(d.framebufferWidth,d.framebufferHeight,{format:wn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,bt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?Js:Vs,bt=g.stencil?Ys:is);const Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ss(f.textureWidth,f.textureHeight,{format:wn,type:ui,depthTexture:new Bf(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(V){for(let Z=0;Z<V.removed.length;Z++){const bt=V.removed[Z],lt=v.indexOf(bt);lt>=0&&(v[lt]=null,S[lt].disconnect(bt))}for(let Z=0;Z<V.added.length;Z++){const bt=V.added[Z];let lt=v.indexOf(bt);if(lt===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=v.length){v.push(bt),lt=Wt;break}else if(v[Wt]===null){v[Wt]=bt,lt=Wt;break}if(lt===-1)break}const Ft=S[lt];Ft&&Ft.connect(bt)}}const X=new P,tt=new P;function H(V,Z,bt){X.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const lt=X.distanceTo(tt),Ft=Z.projectionMatrix.elements,Wt=bt.projectionMatrix.elements,zt=Ft[14]/(Ft[10]-1),se=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],ot=(Ft[9]-1)/Ft[5],R=(Ft[8]-1)/Ft[0],Ot=(Wt[8]+1)/Wt[0],nt=zt*R,At=zt*Ot,ut=lt/(-R+Ot),Gt=ut*-R;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Gt),V.translateZ(ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ft[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Tt=zt+ut,C=se+ut,y=nt-Gt,k=At+(lt-Gt),j=Q*se/C*Tt,et=ot*se/C*Tt;V.projectionMatrix.makePerspective(y,k,j,et,Tt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ht(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,bt=V.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),x.near=w.near=A.near=Z,x.far=w.far=A.far=bt,(L!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,F=x.far),A.layers.mask=V.layers.mask|2,w.layers.mask=V.layers.mask|4,x.layers.mask=A.layers.mask|w.layers.mask;const lt=V.parent,Ft=x.cameras;ht(x,lt);for(let Wt=0;Wt<Ft.length;Wt++)ht(Ft[Wt],lt);Ft.length===2?H(x,A,w):x.projectionMatrix.copy(A.projectionMatrix),gt(V,x,lt)};function gt(V,Z,bt){bt===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(bt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Za*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Ct=null;function Ht(V,Z){if(h=Z.getViewerPose(l||a),m=Z,h!==null){const bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let lt=!1;bt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Wt=0;Wt<bt.length;Wt++){const zt=bt[Wt];let se=null;if(d!==null)se=d.getViewport(zt);else{const ot=u.getViewSubImage(f,zt);se=ot.viewport,Wt===0&&(t.setRenderTargetTextures(b,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(b))}let Q=M[Wt];Q===void 0&&(Q=new en,Q.layers.enable(Wt),Q.viewport=new _e,M[Wt]=Q),Q.matrix.fromArray(zt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(zt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(se.x,se.y,se.width,se.height),Wt===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Q)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Wt=u.getDepthInformation(bt[0]);Wt&&Wt.isValid&&Wt.texture&&_.init(t,Wt,s.renderState)}}for(let bt=0;bt<S.length;bt++){const lt=v[bt],Ft=S[bt];lt!==null&&Ft!==void 0&&Ft.update(lt,Z,l||a)}Ct&&Ct(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Mt=new kf;Mt.setAnimationLoop(Ht),this.setAnimationLoop=function(V){Ct=V},this.dispose=function(){}}}const zi=new Pn,hx=new ce;function ux(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,v=b.envMapRotation;S&&(g.envMap.value=S,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(zi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function l(b,S){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));const D=S.program;n.updateUBOMapping(b,D);const E=t.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){const S=u();b.__bindingPointIndex=S;const v=i.createBuffer(),D=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=s[b.id],v=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,A=v.length;E<A;E++){const w=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,x=w.length;M<x;M++){const L=w[M];if(d(L,E,M,D)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<B.length;q++){const X=B[q],tt=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,v,D){const E=b.value,A=S+"_"+v;if(D[A]===void 0)return typeof E=="number"||typeof E=="boolean"?D[A]=E:D[A]=E.clone(),!0;{const w=D[A];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return D[A]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function m(b){const S=b.uniforms;let v=0;const D=16;for(let A=0,w=S.length;A<w;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,L=M.length;x<L;x++){const F=M[x],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=B.length;W<q;W++){const X=B[W],tt=_(X),H=v%D,ht=H%tt.boundary,gt=H+ht;v+=ht,gt!==0&&D-gt<tt.storage&&(v+=D-gt),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=tt.storage}}}const E=v%D;return E>0&&(v+=D-E),b.__size=v,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){const S=b.target;S.removeEventListener("dispose",g);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class dx{constructor(t={}){const{canvas:e=e0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let D=!1,E=0,A=0,w=null,M=-1,x=null;const L=new _e,F=new _e;let B=null;const W=new rt(0);let q=0,X=e.width,tt=e.height,H=1,ht=null,gt=null;const Ct=new _e(0,0,X,tt),Ht=new _e(0,0,X,tt);let Mt=!1;const V=new Gl;let Z=!1,bt=!1;const lt=new ce,Ft=new ce,Wt=new P,zt=new _e,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ot(){return w===null?H:1}let R=n;function Ot(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",_t,!1),R===null){const N="webgl2";if(R=Ot(N,T),R===null)throw Ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,At,ut,Gt,Tt,C,y,k,j,et,Y,Dt,pt,Et,Kt,at,wt,Vt,Xt,Rt,te,Jt,xe,I;function mt(){nt=new v_(R),nt.init(),Jt=new ix(R,nt),At=new f_(R,nt,t,Jt),ut=new tx(R,nt),At.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Gt=new M_(R),Tt=new Bv,C=new nx(R,nt,ut,Tt,At,Jt,Gt),y=new p_(v),k=new __(v),j=new w0(R),xe=new h_(R,j),et=new x_(R,j,Gt,xe),Y=new b_(R,et,j,Gt),Xt=new S_(R,At,C),at=new d_(Tt),Dt=new Fv(v,y,k,nt,At,xe,at),pt=new ux(v,Tt),Et=new Gv,Kt=new qv(nt),Vt=new l_(v,y,k,ut,Y,d,c),wt=new Kv(v,Y,At),I=new fx(R,Gt,At,ut),Rt=new u_(R,nt,Gt),te=new y_(R,nt,Gt),Gt.programs=Dt.programs,v.capabilities=At,v.extensions=nt,v.properties=Tt,v.renderLists=Et,v.shadowMap=wt,v.state=ut,v.info=Gt}mt();const $=new lx(v,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(X,tt,!1))},this.getSize=function(T){return T.set(X,tt)},this.setSize=function(T,N,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,tt=N,e.width=Math.floor(T*H),e.height=Math.floor(N*H),z===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*H,tt*H).floor()},this.setDrawingBufferSize=function(T,N,z){X=T,tt=N,H=z,e.width=Math.floor(T*z),e.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ct)},this.setViewport=function(T,N,z,G){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,N,z,G),ut.viewport(L.copy(Ct).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,N,z,G){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,N,z,G),ut.scissor(F.copy(Ht).multiplyScalar(H).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(T){ut.setScissorTest(Mt=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){gt=T},this.getClearColor=function(T){return T.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(T=!0,N=!0,z=!0){let G=0;if(T){let O=!1;if(w!==null){const ct=w.texture.format;O=ct===Bl||ct===Fl||ct===kl}if(O){const ct=w.texture.type,vt=ct===ui||ct===is||ct===Ir||ct===Ys||ct===Ul||ct===Nl,It=Vt.getClearColor(),Ut=Vt.getClearAlpha(),$t=It.r,jt=It.g,Nt=It.b;vt?(m[0]=$t,m[1]=jt,m[2]=Nt,m[3]=Ut,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=$t,_[1]=jt,_[2]=Nt,_[3]=Ut,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),z&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Et.dispose(),Kt.dispose(),Tt.dispose(),y.dispose(),k.dispose(),Y.dispose(),xe.dispose(),I.dispose(),Dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",yh),$.removeEventListener("sessionend",Mh),Ui.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=Gt.autoReset,N=wt.enabled,z=wt.autoUpdate,G=wt.needsUpdate,O=wt.type;mt(),Gt.autoReset=T,wt.enabled=N,wt.autoUpdate=z,wt.needsUpdate=G,wt.type=O}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){const N=T.target;N.removeEventListener("dispose",qt),Ce(N)}function Ce(T){Xe(T),Tt.remove(T)}function Xe(T){const N=Tt.get(T).programs;N!==void 0&&(N.forEach(function(z){Dt.releaseProgram(z)}),T.isShaderMaterial&&Dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,G,O,ct){N===null&&(N=se);const vt=O.isMesh&&O.matrixWorld.determinant()<0,It=lp(T,N,z,G,O);ut.setMaterial(G,vt);let Ut=z.index,$t=1;if(G.wireframe===!0){if(Ut=et.getWireframeAttribute(z),Ut===void 0)return;$t=2}const jt=z.drawRange,Nt=z.attributes.position;let oe=jt.start*$t,ye=(jt.start+jt.count)*$t;ct!==null&&(oe=Math.max(oe,ct.start*$t),ye=Math.min(ye,(ct.start+ct.count)*$t)),Ut!==null?(oe=Math.max(oe,0),ye=Math.min(ye,Ut.count)):Nt!=null&&(oe=Math.max(oe,0),ye=Math.min(ye,Nt.count));const Me=ye-oe;if(Me<0||Me===1/0)return;xe.setup(O,G,It,z,Ut);let sn,he=Rt;if(Ut!==null&&(sn=j.get(Ut),he=te,he.setIndex(sn)),O.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*ot()),he.setMode(R.LINES)):he.setMode(R.TRIANGLES);else if(O.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*ot()),O.isLineSegments?he.setMode(R.LINES):O.isLineLoop?he.setMode(R.LINE_LOOP):he.setMode(R.LINE_STRIP)}else O.isPoints?he.setMode(R.POINTS):O.isSprite&&he.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const kt=O._multiDrawStarts,Zn=O._multiDrawCounts,ue=O._multiDrawCount,bn=Ut?j.get(Ut).bytesPerElement:1,fs=Tt.get(G).currentProgram.getUniforms();for(let hn=0;hn<ue;hn++)fs.setValue(R,"_gl_DrawID",hn),he.render(kt[hn]/bn,Zn[hn])}else if(O.isInstancedMesh)he.renderInstances(oe,Me,O.count);else if(z.isInstancedBufferGeometry){const kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Zn=Math.min(z.instanceCount,kt);he.renderInstances(oe,Me,Zn)}else he.render(oe,Me)};function de(T,N,z){T.transparent===!0&&T.side===kn&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,Kr(T,N,z),T.side=Ri,T.needsUpdate=!0,Kr(T,N,z),T.side=kn):Kr(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),p=Kt.get(z),p.init(N),S.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==z&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ct=O.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const It=ct[vt];de(It,z,O),G.add(It)}else de(ct,z,O),G.add(ct)}),S.pop(),p=null,G},this.compileAsync=function(T,N,z=null){const G=this.compile(T,N,z);return new Promise(O=>{function ct(){if(G.forEach(function(vt){Tt.get(vt).currentProgram.isReady()&&G.delete(vt)}),G.size===0){O(T);return}setTimeout(ct,10)}nt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Sn=null;function Jn(T){Sn&&Sn(T)}function yh(){Ui.stop()}function Mh(){Ui.start()}const Ui=new kf;Ui.setAnimationLoop(Jn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){Sn=T,$.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},$.addEventListener("sessionstart",yh),$.addEventListener("sessionend",Mh),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,w),p=Kt.get(T,S.length),p.init(N),S.push(p),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(Ft),bt=this.localClippingEnabled,Z=at.init(this.clippingPlanes,bt),g=Et.get(T,b.length),g.init(),b.push(g),$.enabled===!0&&$.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&So(ct,N,-1/0,v.sortObjects)}So(T,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ht,gt),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Vt.addToRenderList(g,T),this.info.render.frame++,Z===!0&&at.beginShadows();const z=p.state.shadowsArray;wt.render(z,T,N),Z===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){const ct=N.cameras;if(O.length>0)for(let vt=0,It=ct.length;vt<It;vt++){const Ut=ct[vt];bh(G,O,T,Ut)}Q&&Vt.render(T);for(let vt=0,It=ct.length;vt<It;vt++){const Ut=ct[vt];Sh(g,T,Ut,Ut.viewport)}}else O.length>0&&bh(G,O,T,N),Q&&Vt.render(T),Sh(g,T,N);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,N),xe.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],Z===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function So(T,N,z,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){G&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);const vt=Y.update(T),It=T.material;It.visible&&g.push(T,vt,It,z,zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const vt=Y.update(T),It=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),zt.copy(vt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(It)){const Ut=vt.groups;for(let $t=0,jt=Ut.length;$t<jt;$t++){const Nt=Ut[$t],oe=It[Nt.materialIndex];oe&&oe.visible&&g.push(T,vt,oe,z,zt.z,Nt)}}else It.visible&&g.push(T,vt,It,z,zt.z,null)}}const ct=T.children;for(let vt=0,It=ct.length;vt<It;vt++)So(ct[vt],N,z,G)}function Sh(T,N,z,G){const O=T.opaque,ct=T.transmissive,vt=T.transparent;p.setupLightsView(z),Z===!0&&at.setGlobalState(v.clippingPlanes,z),G&&ut.viewport(L.copy(G)),O.length>0&&Zr(O,N,z),ct.length>0&&Zr(ct,N,z),vt.length>0&&Zr(vt,N,z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function bh(T,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ss(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Xr:ui,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ct=p.state.transmissionRenderTarget[G.id],vt=G.viewport||L;ct.setSize(vt.z,vt.w);const It=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Vt.render(z);const Ut=v.toneMapping;v.toneMapping=Ai;const $t=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Z===!0&&at.setGlobalState(v.clippingPlanes,G),Zr(T,z,G),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct),nt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Nt=0,oe=N.length;Nt<oe;Nt++){const ye=N[Nt],Me=ye.object,sn=ye.geometry,he=ye.material,kt=ye.group;if(he.side===kn&&Me.layers.test(G.layers)){const Zn=he.side;he.side=je,he.needsUpdate=!0,Th(Me,z,G,sn,he,kt),he.side=Zn,he.needsUpdate=!0,jt=!0}}jt===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct))}v.setRenderTarget(It),v.setClearColor(W,q),$t!==void 0&&(G.viewport=$t),v.toneMapping=Ut}function Zr(T,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ct=T.length;O<ct;O++){const vt=T[O],It=vt.object,Ut=vt.geometry,$t=G===null?vt.material:G,jt=vt.group;It.layers.test(z.layers)&&Th(It,N,z,Ut,$t,jt)}}function Th(T,N,z,G,O,ct){T.onBeforeRender(v,N,z,G,O,ct),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,N,z,G,T,ct),O.transparent===!0&&O.side===kn&&O.forceSinglePass===!1?(O.side=je,O.needsUpdate=!0,v.renderBufferDirect(z,N,G,O,T,ct),O.side=Ri,O.needsUpdate=!0,v.renderBufferDirect(z,N,G,O,T,ct),O.side=kn):v.renderBufferDirect(z,N,G,O,T,ct),T.onAfterRender(v,N,z,G,O,ct)}function Kr(T,N,z){N.isScene!==!0&&(N=se);const G=Tt.get(T),O=p.state.lights,ct=p.state.shadowsArray,vt=O.state.version,It=Dt.getParameters(T,O.state,ct,N,z),Ut=Dt.getProgramCacheKey(It);let $t=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?k:y).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",qt),$t=new Map,G.programs=$t);let jt=$t.get(Ut);if(jt!==void 0){if(G.currentProgram===jt&&G.lightsStateVersion===vt)return Ch(T,It),jt}else It.uniforms=Dt.getUniforms(T),T.onBeforeCompile(It,v),jt=Dt.acquireProgram(It,Ut),$t.set(Ut,jt),G.uniforms=It.uniforms;const Nt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=at.uniform),Ch(T,It),G.needsLights=up(T),G.lightsStateVersion=vt,G.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=jt,G.uniformsList=null,jt}function Eh(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Fa.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Ch(T,N){const z=Tt.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function lp(T,N,z,G,O){N.isScene!==!0&&(N=se),C.resetTextureUnits();const ct=N.fog,vt=G.isMeshStandardMaterial?N.environment:null,It=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tr,Ut=(G.isMeshStandardMaterial?k:y).get(G.envMap||vt),$t=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,jt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!z.morphAttributes.position,oe=!!z.morphAttributes.normal,ye=!!z.morphAttributes.color;let Me=Ai;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Me=v.toneMapping);const sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=sn!==void 0?sn.length:0,kt=Tt.get(G),Zn=p.state.lights;if(Z===!0&&(bt===!0||T!==x)){const gn=T===x&&G.id===M;at.setState(G,T,gn)}let ue=!1;G.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Zn.state.version||kt.outputColorSpace!==It||O.isBatchedMesh&&kt.batching===!1||!O.isBatchedMesh&&kt.batching===!0||O.isBatchedMesh&&kt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&kt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&kt.instancing===!1||!O.isInstancedMesh&&kt.instancing===!0||O.isSkinnedMesh&&kt.skinning===!1||!O.isSkinnedMesh&&kt.skinning===!0||O.isInstancedMesh&&kt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&kt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&kt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&kt.instancingMorph===!1&&O.morphTexture!==null||kt.envMap!==Ut||G.fog===!0&&kt.fog!==ct||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==at.numPlanes||kt.numIntersection!==at.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==jt||kt.morphTargets!==Nt||kt.morphNormals!==oe||kt.morphColors!==ye||kt.toneMapping!==Me||kt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,kt.__version=G.version);let bn=kt.currentProgram;ue===!0&&(bn=Kr(G,N,O));let fs=!1,hn=!1,rr=!1;const Se=bn.getUniforms(),Dn=kt.uniforms;if(ut.useProgram(bn.program)&&(fs=!0,hn=!0,rr=!0),G.id!==M&&(M=G.id,hn=!0),fs||x!==T){ut.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),i0(lt),s0(lt),Se.setValue(R,"projectionMatrix",lt)):Se.setValue(R,"projectionMatrix",T.projectionMatrix),Se.setValue(R,"viewMatrix",T.matrixWorldInverse);const fi=Se.map.cameraPosition;fi!==void 0&&fi.setValue(R,Wt.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&Se.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,hn=!0,rr=!0)}if(O.isSkinnedMesh){Se.setOptional(R,O,"bindMatrix"),Se.setOptional(R,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Se.setValue(R,"boneTexture",gn.boneTexture,C))}O.isBatchedMesh&&(Se.setOptional(R,O,"batchingTexture"),Se.setValue(R,"batchingTexture",O._matricesTexture,C),Se.setOptional(R,O,"batchingIdTexture"),Se.setValue(R,"batchingIdTexture",O._indirectTexture,C),Se.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(R,"batchingColorTexture",O._colorsTexture,C));const ar=z.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&Xt.update(O,z,bn),(hn||kt.receiveShadow!==O.receiveShadow)&&(kt.receiveShadow=O.receiveShadow,Se.setValue(R,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Dn.envMap.value=Ut,Dn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Dn.envMapIntensity.value=N.environmentIntensity),hn&&(Se.setValue(R,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&hp(Dn,rr),ct&&G.fog===!0&&pt.refreshFogUniforms(Dn,ct),pt.refreshMaterialUniforms(Dn,G,H,tt,p.state.transmissionRenderTarget[T.id]),Fa.upload(R,Eh(kt),Dn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fa.upload(R,Eh(kt),Dn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(R,"center",O.center),Se.setValue(R,"modelViewMatrix",O.modelViewMatrix),Se.setValue(R,"normalMatrix",O.normalMatrix),Se.setValue(R,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const gn=G.uniformsGroups;for(let fi=0,di=gn.length;fi<di;fi++){const Ah=gn[fi];I.update(Ah,bn),I.bind(Ah,bn)}}return bn}function hp(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function up(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,z){Tt.get(T.texture).__webglTexture=N,Tt.get(T.depthTexture).__webglTexture=z;const G=Tt.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const z=Tt.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){w=T,E=N,A=z;let G=!0,O=null,ct=!1,vt=!1;if(T){const Ut=Tt.get(T);if(Ut.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Ut.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ut.__hasExternalTextures)C.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&Tt.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(vt=!0);const jt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[N])?O=jt[N][z]:O=jt[N],ct=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?O=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?O=jt[z]:O=jt,L.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else L.copy(Ct).multiplyScalar(H).floor(),F.copy(Ht).multiplyScalar(H).floor(),B=Mt;if(ut.bindFramebuffer(R.FRAMEBUFFER,O)&&G&&ut.drawBuffers(T,O),ut.viewport(L),ut.scissor(F),ut.setScissorTest(B),ct){const Ut=Tt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ut.__webglTexture,z)}else if(vt){const Ut=Tt.get(T.texture),$t=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,z||0,$t)}M=-1},this.readRenderTargetPixels=function(T,N,z,G,O,ct,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(It=It[vt]),It){ut.bindFramebuffer(R.FRAMEBUFFER,It);try{const Ut=T.texture,$t=Ut.format,jt=Ut.type;if(!At.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&z>=0&&z<=T.height-O&&R.readPixels(N,z,G,O,Jt.convert($t),Jt.convert(jt),ct)}finally{const Ut=w!==null?Tt.get(w).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,G,O,ct,vt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(It=It[vt]),It){const Ut=T.texture,$t=Ut.format,jt=Ut.type;if(!At.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-G&&z>=0&&z<=T.height-O){ut.bindFramebuffer(R.FRAMEBUFFER,It);const Nt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.bufferData(R.PIXEL_PACK_BUFFER,ct.byteLength,R.STREAM_READ),R.readPixels(N,z,G,O,Jt.convert($t),Jt.convert(jt),0);const oe=w!==null?Tt.get(w).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,oe);const ye=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await n0(R,ye,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ct),R.deleteBuffer(Nt),R.deleteSync(ye),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-z),O=Math.floor(T.image.width*G),ct=Math.floor(T.image.height*G),vt=N!==null?N.x:0,It=N!==null?N.y:0;C.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,vt,It,O,ct),ut.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,G=null,O=0){T.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,z=null);let ct,vt,It,Ut,$t,jt,Nt,oe,ye;const Me=T.isCompressedTexture?T.mipmaps[O]:T.image;z!==null?(ct=z.max.x-z.min.x,vt=z.max.y-z.min.y,It=z.isBox3?z.max.z-z.min.z:1,Ut=z.min.x,$t=z.min.y,jt=z.isBox3?z.min.z:0):(ct=Me.width,vt=Me.height,It=Me.depth||1,Ut=0,$t=0,jt=0),G!==null?(Nt=G.x,oe=G.y,ye=G.z):(Nt=0,oe=0,ye=0);const sn=Jt.convert(N.format),he=Jt.convert(N.type);let kt;N.isData3DTexture?(C.setTexture3D(N,0),kt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),kt=R.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),kt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Zn=R.getParameter(R.UNPACK_ROW_LENGTH),ue=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bn=R.getParameter(R.UNPACK_SKIP_PIXELS),fs=R.getParameter(R.UNPACK_SKIP_ROWS),hn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jt);const rr=T.isDataArrayTexture||T.isData3DTexture,Se=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Dn=Tt.get(T),ar=Tt.get(N),gn=Tt.get(Dn.__renderTarget),fi=Tt.get(ar.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,gn.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let di=0;di<It;di++)rr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(T).__webglTexture,O,jt+di),T.isDepthTexture?(Se&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,O,ye+di),R.blitFramebuffer(Ut,$t,ct,vt,Nt,oe,ct,vt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Se?R.copyTexSubImage3D(kt,O,Nt,oe,ye+di,Ut,$t,ct,vt):R.copyTexSubImage2D(kt,O,Nt,oe,ye+di,Ut,$t,ct,vt);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(kt,O,Nt,oe,ye,ct,vt,It,sn,he,Me.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(kt,O,Nt,oe,ye,ct,vt,It,sn,Me.data):R.texSubImage3D(kt,O,Nt,oe,ye,ct,vt,It,sn,he,Me):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Nt,oe,ct,vt,sn,he,Me.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Nt,oe,Me.width,Me.height,sn,Me.data):R.texSubImage2D(R.TEXTURE_2D,O,Nt,oe,ct,vt,sn,he,Me);R.pixelStorei(R.UNPACK_ROW_LENGTH,Zn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bn),R.pixelStorei(R.UNPACK_SKIP_ROWS,fs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,hn),O===0&&N.generateMipmaps&&R.generateMipmap(kt),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,G=null,O=0){return T.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,z,G,O)},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,ut.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class ho{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=e,this.far=n}clone(){return new ho(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uo extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class px{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new P;class Qa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wf extends Li{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const fr=new P,ws=new P,Rs=new P,Ps=new st,dr=new st,Xf=new ce,ya=new P,pr=new P,Ma=new P,bu=new st,Qo=new st,Tu=new st;class mx extends Pe{constructor(t=new Wf){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new px(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Qa(n,3,0,!1)),As.setAttribute("uv",new Qa(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Rs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Sa(ya.set(-.5,-.5,0),Rs,a,ws,s,r),Sa(pr.set(.5,-.5,0),Rs,a,ws,s,r),Sa(Ma.set(.5,.5,0),Rs,a,ws,s,r),bu.set(0,0),Qo.set(1,0),Tu.set(1,1);let o=t.ray.intersectTriangle(ya,pr,Ma,!1,fr);if(o===null&&(Sa(pr.set(-.5,.5,0),Rs,a,ws,s,r),Qo.set(0,1),o=t.ray.intersectTriangle(ya,Ma,pr,!1,fr),o===null))return;const c=t.ray.origin.distanceTo(fr);c<t.near||c>t.far||e.push({distance:c,point:fr.clone(),uv:yn.getInterpolation(fr,ya,pr,Ma,bu,Qo,Tu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sa(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*Ps.x-s*Ps.y,dr.y=s*Ps.x+r*Ps.y):dr.copy(Ps),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(Xf)}class gx extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,l=pn,h=pn,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ls=new ce,Cu=new ce,ba=[],Au=new os,_x=new ce,mr=new Qt,gr=new nr;class In extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Eu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_x)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Au.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Au)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new nr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),gr.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Cu.multiplyMatrices(n,Ls),mr.matrixWorld=Cu,mr.raycast(t,ba);for(let a=0,o=ba.length;a<o;a++){const c=ba[a];c.instanceId=r,c.object=this,e.push(c)}ba.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gx(new Float32Array(s*this.count),s,this.count,Ol,Vn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hl extends Li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wu=new ce,ol=new Rf,Ta=new nr,Ea=new P;class $f extends Pe{constructor(t=new Le,e=new Hl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;wu.copy(s).invert(),ol.copy(t.ray).applyMatrix4(wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const g=l.getX(m);Ea.fromBufferAttribute(u,g),Ru(Ea,g,c,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Ea.fromBufferAttribute(u,m),Ru(Ea,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ru(i,t,e,n,s,r,a){const o=ol.distanceSqToPoint(i);if(o<e){const c=new P;ol.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class fo extends Ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new ce;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(He(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(He(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wl extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vx extends Wl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ca=new P,tc=new Xl,ec=new Xl,nc=new Xl;class xx extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ca.subVectors(s[0],s[1]).add(s[0]),l=Ca);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ca.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),tc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,g),ec.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,g),nc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ec.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),nc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(tc.calc(c),ec.calc(c),nc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function yx(i,t){const e=1-i;return e*e*t}function Mx(i,t){return 2*(1-i)*i*t}function Sx(i,t){return i*i*t}function Cr(i,t,e,n){return yx(i,t)+Mx(i,e)+Sx(i,n)}function bx(i,t){const e=1-i;return e*e*e*t}function Tx(i,t){const e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function Cx(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return bx(i,t)+Tx(i,e)+Ex(i,n)+Cx(i,s)}class qf extends Yn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ax extends Yn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y),Ar(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jf extends Yn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wx extends Yn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends Yn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rx extends Yn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y),Cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jf extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Pu(o,c.x,l.x,h.x,u.x),Pu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:vx,CatmullRomCurve3:xx,CubicBezierCurve:qf,CubicBezierCurve3:Ax,EllipseCurve:Wl,LineCurve:jf,LineCurve3:wx,QuadraticBezierCurve:Yf,QuadraticBezierCurve3:Rx,SplineCurve:Jf});class Px extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}}class ll extends Px{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jf(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yf(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new qf(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Jf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Wl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $l extends Le{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,f=new st,d=new P,m=new P,_=new P;let g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let b=0;b<=e;b++){const S=n+b*h*s,v=Math.sin(S),D=Math.cos(S);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*D,a.push(u.x,u.y,u.z),f.x=b/e,f.y=E/(t.length-1),o.push(f.x,f.y);const A=c[3*E+0]*v,w=c[3*E+1],M=c[3*E+0]*D;l.push(A,w,M)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){const v=S+b*t.length,D=v,E=v+t.length,A=v+t.length+1,w=v+1;r.push(D,E,w),r.push(A,w,E)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.points,t.segments,t.phiStart,t.phiLength)}}class ql extends $l{constructor(t=1,e=1,n=4,s=8){const r=new ll;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ql(t.radius,t.length,t.capSegments,t.radialSegments)}}class jl extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hi extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function b(){const v=new P,D=new P;let E=0;const A=(e-t)/n;for(let w=0;w<=r;w++){const M=[],x=w/r,L=x*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,W=B*c+o,q=Math.sin(W),X=Math.cos(W);D.x=L*q,D.y=-x*n+g,D.z=L*X,u.push(D.x,D.y,D.z),v.set(q,A,X).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-x),M.push(m++)}_.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){const x=_[M][w],L=_[M+1][w],F=_[M+1][w+1],B=_[M][w+1];(t>0||M!==0)&&(h.push(x,L,B),E+=3),(e>0||M!==r-1)&&(h.push(L,F,B),E+=3)}l.addGroup(p,E,0),p+=E}function S(v){const D=m,E=new st,A=new P;let w=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*x,0),f.push(0,x,0),d.push(.5,.5),m++;const L=m;for(let F=0;F<=s;F++){const W=F/s*c+o,q=Math.cos(W),X=Math.sin(W);A.x=M*X,A.y=g*x,A.z=M*q,u.push(A.x,A.y,A.z),f.push(0,x,0),E.x=q*.5+.5,E.y=X*.5*x+.5,d.push(E.x,E.y),m++}for(let F=0;F<s;F++){const B=D+F,W=L+F;v===!0?h.push(W,W+1,B):h.push(W+1,W,B),w+=3}l.addGroup(p,w,v===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class to extends hi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new to(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yl extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new P,v=new P,D=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],v),d(e[E+2],D),c(S,v,D,b)}function c(b,S,v,D){const E=D+1,A=[];for(let w=0;w<=E;w++){A[w]=[];const M=b.clone().lerp(v,w/E),x=S.clone().lerp(v,w/E),L=E-w;for(let F=0;F<=L;F++)F===0&&w===E?A[w][F]=M:A[w][F]=M.clone().lerp(x,F/L)}for(let w=0;w<E;w++)for(let M=0;M<2*(E-w)-1;M++){const x=Math.floor(M/2);M%2===0?(f(A[w][x+1]),f(A[w+1][x]),f(A[w][x])):(f(A[w][x+1]),f(A[w+1][x+1]),f(A[w+1][x]))}}function l(b){const S=new P;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(b),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const b=new P;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const v=g(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;a.push(v,1-D)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){const S=a[b+0],v=a[b+2],D=a[b+4],E=Math.max(S,v,D),A=Math.min(S,v,D);E>.9&&A<.1&&(S<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,S){const v=b*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function m(){const b=new P,S=new P,v=new P,D=new P,E=new st,A=new st,w=new st;for(let M=0,x=0;M<r.length;M+=9,x+=6){b.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),w.set(a[x+4],a[x+5]),D.copy(b).add(S).add(v).divideScalar(3);const L=g(D);_(E,x+0,b,L),_(A,x+2,S,L),_(w,x+4,v,L)}}function _(b,S,v,D){D<0&&b.x===1&&(a[S]=b.x-1),v.x===0&&v.z===0&&(a[S]=D/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.vertices,t.indices,t.radius,t.details)}}class Zf extends ll{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ll().fromJSON(s))}return this}}const Lx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Kf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=Ox(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Ur(r,a,e,o,c,d,0),a}};function Kf(i,t,e,n,s){let r,a;if(s===qx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Lu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Lu(r,i[r],i[r+1],a);return a&&po(a,a.next)&&(Or(a),a=a.next),a}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(po(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gx(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ix(i,n,s,r):Dx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Ux(rs(i),t,e),Ur(i,t,e,n,s,r,2)):a===2&&Nx(i,t,e,n,s,r):Ur(rs(i),t,e,n,s,r,1);break}}}function Dx(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&zs(s,o,r,c,a,l,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ix(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=hl(d,m,t,e,n),b=hl(_,g,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=b;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&zs(o,h,c,u,l,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&zs(o,h,c,u,l,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&zs(o,h,c,u,l,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&zs(o,h,c,u,l,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ux(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!po(s,r)&&Qf(s,n,n.next,r)&&Nr(s,r)&&Nr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function Nx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wx(a,o)){let c=td(a,o);a=rs(a,a.next),c=rs(c,c.next),Ur(a,t,e,n,s,r,0),Ur(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ox(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Kf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hx(l));for(s.sort(kx),r=0;r<s.length;r++)e=Fx(s[r],e);return e}function kx(i,t){return i.x-t.x}function Fx(i,t){const e=Bx(i,t);if(!e)return t;const n=td(e,i);return rs(n,n.next),rs(e,e.next)}function Bx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&zs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Nr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&zx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function zx(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Gx(i,t,e,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vx(s)}function Vx(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Wx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xx(i,t)&&(Nr(i,t)&&Nr(t,i)&&$x(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||po(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function po(i,t){return i.x===t.x&&i.y===t.y}function Qf(i,t,e,n){const s=wa(Ee(i,t,e)),r=wa(Ee(i,t,n)),a=wa(Ee(e,n,i)),o=wa(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Aa(i,e,t)||r===0&&Aa(i,n,t)||a===0&&Aa(e,i,n)||o===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wa(i){return i>0?1:i<0?-1:0}function Xx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Nr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function $x(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){const e=new ul(i.i,i.x,i.y),n=new ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){const s=new ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class wr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Du(t),Iu(n,t);let a=t.length;e.forEach(Du);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Iu(n,e[c]);const o=Lx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Du(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jl extends Le{constructor(t=new Zf([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:jx;let S,v=!1,D,E,A,w;p&&(S=p.getSpacedPoints(h),v=!0,f=!1,D=p.computeFrenetFrames(h,!1),E=new P,A=new P,w=new P),f||(g=0,d=0,m=0,_=0);const M=o.extractPoints(l);let x=M.shape;const L=M.holes;if(!wr.isClockWise(x)){x=x.reverse();for(let Q=0,ot=L.length;Q<ot;Q++){const R=L[Q];wr.isClockWise(R)&&(L[Q]=R.reverse())}}const B=wr.triangulateShape(x,L),W=x;for(let Q=0,ot=L.length;Q<ot;Q++){const R=L[Q];x=x.concat(R)}function q(Q,ot,R){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,R)}const X=x.length,tt=B.length;function H(Q,ot,R){let Ot,nt,At;const ut=Q.x-ot.x,Gt=Q.y-ot.y,Tt=R.x-Q.x,C=R.y-Q.y,y=ut*ut+Gt*Gt,k=ut*C-Gt*Tt;if(Math.abs(k)>Number.EPSILON){const j=Math.sqrt(y),et=Math.sqrt(Tt*Tt+C*C),Y=ot.x-Gt/j,Dt=ot.y+ut/j,pt=R.x-C/et,Et=R.y+Tt/et,Kt=((pt-Y)*C-(Et-Dt)*Tt)/(ut*C-Gt*Tt);Ot=Y+ut*Kt-Q.x,nt=Dt+Gt*Kt-Q.y;const at=Ot*Ot+nt*nt;if(at<=2)return new st(Ot,nt);At=Math.sqrt(at/2)}else{let j=!1;ut>Number.EPSILON?Tt>Number.EPSILON&&(j=!0):ut<-Number.EPSILON?Tt<-Number.EPSILON&&(j=!0):Math.sign(Gt)===Math.sign(C)&&(j=!0),j?(Ot=-Gt,nt=ut,At=Math.sqrt(y)):(Ot=ut,nt=Gt,At=Math.sqrt(y/2))}return new st(Ot/At,nt/At)}const ht=[];for(let Q=0,ot=W.length,R=ot-1,Ot=Q+1;Q<ot;Q++,R++,Ot++)R===ot&&(R=0),Ot===ot&&(Ot=0),ht[Q]=H(W[Q],W[R],W[Ot]);const gt=[];let Ct,Ht=ht.concat();for(let Q=0,ot=L.length;Q<ot;Q++){const R=L[Q];Ct=[];for(let Ot=0,nt=R.length,At=nt-1,ut=Ot+1;Ot<nt;Ot++,At++,ut++)At===nt&&(At=0),ut===nt&&(ut=0),Ct[Ot]=H(R[Ot],R[At],R[ut]);gt.push(Ct),Ht=Ht.concat(Ct)}for(let Q=0;Q<g;Q++){const ot=Q/g,R=d*Math.cos(ot*Math.PI/2),Ot=m*Math.sin(ot*Math.PI/2)+_;for(let nt=0,At=W.length;nt<At;nt++){const ut=q(W[nt],ht[nt],Ot);lt(ut.x,ut.y,-R)}for(let nt=0,At=L.length;nt<At;nt++){const ut=L[nt];Ct=gt[nt];for(let Gt=0,Tt=ut.length;Gt<Tt;Gt++){const C=q(ut[Gt],Ct[Gt],Ot);lt(C.x,C.y,-R)}}}const Mt=m+_;for(let Q=0;Q<X;Q++){const ot=f?q(x[Q],Ht[Q],Mt):x[Q];v?(A.copy(D.normals[0]).multiplyScalar(ot.x),E.copy(D.binormals[0]).multiplyScalar(ot.y),w.copy(S[0]).add(A).add(E),lt(w.x,w.y,w.z)):lt(ot.x,ot.y,0)}for(let Q=1;Q<=h;Q++)for(let ot=0;ot<X;ot++){const R=f?q(x[ot],Ht[ot],Mt):x[ot];v?(A.copy(D.normals[Q]).multiplyScalar(R.x),E.copy(D.binormals[Q]).multiplyScalar(R.y),w.copy(S[Q]).add(A).add(E),lt(w.x,w.y,w.z)):lt(R.x,R.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){const ot=Q/g,R=d*Math.cos(ot*Math.PI/2),Ot=m*Math.sin(ot*Math.PI/2)+_;for(let nt=0,At=W.length;nt<At;nt++){const ut=q(W[nt],ht[nt],Ot);lt(ut.x,ut.y,u+R)}for(let nt=0,At=L.length;nt<At;nt++){const ut=L[nt];Ct=gt[nt];for(let Gt=0,Tt=ut.length;Gt<Tt;Gt++){const C=q(ut[Gt],Ct[Gt],Ot);v?lt(C.x,C.y+S[h-1].y,S[h-1].x+R):lt(C.x,C.y,u+R)}}}V(),Z();function V(){const Q=s.length/3;if(f){let ot=0,R=X*ot;for(let Ot=0;Ot<tt;Ot++){const nt=B[Ot];Ft(nt[2]+R,nt[1]+R,nt[0]+R)}ot=h+g*2,R=X*ot;for(let Ot=0;Ot<tt;Ot++){const nt=B[Ot];Ft(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let ot=0;ot<tt;ot++){const R=B[ot];Ft(R[2],R[1],R[0])}for(let ot=0;ot<tt;ot++){const R=B[ot];Ft(R[0]+X*h,R[1]+X*h,R[2]+X*h)}}n.addGroup(Q,s.length/3-Q,0)}function Z(){const Q=s.length/3;let ot=0;bt(W,ot),ot+=W.length;for(let R=0,Ot=L.length;R<Ot;R++){const nt=L[R];bt(nt,ot),ot+=nt.length}n.addGroup(Q,s.length/3-Q,1)}function bt(Q,ot){let R=Q.length;for(;--R>=0;){const Ot=R;let nt=R-1;nt<0&&(nt=Q.length-1);for(let At=0,ut=h+g*2;At<ut;At++){const Gt=X*At,Tt=X*(At+1),C=ot+Ot+Gt,y=ot+nt+Gt,k=ot+nt+Tt,j=ot+Ot+Tt;Wt(C,y,k,j)}}}function lt(Q,ot,R){c.push(Q),c.push(ot),c.push(R)}function Ft(Q,ot,R){zt(Q),zt(ot),zt(R);const Ot=s.length/3,nt=b.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);se(nt[0]),se(nt[1]),se(nt[2])}function Wt(Q,ot,R,Ot){zt(Q),zt(ot),zt(Ot),zt(ot),zt(R),zt(Ot);const nt=s.length/3,At=b.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);se(At[0]),se(At[1]),se(At[3]),se(At[1]),se(At[2]),se(At[3])}function zt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function se(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new Jl(n,t.options)}}const jx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,c),new st(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new st(a,1-c),new st(l,1-u),new st(f,1-m),new st(_,1-p)]:[new st(o,1-c),new st(h,1-u),new st(d,1-m),new st(g,1-p)]}};function Yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zl extends Yl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zl(t.radius,t.detail)}}class Kl extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new P,m=new st;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const b=p+g,S=b,v=b+n+1,D=b+n+2,E=b+1;o.push(S,v,E),o.push(v,D,E)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mo extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+v,1-S),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const S=h[p][b+1],v=h[p][b],D=h[p+1][b],E=h[p+1][b+1];(p!==0||a>0)&&d.push(S,v,E),(p!==n-1||c<Math.PI)&&d.push(v,D,E)}this.setIndex(d),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eo extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const _=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,b=(s+1)*d+m;a.push(_,g,b),a.push(g,p,b)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hn extends Li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class An extends Li{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class go extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ed extends go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ic=new ce,Uu=new P,Nu=new P;class Ql{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jx extends Ql{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Za*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zx extends go{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ou=new ce,_r=new P,sc=new P;class Kx extends Ql{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),sc.copy(n.position),sc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class Qx extends go{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ty extends Ql{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ty}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);class ey extends uo{constructor(){super();const t=new Di;t.deleteAttribute("uv");const e=new Hn({side:je}),n=new Hn,s=new Qx(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Qt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Qt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new Qt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Qt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Qt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Qt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Qt(t,Ds(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Qt(t,Ds(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new Qt(t,Ds(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new Qt(t,Ds(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new Qt(t,Ds(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new Qt(t,Ds(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ds(i){const t=new Bn;return t.color.setScalar(i),t}function ny(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Le;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=ku(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const m=ku(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function ku(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Je(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const _=h.getComponent(f,m);o.setComponent(f+u,m,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const U=(i,t,e)=>new P(i,t,e),iy=new P(0,1,0);function Ki(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const re=(i,t,e)=>i<t?t:i>e?e:i,Nn=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function yt(i,t,e,n=e,s=6){const r=new P().subVectors(t,i),a=Math.max(1e-4,r.length()),o=new hi(n,e,a,s,1);return o.applyQuaternion(new Mn().setFromUnitVectors(iy,r.normalize())),o.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),o}function ee(i,t,e,n,s,r,a=0,o=0,c=0){const l=new Di(i,t,e);return a&&l.rotateX(a),o&&l.rotateY(o),c&&l.rotateZ(c),l.translate(n,s,r),l}function Tr(i,t,e,n,s=1,r=1,a=1,o=10){const c=new mo(i,o,Math.max(5,Math.round(o*.65)));return c.scale(s,r,a),c.translate(t,e,n),c}function tn(i,t,e,n,s,r=14){const a=new hi(i,i,t,r,1);return a.rotateZ(Math.PI/2),a.translate(e,n,s),a}function sy(i,t,e,n,s,r=14){const a=new hi(i,i,t,r,1);return a.rotateX(Math.PI/2),a.translate(e,n,s),a}function ry(i,t){for(let e=0;e<t;e++){const n=[];for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length];n.push([r[0]*.75+a[0]*.25,r[1]*.75+a[1]*.25]),n.push([r[0]*.25+a[0]*.75,r[1]*.25+a[1]*.75])}i=n}return i}function xt(i,t,e=2,n=.025,s=0){const r=e?ry(i,e):i,a=new Zf(r.map(([l,h])=>new st(l,h))),o=Math.max(.002,t-n*2),c=new Jl(a,{depth:o,bevelEnabled:n>0,bevelThickness:n,bevelSize:n*.8,bevelSegments:2,curveSegments:3});return c.rotateY(-Math.PI/2),c.translate(o/2+s,0,0),c}function ay(i,t,e,n,s,r,a=8){const o=[];for(let c=0;c<=a;c++){const l=s+(r-s)*c/a;o.push([i+Math.cos(l)*n,t+Math.sin(l)*n])}for(let c=a;c>=0;c--){const l=s+(r-s)*c/a;o.push([i+Math.cos(l)*e,t+Math.sin(l)*e])}return o}class Ie{constructor(){this.list=[]}add(t,e="#ffffff"){let n=t.index?t.toNonIndexed():t;for(const o of Object.keys(n.attributes))o!=="position"&&o!=="normal"&&n.deleteAttribute(o);n.clearGroups();const s=new rt(e),r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=s.r,a[o*3+1]=s.g,a[o*3+2]=s.b;return n.setAttribute("color",new Je(a,3)),this.list.push(n),this}get empty(){return this.list.length===0}build(){if(!this.list.length)return null;const t=ny(this.list,!1);return t.computeBoundingSphere(),t}}const Fu=new P,Bu=new P,Is=new P;class yi{constructor(t=!1){this.p=[],this.n=[],this.c=[],this.uv=t?[]:null}_v(t,e,n,s){this.p.push(t[0],t[1],t[2]),this.n.push(e.x,e.y,e.z),this.c.push(n.r,n.g,n.b),this.uv&&this.uv.push(s?s[0]:0,s?s[1]:0)}quad(t,e,n,s,r,a,o){Fu.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Bu.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),Is.crossVectors(Fu,Bu).normalize();let c=[t,e,n,s],l=Array.isArray(a)?a:[a,a,a,a],h=o||[null,null,null,null];Is.x*r[0]+Is.y*r[1]+Is.z*r[2]<0&&(c=[t,s,n,e],l=[l[0],l[3],l[2],l[1]],h=[h[0],h[3],h[2],h[1]],Is.negate());const u=Is.clone();this._v(c[0],u,l[0],h[0]),this._v(c[1],u,l[1],h[1]),this._v(c[2],u,l[2],h[2]),this._v(c[0],u,l[0],h[0]),this._v(c[2],u,l[2],h[2]),this._v(c[3],u,l[3],h[3])}rect(t,e,n,s,r,a,o){this.quad([t,r,e],[n,r,e],[n,r,s],[t,r,s],[0,1,0],a,o)}box(t,e,n,s,r,a,o,c=.78,l=!0){const h=o.clone().multiplyScalar(c),u=[h,h,o,o];this.quad([t,e,n],[s,e,n],[s,r,n],[t,r,n],[0,0,-1],u),this.quad([s,e,a],[t,e,a],[t,r,a],[s,r,a],[0,0,1],u),this.quad([t,e,a],[t,e,n],[t,r,n],[t,r,a],[-1,0,0],u),this.quad([s,e,n],[s,e,a],[s,r,a],[s,r,n],[1,0,0],u),l&&this.rect(t,n,s,a,r,o)}addGeo(t,e){let n=t.index?t.toNonIndexed():t;const s=n.attributes.position,r=n.attributes.normal,a=new rt(e);for(let o=0;o<s.count;o++)this.p.push(s.getX(o),s.getY(o),s.getZ(o)),this.n.push(r.getX(o),r.getY(o),r.getZ(o)),this.c.push(a.r,a.g,a.b),this.uv&&this.uv.push(0,0)}geometry(){const t=new Le;return t.setAttribute("position",new ne(this.p,3)),t.setAttribute("normal",new ne(this.n,3)),t.setAttribute("color",new ne(this.c,3)),this.uv&&t.setAttribute("uv",new ne(this.uv,2)),t.computeBoundingSphere(),t}}function Us(i,t,e,n=!0){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new fo(s);return r.colorSpace=Ve,n&&(r.wrapS=r.wrapT=Ya),r.anisotropy=4,r}const ve=80,Bt=8,dn=7,Te=dn*ve,ke=Te+Bt,zu=612,fe=.12,Gu={dia:{top:"#2f74d0",hor:"#cfe3f4",bot:"#8aa0b4",sun:"#fff4e0",sunEl:.95,sunAz:2.4,sunI:2.6,hemiS:"#d8ecff",hemiG:"#7a6a55",hemiI:1.15,fog:"#c4d9ec",night:0,deep:"#0d4f78",shallow:"#2aa7b8",exposure:1},tarde:{top:"#27467f",hor:"#ffb27a",bot:"#7a6f80",sun:"#ffb46a",sunEl:.22,sunAz:3.4,sunI:2.9,hemiS:"#ffe2c8",hemiG:"#5a4a60",hemiI:1.2,fog:"#f0a989",night:0,deep:"#183e66",shallow:"#3d8fa0",exposure:1.05},noite:{top:"#030812",hor:"#16233f",bot:"#0b1020",sun:"#9fb4ff",sunEl:.8,sunAz:1,sunI:.35,hemiS:"#3b4f80",hemiG:"#141020",hemiI:.55,fog:"#121b30",night:1,deep:"#04121f",shallow:"#0b2a3a",exposure:1.15}};class oy{constructor(t,e={}){this.scene=t,this.q=e.quality||"medio",this.rand=Ki(20261122),this.boxes=[],this.grid=new Map,this.ramps=[],this.t=0,this.group=new Ge,t.add(this.group),this.makeTextures(),this.makeMaterials(),this.buildSky(),this.buildLights();const n=new yi,s=new yi(!0),r=new yi(!0),a=new yi(!0);this.st=n,this.walls=s,this.roads=r,this.mosaic=a,this.trees=[],this.palms=[],this.lamps=[],this.buildGroundAndRoads(),this.buildBlocks(),this.buildBeach(),this.buildRamps(),this.buildMountains(),this.flush(),this.buildInstances(),this.buildTraffic(e.cars??16),this.buildMinimap(),this.setTime("tarde")}makeTextures(){const t=Ki(77);this.texWin=Us(256,256,(e,n,s)=>{e.fillStyle="#ffffff",e.fillRect(0,0,n,s);for(let r=0;r<4;r++)for(let a=0;a<4;a++){const o=a*64,c=r*64;e.fillStyle="#d9d9d9",e.fillRect(o,c+54,64,10),e.fillStyle="#c8c8c8",e.fillRect(o+10,c+10,44,40);const l=40+t()*40;e.fillStyle=`rgb(${l*.6},${l*.8},${l+25})`,e.fillRect(o+13,c+13,38,34),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(o+13,c+13,38,8),e.fillStyle="#bdbdbd",e.fillRect(o+31,c+13,2,34)}}),this.texWinE=Us(256,256,(e,n,s)=>{e.fillStyle="#000",e.fillRect(0,0,n,s);for(let r=0;r<4;r++)for(let a=0;a<4;a++){if(t()<.45)continue;const o=t();e.fillStyle=o<.7?`rgb(255,${190+t()*40},${110+t()*40})`:`rgb(${170+t()*40},210,255)`,e.fillRect(a*64+13,r*64+13,38,34)}}),this.texRoad=Us(128,256,(e,n,s)=>{e.fillStyle="#3b3d42",e.fillRect(0,0,n,s);for(let r=0;r<2200;r++){const a=45+t()*30;e.fillStyle=`rgb(${a},${a},${a+4})`,e.fillRect(t()*n,t()*s,1.5,1.5)}e.fillStyle="#e9e9e9",e.fillRect(4,0,3,s),e.fillRect(n-7,0,3,s),e.fillStyle="#f2c230",e.fillRect(n/2-4,0,3,s),e.fillRect(n/2+1,0,3,s),e.fillStyle="#d8d8d8",e.fillRect(n*.25-1,0,2,s*.5),e.fillRect(n*.75-1,0,2,s*.5)}),this.texRoad.anisotropy=8,this.texMosaic=Us(128,128,(e,n,s)=>{e.fillStyle="#f2efe6",e.fillRect(0,0,n,s),e.strokeStyle="#151515",e.lineWidth=16,e.beginPath();for(let r=-32;r<s+64;r+=64){e.moveTo(0,r);for(let a=0;a<=n;a+=4)e.lineTo(a,r+Math.sin(a/n*Math.PI*2)*16)}e.stroke()}),this.texGlow=Us(64,64,(e,n,s)=>{const r=e.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,210,140,0.9)"),r.addColorStop(.5,"rgba(255,180,100,0.3)"),r.addColorStop(1,"rgba(255,160,80,0)"),e.fillStyle=r,e.fillRect(0,0,n,s)},!1),this.texBlob=Us(64,64,(e,n,s)=>{const r=e.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(0,0,0,0.6)"),r.addColorStop(.6,"rgba(0,0,0,0.3)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,n,s)},!1)}makeMaterials(){this.matStatic=new An({vertexColors:!0}),this.matWalls=new An({vertexColors:!0,map:this.texWin,emissiveMap:this.texWinE,emissive:new rt("#ffffff"),emissiveIntensity:0}),this.matRoad=new An({map:this.texRoad}),this.matMosaic=new An({map:this.texMosaic}),this.matMount=new An({vertexColors:!0,fog:!1}),this.matBlob=new Bn({map:this.texBlob,transparent:!0,depthWrite:!1})}buildSky(){this.skyU={top:{value:new rt},hor:{value:new rt},bot:{value:new rt},sunDir:{value:new P(0,1,0)},sunCol:{value:new rt},night:{value:0}};const t=new qn({uniforms:this.skyU,side:je,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top,hor,bot,sunCol,sunDir; uniform float night; varying vec3 vD;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3,289.1)))*43758.5453); }
        void main(){ vec3 d = normalize(vD); float h = d.y;
          vec3 c = h > 0. ? mix(hor, top, pow(clamp(h,0.,1.), 0.55)) : mix(hor, bot, pow(clamp(-h,0.,1.), 0.35));
          float s = max(dot(d, sunDir), 0.);
          c += sunCol * (pow(s, 900.) * 6. + pow(s, 12.) * 0.35 + pow(s,3.)*0.12) * (1. - night*0.6);
          if (night > 0.5 && h > 0.05) { vec2 g = floor(d.xz / (d.y+0.3) * 220.); float st = step(0.9965, h21(g)); c += vec3(st) * 0.9 * h; }
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new Qt(new mo(1,24,12),t),this.sky.scale.setScalar(1800),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}buildLights(){this.hemi=new ed("#ffffff","#444444",1),this.sun=new Ba("#ffffff",2),this.sun.target=new Pe,this.scene.add(this.hemi,this.sun,this.sun.target),this.scene.fog=new ho("#ffffff",80,420)}setShadows(t,e=1024){if(this.sun.castShadow=t,t){this.sun.shadow.mapSize.set(e,e);const n=this.sun.shadow.camera;n.left=-14,n.right=14,n.top=14,n.bottom=-14,n.near=1,n.far=120,n.updateProjectionMatrix(),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.03}for(const n of[this.meshStatic,this.meshRoads,this.meshMosaic])n&&(n.receiveShadow=t)}setFog(t,e){this.scene.fog.near=t,this.scene.fog.far=e}setTime(t){const e=Gu[t]||Gu.tarde;this.timeName=t,this.T=e,this.skyU.top.value.set(e.top),this.skyU.hor.value.set(e.hor),this.skyU.bot.value.set(e.bot),this.skyU.sunCol.value.set(e.sun),this.skyU.night.value=e.night;const n=e.sunEl,s=e.sunAz,r=new P(Math.cos(n)*Math.cos(s),Math.sin(n),Math.cos(n)*Math.sin(s)).normalize();this.sunDir=r,this.skyU.sunDir.value.copy(r),this.sun.color.set(e.sun),this.sun.intensity=e.sunI,this.hemi.color.set(e.hemiS),this.hemi.groundColor.set(e.hemiG),this.hemi.intensity=e.hemiI,this.scene.fog.color.set(e.fog),this.matWalls.emissiveIntensity=e.night?1:0,this.matMount.color.set(e.night?"#3a4568":t==="tarde"?"#e8c8c0":"#ffffff"),this.waterU&&(this.waterU.deep.value.set(e.deep),this.waterU.shallow.value.set(e.shallow),this.waterU.sunCol.value.set(e.sun),this.waterU.sunDir.value.copy(r),this.waterU.fogCol.value.set(e.fog)),this.lampHeads&&this.lampHeads.material.color.set(e.night?"#ffd89a":"#9a9a9a"),this.glows&&(this.glows.visible=!!e.night),this.carLights&&this.carLights.material.color.set(e.night?"#fff3c4":"#d8d8d8")}addBox(t,e,n,s,r="wall"){const a={x0:t,z0:e,x1:n,z1:s,kind:r};this.boxes.push(a);const o=Math.floor(t/16),c=Math.floor(n/16),l=Math.floor(e/16),h=Math.floor(s/16);for(let u=o;u<=c;u++)for(let f=l;f<=h;f++){const d=u*1e3+f;this.grid.has(d)||this.grid.set(d,[]),this.grid.get(d).push(a)}}collide(t,e,n){let s=null;const r=Math.floor(t/16),a=Math.floor(e/16);for(let u=r-1;u<=r+1;u++)for(let f=a-1;f<=a+1;f++){const d=this.grid.get(u*1e3+f);if(d)for(const m of d){const _=re(t,m.x0,m.x1),g=re(e,m.z0,m.z1);let p=t-_,b=e-g;const S=p*p+b*b;if(S>=n*n)continue;let v=Math.sqrt(S),D,E,A;if(v<1e-4){const w=t-m.x0,M=m.x1-t,x=e-m.z0,L=m.z1-e,F=Math.min(w,M,x,L);F===w?(D=-1,E=0):F===M?(D=1,E=0):F===x?(D=0,E=-1):(D=0,E=1),A=F+n}else D=p/v,E=b/v,A=n-v;(!s||A>s.depth)&&(s={nx:D,nz:E,depth:A,kind:m.kind})}}const o=-70,c=660,l=-70,h=Te+70;return t<o+n&&(s={nx:1,nz:0,depth:o+n-t,kind:"wall"}),t>c-n&&(s={nx:-1,nz:0,depth:t-(c-n),kind:"wall"}),e<l+n&&(s={nx:0,nz:1,depth:l+n-e,kind:"wall"}),e>h-n&&(s={nx:0,nz:-1,depth:e-(h-n),kind:"wall"}),s}baseHeight(t,e){if(t>596)return-(t-596)*.02;if(t>ke&&t<ke+12&&e>-Bt&&e<Te+Bt)return fe;if(t<=0||t>=Te||e<=0||e>=Te)return 0;const n=Math.floor(t/ve),s=Math.floor(e/ve),r=t-n*ve,a=e-s*ve;return r>Bt&&r<ve-Bt&&a>Bt&&a<ve-Bt?n===3&&s===3?0:fe:0}groundHeight(t,e){let n=this.baseHeight(t,e);for(const s of this.ramps){const r=t-s.x,a=e-s.z;if(r*r+a*a>s.rad2)continue;const o=r*s.s+a*s.c,c=r*s.c-a*s.s;o<0||o>s.len||Math.abs(c)>s.w/2||(n=Math.max(n,s.base+s.prof(o)))}return n}isWater(t){return t>zu}buildGroundAndRoads(){const t=this.st,e=this.roads,n=new rt("#5d7a3a"),s=new rt("#4f6b32");t.quad([-1400,-.06,-1400],[ke,-.06,-1400],[ke,-.06,1960],[-1400,-.06,1960],[0,1,0],[s,n,n,s]);const r=8;for(let o=0;o<=dn;o++){const c=o*ve;for(let l=0;l<dn;l++){const h=l*ve+Bt,u=(l+1)*ve-Bt;e.quad([c-Bt,0,h],[c+Bt,0,h],[c+Bt,0,u],[c-Bt,0,u],[0,1,0],new rt(1,1,1),[[0,h/r],[1,h/r],[1,u/r],[0,u/r]]),e.quad([h,0,c-Bt],[h,0,c+Bt],[u,0,c+Bt],[u,0,c-Bt],[0,1,0],new rt(1,1,1),[[0,h/r],[1,h/r],[1,u/r],[0,u/r]])}for(const[l,h]of[[-70,-Bt],[Te+Bt,Te+70]])e.quad([c-Bt,0,l],[c+Bt,0,l],[c+Bt,0,h],[c-Bt,0,h],[0,1,0],new rt(1,1,1),[[0,l/r],[1,l/r],[1,h/r],[0,h/r]]),l<0&&e.quad([l,0,c-Bt],[l,0,c+Bt],[h,0,c+Bt],[h,0,c-Bt],[0,1,0],new rt(1,1,1),[[0,l/r],[1,l/r],[1,h/r],[0,h/r]]);for(let l=0;l<=dn;l++){const h=l*ve,u=[.3,.6];e.quad([c-Bt,0,h-Bt],[c+Bt,0,h-Bt],[c+Bt,0,h+Bt],[c-Bt,0,h+Bt],[0,1,0],new rt(1,1,1),[u,u,u,u]);const f=new rt("#e8e8e8");for(let d=-3;d<=3;d++){const m=d*2;for(const _ of[-1,1])t.rect(c+m-.5,h+_*(Bt+.4),c+m+.5,h+_*(Bt+2.6),.015,f),t.rect(h+_*(Bt+.4),c+m-.5,h+_*(Bt+2.6),c+m+.5,.015,f)}}}const a=new rt("#ffd400");for(let o=40;o<Te;o+=50)t.rect(Te-Bt+.5,o-.4,Te+Bt-.5,o+.4,.016,a)}buildBlocks(){const t=this.rand,e=["#e8e2d4","#d9cbb0","#c9b79c","#f0ece2","#b8c4cc","#d8a48f","#e6d690","#a8c8b8","#cfa7a0","#9fb0c8","#ededed","#c26a4a","#8fb3d9","#e0b0c0"],n={"3,3":"plaza","1,5":"park","5,1":"park","4,5":"soccer","2,2":"park"},s=new rt("#b3b0a6"),r=new rt("#8d8a82");for(let a=0;a<dn;a++)for(let o=0;o<dn;o++){const c=a*ve+Bt,l=(a+1)*ve-Bt,h=o*ve+Bt,u=(o+1)*ve-Bt,f=n[`${a},${o}`]||(a===dn-1?"beachfront":"city");if(f==="plaza"){this.buildPlaza(c,h,l,u);continue}this.st.box(c,-.05,h,l,fe,u,s,.75,!0),this.st.quad([c,fe,h],[l,fe,h],[l,fe-.001,h+.25],[c,fe-.001,h+.25],[0,1,0],r);for(let v=10;v<64;v+=26)this.lamps.push([c+v,h+.7,Math.PI]),this.lamps.push([c+.7,h+v,-Math.PI/2]),a===dn-1&&this.lamps.push([l-.7,h+v,Math.PI/2]),o===dn-1&&this.lamps.push([c+v,u-.7,0]);if(f==="park"){this.st.rect(c+3.5,h+3.5,l-3.5,u-3.5,fe+.01,new rt("#5f8f3a")),this.st.rect(c+3.5,(h+u)/2-1.5,l-3.5,(h+u)/2+1.5,fe+.02,new rt("#c9b48a"));for(let v=0;v<16;v++){const D=c+6+t()*52,E=h+6+t()*52;Math.abs(E-(h+u)/2)<3||(this.trees.push([D,fe,E,.8+t()*.6]),this.addBox(D-.35,E-.35,D+.35,E+.35,"tree"))}continue}if(f==="soccer"){const v=new rt("#3f8f3a"),D=new rt("#f2f2f2");this.st.rect(c+3,h+3,l-3,u-3,fe+.01,v);const E=(c+l)/2,A=(h+u)/2;this.st.rect(c+6,A-.15,l-6,A+.15,fe+.02,D);for(const w of[h+6,u-6])this.st.rect(c+6,w-.15,l-6,w+.15,fe+.02,D);for(const w of[c+6,l-6])this.st.rect(w-.15,h+6,w+.15,u-6,fe+.02,D);for(let w=0;w<24;w++){const M=w/24*Math.PI*2;this.st.rect(E+Math.cos(M)*7-.15,A+Math.sin(M)*7-.15,E+Math.cos(M)*7+.15,A+Math.sin(M)*7+.15,fe+.02,D)}for(const w of[h+6,u-6]){for(const M of[E-3.6,E+3.6])this.st.box(M-.06,fe,w-.06,M+.06,fe+2.4,w+.06,D,.9);this.st.box(E-3.6,fe+2.34,w-.06,E+3.6,fe+2.46,w+.06,D,.9)}continue}const d=2+(t()<.5?1:0),m=2+(t()<.5?1:0),_=c+3.5,g=h+3.5,p=l-c-7,b=u-h-7,S=Math.hypot(a-3,o-3);for(let v=0;v<d;v++)for(let D=0;D<m;D++){if(t()<.08)continue;const E=_+p/d*v+.8,A=_+p/d*(v+1)-.8,w=g+b/m*D+.8,M=g+b/m*(D+1)-.8;let x;f==="beachfront"?x=24+t()*34:x=Math.max(7,(1-S/5)*48*(.4+t()*.8)+6+t()*8),x=Math.round(x/3.5)*3.5,this.building(E,w,A,M,x,new rt(e[Math.floor(t()*e.length)]),t)}if(t()<.6)for(let v=6;v<64;v+=16)this.trees.push([c+v,fe,h+2,.7+t()*.3]),this.addBox(c+v-.3,h+1.7,c+v+.3,h+2.3,"tree")}}building(t,e,n,s,r,a,o){const c=this.walls,l=fe,h=a.clone().multiplyScalar(.62),u=[h,h,a,a],f=b=>b/16,d=b=>b/14,m=n-t,_=s-e;c.quad([t,l,e],[n,l,e],[n,l+r,e],[t,l+r,e],[0,0,-1],u,[[0,0],[f(m),0],[f(m),d(r)],[0,d(r)]]),c.quad([n,l,s],[t,l,s],[t,l+r,s],[n,l+r,s],[0,0,1],u,[[0,0],[f(m),0],[f(m),d(r)],[0,d(r)]]),c.quad([t,l,s],[t,l,e],[t,l+r,e],[t,l+r,s],[-1,0,0],u,[[0,0],[f(_),0],[f(_),d(r)],[0,d(r)]]),c.quad([n,l,e],[n,l,s],[n,l+r,s],[n,l+r,e],[1,0,0],u,[[0,0],[f(_),0],[f(_),d(r)],[0,d(r)]]);const g=a.clone().multiplyScalar(.55).lerp(new rt("#77736c"),.6);this.st.rect(t,e,n,s,l+r,g);const p=a.clone().multiplyScalar(.85);if(this.st.box(t,l+r,e,n,l+r+.6,e+.3,p,1),this.st.box(t,l+r,s-.3,n,l+r+.6,s,p,1),o()<.55){const b=t+2+o()*(m-5),S=e+2+o()*(_-5);this.st.box(b,l+r,S,b+2.2,l+r+1.6,S+2.2,new rt(o()<.5?"#2d6cdf":"#d8d8d8"),.8)}if(o()<.5){const b=new rt(["#d6302f","#2f8f4e","#f0b429","#2563eb"][Math.floor(o()*4)]);this.st.quad([t+1,l+3.2,e],[n-1,l+3.2,e],[n-1,l+2.6,e-1.4],[t+1,l+2.6,e-1.4],[0,1,-.3],b)}this.addBox(t,e,n,s)}buildPlaza(t,e,n,s){const r=this.st;r.rect(t,e,n,s,.005,new rt("#a3a29c"));const a=new rt("#8a8983");for(let c=t;c<=n;c+=8)r.rect(c-.06,e,c+.06,s,.008,a);for(let c=e;c<=s;c+=8)r.rect(t,c-.06,n,c+.06,.008,a);const o=["#ff4fa3","#00c2ff","#ffd400","#7c3aed","#22c55e"];for(let c=0;c<7;c++){const l=t+6+this.rand()*52,h=e+6+this.rand()*52;r.rect(l,h,l+3+this.rand()*4,h+2+this.rand()*3,.01,new rt(o[c%o.length]))}for(const[c,l]of[[t+1,e+1],[n-1,e+1],[t+1,s-1],[n-1,s-1]])this.lamps.push([c,l,0])}buildBeach(){const t=this.st,e=new rt("#e4cf9b"),n=new rt("#c7ad78"),s=this.mosaic,r=-Bt,a=Te+Bt,o=ke,c=ke+12;s.quad([o,fe,r],[c,fe,r],[c,fe,a],[o,fe,a],[0,1,0],new rt(1,1,1),[[0,r/6],[2,r/6],[2,a/6],[0,a/6]]),t.box(o,-.05,r,c,fe-.002,a,new rt("#9b978e"),.8,!1);const l=-400,h=Te+400;t.quad([c,0,l],[596,0,l],[596,0,h],[c,0,h],[0,1,0],e),t.quad([596,0,l],[680,-1.68,l],[680,-1.68,h],[596,0,h],[0,1,0],[e,n,n,e]),t.quad([ke-.01,-.06,l],[c,0,l],[c,0,r],[ke-.01,-.06,r],[0,1,0],e),t.quad([ke-.01,-.06,a],[c,0,a],[c,0,h],[ke-.01,-.06,h],[0,1,0],e);for(let m=-60;m<Te+60;m+=17)this.palms.push([ke+14+m%3,0,m,.85+m*7%5/12]);for(let m=30;m<Te;m+=120)t.box(ke+16,0,m,ke+20,2.6,m+4,new rt("#f7f3e8"),.85),t.box(ke+15.4,2.6,m-.6,ke+20.6,2.9,m+4.6,new rt("#2f9e44"),.9),this.addBox(ke+16,m,ke+20,m+4);const u=["#ff5a5f","#ffd400","#00b4d8","#ff8c00"];for(let m=0;m<40;m++){const _=584+this.rand()*10,g=-50+this.rand()*(Te+100),p=new rt(u[m%4]),b=new to(1.4,.6,8);b.translate(_,2.1,g),t.addGeo(b,p),t.addGeo(yt(U(_,0,g),U(_,2,g),.04),"#eeeeee")}this.waterU={time:{value:0},deep:{value:new rt},shallow:{value:new rt},sunCol:{value:new rt},sunDir:{value:new P},fogCol:{value:new rt},fogFar:{value:700}};const f=new qn({uniforms:this.waterU,transparent:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float time, fogFar; uniform vec3 deep, shallow, sunCol, sunDir, fogCol; varying vec3 vW;
        void main(){
          float d = clamp((vW.x - 606.0) / 140.0, 0., 1.);
          vec3 col = mix(shallow, deep, sqrt(d));
          float w1 = sin(vW.x*0.21 + time*1.3) * sin(vW.z*0.13 - time*0.8);
          float w2 = sin((vW.x*0.7 + vW.z*0.5) + time*2.3) * 0.5;
          vec3 N = normalize(vec3((w1 + w2) * 0.08, 1., cos(vW.z*0.17 + time) * 0.06));
          vec3 V = normalize(cameraPosition - vW);
          float spec = pow(max(dot(reflect(-sunDir, N), V), 0.), 60.);
          float fres = pow(1. - max(V.y, 0.), 4.);
          col = mix(col, fogCol, fres * 0.5) + sunCol * spec * 1.3;
          float shore = 609.5 + sin(vW.z * 0.07 + time * 0.9) * 1.2;
          float foam = smoothstep(2.6, 0.0, abs(vW.x - shore)) * (0.6 + 0.4 * sin(vW.z * 0.9 + time * 3.));
          col = mix(col, vec3(0.95), foam * 0.7);
          float f = smoothstep(80., fogFar, length(cameraPosition - vW));
          col = mix(col, fogCol, f);
          gl_FragColor = vec4(col, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),d=new Pi(2200,3e3,1,1);d.rotateX(-Math.PI/2),d.translate(1705,-.32,Te/2),this.water=new Qt(d,f),this.group.add(this.water)}addRamp(t,e,n,s,r,a,o,c){const l=this.baseHeight(t,e);let h,u;if(o==="kicker"){const p=s-1.4;h=b=>b<p?a*b/p:b<p+.4?a:a*Math.max(0,(s-b)/1),u=[[0,0],[p,a],[p+.4,a],[s,0]]}else{const p=s*.32,b=s*.62;h=S=>S<p?a*S/p:S<b?a:a*(s-S)/(s-b),u=[[0,0],[p,a],[b,a],[s,0]]}const f=Math.sin(n),d=Math.cos(n);this.ramps.push({x:t,z:e,s:f,c:d,len:s,w:r,h:a,base:l,prof:h,rad2:(s+r)*(s+r)});const m=xt(u,r,0,0);m.translate(0,.004,0),m.rotateY(n),m.translate(t,l,e),this.st.addGeo(m,c);const _=xt([[0,.01],[u[1][0],u[1][1]+.01],[u[1][0],u[1][1]+.03],[0,.03]],.25,0,0,r/2-.15),g=_.clone();g.translate(-(r-.3),0,0);for(const p of[_,g])p.rotateY(n),p.translate(t,l,e),this.st.addGeo(p,"#202020")}buildRamps(){const t="#e0b23c",e="#9aa3ad",n="#ff7a1a";this.addRamp(256,250,0,6,4,1,"kicker",t),this.addRamp(300,250,0,8,5,1.8,"kicker",n),this.addRamp(262,286,Math.PI/2,18,6,1.5,"table",e),this.addRamp(290,310,Math.PI,7,4,1.4,"kicker",t),this.addRamp(250,300,Math.PI/2,6,4,1.2,"kicker",n),this.addRamp(308,270,-Math.PI/2,9,5,1.6,"table",e),this.addRamp(588,90,0,14,8,3.4,"kicker",n),this.addRamp(588,250,0,10,6,2.2,"kicker",t),this.addRamp(588,380,0,26,8,2.8,"table",e),this.addRamp(588,540,Math.PI,12,7,3,"kicker",n)}mtnH(t,e){const n=.55+.25*Math.sin(t*3.1+1.3)+.15*Math.sin(t*7.3+.4)+.08*Math.sin(t*17),s=Math.cos(t)>.35?.45:1,r=200*n*s,a=[[560,-6],[660,.3],[760,.85],[880,1],[1e3,.75],[1200,.35]];for(let o=0;o<a.length-1;o++){const[c,l]=a[o],[h,u]=a[o+1];if(e<=h){const f=re((e-c)/(h-c),0,1);return o===0?-6+f*(.3*r+6):r*(l+(u-l)*f)}}return r*.35}buildMountains(){const t=new yi,e=Te/2,n=Te/2,s=120,r=[560,610,660,710,760,820,880,940,1e3,1100,1200],a=(h,u)=>{const f=new rt("#3d6b35").lerp(new rt("#2a4d2a"),re(Math.sin(u*13)*.5+.5,0,1)*.6);return h>120&&f.lerp(new rt("#7d7a72"),re((h-120)/70,0,1)),f},o=(h,u)=>{const f=this.mtnH(h,u);return[[e+Math.cos(h)*u,f,n+Math.sin(h)*u],a(f,h)]};for(let h=0;h<s;h++){const u=h/s*Math.PI*2,f=(h+1)/s*Math.PI*2;for(let d=0;d<r.length-1;d++){const m=o(u,r[d]),_=o(f,r[d]),g=o(f,r[d+1]),p=o(u,r[d+1]);t.quad(m[0],_[0],g[0],p[0],[e-(m[0][0]+g[0][0])/2,400,n-(m[0][2]+g[0][2])/2],[m[1],_[1],g[1],p[1]])}}const c=Ki(4242),l=["#d9534f","#f0ad4e","#5bc0de","#f7f7f7","#c49a6c","#e57373","#ffd54f","#81c784","#b0855f","#9e9e9e"];for(let h=0;h<1100;h++){const u=Math.PI*(.62+c()*.62),f=650+c()*160,d=this.mtnH(u,f);if(d<2||d>150)continue;const m=e+Math.cos(u)*f,_=n+Math.sin(u)*f,g=4+c()*4,p=3+c()*6;t.box(m-g/2,d-3,_-g/2,m+g/2,d+p,_+g/2,new rt(l[Math.floor(c()*l.length)]),.7)}this.mount=new Qt(t.geometry(),this.matMount),this.group.add(this.mount)}flush(){this.meshStatic=new Qt(this.st.geometry(),this.matStatic),this.meshWalls=new Qt(this.walls.geometry(),this.matWalls),this.meshRoads=new Qt(this.roads.geometry(),this.matRoad),this.meshMosaic=new Qt(this.mosaic.geometry(),this.matMosaic),this.group.add(this.meshStatic,this.meshWalls,this.meshRoads,this.meshMosaic);for(const t of[this.meshStatic,this.meshWalls,this.meshRoads,this.meshMosaic,this.mount])t.matrixAutoUpdate=!1,t.updateMatrix()}buildInstances(){const t=new ce,e=new Mn,n=new P,s=new P,r=new rt,a=Ki(99),o=new hi(.18,.28,3,5);o.translate(0,1.5,0);const c=new Zl(2,0);c.translate(0,4.1,0);const l=new In(o,new An({color:"#6b4a2f"}),this.trees.length),h=new In(c,new An({color:"#ffffff",flatShading:!0}),this.trees.length);this.trees.forEach(([E,A,w,M],x)=>{e.setFromAxisAngle(U(0,1,0),a()*6.28),n.set(M,M*(.9+a()*.3),M),s.set(E,A,w),t.compose(s,e,n),l.setMatrixAt(x,t),h.setMatrixAt(x,t),r.set("#3f7a2e").lerp(new rt("#6a9a2e"),a()),h.setColorAt(x,r)});const u=new hi(.14,.24,7,6);u.translate(0,3.5,0),u.applyMatrix4(new ce().makeShear(0,0,.12,0,0,0));const f=new Ie;for(let E=0;E<7;E++){const A=E/7*Math.PI*2,w=new to(.45,3.4,4);w.scale(1,1,.25),w.rotateZ(-Math.PI/2+.45),w.translate(1.5,6.6,0),w.rotateY(A),f.add(w,"#ffffff")}const d=f.build();d.translate(.84,.3,0);const m=new In(u,new An({color:"#8a6a45"}),this.palms.length),_=new In(d,new An({vertexColors:!0,color:"#3f8a2a",side:kn}),this.palms.length);this.palms.forEach(([E,A,w,M],x)=>{e.setFromAxisAngle(U(0,1,0),a()*6.28),n.setScalar(M),s.set(E,A,w),t.compose(s,e,n),m.setMatrixAt(x,t),_.setMatrixAt(x,t)});const g=new Ie;g.add(new hi(.07,.1,7,6).translate(0,3.5+fe,0),"#5a5f66"),g.add(yt(U(0,6.9+fe,0),U(0,7.1+fe,-2.2),.05),"#5a5f66");const p=new In(g.build(),new An({vertexColors:!0}),this.lamps.length),b=new Di(.4,.12,.7);b.translate(0,7.05+fe,-2.3);const S=new In(b,new Bn({color:"#9a9a9a"}),this.lamps.length),v=new Pi(9,9);v.rotateX(-Math.PI/2),v.translate(0,.03,-2.6);const D=new In(v,new Bn({map:this.texGlow,transparent:!0,depthWrite:!1,blending:ja,fog:!1}),this.lamps.length);this.lamps.forEach(([E,A,w],M)=>{e.setFromAxisAngle(U(0,1,0),w),n.setScalar(1),s.set(E,0,A),t.compose(s,e,n),p.setMatrixAt(M,t),S.setMatrixAt(M,t),D.setMatrixAt(M,t)}),this.lampHeads=S,this.glows=D,D.renderOrder=2;for(const E of[l,h,m,_,p,S,D])E.computeBoundingSphere(),this.group.add(E);this.palmT=m;for(const[E,,A]of this.palms)this.addBox(E-.3,A-.3,E+.3,A+.3,"tree")}buildTraffic(t){const e=new yi,n=new rt("#ffffff"),s=new rt("#2a3138"),r=new rt("#151515"),a=new rt("#9a9a9a");e.box(-.9,.3,-2.1,.9,.95,2.1,n,.7),e.box(-.78,.95,-1.15,.78,1.45,.75,s,.9),e.box(-.8,1.45,-1.05,.8,1.5,.65,n,1),e.box(-.92,.25,2.05,.92,.45,2.15,a,1),e.box(-.92,.25,-2.15,.92,.45,-2.05,a,1);for(const u of[-.85,.85])for(const f of[-1.35,1.35])e.box(u-.12,0,f-.33,u+.12,.62,f+.33,r,1);const o=new yi;for(const u of[-.62,.62])o.box(u-.18,.65,2.1,u+.18,.8,2.13,n,1);const c=new yi;for(const u of[-.62,.62])c.box(u-.18,.65,-2.13,u+.18,.8,-2.1,new rt("#ff2020"),1);this.cars=[];const l=Ki(555),h=["#e8e8e8","#1c1c1c","#9aa0a6","#b91c1c","#1e40af","#f5f5f5","#6b7280","#facc15","#0f766e"];this.carMesh=new In(e.geometry(),new An({vertexColors:!0}),t),this.carLights=new In(o.geometry(),new Bn({color:"#d8d8d8"}),t),this.carTail=new In(c.geometry(),new Bn({vertexColors:!0}),t);for(let u=0;u<t;u++){const f=u%2?"x":"z",d=1+Math.floor(l()*(dn-1)),m=l()<.5?1:-1,_={axis:f,road:d,dir:m,pos:l()*Te,speed:9+l()*6,cur:0,x:0,z:0,yaw:0};_.cur=_.speed,this.cars.push(_),this.carMesh.setColorAt(u,new rt(h[Math.floor(l()*h.length)]))}for(const u of[this.carMesh,this.carLights,this.carTail])u.frustumCulled=!1,this.group.add(u);this.updateTraffic(0,null)}updateTraffic(t,e){const n=new ce,s=new Mn,r=new P,a=new P(1,1,1),o=U(0,1,0);this.cars.forEach((c,l)=>{let h=c.speed;if(e){const f=c.axis==="x"?c.dir:0,d=c.axis==="z"?c.dir:0,m=e.x-c.x,_=e.z-c.z,g=m*f+_*d,p=Math.abs(m*d-_*f);g>1&&g<12&&p<2.2&&(h=0)}c.cur+=re(h-c.cur,-8*t,3*t),c.pos+=c.cur*c.dir*t,c.pos>Te+60&&(c.pos=-60),c.pos<-60&&(c.pos=Te+60);const u=3.6;c.axis==="z"?(c.x=c.road*ve-c.dir*u,c.z=c.pos,c.yaw=c.dir>0?0:Math.PI):(c.z=c.road*ve+c.dir*u,c.x=c.pos,c.yaw=c.dir>0?Math.PI/2:-Math.PI/2),s.setFromAxisAngle(o,c.yaw),r.set(c.x,0,c.z),n.compose(r,s,a),this.carMesh.setMatrixAt(l,n),this.carLights.setMatrixAt(l,n),this.carTail.setMatrixAt(l,n)}),this.carMesh.instanceMatrix.needsUpdate=!0,this.carLights.instanceMatrix.needsUpdate=!0,this.carTail.instanceMatrix.needsUpdate=!0}carHit(t,e,n){if(n>1.6)return null;for(const s of this.cars){const r=t-s.x,a=e-s.z;if(r*r+a*a>16)continue;const o=Math.sin(s.yaw),c=Math.cos(s.yaw),l=r*o+a*c,h=r*c-a*o;if(Math.abs(l)<2.5&&Math.abs(h)<1.25)return{car:s,nx:Math.abs(l)>2.1?o*Math.sign(l):c*Math.sign(h),nz:Math.abs(l)>2.1?c*Math.sign(l):-o*Math.sign(h)}}return null}buildMinimap(){this.mm={S:256,ext:720,ox:-80,oz:-80};const r=document.createElement("canvas");r.width=r.height=256;const a=r.getContext("2d"),o=256/720;a.fillStyle="#3e5a2c",a.fillRect(0,0,256,256),a.fillStyle="#e4cf9b",a.fillRect((ke- -80)*o,0,256,256),a.fillStyle="#2a8fb0",a.fillRect((zu- -80)*o,0,256,256),a.fillStyle="#55585e";for(let c=0;c<=dn;c++)a.fillRect((c*ve-Bt- -80)*o,10*o,2*Bt*o,(Te+140)*o),a.fillRect(10*o,(c*ve-Bt- -80)*o,(Te+140)*o,2*Bt*o);for(let c=0;c<dn;c++)for(let l=0;l<dn;l++){const h=c===3&&l===3?"#c9c7bf":c===1&&l===5||c===5&&l===1||c===2&&l===2||c===4&&l===5?"#5f8f3a":"#8b8577";a.fillStyle=h,a.fillRect((c*ve+Bt- -80)*o,(l*ve+Bt- -80)*o,(ve-2*Bt)*o,(ve-2*Bt)*o)}a.fillStyle="#ff7a1a";for(const c of this.ramps)a.fillRect((c.x- -80)*o-2,(c.z- -80)*o-2,4,4);this.mmCanvas=r}update(t,e,n){this.t+=t,this.waterU&&(this.waterU.time.value=this.t),this.updateTraffic(t,e),n&&this.sky.position.copy(n)}}const ln=[{id:"cb300f",name:"CB 300F Twister 2026",type:"naked",cc:"293cc",price:0,top:152,accel:6.4,lift:1,bp:.95,pop:2.3,brake:1,color:"#c8102e",desc:"Naked nova, forte e estável. Levanta fácil na primeira."},{id:"pop27",name:"Pop 110i 2027",type:"cub",cc:"110cc",price:0,top:92,accel:3.6,lift:1.12,bp:1,pop:2.6,brake:.8,color:"#1e63d6",desc:"Leve e brava. Precisa de embreagem pra subir, mas segura o grau fácil."},{id:"r15",name:"R15 ABS",type:"sport",cc:"155cc",price:0,top:142,accel:5.6,lift:.95,bp:.88,pop:2.2,brake:1.15,color:"#0b3ea8",desc:"Esportiva de giro alto. Rápida e precisa no ponto."},{id:"pcx25",name:"PCX 160 2025",type:"scooter",cc:"157cc",price:0,top:116,accel:4.6,lift:.9,bp:.86,pop:2.1,brake:.95,color:"#ececec",desc:"Scooter premium. Grau de scooter é arte: ponto baixo e suave."},{id:"evolt",name:"Scooter Elétrica E-Volt S",type:"escooter",cc:"4kW",price:0,top:80,accel:6,lift:1.05,bp:.88,pop:2.4,brake:.9,color:"#11b5a4",electric:!0,desc:"Torque instantâneo e silenciosa. Boost elétrico no lugar da embreagem."},{id:"titan",name:"CG 160 Titan",type:"street",cc:"162cc",price:6500,top:120,accel:4.8,lift:1.05,bp:.98,pop:2.4,brake:.9,color:"#202020",desc:"Clássica de rua. Robusta e honesta no grau."},{id:"fan",name:"CG 160 Fan",type:"street",cc:"162cc",price:5e3,top:118,accel:4.7,lift:1.05,bp:.98,pop:2.4,brake:.85,color:"#b3131b",desc:"A queridinha do Brasil."},{id:"biz",name:"Biz 125",type:"cub",cc:"125cc",price:4500,top:98,accel:3.9,lift:1.1,bp:1,pop:2.6,brake:.8,color:"#e3c21a",desc:"Pequena, mas empina bonito."},{id:"bros",name:"NXR 160 Bros",type:"trail",cc:"162cc",price:11e3,top:118,accel:5,lift:1.15,bp:1.02,pop:2.6,brake:.9,color:"#d42222",desc:"Trail alta. Grau alto e fácil de segurar."},{id:"nmax",name:"NMax 160",type:"scooter",cc:"155cc",price:15e3,top:118,accel:4.7,lift:.92,bp:.86,pop:2.1,brake:1,color:"#2c2f36",desc:"Scooter esportivo."},{id:"fz25",name:"Fazer FZ25",type:"naked",cc:"249cc",price:17e3,top:145,accel:6,lift:1,bp:.95,pop:2.3,brake:1,color:"#14309a",desc:"Naked 250 com muito torque."},{id:"lander",name:"Lander 250",type:"trail",cc:"249cc",price:2e4,top:135,accel:5.8,lift:1.15,bp:1.02,pop:2.6,brake:.95,color:"#1f4fbf",desc:"Trail 250, empina sozinha."},{id:"xre",name:"XRE 300 Sahara",type:"trail",cc:"294cc",price:28e3,top:145,accel:6.3,lift:1.12,bp:1,pop:2.5,brake:1,color:"#e6e6e6",desc:"Aventureira nova, potente e alta."},{id:"mt03",name:"MT-03",type:"naked",cc:"321cc",price:45e3,top:182,accel:7.8,lift:1,bp:.92,pop:2.2,brake:1.15,color:"#3a3d45",desc:"Bicilíndrica. A mais forte da quebrada."}],$r=i=>ln.find(t=>t.id===i)||ln[0],fl=["#c8102e","#1e63d6","#0b3ea8","#ececec","#11b5a4","#202020","#e3c21a","#ff6a00","#7b2cbf","#2e7d32","#ff4fa3","#8d99ae","#b08d57","#00c2ff"],dl=["#1a1a1a","#c0c0c0","#d4af37","#e11d48","#2563eb","#16a34a","#f97316","#ffffff"],pl=["#111111","#f5f5f5","#e11d48","#2563eb","#facc15","#16a34a","#a855f7","#f97316"],ml=["#1f2937","#111111","#b91c1c","#1d4ed8","#15803d","#f59e0b","#6b21a8","#e5e7eb"],rn={base:new Hn({vertexColors:!0,metalness:.35,roughness:.55}),light:new Bn({vertexColors:!0}),metal:new Hn({vertexColors:!0,metalness:.95,roughness:.2})};rn.light.toneMapped=!1;const rc=new Map;function Vu(i,t,e,n=!0){const s=`${i}-${t}-${e}-${n}`;if(rc.has(s))return rc.get(s);const r=new Ie,a=new Ie,o=new Ie,c=new eo(i-t*.5,t*.5,8,26);c.rotateY(Math.PI/2),c.scale(1.25,1,1),r.add(c,"#141414");const l=i-t+.004,h=new eo(l,.016,4,22);if(h.rotateY(Math.PI/2),a.add(h),a.add(tn(.055,.12,0,0,0,10)),e==="spoke")for(let f=0;f<18;f++){const d=f/18*Math.PI*2,m=f%2?1:-1;o.add(yt(U(m*.04,Math.cos(d)*.05,Math.sin(d)*.05),U(m*.01,Math.cos(d+.3)*l,Math.sin(d+.3)*l),.004,.004,3),"#d0d0d0")}else{const f=e==="y"?6:5;for(let d=0;d<f;d++){const m=d/f*Math.PI*2;if(e==="y")for(const _ of[-.13,.13])a.add(yt(U(0,Math.cos(m)*.05,Math.sin(m)*.05),U(0,Math.cos(m+_)*l,Math.sin(m+_)*l),.014,.01,4));else a.add(yt(U(0,Math.cos(m)*.05,Math.sin(m)*.05),U(0,Math.cos(m)*l,Math.sin(m)*l),.02,.013,4))}}if(n){const f=Math.min(.15,i*.48);o.add(tn(f,.006,.075,0,0,22),"#b9b9b9"),r.add(tn(f*.55,.008,.077,0,0,10),"#3a3a3a");for(let d=0;d<8;d++){const m=d/8*Math.PI*2;r.add(tn(.012,.01,.079,Math.cos(m)*f*.78,Math.sin(m)*f*.78,6),"#222")}}else r.add(tn(.1,.06,.05,0,0,12),"#2a2a2a");const u={tire:r.build(),rim:a.build(),metal:o.build()};return rc.set(s,u),u}function Gi(i){i.axleR=U(0,i.r,0),i.axleF=U(0,i.rf,i.L)}function Vi(i,t="#bfbfbf",e="#2a2a2a",n=.09,s=.028,r=!1){const a=new P().subVectors(i.head,i.axleF).normalize(),o=i.head.clone().addScaledVector(a,.07),c=i.axleF.clone().lerp(i.head,.45);for(const l of[-1,1])r?(i.sm.add(yt(U(l*n,i.axleF.y,i.axleF.z),U(l*n,c.y,c.z),s-.004),"#e6e6e6"),i.sm.add(yt(U(l*n,c.y,c.z),U(l*n,o.y,o.z),s+.01),t)):(i.sb.add(yt(U(l*n,i.axleF.y,i.axleF.z),U(l*n,c.y,c.z),s+.008),e),i.sm.add(yt(U(l*n,c.y,c.z),U(l*n,o.y,o.z),s),t)),l>0&&i.sb.add(ee(.04,.09,.07,l*(n-.02),i.axleF.y+.1,i.axleF.z-.1,.5),i.caliper||"#8a1c1c");i.sb.add(ee(n*2+.08,.04,.09,0,o.y,o.z),"#2a2a2a"),i.sb.add(ee(n*2+.06,.03,.08,0,i.head.y-.12,i.head.z+.05),"#2a2a2a"),i.forkTop=o}function Ns(i,t=.34,e=.07,n=.05,s="#1b1b1b"){const r=i.forkTop,a=r.y+e,o=r.z-n;i.sb.add(yt(U(0,r.y+.02,r.z),U(0,a,o),.016),s),i.sb.add(yt(U(-t,a,o-.03),U(t,a,o-.03),.013),s);for(const c of[-1,1])i.sb.add(yt(U(c*(t-.1),a,o-.03),U(c*t,a,o-.03),.02),"#0e0e0e");i.grip={y:a,z:o-.03,w:t}}function vr(i,t){const e=i.grip;for(const n of[-1,1])t.add(yt(U(n*(e.w-.12),e.y,e.z),U(n*(e.w-.06),e.y+.2,e.z-.05),.008),"#151515"),t.add(ee(.1,.06,.02,n*(e.w-.05),e.y+.23,e.z-.06),"#151515")}function Os(i,t,e,n=.13,s=.04,r=.075,a=.35,o=2.3){t.add(xt(ay(i.axleF.z,i.axleF.y,i.rf+s,i.rf+r,a,o,7),n,0,.01),e)}function Ra(i,t,e="#1d1d1d",n=!1){const s=n?[.1]:[-.11,.11];for(const r of s)i.base.add(yt(U(r,i.r,0),U(r,t.y,t.z),.028,.034,6),e);i.base.add(yt(U(-.12,t.y,t.z),U(.12,t.y,t.z),.03),e)}function Hu(i,t,e,n=.36,s=.3,r="#3a3a3a",a=-.35){i.base.add(ee(.28,s,n,0,e,t),r),i.base.add(ee(.22,.2,.2,0,e+s*.55,t+n*.3,a),"#4a4a4a");for(let o=0;o<3;o++)i.base.add(ee(.25,.012,.22,0,e+s*.45+o*.05,t+n*.3,a),"#9a9a9a");i.base.add(tn(.1,.05,.15,e-.02,t-.04,12),"#a8a8a8"),i.base.add(tn(.07,.04,-.15,e,t+.05,10),"#8a8a8a")}function Pa(i,t,e,n=.12){i.light.add(ee(n,.045,.03,0,e,t),"#ff1a1a");for(const s of[-1,1])i.light.add(ee(.05,.025,.03,s*(n/2+.06),e-.04,t+.02),"#ffa000")}function Hi(i,t,e){i.base.add(ee(.06,.2,.04,0,e+.12,t+.05,.6),"#111"),i.base.add(ee(.2,.13,.012,0,e,t,.25),"#e8e8e8")}const cy={naked(i){Object.assign(i,{L:1.36,r:.31,rf:.31,head:U(0,.93,1.08),wheel:"y"}),Gi(i),i.paint.add(xt([[.54,.84],[.64,.99],[.82,1.05],[1,1.04],[1.13,.96],[1.1,.83],[.92,.76],[.66,.76]],.36,3,.045)),i.base.add(xt([[.6,.78],[.9,.76],[.96,.84],[.62,.86]],.38,1,.01),"#141414"),i.paint.add(xt([[.88,.66],[1.02,.66],[1.27,.97],[1.17,1],[.98,.92]],.5,0,.02)),i.base.add(xt([[.86,.6],[1,.6],[1.2,.86],[1.04,.86]],.46,0,.01),"#121212"),i.base.add(xt([[.2,.9],[.3,.94],[.6,.96],[.64,.87],[.22,.84]],.28,2,.03),"#191919"),i.base.add(xt([[-.1,.96],[.02,.99],[.22,.99],[.24,.92],[-.08,.9]],.22,2,.02),"#191919"),i.paint.add(xt([[-.26,.98],[-.1,.95],[.32,.86],[.34,.78],[.1,.76],[-.2,.9]],.22,1,.025)),i.base.add(xt([[-.24,.9],[.1,.74],[.32,.76],[0,.84]],.18,0,.01),"#101010");for(const t of[-1,1])i.base.add(yt(U(t*.1,.94,.12),U(t*.09,.97,-.08),.014),"#1a1a1a");for(const t of[-1,1])i.base.add(yt(U(t*.08,.92,1.06),U(t*.13,.78,.6),.025),"#1d1d1d"),i.base.add(yt(U(t*.13,.78,.6),U(t*.12,.44,.52),.025),"#1d1d1d"),i.base.add(yt(U(t*.1,.8,.55),U(t*.08,.88,-.02),.018),"#1d1d1d");i.base.add(yt(U(0,.9,1.05),U(0,.45,.98),.03),"#1d1d1d"),i.base.add(ee(.28,.3,.38,0,.45,.76),"#1e1e1e"),i.base.add(ee(.22,.22,.2,0,.67,.93,-.35),"#232323");for(let t=0;t<4;t++)i.metal.add(ee(.25,.01,.22,0,.61+t*.045,.94,-.35),"#c8c8c8");i.metal.add(tn(.11,.03,.155,.44,.72,16),"#bdbdbd"),i.base.add(tn(.07,.04,-.15,.46,.82,12),"#2b2b2b"),i.base.add(ee(.2,.1,.05,0,.62,1.07,-.3),"#1a1a1a"),i.base.add(xt([[.6,.24],[.98,.27],[1,.36],[.62,.32]],.26,1,.01),"#151515"),i.metal.add(yt(U(0,.56,.98),U(.06,.27,.88),.024),"#9a8f86"),i.metal.add(yt(U(.06,.27,.88),U(.12,.27,.5),.024),"#9a8f86"),i.base.add(yt(U(.14,.3,.52),U(.18,.43,.2),.075,.065,12),"#151515"),i.metal.add(yt(U(.165,.37,.48),U(.2,.44,.26),.05,.045,10),"#bdbdbd"),i.metal.add(yt(U(.18,.43,.2),U(.182,.44,.15),.045,.045,12),"#d8d8d8"),i.base.add(tn(.085,.02,.13,.31,0,14),"#2a2a2a"),i.base.add(tn(.05,.02,.13,.42,.62,12),"#2a2a2a"),i.base.add(yt(U(.13,.4,0),U(.13,.47,.62),.008),"#333"),i.base.add(yt(U(.13,.23,0),U(.13,.37,.62),.008),"#333"),Ra(i,U(0,.42,.55),"#161616"),i.base.add(yt(U(0,.45,.3),U(0,.8,.55),.035),"#b71c1c"),i.base.add(ee(.05,.08,.06,.1,.38,-.1,.3),"#8a1c1c"),i.base.add(yt(U(-.22,.4,.55),U(.22,.4,.55),.015),"#555"),Hi(i,-.31,.64),i.base.add(xt([[1.14,.97],[1.25,1.07],[1.33,.99],[1.31,.83],[1.18,.81]],.23,1,.02),"#121212"),i.light.add(xt([[1.3,.99],[1.335,.97],[1.335,.86],[1.3,.85]],.15,0,.005),"#ffffff"),i.light.add(xt([[1.29,1.02],[1.325,1],[1.325,.99],[1.29,1.01]],.2,0,0),"#bfe9ff"),i.base.add(ee(.15,.08,.05,0,1.13,1.08,.5),"#0c0c0c"),i.light.add(ee(.11,.05,.005,0,1.135,1.107,.5),"#5ab0ff"),Pa(i,-.25,.94,.1),Vi(i,"#d9d9d9","#1f1f1f",.09,.03),Ns(i,.37,.08,.04),vr(i,i.sb),Os(i,i.sp,"#000",.13,.03,.065,.3,2),i.seat=U(0,.99,.42),i.peg=U(0,.4,.55)},sport(i){Object.assign(i,{L:1.33,r:.3,rf:.3,head:U(0,.9,1.06),wheel:"y",caliper:"#c9a227"}),Gi(i),i.paint.add(xt([[.98,.96],[1.2,1.04],[1.43,.9],[1.41,.79],[1.22,.76],[1.04,.84]],.36,1,.025)),i.paint.add(xt([[.62,.42],[.96,.33],[1.2,.46],[1.38,.76],[1.2,.78],[1.04,.7],[.86,.86],[.66,.66]],.42,1,.02)),i.base.add(xt([[.72,.48],[.94,.42],[1.06,.54],[.88,.62]],.43,0,0),"#121212"),i.base.add(xt([[.98,.52],[1.12,.5],[1.18,.62],[1.04,.66]],.43,0,0),"#1a1a1a"),i.base.add(xt([[1.36,.78],[1.44,.82],[1.44,.88],[1.36,.86]],.12,0,.005),"#0a0a0a"),i.light.add(xt([[1.43,.82],[1.445,.82],[1.445,.87],[1.43,.87]],.07,0,0),"#ffffff");for(const e of[-1,1])i.light.add(xt([[1.33,.9],[1.42,.885],[1.415,.875],[1.32,.885]],.06,0,0,e*.12),"#e8f6ff");i.paint.add(xt([[.56,.86],[.66,1.01],[.88,1.06],[1.02,1],[.98,.86],[.7,.82]],.36,2,.04)),i.base.add(xt([[.6,.84],[.84,.82],[.88,.9],[.62,.92]],.37,1,0),"#151515"),i.base.add(xt([[.2,.93],[.3,.96],[.6,.99],[.63,.9],[.22,.88]],.27,2,.03),"#141414"),i.base.add(xt([[-.12,1.02],[-.02,1.05],[.16,1.03],[.18,.97],[-.1,.98]],.2,2,.02),"#141414"),i.paint.add(xt([[-.32,1.04],[-.12,1.01],[.34,.92],[.38,.82],[.1,.82],[-.26,.95]],.22,0,.02)),i.base.add(xt([[-.3,.96],[.1,.8],[.36,.8],[0,.88]],.16,0,0),"#0e0e0e"),i.base.add(xt([[1.18,1.03],[1.32,1],[1.2,1.17],[1.1,1.12]],.27,1,.01),"#1d2731"),i.base.add(ee(.28,.28,.34,0,.46,.78),"#1b1b1b"),i.base.add(ee(.22,.2,.2,0,.66,.92,-.45),"#202020"),i.metal.add(tn(.1,.03,.15,.43,.72,16),"#a9a9a9"),i.metal.add(yt(U(0,.56,.98),U(.05,.27,.88),.024),"#8f8a85"),i.base.add(yt(U(.08,.28,.66),U(.17,.42,.34),.07,.06,12),"#121212"),i.metal.add(yt(U(.17,.42,.34),U(.18,.44,.29),.05,.05,12),"#c0c0c0"),i.base.add(tn(.08,.02,.13,.3,0,14),"#2a2a2a"),i.base.add(yt(U(.13,.38,0),U(.13,.48,.62),.008),"#333"),i.base.add(yt(U(.13,.22,0),U(.13,.38,.62),.008),"#333");for(const e of[-1,1])i.base.add(yt(U(e*.1,.84,.55),U(e*.07,.94,-.05),.018),"#222");for(const e of[-.11,.11])i.metal.add(yt(U(e,.3,0),U(e,.44,.56),.03,.04,6),"#9fa3a8");i.base.add(yt(U(-.12,.44,.56),U(.12,.44,.56),.03),"#222"),i.base.add(yt(U(0,.46,.32),U(0,.8,.56),.035),"#1e40af"),i.base.add(yt(U(-.2,.46,.48),U(.2,.46,.48),.015),"#555"),Hi(i,-.34,.7),i.light.add(xt([[-.33,1.02],[-.31,1.03],[-.29,.99],[-.31,.98]],.14,0,0),"#ff1a1a");for(const e of[-1,1])i.light.add(ee(.04,.02,.03,e*.13,.86,-.28),"#ffa000");Vi(i,"#d4a017","#1a1a1a",.09,.03,!0);const t=i.forkTop;for(const e of[-1,1])i.sb.add(yt(U(e*.1,t.y-.02,t.z),U(e*.3,t.y-.05,t.z-.07),.014),"#1b1b1b"),i.sb.add(yt(U(e*.22,t.y-.04,t.z-.06),U(e*.31,t.y-.05,t.z-.075),.02),"#0e0e0e");i.grip={y:t.y-.05,z:t.z-.07,w:.3};for(const e of[-1,1])i.base.add(ee(.1,.05,.02,e*.27,1.02,1.12),"#151515"),i.base.add(yt(U(e*.2,.98,1.14),U(e*.26,1,1.13),.008),"#151515");Os(i,i.sp,"#000",.12,.03,.06,.4,2.1),i.seat=U(0,1.01,.36),i.peg=U(0,.48,.46)},street(i){Object.assign(i,{L:1.32,r:.31,rf:.31,head:U(0,.95,1.06),wheel:"alloy"}),Gi(i),i.paint.add(xt([[.52,.84],[.62,1],[.84,1.06],[1.02,1.02],[1.1,.92],[.96,.82],[.7,.8]],.34,2,.04)),i.paint.add(xt([[.2,.62],[.48,.62],[.5,.82],[.22,.84]],.3,1,.02)),i.paint.add(xt([[-.18,.86],[.1,.86],[.3,.84],[.26,.76],[-.16,.78]],.2,1,.02)),i.base.add(xt([[-.04,.9],[.1,.94],[.62,.96],[.66,.88],[0,.86]],.28,2,.03),"#1c1c1c"),i.base.add(ee(.24,.025,.3,0,.9,-.12),"#222");for(const e of[-1,1])i.base.add(yt(U(e*.12,.42,.05),U(e*.12,.84,.2),.03),"#9a9a9a"),i.base.add(yt(U(e*.1,.84,.55),U(e*.08,.88,-.05),.018),"#222");i.base.add(yt(U(0,.92,1.04),U(0,.82,.6),.03),"#222"),i.base.add(yt(U(0,.92,1.04),U(0,.42,.98),.03),"#222"),Hu(i,.74,.45,.34,.3,"#4a4a4a",-.15),i.base.add(yt(U(.04,.58,.96),U(.1,.3,.84),.024),"#cfcfcf"),i.base.add(yt(U(.1,.3,.84),U(.14,.3,.42),.024),"#cfcfcf"),i.base.add(yt(U(.15,.33,.44),U(.18,.46,-.04),.056,.05,10),"#d6d6d6"),Ra(i,U(0,.42,.55)),i.base.add(yt(U(-.22,.38,.6),U(.22,.38,.6),.015),"#777"),Hi(i,-.26,.64),Pa(i,-.19,.83),Vi(i,"#cfcfcf","#bdbdbd",.09,.028),Ns(i,.36,.13,.08,"#c8c8c8"),vr(i,i.sb);const t=i.forkTop;i.sb.add(Tr(.1,0,t.y-.06,t.z+.12,1,1,.8,12),"#1a1a1a"),i.sl.add(sy(.082,.02,0,t.y-.06,t.z+.19,16),"#fff6dc"),i.sb.add(ee(.12,.08,.05,0,t.y+.05,t.z-.02),"#111"),Os(i,i.sb,"#d0d0d0",.12),i.seat=U(0,1,.38),i.peg=U(0,.38,.56)},cub(i){Object.assign(i,{L:1.22,r:.29,rf:.29,head:U(0,.92,.98),wheel:"spoke",drum:!0}),Gi(i),i.paint.add(xt([[.7,.4],[.86,.42],[1,.86],[.98,1],[.9,.98],[.8,.7],[.66,.46]],.4,2,.03)),i.paint.add(xt([[.02,.7],[.14,.82],[.56,.84],[.62,.62],[.7,.42],[.56,.4],[.48,.58],[.1,.58]],.3,2,.03)),i.base.add(xt([[.04,.86],[.12,.92],[.54,.93],[.58,.84],[.1,.82]],.27,2,.03),"#1a1a1a"),i.base.add(ee(.24,.2,.34,0,.34,.66),"#555"),i.base.add(tn(.09,.04,.13,.33,.6,12),"#9a9a9a"),i.base.add(yt(U(.05,.3,.84),U(.12,.24,.6),.022),"#444"),i.base.add(yt(U(.14,.28,.56),U(.16,.36,.1),.05,.045,10),"#3a3a3a"),i.base.add(ee(.22,.03,.3,0,.86,-.08),"#222");for(const e of[-1,1])i.base.add(yt(U(e*.11,.33,.04),U(e*.11,.78,.16),.026),"#8a8a8a");Ra(i,U(0,.38,.5),"#2a2a2a"),i.base.add(yt(U(-.2,.32,.62),U(.2,.32,.62),.014),"#666"),Hi(i,-.18,.62),Pa(i,-.1,.78,.14),Vi(i,"#2a2a2a","#2a2a2a",.08,.026),Ns(i,.32,.08,.04);const t=i.forkTop;i.sp.add(xt([[t.z-.14,t.y+.02],[t.z+.02,t.y+.1],[t.z+.14,t.y+.06],[t.z+.12,t.y-.04],[t.z-.06,t.y-.03]],.44,1,.03)),i.sl.add(xt([[t.z+.12,t.y+.05],[t.z+.16,t.y+.04],[t.z+.15,t.y-.02],[t.z+.11,t.y-.02]],.16,0,.005),"#fff6dc"),vr(i,i.sb),Os(i,i.sp,"#000",.12,.03,.07),i.seat=U(0,.98,.34),i.peg=U(0,.36,.66)},scooter(i){Object.assign(i,{L:1.31,r:.27,rf:.28,head:U(0,.9,1.04),wheel:"scooter"}),Gi(i),i.paint.add(xt([[.86,.38],[1,.4],[1.2,.7],[1.24,.88],[1.16,1.04],[1.04,1.05],[.94,.8],[.82,.48]],.46,3,.04)),i.base.add(xt([[.84,.36],[1,.37],[1.12,.56],[.94,.56]],.48,1,.01),"#171717"),i.metal.add(xt([[1.19,.66],[1.215,.67],[1.255,.88],[1.23,.88]],.47,0,0),"#cfcfcf");for(const e of[-1,1])i.light.add(ee(.3,.018,.02,0,.86,1.235,0,0,e*.55),"#ffffff");i.base.add(xt([[1.2,.74],[1.25,.74],[1.25,.81],[1.2,.81]],.2,0,.005),"#0b0b0b"),i.light.add(xt([[1.25,.75],[1.258,.75],[1.258,.8],[1.25,.8]],.16,0,0),"#f4fbff"),i.paint.add(xt([[-.2,.76],[-.02,.86],[.3,.85],[.6,.8],[.66,.62],[.72,.46],[.42,.44],[.2,.54],[-.12,.62]],.38,3,.035)),i.base.add(xt([[.2,.44],[.72,.42],[.72,.5],[.42,.52],[.2,.56]],.4,1,.01),"#161616"),i.base.add(xt([[.56,.35],[.92,.35],[.92,.45],[.56,.45]],.42,0,.02),"#202020"),i.metal.add(xt([[0,.79],[.5,.8],[.5,.81],[0,.8]],.385,0,0),"#cfcfcf"),i.base.add(xt([[0,.85],[.06,.93],[.26,.94],[.32,.9],[.54,.91],[.6,.83],[.04,.81]],.34,3,.03),"#1a1a1a"),i.base.add(xt([[1.15,1.06],[1.23,1.04],[1.17,1.24],[1.1,1.21]],.3,1,.01),"#26313b"),i.base.add(ee(.18,.22,.5,.1,.36,.26),"#2d2d2d"),i.base.add(yt(U(-.16,.36,.42),U(-.18,.47,-.02),.065,.06,12),"#1d1d1d"),i.metal.add(yt(U(-.2,.42,.38),U(-.22,.49,.06),.045,.04,10),"#c8c8c8"),i.metal.add(yt(U(-.18,.47,-.02),U(-.182,.48,-.07),.042,.042,12),"#d8d8d8"),i.base.add(yt(U(-.12,.34,.06),U(-.12,.74,.22),.03),"#6a6a6a"),i.base.add(yt(U(.12,.34,.06),U(.12,.74,.22),.03),"#6a6a6a"),Hi(i,-.27,.62);for(const e of[-1,1])i.light.add(ee(.2,.016,.02,0,.78,-.205,0,0,e*.45),"#ff1a1a");for(const e of[-1,1])i.light.add(ee(.04,.02,.03,e*.16,.74,-.19),"#ffa000");Vi(i,"#e0e0e0","#1c1c1c",.08,.028),Ns(i,.34,.12,.06);const t=i.forkTop;i.sp.add(xt([[t.z-.14,t.y+.08],[t.z+.04,t.y+.17],[t.z+.17,t.y+.1],[t.z+.13,t.y+0],[t.z-.08,t.y+0]],.52,2,.03)),i.sb.add(xt([[t.z-.1,t.y+.12],[t.z+.05,t.y+.17],[t.z+.08,t.y+.13],[t.z-.06,t.y+.1]],.24,1,.005),"#0d0d0d"),i.sl.add(ee(.16,.004,.06,0,t.y+.17,t.z+0,-.35),"#7fd3ff"),vr(i,i.sb),Os(i,i.sp,"#000",.14,.03,.075,.3,2.2),i.seat=U(0,.98,.3),i.peg=U(0,.48,.8)},escooter(i){Object.assign(i,{L:1.25,r:.25,rf:.26,head:U(0,.86,1),wheel:"scooter"}),Gi(i),i.paint.add(xt([[.84,.34],[.96,.36],[1.16,.82],[1.1,.98],[.98,.98],[.88,.7],[.8,.42]],.4,1,.03)),i.paint.add(xt([[-.2,.78],[.02,.84],[.56,.82],[.62,.56],[.66,.36],[.3,.34],[-.1,.56]],.32,1,.03)),i.base.add(xt([[.56,.3],[.88,.3],[.88,.42],[.56,.42]],.36,0,.02),"#1a1a1a"),i.base.add(xt([[0,.84],[.06,.9],[.52,.91],[.56,.84],[.04,.82]],.3,2,.03),"#151515"),i.base.add(tn(.13,.16,0,.25,0,14),"#2c2c2c"),i.base.add(yt(U(-.12,.3,.04),U(-.12,.72,.22),.03),"#6a6a6a"),i.base.add(yt(U(.12,.3,.04),U(.14,.42,.5),.035),"#2a2a2a"),Hi(i,-.26,.62);for(const e of[-1,1])i.light.add(xt([[.84,.4],[1.13,.86],[1.12,.9],[.83,.44]],.02,0,0,e*.205),"#3ff4ff");for(const e of[-1,1])i.light.add(xt([[0,.62],[.58,.62],[.58,.64],[0,.64]],.02,0,0,e*.165),"#3ff4ff");i.light.add(xt([[1.12,.84],[1.18,.82],[1.14,.74],[1.08,.76]],.26,0,.005),"#f4fbff"),i.light.add(ee(.26,.03,.03,0,.8,-.2),"#ff1a1a"),Vi(i,"#1a1a1a","#1a1a1a",.08,.026),Ns(i,.32,.1,.05);const t=i.forkTop;i.sp.add(xt([[t.z-.12,t.y+.06],[t.z+.06,t.y+.12],[t.z+.14,t.y+.05],[t.z-.06,t.y+0]],.44,0,.02)),i.sl.add(ee(.2,.012,.02,0,t.y+.11,t.z+.02),"#3ff4ff"),Os(i,i.sp,"#000",.12,.03,.06,.3,2.2),i.seat=U(0,.95,.28),i.peg=U(0,.42,.76)},trail(i){Object.assign(i,{L:1.42,r:.33,rf:.36,head:U(0,1.05,1.1),wheel:"spoke"}),Gi(i),i.paint.add(xt([[.56,.9],[.66,1.06],[.88,1.1],[1.06,1.04],[1.1,.94],[.92,.86],[.66,.86]],.32,2,.04)),i.paint.add(xt([[.9,.8],[1.1,.88],[1.18,1.04],[1.02,1.06],[.92,.96]],.44,1,.02)),i.paint.add(xt([[0,.84],[.3,.8],[.48,.86],[.42,.96],[.04,.98]],.26,1,.02)),i.paint.add(xt([[-.32,.98],[0,.96],[.2,.98],[.16,1.04],[-.3,1.04]],.18,1,.02)),i.base.add(xt([[.02,1],[.14,1.05],[.7,1.07],[.76,.98],[.1,.96]],.26,2,.03),"#1a1a1a");for(const e of[-1,1])i.base.add(yt(U(e*.07,1.02,1.08),U(e*.12,.86,.6),.025),"#2a2a2a"),i.base.add(yt(U(e*.12,.86,.6),U(e*.12,.5,.56),.025),"#2a2a2a");i.base.add(yt(U(0,1.02,1.08),U(0,.4,.96),.032),"#2a2a2a"),Hu(i,.76,.5,.34,.3,"#3a3a3a",-.2),i.base.add(ee(.24,.05,.36,0,.3,.76),"#777"),i.base.add(yt(U(.03,.62,.95),U(.14,.5,.8),.024),"#666"),i.base.add(yt(U(.14,.5,.8),U(.16,.62,.42),.024),"#666"),i.base.add(yt(U(.16,.62,.42),U(.17,.84,-.06),.062,.055,10),"#2f2f2f"),Ra(i,U(0,.5,.58),"#8f8f8f"),i.base.add(yt(U(0,.52,.3),U(0,.92,.56),.038),"#d4a017"),i.base.add(yt(U(-.22,.48,.6),U(.22,.48,.6),.016),"#777"),Hi(i,-.34,.76),Pa(i,-.3,.99,.1),Vi(i,"#cfcfcf","#1f1f1f",.1,.03),Ns(i,.4,.1,.06,"#2a2a2a");for(const e of[-1,1])i.sb.add(xt([[i.grip.z-.02,i.grip.y-.04],[i.grip.z+.14,i.grip.y-.02],[i.grip.z+.12,i.grip.y+.06],[i.grip.z-0,i.grip.y+.03]],.02,1,0,e*(i.grip.w-.04)),"#111");const t=i.forkTop;i.sp.add(xt([[t.z+.02,t.y-.12],[t.z+.12,t.y+.08],[t.z+.18,t.y+.06],[t.z+.18,t.y-.16],[t.z+.08,t.y-.2]],.24,1,.02)),i.sl.add(xt([[t.z+.18,t.y-.02],[t.z+.21,t.y-.03],[t.z+.21,t.y-.12],[t.z+.18,t.y-.12]],.13,0,.005),"#fff6dc"),vr(i,i.sb),i.sp.add(xt([[i.L-.24,i.rf+.46],[i.L+.1,i.rf+.5],[i.L+.28,i.rf+.42],[i.L+.12,i.rf+.55],[i.L-.2,i.rf+.54]],.15,1,.01)),i.seat=U(0,1.1,.44),i.peg=U(0,.48,.58)}},ly=new P(0,1,0);function ks(i,t,e,n=1,s=1,r=8){const a=new P().subVectors(t,i),o=Math.max(.01,a.length()-e*.6),c=new ql(e,o,3,r);return c.scale(n,1,s),c.applyQuaternion(new Mn().setFromUnitVectors(ly,a.normalize())),c.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),c}function hy(i,t,e=.46){const n=t.z-i.z,s=t.y-i.y;let r=Math.hypot(n,s);r=Math.min(r,e*2-.01);const a=r/2,o=Math.sqrt(Math.max(0,e*e-a*a)),c=i.z+n/2,l=i.y+s/2,h=-s/r,u=n/r,f=h>0||h===0&&u>0?1:-1;return{z:c+h*o*f,y:l+u*o*f}}function uy(i){const t=new Ie,e=new Ie,n=new Ie,s=new Ie,r=i.seat.clone(),a=i.peg,o=i.grip,c="#22314f",l="#121212",h="#c58c63",u="#ffffff";for(const D of[-1,1]){const E=U(D*.2,a.y+.03,a.z),A=hy({z:r.z,y:r.y-.05},{z:E.z,y:E.y}),w=U(D*.11,r.y-.05,r.z),M=U(D*.19,A.y,A.z);t.add(ks(w,M,.085),c),t.add(ks(M,E.clone().add(U(0,.05,0)),.064),c),t.add(Tr(.075,D*.2,E.y+.02,E.z+.06,.75,.6,1.7,8),l)}t.add(Tr(.17,0,r.y+0,r.z-.02,1,.7,.95,10),c);const d=U(0,o.y+.32,o.z-.12).clone().sub(r).normalize(),m=r.clone().addScaledVector(d,.56);e.add(ks(r.clone().addScaledVector(d,.02),m,.15,1.35,.85,10),u),e.add(ks(U(-.17,m.y-.03,m.z),U(.17,m.y-.03,m.z),.085,1,1,8),u);const _=m.clone().addScaledVector(d,.1);n.add(yt(m,_,.05,.05,6),h);const g=[];for(const D of[-1,1]){const E=U(D*.2,m.y-.03,m.z),A=U(D*(o.w-.05),o.y+.02,o.z),w=E.clone().lerp(A,.5).add(U(D*.08,-.07,-.03)),M=new Ie,x=new Ie;M.add(ks(E,w,.06),u),M.add(ks(w,A,.05),u),x.add(Tr(.05,A.x,A.y,A.z,1,1,1,6),"#111");const L=M.build(),F=x.build();L.translate(-E.x,-E.y,-E.z),F.translate(-E.x,-E.y,-E.z),g.push({j:L,f:F,S:E.clone().sub(r),dir:A.clone().sub(E).normalize(),side:D})}const p=_.clone().addScaledVector(d,.13).add(U(0,.02,.02));s.add(Tr(.155,p.x,p.y,p.z,1,1.02,1.12,12)),n.add(xt([[p.z+.1,p.y-.02],[p.z+.17,p.y],[p.z+.16,p.y+.06],[p.z+.08,p.y+.07]],.26,1,.01),"#0d1117");const b=e.build(),S=s.build(),v=n.build();for(const D of[b,S,v])D.translate(-r.x,-r.y,-r.z);return{lower:t.build(),upper:b,upFix:v,helmet:S,hip:r,arms:g,grip:U(0,o.y,o.z)}}const ac=new Map;function nd(i){if(ac.has(i.id))return ac.get(i.id);const t={paint:new Ie,base:new Ie,light:new Ie,metal:new Ie,sb:new Ie,sp:new Ie,sl:new Ie,sm:new Ie};cy[i.type](t);const e=t.head.clone(),n=new P().subVectors(t.head,t.axleF).normalize(),s=c=>{const l=c.build();return l&&l.translate(-e.x,-e.y,-e.z),l},r=uy(t),a={L:t.L,r:t.r,rf:t.rf,head:e,axis:n,axleF:t.axleF.clone(),axleR:t.axleR.clone(),paint:t.paint.build(),base:t.base.build(),light:t.light.build(),metal:t.metal.build(),sBase:s(t.sb),sPaint:s(t.sp),sLight:s(t.sl),sMet:s(t.sm),wheelR:Vu(t.r,i.type==="trail"?.12:i.type==="scooter"||i.type==="escooter"?.11:.1,t.wheel,!0),wheelF:Vu(t.rf,i.type==="trail"?.09:i.type==="scooter"||i.type==="escooter"?.1:.09,t.wheel,!t.drum),rider:r};let o=1.6;for(const c of[a.paint,a.base,a.light]){if(!c)continue;const l=c.attributes.position;for(let h=0;h<l.count;h++){const u=l.getZ(h),f=l.getY(h);u<-.05&&(o=Math.min(o,Math.atan2(f,-u)))}}return a.scrape=o,ac.set(i.id,a),a}const Wu=new Mn;class qr{constructor(t,e={},n=!1){this.spec=t,this.m=nd(t);const s=this.m;this.paintMat=new Hn({color:e.paint||t.color,metalness:.45,roughness:.22,envMapIntensity:1.25}),this.rimMat=new Hn({color:e.rim||"#1a1a1a",metalness:.6,roughness:.35}),this.helmetMat=new Hn({color:e.helmet||"#111",metalness:.3,roughness:.25}),this.jacketMat=new Hn({vertexColors:!0,color:e.jacket||"#1f2937",metalness:.05,roughness:.8}),this.root=new Ge,this.lean=new Ge,this.pivot=new Ge,this.inner=new Ge,this.root.add(this.lean),this.lean.add(this.pivot),this.pivot.add(this.inner);const r=(o,c,l)=>{if(!o)return null;const h=new Qt(o,c);return h.castShadow=n,l.add(h),h};r(s.paint,this.paintMat,this.inner),r(s.base,rn.base,this.inner),r(s.light,rn.light,this.inner),r(s.metal,rn.metal,this.inner),this.steer=new Ge,this.steer.position.copy(s.head),this.inner.add(this.steer),r(s.sBase,rn.base,this.steer),r(s.sPaint,this.paintMat,this.steer),r(s.sLight,rn.light,this.steer),r(s.sMet,rn.metal,this.steer),this.wf=new Ge,this.wf.position.copy(s.axleF).sub(s.head),this.steer.add(this.wf),r(s.wheelF.tire,rn.base,this.wf),r(s.wheelF.rim,this.rimMat,this.wf),r(s.wheelF.metal,rn.metal,this.wf),this.wr=new Ge,this.wr.position.copy(s.axleR),this.inner.add(this.wr),r(s.wheelR.tire,rn.base,this.wr),r(s.wheelR.rim,this.rimMat,this.wr),r(s.wheelR.metal,rn.metal,this.wr),this.riderRoot=new Ge,this.inner.add(this.riderRoot),this.riderG=new Ge,this.riderG.position.copy(s.rider.grip),this.riderRoot.add(this.riderG);const a=new Ge;a.position.copy(s.rider.grip).negate(),this.riderG.add(a),r(s.rider.lower,rn.base,a),this.upper=new Ge,this.upper.position.copy(s.rider.hip),a.add(this.upper),r(s.rider.upper,this.jacketMat,this.upper),r(s.rider.upFix,rn.base,this.upper),r(s.rider.helmet,this.helmetMat,this.upper),this.arms=s.rider.arms.map(o=>{const c=new Ge;return c.position.copy(o.S),this.upper.add(c),r(o.j,this.jacketMat,c),r(o.f,rn.base,c),{g:c,a:o,qUp:new Mn().setFromUnitVectors(o.dir,new P(o.side*.45,.88,.15).normalize()),qOut:new Mn().setFromUnitVectors(o.dir,new P(o.side*.95,.25,.1).normalize())}}),this.pose=0,this.wheelRot=0,this.riderOff=!1}setColors(t){t.paint&&this.paintMat.color.set(t.paint),t.rim&&this.rimMat.color.set(t.rim),t.helmet&&this.helmetMat.color.set(t.helmet),t.jacket&&this.jacketMat.color.set(t.jacket)}apply(t){this.root.position.set(t.x,t.y,t.z),this.root.rotation.y=t.yaw,this.lean.rotation.z=-t.lean;const e=t.pitch,n=e<0?this.m.L:0;this.pivot.position.set(0,0,n),this.inner.position.set(0,0,-n),this.pivot.rotation.x=-e,Wu.setFromAxisAngle(this.m.axis,t.steer*.85),this.steer.quaternion.copy(Wu),this.wr.rotation.x=t.wheel/this.m.r,this.wf.rotation.x=t.wheel/this.m.rf;const s=t.trick||0,r=t.tb||0;s&&(this.pose=s);const a=this.pose?r:0;r||(this.pose=0);let o=e>0?Math.min(.45,e*.4):e*.3;this.riderG.rotation.set(0,0,0),this.riderG.position.copy(this.m.rider.grip);for(const c of this.arms)c.g.quaternion.identity();if(this.pose===1){o=o*(1-a)+(.15+Math.min(.5,e*.45))*a;for(const c of this.arms)c.g.quaternion.slerp(c.qUp,a)}else if(this.pose===2)this.riderG.rotation.x=(.95+.85*Math.max(0,e))*a,this.riderG.position.y+=.08*a,o*=1-a;else if(this.pose===3){this.riderG.rotation.x=(.25+.9*Math.max(0,e))*a,this.riderG.position.y+=.38*a,o=o*(1-a)+.1*a;for(const c of this.arms)c.g.quaternion.slerp(c.qOut,a)}this.upper.rotation.x=o,this.upper.rotation.z=t.lean*.25}dispose(){this.paintMat.dispose(),this.rimMat.dispose(),this.helmetMat.dispose(),this.jacketMat.dispose(),this.root.removeFromParent()}}const Wi=9.81,Xu={naked:{red:10500,gears:6},sport:{red:11500,gears:6},street:{red:9e3,gears:5},cub:{red:8500,gears:4},trail:{red:9e3,gears:5},scooter:{red:8800,gears:0},escooter:{red:6e3,gears:0}},Un=1300;function $u(i){return i>1.02?0:re(1-1.25*(i-.6)*(i-.6),.32,1)}class id{constructor(t,e={},n=!1){this.easy=n,this.auto=!0,this.setSpec(t,e),this.reset(0,0,0),this.events=[]}setSpec(t,e={}){this.spec=t,this.up={motor:e.motor||0,grau:e.grau||0,freio:e.freio||0};const n=nd(t);this.L=n.L,this.scrapeAng=re(n.scrape||t.bp+.35,t.bp+.18,1.5);const s=Xu[t.type]||Xu.naked;this.red=s.red,this.nG=s.gears,this.cvt=t.type==="scooter",this.electric=!!t.electric,this.vtop=t.top/3.6*(1+.07*this.up.motor),this.A1=t.accel*(1+.12*this.up.motor),this.vg=[];for(let a=1;a<=this.nG;a++)this.vg[a]=this.vtop*(.33+.71*Math.pow((a-1)/Math.max(1,this.nG-1),.92));const r=this.nG?this.A1*(this.vg[1]/this.vg[this.nG])*$u(this.vtop/this.vg[this.nG]):this.A1*.18;this.cd=Math.max(5e-4,(r-.25)/(this.vtop*this.vtop)),this.gear>this.nG&&(this.gear=Math.max(1,this.nG))}reset(t,e,n){Object.assign(this,{x:t,z:e,y:0,vy:0,yaw:n,v:0,steer:0,lean:0,pitch:0,pitchV:0,tp:0,grounded:!0,wheel:0,rpm:Un,gear:1,clutch:0,prevClutch:!1,freeRpm:Un,dump:0,dumpT:0,crashed:!1,crashT:0,airT:0,flipBase:0,throttle:0,thrF:0,fbP:0,rbP:0,scraping:!1,scrapeT:0,overT:0,limiter:!1,trick:0,trickBlend:0,lockThr:0,noise:0,noiseT:0,a:0})}emit(t,e={}){this.events.push({type:t,...e})}crash(t){this.crashed||(this.crashed=!0,this.crashT=0,this.crashV=this.v,this.crashReason=t,this.trick=0,this.emit("crash",{reason:t}))}shift(t){if(!this.nG||this.crashed)return;const e=re(this.gear+t,1,this.nG);if(e!==this.gear){if(t<0&&this.v/this.vg[e]*this.red>this.red*1.06){this.emit("deny");return}this.gear=e,this.emit("shift",{gear:e})}}get gearRatio(){return this.nG?this.vg[1]/this.vg[this.gear]:1}step(t,e,n){const s=this.spec;if(this.crashed){this.crashT+=t,this.v=Math.max(0,this.v-8*t),this.x+=Math.sin(this.yaw)*this.v*t,this.z+=Math.cos(this.yaw)*this.v*t,this.y=Math.max(n.groundHeight(this.x,this.z),this.y-6*t),this.lean+=(1.35*Math.sign(this.lean||1)-this.lean)*Math.min(1,t*5),this.pitch+=(0-this.pitch)*Math.min(1,t*6),this.rpm+=(Un-this.rpm)*t*3,this.scraping=!1;return}const a=((this.grounded?this.pitch>.22:this.airT>.15)||this.trick)&&e.trick||0;a!==this.trick&&(a&&!this.trick&&(this.lockThr=this.thrF,this.emit("trick",{t:a})),this.trick=a),this.trickBlend=re(this.trickBlend+(this.trick?t:-t)/.35,0,1);let o=re(e.throttle,0,1);this.trick===1&&(o=this.lockThr),this.thrF+=(o-this.thrF)*Math.min(1,t*14);const c=this.thrF;this.throttle=c;const l=this.trick===1||this.trick===3;this.fbP=re(this.fbP+(e.fbrake&&!l?t/.8:-t/.12),0,1),this.rbP=re(this.rbP+(e.brake&&this.trick!==3?t/.25:-t/.12),0,1),e.shiftUp&&(this.shift(1),e.shiftUp=!1),e.shiftDown&&(this.shift(-1),e.shiftDown=!1);const h=this.gearRatio,u=this.freeRpm;let f=0;const d=!!e.clutch;let m=0;if(this.electric){const Mt=this.vtop*.35;f=d?0:c*this.A1*Math.min(1,Mt/Math.max(1,this.v))*re((this.vtop-this.v)/(this.vtop*.15),0,1),this.rpm=600+this.v/this.vtop*5400+c*300,d&&(this.freeRpm=Math.min(1,this.freeRpm/6e3+t*1.6)*6e3)}else if(this.cvt){const Mt=re((this.rpm-2600)/1600,0,1);f=d?0:c*this.A1*Mt*re(1-Math.pow(this.v/this.vtop,2.4),0,1);const V=d?Un+c*7200:Un+c*5600+this.v/this.vtop*1800;this.rpm+=(V-this.rpm)*Math.min(1,t*7),d&&(m=1,this.freeRpm=this.rpm)}else{const Mt=this.v/this.vg[this.gear]*this.red;if(d){const V=Un+c*(this.red*1.02-Un);this.freeRpm+=(V-this.freeRpm)*Math.min(1,t*(c>.05?6:3)),this.rpm=this.freeRpm}else{const V=Un+c*3200;this.rpm=Math.max(Mt,Mt<V?V*(1-Mt/V)+Mt:Mt),this.rpm=Math.max(this.rpm,Un*.9);const Z=this.rpm/this.red;this.limiter=Z>=1,f=c*this.A1*h*$u(Z)*(this.limiter&&Math.random()<.5?0:1),c<.05&&(f-=.7*h*(Mt/this.red)),this.auto&&(Z>.93&&this.gear<this.nG&&this.pitch<.15?this.shift(1):Z<.38&&this.gear>1&&this.shift(-1)),this.freeRpm=this.rpm}}if(d&&!this.electric&&!this.cvt&&(this.dump=0),!d&&this.prevClutch){let Mt=0;this.electric?Mt=u/6e3*.62:this.cvt?Mt=re((u-3e3)/5e3,0,1):Mt=re((u-this.v/this.vg[this.gear]*this.red)/this.red,0,1)*h,Mt>.12&&this.grounded&&(this.dump=Mt*34*(s.pop/2.3)*(1+.12*this.up.grau),this.dumpT=.38,this.emit("pop")),this.freeRpm=Un}this.prevClutch=d;let _=0;this.dumpT>0&&(_=this.dump*(this.dumpT/.38),this.dumpT-=t);const g=.22+this.cd*this.v*this.v,p=(this.rbP+m)*4.6*(1+.1*this.up.freio),S=this.pitch<=.02?this.fbP*11.2*s.brake*(1+.08*this.up.freio):0;let v=this.scraping?3.2:0,D=0;if(this.grounded){const Mt=this.v>.05?p+S+v:0;D=f+_-g-Mt-Wi*Math.sin(this.tp)*.9,m&&this.v<.3&&(D=Math.max(0,D)),this.v+=D*t,m&&(this.v=Math.max(0,this.v-4*t))}else this.v-=this.cd*this.v*this.v*t;this.v<0&&(this.v=0,D<0&&(D=0)),this.a=D;const E=.55/(1+this.v*.11);let A=-re(e.steer,-1,1);this.pitch>.05&&this.grounded&&(A*=.5),this.trick===3&&(A*=.2),this.grounded||(A*=.2),this.steer+=(A*E-this.steer)*Math.min(1,t*7);const w=this.grounded?this.v*Math.tan(this.steer)/this.L:0;this.yaw+=w*t;const M=re(Math.atan(this.v*w/Wi),-.85,.85);this.lean+=(M-this.lean)*Math.min(1,t*6);const x=this.trickBlend,L=s.bp-(this.trick===2?.09:this.trick===3?.05:0)*x,F=s.lift*1.15*(1+.08*this.up.grau);this.noiseT-=t,this.noiseT<=0&&(this.noiseT=.25+Math.random()*.3,this.noiseTarget=(Math.random()*2-1)*[.3,.9,1.3,1.9][this.trick]),this.noise+=((this.noiseTarget||0)-this.noise)*Math.min(1,t*4);const B=this.easy?3.2:1.7;if(this.grounded){const V=this.v>.3?S:0;if(this.pitch>1e-4||this.pitch>=-1e-4&&this.pitchV>0){let Z=D*F*Math.cos(L-this.pitch)-Wi*Math.sin(L-this.pitch)-B*this.pitchV+this.noise*x;this.easy&&this.pitch>L-.08&&(Z-=(this.pitch-(L-.08))*14),this.pitchV+=Z*t,this.pitch+=this.pitchV*t,this.pitch<=0&&(this.pitchV<-2.6&&this.emit("slam",{v:this.pitchV}),this.trickBlend>.6&&this.trick>=2&&this.crash("Caiu da moto na manobra!"),this.pitch=0,this.pitchV=0),this.pitch>=this.scrapeAng?(this.pitchV>2.6&&this.crash("Virou pra trás!"),this.pitch=this.scrapeAng,this.pitchV>0&&(this.pitchV=0),this.scraping||this.emit("scrape"),this.scraping=this.v>1,this.overT=Z>1.5&&c>.8?this.overT+t:Math.max(0,this.overT-t),this.overT>.9&&this.crash("Virou pra trás!")):(this.scraping=!1,this.overT=0)}else if(this.pitch<-1e-4||this.pitchV<0){let Z=-(V*Math.cos(.75+this.pitch)-Wi*Math.sin(.75+this.pitch))-2*this.pitchV;this.v<.3&&(Z+=5),this.easy&&this.pitch<-.45&&(Z+=(-.45-this.pitch)*18),this.pitchV+=Z*t,this.pitch+=this.pitchV*t,this.scraping=!1,this.pitch>=0&&(this.pitch=0,this.pitchV=0),this.pitch<-.97&&this.crash("Capotou no corte!")}else{this.scraping=!1;const Z=D*F*Math.cos(L)-Wi*Math.sin(L),bt=V*Math.cos(.75)-Wi*Math.sin(.75);Z>0?this.pitchV=Z*t:bt>0&&(this.pitchV=-bt*t)}}else this.scraping=!1,this.pitchV+=(c*6-(this.rbP+this.fbP)*6)*t,this.pitchV=re(this.pitchV,-6.5,6.5)*(1-.25*t),this.pitch+=this.pitchV*t,this.airT+=t;const W=Math.sin(this.yaw),q=Math.cos(this.yaw),X=this.x,tt=this.z;this.x+=W*this.v*t,this.z+=q*this.v*t,this.wheel+=this.v*t*(m&&this.cvt,1);const H=n.groundHeight(this.x,this.z),ht=this.vy-Wi*t,gt=this.y+ht*t;if(H>=gt){const Mt=H-this.y;if(this.grounded&&Mt>.32&&Mt>this.v*t*1.4)this.x=X,this.z=tt,this.v>8&&this.crash("Bateu na rampa!"),this.v=0;else if(this.grounded||this.land(),!this.crashed){this.grounded=!0;const V=Mt/Math.max(.001,this.v*t);this.vy=V>1.5?Math.min(1,Mt/t):re(Mt/t,-30,this.v*1.1),this.y=H}}else this.grounded&&(this.pitch+=this.tp,this.flipBase=this.pitch,this.airT=0,this.emit("air")),this.grounded=!1,this.vy=ht,this.y=gt;if(this.grounded){const Mt=n.groundHeight(this.x-W*.2,this.z-q*.2),V=n.groundHeight(this.x+W*this.L,this.z+q*this.L),Z=Math.atan2(V-Mt,this.L+.2);this.tp+=(Z-this.tp)*Math.min(1,t*14)}const Ct=this.x+W*this.L*.5,Ht=this.z+q*this.L*.5;if(this.y<3){const Mt=n.collide(Ct,Ht,.5);if(Mt){const Z=(W*Mt.nx+q*Mt.nz)*this.v;if(this.x+=Mt.nx*Mt.depth,this.z+=Mt.nz*Mt.depth,Z<-8.5)this.crash(Mt.kind==="tree"?"Bateu na árvore!":"Bateu no muro!");else{this.v*=.6;const bt=-Mt.nz,lt=Mt.nx,Ft=W*bt+q*lt;let zt=Math.atan2(bt*Math.sign(Ft||1),lt*Math.sign(Ft||1))-this.yaw;zt=Math.atan2(Math.sin(zt),Math.cos(zt)),this.yaw+=zt*.25}}const V=n.carHit(Ct,Ht,this.y);V&&(this.v>4||V.car.cur>3?this.crash("Bateu no carro!"):(this.x+=V.nx*.3,this.z+=V.nz*.3,this.v=0))}n.isWater(this.x)&&this.y<0&&this.crash("Caiu no mar!")}land(){const t=this.tp;let e=this.pitch-t;const n=Math.round(e/(Math.PI*2)),s=Math.round((this.pitch-this.flipBase)/(Math.PI*2));e-=n*Math.PI*2;const r=this.vy<-15,a=this.easy?.5:.32,o=this.easy?-.9:-.62;e>this.spec.bp+a||e<o||r||this.trick>=2&&this.trickBlend>.5?(this.crash(r?"Pancada no chão!":this.trick>=2?"Caiu da moto na manobra!":"Caiu de mal jeito!"),this.pitch=0):(this.pitch=re(e,0,Math.min(this.spec.bp,this.scrapeAng-.05)),this.pitchV=e>.05?Math.min(this.pitchV,.4):0,e<.05&&(this.pitchV=0),this.emit("land",{air:this.airT,flips:Math.abs(s),back:s>0,wheelie:e>.15,vy:this.vy})),this.airT=0}visual(){return{x:this.x,y:this.y,z:this.z,yaw:this.yaw,pitch:this.grounded?this.pitch+this.tp:this.pitch,lean:this.lean,steer:this.steer,wheel:this.wheel,trick:this.trick,tb:this.trickBlend}}}class fy{constructor(){this.state={throttle:0,brake:0,fbrake:0,steer:0,clutch:!1,trick:0,shiftUp:!1,shiftDown:!1},this.pendUp=!1,this.pendDown=!1,this.touchTrick=0,this.keys=new Set,this.touch={throttle:0,steer:0,brake:!1,fbrake:!1,clutch:!1},this.kbThrottle=0,this.tilt=!1,this.tiltSteer=0,this.onAction=null,addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")||(this.keys.add(t.code),this.onAction&&!t.repeat&&this.onAction(t.code),!t.repeat&&t.code==="KeyE"&&(this.pendUp=!0),!t.repeat&&t.code==="KeyQ"&&(this.pendDown=!0),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("deviceorientation",t=>{if(!this.tilt||t.beta==null)return;const e=screen.orientation&&screen.orientation.angle||window.orientation||0;let n=e===90?t.beta:e===-90||e===270?-t.beta:t.gamma;this.tiltSteer=re(n/22,-1,1)})}bindTouch(t){const{throttle:e,steer:n,brake:s,fbrake:r,clutch:a}=t,o=l=>{const h=e.getBoundingClientRect();this.touch.throttle=re((h.bottom-l.clientY)/(h.height*.92),0,1),e.style.setProperty("--t",this.touch.throttle.toFixed(3))};this.slider(e,o,()=>{this.touch.throttle=0,e.style.setProperty("--t",0)});const c=l=>{const h=n.getBoundingClientRect();this.touch.steer=re((l.clientX-(h.left+h.width/2))/(h.width/2)*1.25,-1,1),n.style.setProperty("--s",this.touch.steer.toFixed(3))};this.slider(n,c,()=>{this.touch.steer=0,n.style.setProperty("--s",0)}),this.hold(s,l=>this.touch.brake=l),this.hold(r,l=>this.touch.fbrake=l),this.hold(a,l=>this.touch.clutch=l),t.gup&&this.tap(t.gup,()=>this.pendUp=!0),t.gdown&&this.tap(t.gdown,()=>this.pendDown=!0),(t.tricks||[]).forEach((l,h)=>this.hold(l,u=>{u?this.touchTrick=h+1:this.touchTrick===h+1&&(this.touchTrick=0)}))}tap(t,e){t.addEventListener("pointerdown",s=>{t.classList.add("on"),e(),s.preventDefault()});const n=()=>t.classList.remove("on");t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}slider(t,e,n){const s=new Set;t.addEventListener("pointerdown",a=>{s.add(a.pointerId),t.setPointerCapture(a.pointerId),t.classList.add("on"),e(a),a.preventDefault()}),t.addEventListener("pointermove",a=>{s.has(a.pointerId)&&e(a)});const r=a=>{s.delete(a.pointerId)&&(s.size||(t.classList.remove("on"),n()))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r)}hold(t,e){const n=new Set;t.addEventListener("pointerdown",r=>{n.add(r.pointerId),t.setPointerCapture(r.pointerId),t.classList.add("on"),e(!0),r.preventDefault()});const s=r=>{n.delete(r.pointerId)&&(n.size||(t.classList.remove("on"),e(!1)))};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s)}update(t){const e=this.keys,n=e.has("KeyW")||e.has("ArrowUp");this.kbThrottle=re(this.kbThrottle+(n?1.3:-3.5)*t,0,1),n&&(e.has("ShiftLeft")||e.has("ShiftRight"))&&(this.kbThrottle=1);let s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0);this.tilt&&Math.abs(this.tiltSteer)>.04&&(s=this.tiltSteer),Math.abs(this.touch.steer)>.02&&(s=this.touch.steer);const r=this.state;return r.throttle=Math.max(this.kbThrottle,this.touch.throttle),r.brake=e.has("KeyS")||e.has("ArrowDown")||this.touch.brake?1:0,r.fbrake=e.has("KeyF")||this.touch.fbrake?1:0,r.clutch=e.has("Space")||this.touch.clutch,r.steer=s,r.trick=e.has("Digit1")?1:e.has("Digit2")?2:e.has("Digit3")?3:this.touchTrick,r.shiftUp=this.pendUp,r.shiftDown=this.pendDown,this.pendUp=this.pendDown=!1,r}}class dy{constructor(){this.ctx=null,this.enabled=!0,this.vol=.8}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.enabled?this.vol:0,this.master.connect(e.destination),this.eGain=e.createGain(),this.eGain.gain.value=0,this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=900,this.lp.Q.value=3;const n=e.createWaveShaper(),s=new Float32Array(1024);for(let u=0;u<1024;u++){const f=u/1023*2-1;s[u]=Math.tanh(f*3.2)}n.curve=s,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square",this.o3=e.createOscillator(),this.o3.type="sine";const r=e.createGain();r.gain.value=.5;const a=e.createGain();a.gain.value=.25;const o=e.createGain();o.gain.value=0,this.g3=o,this.lfo=e.createOscillator(),this.lfo.type="square";const c=e.createGain();c.gain.value=.35,this.chop=e.createGain(),this.chop.gain.value=.65,this.lfo.connect(c),c.connect(this.chop.gain),this.o1.connect(r),this.o2.connect(a),r.connect(n),a.connect(n),n.connect(this.chop),this.chop.connect(this.lp),this.lp.connect(this.eGain),this.o3.connect(o),o.connect(this.eGain),this.eGain.connect(this.master);for(const u of[this.o1,this.o2,this.o3,this.lfo])u.start();const l=e.createBuffer(1,e.sampleRate*1,e.sampleRate),h=l.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;this.noise=l}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?this.vol:0)}engine(t,e,n,s){if(!this.ctx)return;const r=this.ctx.currentTime;if(!s){this.eGain.gain.setTargetAtTime(0,r,.1);return}if(n){const o=180+t*.09;this.o3.frequency.setTargetAtTime(o,r,.05),this.g3.gain.setTargetAtTime(.12+e*.18,r,.05),this.o1.frequency.setTargetAtTime(o*.5,r,.05),this.o2.frequency.setTargetAtTime(o*2.01,r,.05),this.lp.frequency.setTargetAtTime(400+e*600,r,.05),this.eGain.gain.setTargetAtTime(.06+e*.1,r,.08),this.lfo.frequency.setTargetAtTime(1,r,.1);return}this.g3.gain.setTargetAtTime(0,r,.05);const a=t/60;this.o1.frequency.setTargetAtTime(a*1+30,r,.03),this.o2.frequency.setTargetAtTime(a*.5+15,r,.03),this.lfo.frequency.setTargetAtTime(a*.5,r,.03),this.lp.frequency.setTargetAtTime(500+e*2200+t*.08,r,.04),this.eGain.gain.setTargetAtTime(.12+e*.2,r,.05)}burst(t=.4,e=600,n=.5,s="lowpass"){if(!this.ctx)return;const r=this.ctx,a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=s,o.frequency.value=e;const c=r.createGain();c.gain.value=n,c.gain.exponentialRampToValueAtTime(.001,r.currentTime+t),a.connect(o),o.connect(c),c.connect(this.master),a.start(),a.stop(r.currentTime+t)}crash(){this.burst(.7,500,.9),this.burst(.25,2500,.3,"highpass")}thump(){this.burst(.18,220,.6)}pop(){this.burst(.12,1500,.25,"bandpass")}shift(){this.burst(.06,900,.18,"bandpass")}scrape(){this.burst(.5,3500,.35,"highpass")}chime(t=3){if(!this.ctx)return;const e=this.ctx;[0,4,7,12].slice(0,t+1).forEach((n,s)=>{const r=e.createOscillator(),a=e.createGain();r.type="triangle",r.frequency.value=660*Math.pow(2,n/12),a.gain.value=1e-4;const o=e.currentTime+s*.07;a.gain.exponentialRampToValueAtTime(.18,o+.01),a.gain.exponentialRampToValueAtTime(1e-4,o+.25),r.connect(a),a.connect(this.master),r.start(o),r.stop(o+.3)})}}class py{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(t){this.flush(),this._parts.push(t)}append(t){this._pieces.push(t)}flush(){if(this._pieces.length>0){const t=new Uint8Array(this._pieces);this._parts.push(t),this._pieces=[]}}toArrayBuffer(){const t=[];for(const e of this._parts)t.push(e);return my(t).buffer}}function my(i){let t=0;for(const s of i)t+=s.byteLength;const e=new Uint8Array(t);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);e.set(r,n),n+=s.byteLength}return e}function sd(i){return new gy(i).unpack()}function rd(i){const t=new _y,e=t.pack(i);return e instanceof Promise?e.then(()=>t.getBuffer()):t.getBuffer()}class gy{constructor(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const t=this.unpack_uint8();if(t<128)return t;if((t^224)<32)return(t^224)-32;let e;if((e=t^160)<=15)return this.unpack_raw(e);if((e=t^176)<=15)return this.unpack_string(e);if((e=t^144)<=15)return this.unpack_array(e);if((e=t^128)<=15)return this.unpack_map(e);switch(t){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return e=this.unpack_uint16(),this.unpack_string(e);case 217:return e=this.unpack_uint32(),this.unpack_string(e);case 218:return e=this.unpack_uint16(),this.unpack_raw(e);case 219:return e=this.unpack_uint32(),this.unpack_raw(e);case 220:return e=this.unpack_uint16(),this.unpack_array(e);case 221:return e=this.unpack_uint32(),this.unpack_array(e);case 222:return e=this.unpack_uint16(),this.unpack_map(e);case 223:return e=this.unpack_uint32(),this.unpack_map(e)}}unpack_uint8(){const t=this.dataView[this.index]&255;return this.index++,t}unpack_uint16(){const t=this.read(2),e=(t[0]&255)*256+(t[1]&255);return this.index+=2,e}unpack_uint32(){const t=this.read(4),e=((t[0]*256+t[1])*256+t[2])*256+t[3];return this.index+=4,e}unpack_uint64(){const t=this.read(8),e=((((((t[0]*256+t[1])*256+t[2])*256+t[3])*256+t[4])*256+t[5])*256+t[6])*256+t[7];return this.index+=8,e}unpack_int8(){const t=this.unpack_uint8();return t<128?t:t-256}unpack_int16(){const t=this.unpack_uint16();return t<32768?t:t-65536}unpack_int32(){const t=this.unpack_uint32();return t<2**31?t:t-2**32}unpack_int64(){const t=this.unpack_uint64();return t<2**63?t:t-2**64}unpack_raw(t){if(this.length<this.index+t)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${t} ${this.length}`);const e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e}unpack_string(t){const e=this.read(t);let n=0,s="",r,a;for(;n<t;)r=e[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|e[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(e[n+1]&63)<<6|e[n+2]&63,n+=3):(a=(r&7)<<18|(e[n+1]&63)<<12|(e[n+2]&63)<<6|e[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=t,s}unpack_array(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=this.unpack();return e}unpack_map(t){const e={};for(let n=0;n<t;n++){const s=this.unpack();e[s]=this.unpack()}return e}unpack_float(){const t=this.unpack_uint32(),e=t>>31,n=(t>>23&255)-127,s=t&8388607|8388608;return(e===0?1:-1)*s*2**(n-23)}unpack_double(){const t=this.unpack_uint32(),e=this.unpack_uint32(),n=t>>31,s=(t>>20&2047)-1023,a=(t&1048575|1048576)*2**(s-20)+e*2**(s-52);return(n===0?1:-1)*a}read(t){const e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")}}class _y{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(t){if(typeof t=="string")this.pack_string(t);else if(typeof t=="number")Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if(typeof t=="boolean")t===!0?this._bufferBuilder.append(195):t===!1&&this._bufferBuilder.append(194);else if(t===void 0)this._bufferBuilder.append(192);else if(typeof t=="object")if(t===null)this._bufferBuilder.append(192);else{const e=t.constructor;if(t instanceof Array){const n=this.pack_array(t);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(t instanceof ArrayBuffer)this.pack_bin(new Uint8Array(t));else if("BYTES_PER_ELEMENT"in t){const n=t;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(t instanceof Date)this.pack_string(t.toString());else{if(t instanceof Blob)return t.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(e==Object||e.toString().startsWith("class")){const n=this.pack_object(t);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${e.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof t}" not yet supported`);this._bufferBuilder.flush()}pack_bin(t){const e=t.length;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this._bufferBuilder.append(218),this.pack_uint16(e);else if(e<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(e);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_string(t){const e=this._textEncoder.encode(t),n=e.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_array(t){const e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this._bufferBuilder.append(220),this.pack_uint16(e);else if(e<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(e);else throw new Error("Invalid length");const n=s=>{if(s<e){const r=this.pack(t[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(t){if(t>=-32&&t<=127)this._bufferBuilder.append(t&255);else if(t>=0&&t<=255)this._bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this._bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this._bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this._bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this._bufferBuilder.append(210),this.pack_int32(t);else if(t>=-9223372036854776e3&&t<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(t);else if(t>=0&&t<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(t);else throw new Error("Invalid integer")}pack_double(t){let e=0;t<0&&(e=1,t=-t);const n=Math.floor(Math.log(t)/Math.LN2),s=t/2**n-1,r=Math.floor(s*2**52),a=2**32,o=e<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(t){const e=Object.keys(t),n=e.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<e.length){const a=e[r];if(t.hasOwnProperty(a)){this.pack(a);const o=this.pack(t[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(t){this._bufferBuilder.append(t)}pack_uint16(t){this._bufferBuilder.append(t>>8),this._bufferBuilder.append(t&255)}pack_uint32(t){const e=t&4294967295;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_uint64(t){const e=t/4294967296,n=t%2**32;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(t){this._bufferBuilder.append(t&255)}pack_int16(t){this._bufferBuilder.append((t&65280)>>8),this._bufferBuilder.append(t&255)}pack_int32(t){this._bufferBuilder.append(t>>>24&255),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_int64(t){const e=Math.floor(t/4294967296),n=t%2**32;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new py,this._textEncoder=new TextEncoder}}let ad=!0,od=!0;function Er(i,t,e){const n=i.match(t);return n&&n.length>=e&&parseFloat(n[e],10)}function cs(i,t,e){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){th("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==t)return r.apply(this,arguments);const l=h=>{const u=e(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==t||!this._eventMap||!this._eventMap[t])return a.apply(this,arguments);if(!this._eventMap[t].has(c))return a.apply(this,arguments);const l=this._eventMap[t].get(c);return this._eventMap[t].delete(c),this._eventMap[t].size===0&&delete this._eventMap[t],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+t,{get(){return this["_on"+t]},set(o){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),o&&this.addEventListener(t,this["_on"+t]=o)},enumerable:!0,configurable:!0})}function vy(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(ad=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function xy(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(od=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function th(){if(typeof window=="object"){if(ad)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function eh(i,t){od&&console.warn(i+" is deprecated, please use "+t+" instead.")}function yy(i){const t={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return t.browser="Not a browser.",t;const{navigator:e}=i;if(e.userAgentData&&e.userAgentData.brands){const n=e.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(e.mozGetUserMedia)t.browser="firefox",t.version=parseInt(Er(e.userAgent,/Firefox\/(\d+)\./,1));else if(e.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)t.browser="chrome",t.version=parseInt(Er(e.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&e.userAgent.match(/AppleWebKit\/(\d+)\./))t.browser="safari",t.version=parseInt(Er(e.userAgent,/AppleWebKit\/(\d+)\./,1)),t.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,t._safariVersion=Er(e.userAgent,/Version\/(\d+(\.?\d+))/,1);else return t.browser="Not a supported browser.",t;return t}function qu(i){return Object.prototype.toString.call(i)==="[object Object]"}function cd(i){return qu(i)?Object.keys(i).reduce(function(t,e){const n=qu(i[e]),s=n?cd(i[e]):i[e],r=n&&!Object.keys(s).length;return s===void 0||r?t:Object.assign(t,{[e]:s})},{}):i}function gl(i,t,e){!t||e.has(t.id)||(e.set(t.id,t),Object.keys(t).forEach(n=>{n.endsWith("Id")?gl(i,i.get(t[n]),e):n.endsWith("Ids")&&t[n].forEach(s=>{gl(i,i.get(s),e)})}))}function ju(i,t,e){const n=e?"outbound-rtp":"inbound-rtp",s=new Map;if(t===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===t.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&gl(i,o,s)})}),s}const Yu=th;function ld(i,t){if(t.version>=64)return;const e=i&&i.navigator;if(!e.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,d){return f?f+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(t.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=t.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(e.mediaDevices.getSupportedConstraints&&e.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return e.mediaDevices.enumerateDevices().then(f=>{f=f.filter(m=>m.kind==="videoinput");let d=f.find(m=>u.some(_=>m.label.toLowerCase().includes(_)));return!d&&f.length&&u.includes("back")&&(d=f[f.length-1]),d&&(o.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),o.video=n(o.video),Yu("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Yu("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return t.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{e.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(e.getUserMedia=a.bind(e),e.mediaDevices.getUserMedia){const o=e.mediaDevices.getUserMedia.bind(e.mediaDevices);e.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function hd(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function ud(i,t){if(!(t.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else cs(i,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function fd(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const t=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=t(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const e=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],e.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(t(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const t=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=t.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function dd(i,t){if(t.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>ju(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),cs(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>ju(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const e=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function pd(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const t=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=t.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const e=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();e.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function md(i,t){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&t.version>=65)return pd(i);const e=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=e.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[u.id];if(m)m.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],m=l._streams[d.id];u=u.replace(new RegExp(m.id,"g"),d.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],m=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[m=>{const _=r(this,m);f[0].apply(null,[_])},m=>{f[1]&&f[1].apply(null,m)},arguments[2]]):h.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[l]=u[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(_=>h.track===_)&&(f=this._streams[d])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function _l(i,t){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){const n=i.RTCPeerConnection.prototype[e],s={[e](){return arguments[0]=new(e==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[e]=s[e]})}function gd(i,t){t.version>102||cs(i,"negotiationneeded",e=>{const n=e.target;if(!((t.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return e})}const Ju=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:gd,shimAddTrackRemoveTrack:md,shimAddTrackRemoveTrackWithNative:pd,shimGetSendersWithDtmf:fd,shimGetUserMedia:ld,shimMediaStream:hd,shimOnTrack:ud,shimPeerConnection:_l,shimSenderReceiverGetStats:dd},Symbol.toStringTag,{value:"Module"}));function _d(i,t){const e=i&&i.navigator;if(!e.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(e.getUserMedia=function(s,r,a){eh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),e.mediaDevices.getUserMedia(s).then(r,a)},!(t.version>55&&"autoGainControl"in e.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=e.mediaDevices.getUserMedia.bind(e.mediaDevices);if(e.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function My(i,t){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:t}:n.video.mediaSource=t,i.navigator.mediaDevices.getUserMedia(n)}))}function vd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function vl(i,t){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){const n=i.RTCPeerConnection.prototype[e],s={[e](){return arguments[0]=new(e==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[e]=s[e]}))}function xd(i,t){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||t.version>=151)return;const e={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(t.version<53&&!a)try{c.forEach(l=>{l.type=e[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:e[h.type]||h.type}))})}return c}).then(a,o)}}function yd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const t=i.RTCPeerConnection.prototype.getSenders;t&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(r=>r._pc=this),s});const e=i.RTCPeerConnection.prototype.addTrack;e&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=e.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Md(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const t=i.RTCPeerConnection.prototype.getReceivers;t&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=t.apply(this,[]);return n.forEach(s=>s._pc=this),n}),cs(i,"track",e=>(e.receiver._pc=e.srcElement,e)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Sd(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(e){eh("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&e.getTracks().includes(n.track)&&this.removeTrack(n)})})}function bd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Td(i,t){if(!(typeof i=="object"&&i.RTCPeerConnection)||t.version>=110)return;const e=i.RTCPeerConnection.prototype.addTransceiver;e&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=e.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Ed(i,t){if(!(typeof i=="object"&&i.RTCRtpSender)||t.version>=110)return;const e=i.RTCRtpSender.prototype.getParameters;e&&(i.RTCRtpSender.prototype.getParameters=function(){const s=e.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Cd(i,t){if(!(typeof i=="object"&&i.RTCPeerConnection)||t.version>=110)return;const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function Ad(i,t){if(!(typeof i=="object"&&i.RTCPeerConnection)||t.version>=110)return;const e=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Zu=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Td,shimCreateAnswer:Ad,shimCreateOffer:Cd,shimGetDisplayMedia:My,shimGetParameters:Ed,shimGetStats:xd,shimGetUserMedia:_d,shimOnTrack:vd,shimPeerConnection:vl,shimRTCDataChannel:bd,shimReceiverGetStats:Md,shimRemoveStream:Sd,shimSenderGetStats:yd},Symbol.toStringTag,{value:"Module"}));function wd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const t=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>t.call(this,s,n)),n.getVideoTracks().forEach(s=>t.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),t.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(e);if(n===-1)return;this._localStreams.splice(n,1);const s=e.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Rd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),t.apply(n,arguments)}}}function Pd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const t=i.RTCPeerConnection.prototype,e=t.createOffer,n=t.createAnswer,s=t.setLocalDescription,r=t.setRemoteDescription,a=t.addIceCandidate;t.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=e.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},t.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let o=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};t.setLocalDescription=o,o=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},t.setRemoteDescription=o,o=function(c,l,h){const u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},t.addIceCandidate=o}function Ld(i){const t=i&&i.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){const e=t.mediaDevices,n=e.getUserMedia.bind(e);t.mediaDevices.getUserMedia=s=>n(Dd(s))}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(n,s,r){t.mediaDevices.getUserMedia(n).then(s,r)}.bind(t))}function Dd(i){return i&&i.video!==void 0?Object.assign({},i,{video:cd(i.video)}):i}function Id(i){if(!i.RTCPeerConnection)return;const t=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(eh("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new t(n,s)},i.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in t&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return t.generateCertificate}})}function Ud(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Nd(i){const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return t.apply(this,arguments)}}function Od(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Ku=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Od,shimCallbacksAPI:Pd,shimConstraints:Dd,shimCreateOfferLegacy:Nd,shimGetUserMedia:Ld,shimLocalStreamsAPI:wd,shimRTCIceServerUrls:Id,shimRemoteStreamsAPI:Rd,shimTrackEventTransceiver:Ud},Symbol.toStringTag,{value:"Module"}));function Sy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var oc={exports:{}},Qu;function by(){return Qu||(Qu=1,(function(i){const t={};t.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},t.localCName=t.generateIdentifier(),t.splitLines=function(e){return e.trim().split(`
`).map(n=>n.trim())},t.splitSections=function(e){return e.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},t.getDescription=function(e){const n=t.splitSections(e);return n&&n[0]},t.getMediaSections=function(e){const n=t.splitSections(e);return n.shift(),n},t.matchPrefix=function(e,n){return t.splitLines(e).filter(s=>s.indexOf(n)===0)},t.parseCandidate=function(e){let n;e.indexOf("a=candidate:")===0?n=e.substring(12).split(" "):n=e.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},t.writeCandidate=function(e){const n=[];n.push(e.foundation);const s=e.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(e.protocol.toUpperCase()),n.push(e.priority),n.push(e.address||e.ip),n.push(e.port);const r=e.type;return n.push("typ"),n.push(r),r!=="host"&&e.relatedAddress&&e.relatedPort!==void 0&&(n.push("raddr"),n.push(e.relatedAddress),n.push("rport"),n.push(e.relatedPort)),e.tcpType&&e.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(n.push("ufrag"),n.push(e.usernameFragment||e.ufrag)),"candidate:"+n.join(" ")},t.parseIceOptions=function(e){return e.substring(14).split(" ")},t.parseRtpMap=function(e){let n=e.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},t.writeRtpMap=function(e){let n=e.payloadType;e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType);const s=e.channels||e.numChannels||1;return"a=rtpmap:"+n+" "+e.name+"/"+e.clockRate+(s!==1?"/"+s:"")+`\r
`},t.parseExtmap=function(e){const n=e.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},t.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&e.direction!=="sendrecv"?"/"+e.direction:"")+" "+e.uri+(e.attributes?" "+e.attributes:"")+`\r
`},t.parseFmtp=function(e){const n={},s=e.substring(e.indexOf(" ")+1).split(";");for(let r=0;r<s.length;r++){const[a,...o]=s[r].trim().split("=");n[a.trim()]=o.length?o.join("="):void 0}return n},t.writeFmtp=function(e){let n="",s=e.payloadType;if(e.preferredPayloadType!==void 0&&(s=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){const r=[];Object.keys(e.parameters).forEach(a=>{e.parameters[a]!==void 0?r.push(a+"="+e.parameters[a]):r.push(a)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},t.parseRtcpFb=function(e){const n=e.substring(e.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},t.writeRtcpFb=function(e){let n="",s=e.payloadType;return e.preferredPayloadType!==void 0&&(s=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},t.parseSsrcMedia=function(e){const n=e.indexOf(" "),s={ssrc:parseInt(e.substring(7,n),10)},r=e.indexOf(":",n);return r>-1?(s.attribute=e.substring(n+1,r),s.value=e.substring(r+1)):s.attribute=e.substring(n+1),s},t.parseSsrcGroup=function(e){const n=e.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},t.getMid=function(e){const n=t.matchPrefix(e,"a=mid:")[0];if(n)return n.substring(6)},t.parseFingerprint=function(e){const n=e.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},t.getDtlsParameters=function(e,n){return{role:"auto",fingerprints:t.matchPrefix(e+n,"a=fingerprint:").map(t.parseFingerprint)}},t.writeDtlsParameters=function(e,n){let s="a=setup:"+n+`\r
`;return e.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},t.parseCryptoLine=function(e){const n=e.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},t.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+(typeof e.keyParams=="object"?t.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+`\r
`},t.parseCryptoKeyParams=function(e){if(e.indexOf("inline:")!==0)return null;const n=e.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},t.writeCryptoKeyParams=function(e){return e.keyMethod+":"+e.keySalt+(e.lifeTime?"|"+e.lifeTime:"")+(e.mkiValue&&e.mkiLength?"|"+e.mkiValue+":"+e.mkiLength:"")},t.getCryptoParameters=function(e,n){return t.matchPrefix(e+n,"a=crypto:").map(t.parseCryptoLine)},t.getIceParameters=function(e,n){const s=t.matchPrefix(e+n,"a=ice-ufrag:")[0],r=t.matchPrefix(e+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},t.writeIceParameters=function(e){let n="a=ice-ufrag:"+e.usernameFragment+`\r
a=ice-pwd:`+e.password+`\r
`;return e.iceLite&&(n+=`a=ice-lite\r
`),n},t.parseRtpParameters=function(e){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=t.splitLines(e)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=t.matchPrefix(e,"a=rtpmap:"+c+" ")[0];if(l){const h=t.parseRtpMap(l),u=t.matchPrefix(e,"a=fmtp:"+c+" ");switch(h.parameters=u.length?t.parseFmtp(u[0]):{},h.rtcpFeedback=t.matchPrefix(e,"a=rtcp-fb:"+c+" ").map(t.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}t.matchPrefix(e,"a=extmap:").forEach(o=>{n.headerExtensions.push(t.parseExtmap(o))});const a=t.matchPrefix(e,"a=rtcp-fb:* ").map(t.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},t.writeRtpDescription=function(e,n){let s="";s+="m="+e+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{s+=t.writeRtpMap(a),s+=t.writeFmtp(a),s+=t.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=t.writeExtmap(a)}),s},t.parseRtpEncodingParameters=function(e){const n=[],s=t.parseRtpParameters(e),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=t.matchPrefix(e,"a=ssrc:").map(f=>t.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=t.matchPrefix(e,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(m=>parseInt(m,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),r&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=t.matchPrefix(e,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},t.parseRtcpParameters=function(e){const n={},s=t.matchPrefix(e,"a=ssrc:").map(o=>t.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=t.matchPrefix(e,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=t.matchPrefix(e,"a=rtcp-mux");return n.mux=a.length>0,n},t.writeRtcpParameters=function(e){let n="";return e.reducedSize&&(n+=`a=rtcp-rsize\r
`),e.mux&&(n+=`a=rtcp-mux\r
`),e.ssrc!==void 0&&e.cname&&(n+="a=ssrc:"+e.ssrc+" cname:"+e.cname+`\r
`),n},t.parseMsid=function(e){let n;const s=t.matchPrefix(e,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=t.matchPrefix(e,"a=ssrc:").map(a=>t.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},t.parseSctpDescription=function(e){const n=t.parseMLine(e),s=t.matchPrefix(e,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const a=t.matchPrefix(e,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=t.matchPrefix(e,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},t.writeSctpDescription=function(e,n){let s=[];return e.protocol!=="DTLS/SCTP"?s=["m="+e.kind+" 9 "+e.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+e.kind+" 9 "+e.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},t.generateSessionId=function(){return Math.random().toString().substr(2,22)},t.writeSessionBoilerplate=function(e,n,s){let r;const a=n!==void 0?n:2;return e?r=e:r=t.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},t.getDirection=function(e,n){const s=t.splitLines(e);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?t.getDirection(n):"sendrecv"},t.getKind=function(e){return t.splitLines(e)[0].split(" ")[0].substring(2)},t.isRejected=function(e){return e.split(" ",2)[1]==="0"},t.parseMLine=function(e){const s=t.splitLines(e)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},t.parseOLine=function(e){const s=t.matchPrefix(e,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},t.isValidSDP=function(e){if(typeof e!="string"||e.length===0)return!1;const n=t.splitLines(e);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=t})(oc)),oc.exports}var kd=by();const Ws=Sy(kd),Ty=dp({__proto__:null,default:Ws},[kd]);function za(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const t=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new t(n),r=Ws.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new t(n)},i.RTCIceCandidate.prototype=t.prototype,cs(i,"icecandidate",e=>(e.candidate&&Object.defineProperty(e,"candidate",{value:new i.RTCIceCandidate(e.candidate),writable:"false"}),e))}function xl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||cs(i,"icecandidate",t=>{if(t.candidate){const e=Ws.parseCandidate(t.candidate.candidate);e.type==="relay"&&(t.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[e.priority>>24])}return t})}function Ga(i,t){if(!i.RTCPeerConnection||t.browser==="chrome"&&t.version>102||t.browser==="firefox"&&t.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const e=function(o){if(!o||!o.sdp)return!1;const c=Ws.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=Ws.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return t.browser==="firefox"&&(t.version<57?o===-1?c=16384:c=2147483637:t.version<60?c=t.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;t.browser==="firefox"&&t.version===57&&(l=65535);const h=Ws.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):t.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,t.browser==="chrome"&&t.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(e(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return a.apply(this,arguments)}}function Va(i,t){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||t.browser==="chrome"&&t.version>=149||t.browser==="firefox"&&t.version>60)return;function e(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return e(r,this),r},cs(i,"datachannel",s=>(e(s.channel,s.target),s))}function yl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const t=i.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(e=>{const n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Ml(i,t){if(!i.RTCPeerConnection||t.browser==="chrome"&&t.version>=71||t.browser==="safari"&&t._safariVersion>=13.1)return;const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return e.apply(this,arguments)}}function Ha(i,t){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const e=i.RTCPeerConnection.prototype.addIceCandidate;!e||e.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(t.browser==="chrome"&&t.version<78||t.browser==="firefox"&&t.version<68||t.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():e.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Wa(i,t){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const e=i.RTCPeerConnection.prototype.setLocalDescription;!e||e.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return e.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?e.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>e.apply(this,[a]))})}const Ey=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Ml,shimAddIceCandidateNullOrEmpty:Ha,shimConnectionState:yl,shimMaxMessageSize:Ga,shimParameterlessSetLocalDescription:Wa,shimRTCIceCandidate:za,shimRTCIceCandidateRelayProtocol:xl,shimSendThrowTypeError:Va},Symbol.toStringTag,{value:"Module"}));function Cy({window:i}={},t={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const e=th,n=yy(i),s={browserDetails:n,commonShim:Ey,extractVersion:Er,disableLog:vy,disableWarnings:xy,sdp:Ty};switch(n.browser){case"chrome":if(!Ju||!_l||!t.shimChrome)return e("Chrome shim is not included in this adapter release."),s;if(n.version===null)return e("Chrome shim can not determine version, not shimming."),s;e("adapter.js shimming chrome."),s.browserShim=Ju,Ha(i,n),Wa(i),ld(i,n),hd(i),_l(i,n),ud(i,n),md(i,n),fd(i),dd(i,n),gd(i,n),za(i),xl(i),yl(i),Ga(i,n),Va(i,n),Ml(i,n);break;case"firefox":if(!Zu||!vl||!t.shimFirefox)return e("Firefox shim is not included in this adapter release."),s;e("adapter.js shimming firefox."),s.browserShim=Zu,Ha(i,n),Wa(i),_d(i,n),vl(i,n),xd(i,n),vd(i),Sd(i),yd(i),Md(i),bd(i),Td(i,n),Ed(i,n),Cd(i,n),Ad(i,n),za(i),yl(i),Ga(i,n),Va(i,n);break;case"safari":if(!Ku||!t.shimSafari)return e("Safari shim is not included in this adapter release."),s;e("adapter.js shimming safari."),s.browserShim=Ku,Ha(i,n),Wa(i),Id(i),Nd(i),Pd(i),wd(i),Rd(i),Ud(i),Ld(i),Od(i),za(i),xl(i),Ga(i,n),Va(i,n),Ml(i,n);break;default:e("Unsupported browser!");break}return s}const tf=Cy({window:typeof window>"u"?void 0:window});function ls(i,t,e,n){Object.defineProperty(i,t,{get:e,set:n,enumerable:!0,configurable:!0})}class Fd{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=t=>{const e=[],n=t.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=t.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};e.push(l),a=o,r++}return this._dataCount++,e}}}function Ay(i){let t=0;for(const s of i)t+=s.byteLength;const e=new Uint8Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.byteLength;return e}const cc=tf.default||tf,xr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),t=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?t>=this.minChromeVersion:i==="firefox"?t>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&t>=this.minSafariVersion:!1:!1}getBrowser(){return cc.browserDetails.browser}getVersion(){return cc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),t=cc.browserDetails.version||0;if(i==="chrome"&&t<this.minChromeVersion)return!1;if(i==="firefox"&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let e,n=!1;try{e=new RTCPeerConnection,e.addTransceiver("audio"),n=!0}catch{}finally{e&&e.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},wy=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Bd=()=>Math.random().toString(36).slice(2),ef={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Ry extends Fd{noop(){}blobToArrayBuffer(t,e){const n=new FileReader;return n.onload=function(s){s.target&&e(s.target.result)},n.readAsArrayBuffer(t),n}binaryStringToArrayBuffer(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e.buffer}isSecure(){return location.protocol==="https:"}constructor(...t){super(...t),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ef,this.browser=xr.getBrowser(),this.browserVersion=xr.getVersion(),this.pack=rd,this.unpack=sd,this.supports=(function(){const e={browser:xr.isBrowserSupported(),webRTC:xr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let n;try{n=new RTCPeerConnection(ef),e.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!s.ordered;try{s.binaryType="blob",e.binaryBlob=!xr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return e})(),this.validateId=wy,this.randomToken=Bd}}const on=new Ry,Py="PeerJS: ";var nf;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(nf||(nf={}));class Ly{get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t}log(...t){this._logLevel>=3&&this._print(3,...t)}warn(...t){this._logLevel>=2&&this._print(2,...t)}error(...t){this._logLevel>=1&&this._print(1,...t)}setLogFunction(t){this._print=t}_print(t,...e){const n=[Py,...e];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);t>=3?console.log(...n):t>=2?console.warn("WARNING",...n):t>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Lt=new Ly,nh={},Dy=Object.prototype.hasOwnProperty,nn="~";function kr(){}Object.create&&(kr.prototype=Object.create(null),new kr().__proto__||(nn=!1));function Iy(i,t,e){this.fn=i,this.context=t,this.once=e||!1}function zd(i,t,e,n,s){if(typeof e!="function")throw new TypeError("The listener must be a function");var r=new Iy(e,n||i,s),a=nn?nn+t:t;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function Xa(i,t){--i._eventsCount===0?i._events=new kr:delete i._events[t]}function Ze(){this._events=new kr,this._eventsCount=0}Ze.prototype.eventNames=function(){var t=[],e,n;if(this._eventsCount===0)return t;for(n in e=this._events)Dy.call(e,n)&&t.push(nn?n.slice(1):n);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t};Ze.prototype.listeners=function(t){var e=nn?nn+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Ze.prototype.listenerCount=function(t){var e=nn?nn+t:t,n=this._events[e];return n?n.fn?1:n.length:0};Ze.prototype.emit=function(t,e,n,s,r,a){var o=nn?nn+t:t;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,s),!0;case 5:return c.fn.call(c.context,e,n,s,r),!0;case 6:return c.fn.call(c.context,e,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,d;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,s);break;default:if(!h)for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c[u].fn.apply(c[u].context,h)}}return!0};Ze.prototype.on=function(t,e,n){return zd(this,t,e,n,!1)};Ze.prototype.once=function(t,e,n){return zd(this,t,e,n,!0)};Ze.prototype.removeListener=function(t,e,n,s){var r=nn?nn+t:t;if(!this._events[r])return this;if(!e)return Xa(this,r),this;var a=this._events[r];if(a.fn)a.fn===e&&(!s||a.once)&&(!n||a.context===n)&&Xa(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==e||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Xa(this,r)}return this};Ze.prototype.removeAllListeners=function(t){var e;return t?(e=nn?nn+t:t,this._events[e]&&Xa(this,e)):(this._events=new kr,this._eventsCount=0),this};Ze.prototype.off=Ze.prototype.removeListener;Ze.prototype.addListener=Ze.prototype.on;Ze.prefixed=nn;Ze.EventEmitter=Ze;nh=Ze;var hs={};ls(hs,"ConnectionType",()=>Xn);ls(hs,"PeerErrorType",()=>we);ls(hs,"BaseConnectionErrorType",()=>Fr);ls(hs,"DataConnectionErrorType",()=>Br);ls(hs,"SerializationType",()=>Ks);ls(hs,"SocketEventType",()=>Wn);ls(hs,"ServerMessageType",()=>Fe);var Xn;(function(i){i.Data="data",i.Media="media"})(Xn||(Xn={}));var we;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(we||(we={}));var Fr;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})(Fr||(Fr={}));var Br;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(Br||(Br={}));var Ks;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(Ks||(Ks={}));var Wn;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})(Wn||(Wn={}));var Fe;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(Fe||(Fe={}));var ih={};ih=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class Uy extends nh.EventEmitter{constructor(t,e,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=t?"wss://":"ws://";this._baseUrl=o+e+":"+n+s+"peerjs?key="+r}start(t,e){this._id=t;const n=`${this._baseUrl}&id=${t}&token=${e}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ih.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Lt.log("Server message received:",r)}catch{Lt.log("Invalid server message",s.data);return}this.emit(Wn.Message,r)},this._socket.onclose=s=>{this._disconnected||(Lt.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Wn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Lt.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Lt.log("Cannot send heartbeat, because socket closed");return}const t=JSON.stringify({type:Fe.Heartbeat});this._socket.send(t),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const t=[...this._messagesQueue];this._messagesQueue=[];for(const e of t)this.send(e)}send(t){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(t);return}if(!t.type){this.emit(Wn.Error,"Invalid message");return}if(!this._wsOpen())return;const e=JSON.stringify(t);this._socket.send(e)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Gd{constructor(t){this.connection=t}startConnection(t){const e=this._startPeerConnection();if(this.connection.peerConnection=e,this.connection.type===Xn.Media&&t._stream&&this._addTracksToConnection(t._stream,e),t.originator){const n=this.connection,s={ordered:!!t.reliable},r=e.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",t.sdp)}_startPeerConnection(){Lt.log("Creating RTCPeerConnection.");const t=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(t),t}_setupListeners(t){const e=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Lt.log("Listening for ICE candidates."),t.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Lt.log(`Received ICE candidates for ${e}:`,a.candidate),r.socket.send({type:Fe.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:e}))},t.oniceconnectionstatechange=()=>{switch(t.iceConnectionState){case"failed":Lt.log("iceConnectionState is failed, closing connections to "+e),this.connection.emitError(Fr.NegotiationFailed,"Negotiation of connection to "+e+" failed."),this.connection.close();break;case"closed":Lt.log("iceConnectionState is closed, closing connections to "+e),this.connection.emitError(Fr.ConnectionClosed,"Connection to "+e+" closed."),this.connection.close();break;case"disconnected":Lt.log("iceConnectionState changed to disconnected on the connection with "+e);break;case"completed":t.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",t.iceConnectionState)},Lt.log("Listening for data channel"),t.ondatachannel=a=>{Lt.log("Received data channel");const o=a.channel;r.getConnection(e,n)._initializeDataChannel(o)},Lt.log("Listening for remote stream"),t.ontrack=a=>{Lt.log("Received remote stream");const o=a.streams[0],c=r.getConnection(e,n);if(c.type===Xn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Lt.log("Cleaning up PeerConnection to "+this.connection.peer);const t=this.connection.peerConnection;if(!t)return;this.connection.peerConnection=null,t.onicecandidate=t.oniceconnectionstatechange=t.ondatachannel=t.ontrack=()=>{};const e=t.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(e||n)&&t.close()}async _makeOffer(){const t=this.connection.peerConnection,e=this.connection.provider;try{const n=await t.createOffer(this.connection.options.constraints);Lt.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await t.setLocalDescription(n),Lt.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Xn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}e.socket.send({type:Fe.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(e.emitError(we.WebRTC,s),Lt.log("Failed to setLocalDescription, ",s))}}catch(n){e.emitError(we.WebRTC,n),Lt.log("Failed to createOffer, ",n)}}async _makeAnswer(){const t=this.connection.peerConnection,e=this.connection.provider;try{const n=await t.createAnswer();Lt.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await t.setLocalDescription(n),Lt.log("Set localDescription:",n,`for:${this.connection.peer}`),e.socket.send({type:Fe.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){e.emitError(we.WebRTC,s),Lt.log("Failed to setLocalDescription, ",s)}}catch(n){e.emitError(we.WebRTC,n),Lt.log("Failed to create answer, ",n)}}async handleSDP(t,e){e=new RTCSessionDescription(e);const n=this.connection.peerConnection,s=this.connection.provider;Lt.log("Setting remote description",e);const r=this;try{await n.setRemoteDescription(e),Lt.log(`Set remoteDescription:${t} for:${this.connection.peer}`),t==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(we.WebRTC,a),Lt.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(t){Lt.log("handleCandidate:",t);try{await this.connection.peerConnection.addIceCandidate(t),Lt.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){this.connection.provider.emitError(we.WebRTC,e),Lt.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(t,e){if(Lt.log(`add tracks from stream ${t.id} to peer connection`),!e.addTrack)return Lt.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");t.getTracks().forEach(n=>{e.addTrack(n,t)})}_addStreamToMediaConnection(t,e){Lt.log(`add stream ${t.id} to media connection ${e.connectionId}`),e.addStream(t)}}class Vd extends nh.EventEmitter{emitError(t,e){Lt.error("Error:",e),this.emit("error",new Ny(`${t}`,e))}}class Ny extends Error{constructor(t,e){typeof e=="string"?super(e):(super(),Object.assign(this,e)),this.type=t}}class Hd extends Vd{get open(){return this._open}constructor(t,e,n){super(),this.peer=t,this.provider=e,this.options=n,this._open=!1,this.metadata=n.metadata}}var Cl;const Lr=class Lr extends Hd{get type(){return Xn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(t,e,n){super(t,e,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Lr.ID_PREFIX+on.randomToken(),this._negotiator=new Gd(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(t){this.dataChannel=t,this.dataChannel.onopen=()=>{Lt.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Lt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(t){Lt.log("Receiving stream",t),this._remoteStream=t,super.emit("stream",t)}handleMessage(t){const e=t.type,n=t.payload;switch(t.type){case Fe.Answer:this._negotiator.handleSDP(e,n.sdp),this._open=!0;break;case Fe.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Lt.warn(`Unrecognized message type:${e} from peer:${this.peer}`);break}}answer(t,e={}){if(this._localStream){Lt.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=t,e&&e.sdpTransform&&(this.options.sdpTransform=e.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:t});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Cl=new WeakMap,or(Lr,Cl,Lr.ID_PREFIX="mc_");let no=Lr;class Oy{constructor(t){this._options=t}_buildRequest(t){const e=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${e}://${n}:${s}${r}${a}/${t}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ih.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const t=await this._buildRequest("id");if(t.status!==200)throw new Error(`Error. Status:${t.status}`);return t.text()}catch(t){Lt.error("Error retrieving ID",t);let e="";throw this._options.path==="/"&&this._options.host!==on.CLOUD_HOST&&(e=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+e)}}async listAllPeers(){try{const t=await this._buildRequest("peers");if(t.status!==200){if(t.status===401){let e="";throw this._options.host===on.CLOUD_HOST?e="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":e="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+e)}throw new Error(`Error. Status:${t.status}`)}return t.json()}catch(t){throw Lt.error("Error retrieving list peers",t),new Error("Could not get list peers from the server."+t)}}}var Al,wl;const ts=class ts extends Hd{get type(){return Xn.Data}constructor(t,e,n){super(t,e,n),this.connectionId=this.options.connectionId||ts.ID_PREFIX+Bd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Gd(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(t){this.dataChannel=t,this.dataChannel.onopen=()=>{Lt.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=e=>{Lt.log(`DC#${this.connectionId} dc onmessage:`,e.data)},this.dataChannel.onclose=()=>{Lt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(t){if(t?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(t,e=!1){if(!this.open){this.emitError(Br.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(t,e)}async handleMessage(t){const e=t.payload;switch(t.type){case Fe.Answer:await this._negotiator.handleSDP(t.type,e.sdp);break;case Fe.Candidate:await this._negotiator.handleCandidate(e.candidate);break;default:Lt.warn("Unrecognized message type:",t.type,"from peer:",this.peer);break}}};Al=new WeakMap,wl=new WeakMap,or(ts,Al,ts.ID_PREFIX="dc_"),or(ts,wl,ts.MAX_BUFFERED_AMOUNT=8388608);let io=ts;class sh extends io{get bufferSize(){return this._bufferSize}_initializeDataChannel(t){super._initializeDataChannel(t),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",e=>this._handleDataMessage(e))}_bufferedSend(t){(this._buffering||!this._trySend(t))&&(this._buffer.push(t),this._bufferSize=this._buffer.length)}_trySend(t){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>io.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(t)}catch(e){return Lt.error(`DC#:${this.connectionId} Error when sending:`,e),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const t=this._buffer[0];this._trySend(t)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(t){if(t?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...t){super(...t),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class lc extends sh{close(t){super.close(t),this._chunkedData={}}constructor(t,e,n){super(t,e,n),this.chunker=new Fd,this.serialization=Ks.Binary,this._chunkedData={}}_handleDataMessage({data:t}){const e=sd(t),n=e.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(e);return}this.emit("data",e)}_handleChunk(t){const e=t.__peerData,n=this._chunkedData[e]||{data:[],count:0,total:t.total};if(n.data[t.n]=new Uint8Array(t.data),n.count++,this._chunkedData[e]=n,n.total===n.count){delete this._chunkedData[e];const s=Ay(n.data);this._handleDataMessage({data:s})}}_send(t,e){const n=rd(t);if(n instanceof Promise)return this._send_blob(n);if(!e&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(t){const e=await t;if(e.byteLength>this.chunker.chunkedMTU){this._sendChunks(e);return}this._bufferedSend(e)}_sendChunks(t){const e=this.chunker.chunk(t);Lt.log(`DC#${this.connectionId} Try to send ${e.length} chunks...`);for(const n of e)this.send(n,!0)}}class ky extends sh{_handleDataMessage({data:t}){super.emit("data",t)}_send(t,e){this._bufferedSend(t)}constructor(...t){super(...t),this.serialization=Ks.None}}class Fy extends sh{_handleDataMessage({data:t}){const e=this.parse(this.decoder.decode(t)),n=e.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",e)}_send(t,e){const n=this.encoder.encode(this.stringify(t));if(n.byteLength>=on.chunkedMTU){this.emitError(Br.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...t){super(...t),this.serialization=Ks.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Rl;const Dr=class Dr extends Vd{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const t=Object.create(null);for(const[e,n]of this._connections)t[e]=n;return t}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(t,e){super(),this._serializers={raw:ky,json:Fy,binary:lc,"binary-utf8":lc,default:lc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(t&&t.constructor==Object?e=t:t&&(n=t.toString()),e={debug:0,host:on.CLOUD_HOST,port:on.CLOUD_PORT,path:"/",key:Dr.DEFAULT_KEY,token:on.randomToken(),config:on.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...e},this._options=e,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==on.CLOUD_HOST?this._options.secure=on.isSecure():this._options.host==on.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Lt.setLogFunction(this._options.logFunction),Lt.logLevel=this._options.debug||0,this._api=new Oy(e),this._socket=this._createServerConnection(),!on.supports.audioVideo&&!on.supports.data){this._delayedAbort(we.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!on.validateId(n)){this._delayedAbort(we.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(we.ServerError,s))}_createServerConnection(){const t=new Uy(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(Wn.Message,e=>{this._handleMessage(e)}),t.on(Wn.Error,e=>{this._abort(we.SocketError,e)}),t.on(Wn.Disconnected,()=>{this.disconnected||(this.emitError(we.Network,"Lost connection to server."),this.disconnect())}),t.on(Wn.Close,()=>{this.disconnected||this._abort(we.SocketClosed,"Underlying socket is already closed.")}),t}_initialize(t){this._id=t,this.socket.start(t,this._options.token)}_handleMessage(t){const e=t.type,n=t.payload,s=t.src;switch(e){case Fe.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Fe.Error:this._abort(we.ServerError,n.msg);break;case Fe.IdTaken:this._abort(we.UnavailableID,`ID "${this.id}" is taken`);break;case Fe.InvalidKey:this._abort(we.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Fe.Leave:Lt.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Fe.Expire:this.emitError(we.PeerUnavailable,`Could not connect to peer ${s}`);break;case Fe.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),Lt.warn(`Offer received for existing Connection ID:${r}`)),n.type===Xn.Media){const c=new no(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Xn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{Lt.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){Lt.warn(`You received a malformed message from ${s} of type ${e}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(t):r?this._storeMessage(r,t):Lt.warn("You received an unrecognized message:",t);break}}}_storeMessage(t,e){this._lostMessages.has(t)||this._lostMessages.set(t,[]),this._lostMessages.get(t).push(e)}_getMessages(t){const e=this._lostMessages.get(t);return e?(this._lostMessages.delete(t),e):[]}connect(t,e={}){if(e={serialization:"default",...e},this.disconnected){Lt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(we.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[e.serialization](t,this,e);return this._addConnection(t,n),n}call(t,e,n={}){if(this.disconnected){Lt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(we.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!e){Lt.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new no(t,this,{...n,_stream:e});return this._addConnection(t,s),s}_addConnection(t,e){Lt.log(`add connection ${e.type}:${e.connectionId} to peerId:${t}`),this._connections.has(t)||this._connections.set(t,[]),this._connections.get(t).push(e)}_removeConnection(t){const e=this._connections.get(t.peer);if(e){const n=e.indexOf(t);n!==-1&&e.splice(n,1)}this._lostMessages.delete(t.connectionId)}getConnection(t,e){const n=this._connections.get(t);if(!n)return null;for(const s of n)if(s.connectionId===e)return s;return null}_delayedAbort(t,e){setTimeout(()=>{this._abort(t,e)},0)}_abort(t,e){Lt.error("Aborting!"),this.emitError(t,e),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Lt.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const t of this._connections.keys())this._cleanupPeer(t),this._connections.delete(t);this.socket.removeAllListeners()}_cleanupPeer(t){const e=this._connections.get(t);if(e)for(const n of e)n.close()}disconnect(){if(this.disconnected)return;const t=this.id;Lt.log(`Disconnect peer with ID:${t}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=t,this._id=null,this.emit("disconnected",t)}reconnect(){if(this.disconnected&&!this.destroyed)Lt.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Lt.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(t=e=>{}){this._api.listAllPeers().then(e=>t(e)).catch(e=>this._abort(we.ServerError,e))}};Rl=new WeakMap,or(Dr,Rl,Dr.DEFAULT_KEY="peerjs");let Sl=Dr;var sf=Sl;const rf="empinabr-v1-",af={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443",username:"openrelayproject",credential:"openrelayproject"}]},By=10,zy=i=>new Promise(t=>setTimeout(t,i));class Gy{constructor(){this.peer=null,this.isHost=!1,this.conns=new Map,this.hostConn=null,this.players=new Map,this.room=null,this.h={},this.profile=null,this.active=!1,this.sendT=0,this.myState=null}on(t,e){this.h[t]=e}emit(t,...e){this.h[t]&&this.h[t](...e)}get id(){return this.peer?this.peer.id:null}newPeer(t){return new Promise(e=>{const n=t?new sf(t,{config:af,debug:0}):new sf({config:af,debug:0});let s=!1;const r=a=>{s||(s=!0,e(a))};n.on("open",()=>r({ok:!0,p:n})),n.on("error",a=>{if(!s){r({ok:!1,err:a.type,p:n});try{n.destroy()}catch{}}}),setTimeout(()=>{if(!s){r({ok:!1,err:"timeout",p:n});try{n.destroy()}catch{}}},1e4)})}async joinPublic(t){this.profile=t;for(let e=1;e<=5;e++){const n="PUBLICA"+e;this.emit("status",`Procurando sala pública ${e}...`);const s=await this.tryJoin(n);if(s==="ok")return!0;if(s!=="full"){if(s==="none"&&(await this.host(n)||await this.tryJoin(n)==="ok"))return!0;if(s==="error")break}}return this.emit("status","Não consegui conectar. Verifique a internet."),!1}async createRoom(t){this.profile=t;const e="ABCDEFGHJKMNPQRSTUVWXYZ23456789";for(let n=0;n<4;n++){const s=Array.from({length:4},()=>e[Math.floor(Math.random()*e.length)]).join("");if(this.emit("status","Criando sala..."),await this.host(s))return s}return this.emit("status","Falha ao criar sala."),null}async joinCode(t,e){this.profile=e,this.emit("status",`Entrando na sala ${t}...`);const n=await this.tryJoin(t.toUpperCase());return n==="ok"?!0:(this.emit("status",n==="full"?"Sala cheia.":n==="none"?"Sala não encontrada.":"Erro de conexão."),!1)}async host(t){this.close(!0);const e=await this.newPeer(rf+t);return e.ok?(this.peer=e.p,this.isHost=!0,this.room=t,this.active=!0,this.players.clear(),this.peer.on("connection",n=>this.onClient(n)),this.peer.on("disconnected",()=>{try{this.peer.reconnect()}catch{}}),this.emit("status",`Sala ${t} online!`),this.emit("connected",{room:t,host:!0}),!0):!1}onClient(t){t.on("data",n=>{if(!(!n||typeof n!="object")){if(n.t==="hello"){if(this.players.size+1>=By){t.send({t:"full"}),setTimeout(()=>t.close(),300);return}this.conns.set(t.peer,t);const s={id:t.peer,name:String(n.p.name||"Piloto").slice(0,16),bike:n.p.bike,colors:n.p.colors||{},best:0,s:null};this.players.set(t.peer,s),t.send({t:"welcome",id:t.peer,host:this.id,players:[this.meInfo(),...[...this.players.values()].filter(r=>r.id!==t.peer).map(hc)]}),this.broadcast({t:"join",p:hc(s)},t.peer),this.emit("join",s)}else if(n.t==="st"){const s=this.players.get(t.peer);s&&(s.s=n.s,s.best=n.b||s.best,this.emit("state",t.peer,n.s))}else if(n.t==="chat"||n.t==="ev"){const s=this.players.get(t.peer);if(!s)return;const r={t:n.t,id:t.peer,name:s.name,msg:String(n.msg).slice(0,80)};this.broadcast(r,t.peer),this.emit(n.t,r)}else if(n.t==="prof"){const s=this.players.get(t.peer);if(!s)return;Object.assign(s,{name:String(n.p.name||s.name).slice(0,16),bike:n.p.bike,colors:n.p.colors||{}}),this.broadcast({t:"prof",p:hc(s)},t.peer),this.emit("prof",s)}}});const e=()=>{if(!this.players.has(t.peer))return;const n=this.players.get(t.peer);this.players.delete(t.peer),this.conns.delete(t.peer),this.broadcast({t:"leave",id:t.peer}),this.emit("leave",n)};t.on("close",e),t.on("error",e)}meInfo(){return{id:this.id,name:this.profile.name,bike:this.profile.bike,colors:this.profile.colors,best:this.profile.best||0}}broadcast(t,e){for(const[n,s]of this.conns)if(n!==e&&s.open)try{s.send(t)}catch{}}async tryJoin(t){this.close(!0);const e=await this.newPeer(null);return e.ok?(this.peer=e.p,this.peer.on("disconnected",()=>{try{this.peer.reconnect()}catch{}}),new Promise(n=>{let s=!1;const r=o=>{s||(s=!0,o!=="ok"&&this.close(!0),n(o))};this.peer.on("error",o=>{o.type==="peer-unavailable"?r("none"):this.active||r("error")});const a=this.peer.connect(rf+t,{reliable:!0,serialization:"json"});a.on("open",()=>a.send({t:"hello",p:this.profile})),a.on("data",o=>{if(!(!o||typeof o!="object")){if(o.t==="full")return r("full");if(o.t==="welcome"){this.hostConn=a,this.isHost=!1,this.room=t,this.active=!0,this.players.clear();for(const c of o.players)c.id!==this.id&&this.players.set(c.id,{...c,s:null});this.emit("connected",{room:t,host:!1});for(const c of this.players.values())this.emit("join",c);r("ok");return}this.onHostMsg(o)}}),a.on("close",()=>{s&&this.active&&this.hostConn===a?this.hostLost():r("none")}),setTimeout(()=>r("none"),9e3)})):"error"}onHostMsg(t){if(t.t==="sts")for(const[e,n,s]of t.l){if(e===this.id)continue;const r=this.players.get(e);r&&(r.s=n,r.best=s||r.best,this.emit("state",e,n))}else if(t.t==="join"){if(t.p.id===this.id)return;const e={...t.p,s:null};this.players.set(e.id,e),this.emit("join",e)}else if(t.t==="leave"){const e=this.players.get(t.id);e&&(this.players.delete(t.id),this.emit("leave",e))}else if(t.t==="chat"||t.t==="ev")this.emit(t.t,t);else if(t.t==="prof"){const e=this.players.get(t.p.id);e&&(Object.assign(e,t.p),this.emit("prof",e))}}async hostLost(){const t=this.room;for(const n of this.players.values())this.emit("leave",n);this.players.clear(),this.active=!1,this.emit("status","Dono da sala saiu. Reconectando..."),this.emit("reconnecting"),await zy(300+Math.random()*1500);let e=await this.tryJoin(t);e!=="ok"&&(await this.host(t)||(e=await this.tryJoin(t),e!=="ok"&&(this.emit("status","Conexão perdida."),this.emit("lost"))))}tick(t,e,n){if(!this.active||!this.peer||(this.sendT+=t,this.sendT<1/12))return;this.sendT=0;const s=e.map(r=>Math.round(r*100)/100);if(this.isHost){const r=[[this.id,s,n]];for(const a of this.players.values())a.s&&r.push([a.id,a.s,a.best]);this.broadcast({t:"sts",l:r})}else if(this.hostConn&&this.hostConn.open)try{this.hostConn.send({t:"st",s,b:n})}catch{}}send(t,e){if(!this.active)return;const n={t,msg:e};this.isHost?this.broadcast({...n,id:this.id,name:this.profile.name}):this.hostConn&&this.hostConn.open&&this.hostConn.send(n)}updateProfile(t){this.profile=t,this.active&&(this.isHost?this.broadcast({t:"prof",p:this.meInfo()}):this.hostConn&&this.hostConn.open&&this.hostConn.send({t:"prof",p:t}))}close(t=!1){this.active=!1;for(const e of this.conns.values())try{e.close()}catch{}if(this.conns.clear(),this.hostConn){const e=this.hostConn;this.hostConn=null;try{e.close()}catch{}}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}this.isHost=!1,t||(this.players.clear(),this.room=null)}}function hc(i){return{id:i.id,name:i.name,bike:i.bike,colors:i.colors,best:i.best||0}}const yr=i=>440*Math.pow(2,(i-69)/12),of={funk:{name:"Rádio Baile Funk",bpm:[128,132],names:["Baile da Quebrada","Tamborzão do Morro","Grau no Asfalto","Mandelão 150","Rolê de Domingo","Beat da Favela"]},pagodao:{name:"Rádio Pagodão Baiano",bpm:[136,142],names:["Swing da Praia","Pagodão do Grau","Timbau na Ladeira","Arrocha no Rolê","Batidão de Salvador","Paredão do Verão"]}},uc=["funk","pagodao","off"];class Vy{constructor(t){this.audio=t,this.station="off",this.vol=.35,this.timer=null,this.trackN=Math.floor(Math.random()*100)}get label(){return this.station==="off"?"Rádio desligada":of[this.station].name}setVolume(t){this.vol=t,this.out&&this.out.gain.setTargetAtTime(t,this.audio.ctx.currentTime,.3)}setStation(t){if(t===this.station&&this.timer||(this.station=t,this.stop(),t==="off"))return;const e=this.audio;if(e.unlock(),!e.ctx)return;const n=e.ctx;if(!this.out){this.out=n.createGain(),this.out.gain.value=this.vol;const s=n.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,this.out.connect(s),s.connect(e.master),this.verb=n.createConvolver();const r=n.sampleRate*.9,a=n.createBuffer(2,r,n.sampleRate);for(let o=0;o<2;o++){const c=a.getChannelData(o);for(let l=0;l<r;l++)c[l]=(Math.random()*2-1)*Math.pow(1-l/r,3)}this.verb.buffer=a,this.verbG=n.createGain(),this.verbG.gain.value=.18,this.verb.connect(this.verbG),this.verbG.connect(this.out)}this.newTrack(),this.next=n.currentTime+.1,this.timer=setInterval(()=>this.schedule(),25)}stop(){this.timer&&clearInterval(this.timer),this.timer=null}cycle(){const t=uc.indexOf(this.station);return this.setStation(uc[(t+1)%uc.length]),this.station}newTrack(){const t=of[this.station];this.trackN++;const e=Ki(this.trackN*7919+(this.station==="funk"?1:2));this.R=e,this.bpm=t.bpm[0]+Math.floor(e()*(t.bpm[1]-t.bpm[0]+1)),this.step16=60/this.bpm/4,this.key=45+Math.floor(e()*7),this.minor=this.station==="funk"?!0:e()<.3;const n=this.minor?[[0,3,7],[-4,0,3],[-7,-3,0],[-2,2,5]]:[[0,4,7],[-5,-1,2],[-3,0,4],[-7,-3,0]];this.prog=e()<.5?n:[n[0],n[2],n[1],n[3]];const s=this.minor?[0,3,5,7,10,12,15]:[0,2,4,7,9,12,14];this.motif=Array.from({length:16},()=>e()<.42?s[Math.floor(e()*s.length)]:null),this.motif2=this.motif.map(r=>r!=null&&e()<.4?s[Math.floor(e()*s.length)]:r),this.bar=0,this.step=0,this.trackName=`${t.names[this.trackN%t.names.length]} ${1+this.trackN%9}`,this.onTrack&&this.onTrack(this.trackName,t.name)}schedule(){const t=this.audio.ctx;if(!(!t||t.state!=="running"))for(;this.next<t.currentTime+.12;)this.play(this.step,this.bar,this.next),this.next+=this.step16*(this.station==="pagodao"&&this.step%2?.92:this.station==="pagodao"?1.08:1),this.step++,this.step===16&&(this.step=0,this.bar++,this.bar>=48&&this.newTrack())}env(t,e,n,s,r=.002){const a=this.audio.ctx,o=a.createGain();return o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(e,t+r),o.gain.exponentialRampToValueAtTime(1e-4,t+n),o.connect(s||this.out),o}osc(t,e,n,s,r,a,o,c=.08){const l=this.audio.ctx,h=l.createOscillator();h.type=t,h.frequency.setValueAtTime(e,s),n&&h.frequency.exponentialRampToValueAtTime(n,s+c),h.connect(this.env(s,a,r,o)),h.start(s),h.stop(s+r+.05)}noise(t,e,n,s,r,a=1,o){const c=this.audio.ctx,l=c.createBufferSource();l.buffer=this.audio.noise;const h=c.createBiquadFilter();h.type=s,h.frequency.value=r,h.Q.value=a,l.connect(h),h.connect(this.env(t,n,e,o)),l.start(t,Math.random()*.5),l.stop(t+e+.05)}kick(t,e=.9){this.osc("sine",160,42,t,.35,e,null,.07)}bass808(t,e,n=.5,s=.55){this.osc("sine",yr(e+12)*1.6,yr(e),t,n,s,null,.05),this.osc("triangle",yr(e),0,t,n*.6,s*.25)}clap(t,e=.45){for(const n of[0,.011,.022])this.noise(t+n,.12,e,"bandpass",1400,1.2);this.noise(t+.03,.25,e*.4,"bandpass",1200,1,this.verb)}hat(t,e=.12,n=!1){this.noise(t,n?.18:.04,e,"highpass",8e3,.7)}tom(t,e=210,n=.5){this.osc("sine",e*1.5,e,t,.22,n,null,.04),this.noise(t,.03,n*.3,"bandpass",2500,2)}surdo(t,e=.7){this.osc("sine",110,58,t,.6,e,null,.12)}timbau(t,e=!0,n=.4){this.osc("sine",e?520:330,e?380:240,t,.14,n,null,.03),this.noise(t,.05,n*.5,"bandpass",e?3200:1800,3,this.verb)}agogo(t,e){this.osc("square",e?920:690,0,t,.12,.07),this.osc("sine",e?1840:1380,0,t,.08,.05)}pluck(t,e,n=.12,s=.22){const r=this.audio.ctx,a=r.createOscillator(),o=r.createBiquadFilter();a.type="sawtooth",a.frequency.value=yr(e),o.type="lowpass",o.frequency.setValueAtTime(3200,t),o.frequency.exponentialRampToValueAtTime(500,t+s),a.connect(o),o.connect(this.env(t,n,s)),a.start(t),a.stop(t+s+.05)}lead(t,e,n,s=.08){const r=this.audio.ctx,a=r.createOscillator(),o=r.createBiquadFilter();a.type="square",a.frequency.value=yr(e),o.type="lowpass",o.frequency.value=1800,a.connect(o),o.connect(this.env(t,s,n,null,.01)),a.start(t),a.stop(t+n+.05)}siren(t){this.osc("sawtooth",600,1400,t,.9,.05,this.verb,.8)}play(t,e,n){const s=this.prog[Math.floor(e/2)%4],r=Math.floor(e/8)%6,a=this.key;if(this.station==="funk"){const o=r===4;!o&&[0,3,6,10].includes(t)&&this.kick(n,t===0?1:.8),[0,3,6,8,11,14].includes(t)&&this.tom(n,t%2?180:230,o?.25:.42),(t===4||t===12)&&this.clap(n),r>0&&t%2===0&&this.hat(n,t%4===2?.14:.07),!o&&r>0&&[0,3,6,10].includes(t)&&this.bass808(n,a-12+s[0],t===6?.35:.5);const c=(e%4===3?this.motif2:this.motif)[t];r>=2&&r!==4&&c!=null&&this.lead(n,a+24+c,this.step16*1.6),r===3&&t===0&&e%4===0&&this.siren(n)}else{const o=r===4;if(!o&&(t===0||t===8)&&this.surdo(n,.75),!o&&(t===7||t===15)&&this.surdo(n,.35),[0,2,3,6,8,10,11,14].includes(t)&&this.timbau(n,t%4!==0,o?.25:.38),[0,3,6,10,12].includes(t)&&this.agogo(n,t===0||t===10),(t===4||t===12)&&this.clap(n,.35),r>0&&t%2===1&&this.hat(n,.06),r>0&&!o&&[0,7,8,12].includes(t)&&this.bass808(n,a-12+s[0]+(t===7?7:0),.3,.45),r>0&&[2,6,10,14].includes(t))for(const l of s)this.pluck(n+Math.random()*.012,a+12+l,.06);const c=(e%4===3?this.motif2:this.motif)[t];r>=2&&r!==4&&c!=null&&this.pluck(n,a+24+c,.1,.3)}}}const it=i=>document.querySelector(i),as=i=>[...document.querySelectorAll(i)],We=i=>Math.round(i).toLocaleString("pt-BR"),Wd="empinabr-save-v1",bl=["cb300f","pop27","r15","pcx25","evolt"];function Hy(){let i=null;try{i=JSON.parse(localStorage.getItem(Wd))}catch{}const t={name:"Piloto"+Math.floor(100+Math.random()*900),money:2e3,owned:[...bl],bike:"cb300f",colors:{},up:{},helmet:"#111111",jacket:"#1f2937",best:0,total:0,missions:{},settings:{quality:"auto",time:"tarde",steer:"touch",easy:!1,cambio:"manual",sound:!0,fps:!1,cam:0,radio:"funk",radioGame:!0,v:2}};return i?((!i.settings||i.settings.v!==2)&&(i.settings={...i.settings||{},easy:!1,cambio:"manual",v:2}),{...t,...i,settings:{...t.settings,...i.settings||{}},owned:[...new Set([...bl,...i.owned||[]])]}):t}const dt=Hy();let fc=0;const $n=()=>{try{localStorage.setItem(Wd,JSON.stringify(dt))}catch{}},zr=i=>({paint:dt.colors[i]&&dt.colors[i].paint||$r(i).color,rim:dt.colors[i]&&dt.colors[i].rim||"#1a1a1a",helmet:dt.helmet,jacket:dt.jacket}),Gr=i=>dt.up[i]||{motor:0,grau:0,freio:0},Xd=it("#c"),ze=new dx({canvas:Xd,antialias:!0,powerPreference:"high-performance",stencil:!1});ze.toneMapping=pf;ze.toneMappingExposure=1;ze.outputColorSpace=Ve;ze.shadowMap.type=Ll;const rh={baixo:{dpr:1,px:75e4,fog:230,shadows:!1,shadowSize:0,bots:2,cars:10},medio:{dpr:1.5,px:135e4,fog:360,shadows:!0,shadowSize:1024,bots:3,cars:16},alto:{dpr:2,px:37e5,fog:520,shadows:!0,shadowSize:2048,bots:5,cars:20}},$d=(()=>{try{const i=ze.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");return String(t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER))}catch{return""}})();function qd(){const i=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4,e=$d.toLowerCase();return i<=2||t<=4||/mali-(g3|g5[12]|t)|adreno[^0-9]*(3\d\d|4\d\d|50\d|51\d)\b|powervr|swiftshader|llvmpipe/.test(e)?"baixo":/nvidia|geforce|rtx|gtx|radeon rx|apple m\d|adreno[^0-9]*7\d\d/.test(e)?"alto":"medio"}let ri=1,cf=0,xn=dt.settings.quality==="auto"?qd():dt.settings.quality,cn=rh[xn];const Rn=new uo,Be=new en(62,1,.3,2400),jd=new rl(ze),vn=new uo;vn.background=new rt("#101219");vn.environment=jd.fromScene(new ey,.04).texture;vn.fog=new ho("#101219",8,20);const Rr=new en(40,1,.1,100);{const i=new Qt(new jl(3.2,48),new Hn({color:"#23262f",roughness:.35,metalness:.3}));i.rotation.x=-Math.PI/2,vn.add(i);const t=new Qt(new Kl(3.2,3.3,64),new Bn({color:"#ffd400"}));t.rotation.x=-Math.PI/2,t.position.y=.002,vn.add(t);const e=new Qt(new Pi(30,12),new Hn({color:"#191c24",roughness:.9}));e.position.set(0,6,-6),vn.add(e),vn.add(new ed("#ffffff","#30343f",1.2));const n=new Ba("#ffffff",2.4);n.position.set(3,5,4),vn.add(n);const s=new Ba("#ffd400",1.4);s.position.set(-4,2,-3),vn.add(s);const r=new Ba("#5ab0ff",1);r.position.set(4,1.5,-4),vn.add(r)}let le;const be=new dy,Vr=new fy,ie=new Gy,wi=new Vy(be);wi.onTrack=(i,t)=>{it("#rStation").textContent=t,it("#rTrack").textContent="♪ "+i,ge==="play"&&Ii(`📻 <b>${t}</b> · ${i}`)};function sr(){dt.settings.radio!=="off"&&(wi.setStation(dt.settings.radio),wi.setVolume(.38))}function ah(){dt.settings.radio!=="off"&&dt.settings.radioGame?(wi.setStation(dt.settings.radio),wi.setVolume(.2)):wi.setStation("off")}function oh(){be.unlock();const i=wi.cycle();dt.settings.radio=i,$n(),ge==="play"?ah():sr(),i==="off"&&(it("#rStation").textContent="Rádio desligada",it("#rTrack").textContent="Toque para ligar"),us(wi.label)}let La=null;function Wy(){const i=new uo;i.add(le.sky.clone());const t=jd.fromScene(i,.02,.1,2500);La&&La.dispose(),La=t.texture,Rn.environment=La}let K,Re,ii=null;const Xy=new Pi(1,1).rotateX(-Math.PI/2);function ch(i){const t=new Qt(Xy,le.matBlob);t.scale.set(1,1,i.m.L+.9),t.position.set(0,.03,i.m.L/2),t.renderOrder=1,i.root.add(t),i.blob=t}function Yd(){const i=$r(dt.bike);Re&&Re.dispose(),Re=new qr(i,zr(i.id),cn.shadows),ch(Re),Rn.add(Re.root),K?K.setSpec(i,Gr(i.id)):K=new id(i,Gr(i.id),dt.settings.easy),K.easy=dt.settings.easy,Jd(),it("#clutch").innerHTML=i.electric?"BOOST":i.type==="scooter"?"SEGURA<br/>FREIO":"EMBR.",K.auto=dt.settings.cambio==="auto",document.body.classList.toggle("nogears",K.auto||!K.nG);const t=e=>`${(10+45*Math.cos(e)).toFixed(1)} ${(55-45*Math.sin(e)).toFixed(1)}`;it("#zone").setAttribute("d",`M${t(i.bp-.17)} A45 45 0 0 0 ${t(i.bp+.17)}`)}function Jd(){ii&&(ii.removeFromParent(),ii.target.removeFromParent(),ii=null),!(le.timeName!=="noite"||!Re)&&(ii=new Zx("#fff3d6",120,70,.55,.45,1.2),ii.position.set(0,1,Re.m.L+.2),ii.target.position.set(0,0,Re.m.L+14),Re.inner.add(ii,ii.target))}const Hr={x:170,z:240+3.6,yaw:Math.PI/2};let so={...Hr},dc=0;function lh(i=Hr){const t=ie.active?(Math.random()-.5)*30:0;K.reset(i.x+t,i.z,i.yaw),K.y=le.groundHeight(K.x,K.z),Re&&(Re.riderRoot.position.set(0,0,0),Re.riderRoot.rotation.set(0,0,0)),ao=!0}const lf=["Zé do Grau","Mc Corte","Vitinho","Jow","Neguinho RJ","Dudu 150","Lari Moto","Kaique"];class $y{constructor(t){const e=Ki(1e3+t*77);this.spec=ln[(t*3+1)%ln.length],this.colors={paint:fl[Math.floor(e()*fl.length)],rim:dl[Math.floor(e()*dl.length)],helmet:pl[Math.floor(e()*pl.length)],jacket:ml[Math.floor(e()*ml.length)]},this.vis=new qr(this.spec,this.colors,!1),ch(this.vis),this.name=lf[t%lf.length],this.tag=Zd(this.name,"#9be15d"),this.vis.root.add(this.tag),Rn.add(this.vis.root),this.R=e,this.ni=1+Math.floor(e()*6),this.nj=1+Math.floor(e()*6),this.x=this.ni*ve,this.z=this.nj*ve,this.dir=[1,0],this.pick(),this.yaw=Math.atan2(this.dir[0],this.dir[1]),this.v=0,this.vT=11+e()*5,this.pitch=0,this.wT=2+e()*4,this.wOn=!1,this.wheel=0,this.lean=0}pick(){const t=[[1,0],[-1,0],[0,1],[0,-1]].filter(([e,n])=>{const s=this.ni+e,r=this.nj+n;return s>=0&&s<=7&&r>=0&&r<=7&&!(e===-this.dir[0]&&n===-this.dir[1])});this.dir=t[Math.floor(this.R()*t.length)],this.ni+=this.dir[0],this.nj+=this.dir[1]}update(t){const e=this.dir[0],n=this.dir[1],s=this.ni*ve-n*3.6,r=this.nj*ve+e*3.6,a=s-this.x,o=r-this.z,c=Math.hypot(a,o);c<4&&this.pick();let h=Math.atan2(a,o)-this.yaw;h=Math.atan2(Math.sin(h),Math.cos(h));const u=re(h,-1,1)*Math.min(1,t*3);this.yaw+=u,this.lean=Nn(this.lean,re(h*1.2,-.5,.5),5,t);const f=Math.abs(h)>.4||c<14?.55:1;this.v=Nn(this.v,this.vT*f,1.5,t),this.x+=Math.sin(this.yaw)*this.v*t,this.z+=Math.cos(this.yaw)*this.v*t,this.wheel+=this.v*t,this.wT-=t,this.wT<0&&(this.wOn=!this.wOn,this.wT=this.wOn?3+this.R()*6:2+this.R()*4);const d=this.wOn&&f===1?this.spec.bp*(.75+.12*Math.sin(le.t*2.3+this.ni)):0;this.pitch=Nn(this.pitch,d,this.wOn?2.2:4,t),this.vis.apply({x:this.x,y:0,z:this.z,yaw:this.yaw,pitch:this.pitch,lean:this.lean,steer:-h*.3,wheel:this.wheel})}dispose(){this.vis.dispose()}}let Qi=[];function qy(i){for(;Qi.length>i;)Qi.pop().dispose();for(;Qi.length<i;)Qi.push(new $y(Qi.length))}function Zd(i,t="#ffd400"){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.font="bold 30px system-ui, sans-serif";const s=Math.min(250,n.measureText(i).width+28);n.fillStyle="rgba(10,12,18,0.7)",n.beginPath(),n.roundRect((256-s)/2,8,s,46,14),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(i,128,32);const r=new fo(e);r.colorSpace=Ve;const a=new mx(new Wf({map:r,depthWrite:!1,fog:!1}));return a.scale.set(2.4,.6,1),a.position.set(0,2.45,.5),a.renderOrder=5,a}const Ln=new Map;function Kd(i){Ln.has(i.id)&&hh(i.id);const t=$r(i.bike),e=new qr(t,i.colors||{},!1);ch(e);const n=Zd(i.name,"#ffd400");e.root.add(n),e.root.visible=!1,Rn.add(e.root),Ln.set(i.id,{p:i,vis:e,cur:null,tgt:null,crashT:0,bike:i.bike}),Yr()}function hh(i){const t=Ln.get(i);t&&(t.vis.dispose(),Ln.delete(i),Yr())}function jy(i){for(const t of Ln.values()){const e=t.tgt;if(!e)continue;t.cur||(t.cur=e.slice(),t.vis.root.visible=!0);const n=t.cur;e[0]+=Math.sin(e[3])*e[8]*i,e[2]+=Math.cos(e[3])*e[8]*i,e[7]+=e[8]*i;const s=1-Math.exp(-12*i);if(Math.hypot(e[0]-n[0],e[2]-n[2])>25)for(let a=0;a<n.length;a++)n[a]=e[a];for(const a of[0,1,2,4,5,6,7])n[a]+=(e[a]-n[a])*s;let r=e[3]-n[3];r=Math.atan2(Math.sin(r),Math.cos(r)),n[3]+=r*s,t.vis.apply({x:n[0],y:n[1],z:n[2],yaw:n[3],pitch:n[4],lean:n[5],steer:n[6],wheel:n[7],trick:e[10]||0,tb:t.tb=re((t.tb||0)+(e[10]?i:-i)/.35,0,1)}),e[11]&&Math.random()<.6&&ip(n[0],n[1],n[2],n[3],2),e[9]?(t.crashT+=i,Qd(t.vis,t.crashT,8)):t.crashT&&(t.crashT=0,t.vis.riderRoot.position.set(0,0,0),t.vis.riderRoot.rotation.set(0,0,0))}}function Qd(i,t,e){i.riderRoot.position.set(0,Math.max(-.75,2*t-6*t*t),Math.min(e*.3,e*t*.6)),i.riderRoot.rotation.x=Math.min(1.3,t*3)}ie.on("status",i=>{it("#onStatus").textContent=i});ie.on("connected",({room:i,host:t})=>{it("#onStatus").textContent=`Conectado na sala ${i}${t?" (você é o dono)":""}`,Ii(`🌐 Online na sala <b>${i}</b>`),document.body.classList.add("online"),Ae.online=!0,uh(),Yr()});ie.on("join",i=>{Kd(i),Ii(`➕ <b>${mn(i.name)}</b> entrou`)});ie.on("leave",i=>{hh(i.id),Ii(`➖ <b>${mn(i.name)}</b> saiu`)});ie.on("state",(i,t)=>{const e=Ln.get(i);e&&(e.tgt=t.slice())});ie.on("prof",i=>{const t=Ln.get(i.id);t&&(t.p=i,Kd(i))});ie.on("chat",i=>{Ii(`💬 <b>${mn(i.name)}:</b> ${mn(i.msg)}`)});ie.on("ev",i=>{Ii(`🔥 <b>${mn(i.name)}</b> ${mn(i.msg)}`)});ie.on("lost",()=>{_o(),us("Conexão perdida")});const mn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function jr(){return{name:dt.name,bike:dt.bike,colors:zr(dt.bike),best:dt.best}}function _o(){ie.close();for(const i of[...Ln.keys()])hh(i);document.body.classList.remove("online"),Yr()}function Yr(){const i=it("#players");if(!ie.active){i.innerHTML="";return}const t=[`<div class="me">${mn(dt.name)} <i>${We(dt.best)}</i></div>`];for(const e of Ln.values())t.push(`<div>${mn(e.p.name)} <i>${We(e.p.best||0)}</i></div>`);i.innerHTML=`<div class="room">Sala ${mn(ie.room||"")} · ${Ln.size+1} online</div>`+t.join("")}const Ae={grau:0,corte:0,ponto:0,air:0,flips:0,wland:!1,speed:0,combo:0,online:!1},tp=[{id:"g20",t:"Primeiro grau: 20 m",k:"grau",v:20,r:500},{id:"g100",t:"Grau de 100 m",k:"grau",v:100,r:1500},{id:"g300",t:"Grau de 300 m",k:"grau",v:300,r:4e3},{id:"g1000",t:"Grau de 1 km",k:"grau",v:1e3,r:15e3},{id:"p5",t:"Segurar NO PONTO por 5 s",k:"ponto",v:5,r:2500},{id:"p15",t:"Segurar NO PONTO por 15 s",k:"ponto",v:15,r:6e3},{id:"c10",t:"Corte (stoppie) de 10 m",k:"corte",v:10,r:1500},{id:"c40",t:"Corte de 40 m",k:"corte",v:40,r:5e3},{id:"a2",t:"Ficar 2 s no ar",k:"air",v:2,r:2e3},{id:"flip",t:"Mortal (giro de 360°)",k:"flips",v:1,r:8e3},{id:"wl",t:"Aterrissar empinando",k:"wland",v:!0,r:3e3},{id:"v120",t:"Passar de 120 km/h",k:"speed",v:120,r:1e3},{id:"k5",t:"Combo de 5.000 pts",k:"combo",v:5e3,r:3e3},{id:"k25",t:"Combo de 25.000 pts",k:"combo",v:25e3,r:1e4},{id:"on",t:"Entrar numa sala online",k:"online",v:!0,r:1e3},{id:"sm",t:"Grau sem mão por 3 s",k:"t1",v:3,r:3e3},{id:"sup",t:"Superman por 2 s",k:"t2",v:2,r:5e3},{id:"surf",t:"Surf no banco por 2 s",k:"t3",v:2,r:6e3},{id:"rasp",t:"Raspão de 15 m (faísca!)",k:"raspao",v:15,r:4e3}];function uh(){for(const i of tp){if(dt.missions[i.id])continue;const t=Ae[i.k];(i.v===!0?t===!0:t>=i.v)&&(dt.missions[i.id]=!0,dt.money+=i.r,us(`🏆 Desafio: ${i.t}  +R$ ${We(i.r)}`),be.chime(3),$n())}}const Pt={on:!1,pts:0,mult:1,type:"",dist:0,grace:0,segDist:0,pontoT:0,ponto:!1,airPts:0};let fh=0;function Yy(i){const t=K,e=t.v*3.6;if(e>Ae.speed&&(Ae.speed=e),t.crashed){Pt.on&&Zy();return}let n=!1;const s=["","SEM MÃO","SUPERMAN","SURF"],r=[1,2,3,3];if(t.grounded&&t.pitch>.12&&t.v>2){n=!0;const a=t.scraping?"RASPÃO":t.trick&&t.trickBlend>.6?s[t.trick]:"GRAU";Pt.type!==a&&((a==="GRAU"||Pt.type===""||Pt.type==="CORTE"||Pt.type==="NO AR")&&(Pt.segDist=0),Pt.type=a);const o=t.v*i;Pt.dist+=o,Pt.segDist+=o,Pt.ponto=Math.abs(t.pitch-t.spec.bp)<.12,Pt.ponto?(Pt.pontoT+=i,Ae.ponto=Math.max(Ae.ponto,Pt.pontoT)):Pt.pontoT=0,Pt.mult=Math.min(5,1+Math.floor(Pt.dist/50)*.5);const c=(t.trickBlend>.6?r[t.trick]:1)*(t.scraping?2.5:1);Pt.pts+=o*10*(Pt.ponto?2:1)*Pt.mult*c,Ae.grau=Math.max(Ae.grau,Pt.segDist),t.trickBlend>.6&&t.trick&&(Ae["t"+t.trick]=(Ae["t"+t.trick]||0)+i),t.scraping&&(Ae.raspao=(Ae.raspao||0)+o)}else if(t.grounded&&t.pitch<-.12&&t.v>1.5){n=!0,Pt.type!=="CORTE"&&(Pt.segDist=0,Pt.type="CORTE");const a=t.v*i;Pt.dist+=a,Pt.segDist+=a,Pt.pts+=a*25*Pt.mult,Pt.ponto=!1,Ae.corte=Math.max(Ae.corte,Pt.segDist)}else!t.grounded&&t.airT>.25&&(n=!0,Pt.type="NO AR",Pt.pts+=i*160*Pt.mult,Pt.ponto=!1,Ae.air=Math.max(Ae.air,t.airT));n?(Pt.on=!0,Pt.grace=.7):Pt.on&&(Pt.ponto=!1,Pt.pontoT=0,Pt.grace-=i,Pt.grace<=0&&Jy()),Ae.combo=Math.max(Ae.combo,Pt.pts)}function Jy(){const i=Math.round(Pt.pts);if(i>0){fh+=i,dt.total+=i;const t=Math.round(i/10);dt.money+=t,i>dt.best&&(dt.best=i,ie.active&&Yr()),rp(`+${We(i)}`,`R$ ${We(t)}`),be.chime(i>5e3?3:i>1e3?2:1),ie.active&&i>=2e3&&ie.send("ev",Pt.dist>30?`fez combo de ${We(i)} pts (${Math.round(Pt.dist)} m)!`:`fez combo de ${We(i)} pts!`),uh(),$n()}Object.assign(Pt,{on:!1,pts:0,mult:1,type:"",dist:0,segDist:0,pontoT:0,ponto:!1})}function Zy(){Pt.pts>50&&rp("PERDEU!",`-${We(Pt.pts)}`,!0),Object.assign(Pt,{on:!1,pts:0,mult:1,type:"",dist:0,segDist:0,pontoT:0,ponto:!1})}function Ky(){for(const i of K.events)i.type==="crash"?(window.__lastCrash=i.reason,be.crash(),ji(i.reason,!0),navigator.vibrate&&navigator.vibrate(120),ro(K.x,K.y+.3,K.z,14,2)):i.type==="pop"?be.pop():i.type==="shift"?be.shift():i.type==="deny"?ji("Giro alto demais!",!0):i.type==="scrape"?be.scrape():i.type==="trick"?ji(["","SEM MÃO!","SUPERMAN!","SURF NO BANCO!"][i.t]):i.type==="slam"?be.thump():i.type==="land"&&(be.thump(),ro(K.x,K.y+.1,K.z,8,1.5),i.flips>0&&(Ae.flips=Math.max(Ae.flips,i.flips),Pt.pts+=4e3*i.flips,Pt.on=!0,Pt.grace=.7,ji(i.flips>1?`MORTAL x${i.flips}!`:i.back?"MORTAL PRA TRÁS!":"MORTAL PRA FRENTE!"),ie.active&&ie.send("ev",`deu um mortal${i.flips>1?" x"+i.flips:""}!`)),i.wheelie?(Ae.wland=!0,Pt.pts+=1500,Pt.on=!0,Pt.grace=.7,ji("ATERRISSOU EMPINANDO!")):i.air>1.2&&ji("BOA!"),uh());K.events.length=0}const vo=90,dh=new Le,oi=new Float32Array(vo*3),ph=[];dh.setAttribute("position",new Je(oi,3));for(let i=0;i<vo;i++)ph.push({life:0,vx:0,vy:0,vz:0}),oi[i*3+1]=-100;let Qy=0;const t1=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(235,235,235,0.75)"),e.addColorStop(1,"rgba(235,235,235,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new fo(i);return n.colorSpace=Ve,n})(),ep=new $f(dh,new Hl({map:t1,size:.9,transparent:!0,depthWrite:!1,opacity:.55}));ep.frustumCulled=!1;Rn.add(ep);function ro(i,t,e,n=1,s=.6){for(let r=0;r<n;r++){const a=Qy++%vo,o=ph[a];o.life=1.2+Math.random()*.6,o.vx=(Math.random()-.5)*s,o.vy=.6+Math.random()*.8,o.vz=(Math.random()-.5)*s,oi[a*3]=i,oi[a*3+1]=t,oi[a*3+2]=e}}const xo=70,zn=new Float32Array(xo*3),mh=[],gh=new Le;gh.setAttribute("position",new Je(zn,3));for(let i=0;i<xo;i++)mh.push({life:0,vx:0,vy:0,vz:0}),zn[i*3+1]=-100;const e1=(()=>{const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"rgba(255,255,220,1)"),e.addColorStop(.3,"rgba(255,190,60,0.9)"),e.addColorStop(1,"rgba(255,120,0,0)"),t.fillStyle=e,t.fillRect(0,0,32,32);const n=new fo(i);return n.colorSpace=Ve,n})(),np=new $f(gh,new Hl({map:e1,size:.22,transparent:!0,depthWrite:!1,blending:ja,fog:!1}));np.frustumCulled=!1;Rn.add(np);let n1=0;function ip(i,t,e,n,s=3){const r=Math.sin(n),a=Math.cos(n);for(let o=0;o<s;o++){const c=n1++%xo,l=mh[c];l.life=.25+Math.random()*.35;const h=3+Math.random()*5;l.vx=-r*h+(Math.random()-.5)*2.5,l.vz=-a*h+(Math.random()-.5)*2.5,l.vy=1+Math.random()*2.5,zn[c*3]=i-r*.3,zn[c*3+1]=t+.05,zn[c*3+2]=e-a*.3}}function i1(i){for(let t=0;t<vo;t++){const e=ph[t];if(!(e.life<=0)){if(e.life-=i,e.life<=0){oi[t*3+1]=-100;continue}oi[t*3]+=e.vx*i,oi[t*3+1]+=e.vy*i,oi[t*3+2]+=e.vz*i}}dh.attributes.position.needsUpdate=!0;for(let t=0;t<xo;t++){const e=mh[t];if(!(e.life<=0)){if(e.life-=i,e.life<=0){zn[t*3+1]=-100;continue}e.vy-=9.8*i,zn[t*3]+=e.vx*i,zn[t*3+1]=Math.max(.02,zn[t*3+1]+e.vy*i),zn[t*3+2]+=e.vz*i}}gh.attributes.position.needsUpdate=!0}const Tl=[{d:4.3,h:1.65,look:1,fov:60},{d:6.8,h:2.6,look:1.2,fov:58},{side:!0,fov:50}];let ao=!0;const Mi=new P,Si=new P;function s1(i){const t=Tl[dt.settings.cam%Tl.length],e=Math.sin(K.yaw),n=Math.cos(K.yaw),s=K.x+e*.7,r=K.z+n*.7,a=K.y;let o,c,l,h,u,f;if(t.side)o=s-n*5.2-e*.5,l=r+e*5.2-n*.5,c=a+1.3,h=s+e*.4,u=a+.9,f=r+n*.4;else{const _=K.pitch>0?K.pitch*.35:0;o=s-e*t.d,l=r-n*t.d,c=a+t.h-_+(K.grounded?0:.6),h=s+e*1.5,u=a+t.look,f=r+n*1.5}K.crashed&&(c=a+2.5);const d=le.baseHeight(o,l)+.4;c<d&&(c=d),ao?(Mi.set(o,c,l),Si.set(h,u,f),ao=!1):(Mi.x=Nn(Mi.x,o,7,i),Mi.z=Nn(Mi.z,l,7,i),Mi.y=Nn(Mi.y,c,5,i),Si.x=Nn(Si.x,h,12,i),Si.z=Nn(Si.z,f,12,i),Si.y=Nn(Si.y,u,8,i)),Be.position.copy(Mi),Be.lookAt(Si);const m=t.fov+Math.min(14,K.v*.3);Math.abs(Be.fov-m)>.05&&(Be.fov=Nn(Be.fov,m,3,i),Be.updateProjectionMatrix())}let Fs=0;function sp(i){Fs+=i*.05;const t=280,e=280,n=37;Be.position.set(t+Math.cos(Fs)*n,13+Math.sin(Fs*2)*3,e+Math.sin(Fs)*n),Be.lookAt(t+Math.cos(Fs+2.2)*12,1,e+Math.sin(Fs+2.2)*12),Be.fov!==55&&(Be.fov=55,Be.updateProjectionMatrix())}const an={money:it("#hMoney"),score:it("#hScore"),speed:it("#hSpeed"),gear:it("#hGear"),rpm:it("#hRpm"),combo:it("#combo"),ctype:it("#combo .ctype"),cdist:it("#combo .cdist"),cpts:it("#combo .cpts"),cponto:it("#combo .cponto"),needle:it("#needle"),zone:it("#zone"),mm:it("#minimap")},hf={},bi=(i,t,e)=>{hf[t]!==e&&(hf[t]=e,i.textContent=e)};let pc=0;function r1(i){pc+=i;const t=re(K.pitch,-.6,1.75);an.needle.setAttribute("transform",`rotate(${-t*180/Math.PI} 10 55)`),!(pc<.08)&&(pc=0,bi(an.speed,"sp",String(Math.round(K.v*3.6))),bi(an.gear,"g",K.nG?String(K.gear):"CVT"),document.body.classList.toggle("wheelie",!K.crashed&&(K.grounded&&K.pitch>.22||!K.grounded&&K.airT>.15||K.trick>0)),an.rpm.style.transform=`scaleX(${re(K.rpm/(K.red||1e4),0,1).toFixed(3)})`,an.rpm.parentNode.classList.toggle("red",K.rpm>(K.red||1e4)*.9),bi(an.money,"m",We(dt.money)),bi(an.score,"s",We(fh)),Pt.on?(an.combo.classList.add("show"),bi(an.ctype,"ct",Pt.type+(Pt.mult>1?`  x${Pt.mult.toFixed(1)}`:"")),bi(an.cdist,"cd",Pt.type==="NO AR"?`${K.airT.toFixed(1)} s`:`${Math.round(Pt.segDist)} m`),bi(an.cpts,"cp",We(Pt.pts)),an.cponto.classList.toggle("show",Pt.ponto)):an.combo.classList.remove("show"),a1(),dt.settings.fps&&bi(it("#fps"),"fps",`${Math.round(Xs)} fps · ${xn} · res ${Math.round(ze.getPixelRatio()*100)}% · ${ze.info.render.calls} dc · ${$d.slice(0,40)}`))}function a1(){const i=an.mm,t=i.getContext("2d"),e=i.width,n=le.mm,s=n.S/n.ext,r=2.2;t.save(),t.clearRect(0,0,e,e),t.beginPath(),t.arc(e/2,e/2,e/2-2,0,Math.PI*2),t.clip(),t.translate(e/2,e/2),t.rotate(Math.PI+K.yaw),t.scale(r,r),t.translate(-(K.x-n.ox)*s,-(K.z-n.oz)*s),t.drawImage(le.mmCanvas,0,0),t.fillStyle="#ffd400";for(const a of Ln.values())a.cur&&(t.beginPath(),t.arc((a.cur[0]-n.ox)*s,(a.cur[2]-n.oz)*s,2.2,0,7),t.fill());t.fillStyle="#9be15d";for(const a of Qi)t.beginPath(),t.arc((a.x-n.ox)*s,(a.z-n.oz)*s,1.6,0,7),t.fill();t.restore(),t.fillStyle="#fff",t.beginPath(),t.moveTo(e/2,e/2-7),t.lineTo(e/2+5,e/2+5),t.lineTo(e/2-5,e/2+5),t.fill(),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=2,t.beginPath(),t.arc(e/2,e/2,e/2-2,0,7),t.stroke()}let uf=null;function rp(i,t,e=!1){const n=it("#popup");n.innerHTML=`<b>${i}</b><span>${t}</span>`,n.className="show"+(e?" bad":""),clearTimeout(uf),uf=setTimeout(()=>n.className="",1600)}let ff=null;function ji(i,t=!1){const e=it("#bigmsg");e.textContent=i,e.className="show"+(t?" bad":""),clearTimeout(ff),ff=setTimeout(()=>e.className="",1700)}let df=null;function us(i){const t=it("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(df),df=setTimeout(()=>t.classList.remove("show"),2800)}function Ii(i){const t=it("#feed"),e=document.createElement("div");for(e.innerHTML=i,t.appendChild(e);t.children.length>5;)t.firstChild.remove();setTimeout(()=>e.classList.add("fade"),7e3),setTimeout(()=>e.remove(),8e3)}let ge="loading";function Ei(i){as(".screen").forEach(t=>t.classList.toggle("active",t.id===i))}function yo(i){if(be.unlock(),i!=="play"&&sr(),i==="play")return Jr();if(document.body.classList.remove("playing"),i==="garage")return c1();if(i==="menu"){ie.active&&ge==="paused"&&_o(),ge="menu",it("#hud").classList.add("hidden"),Ei("menu"),ap(),be.engine(0,0,!1,!1);return}if(i==="missions"){l1(),Ei("missions");return}if(i==="settings"){op(),Ei("settings");return}if(i==="online"){Ei("online");return}}function ap(){as(".mMoney").forEach(t=>t.textContent=We(dt.money)),it("#pname").value=dt.name;const i=$r(dt.bike);it("#mBike").textContent=i.name}function o1(){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}}function Jr(i=!1){o1(),Ei(null),it("#hud").classList.remove("hidden"),i||(Yd(),lh(ie.active?Hr:so.x?so:Hr),fh=0),ge="play",document.body.classList.add("playing"),ah()}function _h(){ge==="play"&&(ge="paused",document.body.classList.remove("playing"),sr(),Ei("pause"),it("#pauseOnline").textContent=ie.active?"SAIR DA SALA":"",it("#pauseOnline").style.display=ie.active?"":"none",be.engine(0,0,!1,!1))}let jn=0,Yi=null,$a=.6,qa="cor",Pr=null;function c1(){ge="garage",it("#hud").classList.add("hidden"),jn=ln.findIndex(i=>i.id===dt.bike),Ei("garage"),Qs()}function Qs(){const i=ln[jn],t=dt.owned.includes(i.id);Yi&&Yi.dispose(),Yi=new qr(i,zr(i.id),!1),vn.add(Yi.root),Yi.apply({x:0,y:0,z:-Yi.m.L/2,yaw:0,pitch:0,lean:0,steer:.25,wheel:0}),it("#gName").textContent=i.name,it("#gCc").textContent=`${i.cc} · ${i.top} km/h`+(bl.includes(i.id)?" · NOVA":""),it("#gDesc").textContent=i.desc,it("#gIdx").textContent=`${jn+1}/${ln.length}`;const e=Gr(i.id),n=c=>`<i style="width:${Math.round(re(c,.05,1)*100)}%"></i>`;it("#gStats").innerHTML=`
    <label>Velocidade</label><div class="bar">${n(i.top*(1+.07*e.motor)/190)}</div>
    <label>Aceleração</label><div class="bar">${n(i.accel*(1+.12*e.motor)/9)}</div>
    <label>Facilidade de grau</label><div class="bar">${n(i.lift*(1+.15*e.grau)*i.accel/9.5)}</div>
    <label>Freio</label><div class="bar">${n(i.brake*(1+.1*e.freio)/1.5)}</div>`;const s=it("#gAction");t?(s.textContent=dt.bike===i.id?"✔ EM USO":"USAR ESSA",s.disabled=dt.bike===i.id,s.classList.remove("buy")):(s.textContent=`COMPRAR R$ ${We(i.price)}`,s.disabled=dt.money<i.price,s.classList.add("buy")),as(".mMoney").forEach(c=>c.textContent=We(dt.money));const r=zr(i.id),a=(c,l,h)=>c.map(u=>`<button class="sw${u===l?" sel":""}" style="background:${u}" data-kind="${h}" data-c="${u}"></button>`).join("");it("#tabCor").innerHTML=`
    <label>Pintura</label><div class="sws">${a(fl,r.paint,"paint")}</div>
    <label>Rodas</label><div class="sws">${a(dl,r.rim,"rim")}</div>
    <label>Capacete</label><div class="sws">${a(pl,r.helmet,"helmet")}</div>
    <label>Jaqueta</label><div class="sws">${a(ml,r.jacket,"jacket")}</div>`;const o=[["motor","Motor (potência)",2500],["grau","Relação (grau)",1800],["freio","Freios",1200]];it("#tabUp").innerHTML=t?o.map(([c,l,h])=>{const u=e[c]||0,f=h*(u+1);return`<div class="up"><div><b>${l}</b><small>${"■".repeat(u)}${"□".repeat(3-u)}</small></div>${u>=3?'<span class="max">MÁX</span>':`<button data-up="${c}" data-cost="${f}" ${dt.money<f?"disabled":""}>R$ ${We(f)}</button>`}</div>`}).join(""):'<p class="muted">Compre a moto para liberar upgrades.</p>',it("#tabCor").style.display=qa==="cor"?"":"none",it("#tabUp").style.display=qa==="up"?"":"none",as(".tabs button").forEach(c=>c.classList.toggle("sel",c.dataset.tab===qa))}function l1(){it("#mList").innerHTML=tp.map(i=>`<div class="mis${dt.missions[i.id]?" done":""}"><span>${dt.missions[i.id]?"✔":"○"} ${i.t}</span><b>R$ ${We(i.r)}</b></div>`).join("")+`<div class="mis rec"><span>Recorde de combo</span><b>${We(dt.best)} pts</b></div>`}const h1=[["quality","Gráfico",[["auto","Auto"],["baixo","Leve"],["medio","Médio"],["alto","Alto"]]],["time","Horário",[["dia","Dia"],["tarde","Pôr do sol"],["noite","Noite"]]],["steer","Direção",[["touch","Botões"],["tilt","Inclinar celular"]]],["easy","Assistência de grau",[[!1,"Desligada (real)"],[!0,"Leve"]]],["cambio","Câmbio",[["manual","Manual ▲▼"],["auto","Automático"]]],["sound","Som",[[!0,"Ligado"],[!1,"Desligado"]]],["radio","Rádio",[["funk","Baile Funk"],["pagodao","Pagodão Baiano"],["off","Desligada"]]],["radioGame","Rádio na partida",[[!0,"Tocar"],[!1,"Só nos menus"]]],["fps","Mostrar FPS",[[!1,"Não"],[!0,"Sim"]]]];function op(){it("#sList").innerHTML=h1.map(([i,t,e])=>`<div class="set"><label>${t}</label><div class="opts">${e.map(([n,s])=>`<button data-set="${i}" data-v='${JSON.stringify(n)}' class="${dt.settings[i]===n?"sel":""}">${s}</button>`).join("")}</div></div>`).join("")}function vh(i=!1){const t=dt.settings;xn=t.quality==="auto"?i?qd():xn:t.quality,cn=rh[xn],ze.shadowMap.enabled=cn.shadows,le.setShadows(cn.shadows,cn.shadowSize||1024),le.setFog(cn.fog*.25,cn.fog),le.waterU&&(le.waterU.fogFar.value=cn.fog*1.6),le.carMesh.count=le.carLights.count=le.carTail.count=cn.cars,(le.timeName!==t.time||i)&&(le.setTime(t.time),ze.toneMappingExposure=le.T.exposure,Wy()),qy(cn.bots),Vr.tilt=t.steer==="tilt",t.steer==="tilt"&&window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission=="function"&&DeviceOrientationEvent.requestPermission().catch(()=>{}),document.body.classList.toggle("tilt",Vr.tilt),be.setEnabled(t.sound),!i&&be.ctx&&(ge==="play"?ah():sr()),K&&(K.easy=t.easy,K.auto=t.cambio==="auto",document.body.classList.toggle("nogears",K.auto||!K.nG)),it("#fps").style.display=t.fps?"":"none",Re&&(i||Re.root.children)&&(Re.root.traverse(n=>{n.isMesh&&n!==Re.blob&&(n.castShadow=cn.shadows)}),Jd()),Wr()}document.addEventListener("pointerdown",()=>{be.ctx||(be.unlock(),ge==="menu"&&sr())},{once:!1});document.addEventListener("click",i=>{const t=i.target.closest("button");if(t){if(be.unlock(),t.dataset.go){yo(t.dataset.go);return}if(t.dataset.set){dt.settings[t.dataset.set]=JSON.parse(t.dataset.v),t.dataset.set==="quality"&&(El=dt.settings.quality!=="auto"),$n(),vh(),op();return}if(t.dataset.kind){const e=ln[jn],n=t.dataset.kind,s=t.dataset.c;n==="helmet"||n==="jacket"?dt[n]=s:dt.colors[e.id]={...dt.colors[e.id]||{},[n]:s},$n(),Yi.setColors(zr(e.id)),as(`.sw[data-kind="${n}"]`).forEach(r=>r.classList.toggle("sel",r.dataset.c===s)),ie.active&&ie.updateProfile(jr());return}if(t.dataset.up){const e=ln[jn],n=+t.dataset.cost;if(dt.money<n)return;dt.money-=n;const s={...Gr(e.id)};s[t.dataset.up]=(s[t.dataset.up]||0)+1,dt.up[e.id]=s,$n(),be.chime(2),us("Upgrade instalado!"),Qs();return}if(t.dataset.tab){qa=t.dataset.tab,Qs();return}if(t.dataset.chat){ie.send("chat",t.dataset.chat),Ii(`💬 <b>${mn(dt.name)}:</b> ${mn(t.dataset.chat)}`),it("#chatbox").classList.add("hidden");return}}});it("#gPrev").onclick=()=>{jn=(jn+ln.length-1)%ln.length,Qs()};it("#gNext").onclick=()=>{jn=(jn+1)%ln.length,Qs()};it("#gAction").onclick=()=>{const i=ln[jn];if(!dt.owned.includes(i.id)){if(dt.money<i.price)return;dt.money-=i.price,dt.owned.push(i.id),us(`Comprou ${i.name}!`),be.chime(3)}dt.bike=i.id,$n(),ie.active&&ie.updateProfile(jr()),Qs()};it("#gPlay").onclick=()=>yo("play");it("#pname").addEventListener("change",i=>{dt.name=(i.target.value||"Piloto").trim().slice(0,16)||"Piloto",$n()});it("#bPause").onclick=_h;it("#bRadio").onclick=oh;it("#rCycle").onclick=oh;it("#bCam").onclick=()=>{dt.settings.cam=(dt.settings.cam+1)%Tl.length,ao=!0,$n()};it("#bChat").onclick=()=>it("#chatbox").classList.toggle("hidden");it("#bReset").onclick=()=>{ge==="play"&&Mo()};it("#chatSend").onclick=()=>{const i=it("#chatIn").value.trim();i&&(ie.send("chat",i),Ii(`💬 <b>${mn(dt.name)}:</b> ${mn(i)}`),it("#chatIn").value="",it("#chatbox").classList.add("hidden"))};it("#chatIn").addEventListener("keydown",i=>{i.key==="Enter"&&it("#chatSend").click()});it("#pResume").onclick=()=>Jr(!0);it("#pRespawn").onclick=()=>{Jr(!0),Mo()};it("#pauseOnline").onclick=()=>{_o(),yo("menu")};it("#onPublic").onclick=async()=>{await xh(()=>ie.joinPublic(jr()))};it("#onCreate").onclick=async()=>{await xh(async()=>{const i=await ie.createRoom(jr());return i&&(it("#onCode").value=i,us(`Sala criada: ${i} — passe o código pros amigos!`)),!!i})};it("#onJoin").onclick=async()=>{const i=it("#onCode").value.trim().toUpperCase();if(i.length<3){it("#onStatus").textContent="Digite o código da sala.";return}await xh(()=>ie.joinCode(i,jr()))};let mc=!1;async function xh(i){if(!mc){sr(),mc=!0,as("#online button").forEach(t=>t.disabled=!0),_o();try{await i()&&Jr()}finally{mc=!1,as("#online button").forEach(t=>t.disabled=!1)}}}Vr.onAction=i=>{(i==="Escape"||i==="KeyP")&&(ge==="play"?_h():ge==="paused"&&Jr(!0)),i==="KeyC"&&ge==="play"&&it("#bCam").click(),i==="KeyR"&&ge==="play"&&Mo(),i==="KeyM"&&oh(),i==="KeyT"&&ge==="play"&&ie.active&&(it("#chatbox").classList.remove("hidden"),setTimeout(()=>it("#chatIn").focus(),50))};function Mo(){lh(so),ji("De volta!")}Xd.addEventListener("pointerdown",i=>{ge==="garage"&&(Pr=i.clientX)});addEventListener("pointermove",i=>{Pr!=null&&($a+=(i.clientX-Pr)*.01,Pr=i.clientX)});addEventListener("pointerup",()=>Pr=null);document.addEventListener("visibilitychange",()=>{document.hidden?(ge==="play"&&!ie.active&&_h(),be.ctx&&be.ctx.suspend()):be.ctx&&be.ctx.resume()});function Wr(){const i=innerWidth,t=innerHeight;let e=Math.min(window.devicePixelRatio||1,cn.dpr,Math.sqrt(cn.px/(i*t)));e=Math.max(.5,e*ri),Math.abs(ze.getPixelRatio()-e)>.01&&ze.setPixelRatio(e),ze.setSize(i,t,!1),Be.aspect=i/t,Be.updateProjectionMatrix(),Rr.aspect=i/t,Rr.updateProjectionMatrix()}addEventListener("resize",Wr);const gc=1/120;let _c=0,vc=performance.now(),Xi=0,Xs=60,xc=0,Da=0,Mr=0,El=dt.settings.quality!=="auto";function cp(i){if(requestAnimationFrame(cp),!le){vc=i;return}let t=(i-vc)/1e3;if(vc=i,t>.1&&(t=.1),Xi+=t,!(Xi<1/61)){if(t=Math.min(.1,Xi),Xi=Xi%(1/60),Xi>1/120&&(Xi=0),xc++,Da+=t,Da>1&&(Xs=xc/Da,xc=0,Da=0,u1()),ge==="play"||ge==="paused"){const e=ge==="play"?Vr.update(t):{throttle:0,brake:1,fbrake:0,steer:0,clutch:!1};for(_c+=t;_c>=gc;)K.step(gc,e,le),_c-=gc;Ky(),K.crashed?(Qd(Re,K.crashT,K.crashV||6),K.crashT>2.4&&Mo()):(dc+=t,dc>.6&&K.grounded&&Math.abs(K.pitch)<.1&&K.v>1&&K.y<.5&&(dc=0,so={x:K.x,z:K.z,yaw:K.yaw}),(e.brake&&e.throttle>.6&&K.v<6||K.popT>.2)&&ro(K.x,K.y+.2,K.z,1,.8),K.scraping&&(ip(K.x,K.y,K.z,K.yaw,3),navigator.vibrate&&Math.random()<.05&&navigator.vibrate(15)),K.pitch<-.15&&Math.random()<.3&&ro(K.x+Math.sin(K.yaw)*K.L,K.y+.1,K.z+Math.cos(K.yaw)*K.L,1,.3)),Yy(t),Re.apply(K.visual()),Re.blob&&(Re.blob.position.y=le.groundHeight(K.x,K.z)-K.y+.03),s1(t),be.engine(K.rpm,K.throttle,K.spec.electric,ge==="play"&&!K.crashed),r1(t);const n=K.visual();ie.tick(t,[n.x,n.y,n.z,n.yaw,n.pitch,n.lean,n.steer,n.wheel,K.v,K.crashed?1:0,K.trick,K.scraping?1:0],dt.best),le.update(t,K,Be.position),le.sun.castShadow&&(le.sun.position.set(K.x+le.sunDir.x*60,K.y+le.sunDir.y*60,K.z+le.sunDir.z*60),le.sun.target.position.set(K.x,K.y,K.z)),fc+=t,fc>10&&(fc=0,$n())}else(ge==="menu"||ge==="loading")&&(sp(t),le.update(t,null,Be.position));if(ge!=="garage"){for(const e of Qi)e.update(t);jy(t),i1(t),ze.render(Rn,Be)}else $a+=t*.25,Rr.position.set(Math.sin($a)*4.4,1.5,Math.cos($a)*4.4),Rr.lookAt(0,.6,0),ze.render(vn,Rr)}}function u1(){if(ge==="play"&&(cf++,Xs<55&&ri>.62?(ri=Math.max(.62,ri*.9),Wr()):Xs>59&&ri<1&&cf%3===0&&(ri=Math.min(1,ri*1.05),Wr()),!El&&(Xs<48&&ri<=.63?Mr++:Mr=Math.max(0,Mr-1),Mr>=4))){if(Mr=0,xn==="alto")xn="medio";else if(xn==="medio")xn="baixo";else{El=!0;return}cn=rh[xn],ri=1,vh(),us(`Gráfico ajustado para ${xn==="baixo"?"Leve":"Médio"} para ficar liso`)}}function f1(){const i=it("#loading i");i.style.width="30%",setTimeout(()=>{le=new oy(Rn,{quality:xn,cars:20}),i.style.width="75%",setTimeout(()=>{vh(!0),Vr.bindTouch({throttle:it("#throttle"),steer:it("#steer"),brake:it("#brake"),fbrake:it("#fbrake"),clutch:it("#clutch"),gup:it("#gUp"),gdown:it("#gDown"),tricks:[it("#t1"),it("#t2"),it("#t3")]});const t=[];for(const e of ln.slice(0,5)){const n=new qr(e,{},!1);n.root.position.set(280,-50,280),Rn.add(n.root),t.push(n)}K=new id($r(dt.bike),Gr(dt.bike),dt.settings.easy),Yd(),lh(Hr),Re.root.visible=!0,sp(0),ze.compile(Rn,Be),ze.render(Rn,Be),t.forEach(e=>e.dispose()),i.style.width="100%",ge="menu",ap(),Ei("menu"),it("#loading").classList.add("gone"),setTimeout(()=>it("#loading").remove(),600)},30)},30),Wr(),requestAnimationFrame(cp)}f1();window.__g={get phys(){return K},get pVis(){return Re},get mode(){return ge},get world(){return le},save:dt,go:yo,renderer:ze,combo:Pt,stats:Ae,get fps(){return Xs}};
