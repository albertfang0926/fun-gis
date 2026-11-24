import{d as m0,o as g0,a as _0,b as x0,c as v0,r as E0,_ as S0}from"./index-DQgZ6XKd.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="185",M0=0,du=1,T0=2,Ys=1,b0=2,Or=3,_i=0,Wt=1,Vn=2,Yn=0,ur=1,hu=2,pu=3,mu=4,y0=5,Ci=100,A0=101,w0=102,C0=103,R0=104,I0=200,P0=201,L0=202,D0=203,Ga=204,Ha=205,N0=206,U0=207,F0=208,O0=209,B0=210,z0=211,G0=212,H0=213,k0=214,ka=0,Va=1,Wa=2,mr=3,Xa=4,Ya=5,Za=6,qa=7,Fd=0,V0=1,W0=2,Pn=0,dl=1,Od=2,Bd=3,zd=4,Gd=5,Hd=6,kd=7,Vd=300,Li=301,gr=302,Yo=303,Zo=304,yo=306,$a=1e3,Wn=1001,Ka=1002,Dt=1003,X0=1004,_s=1005,Nt=1006,qo=1007,fi=1008,an=1009,Wd=1010,Xd=1011,ts=1012,hl=1013,Dn=1014,Cn=1015,Kn=1016,pl=1017,ml=1018,ns=1020,Yd=35902,Zd=35899,qd=1021,$d=1022,mn=1023,Jn=1026,Pi=1027,Kd=1028,gl=1029,Di=1030,_l=1031,xl=1033,Zs=33776,qs=33777,$s=33778,Ks=33779,Ja=35840,ja=35841,Qa=35842,ec=35843,tc=36196,nc=37492,ic=37496,rc=37488,sc=37489,oo=37490,oc=37491,ac=37808,cc=37809,lc=37810,uc=37811,fc=37812,dc=37813,hc=37814,pc=37815,mc=37816,gc=37817,_c=37818,xc=37819,vc=37820,Ec=37821,Sc=36492,Mc=36494,Tc=36495,bc=36283,yc=36284,ao=36285,Ac=36286,Y0=3200,gu=0,Z0=1,li="",sn="srgb",is="srgb-linear",co="linear",Qe="srgb",Gi=7680,_u=519,q0=512,$0=513,K0=514,vl=515,J0=516,j0=517,El=518,Q0=519,xu=35044,vu="300 es",Rn=2e3,lo=2001;function e_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function t_(){const t=rs("canvas");return t.style.display="block",t}const Eu={};function Su(...t){const e="THREE."+t.shift();console.log(e,...t)}function Jd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=Jd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ve(...t){t=Jd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function fr(...t){const e=t.join(" ");e in Eu||(Eu[e]=!0,Ie(...t))}function n_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const i_={[ka]:Va,[Wa]:Za,[Xa]:qa,[mr]:Ya,[Va]:ka,[Za]:Wa,[qa]:Xa,[Ya]:mr};class Ui{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mu=1234567;const Vr=Math.PI/180,ss=180/Math.PI;function Sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function Sl(t,e){return(t%e+e)%e}function r_(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function s_(t,e,n){return t!==e?(n-t)/(e-t):0}function Wr(t,e,n){return(1-n)*t+n*e}function o_(t,e,n,i){return Wr(t,e,1-Math.exp(-n*i))}function a_(t,e=1){return e-Math.abs(Sl(t,e*2)-e)}function c_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function l_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function u_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function f_(t,e){return t+Math.random()*(e-t)}function d_(t){return t*(.5-Math.random())}function h_(t){t!==void 0&&(Mu=t);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p_(t){return t*Vr}function m_(t){return t*ss}function g_(t){return(t&t-1)===0&&t!==0}function __(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function x_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function v_(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ze={DEG2RAD:Vr,RAD2DEG:ss,generateUUID:Sr,clamp:He,euclideanModulo:Sl,mapLinear:r_,inverseLerp:s_,lerp:Wr,damp:o_,pingpong:a_,smoothstep:c_,smootherstep:l_,randInt:u_,randFloat:f_,randFloatSpread:d_,seededRandom:h_,degToRad:p_,radToDeg:m_,isPowerOfTwo:g_,ceilPowerOfTwo:__,floorPowerOfTwo:x_,setQuaternionFromProperEuler:v_,normalize:Gt,denormalize:rr},jl=class jl{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;let We=jl;class Fi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],E=s[o+3];if(d!==E||l!==f||c!==h||u!==g){let m=l*f+c*h+u*g+d*E;m<0&&(f=-f,h=-h,g=-g,E=-E,m=-m);let p=1-a;if(m<.9995){const A=Math.acos(m),w=Math.sin(A);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w,l=l*p+f*a,c=c*p+h*a,u=u*p+g*a,d=d*p+E*a}else{l=l*p+f*a,c=c*p+h*a,u=u*p+g*a,d=d*p+E*a;const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-a*h,e[n+2]=c*g+u*h+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ql=class Ql{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ql.prototype.isVector3=!0;let O=Ql;const $o=new O,Tu=new Fi,eu=class eu{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],E=r[0],m=r[3],p=r[6],A=r[1],w=r[4],S=r[7],y=r[2],T=r[5],C=r[8];return s[0]=o*E+a*A+l*y,s[3]=o*m+a*w+l*T,s[6]=o*p+a*S+l*C,s[1]=c*E+u*A+d*y,s[4]=c*m+u*w+d*T,s[7]=c*p+u*S+d*C,s[2]=f*E+h*A+g*y,s[5]=f*m+h*w+g*T,s[8]=f*p+h*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=d*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=f*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=h*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ko.makeScale(e,n)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ko.makeRotation(-e)),this}translate(e,n){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ko.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eu.prototype.isMatrix3=!0;let Ne=eu;const Ko=new Ne,bu=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const t={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[is]:{primaries:e,whitePoint:i,transfer:co,toXYZ:bu,fromXYZ:yu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:bu,fromXYZ:yu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),t}const Ge=E_();function Zn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hi;class S_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=rs("canvas")),Hi.width=e.width,Hi.height=e.height;const r=Hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zn(n[i]/255)*255):n[i]=Zn(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jo(r[o].image)):s.push(Jo(r[o]))}else s=Jo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?S_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let T_=0;const jo=new O;class Bt extends Ui{constructor(e=Bt.DEFAULT_IMAGE,n=Bt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Nt,o=fi,a=mn,l=an,c=Bt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Sr(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Vd;Bt.DEFAULT_ANISOTROPY=1;const tu=class tu{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,S=(h+1)/2,y=(p+1)/2,T=(u+f)/4,C=(d+E)/4,x=(g+m)/4;return w>S&&w>y?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=C/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=C/s,r=x/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-E)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tu.prototype.isVector4=!0;let ft=tu;class b_ extends Ui{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Bt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ml(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends b_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jd extends Bt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y_ extends Bt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bo=class bo{constructor(e,n,i,r,s,o,a,l,c,u,d,f,h,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,h,g,E,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,h,g,E,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,E=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-E*c,n[9]=-a*l,n[2]=E-f*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,E=c*d;n[0]=f+E*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=E+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,E=c*d;n[0]=f-E*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=E-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,E=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+E,n[1]=l*d,n[5]=E*c+f,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=E-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-E*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+E,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=E*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,w_)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ii.crossVectors(i,Zt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ii.crossVectors(i,Zt)),ii.normalize(),xs.crossVectors(Zt,ii),r[0]=ii.x,r[4]=xs.x,r[8]=Zt.x,r[1]=ii.y,r[5]=xs.y,r[9]=Zt.y,r[2]=ii.z,r[6]=xs.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],E=i[6],m=i[10],p=i[14],A=i[3],w=i[7],S=i[11],y=i[15],T=r[0],C=r[4],x=r[8],b=r[12],L=r[1],R=r[5],F=r[9],Z=r[13],q=r[2],G=r[6],Y=r[10],V=r[14],J=r[3],te=r[7],re=r[11],he=r[15];return s[0]=o*T+a*L+l*q+c*J,s[4]=o*C+a*R+l*G+c*te,s[8]=o*x+a*F+l*Y+c*re,s[12]=o*b+a*Z+l*V+c*he,s[1]=u*T+d*L+f*q+h*J,s[5]=u*C+d*R+f*G+h*te,s[9]=u*x+d*F+f*Y+h*re,s[13]=u*b+d*Z+f*V+h*he,s[2]=g*T+E*L+m*q+p*J,s[6]=g*C+E*R+m*G+p*te,s[10]=g*x+E*F+m*Y+p*re,s[14]=g*b+E*Z+m*V+p*he,s[3]=A*T+w*L+S*q+y*J,s[7]=A*C+w*R+S*G+y*te,s[11]=A*x+w*F+S*Y+y*re,s[15]=A*b+w*Z+S*V+y*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],E=e[7],m=e[11],p=e[15],A=l*h-c*f,w=a*h-c*d,S=a*f-l*d,y=o*h-c*u,T=o*f-l*u,C=o*d-a*u;return n*(E*A-m*w+p*S)-i*(g*A-m*y+p*T)+r*(g*w-E*y+p*C)-s*(g*S-E*T+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],E=e[13],m=e[14],p=e[15],A=n*a-i*o,w=n*l-r*o,S=n*c-s*o,y=i*l-r*a,T=i*c-s*a,C=r*c-s*l,x=u*E-d*g,b=u*m-f*g,L=u*p-h*g,R=d*m-f*E,F=d*p-h*E,Z=f*p-h*m,q=A*Z-w*F+S*R+y*L-T*b+C*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/q;return e[0]=(a*Z-l*F+c*R)*G,e[1]=(r*F-i*Z-s*R)*G,e[2]=(E*C-m*T+p*y)*G,e[3]=(f*T-d*C-h*y)*G,e[4]=(l*L-o*Z-c*b)*G,e[5]=(n*Z-r*L+s*b)*G,e[6]=(m*S-g*C-p*w)*G,e[7]=(u*C-f*S+h*w)*G,e[8]=(o*F-a*L+c*x)*G,e[9]=(i*L-n*F-s*x)*G,e[10]=(g*T-E*S+p*A)*G,e[11]=(d*S-u*T-h*A)*G,e[12]=(a*b-o*R-l*x)*G,e[13]=(n*R-i*b+r*x)*G,e[14]=(E*w-g*y-m*A)*G,e[15]=(u*y-d*w+f*A)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,E=o*u,m=o*d,p=a*d,A=l*c,w=l*u,S=l*d,y=i.x,T=i.y,C=i.z;return r[0]=(1-(E+p))*y,r[1]=(h+S)*y,r[2]=(g-w)*y,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(f+p))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(g+w)*C,r[9]=(m-A)*C,r[10]=(1-(f+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),l=ki.set(r[8],r[9],r[10]).length();s<0&&(o=-o),un.copy(this);const c=1/o,u=1/a,d=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,n.setFromRotationMatrix(un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Rn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,E;if(l)g=s/(o-s),E=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===lo)g=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Rn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,E;if(l)g=1/(o-s),E=o/(o-s);else if(a===Rn)g=-2/(o-s),E=-(o+s)/(o-s);else if(a===lo)g=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};bo.prototype.isMatrix4=!0;let dt=bo;const ki=new O,un=new dt,A_=new O(0,0,0),w_=new O(1,1,1),ii=new O,xs=new O,Zt=new O,Au=new dt,wu=new Fi;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const Cu=new O,Vi=new Fi,Un=new dt,vs=new O,wr=new O,R_=new O,I_=new Fi,Ru=new O(1,0,0),Iu=new O(0,1,0),Pu=new O(0,0,1),Lu={type:"added"},P_={type:"removed"},Wi={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Jt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new O,n=new xi,i=new Fi,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ne}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vi.setFromAxisAngle(e,n),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,n){return Vi.setFromAxisAngle(e,n),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,n){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vs.copy(e):vs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(wr,vs,this.up):Un.lookAt(vs,wr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P_),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,R_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new O(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Es={h:0,s:0,l:0};function ta(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ge.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ge.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ge.workingColorSpace){if(e=Sl(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,n=sn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=sn){const i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ge.workingToColorSpace(Ot.copy(this),e),Math.round(He(Ot.r*255,0,255))*65536+Math.round(He(Ot.g*255,0,255))*256+Math.round(He(Ot.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ge.workingColorSpace){Ge.workingToColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ge.workingColorSpace){return Ge.workingToColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=sn){Ge.workingToColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+n,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ri),e.getHSL(Es);const i=Wr(ri.h,Es.h,n),r=Wr(ri.s,Es.s,n),s=Wr(ri.l,Es.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new $e;$e.NAMES=Qd;class Du extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const fn=new O,Fn=new O,na=new O,On=new O,Xi=new O,Yi=new O,Nu=new O,ia=new O,ra=new O,sa=new O,oa=new ft,aa=new ft,ca=new ft;class pn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),fn.subVectors(e,n),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){fn.subVectors(r,n),Fn.subVectors(i,n),na.subVectors(e,n);const o=fn.dot(fn),a=fn.dot(Fn),l=fn.dot(na),c=Fn.dot(Fn),u=Fn.dot(na),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,i),ca.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(oa,s.x),o.addScaledVector(aa,s.y),o.addScaledVector(ca,s.z),o}static isFrontFacing(e,n,i,r){return fn.subVectors(i,n),Fn.subVectors(e,n),fn.cross(Fn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),Yi.subVectors(s,i),ia.subVectors(e,i);const l=Xi.dot(ia),c=Yi.dot(ia);if(l<=0&&c<=0)return n.copy(i);ra.subVectors(e,r);const u=Xi.dot(ra),d=Yi.dot(ra);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Xi,o);sa.subVectors(e,s);const h=Xi.dot(sa),g=Yi.dot(sa);if(g>=0&&h<=g)return n.copy(s);const E=h*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Yi,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Nu.subVectors(s,r),a=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(Nu,a);const p=1/(m+E+f);return o=E*p,a=f*p,n.copy(i).addScaledVector(Xi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ms.subVectors(this.max,Cr),Zi.subVectors(e.a,Cr),qi.subVectors(e.b,Cr),$i.subVectors(e.c,Cr),si.subVectors(qi,Zi),oi.subVectors($i,qi),Mi.subVectors(Zi,$i);let n=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,si.z,0,-si.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!la(n,Zi,qi,$i,Ms)||(n=[1,0,0,0,1,0,0,0,1],!la(n,Zi,qi,$i,Ms))?!1:(Ts.crossVectors(si,oi),n=[Ts.x,Ts.y,Ts.z],la(n,Zi,qi,$i,Ms))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new O,new O,new O,new O,new O,new O,new O,new O],dn=new O,Ss=new Mr,Zi=new O,qi=new O,$i=new O,si=new O,oi=new O,Mi=new O,Cr=new O,Ms=new O,Ts=new O,Ti=new O;function la(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ti.fromArray(t,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=n.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xt=new O,bs=new We;let D_=0;class Ln extends Ui{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bs.fromBufferAttribute(this,n),bs.applyMatrix3(e),this.setXY(n,bs.x,bs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class eh extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class th extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}const N_=new Mr,Rr=new O,ua=new O;class bl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):N_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const n=Rr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(ua)),this.expandByPoint(Rr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let U_=0;const nn=new dt,fa=new Jt,Ki=new O,qt=new Mr,Ir=new Mr,yt=new O;class Nn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?th:eh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(qt.min,Ir.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Ir.max),qt.expandByPoint(yt)):(qt.expandByPoint(Ir.min),qt.expandByPoint(Ir.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),yt.add(Ki)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;const c=new O,u=new O,d=new O,f=new We,h=new We,g=new We,E=new O,m=new O;function p(x,b,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(E),a[b].add(E),a[L].add(E),l[x].add(m),l[b].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,b=A.length;x<b;++x){const L=A[x],R=L.start,F=L.count;for(let Z=R,q=R+F;Z<q;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new O,S=new O,y=new O,T=new O;function C(x){y.fromBufferAttribute(r,x),T.copy(y);const b=a[x];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),S.crossVectors(T,b);const R=S.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,R)}for(let x=0,b=A.length;x<b;++x){const L=A[x],R=L.start,F=L.count;for(let Z=R,q=R+F;Z<q;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),E=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?h=l[E]*a.data.stride+a.offset:h=l[E]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Ln(f,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let F_=0;class Ao extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=ur,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new O,da=new O,ys=new O,ai=new O,ha=new O,As=new O,pa=new O;class nh{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){da.copy(e).add(n).multiplyScalar(.5),ys.copy(n).sub(e).normalize(),ai.copy(this.origin).sub(da);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ys),a=ai.dot(this.direction),l=-ai.dot(ys),c=ai.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const E=1/u;d*=E,f*=E,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(da).addScaledVector(ys,f),h}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,s){ha.subVectors(n,e),As.subVectors(i,e),pa.crossVectors(ha,As);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(As.crossVectors(ai,As));if(l<0)return null;const c=a*this.direction.dot(ha.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class us extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uu=new dt,bi=new nh,ws=new bl,Fu=new O,Cs=new O,Rs=new O,Is=new O,ma=new O,Ps=new O,Ou=new O,Ls=new O;class Qt extends Jt{constructor(e=new Nn,n=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ma.fromBufferAttribute(d,e),o?Ps.addScaledVector(ma,u):Ps.addScaledVector(ma.sub(n),u))}n.add(Ps)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(ws.containsPoint(bi.origin)===!1&&(bi.intersectSphere(ws,Fu)===null||bi.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,bi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=f.length;g<E;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,y=w;S<y;S+=3){const T=a.getX(S),C=a.getX(S+1),x=a.getX(S+2);r=Ds(this,p,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),E=Math.min(a.count,h.start+h.count);for(let m=g,p=E;m<p;m+=3){const A=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=Ds(this,o,e,i,c,u,d,A,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=f.length;g<E;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,y=w;S<y;S+=3){const T=S,C=S+1,x=S+2;r=Ds(this,p,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let m=g,p=E;m<p;m+=3){const A=m,w=m+1,S=m+2;r=Ds(this,o,e,i,c,u,d,A,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function O_(t,e,n,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ls);return c<n.near||c>n.far?null:{distance:c,point:Ls.clone(),object:t}}function Ds(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Cs),t.getVertexPosition(l,Rs),t.getVertexPosition(c,Is);const u=O_(t,e,n,i,Cs,Rs,Is,Ou);if(u){const d=new O;pn.getBarycoord(Ou,Cs,Rs,Is,d),r&&(u.uv=pn.getInterpolatedAttribute(r,a,l,c,d,new We)),s&&(u.uv1=pn.getInterpolatedAttribute(s,a,l,c,d,new We)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};pn.getNormal(Cs,Rs,Is,f.normal),u.face=f,u.barycoord=d}return u}class B_ extends Bt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Dt,u=Dt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ga=new O,z_=new O,G_=new Ne;class wi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ga.subVectors(i,n).cross(z_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ga),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||G_.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new bl,H_=new We(.5,.5),Ns=new O;class yl{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Rn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],E=s[9],m=s[10],p=s[11],A=s[12],w=s[13],S=s[14],y=s[15];if(r[0].setComponents(c-o,h-u,p-g,y-A).normalize(),r[1].setComponents(c+o,h+u,p+g,y+A).normalize(),r[2].setComponents(c+a,h+d,p+E,y+w).normalize(),r[3].setComponents(c-a,h-d,p-E,y-w).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,h-f,p-m,y-S).normalize();else if(r[4].setComponents(c-l,h-f,p-m,y-S).normalize(),n===Rn)r[5].setComponents(c+l,h+f,p+m,y+S).normalize();else if(n===lo)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const n=H_.distanceTo(e.center);return yi.radius=.7071067811865476+n,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Bt{constructor(e=[],n=Li,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _r extends Bt{constructor(e,n,i=Dn,r,s,o,a=Dt,l=Dt,c,u=Jn,d=1){if(u!==Jn&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class k_ extends _r{constructor(e,n=Dn,i=Li,r,s,o=Dt,a=Dt,l,c=Jn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function g(E,m,p,A,w,S,y,T,C,x,b){const L=S/C,R=y/x,F=S/2,Z=y/2,q=T/2,G=C+1,Y=x+1;let V=0,J=0;const te=new O;for(let re=0;re<Y;re++){const he=re*R-Z;for(let ve=0;ve<G;ve++){const ke=ve*L-F;te[E]=ke*A,te[m]=he*w,te[p]=q,c.push(te.x,te.y,te.z),te[E]=0,te[m]=0,te[p]=T>0?1:-1,u.push(te.x,te.y,te.z),d.push(ve/C),d.push(1-re/x),V+=1}}for(let re=0;re<x;re++)for(let he=0;he<C;he++){const ve=f+he+G*re,ke=f+he+G*(re+1),at=f+(he+1)+G*(re+1),ge=f+(he+1)+G*re;l.push(ve,ke,ge),l.push(ke,at,ge),J+=6}a.addGroup(h,J,b),h+=J,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wo extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,h=[],g=[],E=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let w=0;w<c;w++){const S=w*d-s;g.push(S,-A,0),E.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const w=A+c*p,S=A+c*(p+1),y=A+1+c*(p+1),T=A+1+c*p;h.push(w,S,T),h.push(S,y,T)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class xr extends Nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,f=new O,h=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){const A=[],w=p/i,S=o+w*a,y=e*Math.cos(S),T=Math.sqrt(e*e-y*y);let C=0;p===0&&o===0?C=.5/n:p===i&&l===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){const b=x/n,L=r+b*s;d.x=-T*Math.cos(L),d.y=y,d.z=T*Math.sin(L),g.push(d.x,d.y,d.z),f.copy(d).normalize(),E.push(f.x,f.y,f.z),m.push(b+C,1-w),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<n;A++){const w=u[p][A+1],S=u[p][A],y=u[p+1][A],T=u[p+1][A+1];(p!==0||o>0)&&h.push(w,S,T),(p!==i-1||l<Math.PI)&&h.push(S,y,T)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Bu(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Bu(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=vr(t[n]);for(const r in i)e[r]=i[r]}return e}function Bu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function V_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const W_={clone:vr,merge:Ht};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=Y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Z_ extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q_ extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(zu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!zu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function zu(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class K_{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const J_=new K_;let Al=class{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class j_ extends Error{constructor(e,n){super(e),this.response=n}}class Q_ extends Al{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Gn[e]!==void 0){Gn[e].push({onLoad:n,onProgress:i,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let E=0;const m=new ReadableStream({start(p){A();function A(){d.read().then(({done:w,value:S})=>{if(w)p.close();else{E+=S.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:E,total:h});for(let T=0,C=u.length;T<C;T++){const x=u[T];x.onProgress&&x.onProgress(y)}p.enqueue(S),A()}},w=>{p.error(w)})}}});return new Response(m)}else throw new j_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{hi.add(`file:${e}`,c);const u=Gn[e];delete Gn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ji=new WeakMap;class ex extends Al{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let d=Ji.get(o);d===void 0&&(d=[],Ji.set(o,d)),d.push({onLoad:n,onError:r})}return o}const a=rs("img");function l(){u(),n&&n(this);const d=Ji.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Ji.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),hi.remove(`image:${e}`);const f=Ji.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}Ji.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}const Us=new O,Fs=new Fi,Mn=new O;class oh extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Us,Fs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Fs,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Us,Fs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Fs,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new O,Gu=new We,Hu=new We;class on extends oh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,n){return this.getViewBounds(e,Gu,Hu),n.subVectors(Hu,Gu)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ah extends oh{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ji=-90,Qi=1;class tx extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ji,Qi,e,n);r.layers=this.layers,this.add(r);const s=new on(ji,Qi,e,n);s.layers=this.layers,this.add(s);const o=new on(ji,Qi,e,n);o.layers=this.layers,this.add(o);const a=new on(ji,Qi,e,n);a.layers=this.layers,this.add(a);const l=new on(ji,Qi,e,n);l.layers=this.layers,this.add(l);const c=new on(ji,Qi,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ku=new dt;class ix{constructor(e,n,i=0,r=1/0){this.ray=new nh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ve("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(e,n=!0,i=[]){return wc(e,this,i,n),i.sort(Vu),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wc(e[r],this,i,n);return i.sort(Vu),i}}function Vu(t,e){return t.distance-e.distance}function wc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)wc(s[o],e,n,!0)}}const nu=class nu{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};nu.prototype.isMatrix2=!0;let Wu=nu;function Xu(t,e,n,i){const r=rx(i);switch(n){case qd:return t*e;case Kd:return t*e/r.components*r.byteLength;case gl:return t*e/r.components*r.byteLength;case Di:return t*e*2/r.components*r.byteLength;case _l:return t*e*2/r.components*r.byteLength;case $d:return t*e*3/r.components*r.byteLength;case mn:return t*e*4/r.components*r.byteLength;case xl:return t*e*4/r.components*r.byteLength;case Zs:case qs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ks:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ja:case ec:return Math.max(t,16)*Math.max(e,8)/4;case Ja:case Qa:return Math.max(t,8)*Math.max(e,8)/2;case tc:case nc:case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case oo:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Mc:case Tc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bc:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ao:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rx(t){switch(t){case an:case Wd:return{byteLength:1,components:1};case ts:case Xd:case Kn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Dn:case hl:case Cn:return{byteLength:4,components:1};case Yd:case Zd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ch(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],E=d[h];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++f,d[f]=E)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const E=d[h];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
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
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
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
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
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
#endif`,rv=`uniform sampler2D dfgLUT;
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
}`,sv=`
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gv=`#if defined( USE_POINTS_UV )
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
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
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
#endif`,Iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xv=`float getShadowMask() {
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
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
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
}`,hE=`#if DEPTH_PACKING == 3200
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
}`,pE=`#define DISTANCE
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
}`,mE=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,vE=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,yE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,wE=`#define NORMAL
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
}`,CE=`#define PHONG
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
}`,RE=`#define PHONG
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
}`,IE=`#define STANDARD
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
}`,PE=`#define STANDARD
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
}`,LE=`#define TOON
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
}`,DE=`#define TOON
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
}`,NE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,OE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:cx,alphamap_pars_fragment:lx,alphatest_fragment:ux,alphatest_pars_fragment:fx,aomap_fragment:dx,aomap_pars_fragment:hx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:_x,bsdfs:xx,iridescence_fragment:vx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:bx,color_fragment:yx,color_pars_fragment:Ax,color_pars_vertex:wx,color_vertex:Cx,common:Rx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:Bx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Gx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:jx,envmap_vertex:kx,fog_vertex:Vx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:Yx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:qx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Kx,lights_pars_begin:Jx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:rv,lights_fragment_begin:sv,lights_fragment_maps:ov,lights_fragment_end:av,lightprobes_pars_fragment:cv,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:fv,logdepthbuf_vertex:dv,map_fragment:hv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:xv,morphinstance_vertex:vv,morphcolor_vertex:Ev,morphnormal_vertex:Sv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Tv,normal_fragment_begin:bv,normal_fragment_maps:yv,normal_pars_fragment:Av,normal_pars_vertex:wv,normal_vertex:Cv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Iv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Dv,opaque_fragment:Nv,packing:Uv,premultiplied_alpha_fragment:Fv,project_vertex:Ov,dithering_fragment:Bv,dithering_pars_fragment:zv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Wv,shadowmask_pars_fragment:Xv,skinbase_vertex:Yv,skinning_pars_vertex:Zv,skinning_vertex:qv,skinnormal_vertex:$v,specularmap_fragment:Kv,specularmap_pars_fragment:Jv,tonemapping_fragment:jv,tonemapping_pars_fragment:Qv,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:cE,backgroundCube_frag:lE,cube_vert:uE,cube_frag:fE,depth_vert:dE,depth_frag:hE,distance_vert:pE,distance_frag:mE,equirect_vert:gE,equirect_frag:_E,linedashed_vert:xE,linedashed_frag:vE,meshbasic_vert:EE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:TE,meshmatcap_vert:bE,meshmatcap_frag:yE,meshnormal_vert:AE,meshnormal_frag:wE,meshphong_vert:CE,meshphong_frag:RE,meshphysical_vert:IE,meshphysical_frag:PE,meshtoon_vert:LE,meshtoon_frag:DE,points_vert:NE,points_frag:UE,shadow_vert:FE,shadow_frag:OE,sprite_vert:BE,sprite_frag:zE},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},An={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Os={r:0,b:0,g:0},GE=new dt,lh=new Ne;lh.set(-1,0,0,0,1,0,0,0,1);function HE(t,e,n,i,r,s){const o=new $e(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){const S=A.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(A){let w=!1;const S=h(A);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(A,w){const S=h(w);S&&(S.isCubeTexture||S.mapping===yo)?(c===void 0&&(c=new Qt(new fs(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:vr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lh),c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Qe,(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qt(new wo(2,2),new _n({name:"BackgroundMaterial",uniforms:vr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,w){A.getRGB(Os,sh(t)),n.buffers.color.setClear(Os.r,Os.g,Os.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,w=1){o.set(A),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,m(o,a)},render:g,addToRenderList:E,dispose:p}}function kE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(R,F,Z,q,G){let Y=!1;const V=d(R,q,Z,F);s!==V&&(s=V,c(s.object)),Y=h(R,q,Z,G),Y&&g(R,q,Z,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(R,F,Z,q),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function d(R,F,Z,q){const G=q.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const V=R.isInstancedMesh===!0?R.id:0;let J=Y[V];J===void 0&&(J={},Y[V]=J);let te=J[Z.id];te===void 0&&(te={},J[Z.id]=te);let re=te[G];return re===void 0&&(re=f(l()),te[G]=re),re}function f(R){const F=[],Z=[],q=[];for(let G=0;G<n;G++)F[G]=0,Z[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:q,object:R,attributes:{},index:null}}function h(R,F,Z,q){const G=s.attributes,Y=F.attributes;let V=0;const J=Z.getAttributes();for(const te in J)if(J[te].location>=0){const he=G[te];let ve=Y[te];if(ve===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;V++}return s.attributesNum!==V||s.index!==q}function g(R,F,Z,q){const G={},Y=F.attributes;let V=0;const J=Z.getAttributes();for(const te in J)if(J[te].location>=0){let he=Y[te];he===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(he=R.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),G[te]=ve,V++}s.attributes=G,s.attributesNum=V,s.index=q}function E(){const R=s.newAttributes;for(let F=0,Z=R.length;F<Z;F++)R[F]=0}function m(R){p(R,0)}function p(R,F){const Z=s.newAttributes,q=s.enabledAttributes,G=s.attributeDivisors;Z[R]=1,q[R]===0&&(t.enableVertexAttribArray(R),q[R]=1),G[R]!==F&&(t.vertexAttribDivisor(R,F),G[R]=F)}function A(){const R=s.newAttributes,F=s.enabledAttributes;for(let Z=0,q=F.length;Z<q;Z++)F[Z]!==R[Z]&&(t.disableVertexAttribArray(Z),F[Z]=0)}function w(R,F,Z,q,G,Y,V){V===!0?t.vertexAttribIPointer(R,F,Z,G,Y):t.vertexAttribPointer(R,F,Z,q,G,Y)}function S(R,F,Z,q){E();const G=q.attributes,Y=Z.getAttributes(),V=F.defaultAttributeValues;for(const J in Y){const te=Y[J];if(te.location>=0){let re=G[J];if(re===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const he=re.normalized,ve=re.itemSize,ke=e.get(re);if(ke===void 0)continue;const at=ke.buffer,ge=ke.type,U=ke.bytesPerElement,Q=ge===t.INT||ge===t.UNSIGNED_INT||re.gpuType===hl;if(re.isInterleavedBufferAttribute){const j=re.data,Me=j.stride,Le=re.offset;if(j.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)p(te.location+Ce,j.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)m(te.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,at);for(let Ce=0;Ce<te.locationSize;Ce++)w(te.location+Ce,ve/te.locationSize,ge,he,Me*U,(Le+ve/te.locationSize*Ce)*U,Q)}else{if(re.isInstancedBufferAttribute){for(let j=0;j<te.locationSize;j++)p(te.location+j,re.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<te.locationSize;j++)m(te.location+j);t.bindBuffer(t.ARRAY_BUFFER,at);for(let j=0;j<te.locationSize;j++)w(te.location+j,ve/te.locationSize,ge,he,ve*U,ve/te.locationSize*j*U,Q)}}else if(V!==void 0){const he=V[J];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(te.location,he);break;case 3:t.vertexAttrib3fv(te.location,he);break;case 4:t.vertexAttrib4fv(te.location,he);break;default:t.vertexAttrib1fv(te.location,he)}}}}A()}function y(){b();for(const R in i){const F=i[R];for(const Z in F){const q=F[Z];for(const G in q){const Y=q[G];for(const V in Y)u(Y[V].object),delete Y[V];delete q[G]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const F=i[R.id];for(const Z in F){const q=F[Z];for(const G in q){const Y=q[G];for(const V in Y)u(Y[V].object),delete Y[V];delete q[G]}}delete i[R.id]}function C(R){for(const F in i){const Z=i[F];for(const q in Z){const G=Z[q];if(G[R.id]===void 0)continue;const Y=G[R.id];for(const V in Y)u(Y[V].object),delete Y[V];delete G[R.id]}}}function x(R){for(const F in i){const Z=i[F],q=R.isInstancedMesh===!0?R.id:0,G=Z[q];if(G!==void 0){for(const Y in G){const V=G[Y];for(const J in V)u(V[J].object),delete V[J];delete G[Y]}delete Z[q],Object.keys(Z).length===0&&delete i[F]}}}function b(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:A}}function VE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function WE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:S,maxSamples:y,samples:T}}function XE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wi,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,w=A*4;let S=p.clippingState||null;l.value=S,S=u(g,f,w,h);for(let y=0;y!==w;++y)S[y]=n[y];p.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const E=d!==null?d.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const p=h+E*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=h;w!==E;++w,S+=4)o.copy(d[w]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const di=4,Yu=[.125,.215,.35,.446,.526,.582],Ri=20,YE=256,Pr=new ah,Zu=new $e;let _a=null,xa=0,va=0,Ea=!1;const ZE=new O;class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ZE}=s;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=Ea,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Li||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Kn,format:mn,colorSpace:is,depthBuffer:!1},r=$u(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qE(s)),this._blurMaterial=KE(s,e,n),this._ggxMaterial=$E(s,e,n)}return r}_compileMaterial(e){const n=new Qt(new Nn,e);this._renderer.compile(n,Pr)}_sceneToCubeUV(e,n,i,r,s){const l=new on(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Zu),d.toneMapping=Pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new fs,new us({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(Zu),p=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;er(r,S*y,w>2?y:0,y,y),d.setRenderTarget(r),p&&d.render(E,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Li||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;er(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-di?i-g+di:0),p=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,er(s,m,p,3*E,2*E),r.setRenderTarget(s),r.render(a,Pr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,er(e,m,p,3*E,2*E),r.setRenderTarget(e),r.render(a,Pr)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ri-1),E=s/g,m=isFinite(s)?1+Math.floor(u*E):Ri;m>Ri&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let A=0;for(let C=0;C<Ri;++C){const x=C/E,b=Math.exp(-x*x/2);p.push(b),C===0?A+=b:C<m&&(A+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const S=this._sizeLods[r],y=3*S*(r>w-di?r-w+di:0),T=4*(this._cubeSize-S);er(n,y,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Pr)}}function qE(t){const e=[],n=[],i=[];let r=t;const s=t-di+1+Yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-di?l=Yu[o-t+di-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,E=3,m=2,p=1,A=new Float32Array(E*g*h),w=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let T=0;T<h;T++){const C=T%3*2/3-1,x=T>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];A.set(b,E*g*T),w.set(f,m*g*T);const L=[T,T,T,T,T,T];S.set(L,p*g*T)}const y=new Nn;y.setAttribute("position",new Ln(A,E)),y.setAttribute("uv",new Ln(w,m)),y.setAttribute("faceIndex",new Ln(S,p)),i.push(new Qt(y,null)),r>di&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $u(t,e,n){const i=new gn(t,e,n);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $E(t,e,n){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function KE(t,e,n){const i=new Float32Array(Ri),r=new O(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ku(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ju(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}class uh extends gn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ih(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fs(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Yn});s.uniforms.tEquirect.value=n;const o=new Qt(r,s),a=n.minFilter;return n.minFilter===fi&&(n.minFilter=Nt),new tx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function JE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Yo||h===Zo)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const E=new uh(g.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",c),a(E.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===Yo||h===Zo,E=h===Li||h===gr;if(g||E){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new qu(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const A=f.image;return g&&A&&A.height>0||E&&A&&l(A)?(i===null&&(i=new qu(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===Yo?f.mapping=Li:h===Zo&&(f.mapping=gr),f}function l(f){let h=0;const g=6;for(let E=0;E<g;E++)f[E]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function jE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fr("WebGLRenderer: "+i+" extension not supported."),r}}}function QE(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let E=0;if(g===void 0)return;if(h!==null){const A=h.array;E=h.version;for(let w=0,S=A.length;w<S;w+=3){const y=A[w+0],T=A[w+1],C=A[w+2];f.push(y,T,T,C,C,y)}}else{const A=g.array;E=g.version;for(let w=0,S=A.length/3-1;w<S;w+=3){const y=w+0,T=w+1,C=w+2;f.push(y,T,T,C,C,y)}}const m=new(g.count>=65535?th:eh)(f,1);m.version=E;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eS(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*o,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let E=0;for(let m=0;m<h;m++)E+=f[m];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nS(t,e,n){const i=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let w=0;h===!0&&(w=1),g===!0&&(w=2),E===!0&&(w=3);let S=a.attributes.position.count*w,y=1;S>e.maxTextureSize&&(y=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*y*4*d),C=new jd(T,S,y,d);C.type=Cn,C.needsUpdate=!0;const x=w*4;for(let L=0;L<d;L++){const R=m[L],F=p[L],Z=A[L],q=S*y*4*L;for(let G=0;G<R.count;G++){const Y=G*x;h===!0&&(r.fromBufferAttribute(R,G),T[q+Y+0]=r.x,T[q+Y+1]=r.y,T[q+Y+2]=r.z,T[q+Y+3]=0),g===!0&&(r.fromBufferAttribute(F,G),T[q+Y+4]=r.x,T[q+Y+5]=r.y,T[q+Y+6]=r.z,T[q+Y+7]=0),E===!0&&(r.fromBufferAttribute(Z,G),T[q+Y+8]=r.x,T[q+Y+9]=r.y,T[q+Y+10]=r.z,T[q+Y+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new We(S,y)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let E=0;E<c.length;E++)h+=c[E];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function iS(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const rS={[dl]:"LINEAR_TONE_MAPPING",[Od]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[zd]:"ACES_FILMIC_TONE_MAPPING",[Hd]:"AGX_TONE_MAPPING",[kd]:"NEUTRAL_TONE_MAPPING",[Gd]:"CUSTOM_TONE_MAPPING"};function sS(t,e,n,i,r,s){const o=new gn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new _r(e,n):void 0}),a=new gn(e,n,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Nn;l.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ln([0,2,0,0,2,0],2));const c=new Z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(l,c),d=new ah(-1,1,1,-1,0,1);let f=null,h=null,g=!1,E,m=null,p=[],A=!1;this.setSize=function(w,S){o.setSize(w,S),a.setSize(w,S);for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(w,S)}},this.setEffects=function(w){p=w,A=p.length>0&&p[0].isRenderPass===!0;const S=o.width,y=o.height;for(let T=0;T<p.length;T++){const C=p[T];C.setSize&&C.setSize(S,y)}},this.begin=function(w,S){if(g||w.toneMapping===Pn&&p.length===0)return!1;if(m=S,S!==null){const y=S.width,T=S.height;(o.width!==y||o.height!==T)&&this.setSize(y,T)}return A===!1&&w.setRenderTarget(o),E=w.toneMapping,w.toneMapping=Pn,!0},this.hasRenderPass=function(){return A},this.end=function(w,S){w.toneMapping=E,g=!0;let y=o,T=a;for(let C=0;C<p.length;C++){const x=p[C];if(x.enabled!==!1&&(x.render(w,T,y,S),x.needsSwap!==!1)){const b=y;y=T,T=b}}if(f!==w.outputColorSpace||h!==w.toneMapping){f=w.outputColorSpace,h=w.toneMapping,c.defines={},Ge.getTransfer(f)===Qe&&(c.defines.SRGB_TRANSFER="");const C=rS[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,w.setRenderTarget(m),w.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const fh=new Bt,Cc=new _r(1,1),dh=new jd,hh=new y_,ph=new ih,ju=[],Qu=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function Tr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ju[r];if(s===void 0&&(s=new Float32Array(r),ju[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ro(t,e){let n=Qu[e];n===void 0&&(n=new Int32Array(e),Qu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function uS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;nf.set(i),t.uniformMatrix2fv(this.addr,!1,nf),Tt(n,i)}}function fS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;tf.set(i),t.uniformMatrix3fv(this.addr,!1,tf),Tt(n,i)}}function dS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;ef.set(i),t.uniformMatrix4fv(this.addr,!1,ef),Tt(n,i)}}function hS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function mS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function gS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function _S(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function SS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cc.compareFunction=n.isReversedDepthBuffer()?El:vl,s=Cc):s=fh,n.setTexture2D(e||s,r)}function MS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hh,r)}function TS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ph,r)}function bS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dh,r)}function yS(t){switch(t){case 5126:return oS;case 35664:return aS;case 35665:return cS;case 35666:return lS;case 35674:return uS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return xS;case 36295:return vS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return bS}}function AS(t,e){t.uniform1fv(this.addr,e)}function wS(t,e){const n=Tr(e,this.size,2);t.uniform2fv(this.addr,n)}function CS(t,e){const n=Tr(e,this.size,3);t.uniform3fv(this.addr,n)}function RS(t,e){const n=Tr(e,this.size,4);t.uniform4fv(this.addr,n)}function IS(t,e){const n=Tr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PS(t,e){const n=Tr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LS(t,e){const n=Tr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DS(t,e){t.uniform1iv(this.addr,e)}function NS(t,e){t.uniform2iv(this.addr,e)}function US(t,e){t.uniform3iv(this.addr,e)}function FS(t,e){t.uniform4iv(this.addr,e)}function OS(t,e){t.uniform1uiv(this.addr,e)}function BS(t,e){t.uniform2uiv(this.addr,e)}function zS(t,e){t.uniform3uiv(this.addr,e)}function GS(t,e){t.uniform4uiv(this.addr,e)}function HS(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Cc:o=fh;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function kS(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||hh,s[o])}function VS(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ph,s[o])}function WS(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||dh,s[o])}function XS(t){switch(t){case 5126:return AS;case 35664:return wS;case 35665:return CS;case 35666:return RS;case 35674:return IS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return DS;case 35667:case 35671:return NS;case 35668:case 35672:return US;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return BS;case 36295:return zS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return WS}}class YS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yS(n.type)}}class ZS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XS(n.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function rf(t,e){t.seq.push(e),t.map[e.id]=e}function $S(t,e,n){const i=t.name,r=i.length;for(Sa.lastIndex=0;;){const s=Sa.exec(i),o=Sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rf(n,c===void 0?new YS(a,t,e):new ZS(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new qS(a),rf(n,d)),n=d}}}class Js{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$S(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KS=37297;let JS=0;function jS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const of=new Ne;function QS(t){Ge._getMatrix(of,Ge.workingColorSpace,t);const e=`mat3( ${of.elements.map(n=>n.toFixed(4))} )`;switch(Ge.getTransfer(t)){case co:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function af(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+jS(t.getShaderSource(e),a)}else return s}function eM(t,e){const n=QS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const tM={[dl]:"Linear",[Od]:"Reinhard",[Bd]:"Cineon",[zd]:"ACESFilmic",[Hd]:"AgX",[kd]:"Neutral",[Gd]:"Custom"};function nM(t,e){const n=tM[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bs=new O;function iM(){Ge.getLuminanceCoefficients(Bs);const t=Bs.x.toFixed(4),e=Bs.y.toFixed(4),n=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function sM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Br(t){return t!==""}function cf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(t){return t.replace(aM,lM)}const cM=new Map;function lM(t,e){let n=Oe[e];if(n===void 0){const i=cM.get(e);if(i!==void 0)n=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rc(n)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(t){return t.replace(uM,fM)}function fM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const dM={[Ys]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function hM(t){return dM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pM={[Li]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function mM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":pM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const gM={[gr]:"ENVMAP_MODE_REFRACTION"};function _M(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":gM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xM={[Fd]:"ENVMAP_BLENDING_MULTIPLY",[V0]:"ENVMAP_BLENDING_MIX",[W0]:"ENVMAP_BLENDING_ADD"};function vM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":xM[t.combine]||"ENVMAP_BLENDING_NONE"}function EM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function SM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hM(n),c=mM(n),u=_M(n),d=vM(n),f=EM(n),h=rM(n),g=sM(s),E=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[ff(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pn?"#define TONE_MAPPING":"",n.toneMapping!==Pn?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Pn?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,eM("linearToOutputTexel",n.outputColorSpace),iM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Br).join(`
`)),o=Rc(o),o=cf(o,n),o=lf(o,n),a=Rc(a),a=cf(a,n),a=lf(a,n),o=uf(o),a=uf(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+m+o,S=A+p+a,y=sf(r,r.VERTEX_SHADER,w),T=sf(r,r.FRAGMENT_SHADER,S);r.attachShader(E,y),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(R){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",Z=r.getShaderInfoLog(y)||"",q=r.getShaderInfoLog(T)||"",G=F.trim(),Y=Z.trim(),V=q.trim();let J=!0,te=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,y,T);else{const re=af(r,y,"vertex"),he=af(r,T,"fragment");Ve("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+re+`
`+he)}else G!==""?Ie("WebGLProgram: Program Info Log:",G):(Y===""||V==="")&&(te=!1);te&&(R.diagnostics={runnable:J,programLog:G,vertexShader:{log:Y,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(y),r.deleteShader(T),x=new Js(r,E),b=oM(r,E)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,KS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=y,this.fragmentShader=T,this}let MM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bM(e),n.set(e,i)),i}}class bM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function yM(t){return t===Di||t===oo||t===ao}function AM(t,e,n,i,r,s){const o=new Tl,a=new TM,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,b,L,R,F,Z){const q=R.fog,G=F.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||Y,V),te=J&&J.mapping===yo?J.image.height:null,re=h[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ve=he!==void 0?he.length:0;let ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let at,ge,U,Q;if(re){const Ee=An[re];at=Ee.vertexShader,ge=Ee.fragmentShader}else{at=x.vertexShader,ge=x.fragmentShader;const Ee=a.getVertexShaderStage(x),lt=a.getFragmentShaderStage(x);a.update(x,Ee,lt),U=Ee.id,Q=lt.id}const j=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,ht=!!x.map,ze=!!x.matcap,nt=!!J,qe=!!x.aoMap,Xe=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,Et=!!x.normalMap,bt=!!x.displacementMap,Rt=!!x.emissiveMap,ct=!!x.metalnessMap,_t=!!x.roughnessMap,P=x.anisotropy>0,Vt=x.clearcoat>0,je=x.dispersion>0,M=x.iridescence>0,_=x.sheen>0,N=x.transmission>0,H=P&&!!x.anisotropyMap,W=Vt&&!!x.clearcoatMap,ie=Vt&&!!x.clearcoatNormalMap,oe=Vt&&!!x.clearcoatRoughnessMap,X=M&&!!x.iridescenceMap,K=M&&!!x.iridescenceThicknessMap,ae=_&&!!x.sheenColorMap,be=_&&!!x.sheenRoughnessMap,ue=!!x.specularMap,ce=!!x.specularColorMap,we=!!x.specularIntensityMap,Re=N&&!!x.transmissionMap,Ue=N&&!!x.thicknessMap,I=!!x.gradientMap,se=!!x.alphaMap,$=x.alphaTest>0,le=!!x.alphaHash,me=!!x.extensions;let ee=Pn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Te={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:ge,defines:x.defines,customVertexShaderID:U,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:ze,envMap:nt,envMapMode:nt&&J.mapping,envMapCubeUVHeight:te,aoMap:qe,lightMap:Xe,bumpMap:gt,normalMap:Et,displacementMap:bt,emissiveMap:Rt,normalMapObjectSpace:Et&&x.normalMapType===Z0,normalMapTangentSpace:Et&&x.normalMapType===gu,packedNormalMap:Et&&x.normalMapType===gu&&yM(x.normalMap.format),metalnessMap:ct,roughnessMap:_t,anisotropy:P,anisotropyMap:H,clearcoat:Vt,clearcoatMap:W,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,dispersion:je,iridescence:M,iridescenceMap:X,iridescenceThicknessMap:K,sheen:_,sheenColorMap:ae,sheenRoughnessMap:be,specularMap:ue,specularColorMap:ce,specularIntensityMap:we,transmission:N,transmissionMap:Re,thicknessMap:Ue,gradientMap:I,opaque:x.transparent===!1&&x.blending===ur&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:$,alphaHash:le,combine:x.combine,mapUv:ht&&g(x.map.channel),aoMapUv:qe&&g(x.aoMap.channel),lightMapUv:Xe&&g(x.lightMap.channel),bumpMapUv:gt&&g(x.bumpMap.channel),normalMapUv:Et&&g(x.normalMap.channel),displacementMapUv:bt&&g(x.displacementMap.channel),emissiveMapUv:Rt&&g(x.emissiveMap.channel),metalnessMapUv:ct&&g(x.metalnessMap.channel),roughnessMapUv:_t&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:W&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:ce&&g(x.specularColorMap.channel),specularIntensityMapUv:we&&g(x.specularIntensityMap.channel),transmissionMapUv:Re&&g(x.transmissionMap.channel),thicknessMapUv:Ue&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||P),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ht||se),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(b,x),A(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function A(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const b=h[x.type];let L;if(b){const R=An[b];L=W_.clone(R.uniforms)}else L=x.uniforms;return L}function S(x,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new SM(t,b,x,r),c.push(L),u.set(b,L)),L}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:C}}function wM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function df(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,E,m,p){let A=t[e];return A===void 0?(A={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:E,renderOrder:f.renderOrder,z:m,group:p},t[e]=A):(A.id=f.id,A.object=f,A.geometry=h,A.material=g,A.materialVariant=o(f),A.groupOrder=E,A.renderOrder=f.renderOrder,A.z=m,A.group=p),e++,A}function l(f,h,g,E,m,p){const A=a(f,h,g,E,m,p);g.transmission>0?i.push(A):g.transparent===!0?r.push(A):n.push(A)}function c(f,h,g,E,m,p){const A=a(f,h,g,E,m,p);g.transmission>0?i.unshift(A):g.transparent===!0?r.unshift(A):n.unshift(A)}function u(f,h,g){n.length>1&&n.sort(f||CM),i.length>1&&i.sort(h||df),r.length>1&&r.sort(h||df),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function RM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new hf,t.set(i,[o])):r>=s.length?(o=new hf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function IM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new $e};break;case"SpotLight":n={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function PM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LM=0;function DM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NM(t){const e=new IM,n=PM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new dt,o=new dt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,E=0,m=0,p=0,A=0,w=0,S=0,y=0,T=0,C=0;c.sort(DM);for(let b=0,L=c.length;b<L;b++){const R=c[b],F=R.color,Z=R.intensity,q=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Di?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=F.r*Z,d+=F.g*Z,f+=F.b*Z;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],Z);C++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,J=n.get(R);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.directionalShadow[h]=J,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=R.shadow.matrix,A++}i.directional[h]=Y,h++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(F).multiplyScalar(Z),Y.distance=q,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[E]=Y;const V=R.shadow;if(R.map&&(i.spotLightMap[y]=R.map,y++,V.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[E]=V.matrix,R.castShadow){const J=n.get(R);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=G,S++}E++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(F).multiplyScalar(Z),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const V=R.shadow,J=n.get(R);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=Y,g++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(Z),Y.groundColor.copy(R.groundColor).multiplyScalar(Z),i.hemi[p]=Y,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==A||x.numPointShadows!==w||x.numSpotShadows!==S||x.numSpotMaps!==y||x.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=h,x.pointLength=g,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=A,x.numPointShadows=w,x.numSpotShadows=S,x.numSpotMaps=y,x.numLightProbes=C,i.version=LM++)}function l(c,u){let d=0,f=0,h=0,g=0,E=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const w=c[p];if(w.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(w.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(w.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function pf(t){const e=new NM(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function UM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pf(t),e.set(r,[a])):s>=o.length?(a=new pf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`,BM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],mf=new dt,Lr=new O,Ma=new O;function GM(t,e,n){let i=new yl;const r=new We,s=new We,o=new ft,a=new q_,l=new $_,c={},u=n.maxTextureSize,d={[_i]:Wt,[Wt]:_i,[Vn]:Vn},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===b0&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ys);const b=t.getRenderTarget(),L=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Z=p!==this.type;Z&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(G=>G.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,G=T.length;q<G;q++){const Y=T[q],V=Y.shadow;if(V===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();r.multiply(J),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,V.mapSize.y=s.y));const te=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Or){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gn(r.x,r.y,{format:Di,type:Kn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new _r(r.x,r.y,Cn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Jn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt}else Y.isPointLight?(V.map=new uh(r.x),V.map.depthTexture=new k_(r.x,Dn)):(V.map=new gn(r.x,r.y),V.map.depthTexture=new _r(r.x,r.y,Dn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Jn,this.type===Ys?(V.map.depthTexture.compareFunction=te?El:vl,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt);V.camera.updateProjectionMatrix()}const re=V.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<re;he++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,he),t.clear();else{he===0&&(t.setRenderTarget(V.map),t.clear());const ve=V.getViewport(he);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),F.viewport(o)}if(Y.isPointLight){const ve=V.camera,ke=V.matrix,at=Y.distance||ve.far;at!==ve.far&&(ve.far=at,ve.updateProjectionMatrix()),Lr.setFromMatrixPosition(Y.matrixWorld),ve.position.copy(Lr),Ma.copy(ve.position),Ma.add(BM[he]),ve.up.copy(zM[he]),ve.lookAt(Ma),ve.updateMatrixWorld(),ke.makeTranslation(-Lr.x,-Lr.y,-Lr.z),mf.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix(mf,ve.coordinateSystem,ve.reversedDepth)}else V.updateMatrices(Y);i=V.getFrustum(),S(C,x,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Or&&A(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,L,R)};function A(T,C){const x=e.update(E);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(r.x,r.y,{format:Di,type:Kn})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,E,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,h,E,null)}function w(T,C,x,b){let L=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)L=R;else if(L=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=L.uuid,Z=C.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let G=q[Z];G===void 0&&(G=L.clone(),q[Z]=G,C.addEventListener("dispose",y)),L=G}if(L.visible=C.visible,L.wireframe=C.wireframe,b===Or?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=t.properties.get(L);F.light=x}return L}function S(T,C,x,b,L){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Or)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),q=T.material;if(Array.isArray(q)){const G=Z.groups;for(let Y=0,V=G.length;Y<V;Y++){const J=G[Y],te=q[J.materialIndex];if(te&&te.visible){const re=w(T,te,b,L);T.onBeforeShadow(t,T,C,x,Z,re,J),t.renderBufferDirect(x,null,Z,re,T,J),T.onAfterShadow(t,T,C,x,Z,re,J)}}}else if(q.visible){const G=w(T,q,b,L);T.onBeforeShadow(t,T,C,x,Z,G,null),t.renderBufferDirect(x,null,Z,G,T,null),T.onAfterShadow(t,T,C,x,Z,G,null)}}const F=T.children;for(let Z=0,q=F.length;Z<q;Z++)S(F[Z],C,x,b,L)}function y(T){T.target.removeEventListener("dispose",y);for(const x in c){const b=c[x],L=T.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function HM(t,e){function n(){let I=!1;const se=new ft;let $=null;const le=new ft(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(t.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,ee,Te,Ee,lt){lt===!0&&(me*=Ee,ee*=Ee,Te*=Ee),se.set(me,ee,Te,Ee),le.equals(se)===!1&&(t.clearColor(me,ee,Te,Ee),le.copy(se))},reset:function(){I=!1,$=null,le.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,$=null,le=null,me=null;return{setReversed:function(ee){if(se!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Ee=me;me=null,this.setClear(Ee)}},getReversed:function(){return se},setTest:function(ee){ee?j(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ee){$!==ee&&!I&&(t.depthMask(ee),$=ee)},setFunc:function(ee){if(se&&(ee=i_[ee]),le!==ee){switch(ee){case ka:t.depthFunc(t.NEVER);break;case Va:t.depthFunc(t.ALWAYS);break;case Wa:t.depthFunc(t.LESS);break;case mr:t.depthFunc(t.LEQUAL);break;case Xa:t.depthFunc(t.EQUAL);break;case Ya:t.depthFunc(t.GEQUAL);break;case Za:t.depthFunc(t.GREATER);break;case qa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=ee}},setLocked:function(ee){I=ee},setClear:function(ee){me!==ee&&(me=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){I=!1,$=null,le=null,me=null,se=!1}}}function r(){let I=!1,se=null,$=null,le=null,me=null,ee=null,Te=null,Ee=null,lt=null;return{setTest:function(st){I||(st?j(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(st){se!==st&&!I&&(t.stencilMask(st),se=st)},setFunc:function(st,vn,En){($!==st||le!==vn||me!==En)&&(t.stencilFunc(st,vn,En),$=st,le=vn,me=En)},setOp:function(st,vn,En){(ee!==st||Te!==vn||Ee!==En)&&(t.stencilOp(st,vn,En),ee=st,Te=vn,Ee=En)},setLocked:function(st){I=st},setClear:function(st){lt!==st&&(t.clearStencil(st),lt=st)},reset:function(){I=!1,se=null,$=null,le=null,me=null,ee=null,Te=null,Ee=null,lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],E=null,m=!1,p=null,A=null,w=null,S=null,y=null,T=null,C=null,x=new $e(0,0,0),b=0,L=!1,R=null,F=null,Z=null,q=null,G=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=J>=1):te.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=J>=2);let re=null,he={};const ve=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),at=new ft().fromArray(ve),ge=new ft().fromArray(ke);function U(I,se,$,le){const me=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<$;Te++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ee}const Q={};Q[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(t.DEPTH_TEST),o.setFunc(mr),gt(!1),Et(du),j(t.CULL_FACE),qe(Yn);function j(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Me(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Le(I,se){return f[I]!==se?(t.bindFramebuffer(I,se),f[I]=se,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(I,se){let $=g,le=!1;if(I){$=h.get(se),$===void 0&&($=[],h.set(se,$));const me=I.textures;if($.length!==me.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=me.length;ee<Te;ee++)$[ee]=t.COLOR_ATTACHMENT0+ee;$.length=me.length,le=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,le=!0);le&&t.drawBuffers($)}function ht(I){return E!==I?(t.useProgram(I),E=I,!0):!1}const ze={[Ci]:t.FUNC_ADD,[A0]:t.FUNC_SUBTRACT,[w0]:t.FUNC_REVERSE_SUBTRACT};ze[C0]=t.MIN,ze[R0]=t.MAX;const nt={[I0]:t.ZERO,[P0]:t.ONE,[L0]:t.SRC_COLOR,[Ga]:t.SRC_ALPHA,[B0]:t.SRC_ALPHA_SATURATE,[F0]:t.DST_COLOR,[N0]:t.DST_ALPHA,[D0]:t.ONE_MINUS_SRC_COLOR,[Ha]:t.ONE_MINUS_SRC_ALPHA,[O0]:t.ONE_MINUS_DST_COLOR,[U0]:t.ONE_MINUS_DST_ALPHA,[z0]:t.CONSTANT_COLOR,[G0]:t.ONE_MINUS_CONSTANT_COLOR,[H0]:t.CONSTANT_ALPHA,[k0]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(I,se,$,le,me,ee,Te,Ee,lt,st){if(I===Yn){m===!0&&(Me(t.BLEND),m=!1);return}if(m===!1&&(j(t.BLEND),m=!0),I!==y0){if(I!==p||st!==L){if((A!==Ci||y!==Ci)&&(t.blendEquation(t.FUNC_ADD),A=Ci,y=Ci),st)switch(I){case ur:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hu:t.blendFunc(t.ONE,t.ONE);break;case pu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mu:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",I);break}else switch(I){case ur:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",I);break}w=null,S=null,T=null,C=null,x.set(0,0,0),b=0,p=I,L=st}return}me=me||se,ee=ee||$,Te=Te||le,(se!==A||me!==y)&&(t.blendEquationSeparate(ze[se],ze[me]),A=se,y=me),($!==w||le!==S||ee!==T||Te!==C)&&(t.blendFuncSeparate(nt[$],nt[le],nt[ee],nt[Te]),w=$,S=le,T=ee,C=Te),(Ee.equals(x)===!1||lt!==b)&&(t.blendColor(Ee.r,Ee.g,Ee.b,lt),x.copy(Ee),b=lt),p=I,L=!1}function Xe(I,se){I.side===Vn?Me(t.CULL_FACE):j(t.CULL_FACE);let $=I.side===Wt;se&&($=!$),gt($),I.blending===ur&&I.transparent===!1?qe(Yn):qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const le=I.stencilWrite;a.setTest(le),le&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){R!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),R=I)}function Et(I){I!==M0?(j(t.CULL_FACE),I!==F&&(I===du?t.cullFace(t.BACK):I===T0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),F=I}function bt(I){I!==Z&&(V&&t.lineWidth(I),Z=I)}function Rt(I,se,$){I?(j(t.POLYGON_OFFSET_FILL),(q!==se||G!==$)&&(q=se,G=$,o.getReversed()&&(se=-se),t.polygonOffset(se,$))):Me(t.POLYGON_OFFSET_FILL)}function ct(I){I?j(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function _t(I){I===void 0&&(I=t.TEXTURE0+Y-1),re!==I&&(t.activeTexture(I),re=I)}function P(I,se,$){$===void 0&&(re===null?$=t.TEXTURE0+Y-1:$=re);let le=he[$];le===void 0&&(le={type:void 0,texture:void 0},he[$]=le),(le.type!==I||le.texture!==se)&&(re!==$&&(t.activeTexture($),re=$),t.bindTexture(I,se||Q[I]),le.type=I,le.texture=se)}function Vt(){const I=he[re];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function je(){try{t.compressedTexImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function _(){try{t.texSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function N(){try{t.texSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ie(){try{t.texStorage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function oe(){try{t.texStorage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function X(){try{t.texImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function K(){try{t.texImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ae(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function be(I,se){d[I]!==se&&(t.pixelStorei(I,se),d[I]=se)}function ue(I){at.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),at.copy(I))}function ce(I){ge.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function we(I,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let le=$.get(I);le===void 0&&(le=t.getUniformBlockIndex(se,I.name),$.set(I,le))}function Re(I,se){const le=c.get(se).get(I);l.get(se)!==le&&(t.uniformBlockBinding(se,le,I.__bindingPointIndex),l.set(se,le))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,he={},f={},h=new WeakMap,g=[],E=null,m=!1,p=null,A=null,w=null,S=null,y=null,T=null,C=null,x=new $e(0,0,0),b=0,L=!1,R=null,F=null,Z=null,q=null,G=null,at.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:Me,bindFramebuffer:Le,drawBuffers:Ce,useProgram:ht,setBlending:qe,setMaterial:Xe,setFlipSided:gt,setCullFace:Et,setLineWidth:bt,setPolygonOffset:Rt,setScissorTest:ct,activeTexture:_t,bindTexture:P,unbindTexture:Vt,compressedTexImage2D:je,compressedTexImage3D:M,texImage2D:X,texImage3D:K,pixelStorei:be,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:oe,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:ue,viewport:ce,reset:Ue}}function kM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,_){return g?new OffscreenCanvas(M,_):rs("canvas")}function m(M,_,N){let H=1;const W=je(M);if((W.width>N||W.height>N)&&(H=N/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ie=Math.floor(H*W.width),oe=Math.floor(H*W.height);f===void 0&&(f=E(ie,oe));const X=_?E(ie,oe):f;return X.width=ie,X.height=oe,X.getContext("2d").drawImage(M,0,0,ie,oe),Ie("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+oe+")."),X}else return"data"in M&&Ie("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),M;return M}function p(M){return M.generateMipmaps}function A(M){t.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,_,N,H,W,ie=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===t.RED&&(N===t.FLOAT&&(X=t.R32F),N===t.HALF_FLOAT&&(X=t.R16F),N===t.UNSIGNED_BYTE&&(X=t.R8),N===t.UNSIGNED_SHORT&&oe&&(X=oe.R16_EXT),N===t.SHORT&&oe&&(X=oe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.R8UI),N===t.UNSIGNED_SHORT&&(X=t.R16UI),N===t.UNSIGNED_INT&&(X=t.R32UI),N===t.BYTE&&(X=t.R8I),N===t.SHORT&&(X=t.R16I),N===t.INT&&(X=t.R32I)),_===t.RG&&(N===t.FLOAT&&(X=t.RG32F),N===t.HALF_FLOAT&&(X=t.RG16F),N===t.UNSIGNED_BYTE&&(X=t.RG8),N===t.UNSIGNED_SHORT&&oe&&(X=oe.RG16_EXT),N===t.SHORT&&oe&&(X=oe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RG8UI),N===t.UNSIGNED_SHORT&&(X=t.RG16UI),N===t.UNSIGNED_INT&&(X=t.RG32UI),N===t.BYTE&&(X=t.RG8I),N===t.SHORT&&(X=t.RG16I),N===t.INT&&(X=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGB8UI),N===t.UNSIGNED_SHORT&&(X=t.RGB16UI),N===t.UNSIGNED_INT&&(X=t.RGB32UI),N===t.BYTE&&(X=t.RGB8I),N===t.SHORT&&(X=t.RGB16I),N===t.INT&&(X=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),N===t.UNSIGNED_INT&&(X=t.RGBA32UI),N===t.BYTE&&(X=t.RGBA8I),N===t.SHORT&&(X=t.RGBA16I),N===t.INT&&(X=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_SHORT&&oe&&(X=oe.RGB16_EXT),N===t.SHORT&&oe&&(X=oe.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),_===t.RGBA){const K=ie?co:Ge.getTransfer(W);N===t.FLOAT&&(X=t.RGBA32F),N===t.HALF_FLOAT&&(X=t.RGBA16F),N===t.UNSIGNED_BYTE&&(X=K===Qe?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&oe&&(X=oe.RGBA16_EXT),N===t.SHORT&&oe&&(X=oe.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(M,_){let N;return M?_===null||_===Dn||_===ns?N=t.DEPTH24_STENCIL8:_===Cn?N=t.DEPTH32F_STENCIL8:_===ts&&(N=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dn||_===ns?N=t.DEPTH_COMPONENT24:_===Cn?N=t.DEPTH_COMPONENT32F:_===ts&&(N=t.DEPTH_COMPONENT16),N}function T(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Dt&&M.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){const _=M.target;_.removeEventListener("dispose",C),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(M){const _=M.target;_.removeEventListener("dispose",x),R(_)}function b(M){const _=i.get(M);if(_.__webglInit===void 0)return;const N=M.source,H=h.get(N);if(H){const W=H[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&L(M),Object.keys(H).length===0&&h.delete(N)}i.remove(M)}function L(M){const _=i.get(M);t.deleteTexture(_.__webglTexture);const N=M.source,H=h.get(N);delete H[_.__cacheKey],o.memory.textures--}function R(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let W=0;W<_.__webglFramebuffer[H].length;W++)t.deleteFramebuffer(_.__webglFramebuffer[H][W]);else t.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)t.deleteFramebuffer(_.__webglFramebuffer[H]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=M.textures;for(let H=0,W=N.length;H<W;H++){const ie=i.get(N[H]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(N[H])}i.remove(M)}let F=0;function Z(){F=0}function q(){return F}function G(M){F=M}function Y(){const M=F;return M>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function V(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function J(M,_){const N=i.get(M);if(M.isVideoTexture&&P(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const H=M.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(N,M,_);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function te(M,_){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Me(N,M,_);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function re(M,_){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Me(N,M,_);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function he(M,_){const N=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Le(N,M,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}const ve={[$a]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Ka]:t.MIRRORED_REPEAT},ke={[Dt]:t.NEAREST,[X0]:t.NEAREST_MIPMAP_NEAREST,[_s]:t.NEAREST_MIPMAP_LINEAR,[Nt]:t.LINEAR,[qo]:t.LINEAR_MIPMAP_NEAREST,[fi]:t.LINEAR_MIPMAP_LINEAR},at={[q0]:t.NEVER,[Q0]:t.ALWAYS,[$0]:t.LESS,[vl]:t.LEQUAL,[K0]:t.EQUAL,[El]:t.GEQUAL,[J0]:t.GREATER,[j0]:t.NOTEQUAL};function ge(M,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Nt||_.magFilter===qo||_.magFilter===_s||_.magFilter===fi||_.minFilter===Nt||_.minFilter===qo||_.minFilter===_s||_.minFilter===fi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ve[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ve[_.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ve[_.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,ke[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,ke[_.minFilter]),_.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,at[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dt||_.minFilter!==_s&&_.minFilter!==fi||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function U(M,_){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let W=h.get(H);W===void 0&&(W={},h.set(H,W));const ie=V(_);if(ie!==M.__cacheKey){W[ie]===void 0&&(W[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),W[ie].usedTimes++;const oe=W[M.__cacheKey];oe!==void 0&&(W[M.__cacheKey].usedTimes--,oe.usedTimes===0&&L(_)),M.__cacheKey=ie,M.__webglTexture=W[ie].texture}return N}function Q(M,_,N){return Math.floor(Math.floor(M/N)/_)}function j(M,_,N,H){const ie=M.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,H,_.data);else{ie.sort((be,ue)=>be.start-ue.start);let oe=0;for(let be=1;be<ie.length;be++){const ue=ie[oe],ce=ie[be],we=ue.start+ue.count,Re=Q(ce.start,_.width,4),Ue=Q(ue.start,_.width,4);ce.start<=we+1&&Re===Ue&&Q(ce.start+ce.count-1,_.width,4)===Re?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++oe,ie[oe]=ce)}ie.length=oe+1;const X=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let be=0,ue=ie.length;be<ue;be++){const ce=ie[be],we=Math.floor(ce.start/4),Re=Math.ceil(ce.count/4),Ue=we%_.width,I=Math.floor(we/_.width),se=Re,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ue,I,se,$,N,H,_.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function Me(M,_,N){let H=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=t.TEXTURE_3D);const W=U(M,_),ie=_.source;n.bindTexture(H,M.__webglTexture,t.TEXTURE0+N);const oe=i.get(ie);if(ie.version!==oe.__version||W===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const $=Ge.getPrimaries(Ge.workingColorSpace),le=_.colorSpace===li?null:Ge.getPrimaries(_.colorSpace),me=_.colorSpace===li||$===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,r.maxTextureSize);K=Vt(_,K);const ae=s.convert(_.format,_.colorSpace),be=s.convert(_.type);let ue=S(_.internalFormat,ae,be,_.normalized,_.colorSpace,_.isVideoTexture);ge(H,_);let ce;const we=_.mipmaps,Re=_.isVideoTexture!==!0,Ue=oe.__version===void 0||W===!0,I=ie.dataReady,se=T(_,K);if(_.isDepthTexture)ue=y(_.format===Pi,_.type),Ue&&(Re?n.texStorage2D(t.TEXTURE_2D,1,ue,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,ue,K.width,K.height,0,ae,be,null));else if(_.isDataTexture)if(we.length>0){Re&&Ue&&n.texStorage2D(t.TEXTURE_2D,se,ue,we[0].width,we[0].height);for(let $=0,le=we.length;$<le;$++)ce=we[$],Re?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,ae,be,ce.data):n.texImage2D(t.TEXTURE_2D,$,ue,ce.width,ce.height,0,ae,be,ce.data);_.generateMipmaps=!1}else Re?(Ue&&n.texStorage2D(t.TEXTURE_2D,se,ue,K.width,K.height),I&&j(_,K,ae,be)):n.texImage2D(t.TEXTURE_2D,0,ue,K.width,K.height,0,ae,be,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ue,we[0].width,we[0].height,K.depth);for(let $=0,le=we.length;$<le;$++)if(ce=we[$],_.format!==mn)if(ae!==null)if(Re){if(I)if(_.layerUpdates.size>0){const me=Xu(ce.width,ce.height,_.format,_.type);for(const ee of _.layerUpdates){const Te=ce.data.subarray(ee*me/ce.data.BYTES_PER_ELEMENT,(ee+1)*me/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ee,ce.width,ce.height,1,ae,Te)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,K.depth,ae,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ue,ce.width,ce.height,K.depth,0,ce.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,K.depth,ae,be,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ue,ce.width,ce.height,K.depth,0,ae,be,ce.data)}else{Re&&Ue&&n.texStorage2D(t.TEXTURE_2D,se,ue,we[0].width,we[0].height);for(let $=0,le=we.length;$<le;$++)ce=we[$],_.format!==mn?ae!==null?Re?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,ae,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ue,ce.width,ce.height,0,ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,ae,be,ce.data):n.texImage2D(t.TEXTURE_2D,$,ue,ce.width,ce.height,0,ae,be,ce.data)}else if(_.isDataArrayTexture)if(Re){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ue,K.width,K.height,K.depth),I)if(_.layerUpdates.size>0){const $=Xu(K.width,K.height,_.format,_.type);for(const le of _.layerUpdates){const me=K.data.subarray(le*$/K.data.BYTES_PER_ELEMENT,(le+1)*$/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,K.width,K.height,1,ae,be,me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,be,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,K.width,K.height,K.depth,0,ae,be,K.data);else if(_.isData3DTexture)Re?(Ue&&n.texStorage3D(t.TEXTURE_3D,se,ue,K.width,K.height,K.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,be,K.data)):n.texImage3D(t.TEXTURE_3D,0,ue,K.width,K.height,K.depth,0,ae,be,K.data);else if(_.isFramebufferTexture){if(Ue)if(Re)n.texStorage2D(t.TEXTURE_2D,se,ue,K.width,K.height);else{let $=K.width,le=K.height;for(let me=0;me<se;me++)n.texImage2D(t.TEXTURE_2D,me,ue,$,le,0,ae,be,null),$>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(_),$.onpaint=le=>{const me=le.changedElements;for(const ee of d)me.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{const me=t.RGBA,ee=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,me,ee,Te,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(we.length>0){if(Re&&Ue){const $=je(we[0]);n.texStorage2D(t.TEXTURE_2D,se,ue,$.width,$.height)}for(let $=0,le=we.length;$<le;$++)ce=we[$],Re?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ae,be,ce):n.texImage2D(t.TEXTURE_2D,$,ue,ae,be,ce);_.generateMipmaps=!1}else if(Re){if(Ue){const $=je(K);n.texStorage2D(t.TEXTURE_2D,se,ue,$.width,$.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,be,K)}else n.texImage2D(t.TEXTURE_2D,0,ue,ae,be,K);p(_)&&A(H),oe.__version=ie.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Le(M,_,N){if(_.image.length!==6)return;const H=U(M,_),W=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const ie=i.get(W);if(W.version!==ie.__version||H===!0){n.activeTexture(t.TEXTURE0+N);const oe=Ge.getPrimaries(Ge.workingColorSpace),X=_.colorSpace===li?null:Ge.getPrimaries(_.colorSpace),K=_.colorSpace===li||oe===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!ae&&!be?ue[ee]=m(_.image[ee],!0,r.maxCubemapSize):ue[ee]=be?_.image[ee].image:_.image[ee],ue[ee]=Vt(_,ue[ee]);const ce=ue[0],we=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),Ue=S(_.internalFormat,we,Re,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,se=ie.__version===void 0||H===!0,$=W.dataReady;let le=T(_,ce);ge(t.TEXTURE_CUBE_MAP,_);let me;if(ae){I&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,ce.width,ce.height);for(let ee=0;ee<6;ee++){me=ue[ee].mipmaps;for(let Te=0;Te<me.length;Te++){const Ee=me[Te];_.format!==mn?we!==null?I?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ee.width,Ee.height,we,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ue,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ee.width,Ee.height,we,Re,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ue,Ee.width,Ee.height,0,we,Re,Ee.data)}}}else{if(me=_.mipmaps,I&&se){me.length>0&&le++;const ee=je(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,we,Re,ue[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,ue[ee].width,ue[ee].height,0,we,Re,ue[ee].data);for(let Te=0;Te<me.length;Te++){const lt=me[Te].image[ee].image;I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,lt.width,lt.height,we,Re,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ue,lt.width,lt.height,0,we,Re,lt.data)}}else{I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,Re,ue[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,we,Re,ue[ee]);for(let Te=0;Te<me.length;Te++){const Ee=me[Te];I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,we,Re,Ee.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ue,we,Re,Ee.image[ee])}}}p(_)&&A(t.TEXTURE_CUBE_MAP),ie.__version=W.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ce(M,_,N,H,W,ie){const oe=s.convert(N.format,N.colorSpace),X=s.convert(N.type),K=S(N.internalFormat,oe,X,N.normalized,N.colorSpace),ae=i.get(_),be=i.get(N);if(be.__renderTarget=_,!ae.__hasExternalTextures){const ue=Math.max(1,_.width>>ie),ce=Math.max(1,_.height>>ie);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,ie,K,ue,ce,_.depth,0,oe,X,null):n.texImage2D(W,ie,K,ue,ce,0,oe,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),_t(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,W,be.__webglTexture,0,ct(_)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,W,be.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(M,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer){const H=_.depthTexture,W=H&&H.isDepthTexture?H.type:null,ie=y(_.stencilBuffer,W),oe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_t(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(_),ie,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(_),ie,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ie,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,M)}else{const H=_.textures;for(let W=0;W<H.length;W++){const ie=H[W],oe=s.convert(ie.format,ie.colorSpace),X=s.convert(ie.type),K=S(ie.internalFormat,oe,X,ie.normalized,ie.colorSpace);_t(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(_),K,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(_),K,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,K,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(M,_,N){const H=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),ge(t.TEXTURE_CUBE_MAP,_.depthTexture);const ae=s.convert(_.depthTexture.format),be=s.convert(_.depthTexture.type);let ue;_.depthTexture.format===Jn?ue=t.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(ue=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,_.width,_.height,0,ae,be,null)}}else J(_.depthTexture,0);const ie=W.__webglTexture,oe=ct(_),X=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,K=_.depthTexture.format===Pi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Jn)_t(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ie,0);else if(_.depthTexture.format===Pi)_t(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(M){const _=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const H=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=H}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)ze(_.__webglFramebuffer[H],M,H);else{const H=M.texture.mipmaps;H&&H.length>0?ze(_.__webglFramebuffer[0],M,0):ze(_.__webglFramebuffer,M,0)}else if(N){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=t.createRenderbuffer(),ht(_.__webglDepthbuffer[H],M,!1);else{const W=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ie)}}else{const H=M.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ht(_.__webglDepthbuffer,M,!1);else{const W=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(M,_,N){const H=i.get(M);_!==void 0&&Ce(H.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&nt(M)}function Xe(M){const _=M.texture,N=i.get(M),H=i.get(_);M.addEventListener("dispose",x);const W=M.textures,ie=M.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=_.version,o.memory.textures++),ie){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let K=0;K<_.mipmaps.length;K++)N.__webglFramebuffer[X][K]=t.createFramebuffer()}else N.__webglFramebuffer[X]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)N.__webglFramebuffer[X]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(oe)for(let X=0,K=W.length;X<K;X++){const ae=i.get(W[X]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&_t(M)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){const K=W[X];N.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[X]);const ae=s.convert(K.format,K.colorSpace),be=s.convert(K.type),ue=S(K.internalFormat,ae,be,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),ce=ct(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,N.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ht(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ge(t.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Ce(N.__webglFramebuffer[X][K],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Ce(N.__webglFramebuffer[X],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(_)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let X=0,K=W.length;X<K;X++){const ae=W[X],be=i.get(ae);let ue=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,be.__webglTexture),ge(ue,ae),Ce(N.__webglFramebuffer,M,ae,t.COLOR_ATTACHMENT0+X,ue,0),p(ae)&&A(ue)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(X=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,H.__webglTexture),ge(X,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Ce(N.__webglFramebuffer[K],M,_,t.COLOR_ATTACHMENT0,X,K);else Ce(N.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,X,0);p(_)&&A(X),n.unbindTexture()}M.depthBuffer&&nt(M)}function gt(M){const _=M.textures;for(let N=0,H=_.length;N<H;N++){const W=_[N];if(p(W)){const ie=w(M),oe=i.get(W).__webglTexture;n.bindTexture(ie,oe),A(ie),n.unbindTexture()}}}const Et=[],bt=[];function Rt(M){if(M.samples>0){if(_t(M)===!1){const _=M.textures,N=M.width,H=M.height;let W=t.COLOR_BUFFER_BIT;const ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(M),X=_.length>1;if(X)for(let ae=0;ae<_.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const K=M.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const be=i.get(_[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,N,H,0,0,N,H,W,t.NEAREST),l===!0&&(Et.length=0,bt.length=0,Et.push(t.COLOR_ATTACHMENT0+ae),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Et.push(ie),bt.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ae=0;ae<_.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const be=i.get(_[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ct(M){return Math.min(r.maxSamples,M.samples)}function _t(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Vt(M,_){const N=M.colorSpace,H=M.format,W=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==is&&N!==li&&(Ge.getTransfer(N)===Qe?(H!==mn||W!==an)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",N)),_}function je(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=Z,this.getTextureUnits=q,this.setTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=he,this.rebindTextures=qe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VM(t,e){function n(i,r=li){let s;const o=Ge.getTransfer(r);if(i===an)return t.UNSIGNED_BYTE;if(i===pl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wd)return t.BYTE;if(i===Xd)return t.SHORT;if(i===ts)return t.UNSIGNED_SHORT;if(i===hl)return t.INT;if(i===Dn)return t.UNSIGNED_INT;if(i===Cn)return t.FLOAT;if(i===Kn)return t.HALF_FLOAT;if(i===qd)return t.ALPHA;if(i===$d)return t.RGB;if(i===mn)return t.RGBA;if(i===Jn)return t.DEPTH_COMPONENT;if(i===Pi)return t.DEPTH_STENCIL;if(i===Kd)return t.RED;if(i===gl)return t.RED_INTEGER;if(i===Di)return t.RG;if(i===_l)return t.RG_INTEGER;if(i===xl)return t.RGBA_INTEGER;if(i===Zs||i===qs||i===$s||i===Ks)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===ja||i===Qa||i===ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===nc||i===ic||i===rc||i===sc||i===oo||i===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tc||i===nc)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ic)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rc)return s.COMPRESSED_R11_EAC;if(i===sc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return s.COMPRESSED_RG11_EAC;if(i===oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ac||i===cc||i===lc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ac)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===Mc||i===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sc)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===yc||i===ao||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`;class YM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new rh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _n({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Ui{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const E=typeof XRWebGLBinding<"u",m=new YM,p={},A=n.getContextAttributes();let w=null,S=null;const y=[],T=[],C=new We;let x=null;const b=new on;b.viewport=new ft;const L=new on;L.viewport=new ft;const R=[b,L],F=new nx;let Z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=y[U];return Q===void 0&&(Q=new ea,y[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=y[U];return Q===void 0&&(Q=new ea,y[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=y[U];return Q===void 0&&(Q=new ea,y[U]=Q),Q.getHandSpace()};function G(U){const Q=T.indexOf(U.inputSource);if(Q===-1)return;const j=y[Q];j!==void 0&&(j.update(U.inputSource,U.frame,c||o),j.dispatchEvent({type:U.type,data:U.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let U=0;U<y.length;U++){const Q=T[U];Q!==null&&(T[U]=null,y[U].disconnect(Q))}Z=null,q=null,m.reset();for(const U in p)delete p[U];e.setRenderTarget(w),h=null,f=null,d=null,r=null,S=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),A.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,Me=null,Le=null;A.depth&&(Le=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=A.stencil?Pi:Jn,Me=A.stencil?ns:Dn);const Ce={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new gn(f.textureWidth,f.textureHeight,{format:mn,type:an,depthTexture:new _r(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new gn(h.framebufferWidth,h.framebufferHeight,{format:mn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(U){for(let Q=0;Q<U.removed.length;Q++){const j=U.removed[Q],Me=T.indexOf(j);Me>=0&&(T[Me]=null,y[Me].disconnect(j))}for(let Q=0;Q<U.added.length;Q++){const j=U.added[Q];let Me=T.indexOf(j);if(Me===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=T.length){T.push(j),Me=Ce;break}else if(T[Ce]===null){T[Ce]=j,Me=Ce;break}if(Me===-1)break}const Le=y[Me];Le&&Le.connect(j)}}const J=new O,te=new O;function re(U,Q,j){J.setFromMatrixPosition(Q.matrixWorld),te.setFromMatrixPosition(j.matrixWorld);const Me=J.distanceTo(te),Le=Q.projectionMatrix.elements,Ce=j.projectionMatrix.elements,ht=Le[14]/(Le[10]-1),ze=Le[14]/(Le[10]+1),nt=(Le[9]+1)/Le[5],qe=(Le[9]-1)/Le[5],Xe=(Le[8]-1)/Le[0],gt=(Ce[8]+1)/Ce[0],Et=ht*Xe,bt=ht*gt,Rt=Me/(-Xe+gt),ct=Rt*-Xe;if(Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ct),U.translateZ(Rt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Le[10]===-1)U.projectionMatrix.copy(Q.projectionMatrix),U.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const _t=ht+Rt,P=ze+Rt,Vt=Et-ct,je=bt+(Me-ct),M=nt*ze/P*_t,_=qe*ze/P*_t;U.projectionMatrix.makePerspective(Vt,je,M,_,_t,P),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function he(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let Q=U.near,j=U.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(j=m.depthFar)),F.near=L.near=b.near=Q,F.far=L.far=b.far=j,(Z!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,q=F.far),F.layers.mask=U.layers.mask|6,b.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Me=U.parent,Le=F.cameras;he(F,Me);for(let Ce=0;Ce<Le.length;Ce++)he(Le[Ce],Me);Le.length===2?re(F,b,L):F.projectionMatrix.copy(b.projectionMatrix),ve(U,F,Me)};function ve(U,Q,j){j===null?U.matrix.copy(Q.matrixWorld):(U.matrix.copy(j.matrixWorld),U.matrix.invert(),U.matrix.multiply(Q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Q.projectionMatrix),U.projectionMatrixInverse.copy(Q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ss*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(U){return p[U]};let ke=null;function at(U,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const j=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Me=!1;j.length!==F.cameras.length&&(F.cameras.length=0,Me=!0);for(let ze=0;ze<j.length;ze++){const nt=j[ze];let qe=null;if(h!==null)qe=h.getViewport(nt);else{const gt=d.getViewSubImage(f,nt);qe=gt.viewport,ze===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let Xe=R[ze];Xe===void 0&&(Xe=new on,Xe.layers.enable(ze),Xe.viewport=new ft,R[ze]=Xe),Xe.matrix.fromArray(nt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(nt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(qe.x,qe.y,qe.width,qe.height),ze===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Me===!0&&F.cameras.push(Xe)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const ze=d.getDepthInformation(j[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Le&&Le.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<j.length;ze++){const nt=j[ze].camera;if(nt){let qe=p[nt];qe||(qe=new rh,p[nt]=qe);const Xe=d.getCameraImage(nt);qe.sourceTexture=Xe}}}}for(let j=0;j<y.length;j++){const Me=T[j],Le=y[j];Me!==null&&Le!==void 0&&Le.update(Me,Q,c||o)}ke&&ke(U,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ge=new ch;ge.setAnimationLoop(at),this.setAnimationLoop=function(U){ke=U},this.dispose=function(){}}}const qM=new dt,mh=new Ne;mh.set(-1,0,0,0,1,0,0,0,1);function $M(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,sh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),E(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),w=A.envMap,S=A.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KM(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const T=y.program;i.uniformBlockBinding(S,T)}function c(S,y){let T=r[S.id];T===void 0&&(m(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",A));const C=y.program;i.updateUBOMapping(S,C);const x=e.render.frame;s[S.id]!==x&&(f(S),s[S.id]=x)}function u(S){const y=d();S.__bindingPointIndex=y;const T=t.createBuffer(),C=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let x=0,b=T.length;x<b;x++){const L=T[x];if(Array.isArray(L))for(let R=0,F=L.length;R<F;R++)h(L[R],x,R,C);else h(L,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,y,T,C){if(E(S,y,T,C)===!0){const x=S.__offset,b=S.value;if(Array.isArray(b)){let L=0;for(let R=0;R<b.length;R++){const F=b[R],Z=p(F);g(F,S.__data,L),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function g(S,y,T){typeof S=="number"||typeof S=="boolean"?y[0]=S:S.isMatrix3?(y[0]=S.elements[0],y[1]=S.elements[1],y[2]=S.elements[2],y[3]=0,y[4]=S.elements[3],y[5]=S.elements[4],y[6]=S.elements[5],y[7]=0,y[8]=S.elements[6],y[9]=S.elements[7],y[10]=S.elements[8],y[11]=0):ArrayBuffer.isView(S)?y.set(new S.constructor(S.buffer,S.byteOffset,y.length)):S.toArray(y,T)}function E(S,y,T,C){const x=S.value,b=y+"_"+T;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:ArrayBuffer.isView(x)?C[b]=x.slice():C[b]=x.clone(),!0;{const L=C[b];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return C[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(S){const y=S.uniforms;let T=0;const C=16;for(let b=0,L=y.length;b<L;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let F=0,Z=R.length;F<Z;F++){const q=R[F],G=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,V=G.length;Y<V;Y++){const J=G[Y],te=p(J),re=T%C,he=re%te.boundary,ve=re+he;T+=he,ve!==0&&C-ve<te.storage&&(T+=C-ve),q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=te.storage}}}const x=T%C;return x>0&&(T+=C-x),S.__size=T,S.__cache={},this}function p(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),y}function A(S){const y=S.target;y.removeEventListener("dispose",A);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function w(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:w}}const JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function jM(){return Tn===null&&(Tn=new B_(JM,16,16,Di,Kn),Tn.name="DFG_LUT",Tn.minFilter=Nt,Tn.magFilter=Nt,Tn.wrapS=Wn,Tn.wrapT=Wn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class QM{constructor(e={}){const{canvas:n=t_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=an}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const E=h,m=new Set([xl,_l,gl]),p=new Set([an,Dn,ts,ns,pl,ml]),A=new Uint32Array(4),w=new Int32Array(4),S=new O;let y=null,T=null;const C=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let R=!1,F=null,Z=null,q=null,G=null;this._outputColorSpace=sn;let Y=0,V=0,J=null,te=-1,re=null;const he=new ft,ve=new ft;let ke=null;const at=new $e(0);let ge=0,U=n.width,Q=n.height,j=1,Me=null,Le=null;const Ce=new ft(0,0,U,Q),ht=new ft(0,0,U,Q);let ze=!1;const nt=new yl;let qe=!1,Xe=!1;const gt=new dt,Et=new O,bt=new ft,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function _t(){return J===null?j:1}let P=i;function Vt(v,D){return n.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fl}`),n.addEventListener("webglcontextlost",lt,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",vn,!1),P===null){const D="webgl2";if(P=Vt(D,v),P===null)throw Vt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ve("WebGLRenderer: "+v.message),v}let je,M,_,N,H,W,ie,oe,X,K,ae,be,ue,ce,we,Re,Ue,I,se,$,le,me,ee;function Te(){je=new jE(P),je.init(),le=new VM(P,je),M=new WE(P,je,e,le),_=new HM(P,je),M.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),Z=P.createFramebuffer(),q=P.createFramebuffer(),G=P.createFramebuffer(),N=new tS(P),H=new wM,W=new kM(P,je,_,H,M,le,N),ie=new JE(L),oe=new sx(P),me=new kE(P,oe),X=new QE(P,oe,N,me),K=new iS(P,X,oe,me,N),I=new nS(P,M,W),we=new XE(H),ae=new AM(L,ie,je,M,me,we),be=new $M(L,H),ue=new RM,ce=new UM(je),Ue=new HE(L,ie,_,K,g,l),Re=new GM(L,K,M),ee=new KM(P,N,M,_),se=new VE(P,je,N),$=new eS(P,je,N),N.programs=ae.programs,L.capabilities=M,L.extensions=je,L.properties=H,L.renderLists=ue,L.shadowMap=Re,L.state=_,L.info=N}Te(),E!==an&&(b=new sS(E,n.width,n.height,a,r,s));const Ee=new ZM(L,P);this.xr=Ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(U,Q,!1))},this.getSize=function(v){return v.set(U,Q)},this.setSize=function(v,D,k=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}U=v,Q=D,n.width=Math.floor(v*j),n.height=Math.floor(D*j),k===!0&&(n.style.width=v+"px",n.style.height=D+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(U*j,Q*j).floor()},this.setDrawingBufferSize=function(v,D,k){U=v,Q=D,j=k,n.width=Math.floor(v*k),n.height=Math.floor(D*k),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(E===an){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(he)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,D,k,B){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,D,k,B),_.viewport(he.copy(Ce).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(ht)},this.setScissor=function(v,D,k,B){v.isVector4?ht.set(v.x,v.y,v.z,v.w):ht.set(v,D,k,B),_.scissor(ve.copy(ht).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(v){_.setScissorTest(ze=v)},this.setOpaqueSort=function(v){Me=v},this.setTransparentSort=function(v){Le=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,k=!0){let B=0;if(v){let z=!1;if(J!==null){const pe=J.texture.format;z=m.has(pe)}if(z){const pe=J.texture.type,xe=p.has(pe),de=Ue.getClearColor(),Se=Ue.getClearAlpha(),ye=de.r,Fe=de.g,Be=de.b;xe?(A[0]=ye,A[1]=Fe,A[2]=Be,A[3]=Se,P.clearBufferuiv(P.COLOR,0,A)):(w[0]=ye,w[1]=Fe,w[2]=Be,w[3]=Se,P.clearBufferiv(P.COLOR,0,w))}else B|=P.COLOR_BUFFER_BIT}D&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){n.removeEventListener("webglcontextlost",lt,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),Ue.dispose(),ue.dispose(),ce.dispose(),H.dispose(),ie.dispose(),K.dispose(),me.dispose(),ee.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ru),Ee.removeEventListener("sessionend",su),Si.stop()};function lt(v){v.preventDefault(),Su("WebGLRenderer: Context Lost."),R=!0}function st(){Su("WebGLRenderer: Context Restored."),R=!1;const v=N.autoReset,D=Re.enabled,k=Re.autoUpdate,B=Re.needsUpdate,z=Re.type;Te(),N.autoReset=v,Re.enabled=D,Re.autoUpdate=k,Re.needsUpdate=B,Re.type=z}function vn(v){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function En(v){const D=v.target;D.removeEventListener("dispose",En),c0(D)}function c0(v){l0(v),H.remove(v)}function l0(v){const D=H.get(v).programs;D!==void 0&&(D.forEach(function(k){ae.releaseProgram(k)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,k,B,z,pe){D===null&&(D=Rt);const xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=d0(v,D,k,B,z);_.setMaterial(B,xe);let Se=k.index,ye=1;if(B.wireframe===!0){if(Se=X.getWireframeAttribute(k),Se===void 0)return;ye=2}const Fe=k.drawRange,Be=k.attributes.position;let Ae=Fe.start*ye,et=(Fe.start+Fe.count)*ye;pe!==null&&(Ae=Math.max(Ae,pe.start*ye),et=Math.min(et,(pe.start+pe.count)*ye)),Se!==null?(Ae=Math.max(Ae,0),et=Math.min(et,Se.count)):Be!=null&&(Ae=Math.max(Ae,0),et=Math.min(et,Be.count));const pt=et-Ae;if(pt<0||pt===1/0)return;me.setup(z,B,de,k,Se);let ut,it=se;if(Se!==null&&(ut=oe.get(Se),it=$,it.setIndex(ut)),z.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*_t()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(z.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),_.setLineWidth(Ut*_t()),z.isLineSegments?it.setMode(P.LINES):z.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else z.isPoints?it.setMode(P.POINTS):z.isSprite&&it.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ut=z._multiDrawStarts,_e=z._multiDrawCounts,Yt=z._multiDrawCount,Ye=Se?oe.get(Se).bytesPerElement:1,tn=H.get(B).currentProgram.getUniforms();for(let Sn=0;Sn<Yt;Sn++)tn.setValue(P,"_gl_DrawID",Sn),it.render(Ut[Sn]/Ye,_e[Sn])}else if(z.isInstancedMesh)it.renderInstances(Ae,pt,z.count);else if(k.isInstancedBufferGeometry){const Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,Ut);it.renderInstances(Ae,pt,_e)}else it.render(Ae,pt)};function iu(v,D,k){v.transparent===!0&&v.side===Vn&&v.forceSinglePass===!1?(v.side=Wt,v.needsUpdate=!0,gs(v,D,k),v.side=_i,v.needsUpdate=!0,gs(v,D,k),v.side=Vn):gs(v,D,k)}this.compile=function(v,D,k=null){k===null&&(k=v),T=ce.get(k),T.init(D),x.push(T),k.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==k&&v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const de=pe[xe];iu(de,k,z),B.add(de)}else iu(pe,k,z),B.add(pe)}),T=x.pop(),B},this.compileAsync=function(v,D,k=null){const B=this.compile(v,D,k);return new Promise(z=>{function pe(){if(B.forEach(function(xe){H.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){z(v);return}setTimeout(pe,10)}je.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Wo=null;function u0(v){Wo&&Wo(v)}function ru(){Si.stop()}function su(){Si.start()}const Si=new ch;Si.setAnimationLoop(u0),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(v){Wo=v,Ee.setAnimationLoop(v),v===null?Si.stop():Si.start()},Ee.addEventListener("sessionstart",ru),Ee.addEventListener("sessionend",su),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(v,D);const k=Ee.enabled===!0&&Ee.isPresenting===!0,B=b!==null&&(J===null||k)&&b.begin(L,J);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,D,J),T=ce.get(v,x.length),T.init(D),T.state.textureUnits=W.getTextureUnits(),x.push(T),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(gt,Rn,D.reversedDepth),Xe=this.localClippingEnabled,qe=we.init(this.clippingPlanes,Xe),y=ue.get(v,C.length),y.init(),C.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=L.xr.getDepthSensingMesh();xe!==null&&Xo(xe,D,-1/0,L.sortObjects)}Xo(v,D,0,L.sortObjects),y.finish(),L.sortObjects===!0&&y.sort(Me,Le,D.reversedDepth),ct=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ct&&Ue.addToRenderList(y,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&we.beginShadows();const z=T.state.shadowsArray;if(Re.render(z,v,D),qe===!0&&we.endShadows(),(B&&b.hasRenderPass())===!1){const xe=y.opaque,de=y.transmissive;if(T.setupLights(),D.isArrayCamera){const Se=D.cameras;if(de.length>0)for(let ye=0,Fe=Se.length;ye<Fe;ye++){const Be=Se[ye];au(xe,de,v,Be)}ct&&Ue.render(v);for(let ye=0,Fe=Se.length;ye<Fe;ye++){const Be=Se[ye];ou(y,v,Be,Be.viewport)}}else de.length>0&&au(xe,de,v,D),ct&&Ue.render(v),ou(y,v,D)}J!==null&&V===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),B&&b.end(L),v.isScene===!0&&v.onAfterRender(L,v,D),me.resetDefaultState(),te=-1,re=null,x.pop(),x.length>0?(T=x[x.length-1],W.setTextureUnits(T.state.textureUnits),qe===!0&&we.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,F!==null&&F.renderEnd()};function Xo(v,D,k,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||nt.intersectsSprite(v)){B&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(gt);const xe=K.update(v),de=v.material;de.visible&&y.push(v,xe,de,k,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||nt.intersectsObject(v))){const xe=K.update(v),de=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),bt.copy(xe.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(gt)),Array.isArray(de)){const Se=xe.groups;for(let ye=0,Fe=Se.length;ye<Fe;ye++){const Be=Se[ye],Ae=de[Be.materialIndex];Ae&&Ae.visible&&y.push(v,xe,Ae,k,bt.z,Be)}}else de.visible&&y.push(v,xe,de,k,bt.z,null)}}const pe=v.children;for(let xe=0,de=pe.length;xe<de;xe++)Xo(pe[xe],D,k,B)}function ou(v,D,k,B){const{opaque:z,transmissive:pe,transparent:xe}=v;T.setupLightsView(k),qe===!0&&we.setGlobalState(L.clippingPlanes,k),B&&_.viewport(he.copy(B)),z.length>0&&ms(z,D,k),pe.length>0&&ms(pe,D,k),xe.length>0&&ms(xe,D,k),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function au(v,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Ae=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new gn(1,1,{generateMipmaps:!0,type:Ae?Kn:an,minFilter:fi,samples:Math.max(4,M.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const pe=T.state.transmissionRenderTarget[B.id],xe=B.viewport||he;pe.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);const de=L.getRenderTarget(),Se=L.getActiveCubeFace(),ye=L.getActiveMipmapLevel();L.setRenderTarget(pe),L.getClearColor(at),ge=L.getClearAlpha(),ge<1&&L.setClearColor(16777215,.5),L.clear(),ct&&Ue.render(k);const Fe=L.toneMapping;L.toneMapping=Pn;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),qe===!0&&we.setGlobalState(L.clippingPlanes,B),ms(v,k,B),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let et=0,pt=D.length;et<pt;et++){const ut=D[et],{object:it,geometry:Ut,material:_e,group:Yt}=ut;if(_e.side===Vn&&it.layers.test(B.layers)){const Ye=_e.side;_e.side=Wt,_e.needsUpdate=!0,cu(it,k,B,Ut,_e,Yt),_e.side=Ye,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}L.setRenderTarget(de,Se,ye),L.setClearColor(at,ge),Be!==void 0&&(B.viewport=Be),L.toneMapping=Fe}function ms(v,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,pe=v.length;z<pe;z++){const xe=v[z],{object:de,geometry:Se,group:ye}=xe;let Fe=xe.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),de.layers.test(k.layers)&&cu(de,D,k,Se,Fe,ye)}}function cu(v,D,k,B,z,pe){v.onBeforeRender(L,D,k,B,z,pe),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(L,D,k,B,v,pe),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,L.renderBufferDirect(k,D,B,z,v,pe),z.side=_i,z.needsUpdate=!0,L.renderBufferDirect(k,D,B,z,v,pe),z.side=Vn):L.renderBufferDirect(k,D,B,z,v,pe),v.onAfterRender(L,D,k,B,z,pe)}function gs(v,D,k){D.isScene!==!0&&(D=Rt);const B=H.get(v),z=T.state.lights,pe=T.state.shadowsArray,xe=z.state.version,de=ae.getParameters(v,z.state,pe,D,k,T.state.lightProbeGridArray),Se=ae.getProgramCacheKey(de);let ye=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ie.get(v.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",En),ye=new Map,B.programs=ye);let Be=ye.get(Se);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===xe)return uu(v,de),Be}else de.uniforms=ae.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,k,de),v.onBeforeCompile(de,L),Be=ae.acquireProgram(de,Se),ye.set(Se,Be),B.uniforms=de.uniforms;const Ae=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=we.uniform),uu(v,de),B.needsLights=p0(v),B.lightsStateVersion=xe,B.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function lu(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Js.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function uu(v,D){const k=H.get(v);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function f0(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let k=0,B=v.length;k<B;k++){const z=v[k];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function d0(v,D,k,B,z){D.isScene!==!0&&(D=Rt),W.resetTextureUnits();const pe=D.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,de=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ge.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=ie.get(B.envMap||xe,Se),Fe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!k.morphAttributes.position,et=!!k.morphAttributes.normal,pt=!!k.morphAttributes.color;let ut=Pn;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ut=L.toneMapping);const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ut=it!==void 0?it.length:0,_e=H.get(B),Yt=T.state.lights;if(qe===!0&&(Xe===!0||v!==re)){const ot=v===re&&B.id===te;we.setState(B,v,ot)}let Ye=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Yt.state.version||_e.outputColorSpace!==de||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==ye||B.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==we.numPlanes||_e.numIntersection!==we.numIntersection)||_e.vertexAlphas!==Fe||_e.vertexTangents!==Be||_e.morphTargets!==Ae||_e.morphNormals!==et||_e.morphColors!==pt||_e.toneMapping!==ut||_e.morphTargetsCount!==Ut||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,_e.__version=B.version);let tn=_e.currentProgram;Ye===!0&&(tn=gs(B,D,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,tn,_e));let Sn=!1,ei=!1,Bi=!1;const rt=tn.getUniforms(),mt=_e.uniforms;if(_.useProgram(tn.program)&&(Sn=!0,ei=!0,Bi=!0),B.id!==te&&(te=B.id,ei=!0),_e.needsLights){const ot=f0(T.state.lightProbeGridArray,z);_e.lightProbeGrid!==ot&&(_e.lightProbeGrid=ot,ei=!0)}if(Sn||re!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),rt.setValue(P,"projectionMatrix",v.projectionMatrix),rt.setValue(P,"viewMatrix",v.matrixWorldInverse);const ni=rt.map.cameraPosition;ni!==void 0&&ni.setValue(P,Et.setFromMatrixPosition(v.matrixWorld)),M.logarithmicDepthBuffer&&rt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),re!==v&&(re=v,ei=!0,Bi=!0)}if(_e.needsLights&&(Yt.state.directionalShadowMap.length>0&&rt.setValue(P,"directionalShadowMap",Yt.state.directionalShadowMap,W),Yt.state.spotShadowMap.length>0&&rt.setValue(P,"spotShadowMap",Yt.state.spotShadowMap,W),Yt.state.pointShadowMap.length>0&&rt.setValue(P,"pointShadowMap",Yt.state.pointShadowMap,W)),z.isSkinnedMesh){rt.setOptional(P,z,"bindMatrix"),rt.setOptional(P,z,"bindMatrixInverse");const ot=z.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),rt.setValue(P,"boneTexture",ot.boneTexture,W))}z.isBatchedMesh&&(rt.setOptional(P,z,"batchingTexture"),rt.setValue(P,"batchingTexture",z._matricesTexture,W),rt.setOptional(P,z,"batchingIdTexture"),rt.setValue(P,"batchingIdTexture",z._indirectTexture,W),rt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&rt.setValue(P,"batchingColorTexture",z._colorsTexture,W));const ti=k.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&I.update(z,k,tn),(ei||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,rt.setValue(P,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(mt.envMapIntensity.value=D.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=jM()),ei){if(rt.setValue(P,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&h0(mt,Bi),pe&&B.fog===!0&&be.refreshFogUniforms(mt,pe),be.refreshMaterialUniforms(mt,B,j,Q,T.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){const ot=_e.lightProbeGrid;mt.probesSH.value=ot.texture,mt.probesMin.value.copy(ot.boundingBox.min),mt.probesMax.value.copy(ot.boundingBox.max),mt.probesResolution.value.copy(ot.resolution)}Js.upload(P,lu(_e),mt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(P,lu(_e),mt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(P,"center",z.center),rt.setValue(P,"modelViewMatrix",z.modelViewMatrix),rt.setValue(P,"normalMatrix",z.normalMatrix),rt.setValue(P,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ot=B.uniformsGroups;for(let ni=0,zi=ot.length;ni<zi;ni++){const fu=ot[ni];ee.update(fu,tn),ee.bind(fu,tn)}}return tn}function h0(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function p0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(v,D,k){const B=H.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=D,H.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const k=H.get(v);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,k=0){J=v,Y=D,V=k;let B=null,z=!1,pe=!1;if(v){const de=H.get(v);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),he.copy(v.viewport),ve.copy(v.scissor),ke=v.scissorTest,_.viewport(he),_.scissor(ve),_.setScissorTest(ke),te=-1;return}else if(de.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(de.__hasExternalTextures)W.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Fe=v.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&H.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}const Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const ye=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[D])?B=ye[D][k]:B=ye[D],z=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?B=H.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[k]:B=ye,he.copy(v.viewport),ve.copy(v.scissor),ke=v.scissorTest}else he.copy(Ce).multiplyScalar(j).floor(),ve.copy(ht).multiplyScalar(j).floor(),ke=ze;if(k!==0&&(B=Z),_.bindFramebuffer(P.FRAMEBUFFER,B)&&_.drawBuffers(v,B),_.viewport(he),_.scissor(ve),_.setScissorTest(ke),z){const de=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,k)}else if(pe){const de=D;for(let Se=0;Se<v.textures.length;Se++){const ye=H.get(v.textures[Se]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Se,ye.__webglTexture,k,de)}}else if(v!==null&&k!==0){const de=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,k)}te=-1},this.readRenderTargetPixels=function(v,D,k,B,z,pe,xe,de=0){if(!(v&&v.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){_.bindFramebuffer(P.FRAMEBUFFER,Se);try{const ye=v.textures[de],Fe=ye.format,Be=ye.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!M.textureFormatReadable(Fe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Be)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&k>=0&&k<=v.height-z&&P.readPixels(D,k,B,z,le.convert(Fe),le.convert(Be),pe)}finally{const ye=J!==null?H.get(J).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,D,k,B,z,pe,xe,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(D>=0&&D<=v.width-B&&k>=0&&k<=v.height-z){_.bindFramebuffer(P.FRAMEBUFFER,Se);const ye=v.textures[de],Fe=ye.format,Be=ye.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!M.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(D,k,B,z,le.convert(Fe),le.convert(Be),0);const et=J!==null?H.get(J).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,et);const pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await n_(P,pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe),P.deleteBuffer(Ae),P.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,k=0){const B=Math.pow(2,-k),z=Math.floor(v.image.width*B),pe=Math.floor(v.image.height*B),xe=D!==null?D.x:0,de=D!==null?D.y:0;W.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,xe,de,z,pe),_.unbindTexture()},this.copyTextureToTexture=function(v,D,k=null,B=null,z=0,pe=0){let xe,de,Se,ye,Fe,Be,Ae,et,pt;const ut=v.isCompressedTexture?v.mipmaps[pe]:v.image;if(k!==null)xe=k.max.x-k.min.x,de=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,Fe=k.min.y,Be=k.isBox3?k.min.z:0;else{const mt=Math.pow(2,-z);xe=Math.floor(ut.width*mt),de=Math.floor(ut.height*mt),v.isDataArrayTexture?Se=ut.depth:v.isData3DTexture?Se=Math.floor(ut.depth*mt):Se=1,ye=0,Fe=0,Be=0}B!==null?(Ae=B.x,et=B.y,pt=B.z):(Ae=0,et=0,pt=0);const it=le.convert(D.format),Ut=le.convert(D.type);let _e;D.isData3DTexture?(W.setTexture3D(D,0),_e=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),_e=P.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),_e=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=_.getParameter(P.UNPACK_ROW_LENGTH),Ye=_.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=_.getParameter(P.UNPACK_SKIP_PIXELS),Sn=_.getParameter(P.UNPACK_SKIP_ROWS),ei=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),_.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const Bi=v.isDataArrayTexture||v.isData3DTexture,rt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const mt=H.get(v),ti=H.get(D),ot=H.get(mt.__renderTarget),ni=H.get(ti.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,ot.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let zi=0;zi<Se;zi++)Bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(v).__webglTexture,z,Be+zi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pe,pt+zi)),P.blitFramebuffer(ye,Fe,xe,de,Ae,et,xe,de,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||H.has(v)){const mt=H.get(v),ti=H.get(D);_.bindFramebuffer(P.READ_FRAMEBUFFER,q),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let ot=0;ot<Se;ot++)Bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.__webglTexture,z,Be+ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,z),rt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ti.__webglTexture,pe,pt+ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ti.__webglTexture,pe),z!==0?P.blitFramebuffer(ye,Fe,xe,de,Ae,et,xe,de,P.COLOR_BUFFER_BIT,P.NEAREST):rt?P.copyTexSubImage3D(_e,pe,Ae,et,pt+ot,ye,Fe,xe,de):P.copyTexSubImage2D(_e,pe,Ae,et,ye,Fe,xe,de);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(_e,pe,Ae,et,pt,xe,de,Se,it,Ut,ut.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(_e,pe,Ae,et,pt,xe,de,Se,it,ut.data):P.texSubImage3D(_e,pe,Ae,et,pt,xe,de,Se,it,Ut,ut):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pe,Ae,et,xe,de,it,Ut,ut.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pe,Ae,et,ut.width,ut.height,it,ut.data):P.texSubImage2D(P.TEXTURE_2D,pe,Ae,et,xe,de,it,Ut,ut);_.pixelStorei(P.UNPACK_ROW_LENGTH,Yt),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),_.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Sn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ei),pe===0&&D.generateMipmaps&&P.generateMipmap(_e),_.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){Y=0,V=0,J=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ge._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.15.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var eT=Object.defineProperty,wl=(t,e)=>{for(var n in e)eT(t,n,{get:e[n],enumerable:!0})},tT={};wl(tT,{ACTIONS:()=>Sh,ANIMATION_MIN_DURATION:()=>Ic,CAPTURE_EVENTS_CLASS:()=>ds,CTRLZOOM_TIMEOUT:()=>Eh,DBLCLICK_DELAY:()=>_h,EASINGS:()=>js,ICONS:()=>xn,IDS:()=>Pt,KEY_CODES:()=>At,LONGTOUCH_DELAY:()=>xh,MOVE_THRESHOLD:()=>gh,SPHERE_RADIUS:()=>qn,TWOFINGERSOVERLAY_DELAY:()=>vh,VIEWER_DATA:()=>vi});var nT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,iT='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',rT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,sT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,oT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,aT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,cT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,lT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,uT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Ic=500,gh=4,_h=300,xh=500,vh=100,Eh=2e3,qn=10,vi="photoSphereViewer",ds="psv--capture-event",Sh=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Sh||{}),Pt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},At={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},xn={arrow:nT,close:iT,download:rT,fullscreenIn:sT,fullscreenOut:oT,info:aT,menu:cT,zoomIn:lT,zoomOut:uT},js={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},fT={};wl(fT,{Animation:()=>mo,Dynamic:()=>zr,MultiDynamic:()=>Xh,PressHandler:()=>No,Slider:()=>Zh,SliderDirection:()=>Yh,addClasses:()=>Cl,angle:()=>Th,applyEulerInverse:()=>Uc,checkClosedShadowDom:()=>kh,checkStylesheet:()=>Hh,checkVersion:()=>Nl,cleanCssPosition:()=>zh,clone:()=>Po,createSizedTexture:()=>Wh,createTexture:()=>Nc,cssPositionIsOrdered:()=>Dl,dasherize:()=>gT,deepEqual:()=>Fh,deepmerge:()=>Nh,distance:()=>Mh,exitFullscreen:()=>Lh,firstNonNull:()=>bn,getAbortError:()=>Lc,getAngle:()=>yh,getClosest:()=>wh,getConfigParser:()=>Do,getElement:()=>Ah,getEventTarget:()=>uo,getMatchingTarget:()=>Ch,getPosition:()=>Rh,getShortestArc:()=>bh,getStyleProperty:()=>In,getTouchData:()=>Pc,getXMPValue:()=>$t,greatArcDistance:()=>hT,hasParent:()=>mT,invertResolvableBoolean:()=>Lo,isAbortError:()=>Bh,isEmpty:()=>Uh,isExtendedPosition:()=>Ll,isFullscreenEnabled:()=>Ih,isNil:()=>wt,isPlainObject:()=>Il,keyPressMatch:()=>Rl,logWarn:()=>Ct,mergePanoData:()=>Vh,parseAngle:()=>ui,parsePoint:()=>_T,parseSpeed:()=>Gh,removeClasses:()=>pT,requestFullscreen:()=>Ph,resolveBoolean:()=>Pl,speedToDuration:()=>Dc,sum:()=>dT,throttle:()=>Dh,toggleClass:()=>Io,wrap:()=>Xr});function Xr(t,e){let n=t%e;return n<0&&(n+=e),n}function dT(t){return t.reduce((e,n)=>e+n,0)}function Mh(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Th(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function bh(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,r)=>{const s=e-t+r;return Math.abs(s)<Math.abs(i)?s:i},1/0)}function yh(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function hT([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const r=(n-t)*Math.cos((e+i)/2),s=i-e;return Math.sqrt(r*r+s*s)}function Ah(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Io(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function Cl(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function pT(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function mT(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function wh(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function uo(t){return(t==null?void 0:t.composedPath()[0])||null}function Ch(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function Rh(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function In(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Pc(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:Mh(e,n),angle:Th(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var fo;function Ih(t,e=!1){return e?t===fo:document.fullscreenElement===t}function Ph(t,e=!1){e?(fo=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function Lh(t=!1){t?(fo.classList.remove("psv-fullscreen-emulation"),fo=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Rl(t,e){let n,i=!1,r=!1,s=!1,o=!1;return e==="+"?n=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":r=!0;break;case"Alt":s=!0;break;case"Meta":o=!0;break;case"Space":n=" ";break;case"Plus":n="+";break;case"Minus":n="-";break;default:n=a;break}}),i===t.shiftKey&&r===t.ctrlKey&&s===t.altKey&&o===t.metaKey&&n===t.key}function gT(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function Dh(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function Il(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Nh(t,e){const n=e;return(function i(r,s){return Array.isArray(s)?(!r||!Array.isArray(r)?r=[]:r.length=0,s.forEach((o,a)=>{r[a]=i(null,o)})):typeof s=="object"?((!r||Array.isArray(r))&&(r={}),Object.keys(s).forEach(o=>{o!=="__proto__"&&(typeof s[o]!="object"||!s[o]||!Il(s[o])?r[o]=s[o]:s[o]!==n&&(r[o]?i(r[o],s[o]):r[o]=i(null,s[o])))})):r=s,r})(t,e)}function Po(t){return Nh(null,t)}function Uh(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function wt(t){return t==null}function bn(...t){for(const e of t)if(!wt(e))return e;return null}function Fh(t,e){if(t===e)return!0;if(gf(t)&&gf(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!Fh(t[n],e[n]))return!1;return!0}else return!1}function gf(t){return typeof t=="object"&&t!==null}var Ke=class Oh extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,Oh)}};function Pl(t,e){Il(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Lo(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Lc(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Bh(t){return(t==null?void 0:t.name)==="AbortError"}function Ct(t){console.warn(`PhotoSphereViewer: ${t}`)}function Ll(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function $t(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const r=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const r=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}return null}var _f={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ho=["left","center","right"],po=["top","center","bottom"],xf=[...ho,...po],rn="center";function _T(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(_f[e[0]]?e=[e[0],rn]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(r=>_f[r]||r),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function zh(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===rn?t=[rn,rn]:ho.indexOf(t[0])!==-1?t=[rn,t[0]]:po.indexOf(t[0])!==-1&&(t=[t[0],rn])),t.length!==2||xf.indexOf(t[0])===-1||xf.indexOf(t[1])===-1?(Ct(`Unparsable position ${t}`),null):!e&&t[0]===rn&&t[1]===rn?(Ct("Invalid position center center"),null):(n&&!Dl(t)&&(t=[t[1],t[0]]),t[1]===rn&&ho.indexOf(t[0])!==-1&&(t=[rn,t[0]]),t[0]===rn&&po.indexOf(t[1])!==-1&&(t=[t[1],rn]),t)):null}function Dl(t){return po.indexOf(t[0])!==-1&&ho.indexOf(t[1])!==-1}function Gh(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const r=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(r.match(/(pm|per minute)$/)&&(i/=60),r){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ze.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Ke(`Unknown speed unit "${r}"`)}}else e=t;return e}function Dc(t,e){if(typeof t!="number"){const n=Gh(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function ui(t,e=!1,n=e){let i;if(typeof t=="string"){const r=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!r)throw new Ke(`Unknown angle "${t}"`);const s=parseFloat(r[1]),o=r[2];if(o)switch(o){case"deg":case"degs":i=Ze.degToRad(s);break;case"rad":case"rads":i=s;break;default:throw new Ke(`Unknown angle unit "${o}"`)}else i=s}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new Ke(`Unknown angle "${t}"`);return i=Xr(e?i+Math.PI:i,Math.PI*2),e?Ze.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function Do(t,e){const n=function(i){const r=Po({...t,...i}),s={};for(let[o,a]of Object.entries(r)){if(e&&o in e)a=e[o](a,{rawConfig:r,defValue:t[o]});else if(!(o in t)){Ct(`Unknown option ${o}`);continue}s[o]=a}return s};return n.defaults=t,n.parsers=e||{},n}function Hh(t,e){In(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Nl(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function kh(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Vh(t,e,n,i){const r={isEquirectangular:!0,fullWidth:bn(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:bn(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:bn(n==null?void 0:n.croppedWidth,i==null?void 0:i.croppedWidth,t),croppedHeight:bn(n==null?void 0:n.croppedHeight,i==null?void 0:i.croppedHeight,e),croppedX:bn(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX),croppedY:bn(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY),poseHeading:bn(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:bn(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:bn(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};if(r.croppedWidth!==t){const s=t/r.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(o=>{r[o]&&(r[o]=Math.round(r[o]*s))})}return!r.fullWidth&&!r.fullHeight&&(r.fullWidth=Math.max(r.croppedWidth,r.croppedHeight*2),r.fullHeight=Math.round(r.fullWidth/2)),r.fullWidth||(r.fullWidth=r.fullHeight*2),r.fullHeight||(r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX===null&&(r.croppedX=Math.round((r.fullWidth-t)/2)),r.croppedY===null&&(r.croppedY=Math.round((r.fullHeight-e)/2)),Math.abs(r.fullWidth-r.fullHeight*2)>1&&(Ct("Invalid panoData, fullWidth should be twice fullHeight"),r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX+r.croppedWidth>r.fullWidth&&(Ct("Invalid panoData, croppedX + croppedWidth > fullWidth"),r.croppedX=r.fullWidth-r.croppedWidth),r.croppedY+r.croppedHeight>r.fullHeight&&(Ct("Invalid panoData, croppedY + croppedHeight > fullHeight"),r.croppedY=r.fullHeight-r.croppedHeight),r.croppedX<0&&(Ct("Invalid panoData, croppedX < 0"),r.croppedX=0),r.croppedY<0&&(Ct("Invalid panoData, croppedY < 0"),r.croppedY=0),r}var Dr=`${vi}_touchSupport`,kt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=ET(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=xT();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=vT(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!kt.isWebGLSupported)throw new Ke("WebGL 2 is not supported.");if(kt.maxTextureWidth===0)throw new Ke("Unable to detect system capabilities")}};function xT(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function vT(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Dr in localStorage&&(t=localStorage[Dr]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",s),clearTimeout(a)},r=()=>{i(),localStorage[Dr]=!1,n(!1)},s=()=>{i(),localStorage[Dr]=!0,n(!0)},o=()=>{i(),localStorage[Dr]=t,n(t)};window.addEventListener("mousedown",r,!1),window.addEventListener("touchstart",s,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function ET(t){let e=t,n=!1;const i=document.createElement("canvas"),r=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const s=document.createElement("canvas"),o=s.getContext("2d");s.width=e,s.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),r.drawImage(s,e-1,e/2-1,1,1,0,0,1,1),r.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}s.width=0,s.height=0,n||(e/=2)}if(n)return e;throw new Ke("Unable to detect system capabilities")}function Nc(t,e=!1){const n=new Bt(t);return n.needsUpdate=!0,n.minFilter=e?fi:Nt,n.generateMipmaps=e,n.anisotropy=e?2:1,n}function Wh(t,e){if(e||t.width>kt.maxTextureWidth){const n=Math.min(1,kt.maxCanvasWidth/t.width),i=new OffscreenCanvas(Math.floor(t.width*n),Math.floor(t.height*n)),r=i.getContext("2d");return e&&(r.filter=`blur(${i.width/e.factor}px)`),r.drawImage(t,0,0,i.width,i.height),Nc(i)}return Nc(t)}var vf=new Fi;function Uc(t,e){vf.setFromEuler(e).invert(),t.applyQuaternion(vf)}var mo=class{constructor(t){this.easing=js.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:js[t.easing]||js.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,r]of Object.entries(this.options.properties))if(r){const s=r.start+(r.end-r.start)*this.easing(e);n[i]=s}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,r]of Object.entries(this.options.properties))r&&(n[i]=r.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},zr=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Ke("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?Xr(t,this.max):Ze.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?Xr(t,this.max):Ze.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?Xr(n,this.max):Ze.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},Xh=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},No=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Yh=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Yh||{}),Zh=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let r;this.isVertical?r=Ze.clamp((i.bottom-e)/i.height,0,1):r=Ze.clamp((t-i.left)/i.width,0,1),this.listener({value:r,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},ST={};wl(ST,{BeforeAnimateEvent:()=>Ul,BeforeRenderEvent:()=>Yr,BeforeRotateEvent:()=>tp,ClickEvent:()=>rp,ConfigChangedEvent:()=>Xt,DoubleClickEvent:()=>lp,FullscreenEvent:()=>Zr,HideNotificationEvent:()=>qr,HideOverlayEvent:()=>gp,HidePanelEvent:()=>pi,HideTooltipEvent:()=>Sp,KeypressEvent:()=>mi,LoadProgressEvent:()=>Ap,ObjectEnterEvent:()=>fm,ObjectEvent:()=>Uo,ObjectHoverEvent:()=>gm,ObjectLeaveEvent:()=>Fc,PanoramaErrorEvent:()=>Np,PanoramaLoadEvent:()=>Rp,PanoramaLoadedEvent:()=>hr,PositionUpdatedEvent:()=>$r,ReadyEvent:()=>Jr,RenderEvent:()=>Yp,RollUpdatedEvent:()=>Kr,ShowNotificationEvent:()=>jr,ShowOverlayEvent:()=>Jp,ShowPanelEvent:()=>gi,ShowTooltipEvent:()=>nm,SizeUpdatedEvent:()=>Qr,StopAllEvent:()=>es,TransitionDoneEvent:()=>Op,ViewerEvent:()=>Je,ZoomUpdatedEvent:()=>$n});var MT=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},qh=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},Je=class extends MT{},$h=class Kh extends Je{constructor(e,n){super(Kh.type,!0),this.position=e,this.zoomLevel=n}};$h.type="before-animate";var Ul=$h,Jh=class jh extends Je{constructor(e,n){super(jh.type),this.timestamp=e,this.elapsed=n}};Jh.type="before-render";var Yr=Jh,Qh=class ep extends Je{constructor(e){super(ep.type,!0),this.position=e}};Qh.type="before-rotate";var tp=Qh,np=class ip extends Je{constructor(e){super(ip.type),this.data=e}};np.type="click";var rp=np,sp=class op extends Je{constructor(e){super(op.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};sp.type="config-changed";var Xt=sp,ap=class cp extends Je{constructor(e){super(cp.type),this.data=e}};ap.type="dblclick";var lp=ap,up=class fp extends Je{constructor(e){super(fp.type),this.fullscreenEnabled=e}};up.type="fullscreen";var Zr=up,dp=class hp extends Je{constructor(e){super(hp.type),this.notificationId=e}};dp.type="hide-notification";var qr=dp,pp=class mp extends Je{constructor(e){super(mp.type),this.overlayId=e}};pp.type="hide-overlay";var gp=pp,_p=class xp extends Je{constructor(e){super(xp.type),this.panelId=e}};_p.type="hide-panel";var pi=_p,vp=class Ep extends Je{constructor(e){super(Ep.type),this.tooltipData=e}};vp.type="hide-tooltip";var Sp=vp,Mp=class Tp extends Je{constructor(e,n){super(Tp.type,!0),this.key=e,this.originalEvent=n}matches(e){return Rl(this.originalEvent,e)}};Mp.type="key-press";var mi=Mp,bp=class yp extends Je{constructor(e){super(yp.type),this.progress=e}};bp.type="load-progress";var Ap=bp,wp=class Cp extends Je{constructor(e){super(Cp.type),this.panorama=e}};wp.type="panorama-load";var Rp=wp,Ip=class Pp extends Je{constructor(e){super(Pp.type),this.data=e}};Ip.type="panorama-loaded";var hr=Ip,Lp=class Dp extends Je{constructor(e,n){super(Dp.type),this.panorama=e,this.error=n}};Lp.type="panorama-error";var Np=Lp,Up=class Fp extends Je{constructor(e){super(Fp.type),this.completed=e}};Up.type="transition-done";var Op=Up,Bp=class zp extends Je{constructor(e){super(zp.type),this.position=e}};Bp.type="position-updated";var $r=Bp,Gp=class Hp extends Je{constructor(e){super(Hp.type),this.roll=e}};Gp.type="roll-updated";var Kr=Gp,kp=class Vp extends Je{constructor(){super(Vp.type)}};kp.type="ready";var Jr=kp,Wp=class Xp extends Je{constructor(){super(Xp.type)}};Wp.type="render";var Yp=Wp,Zp=class qp extends Je{constructor(e){super(qp.type),this.notificationId=e}};Zp.type="show-notification";var jr=Zp,$p=class Kp extends Je{constructor(e){super(Kp.type),this.overlayId=e}};$p.type="show-overlay";var Jp=$p,jp=class Qp extends Je{constructor(e){super(Qp.type),this.panelId=e}};jp.type="show-panel";var gi=jp,em=class tm extends Je{constructor(e,n){super(tm.type),this.tooltip=e,this.tooltipData=n}};em.type="show-tooltip";var nm=em,im=class rm extends Je{constructor(e){super(rm.type),this.size=e}};im.type="size-updated";var Qr=im,sm=class om extends Je{constructor(){super(om.type)}};sm.type="stop-all";var es=sm,am=class cm extends Je{constructor(e){super(cm.type),this.zoomLevel=e}};am.type="zoom-updated";var $n=am,Uo=class extends Je{constructor(t,e,n,i,r){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=r}},lm=class um extends Uo{constructor(e,n,i,r){super(um.type,e,n,i,r)}};lm.type="enter-object";var fm=lm,dm=class hm extends Uo{constructor(e,n,i,r){super(hm.type,e,n,i,r)}};dm.type="leave-object";var Fc=dm,pm=class mm extends Uo{constructor(e,n,i,r){super(mm.type,e,n,i,r)}};pm.type="hover-object";var gm=pm,Fl=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Ke("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Ke("Current adapter does not support texture coordinates.")}};Fl.supportsDownload=!1;function Ef(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Fl)return Nl(e.id,e.VERSION,"5.15.1"),e}return null}var TT=`varying vec3 vLocalPos;
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
`,bT=`// Ray-cast inputs in the panorama's local frame, so sphereCorrection and pose
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
`,yT=Do({shader:!1,resolution:64,useXmpData:!0},{resolution:t=>{if(!t||!Ze.isPowerOfTwo(t))throw new Ke("EquirectangularAdapter resolution must be power of two.");return t}}),Fo=class _m extends Fl{static withConfig(e){return[_m,e]}constructor(e,n){super(e),this.config=yT(n),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,n){if(wt(e.textureX)||wt(e.textureY))throw new Ke("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+n.croppedX)/n.fullWidth*Math.PI*2,r=(e.textureY+n.croppedY)/n.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-r}}sphericalCoordsToTextureCoords(e,n){const i=e.yaw/Math.PI/2*n.fullWidth,r=e.pitch/Math.PI*n.fullHeight;let s=Math.round(e.yaw<Math.PI?i+n.fullWidth/2:i-n.fullWidth/2)-n.croppedX,o=Math.round(n.fullHeight/2-r)-n.croppedY;return(s<0||s>n.croppedWidth||o<0||o>n.croppedHeight)&&(s=o=void 0),{textureX:s,textureY:o}}async loadTexture(e,n=!0,i,r=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new Ke("Invalid panorama url, are you using the right adapter?"));let s;typeof e=="string"?s={path:e,data:i}:s={data:i,...e};const o=await this.viewer.textureLoader.loadFile(s.path,n?d=>this.viewer.textureLoader.dispatchProgress(d):null,s.path),a=r?await this.loadXMP(o):null,l=await this.viewer.textureLoader.blobToImage(o);typeof s.data=="function"&&(s.data=s.data(l,a));const c=Vh(l.width,l.height,s.data,a),u=Wh(l,s.blur?{factor:2048}:null);return{panorama:e,texture:u,panoData:c,cacheKey:s.path}}async loadXMP(e){const n=await this.loadBlobAsString(e),i=n.indexOf("<x:xmpmeta");if(i===-1)return null;const r=n.indexOf("</x:xmpmeta>",i);if(r===-1)return null;const s=n.substring(i,r);return s.includes("GPano:")?{fullWidth:$t(s,"FullPanoWidthPixels"),fullHeight:$t(s,"FullPanoHeightPixels"),croppedWidth:$t(s,"CroppedAreaImageWidthPixels"),croppedHeight:$t(s,"CroppedAreaImageHeightPixels"),croppedX:$t(s,"CroppedAreaLeftPixels"),croppedY:$t(s,"CroppedAreaTopPixels"),poseHeading:$t(s,"PoseHeadingDegrees",!1),posePitch:$t(s,"PosePitchDegrees",!1),poseRoll:$t(s,"PoseRollDegrees",!1),initialHeading:$t(s,"InitialViewHeadingDegrees",!1),initialPitch:$t(s,"InitialViewPitchDegrees",!1),initialFov:$t(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((n,i)=>{const r=new FileReader;r.onload=()=>n(r.result),r.onerror=i,r.readAsText(e)})}createMesh(e){if(this.config.shader){const n=new xr(qn,32,16).scale(-1,1,1),i={map:{value:null},opacity:{value:1},radius:{value:qn},uvOffset:{value:new We(e.croppedX/e.fullWidth,(e.fullHeight-e.croppedY-e.croppedHeight)/e.fullHeight)},uvScale:{value:new We(e.croppedWidth/e.fullWidth,e.croppedHeight/e.fullHeight)}},r=new _n({uniforms:i,vertexShader:bT,fragmentShader:TT,depthTest:!1,depthWrite:!1,transparent:!0});return new Qt(n,r)}else{const n=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,r=e.croppedY/e.fullHeight*Math.PI,s=e.croppedHeight/e.fullHeight*Math.PI,o=new xr(qn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+n,i,r,s).scale(-1,1,1),a=new us({depthTest:!1,depthWrite:!1});return new Qt(o,a)}}setTexture(e,n){this.config.shader?e.material.uniforms.map.value=n.texture:e.material.map=n.texture}setTextureOpacity(e,n){this.config.shader?e.material.uniforms.opacity.value=n:(e.material.opacity=n,e.material.transparent=n<1)}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Fo.id="equirectangular";Fo.VERSION="5.15.1";Fo.supportsDownload=!0;var xm=Fo,vm=class Em extends xm{static withConfig(e){return[Em,e]}constructor(e,n){super(e,{resolution:(n==null?void 0:n.resolution)??64,useXmpData:!1}),Ct('"DualFisheyeAdapter" must be imported from "@photo-sphere-viewer/dual-fisheye-adapter" package')}async loadTexture(e,n){const i=await super.loadTexture(e,n,null,!1);return i.panoData=null,i}createMesh(){const e=new xr(qn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),n=e.getAttribute("uv"),i=e.getAttribute("normal");for(let s=0;s<n.count;s++)for(let o=0;o<3;o++){const a=s*3+o,l=i.getX(a),c=i.getY(a),u=i.getZ(a),d=.947;if(s<n.count/6){const f=l===0&&u===0?1:Math.acos(c)/Math.sqrt(l*l+u*u)*(2/Math.PI);n.setXY(a,l*(d/4)*f+1/4,u*(d/2)*f+1/2)}else{const f=l===0&&u===0?1:Math.acos(-c)/Math.sqrt(l*l+u*u)*(2/Math.PI);n.setXY(a,-l*(d/4)*f+3/4,u*(d/2)*f+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const r=new us({depthTest:!1,depthWrite:!1});return new Qt(e,r)}};vm.id="dual-fisheye";vm.VERSION="5.15.1";var Oi=class Sm{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Sm?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},AT=Do({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Kt=class extends Oi{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=AT(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===At.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Pl(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Io(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,Cl(this.container.querySelector("svg"),"psv-button-svg")}},wT=class extends Kt{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},os=class extends Kt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.info}),this.mode=0,this.viewer.addEventListener(qr.type,this),this.viewer.addEventListener(jr.type,this),this.viewer.addEventListener(pi.type,this),this.viewer.addEventListener(gi.type,this),this.viewer.addEventListener(Xt.type,this)}destroy(){this.viewer.removeEventListener(qr.type,this),this.viewer.removeEventListener(jr.type,this),this.viewer.removeEventListener(pi.type,this),this.viewer.removeEventListener(gi.type,this),this.viewer.removeEventListener(Xt.type,this),super.destroy()}handleEvent(t){if(t instanceof Xt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof qr?e=this.mode===1:t instanceof jr?e=this.mode===1&&t.notificationId!==Pt.DESCRIPTION:t instanceof pi?e=this.mode===2:t instanceof gi&&(e=this.mode===2&&t.panelId!==Pt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Pt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Pt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Pt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Pt.DESCRIPTION,content:this.viewer.config.caption}))}};os.id="description";var Mm=class extends Kt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:xn.download}),this.viewer.addEventListener(Xt.type,this),this.viewer.addEventListener(hr.type,this)}destroy(){this.viewer.removeEventListener(Xt.type,this),this.viewer.removeEventListener(hr.type,this),super.destroy()}handleEvent(t){t instanceof Xt?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof hr&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};Mm.id="download";var Tm=class extends Kt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.fullscreenIn,iconActive:xn.fullscreenOut}),this.viewer.addEventListener(Zr.type,this)}destroy(){this.viewer.removeEventListener(Zr.type,this),super.destroy()}handleEvent(t){t instanceof Zr&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Tm.id="fullscreen";var CT="psvButton",RT=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${xn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Qs=class extends Kt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.menu}),this.viewer.addEventListener(gi.type,this),this.viewer.addEventListener(pi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(gi.type,this),this.viewer.removeEventListener(pi.type,this),super.destroy()}handleEvent(t){t instanceof gi?this.toggleActive(t.panelId===Pt.MENU):t instanceof pi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Pt.MENU,content:RT(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?wh(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[CT]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Pt.MENU)}};Qs.id="menu";function IT(t){let e;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return xn.arrow.replace("rotate(0",`rotate(${e}`)}var hs=class extends Kt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:IT(e)}),this.direction=e,this.handler=new No,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===At.Enter&&this.__onMouseDown();break;case"keyup":t.key===At.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Lo(kt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};hs.groupId="move";var bm=class extends hs{constructor(t){super(t,1)}};bm.id="moveDown";var ym=class extends hs{constructor(t){super(t,2)}};ym.id="moveLeft";var Am=class extends hs{constructor(t){super(t,3)}};Am.id="moveRight";var wm=class extends hs{constructor(t){super(t,0)}};wm.id="moveUp";var Ol=class extends Kt{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new No,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===At.Enter&&this.__onMouseDown();break;case"keyup":t.key===At.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Lo(kt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Ol.groupId="zoom";var Cm=class extends Ol{constructor(t){super(t,xn.zoomIn,0)}};Cm.id="zoomIn";var Rm=class extends Ol{constructor(t){super(t,xn.zoomOut,1)}};Rm.id="zoomOut";var Bl=class extends Kt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Zh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(In(this.container,"max-width"),10),this.viewer.addEventListener($n.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Jr.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener($n.type,this),this.viewer.removeEventListener(Jr.type,this),super.destroy()}handleEvent(t){t instanceof $n?this.__moveZoomValue(t.zoomLevel):t instanceof Jr&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Lo(kt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Bl.id="zoomRange";Bl.groupId="zoom";var Im=class extends qh{constructor(t){super(),this.viewer=t}init(){}destroy(){}},PT=class extends Im{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,r=n.readonlyOptions,s=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){Ct(`${s}: Unknown option "${o}"`);continue}if(r.includes(o)){Ct(`${s}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};PT.readonlyOptions=[];function Oc(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Im)return Nl(e.id,e.VERSION,"5.15.1"),e}return null}var Er={panorama:null,container:null,adapter:[xm,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[At.ArrowUp]:"ROTATE_UP",[At.ArrowDown]:"ROTATE_DOWN",[At.ArrowRight]:"ROTATE_RIGHT",[At.ArrowLeft]:"ROTATE_LEFT",[At.PageUp]:"ZOOM_IN",[At.PageDown]:"ZOOM_OUT",[At.Plus]:"ZOOM_IN",[At.Minus]:"ZOOM_OUT"}},Sf={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Bc={container:t=>{if(!t)throw new Ke("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Ef(t[0]),t[1]]:t=[Ef(t),null]:t=e,!t[0])throw new Ke("An undefined value was given for adapter.");if(!t[0].id)throw new Ke("Adapter has no id.");return t},defaultYaw:t=>ui(t),defaultPitch:t=>ui(t,!0),defaultZoomLvl:t=>Ze.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Ct("maxFov cannot be lower than minFov"),t=e.maxFov),Ze.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Ze.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Er.lang,...t}),fisheye:t=>t===!0?1:t===!1?0:Ze.clamp(t,0,2),requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Oc(e[0]),e[1]]:e=[Oc(e),null],!e[0])throw new Ke(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new Ke(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Po(Er.navbar):typeof t=="string"?t.split(/[ ,]/):t},LT=Do(Er,Bc),lr=class extends Kt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(os.id,!1))==null||t.autoSize(!0)}};lr.id="caption";var zc={},go={};function DT(t,e){if(!t.id)throw new Ke("Button id is required");zc[t.id]=t,t.groupId&&(go[t.groupId]=go[t.groupId]||[]).push(t)}[Rm,Bl,Cm,os,lr,Mm,Tm,ym,Am,wm,bm].forEach(t=>DT(t));var NT=class extends Oi{constructor(t){super(t,{className:`psv-navbar ${ds}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(lr.id)!==-1&&t.indexOf(os.id)===-1&&t.splice(t.indexOf(lr.id),0,os.id),t.forEach(e=>{typeof e=="object"?new wT(this,e):zc[e]?new zc[e](this):go[e]?go[e].forEach(n=>{new n(this)}):Ct(`Unknown button ${e}`)}),new Qs(this),this.children.forEach(e=>{e instanceof Kt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof lr?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof Kt&&i.id===t);return!n&&e&&Ct(`button "${t}" not found in the navbar`),n}focusButton(t){var e,n;this.isVisible()&&((n=((e=this.getButton(t,!1))==null?void 0:e.container)||this.container.firstElementChild)==null||n.focus())}autoSize(){var i;this.children.forEach(r=>{r instanceof Kt&&r.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(r=>{r.isVisible()&&r instanceof Kt&&(e+=r.width,r.collapsable&&n.push(r))}),e!==0&&(t<e&&n.length>0?(n.forEach(r=>r.collapse()),this.collapsed=n,this.getButton(Qs.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(r=>r.uncollapse()),this.collapsed=[],this.getButton(Qs.id).hide(!1)),(i=this.getButton(lr.id,!1))==null||i.autoSize())}};hi.enabled=!1;var sr={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){hi.enabled&&(Ct("ThreeJS cache should be disabled"),hi.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},UT=class extends Oi{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=In(this.loader,"color"),this.color=In(this.canvas,"color"),this.border=parseInt(In(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(In(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Xt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Xt.type,this),super.destroy()}handleEvent(t){t instanceof Xt&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=Ze.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,r=this.thickness/2+this.border,s=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*s+n,a=-Math.cos(e)*s+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${r} A ${s} ${s} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},FT=class extends Oi{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ke("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new jr(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new qr(e))}}},OT=class extends Oi{constructor(t){super(t,{className:`psv-overlay ${ds}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(mi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof mi&&this.isVisible()&&this.state.dismissible&&t.matches(At.Escape)&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ke("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Jp(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new gp(e))}}},BT=200,Ta="psv-panel-content--no-interaction",zT=class extends Oi{constructor(t){super(t,{className:`psv-panel ${ds}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=xn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(mi.type,this)}destroy(){this.viewer.removeEventListener(mi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case mi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ke("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Io(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(uo(n))},this.state.keyHandler=n=>{n.key===At.Enter&&t.clickHandler(uo(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new gi(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new pi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Ta))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Ta)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.matches(At.Escape)&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Ta)}__resize(t,e){const n=t,i=e,r=Math.max(BT,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=r),this.container.style.width=r,this.state.mouseX=n,this.state.mouseY=i}},GT=class extends Oi{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Ke("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Ke("Initialized tooltip cannot be re-initialized");t.className&&Cl(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new nm(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(In(this.arrow,"border-top-width"),10),this.state.border=parseInt(In(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var a;if(this.state.state!==1&&this.state.state!==3)throw new Ke("Uninitialized tooltip cannot be moved");t.box=t.box??((a=this.state.config)==null?void 0:a.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:zh(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let r=null,s=null;if(i.top<0?r="bottom":i.top+i.height>this.viewer.state.size.height&&(r="top"),i.left<0?s="right":i.left+i.width>this.viewer.state.size.width&&(s="left"),s||r){const l=Dl(i.posClass);r&&(i.posClass[l?0:1]=r),s&&(i.posClass[l?1:0]=s),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Sp(this.state.data));const t=parseFloat(In(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,r=t.height,s=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-r,t.left=s+a-o,t.arrowTop=r,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-c-r,t.left=s-o/2,t.arrowTop=r,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-c-r,t.left=s-a,t.arrowTop=r,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=s+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+c,t.left=s-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+c,t.left=s-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-r,t.left=s-l-o,t.arrowTop=r-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-r/2,t.left=s-l-o,t.arrowTop=r/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=s-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-r,t.left=s+l,t.arrowTop=r-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-r/2,t.left=s+l,t.arrowTop=r/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=s+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},HT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,ps=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},hn=new O,zs=new xi(0,0,0,"ZXY"),kT=class extends ps{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ze.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Ze.radToDeg(2*Math.atan(Math.tan(Ze.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Ze.radToDeg(2*Math.atan(Math.tan(Ze.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!wt(e),r=!wt(n),s={};let o=null;if(i){const a=this.viewer.getPosition(),l=bh(a.yaw,e.yaw);s.yaw={start:a.yaw,end:a.yaw+l},s.pitch={start:a.pitch,end:e.pitch},o=Dc(t,yh(a,e))}if(r){const a=this.viewer.getZoomLevel(),l=Math.abs(n-a);s.zoom={start:a,end:n},o===null&&(o=Dc(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=Ic:o=Math.max(Ic,o),{duration:o,properties:s}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??Er.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new Ke("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!zs.equals(this.viewer.renderer.panoramaPose)||!zs.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,hn),hn.applyEuler(this.viewer.renderer.panoramaPose),hn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(hn)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Ke("Current adapter does not support texture coordinates or no texture has been loaded");return(!zs.equals(this.viewer.renderer.panoramaPose)||!zs.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,hn),Uc(hn,this.viewer.renderer.sphereCorrection),Uc(hn,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(hn)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=qn){return e||(e=new O),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[vi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,hn),this.vector3ToViewerCoords(hn)}isPointVisible(t){let e,n;if(t instanceof O)e=t,n=this.vector3ToViewerCoords(t);else if(Ll(t))e=this.sphericalCoordsToVector3(t,hn),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Ke("Position is missing 'yaw' or 'pitch'");return{yaw:ui(t.yaw),pitch:ui(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:ui((t==null?void 0:t.pan)||0),tilt:ui((t==null?void 0:t.tilt)||0,!0),roll:ui((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Ze.degToRad((t==null?void 0:t.poseHeading)||0),tilt:Ze.degToRad((t==null?void 0:t.posePitch)||0),roll:Ze.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(wt(t.zoom)&&!wt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),wt(t.position)&&!wt(e.initialHeading)&&!wt(e.initialPitch)&&(t={...t,position:{yaw:Ze.degToRad(e.initialHeading),pitch:Ze.degToRad(e.initialPitch)}})),t}},VT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,WT=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Oo=class Pm{constructor(){this.$=Pm.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Oo.IDLE=0;Oo.CLICK=1;Oo.MOVING=2;var vt=Oo,XT=class extends ps{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new vt,this.keyHandler=new No,this.resizeObserver=new ResizeObserver(Dh(()=>this.viewer.autoSize(),50)),this.moveThreshold=gh*kt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Yr.type,this),this.viewer.addEventListener(es.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Yr.type,this),this.viewer.removeEventListener(es.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case Yr.type:this.__applyMoveDelta();break;case es.type:this.__clearMoveDelta();break}if(!Ch(t,"."+ds))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===At.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Pt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new mi(t.key,t))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,n]of Object.entries(this.config.keyboardActions))if(Rl(t,e)){if(typeof n=="function")n(this.viewer,t);else{switch(n!=="ZOOM_IN"&&n!=="ZOOM_OUT"&&this.viewer.stopAll(),n){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(n)}t.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(vt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(vt.CLICK,vt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(vt.CLICK,vt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(vt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},xh))):t.touches.length===2&&(this.step.set(vt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(vt.CLICK,vt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(vt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Pt.TWO_FINGERS,image:VT,title:this.config.lang.twoFingers})},vh));else if(this.step.is(vt.CLICK,vt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Pt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Pt.CTRL_ZOOM,image:WT,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Pt.CTRL_ZOOM),Eh);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Zr(t))}__resetMove(){this.step.set(vt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Pc(t);this.step.set(vt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(vt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const r=this.viewer.container.getBoundingClientRect(),s=t-r.left,o=e-r.top,a=this.viewer.renderer.getIntersections({x:s,y:o}),l=a.find(c=>c.object.userData[vi]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),u={rightclick:i,originalEvent:n,target:uo(n),clientX:t,clientY:e,viewerX:s,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(d=>d.object).filter(d=>!d.userData[vi])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);Object.assign(u,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new lp(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new rp(u)),this.data.dblclickData=Po(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},_h))}}__handleObjectsEvents(t){if(!Uh(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=Rh(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),r=(s,o,a)=>{this.viewer.dispatchEvent(new a(t,s,n,o))};for(const[s,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[s]);a?(o&&a.object!==o&&(r(o,s,Fc),this.state.objectsObservers[s]=null),o?r(a.object,s,gm):(this.state.objectsObservers[s]=a.object,r(a.object,s,fm))):o&&(r(o,s,Fc),this.state.objectsObservers[s]=null)}}}__doMove(t,e){if(this.step.is(vt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(vt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(vt.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),r={yaw:this.config.moveSpeed*(n/this.state.size.width)*Ze.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Ze.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=r.yaw,this.data.moveDelta.pitch+=r.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(vt.MOVING)){t.preventDefault();const e=Pc(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/kt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ge.enabled=!1;var Gs=new We,Mf=new dt,Tf=new Mr,YT=class extends ps{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new QM(this.config.rendererParameters),this.renderer.setPixelRatio(kt.pixelRatio),this.renderer.outputColorSpace=is,this.renderer.toneMapping=dl,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Du,this.camera=new on(50,16/9,.1,2*qn),this.camera.matrixAutoUpdate=!1;const e=new Qt(new xr(qn).scale(-1,1,1),new us({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[vi]:!0},this.scene.add(e),this.raycaster=new ix,this.frustum=new yl,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(Qr.type,this),this.viewer.addEventListener($n.type,this),this.viewer.addEventListener($r.type,this),this.viewer.addEventListener(Kr.type,this),this.viewer.addEventListener(Xt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Qr.type,this),this.viewer.removeEventListener($n.type,this),this.viewer.removeEventListener($r.type,this),this.viewer.removeEventListener(Kr.type,this),this.viewer.removeEventListener(Xt.type,this),super.destroy()}handleEvent(t){switch(t.type){case Qr.type:this.__onSizeUpdated();break;case $n.type:this.__onZoomUpdated();break;case $r.type:this.__onPositionUpdated();break;case Kr.type:this.__onPositionUpdated();break;case Xt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new Yr(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Yp))}setTexture(t){this.meshContainer||(this.meshContainer=new cr,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(-n.tilt,-n.pan,n.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,r=!wt(e.position),s=!wt(e.zoom),o=new Ul(r?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new cr,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),r&&!n.rotation){const h=this.viewer.getPosition(),g=new O(0,1,0);a.rotateOnWorldAxis(g,o.position.yaw-h.yaw);const E=new O(0,1,0).cross(this.camera.getWorldDirection(new O)).normalize();a.rotateOnWorldAxis(E,o.position.pitch-h.pitch)}a.add(l),this.scene.add(a);const c=new gn;this.renderer.setRenderTarget(c),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),c.dispose();const{duration:u,properties:d}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),f=new mo({properties:{...d,opacity:{start:0,end:1}},duration:u,easing:"inOutCubic",onTick:h=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,h.opacity);break;case"black":case"white":h.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?Ze.mapLinear(h.opacity,0,.5,1,0):Ze.mapLinear(h.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=n.effect==="black"?Ze.mapLinear(h.opacity,.5,1,0,1):Ze.mapLinear(h.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),s&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}r&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),s&&i&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return f.then(h=>{a.remove(l),this.scene.remove(a),h?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),r&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),f}getIntersections(t){var n;Gs.x=2*t.x/this.state.size.width-1,Gs.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Gs,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Gs)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(Mf.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Mf),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Tf.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Tf)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(r=>{var s,o;(o=(s=r.value)==null?void 0:s.dispose)==null||o.call(s)}),n.dispose()};t.traverse(n=>{var i,r;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>{e(s)}):e(n.material)),n instanceof Du||(r=n.dispose)==null||r.call(n),n!==t&&this.cleanScene(n)})}},ZT=class extends ex{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(t,e,n,i){const r=this._abortController.signal,s=super.load(t,l=>{a(),e(l)},n,l=>{if(a(),r.aborted){const c=new Error;c.name="AbortError",c.message="The operation was aborted.",i(c)}else i(l)});function o(){s.src=""}function a(){r.removeEventListener("abort",o,!1)}return r.addEventListener("abort",o,!1),s}},qT=class extends ps{constructor(t){super(t),this.fileLoader=new Q_,this.fileLoader.setResponseType("blob"),this.imageLoader=new ZT}destroy(){this.abortLoading(),super.destroy()}abortLoading(){var t,e;(e=(t=this.fileLoader).abort)==null||e.call(t),this.imageLoader.abort()}loadFile(t,e,n){const i=sr.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);sr.remove(t,n)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t));let r=0;return e==null||e(r),this.fileLoader.loadAsync(t,s=>{if(s.lengthComputable){const o=s.loaded/s.total*100;o>r&&(r=o,e==null||e(r))}}).then(s=>(r=100,e==null||e(r),sr.add(t,n,s),s))}loadImage(t,e,n){const i=sr.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),this.imageLoader.loadAsync(t).then(r=>(sr.add(t,n,r),r))):this.loadFile(t,e,n).then(r=>this.blobToImage(r))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Ke("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new Ap(Math.round(t)))}},$T=class extends ps{constructor(t){super(t),this.zoom=new zr(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new $n(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Xh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new $r(e))},{yaw:new zr(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new zr(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new zr(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Kr(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ze.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ze.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},KT=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new O(0,0,qn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},JT=class extends qh{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.parent=Ah(t.container),!this.parent)throw new Ke('"container" element not found.');this.parent[vi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),kh(this.parent),Hh(this.container,"core"),this.state=new KT,this.config=LT(t),this.__setSize(this.config.size),this.overlay=new OT(this);try{kt.load()}catch(r){console.error(r),this.showError(this.config.lang.webglError);return}sr.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new YT(this),this.textureLoader=new qT(this),this.eventsHandler=new XT(this),this.dataHelper=new kT(this),this.dynamics=new $T(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new UT(this),this.navbar=new NT(this),this.panel=new zT(this),this.notification=new FT(this),this.autoSize(),this.setCursor(null),Pl(kt.isTouchEnabled,r=>{Io(this.container,"psv--is-touch",r)}),this.config.plugins.forEach(([r,s])=>{this.plugins[r.id]=new r(this,s)});for(const r of Object.values(this.plugins))(i=r.init)==null||i.call(r);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,r,s;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[o,a]of Object.entries(this.plugins))a.destroy(),delete this.plugins[o];this.children.slice().forEach(o=>o.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(r=this.adapter)==null||r.destroy(),(s=this.dynamics)==null||s.destroy(),this.parent.removeChild(this.container),delete this.parent[vi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Jr)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Oc(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Ih(this.parent,kt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Qr(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){var s;this.textureLoader.abortLoading(),(s=this.state.transitionAnimation)==null||s.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),e.sphereCorrection===void 0&&(e.sphereCorrection=this.config.sphereCorrection),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=o=>{if(Bh(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new Np(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Rp(t));const r=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),Lc();const a=this.dataHelper.cleanPanoramaOptions(e,o.panoData);return(!wt(a.zoom)||!wt(a.position))&&this.stopAll(),{textureData:o,cleanOptions:a}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(({textureData:o,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new hr(o)),wt(a.zoom)||this.zoom(a.zoom),wt(a.position)||this.rotate(a.position)}).then(()=>i(),o=>i(o)):this.state.loadingPromise=r.then(({textureData:o,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new hr(o)),this.state.transitionAnimation=this.renderer.transition(o,a,n),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Op(o)),!o)throw Lc()}).then(()=>i(),o=>i(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Er)){Ct(`Unknown option ${n}`);continue}if(n in Sf){Ct(Sf[n]);continue}switch(n in Bc&&(i=Bc[n](i,{rawConfig:e,defValue:Er[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new $n(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Xt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Pt.ERROR,image:HT,title:t,dismissible:!1})}hideError(){this.overlay.hide(Pt.ERROR)}rotate(t){const e=new tp(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=Ll(t),n=!wt(t.zoom),i=new Ul(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:r,properties:s}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return r?(this.state.animation=new mo({properties:s,duration:r,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new mo(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t!=null&&t[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||Ph(this.parent,kt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Lh(kt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new GT(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new es),this.disableIdleTimer(),this.stopAnimation()}};let jT=class{constructor(e){if(QT(e))throw new Error("DataView: Passed buffer type is unsupported.");this.buffer=e,this.byteLength=this.buffer.length}getUint8(e){return this.buffer.readUInt8(e)}getUint16(e,n){return n?this.buffer.readUInt16LE(e):this.buffer.readUInt16BE(e)}getUint32(e,n){return n?this.buffer.readUInt32LE(e):this.buffer.readUInt32BE(e)}getInt32(e,n){return n?this.buffer.readInt32LE(e):this.buffer.readInt32BE(e)}};function QT(t){return typeof t!="object"||t.length===void 0||t.readUInt8===void 0||t.readUInt16LE===void 0||t.readUInt16BE===void 0||t.readUInt32LE===void 0||t.readUInt32BE===void 0||t.readInt32LE===void 0||t.readInt32BE===void 0}function Gc(t,e,n){try{return new DataView(t,e,n)}catch{return new jT(t,e,n)}}function Pe(t,e,n){const i=[];for(let r=0;r<n&&e+r<t.byteLength;r++)i.push(t.getUint8(e+r));return tt(i)}function or(t,e){const n=[];let i=0;for(;e+i<t.byteLength;){const r=t.getUint8(e+i);if(r===0)break;n.push(r),i++}return tt(n)}function eb(t,e,n){const i=[];for(let r=0;r+2<=n&&e+r+2<=t.byteLength;r+=2)i.push(t.getUint16(e+r));return i[i.length-1]===0&&i.pop(),tt(i)}function Lm(t,e){const n=t.getUint8(e),i=Pe(t,e+1,n);return[n,i]}function tt(t){return t.map(e=>String.fromCharCode(e)).join("")}function Ei(t,e,n,i){t&&e&&t.push({type:e,start:n,end:i})}function zl(){if(typeof Promise>"u")throw new Error("Promise is required when async mode is enabled.")}function zt(){for(let t=1;t<arguments.length;t++)for(const e in arguments[t])br(arguments[0],e,arguments[t][e]);return arguments[0]}function br(t,e,n){if(e==="__proto__"){Object.defineProperty(t,e,{value:n,enumerable:!0,writable:!0,configurable:!0});return}t[e]=n}function Dm(t,e,n){let i=!1;Object.defineProperty(t,e,{get(){return i||(i=!0,Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n.apply(t),writable:!0})),t[e]},configurable:!0,enumerable:!0})}function Nm(t){if(typeof btoa<"u")return btoa(typeof t=="string"?t:Array.prototype.reduce.call(new Uint8Array(t),(e,n)=>e+String.fromCharCode(n),""));if(!(typeof Buffer>"u"))return typeof Buffer.from<"u"?Buffer.from(t).toString("base64"):new Buffer(t).toString("base64")}function Um(t){const e=t.substring(t.indexOf(",")+1);if(t.indexOf(";base64")!==-1)return typeof atob<"u"?Uint8Array.from(atob(e),i=>i.charCodeAt(0)).buffer:typeof Buffer>"u"?void 0:typeof Buffer.from<"u"?Buffer.from(e,"base64"):new Buffer(e,"base64");const n=decodeURIComponent(e);return typeof Buffer<"u"?typeof Buffer.from<"u"?Buffer.from(n):new Buffer(n):Uint8Array.from(n,i=>i.charCodeAt(0)).buffer}function Fm(t,e,n){return Om(n,Math.max(0,e-t.length))+t}function tb(t,e){return parseInt(t.replace(".",""),e)/Math.pow(e,(t.split(".")[1]||"").length)}function Om(t,e){return new Array(e+1).join(t)}const as=void 0,Hc=0,kc="brotli",nb=128*1024*1024;function _o(t,e,n,i="string",r){const s=ib(r);if(r&&e!==as){const a=r[e===Hc?"deflate":"brotli"];if(typeof a=="function"){const l=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);return Promise.resolve(a(l)).then(c=>sb(c)>s?Bm(s):i==="dataview"?c instanceof DataView?c:c instanceof ArrayBuffer?new DataView(c):new DataView(c.buffer,c.byteOffset,c.byteLength):new TextDecoder(n).decode(c))}}if(e===Hc&&typeof DecompressionStream=="function")return bf(t,"deflate",s).then(o=>yf(o,i,n));if(e===kc){if(typeof DecompressionStream=="function")try{return bf(t,"brotli",s).then(o=>yf(o,i,n))}catch{}return Promise.reject("Brotli decompression is not supported in this environment. Pass in a brotli decompression function via the decompress option.")}if(e!==void 0)return Promise.reject(`Unknown compression method ${e}.`);if(i==="string")try{return new TextDecoder(n).decode(t)}catch{const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);return Array.from(a,l=>String.fromCharCode(l)).join("")}return t}function ib(t){return t&&typeof t.maxDecompressedSize=="number"?t.maxDecompressedSize:nb}function bf(t,e,n){const i=new DecompressionStream(e),s=new Blob([t]).stream().pipeThrough(i).getReader(),o=[];let a=0;return l();function l(){return s.read().then(({done:c,value:u})=>c?rb(o,a):(a+=u.byteLength,a>n?s.cancel().then(()=>Bm(n)):(o.push(u),l())))}}function rb(t,e){const n=new Uint8Array(e);let i=0;for(let r=0;r<t.length;r++)n.set(t[r],i),i+=t[r].byteLength;return n.buffer}function yf(t,e,n){return e==="dataview"?new DataView(t):new TextDecoder(n).decode(t)}function sb(t){return t&&typeof t.byteLength=="number"?t.byteLength:0}function Bm(t){return typeof console<"u"&&typeof console.warn=="function"&&console.warn(`ExifReader: skipped a compressed metadata block that would exceed the maximum decompressed size of ${t} bytes.`),Promise.reject(`Decompressed metadata exceeded the maximum allowed size of ${t} bytes.`)}const Gl=200,zm=299,Hl=416;function Vc(t){return typeof t=="string"}function Gm(t){return typeof File<"u"&&t instanceof File}function Hm(t){return/^data:[^;,]*(;base64)?,/.test(t)}function ob(t,e){return/^\w+:\/\//.test(t)?typeof fetch<"u"?km(t,eo(e)).then(n=>n.buffer):Wm(t,eo(e)).then(n=>n.buffer):Hm(t)?Promise.resolve(Um(t)):Ym(t,eo(e)).then(n=>n.buffer)}function ab(t,e){return Zm(t,eo(e)).then(n=>n.buffer)}function eo(t){return t&&Number.isInteger(t.length)&&t.length>=0?{start:0,end:t.length}:{start:0}}function km(t,{start:e=0,end:n}={}){const i={method:"GET"};return(e>0||n!==void 0&&n!==1/0)&&(i.headers={range:Vm(e,n)}),fetch(t,i).then(r=>{const s=r&&typeof r.status=="number"?r.status:void 0;if(s!==void 0&&!lb(s)){const a=r.statusText||"";return Promise.reject(new Error(`Could not fetch file: ${s} ${a}`.trim()))}const o=cb(r);return Promise.resolve(r.arrayBuffer()).then(a=>({buffer:a,totalSize:o,status:s}))})}function Vm(t,e){return e===void 0||e===1/0?`bytes=${t}-`:`bytes=${t}-${e-1}`}function cb(t){if(!(!t||!t.headers||typeof t.headers.get!="function"))return Xm(t.headers.get("Content-Range"),t.headers.get("Content-Length"))}function lb(t){return t>=Gl&&t<=zm?!0:t===Hl}function Wm(t,{start:e=0,end:n}={}){return new Promise((i,r)=>{const s={};(e>0||n!==void 0&&n!==1/0)&&(s.headers={range:Vm(e,n)}),ub(t)(t,s,a=>{if(a.statusCode>=Gl&&a.statusCode<=zm){const l=Af(a),c=[];a.on("data",u=>c.push(Buffer.from(u))),a.on("error",u=>r(u)),a.on("end",()=>i({buffer:Buffer.concat(c),totalSize:l,status:a.statusCode}))}else a.statusCode===Hl?(a.resume(),i({buffer:Buffer.alloc(0),totalSize:Af(a),status:a.statusCode})):(r(new Error(`Could not fetch file: ${a.statusCode} ${a.statusMessage}`)),a.resume())}).on("error",a=>r(a))})}function Af(t){if(!(!t||!t.headers))return Xm(t.headers["content-range"],t.headers["content-length"])}function Xm(t,e){if(t){const n=/\/(\d+|\*)$/.exec(t);if(n&&n[1]!=="*")return parseInt(n[1],10)}if(e){const n=parseInt(e,10);if(Number.isFinite(n))return n}}function ub(t){return/^https:\/\//.test(t)?__non_webpack_require__("https").get:__non_webpack_require__("http").get}function Ym(t,{start:e=0,end:n,totalSize:i}={}){return new Promise((r,s)=>{const o=db();o.open(t,(a,l)=>{if(a)return s(a);fb(o,t,i,(c,u)=>{if(c)return o.close(l,()=>s(c));const d=n===void 0||n===1/0||n>u?u:n,f=Math.min(Math.max(0,e),d),h=d-f,g=Buffer.alloc(h);if(h===0)return o.close(l,E=>wf(t,E,g,u,r));o.read(l,{buffer:g,length:h,position:f},E=>{if(E)return o.close(l,()=>s(E));o.close(l,m=>wf(t,m,g,u,r))})})})})}function fb(t,e,n,i){if(n!==void 0)return i(null,n);t.stat(e,(r,s)=>i(r,r?void 0:s.size))}function wf(t,e,n,i,r){e&&console.warn(`Could not close file ${t}:`,e),r({buffer:n,totalSize:i})}function db(){try{return __non_webpack_require__("fs")}catch{return}}function Zm(t,{start:e=0,end:n}={}){return new Promise((i,r)=>{const s=new FileReader,o=typeof t.size=="number"?t.size:void 0;if(s.onload=l=>i({buffer:l.target.result,totalSize:o}),s.onerror=()=>r(s.error),t&&typeof t.slice=="function"&&(e>0||n!==void 0&&n!==1/0)){const l=n===void 0||n===1/0?o:n;s.readAsArrayBuffer(t.slice(e,l))}else s.readAsArrayBuffer(t)})}function hb(t,e){if(!t)return e;if(!e)return t;if(typeof Buffer<"u"&&Buffer.isBuffer(t)&&Buffer.isBuffer(e))return Buffer.concat([t,e]);const n=Cf(t),i=Cf(e),r=new Uint8Array(n.byteLength+i.byteLength);return r.set(n,0),r.set(i,n.byteLength),r.buffer}function Cf(t){return t instanceof ArrayBuffer?new Uint8Array(t):typeof Buffer<"u"&&Buffer.isBuffer(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}const pb=128*1024,Rf=4,Hs='length: "auto" could not locate metadata in this file (no metadata blocks found after reading the file — e.g. plain TIFF, bare JPEG XL codestream, or a file with no recognizable metadata).',mb='length: "auto" is not supported for this file type (no leading metadata container — e.g. plain TIFF or bare JPEG XL codestream).';function gb(t){if(t.expanded!==!0||t.includeOffsets!==!0)throw new Error('length: "auto" requires both expanded: true and includeOffsets: true.')}function _b(t){return function(u,d){zl();const f=zt({},d,{async:!0});return Vc(u)?e(u,f):Gm(u)?n(u,f):i(u,f)};function e(c,u){return/^\w+:\/\//.test(c)?r(typeof fetch<"u"?{readRange:(d,f)=>km(c,{start:d,end:f}),options:u}:{readRange:(d,f)=>Wm(c,{start:d,end:f}),options:u}):Hm(c)?i(Um(c),u):r({readRange:(d,f,h)=>Ym(c,{start:d,end:f,totalSize:h?h.totalSize:void 0}),options:u})}function n(c,u){return r({readRange:(d,f)=>Zm(c,{start:d,end:f}),options:u})}function i(c,u){return Promise.resolve().then(()=>t(c,u)).then(d=>{if(!d||!d.metadataRange)throw new Error(mb);const f=d.metadataRange.end;return d.metadataRange.buffer=Eb(c,f),d.metadataRange.fetched=xo(d.metadataRange.buffer),d.metadataRange.requests=0,d})}function r({readRange:c,options:u}){return s({readRange:c,options:u,buffer:null,fetched:0,requests:0,totalSize:void 0,need:pb,iter:0})}function s(c){return c.iter>=Rf||(c.totalSize!==void 0&&(c.need=Math.min(c.need,c.totalSize)),c.need<=c.fetched)?l(c):c.readRange(c.fetched,c.need,{totalSize:c.totalSize}).then(u=>(c.requests++,u.status===Hl?a(c):(ba(c,u),Promise.resolve(t(c.buffer,c.options)).then(d=>o(c,d)))))}function o(c,u){const d=u&&u.metadataRange;if(d&&d.complete)return ks(u,c.buffer,c.fetched,c.requests);const f=c.totalSize!==void 0&&c.fetched>=c.totalSize;if(!d&&f)throw new Error(Hs);const h=xb({range:d,totalSize:c.totalSize,fetched:c.fetched});if(h<=c.fetched){if(d)return ks(u,c.buffer,c.fetched,c.requests);throw new Error(Hs)}return c.need=h,c.iter++,s(c)}function a(c){return c.readRange(0,1/0,{totalSize:void 0}).then(u=>(c.requests++,c.buffer=u.buffer,c.fetched=xo(c.buffer),u.totalSize!==void 0&&(c.totalSize=u.totalSize),Promise.resolve(t(c.buffer,c.options)))).then(u=>{if(!u||!u.metadataRange)throw new Error(Hs);return ks(u,c.buffer,c.fetched,c.requests)})}function l(c){console.warn(`ExifReader: length:"auto" did not converge in ${Rf} iterations; falling back to full read.`);let u;return c.totalSize!==void 0&&c.fetched<c.totalSize?u=c.readRange(c.fetched,c.totalSize,{totalSize:c.totalSize}).then(d=>{c.requests++,ba(c,d)}):c.totalSize===void 0?u=c.readRange(c.fetched,1/0,{totalSize:c.totalSize}).then(d=>{c.requests++,ba(c,d)}):u=Promise.resolve(),u.then(()=>Promise.resolve(t(c.buffer,c.options))).then(d=>{if(!d||!d.metadataRange)throw new Error(Hs);return ks(d,c.buffer,c.fetched,c.requests)})}}function ba(t,e){if(e.status===Gl&&t.fetched>0){t.buffer=e.buffer,t.fetched=xo(t.buffer),e.totalSize!==void 0&&(t.totalSize=e.totalSize);return}e.totalSize!==void 0&&t.totalSize===void 0&&(t.totalSize=e.totalSize),t.buffer=hb(t.buffer,e.buffer),t.fetched=xo(t.buffer)}function ks(t,e,n,i){const r=t.metadataRange.end;return t.metadataRange.buffer=vb(e,r),t.metadataRange.fetched=n,t.metadataRange.requests=i,t}function xb({range:t,totalSize:e,fetched:n}){return t?Math.min(Math.max(t.end,n*2),e!==void 0?e:1/0):e!==void 0?e:n*2}function vb(t,e){return!t||typeof e!="number"||e<0?t:typeof Buffer<"u"&&Buffer.isBuffer(t)?Buffer.from(t.subarray(0,Math.min(e,t.length))):t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer?t.slice(0,Math.min(e,t.byteLength)):t}function Eb(t,e){return typeof Buffer<"u"&&Buffer.isBuffer(t)?Buffer.from(t.subarray(0,e)):t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer?t.slice(0,e):ArrayBuffer.isView(t)?t.buffer.slice(t.byteOffset,t.byteOffset+e):t}function xo(t){return t?typeof t.byteLength=="number"?t.byteLength:typeof t.length=="number"?t.length:0:0}const If={USE_FILE:!0,USE_JFIF:!0,USE_PNG_FILE:!0,USE_EXIF:!0,USE_IPTC:!0,USE_XMP:!0,USE_ICC:!0,USE_MPF:!0,USE_PHOTOSHOP:!0,USE_THUMBNAIL:!0,USE_TIFF:!0,USE_JPEG:!0,USE_PNG:!0,USE_HEIC:!0,USE_AVIF:!0,USE_JXL:!0,USE_WEBP:!0,USE_GIF:!0,USE_MAKER_NOTES:!0};function Wc(t){if(t.length>=8){const e=tt(t.slice(0,8));if(e==="ASCII\0\0\0")return tt(t.slice(8));if(e==="JIS\0\0\0\0\0")return"[JIS encoded text]";if(e==="UNICODE\0")return"[Unicode encoded text]";if(e==="\0\0\0\0\0\0\0\0"){const n=tt(t.slice(8));return/[\x20-\x7e]/.test(n)?n:"[Undefined encoding]"}}return"Undefined"}function vo(t){return t[0][0]/t[0][1]+t[1][0]/t[1][1]/60+t[2][0]/t[2][1]/3600}const Xc=18761,Yc=19789,en={BIG_ENDIAN:Yc,LITTLE_ENDIAN:Xc,getByteOrder:Sb};function Sb(t,e){if(t.getUint16(e)===Xc)return Xc;if(t.getUint16(e)===Yc)return Yc;throw new Error("Illegal byte order value. Faulty image.")}function Mb(t,e){return t.getUint32(e+4)}function Zc(t,e,n){return e+n<=t.byteLength}const Tb=1024*1024;function bb(t,e,n,i,r,s){const{offsets:a,sizes:l}=yb(n,i+3),c=t.getUint8(a.offsetSize)>>4;l.item.extent.extentOffset=c;const u=t.getUint8(a.lengthSize)&15;l.item.extent.extentLength=u;const d=t.getUint8(a.baseOffsetSize)>>4;l.item.baseOffset=d;const f=Ab(t,a.indexSize,n);l.item.extent.extentIndex=f!==void 0?f:0;const h=wb(t,a.itemCount,n),g=Math.min(e+r,s);return{type:"iloc",items:Cb(t,g,n,a,l,c,u,f,h),length:r}}function yb(t,e){const n={item:{dataReferenceIndex:2,extentCount:2,extent:{}}};t<2?(n.itemCount=2,n.item.itemId=2):t===2&&(n.itemCount=4,n.item.itemId=4),t===1||t===2?n.item.constructionMethod=2:n.item.constructionMethod=0;const i={offsetSize:e,lengthSize:e,baseOffsetSize:e+1,indexSize:e+1};return i.itemCount=e+2,i.items=i.itemCount+n.itemCount,i.item={itemId:0},i.item.constructionMethod=i.item.itemId+n.item.itemId,i.item.dataReferenceIndex=i.item.constructionMethod+n.item.constructionMethod,{offsets:i,sizes:n}}function Ab(t,e,n){if(n===1||n===2)return t.getUint8(e)&15}function wb(t,e,n){if(n<2)return t.getUint16(e);if(n===2)return t.getUint32(e)}function Cb(t,e,n,i,r,s,o,a,l){if(l===void 0)return[];const c=[];let u=i.items;const d=r.item.extent.extentIndex+r.item.extent.extentOffset+r.item.extent.extentLength,f=r.item.itemId+r.item.constructionMethod+r.item.dataReferenceIndex+r.item.baseOffset+r.item.extentCount;let h=0;for(let g=0;g<l&&!(u+f>e);g++){const E={extents:[]};E.itemId=Ib(t,u,n),u+=r.item.itemId,E.constructionMethod=n===1||n===2?t.getUint16(u)&15:void 0,u+=r.item.constructionMethod,E.dataReferenceIndex=t.getUint16(u),u+=r.item.dataReferenceIndex,E.baseOffset=to(t,u,r.item.baseOffset),u+=r.item.baseOffset,E.extentCount=t.getUint16(u),u+=r.item.extentCount;const m=Rb(E.extentCount,d,u,e,Tb-h);for(let p=0;p<m;p++){const A={};A.extentIndex=Pb(t,n,u,a),u+=r.item.extent.extentIndex,A.extentOffset=to(t,u,s),u+=r.item.extent.extentOffset,A.extentLength=to(t,u,o),u+=r.item.extent.extentLength,E.extents.push(A)}if(h+=m,c.push(E),(E.extentCount-m)*d>0)break}return c}function Rb(t,e,n,i,r){if(e===0)return 0;const s=Math.floor((i-n)/e);return Math.max(0,Math.min(t,s,r))}function Ib(t,e,n){if(n<2)return t.getUint16(e);if(n===2)return t.getUint32(e)}function Pb(t,e,n,i){if((e===1||e===2)&&i>0)return to(t,n,i)}function to(t,e,n){return n===4?t.getUint32(e):n===8?(console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed."),Mb(t,e)):0}const Lb=1718909296,Db=1768977008,Nb=1835365473,Ub=1768714083,Fb=1768186228,Ob=1768517222,Bb=1768842853,zb=1768973167,Gb=1668246642,qm=1165519206,kl=1835625829,Hb=1970432288,$m=4,cs=8;function Vl(t,e,n=t.byteLength){if(Zc(t,e,cs))try{const{length:r,contentOffset:s}=Jm(t,e);if(r<cs)return;const o=t.getUint32(e+$m);if(o===Lb)return Jb(t,s,r);if(o===Db)return jb(t,e,s,r,n);if(o===zb)return Qb(t,e,s,r,n);if(o===Gb)return ey(t,s,r);if(o===Fb)return iy(s,r);if(!Zc(t,s,1))return;const a=t.getUint8(s);return o===Nb?ny(t,e,s+1,r,n):o===Ub?bb(t,e,a,s+1,r,n):o===Ob?ry(t,e,a,s+1,r,n):o===Bb?sy(t,e,a,s+1,r):{type:void 0,length:r}}catch{return}}function Km(t,e){if(!t)return!1;try{const n=Vl(t,0);return n!==void 0&&e.indexOf(n.majorBrand)!==-1}catch{return!1}}function Jm(t,e){const a=t.getUint32(e);if(kb(a))return{length:t.byteLength-e,contentOffset:e+4+4};if(Vb(a)){if(!Zc(t,e,16))return{length:0,contentOffset:e+4+4};if(Wb(t,e))return{length:t.getUint32(e+12),contentOffset:e+4+4+8}}return{length:a,contentOffset:e+4+4}}function kb(t){return t===0}function Vb(t){return t===1}function Wb(t,e){return t.getUint32(e+8)===0}function jm(t,e){{const n={},i=Xb(t);if(!i)return{hasAppMarkers:!1};{const r=Yb(t,i,e);r!==void 0&&(n.tiffHeaderOffset=r.tiffHeaderOffset,r.dataView!==void 0&&(n.exifDataView=r.dataView))}{const r=qb(t,i,e);r!==void 0&&(n.xmpChunks=r.chunks,r.dataView!==void 0&&(n.xmpDataView=r.dataView))}return n.iccChunks=Kb(i,e),n.hasAppMarkers=n.tiffHeaderOffset!==void 0||n.xmpChunks!==void 0||n.iccChunks!==void 0,n}}function Xb(t){let i=0;for(;i+4+4<=t.byteLength;){const r=Vl(t,i);if(r===void 0)break;if(r.type==="meta")return r;i+=r.length}}function Yb(t,e,n){try{const i=Zb(e).itemId,r=ig(e,i);tg(r);const s=eg(e);if(Qm(n,r,"exif",s),r.extents.length>1){const a=ng(t,r,s);return a===void 0?void 0:{tiffHeaderOffset:Eo(a,0),dataView:a}}const o=Bo(r,r.extents[0],s);return o===void 0?void 0:{tiffHeaderOffset:Eo(t,o)}}catch{return}}function Qm(t,e,n,i){if(t)for(let r=0;r<e.extents.length;r++){const s=e.extents[r],o=Bo(e,s,i);o!==void 0&&Ei(t,n,o,o+s.extentLength)}}function Bo(t,e,n){const i=t.constructionMethod;if(i===void 0||i===0)return t.baseOffset+e.extentOffset;if(i===1&&n!==void 0)return n+t.baseOffset+e.extentOffset}function eg(t){const e=t.subBoxes.find(n=>n.type==="idat");return e?e.contentOffset:void 0}function tg(t){t.constructionMethod===2&&console.warn("This file uses iloc constructionMethod 2 (item_offset) which is currently not supported by ExifReader. Contact the maintainer to get it fixed.")}function ng(t,e,n){const i=[];let r=0;for(let a=0;a<e.extents.length;a++){const l=e.extents[a],c=Bo(e,l,n);if(c===void 0||c+l.extentLength>t.byteLength||(i.push({start:c,length:l.extentLength}),r+=l.extentLength,r>t.byteLength))return}const s=new Uint8Array(r);let o=0;for(let a=0;a<i.length;a++){const{start:l,length:c}=i[a];for(let u=0;u<c;u++)s[o+u]=t.getUint8(l+u);o+=c}return new DataView(s.buffer)}function Zb(t){return t.subBoxes.find(e=>e.type==="iinf").itemInfos.find(e=>e.itemType===qm)}function ig(t,e){return t.subBoxes.find(n=>n.type==="iloc").items.find(n=>n.itemId===e)}function Eo(t,e){return e+4+t.getUint32(e)}function qb(t,e,n){try{const i=$b(e).itemId,r=ig(e,i);tg(r);const s=eg(e);if(Qm(n,r,"xmp",s),r.extents.length>1){const l=ng(t,r,s);return l===void 0?void 0:{chunks:[{dataOffset:0,length:l.byteLength}],dataView:l}}const o=r.extents[0],a=Bo(r,o,s);return a===void 0?void 0:{chunks:[{dataOffset:a,length:o.extentLength}]}}catch{return}}function $b(t){return t.subBoxes.find(e=>e.type==="iinf").itemInfos.find(e=>e.itemType===kl&&e.contentType==="application/rdf+xml")}function Kb(t,e){try{const n=t.subBoxes.find(i=>i.type==="iprp").subBoxes.find(i=>i.type==="ipco").properties.find(i=>i.type==="colr").icc;if(n)return Ei(e,"icc",n.offset,n.offset+n.length),[n]}catch{}}function Jb(t,e,n){return{type:"ftyp",majorBrand:Pe(t,e,4),length:n}}function jb(t,e,n,i,r){return{type:"iprp",subBoxes:zo(t,n,i-(n-e),r),length:i}}function Qb(t,e,n,i,r){return{type:"ipco",properties:zo(t,n,i-(n-e),r),length:i}}function ey(t,e,n){return{type:"colr",icc:ty(t,e),length:n}}function ty(t,e){const i=Pe(t,e,4);if(!(i!=="prof"&&i!=="rICC"))return{offset:e+4,length:t.getUint32(e+4),chunkNumber:1,chunksTotal:1}}function ny(t,e,n,i,r){return{type:"meta",subBoxes:zo(t,n+3,i-(n+3-e),r),length:i}}function iy(t,e){return{type:"idat",contentOffset:t,length:e}}function zo(t,e,n,i){const r=[qm,kl],s=Math.min(e+n,i),o=[];let a=e;for(;a+cs<=s;){const l=Vl(t,a,s);if(l===void 0)break;l.type!==void 0&&(l.itemType===void 0||r.indexOf(l.itemType)!==-1)&&o.push(l),a+=l.length}return o}function ry(t,e,n,i,r,s){const a=n===0?2:4,l=i+3+a;return{type:"iinf",itemInfos:zo(t,l,r-(l-e),s),length:r}}function sy(t,e,n,i,r){i+=3;const o={type:"infe",length:r};return(n===0||n===1)&&(o.itemId=t.getUint16(i),i+=2,o.itemProtectionIndex=t.getUint16(i),i+=2,o.itemName=or(t,i),i+=o.itemName.length+1),n>=2&&(n===2?(o.itemId=t.getUint16(i),i+=2):n===3&&(o.itemId=t.getUint32(i),i+=4),o.itemProtectionIndex=t.getUint16(i),i+=2,o.itemType=t.getUint32(i),i+=4,o.itemName=or(t,i),i+=o.itemName.length+1,o.itemType===kl?(o.contentType=or(t,i),i+=o.contentType.length+1,e+r>i&&(o.contentEncoding=or(t,i),i+=o.contentEncoding.length+1)):o.itemType===Hb&&(o.itemUri=or(t,i),i+=o.itemUri.length+1)),o}const oy=0,rg=2,sg=4,ay=8,og=42,Pf=2,ag=12,cy=4,Lf={isTiffFile:ly,findTiffOffsets:fy};function ly(t){return!!t&&t.byteLength>=4&&uy(t)}function uy(t){const e=t.getUint16(0)===en.LITTLE_ENDIAN;return t.getUint16(rg,e)===og}function fy(){return{hasAppMarkers:!0,tiffHeaderOffset:0}}const Df={isJpegFile:Ay,findJpegOffsets:wy},dy=2,hy=65496,Nf=2,jt=4,St=2,py=2,my=10,gy=18,Uf=33,Ff=79,Of=18,_y=8,qc="ICC_PROFILE\0",cg=jt+qc.length,xy=cg+1,Bf="MPF\0",lg=65472,ug=65474,vy=65476,Ey=65499,Sy=65501,$c=65498,fg=65504,Wl=65505,dg=65506,My=65517,Ty=65519,by=65534,yy=65535,zf="JFIF",Gf="Exif",Hf="http://ns.adobe.com/xap/1.0/\0",kf="http://ns.adobe.com/xmp/extension/\0",Vf="Photoshop 3.0",Wf="8BIM";function Ay(t){return!!t&&t.byteLength>=dy&&t.getUint16(0)===hy}function wy(t,e){let n=Nf,i,r,s,o,a,l,c,u,d,f=0,h,g=!1;for(;n+jt+5<=t.byteLength;){let E;if(t.getUint16(n)===$c&&(g=!0),Cy(t,n))i=t.getUint16(n+St),r=n+St,E="file";else if(Ry(t,n))i=t.getUint16(n+St),s=n+St,E="file";else if(Ly(t,n))i=t.getUint16(n+St),o=n+py,E="jfif";else if(Dy(t,n)){i=t.getUint16(n+St),f++;const m=n+my;if(f===1)h={appMarkerPosition:n,fieldLength:i,tiffHeaderOffset:m,score:void 0};else{h.score===void 0&&(h.score=Xf(t,h.appMarkerPosition,h.fieldLength,h.tiffHeaderOffset));const p=Xf(t,n,i,m);p>h.score&&(h={appMarkerPosition:n,fieldLength:i,tiffHeaderOffset:m,score:p})}a=h.tiffHeaderOffset,E="exif"}else if(Ny(t,n))c||(c=[]),i=t.getUint16(n+St),c.push(By(n,i)),E="xmp";else if(Fy(t,n))c||(c=[]),i=t.getUint16(n+St),c.push(zy(n,i)),E="xmp";else if(Gy(t,n))i=t.getUint16(n+St),l=n+gy,E="iptc";else if(Iy(t,n)){i=t.getUint16(n+St);const m=n+Of,p=i-(Of-St),A=t.getUint8(n+cg),w=t.getUint8(n+xy);u||(u=[]),u.push({offset:m,length:p,chunkNumber:A,chunksTotal:w}),E="icc"}else if(Py(t,n))i=t.getUint16(n+St),d=n+_y,E="mpf";else if(Hy(t,n))i=t.getUint16(n+St);else if(ky(t,n)){n++;continue}else break;Ei(e,E,n,n+St+i),n+=St+i}return f>1&&Wy(f),e&&(!g&&n+St<=t.byteLength&&t.getUint16(n)===$c&&(g=!0),e.truncated=!g),{hasAppMarkers:n>Nf,fileDataOffset:r||s,jfifDataOffset:o,tiffHeaderOffset:a,iptcDataOffset:l,xmpChunks:c,iccChunks:u,mpfDataOffset:d}}function Cy(t,e){return t.getUint16(e)===lg}function Ry(t,e){return t.getUint16(e)===ug}function Iy(t,e){const n=qc.length;return t.getUint16(e)===dg&&Pe(t,e+jt,n)===qc}function Py(t,e){const n=Bf.length;return t.getUint16(e)===dg&&Pe(t,e+jt,n)===Bf}function Ly(t,e){const n=zf.length;return t.getUint16(e)===fg&&Pe(t,e+jt,n)===zf&&t.getUint8(e+jt+n)===0}function Dy(t,e){const n=Gf.length;return t.getUint16(e)===Wl&&Pe(t,e+jt,n)===Gf&&t.getUint8(e+jt+n)===0}function Ny(t,e){return t.getUint16(e)===Wl&&Uy(t,e)}function Uy(t,e){const n=Hf.length;return Pe(t,e+jt,n)===Hf}function Fy(t,e){return t.getUint16(e)===Wl&&Oy(t,e)}function Oy(t,e){const n=kf.length;return Pe(t,e+jt,n)===kf}function By(t,e){return{dataOffset:t+Uf,length:e-(Uf-St)}}function zy(t,e){return{dataOffset:t+Ff,length:e-(Ff-St)}}function Gy(t,e){const n=Vf.length,i=Wf.length,r=e+jt+n+1;return t.getUint16(e)===My&&Pe(t,e+jt,n)===Vf&&t.getUint8(e+jt+n)===0&&Pe(t,r,i)===Wf}function Hy(t,e){const n=t.getUint16(e);return n>=fg&&n<=Ty||n===by||n===lg||n===ug||n===vy||n===Ey||n===Sy||n===$c}function ky(t,e){return t.getUint16(e)===yy}function Xf(t,e,n,i){const r=e+St+n,s=Vy(t,i,r);if(!s)return 0;const o=Number.isInteger(s.ifdEntries)?s.ifdEntries:0;return(s.isValid?1e9:0)+o*1e6+n}function Vy(t,e,n){try{if(e+ay>n)return;const i=t.getUint16(e+oy),r=i===en.LITTLE_ENDIAN;if(!r&&i!==en.BIG_ENDIAN||t.getUint16(e+rg,r)!==og)return;const o=t.getUint32(e+sg,r),a=e+o;if(a+Pf>n)return;const l=t.getUint16(a,r),c=Pf+l*ag+cy,d=a+c<=n&&l>0;return{ifdEntries:l,isValid:d}}catch{return}}function Wy(t){typeof console>"u"||typeof console.warn!="function"||console.warn(`ExifReader: Found ${t} Exif segments (APP1). Will pick the best candidate segment.`)}const Yf={isPngFile:Zy,findPngOffsets:qy},Kc=`PNG\r

`,So=4,cn=4,Jc=0,jn=So,Lt=So+cn,jc="XML:com.adobe.xmp\0",Xl="tEXt",Ni="iTXt",Go="zTXt",hg="pHYs",pg="tIME",Xy="eXIf",Yy="iCCP";function Zy(t){return!!t&&Pe(t,0,Kc.length)===Kc}function qy(t,e,n){const r="IEND",s={hasAppMarkers:!1};let o=Kc.length,a=!1;for(;o+So+cn<=t.byteLength;){let l;const c=t.getUint32(o+Jc);if(n&&Pe(t,o+jn,cn)===r&&(a=!0),$y(t,o))s.hasAppMarkers=!0,s.pngHeaderOffset=o+Lt,l="file";else if(Ky(t,o)){const d=tA(t,o);d!==void 0&&(s.hasAppMarkers=!0,s.xmpChunks=[{dataOffset:d,length:c-(d-(o+Lt))}],l="xmp")}else if(Jy(t,o,e)){s.hasAppMarkers=!0;const d=Pe(t,o+jn,cn);s.pngTextChunks||(s.pngTextChunks=[]),s.pngTextChunks.push({length:c,type:d,offset:o+Lt}),l="png"}else if(jy(t,o))s.hasAppMarkers=!0,s.tiffHeaderOffset=o+Lt,l="exif";else if(e&&Qy(t,o)){const d=o+Lt,f=nA(t,d);f!==void 0&&(s.hasAppMarkers=!0,s.iccChunks||(s.iccChunks=[]),s.iccChunks.push({offset:f.compressedProfileOffset,length:c-(f.compressedProfileOffset-d),chunkNumber:1,chunksTotal:1,profileName:f.profileName,compressionMethod:f.compressionMethod}),l="icc")}else eA(t,o)&&(s.hasAppMarkers=!0,s.pngChunkOffsets||(s.pngChunkOffsets=[]),s.pngChunkOffsets.push(o+Jc),l="png");const u=c+So+cn+4;Ei(n,l,o,o+u),o+=u}return n&&(n.truncated=!a),s}function $y(t,e){return Pe(t,e+jn,cn)==="IHDR"}function Ky(t,e){return Pe(t,e+jn,cn)===Ni&&Pe(t,e+Lt,jc.length)===jc}function Jy(t,e,n){const i=Pe(t,e+jn,cn);return i===Xl||i===Ni||i===Go&&n}function jy(t,e){return Pe(t,e+jn,cn)===Xy}function Qy(t,e){return Pe(t,e+jn,cn)===Yy}function eA(t,e){const n=[hg,pg],i=Pe(t,e+jn,cn);return n.includes(i)}function tA(t,e){e+=Lt+jc.length+1+1;let r=0;for(;r<2&&e<t.byteLength;)t.getUint8(e)===0&&r++,e++;if(!(r<2))return e}function nA(t,e){const r=or(t,e);if(e+=r.length+1,e+1>t.byteLength)return;const s=t.getUint8(e);return e+=1,{profileName:r,compressionMethod:s,compressedProfileOffset:e}}const Zf={isHeicFile:rA,findHeicOffsets:sA},iA=["heic","heix","hevc","hevx","heim","heis","hevm","hevs","mif1"];function rA(t){return Km(t,iA)}function sA(t,e){return jm(t,e)}const qf={isAvifFile:aA,findAvifOffsets:cA},oA=["avif"];function aA(t){return Km(t,oA)}function cA(t,e){return jm(t,e)}const $f={isJxlFile:dA,findJxlOffsets:pA},ya=[0,0,0,12,74,88,76,32,13,10,135,10],Aa=[255,10],Kf=1165519206,Jf=2020437024,lA=1651666786,uA=1786276963,fA=1786276976,jf=4,Qf=4;function dA(t){try{return hA(t)||mg(t)}catch{return!1}}function hA(t){if(!t||t.byteLength<ya.length)return!1;for(let e=0;e<ya.length;e++)if(t.getUint8(e)!==ya[e])return!1;return!0}function mg(t){return!t||t.byteLength<Aa.length?!1:t.getUint8(0)===Aa[0]&&t.getUint8(1)===Aa[1]}function pA(t,e){let n=0,i,r,s,o,a;if(mg(t))return{hasAppMarkers:!0,tiffHeaderOffset:void 0,xmpChunks:void 0,brobExifChunk:void 0,brobXmpChunk:void 0,jxlCodestreamOffset:0};for(;n+cs<=t.byteLength;){const{length:c,contentOffset:u}=Jm(t,n);if(c<cs)break;const d=t.getUint32(n+$m);let f;if(d===Kf){try{i=Eo(t,u)}catch{}f="exif"}if(d===Jf&&(r=[{dataOffset:u,length:c-(u-n)}],f="xmp"),d===uA&&a===void 0&&(a=u),d===fA&&a===void 0&&u+jf<=t.byteLength&&(t.getUint32(u)&2147483647)===0&&(a=u+jf),d===lA&&u+Qf<=t.byteLength){const h=t.getUint32(u),g=u+Qf,E=c-(g-n);h===Kf&&(f="exif",i===void 0&&!s&&(s={dataOffset:g,length:E})),h===Jf&&(f="xmp",!r&&!o&&(o={dataOffset:g,length:E}))}Ei(e,f,n,n+c),n+=c}return{hasAppMarkers:i!==void 0||r!==void 0||s!==void 0||o!==void 0||a!==void 0,tiffHeaderOffset:i,xmpChunks:r,brobExifChunk:s,brobXmpChunk:o,jxlCodestreamOffset:a}}const ed={isWebpFile:mA,findOffsets:gA};function mA(t){const n="RIFF",r="WEBP";return!!t&&Pe(t,0,n.length)===n&&Pe(t,8,r.length)===r}function gA(t,e){const r="Exif\0\0";let o=12,a=!1,l,c,u,d;for(;o+8<t.byteLength;){const f=Pe(t,o,4),h=t.getUint32(o+4,!0);let g;f==="EXIF"?(a=!0,Pe(t,o+8,r.length)===r?l=o+8+r.length:l=o+8,g="exif"):f==="XMP "?(a=!0,c=[{dataOffset:o+8,length:h}],g="xmp"):f==="ICCP"?(a=!0,u=[{offset:o+8,length:h,chunkNumber:1,chunksTotal:1}],g="icc"):f==="VP8X"&&(a=!0,d=o+8,g="riff");const E=8+(h%2===0?h:h+1);Ei(e,g,o,o+E),o+=E}return{hasAppMarkers:a,tiffHeaderOffset:l,xmpChunks:c,iccChunks:u,vp8xChunkOffset:d}}const td={isGifFile:EA,findOffsets:SA},_A=6,xA=["GIF87a","GIF89a"],vA=13;function EA(t){return!!t&&xA.includes(Pe(t,0,_A))}function SA(t,e){return Ei(e,"gif",0,vA),{gifHeaderOffset:0}}const nd={isXMLFile:MA,findOffsets:TA},gg=0,id="<?xpacket begin",rd=["<?xpacket end=","</x:xmpmeta>"];function MA(t){return!!t&&Pe(t,gg,id.length)===id}function TA(t,e){const n=[];return n.push({dataOffset:gg,length:t.byteLength}),Ei(e,"xmp",0,t.byteLength),e&&(e.truncated=!bA(t)),{xmpChunks:n}}function bA(t){const e=Pe(t,0,t.byteLength);for(let n=0;n<rd.length;n++)if(e.indexOf(rd[n])!==-1)return!0;return!1}const yA={parseAppMarkers:AA};function AA(t,e,n){const i=n?[]:void 0;if(Lf.isTiffFile(t))return Hn(Lf.findTiffOffsets(),"tiff","TIFF",i);if(Df.isJpegFile(t))return Hn(Df.findJpegOffsets(t,i),"jpeg","JPEG",i);if(Yf.isPngFile(t))return Hn(Yf.findPngOffsets(t,e,i),"png","PNG",i);if(Zf.isHeicFile(t))return Hn(Zf.findHeicOffsets(t,i),"heic","HEIC",i);if(qf.isAvifFile(t))return Hn(qf.findAvifOffsets(t,i),"avif","AVIF",i);if($f.isJxlFile(t))return Hn($f.findJxlOffsets(t,i),"jxl","JPEG XL",i);if(ed.isWebpFile(t))return Hn(ed.findOffsets(t,i),"webp","WebP",i);if(td.isGifFile(t))return Hn(td.findOffsets(t,i),"gif","GIF",i);if(nd.isXMLFile(t))return Hn(nd.findOffsets(t,i),"xml","XML",i);throw new Error("Invalid image format")}function Hn(t,e,n,i){const r=zt({},t,{fileType:{value:e,description:n}});return i!==void 0&&(r.metadataBlocks=i,r.metadataTruncated=!!i.truncated),r}const De={ApertureValue:t=>Math.pow(Math.sqrt(2),t[0]/t[1]).toFixed(2),ColorSpace(t){return t===1?"sRGB":t===65535?"Uncalibrated":"Unknown"},ComponentsConfiguration(t){return t.map(e=>{if(e===49)return"Y";if(e===50)return"Cb";if(e===51)return"Cr";if(e===52)return"R";if(e===53)return"G";if(e===54)return"B"}).join("")},Contrast(t){return t===0?"Normal":t===1?"Soft":t===2?"Hard":"Unknown"},CustomRendered(t){return t===0?"Normal process":t===1?"Custom process":"Unknown"},ExposureMode(t){return t===0?"Auto exposure":t===1?"Manual exposure":t===2?"Auto bracket":"Unknown"},ExposureProgram(t){return t===0?"Undefined":t===1?"Manual":t===2?"Normal program":t===3?"Aperture priority":t===4?"Shutter priority":t===5?"Creative program":t===6?"Action program":t===7?"Portrait mode":t===8?"Landscape mode":t===9?"Bulb":"Unknown"},ExposureTime(t){if(t[0]/t[1]>.25){const e=t[0]/t[1];return Number.isInteger(e)?""+e:e.toFixed(1)}return t[0]!==0?`1/${Math.round(t[1]/t[0])}`:`0/${t[1]}`},FNumber:t=>`f/${Number(t[0]/t[1]).toFixed(1)}`,FocalLength:t=>t[0]/t[1]+" mm",FocalPlaneResolutionUnit(t){return t===2?"inches":t===3?"centimeters":t===4?"millimeters":"Unknown"},LightSource:t=>t===1?"Daylight":t===2?"Fluorescent":t===3?"Tungsten (incandescent light)":t===4?"Flash":t===9?"Fine weather":t===10?"Cloudy weather":t===11?"Shade":t===12?"Daylight fluorescent (D 5700 – 7100K)":t===13?"Day white fluorescent (N 4600 – 5400K)":t===14?"Cool white fluorescent (W 3900 – 4500K)":t===15?"White fluorescent (WW 3200 – 3700K)":t===17?"Standard light A":t===18?"Standard light B":t===19?"Standard light C":t===20?"D55":t===21?"D65":t===22?"D75":t===23?"D50":t===24?"ISO studio tungsten":t===255?"Other light source":"Unknown",MeteringMode(t){return t===1?"Average":t===2?"CenterWeightedAverage":t===3?"Spot":t===4?"MultiSpot":t===5?"Pattern":t===6?"Partial":t===255?"Other":"Unknown"},ResolutionUnit(t){return t===2?"inches":t===3?"centimeters":"Unknown"},Saturation(t){return t===0?"Normal":t===1?"Low saturation":t===2?"High saturation":"Unknown"},FocalLengthIn35mmFilm(t){return t===0?"Unknown":t+" mm"},SceneCaptureType(t){return t===0?"Standard":t===1?"Landscape":t===2?"Portrait":t===3?"Night scene":"Unknown"},Sharpness(t){return t===0?"Normal":t===1?"Soft":t===2?"Hard":"Unknown"},ShutterSpeedValue(t){const e=Math.pow(2,t[0]/t[1]);return e<=1?`${Math.round(1/e)}`:`1/${Math.round(e)}`},WhiteBalance(t){return t===0?"Auto white balance":t===1?"Manual white balance":"Unknown"},XResolution:t=>""+Math.round(t[0]/t[1]),YResolution:t=>""+Math.round(t[0]/t[1])},_g={11:"ProcessingSoftware",254:{name:"SubfileType",description:t=>({0:"Full-resolution image",1:"Reduced-resolution image",2:"Single page of multi-page image",3:"Single page of multi-page reduced-resolution image",4:"Transparency mask",5:"Transparency mask of reduced-resolution image",6:"Transparency mask of multi-page image",7:"Transparency mask of reduced-resolution multi-page image",65537:"Alternate reduced-resolution image",4294967295:"Invalid"})[t]||"Unknown"},255:{name:"OldSubfileType",description:t=>({0:"Full-resolution image",1:"Reduced-resolution image",2:"Single page of multi-page image"})[t]||"Unknown"},256:"ImageWidth",257:"ImageLength",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",263:{name:"Thresholding",description:t=>({1:"No dithering or halftoning",2:"Ordered dither or halfton",3:"Randomized dither"})[t]||"Unknown"},264:"CellWidth",265:"CellLength",266:{name:"FillOrder",description:t=>({1:"Normal",2:"Reversed"})[t]||"Unknown"},269:"DocumentName",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:{name:"Orientation",description:t=>t===1?"top-left":t===2?"top-right":t===3?"bottom-right":t===4?"bottom-left":t===5?"left-top":t===6?"right-top":t===7?"right-bottom":t===8?"left-bottom":"Undefined"},277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",280:"MinSampleValue",281:"MaxSampleValue",282:{name:"XResolution",description:De.XResolution},283:{name:"YResolution",description:De.YResolution},284:"PlanarConfiguration",285:"PageName",286:{name:"XPosition",description:t=>""+Math.round(t[0]/t[1])},287:{name:"YPosition",description:t=>""+Math.round(t[0]/t[1])},290:{name:"GrayResponseUnit",description:t=>({1:"0.1",2:"0.001",3:"0.0001",4:"1e-05",5:"1e-06"})[t]||"Unknown"},296:{name:"ResolutionUnit",description:De.ResolutionUnit},297:"PageNumber",301:"TransferFunction",305:"Software",306:"DateTime",315:"Artist",316:"HostComputer",317:"Predictor",318:{name:"WhitePoint",description:t=>t.map(e=>`${e[0]}/${e[1]}`).join(", ")},319:{name:"PrimaryChromaticities",description:t=>t.map(e=>`${e[0]}/${e[1]}`).join(", ")},321:"HalftoneHints",322:"TileWidth",323:"TileLength",330:"A100DataOffset",332:{name:"InkSet",description:t=>({1:"CMYK",2:"Not CMYK"})[t]||"Unknown"},337:"TargetPrinter",338:{name:"ExtraSamples",description:t=>({0:"Unspecified",1:"Associated Alpha",2:"Unassociated Alpha"})[t]||"Unknown"},339:{name:"SampleFormat",description:t=>{const e={1:"Unsigned",2:"Signed",3:"Float",4:"Undefined",5:"Complex int",6:"Complex float"};return Array.isArray(t)?t.map(n=>e[n]||"Unknown").join(", "):"Unknown"}},513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",529:{name:"YCbCrCoefficients",description:t=>t.map(e=>""+e[0]/e[1]).join("/")},530:"YCbCrSubSampling",531:{name:"YCbCrPositioning",description:t=>t===1?"centered":t===2?"co-sited":"undefined "+t},532:{name:"ReferenceBlackWhite",description:t=>t.map(e=>""+e[0]/e[1]).join(", ")},700:"ApplicationNotes",18246:"Rating",18249:"RatingPercent",33432:{name:"Copyright",description:t=>t.join("; ")},33550:"PixelScale",33723:"IPTC-NAA",33920:"IntergraphMatrix",33922:"ModelTiePoint",34118:"SEMInfo",34264:"ModelTransform",34377:"PhotoshopSettings",34665:"Exif IFD Pointer",34675:"ICC_Profile",34735:"GeoTiffDirectory",34736:"GeoTiffDoubleParams",34737:"GeoTiffAsciiParams",34853:"GPS Info IFD Pointer",40091:{name:"XPTitle",description:Nr},40092:{name:"XPComment",description:Nr},40093:{name:"XPAuthor",description:Nr},40094:{name:"XPKeywords",description:Nr},40095:{name:"XPSubject",description:Nr},42112:"GDALMetadata",42113:"GDALNoData",50341:"PrintIM",50707:"DNGBackwardVersion",50708:"UniqueCameraModel",50709:"LocalizedCameraModel",50721:"ColorMatrix1",50722:"ColorMatrix2",50723:"CameraCalibration1",50724:"CameraCalibration2",50725:"ReductionMatrix1",50726:"ReductionMatrix2",50727:"AnalogBalance",50728:"AsShotNeutral",50729:"AsShotWhiteXY",50730:"BaselineExposure",50731:"BaselineNoise",50732:"BaselineSharpness",50734:"LinearResponseLimit",50735:"CameraSerialNumber",50736:"DNGLensInfo",50739:"ShadowScale",50741:{name:"MakerNoteSafety",description:t=>({0:"Unsafe",1:"Safe"})[t]||"Unknown"},50778:{name:"CalibrationIlluminant1",description:De.LightSource},50779:{name:"CalibrationIlluminant2",description:De.LightSource},50781:"RawDataUniqueID",50827:"OriginalRawFileName",50828:"OriginalRawFileData",50831:"AsShotICCProfile",50832:"AsShotPreProfileMatrix",50833:"CurrentICCProfile",50834:"CurrentPreProfileMatrix",50879:"ColorimetricReference",50885:"SRawType",50898:"PanasonicTitle",50899:"PanasonicTitle2",50931:"CameraCalibrationSig",50932:"ProfileCalibrationSig",50933:"ProfileIFD",50934:"AsShotProfileName",50936:"ProfileName",50937:"ProfileHueSatMapDims",50938:"ProfileHueSatMapData1",50939:"ProfileHueSatMapData2",50940:"ProfileToneCurve",50941:{name:"ProfileEmbedPolicy",description:t=>({0:"Allow Copying",1:"Embed if Used",2:"Never Embed",3:"No Restrictions"})[t]||"Unknown"},50942:"ProfileCopyright",50964:"ForwardMatrix1",50965:"ForwardMatrix2",50966:"PreviewApplicationName",50967:"PreviewApplicationVersion",50968:"PreviewSettingsName",50969:"PreviewSettingsDigest",50970:{name:"PreviewColorSpace",description:t=>({1:"Gray Gamma 2.2",2:"sRGB",3:"Adobe RGB",4:"ProPhoto RGB"})[t]||"Unknown"},50971:"PreviewDateTime",50972:"RawImageDigest",50973:"OriginalRawFileDigest",50981:"ProfileLookTableDims",50982:"ProfileLookTableData",51043:"TimeCodes",51044:"FrameRate",51058:"TStop",51081:"ReelName",51089:"OriginalDefaultFinalSize",51090:"OriginalBestQualitySize",51091:"OriginalDefaultCropSize",51105:"CameraLabel",51107:{name:"ProfileHueSatMapEncoding",description:t=>({0:"Linear",1:"sRGB"})[t]||"Unknown"},51108:{name:"ProfileLookTableEncoding",description:t=>({0:"Linear",1:"sRGB"})[t]||"Unknown"},51109:"BaselineExposureOffset",51110:{name:"DefaultBlackRender",description:t=>({0:"Auto",1:"None"})[t]||"Unknown"},51111:"NewRawImageDigest",51112:"RawToPreviewGain"};function Nr(t){return new TextDecoder("utf-16").decode(new Uint8Array(t)).replace(/\u0000+$/,"")}const wA={33434:{name:"ExposureTime",description:De.ExposureTime},33437:{name:"FNumber",description:De.FNumber},34850:{name:"ExposureProgram",description:De.ExposureProgram},34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:{name:"OECF",description:()=>"[Raw OECF table data]"},34858:"TimeZoneOffset",34859:"SelfTimerMode",34864:{name:"SensitivityType",description:t=>({1:"Standard Output Sensitivity",2:"Recommended Exposure Index",3:"ISO Speed",4:"Standard Output Sensitivity and Recommended Exposure Index",5:"Standard Output Sensitivity and ISO Speed",6:"Recommended Exposure Index and ISO Speed",7:"Standard Output Sensitivity, Recommended Exposure Index and ISO Speed"})[t]||"Unknown"},34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",36864:{name:"ExifVersion",description:t=>tt(t)},36867:"DateTimeOriginal",36868:"DateTimeDigitized",36873:"GooglePlusUploadCode",36880:"OffsetTime",36881:"OffsetTimeOriginal",36882:"OffsetTimeDigitized",37121:{name:"ComponentsConfiguration",description:De.ComponentsConfiguration},37122:"CompressedBitsPerPixel",37377:{name:"ShutterSpeedValue",description:De.ShutterSpeedValue},37378:{name:"ApertureValue",description:De.ApertureValue},37379:"BrightnessValue",37380:"ExposureBiasValue",37381:{name:"MaxApertureValue",description:t=>Math.pow(Math.sqrt(2),t[0]/t[1]).toFixed(2)},37382:{name:"SubjectDistance",description:t=>t[0]/t[1]+" m"},37383:{name:"MeteringMode",description:De.MeteringMode},37384:{name:"LightSource",description:De.LightSource},37385:{name:"Flash",description:t=>t===0?"Flash did not fire":t===1?"Flash fired":t===5?"Strobe return light not detected":t===7?"Strobe return light detected":t===9?"Flash fired, compulsory flash mode":t===13?"Flash fired, compulsory flash mode, return light not detected":t===15?"Flash fired, compulsory flash mode, return light detected":t===16?"Flash did not fire, compulsory flash mode":t===24?"Flash did not fire, auto mode":t===25?"Flash fired, auto mode":t===29?"Flash fired, auto mode, return light not detected":t===31?"Flash fired, auto mode, return light detected":t===32?"No flash function":t===65?"Flash fired, red-eye reduction mode":t===69?"Flash fired, red-eye reduction mode, return light not detected":t===71?"Flash fired, red-eye reduction mode, return light detected":t===73?"Flash fired, compulsory flash mode, red-eye reduction mode":t===77?"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected":t===79?"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected":t===89?"Flash fired, auto mode, red-eye reduction mode":t===93?"Flash fired, auto mode, return light not detected, red-eye reduction mode":t===95?"Flash fired, auto mode, return light detected, red-eye reduction mode":"Unknown"},37386:{name:"FocalLength",description:De.FocalLength},37393:"ImageNumber",37394:{name:"SecurityClassification",description:t=>({C:"Confidential",R:"Restricted",S:"Secret",T:"Top Secret",U:"Unclassified"})[t]||"Unknown"},37395:"ImageHistory",37396:{name:"SubjectArea",description:t=>t.length===2?`Location; X: ${t[0]}, Y: ${t[1]}`:t.length===3?`Circle; X: ${t[0]}, Y: ${t[1]}, diameter: ${t[2]}`:t.length===4?`Rectangle; X: ${t[0]}, Y: ${t[1]}, width: ${t[2]}, height: ${t[3]}`:"Unknown"},37500:{name:"MakerNote",description:()=>"[Raw maker note data]"},37510:{name:"UserComment",description:Wc},37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",37724:"ImageSourceData",37888:{name:"AmbientTemperature",description:t=>t[0]/t[1]+" °C"},37889:{name:"Humidity",description:t=>t[0]/t[1]+" %"},37890:{name:"Pressure",description:t=>t[0]/t[1]+" hPa"},37891:{name:"WaterDepth",description:t=>t[0]/t[1]+" m"},37892:{name:"Acceleration",description:t=>t[0]/t[1]+" mGal"},37893:{name:"CameraElevationAngle",description:t=>t[0]/t[1]+" °"},40960:{name:"FlashpixVersion",description:t=>t.map(e=>String.fromCharCode(e)).join("")},40961:{name:"ColorSpace",description:De.ColorSpace},40962:"PixelXDimension",40963:"PixelYDimension",40964:"RelatedSoundFile",40965:"Interoperability IFD Pointer",41483:"FlashEnergy",41484:{name:"SpatialFrequencyResponse",description:()=>"[Raw SFR table data]"},41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:{name:"FocalPlaneResolutionUnit",description:De.FocalPlaneResolutionUnit},41492:{name:"SubjectLocation",description:([t,e])=>`X: ${t}, Y: ${e}`},41493:"ExposureIndex",41495:{name:"SensingMethod",description:t=>t===1?"Undefined":t===2?"One-chip color area sensor":t===3?"Two-chip color area sensor":t===4?"Three-chip color area sensor":t===5?"Color sequential area sensor":t===7?"Trilinear sensor":t===8?"Color sequential linear sensor":"Unknown"},41728:{name:"FileSource",description:t=>t===3?"DSC":"Unknown"},41729:{name:"SceneType",description:t=>t===1?"A directly photographed image":"Unknown"},41730:{name:"CFAPattern",description:()=>"[Raw CFA pattern table data]"},41985:{name:"CustomRendered",description:De.CustomRendered},41986:{name:"ExposureMode",description:De.ExposureMode},41987:{name:"WhiteBalance",description:De.WhiteBalance},41988:{name:"DigitalZoomRatio",description:t=>t[0]===0?"Digital zoom was not used":""+t[0]/t[1]},41989:{name:"FocalLengthIn35mmFilm",description:De.FocalLengthIn35mmFilm},41990:{name:"SceneCaptureType",description:De.SceneCaptureType},41991:{name:"GainControl",description:t=>t===0?"None":t===1?"Low gain up":t===2?"High gain up":t===3?"Low gain down":t===4?"High gain down":"Unknown"},41992:{name:"Contrast",description:De.Contrast},41993:{name:"Saturation",description:De.Saturation},41994:{name:"Sharpness",description:De.Sharpness},41995:{name:"DeviceSettingDescription",description:()=>"[Raw device settings table data]"},41996:{name:"SubjectDistanceRange",description:t=>t===1?"Macro":t===2?"Close view":t===3?"Distant view":"Unknown"},42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:{name:"LensSpecification",description:t=>{const e=parseFloat((t[0][0]/t[0][1]).toFixed(5)),n=parseFloat((t[1][0]/t[1][1]).toFixed(5)),i=`${e}-${n} mm`;if(t[3][1]===0)return`${i} f/?`;const r=1/(t[2][1]/t[2][1]/(t[3][0]/t[3][1]));return`${i} f/${parseFloat(r.toFixed(5))}`}},42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",42080:{name:"CompositeImage",description:t=>({1:"Not a Composite Image",2:"General Composite Image",3:"Composite Image Captured While Shooting"})[t]||"Unknown"},42081:"SourceImageNumberOfCompositeImage",42082:"SourceExposureTimesOfCompositeImage",42240:"Gamma",59932:"Padding",59933:"OffsetSchema",65e3:"OwnerName",65001:"SerialNumber",65002:"Lens",65100:"RawFile",65101:"Converter",65102:"WhiteBalance",65105:"Exposure",65106:"Shadows",65107:"Brightness",65108:"Contrast",65109:"Saturation",65110:"Sharpness",65111:"Smoothness",65112:"MoireFilter"},CA={0:{name:"GPSVersionID",description:t=>t[0]===2&&t[1]===2&&t[2]===0&&t[3]===0?"Version 2.2":"Unknown"},1:{name:"GPSLatitudeRef",description:t=>{const e=t.join("");return e==="N"?"North latitude":e==="S"?"South latitude":"Unknown"}},2:{name:"GPSLatitude",description:vo},3:{name:"GPSLongitudeRef",description:t=>{const e=t.join("");return e==="E"?"East longitude":e==="W"?"West longitude":"Unknown"}},4:{name:"GPSLongitude",description:vo},5:{name:"GPSAltitudeRef",description:t=>t===0?"Sea level":t===1?"Sea level reference (negative value)":"Unknown"},6:{name:"GPSAltitude",description:t=>t[0]/t[1]+" m"},7:{name:"GPSTimeStamp",description:t=>t.map(([e,n])=>{const i=e/n;return/^\d(\.|$)/.test(`${i}`)?`0${i}`:i}).join(":")},8:"GPSSatellites",9:{name:"GPSStatus",description:t=>{const e=t.join("");return e==="A"?"Measurement in progress":e==="V"?"Measurement Interoperability":"Unknown"}},10:{name:"GPSMeasureMode",description:t=>{const e=t.join("");return e==="2"?"2-dimensional measurement":e==="3"?"3-dimensional measurement":"Unknown"}},11:"GPSDOP",12:{name:"GPSSpeedRef",description:t=>{const e=t.join("");return e==="K"?"Kilometers per hour":e==="M"?"Miles per hour":e==="N"?"Knots":"Unknown"}},13:"GPSSpeed",14:{name:"GPSTrackRef",description:t=>{const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}},15:"GPSTrack",16:{name:"GPSImgDirectionRef",description:t=>{const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}},17:"GPSImgDirection",18:"GPSMapDatum",19:{name:"GPSDestLatitudeRef",description:t=>{const e=t.join("");return e==="N"?"North latitude":e==="S"?"South latitude":"Unknown"}},20:{name:"GPSDestLatitude",description:t=>t[0][0]/t[0][1]+t[1][0]/t[1][1]/60+t[2][0]/t[2][1]/3600},21:{name:"GPSDestLongitudeRef",description:t=>{const e=t.join("");return e==="E"?"East longitude":e==="W"?"West longitude":"Unknown"}},22:{name:"GPSDestLongitude",description:t=>t[0][0]/t[0][1]+t[1][0]/t[1][1]/60+t[2][0]/t[2][1]/3600},23:{name:"GPSDestBearingRef",description:t=>{const e=t.join("");return e==="T"?"True direction":e==="M"?"Magnetic direction":"Unknown"}},24:"GPSDestBearing",25:{name:"GPSDestDistanceRef",description:t=>{const e=t.join("");return e==="K"?"Kilometers":e==="M"?"Miles":e==="N"?"Knots":"Unknown"}},26:"GPSDestDistance",27:{name:"GPSProcessingMethod",description:Wc},28:{name:"GPSAreaInformation",description:Wc},29:"GPSDateStamp",30:{name:"GPSDifferential",description:t=>t===0?"Measurement without differential correction":t===1?"Differential correction applied":"Unknown"},31:"GPSHPositioningError"},RA={1:"InteroperabilityIndex",2:{name:"InteroperabilityVersion",description:t=>tt(t)},4096:"RelatedImageFileFormat",4097:"RelatedImageWidth",4098:"RelatedImageHeight"},IA={45056:{name:"MPFVersion",description:t=>tt(t)},45057:"NumberOfImages",45058:"MPEntry",45059:"ImageUIDList",45060:"TotalFrames"},PA={1:{name:"CameraSettings",description:t=>t},4:{name:"ShotInfo",description:t=>t},149:"LensModel"},LA={0:{name:"PentaxVersion",description:t=>t.join(".")},5:"PentaxModelID",555:"LevelInfo"},sd=zt({},_g,wA),Yl="0th",xg="1st",vg="exif",Eg="gps",Sg="interoperability",Mg="mpf",Tg="canon",Zl="pentax",wn={[Yl]:sd,[xg]:_g,[vg]:sd,[Eg]:CA,[Sg]:RA,[Mg]:IA,[Tg]:PA,[Zl]:LA},bg={1:1,2:1,3:2,4:4,5:8,7:1,9:4,10:8,13:4},Qc={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,UNDEFINED:7,SLONG:9,SRATIONAL:10,IFD:13},ne={getAsciiValue:DA,getByteAt:yg,getAsciiAt:NA,getShortAt:UA,getLongAt:Mo,getRationalAt:FA,getUndefinedAt:OA,getSlongAt:el,getSrationalAt:BA,getIfdPointerAt:zA,typeSizes:bg,tagTypes:Qc,getTypeSize:GA};function DA(t){return t.map(e=>String.fromCharCode(e))}function yg(t,e){return t.getUint8(e)}function NA(t,e){return t.getUint8(e)}function UA(t,e,n){return t.getUint16(e,n===en.LITTLE_ENDIAN)}function Mo(t,e,n){return t.getUint32(e,n===en.LITTLE_ENDIAN)}function FA(t,e,n){return[Mo(t,e,n),Mo(t,e+4,n)]}function OA(t,e){return yg(t,e)}function el(t,e,n){return t.getInt32(e,n===en.LITTLE_ENDIAN)}function BA(t,e,n){return[el(t,e,n),el(t,e+4,n)]}function zA(t,e,n){return Mo(t,e,n)}function GA(t){if(Qc[t]===void 0)throw new Error("No such type found.");return bg[Qc[t]]}const HA={exif:!0,iptc:!0,photoshop:!0,mpf:!0,makerNotes:!0},Ur={exif:!0,iptc:!0,xmp:!0,icc:!0,photoshop:!0,makerNotes:!0,mpf:!0,file:!0,jfif:!0,png:!0,riff:!0,gif:!0,gps:!0,composite:!0,thumbnail:!0},tr={exifIfdPointer:"Exif IFD Pointer",gpsInfoIfdPointer:"GPS Info IFD Pointer",interoperabilityIfdPointer:"Interoperability IFD Pointer"},od={thumbnail:["JPEGInterchangeFormat","JPEGInterchangeFormatLength"],iptc:["IPTC-NAA"],xmp:["ApplicationNotes"],icc:["ICC_Profile"],photoshop:["ImageSourceData","PhotoshopSettings"],makerNotes:["MakerNote","Make"],gps:["GPSLatitude","GPSLatitudeRef","GPSLongitude","GPSLongitudeRef","GPSAltitude","GPSAltitudeRef"]},Ag={file:["Image Width","Image Height"],exif:["FocalLength","FocalPlaneXResolution","FocalPlaneYResolution","FocalPlaneResolutionUnit","FocalLengthIn35mmFilm"]};function kA(t){const e=Object.create(null);if(!t)return e;Array.isArray(t.exif)&&t.exif.length>0&&(e[tr.exifIfdPointer]=!0,n(e,t.exif));for(const i in od)if(ad(t[i])){const r=od[i];for(let s=0;s<r.length;s++)e[r[s]]=!0;e[tr.exifIfdPointer]=!0}return ad(t.gps)&&(e[tr.gpsInfoIfdPointer]=!0,e[tr.exifIfdPointer]=!0),e;function n(i,r){for(let s=0;s<r.length;s++){const o=r[s];if(typeof o!="string")continue;const a=o.toLowerCase();a.indexOf("gps")===0&&(i[tr.gpsInfoIfdPointer]=!0),(a.indexOf("interoperability")===0||a.indexOf("relatedimage")===0)&&(i[tr.interoperabilityIfdPointer]=!0)}}}function ad(t){return t===!0?!0:Array.isArray(t)&&t.length>0}function VA({includeTags:t,excludeTags:e}={}){const n=!!t,i=!!e,r=n||i,s=Object.create(null),o=Object.create(null),a=Object.create(null);if(!r)return wg();const l=n&&(yn(t,"iptc")||yn(t,"xmp")||yn(t,"icc")||yn(t,"photoshop")||yn(t,"makerNotes")||yn(t,"thumbnail")||yn(t,"gps")||yn(t,"composite")),c=n&&yn(t,"composite");let u=Object.create(null);n&&(u=WA(t));let d=Object.create(null);n&&c&&(d=$A(Ag.file));for(const m in Ur){const p=n&&Object.prototype.hasOwnProperty.call(t,m),A=i&&Object.prototype.hasOwnProperty.call(e,m);let w;A&&!p&&(w=e[m]);const S=cd({groupKey:m,includeValue:p?t[m]:void 0,excludeValue:w,extraIncludeNames:Object.create(null)});s[m]=n?p:!0,p&&ZA(t[m])&&(s[m]=!1),S.excludeAll&&(s[m]=!1),o[m]=S;const y=cd({groupKey:m,includeValue:XA({groupKey:m,hasIncludeTags:n,hasIncludeEntry:p,includeTags:t,shouldParseExif:l,shouldParseFile:c}),excludeValue:w,extraIncludeNames:YA({groupKey:m,hasIncludeTags:n,hasIncludeEntry:p,shouldParseExif:l,shouldParseFile:c,exifIncludeDependencies:u,fileIncludeDependencies:d})});a[m]=y}return{isActive:r,shouldReturnGroup:f,shouldParseGroup:h,shouldReturnTag:g,shouldParseTag:E};function f(m){return Ur[m]?!!s[m]:!0}function h(m){return!Ur[m]||f(m)?!0:m==="exif"?l:m==="file"?c:!1}function g(m,p,A){return Ur[m]?f(m)?ld(o[m],p,A):!1:!0}function E(m,p,A){return Ur[m]?h(m)?ld(a[m],p,A):!1:!0}}function wg(){return{isActive:!1,shouldReturnGroup:t,shouldParseGroup:t,shouldReturnTag:t,shouldParseTag:t};function t(){return!0}}const yr=wg();function WA(t){const e=kA(t);return yn(t,"composite")&&KA(e,Ag.exif),e}function XA({groupKey:t,hasIncludeTags:e,hasIncludeEntry:n,includeTags:i,shouldParseExif:r,shouldParseFile:s}){if(!e)return!0;if(n)return t==="thumbnail"&&Array.isArray(i[t])?!0:i[t];if(t==="exif"&&r)return[];if(t==="file"&&s)return[]}function YA({groupKey:t,hasIncludeTags:e,hasIncludeEntry:n,shouldParseExif:i,shouldParseFile:r,exifIncludeDependencies:s,fileIncludeDependencies:o}){return e?t==="exif"&&(i||n&&Object.keys(s).length>0)?s:t==="file"&&r?o:Object.create(null):Object.create(null)}function yn(t,e){if(!t||!Object.prototype.hasOwnProperty.call(t,e))return!1;const n=t[e];return n===!0?!0:Array.isArray(n)&&n.length>0}function ZA(t){return Array.isArray(t)&&t.length===0}function cd({groupKey:t,includeValue:e,excludeValue:n,extraIncludeNames:i}){const r=!!HA[t],s={includeAll:!1,includeNames:void 0,includeIds:void 0,excludeAll:!1,excludeNames:void 0,excludeIds:void 0};if(e===!0)s.includeAll=!0;else if(Array.isArray(e)){s.includeNames=Object.create(null),r&&(s.includeIds=Object.create(null));for(let l=0;l<e.length;l++)o(s,e[l]);for(const l in i)s.includeNames[l.toLowerCase()]=!0}else if(i&&Object.keys(i).length>0){s.includeNames=Object.create(null);for(const l in i)s.includeNames[l.toLowerCase()]=!0}if(n===!0)return s.excludeAll=!0,s;if(Array.isArray(n)){s.excludeNames=Object.create(null),r&&(s.excludeIds=Object.create(null));for(let l=0;l<n.length;l++)a(s,n[l])}return s;function o(l,c){if(typeof c=="number"&&l.includeIds){l.includeIds[String(c)]=!0;return}typeof c=="string"&&(l.includeNames[c.toLowerCase()]=!0)}function a(l,c){if(typeof c=="number"&&l.excludeIds){l.excludeIds[String(c)]=!0;return}typeof c=="string"&&(l.excludeNames[c.toLowerCase()]=!0)}}function ld(t,e,n){return t.excludeAll?!1:t.includeAll||!t.includeNames&&!t.includeIds||qA(t,e,n)?!wa(t,e,n):!1}function qA(t,e,n){return!!(n!==void 0&&t.includeIds&&t.includeIds[String(n)]||e&&t.includeNames&&t.includeNames[String(e).toLowerCase()])}function wa(t,e,n){return!!(n!==void 0&&t.excludeIds&&t.excludeIds[String(n)]||e&&t.excludeNames&&t.excludeNames[String(e).toLowerCase()])}function $A(t){const e=Object.create(null);for(let n=0;n<t.length;n++)e[t[n].toLowerCase()]=!0;return e}function KA(t,e){for(let n=0;n<e.length;n++)t[e[n]]=!0}const JA=4,jA={1:ne.getByteAt,2:ne.getAsciiAt,3:ne.getShortAt,4:ne.getLongAt,5:ne.getRationalAt,7:ne.getUndefinedAt,9:ne.getSlongAt,10:ne.getSrationalAt,13:ne.getIfdPointerAt};function Cg(t,e,n){const i=e+sg;if(!(i+ne.getTypeSize("LONG")>t.byteLength))return e+ne.getLongAt(t,i,n)}function Ar(t,e,n,i,r,s,o=!1,a=yr,l="exif",c=Rg(t)){const u=ne.getTypeSize("SHORT"),d=ag,f={},h=QA(t,i,r);i+=u;for(let g=0;g<h&&!(i+d>t.byteLength);g++){const E=e1(t,e,n,i,r,s,a,l,c);E!==void 0&&(f[E.name]={id:E.id,value:E.value,description:E.description},o&&(f[E.name].computed=a1(E.tagType,E.value)),(E.name==="MakerNote"||e===Zl&&E.name==="LevelInfo")&&(f[E.name].__offset=E.__offset)),i+=d}if(i<t.byteLength-ne.getTypeSize("LONG")){const g=ne.getLongAt(t,i,r);g!==0&&e===Yl&&a.shouldParseGroup("thumbnail")&&(f.Thumbnail=Ar(t,xg,n,n+g,r,s,o,a,"thumbnail",c))}return f}function Rg(t){return{remaining:t.byteLength*JA}}function QA(t,e,n){return e+ne.getTypeSize("SHORT")<=t.byteLength?ne.getShortAt(t,e,n):0}function e1(t,e,n,i,r,s=!1,o=yr,a="exif",l){const u=ne.getTypeSize("SHORT"),d=u+ne.getTypeSize("SHORT"),f=d+ne.getTypeSize("LONG"),h=ne.getShortAt(t,i,r),g=ne.getShortAt(t,i+u,r),E=ne.getLongAt(t,i+d,r);let m,p;if(ne.typeSizes[g]===void 0||!s&&wn[e][h]===void 0)return;const A=t1(e,h);if(!o.shouldParseTag(a,A,h))return;if(n1(g,E))p=i+f,m=ud(t,p,g,E,r);else if(p=ne.getLongAt(t,i+f,r),i1(t,n,p,g,E)){const S=h===33723,y=r1(l.remaining,g,E);l.remaining-=y*ne.typeSizes[g],m=ud(t,n+p,g,y,r,S)}else m="<faulty value>";g===ne.tagTypes.ASCII&&(m=s1(m),m=o1(m));let w=m;if(wn[e][h]!==void 0)if(wn[e][h].name!==void 0&&wn[e][h].description!==void 0)try{w=wn[e][h].description(m)}catch{w=fd(m)}else g===ne.tagTypes.RATIONAL||g===ne.tagTypes.SRATIONAL?w=""+m[0]/m[1]:w=fd(m);return{id:h,name:A,value:m,description:w,tagType:g,__offset:p}}function t1(t,e){if(wn[t][e]!==void 0){if(typeof wn[t][e]=="string")return wn[t][e];if(wn[t][e].name)return wn[t][e].name}return`undefined-${e}`}function n1(t,e){return ne.typeSizes[t]*e<=ne.getTypeSize("LONG")}function ud(t,e,n,i,r,s=!1){let o=[];s&&(i=i*ne.typeSizes[n],n=ne.tagTypes.BYTE);for(let a=0;a<i;a++)o.push(jA[n](t,e,r)),e+=ne.typeSizes[n];return n===ne.tagTypes.ASCII?o=ne.getAsciiValue(o):o.length===1&&(o=o[0]),o}function i1(t,e,n,i,r){return e+n+ne.typeSizes[i]*r<=t.byteLength}function r1(t,e,n){const i=Math.min(n,Math.floor(t/ne.typeSizes[e]));return i===1&&n>1?0:i}function s1(t){const e=[];let n=0;for(let i=0;i<t.length;i++){if(t[i]==="\0"){n++;continue}e[n]===void 0&&(e[n]=""),e[n]+=t[i]}return e}function o1(t){try{return t.map(e=>decodeURIComponent(escape(e)))}catch{return t}}function fd(t){return t instanceof Array?t.join(", "):t}function a1(t,e){return t===ne.tagTypes.ASCII?Array.isArray(e)&&e.length===1?e[0]:e:t===ne.tagTypes.RATIONAL||t===ne.tagTypes.SRATIONAL?c1(e)?dd(e):Array.isArray(e)?e.map(n=>dd(n)):e:e}function c1(t){return!Array.isArray(t)||t.length!==2?!1:typeof t[0]=="number"&&typeof t[1]=="number"}function dd(t){if(!Array.isArray(t)||t.length!==2)return t;const e=t[0],n=t[1];return!Number.isFinite(e)||!Number.isFinite(n)?t:n===0?null:e/n}const hd=[{pointerKey:"Exif IFD Pointer",ifdType:vg},{pointerKey:"GPS Info IFD Pointer",ifdType:Eg},{pointerKey:"Interoperability IFD Pointer",ifdType:Sg}],ql={read:l1};function l1(t,e,n,i=!1,r=void 0){const s=en.getByteOrder(t,e),o=Rg(t);let a=u1(t,e,s,n,i,r,o);for(let l=0;l<hd.length;l++)a=f1(hd[l],a,t,e,s,n,i,r,o);return{tags:a,byteOrder:s}}function u1(t,e,n,i,r,s,o){const a=Cg(t,e,n);return a===void 0?{}:Ar(t,Yl,e,a,n,i,r,s,"exif",o)}function f1(t,e,n,i,r,s,o,a,l){const c=e[t.pointerKey];return c===void 0?e:zt(e,Ar(n,t.ifdType,i,i+c.value,r,s,o,a,"exif",l))}const d1={read:p1},ar=16,h1=8;function p1(t,e,n,i=!1,r=void 0){try{const s=en.getByteOrder(t,e),o=Cg(t,e,s);if(o===void 0)return{};const a=Ar(t,Mg,e,o,s,n,i,r,"mpf");return m1(t,e,a,s)}catch{return{}}}function m1(t,e,n,i){if(!n.MPEntry)return n;const r=t.buffer.byteLength;let s=r*h1;const o=[];for(let a=0;a<Math.ceil(n.MPEntry.value.length/ar);a++){o[a]={};const l=Gr(n.MPEntry.value,a*ar,ne.getTypeSize("LONG"),i);o[a].ImageFlags=g1(l),o[a].ImageFormat=_1(l),o[a].ImageType=x1(l);const c=Gr(n.MPEntry.value,a*ar+4,ne.getTypeSize("LONG"),i);o[a].ImageSize={value:c,description:""+c};const u=v1(a,n.MPEntry,i,e);o[a].ImageOffset={value:u,description:""+u};const d=Gr(n.MPEntry.value,a*ar+12,ne.getTypeSize("SHORT"),i);o[a].DependentImage1EntryNumber={value:d,description:""+d};const f=Gr(n.MPEntry.value,a*ar+14,ne.getTypeSize("SHORT"),i);o[a].DependentImage2EntryNumber={value:f,description:""+f};const h=Math.min(Math.max(u,0),r),g=Math.min(h+Math.max(c,0),r,h+s);o[a].image=t.buffer.slice(h,g),s-=g-h,Dm(o[a],"base64",function(){return Nm(this.image)})}return n.Images=o,n}function Gr(t,e,n,i){if(i===en.LITTLE_ENDIAN){let s=0;for(let o=0;o<n;o++)s+=t[e+o]<<8*o;return s}let r=0;for(let s=0;s<n;s++)r+=t[e+s]<<8*(n-1-s);return r}function g1(t){const e=[t>>31&1,t>>30&1,t>>29&1],n=[];return e[0]&&n.push("Dependent Parent Image"),e[1]&&n.push("Dependent Child Image"),e[2]&&n.push("Representative Image"),{value:e,description:n.join(", ")||"None"}}function _1(t){const e=t>>24&7;return{value:e,description:e===0?"JPEG":"Unknown"}}function x1(t){const e=t&16777215;return{value:e,description:{196608:"Baseline MP Primary Image",65537:"Large Thumbnail (VGA equivalent)",65538:"Large Thumbnail (Full HD equivalent)",131073:"Multi-Frame Image (Panorama)",131074:"Multi-Frame Image (Disparity)",131075:"Multi-Frame Image (Multi-Angle)",0:"Undefined"}[e]||"Unknown"}}function v1(t,e,n,i){return E1(t)?0:Gr(e.value,t*ar+8,ne.getTypeSize("LONG"),n)+i}function E1(t){return t===0}const S1={read:M1};function M1(t,e){const n=T1(t,e),i=w1(t,e,n);return{"Bits Per Sample":b1(t,e,n),"Image Height":y1(t,e,n),"Image Width":A1(t,e,n),"Color Components":i,Subsampling:i&&C1(t,e,i.value,n)}}function T1(t,e){return ne.getShortAt(t,e)}function b1(t,e,n){if(3>n)return;const s=ne.getByteAt(t,e+2);return{value:s,description:""+s}}function y1(t,e,n){if(5>n)return;const s=ne.getShortAt(t,e+3);return{value:s,description:`${s}px`}}function A1(t,e,n){if(7>n)return;const s=ne.getShortAt(t,e+5);return{value:s,description:`${s}px`}}function w1(t,e,n){if(8>n)return;const s=ne.getByteAt(t,e+7);return{value:s,description:""+s}}function C1(t,e,n,i){if(8+3*n>i)return;const o=[];for(let a=0;a<n;a++){const l=e+8+a*3;o.push([ne.getByteAt(t,l),ne.getByteAt(t,l+1),ne.getByteAt(t,l+2)])}return{value:o,description:o.length>1?R1(o)+I1(o):""}}function R1(t){const e={1:"Y",2:"Cb",3:"Cr",4:"I",5:"Q"};return t.map(n=>e[n[0]]).join("")}function I1(t){const e={17:"4:4:4 (1 1)",18:"4:4:0 (1 2)",20:"4:4:1 (1 4)",33:"4:2:2 (2 1)",34:"4:2:0 (2 2)",36:"4:2:1 (2 4)",65:"4:1:1 (4 1)",66:"4:1:0 (4 2)"};return t.length===0||t[0][1]===void 0||e[t[0][1]]===void 0?"":e[t[0][1]]}const P1={read:N1},L1=2,D1=[9,13,18,30],pd=[0,1,12/10,4/3,3/2,16/9,5/4,2];function N1(t,e){const n={};try{const i=F1(t,e+L1),{height:r,width:s}=U1(i);n["Image Height"]={value:r,description:`${r}px`},n["Image Width"]={value:s,description:`${s}px`}}catch{}return n}function U1(t){const e=t.readBits(1);let n,i;if(e){n=(t.readBits(5)+1)*8;const r=t.readBits(3);i=r===0?(t.readBits(5)+1)*8:Math.ceil(n*pd[r])}else{n=md(t);const r=t.readBits(3);i=r===0?md(t):Math.ceil(n*pd[r])}return{height:n,width:i}}function md(t){const e=t.readBits(2);return 1+t.readBits(D1[e])}function F1(t,e){let n=e,i=0;return{readBits(r){let s=0;for(let o=0;o<r;o++){if(n>=t.byteLength)throw new Error("Unexpected end of data");const a=t.getUint8(n)>>i&1;s|=a<<o,i++,i>=8&&(i=0,n++)}return s}}}const O1={read:B1};function B1(t,e){const n=z1(t,e),i=X1(t,e,n),r=Y1(t,e,n),s={"JFIF Version":G1(t,e,n),"Resolution Unit":H1(t,e,n),XResolution:V1(t,e,n),YResolution:W1(t,e,n),"JFIF Thumbnail Width":i,"JFIF Thumbnail Height":r};if(i!==void 0&&r!==void 0){const o=Z1(t,e,3*i.value*r.value,n);o&&(s["JFIF Thumbnail"]=o)}for(const o in s)s[o]===void 0&&delete s[o];return s}function z1(t,e){return ne.getShortAt(t,e)}function G1(t,e,n){if(9>n)return;const s=ne.getByteAt(t,e+7),o=ne.getByteAt(t,e+7+1);return{value:s*256+o,description:s+"."+o}}function H1(t,e,n){if(10>n)return;const s=ne.getByteAt(t,e+9);return{value:s,description:k1(s)}}function k1(t){return t===0?"None":t===1?"inches":t===2?"cm":"Unknown"}function V1(t,e,n){if(12>n)return;const s=ne.getShortAt(t,e+10);return{value:s,description:""+s}}function W1(t,e,n){if(14>n)return;const s=ne.getShortAt(t,e+12);return{value:s,description:""+s}}function X1(t,e,n){if(15>n)return;const s=ne.getByteAt(t,e+14);return{value:s,description:`${s}px`}}function Y1(t,e,n){if(16>n)return;const s=ne.getByteAt(t,e+15);return{value:s,description:`${s}px`}}function Z1(t,e,n,i){return n===0||16+n>i?void 0:{value:t.buffer.slice(e+16,e+16+n),description:"<24-bit RGB pixel data>"}}const Xn={iptc:{256:{name:"Model Version",description:t=>((t[0]<<8)+t[1]).toString()},261:{name:"Destination",repeatable:!0},276:{name:"File Format",description:t=>((t[0]<<8)+t[1]).toString()},278:{name:"File Format Version",description:t=>((t[0]<<8)+t[1]).toString()},286:"Service Identifier",296:"Envelope Number",306:"Product ID",316:"Envelope Priority",326:{name:"Date Sent",description:Ca},336:{name:"Time Sent",description:Ra},346:{name:"Coded Character Set",description:gd,encoding_name:gd},356:"UNO",376:{name:"ARM Identifier",description:t=>((t[0]<<8)+t[1]).toString()},378:{name:"ARM Version",description:t=>((t[0]<<8)+t[1]).toString()},512:{name:"Record Version",description:t=>((t[0]<<8)+t[1]).toString()},515:"Object Type Reference",516:"Object Attribute Reference",517:"Object Name",519:"Edit Status",520:{name:"Editorial Update",description:t=>tt(t)==="01"?"Additional Language":"Unknown"},522:"Urgency",524:{name:"Subject Reference",repeatable:!0,description:t=>{const e=tt(t).split(":");return e[2]+(e[3]?"/"+e[3]:"")+(e[4]?"/"+e[4]:"")}},527:"Category",532:{name:"Supplemental Category",repeatable:!0},534:"Fixture Identifier",537:{name:"Keywords",repeatable:!0},538:{name:"Content Location Code",repeatable:!0},539:{name:"Content Location Name",repeatable:!0},542:"Release Date",547:"Release Time",549:"Expiration Date",550:"Expiration Time",552:"Special Instructions",554:{name:"Action Advised",description:t=>{const e=tt(t);return e==="01"?"Object Kill":e==="02"?"Object Replace":e==="03"?"Object Append":e==="04"?"Object Reference":"Unknown"}},557:{name:"Reference Service",repeatable:!0},559:{name:"Reference Date",repeatable:!0},562:{name:"Reference Number",repeatable:!0},567:{name:"Date Created",description:Ca},572:{name:"Time Created",description:Ra},574:{name:"Digital Creation Date",description:Ca},575:{name:"Digital Creation Time",description:Ra},577:"Originating Program",582:"Program Version",587:{name:"Object Cycle",description:t=>{const e=tt(t);return e==="a"?"morning":e==="p"?"evening":e==="b"?"both":"Unknown"}},592:{name:"By-line",repeatable:!0},597:{name:"By-line Title",repeatable:!0},602:"City",604:"Sub-location",607:"Province/State",612:"Country/Primary Location Code",613:"Country/Primary Location Name",615:"Original Transmission Reference",617:"Headline",622:"Credit",627:"Source",628:"Copyright Notice",630:{name:"Contact",repeatable:!0},632:"Caption/Abstract",634:{name:"Writer/Editor",repeatable:!0},637:{name:"Rasterized Caption",description:t=>t},642:"Image Type",643:{name:"Image Orientation",description:t=>{const e=tt(t);return e==="P"?"Portrait":e==="L"?"Landscape":e==="S"?"Square":"Unknown"}},647:"Language Identifier",662:{name:"Audio Type",description:t=>{const e=tt(t),n=e.charAt(0),i=e.charAt(1);let r="";return n==="1"?r+="Mono":n==="2"&&(r+="Stereo"),i==="A"?r+=", actuality":i==="C"?r+=", question and answer session":i==="M"?r+=", music, transmitted by itself":i==="Q"?r+=", response to a question":i==="R"?r+=", raw sound":i==="S"?r+=", scener":i==="V"?r+=", voicer":i==="W"&&(r+=", wrap"),r!==""?r:e}},663:{name:"Audio Sampling Rate",description:t=>parseInt(tt(t),10)+" Hz"},664:{name:"Audio Sampling Resolution",description:t=>{const e=parseInt(tt(t),10);return e+(e===1?" bit":" bits")}},665:{name:"Audio Duration",description:t=>{const e=tt(t);return e.length>=6?e.substr(0,2)+":"+e.substr(2,2)+":"+e.substr(4,2):e}},666:"Audio Outcue",698:"Short Document ID",699:"Unique Document ID",700:"Owner ID",712:{name:t=>t.length===2?"ObjectData Preview File Format":"Record 2 destination",description:t=>{if(t.length===2){const e=(t[0]<<8)+t[1];return e===0?"No ObjectData":e===1?"IPTC-NAA Digital Newsphoto Parameter Record":e===2?"IPTC7901 Recommended Message Format":e===3?"Tagged Image File Format (Adobe/Aldus Image data)":e===4?"Illustrator (Adobe Graphics data)":e===5?"AppleSingle (Apple Computer Inc)":e===6?"NAA 89-3 (ANPA 1312)":e===7?"MacBinary II":e===8?"IPTC Unstructured Character Oriented File Format (UCOFF)":e===9?"United Press International ANPA 1312 variant":e===10?"United Press International Down-Load Message":e===11?"JPEG File Interchange (JFIF)":e===12?"Photo-CD Image-Pac (Eastman Kodak)":e===13?"Microsoft Bit Mapped Graphics File [*.BMP]":e===14?"Digital Audio File [*.WAV] (Microsoft & Creative Labs)":e===15?"Audio plus Moving Video [*.AVI] (Microsoft)":e===16?"PC DOS/Windows Executable Files [*.COM][*.EXE]":e===17?"Compressed Binary File [*.ZIP] (PKWare Inc)":e===18?"Audio Interchange File Format AIFF (Apple Computer Inc)":e===19?"RIFF Wave (Microsoft Corporation)":e===20?"Freehand (Macromedia/Aldus)":e===21?'Hypertext Markup Language "HTML" (The Internet Society)':e===22?"MPEG 2 Audio Layer 2 (Musicom), ISO/IEC":e===23?"MPEG 2 Audio Layer 3, ISO/IEC":e===24?"Portable Document File (*.PDF) Adobe":e===25?"News Industry Text Format (NITF)":e===26?"Tape Archive (*.TAR)":e===27?"Tidningarnas Telegrambyrå NITF version (TTNITF DTD)":e===28?"Ritzaus Bureau NITF version (RBNITF DTD)":e===29?"Corel Draw [*.CDR]":`Unknown format ${e}`}return tt(t)}},713:{name:"ObjectData Preview File Format Version",description:(t,e)=>{const n={"00":{"00":"1"},"01":{"01":"1","02":"2","03":"3","04":"4"},"02":{"04":"4"},"03":{"01":"5.0","02":"6.0"},"04":{"01":"1.40"},"05":{"01":"2"},"06":{"01":"1"},11:{"01":"1.02"},20:{"01":"3.1","02":"4.0","03":"5.0","04":"5.5"},21:{"02":"2.0"}},i=tt(t);if(e["ObjectData Preview File Format"]){const r=tt(e["ObjectData Preview File Format"].value);if(n[r]&&n[r][i])return n[r][i]}return i}},714:"ObjectData Preview Data",1802:{name:"Size Mode",description:t=>t[0].toString()},1812:{name:"Max Subfile Size",description:t=>{let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}},1882:{name:"ObjectData Size Announced",description:t=>{let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}},1887:{name:"Maximum ObjectData Size",description:t=>{let e=0;for(let n=0;n<t.length;n++)e=(e<<8)+t[n];return e.toString()}}}};function Ca(t){const e=tt(t);return e.length>=8?e.substr(0,4)+"-"+e.substr(4,2)+"-"+e.substr(6,2):e}function Ra(t){const e=tt(t);let n=e;return e.length>=6&&(n=e.substr(0,2)+":"+e.substr(2,2)+":"+e.substr(4,2),e.length===11&&(n+=e.substr(6,1)+e.substr(7,2)+":"+e.substr(9,2))),n}function gd(t){const e=tt(t);return e==="\x1B%G"?"UTF-8":e==="\x1B%5"?"Windows-1252":e==="\x1B%/G"?"UTF-8 Level 1":e==="\x1B%/H"?"UTF-8 Level 2":e==="\x1B%/I"?"UTF-8 Level 3":e==="\x1B/A"?"ISO-8859-1":e==="\x1B/B"?"ISO-8859-2":e==="\x1B/C"?"ISO-8859-3":e==="\x1B/D"?"ISO-8859-4":e==="\x1B/@"?"ISO-8859-5":e==="\x1B/G"?"ISO-8859-6":e==="\x1B/F"?"ISO-8859-7":e==="\x1B/H"?"ISO-8859-8":"Unknown"}const q1={get:$1};function $1(){if(typeof TextDecoder<"u")return TextDecoder}const K1=5,J1={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},Ig={decode:j1,TAG_HEADER_SIZE:K1};function j1(t,e){if(typeof e=="string")return ew(e);const n=q1.get();if(typeof n<"u"&&t!==void 0)try{return new n(t).decode(e instanceof DataView?e.buffer:Uint8Array.from(e))}catch{}const i=e.map(r=>String.fromCharCode(r)).join("");try{return decodeURIComponent(escape(i))}catch{return Q1(e)}}function Q1(t){const e=t instanceof DataView,n=e?t.byteLength:t.length,i=e?s=>t.getUint8(s):s=>t[s],r=new Array(n);for(let s=0;s<n;s++){const o=i(s),a=J1[o];r[s]=a!==void 0?a:o}return String.fromCharCode.apply(null,r)}function ew(t){try{return decodeURIComponent(escape(t))}catch{return t}}const tw=943868237,Hr=4,no=2,nw=1,iw=2,Pg=4,rw=Hr+no+iw+Pg,sw=1028,Lg=5,tl={read:ow};function ow(t,e,n,i=yr){try{if(Array.isArray(t))return _d(new DataView(Uint8Array.from(t).buffer),{size:t.length},0,n,i);const{naaBlock:r,dataOffset:s}=aw(t,e);return _d(t,r,s,n,i)}catch{return{}}}function aw(t,e){for(;e+rw<=t.byteLength;){const n=cw(t,e);if(lw(n))return{naaBlock:n,dataOffset:e+n.headerSize};e+=n.headerSize+n.size+uw(n)}throw new Error("No IPTC NAA resource block.")}function cw(t,e){if(t.getUint32(e,!1)!==tw)throw new Error("Not an IPTC resource block.");const n=t.getUint8(e+Hr+no),i=(n%2===0?n+1:n)+nw;return{headerSize:Hr+no+i+Pg,type:t.getUint16(e+Hr),size:t.getUint32(e+Hr+no+i)}}function lw(t){return t.type===sw}function uw(t){return t.size%2!==0?1:0}function _d(t,e,n,i,r){const s={};let o;const a=n+e.size;for(;n<a&&n<t.byteLength;){const{tag:l,tagSize:c}=fw(t,n,s,o,i,r);if(l===null)break;l&&("encoding"in l&&(o=l.encoding),s[l.name]===void 0||l.repeatable===void 0?s[l.name]={id:l.id,value:l.value,description:l.description}:(s[l.name]instanceof Array||(s[l.name]=[{id:s[l.name].id,value:s[l.name].value,description:s[l.name].description}]),s[l.name].push({id:l.id,value:l.value,description:l.description}))),n+=Lg+c}return s}function fw(t,e,n={},i=void 0,r=!1,s=yr){if(hw(t,e))return{tag:null,tagSize:0};const l=t.getUint16(e+1),c=t.getUint16(e+3);if(!r&&!Xn.iptc[l])return{tag:void 0,tagSize:c};if(!s.shouldParseTag("iptc",dw(l,r),l))return{tag:void 0,tagSize:c};const u=pw(t,e+Lg,c),d={id:l,name:mw(Xn.iptc[l],l,u),value:u,description:xw(Xn.iptc[l],u,n,i)};return Sw(l)&&(d.repeatable=!0),Mw(l)&&(d.encoding=Xn.iptc[l].encoding_name(u)),{tag:d,tagSize:c}}function dw(t,e){const n=Xn.iptc[t];if(!n)return e?`undefined-${t}`:void 0;if(typeof n=="string")return n;if(n&&typeof n.name=="string")return n.name}function hw(t,e){return t.getUint8(e)!==28}function pw(t,e,n){const i=[];for(let r=0;r<n;r++)i.push(t.getUint8(e+r));return i}function mw(t,e,n){return t?gw(t)?t:_w(t)?t.name(n):t.name:`undefined-${e}`}function gw(t){return typeof t=="string"}function _w(t){return typeof t.name=="function"}function xw(t,e,n,i){if(Ew(t))try{return t.description(e,n)}catch{}return vw(t,e)?Ig.decode(i,e):e}function vw(t,e){return t&&e instanceof Array}function Ew(t){return t&&t.description!==void 0}function Sw(t){return Xn.iptc[t]&&Xn.iptc[t].repeatable}function Mw(t){return Xn.iptc[t]&&Xn.iptc[t].encoding_name!==void 0}const To={"tiff:Orientation"(t){return t==="1"?"Horizontal (normal)":t==="2"?"Mirror horizontal":t==="3"?"Rotate 180":t==="4"?"Mirror vertical":t==="5"?"Mirror horizontal and rotate 270 CW":t==="6"?"Rotate 90 CW":t==="7"?"Mirror horizontal and rotate 90 CW":t==="8"?"Rotate 270 CW":t},"tiff:ResolutionUnit":t=>De.ResolutionUnit(parseInt(t,10)),"tiff:XResolution":t=>nr(De.XResolution,t),"tiff:YResolution":t=>nr(De.YResolution,t),"exif:ApertureValue":t=>nr(De.ApertureValue,t),"exif:GPSLatitude":xd,"exif:GPSLongitude":xd,"exif:FNumber":t=>nr(De.FNumber,t),"exif:FocalLength":t=>nr(De.FocalLength,t),"exif:FocalPlaneResolutionUnit":t=>De.FocalPlaneResolutionUnit(parseInt(t,10)),"exif:ColorSpace":t=>De.ColorSpace(Tw(t)),"exif:ComponentsConfiguration"(t,e){if(/^\d, \d, \d, \d$/.test(e)){const n=e.split(", ").map(i=>i.charCodeAt(0));return De.ComponentsConfiguration(n)}return e},"exif:Contrast":t=>De.Contrast(parseInt(t,10)),"exif:CustomRendered":t=>De.CustomRendered(parseInt(t,10)),"exif:ExposureMode":t=>De.ExposureMode(parseInt(t,10)),"exif:ExposureProgram":t=>De.ExposureProgram(parseInt(t,10)),"exif:ExposureTime"(t){return Dg(t)?De.ExposureTime(t.split("/").map(e=>parseInt(e,10))):t},"exif:MeteringMode":t=>De.MeteringMode(parseInt(t,10)),"exif:Saturation":t=>De.Saturation(parseInt(t,10)),"exif:SceneCaptureType":t=>De.SceneCaptureType(parseInt(t,10)),"exif:Sharpness":t=>De.Sharpness(parseInt(t,10)),"exif:ShutterSpeedValue":t=>nr(De.ShutterSpeedValue,t),"exif:WhiteBalance":t=>De.WhiteBalance(parseInt(t,10))};function nr(t,e){return Dg(e)?t(e.split("/")):e}function Tw(t){return t.substring(0,2)==="0x"?parseInt(t.substring(2),16):parseInt(t,10)}function Dg(t){return/^-?\d+\/-?\d+$/.test(t)}function xd(t){const[e,n]=t.split(",");if(e!==void 0&&n!==void 0){const i=parseFloat(e),r=parseFloat(n),s=n.charAt(n.length-1);if(!Number.isNaN(i)&&!Number.isNaN(r))return""+(i+r/60)+s}return t}const bw={get:yw};function yw(t){if(t)return t;if(typeof DOMParser<"u")return new DOMParser;try{const{DOMParser:e,onErrorStopParsing:n}=__non_webpack_require__("@xmldom/xmldom");return new e({onError:n})}catch{return}}function Aw(t){const e=["prefix is non-null and namespace is null","prefix not bound to a namespace","prefix inte bundet till en namnrymd",/Namespace prefix .+ is not defined/];for(let n=0;n<e.length;n++)if(new RegExp(e[n]).test(t.message))return!0;return!1}function ww(t){const e=Cw(t);if(e===-1)return t;const{insertionIndex:n,attributeValueSpans:i}=Rw(t,e+1);if(n===-1)return t;const r=Iw(t,e,n,i),o=Lw(t).filter(l=>r[l]===void 0);if(o.length===0)return t;const a=Dw(o);return t.slice(0,n)+a+t.slice(n)}function Cw(t){let e=0;for(;e<t.length;){if(e=t.indexOf("<",e),e===-1)return-1;if(/[A-Za-z_]/.test(t.charAt(e+1)))return e;vd(t,"<!--",e)?e=Ia(t,e+4,"-->"):vd(t,"<![CDATA[",e)?e=Ia(t,e+9,"]]>"):t.charAt(e+1)==="?"?e=Ia(t,e+2,"?>"):e++}return-1}function Rw(t,e){const n=[];let i,r;for(let s=e;s<t.length;s++){const o=t.charAt(s);if(i!==void 0)o===i&&(n.push({start:r,end:s}),i=void 0);else if(o==='"'||o==="'")i=o,r=s+1;else if(o===">")return t.charAt(s-1)==="/"?{insertionIndex:s-1,attributeValueSpans:n}:{insertionIndex:s,attributeValueSpans:n}}return{insertionIndex:-1,attributeValueSpans:n}}function vd(t,e,n){return t.slice(n,n+e.length)===e}function Ia(t,e,n){const i=t.indexOf(n,e);return i===-1?t.length:i+n.length}function Iw(t,e,n,i){const r=Object.create(null),s=/xmlns:([A-Za-z_][A-Za-z0-9._-]*)\s*=\s*["']([^"']*)["']/g;let o,a=0;for(;(o=s.exec(t))!==null;){for(;a<i.length&&i[a].end<=o.index;)a++;if(a<i.length&&i[a].start<=o.index){s.lastIndex=i[a].end;continue}(o[2]!==""||Pw(o.index,e,n))&&(r[o[1]]=!0)}return r}function Pw(t,e,n){return t>e&&t<n}function Lw(t){const e=[],n=Object.create(null),i=/(?:^|[^A-Za-z0-9._-])([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*/g;let r;for(;(r=i.exec(t))!==null;){const s=r[1];s==="xmlns"||s==="xml"||n[s]===void 0&&(n[s]=!0,e.push(s))}return e}const Ed={xmp:"http://ns.adobe.com/xap/1.0/",tiff:"http://ns.adobe.com/tiff/1.0/",exif:"http://ns.adobe.com/exif/1.0/",dc:"http://purl.org/dc/elements/1.1/",xmpMM:"http://ns.adobe.com/xap/1.0/mm/",stEvt:"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",stRef:"http://ns.adobe.com/xap/1.0/sType/ResourceRef#",photoshop:"http://ns.adobe.com/photoshop/1.0/"};function Dw(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];e.push(" xmlns:"+i+'="'+Nw(i)+'"')}return e.join("")}function Nw(t){return Object.prototype.hasOwnProperty.call(Ed,t)?Ed[t]:"http://fallback.namespace/"+t}const Pa={read:Fw};class Uw extends Error{constructor(e){super(e),this.name="ParseError"}}function Fw(t,e,n){const i={};if(typeof t=="string")return Vs(i,t,n),i;const[r,s]=Ow(t,e),o=Vs(i,r,n);if(s){const a=Vs(i,s,n);!o&&!a&&(delete i._raw,Vs(i,nl(t,e),n))}return i}function Ow(t,e){if(e.length===0)return[];const n=[nl(t,e.slice(0,1))];return e.length>1&&n.push(nl(t,e.slice(1))),n}function nl(t,e){const n=e.map(o=>Bw(t,o)),i=n.reduce((o,a)=>o+a.length,0),r=new Uint8Array(i);let s=0;for(let o=0;o<n.length;o++)r.set(n[o],s),s+=n[o].length;return new DataView(r.buffer)}function Bw(t,e){const n=t.buffer.byteLength,i=Math.min(Math.max(e.dataOffset,0),n),r=Math.min(i+Math.max(e.length,0),n);return new Uint8Array(t.buffer.slice(i,r))}function Vs(t,e,n){try{const{doc:i,raw:r}=zw(e,n);t._raw=(t._raw||"")+r;const s=Ug(i);return zt(t,Og(Fg(s,!0))),!0}catch{return!1}}function zw(t,e){const n=bw.get(e);if(!n)throw console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."),new Error;const i=typeof t=="string"?t:Pe(t,0,t.byteLength);return{doc:Ng(n,Gw(i)),raw:i}}function Gw(t){return t.replace(/^.+(<\?xpacket begin)/,"$1").replace(/(<\?xpacket end=".*"\?>).+$/,"$1")}function Ng(t,e,n=!1){try{const i=t.parseFromString(e,"application/xml"),r=i.getElementsByTagName("parsererror");if(r.length>0)throw new Uw(r[0].textContent);return i}catch(i){if(i.name==="ParseError"&&Aw(i)&&!n)return Ng(t,ww(e),!0);throw i}}function Ug(t){for(let e=0;e<t.childNodes.length;e++){if(t.childNodes[e].tagName==="x:xmpmeta")return Ug(t.childNodes[e]);if(t.childNodes[e].tagName==="rdf:RDF")return t.childNodes[e]}throw new Error}function Fg(t,e=!1){const n=Hw(t);return kw(n)?e?{}:Vw(n[0]):Ww(n)}function Hw(t){const e=[];for(let n=0;n<t.childNodes.length;n++)e.push(t.childNodes[n]);return e}function kw(t){return t.length===1&&t[0].nodeName==="#text"}function Vw(t){return t.nodeValue}function Ww(t){const e=Object.create(null);return t.forEach(n=>{if(Xw(n)){const i=Yw(n);e[n.nodeName]!==void 0?(Array.isArray(e[n.nodeName])||(e[n.nodeName]=[e[n.nodeName]]),e[n.nodeName].push(i)):e[n.nodeName]=i}}),e}function Xw(t){return t.nodeName&&t.nodeName!=="#text"}function Yw(t){return{attributes:Zw(t),value:Fg(t)}}function Zw(t){const e={};for(let n=0;n<t.attributes.length;n++)br(e,t.attributes[n].nodeName,decodeURIComponent(escape(t.attributes[n].value)));return e}function Og(t){const e={};if(typeof t=="string")return t;for(const n in t){let i=t[n];Array.isArray(i)||(i=[i]),i.forEach(r=>{zt(e,$l(r.attributes)),typeof r.value=="object"&&zt(e,Kl(r.value))})}return e}function $l(t){const e={};for(const n in t)try{qw(n)&&br(e,ko(n),{value:t[n],attributes:{},description:Qn(t[n],n)})}catch{}return e}function qw(t){return t!=="rdf:parseType"&&!Ho(t)}function Ho(t){return t.split(":")[0]==="xmlns"}function ko(t){return/^MicrosoftPhoto(_\d+_)?:Rating$/i.test(t)?"RatingPercent":t.split(":")[1]}function Qn(t,e=void 0){if(Array.isArray(t)){const n=$w(t);if(Sd(e))try{const i=To[e](t,n);if(typeof i=="string")return i}catch{}return n}if(typeof t=="object")return Kw(t);try{return Sd(e)?To[e](t):decodeURIComponent(escape(t))}catch{return t}}function $w(t){return t.map(e=>e.value!==void 0?Qn(e.value):Qn(e)).join(", ")}function Sd(t){return Object.prototype.hasOwnProperty.call(To,t)&&typeof To[t]=="function"}function Kw(t){const e=[];for(const n in t)e.push(`${Jw(n)}: ${Qn(t[n].value)}`);return e.join("; ")}function Jw(t){return t==="CiAdrCity"?"CreatorCity":t==="CiAdrCtry"?"CreatorCountry":t==="CiAdrExtadr"?"CreatorAddress":t==="CiAdrPcode"?"CreatorPostalCode":t==="CiAdrRegion"?"CreatorRegion":t==="CiEmailWork"?"CreatorWorkEmail":t==="CiTelWork"?"CreatorWorkPhone":t==="CiUrlWork"?"CreatorWorkUrl":t}function Kl(t,e={}){for(const n in t)try{Ho(n)||br(e,ko(n),jw(t[n],n))}catch{}return e}function jw(t,e){return Bg(t)?eC(t,e):Qw(t)?{value:"",attributes:{},description:""}:zg(t)?Gg(t,e):kg(t)?Vg(t,e):Wg(t)?Xg(t,e):Yg(t)?qg(t,e):Jl(t,e)}function Qw(t){return t.attributes["rdf:parseType"]==="Resource"&&typeof t.value=="string"&&t.value.trim()===""}function Bg(t){return Array.isArray(t)}function eC(t,e){return Jl(t[t.length-1],e)}function zg(t){return t.attributes["rdf:parseType"]==="Resource"&&t.value["rdf:value"]!==void 0||t.value["rdf:Description"]!==void 0&&t.value["rdf:Description"].value["rdf:value"]!==void 0}function Gg(t,e){const n=ls(t);t.value["rdf:Description"]!==void 0&&(t=t.value["rdf:Description"]),zt(n,ls(t),tC(t));const i=nC(t);return{value:i,attributes:n,description:Qn(i,e)}}function ls(t){const e={};for(const n in t.attributes)n!=="rdf:parseType"&&n!=="rdf:resource"&&!Ho(n)&&br(e,ko(n),t.attributes[n]);return e}function tC(t){const e={};for(const n in t.value)n!=="rdf:value"&&!Ho(n)&&br(e,ko(n),t.value[n].value);return e}function nC(t){const e=Hg(t.value["rdf:value"]);return $g(e)||iC(e)}function Hg(t){return Bg(t)?t[t.length-1]:t}function iC(t){return Yg(t)?qg(t).value:typeof t.value=="object"?Kl(t.value,Object.create(null)):t.value}function kg(t){return t.attributes["rdf:parseType"]==="Resource"||t.value["rdf:Description"]!==void 0&&t.value["rdf:Description"].value["rdf:value"]===void 0}function Vg(t,e){const n={value:{},attributes:{}};return t.value["rdf:Description"]!==void 0&&(zt(n.value,$l(t.value["rdf:Description"].attributes)),zt(n.attributes,ls(t)),t=t.value["rdf:Description"]),zt(n.value,Kl(t.value)),n.description=Qn(n.value,e),n}function Wg(t){return Object.keys(t.value).length===0&&t.attributes["xml:lang"]===void 0&&t.attributes["rdf:resource"]===void 0}function Xg(t,e){const n=$l(t.attributes);return{value:n,attributes:{},description:Qn(n,e)}}function Yg(t){return Zg(t.value)!==void 0}function Zg(t){return Hg(t["rdf:Bag"]||t["rdf:Seq"]||t["rdf:Alt"])}function qg(t,e){let n=Zg(t.value).value["rdf:li"];const i=ls(t),r=[];return n===void 0?n=[]:Array.isArray(n)||(n=[n]),n.forEach(s=>{r.push(rC(s))}),{value:r,attributes:i,description:Qn(r,e)}}function rC(t){return zg(t)?Gg(t):kg(t)?Vg(t).value:Wg(t)?Xg(t).value:Jl(t)}function Jl(t,e){const n=$g(t)||Og(t.value);return{value:n,attributes:ls(t),description:Qn(n,e)}}function $g(t){return t.attributes&&t.attributes["rdf:resource"]}const kn={CLOSED_SUBPATH_LENGTH:0,CLOSED_SUBPATH_BEZIER_LINKED:1,CLOSED_SUBPATH_BEZIER_UNLINKED:2,OPEN_SUBPATH_LENGTH:3,OPEN_SUBPATH_BEZIER_LINKED:4,OPEN_SUBPATH_BEZIER_UNLINKED:5,FILL_RULE:6,CLIPBOARD:7,INITIAL_FILL_RULE:8},Kg=24,pr={2e3:{name:"PathInformation",description:sC},2999:{name:"ClippingPathName",description(t){const[,e]=Lm(t,0);return e}}};function sC(t){const n={},i=[];for(let r=0;r<t.byteLength;r+=2+Kg){const s=ne.getShortAt(t,r);La[s]&&(n[s]||(n[s]=La[s].description),i.push({type:s,path:La[s].path(t,r+2)}))}return JSON.stringify({types:n,paths:i})}const La={[kn.CLOSED_SUBPATH_LENGTH]:{description:"Closed subpath length",path:(t,e)=>[ne.getShortAt(t,e)]},[kn.CLOSED_SUBPATH_BEZIER_LINKED]:{description:"Closed subpath Bezier knot, linked",path:Ws},[kn.CLOSED_SUBPATH_BEZIER_UNLINKED]:{description:"Closed subpath Bezier knot, unlinked",path:Ws},[kn.OPEN_SUBPATH_LENGTH]:{description:"Open subpath length",path:(t,e)=>[ne.getShortAt(t,e)]},[kn.OPEN_SUBPATH_BEZIER_LINKED]:{description:"Open subpath Bezier knot, linked",path:Ws},[kn.OPEN_SUBPATH_BEZIER_UNLINKED]:{description:"Open subpath Bezier knot, unlinked",path:Ws},[kn.FILL_RULE]:{description:"Path fill rule",path:()=>[]},[kn.INITIAL_FILL_RULE]:{description:"Initial fill rule",path:(t,e)=>[ne.getShortAt(t,e)]},[kn.CLIPBOARD]:{description:"Clipboard",path:aC}};function Ws(t,e){const i=[];for(let r=0;r<Kg;r+=8)i.push(oC(t,e+r));return i}function oC(t,e){const n=Ii(t,e,8);return[Ii(t,e+4,8),n]}function aC(t,e){return[[Ii(t,e,8),Ii(t,e+4,8),Ii(t,e+8,8),Ii(t,e+12,8)],Ii(t,e+16,8)]}function Ii(t,e,n){const i=ne.getLongAt(t,e),r=i>>>31?-1:1,s=(i&2130706432)>>>32-n,o=i&parseInt(Om("1",32-n),2);return r*tb(s.toString(2)+"."+Fm(o.toString(2),32-n,"0"),2)}const cC={read:fC},Jg="8BIM",jg=2,il=4,rl=Jg.length,lC=2,uC=rl+jg+lC+il;function fC(t,e,n=yr){const i=Gc(new Uint8Array(t).buffer),r={};let s=0;for(;s+uC<=t.length;){const o=Pe(i,s,rl);s+=rl;const a=ne.getShortAt(i,s);s+=jg;const{tagName:l,tagNameSize:c}=hC(i,s);if(s+=c,s+il>t.length)break;const u=ne.getLongAt(i,s);s+=il;const d=Math.min(u,t.length-s);if(o===Jg){const f=dC(a,l,e);if(!n.shouldParseTag("photoshop",f,a)){s+=d+d%2;continue}const h=Gc(i.buffer,s,d),g={id:a,value:Pe(h,0,d)};if(pr[a]){try{g.description=pr[a].description(h)}catch{g.description="<no description formatter>"}r[l||pr[a].name]=g}else e&&(r[`undefined-${a}`]=g)}s+=d+d%2}return r}function dC(t,e,n){if(e)return e;if(pr[t]&&pr[t].name)return pr[t].name;if(n)return`undefined-${t}`}function hC(t,e){const[n,i]=Lm(t,e);return{tagName:i,tagNameSize:1+n+(n%2===0?1:0)}}const Md={desc:{name:"ICC Description"},cprt:{name:"ICC Copyright"},dmdd:{name:"ICC Device Model Description"},vued:{name:"ICC Viewing Conditions Description"},dmnd:{name:"ICC Device Manufacturer for Display"},tech:{name:"Technology"}},Td={4:{name:"Preferred CMM type",value:(t,e)=>Pe(t,e,4),description:t=>t!==null?Da(t):""},8:{name:"Profile Version",value:(t,e)=>t.getUint8(e).toString(10)+"."+(t.getUint8(e+1)>>4).toString(10)+"."+(t.getUint8(e+1)%16).toString(10)},12:{name:"Profile/Device class",value:(t,e)=>Pe(t,e,4),description:t=>{switch(t.toLowerCase()){case"scnr":return"Input Device profile";case"mntr":return"Display Device profile";case"prtr":return"Output Device profile";case"link":return"DeviceLink profile";case"abst":return"Abstract profile";case"spac":return"ColorSpace profile";case"nmcl":return"NamedColor profile";case"cenc":return"ColorEncodingSpace profile";case"mid ":return"MultiplexIdentification profile";case"mlnk":return"MultiplexLink profile";case"mvis":return"MultiplexVisualization profile";default:return t}}},16:{name:"Color Space",value:(t,e)=>Pe(t,e,4)},20:{name:"Connection Space",value:(t,e)=>Pe(t,e,4)},24:{name:"ICC Profile Date",value:(t,e)=>pC(t,e).toISOString()},36:{name:"ICC Signature",value:(t,e)=>kr(t.buffer.slice(e,e+4))},40:{name:"Primary Platform",value:(t,e)=>Pe(t,e,4),description:t=>Da(t)},48:{name:"Device Manufacturer",value:(t,e)=>Pe(t,e,4),description:t=>Da(t)},52:{name:"Device Model Number",value:(t,e)=>Pe(t,e,4)},64:{name:"Rendering Intent",value:(t,e)=>t.getUint32(e),description:t=>{switch(t){case 0:return"Perceptual";case 1:return"Relative Colorimetric";case 2:return"Saturation";case 3:return"Absolute Colorimetric";default:return t}}},80:{name:"Profile Creator",value:(t,e)=>Pe(t,e,4)}};function pC(t,e){const n=t.getUint16(e),i=t.getUint16(e+2)-1,r=t.getUint16(e+4),s=t.getUint16(e+6),o=t.getUint16(e+8),a=t.getUint16(e+10);return new Date(Date.UTC(n,i,r,s,o,a))}function kr(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function Da(t){switch(t.toLowerCase()){case"appl":return"Apple";case"adbe":return"Adobe";case"msft":return"Microsoft";case"sunw":return"Sun Microsystems";case"sgi":return"Silicon Graphics";case"tgnt":return"Taligent";default:return t}}const bd={read:bC},mC=84,gC=128,_C="acsp",xC="desc",vC="mluc",EC="text",SC="sig ",MC=12,TC=12,yd=16;function bC(t,e,n,i){return n&&e[0].compressionMethod!==as?yC(t,e,i):wC(t,e)}function yC(t,e,n){if(!AC(e[0].compressionMethod))return{};const i=new DataView(t.buffer.slice(e[0].offset,e[0].offset+e[0].length));return _o(i,e[0].compressionMethod,"utf-8","dataview",n).then(Qg).catch(()=>({}))}function AC(t){return t===Hc}function wC(t,e){try{const n=CC(t),i=e.reduce((a,l)=>a+l.length,0),r=Math.min(i,n.byteLength),s=new Uint8Array(r);let o=0;for(let a=1;a<=e.length;a++){const l=e.find(d=>d.chunkNumber===a);if(!l)throw new Error(`ICC chunk ${a} not found`);const c=n.slice(l.offset,l.offset+l.length),u=new Uint8Array(c);s.set(u,o),o+=u.length}return Qg(new DataView(s.buffer))}catch{return{}}}function CC(t){return Array.isArray(t)?new DataView(Uint8Array.from(t).buffer).buffer:t.buffer}function RC(t){return t.byteLength<gC+4}function IC(t,e){return t.byteLength<e+MC}function Qg(t){const n=t.buffer,i=t.getUint32();if(t.byteLength!==i)throw new Error("ICC profile length not matching");if(t.byteLength<mC)throw new Error("ICC profile too short");const r={},s=Object.keys(Td);for(let u=0;u<s.length;u++){const d=s[u],f=Td[d],h=f.value(t,parseInt(d,10));let g=h;f.description&&(g=f.description(h)),r[f.name]={value:h,description:g}}if(kr(n.slice(36,40))!==_C)throw new Error("ICC profile: missing signature");if(RC(t))return r;const a=t.getUint32(128);let l=132,c=t.byteLength;for(let u=0;u<a;u++){if(IC(t,l))return r;const d=Pe(t,l,4),f=t.getUint32(l+4),h=t.getUint32(l+8);if(f>t.byteLength)return r;const g=Pe(t,f,4);if(g===xC){const E=t.getUint32(f+8);if(E>h)return r;const m=kr(n.slice(f+12,f+E+11));Fr(r,d,m)}else if(g===vC){const E=t.getUint32(f+8),m=t.getUint32(f+12);if(m<TC||E>1e3)return r;const p=E*m,A=t.byteLength-f-yd;if(p>A)return r;const w=Math.min(h,t.byteLength-f);let S=f+yd;const y=[];for(let T=0;T<E;T++){const C=Pe(t,S+0,2),x=Pe(t,S+2,2),b=t.getUint32(S+4),L=t.getUint32(S+8),R=Math.max(0,w-L),F=Math.min(b,R,c);c-=F;const Z=eb(t,f+L,F);y.push({languageCode:C,countryCode:x,text:Z}),S+=m}if(E===1)Fr(r,d,y[0].text);else{const T={};for(let C=0;C<y.length;C++)T[`${y[C].languageCode}-${y[C].countryCode}`]=y[C].text;Fr(r,d,T)}}else if(g===EC){const E=kr(n.slice(f+8,f+h-7));Fr(r,d,E)}else if(g===SC){const E=kr(n.slice(f+8,f+12));Fr(r,d,E)}l=l+12}return r}function Fr(t,e,n){Md[e]?t[Md[e].name]={value:n,description:n}:t[e]={value:n,description:n}}const io=27,e0=22,PC={read:LC,SHOT_INFO_AUTO_ROTATE:io,CAMERA_SETTINGS_LENS_TYPE:e0};function LC(t,e,n,i,r,s=!1,o=void 0){let a=Ar(t,Tg,e,e+n,i,r,s,o,"makerNotes");return a.ShotInfo&&(a=zt({},a,DC(a.ShotInfo.value)),delete a.ShotInfo),a.CameraSettings&&(a=zt({},a,NC(a.CameraSettings.value)),delete a.CameraSettings),a}function DC(t){const e={};return t[io]!==void 0&&(e.AutoRotate={value:t[io],description:UC(t[io])}),e}function NC(t){const e={};if(!Array.isArray(t))return e;const n=t[e0];return Number.isFinite(n)&&(e.LensType={value:n,description:`${n}`}),e}function UC(t){return t===0?"None":t===1?"Rotate 90 CW":t===2?"Rotate 180":t===3?"Rotate 270 CW":"Unknown"}const t0=8,n0=t0+2,i0={K3_III:78420},ro={CAMERA_ORIENTATION:1,ROLL_ANGLE:3,PITCH_ANGLE:5},FC={read:OC,PENTAX_IFD_OFFSET:n0,MODEL_ID:i0,LIK3III:ro};function OC(t,e,n,i,r=!1,s=void 0){try{const o=en.getByteOrder(t,e+n+t0),a=e+n;let l=Ar(t,Zl,a,a+n0,o,i,r,s,"makerNotes");return BC(l)&&(l=zt({},l,zC(t,a+l.LevelInfo.__offset,o)),delete l.LevelInfo),l}catch{return{}}}function BC(t){return t.PentaxModelID&&t.PentaxModelID.value===i0.K3_III&&t.LevelInfo}function zC(t,e,n){const i={};if(e+7>t.byteLength)return i;const r=t.getInt8(e+ro.CAMERA_ORIENTATION);i.CameraOrientation={value:r,description:GC(r)};const s=t.getInt16(e+ro.ROLL_ANGLE,n===en.LITTLE_ENDIAN);i.RollAngle={value:s,description:HC(s)};const o=t.getInt16(e+ro.PITCH_ANGLE,n===en.LITTLE_ENDIAN);return i.PitchAngle={value:o,description:kC(o)},i}function GC(t){return t===0?"Horizontal (normal)":t===1?"Rotate 270 CW":t===2?"Rotate 180":t===3?"Rotate 90 CW":t===4?"Upwards":t===5?"Downwards":"Unknown"}function HC(t){return""+t*-.5}function kC(t){return""+t*-.5}const VC={read:YC},WC={0:"Grayscale",2:"RGB",3:"Palette",4:"Grayscale with Alpha",6:"RGB with Alpha"},XC={0:"Noninterlaced",1:"Adam7 Interlace"},Na=[{name:"Image Width",offset:0,size:4,read:ne.getLongAt,description:t=>`${t}px`},{name:"Image Height",offset:4,size:4,read:ne.getLongAt,description:t=>`${t}px`},{name:"Bit Depth",offset:8,size:1,read:ne.getByteAt,description:t=>`${t}`},{name:"Color Type",offset:9,size:1,read:ne.getByteAt,description:t=>WC[t]||"Unknown"},{name:"Compression",offset:10,size:1,read:ne.getByteAt,description:t=>t===0?"Deflate/Inflate":"Unknown"},{name:"Filter",offset:11,size:1,read:ne.getByteAt,description:t=>t===0?"Adaptive":"Unknown"},{name:"Interlace",offset:12,size:1,read:ne.getByteAt,description:t=>XC[t]||"Unknown"}];function YC(t,e){const n={};for(let i=0;i<Na.length;i++)n[Na[i].name]=ZC(t,e,Na[i]);return n}function ZC(t,e,n){if(e+n.offset+n.size>t.byteLength)return;const i=n.read(t,e+n.offset);return{value:i,description:n.description(i)}}const qC={read:QC},sl="STATE_KEYWORD",ol="STATE_COMPRESSION",al="STATE_LANG",$C="STATE_TRANSLATED_KEYWORD",cl="STATE_TEXT",KC=1,JC=1,jC=6;function QC(t,e,n,i,r=!1,s=yr,o){const a={},l=[];for(let c=0;c<e.length;c++){const{offset:u,length:d,type:f}=e[c],h=eR(t,u,d,f,n,o);if(h instanceof Promise)l.push(h.then(({name:g,value:E,description:m})=>{try{if(If.USE_EXIF&&wd(g,E))return s.shouldParseGroup("exif")?{__exif:ql.read(Rd(E),jC,i,r,s).tags}:{};if(If.USE_IPTC&&Cd(g,E))return s.shouldParseGroup("iptc")?{__iptc:tl.read(Rd(E),0,i,s)}:{};if(g&&!wd(g,E)&&!Cd(g,E))return s.shouldParseGroup("png")?{[g]:{value:E,description:m}}:{}}catch{}return{}}));else{const{name:g,value:E,description:m}=h;g&&s.shouldParseGroup("png")&&(a[g]={value:E,description:m})}}return{readTags:a,readTagsPromise:l.length>0?Promise.all(l):void 0}}function eR(t,e,n,i,r,s){const o=[],a=[];let l,c=sl,u=as;for(let f=0;f<n&&e+f<t.byteLength;f++){if(c===ol){u=tR({type:i,dataView:t,offset:e+f}),i===Ni&&(f+=KC),c=Ad(i,c);continue}else if(c===cl){l=new DataView(t.buffer.slice(e+f,e+n));break}const h=t.getUint8(e+f);h===0?c=Ad(i,c):c===sl?o.push(h):c===al&&a.push(h)}if(u!==as&&!r)return{};const d=_o(l,u,nR(i),"string",s);return d instanceof Promise?d.then(f=>Ua(f,i,a,o)).catch(()=>Ua("<text using unknown compression>".split(""),i,a,o)):Ua(d,i,a,o)}function tR({type:t,dataView:e,offset:n}){if(t===Ni){if(e.getUint8(n)===JC)return e.getUint8(n+1)}else if(t===Go)return e.getUint8(n);return as}function Ad(t,e){return e===sl&&[Ni,Go].includes(t)?ol:e===ol?t===Ni?al:cl:e===al?$C:cl}function nR(t){return t===Xl||t===Go?"latin1":"utf-8"}function Ua(t,e,n,i){const r=rR(t);return{name:iR(e,n,i),value:r,description:e===Ni?sR(t):r}}function iR(t,e,n){const i=tt(n);if(t===Xl||e.length===0)return i;const r=tt(e);return`${i} (${r})`}function rR(t){return t instanceof DataView?Pe(t,0,t.byteLength):t}function sR(t){return Ig.decode("UTF-8",t)}function wd(t,e){return t.toLowerCase()==="raw profile type exif"&&e.substring(1,5)==="exif"}function Cd(t,e){return t.toLowerCase()==="raw profile type iptc"&&e.substring(1,5)==="iptc"}function Rd(t){const e=t.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/);return oR(e[2].replace(/\n/g,""))}function oR(t){const e=new DataView(new ArrayBuffer(t.length/2));for(let n=0;n<t.length;n+=2)e.setUint8(n/2,parseInt(t.substring(n,n+2),16));return e}const aR={read:cR};function cR(t,e){const n={};for(let i=0;i<e.length;i++){const r=ne.getLongAt(t,e[i]+Jc),s=Pe(t,e[i]+jn,cn);s===hg?(n["Pixels Per Unit X"]=lR(t,e[i],r),n["Pixels Per Unit Y"]=uR(t,e[i],r),n["Pixel Units"]=fR(t,e[i],r)):s===pg&&(n["Modify Date"]=dR(t,e[i],r))}return n}function lR(t,e,n){if(!Vo(t,e,n,0,4))return;const s=ne.getLongAt(t,e+Lt+0);return{value:s,description:""+s}}function uR(t,e,n){if(!Vo(t,e,n,4,4))return;const s=ne.getLongAt(t,e+Lt+4);return{value:s,description:""+s}}function fR(t,e,n){if(!Vo(t,e,n,8,1))return;const s=ne.getByteAt(t,e+Lt+8);return{value:s,description:s===1?"meters":"Unknown"}}function dR(t,e,n){if(!Vo(t,e,n,0,7))return;const r=ne.getShortAt(t,e+Lt),s=ne.getByteAt(t,e+Lt+2),o=ne.getByteAt(t,e+Lt+3),a=ne.getByteAt(t,e+Lt+4),l=ne.getByteAt(t,e+Lt+5),c=ne.getByteAt(t,e+Lt+6);return{value:[r,s,o,a,l,c],description:`${ir(r,4)}-${ir(s,2)}-${ir(o,2)} ${ir(a,2)}:${ir(l,2)}:${ir(c,2)}`}}function Vo(t,e,n,i,r){return i+r<=n&&e+Lt+i+r<=t.byteLength}function ir(t,e){return Fm(""+t,e,"0")}const hR={read:_R},pR=4,mR=7,gR=10;function _R(t,e){const n={};if(e+gR>t.byteLength)return n;const i=ne.getByteAt(t,e);return n.Alpha=xR(i),n.Animation=vR(i),n.ImageWidth=Id(t,e+pR),n.ImageHeight=Id(t,e+mR),n}function xR(t){const e=t&16;return{value:e?1:0,description:e?"Yes":"No"}}function vR(t){const e=t&2;return{value:e?1:0,description:e?"Yes":"No"}}function Id(t,e){const n=ne.getByteAt(t,e)+256*ne.getByteAt(t,e+1)+65536*ne.getByteAt(t,e+2)+1;return{value:n,description:n+"px"}}const ER={read:SR},Pd=t=>`${t} ${t===1?"bit":"bits"}`,Fa=[{name:"GIF Version",offset:3,size:3,getValue:(t,e)=>Pe(t,e,3),description:t=>t},{name:"Image Width",offset:6,size:2,getValue:(t,e)=>t.getUint16(e,!0),description:t=>`${t}px`},{name:"Image Height",offset:8,size:2,getValue:(t,e)=>t.getUint16(e,!0),description:t=>`${t}px`},{name:"Global Color Map",offset:10,size:1,getValue:(t,e)=>(t.getUint8(e)&128)>>>7,description:t=>t===1?"Yes":"No"},{name:"Bits Per Pixel",offset:10,size:1,getValue:(t,e)=>(t.getUint8(e)&7)+1,description:Pd},{name:"Color Resolution Depth",offset:10,size:1,getValue:(t,e)=>((t.getUint8(e)&112)>>>4)+1,description:Pd}];function SR(t){const e={};for(let n=0;n<Fa.length;n++)e[Fa[n].name]=MR(t,Fa[n]);return e}function MR(t,e){if(e.offset+e.size>t.byteLength)return;const n=e.getValue(t,e.offset);return{value:n,description:e.description(n)}}const TR=[6,7,99],bR={get:yR};function yR(t,e,n){if(AR(e)){e.type="image/jpeg";const i=n+e.JPEGInterchangeFormat.value;e.image=t.buffer.slice(i,i+e.JPEGInterchangeFormatLength.value),Dm(e,"base64",function(){return Nm(this.image)})}return e}function AR(t){return t&&(t.Compression===void 0||TR.includes(t.Compression.value))&&t.JPEGInterchangeFormat&&t.JPEGInterchangeFormat.value&&t.JPEGInterchangeFormatLength&&t.JPEGInterchangeFormatLength.value}const Oa={INCHES:2,CENTIMETERS:3,MILLIMETERS:4},Ba={INCHES_TO_MM:25.4,CM_TO_MM:10,MM_TO_MM:1},wR={get:CR};function CR(t,e){const n={};let i=!1;const r=Ai(t,"exif","FocalLength",e),s=Ai(t,"exif","FocalPlaneXResolution",e),o=Ai(t,"exif","FocalPlaneYResolution",e),a=Ai(t,"exif","FocalPlaneResolutionUnit",e),l=Ai(t,"file","Image Width",e),c=Ai(t,"file","Image Height",e),u=Ai(t,"exif","FocalLengthIn35mmFilm",e)||RR(s,o,a,l,c,r);u&&(n.FocalLength35efl={value:u,description:De.FocalLengthIn35mmFilm(u)},i=!0);const d=IR(r,u);d&&(n.ScaleFactorTo35mmEquivalent=d,i=!0);const f=PR(u);if(f&&(n.FieldOfView=f,i=!0),i)return n}function Ai(t,e,n,i){if(i&&t[e]&&t[e][n])return t[e][n].value;if(!i&&t[n])return t[n].value}function RR(t,e,n,i,r,s){if(t&&e&&n&&i&&r&&s)try{let a;switch(n){case Oa.INCHES:a=Ba.INCHES_TO_MM;break;case Oa.CENTIMETERS:a=Ba.CM_TO_MM;break;case Oa.MILLIMETERS:a=Ba.MM_TO_MM;break;default:return}const l=t[0]/t[1]*a,c=e[0]/e[1]*a,u=i/l,d=r/c,f=Math.sqrt(u**2+d**2);return s[0]/s[1]*(43.27/f)}catch{}}function IR(t,e){if(t&&e)try{const n=e/(t[0]/t[1]);return{value:n,description:n.toFixed(1)}}catch{}}function PR(t){if(t)try{const n=2*Math.atan(36/(2*t))*(180/Math.PI);return{value:n,description:n.toFixed(1)+" deg"}}catch{}}function Ld({mergeSteps:t,deferredResults:e,parsedGroups:n,expanded:i,tagFilter:r,dataView:s,tiffHeaderOffset:o,exifDataView:a,fileType:l,pngTextChunks:c,pngTextIsAsync:u,thumbnailIfdTags:d,deps:f}){let h={};for(let g=0;g<t.length;g++)h=LR({step:t[g],deferredResults:e,parsedGroups:n,expanded:i,tagFilter:r,dataView:s,tiffHeaderOffset:o,exifDataView:a,fileType:l,thumbnailIfdTags:d,tags:h,deps:f});return i&&u&&r.shouldReturnGroup("png")&&h.png&&(h.pngText=f.objectAssign({},h.png)),i&&r.shouldReturnGroup("png")&&f.hasPngTextData(c)&&h.png&&!h.pngText&&(h.pngText=f.objectAssign({},h.png)),h}function LR({step:t,deferredResults:e,parsedGroups:n,expanded:i,tagFilter:r,dataView:s,tiffHeaderOffset:o,exifDataView:a,fileType:l,thumbnailIfdTags:c,tags:u,deps:d}){if(t.type==="mergeGroupAssign"){const f=d.filterTagsForReturn(t.groupKey,t.parsedTags,r);return Xs(u,t.groupKey,f,i,d)}if(t.type==="mergeGroupMerge"){const f=d.filterTagsForReturn(t.groupKey,t.parsedTags,r);return DR(u,t.groupKey,f,i,d)}if(t.type==="mergeXmpGroupAssign"){const f=d.filterTagsForReturn("xmp",t.parsedTags,r);return Dd(u,f,i,d)}if(t.type==="mergeIccDeferred"){const f=e[t.deferredKey],h=d.filterTagsForParse("icc",f,r);if(n.icc=h,!r.shouldReturnGroup("icc"))return u;const g=d.filterTagsForReturn("icc",h,r);return Xs(u,"icc",g,i,d)}if(t.type==="mergeBrobExifDeferred"){const f=e[t.deferredKey];if(!f||Object.keys(f).length===0)return u;const h=d.filterTagsForParse("exif",f,r);if(n.exif=n.exif?d.objectAssign({},n.exif,h):h,!r.shouldReturnGroup("exif"))return u;const g=d.filterTagsForReturn("exif",h,r);return Xs(u,"exif",g,i,d)}if(t.type==="mergeBrobXmpDeferred"){const f=e[t.deferredKey];if(!f||Object.keys(f).length===0)return u;const h=d.filterTagsForParse("xmp",f,r);if(n.xmp=h,!r.shouldReturnGroup("xmp"))return u;const g=d.filterTagsForReturn("xmp",h,r);return Dd(u,g,i,d)}if(t.type==="mergePngFile"){const f=d.filterTagsForReturn("png",t.parsedTags,r);return r.shouldReturnGroup("png")?i?(u.png=u.png?d.objectAssign({},u.png,f):f,u.pngFile=f,u):d.objectAssign({},u,f):u}if(t.type==="mergePngChunk"){const f=d.filterTagsForReturn("png",t.parsedTags,r);return r.shouldReturnGroup("png")?i?(u.png=u.png?d.objectAssign({},u.png,f):f,u):d.objectAssign({},u,f):u}if(t.type==="processPngTextReadTags")return Nd({readTags:t.readTags,parsedGroups:n,expanded:i,tagFilter:r,tags:u,deps:d});if(t.type==="processPngTextReadTagsDeferredList"){const f=e[t.deferredKey]||[];for(let h=0;h<f.length;h++)u=Nd({readTags:f[h],parsedGroups:n,expanded:i,tagFilter:r,tags:u,deps:d});return u}if(t.type==="gps"){if(i&&r.shouldReturnGroup("gps")&&n.exif){const f=d.getGpsGroupFromExifTags(n.exif);if(f){const h=d.filterTagsForReturn("gps",f,r);u.gps=h}}return u}if(t.type==="composite"){if(!r.shouldReturnGroup("composite"))return u;let f=u,h=i;r.isActive&&(f={exif:n.exif,file:n.file},h=!0);const g=d.Composite.get(f,h);if(!g)return u;const E=d.filterTagsForReturn("composite",g,r);return Xs(u,"composite",E,i,d)}if(t.type==="thumbnail"){if(!r.shouldReturnGroup("thumbnail")||!r.shouldReturnTag("thumbnail","Thumbnail"))return delete u.Thumbnail,u;if(!c)return u;const f=c?d.filterTagsForParse("thumbnail",c,r):void 0;f&&(n.thumbnail=f);const h=d.Thumbnail.get(a||s,f,o);return h?u.Thumbnail=h:delete u.Thumbnail,u}if(t.type==="metadataRange"){if(!i)return u;const f=UR(t.metadataBlocks,t.metadataTruncated,s,n);return f&&(u.metadataRange=f),u}return t.type==="fileType"&&l&&r.shouldReturnGroup("file")&&r.shouldReturnTag("file","FileType")&&(i?(u.file||(u.file={}),u.file.FileType=l):u.FileType=l),u}function Xs(t,e,n,i,r){return i?(t[e]=n,t):r.objectAssign({},t,n)}function Dd(t,e,n,i){if(n)return t.xmp=e,t;const r=i.objectAssign({},e);return delete r._raw,i.objectAssign({},t,r)}function DR(t,e,n,i,r){return i?(t[e]?t[e]=r.objectAssign({},t[e],n):t[e]=n,t):r.objectAssign({},t,n)}function Nd({readTags:t,parsedGroups:e,expanded:n,tagFilter:i,tags:r,deps:s}){const o=t.__exif,a=t.__iptc;if(delete t.__exif,delete t.__iptc,o){const l=s.filterTagsForParse("exif",o,i);if(e.exif=e.exif?s.objectAssign({},e.exif,l):l,i.shouldReturnGroup("exif")){const c=s.filterTagsForReturn("exif",l,i);n?r.exif=r.exif?s.objectAssign({},r.exif,c):c:r=s.objectAssign({},r,c)}}if(a){const l=s.filterTagsForParse("iptc",a,i);if(e.iptc=e.iptc?s.objectAssign({},e.iptc,l):l,i.shouldReturnGroup("iptc")){const c=s.filterTagsForReturn("iptc",l,i);n?r.iptc=r.iptc?s.objectAssign({},r.iptc,c):c:r=s.objectAssign({},r,c)}}if(i.shouldReturnGroup("png")){const l=s.filterTagsForParse("png",t,i),c=s.filterTagsForReturn("png",l,i);e.pngText=l,n?(r.png=r.png?s.objectAssign({},r.png,c):c,c&&Object.keys(c).length>0&&(r.pngText=r.pngText?s.objectAssign({},r.pngText,c):c)):r=s.objectAssign({},r,c)}return r}function NR(t){return!!t&&typeof t.then=="function"}function UR(t,e,n,i){const r=(t||[]).slice(),s=!!e;if(i&&i.mpf&&Array.isArray(i.mpf.Images))for(let u=0;u<i.mpf.Images.length;u++){const d=i.mpf.Images[u];if(!d||!d.ImageOffset||!d.ImageSize)continue;const f=d.ImageOffset.value,h=d.ImageSize.value;typeof f!="number"||f<=0||typeof h!="number"||h<=0||r.push({type:"mpfImage",start:f,end:f+h})}if(r.length===0)return;r.sort((u,d)=>u.start-d.start);const o=r[0].start;let a=r[0].end;for(let u=1;u<r.length;u++)r[u].end>a&&(a=r[u].end);const l=n&&typeof n.byteLength=="number"?n.byteLength:0,c=!s&&a<=l;return{start:o,end:a,complete:c,blocks:r}}function r0(t){this.name="MetadataMissingError",this.message=t||"No Exif data",this.stack=new Error().stack}r0.prototype=new Error;const s0={MetadataMissingError:r0},Ud={load:FR,loadView:o0,errors:s0};function FR(t,e={}){if(e.length==="auto")return gb(e),_b(za)(t,e);if(Vc(t)||Gm(t)){zl();const n=Vc(t)?ob:ab,i=zt({},e,{async:!0});return n(t,i).then(r=>za(r,i))}return za(t,e)}function za(t,e){return OR(t)&&(t=new Uint8Array(t).buffer),o0(Gc(t),e)}function OR(t){try{return Buffer.isBuffer(t)}catch{return!1}}function o0(t,{expanded:e=!1,async:n=!1,computed:i=!1,includeUnknown:r=!1,includeOffsets:s=!1,domParser:o=void 0,includeTags:a=void 0,excludeTags:l=void 0,decompress:c=void 0}={}){const u=VA({includeTags:a,excludeTags:l}),d=Object.create(null),f=[],h=Object.create(null),g=[];let E=!1,m,p;const{fileType:A,fileDataOffset:w,jfifDataOffset:S,tiffHeaderOffset:y,iptcDataOffset:T,xmpChunks:C,iccChunks:x,mpfDataOffset:b,pngHeaderOffset:L,pngTextChunks:R,pngChunkOffsets:F,vp8xChunkOffset:Z,gifHeaderOffset:q,brobExifChunk:G,brobXmpChunk:Y,jxlCodestreamOffset:V,metadataBlocks:J,metadataTruncated:te,exifDataView:re,xmpDataView:he}=yA.parseAppMarkers(t,n,e&&s),ve=GR({fileType:A,fileDataOffset:w,jfifDataOffset:S,tiffHeaderOffset:y,iptcDataOffset:T,xmpChunks:C,iccChunks:x,mpfDataOffset:b,pngHeaderOffset:L,pngTextChunks:R,pngChunkOffsets:F,vp8xChunkOffset:Z,gifHeaderOffset:q,jxlCodestreamOffset:V});if(w!==void 0&&u.shouldParseGroup("file")&&at(a)){const ge=S1.read(t,w),U=It("file",ge,u);d.file=U,u.shouldReturnGroup("file")&&f.push({type:"mergeGroupAssign",groupKey:"file",parsedTags:U})}if(S!==void 0&&u.shouldParseGroup("jfif")){const ge=O1.read(t,S),U=It("jfif",ge,u);d.jfif=U,u.shouldReturnGroup("jfif")&&f.push({type:"mergeGroupAssign",groupKey:"jfif",parsedTags:U})}if(y!==void 0&&u.shouldParseGroup("exif")){const{tags:ge,byteOrder:U}=BR(re||t,y,r,i,u);ge.Thumbnail&&(m=ge.Thumbnail,delete ge.Thumbnail);const Q=It("exif",ge,u);if(d.exif=Q,Q["IPTC-NAA"]&&T===void 0&&u.shouldParseGroup("iptc")){const j=tl.read(Q["IPTC-NAA"].value,0,r,u),Me=It("iptc",j,u);d.iptc=Me,u.shouldReturnGroup("iptc")&&f.push({type:"mergeGroupAssign",groupKey:"iptc",parsedTags:Me})}if(Q.ApplicationNotes&&!so(C)&&u.shouldParseGroup("xmp")){const j=Pa.read(tt(Q.ApplicationNotes.value),void 0,o),Me=It("xmp",j,u);if(d.xmp=Me,u.shouldReturnGroup("xmp")){const Le={type:"mergeXmpGroupAssign",parsedTags:Me};e?f.push(Le):p=Le}}if(Q.ImageSourceData&&Q.PhotoshopSettings&&u.shouldParseGroup("photoshop")){const j=cC.read(Q.PhotoshopSettings.value,r,u),Me=It("photoshop",j,u);d.photoshop=Me,u.shouldReturnGroup("photoshop")&&f.push({type:"mergeGroupAssign",groupKey:"photoshop",parsedTags:Me})}if(Q.ICC_Profile&&!ll(x)&&u.shouldParseGroup("icc")){const j=bd.read(Q.ICC_Profile.value,[{offset:0,length:Q.ICC_Profile.value.length,chunkNumber:1,chunksTotal:1}]),Me=It("icc",j,u);d.icc=Me,u.shouldReturnGroup("icc")&&f.push({type:"mergeGroupAssign",groupKey:"icc",parsedTags:Me})}if(Q.MakerNote&&u.shouldParseGroup("makerNotes")){if(kR(Q)){const j=PC.read(re||t,y,Q.MakerNote.__offset,U,r,i,u);d.makerNotes=j,u.shouldReturnGroup("makerNotes")&&f.push({type:"mergeGroupAssign",groupKey:"makerNotes",parsedTags:j})}else if(VR(Q)){const j=FC.read(re||t,y,Q.MakerNote.__offset,r,i,u);d.makerNotes=j,u.shouldReturnGroup("makerNotes")&&f.push({type:"mergeGroupAssign",groupKey:"makerNotes",parsedTags:j})}}Q.MakerNote&&delete Q.MakerNote.__offset,u.shouldReturnGroup("exif")&&f.push({type:"mergeGroupAssign",groupKey:"exif",parsedTags:Q}),!e&&p&&(f.push(p),p=void 0)}if(T!==void 0&&u.shouldParseGroup("iptc")){const ge=tl.read(t,T,r,u),U=It("iptc",ge,u);d.iptc=U,u.shouldReturnGroup("iptc")&&f.push({type:"mergeGroupAssign",groupKey:"iptc",parsedTags:U})}if(so(C)&&u.shouldParseGroup("xmp")){const ge=Pa.read(he||t,C,o),U=It("xmp",ge,u);d.xmp=U,u.shouldReturnGroup("xmp")&&f.push({type:"mergeXmpGroupAssign",parsedTags:U})}if(G&&y===void 0&&u.shouldParseGroup("exif")&&n){const ge=new DataView(t.buffer,t.byteOffset+G.dataOffset,G.length);g.push(_o(ge,kc,void 0,"dataview",c).then(U=>{const Q=Eo(U,0),{tags:j}=ql.read(U,Q,r,i,u);j.Thumbnail&&delete j.Thumbnail,h.brobExif=j}).catch(()=>{h.brobExif={}})),f.push({type:"mergeBrobExifDeferred",deferredKey:"brobExif"})}if(Y&&!so(C)&&u.shouldParseGroup("xmp")&&n){const ge=new DataView(t.buffer,t.byteOffset+Y.dataOffset,Y.length);g.push(_o(ge,kc,void 0,"dataview",c).then(U=>{h.brobXmp=Pa.read(U,[{dataOffset:0,length:U.byteLength}],o)}).catch(()=>{h.brobXmp={}})),f.push({type:"mergeBrobXmpDeferred",deferredKey:"brobXmp"})}if(ll(x)&&u.shouldParseGroup("icc")){const ge=bd.read(t,x,n,c);if(NR(ge)){if(!n)throw new Error("Promise is required when async mode is enabled.");g.push(ge.then(U=>{h.iccApp=U})),f.push({type:"mergeIccDeferred",deferredKey:"iccApp"})}else{const U=It("icc",ge,u);d.icc=U,u.shouldReturnGroup("icc")&&f.push({type:"mergeGroupAssign",groupKey:"icc",parsedTags:U})}}if(b!==void 0&&u.shouldParseGroup("mpf")){const ge=d1.read(t,b,r,i,u),U=It("mpf",ge,u);d.mpf=U,u.shouldReturnGroup("mpf")&&f.push({type:"mergeGroupAssign",groupKey:"mpf",parsedTags:U})}if(L!==void 0&&u.shouldParseGroup("png")){const ge=VC.read(t,L),U=It("png",ge,u);d.pngFile=U,u.shouldReturnGroup("png")&&f.push({type:"mergePngFile",parsedTags:U})}if(ul(R)&&(u.shouldParseGroup("png")||u.shouldParseGroup("exif")||u.shouldParseGroup("iptc"))){const{readTags:ge,readTagsPromise:U}=qC.read(t,R,n,r,i,u,c);E=!!U,f.push({type:"processPngTextReadTags",readTags:ge}),U&&(g.push(U.then(Q=>{h.pngTextTagList=Q})),f.push({type:"processPngTextReadTagsDeferredList",deferredKey:"pngTextTagList"}))}if(F!==void 0&&u.shouldParseGroup("png")){const ge=aR.read(t,F),U=It("png",ge,u);d.pngChunk=U,u.shouldReturnGroup("png")&&f.push({type:"mergePngChunk",parsedTags:U})}if(Z!==void 0&&u.shouldParseGroup("riff")){const ge=hR.read(t,Z),U=It("riff",ge,u);d.riff=U,u.shouldReturnGroup("riff")&&f.push({type:"mergeGroupMerge",groupKey:"riff",parsedTags:U})}if(q!==void 0&&u.shouldParseGroup("gif")){const ge=ER.read(t,q),U=It("gif",ge,u);d.gif=U,u.shouldReturnGroup("gif")&&f.push({type:"mergeGroupMerge",groupKey:"gif",parsedTags:U})}if(V!==void 0&&u.shouldParseGroup("file")){const ge=P1.read(t,V),U=It("file",ge,u);d.file=U,u.shouldReturnGroup("file")&&f.push({type:"mergeGroupAssign",groupKey:"file",parsedTags:U})}if(f.push({type:"gps"}),f.push({type:"composite"}),f.push({type:"thumbnail"}),f.push({type:"fileType"}),e&&s&&f.push({type:"metadataRange",metadataBlocks:J,metadataTruncated:!!te}),!ve)throw new s0.MetadataMissingError;const ke={objectAssign:zt,hasPngTextData:ul,filterTagsForParse:It,filterTagsForReturn:zR,getGpsGroupFromExifTags:HR,Composite:wR,Thumbnail:bR};if(n)return zl(),Promise.all(g).then(()=>Ld({mergeSteps:f,deferredResults:h,parsedGroups:d,expanded:e,tagFilter:u,dataView:t,tiffHeaderOffset:y,exifDataView:re,fileType:A,pngTextChunks:R,pngTextIsAsync:E,thumbnailIfdTags:m,deps:ke}));return Ld({mergeSteps:f,deferredResults:h,parsedGroups:d,expanded:e,tagFilter:u,dataView:t,tiffHeaderOffset:y,exifDataView:re,fileType:A,pngTextChunks:R,pngTextIsAsync:E,thumbnailIfdTags:m,deps:ke});function at(ge){if(!ge)return!0;const{composite:U,file:Q}=ge;return U===!0||Array.isArray(U)&&U.length>0?!0:!(Array.isArray(Q)&&Q.length===1&&Q[0]==="FileType")}}function BR(t,e,n,i,r){try{return ql.read(t,e,n,i,r)}catch{return{tags:{},byteOrder:en.BIG_ENDIAN}}}function It(t,e,n){return n.isActive?a0(t,e,n.shouldParseTag):e}function zR(t,e,n){return n.isActive?a0(t,e,n.shouldReturnTag):e}function a0(t,e,n){if(!e)return e;const i={};for(const s in e){const o=e[s],a=r(o);n(t,s,a)&&(i[s]=o)}return i;function r(s){if(s)return Array.isArray(s)?s.length===0?void 0:s[0].id:s.id}}function GR({fileType:t,fileDataOffset:e,jfifDataOffset:n,tiffHeaderOffset:i,iptcDataOffset:r,xmpChunks:s,iccChunks:o,mpfDataOffset:a,pngHeaderOffset:l,pngTextChunks:c,pngChunkOffsets:u,vp8xChunkOffset:d,gifHeaderOffset:f,jxlCodestreamOffset:h}){return!!t||e!==void 0||n!==void 0||i!==void 0||r!==void 0||so(s)||ll(o)||a!==void 0||l!==void 0||ul(c)||u!==void 0||d!==void 0||f!==void 0||h!==void 0}function HR(t){let e;if(t.GPSLatitude&&t.GPSLatitudeRef){e=e||{};try{e.Latitude=vo(t.GPSLatitude.value),t.GPSLatitudeRef.value.join("")==="S"&&(e.Latitude=-e.Latitude)}catch{}}if(t.GPSLongitude&&t.GPSLongitudeRef){e=e||{};try{e.Longitude=vo(t.GPSLongitude.value),t.GPSLongitudeRef.value.join("")==="W"&&(e.Longitude=-e.Longitude)}catch{}}if(t.GPSAltitude&&t.GPSAltitudeRef){e=e||{};try{e.Altitude=t.GPSAltitude.value[0]/t.GPSAltitude.value[1],t.GPSAltitudeRef.value===1&&(e.Altitude=-e.Altitude)}catch{}}if(e)return e}function so(t){return Array.isArray(t)&&t.length>0}function ll(t){return Array.isArray(t)&&t.length>0}function kR(t){return t.Make&&t.Make.value&&Array.isArray(t.Make.value)&&t.Make.value[0]==="Canon"&&t.MakerNote&&t.MakerNote.__offset}function VR(t){const e="PENTAX ";return t.MakerNote.value.length>e.length&&tt(t.MakerNote.value.slice(0,e.length))===e&&t.MakerNote.__offset}function ul(t){return Array.isArray(t)&&t.length>0}async function WR(t){var l,c,u,d;const e=typeof t=="string"?await Ud.load(await(await fetch(t)).arrayBuffer()):await Ud.load(t);let n=null,i=null,r=null;e.GPSLatitude&&e.GPSLongitude&&(n=e.GPSLatitude.description,i=e.GPSLongitude.description,r=e.GPSAltitude?e.GPSAltitude.description:0);let s=0,o=0,a=0;return e.PoseHeadingDegrees?(s=parseFloat(e.PoseHeadingDegrees.description??"0"),o=parseFloat(((l=e.PosePitchDegrees)==null?void 0:l.description)??"0"),a=parseFloat(((c=e.PoseRollDegrees)==null?void 0:c.description)??"0")):e.GimbalYawDegree&&(s=parseFloat(e.GimbalYawDegree.description??"0"),o=parseFloat(((u=e.GimbalPitchDegree)==null?void 0:u.description)??"0"),a=parseFloat(((d=e.GimbalRollDegree)==null?void 0:d.description)??"0")),{location:{latitude:n,longitude:i,altitude:r},orientation:{heading:s,pitch:o,roll:a}}}const XR=m0({__name:"PanoramicPhoto",props:{panorama:{},autoHeading:{type:Boolean,default:!0},options:{default:()=>({})}},emits:["ready","position-updated","zoom-updated"],setup(t,{emit:e}){const n=t,i=e,r=E0();let s=null,o=null;g0(async()=>{const c=a(n.panorama),u=n.autoHeading?await l(n.panorama):{};s=new JT({container:r.value,panorama:c,...u,...n.options}),s.addEventListener("position-updated",d=>{i("position-updated",d.position)}),s.addEventListener("zoom-updated",()=>{i("zoom-updated",Math.round(s.state.vFov))}),i("ready",s)}),_0(()=>{s==null||s.destroy(),s=null,o&&(URL.revokeObjectURL(o),o=null)});function a(c){return typeof c=="string"?c:(o=URL.createObjectURL(c),o)}async function l(c){return{defaultYaw:0,sphereCorrection:{pan:(await WR(c)).orientation.heading*Math.PI/180,tilt:0,roll:0}}}return(c,u)=>(x0(),v0("div",{ref_key:"containerRef",ref:r,class:"panoramic-photo"},null,512))}}),$R=S0(XR,[["__scopeId","data-v-53cbe064"]]);export{$R as PanoramicPhoto,WR as getPanoramaMetadata};
