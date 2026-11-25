import{d as pv,o as mv,a as gv,b as _v,c as xv,r as vv,_ as Ev}from"./index-kE0Js4zx.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="185",Sv=0,Mf=1,Mv=2,go=1,Tv=2,Kr=3,Mi=0,qt=1,qn=2,jn=0,vr=1,Tf=2,yf=3,bf=4,yv=5,Di=100,bv=101,Av=102,wv=103,Rv=104,Cv=200,Iv=201,Pv=202,Lv=203,Cc=204,Ic=205,Dv=206,Nv=207,Fv=208,Ov=209,Uv=210,Bv=211,kv=212,zv=213,Hv=214,Pc=0,Lc=1,Dc=2,Tr=3,Nc=4,Fc=5,Oc=6,Uc=7,hp=0,Gv=1,Vv=2,Nn=0,au=1,pp=2,mp=3,gp=4,_p=5,xp=6,vp=7,Ep=300,Bi=301,yr=302,Aa=303,wa=304,qo=306,Bc=1e3,Kn=1001,kc=1002,Dt=1003,Wv=1004,Us=1005,Nt=1006,Ra=1007,gi=1008,fn=1009,Sp=1010,Mp=1011,_s=1012,cu=1013,On=1014,Pn=1015,ti=1016,lu=1017,uu=1018,xs=1020,Tp=35902,yp=35899,bp=1021,Ap=1022,vn=1023,ni=1026,Oi=1027,wp=1028,fu=1029,ki=1030,du=1031,hu=1033,_o=33776,xo=33777,vo=33778,Eo=33779,zc=35840,Hc=35841,Gc=35842,Vc=35843,Wc=36196,Xc=37492,Yc=37496,Zc=37488,qc=37489,wo=37490,$c=37491,Kc=37808,jc=37809,Jc=37810,Qc=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,ol=37818,al=37819,cl=37820,ll=37821,ul=36492,fl=36494,dl=36495,hl=36283,pl=36284,Ro=36285,ml=36286,Xv=3200,Af=0,Yv=1,hi="",ln="srgb",vs="srgb-linear",Co="linear",Je="srgb",Ki=7680,wf=519,Zv=512,qv=513,$v=514,pu=515,Kv=516,jv=517,mu=518,Jv=519,Rf=35044,Cf="300 es",Ln=2e3,Io=2001;function Qv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Es(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eE(){const t=Es("canvas");return t.style.display="block",t}const If={};function Pf(...t){const e="THREE."+t.shift();console.log(e,...t)}function Rp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=Rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ze(...t){t=Rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Er(...t){const e=t.join(" ");e in If||(If[e]=!0,Re(...t))}function tE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const nE={[Pc]:Lc,[Dc]:Oc,[Nc]:Uc,[Tr]:Fc,[Lc]:Pc,[Oc]:Dc,[Uc]:Nc,[Fc]:Tr};class Hi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lf=1234567;const rs=Math.PI/180,Ss=180/Math.PI;function Dr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function ke(t,e,n){return Math.max(e,Math.min(n,t))}function gu(t,e){return(t%e+e)%e}function iE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rE(t,e,n){return t!==e?(n-t)/(e-t):0}function ss(t,e,n){return(1-n)*t+n*e}function sE(t,e,n,i){return ss(t,e,1-Math.exp(-n*i))}function oE(t,e=1){return e-Math.abs(gu(t,e*2)-e)}function aE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function cE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function lE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function uE(t,e){return t+Math.random()*(e-t)}function fE(t){return t*(.5-Math.random())}function dE(t){t!==void 0&&(Lf=t);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hE(t){return t*rs}function pE(t){return t*Ss}function mE(t){return(t&t-1)===0&&t!==0}function gE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _E(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*f,c*d,a*l);break;case"YZY":t.set(c*d,a*u,c*f,a*l);break;case"ZXZ":t.set(c*f,c*d,a*u,a*l);break;case"XZX":t.set(a*u,c*_,c*p,a*l);break;case"YXY":t.set(c*p,a*u,c*_,a*l);break;case"ZYZ":t.set(c*_,c*p,a*u,a*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const We={DEG2RAD:rs,RAD2DEG:Ss,generateUUID:Dr,clamp:ke,euclideanModulo:gu,mapLinear:iE,inverseLerp:rE,lerp:ss,damp:sE,pingpong:oE,smoothstep:aE,smootherstep:cE,randInt:lE,randFloat:uE,randFloatSpread:fE,seededRandom:dE,degToRad:hE,radToDeg:pE,isPowerOfTwo:mE,ceilPowerOfTwo:gE,floorPowerOfTwo:_E,setQuaternionFromProperEuler:xE,normalize:Gt,denormalize:pr},cf=class cf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cf.prototype.isVector2=!0;let He=cf;class Gi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(f!==E||c!==d||l!==p||u!==_){let m=c*d+l*p+u*_+f*E;m<0&&(d=-d,p=-p,_=-_,E=-E,m=-m);let h=1-a;if(m<.9995){const M=Math.acos(m),A=Math.sin(M);h=Math.sin(h*M)/A,a=Math.sin(a*M)/A,c=c*h+d*a,l=l*h+p*a,u=u*h+_*a,f=f*h+E*a}else{c=c*h+d*a,l=l*h+p*a,u=u*h+_*a,f=f*h+E*a;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+c*p-l*d,e[n+1]=c*_+u*d+l*f-a*p,e[n+2]=l*_+u*p+a*d-c*f,e[n+3]=u*_-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"YZX":this._x=d*u*f+l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f-d*p*_;break;case"XZY":this._x=d*u*f-l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f+d*p*_;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lf=class lf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Df.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lf.prototype.isVector3=!0;let F=lf;const Ca=new F,Df=new Gi,uf=class uf{constructor(e,n,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],E=r[0],m=r[3],h=r[6],M=r[1],A=r[4],S=r[7],w=r[2],y=r[5],R=r[8];return s[0]=o*E+a*M+c*w,s[3]=o*m+a*A+c*y,s[6]=o*h+a*S+c*R,s[1]=l*E+u*M+f*w,s[4]=l*m+u*A+f*y,s[7]=l*h+u*S+f*R,s[2]=d*E+p*M+_*w,s[5]=d*m+p*A+_*y,s[8]=d*h+p*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=f*E,e[1]=(r*l-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(u*n-r*c)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*c-l*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,n)),this}rotate(e){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,n){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;let Ie=uf;const Ia=new Ie,Nf=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const t={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Je&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?Co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vs]:{primaries:e,whitePoint:i,transfer:Co,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),t}const Be=vE();function Jn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ji;class EE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ji===void 0&&(ji=Es("canvas")),ji.width=e.width,ji.height=e.height;const r=ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ji}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Es("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jn(n[i]/255)*255):n[i]=Jn(n[i]);return{data:n,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SE=0;class _u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pa(r[o].image)):s.push(Pa(r[o]))}else s=Pa(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?EE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let ME=0;const La=new F;class Ht extends Hi{constructor(e=Ht.DEFAULT_IMAGE,n=Ht.DEFAULT_MAPPING,i=Kn,r=Kn,s=Nt,o=gi,a=vn,c=fn,l=Ht.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Dr(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Re(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bc:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bc:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ep;Ht.DEFAULT_ANISOTROPY=1;const ff=class ff{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],_=c[9],E=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+E)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(l+1)/2,S=(p+1)/2,w=(h+1)/2,y=(u+d)/4,R=(f+E)/4,x=(_+m)/4;return A>S&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=y/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=y/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=x/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-_)*(m-_)+(f-E)*(f-E)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-E)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this.w=ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this.w=ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ff.prototype.isVector4=!0;let ut=ff;class TE extends Hi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Ht(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _u(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends TE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cp extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zo=class Zo{constructor(e,n,i,r,s,o,a,c,l,u,f,d,p,_,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,u,f,d,p,_,E,m)}set(e,n,i,r,s,o,a,c,l,u,f,d,p,_,E,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=E,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,E=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=p+_*l,n[5]=d-E*l,n[9]=-a*c,n[2]=E-d*l,n[6]=_+p*l,n[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,_=l*u,E=l*f;n[0]=d+E*a,n[4]=_*a-p,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=E+d*a,n[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,_=l*u,E=l*f;n[0]=d-E*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=E-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,E=a*f;n[0]=c*u,n[4]=_*l-p,n[8]=d*l+E,n[1]=c*f,n[5]=E*l+d,n[9]=p*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,E=a*l;n[0]=c*u,n[4]=E-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=p*f+_,n[10]=d-E*f}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,E=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=d*f+E,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=E*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,AE)}lookAt(e,n,i){const r=this.elements;return jt.subVectors(e,n),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ai.crossVectors(i,jt),ai.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ai.crossVectors(i,jt)),ai.normalize(),Bs.crossVectors(jt,ai),r[0]=ai.x,r[4]=Bs.x,r[8]=jt.x,r[1]=ai.y,r[5]=Bs.y,r[9]=jt.y,r[2]=ai.z,r[6]=Bs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],E=i[6],m=i[10],h=i[14],M=i[3],A=i[7],S=i[11],w=i[15],y=r[0],R=r[4],x=r[8],b=r[12],D=r[1],I=r[5],U=r[9],Z=r[13],$=r[2],z=r[6],X=r[10],G=r[14],j=r[3],Q=r[7],fe=r[11],me=r[15];return s[0]=o*y+a*D+c*$+l*j,s[4]=o*R+a*I+c*z+l*Q,s[8]=o*x+a*U+c*X+l*fe,s[12]=o*b+a*Z+c*G+l*me,s[1]=u*y+f*D+d*$+p*j,s[5]=u*R+f*I+d*z+p*Q,s[9]=u*x+f*U+d*X+p*fe,s[13]=u*b+f*Z+d*G+p*me,s[2]=_*y+E*D+m*$+h*j,s[6]=_*R+E*I+m*z+h*Q,s[10]=_*x+E*U+m*X+h*fe,s[14]=_*b+E*Z+m*G+h*me,s[3]=M*y+A*D+S*$+w*j,s[7]=M*R+A*I+S*z+w*Q,s[11]=M*x+A*U+S*X+w*fe,s[15]=M*b+A*Z+S*G+w*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],E=e[7],m=e[11],h=e[15],M=c*p-l*d,A=a*p-l*f,S=a*d-c*f,w=o*p-l*u,y=o*d-c*u,R=o*f-a*u;return n*(E*M-m*A+h*S)-i*(_*M-m*w+h*y)+r*(_*A-E*w+h*R)-s*(_*S-E*y+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return n*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],E=e[13],m=e[14],h=e[15],M=n*a-i*o,A=n*c-r*o,S=n*l-s*o,w=i*c-r*a,y=i*l-s*a,R=r*l-s*c,x=u*E-f*_,b=u*m-d*_,D=u*h-p*_,I=f*m-d*E,U=f*h-p*E,Z=d*h-p*m,$=M*Z-A*U+S*I+w*D-y*b+R*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/$;return e[0]=(a*Z-c*U+l*I)*z,e[1]=(r*U-i*Z-s*I)*z,e[2]=(E*R-m*y+h*w)*z,e[3]=(d*y-f*R-p*w)*z,e[4]=(c*D-o*Z-l*b)*z,e[5]=(n*Z-r*D+s*b)*z,e[6]=(m*S-_*R-h*A)*z,e[7]=(u*R-d*S+p*A)*z,e[8]=(o*U-a*D+l*x)*z,e[9]=(i*D-n*U-s*x)*z,e[10]=(_*y-E*S+h*M)*z,e[11]=(f*S-u*y-p*M)*z,e[12]=(a*b-o*I-c*x)*z,e[13]=(n*I-i*b+r*x)*z,e[14]=(E*A-_*w-m*M)*z,e[15]=(u*w-f*A+d*M)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,_=s*f,E=o*u,m=o*f,h=a*f,M=c*l,A=c*u,S=c*f,w=i.x,y=i.y,R=i.z;return r[0]=(1-(E+h))*w,r[1]=(p+S)*w,r[2]=(_-A)*w,r[3]=0,r[4]=(p-S)*y,r[5]=(1-(d+h))*y,r[6]=(m+M)*y,r[7]=0,r[8]=(_+A)*R,r[9]=(m-M)*R,r[10]=(1-(d+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),c=Ji.set(r[8],r[9],r[10]).length();s<0&&(o=-o),pn.copy(this);const l=1/o,u=1/a,f=1/c;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,n.setFromRotationMatrix(pn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,n,i,r,s,o,a=Ln,c=!1){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(c)_=s/(o-s),E=o*s/(o-s);else if(a===Ln)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Io)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ln,c=!1){const l=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(c)_=1/(o-s),E=o/(o-s);else if(a===Ln)_=-2/(o-s),E=-(o+s)/(o-s);else if(a===Io)_=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Zo.prototype.isMatrix4=!0;let ft=Zo;const Ji=new F,pn=new ft,bE=new F(0,0,0),AE=new F(1,1,1),ai=new F,Bs=new F,jt=new F,Of=new ft,Uf=new Gi;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const Bf=new F,Qi=new Gi,zn=new ft,ks=new F,kr=new F,RE=new F,CE=new Gi,kf=new F(1,0,0),zf=new F(0,1,0),Hf=new F(0,0,1),Gf={type:"added"},IE={type:"removed"},er={type:"childadded",child:null},Da={type:"childremoved",child:null};class tn extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new F,n=new Ti,i=new Gi,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ie}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qi.setFromAxisAngle(e,n),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,n){return Qi.setFromAxisAngle(e,n),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,n){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ks.copy(e):ks.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(kr,ks,this.up):zn.lookAt(ks,kr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),er.child=e,this.dispatchEvent(er),er.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IE),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new F(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _r extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),h=this._getHandJoint(l,E);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Fa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Be.workingColorSpace){return this.r=e,this.g=n,this.b=i,Be.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Be.workingColorSpace){if(e=gu(e,1),n=ke(n,0,1),i=ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fa(o,s,e+1/3),this.g=Fa(o,s,e),this.b=Fa(o,s,e-1/3)}return Be.colorSpaceToWorking(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=Ip[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Be.workingToColorSpace(zt.copy(this),e),Math.round(ke(zt.r*255,0,255))*65536+Math.round(ke(zt.g*255,0,255))*256+Math.round(ke(zt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Be.workingColorSpace){Be.workingToColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Be.workingColorSpace){return Be.workingToColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ln){Be.workingToColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+n,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ci),e.getHSL(zs);const i=ss(ci.h,zs.h,n),r=ss(ci.s,zs.s,n),s=ss(ci.l,zs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=Ip;class Vf extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const mn=new F,Hn=new F,Oa=new F,Gn=new F,tr=new F,nr=new F,Wf=new F,Ua=new F,Ba=new F,ka=new F,za=new ut,Ha=new ut,Ga=new ut;class xn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mn.subVectors(e,n),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mn.subVectors(r,n),Hn.subVectors(i,n),Oa.subVectors(e,n);const o=mn.dot(mn),a=mn.dot(Hn),c=mn.dot(Oa),l=Hn.dot(Hn),u=Hn.dot(Oa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return za.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(za,s.x),o.addScaledVector(Ha,s.y),o.addScaledVector(Ga,s.z),o}static isFrontFacing(e,n,i,r){return mn.subVectors(i,n),Hn.subVectors(e,n),mn.cross(Hn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),mn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),Ua.subVectors(e,i);const c=tr.dot(Ua),l=nr.dot(Ua);if(c<=0&&l<=0)return n.copy(i);Ba.subVectors(e,r);const u=tr.dot(Ba),f=nr.dot(Ba);if(u>=0&&f<=u)return n.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(tr,o);ka.subVectors(e,s);const p=tr.dot(ka),_=nr.dot(ka);if(_>=0&&p<=_)return n.copy(s);const E=p*l-c*_;if(E<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(nr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Wf.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Wf,a);const h=1/(m+E+d);return o=E*h,a=d*h,n.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Gs.subVectors(this.max,zr),ir.subVectors(e.a,zr),rr.subVectors(e.b,zr),sr.subVectors(e.c,zr),li.subVectors(rr,ir),ui.subVectors(sr,rr),wi.subVectors(ir,sr);let n=[0,-li.z,li.y,0,-ui.z,ui.y,0,-wi.z,wi.y,li.z,0,-li.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-li.y,li.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Va(n,ir,rr,sr,Gs)||(n=[1,0,0,0,1,0,0,0,1],!Va(n,ir,rr,sr,Gs))?!1:(Vs.crossVectors(li,ui),n=[Vs.x,Vs.y,Vs.z],Va(n,ir,rr,sr,Gs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Hs=new Nr,ir=new F,rr=new F,sr=new F,li=new F,ui=new F,wi=new F,zr=new F,Gs=new F,Vs=new F,Ri=new F;function Va(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ri.fromArray(t,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),c=e.dot(Ri),l=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const xt=new F,Ws=new He;let LE=0;class Fn extends Hi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ws.fromBufferAttribute(this,n),Ws.applyMatrix3(e),this.setXY(n,Ws.x,Ws.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lp extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const DE=new Nr,Hr=new F,Wa=new F;class vu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const n=Hr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Wa)),this.expandByPoint(Hr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NE=0;const an=new ft,Xa=new tn,or=new F,Jt=new Nr,Gr=new Nr,At=new F;class Bn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?Lp:Pp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,n,i){return an.makeTranslation(e,n,i),this.applyMatrix4(an),this}scale(e,n,i){return an.makeScale(e,n,i),this.applyMatrix4(an),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Jt.min,Gr.min),Jt.expandByPoint(At),At.addVectors(Jt.max,Gr.max),Jt.expandByPoint(At)):(Jt.expandByPoint(Gr.min),Jt.expandByPoint(Gr.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(e,l),At.add(or)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new F,c[x]=new F;const l=new F,u=new F,f=new F,d=new He,p=new He,_=new He,E=new F,m=new F;function h(x,b,D){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,D),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,D),u.sub(l),f.sub(l),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(E.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[x].add(E),a[b].add(E),a[D].add(E),c[x].add(m),c[b].add(m),c[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){const D=M[x],I=D.start,U=D.count;for(let Z=I,$=I+U;Z<$;Z+=3)h(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const A=new F,S=new F,w=new F,y=new F;function R(x){w.fromBufferAttribute(r,x),y.copy(w);const b=a[x];A.copy(b),A.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(y,b);const I=S.dot(c[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,b=M.length;x<b;++x){const D=M[x],I=D.start,U=D.count;for(let Z=I,$=I+U;Z<$;Z+=3)R(e.getX(Z+0)),R(e.getX(Z+1)),R(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let E=0,m=c.length;E<m;E++){a.isInterleavedBufferAttribute?p=c[E]*a.data.stride+a.offset:p=c[E]*u;for(let h=0;h<u;h++)d[_++]=l[p++]}return new Fn(d,u,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let FE=0;class $o extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=vr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Ic,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Re(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ic&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wn=new F,Ya=new F,Xs=new F,fi=new F,Za=new F,Ys=new F,qa=new F;class Dp{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,n),Wn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ya.copy(e).add(n).multiplyScalar(.5),Xs.copy(n).sub(e).normalize(),fi.copy(this.origin).sub(Ya);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xs),a=fi.dot(this.direction),c=-fi.dot(Xs),l=fi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*c-a,d=o*a-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const E=1/u;f*=E,d*=E,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ya).addScaledVector(Xs,d),p}intersectSphere(e,n){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,n,i,r,s){Za.subVectors(n,e),Ys.subVectors(i,e),qa.crossVectors(Za,Ys);let o=this.direction.dot(qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const c=a*this.direction.dot(Ys.crossVectors(fi,Ys));if(c<0)return null;const l=a*this.direction.dot(Za.cross(fi));if(l<0||c+l>o)return null;const u=-a*fi.dot(qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class As extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xf=new ft,Ci=new Dp,Zs=new vu,Yf=new F,qs=new F,$s=new F,Ks=new F,$a=new F,js=new F,Zf=new F,Js=new F;class rn extends tn{constructor(e=new Bn,n=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&($a.fromBufferAttribute(f,e),o?js.addScaledVector($a,u):js.addScaledVector($a.sub(n),u))}n.add(js)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Zs.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Zs,Yf)===null||Ci.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ci)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=d.length;_<E;_++){const m=d[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,w=A;S<w;S+=3){const y=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);r=Qs(this,h,e,i,l,u,f,y,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=_,h=E;m<h;m+=3){const M=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);r=Qs(this,o,e,i,l,u,f,M,A,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,E=d.length;_<E;_++){const m=d[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,w=A;S<w;S+=3){const y=S,R=S+1,x=S+2;r=Qs(this,h,e,i,l,u,f,y,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(c.count,p.start+p.count);for(let m=_,h=E;m<h;m+=3){const M=m,A=m+1,S=m+2;r=Qs(this,o,e,i,l,u,f,M,A,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OE(t,e,n,i,r,s,o,a){let c;if(e.side===qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Mi,a),c===null)return null;Js.copy(a),Js.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Js);return l<n.near||l>n.far?null:{distance:l,point:Js.clone(),object:t}}function Qs(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,qs),t.getVertexPosition(c,$s),t.getVertexPosition(l,Ks);const u=OE(t,e,n,i,qs,$s,Ks,Zf);if(u){const f=new F;xn.getBarycoord(Zf,qs,$s,Ks,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,c,l,f,new He)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,c,l,f,new He)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,c,l,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new F,materialIndex:0};xn.getNormal(qs,$s,Ks,d.normal),u.face=d,u.barycoord=f}return u}class UE extends Ht{constructor(e=null,n=1,i=1,r,s,o,a,c,l=Dt,u=Dt,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ka=new F,BE=new F,kE=new Ie;class Pi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ka.subVectors(i,n).cross(BE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ka),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kE.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new vu,zE=new He(.5,.5),eo=new F;class Eu{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ln,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],_=s[8],E=s[9],m=s[10],h=s[11],M=s[12],A=s[13],S=s[14],w=s[15];if(r[0].setComponents(l-o,p-u,h-_,w-M).normalize(),r[1].setComponents(l+o,p+u,h+_,w+M).normalize(),r[2].setComponents(l+a,p+f,h+E,w+A).normalize(),r[3].setComponents(l-a,p-f,h-E,w-A).normalize(),i)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,p-d,h-m,w-S).normalize();else if(r[4].setComponents(l-c,p-d,h-m,w-S).normalize(),n===Ln)r[5].setComponents(l+c,p+d,h+m,w+S).normalize();else if(n===Io)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const n=zE.distanceTo(e.center);return Ii.radius=.7071067811865476+n,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Np extends Ht{constructor(e=[],n=Bi,i,r,s,o,a,c,l,u){super(e,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class br extends Ht{constructor(e,n,i=On,r,s,o,a=Dt,c=Dt,l,u=ni,f=1){if(u!==ni&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class HE extends br{constructor(e,n=On,i=Bi,r,s,o=Dt,a=Dt,c,l=ni){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fp extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ws extends Bn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(f,2));function _(E,m,h,M,A,S,w,y,R,x,b){const D=S/R,I=w/x,U=S/2,Z=w/2,$=y/2,z=R+1,X=x+1;let G=0,j=0;const Q=new F;for(let fe=0;fe<X;fe++){const me=fe*I-Z;for(let xe=0;xe<z;xe++){const Xe=xe*D-U;Q[E]=Xe*M,Q[m]=me*A,Q[h]=$,l.push(Q.x,Q.y,Q.z),Q[E]=0,Q[m]=0,Q[h]=y>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(xe/R),f.push(1-fe/x),G+=1}}for(let fe=0;fe<x;fe++)for(let me=0;me<R;me++){const xe=d+me+z*fe,Xe=d+me+z*(fe+1),ot=d+(me+1)+z*(fe+1),Ye=d+(me+1)+z*fe;c.push(xe,Xe,Ye),c.push(Xe,ot,Ye),j+=6}a.addGroup(p,j,b),p+=j,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ko extends Bn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=n/c,p=[],_=[],E=[],m=[];for(let h=0;h<u;h++){const M=h*d-o;for(let A=0;A<l;A++){const S=A*f-s;_.push(S,-M,0),E.push(0,0,1),m.push(A/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<a;M++){const A=M+l*h,S=M+l*(h+1),w=M+1+l*(h+1),y=M+1+l*h;p.push(A,S,y),p.push(S,w,y)}this.setIndex(p),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(E,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ar extends Bn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new F,d=new F,p=[],_=[],E=[],m=[];for(let h=0;h<=i;h++){const M=[],A=h/i,S=o+A*a,w=e*Math.cos(S),y=Math.sqrt(e*e-w*w);let R=0;h===0&&o===0?R=.5/n:h===i&&c===Math.PI&&(R=-.5/n);for(let x=0;x<=n;x++){const b=x/n,D=r+b*s;f.x=-y*Math.cos(D),f.y=w,f.z=y*Math.sin(D),_.push(f.x,f.y,f.z),d.copy(f).normalize(),E.push(d.x,d.y,d.z),m.push(b+R,1-A),M.push(l++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<n;M++){const A=u[h][M+1],S=u[h][M],w=u[h+1][M],y=u[h+1][M+1];(h!==0||o>0)&&p.push(A,S,y),(h!==i-1||c<Math.PI)&&p.push(S,w,y)}this.setIndex(p),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(E,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function wr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(qf(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(qf(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=wr(t[n]);for(const r in i)e[r]=i[r]}return e}function qf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function GE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Op(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const VE={clone:wr,merge:Vt};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=GE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new He().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class YE extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZE extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qE extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&($f(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!$f(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function $f(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $E{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],_=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const KE=new $E;let Su=class{constructor(e){this.manager=e!==void 0?e:KE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Su.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class jE extends Error{constructor(e,n){super(e),this.response=n}}class JE extends Su{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Xn[e]!==void 0){Xn[e].push({onLoad:n,onProgress:i,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Xn[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let E=0;const m=new ReadableStream({start(h){M();function M(){f.read().then(({done:A,value:S})=>{if(A)h.close();else{E+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:E,total:p});for(let y=0,R=u.length;y<R;y++){const x=u[y];x.onProgress&&x.onProgress(w)}h.enqueue(S),M()}},A=>{h.error(A)})}}});return new Response(m)}else throw new jE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{xi.add(`file:${e}`,l);const u=Xn[e];delete Xn[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ar=new WeakMap;class QE extends Su{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let f=ar.get(o);f===void 0&&(f=[],ar.set(o,f)),f.push({onLoad:n,onError:r})}return o}const a=Es("img");function c(){u(),n&&n(this);const f=ar.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}ar.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),xi.remove(`image:${e}`);const d=ar.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(f)}ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}const to=new F,no=new Gi,An=new F;class Up extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,An.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(to,no,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new F,Kf=new He,jf=new He;class un extends Up{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,n){return this.getViewBounds(e,Kf,jf),n.subVectors(jf,Kf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bp extends Up{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cr=-90,lr=1;class eS extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(cr,lr,e,n);r.layers=this.layers,this.add(r);const s=new un(cr,lr,e,n);s.layers=this.layers,this.add(s);const o=new un(cr,lr,e,n);o.layers=this.layers,this.add(o);const a=new un(cr,lr,e,n);a.layers=this.layers,this.add(a);const c=new un(cr,lr,e,n);c.layers=this.layers,this.add(c);const l=new un(cr,lr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tS extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jf=new ft;class nS{constructor(e,n,i=0,r=1/0){this.ray=new Dp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Jf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jf),this}intersectObject(e,n=!0,i=[]){return gl(e,this,i,n),i.sort(Qf),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)gl(e[r],this,i,n);return i.sort(Qf),i}}function Qf(t,e){return t.distance-e.distance}function gl(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)gl(s[o],e,n,!0)}}const df=class df{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};df.prototype.isMatrix2=!0;let ed=df;function td(t,e,n,i){const r=iS(i);switch(n){case bp:return t*e;case wp:return t*e/r.components*r.byteLength;case fu:return t*e/r.components*r.byteLength;case ki:return t*e*2/r.components*r.byteLength;case du:return t*e*2/r.components*r.byteLength;case Ap:return t*e*3/r.components*r.byteLength;case vn:return t*e*4/r.components*r.byteLength;case hu:return t*e*4/r.components*r.byteLength;case _o:case xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vo:case Eo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Vc:return Math.max(t,16)*Math.max(e,8)/4;case zc:case Gc:return Math.max(t,8)*Math.max(e,8)/2;case Wc:case Xc:case Zc:case qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yc:case wo:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ul:case fl:case dl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hl:case pl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ro:case ml:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iS(t){switch(t){case fn:case Sp:return{byteLength:1,components:1};case _s:case Mp:case ti:return{byteLength:2,components:1};case lu:case uu:return{byteLength:2,components:4};case On:case cu:case Pn:return{byteLength:4,components:1};case Tp:case yp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rS(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(t.bindBuffer(l,a),f.length===0)t.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],E=f[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++d,f[d]=E)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const E=f[p];t.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var sS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oS=`#ifdef USE_ALPHAHASH
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
#endif`,aS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fS=`#ifdef USE_AOMAP
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
#endif`,dS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hS=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xS=`#ifdef USE_IRIDESCENCE
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
#endif`,vS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RS=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IS=`vec3 transformedNormal = objectNormal;
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
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",OS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KS=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,jS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,JS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mM=`#if defined( USE_POINTS_UV )
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
#endif`,gM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`#ifdef USE_MORPHTARGETS
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
#endif`,MM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RM=`#ifdef USE_NORMALMAP
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
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,WM=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,XM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QM=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hT=`#define DISTANCE
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
}`,pT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,ET=`uniform vec3 diffuse;
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
}`,ST=`#define LAMBERT
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
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TT=`#define MATCAP
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
}`,yT=`#define MATCAP
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
}`,bT=`#define NORMAL
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
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wT=`#define PHONG
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
}`,RT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,CT=`#define STANDARD
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
}`,IT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,PT=`#define TOON
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
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,DT=`uniform float size;
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
}`,NT=`uniform vec3 diffuse;
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
}`,FT=`#include <common>
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
}`,OT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,UT=`uniform float rotation;
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
}`,BT=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:sS,alphahash_pars_fragment:oS,alphamap_fragment:aS,alphamap_pars_fragment:cS,alphatest_fragment:lS,alphatest_pars_fragment:uS,aomap_fragment:fS,aomap_pars_fragment:dS,batching_pars_vertex:hS,batching_vertex:pS,begin_vertex:mS,beginnormal_vertex:gS,bsdfs:_S,iridescence_fragment:xS,bumpmap_pars_fragment:vS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:MS,clipping_planes_vertex:TS,color_fragment:yS,color_pars_fragment:bS,color_pars_vertex:AS,color_vertex:wS,common:RS,cube_uv_reflection_fragment:CS,defaultnormal_vertex:IS,displacementmap_pars_vertex:PS,displacementmap_vertex:LS,emissivemap_fragment:DS,emissivemap_pars_fragment:NS,colorspace_fragment:FS,colorspace_pars_fragment:OS,envmap_fragment:US,envmap_common_pars_fragment:BS,envmap_pars_fragment:kS,envmap_pars_vertex:zS,envmap_physical_pars_fragment:jS,envmap_vertex:HS,fog_vertex:GS,fog_pars_vertex:VS,fog_fragment:WS,fog_pars_fragment:XS,gradientmap_pars_fragment:YS,lightmap_pars_fragment:ZS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:$S,lights_pars_begin:KS,lights_toon_fragment:JS,lights_toon_pars_fragment:QS,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:oM,lightprobes_pars_fragment:aM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:lM,logdepthbuf_pars_vertex:uM,logdepthbuf_vertex:fM,map_fragment:dM,map_pars_fragment:hM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:gM,metalnessmap_pars_fragment:_M,morphinstance_vertex:xM,morphcolor_vertex:vM,morphnormal_vertex:EM,morphtarget_pars_vertex:SM,morphtarget_vertex:MM,normal_fragment_begin:TM,normal_fragment_maps:yM,normal_pars_fragment:bM,normal_pars_vertex:AM,normal_vertex:wM,normalmap_pars_fragment:RM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:NM,premultiplied_alpha_fragment:FM,project_vertex:OM,dithering_fragment:UM,dithering_pars_fragment:BM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:HM,shadowmap_pars_vertex:GM,shadowmap_vertex:VM,shadowmask_pars_fragment:WM,skinbase_vertex:XM,skinning_pars_vertex:YM,skinning_vertex:ZM,skinnormal_vertex:qM,specularmap_fragment:$M,specularmap_pars_fragment:KM,tonemapping_fragment:jM,tonemapping_pars_fragment:JM,transmission_fragment:QM,transmission_pars_fragment:eT,uv_pars_fragment:tT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:rT,background_vert:sT,background_frag:oT,backgroundCube_vert:aT,backgroundCube_frag:cT,cube_vert:lT,cube_frag:uT,depth_vert:fT,depth_frag:dT,distance_vert:hT,distance_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:_T,linedashed_frag:xT,meshbasic_vert:vT,meshbasic_frag:ET,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:TT,meshmatcap_frag:yT,meshnormal_vert:bT,meshnormal_frag:AT,meshphong_vert:wT,meshphong_frag:RT,meshphysical_vert:CT,meshphysical_frag:IT,meshtoon_vert:PT,meshtoon_frag:LT,points_vert:DT,points_frag:NT,shadow_vert:FT,shadow_frag:OT,sprite_vert:UT,sprite_frag:BT},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},In={basic:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Vt([le.points,le.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Vt([le.common,le.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Vt([le.sprite,le.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Vt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Vt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};In.physical={uniforms:Vt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const io={r:0,b:0,g:0},kT=new ft,zp=new Ie;zp.set(-1,0,0,0,1,0,0,0,1);function zT(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,c,l,u=null,f=0,d=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const S=M.backgroundBlurriness>0;A=e.get(A,S)}return A}function _(M){let A=!1;const S=p(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(M,A){const S=p(A);S&&(S.isCubeTexture||S.mapping===qo)?(l===void 0&&(l=new rn(new ws(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:wr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zp),l.material.toneMapped=Be.getTransfer(S.colorSpace)!==Je,(u!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new rn(new Ko(2,2),new Sn({name:"BackgroundMaterial",uniforms:wr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Be.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(io,Op(t)),n.buffers.color.setClear(io.r,io.g,io.b,A,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:_,addToRenderList:E,dispose:h}}function HT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(I,U,Z,$,z){let X=!1;const G=f(I,$,Z,U);s!==G&&(s=G,l(s.object)),X=p(I,$,Z,z),X&&_(I,$,Z,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(I,U,Z,$),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return t.createVertexArray()}function l(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,U,Z,$){const z=$.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const G=I.isInstancedMesh===!0?I.id:0;let j=X[G];j===void 0&&(j={},X[G]=j);let Q=j[Z.id];Q===void 0&&(Q={},j[Z.id]=Q);let fe=Q[z];return fe===void 0&&(fe=d(c()),Q[z]=fe),fe}function d(I){const U=[],Z=[],$=[];for(let z=0;z<n;z++)U[z]=0,Z[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Z,attributeDivisors:$,object:I,attributes:{},index:null}}function p(I,U,Z,$){const z=s.attributes,X=U.attributes;let G=0;const j=Z.getAttributes();for(const Q in j)if(j[Q].location>=0){const me=z[Q];let xe=X[Q];if(xe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;G++}return s.attributesNum!==G||s.index!==$}function _(I,U,Z,$){const z={},X=U.attributes;let G=0;const j=Z.getAttributes();for(const Q in j)if(j[Q].location>=0){let me=X[Q];me===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(me=I.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),z[Q]=xe,G++}s.attributes=z,s.attributesNum=G,s.index=$}function E(){const I=s.newAttributes;for(let U=0,Z=I.length;U<Z;U++)I[U]=0}function m(I){h(I,0)}function h(I,U){const Z=s.newAttributes,$=s.enabledAttributes,z=s.attributeDivisors;Z[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),z[I]!==U&&(t.vertexAttribDivisor(I,U),z[I]=U)}function M(){const I=s.newAttributes,U=s.enabledAttributes;for(let Z=0,$=U.length;Z<$;Z++)U[Z]!==I[Z]&&(t.disableVertexAttribArray(Z),U[Z]=0)}function A(I,U,Z,$,z,X,G){G===!0?t.vertexAttribIPointer(I,U,Z,z,X):t.vertexAttribPointer(I,U,Z,$,z,X)}function S(I,U,Z,$){E();const z=$.attributes,X=Z.getAttributes(),G=U.defaultAttributeValues;for(const j in X){const Q=X[j];if(Q.location>=0){let fe=z[j];if(fe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),fe!==void 0){const me=fe.normalized,xe=fe.itemSize,Xe=e.get(fe);if(Xe===void 0)continue;const ot=Xe.buffer,Ye=Xe.type,K=Xe.bytesPerElement,ie=Ye===t.INT||Ye===t.UNSIGNED_INT||fe.gpuType===cu;if(fe.isInterleavedBufferAttribute){const ee=fe.data,Ce=ee.stride,Pe=fe.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)h(Q.location+Ae,ee.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)m(Q.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let Ae=0;Ae<Q.locationSize;Ae++)A(Q.location+Ae,xe/Q.locationSize,Ye,me,Ce*K,(Pe+xe/Q.locationSize*Ae)*K,ie)}else{if(fe.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)h(Q.location+ee,fe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let ee=0;ee<Q.locationSize;ee++)A(Q.location+ee,xe/Q.locationSize,Ye,me,xe*K,xe/Q.locationSize*ee*K,ie)}}else if(G!==void 0){const me=G[j];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(Q.location,me);break;case 3:t.vertexAttrib3fv(Q.location,me);break;case 4:t.vertexAttrib4fv(Q.location,me);break;default:t.vertexAttrib1fv(Q.location,me)}}}}M()}function w(){b();for(const I in i){const U=i[I];for(const Z in U){const $=U[Z];for(const z in $){const X=$[z];for(const G in X)u(X[G].object),delete X[G];delete $[z]}}delete i[I]}}function y(I){if(i[I.id]===void 0)return;const U=i[I.id];for(const Z in U){const $=U[Z];for(const z in $){const X=$[z];for(const G in X)u(X[G].object),delete X[G];delete $[z]}}delete i[I.id]}function R(I){for(const U in i){const Z=i[U];for(const $ in Z){const z=Z[$];if(z[I.id]===void 0)continue;const X=z[I.id];for(const G in X)u(X[G].object),delete X[G];delete z[I.id]}}}function x(I){for(const U in i){const Z=i[U],$=I.isInstancedMesh===!0?I.id:0,z=Z[$];if(z!==void 0){for(const X in z){const G=z[X];for(const j in G)u(G[j].object),delete G[j];delete z[X]}delete Z[$],Object.keys(Z).length===0&&delete i[U]}}}function b(){D(),o=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function GT(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function o(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function VT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==vn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!x)}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Re("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),y=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:y}}function WT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pi,a=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,A=M*4;let S=h.clippingState||null;c.value=S,S=u(_,d,A,p);for(let w=0;w!==A;++w)S[w]=n[w];h.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=c.value,_!==!0||m===null){const h=p+E*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,S=p;A!==E;++A,S+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const _i=4,nd=[.125,.215,.35,.446,.526,.582],Ni=20,XT=256,Vr=new Bp,id=new qe;let ja=null,Ja=0,Qa=0,ec=!1;const YT=new F;class rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=YT}=s;ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ja,Qa),this._renderer.xr.enabled=ec,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:ti,format:vn,colorSpace:vs,depthBuffer:!1},r=sd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(s)),this._blurMaterial=$T(s,e,n),this._ggxMaterial=qT(s,e,n)}return r}_compileMaterial(e){const n=new rn(new Bn,e);this._renderer.compile(n,Vr)}_sceneToCubeUV(e,n,i,r,s){const c=new un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(id),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new ws,new As({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let h=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,h=!0):(m.color.copy(id),h=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const w=this._cubeSize;ur(r,S*w,A>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(E,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bi||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ur(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Vr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,p=f*d,{_lodMax:_}=this,E=this._sizeLods[i],m=3*E*(i>_-_i?i-_+_i:0),h=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-n,ur(s,m,h,3*E,2*E),r.setRenderTarget(s),r.render(a,Vr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,ur(e,m,h,3*E,2*E),r.setRenderTarget(e),r.render(a,Vr)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),E=s/_,m=isFinite(s)?1+Math.floor(u*E):Ni;m>Ni&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const h=[];let M=0;for(let R=0;R<Ni;++R){const x=R/E,b=Math.exp(-x*x/2);h.push(b),R===0?M+=b:R<m&&(M+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const S=this._sizeLods[r],w=3*S*(r>A-_i?r-A+_i:0),y=4*(this._cubeSize-S);ur(n,w,y,3*S,2*S),c.setRenderTarget(n),c.render(f,Vr)}}function ZT(t){const e=[],n=[],i=[];let r=t;const s=t-_i+1+nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>t-_i?c=nd[o-t+_i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,E=3,m=2,h=1,M=new Float32Array(E*_*p),A=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let y=0;y<p;y++){const R=y%3*2/3-1,x=y>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(b,E*_*y),A.set(d,m*_*y);const D=[y,y,y,y,y,y];S.set(D,h*_*y)}const w=new Bn;w.setAttribute("position",new Fn(M,E)),w.setAttribute("uv",new Fn(A,m)),w.setAttribute("faceIndex",new Fn(S,h)),i.push(new rn(w,null)),r>_i&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function sd(t,e,n){const i=new En(t,e,n);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qT(t,e,n){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function $T(t,e,n){const i=new Float32Array(Ni),r=new F(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function od(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ad(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}class Hp extends En{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Np(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:jn});s.uniforms.tEquirect.value=n;const o=new rn(r,s),a=n.minFilter;return n.minFilter===gi&&(n.minFilter=Nt),new eS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function KT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Aa||p===wa)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const E=new Hp(_.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",l),a(E.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,_=p===Aa||p===wa,E=p===Bi||p===yr;if(_||E){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new rd(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return _&&M&&M.height>0||E&&M&&c(M)?(i===null&&(i=new rd(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Aa?d.mapping=Bi:p===wa&&(d.mapping=yr),d}function c(d){let p=0;const _=6;for(let E=0;E<_;E++)d[E]!==void 0&&p++;return p===_}function l(d){const p=d.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function jT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Er("WebGLRenderer: "+i+" extension not supported."),r}}}function JT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,_=f.attributes.position;let E=0;if(_===void 0)return;if(p!==null){const M=p.array;E=p.version;for(let A=0,S=M.length;A<S;A+=3){const w=M[A+0],y=M[A+1],R=M[A+2];d.push(w,y,y,R,R,w)}}else{const M=_.array;E=_.version;for(let A=0,S=M.length/3-1;A<S;A+=3){const w=A+0,y=A+1,R=A+2;d.push(w,y,y,R,R,w)}}const m=new(_.count>=65535?Lp:Pp)(d,1);m.version=E;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function QT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function l(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let E=0;for(let m=0;m<p;m++)E+=d[m];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ey(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ty(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),_===!0&&(A=2),E===!0&&(A=3);let S=a.attributes.position.count*A,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*w*4*f),R=new Cp(y,S,w,f);R.type=Pn,R.needsUpdate=!0;const x=A*4;for(let D=0;D<f;D++){const I=m[D],U=h[D],Z=M[D],$=S*w*4*D;for(let z=0;z<I.count;z++){const X=z*x;p===!0&&(r.fromBufferAttribute(I,z),y[$+X+0]=r.x,y[$+X+1]=r.y,y[$+X+2]=r.z,y[$+X+3]=0),_===!0&&(r.fromBufferAttribute(U,z),y[$+X+4]=r.x,y[$+X+5]=r.y,y[$+X+6]=r.z,y[$+X+7]=0),E===!0&&(r.fromBufferAttribute(Z,z),y[$+X+8]=r.x,y[$+X+9]=r.y,y[$+X+10]=r.z,y[$+X+11]=Z.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new He(S,w)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let E=0;E<l.length;E++)p+=l[E];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ny(t,e,n,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const iy={[au]:"LINEAR_TONE_MAPPING",[pp]:"REINHARD_TONE_MAPPING",[mp]:"CINEON_TONE_MAPPING",[gp]:"ACES_FILMIC_TONE_MAPPING",[xp]:"AGX_TONE_MAPPING",[vp]:"NEUTRAL_TONE_MAPPING",[_p]:"CUSTOM_TONE_MAPPING"};function ry(t,e,n,i,r,s){const o=new En(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new br(e,n):void 0}),a=new En(e,n,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new Bn;c.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dn([0,2,0,0,2,0],2));const l=new YE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new rn(c,l),f=new Bp(-1,1,1,-1,0,1);let d=null,p=null,_=!1,E,m=null,h=[],M=!1;this.setSize=function(A,S){o.setSize(A,S),a.setSize(A,S);for(let w=0;w<h.length;w++){const y=h[w];y.setSize&&y.setSize(A,S)}},this.setEffects=function(A){h=A,M=h.length>0&&h[0].isRenderPass===!0;const S=o.width,w=o.height;for(let y=0;y<h.length;y++){const R=h[y];R.setSize&&R.setSize(S,w)}},this.begin=function(A,S){if(_||A.toneMapping===Nn&&h.length===0)return!1;if(m=S,S!==null){const w=S.width,y=S.height;(o.width!==w||o.height!==y)&&this.setSize(w,y)}return M===!1&&A.setRenderTarget(o),E=A.toneMapping,A.toneMapping=Nn,!0},this.hasRenderPass=function(){return M},this.end=function(A,S){A.toneMapping=E,_=!0;let w=o,y=a;for(let R=0;R<h.length;R++){const x=h[R];if(x.enabled!==!1&&(x.render(A,y,w,S),x.needsSwap!==!1)){const b=w;w=y,y=b}}if(d!==A.outputColorSpace||p!==A.toneMapping){d=A.outputColorSpace,p=A.toneMapping,l.defines={},Be.getTransfer(d)===Je&&(l.defines.SRGB_TRANSFER="");const R=iy[p];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Gp=new Ht,_l=new br(1,1),Vp=new Cp,Wp=new yE,Xp=new Np,cd=[],ld=[],ud=new Float32Array(16),fd=new Float32Array(9),dd=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cd[r];if(s===void 0&&(s=new Float32Array(r),cd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jo(t,e){let n=ld[e];n===void 0&&(n=new Int32Array(e),ld[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),yt(n,e)}}function ay(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),yt(n,e)}}function cy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),yt(n,e)}}function ly(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yt(n,e)}else{if(Tt(n,i))return;dd.set(i),t.uniformMatrix2fv(this.addr,!1,dd),yt(n,i)}}function uy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yt(n,e)}else{if(Tt(n,i))return;fd.set(i),t.uniformMatrix3fv(this.addr,!1,fd),yt(n,i)}}function fy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yt(n,e)}else{if(Tt(n,i))return;ud.set(i),t.uniformMatrix4fv(this.addr,!1,ud),yt(n,i)}}function dy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),yt(n,e)}}function py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),yt(n,e)}}function my(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),yt(n,e)}}function gy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _y(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),yt(n,e)}}function xy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),yt(n,e)}}function vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),yt(n,e)}}function Ey(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_l.compareFunction=n.isReversedDepthBuffer()?mu:pu,s=_l):s=Gp,n.setTexture2D(e||s,r)}function Sy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wp,r)}function My(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xp,r)}function Ty(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vp,r)}function yy(t){switch(t){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return cy;case 35674:return ly;case 35675:return uy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return hy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return xy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Ty}}function by(t,e){t.uniform1fv(this.addr,e)}function Ay(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function wy(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function Ry(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function Cy(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Iy(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Py(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ly(t,e){t.uniform1iv(this.addr,e)}function Dy(t,e){t.uniform2iv(this.addr,e)}function Ny(t,e){t.uniform3iv(this.addr,e)}function Fy(t,e){t.uniform4iv(this.addr,e)}function Oy(t,e){t.uniform1uiv(this.addr,e)}function Uy(t,e){t.uniform2uiv(this.addr,e)}function By(t,e){t.uniform3uiv(this.addr,e)}function ky(t,e){t.uniform4uiv(this.addr,e)}function zy(t,e,n){const i=this.cache,r=e.length,s=Jo(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=_l:o=Gp;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Hy(t,e,n){const i=this.cache,r=e.length,s=Jo(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Wp,s[o])}function Gy(t,e,n){const i=this.cache,r=e.length,s=Jo(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Xp,s[o])}function Vy(t,e,n){const i=this.cache,r=e.length,s=Jo(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Vp,s[o])}function Wy(t){switch(t){case 5126:return by;case 35664:return Ay;case 35665:return wy;case 35666:return Ry;case 35674:return Cy;case 35675:return Iy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return Uy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Vy}}class Xy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yy(n.type)}}class Yy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Wy(n.type)}}class Zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function hd(t,e){t.seq.push(e),t.map[e.id]=e}function qy(t,e,n){const i=t.name,r=i.length;for(tc.lastIndex=0;;){const s=tc.exec(i),o=tc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){hd(n,l===void 0?new Xy(a,t,e):new Yy(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Zy(a),hd(n,f)),n=f}}}class So{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);qy(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function pd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $y=37297;let Ky=0;function jy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const md=new Ie;function Jy(t){Be._getMatrix(md,Be.workingColorSpace,t);const e=`mat3( ${md.elements.map(n=>n.toFixed(4))} )`;switch(Be.getTransfer(t)){case Co:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function gd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+jy(t.getShaderSource(e),a)}else return s}function Qy(t,e){const n=Jy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eb={[au]:"Linear",[pp]:"Reinhard",[mp]:"Cineon",[gp]:"ACESFilmic",[xp]:"AgX",[vp]:"Neutral",[_p]:"Custom"};function tb(t,e){const n=eb[e];return n===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ro=new F;function nb(){Be.getLuminanceCoefficients(ro);const t=ro.x.toFixed(4),e=ro.y.toFixed(4),n=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ib(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function rb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function jr(t){return t!==""}function _d(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(t){return t.replace(ob,cb)}const ab=new Map;function cb(t,e){let n=Ne[e];if(n===void 0){const i=ab.get(e);if(i!==void 0)n=Ne[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xl(n)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(t){return t.replace(lb,ub)}function ub(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fb={[go]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function db(t){return fb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hb={[Bi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function pb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":hb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const mb={[yr]:"ENVMAP_MODE_REFRACTION"};function gb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":mb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _b={[hp]:"ENVMAP_BLENDING_MULTIPLY",[Gv]:"ENVMAP_BLENDING_MIX",[Vv]:"ENVMAP_BLENDING_ADD"};function xb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_b[t.combine]||"ENVMAP_BLENDING_NONE"}function vb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Eb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=db(n),l=pb(n),u=gb(n),f=xb(n),d=vb(n),p=ib(n),_=rb(s),E=r.createProgram();let m,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(jr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(jr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),h=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nn?"#define TONE_MAPPING":"",n.toneMapping!==Nn?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Nn?tb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qy("linearToOutputTexel",n.outputColorSpace),nb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jr).join(`
`)),o=xl(o),o=_d(o,n),o=xd(o,n),a=xl(a),a=_d(a,n),a=xd(a,n),o=vd(o),a=vd(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=M+m+o,S=M+h+a,w=pd(r,r.VERTEX_SHADER,A),y=pd(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,y),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(I){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(E)||"",Z=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(y)||"",z=U.trim(),X=Z.trim(),G=$.trim();let j=!0,Q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,y);else{const fe=gd(r,w,"vertex"),me=gd(r,y,"fragment");ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+fe+`
`+me)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(X===""||G==="")&&(Q=!1);Q&&(I.diagnostics={runnable:j,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(w),r.deleteShader(y),x=new So(r,E),b=sb(r,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(E,$y)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=y,this}let Sb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tb(e),n.set(e,i)),i}}class Tb{constructor(e){this.id=Sb++,this.code=e,this.usedTimes=0}}function yb(t){return t===ki||t===wo||t===Ro}function bb(t,e,n,i,r,s){const o=new xu,a=new Mb,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,b,D,I,U,Z){const $=I.fog,z=U.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||X,G),Q=j&&j.mapping===qo?j.image.height:null,fe=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=me!==void 0?me.length:0;let Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let ot,Ye,K,ie;if(fe){const ve=In[fe];ot=ve.vertexShader,Ye=ve.fragmentShader}else{ot=x.vertexShader,Ye=x.fragmentShader;const ve=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,ve,ct),K=ve.id,ie=ct.id}const ee=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Pe=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,ht=!!x.map,Ue=!!x.matcap,et=!!j,Ze=!!x.aoMap,Ge=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,Et=!!x.normalMap,bt=!!x.displacementMap,It=!!x.emissiveMap,at=!!x.metalnessMap,_t=!!x.roughnessMap,P=x.anisotropy>0,Yt=x.clearcoat>0,je=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,k=P&&!!x.anisotropyMap,V=Yt&&!!x.clearcoatMap,te=Yt&&!!x.clearcoatNormalMap,re=Yt&&!!x.clearcoatRoughnessMap,W=T&&!!x.iridescenceMap,q=T&&!!x.iridescenceThicknessMap,se=g&&!!x.sheenColorMap,Me=g&&!!x.sheenRoughnessMap,ce=!!x.specularMap,oe=!!x.specularColorMap,be=!!x.specularIntensityMap,we=N&&!!x.transmissionMap,Le=N&&!!x.thicknessMap,C=!!x.gradientMap,ne=!!x.alphaMap,Y=x.alphaTest>0,ae=!!x.alphaHash,pe=!!x.extensions;let J=Nn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(J=t.toneMapping);const Se={shaderID:fe,shaderType:x.type,shaderName:x.name,vertexShader:ot,fragmentShader:Ye,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Ue,envMap:et,envMapMode:et&&j.mapping,envMapCubeUVHeight:Q,aoMap:Ze,lightMap:Ge,bumpMap:gt,normalMap:Et,displacementMap:bt,emissiveMap:It,normalMapObjectSpace:Et&&x.normalMapType===Yv,normalMapTangentSpace:Et&&x.normalMapType===Af,packedNormalMap:Et&&x.normalMapType===Af&&yb(x.normalMap.format),metalnessMap:at,roughnessMap:_t,anisotropy:P,anisotropyMap:k,clearcoat:Yt,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:re,dispersion:je,iridescence:T,iridescenceMap:W,iridescenceThicknessMap:q,sheen:g,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:ce,specularColorMap:oe,specularIntensityMap:be,transmission:N,transmissionMap:we,thicknessMap:Le,gradientMap:C,opaque:x.transparent===!1&&x.blending===vr&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Y,alphaHash:ae,combine:x.combine,mapUv:ht&&_(x.map.channel),aoMapUv:Ze&&_(x.aoMap.channel),lightMapUv:Ge&&_(x.lightMap.channel),bumpMapUv:gt&&_(x.bumpMap.channel),normalMapUv:Et&&_(x.normalMap.channel),displacementMapUv:bt&&_(x.displacementMap.channel),emissiveMapUv:It&&_(x.emissiveMap.channel),metalnessMapUv:at&&_(x.metalnessMap.channel),roughnessMapUv:_t&&_(x.roughnessMap.channel),anisotropyMapUv:k&&_(x.anisotropyMap.channel),clearcoatMapUv:V&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:ce&&_(x.specularMap.channel),specularColorMapUv:oe&&_(x.specularColorMap.channel),specularIntensityMapUv:be&&_(x.specularIntensityMap.channel),transmissionMapUv:we&&_(x.transmissionMap.channel),thicknessMapUv:Le&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Et||P),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ht||ne),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:J,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Be.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&Be.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(h(b,x),M(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){const b=p[x.type];let D;if(b){const I=In[b];D=VE.clone(I.uniforms)}else D=x.uniforms;return D}function S(x,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Eb(t,b,x,r),l.push(D),u.set(b,D)),D}function w(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function y(x){a.remove(x)}function R(){a.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:w,releaseShaderCache:y,programs:l,dispose:R}}function Ab(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Sd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Md(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,_,E,m,h){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:_,materialVariant:o(d),groupOrder:E,renderOrder:d.renderOrder,z:m,group:h},t[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=_,M.materialVariant=o(d),M.groupOrder=E,M.renderOrder=d.renderOrder,M.z=m,M.group=h),e++,M}function c(d,p,_,E,m,h){const M=a(d,p,_,E,m,h);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):n.push(M)}function l(d,p,_,E,m,h){const M=a(d,p,_,E,m,h);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):n.unshift(M)}function u(d,p,_){n.length>1&&n.sort(d||wb),i.length>1&&i.sort(p||Sd),r.length>1&&r.sort(p||Sd),_&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Rb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Md,t.set(i,[o])):r>=s.length?(o=new Md,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Pb=0;function Lb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Db(t){const e=new Cb,n=Ib(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new ft,o=new ft;function a(l){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,E=0,m=0,h=0,M=0,A=0,S=0,w=0,y=0,R=0;l.sort(Lb);for(let b=0,D=l.length;b<D;b++){const I=l[b],U=I.color,Z=I.intensity,$=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ki?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*Z,f+=U.g*Z,d+=U.b*Z;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],Z);R++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,j=n.get(I);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=X,p++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(Z),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[E]=X;const G=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&y++),i.spotLightMatrix[E]=G.matrix,I.castShadow){const j=n.get(I);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[E]=j,i.spotShadowMap[E]=z,S++}E++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(U).multiplyScalar(Z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=X,m++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const G=I.shadow,j=n.get(I);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=I.shadow.matrix,A++}i.point[_]=X,_++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(Z),X.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[h]=X,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==S||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+w-y,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=S,x.numSpotMaps=w,x.numLightProbes=R,i.version=Pb++)}function c(l,u){let f=0,d=0,p=0,_=0,E=0;const m=u.matrixWorldInverse;for(let h=0,M=l.length;h<M;h++){const A=l[h];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(A.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:a,setupView:c,state:i}}function Td(t){const e=new Db(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Nb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Td(t),e.set(r,[a])):s>=o.length?(a=new Td(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ub=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Bb=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],yd=new ft,Wr=new F,nc=new F;function kb(t,e,n){let i=new Eu;const r=new He,s=new He,o=new ut,a=new ZE,c=new qE,l={},u=n.maxTextureSize,f={[Mi]:qt,[qt]:Mi,[qn]:qn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Fb,fragmentShader:Ob}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let h=this.type;this.render=function(y,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Tv&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=go);const b=t.getRenderTarget(),D=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),U=t.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=h!==this.type;Z&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=y.length;$<z;$++){const X=y[$],G=X.shadow;if(G===void 0){Re("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const j=G.getFrameExtents();r.multiply(j),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,G.mapSize.y=s.y));const Q=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Kr){if(X.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new En(r.x,r.y,{format:ki,type:ti,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new br(r.x,r.y,Pn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ni,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dt,G.map.depthTexture.magFilter=Dt}else X.isPointLight?(G.map=new Hp(r.x),G.map.depthTexture=new HE(r.x,On)):(G.map=new En(r.x,r.y),G.map.depthTexture=new br(r.x,r.y,On)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ni,this.type===go?(G.map.depthTexture.compareFunction=Q?mu:pu,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dt,G.map.depthTexture.magFilter=Dt);G.camera.updateProjectionMatrix()}const fe=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<fe;me++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,me),t.clear();else{me===0&&(t.setRenderTarget(G.map),t.clear());const xe=G.getViewport(me);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o)}if(X.isPointLight){const xe=G.camera,Xe=G.matrix,ot=X.distance||xe.far;ot!==xe.far&&(xe.far=ot,xe.updateProjectionMatrix()),Wr.setFromMatrixPosition(X.matrixWorld),xe.position.copy(Wr),nc.copy(xe.position),nc.add(Ub[me]),xe.up.copy(Bb[me]),xe.lookAt(nc),xe.updateMatrixWorld(),Xe.makeTranslation(-Wr.x,-Wr.y,-Wr.z),yd.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yd,xe.coordinateSystem,xe.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),S(R,x,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Kr&&M(G,x),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,D,I)};function M(y,R){const x=e.update(E);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new En(r.x,r.y,{format:ki,type:ti})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,E,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(R,null,x,p,E,null)}function A(y,R,x,b){let D=null;const I=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)D=I;else if(D=x.isPointLight===!0?c:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=D.uuid,Z=R.uuid;let $=l[U];$===void 0&&($={},l[U]=$);let z=$[Z];z===void 0&&(z=D.clone(),$[Z]=z,R.addEventListener("dispose",w)),D=z}if(D.visible=R.visible,D.wireframe=R.wireframe,b===Kr?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:f[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const U=t.properties.get(D);U.light=x}return D}function S(y,R,x,b,D){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===Kr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),$=y.material;if(Array.isArray($)){const z=Z.groups;for(let X=0,G=z.length;X<G;X++){const j=z[X],Q=$[j.materialIndex];if(Q&&Q.visible){const fe=A(y,Q,b,D);y.onBeforeShadow(t,y,R,x,Z,fe,j),t.renderBufferDirect(x,null,Z,fe,y,j),y.onAfterShadow(t,y,R,x,Z,fe,j)}}}else if($.visible){const z=A(y,$,b,D);y.onBeforeShadow(t,y,R,x,Z,z,null),t.renderBufferDirect(x,null,Z,z,y,null),y.onAfterShadow(t,y,R,x,Z,z,null)}}const U=y.children;for(let Z=0,$=U.length;Z<$;Z++)S(U[Z],R,x,b,D)}function w(y){y.target.removeEventListener("dispose",w);for(const x in l){const b=l[x],D=y.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function zb(t,e){function n(){let C=!1;const ne=new ut;let Y=null;const ae=new ut(0,0,0,0);return{setMask:function(pe){Y!==pe&&!C&&(t.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){C=pe},setClear:function(pe,J,Se,ve,ct){ct===!0&&(pe*=ve,J*=ve,Se*=ve),ne.set(pe,J,Se,ve),ae.equals(ne)===!1&&(t.clearColor(pe,J,Se,ve),ae.copy(ne))},reset:function(){C=!1,Y=null,ae.set(-1,0,0,0)}}}function i(){let C=!1,ne=!1,Y=null,ae=null,pe=null;return{setReversed:function(J){if(ne!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ne=J;const ve=pe;pe=null,this.setClear(ve)}},getReversed:function(){return ne},setTest:function(J){J?ee(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(J){Y!==J&&!C&&(t.depthMask(J),Y=J)},setFunc:function(J){if(ne&&(J=nE[J]),ae!==J){switch(J){case Pc:t.depthFunc(t.NEVER);break;case Lc:t.depthFunc(t.ALWAYS);break;case Dc:t.depthFunc(t.LESS);break;case Tr:t.depthFunc(t.LEQUAL);break;case Nc:t.depthFunc(t.EQUAL);break;case Fc:t.depthFunc(t.GEQUAL);break;case Oc:t.depthFunc(t.GREATER);break;case Uc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=J}},setLocked:function(J){C=J},setClear:function(J){pe!==J&&(pe=J,ne&&(J=1-J),t.clearDepth(J))},reset:function(){C=!1,Y=null,ae=null,pe=null,ne=!1}}}function r(){let C=!1,ne=null,Y=null,ae=null,pe=null,J=null,Se=null,ve=null,ct=null;return{setTest:function(it){C||(it?ee(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(it){ne!==it&&!C&&(t.stencilMask(it),ne=it)},setFunc:function(it,Tn,yn){(Y!==it||ae!==Tn||pe!==yn)&&(t.stencilFunc(it,Tn,yn),Y=it,ae=Tn,pe=yn)},setOp:function(it,Tn,yn){(J!==it||Se!==Tn||ve!==yn)&&(t.stencilOp(it,Tn,yn),J=it,Se=Tn,ve=yn)},setLocked:function(it){C=it},setClear:function(it){ct!==it&&(t.clearStencil(it),ct=it)},reset:function(){C=!1,ne=null,Y=null,ae=null,pe=null,J=null,Se=null,ve=null,ct=null}}}const s=new n,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d={},p=new WeakMap,_=[],E=null,m=!1,h=null,M=null,A=null,S=null,w=null,y=null,R=null,x=new qe(0,0,0),b=0,D=!1,I=null,U=null,Z=null,$=null,z=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=j>=2);let fe=null,me={};const xe=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),ot=new ut().fromArray(xe),Ye=new ut().fromArray(Xe);function K(C,ne,Y,ae){const pe=new Uint8Array(4),J=t.createTexture();t.bindTexture(C,J),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<Y;Se++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ne+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return J}const ie={};ie[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(t.DEPTH_TEST),o.setFunc(Tr),gt(!1),Et(Mf),ee(t.CULL_FACE),Ze(jn);function ee(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function Ce(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function Pe(C,ne){return d[C]!==ne?(t.bindFramebuffer(C,ne),d[C]=ne,C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ne),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(C,ne){let Y=_,ae=!1;if(C){Y=p.get(ne),Y===void 0&&(Y=[],p.set(ne,Y));const pe=C.textures;if(Y.length!==pe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Se=pe.length;J<Se;J++)Y[J]=t.COLOR_ATTACHMENT0+J;Y.length=pe.length,ae=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ae=!0);ae&&t.drawBuffers(Y)}function ht(C){return E!==C?(t.useProgram(C),E=C,!0):!1}const Ue={[Di]:t.FUNC_ADD,[bv]:t.FUNC_SUBTRACT,[Av]:t.FUNC_REVERSE_SUBTRACT};Ue[wv]=t.MIN,Ue[Rv]=t.MAX;const et={[Cv]:t.ZERO,[Iv]:t.ONE,[Pv]:t.SRC_COLOR,[Cc]:t.SRC_ALPHA,[Uv]:t.SRC_ALPHA_SATURATE,[Fv]:t.DST_COLOR,[Dv]:t.DST_ALPHA,[Lv]:t.ONE_MINUS_SRC_COLOR,[Ic]:t.ONE_MINUS_SRC_ALPHA,[Ov]:t.ONE_MINUS_DST_COLOR,[Nv]:t.ONE_MINUS_DST_ALPHA,[Bv]:t.CONSTANT_COLOR,[kv]:t.ONE_MINUS_CONSTANT_COLOR,[zv]:t.CONSTANT_ALPHA,[Hv]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(C,ne,Y,ae,pe,J,Se,ve,ct,it){if(C===jn){m===!0&&(Ce(t.BLEND),m=!1);return}if(m===!1&&(ee(t.BLEND),m=!0),C!==yv){if(C!==h||it!==D){if((M!==Di||w!==Di)&&(t.blendEquation(t.FUNC_ADD),M=Di,w=Di),it)switch(C){case vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFunc(t.ONE,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ze("WebGLState: Invalid blending: ",C);break}else switch(C){case vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case yf:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bf:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",C);break}A=null,S=null,y=null,R=null,x.set(0,0,0),b=0,h=C,D=it}return}pe=pe||ne,J=J||Y,Se=Se||ae,(ne!==M||pe!==w)&&(t.blendEquationSeparate(Ue[ne],Ue[pe]),M=ne,w=pe),(Y!==A||ae!==S||J!==y||Se!==R)&&(t.blendFuncSeparate(et[Y],et[ae],et[J],et[Se]),A=Y,S=ae,y=J,R=Se),(ve.equals(x)===!1||ct!==b)&&(t.blendColor(ve.r,ve.g,ve.b,ct),x.copy(ve),b=ct),h=C,D=!1}function Ge(C,ne){C.side===qn?Ce(t.CULL_FACE):ee(t.CULL_FACE);let Y=C.side===qt;ne&&(Y=!Y),gt(Y),C.blending===vr&&C.transparent===!1?Ze(jn):Ze(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const ae=C.stencilWrite;a.setTest(ae),ae&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),It(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function gt(C){I!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),I=C)}function Et(C){C!==Sv?(ee(t.CULL_FACE),C!==U&&(C===Mf?t.cullFace(t.BACK):C===Mv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),U=C}function bt(C){C!==Z&&(G&&t.lineWidth(C),Z=C)}function It(C,ne,Y){C?(ee(t.POLYGON_OFFSET_FILL),($!==ne||z!==Y)&&($=ne,z=Y,o.getReversed()&&(ne=-ne),t.polygonOffset(ne,Y))):Ce(t.POLYGON_OFFSET_FILL)}function at(C){C?ee(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function _t(C){C===void 0&&(C=t.TEXTURE0+X-1),fe!==C&&(t.activeTexture(C),fe=C)}function P(C,ne,Y){Y===void 0&&(fe===null?Y=t.TEXTURE0+X-1:Y=fe);let ae=me[Y];ae===void 0&&(ae={type:void 0,texture:void 0},me[Y]=ae),(ae.type!==C||ae.texture!==ne)&&(fe!==Y&&(t.activeTexture(Y),fe=Y),t.bindTexture(C,ne||ie[C]),ae.type=C,ae.texture=ne)}function Yt(){const C=me[fe];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function je(){try{t.compressedTexImage2D(...arguments)}catch(C){ze("WebGLState:",C)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(C){ze("WebGLState:",C)}}function g(){try{t.texSubImage2D(...arguments)}catch(C){ze("WebGLState:",C)}}function N(){try{t.texSubImage3D(...arguments)}catch(C){ze("WebGLState:",C)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(C){ze("WebGLState:",C)}}function V(){try{t.compressedTexSubImage3D(...arguments)}catch(C){ze("WebGLState:",C)}}function te(){try{t.texStorage2D(...arguments)}catch(C){ze("WebGLState:",C)}}function re(){try{t.texStorage3D(...arguments)}catch(C){ze("WebGLState:",C)}}function W(){try{t.texImage2D(...arguments)}catch(C){ze("WebGLState:",C)}}function q(){try{t.texImage3D(...arguments)}catch(C){ze("WebGLState:",C)}}function se(C){return f[C]!==void 0?f[C]:t.getParameter(C)}function Me(C,ne){f[C]!==ne&&(t.pixelStorei(C,ne),f[C]=ne)}function ce(C){ot.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),ot.copy(C))}function oe(C){Ye.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),Ye.copy(C))}function be(C,ne){let Y=l.get(ne);Y===void 0&&(Y=new WeakMap,l.set(ne,Y));let ae=Y.get(C);ae===void 0&&(ae=t.getUniformBlockIndex(ne,C.name),Y.set(C,ae))}function we(C,ne){const ae=l.get(ne).get(C);c.get(ne)!==ae&&(t.uniformBlockBinding(ne,ae,C.__bindingPointIndex),c.set(ne,ae))}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},fe=null,me={},d={},p=new WeakMap,_=[],E=null,m=!1,h=null,M=null,A=null,S=null,w=null,y=null,R=null,x=new qe(0,0,0),b=0,D=!1,I=null,U=null,Z=null,$=null,z=null,ot.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:Ce,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:ht,setBlending:Ze,setMaterial:Ge,setFlipSided:gt,setCullFace:Et,setLineWidth:bt,setPolygonOffset:It,setScissorTest:at,activeTexture:_t,bindTexture:P,unbindTexture:Yt,compressedTexImage2D:je,compressedTexImage3D:T,texImage2D:W,texImage3D:q,pixelStorei:Me,getParameter:se,updateUBOMapping:be,uniformBlockBinding:we,texStorage2D:te,texStorage3D:re,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:V,scissor:ce,viewport:oe,reset:Le}}function Hb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,g){return _?new OffscreenCanvas(T,g):Es("canvas")}function m(T,g,N){let k=1;const V=je(T);if((V.width>N||V.height>N)&&(k=N/Math.max(V.width,V.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const te=Math.floor(k*V.width),re=Math.floor(k*V.height);d===void 0&&(d=E(te,re));const W=g?E(te,re):d;return W.width=te,W.height=re,W.getContext("2d").drawImage(T,0,0,te,re),Re("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+te+"x"+re+")."),W}else return"data"in T&&Re("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),T;return T}function h(T){return T.generateMipmaps}function M(T){t.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(T,g,N,k,V,te=!1){if(T!==null){if(t[T]!==void 0)return t[T];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;k&&(re=e.get("EXT_texture_norm16"),re||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=g;if(g===t.RED&&(N===t.FLOAT&&(W=t.R32F),N===t.HALF_FLOAT&&(W=t.R16F),N===t.UNSIGNED_BYTE&&(W=t.R8),N===t.UNSIGNED_SHORT&&re&&(W=re.R16_EXT),N===t.SHORT&&re&&(W=re.R16_SNORM_EXT)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.R8UI),N===t.UNSIGNED_SHORT&&(W=t.R16UI),N===t.UNSIGNED_INT&&(W=t.R32UI),N===t.BYTE&&(W=t.R8I),N===t.SHORT&&(W=t.R16I),N===t.INT&&(W=t.R32I)),g===t.RG&&(N===t.FLOAT&&(W=t.RG32F),N===t.HALF_FLOAT&&(W=t.RG16F),N===t.UNSIGNED_BYTE&&(W=t.RG8),N===t.UNSIGNED_SHORT&&re&&(W=re.RG16_EXT),N===t.SHORT&&re&&(W=re.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RG8UI),N===t.UNSIGNED_SHORT&&(W=t.RG16UI),N===t.UNSIGNED_INT&&(W=t.RG32UI),N===t.BYTE&&(W=t.RG8I),N===t.SHORT&&(W=t.RG16I),N===t.INT&&(W=t.RG32I)),g===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RGB8UI),N===t.UNSIGNED_SHORT&&(W=t.RGB16UI),N===t.UNSIGNED_INT&&(W=t.RGB32UI),N===t.BYTE&&(W=t.RGB8I),N===t.SHORT&&(W=t.RGB16I),N===t.INT&&(W=t.RGB32I)),g===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),N===t.UNSIGNED_INT&&(W=t.RGBA32UI),N===t.BYTE&&(W=t.RGBA8I),N===t.SHORT&&(W=t.RGBA16I),N===t.INT&&(W=t.RGBA32I)),g===t.RGB&&(N===t.UNSIGNED_SHORT&&re&&(W=re.RGB16_EXT),N===t.SHORT&&re&&(W=re.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),g===t.RGBA){const q=te?Co:Be.getTransfer(V);N===t.FLOAT&&(W=t.RGBA32F),N===t.HALF_FLOAT&&(W=t.RGBA16F),N===t.UNSIGNED_BYTE&&(W=q===Je?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&re&&(W=re.RGBA16_EXT),N===t.SHORT&&re&&(W=re.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function w(T,g){let N;return T?g===null||g===On||g===xs?N=t.DEPTH24_STENCIL8:g===Pn?N=t.DEPTH32F_STENCIL8:g===_s&&(N=t.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===On||g===xs?N=t.DEPTH_COMPONENT24:g===Pn?N=t.DEPTH_COMPONENT32F:g===_s&&(N=t.DEPTH_COMPONENT16),N}function y(T,g){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){const g=T.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(T){const g=T.target;g.removeEventListener("dispose",x),I(g)}function b(T){const g=i.get(T);if(g.__webglInit===void 0)return;const N=T.source,k=p.get(N);if(k){const V=k[g.__cacheKey];V.usedTimes--,V.usedTimes===0&&D(T),Object.keys(k).length===0&&p.delete(N)}i.remove(T)}function D(T){const g=i.get(T);t.deleteTexture(g.__webglTexture);const N=T.source,k=p.get(N);delete k[g.__cacheKey],o.memory.textures--}function I(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let V=0;V<g.__webglFramebuffer[k].length;V++)t.deleteFramebuffer(g.__webglFramebuffer[k][V]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=T.textures;for(let k=0,V=N.length;k<V;k++){const te=i.get(N[k]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(N[k])}i.remove(T)}let U=0;function Z(){U=0}function $(){return U}function z(T){U=T}function X(){const T=U;return T>=r.maxTextures&&Re("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function G(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){const N=i.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const k=T.image;if(k===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,T,g);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function Q(T,g){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ce(N,T,g);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function fe(T,g){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ce(N,T,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function me(T,g){const N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Pe(N,T,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const xe={[Bc]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[kc]:t.MIRRORED_REPEAT},Xe={[Dt]:t.NEAREST,[Wv]:t.NEAREST_MIPMAP_NEAREST,[Us]:t.NEAREST_MIPMAP_LINEAR,[Nt]:t.LINEAR,[Ra]:t.LINEAR_MIPMAP_NEAREST,[gi]:t.LINEAR_MIPMAP_LINEAR},ot={[Zv]:t.NEVER,[Jv]:t.ALWAYS,[qv]:t.LESS,[pu]:t.LEQUAL,[$v]:t.EQUAL,[mu]:t.GEQUAL,[Kv]:t.GREATER,[jv]:t.NOTEQUAL};function Ye(T,g){if(g.type===Pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===Ra||g.magFilter===Us||g.magFilter===gi||g.minFilter===Nt||g.minFilter===Ra||g.minFilter===Us||g.minFilter===gi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,xe[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,xe[g.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,xe[g.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Xe[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ot[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Us&&g.minFilter!==gi||g.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(T,g){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));const k=g.source;let V=p.get(k);V===void 0&&(V={},p.set(k,V));const te=G(g);if(te!==T.__cacheKey){V[te]===void 0&&(V[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),V[te].usedTimes++;const re=V[T.__cacheKey];re!==void 0&&(V[T.__cacheKey].usedTimes--,re.usedTimes===0&&D(g)),T.__cacheKey=te,T.__webglTexture=V[te].texture}return N}function ie(T,g,N){return Math.floor(Math.floor(T/N)/g)}function ee(T,g,N,k){const te=T.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,N,k,g.data);else{te.sort((Me,ce)=>Me.start-ce.start);let re=0;for(let Me=1;Me<te.length;Me++){const ce=te[re],oe=te[Me],be=ce.start+ce.count,we=ie(oe.start,g.width,4),Le=ie(ce.start,g.width,4);oe.start<=be+1&&we===Le&&ie(oe.start+oe.count-1,g.width,4)===we?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++re,te[re]=oe)}te.length=re+1;const W=n.getParameter(t.UNPACK_ROW_LENGTH),q=n.getParameter(t.UNPACK_SKIP_PIXELS),se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Me=0,ce=te.length;Me<ce;Me++){const oe=te[Me],be=Math.floor(oe.start/4),we=Math.ceil(oe.count/4),Le=be%g.width,C=Math.floor(be/g.width),ne=we,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(t.UNPACK_SKIP_ROWS,C),n.texSubImage2D(t.TEXTURE_2D,0,Le,C,ne,Y,N,k,g.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,q),n.pixelStorei(t.UNPACK_SKIP_ROWS,se)}}function Ce(T,g,N){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const V=K(T,g),te=g.source;n.bindTexture(k,T.__webglTexture,t.TEXTURE0+N);const re=i.get(te);if(te.version!==re.__version||V===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Y=Be.getPrimaries(Be.workingColorSpace),ae=g.colorSpace===hi?null:Be.getPrimaries(g.colorSpace),pe=g.colorSpace===hi||Y===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let q=m(g.image,!1,r.maxTextureSize);q=Yt(g,q);const se=s.convert(g.format,g.colorSpace),Me=s.convert(g.type);let ce=S(g.internalFormat,se,Me,g.normalized,g.colorSpace,g.isVideoTexture);Ye(k,g);let oe;const be=g.mipmaps,we=g.isVideoTexture!==!0,Le=re.__version===void 0||V===!0,C=te.dataReady,ne=y(g,q);if(g.isDepthTexture)ce=w(g.format===Oi,g.type),Le&&(we?n.texStorage2D(t.TEXTURE_2D,1,ce,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,ce,q.width,q.height,0,se,Me,null));else if(g.isDataTexture)if(be.length>0){we&&Le&&n.texStorage2D(t.TEXTURE_2D,ne,ce,be[0].width,be[0].height);for(let Y=0,ae=be.length;Y<ae;Y++)oe=be[Y],we?C&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,se,Me,oe.data):n.texImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,se,Me,oe.data);g.generateMipmaps=!1}else we?(Le&&n.texStorage2D(t.TEXTURE_2D,ne,ce,q.width,q.height),C&&ee(g,q,se,Me)):n.texImage2D(t.TEXTURE_2D,0,ce,q.width,q.height,0,se,Me,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,ce,be[0].width,be[0].height,q.depth);for(let Y=0,ae=be.length;Y<ae;Y++)if(oe=be[Y],g.format!==vn)if(se!==null)if(we){if(C)if(g.layerUpdates.size>0){const pe=td(oe.width,oe.height,g.format,g.type);for(const J of g.layerUpdates){const Se=oe.data.subarray(J*pe/oe.data.BYTES_PER_ELEMENT,(J+1)*pe/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,J,oe.width,oe.height,1,se,Se)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,q.depth,se,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ce,oe.width,oe.height,q.depth,0,oe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?C&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,q.depth,se,Me,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ce,oe.width,oe.height,q.depth,0,se,Me,oe.data)}else{we&&Le&&n.texStorage2D(t.TEXTURE_2D,ne,ce,be[0].width,be[0].height);for(let Y=0,ae=be.length;Y<ae;Y++)oe=be[Y],g.format!==vn?se!==null?we?C&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,se,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,oe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?C&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,se,Me,oe.data):n.texImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,se,Me,oe.data)}else if(g.isDataArrayTexture)if(we){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,ce,q.width,q.height,q.depth),C)if(g.layerUpdates.size>0){const Y=td(q.width,q.height,g.format,g.type);for(const ae of g.layerUpdates){const pe=q.data.subarray(ae*Y/q.data.BYTES_PER_ELEMENT,(ae+1)*Y/q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,se,Me,pe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,se,Me,q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,q.width,q.height,q.depth,0,se,Me,q.data);else if(g.isData3DTexture)we?(Le&&n.texStorage3D(t.TEXTURE_3D,ne,ce,q.width,q.height,q.depth),C&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,se,Me,q.data)):n.texImage3D(t.TEXTURE_3D,0,ce,q.width,q.height,q.depth,0,se,Me,q.data);else if(g.isFramebufferTexture){if(Le)if(we)n.texStorage2D(t.TEXTURE_2D,ne,ce,q.width,q.height);else{let Y=q.width,ae=q.height;for(let pe=0;pe<ne;pe++)n.texImage2D(t.TEXTURE_2D,pe,ce,Y,ae,0,se,Me,null),Y>>=1,ae>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),q.parentNode!==Y){Y.appendChild(q),f.add(g),Y.onpaint=ae=>{const pe=ae.changedElements;for(const J of f)pe.includes(J.image)&&(J.needsUpdate=!0)},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,q);else{const pe=t.RGBA,J=t.RGBA,Se=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,pe,J,Se,q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(we&&Le){const Y=je(be[0]);n.texStorage2D(t.TEXTURE_2D,ne,ce,Y.width,Y.height)}for(let Y=0,ae=be.length;Y<ae;Y++)oe=be[Y],we?C&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se,Me,oe):n.texImage2D(t.TEXTURE_2D,Y,ce,se,Me,oe);g.generateMipmaps=!1}else if(we){if(Le){const Y=je(q);n.texStorage2D(t.TEXTURE_2D,ne,ce,Y.width,Y.height)}C&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,Me,q)}else n.texImage2D(t.TEXTURE_2D,0,ce,se,Me,q);h(g)&&M(k),re.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Pe(T,g,N){if(g.image.length!==6)return;const k=K(T,g),V=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);const te=i.get(V);if(V.version!==te.__version||k===!0){n.activeTexture(t.TEXTURE0+N);const re=Be.getPrimaries(Be.workingColorSpace),W=g.colorSpace===hi?null:Be.getPrimaries(g.colorSpace),q=g.colorSpace===hi||re===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const se=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!se&&!Me?ce[J]=m(g.image[J],!0,r.maxCubemapSize):ce[J]=Me?g.image[J].image:g.image[J],ce[J]=Yt(g,ce[J]);const oe=ce[0],be=s.convert(g.format,g.colorSpace),we=s.convert(g.type),Le=S(g.internalFormat,be,we,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,ne=te.__version===void 0||k===!0,Y=V.dataReady;let ae=y(g,oe);Ye(t.TEXTURE_CUBE_MAP,g);let pe;if(se){C&&ne&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Le,oe.width,oe.height);for(let J=0;J<6;J++){pe=ce[J].mipmaps;for(let Se=0;Se<pe.length;Se++){const ve=pe[Se];g.format!==vn?be!==null?C?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,ve.width,ve.height,be,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Le,ve.width,ve.height,0,ve.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,ve.width,ve.height,be,we,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Le,ve.width,ve.height,0,be,we,ve.data)}}}else{if(pe=g.mipmaps,C&&ne){pe.length>0&&ae++;const J=je(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Le,J.width,J.height)}for(let J=0;J<6;J++)if(Me){C?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,be,we,ce[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,ce[J].width,ce[J].height,0,be,we,ce[J].data);for(let Se=0;Se<pe.length;Se++){const ct=pe[Se].image[J].image;C?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,ct.width,ct.height,be,we,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Le,ct.width,ct.height,0,be,we,ct.data)}}else{C?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,we,ce[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,be,we,ce[J]);for(let Se=0;Se<pe.length;Se++){const ve=pe[Se];C?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,be,we,ve.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Le,be,we,ve.image[J])}}}h(g)&&M(t.TEXTURE_CUBE_MAP),te.__version=V.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ae(T,g,N,k,V,te){const re=s.convert(N.format,N.colorSpace),W=s.convert(N.type),q=S(N.internalFormat,re,W,N.normalized,N.colorSpace),se=i.get(g),Me=i.get(N);if(Me.__renderTarget=g,!se.__hasExternalTextures){const ce=Math.max(1,g.width>>te),oe=Math.max(1,g.height>>te);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,te,q,ce,oe,g.depth,0,re,W,null):n.texImage2D(V,te,q,ce,oe,0,re,W,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),_t(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,V,Me.__webglTexture,0,at(g)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,V,Me.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(T,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){const k=g.depthTexture,V=k&&k.isDepthTexture?k.type:null,te=w(g.stencilBuffer,V),re=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_t(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(g),te,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(g),te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,te,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,T)}else{const k=g.textures;for(let V=0;V<k.length;V++){const te=k[V],re=s.convert(te.format,te.colorSpace),W=s.convert(te.type),q=S(te.internalFormat,re,W,te.normalized,te.colorSpace);_t(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(g),q,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(g),q,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,q,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(T,g,N){const k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=i.get(g.depthTexture);if(V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(V.__webglInit===void 0&&(V.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),V.__webglTexture===void 0){V.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,g.depthTexture);const se=s.convert(g.depthTexture.format),Me=s.convert(g.depthTexture.type);let ce;g.depthTexture.format===ni?ce=t.DEPTH_COMPONENT24:g.depthTexture.format===Oi&&(ce=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,g.width,g.height,0,se,Me,null)}}else j(g.depthTexture,0);const te=V.__webglTexture,re=at(g),W=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,q=g.depthTexture.format===Oi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===ni)_t(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,W,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,q,W,te,0);else if(g.depthTexture.format===Oi)_t(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,W,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,q,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(T){const g=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const V=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",V)};k.addEventListener("dispose",V),g.__depthDisposeCallback=V}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)Ue(g.__webglFramebuffer[k],T,k);else{const k=T.texture.mipmaps;k&&k.length>0?Ue(g.__webglFramebuffer[0],T,0):Ue(g.__webglFramebuffer,T,0)}else if(N){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),ht(g.__webglDepthbuffer[k],T,!1);else{const V=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,te)}}else{const k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ht(g.__webglDepthbuffer,T,!1);else{const V=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(T,g,N){const k=i.get(T);g!==void 0&&Ae(k.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&et(T)}function Ge(T){const g=T.texture,N=i.get(T),k=i.get(g);T.addEventListener("dispose",x);const V=T.textures,te=T.isWebGLCubeRenderTarget===!0,re=V.length>1;if(re||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,o.memory.textures++),te){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let q=0;q<g.mipmaps.length;q++)N.__webglFramebuffer[W][q]=t.createFramebuffer()}else N.__webglFramebuffer[W]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)N.__webglFramebuffer[W]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(re)for(let W=0,q=V.length;W<q;W++){const se=i.get(V[W]);se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<V.length;W++){const q=V[W];N.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[W]);const se=s.convert(q.format,q.colorSpace),Me=s.convert(q.type),ce=S(q.internalFormat,se,Me,q.normalized,q.colorSpace,T.isXRRenderTarget===!0),oe=at(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ce,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,N.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ht(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)Ae(N.__webglFramebuffer[W][q],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,q);else Ae(N.__webglFramebuffer[W],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);h(g)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){for(let W=0,q=V.length;W<q;W++){const se=V[W],Me=i.get(se);let ce=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Me.__webglTexture),Ye(ce,se),Ae(N.__webglFramebuffer,T,se,t.COLOR_ATTACHMENT0+W,ce,0),h(se)&&M(ce)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(W,k.__webglTexture),Ye(W,g),g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)Ae(N.__webglFramebuffer[q],T,g,t.COLOR_ATTACHMENT0,W,q);else Ae(N.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,W,0);h(g)&&M(W),n.unbindTexture()}T.depthBuffer&&et(T)}function gt(T){const g=T.textures;for(let N=0,k=g.length;N<k;N++){const V=g[N];if(h(V)){const te=A(T),re=i.get(V).__webglTexture;n.bindTexture(te,re),M(te),n.unbindTexture()}}}const Et=[],bt=[];function It(T){if(T.samples>0){if(_t(T)===!1){const g=T.textures,N=T.width,k=T.height;let V=t.COLOR_BUFFER_BIT;const te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=i.get(T),W=g.length>1;if(W)for(let se=0;se<g.length;se++)n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const q=T.texture.mipmaps;q&&q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<g.length;se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const Me=i.get(g[se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,N,k,0,0,N,k,V,t.NEAREST),c===!0&&(Et.length=0,bt.length=0,Et.push(t.COLOR_ATTACHMENT0+se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Et.push(te),bt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let se=0;se<g.length;se++){n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const Me=i.get(g[se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function at(T){return Math.min(r.maxSamples,T.samples)}function _t(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Yt(T,g){const N=T.colorSpace,k=T.format,V=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==vs&&N!==hi&&(Be.getTransfer(N)===Je?(k!==vn||V!==fn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",N)),g}function je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.getTextureUnits=$,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=fe,this.setTextureCube=me,this.rebindTextures=Ze,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Gb(t,e){function n(i,r=hi){let s;const o=Be.getTransfer(r);if(i===fn)return t.UNSIGNED_BYTE;if(i===lu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sp)return t.BYTE;if(i===Mp)return t.SHORT;if(i===_s)return t.UNSIGNED_SHORT;if(i===cu)return t.INT;if(i===On)return t.UNSIGNED_INT;if(i===Pn)return t.FLOAT;if(i===ti)return t.HALF_FLOAT;if(i===bp)return t.ALPHA;if(i===Ap)return t.RGB;if(i===vn)return t.RGBA;if(i===ni)return t.DEPTH_COMPONENT;if(i===Oi)return t.DEPTH_STENCIL;if(i===wp)return t.RED;if(i===fu)return t.RED_INTEGER;if(i===ki)return t.RG;if(i===du)return t.RG_INTEGER;if(i===hu)return t.RGBA_INTEGER;if(i===_o||i===xo||i===vo||i===Eo)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zc||i===Hc||i===Gc||i===Vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wc||i===Xc||i===Yc||i===Zc||i===qc||i===wo||i===$c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wc||i===Xc)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yc)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zc)return s.COMPRESSED_R11_EAC;if(i===qc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wo)return s.COMPRESSED_RG11_EAC;if(i===$c)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kc||i===jc||i===Jc||i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kc)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jc)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jc)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qc)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===fl||i===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hl||i===pl||i===Ro||i===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
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

}`;class Xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Sn({vertexShader:Vb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yb extends Hi{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",m=new Xb,h={},M=n.getContextAttributes();let A=null,S=null;const w=[],y=[],R=new He;let x=null;const b=new un;b.viewport=new ut;const D=new un;D.viewport=new ut;const I=[b,D],U=new tS;let Z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=w[K];return ie===void 0&&(ie=new Na,w[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=w[K];return ie===void 0&&(ie=new Na,w[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=w[K];return ie===void 0&&(ie=new Na,w[K]=ie),ie.getHandSpace()};function z(K){const ie=y.indexOf(K.inputSource);if(ie===-1)return;const ee=w[ie];ee!==void 0&&(ee.update(K.inputSource,K.frame,l||o),ee.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let K=0;K<w.length;K++){const ie=y[K];ie!==null&&(y[K]=null,w[K].disconnect(ie))}Z=null,$=null,m.reset();for(const K in h)delete h[K];e.setRenderTarget(A),p=null,d=null,f=null,r=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ce=null,Pe=null;M.depth&&(Pe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=M.stencil?Oi:ni,Ce=M.stencil?xs:On);const Ae={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new En(d.textureWidth,d.textureHeight,{format:vn,type:fn,depthTexture:new br(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new En(p.framebufferWidth,p.framebufferHeight,{format:vn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let ie=0;ie<K.removed.length;ie++){const ee=K.removed[ie],Ce=y.indexOf(ee);Ce>=0&&(y[Ce]=null,w[Ce].disconnect(ee))}for(let ie=0;ie<K.added.length;ie++){const ee=K.added[ie];let Ce=y.indexOf(ee);if(Ce===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=y.length){y.push(ee),Ce=Ae;break}else if(y[Ae]===null){y[Ae]=ee,Ce=Ae;break}if(Ce===-1)break}const Pe=w[Ce];Pe&&Pe.connect(ee)}}const j=new F,Q=new F;function fe(K,ie,ee){j.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const Ce=j.distanceTo(Q),Pe=ie.projectionMatrix.elements,Ae=ee.projectionMatrix.elements,ht=Pe[14]/(Pe[10]-1),Ue=Pe[14]/(Pe[10]+1),et=(Pe[9]+1)/Pe[5],Ze=(Pe[9]-1)/Pe[5],Ge=(Pe[8]-1)/Pe[0],gt=(Ae[8]+1)/Ae[0],Et=ht*Ge,bt=ht*gt,It=Ce/(-Ge+gt),at=It*-Ge;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const _t=ht+It,P=Ue+It,Yt=Et-at,je=bt+(Ce-at),T=et*Ue/P*_t,g=Ze*Ue/P*_t;K.projectionMatrix.makePerspective(Yt,je,T,g,_t,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ee=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),U.near=D.near=b.near=ie,U.far=D.far=b.far=ee,(Z!==U.near||$!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),Z=U.near,$=U.far),U.layers.mask=K.layers.mask|6,b.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const Ce=K.parent,Pe=U.cameras;me(U,Ce);for(let Ae=0;Ae<Pe.length;Ae++)me(Pe[Ae],Ce);Pe.length===2?fe(U,b,D):U.projectionMatrix.copy(b.projectionMatrix),xe(K,U,Ce)};function xe(K,ie,ee){ee===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return h[K]};let Xe=null;function ot(K,ie){if(u=ie.getViewerPose(l||o),_=ie,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ce=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let Ue=0;Ue<ee.length;Ue++){const et=ee[Ue];let Ze=null;if(p!==null)Ze=p.getViewport(et);else{const gt=f.getViewSubImage(d,et);Ze=gt.viewport,Ue===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let Ge=I[Ue];Ge===void 0&&(Ge=new un,Ge.layers.enable(Ue),Ge.viewport=new ut,I[Ue]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ue===0&&(U.matrix.copy(Ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(Ge)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const Ue=f.getDepthInformation(ee[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,r.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let Ue=0;Ue<ee.length;Ue++){const et=ee[Ue].camera;if(et){let Ze=h[et];Ze||(Ze=new Fp,h[et]=Ze);const Ge=f.getCameraImage(et);Ze.sourceTexture=Ge}}}}for(let ee=0;ee<w.length;ee++){const Ce=y[ee],Pe=w[ee];Ce!==null&&Pe!==void 0&&Pe.update(Ce,ie,l||o)}Xe&&Xe(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ye=new kp;Ye.setAnimationLoop(ot),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}}const Zb=new ft,Yp=new Ie;Yp.set(-1,0,0,0,1,0,0,0,1);function qb(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Op(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,A,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),E(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,M,A):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===qt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===qt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h),A=M.envMap,S=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yp),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,M,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=A*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function E(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $b(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const y=w.program;i.uniformBlockBinding(S,y)}function l(S,w){let y=r[S.id];y===void 0&&(m(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",M));const R=w.program;i.updateUBOMapping(S,R);const x=e.render.frame;s[S.id]!==x&&(d(S),s[S.id]=x)}function u(S){const w=f();S.__bindingPointIndex=w;const y=t.createBuffer(),R=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=r[S.id],y=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let x=0,b=y.length;x<b;x++){const D=y[x];if(Array.isArray(D))for(let I=0,U=D.length;I<U;I++)p(D[I],x,I,R);else p(D,x,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,w,y,R){if(E(S,w,y,R)===!0){const x=S.__offset,b=S.value;if(Array.isArray(b)){let D=0;for(let I=0;I<b.length;I++){const U=b[I],Z=h(U);_(U,S.__data,D),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function _(S,w,y){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,y)}function E(S,w,y,R){const x=S.value,b=w+"_"+y;if(R[b]===void 0)return typeof x=="number"||typeof x=="boolean"?R[b]=x:ArrayBuffer.isView(x)?R[b]=x.slice():R[b]=x.clone(),!0;{const D=R[b];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return R[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(S){const w=S.uniforms;let y=0;const R=16;for(let b=0,D=w.length;b<D;b++){const I=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,Z=I.length;U<Z;U++){const $=I[U],z=Array.isArray($.value)?$.value:[$.value];for(let X=0,G=z.length;X<G;X++){const j=z[X],Q=h(j),fe=y%R,me=fe%Q.boundary,xe=fe+me;y+=me,xe!==0&&R-xe<Q.storage&&(y+=R-xe),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=Q.storage}}}const x=y%R;return x>0&&(y+=R-x),S.__size=y,S.__cache={},this}function h(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",S),w}function M(S){const w=S.target;w.removeEventListener("dispose",M);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function A(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:A}}const Kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function jb(){return wn===null&&(wn=new UE(Kb,16,16,ki,ti),wn.name="DFG_LUT",wn.minFilter=Nt,wn.magFilter=Nt,wn.wrapS=Kn,wn.wrapT=Kn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class Jb{constructor(e={}){const{canvas:n=eE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=fn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const E=p,m=new Set([hu,du,fu]),h=new Set([fn,On,_s,xs,lu,uu]),M=new Uint32Array(4),A=new Int32Array(4),S=new F;let w=null,y=null;const R=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,U=null,Z=null,$=null,z=null;this._outputColorSpace=ln;let X=0,G=0,j=null,Q=-1,fe=null;const me=new ut,xe=new ut;let Xe=null;const ot=new qe(0);let Ye=0,K=n.width,ie=n.height,ee=1,Ce=null,Pe=null;const Ae=new ut(0,0,K,ie),ht=new ut(0,0,K,ie);let Ue=!1;const et=new Eu;let Ze=!1,Ge=!1;const gt=new ft,Et=new F,bt=new ut,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function _t(){return j===null?ee:1}let P=i;function Yt(v,L){return n.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ou}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",Tn,!1),P===null){const L="webgl2";if(P=Yt(L,v),P===null)throw Yt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw ze("WebGLRenderer: "+v.message),v}let je,T,g,N,k,V,te,re,W,q,se,Me,ce,oe,be,we,Le,C,ne,Y,ae,pe,J;function Se(){je=new jT(P),je.init(),ae=new Gb(P,je),T=new VT(P,je,e,ae),g=new zb(P,je),T.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),Z=P.createFramebuffer(),$=P.createFramebuffer(),z=P.createFramebuffer(),N=new ey(P),k=new Ab,V=new Hb(P,je,g,k,T,ae,N),te=new KT(D),re=new rS(P),pe=new HT(P,re),W=new JT(P,re,N,pe),q=new ny(P,W,re,pe,N),C=new ty(P,T,V),be=new WT(k),se=new bb(D,te,je,T,pe,be),Me=new qb(D,k),ce=new Rb,oe=new Nb(je),Le=new zT(D,te,g,q,_,c),we=new kb(D,q,T),J=new $b(P,N,T,g),ne=new GT(P,je,N),Y=new QT(P,je,N),N.programs=se.programs,D.capabilities=T,D.extensions=je,D.properties=k,D.renderLists=ce,D.shadowMap=we,D.state=g,D.info=N}Se(),E!==fn&&(b=new ry(E,n.width,n.height,a,r,s));const ve=new Yb(D,P);this.xr=ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(K,ie,!1))},this.getSize=function(v){return v.set(K,ie)},this.setSize=function(v,L,H=!0){if(ve.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,ie=L,n.width=Math.floor(v*ee),n.height=Math.floor(L*ee),H===!0&&(n.style.width=v+"px",n.style.height=L+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(K*ee,ie*ee).floor()},this.setDrawingBufferSize=function(v,L,H){K=v,ie=L,ee=H,n.width=Math.floor(v*H),n.height=Math.floor(L*H),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(E===fn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(me)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,L,H,O){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,L,H,O),g.viewport(me.copy(Ae).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(ht)},this.setScissor=function(v,L,H,O){v.isVector4?ht.set(v.x,v.y,v.z,v.w):ht.set(v,L,H,O),g.scissor(xe.copy(ht).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){g.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){Ce=v},this.setTransparentSort=function(v){Pe=v},this.getClearColor=function(v){return v.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,H=!0){let O=0;if(v){let B=!1;if(j!==null){const he=j.texture.format;B=m.has(he)}if(B){const he=j.texture.type,_e=h.has(he),de=Le.getClearColor(),Ee=Le.getClearAlpha(),Te=de.r,De=de.g,Fe=de.b;_e?(M[0]=Te,M[1]=De,M[2]=Fe,M[3]=Ee,P.clearBufferuiv(P.COLOR,0,M)):(A[0]=Te,A[1]=De,A[2]=Fe,A[3]=Ee,P.clearBufferiv(P.COLOR,0,A))}else O|=P.COLOR_BUFFER_BIT}L&&(O|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",Tn,!1),Le.dispose(),ce.dispose(),oe.dispose(),k.dispose(),te.dispose(),q.dispose(),pe.dispose(),J.dispose(),se.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",pf),ve.removeEventListener("sessionend",mf),Ai.stop()};function ct(v){v.preventDefault(),Pf("WebGLRenderer: Context Lost."),I=!0}function it(){Pf("WebGLRenderer: Context Restored."),I=!1;const v=N.autoReset,L=we.enabled,H=we.autoUpdate,O=we.needsUpdate,B=we.type;Se(),N.autoReset=v,we.enabled=L,we.autoUpdate=H,we.needsUpdate=O,we.type=B}function Tn(v){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function yn(v){const L=v.target;L.removeEventListener("dispose",yn),av(L)}function av(v){cv(v),k.remove(v)}function cv(v){const L=k.get(v).programs;L!==void 0&&(L.forEach(function(H){se.releaseProgram(H)}),v.isShaderMaterial&&se.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,H,O,B,he){L===null&&(L=It);const _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,de=fv(v,L,H,O,B);g.setMaterial(O,_e);let Ee=H.index,Te=1;if(O.wireframe===!0){if(Ee=W.getWireframeAttribute(H),Ee===void 0)return;Te=2}const De=H.drawRange,Fe=H.attributes.position;let ye=De.start*Te,Qe=(De.start+De.count)*Te;he!==null&&(ye=Math.max(ye,he.start*Te),Qe=Math.min(Qe,(he.start+he.count)*Te)),Ee!==null?(ye=Math.max(ye,0),Qe=Math.min(Qe,Ee.count)):Fe!=null&&(ye=Math.max(ye,0),Qe=Math.min(Qe,Fe.count));const pt=Qe-ye;if(pt<0||pt===1/0)return;pe.setup(B,O,de,H,Ee);let lt,tt=ne;if(Ee!==null&&(lt=re.get(Ee),tt=Y,tt.setIndex(lt)),B.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*_t()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(B.isLine){let Bt=O.linewidth;Bt===void 0&&(Bt=1),g.setLineWidth(Bt*_t()),B.isLineSegments?tt.setMode(P.LINES):B.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else B.isPoints?tt.setMode(P.POINTS):B.isSprite&&tt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(je.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,ge=B._multiDrawCounts,Kt=B._multiDrawCount,Ve=Ee?re.get(Ee).bytesPerElement:1,on=k.get(O).currentProgram.getUniforms();for(let bn=0;bn<Kt;bn++)on.setValue(P,"_gl_DrawID",bn),tt.render(Bt[bn]/Ve,ge[bn])}else if(B.isInstancedMesh)tt.renderInstances(ye,pt,B.count);else if(H.isInstancedBufferGeometry){const Bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Bt);tt.renderInstances(ye,pt,ge)}else tt.render(ye,pt)};function hf(v,L,H){v.transparent===!0&&v.side===qn&&v.forceSinglePass===!1?(v.side=qt,v.needsUpdate=!0,Os(v,L,H),v.side=Mi,v.needsUpdate=!0,Os(v,L,H),v.side=qn):Os(v,L,H)}this.compile=function(v,L,H=null){H===null&&(H=v),y=oe.get(H),y.init(L),x.push(y),H.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),v!==H&&v.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights();const O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const de=he[_e];hf(de,H,B),O.add(de)}else hf(he,H,B),O.add(he)}),y=x.pop(),O},this.compileAsync=function(v,L,H=null){const O=this.compile(v,L,H);return new Promise(B=>{function he(){if(O.forEach(function(_e){k.get(_e).currentProgram.isReady()&&O.delete(_e)}),O.size===0){B(v);return}setTimeout(he,10)}je.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ya=null;function lv(v){ya&&ya(v)}function pf(){Ai.stop()}function mf(){Ai.start()}const Ai=new kp;Ai.setAnimationLoop(lv),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(v){ya=v,ve.setAnimationLoop(v),v===null?Ai.stop():Ai.start()},ve.addEventListener("sessionstart",pf),ve.addEventListener("sessionend",mf),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(v,L);const H=ve.enabled===!0&&ve.isPresenting===!0,O=b!==null&&(j===null||H)&&b.begin(D,j);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(L),L=ve.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,L,j),y=oe.get(v,x.length),y.init(L),y.state.textureUnits=V.getTextureUnits(),x.push(y),gt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),et.setFromProjectionMatrix(gt,Ln,L.reversedDepth),Ge=this.localClippingEnabled,Ze=be.init(this.clippingPlanes,Ge),w=ce.get(v,R.length),w.init(),R.push(w),ve.enabled===!0&&ve.isPresenting===!0){const _e=D.xr.getDepthSensingMesh();_e!==null&&ba(_e,L,-1/0,D.sortObjects)}ba(v,L,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(Ce,Pe,L.reversedDepth),at=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,at&&Le.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&be.beginShadows();const B=y.state.shadowsArray;if(we.render(B,v,L),Ze===!0&&be.endShadows(),(O&&b.hasRenderPass())===!1){const _e=w.opaque,de=w.transmissive;if(y.setupLights(),L.isArrayCamera){const Ee=L.cameras;if(de.length>0)for(let Te=0,De=Ee.length;Te<De;Te++){const Fe=Ee[Te];_f(_e,de,v,Fe)}at&&Le.render(v);for(let Te=0,De=Ee.length;Te<De;Te++){const Fe=Ee[Te];gf(w,v,Fe,Fe.viewport)}}else de.length>0&&_f(_e,de,v,L),at&&Le.render(v),gf(w,v,L)}j!==null&&G===0&&(V.updateMultisampleRenderTarget(j),V.updateRenderTargetMipmap(j)),O&&b.end(D),v.isScene===!0&&v.onAfterRender(D,v,L),pe.resetDefaultState(),Q=-1,fe=null,x.pop(),x.length>0?(y=x[x.length-1],V.setTextureUnits(y.state.textureUnits),Ze===!0&&be.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function ba(v,L,H,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)y.pushLightProbeGrid(v);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||et.intersectsSprite(v)){O&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(gt);const _e=q.update(v),de=v.material;de.visible&&w.push(v,_e,de,H,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||et.intersectsObject(v))){const _e=q.update(v),de=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),bt.copy(_e.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(gt)),Array.isArray(de)){const Ee=_e.groups;for(let Te=0,De=Ee.length;Te<De;Te++){const Fe=Ee[Te],ye=de[Fe.materialIndex];ye&&ye.visible&&w.push(v,_e,ye,H,bt.z,Fe)}}else de.visible&&w.push(v,_e,de,H,bt.z,null)}}const he=v.children;for(let _e=0,de=he.length;_e<de;_e++)ba(he[_e],L,H,O)}function gf(v,L,H,O){const{opaque:B,transmissive:he,transparent:_e}=v;y.setupLightsView(H),Ze===!0&&be.setGlobalState(D.clippingPlanes,H),O&&g.viewport(me.copy(O)),B.length>0&&Fs(B,L,H),he.length>0&&Fs(he,L,H),_e.length>0&&Fs(_e,L,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function _f(v,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[O.id]===void 0){const ye=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[O.id]=new En(1,1,{generateMipmaps:!0,type:ye?ti:fn,minFilter:gi,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const he=y.state.transmissionRenderTarget[O.id],_e=O.viewport||me;he.setSize(_e.z*D.transmissionResolutionScale,_e.w*D.transmissionResolutionScale);const de=D.getRenderTarget(),Ee=D.getActiveCubeFace(),Te=D.getActiveMipmapLevel();D.setRenderTarget(he),D.getClearColor(ot),Ye=D.getClearAlpha(),Ye<1&&D.setClearColor(16777215,.5),D.clear(),at&&Le.render(H);const De=D.toneMapping;D.toneMapping=Nn;const Fe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),Ze===!0&&be.setGlobalState(D.clippingPlanes,O),Fs(v,H,O),V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he),je.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Qe=0,pt=L.length;Qe<pt;Qe++){const lt=L[Qe],{object:tt,geometry:Bt,material:ge,group:Kt}=lt;if(ge.side===qn&&tt.layers.test(O.layers)){const Ve=ge.side;ge.side=qt,ge.needsUpdate=!0,xf(tt,H,O,Bt,ge,Kt),ge.side=Ve,ge.needsUpdate=!0,ye=!0}}ye===!0&&(V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he))}D.setRenderTarget(de,Ee,Te),D.setClearColor(ot,Ye),Fe!==void 0&&(O.viewport=Fe),D.toneMapping=De}function Fs(v,L,H){const O=L.isScene===!0?L.overrideMaterial:null;for(let B=0,he=v.length;B<he;B++){const _e=v[B],{object:de,geometry:Ee,group:Te}=_e;let De=_e.material;De.allowOverride===!0&&O!==null&&(De=O),de.layers.test(H.layers)&&xf(de,L,H,Ee,De,Te)}}function xf(v,L,H,O,B,he){v.onBeforeRender(D,L,H,O,B,he),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(D,L,H,O,v,he),B.transparent===!0&&B.side===qn&&B.forceSinglePass===!1?(B.side=qt,B.needsUpdate=!0,D.renderBufferDirect(H,L,O,B,v,he),B.side=Mi,B.needsUpdate=!0,D.renderBufferDirect(H,L,O,B,v,he),B.side=qn):D.renderBufferDirect(H,L,O,B,v,he),v.onAfterRender(D,L,H,O,B,he)}function Os(v,L,H){L.isScene!==!0&&(L=It);const O=k.get(v),B=y.state.lights,he=y.state.shadowsArray,_e=B.state.version,de=se.getParameters(v,B.state,he,L,H,y.state.lightProbeGridArray),Ee=se.getProgramCacheKey(de);let Te=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=te.get(v.envMap||O.environment,De),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",yn),Te=new Map,O.programs=Te);let Fe=Te.get(Ee);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===_e)return Ef(v,de),Fe}else de.uniforms=se.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,de),v.onBeforeCompile(de,D),Fe=se.acquireProgram(de,Ee),Te.set(Ee,Fe),O.uniforms=de.uniforms;const ye=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=be.uniform),Ef(v,de),O.needsLights=hv(v),O.lightsStateVersion=_e,O.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=y.state.lightProbeGridArray.length>0,O.currentProgram=Fe,O.uniformsList=null,Fe}function vf(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=So.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Ef(v,L){const H=k.get(v);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function uv(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let H=0,O=v.length;H<O;H++){const B=v[H];if(B.texture!==null&&B.boundingBox.containsPoint(S))return B}return null}function fv(v,L,H,O,B){L.isScene!==!0&&(L=It),V.resetTextureUnits();const he=L.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,de=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Be.workingColorSpace,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=te.get(O.envMap||_e,Ee),De=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ye=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color;let lt=Nn;O.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(lt=D.toneMapping);const tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Bt=tt!==void 0?tt.length:0,ge=k.get(O),Kt=y.state.lights;if(Ze===!0&&(Ge===!0||v!==fe)){const rt=v===fe&&O.id===Q;be.setState(O,v,rt)}let Ve=!1;O.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Kt.state.version||ge.outputColorSpace!==de||B.isBatchedMesh&&ge.batching===!1||!B.isBatchedMesh&&ge.batching===!0||B.isBatchedMesh&&ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ge.instancing===!1||!B.isInstancedMesh&&ge.instancing===!0||B.isSkinnedMesh&&ge.skinning===!1||!B.isSkinnedMesh&&ge.skinning===!0||B.isInstancedMesh&&ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ge.instancingMorph===!1&&B.morphTexture!==null||ge.envMap!==Te||O.fog===!0&&ge.fog!==he||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==be.numPlanes||ge.numIntersection!==be.numIntersection)||ge.vertexAlphas!==De||ge.vertexTangents!==Fe||ge.morphTargets!==ye||ge.morphNormals!==Qe||ge.morphColors!==pt||ge.toneMapping!==lt||ge.morphTargetsCount!==Bt||!!ge.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,ge.__version=O.version);let on=ge.currentProgram;Ve===!0&&(on=Os(O,L,B),U&&O.isNodeMaterial&&U.onUpdateProgram(O,on,ge));let bn=!1,ri=!1,qi=!1;const nt=on.getUniforms(),mt=ge.uniforms;if(g.useProgram(on.program)&&(bn=!0,ri=!0,qi=!0),O.id!==Q&&(Q=O.id,ri=!0),ge.needsLights){const rt=uv(y.state.lightProbeGridArray,B);ge.lightProbeGrid!==rt&&(ge.lightProbeGrid=rt,ri=!0)}if(bn||fe!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(P,"projectionMatrix",v.projectionMatrix),nt.setValue(P,"viewMatrix",v.matrixWorldInverse);const oi=nt.map.cameraPosition;oi!==void 0&&oi.setValue(P,Et.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&nt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),fe!==v&&(fe=v,ri=!0,qi=!0)}if(ge.needsLights&&(Kt.state.directionalShadowMap.length>0&&nt.setValue(P,"directionalShadowMap",Kt.state.directionalShadowMap,V),Kt.state.spotShadowMap.length>0&&nt.setValue(P,"spotShadowMap",Kt.state.spotShadowMap,V),Kt.state.pointShadowMap.length>0&&nt.setValue(P,"pointShadowMap",Kt.state.pointShadowMap,V)),B.isSkinnedMesh){nt.setOptional(P,B,"bindMatrix"),nt.setOptional(P,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),nt.setValue(P,"boneTexture",rt.boneTexture,V))}B.isBatchedMesh&&(nt.setOptional(P,B,"batchingTexture"),nt.setValue(P,"batchingTexture",B._matricesTexture,V),nt.setOptional(P,B,"batchingIdTexture"),nt.setValue(P,"batchingIdTexture",B._indirectTexture,V),nt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&nt.setValue(P,"batchingColorTexture",B._colorsTexture,V));const si=H.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&C.update(B,H,on),(ri||ge.receiveShadow!==B.receiveShadow)&&(ge.receiveShadow=B.receiveShadow,nt.setValue(P,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(mt.envMapIntensity.value=L.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=jb()),ri){if(nt.setValue(P,"toneMappingExposure",D.toneMappingExposure),ge.needsLights&&dv(mt,qi),he&&O.fog===!0&&Me.refreshFogUniforms(mt,he),Me.refreshMaterialUniforms(mt,O,ee,ie,y.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){const rt=ge.lightProbeGrid;mt.probesSH.value=rt.texture,mt.probesMin.value.copy(rt.boundingBox.min),mt.probesMax.value.copy(rt.boundingBox.max),mt.probesResolution.value.copy(rt.resolution)}So.upload(P,vf(ge),mt,V)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(So.upload(P,vf(ge),mt,V),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(P,"center",B.center),nt.setValue(P,"modelViewMatrix",B.modelViewMatrix),nt.setValue(P,"normalMatrix",B.normalMatrix),nt.setValue(P,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const rt=O.uniformsGroups;for(let oi=0,$i=rt.length;oi<$i;oi++){const Sf=rt[oi];J.update(Sf,on),J.bind(Sf,on)}}return on}function dv(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function hv(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(v,L,H){const O=k.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(v.texture).__webglTexture=L,k.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const H=k.get(v);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,H=0){j=v,X=L,G=H;let O=null,B=!1,he=!1;if(v){const de=k.get(v);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),me.copy(v.viewport),xe.copy(v.scissor),Xe=v.scissorTest,g.viewport(me),g.scissor(xe),g.setScissorTest(Xe),Q=-1;return}else if(de.__webglFramebuffer===void 0)V.setupRenderTarget(v);else if(de.__hasExternalTextures)V.rebindTextures(v,k.get(v.texture).__webglTexture,k.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(de.__boundDepthTexture!==De){if(De!==null&&k.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Te=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?O=Te[L][H]:O=Te[L],B=!0):v.samples>0&&V.useMultisampledRTT(v)===!1?O=k.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[H]:O=Te,me.copy(v.viewport),xe.copy(v.scissor),Xe=v.scissorTest}else me.copy(Ae).multiplyScalar(ee).floor(),xe.copy(ht).multiplyScalar(ee).floor(),Xe=Ue;if(H!==0&&(O=Z),g.bindFramebuffer(P.FRAMEBUFFER,O)&&g.drawBuffers(v,O),g.viewport(me),g.scissor(xe),g.setScissorTest(Xe),B){const de=k.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,H)}else if(he){const de=L;for(let Ee=0;Ee<v.textures.length;Ee++){const Te=k.get(v.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Te.__webglTexture,H,de)}}else if(v!==null&&H!==0){const de=k.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,H)}Q=-1},this.readRenderTargetPixels=function(v,L,H,O,B,he,_e,de=0){if(!(v&&v.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){g.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const Te=v.textures[de],De=Te.format,Fe=Te.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!T.textureFormatReadable(De)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Fe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&H>=0&&H<=v.height-B&&P.readPixels(L,H,O,B,ae.convert(De),ae.convert(Fe),he)}finally{const Te=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,L,H,O,B,he,_e,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(L>=0&&L<=v.width-O&&H>=0&&H<=v.height-B){g.bindFramebuffer(P.FRAMEBUFFER,Ee);const Te=v.textures[de],De=Te.format,Fe=Te.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!T.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(L,H,O,B,ae.convert(De),ae.convert(Fe),0);const Qe=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Qe);const pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tE(P,pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(ye),P.deleteSync(pt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,H=0){const O=Math.pow(2,-H),B=Math.floor(v.image.width*O),he=Math.floor(v.image.height*O),_e=L!==null?L.x:0,de=L!==null?L.y:0;V.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,_e,de,B,he),g.unbindTexture()},this.copyTextureToTexture=function(v,L,H=null,O=null,B=0,he=0){let _e,de,Ee,Te,De,Fe,ye,Qe,pt;const lt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(H!==null)_e=H.max.x-H.min.x,de=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,De=H.min.y,Fe=H.isBox3?H.min.z:0;else{const mt=Math.pow(2,-B);_e=Math.floor(lt.width*mt),de=Math.floor(lt.height*mt),v.isDataArrayTexture?Ee=lt.depth:v.isData3DTexture?Ee=Math.floor(lt.depth*mt):Ee=1,Te=0,De=0,Fe=0}O!==null?(ye=O.x,Qe=O.y,pt=O.z):(ye=0,Qe=0,pt=0);const tt=ae.convert(L.format),Bt=ae.convert(L.type);let ge;L.isData3DTexture?(V.setTexture3D(L,0),ge=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(V.setTexture2DArray(L,0),ge=P.TEXTURE_2D_ARRAY):(V.setTexture2D(L,0),ge=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Kt=g.getParameter(P.UNPACK_ROW_LENGTH),Ve=g.getParameter(P.UNPACK_IMAGE_HEIGHT),on=g.getParameter(P.UNPACK_SKIP_PIXELS),bn=g.getParameter(P.UNPACK_SKIP_ROWS),ri=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(P.UNPACK_SKIP_ROWS,De),g.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const qi=v.isDataArrayTexture||v.isData3DTexture,nt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const mt=k.get(v),si=k.get(L),rt=k.get(mt.__renderTarget),oi=k.get(si.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let $i=0;$i<Ee;$i++)qi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(v).__webglTexture,B,Fe+$i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(L).__webglTexture,he,pt+$i)),P.blitFramebuffer(Te,De,_e,de,ye,Qe,_e,de,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||k.has(v)){const mt=k.get(v),si=k.get(L);g.bindFramebuffer(P.READ_FRAMEBUFFER,$),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let rt=0;rt<Ee;rt++)qi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.__webglTexture,B,Fe+rt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,B),nt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,si.__webglTexture,he,pt+rt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,si.__webglTexture,he),B!==0?P.blitFramebuffer(Te,De,_e,de,ye,Qe,_e,de,P.COLOR_BUFFER_BIT,P.NEAREST):nt?P.copyTexSubImage3D(ge,he,ye,Qe,pt+rt,Te,De,_e,de):P.copyTexSubImage2D(ge,he,ye,Qe,Te,De,_e,de);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ge,he,ye,Qe,pt,_e,de,Ee,tt,Bt,lt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(ge,he,ye,Qe,pt,_e,de,Ee,tt,lt.data):P.texSubImage3D(ge,he,ye,Qe,pt,_e,de,Ee,tt,Bt,lt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,ye,Qe,_e,de,tt,Bt,lt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,ye,Qe,lt.width,lt.height,tt,lt.data):P.texSubImage2D(P.TEXTURE_2D,he,ye,Qe,_e,de,tt,Bt,lt);g.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ve),g.pixelStorei(P.UNPACK_SKIP_PIXELS,on),g.pixelStorei(P.UNPACK_SKIP_ROWS,bn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,ri),he===0&&L.generateMipmaps&&P.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(v){k.get(v).__webglFramebuffer===void 0&&V.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?V.setTextureCube(v,0):v.isData3DTexture?V.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?V.setTexture2DArray(v,0):V.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){X=0,G=0,j=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),n.unpackColorSpace=Be._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.15.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Qb=Object.defineProperty,Mu=(t,e)=>{for(var n in e)Qb(t,n,{get:e[n],enumerable:!0})},eA={};Mu(eA,{ACTIONS:()=>Jp,ANIMATION_MIN_DURATION:()=>vl,CAPTURE_EVENTS_CLASS:()=>Rs,CTRLZOOM_TIMEOUT:()=>jp,DBLCLICK_DELAY:()=>qp,EASINGS:()=>Mo,ICONS:()=>Mn,IDS:()=>Pt,KEY_CODES:()=>wt,LONGTOUCH_DELAY:()=>$p,MOVE_THRESHOLD:()=>Zp,SPHERE_RADIUS:()=>Qn,TWOFINGERSOVERLAY_DELAY:()=>Kp,VIEWER_DATA:()=>yi});var tA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,nA='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',iA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,rA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,sA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,oA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,aA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,cA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,lA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,vl=500,Zp=4,qp=300,$p=500,Kp=100,jp=2e3,Qn=10,yi="photoSphereViewer",Rs="psv--capture-event",Jp=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Jp||{}),Pt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},wt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Mn={arrow:tA,close:nA,download:iA,fullscreenIn:rA,fullscreenOut:sA,info:oA,menu:aA,zoomIn:cA,zoomOut:lA},Mo={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},uA={};Mu(uA,{Animation:()=>Fo,Dynamic:()=>Jr,MultiDynamic:()=>Mm,PressHandler:()=>ia,Slider:()=>ym,SliderDirection:()=>Tm,addClasses:()=>Tu,angle:()=>em,applyEulerInverse:()=>yl,checkClosedShadowDom:()=>vm,checkStylesheet:()=>xm,checkVersion:()=>Cu,cleanCssPosition:()=>gm,clone:()=>ea,createSizedTexture:()=>Sm,createTexture:()=>Tl,cssPositionIsOrdered:()=>Ru,dasherize:()=>mA,deepEqual:()=>hm,deepmerge:()=>fm,distance:()=>Qp,exitFullscreen:()=>lm,firstNonNull:()=>Rn,getAbortError:()=>Sl,getAngle:()=>nm,getClosest:()=>rm,getConfigParser:()=>na,getElement:()=>im,getEventTarget:()=>Po,getMatchingTarget:()=>sm,getPosition:()=>om,getShortestArc:()=>tm,getStyleProperty:()=>Dn,getTouchData:()=>El,getXMPValue:()=>Qt,greatArcDistance:()=>dA,hasParent:()=>pA,invertResolvableBoolean:()=>ta,isAbortError:()=>mm,isEmpty:()=>dm,isExtendedPosition:()=>wu,isFullscreenEnabled:()=>am,isNil:()=>Rt,isPlainObject:()=>bu,keyPressMatch:()=>yu,logWarn:()=>Ct,mergePanoData:()=>Em,parseAngle:()=>pi,parsePoint:()=>gA,parseSpeed:()=>_m,removeClasses:()=>hA,requestFullscreen:()=>cm,resolveBoolean:()=>Au,speedToDuration:()=>Ml,sum:()=>fA,throttle:()=>um,toggleClass:()=>Qo,wrap:()=>os});function os(t,e){let n=t%e;return n<0&&(n+=e),n}function fA(t){return t.reduce((e,n)=>e+n,0)}function Qp(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function em(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function tm(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,r)=>{const s=e-t+r;return Math.abs(s)<Math.abs(i)?s:i},1/0)}function nm(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function dA([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const r=(n-t)*Math.cos((e+i)/2),s=i-e;return Math.sqrt(r*r+s*s)}function im(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Qo(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function Tu(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function hA(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function pA(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function rm(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function Po(t){return(t==null?void 0:t.composedPath()[0])||null}function sm(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function om(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function Dn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function El(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:Qp(e,n),angle:em(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var Lo;function am(t,e=!1){return e?t===Lo:document.fullscreenElement===t}function cm(t,e=!1){e?(Lo=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function lm(t=!1){t?(Lo.classList.remove("psv-fullscreen-emulation"),Lo=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function yu(t,e){let n,i=!1,r=!1,s=!1,o=!1;return e==="+"?n=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":r=!0;break;case"Alt":s=!0;break;case"Meta":o=!0;break;case"Space":n=" ";break;case"Plus":n="+";break;case"Minus":n="-";break;default:n=a;break}}),i===t.shiftKey&&r===t.ctrlKey&&s===t.altKey&&o===t.metaKey&&n===t.key}function mA(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function um(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function bu(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function fm(t,e){const n=e;return(function i(r,s){return Array.isArray(s)?(!r||!Array.isArray(r)?r=[]:r.length=0,s.forEach((o,a)=>{r[a]=i(null,o)})):typeof s=="object"?((!r||Array.isArray(r))&&(r={}),Object.keys(s).forEach(o=>{o!=="__proto__"&&(typeof s[o]!="object"||!s[o]||!bu(s[o])?r[o]=s[o]:s[o]!==n&&(r[o]?i(r[o],s[o]):r[o]=i(null,s[o])))})):r=s,r})(t,e)}function ea(t){return fm(null,t)}function dm(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function Rt(t){return t==null}function Rn(...t){for(const e of t)if(!Rt(e))return e;return null}function hm(t,e){if(t===e)return!0;if(bd(t)&&bd(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!hm(t[n],e[n]))return!1;return!0}else return!1}function bd(t){return typeof t=="object"&&t!==null}var $e=class pm extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,pm)}};function Au(t,e){bu(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function ta(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Sl(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function mm(t){return(t==null?void 0:t.name)==="AbortError"}function Ct(t){console.warn(`PhotoSphereViewer: ${t}`)}function wu(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function Qt(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const r=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const r=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}return null}var Ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Do=["left","center","right"],No=["top","center","bottom"],wd=[...Do,...No],cn="center";function gA(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Ad[e[0]]?e=[e[0],cn]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(r=>Ad[r]||r),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function gm(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===cn?t=[cn,cn]:Do.indexOf(t[0])!==-1?t=[cn,t[0]]:No.indexOf(t[0])!==-1&&(t=[t[0],cn])),t.length!==2||wd.indexOf(t[0])===-1||wd.indexOf(t[1])===-1?(Ct(`Unparsable position ${t}`),null):!e&&t[0]===cn&&t[1]===cn?(Ct("Invalid position center center"),null):(n&&!Ru(t)&&(t=[t[1],t[0]]),t[1]===cn&&Do.indexOf(t[0])!==-1&&(t=[cn,t[0]]),t[0]===cn&&No.indexOf(t[1])!==-1&&(t=[t[1],cn]),t)):null}function Ru(t){return No.indexOf(t[0])!==-1&&Do.indexOf(t[1])!==-1}function _m(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const r=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(r.match(/(pm|per minute)$/)&&(i/=60),r){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=We.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new $e(`Unknown speed unit "${r}"`)}}else e=t;return e}function Ml(t,e){if(typeof t!="number"){const n=_m(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function pi(t,e=!1,n=e){let i;if(typeof t=="string"){const r=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!r)throw new $e(`Unknown angle "${t}"`);const s=parseFloat(r[1]),o=r[2];if(o)switch(o){case"deg":case"degs":i=We.degToRad(s);break;case"rad":case"rads":i=s;break;default:throw new $e(`Unknown angle unit "${o}"`)}else i=s}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new $e(`Unknown angle "${t}"`);return i=os(e?i+Math.PI:i,Math.PI*2),e?We.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function na(t,e){const n=function(i){const r=ea({...t,...i}),s={};for(let[o,a]of Object.entries(r)){if(e&&o in e)a=e[o](a,{rawConfig:r,defValue:t[o]});else if(!(o in t)){Ct(`Unknown option ${o}`);continue}s[o]=a}return s};return n.defaults=t,n.parsers=e||{},n}function xm(t,e){Dn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Cu(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function vm(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Em(t,e,n,i){const r={isEquirectangular:!0,fullWidth:Rn(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:Rn(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:Rn(n==null?void 0:n.croppedWidth,i==null?void 0:i.croppedWidth,t),croppedHeight:Rn(n==null?void 0:n.croppedHeight,i==null?void 0:i.croppedHeight,e),croppedX:Rn(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX),croppedY:Rn(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY),poseHeading:Rn(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:Rn(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:Rn(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};if(r.croppedWidth!==t){const s=t/r.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(o=>{r[o]&&(r[o]=Math.round(r[o]*s))})}return!r.fullWidth&&!r.fullHeight&&(r.fullWidth=Math.max(r.croppedWidth,r.croppedHeight*2),r.fullHeight=Math.round(r.fullWidth/2)),r.fullWidth||(r.fullWidth=r.fullHeight*2),r.fullHeight||(r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX===null&&(r.croppedX=Math.round((r.fullWidth-t)/2)),r.croppedY===null&&(r.croppedY=Math.round((r.fullHeight-e)/2)),Math.abs(r.fullWidth-r.fullHeight*2)>1&&(Ct("Invalid panoData, fullWidth should be twice fullHeight"),r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX+r.croppedWidth>r.fullWidth&&(Ct("Invalid panoData, croppedX + croppedWidth > fullWidth"),r.croppedX=r.fullWidth-r.croppedWidth),r.croppedY+r.croppedHeight>r.fullHeight&&(Ct("Invalid panoData, croppedY + croppedHeight > fullHeight"),r.croppedY=r.fullHeight-r.croppedHeight),r.croppedX<0&&(Ct("Invalid panoData, croppedX < 0"),r.croppedX=0),r.croppedY<0&&(Ct("Invalid panoData, croppedY < 0"),r.croppedY=0),r}var Xr=`${yi}_touchSupport`,Wt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=vA(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=_A();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=xA(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Wt.isWebGLSupported)throw new $e("WebGL 2 is not supported.");if(Wt.maxTextureWidth===0)throw new $e("Unable to detect system capabilities")}};function _A(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function xA(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Xr in localStorage&&(t=localStorage[Xr]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",s),clearTimeout(a)},r=()=>{i(),localStorage[Xr]=!1,n(!1)},s=()=>{i(),localStorage[Xr]=!0,n(!0)},o=()=>{i(),localStorage[Xr]=t,n(t)};window.addEventListener("mousedown",r,!1),window.addEventListener("touchstart",s,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function vA(t){let e=t,n=!1;const i=document.createElement("canvas"),r=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const s=document.createElement("canvas"),o=s.getContext("2d");s.width=e,s.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),r.drawImage(s,e-1,e/2-1,1,1,0,0,1,1),r.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}s.width=0,s.height=0,n||(e/=2)}if(n)return e;throw new $e("Unable to detect system capabilities")}function Tl(t,e=!1){const n=new Ht(t);return n.needsUpdate=!0,n.minFilter=e?gi:Nt,n.generateMipmaps=e,n.anisotropy=e?2:1,n}function Sm(t,e){if(e||t.width>Wt.maxTextureWidth){const n=Math.min(1,Wt.maxCanvasWidth/t.width),i=new OffscreenCanvas(Math.floor(t.width*n),Math.floor(t.height*n)),r=i.getContext("2d");return e&&(r.filter=`blur(${i.width/e.factor}px)`),r.drawImage(t,0,0,i.width,i.height),Tl(i)}return Tl(t)}var Rd=new Gi;function yl(t,e){Rd.setFromEuler(e).invert(),t.applyQuaternion(Rd)}var Fo=class{constructor(t){this.easing=Mo.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:Mo[t.easing]||Mo.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,r]of Object.entries(this.options.properties))if(r){const s=r.start+(r.end-r.start)*this.easing(e);n[i]=s}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,r]of Object.entries(this.options.properties))r&&(n[i]=r.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Jr=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new $e("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?os(t,this.max):We.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?os(t,this.max):We.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?os(n,this.max):We.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},Mm=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},ia=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Tm=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Tm||{}),ym=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let r;this.isVertical?r=We.clamp((i.bottom-e)/i.height,0,1):r=We.clamp((t-i.left)/i.width,0,1),this.listener({value:r,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},EA={};Mu(EA,{BeforeAnimateEvent:()=>Iu,BeforeRenderEvent:()=>as,BeforeRotateEvent:()=>Lm,ClickEvent:()=>Fm,ConfigChangedEvent:()=>$t,DoubleClickEvent:()=>zm,FullscreenEvent:()=>cs,HideNotificationEvent:()=>ls,HideOverlayEvent:()=>Zm,HidePanelEvent:()=>vi,HideTooltipEvent:()=>Jm,KeypressEvent:()=>Ei,LoadProgressEvent:()=>ig,ObjectEnterEvent:()=>Gg,ObjectEvent:()=>ra,ObjectHoverEvent:()=>Zg,ObjectLeaveEvent:()=>bl,PanoramaErrorEvent:()=>fg,PanoramaLoadEvent:()=>og,PanoramaLoadedEvent:()=>Mr,PositionUpdatedEvent:()=>us,ReadyEvent:()=>ds,RenderEvent:()=>Tg,RollUpdatedEvent:()=>fs,ShowNotificationEvent:()=>hs,ShowOverlayEvent:()=>Rg,ShowPanelEvent:()=>Si,ShowTooltipEvent:()=>Dg,SizeUpdatedEvent:()=>ps,StopAllEvent:()=>ms,TransitionDoneEvent:()=>pg,ViewerEvent:()=>Ke,ZoomUpdatedEvent:()=>ei});var SA=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},bm=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},Ke=class extends SA{},Am=class wm extends Ke{constructor(e,n){super(wm.type,!0),this.position=e,this.zoomLevel=n}};Am.type="before-animate";var Iu=Am,Rm=class Cm extends Ke{constructor(e,n){super(Cm.type),this.timestamp=e,this.elapsed=n}};Rm.type="before-render";var as=Rm,Im=class Pm extends Ke{constructor(e){super(Pm.type,!0),this.position=e}};Im.type="before-rotate";var Lm=Im,Dm=class Nm extends Ke{constructor(e){super(Nm.type),this.data=e}};Dm.type="click";var Fm=Dm,Om=class Um extends Ke{constructor(e){super(Um.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};Om.type="config-changed";var $t=Om,Bm=class km extends Ke{constructor(e){super(km.type),this.data=e}};Bm.type="dblclick";var zm=Bm,Hm=class Gm extends Ke{constructor(e){super(Gm.type),this.fullscreenEnabled=e}};Hm.type="fullscreen";var cs=Hm,Vm=class Wm extends Ke{constructor(e){super(Wm.type),this.notificationId=e}};Vm.type="hide-notification";var ls=Vm,Xm=class Ym extends Ke{constructor(e){super(Ym.type),this.overlayId=e}};Xm.type="hide-overlay";var Zm=Xm,qm=class $m extends Ke{constructor(e){super($m.type),this.panelId=e}};qm.type="hide-panel";var vi=qm,Km=class jm extends Ke{constructor(e){super(jm.type),this.tooltipData=e}};Km.type="hide-tooltip";var Jm=Km,Qm=class eg extends Ke{constructor(e,n){super(eg.type,!0),this.key=e,this.originalEvent=n}matches(e){return yu(this.originalEvent,e)}};Qm.type="key-press";var Ei=Qm,tg=class ng extends Ke{constructor(e){super(ng.type),this.progress=e}};tg.type="load-progress";var ig=tg,rg=class sg extends Ke{constructor(e){super(sg.type),this.panorama=e}};rg.type="panorama-load";var og=rg,ag=class cg extends Ke{constructor(e){super(cg.type),this.data=e}};ag.type="panorama-loaded";var Mr=ag,lg=class ug extends Ke{constructor(e,n){super(ug.type),this.panorama=e,this.error=n}};lg.type="panorama-error";var fg=lg,dg=class hg extends Ke{constructor(e){super(hg.type),this.completed=e}};dg.type="transition-done";var pg=dg,mg=class gg extends Ke{constructor(e){super(gg.type),this.position=e}};mg.type="position-updated";var us=mg,_g=class xg extends Ke{constructor(e){super(xg.type),this.roll=e}};_g.type="roll-updated";var fs=_g,vg=class Eg extends Ke{constructor(){super(Eg.type)}};vg.type="ready";var ds=vg,Sg=class Mg extends Ke{constructor(){super(Mg.type)}};Sg.type="render";var Tg=Sg,yg=class bg extends Ke{constructor(e){super(bg.type),this.notificationId=e}};yg.type="show-notification";var hs=yg,Ag=class wg extends Ke{constructor(e){super(wg.type),this.overlayId=e}};Ag.type="show-overlay";var Rg=Ag,Cg=class Ig extends Ke{constructor(e){super(Ig.type),this.panelId=e}};Cg.type="show-panel";var Si=Cg,Pg=class Lg extends Ke{constructor(e,n){super(Lg.type),this.tooltip=e,this.tooltipData=n}};Pg.type="show-tooltip";var Dg=Pg,Ng=class Fg extends Ke{constructor(e){super(Fg.type),this.size=e}};Ng.type="size-updated";var ps=Ng,Og=class Ug extends Ke{constructor(){super(Ug.type)}};Og.type="stop-all";var ms=Og,Bg=class kg extends Ke{constructor(e){super(kg.type),this.zoomLevel=e}};Bg.type="zoom-updated";var ei=Bg,ra=class extends Ke{constructor(t,e,n,i,r){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=r}},zg=class Hg extends ra{constructor(e,n,i,r){super(Hg.type,e,n,i,r)}};zg.type="enter-object";var Gg=zg,Vg=class Wg extends ra{constructor(e,n,i,r){super(Wg.type,e,n,i,r)}};Vg.type="leave-object";var bl=Vg,Xg=class Yg extends ra{constructor(e,n,i,r){super(Yg.type,e,n,i,r)}};Xg.type="hover-object";var Zg=Xg,Pu=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new $e("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new $e("Current adapter does not support texture coordinates.")}};Pu.supportsDownload=!1;function Cd(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Pu)return Cu(e.id,e.VERSION,"5.15.1"),e}return null}var MA=`varying vec3 vLocalPos;
varying vec3 vLocalCam;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets by rendering triangles).
float edgeAlpha(float coord, float width) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / width + 0.5, 0.0, 1.0);
}

// Screen-space derivative (fwidth) of a coordinate that wraps in [0, 1], such
// as longitude at the antimeridian. A naive fwidth() spikes to ~1.0 across the
// seam. Removing the integer jump keeps the result sub-pixel. Assumes the
// per-pixel change stays well under 0.5, so only the wrap rounds to a non-zero
// integer (safe unless a pixel spans ~180deg of longitude).
float fwidthWrapped(float coord) {
    float dx = dFdx(coord); dx -= floor(dx + 0.5);
    float dy = dFdy(coord); dy -= floor(dy + 0.5);
    return abs(dx) + abs(dy);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    // Inputs are already in the panorama's local frame (see vertex shader), so
    // the exit direction is too and needs no further rotation.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (vLocalCam + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    // \`u\` wraps at the antimeridian, so derive its width safely.
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x, fwidthWrapped(u) / uvScale.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y, fwidth(uv.y)));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,TA=`// Ray-cast inputs in the panorama's local frame, so sphereCorrection and pose
// (both folded into modelMatrix) apply to the sampled direction without
// per-fragment work.
varying vec3 vLocalPos;
varying vec3 vLocalCam;

void main() {
    vLocalPos = position;

    // mat3(modelMatrix) is a pure rotation, so its inverse is its transpose:
    // \`cameraPosition * M == transpose(M) * cameraPosition\`.
    vLocalCam = cameraPosition * mat3(modelMatrix);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yA=na({shader:!1,resolution:64,useXmpData:!0},{resolution:t=>{if(!t||!We.isPowerOfTwo(t))throw new $e("EquirectangularAdapter resolution must be power of two.");return t}}),sa=class qg extends Pu{static withConfig(e){return[qg,e]}constructor(e,n){super(e),this.config=yA(n),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,n){if(Rt(e.textureX)||Rt(e.textureY))throw new $e("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+n.croppedX)/n.fullWidth*Math.PI*2,r=(e.textureY+n.croppedY)/n.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-r}}sphericalCoordsToTextureCoords(e,n){const i=e.yaw/Math.PI/2*n.fullWidth,r=e.pitch/Math.PI*n.fullHeight;let s=Math.round(e.yaw<Math.PI?i+n.fullWidth/2:i-n.fullWidth/2)-n.croppedX,o=Math.round(n.fullHeight/2-r)-n.croppedY;return(s<0||s>n.croppedWidth||o<0||o>n.croppedHeight)&&(s=o=void 0),{textureX:s,textureY:o}}async loadTexture(e,n=!0,i,r=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new $e("Invalid panorama url, are you using the right adapter?"));let s;typeof e=="string"?s={path:e,data:i}:s={data:i,...e};const o=await this.viewer.textureLoader.loadFile(s.path,n?f=>this.viewer.textureLoader.dispatchProgress(f):null,s.path),a=r?await this.loadXMP(o):null,c=await this.viewer.textureLoader.blobToImage(o);typeof s.data=="function"&&(s.data=s.data(c,a));const l=Em(c.width,c.height,s.data,a),u=Sm(c,s.blur?{factor:2048}:null);return{panorama:e,texture:u,panoData:l,cacheKey:s.path}}async loadXMP(e){const n=await this.loadBlobAsString(e),i=n.indexOf("<x:xmpmeta");if(i===-1)return null;const r=n.indexOf("</x:xmpmeta>",i);if(r===-1)return null;const s=n.substring(i,r);return s.includes("GPano:")?{fullWidth:Qt(s,"FullPanoWidthPixels"),fullHeight:Qt(s,"FullPanoHeightPixels"),croppedWidth:Qt(s,"CroppedAreaImageWidthPixels"),croppedHeight:Qt(s,"CroppedAreaImageHeightPixels"),croppedX:Qt(s,"CroppedAreaLeftPixels"),croppedY:Qt(s,"CroppedAreaTopPixels"),poseHeading:Qt(s,"PoseHeadingDegrees",!1),posePitch:Qt(s,"PosePitchDegrees",!1),poseRoll:Qt(s,"PoseRollDegrees",!1),initialHeading:Qt(s,"InitialViewHeadingDegrees",!1),initialPitch:Qt(s,"InitialViewPitchDegrees",!1),initialFov:Qt(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((n,i)=>{const r=new FileReader;r.onload=()=>n(r.result),r.onerror=i,r.readAsText(e)})}createMesh(e){if(this.config.shader){const n=new Ar(Qn,32,16).scale(-1,1,1),i={map:{value:null},opacity:{value:1},radius:{value:Qn},uvOffset:{value:new He(e.croppedX/e.fullWidth,(e.fullHeight-e.croppedY-e.croppedHeight)/e.fullHeight)},uvScale:{value:new He(e.croppedWidth/e.fullWidth,e.croppedHeight/e.fullHeight)}},r=new Sn({uniforms:i,vertexShader:TA,fragmentShader:MA,depthTest:!1,depthWrite:!1,transparent:!0});return new rn(n,r)}else{const n=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,r=e.croppedY/e.fullHeight*Math.PI,s=e.croppedHeight/e.fullHeight*Math.PI,o=new Ar(Qn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+n,i,r,s).scale(-1,1,1),a=new As({depthTest:!1,depthWrite:!1});return new rn(o,a)}}setTexture(e,n){this.config.shader?e.material.uniforms.map.value=n.texture:e.material.map=n.texture}setTextureOpacity(e,n){this.config.shader?e.material.uniforms.opacity.value=n:(e.material.opacity=n,e.material.transparent=n<1)}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};sa.id="equirectangular";sa.VERSION="5.15.1";sa.supportsDownload=!0;var $g=sa,Kg=class jg extends $g{static withConfig(e){return[jg,e]}constructor(e,n){super(e,{resolution:(n==null?void 0:n.resolution)??64,useXmpData:!1}),Ct('"DualFisheyeAdapter" must be imported from "@photo-sphere-viewer/dual-fisheye-adapter" package')}async loadTexture(e,n){const i=await super.loadTexture(e,n,null,!1);return i.panoData=null,i}createMesh(){const e=new Ar(Qn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),n=e.getAttribute("uv"),i=e.getAttribute("normal");for(let s=0;s<n.count;s++)for(let o=0;o<3;o++){const a=s*3+o,c=i.getX(a),l=i.getY(a),u=i.getZ(a),f=.947;if(s<n.count/6){const d=c===0&&u===0?1:Math.acos(l)/Math.sqrt(c*c+u*u)*(2/Math.PI);n.setXY(a,c*(f/4)*d+1/4,u*(f/2)*d+1/2)}else{const d=c===0&&u===0?1:Math.acos(-l)/Math.sqrt(c*c+u*u)*(2/Math.PI);n.setXY(a,-c*(f/4)*d+3/4,u*(f/2)*d+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const r=new As({depthTest:!1,depthWrite:!1});return new rn(e,r)}};Kg.id="dual-fisheye";Kg.VERSION="5.15.1";var Vi=class Jg{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Jg?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},bA=na({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),en=class extends Vi{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=bA(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===wt.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Au(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Qo(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,Tu(this.container.querySelector("svg"),"psv-button-svg")}},AA=class extends en{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Ms=class extends en{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Mn.info}),this.mode=0,this.viewer.addEventListener(ls.type,this),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(vi.type,this),this.viewer.addEventListener(Si.type,this),this.viewer.addEventListener($t.type,this)}destroy(){this.viewer.removeEventListener(ls.type,this),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(vi.type,this),this.viewer.removeEventListener(Si.type,this),this.viewer.removeEventListener($t.type,this),super.destroy()}handleEvent(t){if(t instanceof $t){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof ls?e=this.mode===1:t instanceof hs?e=this.mode===1&&t.notificationId!==Pt.DESCRIPTION:t instanceof vi?e=this.mode===2:t instanceof Si&&(e=this.mode===2&&t.panelId!==Pt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Pt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Pt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Pt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Pt.DESCRIPTION,content:this.viewer.config.caption}))}};Ms.id="description";var Qg=class extends en{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Mn.download}),this.viewer.addEventListener($t.type,this),this.viewer.addEventListener(Mr.type,this)}destroy(){this.viewer.removeEventListener($t.type,this),this.viewer.removeEventListener(Mr.type,this),super.destroy()}handleEvent(t){t instanceof $t?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof Mr&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};Qg.id="download";var e0=class extends en{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Mn.fullscreenIn,iconActive:Mn.fullscreenOut}),this.viewer.addEventListener(cs.type,this)}destroy(){this.viewer.removeEventListener(cs.type,this),super.destroy()}handleEvent(t){t instanceof cs&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};e0.id="fullscreen";var wA="psvButton",RA=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Mn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,To=class extends en{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Mn.menu}),this.viewer.addEventListener(Si.type,this),this.viewer.addEventListener(vi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Si.type,this),this.viewer.removeEventListener(vi.type,this),super.destroy()}handleEvent(t){t instanceof Si?this.toggleActive(t.panelId===Pt.MENU):t instanceof vi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Pt.MENU,content:RA(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?rm(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[wA]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Pt.MENU)}};To.id="menu";function CA(t){let e;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return Mn.arrow.replace("rotate(0",`rotate(${e}`)}var Cs=class extends en{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:CA(e)}),this.direction=e,this.handler=new ia,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===wt.Enter&&this.__onMouseDown();break;case"keyup":t.key===wt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ta(Wt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Cs.groupId="move";var t0=class extends Cs{constructor(t){super(t,1)}};t0.id="moveDown";var n0=class extends Cs{constructor(t){super(t,2)}};n0.id="moveLeft";var i0=class extends Cs{constructor(t){super(t,3)}};i0.id="moveRight";var r0=class extends Cs{constructor(t){super(t,0)}};r0.id="moveUp";var Lu=class extends en{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new ia,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===wt.Enter&&this.__onMouseDown();break;case"keyup":t.key===wt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ta(Wt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Lu.groupId="zoom";var s0=class extends Lu{constructor(t){super(t,Mn.zoomIn,0)}};s0.id="zoomIn";var o0=class extends Lu{constructor(t){super(t,Mn.zoomOut,1)}};o0.id="zoomOut";var Du=class extends en{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new ym(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Dn(this.container,"max-width"),10),this.viewer.addEventListener(ei.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ds.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(ei.type,this),this.viewer.removeEventListener(ds.type,this),super.destroy()}handleEvent(t){t instanceof ei?this.__moveZoomValue(t.zoomLevel):t instanceof ds&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return ta(Wt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Du.id="zoomRange";Du.groupId="zoom";var a0=class extends bm{constructor(t){super(),this.viewer=t}init(){}destroy(){}},IA=class extends a0{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,r=n.readonlyOptions,s=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){Ct(`${s}: Unknown option "${o}"`);continue}if(r.includes(o)){Ct(`${s}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};IA.readonlyOptions=[];function Al(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof a0)return Cu(e.id,e.VERSION,"5.15.1"),e}return null}var Rr={panorama:null,container:null,adapter:[$g,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[wt.ArrowUp]:"ROTATE_UP",[wt.ArrowDown]:"ROTATE_DOWN",[wt.ArrowRight]:"ROTATE_RIGHT",[wt.ArrowLeft]:"ROTATE_LEFT",[wt.PageUp]:"ZOOM_IN",[wt.PageDown]:"ZOOM_OUT",[wt.Plus]:"ZOOM_IN",[wt.Minus]:"ZOOM_OUT"}},Id={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},wl={container:t=>{if(!t)throw new $e("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Cd(t[0]),t[1]]:t=[Cd(t),null]:t=e,!t[0])throw new $e("An undefined value was given for adapter.");if(!t[0].id)throw new $e("Adapter has no id.");return t},defaultYaw:t=>pi(t),defaultPitch:t=>pi(t,!0),defaultZoomLvl:t=>We.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Ct("maxFov cannot be lower than minFov"),t=e.maxFov),We.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),We.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Rr.lang,...t}),fisheye:t=>t===!0?1:t===!1?0:We.clamp(t,0,2),requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Al(e[0]),e[1]]:e=[Al(e),null],!e[0])throw new $e(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new $e(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?ea(Rr.navbar):typeof t=="string"?t.split(/[ ,]/):t},PA=na(Rr,wl),xr=class extends en{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Ms.id,!1))==null||t.autoSize(!0)}};xr.id="caption";var Rl={},Oo={};function LA(t,e){if(!t.id)throw new $e("Button id is required");Rl[t.id]=t,t.groupId&&(Oo[t.groupId]=Oo[t.groupId]||[]).push(t)}[o0,Du,s0,Ms,xr,Qg,e0,n0,i0,r0,t0].forEach(t=>LA(t));var DA=class extends Vi{constructor(t){super(t,{className:`psv-navbar ${Rs}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(xr.id)!==-1&&t.indexOf(Ms.id)===-1&&t.splice(t.indexOf(xr.id),0,Ms.id),t.forEach(e=>{typeof e=="object"?new AA(this,e):Rl[e]?new Rl[e](this):Oo[e]?Oo[e].forEach(n=>{new n(this)}):Ct(`Unknown button ${e}`)}),new To(this),this.children.forEach(e=>{e instanceof en&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof xr?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof en&&i.id===t);return!n&&e&&Ct(`button "${t}" not found in the navbar`),n}focusButton(t){var e,n;this.isVisible()&&((n=((e=this.getButton(t,!1))==null?void 0:e.container)||this.container.firstElementChild)==null||n.focus())}autoSize(){var i;this.children.forEach(r=>{r instanceof en&&r.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(r=>{r.isVisible()&&r instanceof en&&(e+=r.width,r.collapsable&&n.push(r))}),e!==0&&(t<e&&n.length>0?(n.forEach(r=>r.collapse()),this.collapsed=n,this.getButton(To.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(r=>r.uncollapse()),this.collapsed=[],this.getButton(To.id).hide(!1)),(i=this.getButton(xr.id,!1))==null||i.autoSize())}};xi.enabled=!1;var mr={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){xi.enabled&&(Ct("ThreeJS cache should be disabled"),xi.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},NA=class extends Vi{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Dn(this.loader,"color"),this.color=Dn(this.canvas,"color"),this.border=parseInt(Dn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Dn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener($t.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener($t.type,this),super.destroy()}handleEvent(t){t instanceof $t&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=We.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,r=this.thickness/2+this.border,s=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*s+n,a=-Math.cos(e)*s+n,c=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${r} A ${s} ${s} 0 ${c} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},FA=class extends Vi{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new hs(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new ls(e))}}},OA=class extends Vi{constructor(t){super(t,{className:`psv-overlay ${Rs}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Ei.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Ei.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Ei&&this.isVisible()&&this.state.dismissible&&t.matches(wt.Escape)&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Rg(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Zm(e))}}},UA=200,ic="psv-panel-content--no-interaction",BA=class extends Vi{constructor(t){super(t,{className:`psv-panel ${Rs}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=Mn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Ei.type,this)}destroy(){this.viewer.removeEventListener(Ei.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Ei.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Qo(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(Po(n))},this.state.keyHandler=n=>{n.key===wt.Enter&&t.clickHandler(Po(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new Si(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new vi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(ic))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(ic)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.matches(wt.Escape)&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(ic)}__resize(t,e){const n=t,i=e,r=Math.max(UA,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=r),this.container.style.width=r,this.state.mouseX=n,this.state.mouseY=i}},kA=class extends Vi{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new $e("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new $e("Initialized tooltip cannot be re-initialized");t.className&&Tu(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Dg(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(Dn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Dn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var a;if(this.state.state!==1&&this.state.state!==3)throw new $e("Uninitialized tooltip cannot be moved");t.box=t.box??((a=this.state.config)==null?void 0:a.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:gm(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let r=null,s=null;if(i.top<0?r="bottom":i.top+i.height>this.viewer.state.size.height&&(r="top"),i.left<0?s="right":i.left+i.width>this.viewer.state.size.width&&(s="left"),s||r){const c=Ru(i.posClass);r&&(i.posClass[c?0:1]=r),s&&(i.posClass[c?1:0]=s),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Jm(this.state.data));const t=parseFloat(Dn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,r=t.height,s=e.left,o=t.width,a=n+this.state.border,c=e.box.width/2+n*2,l=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-l-r,t.left=s+a-o,t.arrowTop=r,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-l-r,t.left=s-o/2,t.arrowTop=r,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-l-r,t.left=s-a,t.arrowTop=r,t.arrowLeft=n;break;case"bottom-left":t.top=i+l,t.left=s+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+l,t.left=s-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+l,t.left=s-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-r,t.left=s-c-o,t.arrowTop=r-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-r/2,t.left=s-c-o,t.arrowTop=r/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=s-c-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-r,t.left=s+c,t.arrowTop=r-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-r/2,t.left=s+c,t.arrowTop=r/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=s+c,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},zA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Is=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},_n=new F,so=new Ti(0,0,0,"ZXY"),HA=class extends Is{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return We.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return We.radToDeg(2*Math.atan(Math.tan(We.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return We.radToDeg(2*Math.atan(Math.tan(We.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!Rt(e),r=!Rt(n),s={};let o=null;if(i){const a=this.viewer.getPosition(),c=tm(a.yaw,e.yaw);s.yaw={start:a.yaw,end:a.yaw+c},s.pitch={start:a.pitch,end:e.pitch},o=Ml(t,nm(a,e))}if(r){const a=this.viewer.getZoomLevel(),c=Math.abs(n-a);s.zoom={start:a,end:n},o===null&&(o=Ml(t,Math.PI/4*c/100))}return o===null?typeof t=="number"?o=t:o=vl:o=Math.max(vl,o),{duration:o,properties:s}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??Rr.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new $e("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!so.equals(this.viewer.renderer.panoramaPose)||!so.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,_n),_n.applyEuler(this.viewer.renderer.panoramaPose),_n.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(_n)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new $e("Current adapter does not support texture coordinates or no texture has been loaded");return(!so.equals(this.viewer.renderer.panoramaPose)||!so.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,_n),yl(_n,this.viewer.renderer.sphereCorrection),yl(_n,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(_n)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=Qn){return e||(e=new F),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[yi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,_n),this.vector3ToViewerCoords(_n)}isPointVisible(t){let e,n;if(t instanceof F)e=t,n=this.vector3ToViewerCoords(t);else if(wu(t))e=this.sphericalCoordsToVector3(t,_n),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new $e("Position is missing 'yaw' or 'pitch'");return{yaw:pi(t.yaw),pitch:pi(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:pi((t==null?void 0:t.pan)||0),tilt:pi((t==null?void 0:t.tilt)||0,!0),roll:pi((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:We.degToRad((t==null?void 0:t.poseHeading)||0),tilt:We.degToRad((t==null?void 0:t.posePitch)||0),roll:We.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(Rt(t.zoom)&&!Rt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Rt(t.position)&&!Rt(e.initialHeading)&&!Rt(e.initialPitch)&&(t={...t,position:{yaw:We.degToRad(e.initialHeading),pitch:We.degToRad(e.initialPitch)}})),t}},GA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,VA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,oa=class c0{constructor(){this.$=c0.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};oa.IDLE=0;oa.CLICK=1;oa.MOVING=2;var vt=oa,WA=class extends Is{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new vt,this.keyHandler=new ia,this.resizeObserver=new ResizeObserver(um(()=>this.viewer.autoSize(),50)),this.moveThreshold=Zp*Wt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(ms.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(ms.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case as.type:this.__applyMoveDelta();break;case ms.type:this.__clearMoveDelta();break}if(!sm(t,"."+Rs))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===wt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Pt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Ei(t.key,t))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,n]of Object.entries(this.config.keyboardActions))if(yu(t,e)){if(typeof n=="function")n(this.viewer,t);else{switch(n!=="ZOOM_IN"&&n!=="ZOOM_OUT"&&this.viewer.stopAll(),n){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(n)}t.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(vt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(vt.CLICK,vt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(vt.CLICK,vt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(vt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},$p))):t.touches.length===2&&(this.step.set(vt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(vt.CLICK,vt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(vt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Pt.TWO_FINGERS,image:GA,title:this.config.lang.twoFingers})},Kp));else if(this.step.is(vt.CLICK,vt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Pt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Pt.CTRL_ZOOM,image:VA,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Pt.CTRL_ZOOM),jp);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new cs(t))}__resetMove(){this.step.set(vt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=El(t);this.step.set(vt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(vt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const r=this.viewer.container.getBoundingClientRect(),s=t-r.left,o=e-r.top,a=this.viewer.renderer.getIntersections({x:s,y:o}),c=a.find(l=>l.object.userData[yi]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),u={rightclick:i,originalEvent:n,target:Po(n),clientX:t,clientY:e,viewerX:s,viewerY:o,yaw:l.yaw,pitch:l.pitch,objects:a.map(f=>f.object).filter(f=>!f.userData[yi])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);Object.assign(u,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new zm(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Fm(u)),this.data.dblclickData=ea(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},qp))}}__handleObjectsEvents(t){if(!dm(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=om(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),r=(s,o,a)=>{this.viewer.dispatchEvent(new a(t,s,n,o))};for(const[s,o]of Object.entries(this.state.objectsObservers)){const a=i.find(c=>c.object.userData[s]);a?(o&&a.object!==o&&(r(o,s,bl),this.state.objectsObservers[s]=null),o?r(a.object,s,Zg):(this.state.objectsObservers[s]=a.object,r(a.object,s,Gg))):o&&(r(o,s,bl),this.state.objectsObservers[s]=null)}}}__doMove(t,e){if(this.step.is(vt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(vt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(vt.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),r={yaw:this.config.moveSpeed*(n/this.state.size.width)*We.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*We.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=r.yaw,this.data.moveDelta.pitch+=r.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(vt.MOVING)){t.preventDefault();const e=El(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Wt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Be.enabled=!1;var oo=new He,Pd=new ft,Ld=new Nr,XA=class extends Is{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new Jb(this.config.rendererParameters),this.renderer.setPixelRatio(Wt.pixelRatio),this.renderer.outputColorSpace=vs,this.renderer.toneMapping=au,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Vf,this.camera=new un(50,16/9,.1,2*Qn),this.camera.matrixAutoUpdate=!1;const e=new rn(new Ar(Qn).scale(-1,1,1),new As({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[yi]:!0},this.scene.add(e),this.raycaster=new nS,this.frustum=new Eu,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(ps.type,this),this.viewer.addEventListener(ei.type,this),this.viewer.addEventListener(us.type,this),this.viewer.addEventListener(fs.type,this),this.viewer.addEventListener($t.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(ps.type,this),this.viewer.removeEventListener(ei.type,this),this.viewer.removeEventListener(us.type,this),this.viewer.removeEventListener(fs.type,this),this.viewer.removeEventListener($t.type,this),super.destroy()}handleEvent(t){switch(t.type){case ps.type:this.__onSizeUpdated();break;case ei.type:this.__onZoomUpdated();break;case us.type:this.__onPositionUpdated();break;case fs.type:this.__onPositionUpdated();break;case $t.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new as(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Tg))}setTexture(t){this.meshContainer||(this.meshContainer=new _r,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(-n.tilt,-n.pan,n.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,r=!Rt(e.position),s=!Rt(e.zoom),o=new Iu(r?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new _r,c=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(c,t,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(t.panoData,c),this.setSphereCorrection(e.sphereCorrection,a),r&&!n.rotation){const p=this.viewer.getPosition(),_=new F(0,1,0);a.rotateOnWorldAxis(_,o.position.yaw-p.yaw);const E=new F(0,1,0).cross(this.camera.getWorldDirection(new F)).normalize();a.rotateOnWorldAxis(E,o.position.pitch-p.pitch)}a.add(c),this.scene.add(a);const l=new En;this.renderer.setRenderTarget(l),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),l.dispose();const{duration:u,properties:f}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),d=new Fo({properties:{...f,opacity:{start:0,end:1}},duration:u,easing:"inOutCubic",onTick:p=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?We.mapLinear(p.opacity,0,.5,1,0):We.mapLinear(p.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=n.effect==="black"?We.mapLinear(p.opacity,.5,1,0,1):We.mapLinear(p.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),s&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}r&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),s&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return d.then(p=>{a.remove(c),this.scene.remove(a),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),r&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(c))}),d}getIntersections(t){var n;oo.x=2*t.x/this.state.size.width-1,oo.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(oo,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,oo)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(Pd.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Pd),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Ld.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Ld)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(r=>{var s,o;(o=(s=r.value)==null?void 0:s.dispose)==null||o.call(s)}),n.dispose()};t.traverse(n=>{var i,r;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>{e(s)}):e(n.material)),n instanceof Vf||(r=n.dispose)==null||r.call(n),n!==t&&this.cleanScene(n)})}},YA=class extends QE{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(t,e,n,i){const r=this._abortController.signal,s=super.load(t,c=>{a(),e(c)},n,c=>{if(a(),r.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",i(l)}else i(c)});function o(){s.src=""}function a(){r.removeEventListener("abort",o,!1)}return r.addEventListener("abort",o,!1),s}},ZA=class extends Is{constructor(t){super(t),this.fileLoader=new JE,this.fileLoader.setResponseType("blob"),this.imageLoader=new YA}destroy(){this.abortLoading(),super.destroy()}abortLoading(){var t,e;(e=(t=this.fileLoader).abort)==null||e.call(t),this.imageLoader.abort()}loadFile(t,e,n){const i=mr.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);mr.remove(t,n)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t));let r=0;return e==null||e(r),this.fileLoader.loadAsync(t,s=>{if(s.lengthComputable){const o=s.loaded/s.total*100;o>r&&(r=o,e==null||e(r))}}).then(s=>(r=100,e==null||e(r),mr.add(t,n,s),s))}loadImage(t,e,n){const i=mr.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),this.imageLoader.loadAsync(t).then(r=>(mr.add(t,n,r),r))):this.loadFile(t,e,n).then(r=>this.blobToImage(r))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new $e("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new ig(Math.round(t)))}},qA=class extends Is{constructor(t){super(t),this.zoom=new Jr(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new ei(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Mm(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new us(e))},{yaw:new Jr(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Jr(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Jr(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new fs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(We.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(We.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},$A=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new F(0,0,Qn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},KA=class extends bm{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.parent=im(t.container),!this.parent)throw new $e('"container" element not found.');this.parent[yi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),vm(this.parent),xm(this.container,"core"),this.state=new $A,this.config=PA(t),this.__setSize(this.config.size),this.overlay=new OA(this);try{Wt.load()}catch(r){console.error(r),this.showError(this.config.lang.webglError);return}mr.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new XA(this),this.textureLoader=new ZA(this),this.eventsHandler=new WA(this),this.dataHelper=new HA(this),this.dynamics=new qA(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new NA(this),this.navbar=new DA(this),this.panel=new BA(this),this.notification=new FA(this),this.autoSize(),this.setCursor(null),Au(Wt.isTouchEnabled,r=>{Qo(this.container,"psv--is-touch",r)}),this.config.plugins.forEach(([r,s])=>{this.plugins[r.id]=new r(this,s)});for(const r of Object.values(this.plugins))(i=r.init)==null||i.call(r);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,r,s;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[o,a]of Object.entries(this.plugins))a.destroy(),delete this.plugins[o];this.children.slice().forEach(o=>o.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(r=this.adapter)==null||r.destroy(),(s=this.dynamics)==null||s.destroy(),this.parent.removeChild(this.container),delete this.parent[yi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ds)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Al(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return am(this.parent,Wt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new ps(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){var s;this.textureLoader.abortLoading(),(s=this.state.transitionAnimation)==null||s.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),e.sphereCorrection===void 0&&(e.sphereCorrection=this.config.sphereCorrection),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=o=>{if(mm(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new fg(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new og(t));const r=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),Sl();const a=this.dataHelper.cleanPanoramaOptions(e,o.panoData);return(!Rt(a.zoom)||!Rt(a.position))&&this.stopAll(),{textureData:o,cleanOptions:a}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(({textureData:o,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Mr(o)),Rt(a.zoom)||this.zoom(a.zoom),Rt(a.position)||this.rotate(a.position)}).then(()=>i(),o=>i(o)):this.state.loadingPromise=r.then(({textureData:o,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Mr(o)),this.state.transitionAnimation=this.renderer.transition(o,a,n),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new pg(o)),!o)throw Sl()}).then(()=>i(),o=>i(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Rr)){Ct(`Unknown option ${n}`);continue}if(n in Id){Ct(Id[n]);continue}switch(n in wl&&(i=wl[n](i,{rawConfig:e,defValue:Rr[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new ei(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new $t(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Pt.ERROR,image:zA,title:t,dismissible:!1})}hideError(){this.overlay.hide(Pt.ERROR)}rotate(t){const e=new Lm(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=wu(t),n=!Rt(t.zoom),i=new Iu(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:r,properties:s}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return r?(this.state.animation=new Fo({properties:s,duration:r,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new Fo(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t!=null&&t[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||cm(this.parent,Wt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&lm(Wt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new kA(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new ms),this.disableIdleTimer(),this.stopAnimation()}};function Cl(t,e,n){return new DataView(t,e,n)}function jA(t){if(Nu(t))return new DataView(t.buffer,t.byteOffset,t.byteLength);try{return new DataView(t)}catch{throw new TypeError("Passed data type is unsupported. Pass an ArrayBuffer, SharedArrayBuffer, DataView, a typed array such as a Uint8Array or Node Buffer, or a File.")}}function Nu(t){return!!t&&!!t.buffer&&typeof t.byteOffset=="number"&&typeof t.byteLength=="number"}function Oe(t,e,n){const i=[];for(let r=0;r<n&&e+r<t.byteLength;r++)i.push(t.getUint8(e+r));return dt(i)}function JA(t,e,n=t.byteLength){const i=Math.min(n,t.byteLength),r=[];let s=0;for(;e+s<i;){const o=t.getUint8(e+s);if(o===0)break;r.push(o),s++}return dt(r)}function QA(t,e,n){const i=[];for(let r=0;r+2<=n&&e+r+2<=t.byteLength;r+=2)i.push(t.getUint16(e+r));return i[i.length-1]===0&&i.pop(),dt(i)}function l0(t,e){const n=t.getUint8(e),i=Oe(t,e+1,n);return[n,i]}const yo=8192;function dt(t){if(!Array.isArray(t))throw new TypeError("Expected an array.");const e=[],n=[];let i=0;for(let r=0;r<t.length;r++)r in t&&(n[i++]=t[r],i===yo&&(e.push(String.fromCharCode.apply(null,n)),i=0));return n.length=i,e.push(String.fromCharCode.apply(null,n)),e.join("")}function sn(t,e=0,n=t.length,i=[]){if(n-e<=yo)return Dd(t,e,n,i);const r=[];for(let s=e;s<n;s+=yo)r.push(Dd(t,s,Math.min(s+yo,n),i));return r.join("")}function Dd(t,e,n,i){for(let r=e;r<n;r++)i[r-e]=t[r];return i.length=n-e,String.fromCharCode.apply(null,i)}const Nd=65536;function Fu(t,e,n){if(!Array.isArray(t))throw new TypeError("Expected an array.");const i=[],r=[];for(let s=0;s<t.length;s+=Nd)r.push(e1(t,s,Math.min(s+Nd,t.length),e,n,i));return r.join(n)}function e1(t,e,n,i,r,s){for(let o=e;o<n;o++)s[o-e]=i(t[o]);return s.length=n-e,s.join(r)}function aa(t){const e=Ou(t);return e===void 0?t:e}function Ou(t){let e=!0;for(let n=0;n<t.length;){const i=t1(t,n);if(i===0)return;i>1&&(e=!1),n+=i}return e?t:decodeURIComponent(escape(t))}function t1(t,e){const n=t.charCodeAt(e);if(n<128)return 1;let i,r=128,s=191;if(n>=194&&n<=223)i=2;else if(n>=224&&n<=239)i=3,n===224?r=160:n===237&&(s=159);else if(n>=240&&n<=244)i=4,n===240?r=144:n===244&&(s=143);else return 0;if(e+i>t.length)return 0;const o=t.charCodeAt(e+1);if(!(o>=r&&o<=s))return 0;for(let a=2;a<i;a++){const c=t.charCodeAt(e+a);if(!(c>=128&&c<=191))return 0}return i}const Uu=4096;function Mt(t,e){return t.push(e),e}function bi(t,e,n,i){if(!(!t||!e))if(t.length<Uu)t.push({block:e,start:n,end:i});else{const r=t[t.length-1];r.start=Math.min(r.start,n),r.end=Math.max(r.end,i)}}function Bu(){if(typeof Promise>"u")throw new Error("Promise is required when async mode is enabled.")}function Ft(){for(let t=1;t<arguments.length;t++)for(const e in arguments[t])Un(arguments[0],e,arguments[t][e]);return arguments[0]}function Un(t,e,n){if(e==="__proto__"){Object.defineProperty(t,e,{value:n,enumerable:!0,writable:!0,configurable:!0});return}t[e]=n}function Ps(t){return t!=="__proto__"&&Object.prototype.hasOwnProperty.call(Object.prototype,t)?t+"_":t}function u0(t,e,n){let i=!1;Object.defineProperty(t,e,{get(){return i||(i=!0,Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n.apply(t),writable:!0})),t[e]},configurable:!0,enumerable:!0})}function Cr(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-65+10:t>=97&&t<=102?t-97+10:-1}function f0(t,e,n){return d0(n,Math.max(0,e-t.length))+t}function n1(t,e){return parseInt(t.replace(".",""),e)/Math.pow(e,(t.split(".")[1]||"").length)}function d0(t,e){return new Array(e+1).join(t)}const Wi=void 0,ca=0,ku="brotli",i1=128*1024*1024,r1=1024*1024*1024-1;function s1(t){const e={brotli:t?t.brotli:void 0,deflate:t?t.deflate:void 0,maxDecompressedSize:t?t.maxDecompressedSize:void 0};return e.budget={remaining:h0(e),warned:!1,failed:!1,pending:void 0},e}function zu(t){return t==="deflate"?ca:t==="brotli"?ku:t}function Hu(t,e,n,i="string",r){const s=h0(r),o=a1(r,s);if(e!==Wi&&la(o))return Ls(o,s);const a=o1(e);if(r&&a){const c=r[a];if(typeof c=="function")return c1(c,t,i,n,o,s)}if(e===ca&&typeof DecompressionStream=="function")return Ud(t,"deflate",o,s).then(c=>Bd(c,i,n));if(e===ku){if(typeof DecompressionStream=="function")try{return Ud(t,"brotli",o,s).then(c=>Bd(c,i,n))}catch{}return Promise.reject("Brotli decompression is not supported in this environment. Pass in a brotli decompression function via the decompress option.")}if(e!==void 0)return Promise.reject(`Unknown compression method ${e}.`);if(i==="string")try{return new TextDecoder(n).decode(t)}catch{return t?sn(g0(t)):""}return t}function o1(t){if(t===ca)return"deflate";if(t===ku)return"brotli"}function h0(t){const e=t?t.maxDecompressedSize:void 0;return typeof e=="number"&&!isNaN(e)?e:i1}function a1(t,e){return t&&t.budget?t.budget:{remaining:e,warned:!1,failed:!1,pending:void 0}}function la(t){return!(t.remaining>=0)}function c1(t,e,n,i,r,s){return new Promise(o=>{r.pending?o(l1(t,e,n,i,r,s)):o(m0(t,e,n,i,r,s))})}function l1(t,e,n,i,r,s){const o=r.pending,a=new DataView(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength));return p0(r,o.then(()=>la(r)?Ls(r,s):m0(t,a,n,i,r,s)))}function p0(t,e){const n=e.then(()=>{},()=>{});return t.pending=n,n.then(()=>{t.pending===n&&(t.pending=void 0)}),e}function m0(t,e,n,i,r,s){const o=Math.min(r.remaining+1,r1);let a;try{a=t(g0(e),{maxOutputLength:o})}catch(c){return Fd(c,r,s,o)}if(Gu(a)){const c=Promise.resolve(a).then(l=>Od(l,n,i,r,s),l=>Fd(l,r,s,o));return r.pending?c:p0(r,c)}return Od(a,n,i,r,s)}function Fd(t,e,n,i){return t&&t.code==="ERR_BUFFER_TOO_LARGE"?(e.remaining=-1,Ls(e,n)):(u1(e,i),Promise.reject(t))}function u1(t,e){t.failed?t.remaining-=e:t.failed=!0}function Gu(t){return!!t&&typeof t.then=="function"}function Od(t,e,n,i,r){return i.remaining-=h1(t),la(i)?Ls(i,r):f1(t,e,n)}function f1(t,e,n){return e==="dataview"?t instanceof ArrayBuffer?new DataView(t):t.byteOffset===0&&t.byteLength===t.buffer.byteLength?new DataView(t.buffer):new DataView(t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)):new TextDecoder(n).decode(t)}function g0(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}function Ud(t,e,n,i){const r=new DecompressionStream(e),o=new Blob([t]).stream().pipeThrough(r).getReader(),a=[];let c=0;return l();function l(){return o.read().then(({done:u,value:f})=>u?d1(a,c):(c+=f.byteLength,n.remaining-=f.byteLength,la(n)?o.cancel().then(()=>Ls(n,i)):(a.push(f),l())))}}function d1(t,e){const n=new Uint8Array(e);let i=0;for(let r=0;r<t.length;r++)n.set(t[r],i),i+=t[r].byteLength;return n.buffer}function Bd(t,e,n){return e==="dataview"?new DataView(t):new TextDecoder(n).decode(t)}function h1(t){const e=t?t.byteLength:void 0;return typeof e!="number"?0:e>=0?e:1/0}function Ls(t,e){return!t.warned&&typeof console<"u"&&typeof console.warn=="function"&&(t.warned=!0,console.warn(`ExifReader: the total decompressed metadata size for this call would exceed the maximum of ${e} bytes, so this and any later compressed metadata blocks are skipped.`)),Promise.reject(`Decompressed metadata exceeded the maximum allowed total size of ${e} bytes.`)}const ua={builtin:p1,optionalPackage:m1};function p1(t){return _0(t,[x0,_1,x1])}function m1(t){return _0(t,[x0])}function _0(t,e){for(let n=0;n<e.length;n++)try{const i=e[n](t);if(!g1(i))return i}catch{}}function g1(t){if(Object(t)!==t)return!1;const e=Object.getPrototypeOf(t);return(e===Object.prototype||e===null)&&Object.keys(t).length===0}function x0(t){switch(t){case"fs":try{return __non_webpack_require__("fs")}catch(e){throw e}case"http":return __non_webpack_require__("http");case"https":return __non_webpack_require__("https");case"@xmldom/xmldom":try{return __non_webpack_require__("@xmldom/xmldom")}catch(e){throw e}case"@xmldom/xmldom/package.json":try{return __non_webpack_require__("@xmldom/xmldom/package.json")}catch(e){throw e}default:throw new Error(`No webpack require for ${t}.`)}}function _1(t){return globalThis.process.getBuiltinModule(t)}function x1(t){return globalThis.process.mainModule.require(t)}const Vu=200,v0=299,fa=416;function Il(t){return typeof t=="string"}function E0(t){return typeof File<"u"&&t instanceof File}function S0(t){return/^data:[^;,]*(;base64)?,/.test(t)}function v1(t,e){const n=b0(e);return n?/^\w+:\/\//.test(t)?typeof fetch<"u"?w0(t,n).then(i=>i.buffer):L0(t,n).then(i=>i.buffer):S0(t)?Promise.resolve().then(()=>M0(t)):N0(t,n).then(i=>i.buffer):A0()}function M0(t){const e=t.indexOf(","),n=t.substring(0,e),i=t.substring(e+1);if(n.indexOf(";base64")!==-1){const r=E1(i);return typeof atob<"u"?S1(atob(r)):typeof Buffer>"u"?void 0:typeof Buffer.from<"u"?Buffer.from(r,"base64"):new Buffer(r,"base64")}return T0(i).buffer}function E1(t){return t.indexOf("%")===-1||/[\u0080-\uffff]/.test(t)?t:sn(T0(t))}function S1(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}function T0(t){const e=/[\u0080-\uffff]/.test(t)?unescape(encodeURIComponent(t)):t,n=new Uint8Array(e.length-2*M1(e));let i=0;for(let r=0;r<e.length;r++)y0(e,r)?(n[i++]=Cr(e.charCodeAt(r+1))*16+Cr(e.charCodeAt(r+2)),r+=2):n[i++]=e.charCodeAt(r);return n}function M1(t){let e=0;for(let n=0;n<t.length;n++)y0(t,n)&&(e++,n+=2);return e}function y0(t,e){return t.charCodeAt(e)===37&&e+2<t.length&&Cr(t.charCodeAt(e+1))!==-1&&Cr(t.charCodeAt(e+2))!==-1}function T1(t,e){const n=b0(e);return n?F0(t,n).then(i=>i.buffer):A0()}function b0(t){const e=t?t.length:void 0;if(e==null)return{start:0};if(Number.isFinite(e)&&e>=0){const n=Math.floor(e);return{start:0,end:n,maxBytes:n}}}function A0(){return Promise.reject(new Error('The length option must be a finite non-negative number or "auto".'))}function w0(t,{start:e=0,end:n,maxBytes:i}={}){if(I0(e,n))return Promise.resolve({buffer:new ArrayBuffer(0),totalSize:void 0,status:void 0});const r={method:"GET"};return(e>0||n!==void 0&&n!==1/0)&&(r.headers={range:P0(e,n)}),fetch(t,r).then(s=>{const o=s&&typeof s.status=="number"?s.status:void 0;if(o!==void 0&&!w1(o)){Uo(s.body);const c=s.statusText||"";return Promise.reject(new Error(`Could not fetch file: ${o} ${c}`.trim()))}const a=A1(s);return o===fa?(Uo(s.body),{buffer:new ArrayBuffer(0),totalSize:a,status:o}):y1(s,i).then(c=>({buffer:c,totalSize:a,status:o}))})}function y1(t,e){return R0(e)?t.body&&typeof t.body.getReader=="function"?b1(t.body.getReader(),e):Promise.resolve(t.arrayBuffer()).then(n=>n.slice(0,e)):Promise.resolve(t.arrayBuffer())}function R0(t){return Number.isInteger(t)&&t>=0}function b1(t,e){return new Promise((n,i)=>{const r=C0(e);s();function s(){if(r.isFull()){n(r.toArrayBuffer()),Uo(t);return}t.read().then(o).then(void 0,a)}function o(c){if(c.done){n(r.toArrayBuffer());return}r.add(c.value),s()}function a(c){i(c),Uo(t)}})}function Uo(t){Promise.resolve().then(()=>t.cancel()).then(void 0,()=>{})}function C0(t){let e=new Uint8Array(0),n=0;return{add(r){const s=Math.min(r.byteLength,t-n);n+s>e.length&&i(n+s),e.set(r.subarray(0,s),n),n+=s},isFull(){return n>=t},toArrayBuffer(){if(e.length===n)return e.buffer;const r=new Uint8Array(n);return r.set(e.subarray(0,n)),r.buffer}};function i(r){const s=new Uint8Array(Math.min(t,Math.max(r,2*e.length)));s.set(e.subarray(0,n)),e=s}}function I0(t,e){return e!==void 0&&e!==1/0&&e<=t}function P0(t,e){return e===void 0||e===1/0?`bytes=${t}-`:`bytes=${t}-${e-1}`}function A1(t){if(!(!t||!t.headers||typeof t.headers.get!="function"))return D0(t.headers.get("Content-Range"),t.headers.get("Content-Length"))}function w1(t){return t>=Vu&&t<=v0?!0:t===fa}function L0(t,{start:e=0,end:n,maxBytes:i}={}){return I0(e,n)?Promise.resolve({buffer:Buffer.alloc(0),totalSize:void 0,status:void 0}):new Promise((r,s)=>{const o={};(e>0||n!==void 0&&n!==1/0)&&(o.headers={range:P0(e,n)});const a=C1(t);if(!a)return s(new Error("Node http support is not available."));a(t,o,c=>{if(c.statusCode>=Vu&&c.statusCode<=v0){const l=kd(c);if(R0(i))R1(c,i,u=>r({buffer:u,totalSize:l,status:c.statusCode}),s);else{const u=[];c.on("data",f=>u.push(Buffer.from(f))),c.on("error",f=>s(f)),c.on("end",()=>r({buffer:Buffer.concat(u),totalSize:l,status:c.statusCode}))}}else if(c.statusCode===fa){const l=kd(c);c.destroy(),r({buffer:Buffer.alloc(0),totalSize:l,status:c.statusCode})}else s(new Error(`Could not fetch file: ${c.statusCode} ${c.statusMessage}`)),c.destroy()}).on("error",c=>s(c))})}function R1(t,e,n,i){const r=C0(e);let s=!1;t.on("error",i),r.isFull()?(a(),t.destroy()):(t.on("data",o),t.on("end",a));function o(c){s||(r.add(c),r.isFull()&&(a(),t.destroy()))}function a(){s=!0,n(Buffer.from(r.toArrayBuffer()))}}function kd(t){if(!(!t||!t.headers))return D0(t.headers["content-range"],t.headers["content-length"])}function D0(t,e){if(t){const n=/\/(\d+|\*)$/.exec(t);if(n&&n[1]!=="*")return parseInt(n[1],10)}if(e){const n=parseInt(e,10);if(Number.isFinite(n))return n}}function C1(t){const e=ua.builtin(/^https:\/\//.test(t)?"https":"http");return e&&e.get}function N0(t,{start:e=0,end:n,totalSize:i}={}){return new Promise((r,s)=>{const o=ua.builtin("fs");if(!o)return s(new Error("Node file system support is not available."));o.open(t,(a,c)=>{if(a)return s(a);I1(o,t,i,(l,u)=>{if(l)return o.close(c,()=>s(l));const f=n===void 0||n===1/0||n>u?u:n,d=Math.min(Math.max(0,e),f),p=f-d,_=Buffer.alloc(p);if(p===0)return o.close(c,E=>zd(t,E,_,u,r));o.read(c,{buffer:_,length:p,position:d},E=>{if(E)return o.close(c,()=>s(E));o.close(c,m=>zd(t,m,_,u,r))})})})})}function I1(t,e,n,i){if(n!==void 0)return i(null,n);t.stat(e,(r,s)=>i(r,r?void 0:s.size))}function zd(t,e,n,i,r){e&&console.warn(`Could not close file ${t}:`,e),r({buffer:n,totalSize:i})}function F0(t,{start:e=0,end:n}={}){return new Promise(i=>{const r=typeof t.size=="number"?t.size:void 0,s=P1(t,e,n,r);i(L1(s).then(o=>({buffer:o,totalSize:r})))})}function P1(t,e,n,i){if(t&&typeof t.slice=="function"&&(e>0||n!==void 0&&n!==1/0)){const s=n===void 0||n===1/0?i:n;return t.slice(e,s)}return t}function L1(t){return typeof t.arrayBuffer=="function"?Promise.resolve(t.arrayBuffer()):new Promise((e,n)=>{const i=new FileReader;i.onload=r=>e(r.target.result),i.onerror=()=>n(i.error),i.readAsArrayBuffer(t)})}function D1(t,e){if(!t)return e;if(!e)return t;if(typeof Buffer<"u"&&Buffer.isBuffer(t)&&Buffer.isBuffer(e))return Buffer.concat([t,e]);const n=Hd(t),i=Hd(e),r=new Uint8Array(n.byteLength+i.byteLength);return r.set(n,0),r.set(i,n.byteLength),r.buffer}function Hd(t){return t instanceof ArrayBuffer?new Uint8Array(t):typeof Buffer<"u"&&Buffer.isBuffer(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Nu(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}const N1=128*1024,Gd=4,ao='length: "auto" could not locate metadata in this file (no metadata blocks found after reading the file — e.g. plain TIFF, bare JPEG XL codestream, or a file with no recognizable metadata).',F1='length: "auto" is not supported for this file type (no leading metadata container — e.g. plain TIFF or bare JPEG XL codestream).';function O1(t){if(t.expanded!==!0||t.includeOffsets!==!0)throw new Error('length: "auto" requires both expanded: true and includeOffsets: true.')}function U1(t){return function(u,f){Bu();const d=Ft({},f,{async:!0});return Il(u)?e(u,d):E0(u)?n(u,d):i(u,d)};function e(l,u){return/^\w+:\/\//.test(l)?r(typeof fetch<"u"?{readRange:(f,d)=>w0(l,{start:f,end:d,maxBytes:d}),options:u}:{readRange:(f,d)=>L0(l,{start:f,end:d,maxBytes:d}),options:u}):S0(l)?Promise.resolve().then(()=>M0(l)).then(f=>i(f,u)):r({readRange:(f,d,p)=>N0(l,{start:f,end:d,totalSize:p?p.totalSize:void 0}),options:u})}function n(l,u){return r({readRange:(f,d)=>F0(l,{start:f,end:d}),options:u})}function i(l,u){return Promise.resolve().then(()=>t(l,u)).then(f=>{if(!f||!f.metadataRange)throw new Error(F1);const d=f.metadataRange.end;return f.metadataRange.buffer=z1(l,d),f.metadataRange.fetched=Bo(f.metadataRange.buffer),f.metadataRange.requests=0,f})}function r({readRange:l,options:u}){return s({readRange:l,options:u,buffer:null,fetched:0,requests:0,totalSize:void 0,need:N1,iter:0})}function s(l){return l.iter>=Gd||(l.totalSize!==void 0&&(l.need=Math.min(l.need,l.totalSize)),l.need<=l.fetched)?c(l):l.readRange(l.fetched,l.need,{totalSize:l.totalSize}).then(u=>(l.requests++,u.status===fa?a(l):(rc(l,u),Promise.resolve(t(l.buffer,l.options)).then(f=>o(l,f)))))}function o(l,u){const f=u&&u.metadataRange;if(f&&f.complete)return co(u,l.buffer,l.fetched,l.requests);const d=l.totalSize!==void 0&&l.fetched>=l.totalSize;if(!f&&d)throw new Error(ao);const p=B1({range:f,totalSize:l.totalSize,fetched:l.fetched});if(p<=l.fetched){if(f)return co(u,l.buffer,l.fetched,l.requests);throw new Error(ao)}return l.need=p,l.iter++,s(l)}function a(l){return l.readRange(0,1/0,{totalSize:void 0}).then(u=>(l.requests++,l.buffer=u.buffer,l.fetched=Bo(l.buffer),u.totalSize!==void 0&&(l.totalSize=u.totalSize),Promise.resolve(t(l.buffer,l.options)))).then(u=>{if(!u||!u.metadataRange)throw new Error(ao);return co(u,l.buffer,l.fetched,l.requests)})}function c(l){console.warn(`ExifReader: length:"auto" did not converge in ${Gd} iterations; falling back to full read.`);let u;return l.totalSize!==void 0&&l.fetched<l.totalSize?u=l.readRange(l.fetched,l.totalSize,{totalSize:l.totalSize}).then(f=>{l.requests++,rc(l,f)}):l.totalSize===void 0?u=l.readRange(l.fetched,1/0,{totalSize:l.totalSize}).then(f=>{l.requests++,rc(l,f)}):u=Promise.resolve(),u.then(()=>Promise.resolve(t(l.buffer,l.options))).then(f=>{if(!f||!f.metadataRange)throw new Error(ao);return co(f,l.buffer,l.fetched,l.requests)})}}function rc(t,e){if(e.status===Vu&&t.fetched>0){t.buffer=e.buffer,t.fetched=Bo(t.buffer),e.totalSize!==void 0&&(t.totalSize=e.totalSize);return}e.totalSize!==void 0&&t.totalSize===void 0&&(t.totalSize=e.totalSize),t.buffer=D1(t.buffer,e.buffer),t.fetched=Bo(t.buffer)}function co(t,e,n,i){const r=t.metadataRange.end;return t.metadataRange.buffer=k1(e,r),t.metadataRange.fetched=n,t.metadataRange.requests=i,t}function B1({range:t,totalSize:e,fetched:n}){return t?Math.min(Math.max(t.end,n*2),e!==void 0?e:1/0):e!==void 0?e:n*2}function k1(t,e){return!t||typeof e!="number"||e<0?t:typeof Buffer<"u"&&Buffer.isBuffer(t)?Buffer.from(t.subarray(0,Math.min(e,t.length))):t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer?t.slice(0,Math.min(e,t.byteLength)):t}function z1(t,e){if(typeof Buffer<"u"&&Buffer.isBuffer(t))return Buffer.from(t.subarray(0,e));if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0,e);if(Nu(t)){const n=Math.max(0,Math.min(e,t.byteLength));return t.buffer.slice(t.byteOffset,t.byteOffset+n)}return H1(t)?t.slice(0,e):t}function H1(t){return!!t&&!t.buffer&&typeof t.slice=="function"&&typeof t.byteLength=="number"}function Bo(t){return t?typeof t.byteLength=="number"?t.byteLength:typeof t.length=="number"?t.length:0:0}function G1(t){if(typeof t=="string"&&typeof btoa<"u")return btoa(t);if(V1())return Buffer.from(t).toString("base64");if(typeof btoa<"u")return btoa(sn(new Uint8Array(t)));if(!(typeof Buffer>"u"))return new Buffer(t).toString("base64")}function V1(){return typeof Buffer<"u"&&typeof Buffer.from<"u"&&Buffer.from!==Uint8Array.from}const sc=[0,9,12],W1="Warning: DOMParser is not available. It is needed to be able to parse XMP tags.",O0="ExifReader needs 0.9.12 or later, or a parser passed in the domParser option.",X1="Warning: XMP tags are skipped because the version of the @xmldom/xmldom that was found could not be read. "+O0,Y1={get:Z1};function Z1(t){return t?{parser:t}:typeof DOMParser<"u"?{parser:new DOMParser}:q1()}function q1(){try{const{DOMParser:t,onErrorStopParsing:e}=ua.optionalPackage("@xmldom/xmldom"),n=K1($1());return n?{parser:void 0,warning:n}:{parser:new t({onError:e})}}catch{return{parser:void 0,warning:W1}}}function $1(){const t=ua.optionalPackage("@xmldom/xmldom/package.json");return t?t.version:void 0}function K1(t){const e=typeof t=="string"?/^(\d+)\.(\d+)\.(\d+)(-?)/.exec(t):null;if(!e)return X1;if(j1(e.slice(1,4).map(Number),e[4]==="-"))return`Warning: XMP tags are skipped because the @xmldom/xmldom that was found is version ${t}. ${O0}`}function j1(t,e){for(let n=0;n<sc.length;n++)if(t[n]!==sc[n])return t[n]<sc[n];return e}function ko(t){this.name="UnsupportedFormatError",this.message=t,Object.defineProperty(this,"stack",{value:new Error(t).stack,writable:!0,configurable:!0})}ko.prototype=Object.create(Error.prototype,{constructor:{value:ko,writable:!0,configurable:!0}});function Pl(t){this.name="MetadataMissingError",this.message=t||"No Exif data",Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0,configurable:!0})}Pl.prototype=Object.create(Error.prototype,{constructor:{value:Pl,writable:!0,configurable:!0}});const J1={MetadataMissingError:Pl,UnsupportedFormatError:ko},Q1={exif:!0,iptc:!0,photoshop:!0,mpf:!0,makerNotes:!0},Yr={exif:!0,iptc:!0,xmp:!0,icc:!0,photoshop:!0,makerNotes:!0,mpf:!0,file:!0,jfif:!0,png:!0,riff:!0,gif:!0,gps:!0,composite:!0,thumbnail:!0},Zn={exifIfdPointer:"Exif IFD Pointer",gpsInfoIfdPointer:"GPS Info IFD Pointer",interoperabilityIfdPointer:"Interoperability IFD Pointer"},ew=U0([[0,31]]),tw=U0([[1,2],[4096,4098]]);function U0(t){const e=Object.create(null);for(let n=0;n<t.length;n++)for(let i=t[n][0];i<=t[n][1];i++)e[i]=!0;return e}const Vd={thumbnail:["JPEGInterchangeFormat","JPEGInterchangeFormatLength"],iptc:["IPTC-NAA"],xmp:["ApplicationNotes"],icc:["ICC_Profile"],photoshop:["ImageSourceData","PhotoshopSettings"],makerNotes:["MakerNote","Make"],gps:["GPSLatitude","GPSLatitudeRef","GPSLongitude","GPSLongitudeRef","GPSAltitude","GPSAltitudeRef"]},B0={file:["Image Width","Image Height"],exif:["FocalLength","FocalPlaneXResolution","FocalPlaneYResolution","FocalPlaneResolutionUnit","FocalLengthIn35mmFilm","PixelXDimension","PixelYDimension"]};function nw(t){const e=Object.create(null);if(!t)return e;Array.isArray(t.exif)&&t.exif.length>0&&(e[Zn.exifIfdPointer]=!0,n(e,t.exif));for(const i in Vd)if(Wd(t[i])){const r=Vd[i];for(let s=0;s<r.length;s++)e[r[s]]=!0;e[Zn.exifIfdPointer]=!0}return Wd(t.gps)&&(e[Zn.gpsInfoIfdPointer]=!0,e[Zn.exifIfdPointer]=!0),e;function n(i,r){for(let s=0;s<r.length;s++){const o=r[s];typeof o=="number"&&(ew[o]&&(i[Zn.gpsInfoIfdPointer]=!0),tw[o]&&(i[Zn.interoperabilityIfdPointer]=!0)),typeof o=="string"&&iw(i,o)}}}function iw(t,e){const n=e.toLowerCase();n.indexOf("gps")===0&&(t[Zn.gpsInfoIfdPointer]=!0),(n.indexOf("interoperability")===0||n.indexOf("relatedimage")===0)&&(t[Zn.interoperabilityIfdPointer]=!0)}function Wd(t){return t===!0?!0:Array.isArray(t)&&t.length>0}function rw({includeTags:t,excludeTags:e,includeTagsIsLimit:n}={}){const i=!!t,r=!!e,s=i||r,o=Object.create(null),a=Object.create(null),c=Object.create(null);if(!s)return k0();const l=i&&(Cn(t,"iptc")||Cn(t,"xmp")||Cn(t,"icc")||Cn(t,"photoshop")||Cn(t,"makerNotes")||Cn(t,"thumbnail")||Cn(t,"gps")||Cn(t,"composite")),u=i&&Cn(t,"composite");let f=Object.create(null);i&&(f=sw(t));let d=Object.create(null);i&&u&&(d=uw(B0.file));for(const h in Yr){const M=i&&Object.prototype.hasOwnProperty.call(t,h)&&!!t[h],A=r&&Object.prototype.hasOwnProperty.call(e,h);let S;A&&(!M||n)&&(S=e[h]);const w=Xd({groupKey:h,includeValue:M?t[h]:void 0,excludeValue:S,extraIncludeNames:Object.create(null)});o[h]=i?M:!0,M&&cw(t[h])&&(o[h]=!1),w.excludeAll&&(o[h]=!1),a[h]=w;const y=Xd({groupKey:h,includeValue:ow({groupKey:h,hasIncludeTags:i,hasIncludeEntry:M,includeTags:t,shouldParseExif:l,shouldParseFile:u}),excludeValue:S,extraIncludeNames:aw({groupKey:h,hasIncludeTags:i,hasIncludeEntry:M,shouldParseExif:l,shouldParseFile:u,exifIncludeDependencies:f,fileIncludeDependencies:d})});c[h]=y}return{isActive:s,shouldReturnGroup:p,shouldParseGroup:_,shouldReturnTag:E,shouldParseTag:m};function p(h){return Yr[h]?!!o[h]:!0}function _(h){return!Yr[h]||p(h)?!0:h==="exif"?l:h==="file"?u:!1}function E(h,M,A){return Yr[h]?p(h)?Yd(a[h],M,A):!1:!0}function m(h,M,A){return Yr[h]?_(h)?Yd(c[h],M,A):!1:!0}}function k0(){return{isActive:!1,shouldReturnGroup:t,shouldParseGroup:t,shouldReturnTag:t,shouldParseTag:t};function t(){return!0}}const Ds=k0();function sw(t){const e=nw(t);return Cn(t,"composite")&&(fw(e,B0.exif),e[Zn.exifIfdPointer]=!0),e}function ow({groupKey:t,hasIncludeTags:e,hasIncludeEntry:n,includeTags:i,shouldParseExif:r,shouldParseFile:s}){if(!e)return!0;if(n)return t==="thumbnail"&&Array.isArray(i[t])?!0:i[t];if(t==="exif"&&r)return[];if(t==="file"&&s)return[]}function aw({groupKey:t,hasIncludeTags:e,hasIncludeEntry:n,shouldParseExif:i,shouldParseFile:r,exifIncludeDependencies:s,fileIncludeDependencies:o}){return e?t==="exif"&&(i||n&&Object.keys(s).length>0)?s:t==="file"&&r?o:Object.create(null):Object.create(null)}function Cn(t,e){if(!t||!Object.prototype.hasOwnProperty.call(t,e))return!1;const n=t[e];return n===!0?!0:Array.isArray(n)&&n.length>0}function cw(t){return Array.isArray(t)&&t.length===0}function Xd({groupKey:t,includeValue:e,excludeValue:n,extraIncludeNames:i}){const r=!!Q1[t],s={includeAll:!1,includeNames:void 0,includeIds:void 0,excludeAll:!1,excludeNames:void 0,excludeIds:void 0};if(e===!0)s.includeAll=!0;else if(Array.isArray(e)){s.includeNames=Object.create(null),r&&(s.includeIds=Object.create(null));for(let c=0;c<e.length;c++)o(s,e[c]);for(const c in i)s.includeNames[c.toLowerCase()]=!0}else if(i&&Object.keys(i).length>0){s.includeNames=Object.create(null);for(const c in i)s.includeNames[c.toLowerCase()]=!0}if(n===!0)return s.excludeAll=!0,s;if(Array.isArray(n)){s.excludeNames=Object.create(null),r&&(s.excludeIds=Object.create(null));for(let c=0;c<n.length;c++)a(s,n[c])}return s;function o(c,l){if(typeof l=="number"&&c.includeIds){c.includeIds[String(l)]=!0;return}typeof l=="string"&&(c.includeNames[l.toLowerCase()]=!0)}function a(c,l){if(typeof l=="number"&&c.excludeIds){c.excludeIds[String(l)]=!0;return}typeof l=="string"&&(c.excludeNames[l.toLowerCase()]=!0)}}function Yd(t,e,n){return t.excludeAll?!1:t.includeAll||!t.includeNames&&!t.includeIds||lw(t,e,n)?!oc(t,e,n):!1}function lw(t,e,n){return!!(n!==void 0&&t.includeIds&&t.includeIds[String(n)]||e&&t.includeNames&&t.includeNames[String(e).toLowerCase()])}function oc(t,e,n){return!!(n!==void 0&&t.excludeIds&&t.excludeIds[String(n)]||e&&t.excludeNames&&t.excludeNames[String(e).toLowerCase()])}function uw(t){const e=Object.create(null);for(let n=0;n<t.length;n++)e[t[n].toLowerCase()]=!0;return e}function fw(t,e){for(let n=0;n<e.length;n++)t[e[n]]=!0}function da(t,e,n){return n.isActive?z0(t,e,n.shouldParseTag):e}function dw(t,e,n){return n.isActive?z0(t,e,n.shouldReturnTag):e}function z0(t,e,n){if(!e)return e;const i={};for(const s in e){const o=e[s],a=r(o);n(t,s,a)&&Un(i,s,o)}return i;function r(s){if(s)return Array.isArray(s)?s.length===0?void 0:s[0].id:s.id}}const Zd=["canon","pentax"];function Ot(t,e,n){return{tags:da(t,e,n.tagFilter)}}function Wu(t,e){return t.getDataView?t.getDataView():t.dataView||e.dataView}function H0(t,e){const n=Math.max(0,Math.min(e.length,t.byteLength-e.dataOffset));return new DataView(t.buffer,t.byteOffset+e.dataOffset,n)}function G0(t,e,n){const i=t!==void 0&&typeof t.byteLength=="number"?t.byteLength:0;return e*i+n}function Ns(t,e,n){return t.carried!==void 0?{slot:n,mode:t.carried==="main"?"assign":"merge"}:{slot:e,mode:t.origin!==void 0?"merge":"assign"}}function Or(t){return t.text!==void 0}function hw(t){const e=t.filter(qd);if(e.length<2)return t;let n=[];for(let r=0;r<e.length;r++)n=n.concat(e[r].decoders);n=n.filter((r,s)=>n.indexOf(r)===s).sort((r,s)=>Zd.indexOf(r.name)-Zd.indexOf(s.name));const i={key:e[0].key,consumes:["makerNote"],emits:[],decoders:n,read:(r,s)=>V0(r,s,n),merge:e[0].merge,fromExif:W0};return t.filter(r=>!qd(r)).concat([i])}function qd(t){return t.consumes.indexOf("makerNote")!==-1}function V0(t,e,n){for(let i=0;i<n.length;i++)if(n[i].matches(t))return{tags:n[i].read(t,e)}}function W0(t,e){return t.MakerNote&&e.makerNoteOffset!==void 0&&{kind:"makerNote",tiffView:e.view,tiffHeaderOffset:e.tiffHeaderOffset,makerNoteOffset:e.makerNoteOffset,byteOrder:e.byteOrder,make:t.Make&&t.Make.value,bytes:t.MakerNote.value,carried:e.carried}}const pw=["tiff","jpeg","png","heic","avif","jxl","webp","gif","xml"],mw=["file","jfif","exif","iptc","xmp","icc","mpf","pngFile","pngText","pngChunk","riff","gif","jxlFile","isoBmffFile","photoshop","makerNote","thumbnail"],gw=["gps","composite"],_w={createComposition:xw};function xw({formats:t,groups:e}){const n=vw(t,e),i=Dl(Ll(e.filter(X0)),gw,r=>r.key);return{groups:n,dispatchKind:Sw,rank:Mw,suppressions:Tw(n),formats:Dl(Ll(t),pw,r=>r.header.fileType.value),derived:i,composed:{formats:ac(t,r=>[r.header.fileType.value]),groups:ac(e,r=>[r.key]),kinds:ac(n,r=>r.consumes),fromExif:yw(n)},decompression:bw(t),mergeModes:Aw(n.concat(i)),prepareMergeBlocks:$d(n,"prepareMergeBlocks"),finishTags:$d(n,"finishTags")}}function vw(t,e){let n=[];for(let r=0;r<t.length;r++)n=n.concat(t[r].readers);n=n.concat(e.filter(r=>!X0(r)));const i=Ll(n.filter(r=>r!==void 0));return Dl(Ew(i),mw,r=>r.consumes[0])}function X0(t){return t.read===void 0}function Ew(t){for(let e=0;e<t.length;e++)if(t[e].combine!==void 0)return t[e].combine(t);return t}function Ll(t){return t.filter((e,n)=>t.indexOf(e)===n)}function Dl(t,e,n){return t.map((i,r)=>({item:i,index:r,position:e.indexOf(n(i))})).sort((i,r)=>i.position-r.position||i.index-r.index).map(i=>i.item)}function Sw(t){return Or(t)?"pngText":t.kind}function Mw(t){return t.kind==="exif"&&t.compression!==void 0&&!Or(t)?0:1}function Tw(t){let e=[];for(let n=0;n<t.length;n++)t[n].suppressions!==void 0&&(e=e.concat(t[n].suppressions));return e}function ac(t,e){const n=Object.create(null);for(let i=0;i<t.length;i++){const r=e(t[i]);for(let s=0;s<r.length;s++)n[r[s]]=!0}return n}function yw(t){const e=Object.create(null);for(let n=0;n<t.length;n++)t[n].fromExif!==void 0&&(e[t[n].consumes[0]]=t[n].fromExif);return e}function bw(t){for(let e=0;e<t.length;e++)if(t[e].header.decompression!==void 0)return t[e].header.decompression}function Aw(t){const e=Object.create(null);for(let n=0;n<t.length;n++)Ft(e,t[n].mergeModes);return e}function $d(t,e){const n=[];for(let i=0;i<t.length;i++)t[i][e]!==void 0&&n.push(t[i][e]);return n}function ww(t){const e=[];for(let n=0;n<t.length;n++)t[n].header.isHiddenInSyncMode!==void 0&&e.push(t[n].header.isHiddenInSyncMode);return function(i){return i.kind==="icc"&&i.compression!==void 0||e.some(r=>r(i))}}const Rw={parseAppMarkers:Cw};function Cw(t,e,n){const i=e?[]:void 0;for(let r=0;r<n.length;r++){const s=n[r].header;if(s.detect(t))return Iw(s.find(t,i),s.fileType.value,s.fileType.description,i)}throw new ko("Invalid image format")}function Iw(t,e,n,i){const r={fileType:{value:e,description:n},blocks:t};return i!==void 0&&(r.ranges=i,r.truncated=!!i.truncated),r}const Kd={expanded:["file","jfif","carriedIptc","carriedXmp","carriedPhotoshop","carriedIcc","carriedMakerNotes","exif","iptc","xmp","brobExif","brobXmp","icc","mpf","pngFile","pngText","deferredPngText","pngChunk","riff","gif","jxlFile","isoBmffFile","gps","composite","thumbnail","fileType","metadataRange"],flat:["file","jfif","carriedIptc","carriedPhotoshop","carriedIcc","carriedMakerNotes","exif","carriedXmp","iptc","xmp","brobExif","brobXmp","icc","mpf","pngFile","pngText","deferredPngText","pngChunk","riff","gif","jxlFile","isoBmffFile","gps","composite","thumbnail","fileType","metadataRange"]},Pw={assign:q0,merge:Dw,nested:Nw,thumbnail:Xu,fileType:Ow,metadataRange:Uw};function Lw({mergeBlocks:t,parsedGroups:e,expanded:n,tagFilter:i,tagFilterIsReadCap:r,dataView:s,fileType:o,modes:a={},deps:c}){const l={parsedGroups:e,expanded:n,tagFilter:i,compositeInput:r&&!n&&i.shouldReturnGroup("composite")?{}:void 0,dataView:s,fileType:o,thumbnails:[],modes:a,deps:c,merge:Bw(c)},u=Y0(t,n);let f={};for(let d=0;d<u.length;d++)f=Z0(f,u[d],l);return f}function Y0(t,e){const n=e?Kd.expanded:Kd.flat;return t.map((i,r)=>({block:i,index:r,position:n.indexOf(i.slot)})).sort((i,r)=>i.position-r.position||i.index-r.index).map(i=>i.block)}function Z0(t,e,n){return(n.modes[e.mode]||Pw[e.mode])(t,e,n)}function q0(t,e,n){if(n.parsedGroups[e.group]=e.tags,ha(e.tags,n),!n.tagFilter.shouldReturnGroup(e.group))return t;const i=n.deps.filterTagsForReturn(e.group,e.tags,n.tagFilter);return $0(t,e.group,i,n.expanded,n.deps)}function ha(t,e){e.compositeInput&&e.deps.objectAssign(e.compositeInput,t)}function $0(t,e,n,i,r){return i?(t[e]=n,t):r.objectAssign({},t,K0(e,n,r))}function K0(t,e,n){if(t!=="xmp")return e;const i=n.objectAssign({},e);return delete i._raw,i}function Dw(t,e,n){if(n.merge.group(n.parsedGroups,e.group,e.tags),ha(e.tags,n),!n.tagFilter.shouldReturnGroup(e.group))return t;const i=n.deps.filterTagsForReturn(e.group,e.tags,n.tagFilter);return n.expanded?(n.merge.group(t,e.group,i),t):n.merge.topLevel(t,K0(e.group,i,n.deps))}function Nw(t,e,n){return Fw(t,e.blocks,n)}function Fw(t,e,n){const i=Y0(e,n.expanded);for(let r=0;r<i.length;r++)t=Z0(t,i[r],n);return t}function Xu(t){return delete t.Thumbnail,t}function Ow(t,e,n){return delete t.FileType,n.fileType&&n.tagFilter.shouldReturnGroup("file")&&n.tagFilter.shouldReturnTag("file","FileType")&&(n.expanded?(t.file||(t.file={}),t.file.FileType=n.fileType):t.FileType=n.fileType),t}function Uw(t,e,n){if(!n.expanded)return t;const i=kw(e.metadataBlocks,e.metadataTruncated,n.dataView,n.parsedGroups);return i&&(t.metadataRange=i),t}function Bw(t){const e=[];return{group(i,r,s){i[r]=n(i[r]),t.objectAssign(i[r],s)},topLevel(i,r){return t.objectAssign(n(i),r)}};function n(i){if(e.indexOf(i)!==-1)return i;const r=t.objectAssign({},i);return e.push(r),r}}function kw(t,e,n,i){const r=(t||[]).slice(),s=!!e;if(i&&i.mpf&&Array.isArray(i.mpf.Images))for(let u=0;u<i.mpf.Images.length;u++){const f=i.mpf.Images[u];if(!f||!f.ImageOffset||!f.ImageSize)continue;const d=f.ImageOffset.value,p=f.ImageSize.value;typeof d!="number"||d<=0||typeof p!="number"||p<=0||r.push({type:"mpfImage",start:d,end:d+p})}if(r.length===0)return;r.sort((u,f)=>u.start-f.start);const o=r[0].start;let a=r[0].end;for(let u=1;u<r.length;u++)r[u].end>a&&(a=r[u].end);const c=n&&typeof n.byteLength=="number"?n.byteLength:0,l=!s&&a<=c;return{start:o,end:a,complete:l,blocks:r}}const zw=3;function Hw(t,e,n){const i=Gw(t,e,n),r=[],s=[];for(let o=0;o<i.finderBlocks.length;o++)J0(i.finderBlocks[o],1,r,s,i);return n.options.async?e_(s,i).then(()=>({mergeBlocks:Nl(r)})):{mergeBlocks:Nl(r)}}function Gw(t,e,n){const i=Object.create(null),r=t.groups;for(let a=0;a<r.length;a++)for(let c=0;c<r[a].consumes.length;c++)i[r[a].consumes[c]]=!0;const s={composition:t,context:n,consumedKinds:i,consumersOf:o,shouldDispatch:Vw(r,o,n.tagFilter),finderBlocks:void 0};return s.finderBlocks=Yw(t.rank,Ww(t,e,s)),s;function o(a){return r.filter(c=>c.consumes.indexOf(a)!==-1)}}function Vw(t,e,n){const i=[];return r;function r(s){const o=t.indexOf(s);return i[o]===void 0&&(i[o]="visiting",i[o]=n.shouldParseGroup(s.key)||s.emits.some(a=>e(a).some(r))),i[o]===!0}}function Ww(t,e,n){const i=[];for(let r=0;r<e.length;r++){const s=Xw(t.groups,t.dispatchKind(e[r]));s===-1||j0(e[r],n.context)||i.push({block:e[r],index:r,position:s})}return i}function Xw(t,e){for(let n=0;n<t.length;n++)if(t[n].consumes.indexOf(e)!==-1)return n;return-1}function Yw(t,e){const n=Object.create(null);for(let i=0;i<e.length;i++){const r=e[i].block.kind;e[i].rank=t(e[i].block),(n[r]===void 0||e[i].rank>n[r])&&(n[r]=e[i].rank)}return e.filter(i=>i.rank===n[i.block.kind]).sort((i,r)=>i.position-r.position||i.index-r.index).map(i=>i.block)}function j0(t,e){return!e.options.async&&t.compression!==void 0}function J0(t,e,n,i,r){const s=r.consumersOf(r.composition.dispatchKind(t));for(let o=0;o<s.length;o++){const a=s[o];if(!r.shouldDispatch(a))continue;const c={group:a,block:t,tags:void 0,children:[]};let l;try{l=a.read(t,r.context)}catch{continue}if(Gu(l)){if(!r.context.options.async)throw new Error("Promise is required when async mode is enabled.");n.push(c),i.push({node:c,depth:e,promise:Promise.resolve(l).then(Zw,qw)});continue}l!==void 0&&(n.push(c),c.tags=l.tags,Q0(l.blocks,e+1,c.children,i,r))}}function Zw(t){return t}function qw(){}function Q0(t,e,n,i,r){if(t)for(let s=0;s<t.length;s++){const o=t[s];e>zw||!r.consumedKinds[r.composition.dispatchKind(o)]||j0(o,r.context)||$w(o,r)||J0(o,e,n,i,r)}}function $w(t,e){const n=e.composition.suppressions;for(let i=0;i<n.length;i++)if(n[i].kind===t.kind&&n[i].isSuppressed(t,e.finderBlocks,e.context))return!0;return!1}function e_(t,e){return t.length===0?Promise.resolve():Promise.all(t.map(n=>n.promise)).then(n=>{const i=[];for(let r=0;r<t.length;r++){const{node:s,depth:o}=t[r];n[r]!==void 0&&(s.tags=n[r].tags,Q0(n[r].blocks,o+1,s.children,i,e))}return e_(i,e)})}function Nl(t){const e=[];for(let n=0;n<t.length;n++)e.push.apply(e,Kw(t[n]));return e}function Kw(t){const e=t.group.merge(t.block),n=t.tags===void 0?[]:[Ft({group:t.group.key,tags:t.tags},e)],i=Nl(t.children);return i.length===0&&e.outerSlot===void 0?n:[{slot:e.outerSlot||e.slot,mode:"nested",blocks:n.concat(i)}]}function jw({dataView:t,options:e,tagFilter:n,decompressConfig:i,getBase64Image:r,getDomParser:s,composed:o,decompression:a}){const c=Object.create(null);return c.dataView=t,c.options=e,c.tagFilter=n,c.decompressConfig=i,c.getBase64Image=r,c.getDomParser=s,c.composed=o,c.valueBudget=void 0,c.decompress=a?a.createPooledDecompress(i):void 0,c}function Jw(t,e,n,i){const{expanded:r=!1,async:s=!1,computed:o=!1,includeUnknown:a=!1,includeOffsets:c=!1,domParser:l=void 0,includeTags:u=void 0,excludeTags:f=void 0,decompress:d=void 0}=n;e=Qw(e);const{fileType:p,blocks:_,ranges:E,truncated:m}=Rw.parseAppMarkers(e,r&&c,t.formats);s&&Bu();const h=s?_:_.filter(R=>!t.isHiddenInSyncMode(R)),M=i.createTagFilter({includeTags:u,excludeTags:f,includeTagsIsLimit:i.includeTagsIsLimit}),A=!!i.includeTagsIsLimit&&!f,S=jw({dataView:e,options:{expanded:r,async:s,computed:o,includeUnknown:a,includeOffsets:c,domParser:l,includeTags:u,excludeTags:f},tagFilter:M,decompressConfig:t.decompression?t.decompression.withDecompressBudget(d):void 0,getBase64Image:i.getBase64Image,getDomParser:i.getDomParser,composed:t.composed,decompression:t.decompression}),w=Hw(t,h,S);return s?w.then(y):y(w);function y({mergeBlocks:R}){for(let b=0;b<t.prepareMergeBlocks.length;b++)R=t.prepareMergeBlocks[b](R);let x=Lw({mergeBlocks:R.concat(nR(t,{expanded:r,includeOffsets:c,async:s,ranges:E,truncated:m})),parsedGroups:Object.create(null),expanded:r,tagFilter:M,tagFilterIsReadCap:A,dataView:e,fileType:p,modes:t.mergeModes,deps:{objectAssign:Ft,filterTagsForReturn:dw}});for(let b=0;b<t.finishTags.length;b++)x=t.finishTags[b](x,{expanded:r,async:s,tagFilter:M,blocks:h});return x}}function Qw(t){return eR(t)?Cl(t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)):t}function eR(t){return tR(t)&&(t.byteOffset>0||t.byteLength<t.buffer.byteLength)}function tR(t){return!!t&&typeof t.getUint8=="function"&&typeof t.byteOffset=="number"&&typeof t.byteLength=="number"&&!!t.buffer&&typeof t.buffer.slice=="function"}function nR(t,{expanded:e,includeOffsets:n,async:i,ranges:r,truncated:s}){const o=t.derived.map(a=>a.merge());return o.push({slot:"thumbnail",mode:"thumbnail"}),o.push({slot:"fileType",mode:"fileType"}),e&&n&&o.push({slot:"metadataRange",mode:"metadataRange",metadataBlocks:iR(t,r,i),metadataTruncated:!!s}),o}function iR(t,e,n){const i=e||[],r=i.length>=Uu,s=i.length-1,o=[];for(let a=0;a<i.length;a++){const{block:c,start:l,end:u}=i[a];(r&&a===s||(n||!t.isHiddenInSyncMode(c))&&rR(t,c))&&o.push({type:sR(c),start:l,end:u})}return o}function rR(t,e){return t.composed.kinds[t.dispatchKind(e)]===!0}function sR(t){return Or(t)||t.kind==="pngChunk"?"png":t.kind==="pngFile"?"file":t.kind}const Fl=18761,Ol=19789,Xt={BIG_ENDIAN:Ol,LITTLE_ENDIAN:Fl,getByteOrder:oR};function oR(t,e){if(t.getUint16(e)===Fl)return Fl;if(t.getUint16(e)===Ol)return Ol;throw new Error("Illegal byte order value. Faulty image.")}const aR=0,t_=2,n_=4,pa=8,i_=42,jd=2,Yu=12,cR=4,Jd={isTiffFile:lR,findTiffOffsets:fR};function lR(t){return!!t&&t.byteLength>=4&&uR(t)}function uR(t){const e=t.getUint16(0)===Xt.LITTLE_ENDIAN;return t.getUint16(t_,e)===i_}function fR(){return[{kind:"exif",tiffHeaderOffset:0}]}const Xi="exifreader.format",kn="exifreader.group",dR={fileType:{value:"tiff",description:"TIFF"},detect:t=>Jd.isTiffFile(t),find:()=>Jd.findTiffOffsets()},hR={header:dR,readers:[],brand:Xi},Qd={isJpegFile:CR,findJpegOffsets:IR},pR=2,mR=65496,gR=2,nn=4,St=2,_R=2,xR=10,vR=18,eh=33,th=79,nh=18,ER=8,Ul="ICC_PROFILE\0",r_=nn+Ul.length,s_=r_+1,SR=255,ih=1024,rh="MPF\0",o_=65472,a_=65474,MR=65476,TR=65499,yR=65501,Bl=65498,c_=65504,Zu=65505,l_=65506,bR=65517,AR=65519,wR=65534,RR=65535,sh="JFIF",oh="Exif",ah="http://ns.adobe.com/xap/1.0/\0",ch="http://ns.adobe.com/xmp/extension/\0",lh="Photoshop 3.0",uh="8BIM";function CR(t){return!!t&&t.byteLength>=pR&&t.getUint16(0)===mR}function IR(t,e){const n=[];let i=gR,r,s,o,a,c,l,u,f,d,p=0,_,E=!1;for(;i+nn+5<=t.byteLength;){let m;if(t.getUint16(i)===Bl&&(E=!0),PR(t,i))r=t.getUint16(i+St),s=i+St,o=o||Mt(n,{kind:"file"}),o.dataOffset=s,m=o;else if(LR(t,i))r=t.getUint16(i+St),o=o||Mt(n,{kind:"file"}),s===void 0&&(o.dataOffset=i+St),m=o;else if(FR(t,i))r=t.getUint16(i+St),a=a||Mt(n,{kind:"jfif"}),a.dataOffset=i+_R,m=a;else if(OR(t,i)){r=t.getUint16(i+St),p++;const h=i+xR;if(p===1)_={appMarkerPosition:i,fieldLength:r,tiffHeaderOffset:h,score:void 0};else{_.score===void 0&&(_.score=fh(t,_.appMarkerPosition,_.fieldLength,_.tiffHeaderOffset));const M=fh(t,i,r,h);M>_.score&&(_={appMarkerPosition:i,fieldLength:r,tiffHeaderOffset:h,score:M})}c=c||Mt(n,{kind:"exif"}),c.tiffHeaderOffset=_.tiffHeaderOffset,m=c}else if(UR(t,i))u=u||Mt(n,{kind:"xmp",chunks:[]}),r=t.getUint16(i+St),u.chunks.length<ih&&u.chunks.push(HR(i,r)),m=u;else if(kR(t,i))u=u||Mt(n,{kind:"xmp",chunks:[]}),r=t.getUint16(i+St),u.chunks.length<ih&&u.chunks.push(GR(i,r)),m=u;else if(VR(t,i))r=t.getUint16(i+St),l=l||Mt(n,{kind:"iptc"}),l.dataOffset=i+vR,m=l;else if(DR(t,i)){if(r=t.getUint16(i+St),f=f||Mt(n,{kind:"icc",chunks:[]}),f.chunks.length<SR){const h=i+nh,M=r-(nh-St),A=t.getUint8(i+r_),S=t.getUint8(i+s_);f.chunks.push({offset:h,length:M,chunkNumber:A,chunksTotal:S})}m=f}else if(NR(t,i))r=t.getUint16(i+St),d=d||Mt(n,{kind:"mpf"}),d.dataOffset=i+ER,m=d;else if(WR(t,i))r=t.getUint16(i+St);else if(XR(t,i)){i++;continue}else break;bi(e,m,i,i+St+r),i+=St+r}return p>1&&ZR(p),e&&(!E&&i+St<=t.byteLength&&t.getUint16(i)===Bl&&(E=!0),e.truncated=!E),n}function PR(t,e){return t.getUint16(e)===o_}function LR(t,e){return t.getUint16(e)===a_}function DR(t,e){const n=Ul.length;return t.getUint16(e)===l_&&e+s_<t.byteLength&&Oe(t,e+nn,n)===Ul}function NR(t,e){const n=rh.length;return t.getUint16(e)===l_&&Oe(t,e+nn,n)===rh}function FR(t,e){const n=sh.length;return t.getUint16(e)===c_&&Oe(t,e+nn,n)===sh&&t.getUint8(e+nn+n)===0}function OR(t,e){const n=oh.length;return t.getUint16(e)===Zu&&Oe(t,e+nn,n)===oh&&t.getUint8(e+nn+n)===0}function UR(t,e){return t.getUint16(e)===Zu&&BR(t,e)}function BR(t,e){const n=ah.length;return Oe(t,e+nn,n)===ah}function kR(t,e){return t.getUint16(e)===Zu&&zR(t,e)}function zR(t,e){const n=ch.length;return Oe(t,e+nn,n)===ch}function HR(t,e){return{dataOffset:t+eh,length:e-(eh-St)}}function GR(t,e){return{dataOffset:t+th,length:e-(th-St)}}function VR(t,e){const n=lh.length,i=uh.length,r=e+nn+n+1;return r+i<=t.byteLength&&t.getUint16(e)===bR&&Oe(t,e+nn,n)===lh&&t.getUint8(e+nn+n)===0&&Oe(t,r,i)===uh}function WR(t,e){const n=t.getUint16(e);return n>=c_&&n<=AR||n===wR||n===o_||n===a_||n===MR||n===TR||n===yR||n===Bl}function XR(t,e){return t.getUint16(e)===RR}function fh(t,e,n,i){const r=e+St+n,s=YR(t,i,r);if(!s)return 0;const o=Number.isInteger(s.ifdEntries)?s.ifdEntries:0;return(s.isValid?1e9:0)+o*1e6+n}function YR(t,e,n){try{if(e+pa>n)return;const i=t.getUint16(e+aR),r=i===Xt.LITTLE_ENDIAN;if(!r&&i!==Xt.BIG_ENDIAN||t.getUint16(e+t_,r)!==i_)return;const o=t.getUint32(e+n_,r),a=e+o;if(a+jd>n)return;const c=t.getUint16(a,r),l=jd+c*Yu+cR,f=a+l<=n&&c>0;return{ifdEntries:c,isValid:f}}catch{return}}function ZR(t){typeof console>"u"||typeof console.warn!="function"||console.warn(`ExifReader: Found ${t} Exif segments (APP1). Will pick the best candidate segment.`)}const u_={1:1,2:1,3:2,4:4,5:8,6:1,7:1,8:2,9:4,10:8,11:4,12:8,13:4,129:1},kl={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,SBYTE:6,UNDEFINED:7,SSHORT:8,SLONG:9,SRATIONAL:10,FLOAT:11,DOUBLE:12,IFD:13,UTF8:129},ue={getByteAt:hn,getAsciiAt:qR,getShortAt:Yi,getLongAt:zo,getRationalAt:$R,getSbyteAt:KR,getUndefinedAt:jR,getSshortAt:JR,getSlongAt:zl,getSrationalAt:QR,getFloatAt:eC,getDoubleAt:tC,getIfdPointerAt:nC,typeSizes:u_,tagTypes:kl,getTypeSize:iC};function hn(t,e){return t.getUint8(e)}function qR(t,e){return t.getUint8(e)}function Yi(t,e,n){return t.getUint16(e,n===Xt.LITTLE_ENDIAN)}function zo(t,e,n){return t.getUint32(e,n===Xt.LITTLE_ENDIAN)}function $R(t,e,n){return[zo(t,e,n),zo(t,e+4,n)]}function KR(t,e){return t.getInt8(e)}function jR(t,e){return hn(t,e)}function JR(t,e,n){return t.getInt16(e,n===Xt.LITTLE_ENDIAN)}function zl(t,e,n){return t.getInt32(e,n===Xt.LITTLE_ENDIAN)}function QR(t,e,n){return[zl(t,e,n),zl(t,e+4,n)]}function eC(t,e,n){return t.getFloat32(e,n===Xt.LITTLE_ENDIAN)}function tC(t,e,n){return t.getFloat64(e,n===Xt.LITTLE_ENDIAN)}function nC(t,e,n){return zo(t,e,n)}function iC(t){if(kl[t]===void 0)throw new Error("No such type found.");return u_[kl[t]]}const rC={read:sC};function sC(t,e){const n=oC(t,e),i=uC(t,e,n);return{"Bits Per Sample":aC(t,e,n),"Image Height":cC(t,e,n),"Image Width":lC(t,e,n),"Color Components":i,Subsampling:i&&fC(t,e,i.value,n)}}function oC(t,e){return Math.min(Yi(t,e),t.byteLength-e)}function aC(t,e,n){if(3>n)return;const s=hn(t,e+2);return{value:s,description:""+s}}function cC(t,e,n){if(5>n)return;const s=Yi(t,e+3);return{value:s,description:`${s}px`}}function lC(t,e,n){if(7>n)return;const s=Yi(t,e+5);return{value:s,description:`${s}px`}}function uC(t,e,n){if(8>n)return;const s=hn(t,e+7);return{value:s,description:""+s}}function fC(t,e,n,i){if(8+3*n>i)return;const o=[];for(let a=0;a<n;a++){const c=e+8+a*3;o.push([hn(t,c),hn(t,c+1),hn(t,c+2)])}return{value:o,description:o.length>1?dC(o)+hC(o):""}}function dC(t){const e={1:"Y",2:"Cb",3:"Cr",4:"I",5:"Q"};return t.map(n=>e[n[0]]).join("")}function hC(t){const e={17:"4:4:4 (1 1)",18:"4:4:0 (1 2)",20:"4:4:1 (1 4)",33:"4:2:2 (2 1)",34:"4:2:0 (2 2)",36:"4:2:1 (2 4)",65:"4:1:1 (4 1)",66:"4:1:0 (4 2)"};return t.length===0||t[0][1]===void 0||e[t[0][1]]===void 0?"":e[t[0][1]]}const pC={read:mC};function mC(t,e){const n=gC(t,e),i=MC(t,e,n),r=TC(t,e,n),s={"JFIF Version":_C(t,e,n),"Resolution Unit":xC(t,e,n),XResolution:EC(t,e,n),YResolution:SC(t,e,n),"JFIF Thumbnail Width":i,"JFIF Thumbnail Height":r};if(i!==void 0&&r!==void 0){const o=yC(t,e,3*i.value*r.value,n);o&&(s["JFIF Thumbnail"]=o)}for(const o in s)s[o]===void 0&&delete s[o];return s}function gC(t,e){return Math.min(Yi(t,e),t.byteLength-e)}function _C(t,e,n){if(9>n)return;const s=hn(t,e+7),o=hn(t,e+7+1);return{value:s*256+o,description:s+"."+o}}function xC(t,e,n){if(10>n)return;const s=hn(t,e+9);return{value:s,description:vC(s)}}function vC(t){return t===0?"None":t===1?"inches":t===2?"cm":"Unknown"}function EC(t,e,n){if(12>n)return;const s=Yi(t,e+10);return{value:s,description:""+s}}function SC(t,e,n){if(14>n)return;const s=Yi(t,e+12);return{value:s,description:""+s}}function MC(t,e,n){if(15>n)return;const s=hn(t,e+14);return{value:s,description:`${s}px`}}function TC(t,e,n){if(16>n)return;const s=hn(t,e+15);return{value:s,description:`${s}px`}}function yC(t,e,n,i){if(n===0||16+n>i)return;const s=t.byteOffset;return{value:t.buffer.slice(s+e+16,s+e+16+n),description:"<24-bit RGB pixel data>"}}const bC={fileType:{value:"jpeg",description:"JPEG"},detect:t=>Qd.isJpegFile(t),find:(t,e)=>Qd.findJpegOffsets(t,e)},AC={key:"file",consumes:["file"],emits:[],read:RC,merge:()=>({slot:"file",mode:"assign"})},wC={key:"jfif",consumes:["jfif"],emits:[],read:(t,e)=>Ot("jfif",pC.read(e.dataView,t.dataOffset),e),merge:()=>({slot:"jfif",mode:"assign"})};function RC(t,e){if(CC(e.options.includeTags))return Ot("file",rC.read(e.dataView,t.dataOffset),e)}function CC(t){if(!t)return!0;const{composite:e,file:n}=t;return e===!0||Array.isArray(e)&&e.length>0?!0:!(Array.isArray(n)&&n.length===1&&n[0]==="FileType")}const dh={isPngFile:kC,findPngOffsets:zC},Hl=`PNG\r

`,Ho=4,gs=4,Gl=0,f_=Ho,Lt=Ho+gs,Vl="XML:com.adobe.xmp\0",Ts="tEXt",ii="iTXt",zi="zTXt",d_="pHYs",h_="tIME",IC="eXIf",PC="iCCP",LC=79,p_="raw profile type exif",m_="raw profile type iptc",Wl="STATE_KEYWORD",Xl="STATE_COMPRESSION",Yl="STATE_LANG",DC="STATE_TRANSLATED_KEYWORD",Zl="STATE_TEXT",NC=1,FC=1,g_=0,OC=79,UC=79,BC=Uu,ma={};ma[Ts]=ga(Ts);ma[ii]=ga(ii);ma[zi]=ga(zi);function ga(t){return{kind:"pngText",text:{chunkType:t,name:void 0,valueOffset:void 0,valueLength:void 0}}}function kC(t){return!!t&&Oe(t,0,Hl.length)===Hl}function zC(t,e){const i="IEND",r="IHDR",s=[];let o,a,c,l,u=0,f=Hl.length,d=!1;for(;f+Ho+gs<=t.byteLength;){let p;const _=t.getUint32(f+Gl),E=Oe(t,f+f_,gs);if(E===i)d=!0;else if(E===r)o=o||Mt(s,{kind:"pngFile"}),o.dataOffset=f+Lt,p=o;else if(HC(t,E,f)){const h=$C(t,f);h!==void 0&&(a=a||Mt(s,{kind:"xmp"}),a.chunks=[{dataOffset:h,length:_-(h-(f+Lt))}],p=a)}else if(GC(E))u<BC?p=Mt(s,WC(t,f+Lt,_,E)):p=ma[E],u++;else if(E===IC)c=c||Mt(s,{kind:"exif"}),c.tiffHeaderOffset=f+Lt,p=c;else if(E===PC){const h=f+Lt,M=KC(t,h,_);M!==void 0&&(l||(l=Mt(s,{kind:"icc",compression:M.compressionMethod===g_?"deflate":"unknown",chunks:[{offset:M.compressedProfileOffset,length:_-(M.compressedProfileOffset-h),chunkNumber:1,chunksTotal:1,profileName:M.profileName,compressionMethod:M.compressionMethod}]})),p=l)}else VC(E)&&(p=Mt(s,{kind:"pngChunk",dataOffset:f+Gl}));const m=_+Ho+gs+4;bi(e,p,f,f+m),f+=m}return e&&(e.truncated=!d),s}function HC(t,e,n){return e===ii&&Oe(t,n+Lt,Vl.length)===Vl}function GC(t){return t===Ts||t===ii||t===zi}function VC(t){return[d_,h_].includes(t)}function WC(t,e,n,i){const r=XC(t,e,n,i);if(r===void 0)return ga(i);const s=ZC(i,r.langChars,r.keywordChars),o={kind:qC(s)};return r.compressionMethod!==Wi&&(o.compression=r.compressionMethod===g_?"deflate":"unknown"),o.text={chunkType:i,name:s,valueOffset:r.valueOffset,valueLength:r.valueLength},o}function XC(t,e,n,i){const r=[],s=[];let o,a,c=Wl,l=Wi;const u=Math.min(e+n,t.byteLength);for(let f=0;f<n&&e+f<t.byteLength;f++){if(c===Xl){l=YC({type:i,dataView:t,offset:e+f,chunkEnd:u}),i===ii&&(f+=NC),c=hh(i,c);continue}else if(c===Zl){o=e+f,a=n-f;break}const d=t.getUint8(e+f);if(d===0)c=hh(i,c);else if(c===Wl){if(r.length>=OC)return;r.push(d)}else if(c===Yl){if(s.length>=UC)return;s.push(d)}}return{keywordChars:r,langChars:s,compressionMethod:l,valueOffset:o,valueLength:a}}function YC({type:t,dataView:e,offset:n,chunkEnd:i}){if(t===ii){if(n+1<i&&e.getUint8(n)===FC)return e.getUint8(n+1)}else if(t===zi)return e.getUint8(n);return Wi}function hh(t,e){return e===Wl&&[ii,zi].includes(t)?Xl:e===Xl?t===ii?Yl:Zl:e===Yl?DC:Zl}function ZC(t,e,n){const i=dt(n);if(t===Ts||e.length===0)return i;const r=dt(e);return`${i} (${r})`}function qC(t){const e=t.toLowerCase();return e===p_?"exif":e===m_?"iptc":"pngText"}function $C(t,e){e+=Lt+Vl.length+1+1;let r=0;for(;r<2&&e<t.byteLength;)t.getUint8(e)===0&&r++,e++;if(!(r<2))return e}function KC(t,e,n){const s=Math.min(e+n,t.byteLength),o=jC(t,e,s);if(o===void 0)return;const a=e+o+1;if(!(a+1>s))return{profileName:Oe(t,e,o),compressionMethod:t.getUint8(a),compressedProfileOffset:a+1}}function jC(t,e,n){for(let i=0;i<=LC&&e+i<n;i++)if(t.getUint8(e+i)===0)return i}const JC={read:tI},QC={0:"Grayscale",2:"RGB",3:"Palette",4:"Grayscale with Alpha",6:"RGB with Alpha"},eI={0:"Noninterlaced",1:"Adam7 Interlace"},cc=[{name:"Image Width",offset:0,size:4,read:ue.getLongAt,description:t=>`${t}px`},{name:"Image Height",offset:4,size:4,read:ue.getLongAt,description:t=>`${t}px`},{name:"Bit Depth",offset:8,size:1,read:ue.getByteAt,description:t=>`${t}`},{name:"Color Type",offset:9,size:1,read:ue.getByteAt,description:t=>QC[t]||"Unknown"},{name:"Compression",offset:10,size:1,read:ue.getByteAt,description:t=>t===0?"Deflate/Inflate":"Unknown"},{name:"Filter",offset:11,size:1,read:ue.getByteAt,description:t=>t===0?"Adaptive":"Unknown"},{name:"Interlace",offset:12,size:1,read:ue.getByteAt,description:t=>eI[t]||"Unknown"}];function tI(t,e){const n={};for(let i=0;i<cc.length;i++)n[cc[i].name]=nI(t,e,cc[i]);return n}function nI(t,e,n){if(e+n.offset+n.size>t.byteLength)return;const i=n.read(t,e+n.offset);return{value:i,description:n.description(i)}}const __={get:iI};function iI(){if(typeof TextDecoder<"u")return TextDecoder}const rI=5,sI={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},x_={decode:oI,TAG_HEADER_SIZE:rI};function oI(t,e){if(typeof e=="string")return aa(e);const n=__.get();if(typeof n<"u"&&t!==void 0)try{return new n(t).decode(e instanceof DataView?e.buffer:Uint8Array.from(e))}catch{}const i=sn(e),r=Ou(i);return r!==void 0?r:aI(e)}function aI(t){const e=t instanceof DataView,n=e?t.byteLength:t.length,i=e?s=>t.getUint8(s):s=>t[s],r=new Array(n);for(let s=0;s<n;s++){const o=i(s),a=sI[o];r[s]=a!==void 0?a:o}return sn(r)}const cI={read:uI},lI=6,v_=255;function uI(t,e){if(t.text.name===void 0)return;if(t.compression===void 0)return ph(E_(e.dataView,t.text),e,!1);const n=e.compressedPngTextChunks||0;if(!(n>=v_))return e.compressedPngTextChunks=n+1,hI(e,t).then(i=>ph(i,e,!0))}function ph({name:t,value:e,description:n},i,r){if(gI(t,e))return{tags:{},blocks:[{kind:"exif",tiffHeaderOffset:lI,origin:"rawProfile",decompressed:r,getDataView:()=>gh(e)}]};if(T_(t,e))return{tags:{},blocks:[{kind:"iptc",dataOffset:0,origin:"rawProfile",decompressed:r,getDataView:()=>gh(e)}]};if(t&&i.tagFilter.shouldParseGroup("png")){const s={};return Un(s,Ps(t),{value:e,description:n}),{tags:da("png",s,i.tagFilter)}}}function fI(t,e){let n=0;for(let i=0;i<t.length;i++){const r=t[i];if(!(r.text===void 0||r.text.name===void 0)){if(r.compression!==void 0){if(n++,r.kind==="iptc"&&n<=v_)return!0}else if(r.kind==="iptc"&&dI(r,e))return!0}}return!1}function dI(t,e){const n=E_(e,t.text);return T_(n.name,n.value)}function E_(t,e){const n=Hu(S_(t,e),Wi,M_(e.chunkType),"string");return qu(n,e.chunkType,e.name)}function S_(t,{valueOffset:e,valueLength:n}){if(e===void 0)return;const i=t.byteOffset;return new DataView(t.buffer.slice(i+e,i+e+n))}function hI(t,{compression:e,text:n}){const i=S_(t.dataView,n);return i===void 0?Promise.resolve(mh(n)):t.decompress(i,zu(e),M_(n.chunkType),"string").then(r=>qu(r,n.chunkType,n.name)).catch(()=>mh(n))}function mh({chunkType:t,name:e}){return qu("<text using unknown compression>",t,e)}function M_(t){return t===Ts||t===zi?"latin1":"utf-8"}function qu(t,e,n){const i=pI(t);return{name:n,value:i,description:e===ii?mI(t):i}}function pI(t){return t instanceof DataView?Oe(t,0,t.byteLength):t}function mI(t){return x_.decode("UTF-8",t)}function gI(t,e){return t.toLowerCase()===p_&&e.substring(1,5)==="exif"}function T_(t,e){return t.toLowerCase()===m_&&e.substring(1,5)==="iptc"}function gh(t){const e=/\n(exif|iptc)\n\s*\d+\n/.exec(t);if(!e)throw new Error("Invalid raw profile header.");const n=e.index+e[0].length,i=_I(t,n);if(i%2!==0)throw new Error("Odd number of hex digits in raw profile.");const r=new Uint8Array(i/2);let s=0,o=-1;for(let a=n;a<t.length;a++){const c=Cr(t.charCodeAt(a));c<0||(o<0?o=c:(r[s++]=o<<4|c,o=-1))}return new DataView(r.buffer)}function _I(t,e){let n=0;for(let i=e;i<t.length;i++)Cr(t.charCodeAt(i))>=0&&n++;return n}const xI={read:vI};function vI(t,e){const n={};for(let i=0;i<e.length;i++){const r=ue.getLongAt(t,e[i]+Gl),s=Oe(t,e[i]+f_,gs);s===d_?(n["Pixels Per Unit X"]=EI(t,e[i],r),n["Pixels Per Unit Y"]=SI(t,e[i],r),n["Pixel Units"]=MI(t,e[i],r)):s===h_&&(n["Modify Date"]=TI(t,e[i],r))}return n}function EI(t,e,n){if(!_a(t,e,n,0,4))return;const s=ue.getLongAt(t,e+Lt+0);return{value:s,description:""+s}}function SI(t,e,n){if(!_a(t,e,n,4,4))return;const s=ue.getLongAt(t,e+Lt+4);return{value:s,description:""+s}}function MI(t,e,n){if(!_a(t,e,n,8,1))return;const s=ue.getByteAt(t,e+Lt+8);return{value:s,description:s===1?"meters":"Unknown"}}function TI(t,e,n){if(!_a(t,e,n,0,7))return;const r=ue.getShortAt(t,e+Lt),s=ue.getByteAt(t,e+Lt+2),o=ue.getByteAt(t,e+Lt+3),a=ue.getByteAt(t,e+Lt+4),c=ue.getByteAt(t,e+Lt+5),l=ue.getByteAt(t,e+Lt+6);return{value:[r,s,o,a,c,l],description:`${fr(r,4)}-${fr(s,2)}-${fr(o,2)} ${fr(a,2)}:${fr(c,2)}:${fr(l,2)}`}}function _a(t,e,n,i,r){return i+r<=n&&e+Lt+i+r<=t.byteLength}function fr(t,e){return f0(""+t,e,"0")}const yI=4,y_={withDecompressBudget:s1,createPooledDecompress:bI};function bI(t){const e=AI(yI);return(n,i,r,s)=>e.run(()=>Hu(n,i,r,s,t))}function AI(t){const e=[];let n=0;return{run(r){return new Promise((s,o)=>{e.push({task:r,resolve:s,reject:o}),i()})}};function i(){if(n>=t||e.length===0)return;const{task:r,resolve:s,reject:o}=e.shift();n++,new Promise(a=>a(r())).then(a=>{n--,i(),s(a)},a=>{n--,i(),o(a)})}}const wI={fileType:{value:"png",description:"PNG"},detect:t=>dh.isPngFile(t),find:(t,e)=>dh.findPngOffsets(t,e),isHiddenInSyncMode:PI,decompression:y_},RI={key:"png",consumes:["pngFile"],emits:[],read:(t,e)=>Ot("png",JC.read(e.dataView,t.dataOffset),e),merge:()=>({slot:"pngFile",mode:"pngFile"}),mergeModes:{pngFile:LI}},CI={key:"png",consumes:["pngText"],emits:["exif","iptc"],read:(t,e)=>cI.read(t,e),merge:t=>({slot:t.compression!==void 0?"deferredPngText":"pngText",mode:"pngTextTags"}),suppressions:[{kind:"iptc",isSuppressed:DI}],mergeModes:{pngTextTags:NI},prepareMergeBlocks:FI,finishTags:OI},II={key:"png",consumes:["pngChunk"],emits:[],read:(t,e)=>Ot("png",xI.read(e.dataView,[t.dataOffset]),e),merge:()=>({slot:"pngChunk",mode:"merge"})};function PI(t){return Or(t)&&t.text.chunkType===zi}function LI(t,e,n){if(n.parsedGroups.pngFile=e.tags,ha(e.tags,n),!n.tagFilter.shouldReturnGroup("png"))return t;const i=n.deps.filterTagsForReturn("png",e.tags,n.tagFilter);return n.expanded?(n.merge.group(t,"png",i),t.pngFile=i,t):n.merge.topLevel(t,i)}function DI(t,e,n){return t.carried!=="rawProfile"?!1:(n.hasRawIptcProfile===void 0&&(n.hasRawIptcProfile=fI(e,n.dataView)),n.hasRawIptcProfile)}function NI(t,e,n){if(ha(e.tags,n),!n.tagFilter.shouldReturnGroup("png"))return t;const i=n.deps.filterTagsForReturn("png",e.tags,n.tagFilter);return n.expanded?(n.merge.group(t,"png",i),Object.keys(i).length>0&&n.merge.group(t,"pngText",i),t):n.merge.topLevel(t,i)}function FI(t){const e=[],n=[];let i=-1;for(let r=0;r<t.length;r++){if(t[r].slot!=="pngText"){e.push(t[r]);continue}i===-1&&(i=e.length,e.push(void 0)),b_(t[r],n)}return i!==-1&&(e[i]={slot:"pngText",mode:"nested",blocks:n}),e}function b_(t,e){if(t.mode!=="nested"){e.push(t);return}for(let n=0;n<t.blocks.length;n++)b_(t.blocks[n],e)}function OI(t,{expanded:e,async:n,tagFilter:i,blocks:r}){const s=r.filter(Or);return e&&n&&s.some(UI)&&i.shouldReturnGroup("png")&&t.png&&(t.pngText=Ft({},t.png)),e&&i.shouldReturnGroup("png")&&s.length>0&&t.png&&!t.pngText&&(t.pngText=Ft({},t.png)),t}function UI(t){return t.compression!==void 0&&t.text.name!==void 0}function BI(t,e){return t.getUint32(e+4)}function Ir(t,e,n){return e+n<=t.byteLength}const kI=1024*1024;function zI(t,e,n,i,r,s){const{offsets:a,sizes:c}=HI(n,i+3),l=t.getUint8(a.offsetSize)>>4;c.item.extent.extentOffset=l;const u=t.getUint8(a.lengthSize)&15;c.item.extent.extentLength=u;const f=t.getUint8(a.baseOffsetSize)>>4;c.item.baseOffset=f;const d=GI(t,a.indexSize,n);c.item.extent.extentIndex=d!==void 0?d:0;const p=VI(t,a.itemCount,n),_=Math.min(e+r,s);return{type:"iloc",items:WI(t,_,n,a,c,l,u,d,p),uses64BitFields:qI(l,u,f,d),length:r}}function HI(t,e){const n={item:{dataReferenceIndex:2,extentCount:2,extent:{}}};t<2?(n.itemCount=2,n.item.itemId=2):t===2&&(n.itemCount=4,n.item.itemId=4),t===1||t===2?n.item.constructionMethod=2:n.item.constructionMethod=0;const i={offsetSize:e,lengthSize:e,baseOffsetSize:e+1,indexSize:e+1};return i.itemCount=e+2,i.items=i.itemCount+n.itemCount,i.item={itemId:0},i.item.constructionMethod=i.item.itemId+n.item.itemId,i.item.dataReferenceIndex=i.item.constructionMethod+n.item.constructionMethod,{offsets:i,sizes:n}}function GI(t,e,n){if(n===1||n===2)return t.getUint8(e)&15}function VI(t,e,n){if(n<2)return t.getUint16(e);if(n===2)return t.getUint32(e)}function WI(t,e,n,i,r,s,o,a,c){if(c===void 0)return[];const l=[];let u=i.items;const f=r.item.extent.extentIndex+r.item.extent.extentOffset+r.item.extent.extentLength,d=r.item.itemId+r.item.constructionMethod+r.item.dataReferenceIndex+r.item.baseOffset+r.item.extentCount;let p=0;for(let _=0;_<c&&!(u+d>e);_++){const E={extents:[]};E.itemId=YI(t,u,n),u+=r.item.itemId,E.constructionMethod=n===1||n===2?t.getUint16(u)&15:void 0,u+=r.item.constructionMethod,E.dataReferenceIndex=t.getUint16(u),u+=r.item.dataReferenceIndex,E.baseOffset=bo(t,u,r.item.baseOffset),u+=r.item.baseOffset,E.extentCount=t.getUint16(u),u+=r.item.extentCount;const m=XI(E.extentCount,f,u,e,kI-p);for(let h=0;h<m;h++){const M={};M.extentIndex=ZI(t,n,u,a),u+=r.item.extent.extentIndex,M.extentOffset=bo(t,u,s),u+=r.item.extent.extentOffset,M.extentLength=bo(t,u,o),u+=r.item.extent.extentLength,E.extents.push(M)}if(p+=m,l.push(E),(E.extentCount-m)*f>0)break}return l}function XI(t,e,n,i,r){if(e===0)return 0;const s=Math.floor((i-n)/e);return Math.max(0,Math.min(t,s,r))}function YI(t,e,n){if(n<2)return t.getUint16(e);if(n===2)return t.getUint32(e)}function ZI(t,e,n,i){if((e===1||e===2)&&i>0)return bo(t,n,i)}function bo(t,e,n){return n===4?t.getUint32(e):n===8?BI(t,e):0}function qI(t,e,n,i){return t===8||e===8||n===8||i===8}const $I=1718909296,KI=1768977008,jI=1835365473,JI=1768714083,QI=1768186228,eP=1768517222,tP=1768842853,nP=1768973167,iP=1668246642,rP=1885959277,sP=1768975713,oP=1769173093,aP=1885960297,A_=1165519206,$u=1835625829,cP=1970432288,lP=65536,w_=4,Ku=8,xa=4,uP={type:void 0};function ju(t,e,n=t.byteLength){if(Ir(t,e,Ku))try{const{length:r,contentOffset:s}=C_(t,e);if(r<s-e||s>n)return;const o=t.getUint32(e+w_);if(o===$I)return AP(t,s,r);if(o===KI)return wP(t,e,s,r,n);if(o===nP)return RP(t,e,s,r,n);if(o===iP)return IP(t,s,r);if(o===QI)return DP(s,r);if(!Ir(t,s,1))return;const a=t.getUint8(s);return o===jI?LP(t,e,s+1,r,n):o===JI?zI(t,e,a,s+1,r,n):o===eP?BP(t,e,a,s+1,r,n):o===tP?kP(t,e,a,s+1,r,n):o===rP?NP(t,e,a,s,r,n):o===sP?FP(t,e,a,s,r,n):o===oP?OP(t,e,s,r,n):o===aP?UP(t,e,a,s,r,n):Pr(r)}catch{return}}function R_(t,e){if(!t)return!1;try{const n=ju(t,0);return n!==void 0&&e.indexOf(n.majorBrand)!==-1}catch{return!1}}function C_(t,e){const a=t.getUint32(e);if(fP(a))return{length:t.byteLength-e,contentOffset:e+4+4};if(dP(a)){if(!Ir(t,e,16))return{length:0,contentOffset:e+4+4};if(hP(t,e))return{length:t.getUint32(e+12),contentOffset:e+4+4+8}}return{length:a,contentOffset:e+4+4}}function fP(t){return t===0}function dP(t){return t===1}function hP(t,e){return t.getUint32(e+8)===0}function I_(t,e){const n=[],i=pP(t);return i&&(mP(i),lo(n,gP(t,i,e)),lo(n,xP(t,i,e)),lo(n,EP(i,e))),lo(n,SP(t,i)),n}function lo(t,e){e!==void 0&&t.push(e)}function pP(t){let i=0;for(;i+4+4<=t.byteLength;){const r=ju(t,i);if(r===void 0)break;if(r.type==="meta")return r;i+=r.length}}function mP(t){const e=t.subBoxes.find(n=>n.type==="iloc");e&&e.uses64BitFields&&console.warn("This file uses 8-byte iloc offset, length or index fields which are currently not fully supported by ExifReader. Contact the maintainer to get it fixed.")}function gP(t,e,n){try{const i=_P(e).itemId,r=F_(e,i);D_(r);const s=L_(e),o={kind:"exif"};if(P_(n,r,o,s),r.extents.length>1){const c=N_(t,r,s);return c===void 0?void 0:(o.tiffHeaderOffset=Go(c,0),o.dataView=c,o)}const a=va(r,r.extents[0],s);return a===void 0?void 0:(o.tiffHeaderOffset=Go(t,a),o)}catch{return}}function P_(t,e,n,i){if(t)for(let r=0;r<e.extents.length;r++){const s=e.extents[r],o=va(e,s,i);o!==void 0&&bi(t,n,o,o+s.extentLength)}}function va(t,e,n){const i=t.constructionMethod;if(i===void 0||i===0)return t.baseOffset+e.extentOffset;if(i===1&&n!==void 0)return n+t.baseOffset+e.extentOffset}function L_(t){const e=t.subBoxes.find(n=>n.type==="idat");return e?e.contentOffset:void 0}function D_(t){t.constructionMethod===2&&console.warn("This file uses iloc constructionMethod 2 (item_offset) which is currently not supported by ExifReader. Contact the maintainer to get it fixed.")}function N_(t,e,n){const i=[];let r=0;for(let a=0;a<e.extents.length;a++){const c=e.extents[a],l=va(e,c,n);if(l===void 0||l+c.extentLength>t.byteLength||(i.push({start:l,length:c.extentLength}),r+=c.extentLength,r>t.byteLength))return}const s=new Uint8Array(r);let o=0;for(let a=0;a<i.length;a++){const{start:c,length:l}=i[a];for(let u=0;u<l;u++)s[o+u]=t.getUint8(c+u);o+=l}return new DataView(s.buffer)}function _P(t){return t.subBoxes.find(e=>e.type==="iinf").itemInfos.find(e=>e.itemType===A_)}function F_(t,e){return t.subBoxes.find(n=>n.type==="iloc").items.find(n=>n.itemId===e)}function Go(t,e){return e+4+t.getUint32(e)}function xP(t,e,n){try{const i=vP(e).itemId,r=F_(e,i);D_(r);const s=L_(e),o={kind:"xmp"};if(P_(n,r,o,s),r.extents.length>1){const l=N_(t,r,s);return l===void 0?void 0:(o.chunks=[{dataOffset:0,length:l.byteLength}],o.dataView=l,o)}const a=r.extents[0],c=va(r,a,s);return c===void 0?void 0:(o.chunks=[{dataOffset:c,length:a.extentLength}],o)}catch{return}}function vP(t){return t.subBoxes.find(e=>e.type==="iinf").itemInfos.find(e=>e.itemType===$u&&e.contentType==="application/rdf+xml")}function EP(t,e){try{const n=t.subBoxes.find(i=>i.type==="iprp").subBoxes.find(i=>i.type==="ipco").properties.find(i=>i.type==="colr").icc;if(n){const i={kind:"icc",chunks:[n]};return bi(e,i,n.offset,n.offset+n.length),i}}catch{}}function SP(t,e){const{imageDimensionsOffset:n,pixelInformationOffset:i}=MP(t,e);if(n===void 0&&i===void 0)return;const r={kind:"isoBmffFile"};return n!==void 0&&(r.imageDimensionsOffset=n),i!==void 0&&(r.pixelInformationOffset=i),r}function MP(t,e){try{if(!e)return{};const n=e.subBoxes.find(c=>c.type==="pitm"),i=e.subBoxes.find(c=>c.type==="iprp");if(!n||!i)return{};const r=i.subBoxes.find(c=>c.type==="ipco");if(!r)return{};const s=TP(t,i.subBoxes,n.itemId);if(!s)return{};const o=_h(s,r.properties,"ispe"),a=_h(s,r.properties,"pixi");return{imageDimensionsOffset:o&&o.dimensionsOffset,pixelInformationOffset:a&&a.channelCountOffset}}catch{return{}}}function TP(t,e,n){for(let i=0;i<e.length;i++)if(e[i].type==="ipma"){const r=yP(t,e[i],n);if(r)return r}}function yP(t,e,n){const s=e.version===0?2:4,o=(e.flags&1)===1?2:1,a=t.getUint32(e.entryCountOffset);let c=e.entryCountOffset+4;for(let l=0;l<a&&c+s+1<=e.end;l++){const u=s===2?t.getUint16(c):t.getUint32(c),f=t.getUint8(c+s);if(c+=s+1,u===n){const d=Math.min(f,Math.floor((e.end-c)/o));return bP(t,c,d,o)}c+=f*o}}function bP(t,e,n,i){const r=i===2?32767:127,s=[];for(let o=0;o<n;o++){const a=e+o*i,c=i===2?t.getUint16(a):t.getUint8(a);s.push(c&r)}return s}function _h(t,e,n){for(let i=0;i<t.length;i++){const r=e[t[i]-1];if(r!==void 0&&r.type===n)return r}}function AP(t,e,n){return{type:"ftyp",majorBrand:Oe(t,e,4),length:n}}function wP(t,e,n,i,r){return{type:"iprp",subBoxes:Ju(t,n,i-(n-e),r),length:i}}function RP(t,e,n,i,r){return{type:"ipco",properties:CP(t,n,i-(n-e),r),length:i}}function CP(t,e,n,i){const r=[];return O_(t,e,n,i,s=>{r.push(s.type!==void 0?s:uP)}),r}function IP(t,e,n){return{type:"colr",icc:PP(t,e),length:n}}function PP(t,e){const i=Oe(t,e,4);if(!(i!=="prof"&&i!=="rICC"))return{offset:e+4,length:t.getUint32(e+4),chunkNumber:1,chunksTotal:1}}function LP(t,e,n,i,r){return{type:"meta",subBoxes:Ju(t,n+3,i-(n+3-e),r),length:i}}function DP(t,e){return{type:"idat",contentOffset:t,length:e}}function NP(t,e,n,i,r,s){const o=i+xa;return o+(n===0?2:4)>Ea(t,e,r,s)?Pr(r):{type:"pitm",itemId:n===0?t.getUint16(o):t.getUint32(o),length:r}}function FP(t,e,n,i,r,s){const c=i+xa,l=Ea(t,e,r,s);return c+4>l?Pr(r):{type:"ipma",version:n,flags:t.getUint32(i)&16777215,entryCountOffset:c,end:l,length:r}}function OP(t,e,n,i,r){const o=n+xa;return o+8>Ea(t,e,i,r)?Pr(i):{type:"ispe",dimensionsOffset:o,length:i}}function UP(t,e,n,i,r,s){const a=i+xa,c=Ea(t,e,r,s);if(n!==0||a+1>c)return Pr(r);const l=t.getUint8(a);return a+1+l>c?Pr(r):{type:"pixi",channelCountOffset:a,length:r}}function Ea(t,e,n,i){return Math.min(e+n,i,t.byteLength)}function Pr(t){return{type:void 0,length:t}}function Ju(t,e,n,i){const r=[A_,$u],s=[];return O_(t,e,n,i,o=>{o.type!==void 0&&(o.itemType===void 0||r.indexOf(o.itemType)!==-1)&&s.push(o)}),s}function O_(t,e,n,i,r){const s=Math.min(e+n,i);let o=e;for(;o+Ku<=s;){const a=ju(t,o,s);if(a===void 0)break;r(a),o+=a.length}}function BP(t,e,n,i,r,s){const a=n===0?2:4,c=i+3+a;return{type:"iinf",itemInfos:Ju(t,c,r-(c-e),s),length:r}}function kP(t,e,n,i,r,s){i+=3;const a={type:"infe",length:r},c=Math.min(e+r,s);if((n===0||n===1)&&(a.itemId=t.getUint16(i),i+=2,a.itemProtectionIndex=t.getUint16(i),i+=2,a.itemName=Zr(t,i,c).value,i+=a.itemName.length+1),n>=2){n===2?(a.itemId=t.getUint16(i),i+=2):n===3&&(a.itemId=t.getUint32(i),i+=4),a.itemProtectionIndex=t.getUint16(i),i+=2,a.itemType=t.getUint32(i),i+=4;const l=Zr(t,i,c);if(a.itemName=l.value,!l.isTerminated)return a;if(i+=a.itemName.length+1,a.itemType===$u){const u=Zr(t,i,c);if(a.contentType=u.value,!u.isTerminated)return a;i+=a.contentType.length+1,c>i&&(a.contentEncoding=Zr(t,i,c).value)}else a.itemType===cP&&(a.itemUri=Zr(t,i,c).value)}return a}function Zr(t,e,n){const i=Math.min(n,e+lP),r=JA(t,e,i);return{value:r,isTerminated:e+r.length<i}}const xh={isHeicFile:HP,findHeicOffsets:GP},zP=["heic","heix","hevc","hevx","heim","heis","hevm","hevs","mif1"];function HP(t){return R_(t,zP)}function GP(t,e){return I_(t,e)}const VP={read:YP},WP=8,XP=4,vh=1;function YP(t,e,n){const i={};return e!==void 0&&Ft(i,ZP(t,e)),n!==void 0&&Ft(i,qP(t,n)),i}function ZP(t,e){if(!Ir(t,e,WP))return{};const n=t.getUint32(e),i=t.getUint32(e+XP);return{"Image Width":{value:n,description:`${n}px`},"Image Height":{value:i,description:`${i}px`}}}function qP(t,e){if(!Ir(t,e,vh))return{};const n=t.getUint8(e),i=e+vh;if(!Ir(t,i,n))return{};const r={"Color Components":{value:n,description:`${n}`}},s=$P(t,i,n);return s!==void 0&&(r["Bits Per Sample"]={value:s,description:`${s}`}),r}function $P(t,e,n){if(n===0)return;const i=t.getUint8(e);for(let r=1;r<n;r++)if(t.getUint8(e+r)!==i)return;return i}const U_={key:"file",consumes:["isoBmffFile"],emits:[],read:(t,e)=>Ot("file",VP.read(e.dataView,t.imageDimensionsOffset,t.pixelInformationOffset),e),merge:()=>({slot:"isoBmffFile",mode:"assign"})},KP={fileType:{value:"heic",description:"HEIC"},detect:t=>xh.isHeicFile(t),find:(t,e)=>xh.findHeicOffsets(t,e)},jP={header:KP,readers:[U_],brand:Xi},Eh={isAvifFile:QP,findAvifOffsets:e2},JP=["avif"];function QP(t){return R_(t,JP)}function e2(t,e){return I_(t,e)}const t2={fileType:{value:"avif",description:"AVIF"},detect:t=>Eh.isAvifFile(t),find:(t,e)=>Eh.findAvifOffsets(t,e)},n2={header:t2,readers:[U_],brand:Xi},Sh={isJxlFile:a2,findJxlOffsets:l2},lc=[0,0,0,12,74,88,76,32,13,10,135,10],uc=[255,10],Mh=1165519206,Th=2020437024,i2=1651666786,r2=1786276963,s2=1786276976,yh=4,bh=4,o2=4;function a2(t){try{return c2(t)||B_(t)}catch{return!1}}function c2(t){if(!t||t.byteLength<lc.length)return!1;for(let e=0;e<lc.length;e++)if(t.getUint8(e)!==lc[e])return!1;return!0}function B_(t){return!t||t.byteLength<uc.length?!1:t.getUint8(0)===uc[0]&&t.getUint8(1)===uc[1]}function l2(t,e){const n=[];let i=0,r,s,o,a,c;if(B_(t))return[{kind:"jxlFile",codestreamOffset:0}];for(;i+Ku<=t.byteLength;){const{length:l,contentOffset:u}=C_(t,i);if(l<u-i)break;const f=Math.min(i+l,t.byteLength),d=t.getUint32(i+w_);let p;if(d===Mh&&(u+o2<=f?(r=r||{kind:"exif"},r.tiffHeaderOffset=Go(t,u),p=r):p={kind:"exif"}),d===Th&&(o=o||{kind:"xmp"},o.chunks=[{dataOffset:u,length:l-(u-i)}],p=o),d===r2&&c===void 0&&(c={kind:"jxlFile",codestreamOffset:u}),d===s2&&c===void 0&&u+yh<=f&&(t.getUint32(u)&2147483647)===0&&(c={kind:"jxlFile",codestreamOffset:u+yh}),d===i2&&u+bh<=f){const _=t.getUint32(u),E=u+bh,m=l-(E-i);_===Mh&&(p={kind:"exif",compression:"brotli",dataOffset:E,length:m},s=s||p),_===Th&&(p={kind:"xmp",compression:"brotli",dataOffset:E,length:m},a=a||p)}bi(e,p,i,i+l),i+=l}return fc(n,r||s),fc(n,o||a),fc(n,c),n}function fc(t,e){e!==void 0&&t.push(e)}const u2={read:h2},f2=2,d2=[9,13,18,30],Ah=[0,1,12/10,4/3,3/2,16/9,5/4,2];function h2(t,e){const n={};try{const i=m2(t,e+f2),{height:r,width:s}=p2(i);n["Image Height"]={value:r,description:`${r}px`},n["Image Width"]={value:s,description:`${s}px`}}catch{}return n}function p2(t){const e=t.readBits(1);let n,i;if(e){n=(t.readBits(5)+1)*8;const r=t.readBits(3);i=r===0?(t.readBits(5)+1)*8:Math.ceil(n*Ah[r])}else{n=wh(t);const r=t.readBits(3);i=r===0?wh(t):Math.ceil(n*Ah[r])}return{height:n,width:i}}function wh(t){const e=t.readBits(2);return 1+t.readBits(d2[e])}function m2(t,e){let n=e,i=0;return{readBits(r){let s=0;for(let o=0;o<r;o++){if(n>=t.byteLength)throw new Error("Unexpected end of data");const a=t.getUint8(n)>>i&1;s|=a<<o,i++,i>=8&&(i=0,n++)}return s}}}const g2={fileType:{value:"jxl",description:"JPEG XL"},detect:t=>Sh.isJxlFile(t),find:(t,e)=>Sh.findJxlOffsets(t,e),decompression:y_},_2={key:"file",consumes:["jxlFile"],emits:[],read:(t,e)=>Ot("file",u2.read(e.dataView,t.codestreamOffset),e),merge:()=>({slot:"jxlFile",mode:"assign"})},x2={header:g2,readers:[_2],brand:Xi},Rh={isWebpFile:v2,findOffsets:E2};function v2(t){const n="RIFF",r="WEBP";return!!t&&Oe(t,0,n.length)===n&&Oe(t,8,r.length)===r}function E2(t,e){const r="Exif\0\0",o=[];let a=12,c,l,u,f;for(;a+8<t.byteLength;){const d=Oe(t,a,4),p=t.getUint32(a+4,!0);let _;d==="EXIF"?(c=c||Mt(o,{kind:"exif"}),Oe(t,a+8,r.length)===r?c.tiffHeaderOffset=a+8+r.length:c.tiffHeaderOffset=a+8,_=c):d==="XMP "?(l=l||Mt(o,{kind:"xmp"}),l.chunks=[{dataOffset:a+8,length:p}],_=l):d==="ICCP"?(u=u||Mt(o,{kind:"icc"}),u.chunks=[{offset:a+8,length:p,chunkNumber:1,chunksTotal:1}],_=u):d==="VP8X"&&(f=f||Mt(o,{kind:"riff"}),f.dataOffset=a+8,_=f);const E=8+(p%2===0?p:p+1);bi(e,_,a,a+E),a+=E}return o}const S2={read:b2},M2=4,T2=7,y2=10;function b2(t,e){const n={};if(e+y2>t.byteLength)return n;const i=ue.getByteAt(t,e);return n.Alpha=A2(i),n.Animation=w2(i),n.ImageWidth=Ch(t,e+M2),n.ImageHeight=Ch(t,e+T2),n}function A2(t){const e=t&16;return{value:e?1:0,description:e?"Yes":"No"}}function w2(t){const e=t&2;return{value:e?1:0,description:e?"Yes":"No"}}function Ch(t,e){const n=ue.getByteAt(t,e)+256*ue.getByteAt(t,e+1)+65536*ue.getByteAt(t,e+2)+1;return{value:n,description:n+"px"}}const R2={fileType:{value:"webp",description:"WebP"},detect:t=>Rh.isWebpFile(t),find:(t,e)=>Rh.findOffsets(t,e)},C2={key:"riff",consumes:["riff"],emits:[],read:(t,e)=>Ot("riff",S2.read(e.dataView,t.dataOffset),e),merge:()=>({slot:"riff",mode:"merge"})},I2={header:R2,readers:[C2],brand:Xi},Ih={isGifFile:N2,findOffsets:F2},P2=6,L2=["GIF87a","GIF89a"],D2=13;function N2(t){return!!t&&L2.includes(Oe(t,0,P2))}function F2(t,e){const n={kind:"gif",dataOffset:0};return bi(e,n,0,D2),[n]}const O2={read:U2},Ph=t=>`${t} ${t===1?"bit":"bits"}`,dc=[{name:"GIF Version",offset:3,size:3,getValue:(t,e)=>Oe(t,e,3),description:t=>t},{name:"Image Width",offset:6,size:2,getValue:(t,e)=>t.getUint16(e,!0),description:t=>`${t}px`},{name:"Image Height",offset:8,size:2,getValue:(t,e)=>t.getUint16(e,!0),description:t=>`${t}px`},{name:"Global Color Map",offset:10,size:1,getValue:(t,e)=>(t.getUint8(e)&128)>>>7,description:t=>t===1?"Yes":"No"},{name:"Bits Per Pixel",offset:10,size:1,getValue:(t,e)=>(t.getUint8(e)&7)+1,description:Ph},{name:"Color Resolution Depth",offset:10,size:1,getValue:(t,e)=>((t.getUint8(e)&112)>>>4)+1,description:Ph}];function U2(t){const e={};for(let n=0;n<dc.length;n++)e[dc[n].name]=B2(t,dc[n]);return e}function B2(t,e){if(e.offset+e.size>t.byteLength)return;const n=e.getValue(t,e.offset);return{value:n,description:e.description(n)}}const k2={fileType:{value:"gif",description:"GIF"},detect:t=>Ih.isGifFile(t),find:(t,e)=>Ih.findOffsets(t,e)},z2={key:"gif",consumes:["gif"],emits:[],read:(t,e)=>Ot("gif",O2.read(e.dataView,t.dataOffset),e),merge:()=>({slot:"gif",mode:"merge"})},H2={header:k2,readers:[z2],brand:Xi},Lh={isXMLFile:G2,findOffsets:V2},k_=0,Dh="<?xpacket begin",Nh=["<?xpacket end=","</x:xmpmeta>"];function G2(t){return!!t&&Oe(t,k_,Dh.length)===Dh}function V2(t,e){const n={kind:"xmp",chunks:[{dataOffset:k_,length:t.byteLength}]};return bi(e,n,0,t.byteLength),e&&(e.truncated=!W2(t)),[n]}function W2(t){for(let e=0;e<Nh.length;e++)if(X2(t,Nh[e]))return!0;return!1}function X2(t,e){for(let n=0;n+e.length<=t.byteLength;n++)if(Y2(t,n,e))return!0;return!1}function Y2(t,e,n){for(let i=0;i<n.length;i++)if(t.getUint8(e+i)!==n.charCodeAt(i))return!1;return!0}const Z2={fileType:{value:"xml",description:"XML"},detect:t=>Lh.isXMLFile(t),find:(t,e)=>Lh.findOffsets(t,e)},q2={header:Z2,readers:[],brand:Xi},st={ApertureValue:z_,ColorSpace:H_,ComponentsConfiguration:G_,Contrast:V_,CustomRendered:W_,ExposureMode:X_,ExposureProgram:Y_,ExposureTime:Z_,FNumber:q_,FocalLength:$_,FocalPlaneResolutionUnit:K_,LightSource:K2,MeteringMode:j_,ResolutionUnit:J_,Saturation:Q_,FocalLengthIn35mmFilm:ex,SceneCaptureType:tx,Sharpness:nx,ShutterSpeedValue:ix,WhiteBalance:rx,XResolution:sx,YResolution:ox};function z_(t){return Math.pow(Math.sqrt(2),t[0]/t[1]).toFixed(2)}function H_(t){return t===1?"sRGB":t===65535?"Uncalibrated":"Unknown"}function G_(t){return Fu(t,$2,"")}function $2(t){if(t===1)return"Y";if(t===2)return"Cb";if(t===3)return"Cr";if(t===4)return"R";if(t===5)return"G";if(t===6)return"B"}function V_(t){return t===0?"Normal":t===1?"Soft":t===2?"Hard":"Unknown"}function W_(t){return t===0?"Normal process":t===1?"Custom process":"Unknown"}function X_(t){return t===0?"Auto exposure":t===1?"Manual exposure":t===2?"Auto bracket":"Unknown"}function Y_(t){return t===0?"Undefined":t===1?"Manual":t===2?"Normal program":t===3?"Aperture priority":t===4?"Shutter priority":t===5?"Creative program":t===6?"Action program":t===7?"Portrait mode":t===8?"Landscape mode":t===9?"Bulb":"Unknown"}function Z_(t){if(t[0]/t[1]>.25){const e=t[0]/t[1];return Number.isInteger(e)?""+e:e.toFixed(1)}return t[0]!==0?`1/${Math.round(t[1]/t[0])}`:`0/${t[1]}`}function q_(t){return`f/${Number(t[0]/t[1]).toFixed(1)}`}function $_(t){return t[0]/t[1]+" mm"}function K_(t){return t===2?"inches":t===3?"centimeters":t===4?"millimeters":"Unknown"}function K2(t){return t===1?"Daylight":t===2?"Fluorescent":t===3?"Tungsten (incandescent light)":t===4?"Flash":t===9?"Fine weather":t===10?"Cloudy weather":t===11?"Shade":t===12?"Daylight fluorescent (D 5700 – 7100K)":t===13?"Day white fluorescent (N 4600 – 5400K)":t===14?"Cool white fluorescent (W 3900 – 4500K)":t===15?"White fluorescent (WW 3200 – 3700K)":t===17?"Standard light A":t===18?"Standard light B":t===19?"Standard light C":t===20?"D55":t===21?"D65":t===22?"D75":t===23?"D50":t===24?"ISO studio tungsten":t===255?"Other light source":"Unknown"}function j_(t){return t===1?"Average":t===2?"CenterWeightedAverage":t===3?"Spot":t===4?"MultiSpot":t===5?"Pattern":t===6?"Partial":t===255?"Other":"Unknown"}function J_(t){return t===2?"inches":t===3?"centimeters":"Unknown"}function Q_(t){return t===0?"Normal":t===1?"Low saturation":t===2?"High saturation":"Unknown"}function ex(t){return t===0?"Unknown":t+" mm"}function tx(t){return t===0?"Standard":t===1?"Landscape":t===2?"Portrait":t===3?"Night scene":"Unknown"}function nx(t){return t===0?"Normal":t===1?"Soft":t===2?"Hard":"Unknown"}function ix(t){const e=Math.pow(2,t[0]/t[1]);return e<=1?`${Math.round(1/e)}`:`1/${Math.round(e)}`}function rx(t){return t===0?"Auto white balance":t===1?"Manual white balance":"Unknown"}function sx(t){return""+Math.round(t[0]/t[1])}function ox(t){return""+Math.round(t[0]/t[1])}function ql(t){if(Qu(t))return ef(t)||"Undefined";if(t.length>=8){const e=dt(t.slice(0,8));if(e==="ASCII\0\0\0")return sn(t,8);if(e==="JIS\0\0\0\0\0")return"[JIS encoded text]";if(e==="UNICODE\0")return"[Unicode encoded text]";if(e==="\0\0\0\0\0\0\0\0"){const n=sn(t,8);return/[\x20-\x7e]/.test(n)?n:"[Undefined encoding]"}}return"Undefined"}function Vo(t){return Array.isArray(t)?Qu(t)?ef(t):sn(t):String(t)}function Qu(t){return Array.isArray(t)&&typeof t[0]!="number"}function ef(t){return t.filter(j2).join(", ")}function j2(t){return typeof t=="string"}function Ut(t,e){const n=String(e);return Object.prototype.hasOwnProperty.call(t,n)?t[n]:"Unknown"}function uo(t){return J2(t)?$l(t):NaN}function J2(t){return Array.isArray(t)&&hc(t[0])&&hc(t[1])&&hc(t[2])}function hc(t){return Array.isArray(t)&&t.length===2&&typeof t[0]=="number"&&typeof t[1]=="number"}function $l(t){return t[0][0]/t[0][1]+t[1][0]/t[1][1]/60+t[2][0]/t[2][1]/3600}function Q2(t){return Ut({0:"Full-resolution image",1:"Reduced-resolution image",2:"Single page of multi-page image",3:"Single page of multi-page reduced-resolution image",4:"Transparency mask",5:"Transparency mask of reduced-resolution image",6:"Transparency mask of multi-page image",7:"Transparency mask of reduced-resolution multi-page image",65537:"Alternate reduced-resolution image",4294967295:"Invalid"},t)}function eL(t){return Ut({0:"Full-resolution image",1:"Reduced-resolution image",2:"Single page of multi-page image"},t)}function tL(t){return Ut({1:"No dithering or halftoning",2:"Ordered dither or halfton",3:"Randomized dither"},t)}function nL(t){return Ut({1:"Normal",2:"Reversed"},t)}function iL(t){return t===1?"top-left":t===2?"top-right":t===3?"bottom-right":t===4?"bottom-left":t===5?"left-top":t===6?"right-top":t===7?"right-bottom":t===8?"left-bottom":"Undefined"}function rL(t){return""+Math.round(t[0]/t[1])}function sL(t){return""+Math.round(t[0]/t[1])}function oL(t){return Ut({1:"0.1",2:"0.001",3:"0.0001",4:"1e-05",5:"1e-06"},t)}function aL(t){return Fu(t,ax,", ")}function cL(t){return Fu(t,ax,", ")}function lL(t){return Ut({1:"CMYK",2:"Not CMYK"},t)}function uL(t){return Ut({0:"Unspecified",1:"Associated Alpha",2:"Unassociated Alpha"},t)}function fL(t){return Array.isArray(t)?t.map(Fh).join(", "):Fh(t)}function dL(t){return t.map(e=>""+e[0]/e[1]).join("/")}function hL(t){return t===1?"centered":t===2?"co-sited":"undefined "+t}function pL(t){return t.map(e=>""+e[0]/e[1]).join(", ")}function mL(t){return t.join("; ")}function gL(t){return Ut({0:"Unsafe",1:"Safe"},t)}function _L(t){return Ut({0:"Allow Copying",1:"Embed if Used",2:"Never Embed",3:"No Restrictions"},t)}function xL(t){return Ut({1:"Gray Gamma 2.2",2:"sRGB",3:"Adobe RGB",4:"ProPhoto RGB"},t)}function vL(t){return Ut({0:"Linear",1:"sRGB"},t)}function EL(t){return Ut({0:"Linear",1:"sRGB"},t)}function SL(t){return Ut({0:"Auto",1:"None"},t)}function ax(t){if(!Array.isArray(t))throw new TypeError("Expected a rational.");return`${t[0]}/${t[1]}`}function Fh(t){return Ut({1:"Unsigned",2:"Signed",3:"Float",4:"Undefined",5:"Complex int",6:"Complex float"},t)}function qr(t){if(!Array.isArray(t))return"";if(Qu(t))return ef(t);const e=new TextDecoder("utf-16").decode(new Uint8Array(t));return ML(e)}function ML(t){let e=t.length;for(;e>0&&t.charCodeAt(e-1)===0;)e--;return t.slice(0,e)}const cx={11:"ProcessingSoftware",254:{name:"SubfileType",description:Q2},255:{name:"OldSubfileType",description:eL},256:"ImageWidth",257:"ImageLength",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",263:{name:"Thresholding",description:tL},264:"CellWidth",265:"CellLength",266:{name:"FillOrder",description:nL},269:"DocumentName",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:{name:"Orientation",description:iL},277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",280:"MinSampleValue",281:"MaxSampleValue",282:{name:"XResolution",description:st.XResolution},283:{name:"YResolution",description:st.YResolution},284:"PlanarConfiguration",285:"PageName",286:{name:"XPosition",description:rL},287:{name:"YPosition",description:sL},290:{name:"GrayResponseUnit",description:oL},296:{name:"ResolutionUnit",description:st.ResolutionUnit},297:"PageNumber",301:"TransferFunction",305:"Software",306:"DateTime",315:"Artist",316:"HostComputer",317:"Predictor",318:{name:"WhitePoint",description:aL},319:{name:"PrimaryChromaticities",description:cL},321:"HalftoneHints",322:"TileWidth",323:"TileLength",330:"A100DataOffset",332:{name:"InkSet",description:lL},337:"TargetPrinter",338:{name:"ExtraSamples",description:uL},339:{name:"SampleFormat",description:fL},513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",529:{name:"YCbCrCoefficients",description:dL},530:"YCbCrSubSampling",531:{name:"YCbCrPositioning",description:hL},532:{name:"ReferenceBlackWhite",description:pL},700:"ApplicationNotes",18246:"Rating",18249:"RatingPercent",33432:{name:"Copyright",description:mL},33550:"PixelScale",33723:"IPTC-NAA",33920:"IntergraphMatrix",33922:"ModelTiePoint",34118:"SEMInfo",34264:"ModelTransform",34377:"PhotoshopSettings",34665:"Exif IFD Pointer",34675:"ICC_Profile",34735:"GeoTiffDirectory",34736:"GeoTiffDoubleParams",34737:"GeoTiffAsciiParams",34853:"GPS Info IFD Pointer",40091:{name:"XPTitle",description:qr},40092:{name:"XPComment",description:qr},40093:{name:"XPAuthor",description:qr},40094:{name:"XPKeywords",description:qr},40095:{name:"XPSubject",description:qr},42112:"GDALMetadata",42113:"GDALNoData",50341:"PrintIM",50707:"DNGBackwardVersion",50708:"UniqueCameraModel",50709:"LocalizedCameraModel",50721:"ColorMatrix1",50722:"ColorMatrix2",50723:"CameraCalibration1",50724:"CameraCalibration2",50725:"ReductionMatrix1",50726:"ReductionMatrix2",50727:"AnalogBalance",50728:"AsShotNeutral",50729:"AsShotWhiteXY",50730:"BaselineExposure",50731:"BaselineNoise",50732:"BaselineSharpness",50734:"LinearResponseLimit",50735:"CameraSerialNumber",50736:"DNGLensInfo",50739:"ShadowScale",50741:{name:"MakerNoteSafety",description:gL},50778:{name:"CalibrationIlluminant1",description:st.LightSource},50779:{name:"CalibrationIlluminant2",description:st.LightSource},50781:"RawDataUniqueID",50827:"OriginalRawFileName",50828:"OriginalRawFileData",50831:"AsShotICCProfile",50832:"AsShotPreProfileMatrix",50833:"CurrentICCProfile",50834:"CurrentPreProfileMatrix",50879:"ColorimetricReference",50885:"SRawType",50898:"PanasonicTitle",50899:"PanasonicTitle2",50931:"CameraCalibrationSig",50932:"ProfileCalibrationSig",50933:"ProfileIFD",50934:"AsShotProfileName",50936:"ProfileName",50937:"ProfileHueSatMapDims",50938:"ProfileHueSatMapData1",50939:"ProfileHueSatMapData2",50940:"ProfileToneCurve",50941:{name:"ProfileEmbedPolicy",description:_L},50942:"ProfileCopyright",50964:"ForwardMatrix1",50965:"ForwardMatrix2",50966:"PreviewApplicationName",50967:"PreviewApplicationVersion",50968:"PreviewSettingsName",50969:"PreviewSettingsDigest",50970:{name:"PreviewColorSpace",description:xL},50971:"PreviewDateTime",50972:"RawImageDigest",50973:"OriginalRawFileDigest",50981:"ProfileLookTableDims",50982:"ProfileLookTableData",51043:"TimeCodes",51044:"FrameRate",51058:"TStop",51081:"ReelName",51089:"OriginalDefaultFinalSize",51090:"OriginalBestQualitySize",51091:"OriginalDefaultCropSize",51105:"CameraLabel",51107:{name:"ProfileHueSatMapEncoding",description:vL},51108:{name:"ProfileLookTableEncoding",description:EL},51109:"BaselineExposureOffset",51110:{name:"DefaultBlackRender",description:SL},51111:"NewRawImageDigest",51112:"RawToPreviewGain"};function TL(){return"[Raw OECF table data]"}function yL(t){return Ut({1:"Standard Output Sensitivity",2:"Recommended Exposure Index",3:"ISO Speed",4:"Standard Output Sensitivity and Recommended Exposure Index",5:"Standard Output Sensitivity and ISO Speed",6:"Recommended Exposure Index and ISO Speed",7:"Standard Output Sensitivity, Recommended Exposure Index and ISO Speed"},t)}function bL(t){return Math.pow(Math.sqrt(2),t[0]/t[1]).toFixed(2)}function AL(t){return t[0]/t[1]+" m"}function wL(t){return t===0?"Flash did not fire":t===1?"Flash fired":t===5?"Strobe return light not detected":t===7?"Strobe return light detected":t===9?"Flash fired, compulsory flash mode":t===13?"Flash fired, compulsory flash mode, return light not detected":t===15?"Flash fired, compulsory flash mode, return light detected":t===16?"Flash did not fire, compulsory flash mode":t===24?"Flash did not fire, auto mode":t===25?"Flash fired, auto mode":t===29?"Flash fired, auto mode, return light not detected":t===31?"Flash fired, auto mode, return light detected":t===32?"No flash function":t===65?"Flash fired, red-eye reduction mode":t===69?"Flash fired, red-eye reduction mode, return light not detected":t===71?"Flash fired, red-eye reduction mode, return light detected":t===73?"Flash fired, compulsory flash mode, red-eye reduction mode":t===77?"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected":t===79?"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected":t===89?"Flash fired, auto mode, red-eye reduction mode":t===93?"Flash fired, auto mode, return light not detected, red-eye reduction mode":t===95?"Flash fired, auto mode, return light detected, red-eye reduction mode":"Unknown"}function RL(t){return Ut({C:"Confidential",R:"Restricted",S:"Secret",T:"Top Secret",U:"Unclassified"},t)}function CL(t){return t.length===2?`Location; X: ${t[0]}, Y: ${t[1]}`:t.length===3?`Circle; X: ${t[0]}, Y: ${t[1]}, diameter: ${t[2]}`:t.length===4?`Rectangle; X: ${t[0]}, Y: ${t[1]}, width: ${t[2]}, height: ${t[3]}`:"Unknown"}function IL(){return"[Raw maker note data]"}function PL(t){return t[0]/t[1]+" °C"}function LL(t){return t[0]/t[1]+" %"}function DL(t){return t[0]/t[1]+" hPa"}function NL(t){return t[0]/t[1]+" m"}function FL(t){return t[0]/t[1]+" mGal"}function OL(t){return t[0]/t[1]+" °"}function UL(){return"[Raw SFR table data]"}function BL([t,e]){return`X: ${t}, Y: ${e}`}function kL(t){return t===1?"Undefined":t===2?"One-chip color area sensor":t===3?"Two-chip color area sensor":t===4?"Three-chip color area sensor":t===5?"Color sequential area sensor":t===7?"Trilinear sensor":t===8?"Color sequential linear sensor":"Unknown"}function zL(t){return t===3?"DSC":"Unknown"}function HL(t){return t===1?"A directly photographed image":"Unknown"}function GL(){return"[Raw CFA pattern table data]"}function VL(t){return t[0]===0?"Digital zoom was not used":""+t[0]/t[1]}function WL(t){return t===0?"None":t===1?"Low gain up":t===2?"High gain up":t===3?"Low gain down":t===4?"High gain down":"Unknown"}function XL(){return"[Raw device settings table data]"}function YL(t){return t===1?"Macro":t===2?"Close view":t===3?"Distant view":"Unknown"}function ZL(t){return`${$L(t[0],t[1])} mm f/${KL(t[2],t[3])}`}function qL(t){return Ut({1:"Not a Composite Image",2:"General Composite Image",3:"Composite Image Captured While Shooting"},t)}function $L(t,e){const n=Kl(t),i=Kl(e);return i===0||i===n?`${n}`:`${n}-${i}`}function KL(t,e){const n=[t,e].filter(jL).map(Kl);return n.length===0?"?":n.length===1||n[1]===0||n[1]===n[0]?`${n[0]}`:`${n[0]}-${n[1]}`}function Kl(t){return parseFloat((t[0]/t[1]).toFixed(5))}function jL(t){return t[1]!==0}const JL={33434:{name:"ExposureTime",description:st.ExposureTime},33437:{name:"FNumber",description:st.FNumber},34850:{name:"ExposureProgram",description:st.ExposureProgram},34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:{name:"OECF",description:TL},34858:"TimeZoneOffset",34859:"SelfTimerMode",34864:{name:"SensitivityType",description:yL},34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",36864:{name:"ExifVersion",description:Vo},36867:"DateTimeOriginal",36868:"DateTimeDigitized",36873:"GooglePlusUploadCode",36880:"OffsetTime",36881:"OffsetTimeOriginal",36882:"OffsetTimeDigitized",37121:{name:"ComponentsConfiguration",description:st.ComponentsConfiguration},37122:"CompressedBitsPerPixel",37377:{name:"ShutterSpeedValue",description:st.ShutterSpeedValue},37378:{name:"ApertureValue",description:st.ApertureValue},37379:"BrightnessValue",37380:"ExposureBiasValue",37381:{name:"MaxApertureValue",description:bL},37382:{name:"SubjectDistance",description:AL},37383:{name:"MeteringMode",description:st.MeteringMode},37384:{name:"LightSource",description:st.LightSource},37385:{name:"Flash",description:wL},37386:{name:"FocalLength",description:st.FocalLength},37393:"ImageNumber",37394:{name:"SecurityClassification",description:RL},37395:"ImageHistory",37396:{name:"SubjectArea",description:CL},37500:{name:"MakerNote",description:IL},37510:{name:"UserComment",description:ql},37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",37724:"ImageSourceData",37888:{name:"AmbientTemperature",description:PL},37889:{name:"Humidity",description:LL},37890:{name:"Pressure",description:DL},37891:{name:"WaterDepth",description:NL},37892:{name:"Acceleration",description:FL},37893:{name:"CameraElevationAngle",description:OL},40960:{name:"FlashpixVersion",description:Vo},40961:{name:"ColorSpace",description:st.ColorSpace},40962:"PixelXDimension",40963:"PixelYDimension",40964:"RelatedSoundFile",40965:"Interoperability IFD Pointer",41483:"FlashEnergy",41484:{name:"SpatialFrequencyResponse",description:UL},41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:{name:"FocalPlaneResolutionUnit",description:st.FocalPlaneResolutionUnit},41492:{name:"SubjectLocation",description:BL},41493:"ExposureIndex",41495:{name:"SensingMethod",description:kL},41728:{name:"FileSource",description:zL},41729:{name:"SceneType",description:HL},41730:{name:"CFAPattern",description:GL},41985:{name:"CustomRendered",description:st.CustomRendered},41986:{name:"ExposureMode",description:st.ExposureMode},41987:{name:"WhiteBalance",description:st.WhiteBalance},41988:{name:"DigitalZoomRatio",description:VL},41989:{name:"FocalLengthIn35mmFilm",description:st.FocalLengthIn35mmFilm},41990:{name:"SceneCaptureType",description:st.SceneCaptureType},41991:{name:"GainControl",description:WL},41992:{name:"Contrast",description:st.Contrast},41993:{name:"Saturation",description:st.Saturation},41994:{name:"Sharpness",description:st.Sharpness},41995:{name:"DeviceSettingDescription",description:XL},41996:{name:"SubjectDistanceRange",description:YL},42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:{name:"LensSpecification",description:ZL},42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",42080:{name:"CompositeImage",description:qL},42081:"SourceImageNumberOfCompositeImage",42082:"SourceExposureTimesOfCompositeImage",42240:"Gamma",59932:"Padding",59933:"OffsetSchema",65e3:"OwnerName",65001:"SerialNumber",65002:"Lens",65100:"RawFile",65101:"Converter",65102:"WhiteBalance",65105:"Exposure",65106:"Shadows",65107:"Brightness",65108:"Contrast",65109:"Saturation",65110:"Sharpness",65111:"Smoothness",65112:"MoireFilter"};function QL(t){return t[0]===2&&t[1]===2&&t[2]===0&&t[3]===0?"Version 2.2":"Unknown"}function eD(t){const e=t.join("");return e==="N"?"North latitude":e==="S"?"South latitude":"Unknown"}function tD(t){const e=t.join("");return e==="E"?"East longitude":e==="W"?"West longitude":"Unknown"}function nD(t){return t===0?"Sea level":t===1?"Sea level reference (negative value)":"Unknown"}function iD(t){return t[0]/t[1]+" m"}function rD(t){return t.map(([e,n])=>{const i=e/n;return/^\d(\.|$)/.test(`${i}`)?`0${i}`:i}).join(":")}function sD(t){const e=t.join("");return e==="A"?"Measurement in progress":e==="V"?"Measurement Interoperability":"Unknown"}function oD(t){const e=t.join("");return e==="2"?"2-dimensional measurement":e==="3"?"3-dimensional measurement":"Unknown"}function aD(t){const e=t.join("");return e==="K"?"Kilometers per hour":e==="M"?"Miles per hour":e==="N"?"Knots":"Unknown"}function cD(t){const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}function lD(t){const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}function uD(t){const e=t.join("");return e==="N"?"North latitude":e==="S"?"South latitude":"Unknown"}function fD(t){const e=t.join("");return e==="E"?"East longitude":e==="W"?"West longitude":"Unknown"}function dD(t){const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}function hD(t){const e=t.join("");return e==="K"?"Kilometers":e==="M"?"Miles":e==="N"?"Knots":"Unknown"}function pD(t){return t===0?"Measurement without differential correction":t===1?"Differential correction applied":"Unknown"}const mD={0:{name:"GPSVersionID",description:QL},1:{name:"GPSLatitudeRef",description:eD},2:{name:"GPSLatitude",description:uo},3:{name:"GPSLongitudeRef",description:tD},4:{name:"GPSLongitude",description:uo},5:{name:"GPSAltitudeRef",description:nD},6:{name:"GPSAltitude",description:iD},7:{name:"GPSTimeStamp",description:rD},8:"GPSSatellites",9:{name:"GPSStatus",description:sD},10:{name:"GPSMeasureMode",description:oD},11:"GPSDOP",12:{name:"GPSSpeedRef",description:aD},13:"GPSSpeed",14:{name:"GPSTrackRef",description:cD},15:"GPSTrack",16:{name:"GPSImgDirectionRef",description:lD},17:"GPSImgDirection",18:"GPSMapDatum",19:{name:"GPSDestLatitudeRef",description:uD},20:{name:"GPSDestLatitude",description:uo},21:{name:"GPSDestLongitudeRef",description:fD},22:{name:"GPSDestLongitude",description:uo},23:{name:"GPSDestBearingRef",description:dD},24:"GPSDestBearing",25:{name:"GPSDestDistanceRef",description:hD},26:"GPSDestDistance",27:{name:"GPSProcessingMethod",description:ql},28:{name:"GPSAreaInformation",description:ql},29:"GPSDateStamp",30:{name:"GPSDifferential",description:pD},31:"GPSHPositioningError"},gD={1:"InteroperabilityIndex",2:{name:"InteroperabilityVersion",description:Vo},4096:"RelatedImageFileFormat",4097:"RelatedImageWidth",4098:"RelatedImageHeight"},tf="0th",jl="1st",lx="exif",ux="gps",fx="interoperability",dx="mpf",hx="canon",nf="pentax",px=4,_D=1024*1024,xD=4,Oh=2,mx=48,vD=1024,Zi=5,ED=8192,SD={1:ue.getByteAt,3:ue.getShortAt,4:ue.getLongAt,5:ue.getRationalAt,6:ue.getSbyteAt,7:ue.getUndefinedAt,8:ue.getSshortAt,9:ue.getSlongAt,10:ue.getSrationalAt,11:ue.getFloatAt,12:ue.getDoubleAt,13:ue.getIfdPointerAt};function gx(t,e,n){const i=e+n_;if(i+ue.getTypeSize("LONG")>t.byteLength)return;const r=ue.getLongAt(t,i,n);if(!(r<pa))return e+r}function Ur(t,e,n,i,r,s,o=!1,a=Ds,c="exif",l=ys(t),u,f=u[jl]!==void 0&&a.shouldParseGroup("thumbnail"),d=void 0){const p=ue.getTypeSize("SHORT"),_=Yu,E={},m=bD(t,i,r);let h=!1;i+=p;for(let M=0;M<m;M++){if(i+_>t.byteLength){h=!0;break}if(!MD(l)){h=!0;break}const A=AD(t,e,n,i,r,s,a,c,l,u);A!==void 0&&(E[A.name]={id:A.id,value:A.value,description:A.description},o&&(E[A.name].computed=FD(A.tagType,A.value)),e===nf&&A.name==="LevelInfo"&&(E[A.name].__offset=A.__offset),d!==void 0&&A.name==="MakerNote"&&(d.MakerNote=A.__offset)),i+=_}if(f&&!h&&i+ue.getTypeSize("LONG")<=t.byteLength){const M=ue.getLongAt(t,i,r);M>=pa&&e===tf&&(E.Thumbnail=Ur(t,jl,n,n+M,r,s,o,a,"thumbnail",l,u))}return E}function MD(t){return t.ifdEntriesRemaining>0?(t.ifdEntriesRemaining--,!0):!1}function ys(t){return{remaining:t.byteLength*px,ifdEntriesRemaining:Math.floor(t.byteLength/Yu)*xD,decompressedAllowanceRemaining:_D,iptcDatasetsRemaining:vD+Math.floor(t.byteLength/mx),decompressedIptcAllowanceRemaining:ED}}function TD(t,e){if(t===void 0)return;const n=Math.min(e*px,t.decompressedAllowanceRemaining);t.remaining+=n,t.decompressedAllowanceRemaining-=n}function yD(t,e){if(t===void 0)return;const n=Math.min(Math.floor(e/Zi),t.decompressedIptcAllowanceRemaining);t.iptcDatasetsRemaining+=n,t.decompressedIptcAllowanceRemaining-=n}function bD(t,e,n){return e+ue.getTypeSize("SHORT")<=t.byteLength?ue.getShortAt(t,e,n):0}function AD(t,e,n,i,r,s=!1,o=Ds,a="exif",c,l){const f=ue.getTypeSize("SHORT"),d=f+ue.getTypeSize("SHORT"),p=d+ue.getTypeSize("LONG"),_=ue.getShortAt(t,i,r),E=ue.getShortAt(t,i+f,r),m=ue.getLongAt(t,i+d,r);let h,M,A;if(ue.typeSizes[E]===void 0||!s&&l[e][_]===void 0)return;const S=wD(e,_,l);if(!o.shouldParseTag(a,S,_))return;if(RD(E,m))M=i+p-n,h=Uh(t,n+M,E,m,r);else if(M=ue.getLongAt(t,i+p,r),ID(t,n,M,E,m)){const y=_===33723,R=PD(c.remaining,E,m);c.remaining-=R*ue.typeSizes[E],A=c,h=Uh(t,n+M,E,R,r,y)}else h="<faulty value>";rf(E)&&(h=LD(h,A));let w=_x(h);if(l[e][_]!==void 0)if(l[e][_].name!==void 0&&l[e][_].description!==void 0)try{w=l[e][_].description(h)}catch{w=Bh(h)}else E===ue.tagTypes.RATIONAL||E===ue.tagTypes.SRATIONAL?w=""+h[0]/h[1]:w=Bh(h);return{id:_,name:S,value:h,description:w,tagType:E,__offset:M}}function wD(t,e,n){if(n[t][e]!==void 0){if(typeof n[t][e]=="string")return n[t][e];if(n[t][e].name)return n[t][e].name}return`undefined-${e}`}function RD(t,e){return ue.typeSizes[t]*e<=ue.getTypeSize("LONG")}function Uh(t,e,n,i,r,s=!1){const o=[];if(s&&(i=i*ue.typeSizes[n],n=ue.tagTypes.BYTE),rf(n))return CD(t,e,i);for(let a=0;a<i;a++)o.push(SD[n](t,e,r)),e+=ue.typeSizes[n];return o.length===1?o[0]:o}function CD(t,e,n){const i=new Uint8Array(n);for(let r=0;r<n;r++)i[r]=ue.getAsciiAt(t,e+r);return i}function ID(t,e,n,i,r){return e+n+ue.typeSizes[i]*r<=t.byteLength}function PD(t,e,n){const i=Math.min(n,Math.floor(t/ue.typeSizes[e]));return i===1&&n>1?0:i}function rf(t){return t===ue.tagTypes.ASCII||t===ue.tagTypes.UTF8}function LD(t,e){return t instanceof Uint8Array?DD(t,e):typeof t=="string"?[t]:t.length>0?[aa(t.join(""))]:[]}function DD(t,e){const n=[],i=[];let r=!1,s=0,o=0;for(let a=0;a<=t.length;a++)if(a===t.length||t[a]===0){if(a>o){if(r&&!ND(e))break;n[s]=aa(sn(t,o,a,i)),r=!0}s++,o=a+1}return n}function ND(t){return t===void 0?!0:t.remaining<Oh?!1:(t.remaining-=Oh,!0)}function Bh(t){return t instanceof Array?t.join(", "):_x(t)}function _x(t){return typeof t=="number"?String(t):t}function FD(t,e){return rf(t)?Array.isArray(e)&&e.length===1?e[0]:e:t===ue.tagTypes.RATIONAL||t===ue.tagTypes.SRATIONAL?OD(e)?kh(e):Array.isArray(e)?e.map(n=>kh(n)):e:e}function OD(t){return!Array.isArray(t)||t.length!==2?!1:typeof t[0]=="number"&&typeof t[1]=="number"}function kh(t){if(!Array.isArray(t)||t.length!==2)return t;const e=t[0],n=t[1];return!Number.isFinite(e)||!Number.isFinite(n)?t:n===0?null:e/n}const zh=[{pointerKey:"Exif IFD Pointer",ifdType:lx},{pointerKey:"GPS Info IFD Pointer",ifdType:ux},{pointerKey:"Interoperability IFD Pointer",ifdType:fx}],UD={read:BD};function BD(t,e,n,i=!1,r=void 0,s=ys(t),o=void 0,a=void 0){const c=Xt.getByteOrder(t,e),l={};let u=kD(t,e,c,n,i,r,s,o,a,l);for(let f=0;f<zh.length;f++)u=zD(zh[f],u,t,e,c,n,i,r,s,o,l);return{tags:u,byteOrder:c,makerNoteOffset:l.MakerNote}}function kD(t,e,n,i,r,s,o,a,c,l){const u=gx(t,e,n);return u===void 0?{}:Ur(t,tf,e,u,n,i,r,s,"exif",o,a,c,l)}function zD(t,e,n,i,r,s,o,a,c,l,u){const f=e[t.pointerKey];return f===void 0||!HD(f.value)?e:Ft(e,Ur(n,t.ifdType,i,i+f.value,r,s,o,a,"exif",c,l,void 0,u))}function HD(t){return typeof t=="number"&&t>=pa&&t%1===0}function Lr(t,e){if(t.valueBudget===void 0){const n=e||t.dataView;n!==void 0&&(t.valueBudget=ys(n))}return t.valueBudget}const Jl=["iptc","xmp","photoshop","icc","makerNote","thumbnail"];function GD(t,e,n){if(t.compression!==void 0)return e.composed.formats.jxl?e.decompress(H0(e.dataView,t),zu(t.compression),void 0,"dataview").then(i=>Hh(i,Go(i,0),e,{carried:"brob",decompressed:!0},n)):void 0;if(t.tiffHeaderOffset!==void 0)return Hh(Wu(t,e),t.tiffHeaderOffset,e,{carried:t.origin||"main",decompressed:t.decompressed===!0},n)}function Hh(t,e,n,{carried:i,decompressed:r},s){const o=i==="main",a=o?Lr(n,t):Lr(n);r&&TD(a,t.byteLength);const c=o?VD:xx,{tags:l,byteOrder:u,makerNoteOffset:f}=c(t,e,n,a,s),d=l.Thumbnail;delete l.Thumbnail;const p=da("exif",l,n.tagFilter),_=XD(n.composed.fromExif,p,{view:t,tiffHeaderOffset:e,byteOrder:u,makerNoteOffset:f,thumbnailIfdTags:d,carried:i,decompressed:r});return i==="brob"&&Object.keys(p).length===0?{tags:void 0,blocks:_}:{tags:p,blocks:_}}function VD(t,e,n,i,r){try{return xx(t,e,n,i,r)}catch{return{tags:{},byteOrder:Xt.BIG_ENDIAN,makerNoteOffset:void 0}}}function xx(t,e,n,i,r){return UD.read(t,e,n.options.includeUnknown,n.options.computed,n.tagFilter,i,r,WD(n))}function WD(t){return t.composed.groups.thumbnail===!0&&t.tagFilter.shouldParseGroup("thumbnail")}function XD(t,e,n){const i=[];for(let r=0;r<Jl.length;r++){const s=t[Jl[r]],o=s&&s(e,n);o&&i.push(o)}return i}function YD(t){return t.compression!==void 0?{slot:"exif",mode:"merge",outerSlot:"brobExif"}:{slot:"exif",mode:t.origin!==void 0?"merge":"assign"}}let pc;const ZD={key:"exif",consumes:["exif"],emits:Jl,read:(t,e)=>GD(t,e,qD(e)),merge:YD,brand:kn};function qD(t){const e={};return e[tf]=Gh(),e[lx]=Gh(),e[ux]=mD,e[fx]=gD,t.composed.groups.thumbnail&&(e[jl]=cx),e}function Gh(){return pc===void 0&&(pc=Ft({},cx,JL)),pc}function $D(t){return((t[0]<<8)+t[1]).toString()}function KD(t){return((t[0]<<8)+t[1]).toString()}function jD(t){return((t[0]<<8)+t[1]).toString()}function JD(t){return((t[0]<<8)+t[1]).toString()}function QD(t){return((t[0]<<8)+t[1]).toString()}function e3(t){return((t[0]<<8)+t[1]).toString()}function t3(t){return dt(t)==="01"?"Additional Language":"Unknown"}function n3(t){const e=dt(t).split(":");return e[2]+(e[3]?"/"+e[3]:"")+(e[4]?"/"+e[4]:"")}function i3(t){const e=dt(t);return e==="01"?"Object Kill":e==="02"?"Object Replace":e==="03"?"Object Append":e==="04"?"Object Reference":"Unknown"}function r3(t){const e=dt(t);return e==="a"?"morning":e==="p"?"evening":e==="b"?"both":"Unknown"}function s3(t){return t}function o3(t){const e=dt(t);return e==="P"?"Portrait":e==="L"?"Landscape":e==="S"?"Square":"Unknown"}function a3(t){const e=dt(t),n=e.charAt(0),i=e.charAt(1);let r="";return n==="1"?r+="Mono":n==="2"&&(r+="Stereo"),i==="A"?r+=", actuality":i==="C"?r+=", question and answer session":i==="M"?r+=", music, transmitted by itself":i==="Q"?r+=", response to a question":i==="R"?r+=", raw sound":i==="S"?r+=", scener":i==="V"?r+=", voicer":i==="W"&&(r+=", wrap"),r!==""?r:e}function c3(t){return parseInt(dt(t),10)+" Hz"}function l3(t){const e=parseInt(dt(t),10);return e+(e===1?" bit":" bits")}function u3(t){const e=dt(t);return e.length>=6?e.substr(0,2)+":"+e.substr(2,2)+":"+e.substr(4,2):e}function f3(t){if(t.length===2){const e=Ql(t);return e===0?"No ObjectData":e===1?"IPTC-NAA Digital Newsphoto Parameter Record":e===2?"IPTC7901 Recommended Message Format":e===3?"Tagged Image File Format (Adobe/Aldus Image data)":e===4?"Illustrator (Adobe Graphics data)":e===5?"AppleSingle (Apple Computer Inc)":e===6?"NAA 89-3 (ANPA 1312)":e===7?"MacBinary II":e===8?"IPTC Unstructured Character Oriented File Format (UCOFF)":e===9?"United Press International ANPA 1312 variant":e===10?"United Press International Down-Load Message":e===11?"JPEG File Interchange (JFIF)":e===12?"Photo-CD Image-Pac (Eastman Kodak)":e===13?"Microsoft Bit Mapped Graphics File [*.BMP]":e===14?"Digital Audio File [*.WAV] (Microsoft & Creative Labs)":e===15?"Audio plus Moving Video [*.AVI] (Microsoft)":e===16?"PC DOS/Windows Executable Files [*.COM][*.EXE]":e===17?"Compressed Binary File [*.ZIP] (PKWare Inc)":e===18?"Audio Interchange File Format AIFF (Apple Computer Inc)":e===19?"RIFF Wave (Microsoft Corporation)":e===20?"Freehand (Macromedia/Aldus)":e===21?'Hypertext Markup Language "HTML" (The Internet Society)':e===22?"MPEG 2 Audio Layer 2 (Musicom), ISO/IEC":e===23?"MPEG 2 Audio Layer 3, ISO/IEC":e===24?"Portable Document File (*.PDF) Adobe":e===25?"News Industry Text Format (NITF)":e===26?"Tape Archive (*.TAR)":e===27?"Tidningarnas Telegrambyrå NITF version (TTNITF DTD)":e===28?"Ritzaus Bureau NITF version (RBNITF DTD)":e===29?"Corel Draw [*.CDR]":`Unknown format ${e}`}return dt(t)}function d3(t,e){const n={0:{0:"1"},1:{1:"1",2:"2",3:"3",4:"4"},2:{4:"4"},3:{1:"5.0",2:"6.0"},4:{1:"1.40"},5:{1:"2"},6:{1:"1"},11:{1:"1.02"},20:{1:"3.1",2:"4.0",3:"5.0",4:"5.5"},21:{2:"2.0"}},i=Ql(t);if(e["ObjectData Preview File Format"]){const s=Ql(e["ObjectData Preview File Format"].value);if(Object.prototype.hasOwnProperty.call(n,s)&&Object.prototype.hasOwnProperty.call(n[s],i))return n[s][i]}const r=Ex(t);return r===null?dt(t):String(r)}function h3(t){return t[0].toString()}function p3(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}function m3(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}function g3(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}function mc(t){const e=dt(t);return e.length>=8?e.substr(0,4)+"-"+e.substr(4,2)+"-"+e.substr(6,2):e}function gc(t){const e=dt(t);let n=e;return e.length>=6&&(n=e.substr(0,2)+":"+e.substr(2,2)+":"+e.substr(4,2),e.length===11&&(n+=e.substr(6,1)+e.substr(7,2)+":"+e.substr(9,2))),n}function vx(t){const e=dt(t);return e==="\x1B%G"?"UTF-8":e==="\x1B%5"?"Windows-1252":e==="\x1B%/G"?"UTF-8 Level 1":e==="\x1B%/H"?"UTF-8 Level 2":e==="\x1B%/I"?"UTF-8 Level 3":e==="\x1B/A"?"ISO-8859-1":e==="\x1B/B"?"ISO-8859-2":e==="\x1B/C"?"ISO-8859-3":e==="\x1B/D"?"ISO-8859-4":e==="\x1B/@"?"ISO-8859-5":e==="\x1B/G"?"ISO-8859-6":e==="\x1B/F"?"ISO-8859-7":e==="\x1B/H"?"ISO-8859-8":"Unknown"}function Ql(t){const e=Ex(t);return e===null?parseInt(dt(t),10):e}function Ex(t){return t.length!==2||Vh(t[0])&&Vh(t[1])?null:(t[0]<<8)+t[1]}function Vh(t){return t>=48&&t<=57}const _3={iptc:{256:{name:"Model Version",description:$D},261:{name:"Destination",repeatable:!0},276:{name:"File Format",description:KD},278:{name:"File Format Version",description:jD},286:"Service Identifier",296:"Envelope Number",306:"Product ID",316:"Envelope Priority",326:{name:"Date Sent",description:mc},336:{name:"Time Sent",description:gc},346:{name:"Coded Character Set",description:vx},356:"UNO",376:{name:"ARM Identifier",description:JD},378:{name:"ARM Version",description:QD},512:{name:"Record Version",description:e3},515:"Object Type Reference",516:"Object Attribute Reference",517:"Object Name",519:"Edit Status",520:{name:"Editorial Update",description:t3},522:"Urgency",524:{name:"Subject Reference",repeatable:!0,description:n3},527:"Category",532:{name:"Supplemental Category",repeatable:!0},534:"Fixture Identifier",537:{name:"Keywords",repeatable:!0},538:{name:"Content Location Code",repeatable:!0},539:{name:"Content Location Name",repeatable:!0},542:"Release Date",547:"Release Time",549:"Expiration Date",550:"Expiration Time",552:"Special Instructions",554:{name:"Action Advised",description:i3},557:{name:"Reference Service",repeatable:!0},559:{name:"Reference Date",repeatable:!0},562:{name:"Reference Number",repeatable:!0},567:{name:"Date Created",description:mc},572:{name:"Time Created",description:gc},574:{name:"Digital Creation Date",description:mc},575:{name:"Digital Creation Time",description:gc},577:"Originating Program",582:"Program Version",587:{name:"Object Cycle",description:r3},592:{name:"By-line",repeatable:!0},597:{name:"By-line Title",repeatable:!0},602:"City",604:"Sub-location",607:"Province/State",612:"Country/Primary Location Code",613:"Country/Primary Location Name",615:"Original Transmission Reference",617:"Headline",622:"Credit",627:"Source",628:"Copyright Notice",630:{name:"Contact",repeatable:!0},632:"Caption/Abstract",634:{name:"Writer/Editor",repeatable:!0},637:{name:"Rasterized Caption",description:s3},642:"Image Type",643:{name:"Image Orientation",description:o3},647:"Language Identifier",662:{name:"Audio Type",description:a3},663:{name:"Audio Sampling Rate",description:c3},664:{name:"Audio Sampling Resolution",description:l3},665:{name:"Audio Duration",description:u3},666:"Audio Outcue",698:"Short Document ID",699:"Unique Document ID",700:"Owner ID",712:{name:t=>t.length===2?"ObjectData Preview File Format":"Record 2 destination",description:f3},713:{name:"ObjectData Preview File Format Version",description:d3},714:"ObjectData Preview Data",1802:{name:"Size Mode",description:h3},1812:{name:"Max Subfile Size",description:p3},1882:{name:"ObjectData Size Announced",description:m3},1887:{name:"Maximum ObjectData Size",description:g3}}},x3=943868237,Qr=4,Ao=2,v3=1,E3=2,Sx=4,S3=Qr+Ao+E3+Sx,M3=1028,T3=346,y3={read:b3};function b3(t,e,n,i,r){return A3(t,e,_3.iptc,n,i,r)}function A3(t,e,n,i,r=Ds,s){try{if(Array.isArray(t)){const c=new DataView(Uint8Array.from(t).buffer);return Wh(c,{size:t.length},0,n,i,r,s||ys(c))}const{naaBlock:o,dataOffset:a}=w3(t,e);return Wh(t,o,a,n,i,r,s||ys(t))}catch{return{}}}function w3(t,e){for(;e+S3<=t.byteLength;){const n=R3(t,e);if(C3(n))return{naaBlock:n,dataOffset:e+n.headerSize};e+=n.headerSize+n.size+I3(n)}throw new Error("No IPTC NAA resource block.")}function R3(t,e){if(t.getUint32(e,!1)!==x3)throw new Error("Not an IPTC resource block.");const n=t.getUint8(e+Qr+Ao),i=(n%2===0?n+1:n)+v3;return{headerSize:Qr+Ao+i+Sx,type:t.getUint16(e+Qr),size:t.getUint32(e+Qr+Ao+i)}}function C3(t){return t.type===M3}function I3(t){return t.size%2!==0?1:0}function Wh(t,e,n,i,r,s,o){const a={};let c;const l=n+e.size;for(;n<l&&n<t.byteLength;){const{tag:u,tagSize:f,encoding:d}=P3(t,n,i,a,c,r,s,o);if(u===null)break;d!==void 0&&(c=d),u&&(a[u.name]===void 0||u.repeatable===void 0?a[u.name]={id:u.id,value:u.value,description:u.description}:(a[u.name]instanceof Array||(a[u.name]=[{id:a[u.name].id,value:a[u.name].value,description:a[u.name].description}]),a[u.name].push({id:u.id,value:u.value,description:u.description}))),n+=Zi+f}return a}function P3(t,e,n,i={},r=void 0,s=!1,o=Ds,a){if(F3(t,e)||O3(t,e))return{tag:null,tagSize:0};const u=t.getUint16(e+1),f=t.getUint16(e+3);if(U3(t,e,f)||!L3(a,f))return{tag:null,tagSize:0};const d=D3(t,e,u,f),p=n[u];if(!s&&!p)return{tag:void 0,tagSize:f,encoding:d};if(!o.shouldParseTag("iptc",N3(p,u,s),u))return{tag:void 0,tagSize:f,encoding:d};const _=Mx(t,e+Zi,f),E={id:u,name:B3(p,u,_),value:_,description:H3(p,_,i,r)};return W3(p)&&(E.repeatable=!0),{tag:E,tagSize:f,encoding:d}}function L3(t,e){const n=Math.ceil((Zi+e)/mx);return t.iptcDatasetsRemaining>=n?(t.iptcDatasetsRemaining-=n,!0):!1}function D3(t,e,n,i){if(n===T3)return vx(Mx(t,e+Zi,i))}function N3(t,e,n){if(!t)return n?`undefined-${e}`:void 0;if(typeof t=="string")return t;if(t&&typeof t.name=="string")return t.name}function F3(t,e){return t.getUint8(e)!==28}function O3(t,e){return e+Zi>t.byteLength}function U3(t,e,n){return e+Zi+n>t.byteLength}function Mx(t,e,n){const i=[];for(let r=0;r<n;r++)i.push(t.getUint8(e+r));return i}function B3(t,e,n){return t?k3(t)?t:z3(t)?t.name(n):t.name:`undefined-${e}`}function k3(t){return typeof t=="string"}function z3(t){return typeof t.name=="function"}function H3(t,e,n,i){if(V3(t))try{return t.description(e,n)}catch{}return G3(t,e)?x_.decode(i,e):e}function G3(t,e){return t&&e instanceof Array}function V3(t){return t&&t.description!==void 0}function W3(t){return t&&t.repeatable}const X3=Y3(Z3);function Y3(t){return{key:"iptc",consumes:["iptc"],emits:[],read:(e,n)=>q3(e,n,t),merge:$3,suppressions:[{kind:"iptc",isSuppressed:K3}],fromExif:j3,brand:kn}}function Z3(t,e,n,i,r){return y3.read(t,e,n,i,r)}function q3(t,e,n){const i=Wu(t,e),r=Lr(e);return t.origin==="rawProfile"&&t.decompressed&&yD(r,i.byteLength),Ot("iptc",n(i,t.dataOffset,e.options.includeUnknown,e.tagFilter,r),e)}function $3(t){return Ns(t,"iptc","carriedIptc")}function K3(t,e){return t.carried==="main"&&e.some(n=>n.kind==="iptc"&&!Or(n))}function j3(t,e){return t["IPTC-NAA"]&&{kind:"iptc",dataView:t["IPTC-NAA"].value,dataOffset:0,carried:e.carried}}const Wo={"tiff:Orientation"(t){return t==="1"?"Horizontal (normal)":t==="2"?"Mirror horizontal":t==="3"?"Rotate 180":t==="4"?"Mirror vertical":t==="5"?"Mirror horizontal and rotate 270 CW":t==="6"?"Rotate 90 CW":t==="7"?"Mirror horizontal and rotate 90 CW":t==="8"?"Rotate 270 CW":t},"tiff:ResolutionUnit":t=>J_(parseInt(t,10)),"tiff:XResolution":t=>dr(sx,t),"tiff:YResolution":t=>dr(ox,t),"exif:ApertureValue":t=>dr(z_,t),"exif:GPSLatitude":Xh,"exif:GPSLongitude":Xh,"exif:FNumber":t=>dr(q_,t),"exif:FocalLength":t=>dr($_,t),"exif:FocalPlaneResolutionUnit":t=>K_(parseInt(t,10)),"exif:ColorSpace":t=>H_(J3(t)),"exif:ComponentsConfiguration"(t,e){if(/^\d, \d, \d, \d$/.test(e)){const n=e.split(", ").map(i=>parseInt(i,10));return G_(n)}return e},"exif:Contrast":t=>V_(parseInt(t,10)),"exif:CustomRendered":t=>W_(parseInt(t,10)),"exif:ExposureMode":t=>X_(parseInt(t,10)),"exif:ExposureProgram":t=>Y_(parseInt(t,10)),"exif:ExposureTime"(t){return Tx(t)?Z_(t.split("/").map(e=>parseInt(e,10))):t},"exif:MeteringMode":t=>j_(parseInt(t,10)),"exif:Saturation":t=>Q_(parseInt(t,10)),"exif:SceneCaptureType":t=>tx(parseInt(t,10)),"exif:Sharpness":t=>nx(parseInt(t,10)),"exif:ShutterSpeedValue":t=>dr(ix,t),"exif:WhiteBalance":t=>rx(parseInt(t,10))};function dr(t,e){return Tx(e)?t(e.split("/")):e}function J3(t){return t.substring(0,2)==="0x"?parseInt(t.substring(2),16):parseInt(t,10)}function Tx(t){return/^-?\d+\/-?\d+$/.test(t)}function Xh(t){const[e,n]=t.split(",");if(e!==void 0&&n!==void 0){const i=parseFloat(e),r=parseFloat(n),s=n.charAt(n.length-1);if(!Number.isNaN(i)&&!Number.isNaN(r))return""+(i+r/60)+s}return t}const Yh="Namespace prefix ",Q3=" is not defined";function eN(t){const e=String(t.message),n=["prefix is non-null and namespace is null","prefix not bound to a namespace","prefix inte bundet till en namnrymd"];for(let i=0;i<n.length;i++)if(e.indexOf(n[i])!==-1)return!0;return tN(e)}function tN(t){const e=t.split(/[\n\r\u2028\u2029]/);for(let n=0;n<e.length;n++){const i=e[n].indexOf(Yh);if(i!==-1&&e[n].lastIndexOf(Q3)>i+Yh.length)return!0}return!1}function nN(t){const e=iN(t);if(e===-1)return t;const{insertionIndex:n,attributeValueSpans:i}=rN(t,e+1);if(n===-1)return t;const r=sN(t,e,n,i),o=aN(t).filter(c=>r[c]===void 0);if(o.length===0)return t;const a=cN(o);return t.slice(0,n)+a+t.slice(n)}function iN(t){let e=0;for(;e<t.length;){if(e=t.indexOf("<",e),e===-1)return-1;if(/[A-Za-z_]/.test(t.charAt(e+1)))return e;mi(t,"<!--",e)?e=Ui(t,e+4,"-->"):mi(t,"<![CDATA[",e)?e=Ui(t,e+9,"]]>"):t.charAt(e+1)==="?"?e=Ui(t,e+2,"?>"):e++}return-1}function rN(t,e){const n=[];let i,r;for(let s=e;s<t.length;s++){const o=t.charAt(s);if(i!==void 0)o===i&&(n.push({start:r,end:s}),i=void 0);else if(o==='"'||o==="'")i=o,r=s+1;else if(o===">")return t.charAt(s-1)==="/"?{insertionIndex:s-1,attributeValueSpans:n}:{insertionIndex:s,attributeValueSpans:n}}return{insertionIndex:-1,attributeValueSpans:n}}function mi(t,e,n){return t.slice(n,n+e.length)===e}function Ui(t,e,n){const i=t.indexOf(n,e);return i===-1?t.length:i+n.length}function sN(t,e,n,i){const r=Object.create(null),s=/xmlns:([A-Za-z_][A-Za-z0-9._-]*)\s*=\s*["']([^"']*)["']/g;let o,a=0;for(;(o=s.exec(t))!==null;){for(;a<i.length&&i[a].end<=o.index;)a++;if(a<i.length&&i[a].start<=o.index){s.lastIndex=i[a].end;continue}(o[2]!==""||oN(o.index,e,n))&&(r[o[1]]=!0)}return r}function oN(t,e,n){return t>e&&t<n}function aN(t){const e=[],n=Object.create(null),i=/(?:^|[^A-Za-z0-9._-])([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*/g;let r;for(;(r=i.exec(t))!==null;){const s=r[1];s==="xmlns"||s==="xml"||n[s]===void 0&&(n[s]=!0,e.push(s))}return e}const Zh={xmp:"http://ns.adobe.com/xap/1.0/",tiff:"http://ns.adobe.com/tiff/1.0/",exif:"http://ns.adobe.com/exif/1.0/",dc:"http://purl.org/dc/elements/1.1/",xmpMM:"http://ns.adobe.com/xap/1.0/mm/",stEvt:"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",stRef:"http://ns.adobe.com/xap/1.0/sType/ResourceRef#",photoshop:"http://ns.adobe.com/photoshop/1.0/"};function cN(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];e.push(" xmlns:"+i+'="'+lN(i)+'"')}return e.join("")}function lN(t){return Object.prototype.hasOwnProperty.call(Zh,t)?Zh[t]:"http://fallback.namespace/"+t}const uN=` 	\r
`,fN=` 	\r
/><="'`;function dN(t,e,n=1/0){let i=0,r=0,s=t.indexOf("<");for(;s!==-1;){if(mi(t,"<!--",s))r++,s=Ui(t,s+4,"-->");else if(mi(t,"<![CDATA[",s))r++,s=Ui(t,s+9,"]]>");else if(mi(t,"<?",s)){const o=Ui(t,s+2,"?>");if(t.slice(s+2,o).indexOf("<!")!==-1)return!0;r++,s=o}else{if(mi(t,"<!",s))return!0;if(mi(t,"</",s))i=Math.max(i-1,0),s=Ui(t,s+2,">");else{if(i+1>e)return!0;const o=t.indexOf("<",s+1),a=o===-1?t.length:o;hN(t,s+1,a)||i++,r+=1+mN(t,s+1,a),s++}}if(r>n)return!0;s=t.indexOf("<",s)}return!1}function hN(t,e,n){let i=yx(t,e,n);if(i===e)return!1;for(;;){const r=eu(t,i,n);if(mi(t,"/>",r))return!0;if(r===i||(i=pN(t,r,n),i===-1))return!1}}function yx(t,e,n){let i=e;for(;i<n&&fN.indexOf(t.charAt(i))===-1;)i++;return i}function eu(t,e,n){let i=e;for(;i<n&&uN.indexOf(t.charAt(i))!==-1;)i++;return i}function pN(t,e,n){const i=yx(t,e,n);if(i===e)return-1;const r=eu(t,i,n);if(t.charAt(r)!=="=")return-1;const s=eu(t,r+1,n),o=t.charAt(s);if(o!=='"'&&o!=="'")return-1;for(let a=s+1;a<n;a++)if(t.charAt(a)===o)return a+1;return-1}const _c=0,es=1,ts=2,fo=3,ns=4,ho=5,xc=6,qh=7;function mN(t,e,n){let i=_c,r=0;for(let s=e;s<n;s++){const o=t.charAt(s);if(o==="="){if(i!==es&&i!==ts)return r;i=fo}else if(o==='"'||o==="'"){if(i===fo||i===es){const a=t.indexOf(o,s+1);if(a===-1||a>=n)return r;s=a}else if(i!==ns)return r;r++,i=ho}else if(o==="/"){if(i===fo)return r;(i===_c||i===ho||i===xc)&&(i=qh)}else{if(o===">")return $h(i)?r+1:r;if(gN(o))i===ns&&r++,i===_c||i===ns||i===ho?i=xc:i===es&&(i=ts);else{if(i===qh)return r;i===ts&&r++,i===ts||i===ho||i===xc?i=es:i===fo&&(i=ns)}}}return $h(i)?r+1:r}function $h(t){return t===es||t===ts||t===ns}function gN(t){return t<=" "||t===""||t===""||t==="\u2028"||t==="\u2029"}const tu={read:MN},_N=1,xN=3,vN=4,EN=7,SN=8,Kh='<?xpacket end="',vc='"?>',jh=16,Jh=256,Qh=25e4;let Ec=0;class nu extends Error{constructor(e){super(e),this.name="ParseError"}}function MN(t,e,n,i){const r={};if(typeof t=="string")return po(r,t,n,i),r;const[s,o]=TN(t,e),a=po(r,s,n,i);if(o){const c=po(r,o,n,i);!a&&!c&&(delete r._raw,po(r,iu(t,e),n,i))}return r}function TN(t,e){if(e.length===0)return[];const n=[iu(t,e.slice(0,1))];return e.length>1&&n.push(iu(t,e.slice(1))),n}function iu(t,e){const n=e.map(o=>yN(t,o)),i=n.reduce((o,a)=>o+a.length,0),r=new Uint8Array(i);let s=0;for(let o=0;o<n.length;o++)r.set(n[o],s),s+=n[o].length;return new DataView(r.buffer)}function yN(t,e){const n=t.byteLength,i=t.byteOffset,r=Math.min(Math.max(e.dataOffset,0),n),s=Math.min(r+Math.max(e.length,0),n);return new Uint8Array(t.buffer,i+r,s-r)}function po(t,e,n,i){try{const{doc:r,raw:s,decodeValue:o}=bN(e,n,i);t._raw=(t._raw||"")+s;const a=wx(r),c={};Cx(Rx(a,!0,o),c,Object.create(null)),delete c._raw;const l=Object.keys(c);for(let u=0;u<l.length;u++)Un(t,l[u],c[l[u]]);return!0}catch{return!1}}function bN(t,e,n){const{parser:i,warning:r}=n(e);if(!i)throw console.warn(r),new Error;const{xmlString:s,decodeValue:o}=AN(t);return{doc:Ax(i,wN(s)),raw:s,decodeValue:o}}function AN(t){if(typeof t=="string")return ep(t);const e=__.get();if(e!==void 0)try{return{xmlString:new e("utf-8",{fatal:!0}).decode(t),decodeValue:bx}}catch{}const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);return ep(sn(n))}function ep(t){const e=Ou(t);return e!==void 0?{xmlString:e,decodeValue:bx}:{xmlString:t,decodeValue:aa}}function bx(t){return t}function wN(t){return RN(t.replace(/^.+(<\?xpacket begin)/,"$1"))}function RN(t){const e=Math.max(t.lastIndexOf(`
`),t.lastIndexOf("\r"),t.lastIndexOf("\u2028"),t.lastIndexOf("\u2029"))+1,n=t.indexOf(Kh,e);if(n===-1)return t;const i=t.lastIndexOf(vc,t.length-vc.length-1);return i<n+Kh.length?t:t.slice(0,i+vc.length)}function Ax(t,e,n=!1){if(dN(e,Jh,Qh))throw new nu(`XMP has elements nested deeper than ${Jh} levels, more than ${Qh} markup nodes, or a markup declaration.`);try{const i=t.parseFromString(e,"application/xml"),r=i.getElementsByTagName("parsererror");if(r.length>0)throw new nu(r[0].textContent);return i}catch(i){if(i.name==="ParseError"&&eN(i)&&!n)return Ax(t,nN(e),!0);throw i}}function wx(t){const e=t.childNodes;for(let n=0;n<e.length;n++){if(e[n].tagName==="x:xmpmeta")return wx(e[n]);if(e[n].tagName==="rdf:RDF")return e[n]}throw new Error}function Rx(t,e,n){const i=CN(t);return PN(i)?e?{}:n(DN(i)):NN(i,n)}function CN(t){const e=t.childNodes,n=[];for(let i=0;i<e.length;i++)IN(e[i])||n.push(e[i]);return n}function IN(t){return t.nodeType===SN||t.nodeType===EN}function PN(t){return t.length>0&&t.every(LN)}function LN(t){return t.nodeType===xN||t.nodeType===vN}function DN(t){return t.map(e=>e.nodeValue).join("")}function NN(t,e){const n=Object.create(null);return t.forEach(i=>{if(FN(i)){const r=ON(i,e);n[i.nodeName]!==void 0?(Array.isArray(n[i.nodeName])||(n[i.nodeName]=[n[i.nodeName]]),n[i.nodeName].push(r)):n[i.nodeName]=r}}),n}function FN(t){return t.nodeType===_N}function ON(t,e){return{attributes:UN(t,e),value:Rx(t,!1,e)}}function UN(t,e){const n=t.attributes,i=Object.create(null);for(let r=0;r<n.length;r++)Un(i,n[r].nodeName,e(n[r].value));return i}function Cx(t,e,n){for(const i in t){let r=t[i];Array.isArray(r)||(r=[r]),r.forEach(s=>{sf(s.attributes,e,n),typeof s.value=="object"&&of(s.value,e,n)})}}function sf(t,e,n){for(const i in t)try{BN(i)&&Ix(e,n,Ma(i),Br(t[i],t[i],{},i))}catch{}}function BN(t){return t!=="rdf:parseType"&&!Sa(t)}function Sa(t){return t.split(":")[0]==="xmlns"}function Ix(t,e,n,i){const r=Ps(n);Un(t,r,i.tag),Un(e,r,i.plainDescription)}function Ma(t){return/^MicrosoftPhoto(_\d+_)?:Rating$/i.test(t)?"RatingPercent":t.split(":")[1]||t}function Br(t,e,n,i){return{tag:{value:t,attributes:n,description:kN(t,e,i)},plainDescription:e}}function kN(t,e,n){if(!zN(n)||HN(t))return e;if(Array.isArray(t)){try{const i=Wo[n](t,e);if(typeof i=="string")return i}catch{}return e}try{return Wo[n](t)}catch{return t}}function zN(t){return Object.prototype.hasOwnProperty.call(Wo,t)&&typeof Wo[t]=="function"}function HN(t){return typeof t=="object"&&!Array.isArray(t)}function of(t,e,n){Px(()=>{for(const i in t)try{Sa(i)||Ix(e,n,Ma(i),GN(t[i],i))}catch{}})}function Px(t){Ec++;try{if(Ec>jh)throw new nu(`XMP value nested deeper than ${jh} levels.`);return t()}finally{Ec--}}function GN(t,e){return Lx(t)?WN(t,e):VN(t)?{tag:{value:"",attributes:{},description:""},plainDescription:""}:Dx(t)?Nx(t,e):Ox(t)?Ux(t,e):Bx(t)?kx(t,e):zx(t)?KN(t,e):af(t,e)}function VN(t){return t.attributes["rdf:parseType"]==="Resource"&&typeof t.value=="string"&&t.value.trim()===""}function Lx(t){return Array.isArray(t)}function WN(t,e){return af(t[t.length-1],e)}function Dx(t){return t.attributes["rdf:parseType"]==="Resource"&&t.value["rdf:value"]!==void 0||t.value["rdf:Description"]!==void 0&&t.value["rdf:Description"].value["rdf:value"]!==void 0}function Nx(t,e){const n=bs(t);t.value["rdf:Description"]!==void 0&&(t=t.value["rdf:Description"]),Ft(n,bs(t),XN(t));const{value:i,plainDescription:r}=YN(t);return Br(i,r,n,e)}function bs(t){const e={};for(const n in t.attributes)n!=="rdf:parseType"&&n!=="rdf:resource"&&!Sa(n)&&Un(e,Ps(Ma(n)),t.attributes[n]);return e}function XN(t){const e={};if(typeof t.value!="object")return e;for(const n in t.value)n!=="rdf:value"&&!Sa(n)&&Un(e,Ps(Ma(n)),t.value[n].value);return e}function YN(t){const e=Fx(t.value["rdf:value"]),n=Vx(e);return n?{value:n,plainDescription:n}:ZN(e)}function Fx(t){return Lx(t)?t[t.length-1]:t}function ZN(t){if(zx(t))return Px(()=>Gx(t));if(typeof t.value=="object"){const e=Object.create(null),n=Object.create(null);return of(t.value,e,n),{value:e,plainDescription:Ta(e,n)}}return{value:t.value,plainDescription:t.value}}function Ta(t,e){const n=[];for(const i in t)n.push(`${qN(i)}: ${e[i]}`);return n.join("; ")}function qN(t){return t==="CiAdrCity"?"CreatorCity":t==="CiAdrCtry"?"CreatorCountry":t==="CiAdrExtadr"?"CreatorAddress":t==="CiAdrPcode"?"CreatorPostalCode":t==="CiAdrRegion"?"CreatorRegion":t==="CiEmailWork"?"CreatorWorkEmail":t==="CiTelWork"?"CreatorWorkPhone":t==="CiUrlWork"?"CreatorWorkUrl":t}function Ox(t){return t.attributes["rdf:parseType"]==="Resource"||t.value["rdf:Description"]!==void 0&&t.value["rdf:Description"].value["rdf:value"]===void 0}function Ux(t,e){const n={},i=Object.create(null),r={};return t.value["rdf:Description"]!==void 0&&(sf(t.value["rdf:Description"].attributes,n,i),Ft(r,bs(t)),t=t.value["rdf:Description"]),typeof t.value=="object"&&of(t.value,n,i),Br(n,Ta(n,i),r,e)}function Bx(t){return $N(t.value)&&t.attributes["xml:lang"]===void 0&&t.attributes["rdf:resource"]===void 0}function $N(t){return typeof t=="string"?t==="":Object.keys(t).length===0}function kx(t,e){const n={},i=Object.create(null);return sf(t.attributes,n,i),Br(n,Ta(n,i),{},e)}function zx(t){return Hx(t.value)!==void 0}function Hx(t){return Fx(t["rdf:Bag"]||t["rdf:Seq"]||t["rdf:Alt"])}function KN(t,e){const n=bs(t),{value:i,plainDescription:r}=Gx(t);return Br(i,r,n,e)}function Gx(t){let e=Hx(t.value).value["rdf:li"];const n=[],i=[];return e===void 0?e=[]:Array.isArray(e)||(e=[e]),e.forEach(r=>{const s=jN(r);n.push(s.value),i.push(s.plainDescription)}),{value:n,plainDescription:i.join(", ")}}function jN(t){return Dx(t)?tp(Nx(t)):Ox(t)?np(Ux(t)):Bx(t)?np(kx(t)):tp(af(t))}function tp(t){return{value:t.tag,plainDescription:t.plainDescription}}function np(t){return{value:t.tag.value,plainDescription:t.plainDescription}}function af(t,e){const{value:n,plainDescription:i}=JN(t);return Br(n,i,bs(t),e)}function JN(t){const e=Vx(t);if(e)return{value:e,plainDescription:e};if(typeof t.value=="string")return{value:t.value,plainDescription:t.value};const n={},i=Object.create(null);return Cx(t.value,n,i),{value:n,plainDescription:Ta(n,i)}}function Vx(t){return t.attributes&&t.attributes["rdf:resource"]}const QN=4,eF=64*1024,tF={key:"xmp",consumes:["xmp"],emits:[],read:nF,merge:sF,suppressions:[{kind:"xmp",isSuppressed:oF}],mergeModes:{brobXmp:aF},fromExif:cF,brand:kn};function nF(t,e){const{domParser:n}=e.options;if(t.compression!==void 0)return e.composed.formats.jxl?e.decompress(H0(e.dataView,t),zu(t.compression),void 0,"dataview").then(i=>iF(i,e)):void 0;if(t.carried!==void 0)return t.decompressed&&!rF(e,t.byteLength)?void 0:Ot("xmp",tu.read(Wu(t,e),void 0,n,e.getDomParser),e);if(Xx(t))return Ot("xmp",tu.read(t.dataView||e.dataView,t.chunks,n,e.getDomParser),e)}function iF(t,e){return Wx(e,t.byteLength)?Ot("xmp",{},e):Ot("xmp",tu.read(t,[{dataOffset:0,length:t.byteLength}],e.options.domParser,e.getDomParser),e)}function rF(t,e){if(!(typeof e=="number"&&e>=0))return!1;const n=(t.decompressedApplicationNotesSize||0)+e;return Wx(t,n)?!1:(t.decompressedApplicationNotesSize=n,!0)}function Wx(t,e){return!(typeof e=="number"&&e<=G0(t.dataView,QN,eF))}function sF(t){return t.compression!==void 0?{slot:"brobXmp",mode:"brobXmp"}:Ns(t,"xmp","carriedXmp")}function oF(t,e){return t.carried!==void 0&&e.some(n=>n.kind==="xmp"&&Xx(n))}function aF(t,e,n){return!e.tags||Object.keys(e.tags).length===0?t:q0(t,e,n)}function Xx(t){return t!==void 0&&t.compression===void 0&&t.chunks.length>0}function cF(t,e){const n=t.ApplicationNotes&&t.ApplicationNotes.value;return lF(n)&&{kind:"xmp",carried:e.carried,decompressed:e.decompressed,byteLength:n.length,getDataView:()=>sn(n)}}function lF(t){return Array.isArray(t)&&typeof t[0]=="number"}const ip={desc:{name:"ICC Description"},cprt:{name:"ICC Copyright"},dmdd:{name:"ICC Device Model Description"},vued:{name:"ICC Viewing Conditions Description"},dmnd:{name:"ICC Device Manufacturer for Display"},tech:{name:"Technology"}},rp={4:{name:"Preferred CMM type",value:(t,e)=>Oe(t,e,4),description:t=>t!==null?Sc(t):""},8:{name:"Profile Version",value:(t,e)=>t.getUint8(e).toString(10)+"."+(t.getUint8(e+1)>>4).toString(10)+"."+(t.getUint8(e+1)%16).toString(10)},12:{name:"Profile/Device class",value:(t,e)=>Oe(t,e,4),description:t=>{switch(t.toLowerCase()){case"scnr":return"Input Device profile";case"mntr":return"Display Device profile";case"prtr":return"Output Device profile";case"link":return"DeviceLink profile";case"abst":return"Abstract profile";case"spac":return"ColorSpace profile";case"nmcl":return"NamedColor profile";case"cenc":return"ColorEncodingSpace profile";case"mid ":return"MultiplexIdentification profile";case"mlnk":return"MultiplexLink profile";case"mvis":return"MultiplexVisualization profile";default:return t}}},16:{name:"Color Space",value:(t,e)=>Oe(t,e,4)},20:{name:"Connection Space",value:(t,e)=>Oe(t,e,4)},24:{name:"ICC Profile Date",value:(t,e)=>uF(t,e).toISOString()},36:{name:"ICC Signature",value:(t,e)=>Xo(t.buffer.slice(e,e+4))},40:{name:"Primary Platform",value:(t,e)=>Oe(t,e,4),description:t=>Sc(t)},48:{name:"Device Manufacturer",value:(t,e)=>Oe(t,e,4),description:t=>Sc(t)},52:{name:"Device Model Number",value:(t,e)=>Oe(t,e,4)},64:{name:"Rendering Intent",value:(t,e)=>t.getUint32(e),description:t=>{switch(t){case 0:return"Perceptual";case 1:return"Relative Colorimetric";case 2:return"Saturation";case 3:return"Absolute Colorimetric";default:return t}}},80:{name:"Profile Creator",value:(t,e)=>Oe(t,e,4)}};function uF(t,e){const n=t.getUint16(e),i=t.getUint16(e+2)-1,r=t.getUint16(e+4),s=t.getUint16(e+6),o=t.getUint16(e+8),a=t.getUint16(e+10);return new Date(Date.UTC(n,i,r,s,o,a))}function Xo(t){return sn(new Uint8Array(t))}function Sc(t){switch(t.toLowerCase()){case"appl":return"Apple";case"adbe":return"Adobe";case"msft":return"Microsoft";case"sunw":return"Sun Microsystems";case"sgi":return"Silicon Graphics";case"tgnt":return"Taligent";default:return t}}const fF={read:yF},dF=84,Yx=128,hF="acsp",pF="desc",mF="mluc",gF="text",_F="sig ",xF=12,vF=12,EF=12,Mc=16,SF=1e3,MF=1e3,TF=1024*1024;function yF(t,e,n,i){return n&&e[0].compressionMethod!==Wi?bF(t,e,i):wF(t,e)}function bF(t,e,n){if(!AF(e[0].compressionMethod))return{};const i=t.byteOffset||0,r=t.buffer.slice(i+e[0].offset,i+e[0].offset+e[0].length),s=new DataView(r);return Hu(s,e[0].compressionMethod,"utf-8","dataview",n).then(Zx).catch(()=>({}))}function AF(t){return t===ca}function wF(t,e){try{const n=RF(t),i=t.byteOffset||0,r=e.reduce((l,u)=>l+u.length,0),s=Math.min(r,n.byteLength),o=new Uint8Array(s);let a=0;const c=CF(e);for(let l=1;l<=e.length;l++){const u=c[l];if(!u)throw new Error(`ICC chunk ${l} not found`);const f=n.slice(i+u.offset,i+u.offset+u.length),d=new Uint8Array(f);o.set(d,a),a+=d.length}return Zx(new DataView(o.buffer))}catch{return{}}}function RF(t){return Array.isArray(t)?new DataView(Uint8Array.from(t).buffer).buffer:t.buffer}function CF(t){const e=Object.create(null);for(let n=0;n<t.length;n++)e[t[n].chunkNumber]===void 0&&(e[t[n].chunkNumber]=t[n]);return e}function IF(t){return t.byteLength<Yx+4}function PF(t,e){return t.byteLength<e+xF}function Zx(t){const e=t.buffer,n=t.getUint32();if(t.byteLength!==n)throw new Error("ICC profile length not matching");if(t.byteLength<dF)throw new Error("ICC profile too short");const i={},r=Object.keys(rp);for(let l=0;l<r.length;l++){const u=r[l],f=rp[u],d=f.value(t,parseInt(u,10));let p=d;f.description&&(p=f.description(d)),i[f.name]={value:d,description:p}}if(Xo(e.slice(36,40))!==hF)throw new Error("ICC profile: missing signature");if(IF(t))return i;const o=Math.min(t.getUint32(Yx),MF);let a=132;const c={remaining:Math.min(t.byteLength,TF)};for(let l=0;l<o;l++){if(PF(t,a))return i;const u=Oe(t,a,4),f=t.getUint32(a+4),d=t.getUint32(a+8);if(f>t.byteLength)return i;const p=Oe(t,f,4);if(p===pF){if(f+vF>t.byteLength)return i;const _=t.getUint32(f+8);if(_>d)return i;const E=sp(t,f+12,_-1,c);$r(i,u,E)}else if(p===mF){if(f+Mc>t.byteLength)return i;const _=t.getUint32(f+8),E=t.getUint32(f+12);if(E<EF||_>SF)return i;const m=_*E,h=t.byteLength-f-Mc;if(m>h||m>c.remaining)return i;c.remaining-=m;const M=Math.min(d,t.byteLength-f);let A=f+Mc;const S=[];for(let w=0;w<_;w++){const y=Oe(t,A+0,2),R=Oe(t,A+2,2),x=t.getUint32(A+4),b=t.getUint32(A+8),D=Math.max(0,M-b),I=Math.min(x,D,c.remaining);c.remaining-=I;const U=QA(t,f+b,I);S.push({languageCode:y,countryCode:R,text:U}),A+=E}if(_===1)$r(i,u,S[0].text);else{const w={};for(let y=0;y<S.length;y++)w[`${S[y].languageCode}-${S[y].countryCode}`]=S[y].text;$r(i,u,w)}}else if(p===gF){const _=sp(t,f+8,d-8,c),E=_.indexOf("\0");$r(i,u,E===-1?_:_.slice(0,E))}else if(p===_F){const _=Xo(e.slice(f+8,f+12));$r(i,u,_)}a=a+12}return i}function sp(t,e,n,i){const r=Math.max(0,Math.min(n,t.byteLength-e,i.remaining));return i.remaining-=r,Xo(t.buffer.slice(e,e+r))}function $r(t,e,n){ip[e]?t[ip[e].name]={value:n,description:n}:t[e]={value:n,description:n}}const LF={key:"icc",consumes:["icc"],emits:[],read:DF,merge:t=>Ns(t,"icc","carriedIcc"),suppressions:[{kind:"icc",isSuppressed:NF}],fromExif:FF,brand:kn};function DF(t,e){if(!qx(t)||t.chunks[0].compressionMethod!==Wi&&e.decompressConfig===void 0)return;const n=fF.read(t.dataView||e.dataView,t.chunks,e.options.async,e.decompressConfig);return Gu(n)?n.then(i=>Ot("icc",i,e)):Ot("icc",n,e)}function NF(t,e){return t.carried!==void 0&&e.some(n=>n.kind==="icc"&&qx(n))}function qx(t){return t!==void 0&&t.chunks.length>0}function FF(t,e){if(!t.ICC_Profile)return;const n=t.ICC_Profile.value;return{kind:"icc",dataView:n,chunks:[{offset:0,length:n.length,chunkNumber:1,chunksTotal:1}],carried:e.carried}}const Yn={CLOSED_SUBPATH_LENGTH:0,CLOSED_SUBPATH_BEZIER_LINKED:1,CLOSED_SUBPATH_BEZIER_UNLINKED:2,OPEN_SUBPATH_LENGTH:3,OPEN_SUBPATH_BEZIER_LINKED:4,OPEN_SUBPATH_BEZIER_UNLINKED:5,FILL_RULE:6,CLIPBOARD:7,INITIAL_FILL_RULE:8},$x=24,Kx=32768,Yo={2e3:{name:"PathInformation",description:OF},2999:{name:"ClippingPathName",description(t){const[,e]=l0(t,0);return e}}};function OF(t,e={remaining:Kx}){const i={},r=[];for(let s=0;s<t.byteLength&&e.remaining>0;s+=2+$x){const o=ue.getShortAt(t,s);Tc[o]&&(i[o]||(i[o]=Tc[o].description),r.push({type:o,path:Tc[o].path(t,s+2)}),e.remaining--)}return JSON.stringify({types:i,paths:r})}const Tc={[Yn.CLOSED_SUBPATH_LENGTH]:{description:"Closed subpath length",path:(t,e)=>[ue.getShortAt(t,e)]},[Yn.CLOSED_SUBPATH_BEZIER_LINKED]:{description:"Closed subpath Bezier knot, linked",path:mo},[Yn.CLOSED_SUBPATH_BEZIER_UNLINKED]:{description:"Closed subpath Bezier knot, unlinked",path:mo},[Yn.OPEN_SUBPATH_LENGTH]:{description:"Open subpath length",path:(t,e)=>[ue.getShortAt(t,e)]},[Yn.OPEN_SUBPATH_BEZIER_LINKED]:{description:"Open subpath Bezier knot, linked",path:mo},[Yn.OPEN_SUBPATH_BEZIER_UNLINKED]:{description:"Open subpath Bezier knot, unlinked",path:mo},[Yn.FILL_RULE]:{description:"Path fill rule",path:()=>[]},[Yn.INITIAL_FILL_RULE]:{description:"Initial fill rule",path:(t,e)=>[ue.getShortAt(t,e)]},[Yn.CLIPBOARD]:{description:"Clipboard",path:BF}};function mo(t,e){const i=[];for(let r=0;r<$x;r+=8)i.push(UF(t,e+r));return i}function UF(t,e){const n=Fi(t,e,8);return[Fi(t,e+4,8),n]}function BF(t,e){return[[Fi(t,e,8),Fi(t,e+4,8),Fi(t,e+8,8),Fi(t,e+12,8)],Fi(t,e+16,8)]}function Fi(t,e,n){const i=ue.getLongAt(t,e),r=i>>>31?-1:1,s=(i&2130706432)>>>32-n,o=i&parseInt(d0("1",32-n),2);return r*n1(s.toString(2)+"."+f0(o.toString(2),32-n,"0"),2)}const kF={read:VF},jx="8BIM",Jx=2,ru=4,su=jx.length,zF=2,HF=su+Jx+zF+ru,GF=4096;function VF(t,e,n=Ds){if(!Array.isArray(t))return{};const i=new Uint8Array(t),r=Cl(i.buffer),s={remaining:Kx},o={};let a=0;for(let c=0;c<GF&&a+HF<=r.byteLength;c++){const l=Oe(r,a,su);a+=su;const u=ue.getShortAt(r,a);a+=Jx;const{tagName:f,tagNameSize:d}=XF(r,a);if(a+=d,a+ru>r.byteLength)break;const p=ue.getLongAt(r,a);a+=ru;const _=Math.min(p,r.byteLength-a);if(l===jx){const E=WF(u,f);if(!n.shouldParseTag("photoshop",E,u)){a+=_+_%2;continue}const m=Cl(r.buffer,a,_),h={id:u,value:sn(i,a,a+_)};if(Yo[u]){try{h.description=Yo[u].description(m,s)}catch{h.description="<no description formatter>"}Un(o,E,h)}else e&&(o[E]=h)}a+=_+_%2}return o}function WF(t,e){return Yo[t]?Ps(e||Yo[t].name):`undefined-${t}`}function XF(t,e){const[n,i]=l0(t,e);return{tagName:i,tagNameSize:1+n+(n%2===0?1:0)}}const YF={key:"photoshop",consumes:["photoshop"],emits:[],read:(t,e)=>Ot("photoshop",kF.read(t.value,e.options.includeUnknown,e.tagFilter),e),merge:t=>Ns(t,"photoshop","carriedPhotoshop"),fromExif:(t,e)=>t.ImageSourceData&&t.PhotoshopSettings&&Array.isArray(t.PhotoshopSettings.value)&&{kind:"photoshop",value:t.PhotoshopSettings.value,carried:e.carried},brand:kn},ZF={45056:{name:"MPFVersion",description:Vo},45057:"NumberOfImages",45058:"MPEntry",45059:"ImageUIDList",45060:"TotalFrames"},qF={read:jF},gr=16,$F=8,KF=256;function jF(t,e,n,i=!1,r=void 0,s=void 0,o=void 0){try{const a=Xt.getByteOrder(t,e),c=gx(t,e,a);if(c===void 0)return{};const l=Ur(t,dx,e,c,a,n,i,r,"mpf",s,JF());return QF(t,e,l,a,o)}catch{return{}}}function JF(){const t={};return t[dx]=ZF,t}function QF(t,e,n,i,r){if(!n.MPEntry)return n;const s=t.byteLength,o=t.byteOffset;let a=s*$F;const c=[],l=Math.min(Math.ceil(n.MPEntry.value.length/gr),KF);for(let u=0;u<l;u++){c[u]={};const f=is(n.MPEntry.value,u*gr,ue.getTypeSize("LONG"),i);c[u].ImageFlags=eO(f),c[u].ImageFormat=tO(f),c[u].ImageType=nO(f);const d=is(n.MPEntry.value,u*gr+4,ue.getTypeSize("LONG"),i);c[u].ImageSize={value:d,description:""+d};const p=iO(u,n.MPEntry,i,e);c[u].ImageOffset={value:p,description:""+p};const _=is(n.MPEntry.value,u*gr+12,ue.getTypeSize("SHORT"),i);c[u].DependentImage1EntryNumber={value:_,description:""+_};const E=is(n.MPEntry.value,u*gr+14,ue.getTypeSize("SHORT"),i);c[u].DependentImage2EntryNumber={value:E,description:""+E};const m=Math.min(Math.max(p,0),s),h=Math.min(m+Math.max(d,0),s,m+a);c[u].image=t.buffer.slice(o+m,o+h),a-=h-m,r&&u0(c[u],"base64",function(){return r(this.image)})}return n.Images=c,n}function is(t,e,n,i){if(i===Xt.LITTLE_ENDIAN){let s=0;for(let o=0;o<n;o++)s+=t[e+o]<<8*o;return s}let r=0;for(let s=0;s<n;s++)r+=t[e+s]<<8*(n-1-s);return r}function eO(t){const e=[t>>31&1,t>>30&1,t>>29&1],n=[];return e[0]&&n.push("Dependent Parent Image"),e[1]&&n.push("Dependent Child Image"),e[2]&&n.push("Representative Image"),{value:e,description:n.join(", ")||"None"}}function tO(t){const e=t>>24&7;return{value:e,description:e===0?"JPEG":"Unknown"}}function nO(t){const e=t&16777215;return{value:e,description:{196608:"Baseline MP Primary Image",65537:"Large Thumbnail (VGA equivalent)",65538:"Large Thumbnail (Full HD equivalent)",131073:"Multi-Frame Image (Panorama)",131074:"Multi-Frame Image (Disparity)",131075:"Multi-Frame Image (Multi-Angle)",0:"Undefined"}[e]||"Unknown"}}function iO(t,e,n,i){return rO(t)?0:is(e.value,t*gr+8,ue.getTypeSize("LONG"),n)+i}function rO(t){return t===0}const sO={key:"mpf",consumes:["mpf"],emits:[],read:(t,e)=>Ot("mpf",qF.read(e.dataView,t.dataOffset,e.options.includeUnknown,e.options.computed,e.tagFilter,Lr(e),e.getBase64Image),e),merge:()=>({slot:"mpf",mode:"assign"}),brand:kn},oO={1:{name:"CameraSettings",description:t=>t},4:{name:"ShotInfo",description:t=>t},149:"LensModel"},Qx=27,ev=22,aO={read:cO,SHOT_INFO_AUTO_ROTATE:Qx,CAMERA_SETTINGS_LENS_TYPE:ev};function cO(t,e,n,i,r,s=!1,o=void 0,a=void 0){let c=Ur(t,hx,e,e+n,i,r,s,o,"makerNotes",a,lO());return c.ShotInfo&&(c=Ft({},c,uO(c.ShotInfo.value)),delete c.ShotInfo),c.CameraSettings&&(c=Ft({},c,fO(c.CameraSettings.value)),delete c.CameraSettings),c}function lO(){const t={};return t[hx]=oO,t}function uO(t){const e={},n=t[Qx];return Number.isFinite(n)&&(e.AutoRotate={value:n,description:dO(n)}),e}function fO(t){const e={};if(!Array.isArray(t))return e;const n=t[ev];return Number.isFinite(n)&&(e.LensType={value:n,description:`${n}`}),e}function dO(t){return t===0?"None":t===1?"Rotate 90 CW":t===2?"Rotate 180":t===3?"Rotate 270 CW":"Unknown"}const hO={name:"canon",matches:t=>Array.isArray(t.make)&&t.make[0]==="Canon",read:(t,e)=>aO.read(t.tiffView,t.tiffHeaderOffset,t.makerNoteOffset,t.byteOrder,e.options.includeUnknown,e.options.computed,e.tagFilter,Lr(e))},pO={0:{name:"PentaxVersion",description:t=>t.join(".")},5:"PentaxModelID",555:"LevelInfo"},tv=8,nv=tv+2,iv={K3_III:78420},Li={CAMERA_ORIENTATION:1,ROLL_ANGLE:3,PITCH_ANGLE:5},mO=1,op=2,gO={read:_O,PENTAX_IFD_OFFSET:nv,MODEL_ID:iv,LIK3III:Li};function _O(t,e,n,i,r=!1,s=void 0,o=void 0){try{const a=Xt.getByteOrder(t,e+n+tv),c=e+n;let l=Ur(t,nf,c,c+nv,a,i,r,s,"makerNotes",o,xO());return vO(l)?(l=Ft({},l,SO(t,c+l.LevelInfo.__offset,EO(l.LevelInfo.value),a)),delete l.LevelInfo):l.LevelInfo&&delete l.LevelInfo.__offset,l}catch{return{}}}function xO(){const t={};return t[nf]=pO,t}function vO(t){return t.PentaxModelID&&t.PentaxModelID.value===iv.K3_III&&t.LevelInfo}function EO(t){return Array.isArray(t)&&typeof t[0]=="number"?t.length:0}function SO(t,e,n,i){const r={},s=i===Xt.LITTLE_ENDIAN;if(yc(Li.CAMERA_ORIENTATION,mO,n)){const o=t.getInt8(e+Li.CAMERA_ORIENTATION);r.CameraOrientation={value:o,description:MO(o)}}if(yc(Li.ROLL_ANGLE,op,n)){const o=t.getInt16(e+Li.ROLL_ANGLE,s);r.RollAngle={value:o,description:TO(o)}}if(yc(Li.PITCH_ANGLE,op,n)){const o=t.getInt16(e+Li.PITCH_ANGLE,s);r.PitchAngle={value:o,description:yO(o)}}return r}function yc(t,e,n){return t+e<=n}function MO(t){return t===0?"Horizontal (normal)":t===1?"Rotate 270 CW":t===2?"Rotate 180":t===3?"Rotate 90 CW":t===4?"Upwards":t===5?"Downwards":"Unknown"}function TO(t){return""+t*-.5}function yO(t){return""+t*-.5}const bO={name:"pentax",matches:t=>AO(t.bytes),read:(t,e)=>gO.read(t.tiffView,t.tiffHeaderOffset,t.makerNoteOffset,e.options.includeUnknown,e.options.computed,e.tagFilter,Lr(e))};function AO(t){const e="PENTAX ";return Array.isArray(t)&&t.length>e.length&&dt(t.slice(0,e.length))===e}const rv={key:"makerNotes",consumes:["makerNote"],emits:[],decoders:[hO,bO],read:(t,e)=>V0(t,e,rv.decoders),merge:t=>Ns(t,"makerNotes","carriedMakerNotes"),combine:hw,fromExif:W0,brand:kn},wO={key:"gps",consumes:[],emits:[],merge:()=>({slot:"gps",mode:"gps"}),mergeModes:{gps:RO},brand:kn};function RO(t,e,n){if(n.expanded&&n.tagFilter.shouldReturnGroup("gps")&&n.parsedGroups.exif){const i=CO(n.parsedGroups.exif);i&&(t.gps=n.deps.filterTagsForReturn("gps",i,n.tagFilter))}return t}function CO(t){let e;if(t.GPSLatitude&&t.GPSLatitudeRef){e=e||{};try{e.Latitude=$l(t.GPSLatitude.value),t.GPSLatitudeRef.value.join("")==="S"&&(e.Latitude=-e.Latitude)}catch{}}if(t.GPSLongitude&&t.GPSLongitudeRef){e=e||{};try{e.Longitude=$l(t.GPSLongitude.value),t.GPSLongitudeRef.value.join("")==="W"&&(e.Longitude=-e.Longitude)}catch{}}if(t.GPSAltitude&&t.GPSAltitudeRef){e=e||{};try{e.Altitude=t.GPSAltitude.value[0]/t.GPSAltitude.value[1],t.GPSAltitudeRef.value===1&&(e.Altitude=-e.Altitude)}catch{}}return e}const bc={INCHES:2,CENTIMETERS:3,MILLIMETERS:4},Ac={INCHES_TO_MM:25.4,CM_TO_MM:10,MM_TO_MM:1},IO={get:PO};function PO(t,e){const n={};let i=!1;const r=wc($n(t,"exif","FocalLength",e)),s=wc($n(t,"exif","FocalPlaneXResolution",e)),o=wc($n(t,"exif","FocalPlaneYResolution",e)),a=Zt($n(t,"exif","FocalPlaneResolutionUnit",e)),c=LO(t,e),l=Zt($n(t,"exif","FocalLengthIn35mmFilm",e))||DO(s,o,a,c.width,c.height,r);l&&(n.FocalLength35efl={value:l,description:ex(l)},i=!0);const u=NO(r,l);u&&(n.ScaleFactorTo35mmEquivalent=u,i=!0);const f=FO(l);if(f&&(n.FieldOfView=f,i=!0),i)return n}function $n(t,e,n,i){if(i&&t[e]&&t[e][n])return t[e][n].value;if(!i&&t[n])return t[n].value}function wc(t){if(typeof t=="string"){const e=t.split("/",3);return e.length===1?Zt(t):ap(e)}return Array.isArray(t)?ap(t):Zt(t)}function Zt(t){let e;return typeof t=="number"?e=t:typeof t=="string"&&(e=Number(t)),e>0&&e<1/0?e:void 0}function ap(t){if(t.length===2)return Zt(Zt(t[0])/Zt(t[1]))}function LO(t,e){const n=Zt($n(t,"exif","PixelXDimension",e)),i=Zt($n(t,"exif","PixelYDimension",e));return n&&i?{width:n,height:i}:{width:Zt($n(t,"file","Image Width",e)),height:Zt($n(t,"file","Image Height",e))}}function DO(t,e,n,i,r,s){if(t&&e&&n&&i&&r&&s){let a;switch(n){case bc.INCHES:a=Ac.INCHES_TO_MM;break;case bc.CENTIMETERS:a=Ac.CM_TO_MM;break;case bc.MILLIMETERS:a=Ac.MM_TO_MM;break;default:return}const c=t/a,l=e/a,u=i/c,f=r/l,d=Math.sqrt(u**2+f**2),p=s*(43.27/d);return Zt(p)}}function NO(t,e){if(t&&e){const n=Zt(e/t);if(n)return{value:n,description:n.toFixed(1)}}}function FO(t){if(t){const n=Zt(2*Math.atan(36/(2*t))*(180/Math.PI));if(n)return{value:n,description:n.toFixed(1)+" deg"}}}const OO={key:"composite",consumes:[],emits:[],merge:()=>({slot:"composite",mode:"composite"}),mergeModes:{composite:UO},brand:kn};function UO(t,e,n){if(!n.tagFilter.shouldReturnGroup("composite"))return t;let i=t,r=n.expanded;n.compositeInput?i=n.compositeInput:n.tagFilter.isActive&&(i={exif:n.parsedGroups.exif,file:n.parsedGroups.file},r=!0);const s=IO.get(i,r);if(!s)return t;const o=n.deps.filterTagsForReturn("composite",s,n.tagFilter);return $0(t,"composite",o,n.expanded,n.deps)}const BO=[6,7,99],cp={get:kO};function kO(t,e,n,i){if(zO(e)){const r=n+e.JPEGInterchangeFormat.value,s=e.JPEGInterchangeFormatLength.value;if(HO(t,r,s)){e.type="image/jpeg";const o=t.byteOffset;e.image=t.buffer.slice(o+r,o+r+s),i&&u0(e,"base64",function(){return i(this.image)})}}return e}function zO(t){return t&&(t.Compression===void 0||BO.includes(t.Compression.value))&&t.JPEGInterchangeFormat&&t.JPEGInterchangeFormat.value&&t.JPEGInterchangeFormatLength&&t.JPEGInterchangeFormatLength.value}function HO(t,e,n){return lp(e)&&lp(n)&&e+n<=t.byteLength}function lp(t){return typeof t=="number"&&t>=0&&t%1===0}const GO=2,VO=64*1024,WO={key:"thumbnail",consumes:["thumbnail"],emits:[],read:XO,merge:t=>({slot:"thumbnail",mode:"thumbnailCandidate",rank:t.rank}),mergeModes:{thumbnailCandidate:ZO,thumbnail:qO},fromExif:KO,brand:kn};function XO(t,e){if(!e.tagFilter.shouldReturnTag("thumbnail","Thumbnail"))return;const n=da("thumbnail",t.ifd1Tags,e.tagFilter);if(t.rank==="main")return{tags:cp.get(t.dataView,n,t.tiffHeaderOffset,e.getBase64Image)};if(e.hasEmbeddedThumbnailImage)return;const i=n.JPEGInterchangeFormatLength,r=e.copiedThumbnailSize||0,s=G0(e.dataView,GO,VO)-r;if(!(i&&YO(i.value)&&i.value<=s))return;const o=cp.get(t.dataView,n,t.tiffHeaderOffset,e.getBase64Image);if(o.image)return e.copiedThumbnailSize=r+i.value,t.decompressed||(e.hasEmbeddedThumbnailImage=!0),{tags:o}}function YO(t){return typeof t=="number"&&t>=0&&t%1===0}function ZO(t,e,n){return n.thumbnails.push({rank:e.rank,thumbnail:e.tags}),t}function qO(t,e,n){Xu(t),delete t.thumbnail;const i=sv(n);return i&&(t.thumbnail=i),t}function sv(t){if(!(!t.tagFilter.shouldReturnGroup("thumbnail")||!t.tagFilter.shouldReturnTag("thumbnail","Thumbnail")))return $O(t.thumbnails)}function $O(t){const e=t.filter(i=>i.rank==="main")[0];if(e&&up(e.thumbnail))return e.thumbnail;const n=t.filter(i=>i.rank==="embedded"&&up(i.thumbnail))[0];return n?n.thumbnail:e?e.thumbnail:void 0}function up(t){return!!t&&!!t.image}function KO(t,e){return e.thumbnailIfdTags&&{kind:"thumbnail",dataView:e.view,tiffHeaderOffset:e.tiffHeaderOffset,ifd1Tags:e.thumbnailIfdTags,decompressed:e.decompressed,rank:e.carried==="main"?"main":"embedded"}}const fp={load:jO,loadView:ov,errors:J1};let hr,dp;function jO(t,e={}){if(e.length==="auto")return O1(e),U1(Rc)(t,e);if(Il(t)||E0(t)){Bu();const n=Il(t)?v1:T1,i=Ft({},e,{async:!0});return n(t,i).then(r=>Rc(r,i))}return Rc(t,e)}function Rc(t,e){return ov(jA(t),e)}function ov(t,e={}){return Jw(JO(),t,e,eU())}function JO(){const t=tU(),e=nU(t);return(hr===void 0||!iU(e,dp))&&(hr=_w.createComposition(t),hr.isHiddenInSyncMode=ww(t.formats),hr.mergeModes=Ft(Object.create(null),hr.mergeModes,{thumbnail:QO}),dp=e),hr}function QO(t,e,n){Xu(t);const i=sv(n);return i&&(t.Thumbnail=i,Object.prototype.hasOwnProperty.call(t,"thumbnail")||Object.defineProperty(t,"thumbnail",{value:i,writable:!0,configurable:!0})),t}function eU(){return{getDomParser:Y1.get,getBase64Image:G1,createTagFilter:rw}}function tU(){return{formats:[hR,{header:bC,readers:[AC,wC]},{header:wI,readers:[RI,CI,II]},jP,n2,x2,I2,H2,q2].filter(Boolean),groups:[ZD,X3,tF,LF,sO,YF,rv,WO,wO,OO].filter(Boolean)}}function nU({formats:t,groups:e}){let n=[];for(let i=0;i<t.length;i++)n=n.concat([t[i].header],t[i].readers);return n.concat(e)}function iU(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}async function rU(t){var c,l,u,f;const e=typeof t=="string"?await fp.load(await(await fetch(t)).arrayBuffer()):await fp.load(t);let n=null,i=null,r=null;e.GPSLatitude&&e.GPSLongitude&&(n=e.GPSLatitude.description,i=e.GPSLongitude.description,r=e.GPSAltitude?e.GPSAltitude.description:0);let s=0,o=0,a=0;return e.PoseHeadingDegrees?(s=parseFloat(e.PoseHeadingDegrees.description??"0"),o=parseFloat(((c=e.PosePitchDegrees)==null?void 0:c.description)??"0"),a=parseFloat(((l=e.PoseRollDegrees)==null?void 0:l.description)??"0")):e.GimbalYawDegree&&(s=parseFloat(e.GimbalYawDegree.description??"0"),o=parseFloat(((u=e.GimbalPitchDegree)==null?void 0:u.description)??"0"),a=parseFloat(((f=e.GimbalRollDegree)==null?void 0:f.description)??"0")),{location:{latitude:n,longitude:i,altitude:r},orientation:{heading:s,pitch:o,roll:a}}}const sU=pv({__name:"PanoramicPhoto",props:{panorama:{},autoHeading:{type:Boolean,default:!0},options:{default:()=>({})}},emits:["ready","position-updated","zoom-updated"],setup(t,{emit:e}){const n=t,i=e,r=vv();let s=null,o=null;mv(async()=>{const l=a(n.panorama),u=n.autoHeading?await c(n.panorama):{};s=new KA({container:r.value,panorama:l,...u,...n.options}),s.addEventListener("position-updated",f=>{i("position-updated",f.position)}),s.addEventListener("zoom-updated",()=>{i("zoom-updated",Math.round(s.state.vFov))}),i("ready",s)}),gv(()=>{s==null||s.destroy(),s=null,o&&(URL.revokeObjectURL(o),o=null)});function a(l){return typeof l=="string"?l:(o=URL.createObjectURL(l),o)}async function c(l){return{defaultYaw:0,sphereCorrection:{pan:(await rU(l)).orientation.heading*Math.PI/180,tilt:0,roll:0}}}return(l,u)=>(_v(),xv("div",{ref_key:"containerRef",ref:r,class:"panoramic-photo"},null,512))}}),cU=Ev(sU,[["__scopeId","data-v-53cbe064"]]);export{cU as PanoramicPhoto,rU as getPanoramaMetadata};
