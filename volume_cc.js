/*

Copyright 2025 William Johnson <williamj.inbox@gmail.com>

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/

*/

/* Minified Variant of BigNumber (9.1.2) - MIT : MikeMcl */
!function(e){"use strict";var r,n=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,t=Math.ceil,i=Math.floor,o="[BigNumber Error] ",s=o+"Number primitive has more than 15 significant digits: ",f=1e14,u=14,l=9007199254740991,c=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],a=1e7,h=1e9;function g(e){var r=0|e;return e>0||e===r?r:r-1}function p(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=u-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function w(e,r){var n,t,i=e.c,o=r.c,s=e.s,f=r.s,u=e.e,l=r.e;if(!s||!f)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-f:s;if(s!=f)return s;if(n=s<0,t=u==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return u>l^n?1:-1;for(f=(u=i.length)<(l=o.length)?u:l,s=0;s<f;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return u==l?0:u>l^n?1:-1}function d(e,r,n,t){if(e<r||e>n||e!==i(e))throw Error(o+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function m(e){var r=e.c.length-1;return g(e.e/u)==r&&e.c[r]%2!=0}function v(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function N(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}r=function e(r){var O,y,b,E,A,S,R,_,B,D,P=z.prototype={constructor:z,toString:null,valueOf:null},x=new z(1),L=20,U=4,I=-7,T=21,C=-1e7,M=1e7,G=!1,F=1,k=0,q={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},j="0123456789abcdefghijklmnopqrstuvwxyz",$=!0;function z(e,r){var t,o,f,c,a,h,g,p,w=this;if(!(w instanceof z))return new z(e,r);if(null==r){if(e&&!0===e._isBigNumber)return w.s=e.s,void(!e.c||e.e>M?w.c=w.e=null:e.e<C?w.c=[w.e=0]:(w.e=e.e,w.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(w.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,a=e;a>=10;a/=10,c++);return void(c>M?w.c=w.e=null:(w.e=c,w.c=[e]))}p=String(e)}else{if(!n.test(p=String(e)))return b(w,p,h);w.s=45==p.charCodeAt(0)?(p=p.slice(1),-1):1}(c=p.indexOf("."))>-1&&(p=p.replace(".","")),(a=p.search(/e/i))>0?(c<0&&(c=a),c+=+p.slice(a+1),p=p.substring(0,a)):c<0&&(c=p.length)}else{if(d(r,2,j.length,"WORD_BASE"),10==r&&$)return X(w=new z(e),L+w.e+1,U);if(p=String(e),h="number"==typeof e){if(0*e!=0)return b(w,p,h,r);if(w.s=1/e<0?(p=p.slice(1),-1):1,z.DEBUG&&p.replace(/^0\.0*|\./,"").length>15)throw Error(s+e)}else w.s=45===p.charCodeAt(0)?(p=p.slice(1),-1):1;for(t=j.slice(0,r),c=a=0,g=p.length;a<g;a++)if(t.indexOf(o=p.charAt(a))<0){if("."==o){if(a>c){c=g;continue}}else if(!f&&(p==p.toUpperCase()&&(p=p.toLowerCase())||p==p.toLowerCase()&&(p=p.toUpperCase()))){f=!0,a=-1,c=0;continue}return b(w,String(e),h,r)}h=!1,(c=(p=y(p,r,10,w.s)).indexOf("."))>-1?p=p.replace(".",""):c=p.length}for(a=0;48===p.charCodeAt(a);a++);for(g=p.length;48===p.charCodeAt(--g););if(p=p.slice(a,++g)){if(g-=a,h&&z.DEBUG&&g>15&&(e>l||e!==i(e)))throw Error(s+w.s*e);if((c=c-a-1)>M)w.c=w.e=null;else if(c<C)w.c=[w.e=0];else{if(w.e=c,w.c=[],a=(c+1)%u,c<0&&(a+=u),a<g){for(a&&w.c.push(+p.slice(0,a)),g-=u;a<g;)w.c.push(+p.slice(a,a+=u));a=u-(p=p.slice(a)).length}else a-=g;for(;a--;p+="0");w.c.push(+p)}}else w.c=[w.e=0]}function H(e,r,n,t){var i,o,s,f,u;if(null==n?n=U:d(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)u=p(e.c),u=1==t||2==t&&(s<=I||s>=T)?v(u,s):N(u,s,"0");else if(o=(e=X(new z(e),r,n)).e,f=(u=p(e.c)).length,1==t||2==t&&(r<=o||o<=I)){for(;f<r;u+="0",f++);u=v(u,o)}else if(r-=s,u=N(u,o,"0"),o+1>f){if(--r>0)for(u+=".";r--;u+="0");}else if((r+=o-f)>0)for(o+1==f&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function V(e,r){for(var n,t,i=1,o=new z(e[0]);i<e.length;i++)(!(t=new z(e[i])).s||(n=w(o,t))===r||0===n&&o.s===r)&&(o=t);return o}function W(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*u-1)>M?e.c=e.e=null:n<C?e.c=[e.e=0]:(e.e=n,e.c=r),e}function X(e,r,n,o){var s,l,a,h,g,p,w,d=e.c,m=c;if(d){e:{for(s=1,h=d[0];h>=10;h/=10,s++);if((l=r-s)<0)l+=u,a=r,g=d[p=0],w=i(g/m[s-a-1]%10);else if((p=t((l+1)/u))>=d.length){if(!o)break e;for(;d.length<=p;d.push(0));g=w=0,s=1,a=(l%=u)-u+1}else{for(g=h=d[p],s=1;h>=10;h/=10,s++);w=(a=(l%=u)-u+s)<0?0:i(g/m[s-a-1]%10)}if(o=o||r<0||null!=d[p+1]||(a<0?g:g%m[s-a-1]),o=n<4?(w||o)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||o||6==n&&(l>0?a>0?g/m[s-a]:0:d[p-1])%10&1||n==(e.s<0?8:7)),r<1||!d[0])return d.length=0,o?(r-=e.e+1,d[0]=m[(u-r%u)%u],e.e=-r||0):d[0]=e.e=0,e;if(0==l?(d.length=p,h=1,p--):(d.length=p+1,h=m[u-l],d[p]=a>0?i(g/m[s-a]%m[a])*h:0),o)for(;;){if(0==p){for(l=1,a=d[0];a>=10;a/=10,l++);for(a=d[0]+=h,h=1;a>=10;a/=10,h++);l!=h&&(e.e++,d[0]==f&&(d[0]=1));break}if(d[p]+=h,d[p]!=f)break;d[p--]=0,h=1}for(l=d.length;0===d[--l];d.pop());}e.e>M?e.c=e.e=null:e.e<C&&(e.c=[e.e=0])}return e}function Y(e){var r,n=e.e;return null===n?e.toString():(r=p(e.c),r=n<=I||n>=T?v(r,n):N(r,n,"0"),e.s<0?"-"+r:r)}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var r,n;if(null!=e){if("WORD_OBJECT"!=typeof e)throw Error(o+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(d(n=e[r],0,h,r),L=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(d(n=e[r],0,8,r),U=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(d(n[0],-h,0,r),d(n[1],0,h,r),I=n[0],T=n[1]):(d(n,-h,h,r),I=-(T=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)d(n[0],-h,-1,r),d(n[1],1,h,r),C=n[0],M=n[1];else{if(d(n,-h,h,r),!n)throw Error(o+r+" cannot be zero: "+n);C=-(M=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(o+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw G=!n,Error(o+"crypto unavailable");G=n}else G=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(d(n=e[r],0,9,r),F=n),e.hasOwnProperty(r="POW_PRECISION")&&(d(n=e[r],0,h,r),k=n),e.hasOwnProperty(r="FORMAT")){if("WORD_OBJECT"!=typeof(n=e[r]))throw Error(o+r+" not an object: "+n);q=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(o+r+" invalid: "+n);$="0123456789"==n.slice(0,10),j=n}}return{DECIMAL_PLACES:L,ROUNDING_MODE:U,EXPONENTIAL_AT:[I,T],RANGE:[C,M],CRYPTO:G,MODULO_MODE:F,POW_PRECISION:k,FORMAT:q,ALPHABET:j}},z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!z.DEBUG)return!0;var r,n,t=e.c,s=e.e,l=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===l||-1===l)&&s>=-h&&s<=h&&s===i(s)){if(0===t[0]){if(0===s&&1===t.length)return!0;break e}if((r=(s+1)%u)<1&&(r+=u),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=f||n!==i(n))break e;if(0!==n)return!0}}}else if(null===t&&null===s&&(null===l||1===l||-1===l))return!0;throw Error(o+"Invalid BigNumber: "+e)},z.maximum=z.max=function(){return V(arguments,-1)},z.minimum=z.min=function(){return V(arguments,1)},z.random=(E=9007199254740992,A=Math.random()*E&2097151?function(){return i(Math.random()*E)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,n,s,f,l,a=0,g=[],p=new z(x);if(null==e?e=L:d(e,0,h),f=t(e/u),G)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(f*=2));a<f;)(l=131072*r[a]+(r[a+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),r[a]=n[0],r[a+1]=n[1]):(g.push(l%1e14),a+=2);a=f/2}else{if(!crypto.randomBytes)throw G=!1,Error(o+"crypto unavailable");for(r=crypto.randomBytes(f*=7);a<f;)(l=281474976710656*(31&r[a])+1099511627776*r[a+1]+4294967296*r[a+2]+16777216*r[a+3]+(r[a+4]<<16)+(r[a+5]<<8)+r[a+6])>=9e15?crypto.randomBytes(7).copy(r,a):(g.push(l%1e14),a+=7);a=f/7}if(!G)for(;a<f;)(l=A())<9e15&&(g[a++]=l%1e14);for(f=g[--a],e%=u,f&&e&&(l=c[u-e],g[a]=i(f/l)*l);0===g[a];g.pop(),a--);if(a<0)g=[s=0];else{for(s=-1;0===g[0];g.splice(0,1),s-=u);for(a=1,l=g[0];l>=10;l/=10,a++);a<u&&(s-=u-a)}return p.e=s,p.c=g,p}),z.sum=function(){for(var e=1,r=arguments,n=new z(r[0]);e<r.length;)n=n.plus(r[e++]);return n},y=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,s=[0],f=0,u=e.length;f<u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(f++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(n,t,i,o,s){var f,u,l,c,a,h,g,w,d=n.indexOf("."),m=L,v=U;for(d>=0&&(c=k,k=0,n=n.replace(".",""),h=(w=new z(t)).pow(n.length-d),k=c,w.c=r(N(p(h.c),h.e,"0"),10,i,e),w.e=w.c.length),l=c=(g=r(n,t,i,s?(f=j,e):(f=e,j))).length;0==g[--c];g.pop());if(!g[0])return f.charAt(0);if(d<0?--l:(h.c=g,h.e=l,h.s=o,g=(h=O(h,w,m,v,i)).c,a=h.r,l=h.e),d=g[u=l+m+1],c=i/2,a=a||u<0||null!=g[u+1],a=v<4?(null!=d||a)&&(0==v||v==(h.s<0?3:2)):d>c||d==c&&(4==v||a||6==v&&1&g[u-1]||v==(h.s<0?8:7)),u<1||!g[0])n=a?N(f.charAt(1),-m,f.charAt(0)):f.charAt(0);else{if(g.length=u,a)for(--i;++g[--u]>i;)g[u]=0,u||(++l,g=[1].concat(g));for(c=g.length;!g[--c];);for(d=0,n="";d<=c;n+=f.charAt(g[d++]));n=N(n,l,f.charAt(0))}return n}}(),O=function(){function e(e,r,n){var t,i,o,s,f=0,u=e.length,l=r%a,c=r/a|0;for(e=e.slice();u--;)f=((i=l*(o=e[u]%a)+(t=c*o+(s=e[u]/a|0)*l)%a*a+f)/n|0)+(t/a|0)+c*s,e[u]=i%n;return f&&(e=[f].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,o,s,l,c){var a,h,p,w,d,m,v,N,O,y,b,E,A,S,R,_,B,D=t.s==o.s?1:-1,P=t.c,x=o.c;if(!(P&&P[0]&&x&&x[0]))return new z(t.s&&o.s&&(P?!x||P[0]!=x[0]:x)?P&&0==P[0]||!x?0*D:D/0:NaN);for(O=(N=new z(D)).c=[],D=s+(h=t.e-o.e)+1,c||(c=f,h=g(t.e/u)-g(o.e/u),D=D/u|0),p=0;x[p]==(P[p]||0);p++);if(x[p]>(P[p]||0)&&h--,D<0)O.push(1),w=!0;else{for(S=P.length,_=x.length,p=0,D+=2,(d=i(c/(x[0]+1)))>1&&(x=e(x,d,c),P=e(P,d,c),_=x.length,S=P.length),A=_,b=(y=P.slice(0,_)).length;b<_;y[b++]=0);B=x.slice(),B=[0].concat(B),R=x[0],x[1]>=c/2&&R++;do{if(d=0,(a=r(x,y,_,b))<0){if(E=y[0],_!=b&&(E=E*c+(y[1]||0)),(d=i(E/R))>1)for(d>=c&&(d=c-1),v=(m=e(x,d,c)).length,b=y.length;1==r(m,y,v,b);)d--,n(m,_<v?B:x,v,c),v=m.length,a=1;else 0==d&&(a=d=1),v=(m=x.slice()).length;if(v<b&&(m=[0].concat(m)),n(y,m,b,c),b=y.length,-1==a)for(;r(x,y,_,b)<1;)d++,n(y,_<b?B:x,b,c),b=y.length}else 0===a&&(d++,y=[0]);O[p++]=d,y[0]?y[b++]=P[A]||0:(y=[P[A]],b=1)}while((A++<S||null!=y[0])&&D--);w=null!=y[0],O[0]||O.splice(0,1)}if(c==f){for(p=1,D=O[0];D>=10;D/=10,p++);X(N,s+(N.e=p+h*u-1)+1,l,w)}else N.e=h,N.r=+w;return N}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,R=/^([^.]+)\.$/,_=/^\.([^.]+)$/,B=/^-?(Infinity|NaN)$/,D=/^\s*\+(?=[\w.])|^\s+|\s+$/g,b=function(e,r,n,t){var i,s=n?r:r.replace(D,"");if(B.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(S,(function(e,r,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,t&&t!=i?e:r})),t&&(i=t,s=s.replace(R,"$1").replace(_,"0.$1")),r!=s))return new z(s,i);if(z.DEBUG)throw Error(o+"Not a"+(t?" base "+t:"")+" number: "+r);e.s=null}e.c=e.e=null},P.absoluteValue=P.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},P.comparedTo=function(e,r){return w(this,new z(e,r))},P.decimalPlaces=P.dp=function(e,r){var n,t,i,o=this;if(null!=e)return d(e,0,h),null==r?r=U:d(r,0,8),X(new z(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-g(this.e/u))*u,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},P.dividedBy=P.div=function(e,r){return O(this,new z(e,r),L,U)},P.dividedToIntegerBy=P.idiv=function(e,r){return O(this,new z(e,r),0,1)},P.exponentiatedBy=P.pow=function(e,r){var n,s,f,l,c,a,h,g,p=this;if((e=new z(e)).c&&!e.isInteger())throw Error(o+"Exponent not an integer: "+Y(e));if(null!=r&&(r=new z(r)),c=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return g=new z(Math.pow(+Y(p),c?e.s*(2-m(e)):+Y(e))),r?g.mod(r):g;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new z(NaN);(s=!a&&p.isInteger()&&r.isInteger())&&(p=p.mod(r))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||c&&p.c[1]>=24e7:p.c[0]<8e13||c&&p.c[0]<=9999975e7)))return l=p.s<0&&m(e)?-0:0,p.e>-1&&(l=1/l),new z(a?1/l:l);k&&(l=t(k/u+2))}for(c?(n=new z(.5),a&&(e.s=1),h=m(e)):h=(f=Math.abs(+Y(e)))%2,g=new z(x);;){if(h){if(!(g=g.times(p)).c)break;l?g.c.length>l&&(g.c.length=l):s&&(g=g.mod(r))}if(f){if(0===(f=i(f/2)))break;h=f%2}else if(X(e=e.times(n),e.e+1,1),e.e>14)h=m(e);else{if(0===(f=+Y(e)))break;h=f%2}p=p.times(p),l?p.c&&p.c.length>l&&(p.c.length=l):s&&(p=p.mod(r))}return s?g:(a&&(g=x.div(g)),r?g.mod(r):l?X(g,k,U,undefined):g)},P.integerValue=function(e){var r=new z(this);return null==e?e=U:d(e,0,8),X(r,r.e+1,e)},P.isEqualTo=P.eq=function(e,r){return 0===w(this,new z(e,r))},P.isFinite=function(){return!!this.c},P.isGreaterThan=P.gt=function(e,r){return w(this,new z(e,r))>0},P.isGreaterThanOrEqualTo=P.gte=function(e,r){return 1===(r=w(this,new z(e,r)))||0===r},P.isInteger=function(){return!!this.c&&g(this.e/u)>this.c.length-2},P.isLessThan=P.lt=function(e,r){return w(this,new z(e,r))<0},P.isLessThanOrEqualTo=P.lte=function(e,r){return-1===(r=w(this,new z(e,r)))||0===r},P.isNaN=function(){return!this.s},P.isNegative=function(){return this.s<0},P.isPositive=function(){return this.s>0},P.isZero=function(){return!!this.c&&0==this.c[0]},P.minus=function(e,r){var n,t,i,o,s=this,l=s.s;if(r=(e=new z(e,r)).s,!l||!r)return new z(NaN);if(l!=r)return e.s=-r,s.plus(e);var c=s.e/u,a=e.e/u,h=s.c,p=e.c;if(!c||!a){if(!h||!p)return h?(e.s=-r,e):new z(p?s:NaN);if(!h[0]||!p[0])return p[0]?(e.s=-r,e):new z(h[0]?s:3==U?-0:0)}if(c=g(c),a=g(a),h=h.slice(),l=c-a){for((o=l<0)?(l=-l,i=h):(a=c,i=p),i.reverse(),r=l;r--;i.push(0));i.reverse()}else for(t=(o=(l=h.length)<(r=p.length))?l:r,l=r=0;r<t;r++)if(h[r]!=p[r]){o=h[r]<p[r];break}if(o&&(i=h,h=p,p=i,e.s=-e.s),(r=(t=p.length)-(n=h.length))>0)for(;r--;h[n++]=0);for(r=f-1;t>l;){if(h[--t]<p[t]){for(n=t;n&&!h[--n];h[n]=r);--h[n],h[t]+=f}h[t]-=p[t]}for(;0==h[0];h.splice(0,1),--a);return h[0]?W(e,h,a):(e.s=3==U?-1:1,e.c=[e.e=0],e)},P.modulo=P.mod=function(e,r){var n,t,i=this;return e=new z(e,r),!i.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||i.c&&!i.c[0]?new z(i):(9==F?(t=e.s,e.s=1,n=O(i,e,0,3),e.s=t,n.s*=t):n=O(i,e,0,F),(e=i.minus(n.times(e))).c[0]||1!=F||(e.s=i.s),e)},P.multipliedBy=P.times=function(e,r){var n,t,i,o,s,l,c,h,p,w,d,m,v,N,O,y=this,b=y.c,E=(e=new z(e,r)).c;if(!(b&&E&&b[0]&&E[0]))return!y.s||!e.s||b&&!b[0]&&!E||E&&!E[0]&&!b?e.c=e.e=e.s=null:(e.s*=y.s,b&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=g(y.e/u)+g(e.e/u),e.s*=y.s,(c=b.length)<(w=E.length)&&(v=b,b=E,E=v,i=c,c=w,w=i),i=c+w,v=[];i--;v.push(0));for(N=f,O=a,i=w;--i>=0;){for(n=0,d=E[i]%O,m=E[i]/O|0,o=i+(s=c);o>i;)n=((h=d*(h=b[--s]%O)+(l=m*h+(p=b[s]/O|0)*d)%O*O+v[o]+n)/N|0)+(l/O|0)+m*p,v[o--]=h%N;v[o]=n}return n?++t:v.splice(0,1),W(e,v,t)},P.negated=function(){var e=new z(this);return e.s=-e.s||null,e},P.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new z(e,r)).s,!i||!r)return new z(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/u,s=e.e/u,l=t.c,c=e.c;if(!o||!s){if(!l||!c)return new z(i/0);if(!l[0]||!c[0])return c[0]?e:new z(l[0]?t:0*i)}if(o=g(o),s=g(s),l=l.slice(),i=o-s){for(i>0?(s=o,n=c):(i=-i,n=l),n.reverse();i--;n.push(0));n.reverse()}for((i=l.length)-(r=c.length)<0&&(n=c,c=l,l=n,r=i),i=0;r;)i=(l[--r]=l[r]+c[r]+i)/f|0,l[r]=f===l[r]?0:l[r]%f;return i&&(l=[i].concat(l),++s),W(e,l,s)},P.precision=P.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return d(e,1,h),null==r?r=U:d(r,0,8),X(new z(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*u+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},P.shiftedBy=function(e){return d(e,-9007199254740991,l),this.times("1e"+e)},P.squareRoot=P.sqrt=function(){var e,r,n,t,i,o=this,s=o.c,f=o.s,u=o.e,l=L+4,c=new z("0.5");if(1!==f||!s||!s[0])return new z(!f||f<0&&(!s||s[0])?NaN:s?o:1/0);if(0==(f=Math.sqrt(+Y(o)))||f==1/0?(((r=p(s)).length+u)%2==0&&(r+="0"),f=Math.sqrt(+r),u=g((u+1)/2)-(u<0||u%2),n=new z(r=f==1/0?"5e"+u:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+u)):n=new z(f+""),n.c[0])for((f=(u=n.e)+l)<3&&(f=0);;)if(i=n,n=c.times(i.plus(O(o,i,l,1))),p(i.c).slice(0,f)===(r=p(n.c)).slice(0,f)){if(n.e<u&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(X(n,n.e+L+2,1),e=!n.times(n).eq(o));break}if(!t&&(X(i,i.e+L+2,0),i.times(i).eq(o))){n=i;break}l+=4,f+=4,t=1}return X(n,n.e+L+1,U,e)},P.toExponential=function(e,r){return null!=e&&(d(e,0,h),e++),H(this,e,r,1)},P.toFixed=function(e,r){return null!=e&&(d(e,0,h),e=e+this.e+1),H(this,e,r)},P.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"WORD_OBJECT"==typeof r?(n=r,r=null):e&&"WORD_OBJECT"==typeof e?(n=e,e=r=null):n=q;else if("WORD_OBJECT"!=typeof n)throw Error(o+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var s,f=t.split("."),u=+n.groupSize,l=+n.secondaryGroupSize,c=n.groupSeparator||"",a=f[0],h=f[1],g=i.s<0,p=g?a.slice(1):a,w=p.length;if(l&&(s=u,u=l,l=s,w-=s),u>0&&w>0){for(s=w%u||u,a=p.substr(0,s);s<w;s+=u)a+=c+p.substr(s,u);l>0&&(a+=c+p.slice(s)),g&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},P.toFraction=function(e){var r,n,t,i,s,f,l,a,h,g,w,d,m=this,v=m.c;if(null!=e&&(!(l=new z(e)).isInteger()&&(l.c||1!==l.s)||l.lt(x)))throw Error(o+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+Y(l));if(!v)return new z(m);for(r=new z(x),h=n=new z(x),t=a=new z(x),d=p(v),s=r.e=d.length-m.e-1,r.c[0]=c[(f=s%u)<0?u+f:f],e=!e||l.comparedTo(r)>0?s>0?r:h:l,f=M,M=1/0,l=new z(d),a.c[0]=0;g=O(l,r,0,1),1!=(i=n.plus(g.times(t))).comparedTo(e);)n=t,t=i,h=a.plus(g.times(i=h)),a=i,r=l.minus(g.times(i=r)),l=i;return i=O(e.minus(n),t,0,1),a=a.plus(i.times(h)),n=n.plus(i.times(t)),a.s=h.s=m.s,w=O(h,t,s*=2,U).minus(m).abs().comparedTo(O(a,n,s,U).minus(m).abs())<1?[h,t]:[a,n],M=f,w},P.toNumber=function(){return+Y(this)},P.toPrecision=function(e,r){return null!=e&&d(e,1,h),H(this,e,r,2)},P.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(null==e?r=i<=I||i>=T?v(p(n.c),i):N(p(n.c),i,"0"):10===e&&$?r=N(p((n=X(new z(n),L+i+1,U)).c),n.e,"0"):(d(e,2,j.length,"WORD_BASE"),r=y(N(p(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},P.valueOf=P.toJSON=function(){return Y(this)},P._isBigNumber=!0,null!=r&&z.set(r),z}(),r.default=r.BigNumber=r,"function"==typeof define&&define.amd?define((function(){return r})):"undefined"!=typeof module&&module.exports?module.exports=r:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=r)}(this);

/* PI (STRING) VALUE STORED HERE - EXCEEDS Math.Pi width limit */
const g_pi_string = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

/* number of decimal places expands when placed in a BigNumber object container */
const g_pi_object = BigNumber(g_pi_string);

/* number of decimal places preferred (not guaranteed) for numeric display */
const g_precision_preference = 20;

/* secondary parameter propertiers obtained from the geometric object */
const g_precision_secondary = 4;

/* resolution list of metrics from min to max */
const g_resolution =
{
    /* wavelengths of light resolution, "volumetric propagation rate" */
    Angstroms:"angstroms",

    /* nanotechnology */
    Nanometers:"nanometers",

    /* electronic engineering, small scale precision */
    Micrometers:"micrometers",

    /* construction, health, medicine, optics, aerospace */
    Millimeters:"millimeters",

    /* automotive, diy, piping systems */
    Centimeters:"centimeters",

    /* sewers, dams, large spacial prototypes */
    Meters:"meters"
};

/* language dataset */
let g_language_data = {};

/* iso-code (639-1) for language */
let g_lang;

/* user object */
let g_user;

/* this is used to delimit the operation */  
let g_operation_code = 0;

/* current tab index */
let g_tab_index = 0;

/* status flag */
let g_is_running = true;

/* surplus mappings */
let g_surplus_values = new Map();

/* volumetric datasets */
let g_volume_lists = new Map();

/* race condition flag to delay surplus additions upon pending deletions */
let g_surplus_add_cancel = false;

/* buffer string as and when required */
let g_meta_string = "";

/* init flag for event listeners */
let g_events_added = false;

/* socket data */
let g_socket_data = "";

/* flag for locking and unlocking workspace (io operations) */
let g_locked_workspace = false;

/* regional locale for image prefixes */
let g_image_prefix = "";

/* author time is used to signal whether a server 
   update may have passed thereby implying that a
   refresh by the recipient client may be necessary */
const g_author_time = Math.floor(Date.now()/1000)+86400;

/* delimitor constants */
const g_DELIMITOR_PRIORITY_5 = '~';
const g_DELIMITOR_PRIORITY_4 = '[]';
const g_DELIMITOR_PRIORITY_3 = '@';
const g_DELIMITOR_PRIORITY_2 = '#';
const g_DELIMITOR_PRIORITY_1 = ':';
const g_DELIMITOR_PRIORITY_0 = '=';

/* client-side delimitors for cloud io */
const g_ACCESS_MY_ACCOUNT = 100;
const g_VIEW_ACCOUNT_ICONS = 101;
const g_LOGIN_ACCOUNT = 102;
const g_SIGNOUT = 103;
const g_LOAD_SURPLUSES = 104;
const g_RETRY_SAVING_LIST = 105;
const g_ADD_SURPLUS_VOLUME = 106;
const g_QUERY_FILE_SEARCH = 107;
const g_PROCESS_SAVE_AS = 108;
const g_PROCESS_SAVE_TO_DB = 109;
const g_ADD_LIST_TAB = 110;
const g_RESET_LIST_DATA = 111;
const g_LOAD_FILE_FROM_DB = 112;
const g_OPEN_LIST = 113;
const g_RETRY_LOGIN = 114;
const g_FORGOT_PASSWD = 115;
const g_MAKE_NEW_ACCOUNT = 116;
const g_CHANGE_PASSWD = 117;
const g_CHECK_SUBSCRIPTION = 118;
const g_ADD_SUBSCRIPTION = 119;
const g_CANCEL_SUB = 120;
const g_RESUME_SUB = 121;
const g_REMOVE_VOLUME = 122;
const g_STATUS_CHECK = 123;
const g_LOAD_REMOTE_VOLUMES = 124;
const g_EXPORT_VOLUME = 125;
const g_SHOW_EXPORT_LINK = 127;
const g_REMOVE_SURPLUS_VOLUME = 128;
const g_POST_PREFERENCES = 129;
const g_QUERY_PREFERENCES = 130;
const g_EXPORT_VOLUME_TYPE = 131;
const g_QUERY_SUBSCRIPTION_STATUS = 132;
const g_CLOSE_LIST_UNSAVED = 133;
const g_QUERY_IS_PREMIUM = 134;

/* server poll every 3 minutes */
const g_SERVICE_CHECK_INTERVAL = 180000;

/* allow exportations for guest tier? */
let g_LOGIN_REQUIRED_FOR_EXPORT = false;

/* most guests will only need one */
let g_MAX_GUEST_VOLUMES = 100;

/* large spacial volumetric flow rates */
let g_MAX_NON_SUB_VOLUMES = 1000;

/* delimiters for geometric shapes */
const g_ADD_CYLINDER = 200;
const g_EDIT_CYLINDER = 201;
const g_ADD_CONE = 202;
const g_EDIT_CONE = 203;
const g_ADD_CAPSULE = 204;
const g_EDIT_CAPSULE = 205;
const g_ADD_PYRAMID = 206;
const g_EDIT_PYRAMID = 207;
const g_ADD_FRUSTUM = 208;
const g_EDIT_FRUSTUM = 209;
const g_ADD_CUBE = 210;
const g_EDIT_CUBE = 211;
const g_ADD_ELLIPSOID = 212;
const g_EDIT_ELLIPSOID = 213;
const g_ADD_RECT_TANK = 214;
const g_EDIT_RECT_TANK = 215;
const g_ADD_SPHERE = 216;
const g_EDIT_SPHERE = 217;
const g_ADD_SPHERICAL_CAP = 218;
const g_EDIT_SPHERICAL_CAP = 219;
const g_ADD_TRIANGULAR_PRISM = 220;
const g_EDIT_TRIANGULAR_PRISM = 221;
const g_ADD_TRAPEZOIDAL_PRISM = 222;
const g_EDIT_TRAPEZOIDAL_PRISM = 223;
const g_ADD_HEPTAGONAL_PRISM = 224;
const g_EDIT_HEPTAGONAL_PRISM = 225;
const g_ADD_HEXAGONAL_PRISM = 226;
const g_EDIT_HEXAGONAL_PRISM = 227;
const g_ADD_OCTAGONAL_PRISM = 228;
const g_EDIT_OCTAGONAL_PRISM = 229;
const g_ADD_PENTAGONAL_PRISM = 230;
const g_EDIT_PENTAGONAL_PRISM = 231;
const g_MODIFY_SCALING = 232;
const g_ADD_TRIANGULAR_PYRAMID = 233;
const g_EDIT_TRIANGULAR_PYRAMID = 234;
const g_ADD_HEPTAGONAL_PYRAMID = 235;
const g_EDIT_HEPTAGONAL_PYRAMID = 236;
const g_ADD_HEXAGONAL_PYRAMID = 237;
const g_EDIT_HEXAGONAL_PYRAMID = 238;
const g_ADD_OCTAGONAL_PYRAMID = 239;
const g_EDIT_OCTAGONAL_PYRAMID = 240;
const g_ADD_PENTAGONAL_PYRAMID = 241;
const g_EDIT_PENTAGONAL_PYRAMID = 242;
const g_ADD_STADIUM_FRUSTUM = 243;
const g_EDIT_STADIUM_FRUSTUM = 244;
const g_ADD_PYRAMID_FRUSTUM = 245;
const g_EDIT_PYRAMID_FRUSTUM = 246;
const g_ADD_BARREL = 247;
const g_EDIT_BARREL = 248;
const g_ADD_TORUS = 249;
const g_EDIT_TORUS = 250;

/* specific state functions for volume cc */
class VolumeCCApp
{
    /* cubic resolution to string */
    static cubic_resolution_to_str(resolution) {
        let resol_t = "&#8491;<sup>3</sup>";
        if (resolution == "nanometers")
            resol_t = "nm<sup>3</sup>";
        else if (resolution == "micrometers")
            resol_t = "&micro;m<sup>3</sup>";
        else if (resolution == "millimeters")
            resol_t = "mm<sup>3</sup>";
        else if (resolution == "centimeters")
            resol_t = "cm<sup>3</sup>";
        else if (resolution == "meters")
            resol_t = "m<sup>3</sup>";
        return resol_t;
    }
    /* resolution options */
    static default_option_resolution() {
        let default_t = `
        <option value="angstroms">`+ g_language_data[g_lang]["WORD_ANGSTROM"] +`</option>
        <option value="nanometers">`+ g_language_data[g_lang]["WORD_NANOMETER"] +`</option>
        <option value="micrometers">`+ g_language_data[g_lang]["WORD_MICROMETER"] +`</option>
        <option value="millimeters">`+ g_language_data[g_lang]["WORD_MILLIMETER"] +`</option>
        <option value="centimeters">`+ g_language_data[g_lang]["WORD_CENTIMETER"] +`</option>
        <option value="meters">`+ g_language_data[g_lang]["WORD_METER"] +`</option>
        `;
        default_t = default_t.replace('"'+VolumeCCApp.resolution()+'">', '"'+VolumeCCApp.resolution()+'" selected="selected">');
        return default_t;
    }
    /* word string to abbreviation */
    static linear_resolution_to_str(resolution) {
        let resol_t = "&#8491;";
        if (resolution == "nanometers")
            resol_t = "nm";
        else if (resolution == "micrometers")
            resol_t = "&micro;m";
        else if (resolution == "millimeters")
            resol_t = "mm";
        else if (resolution == "centimeters")
            resol_t = "cm";
        else if (resolution == "meters")
            resol_t = "m";
        return resol_t;
    }
    /* resolution id to value */
    static resolution_id_to_value(resolution_id) {
        let values = ['angstroms', 'nanometers', 'micrometers', 'millimeters', 'centimeters', 'meters'];
        return values[resolution_id];
    }
    /* resolution value to id */
    static resolution_value_to_id(resolution_value) {
        let values = ['angstroms', 'nanometers', 'micrometers', 'millimeters', 'centimeters', 'meters'];
        for ( let n = 0; n < values.length; n++ ) {
            if ( values[n] == resolution_value )
                return n;
        }
        return -1;
    }
    /* rounding id to value */
    static rounding_id_to_value(rounding_id) {
        let values = ['round-output-to-1dp', 'round-up-to-1dp', 'round-down-to-1dp', 'round-output-to-2dp', 'round-4dp'];
        return values[rounding_id];
    }
    /* rounding value to id */
    static rounding_value_to_id(rounding_value) {
        let values = ['round-output-to-1dp', 'round-up-to-1dp', 'round-down-to-1dp', 'round-output-to-2dp', 'round-4dp'];
        for ( let n = 0; n < values.length; n++ ) {
            if ( values[n] == rounding_value )
                return n;
        }
        return -1;
    }
    /* resolution */
    static resolution() {
        return document.querySelector('input[name="resolution"]:checked').value;
    }
    /* rounding */
    static rounding() {
        return document.querySelector('input[name="rounding-option"]:checked').value;
    }
    /* substrings for the scaling notification */
    static scale_substrings(s) {
        let sc = s < 0 ? " text-red" : (s < 1 ? " text-orange" : "");
        let st = s != 1 ? " ("+ s.toString() + "x)" : "";
        return [sc, st];
    }
}

/* common state functions */
class Nsl
{
    /* bytes to string representation */
    static bytes_to_string(bytes) {

        /* abbreviation array */
        let s = [' '+ g_language_data[g_lang]["WORD_BYTES"], ' kB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];

        /* map correct index to array */
        let i = Math.floor(Math.log(bytes) / Math.log(1024));

        /* yield string */
        return ((bytes / Math.pow(1024, i)).toFixed(i == 0 ? 0 : 2)).toString() + s[i];
    }
    /* return a limited string upto the limit defined by limit_t */
    static limit_string(string_t, limit_t) {
        if (string_t.length <= limit_t || limit_t <= 3)
            return string_t;
        return string_t.substr(0, limit_t - 3) + '...';
    }
    /* tests the strength of a password */
    static passwd_strength(passwd_t) {
        let s_passwd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        let m_passwd = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
        if ( s_passwd.test(passwd_t) )
            return "#3CB371";
        else if ( m_passwd.test(passwd_t) )
            return "#4169E1";
        else
            return "#CD5C5C";
    }
    /* rounds numeric to a degree of precision */
    static round(value, precision) {
        let t = BigNumber(value).toFixed(precision);
        return BigNumber(t).toNumber();
    }
    /* sleep for ms time interval then resume */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /* yields a standard date given a timestamp */
    static ts_to_std_date(ts) {
        const date_object = new Date(ts * 1000);
        let date_integer = parseInt(date_object.getDate());
        if (date_integer < 10)
            date_integer = '0' + date_integer.toString();
        let month_integer = parseInt(date_object.getMonth()) + 1;
        if (month_integer < 10)
            month_integer = '0' + month_integer.toString();
        return date_object.getFullYear() + '-' + month_integer + '-' + date_integer;
    }
}

/* nsl prompt object */
class NslPrompt
{
    /* constructor */
    constructor(underlay) {
        this.underlay = underlay;
        this.titleText = "";
        this.messageText = "";
        this.buttonLabels = null;
        this.operationCode = 0;
        this.metaDataString = "";
        this.visible = false;
        this.indexUponEnter = -1;
    }
    /* add button */
    addButton(buttonText, enterKey = false) {
        if (this.buttonLabels == null) {
            this.buttonLabels = [buttonText];
            if ( enterKey )
                this.indexUponEnter = 0;
            return;
        }
        this.buttonLabels.push(buttonText);
        if ( enterKey )
            this.indexUponEnter = this.buttonLabels.length-1;
    }
    /* number of buttons */
    buttonCount() {
        if (this.buttonLabels == null)
            return 0;
        return this.buttonLabels.length;
    }
    /* button text */
    buttonText(index) {
        return this.buttonLabels[index];
    }
    /* clear */
    clear() {
        this.titleText = "";
        this.messageText = "";
        this.buttonLabels = null;
        this.operationCode = -1;
        this.metaDataString = "";
        this.indexUponEnter = -1;
    }
    /* hide */
    hide() {
        document.getElementById(this.underlay).style.opacity = "1.0";
        document.getElementById('nsl-prompt').style.display = "none";
        document.getElementById('nsl-prompt-value').value = "";
        this.visible = false;
    }
    /* index thru enter key */
    indexViaEnterKey() {
        return this.indexUponEnter;
    }
    /* input value */
    inputValue() {
        return document.getElementById('nsl-prompt-value').value;
    }
    /* message */
    message() {
        return this.messageText;
    }
    /* meta data */
    metaData() {
        return this.metaDataString;
    }
    /* operation code */
    operation() {
        return this.operationCode;
    }
    /* set title */
    setTitle(title) {
        this.titleText = title;
    }
    /* set message */
    setMessage(message) {
        this.messageText = message;
    }
    /* set meta data */
    setMetadata(metaData) {
        this.metaDataString = metaData;
    }
    /* set operation code */
    setOperation(operationCode) {
        this.operationCode = operationCode;
    }
    /* show dialog */
    show(showInput = false) {
        this.visible = true;
        document.getElementById('nsl-prompt-button-0').style.display = "none";
        document.getElementById('nsl-prompt-button-1').style.display = "none";
        document.getElementById('nsl-prompt-button-2').style.display = "none";
        document.getElementById('nsl-prompt-input').style.display = "none";
        let bc = this.buttonCount();
        for ( let n = 0; n < bc; n++ ) {
            document.getElementById('nsl-prompt-button-' + Number(n).toString()).innerHTML = this.buttonLabels[n];
            document.getElementById('nsl-prompt-button-' + Number(n).toString()).style.display = "block";
        }
        document.getElementById('nsl-prompt-title').innerHTML = this.title();
        document.getElementById('nsl-prompt-message').innerHTML = this.message();
        document.getElementById(this.underlay).style.opacity = "0.5";
        document.getElementById('nsl-prompt').style.display = "flex";
        if ( showInput ) {
            document.getElementById('nsl-prompt-input').style.display = "block";
            document.getElementById('nsl-prompt-value').focus();
        }
        set_window_position();
    }
    /* title */
    title() {
        return this.titleText;
    }
    /* remove buttons */
    removeButtons() {
        this.buttonLabels = null;
    }
    /* underlay id */
    underlayId() {
        return this.underlay;
    }
    /* is_visible */
    is_visible() {
        return this.visible;
    }
}

/* radio button */
class RadioButton
{
    /* select via value */
    static SelectViaValue(nameProperty, value) {
        let radios = document.getElementsByName(nameProperty);
        for (let n = 0, len = radios.length; n < len; n++) {
            if (radios[n].value == value) {
                radios[n].checked = true;
                return true;
        }}
        return false;
    }
}

/* tabbed navigation */
class TabNavigation
{
    /* insert tab */
    static add(title) {
        TabNavigation.defocus();
        g_tab_index++;
        var index_t = g_tab_index;
        var ntab = document.createElement("div");
        var ntab_text = document.createElement("div");
        var ntab_xbutton = document.createElement("div");
        ntab.id = "tab-" + index_t.toString();
        ntab.className = "navigation-tab";
        ntab_text.id = "tab-text-" + index_t.toString();
        ntab_text.className = "navigation-tab-text navigation-tab-active";
        ntab_text.onclick = function () { TabNavigation.focus(index_t); }
        ntab_xbutton.className = "navigation-tab-exit-button";
        ntab_xbutton.onclick = function () { close_list(index_t); }
        ntab_text.innerText = title;
        ntab_xbutton.innerText = "X";
        ntab.appendChild(ntab_text);
        ntab.appendChild(ntab_xbutton);
        var entry = document.getElementById("navigation-tabs");
        entry.appendChild(ntab);
    }
    /* count tabs */
    static count_open_tabs() {
        return document.getElementsByClassName("navigation-tab").length;
    }
    /* set class name */
    static defocus() {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++)
            elements[n].className = "navigation-tab-text";
    }
    /* get descriptors list */
    static get_descriptors_list() {
        let descriptors = [];
        let elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++)
            descriptors.push(elements[n].innerText);
        return descriptors;
    }
    /* get active tab */
    static get_active_tab() {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++) {
            if (elements[n].className.indexOf("navigation-tab-active") != -1)
                return elements[n].innerText;
        }
        return null;
    }
    /* get active index */
    static get_active_index() {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++) {
            if (elements[n].className.indexOf("navigation-tab-active") != -1) {
                return parseInt(elements[n].id.substr(9));
            }
        }
        return 0;
    }
    /* get text */
    static get_text(index) {
        let element = document.getElementById('tab-text-' + index.toString());
        return element.innerHTML;
    }
    /* index of descriptor (-1 if not evident) */
    static index_of(descriptor) {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++) {
            if (elements[n].innerText.toLowerCase() == descriptor.toLowerCase())
                return n;
        }
        return -1;
    }
    /* descriptor exists in tab list? */
    static has_title(descriptor) {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++) {
            if (elements[n].innerText.toLowerCase() == descriptor.toLowerCase())
                return true;
        }
        return false;
    }
    /* rename the tab */
    static rename(newText) {
        let index = TabNavigation.get_active_index();
        document.getElementById('tab-text-' + index).innerHTML = newText;
    }
    /* reset the tab */
    static reset(index, default_tab_parameter) {
        var tabWithTitle = document.getElementById("tab-text-" + index.toString());
        tabWithTitle.innerText = default_tab_parameter;
        display_volume_list();
    }
    /* set focus */
    static focus(index) {
        TabNavigation.defocus();
        var element = document.getElementById("tab-text-" + index.toString());
        element.className = "navigation-tab-text navigation-tab-active";
        display_volume_list();
    }
    /* set refocus */
    static refocus() {
        var elements = document.getElementsByClassName("navigation-tab-text");
        for (var n = 0; n < elements.length; n++)
            elements[n].className = "navigation-tab-text";
        elements[elements.length - 1].className = "navigation-tab-text navigation-tab-active";
        display_volume_list();
    }
    /* close the tab */
    static close(index, default_tab_parameter) {
        if (TabNavigation.count_open_tabs() == 1) {
            TabNavigation.reset(index, default_tab_parameter);
            TabNavigation.refocus();
            return;
        }
        document.getElementById("tab-" + index.toString()).remove();
        TabNavigation.refocus();
    }
}

/* server side get/set */
class WebClient
{
    /* get data pay load from server-side */
    static get(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
    /* set data pay load from client-side */
    static post(url, callback, body) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(body);
    }
}

/* transform measurement metric resolutions */
class ResolutionSolver
{
    /* cubic transform, move along the spacial resolution */
    static cubic_transform(value, from, to)
    {
        value = BigNumber(value);
        let value_t = BigNumber(0);
        if (from === "angstroms")
            value_t = value;
        else if (from === "nanometers")
            value_t = value.multipliedBy(BigNumber("1000"));
        else if (from === "micrometers")
            value_t = value.multipliedBy(BigNumber("1000000000000"));
        else if (from === "millimeters")
            value_t = value.multipliedBy(BigNumber("1000000000000000000000"));
        else if (from === "centimeters")
            value_t = value.multipliedBy(BigNumber("1000000000000000000000000"));
        else
            value_t = value.multipliedBy(BigNumber("1000000000000000000000000000000"));
        if (to === "angstroms")
            return value_t;
        if (to === "nanometers")
            return value_t.dividedBy(BigNumber("1000"));
        if (to === "micrometers")
            return value_t.dividedBy(BigNumber("1000000000000"));
        if (to === "millimeters")
            return value_t.dividedBy(BigNumber("1000000000000000000000"));
        if (to === "centimeters")
            return value_t.dividedBy(BigNumber("1000000000000000000000000"));
        return value_t.dividedBy(BigNumber("1000000000000000000000000000000"));
    }
    /* linear transform, move along the slider */
    static linear_transform(value, from, to)
    {
        value = BigNumber(value);
        let value_t = BigNumber(0);
        if (from === "angstroms")
            value_t = value;
        else if (from === "nanometers")
            value_t = value.multipliedBy(BigNumber("10"));
        else if (from === "micrometers")
            value_t = value.multipliedBy(BigNumber("10000"));
        else if (from === "millimeters")
            value_t = value.multipliedBy(BigNumber("10000000"));
        else if (from === "centimeters")
            value_t = value.multipliedBy(BigNumber("100000000"));
        else if (from === "meters")
            value_t = value.multipliedBy(BigNumber("10000000000"));
        if (to === "angstroms")
            return Nsl.round(value_t, g_precision_preference);
        if (to === "nanometers")
            return Nsl.round(value_t.dividedBy(BigNumber("10")), g_precision_preference);
        if (to === "micrometers")
            return Nsl.round(value_t.dividedBy(BigNumber("10000")), g_precision_preference);
        if (to === "millimeters")
            return Nsl.round(value_t.dividedBy(BigNumber("10000000")), g_precision_preference);
        if (to === "centimeters")
            return Nsl.round(value_t.dividedBy(BigNumber("100000000")), g_precision_preference);
        if (to === "meters")
            return Nsl.round(value_t.dividedBy(BigNumber("10000000000")), g_precision_preference);
        return -1;
    }
}

/*  list of volumetric constants to signal the object type
    https://github.com/william-j1/volume_cc_data_format */
const VOLUMES = 
{
    /*  not used */
    Arbitrary: "0",

    /*  barrel, often a shell for an internal cylinder or capsule container */
    Barrel: "1",

    /*  dissolvable medical dosage container, cylinder with 1/2 of a sphere attached to each end */
    Capsule: "2",

    /*  an exhaust velocity vector _before_ its cut */
    Cone: "3",

    /*  a primitive cut cone designed exhaust velocity before flow vector 
        consideration can be improved with a curvature vent - catering and 
        funneling in drainage */
    ConicalFrustum: "4",

    /*  typical cube without curved corners, if curved corners were necessary: 1/8 
        of a sphere appended with rectangular tanks to redefine the cube like object */
    Cube: "5",

    /*  cylindrical object with each end measurement point sharing an equal euclidean distance */
    Cylinder: "6",

    /*  a deformed sphere, the internal space of a banjo or an inflatable sphere (ball) 
        which has began naturally depressurising due to temperature flux causing wear and 
        tear (due to expansion and contraction) on the seal valve */
    Ellipsoid: "7",

    /*  cosmetic, aesthetic, art, sculpture and threading type heads (screwing) appended 
        onto cylindrical shells */
    HeptagonalPrism: "8",
    HeptagonalPyramid: "9",
    HexagonalPrism: "10",
    HexagonalPyramid: "11",
    OctagonalPrism: "12",
    OctagonalPyramid: "13",
    PentagonalPrism: "14",
    PentagonalPyramid: "15",
    RectangularPyramid: "16",

    /*  towers, chimneys */
    PyramidFrustum: "17",

    /*  commercial fish tanks, corridor planning */
    RectangularTank: "18",

    /*  fully inflated soccer ball, single celled organisms... (example: cocci bacteria) */
    Sphere: "19",

    /*  a portion of a sphere where the original radius maybe unknown */
    SphericalCap: "20",

    /*  bath tub approximations, optical light focus frustum */
    StadiumFrustum: "21",

    /*  user defined */
    Surplus: "22",

    /*  terrain modelling, enclosures and casings for electronic devices */
    TrapezoidalPrism: "23",

    /*  roof trusses, light refraction and dispersion in optical devices */
    TriangularPrism: "24",

    /*  rocket nose cones, minimise air resistance and drag */
    TriangularPyramid: "25",

    /*  complex piping and routing */
    Torus: "26"
}

/* volumetric object */
class Volumetric
{
    constructor(label) {
        this.m_label = label;
    }
    equals(object_t) {
        return JSON.stringify(this) === JSON.stringify(object_t);
    }
    label() {
        return this.m_label.toString();
    }
    type() {
        return VOLUMES.Arbitrary;
    }
}

/* barrel object */
class Barrel extends Volumetric
{
    constructor(label, height, edia, mdia) {
        super(label);
        this.m_edia = BigNumber(edia);
        this.m_mdia = BigNumber(mdia);
        this.m_height = BigNumber(height);
    }
    eDiameter() {
        return this.m_edia;
    }
    mDiameter() {
        return this.m_mdia;
    }
    height() {
        return this.m_height;
    }
    setEDiameter(edia) {
        this.m_edia = edia;
    }
    setMDiameter(mdia) {
        this.m_mdia = mdia;
    }
    setHeight(height) {
        this.m_height = height;
    }
    type() {
        return VOLUMES.Barrel;
    }
    volume() {
        const pi = g_pi_object;
        const height = BigNumber(this.m_height);
        const edia = BigNumber(this.m_edia);
        const mdia = BigNumber(this.m_mdia);
        const t1 = edia.exponentiatedBy(BigNumber(2));
        const t2 = t1.dividedBy(BigNumber(4));
        const t3 = mdia.exponentiatedBy(BigNumber(2));
        const t4 = t3.dividedBy(BigNumber(2));
        const t5 = t2.plus(t4);
        const t6 = t5.dividedBy(BigNumber(3));
        const t7 = height.multipliedBy(t6);
        return pi.multipliedBy(t7);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const e_diameter = ResolutionSolver.linear_transform(this.m_edia, g_resolution.Millimeters, resolution);
        const m_diameter = ResolutionSolver.linear_transform(this.m_mdia, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + height + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + e_diameter + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + m_diameter + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Barrel + ":" + btoa(this.m_label) + ":" + this.m_height.toString() + ":" + this.m_edia.toString() + ":" + this.m_mdia.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Barrel(atob(values[1]), values[2], values[3], values[4]);
    }
}

/* capsule object */
class Capsule extends Volumetric
{
    constructor(label, radius, height) {
        super(label);
        this.m_radius = BigNumber(radius);
        this.m_height = BigNumber(height);
    }
    radius() {
        return this.m_radius;
    }
    height() {
        return this.m_height;
    }
    type() {
        return VOLUMES.Capsule;
    }
    volume() {
        const radius = BigNumber(this.m_radius);
        const height = BigNumber(this.m_height);
        const pi = g_pi_object;
        const t1 = radius.exponentiatedBy(BigNumber(2));
        const t2 = t1.multipliedBy(height);
        const t3 = pi.multipliedBy(t2);
        const t4 = radius.exponentiatedBy(BigNumber(3));
        const t5 = pi.multipliedBy(t4);
        const t6 = BigNumber(4).dividedBy(BigNumber(3)).multipliedBy(t5);
        return t3.plus(t6);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const radius = ResolutionSolver.linear_transform(this.m_radius, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + radius + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + height + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Capsule + ":" + btoa(this.m_label) + ":" + this.m_radius.toString() + ":" + this.m_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Capsule(atob(values[1]), values[2], values[3]);
    }
}

/* cone object */
class Cone extends Volumetric
{
    constructor(label, radius, height) {
        super(label);
        this.m_radius = BigNumber(radius);  
        this.m_height = BigNumber(height);
    }
    radius() {
        return this.m_radius;
    }
    height() {
        return this.m_height;
    }
    type() {
        return VOLUMES.Cone;
    }
    volume() {
        const re = BigNumber(this.m_radius).exponentiatedBy(BigNumber(2));
        const hd = BigNumber(this.m_height).dividedBy(BigNumber(3));
        const pi = g_pi_object;
        return pi.multipliedBy(re.multipliedBy(hd));
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const radius = ResolutionSolver.linear_transform(this.m_radius, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const t1 = BigNumber(radius).exponentiatedBy(BigNumber(2));
        const t2 = BigNumber(height).exponentiatedBy(BigNumber(2));
        const t3 = t1.plus(t2);
        const slant = Nsl.round(t3.squareRoot(), g_precision_secondary);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + radius + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + height + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + slant + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Cone + ":" + btoa(this.m_label) + ":" + this.m_radius.toString() + ":" + this.m_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Cone(atob(values[1]), values[2], values[3]);
    }
}

/* cylinder object */
class Cylinder extends Volumetric
{
    constructor(label, inner_dia, length) {
        super(label);
        this.m_inner_dia = BigNumber(inner_dia);
        this.m_length = BigNumber(length);
    }
    innerDiameter() {
        return this.m_inner_dia;
    }
    length() {
        return this.m_length;
    }
    type() {
        return VOLUMES.Cylinder;
    }
    volume() {
        const radius = BigNumber(this.m_inner_dia).dividedBy(BigNumber(2));
        const length = BigNumber(this.m_length);
        const pi = g_pi_object;
        const exp = BigNumber(2);
        return pi.multipliedBy(radius.exponentiatedBy(exp)).multipliedBy(length);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const inner_t = ResolutionSolver.linear_transform(this.m_inner_dia, g_resolution.Millimeters, resolution);
        const length_t = ResolutionSolver.linear_transform(this.m_length, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + inner_t + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + length_t + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Cylinder + ":" + btoa(this.m_label) + ":" + this.m_inner_dia.toString() + ":" + this.m_length.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Cylinder(atob(values[1]), values[2], values[3]);
    }
}

/* cube frustum object */
class Cube extends Volumetric
{
    constructor(label, edge_length) {
        super(label);
        this.m_edge_length = BigNumber(edge_length);
    }
    edgeLength() {
        return this.m_edge_length;
    }
    setEdgeLength(edge_length) {
        this.m_edge_length = edge_length;
    }
    type() {
        return VOLUMES.Cube;
    }
    volume() {
        return BigNumber(this.m_edge_length).exponentiatedBy(BigNumber(3));
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const edge_length = ResolutionSolver.linear_transform(this.m_edge_length, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + edge_length + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Cube + ":" + btoa(this.m_label) + ":" + this.m_edge_length.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Cube(atob(values[1]), values[2]);
    }
}

/* conical frustum object */
class ConicalFrustum extends Volumetric
{
    constructor(label, top_radius, bottom_radius, height) {
        super(label);
        this.m_top_radius = BigNumber(top_radius);
        this.m_bottom_radius = BigNumber(bottom_radius);
        this.m_height = BigNumber(height);
    }
    topRadius() {
        return this.m_top_radius;
    }
    bottomRadius() {
        return this.m_bottom_radius;
    }
    height() {
        return this.m_height;
    }
    setTopRadius(top_radius) {
        this.m_top_radius = top_radius;
    }
    setBottomRadius(bottom_radius) {
        this.m_bottom_radius = bottom_radius;
    }
    setHeight(height) {
        this.m_height = height;
    }
    type() {
        return VOLUMES.ConicalFrustum;
    }
    volume() {
        const pi = g_pi_object;
        const h = BigNumber(this.m_height);
        const t1 = BigNumber(this.m_top_radius).exponentiatedBy(BigNumber(2));
        const t2 = BigNumber(this.m_bottom_radius).multipliedBy(BigNumber(this.m_top_radius));
        const t3 = BigNumber(this.m_bottom_radius).exponentiatedBy(BigNumber(2));
        const t4 = t3.plus(t2.plus(t1));
        const t5 = h.multipliedBy(t4);
        const t6 = pi.multipliedBy(t5);
        return BigNumber(BigNumber(1).dividedBy(BigNumber(3))).multipliedBy(t6);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const top_radius = ResolutionSolver.linear_transform(this.m_top_radius, g_resolution.Millimeters, resolution);
        const bottom_radius = ResolutionSolver.linear_transform(this.m_bottom_radius, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + top_radius + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + bottom_radius + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ height + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.ConicalFrustum + ":" + btoa(this.m_label) + ":" + this.m_top_radius.toString() + ":" + this.m_bottom_radius.toString() + ":" + this.m_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new ConicalFrustum(atob(values[1]), values[2], values[3], values[4]);
    }
}

/* ellipsoid object */
class Ellipsoid extends Volumetric
{
    constructor(label, axis_a, axis_b, axis_c) {
        super(label);
        this.m_axis_a = BigNumber(axis_a);
        this.m_axis_b = BigNumber(axis_b);
        this.m_axis_c = BigNumber(axis_c);
    }
    axisA() {
        return this.m_axis_a;
    }
    axisB() {
        return this.m_axis_b;
    }
    axisC() {
        return this.m_axis_c;
    }
    setAxisA(axis_a) {
        this.m_axis_a = axis_a;
    }
    setAxisB(axis_b) {
        this.m_axis_b = axis_b;
    }
    setAxisC(axis_c) {
        this.m_axis_c = axis_c;
    }
    type() {
        return VOLUMES.Ellipsoid;
    }
    volume() {
        const pi = g_pi_object;
        const a = BigNumber(this.m_axis_a);
        const b = BigNumber(this.m_axis_b);
        const c = BigNumber(this.m_axis_c);
        const t1 = BigNumber(BigNumber(4).dividedBy(3)).multipliedBy(pi);
        return t1.multipliedBy(a).multipliedBy(b).multipliedBy(c);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const axis_a = ResolutionSolver.linear_transform(this.m_axis_a, g_resolution.Millimeters, resolution);
        const axis_b = ResolutionSolver.linear_transform(this.m_axis_b, g_resolution.Millimeters, resolution);
        const axis_c = ResolutionSolver.linear_transform(this.m_axis_c, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + axis_a + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + axis_b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ axis_c + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Ellipsoid + ":" + btoa(this.m_label) + ":" + this.m_axis_a.toString() + ":" + this.m_axis_b.toString() + ":" + this.m_axis_c.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Ellipsoid(atob(values[1]), values[2], values[3], values[4]);
    }
}

/* pyramid object */
class RectangularPyramid extends Volumetric
{
    constructor(label, base_length, base_width, apex_height) {
        super(label);
        this.m_base_length = BigNumber(base_length);
        this.m_base_width = BigNumber(base_width);
        this.m_apex_height = BigNumber(apex_height);
    }
    baseLength() {
        return this.m_base_length;
    }
    baseWidth() {
        return this.m_base_width;
    }
    pyramidHeight() {
        return this.m_apex_height;
    }
    setBaseLength(base_length) {
        this.m_base_length = base_length;
    }
    setBaseWidth(base_width) {
        this.m_base_width = base_width;
    }
    setPyramidHeight(apex_height) {
        this.m_apex_height = apex_height;
    }
    type() {
        return VOLUMES.RectangularPyramid;
    }
    volume() {
        const bl = BigNumber(this.m_base_length);
        const bw = BigNumber(this.m_base_width);
        const ph = BigNumber(this.m_apex_height);
        return BigNumber(bl.multipliedBy(bw).multipliedBy(ph)).dividedBy(BigNumber(3));
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const length = ResolutionSolver.linear_transform(this.m_base_length, g_resolution.Millimeters, resolution);
        const width = ResolutionSolver.linear_transform(this.m_base_width, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_apex_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+ scaling_t[0] +`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + length + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + width + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ height + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.RectangularPyramid + ":" + btoa(this.m_label) + ":" + this.m_base_length.toString() + ":" + this.m_base_width.toString() + ":" + this.m_apex_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new RectangularPyramid(atob(values[1]), values[2], values[3], values[4]);
    }
}

/* pyramidic frustum */
class PyramidFrustum extends Volumetric
{
    constructor(label, bottom_length, bottom_depth, height, top_length, top_depth) {
        super(label);
        this.m_bottom_length = BigNumber(bottom_length);
        this.m_bottom_depth = BigNumber(bottom_depth);
        this.m_top_length = BigNumber(top_length);
        this.m_top_depth = BigNumber(top_depth);
        this.m_height = BigNumber(height);
    }
    length() {
        return this.m_bottom_length;
    }
    depth() {
        return this.m_bottom_depth;
    }
    valuep() {
        return this.m_top_length;
    }
    valueq() {
        return this.m_top_depth;
    }
    height() {
        return this.m_height;
    }
    setLength(bottom_length) {
        this.m_bottom_length = bottom_length;
    }
    setDepth(bottom_depth) {
        this.m_bottom_depth = bottom_depth;
    }
    setValuep(top_length) {
        this.m_top_length = top_length;
    }
    setValueq(top_depth) {
        this.m_top_depth = top_depth;
    }
    setHeight(height) {
        this.m_height = height;
    }
    type() {
        return VOLUMES.PyramidFrustum;
    }
    volume() {
        const tl = BigNumber(this.m_top_length);
        const td = BigNumber(this.m_top_depth);
        const bl = BigNumber(this.m_bottom_length);
        const bd = BigNumber(this.m_bottom_depth);
        const h3 = BigNumber(this.m_height).dividedBy(BigNumber(3));
        const t1 = tl.multipliedBy(td);
        const t2 = bl.multipliedBy(bd).multipliedBy(tl).multipliedBy(td);
        const t3 = t2.squareRoot();
        const t4 = bl.multipliedBy(bd);
        const t5 = t1.plus(t3).plus(t4);
        return h3.multipliedBy(t5);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const bottom_length = ResolutionSolver.linear_transform(this.m_bottom_length, g_resolution.Millimeters, resolution);
        const bottom_depth = ResolutionSolver.linear_transform(this.m_bottom_depth, g_resolution.Millimeters, resolution);
        const top_length = ResolutionSolver.linear_transform(this.m_top_length, g_resolution.Millimeters, resolution);
        const top_depth = ResolutionSolver.linear_transform(this.m_top_depth, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + bottom_length + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + bottom_depth + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ height + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ top_length + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ top_depth + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.PyramidFrustum + ":" + btoa(this.m_label) + ":" + this.m_bottom_lLength.toString() + ":" + this.m_bottom_depth.toString() + ":" + this.m_height.toString() + ":" + this.m_top_length.toString() + ":" + this.m_top_depth.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new PyramidFrustum(atob(values[1]), values[2], values[3], values[4], values[5], values[6]);
    }
}

/* rectangular tank */
class RectangularTank extends Volumetric
{
    constructor(label, length, width, height) {
        super(label);
        this.m_length = BigNumber(length);
        this.m_width = BigNumber(width);
        this.m_height = BigNumber(height);
    }
    length() {
        return this.m_length;
    }
    width() {
        return this.m_width;
    }
    height() {
        return this.m_height;
    }
    setLength(length) {
        this.m_length = length;
    }
    setWidth(width) {
        this.m_width = width;
    }
    setHeight(height) {
        this.m_height = height;
    }
    type() {
        return VOLUMES.RectangularTank;
    }
    volume() {
        const l = BigNumber(this.m_length);
        const w = BigNumber(this.m_width);
        const h = BigNumber(this.m_height);
        return l.multipliedBy(w).multipliedBy(h);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const length = ResolutionSolver.linear_transform(this.m_length, g_resolution.Millimeters, resolution);
        const width = ResolutionSolver.linear_transform(this.m_width, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + length + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + width + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ height + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.RectangularTank + ":" + btoa(this.m_label) + ":" + this.m_length.toString() + ":" + this.m_width.toString() + ":" + this.m_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new RectangularTank(atob(values[1]), values[2], values[3], values[4]);
    }
}

/* sphere object */
class Sphere extends Volumetric
{
    constructor(label, radius) {
        super(label);
        this.m_radius = BigNumber(radius);
    }
    radius() {
        return this.m_radius;
    }
    setRadius(radius) {
        this.m_radius = radius;
    }
    type() {
        return VOLUMES.Sphere;
    }
    volume() {
        const pi = g_pi_object;
        const t1 = BigNumber(this.m_radius).exponentiatedBy(BigNumber(3));
        const t2 = BigNumber(BigNumber(4).dividedBy(BigNumber(3))).multipliedBy(pi);
        return t2.multipliedBy(t1);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const radius = ResolutionSolver.linear_transform(this.m_radius, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + radius + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.Sphere + ":" + btoa(this.m_label) + ":" + this.m_radius.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Sphere(atob(values[1]), values[2]);
    }
}

/* spherical cap */
class SphericalCap extends Volumetric
{
    constructor(label, base_radius, height) {
        super(label);
        this.m_base_radius = BigNumber(base_radius);
        this.m_height = BigNumber(height);
    }
    baseRadius() {
        return this.m_base_radius;
    }
    height() {
        return this.m_height;
    }
    setBaseRadius(base_radius) {
        this.m_base_radius = base_radius;
    }
    setHeight(height) {
        this.m_height = height;
    }
    type() {
        return VOLUMES.SphericalCap;
    }
    volume() {
        const two = BigNumber("2");
        const h = BigNumber(this.m_height);
        const br = BigNumber(this.m_base_radius);
        const pi = g_pi_object;
        const t1 = BigNumber(BigNumber("1").dividedBy(BigNumber("6")));
        const t2 = pi.multipliedBy(h);
        const t3 = BigNumber("3");
        const t4 = t3.multipliedBy(br.exponentiatedBy(two));
        const t5 = h.exponentiatedBy(two);
        return t1.multipliedBy(t2).multipliedBy(t4.plus(t5));
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const base_radius = ResolutionSolver.linear_transform(this.m_base_radius, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const tw = BigNumber("2");
        const br = BigNumber(base_radius).exponentiatedBy(tw);
        const h2 = BigNumber(height).exponentiatedBy(tw);
        const hx2 = tw.multipliedBy(BigNumber(height));
        const sphere_radius = Nsl.round(BigNumber(br.plus(h2)).dividedBy(hx2), g_precision_secondary);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + base_radius + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ sphere_radius + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">` + height + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.SphericalCap + ":" + btoa(this.m_label) + ":" + this.m_base_radius.toString() + ":" + this.m_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new SphericalCap(atob(values[1]), values[2], values[3]);
    }
}

/* stadium frustum */
class StadiumFrustum extends Volumetric 
{
    constructor(label, ul, uw, ll, lw, h) {
        super(label);
        this.m_ul = BigNumber(ul);
        this.m_uw = BigNumber(uw);
        this.m_ll = BigNumber(ll);
        this.m_lw = BigNumber(lw);
        this.m_h = BigNumber(h);
        this.volume();
    }
    upperLength() {
        return this.m_ul;
    }
    upperWidth() {
        return this.m_uw;
    }
    lowerLength() {
        return this.m_ll;
    }
    lowerWidth() {
        return this.m_lw;
    }
    height() {
        return this.m_h;
    }
    setUpperLength(ul) {
        this.m_ul = ul;
    }
    setUpperWidth(uw) {
        this.m_uw = uw;
    }
    setLowerLength(ll) {
        this.m_ll = ll;
    }
    setLowerWidth(lw) {
        this.m_lw = lw;
    }
    setHeight(h) {
        this.m_h = h;
    }
    type() {
        return VOLUMES.StadiumFrustum;
    }
    volume()
    {
        let ul = this.m_ul;
        let uw = this.m_uw;
        let ll = this.m_ll;
        let lw = this.m_ul;

        if (ul && uw && ll)
            lw = ll.dividedBy(ul).multipliedBy(uw);
	    else if (ul && uw && lw)
            ll = ul.dividedBy(uw).multipliedBy(lw);
	    else if(ul && ll && lw)
            uw = ul.dividedBy(ll).multipliedBy(lw);
	    else if(uw && ll && lw)
            ul = ll.dividedBy(lw).multipliedBy(uw);

        this.m_ul = ul;
        this.m_uw = uw;
        this.m_ll = ll;
        this.m_lw = lw;
        uw = BigNumber(uw);
        ul = BigNumber(ul);
        ll = BigNumber(ll);
        lw = BigNumber(lw);
        const pi = g_pi_object;
        const two = BigNumber(2);
        const h = BigNumber(this.m_h);
        const uwd2 = uw.dividedBy(two);
        const uluw = ul.minus(uw);
        const r1 = two.multipliedBy(uluw);
        const r2 = pi.multipliedBy(uwd2);
        const rs1 = r1.plus(r2);
        const f = uwd2.multipliedBy(rs1);
        const lwd2 = lw.dividedBy(two);
        const lllw = ll.minus(lw);
        const r3 = two.multipliedBy(lllw);
        const r4 = pi.multipliedBy(lwd2);
        const rs2 = r3.plus(r4);
        const g = lwd2.multipliedBy(rs2);
        const h3 = h.dividedBy(BigNumber(3));
        const t3 = BigNumber(f.multipliedBy(g)).squareRoot();
        const v = h3.multipliedBy(f.plus(g).plus(t3));
        return v.isLessThan(BigNumber(0)) ? v.multipliedBy(BigNumber(-1)) : v;
    }
    toHtml(resolution, scale = 1.0)
    {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const ul = ResolutionSolver.linear_transform(this.m_ul, g_resolution.Millimeters, resolution);
        const uw = ResolutionSolver.linear_transform(this.m_uw, g_resolution.Millimeters, resolution);
        const ll = ResolutionSolver.linear_transform(this.m_ll, g_resolution.Millimeters, resolution);
        const lw = ResolutionSolver.linear_transform(this.m_lw, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + ul + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ uw + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">` + ll + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + lw + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + h + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.StadiumFrustum + ":" + btoa(this.m_label) + ":" + this.m_ul.toString() + ":" + this.m_uw.toString() + ":" + this.m_ll.toString() + ":" + this.m_lw.toString() + ":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new StadiumFrustum(atob(values[1]), values[2], values[3], values[4], values[5], values[6]);
    }
}

/* trapezoidal prism */
class TrapezoidalPrism extends Volumetric
{
    constructor(label, p, q, h, d) {
        super(label);
        this.m_p = BigNumber(p);
        this.m_q = BigNumber(q);
        this.m_h = BigNumber(h);
        this.m_d = BigNumber(d);
    }
    top() {
        return this.m_p;
    }
    bottom() {
        return this.m_q;
    }
    height() {
        return this.m_h;
    }
    depth() {
        return this.m_d;
    }
    setTop(p) {
        this.m_p = p;
    }
    setBottom(q) {
        this.m_q = q;
    }
    setHeight(height) {
        this.m_h = height;
    }
    setDepth(depth) {
        this.m_d = depth;
    }
    type() {
        return VOLUMES.TrapezoidalPrism;
    }
    volume() {
        const half = BigNumber(0.5);
        const p = BigNumber(this.m_p);
        const q = BigNumber(this.m_q);
        const h = BigNumber(this.m_h);
        const d = BigNumber(this.m_d);
        return half.multipliedBy(p.plus(q)).multipliedBy(h).multipliedBy(d);
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const p = ResolutionSolver.linear_transform(this.m_p, g_resolution.Millimeters, resolution);
        const q = ResolutionSolver.linear_transform(this.m_q, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const d = ResolutionSolver.linear_transform(this.m_d, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + p + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ q + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">` + h + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">` + d + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    toString() {
        return VOLUMES.TrapezoidalPrism + ":" + btoa(this.m_label) + ":" + this.m_p.toString() + ":" + this.m_q.toString() + ":" + this.m_h.toString() + ":" + this.m_d.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new TrapezoidalPrism(atob(values[1]), values[2], values[3], values[4], values[5]);
    }
}

/* triangular prism */
class TriangularPrism extends Volumetric
{
    constructor(label, b, h, l) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
        this.m_l = BigNumber(l);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    length() {
        return this.m_l;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const l = ResolutionSolver.linear_transform(this.m_l, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">` + l + linear_res + `</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.TriangularPrism;
    }
    volume() {
        const b = BigNumber(this.m_b);
        const h = BigNumber(this.m_h);
        const l = BigNumber(this.m_l);
        const half = BigNumber(0.5);
        return BigNumber(half.multipliedBy(b).multipliedBy(h)).multipliedBy(l);
    }
    toString() {
        return VOLUMES.TriangularPrism + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString() + ":" + this.m_l.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new TriangularPrism(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]), parseFloat(values[4]));
    }
}

/* heptagonal pyramid */
class HeptagonalPyramid extends Volumetric
{
    constructor(label, base_length, height) {
        super(label);
        this.m_b = BigNumber(base_length);
        this.m_h = BigNumber(height);
    }
    baseLength() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBaseLength(base_length) {
        this.m_b = base_length;
    }
    setHeight(height) {
        this.m_h = height;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);

        const pi = g_pi_object;
        const se = BigNumber(7);
        const fr = BigNumber(4);
        const tw = BigNumber(2);
        const b2 = BigNumber(b);
        const h2 = BigNumber(h);

        /* not const, these are buffer variables */
        let y, z;
        let x = pi.dividedBy(se);

        const t = BigNumber(1/Math.tan(x.toNumber())).exponentiatedBy(tw);

        x = BigNumber(b2.exponentiatedBy(tw));
        x = x.multipliedBy(t);
        x = x.dividedBy(fr);
        y = h2.exponentiatedBy(tw);
        x = x.plus(y);
        x = x.squareRoot();

        const s = Nsl.round(x, g_precision_secondary);
        z = b2.exponentiatedBy(tw);
        z = z.dividedBy(fr);
        y = x.exponentiatedBy(tw);
        x = z.plus(y);
        const e = Nsl.round(x.squareRoot(), g_precision_secondary);

        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ s + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ e + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.HeptagonalPyramid;
    }
    volume() {
        const f = BigNumber(4);
        const s = BigNumber(7);
        const t = BigNumber(3);
        const pi = g_pi_object;
        const b = BigNumber(this.m_b);
        const h = BigNumber(this.m_h);
        const t1 = s.multipliedBy(b.exponentiatedBy(BigNumber(2)));
        const t2 = f.multipliedBy(Math.tan(pi.dividedBy(s)));
        const t3 = t1.dividedBy(t2);
        const t4 = t3.multipliedBy(h);
        return t4.dividedBy(t);
    }
    toString() {
        return VOLUMES.HeptagonalPyramid + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new HeptagonalPyramid(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* heptagonal prism */
class HeptagonalPrism extends Volumetric
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.HeptagonalPrism;
    }
    volume() {
        const h = BigNumber(this.m_h);
        const s = BigNumber(7);
        const pi = g_pi_object;
        const t1 = BigNumber(7).dividedBy(BigNumber(4));
        const t2 = BigNumber(this.m_b).exponentiatedBy(BigNumber(2));
        const t3 = BigNumber(BigNumber(1).dividedBy(BigNumber(Math.tan(pi.dividedBy(s).toNumber()))));
        const t4 = t3.multipliedBy(h);
        return t1.multipliedBy(t2).multipliedBy(t4);
    }
    toString() {
        return VOLUMES.HeptagonalPrism + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new HeptagonalPrism(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* hexagonal pyramid */
class HexagonalPyramid extends Volumetric
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);

        const tw = BigNumber(2);
        const sx = BigNumber(6);
        const pi = g_pi_object;
        const h2 = BigNumber(h).exponentiatedBy(tw);
        const b2 = BigNumber(b).exponentiatedBy(tw);
        const fr = BigNumber(4);

        let t = pi.dividedBy(sx);
        t = BigNumber(1).dividedBy(BigNumber(Math.tan(t.toNumber())).exponentiatedBy(tw));
        let s = BigNumber(b2.multipliedBy(t)).dividedBy(fr);
        s = h2.plus(s);
        const x1 = s.squareRoot();
        s = Nsl.round(s.squareRoot(), g_precision_secondary);

        let e = x1.exponentiatedBy(tw);
        e = e.plus(b2.dividedBy(fr));
        e = Nsl.round(e.squareRoot(), g_precision_secondary);

        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ s + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ e + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.HexagonalPyramid;
    }
    volume() {
        const t = BigNumber(2);
        const h = BigNumber(this.m_h);
        const b = BigNumber(this.m_b).exponentiatedBy(t);
        const x = BigNumber(3).squareRoot().dividedBy(t);
        return x.multipliedBy(b).multipliedBy(h);
    }
    toString() {
        return VOLUMES.HexagonalPyramid + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new HexagonalPyramid(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* hexagonal prism */
class HexagonalPrism extends Volumetric
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.HexagonalPrism;
    }
    volume() {
        const t = BigNumber(2);
        const h = BigNumber(this.m_h);
        const b = BigNumber(this.m_b).exponentiatedBy(t);
        const three = BigNumber(3);
        const sqrt_t = three.squareRoot();
        return three.multipliedBy(sqrt_t).dividedBy(t).multipliedBy(b).multipliedBy(h);
    }
    toString() {
        return VOLUMES.HexagonalPrism + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new HexagonalPrism(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* octagonal prism */
class OctagonalPrism extends Volumetric
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.OctagonalPrism;
    }
    volume() {
        const t = BigNumber(2);
        const h = BigNumber(this.m_h);
        const b2 = BigNumber(this.m_b).exponentiatedBy(t);
        const x = BigNumber(1).plus(t.squareRoot());
        return t.multipliedBy(x).multipliedBy(b2).multipliedBy(h);
    }
    toString() {
        return VOLUMES.OctagonalPrism + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new OctagonalPrism(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* octagonal pyramid */
class OctagonalPyramid extends Volumetric
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);

        const tw = BigNumber(2);
        const pi = g_pi_object;
        const ei = BigNumber(8);
        const fr = BigNumber(4);
        let t1 = BigNumber(1 / Math.tan(pi.dividedBy(ei))).exponentiatedBy(tw);
        const b2 = BigNumber(b).exponentiatedBy(tw);
        let t2, t3;
        t1 = b2.multipliedBy(t1);
        t1 = t1.dividedBy(fr);
        t2 = BigNumber(h).exponentiatedBy(tw);
        t3 = t2.plus(t1).squareRoot();
        const s = Nsl.round(t3, g_precision_secondary);

        t1 = t3.exponentiatedBy(tw);
        t2 = b2.dividedBy(fr);
        t1 = t1.plus(t2);
        t1 = t1.squareRoot();
        const e = Nsl.round(t1, g_precision_secondary);

        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ s + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ e + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.OctagonalPyramid;
    }
    volume() {
        const e = BigNumber(8);
        const pi = g_pi_object;
        const r = BigNumber(1).dividedBy(BigNumber(Math.tan(pi.dividedBy(e).toNumber())));
        const t = BigNumber(2);
        const b2 = BigNumber(this.m_b).exponentiatedBy(t);
        const b = t.multipliedBy(b2).multipliedBy(r);
        const h = BigNumber(this.m_h);
        return BigNumber(BigNumber(1).dividedBy(BigNumber(3))).multipliedBy(b).multipliedBy(h);
    }
    toString() {
        return VOLUMES.OctagonalPyramid +":"+ btoa(this.m_label) +":"+ this.m_b.toString() +":"+ this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new OctagonalPyramid(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* pentagonal prism */
class PentagonalPrism extends Volumetric 
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.PentagonalPrism;
    }
    volume() {
        const t = BigNumber(2);
        const h = BigNumber(this.m_h);
        const b = BigNumber(this.m_b).exponentiatedBy(t);
        const f = BigNumber(5);
        const of = BigNumber(1).dividedBy(BigNumber(4));
        const rs = b.multipliedBy(h);
        const ls = f.multipliedBy(f.plus(t.multipliedBy(f.squareRoot()))).squareRoot();
        return of.multipliedBy(ls).multipliedBy(rs);
    }
    toString() {
        return VOLUMES.PentagonalPrism + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new PentagonalPrism(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* pentagonal pyramid */
class PentagonalPyramid extends Volumetric 
{
    constructor(label, b, h) {
        super(label);
        this.m_b = BigNumber(b);
        this.m_h = BigNumber(h);
    }
    base() {
        return this.m_b;
    }
    height() {
        return this.m_h;
    }
    setBase(b) {
        this.m_b = b;
    }
    setHeight(h) {
        this.m_h = h;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const b = ResolutionSolver.linear_transform(this.m_b, g_resolution.Millimeters, resolution);
        const h = ResolutionSolver.linear_transform(this.m_h, g_resolution.Millimeters, resolution);
        const tw = BigNumber(2);
        const h2 = BigNumber(h);
        const b2 = BigNumber(b);
        const pi = g_pi_object;
        const fv = BigNumber(5);
        const fr = BigNumber(4);
        let t1 = h2.exponentiatedBy(tw);
        let t2 = b2.exponentiatedBy(tw);
        let t3 = pi.dividedBy(fv);
        t3 = BigNumber(BigNumber(1).dividedBy(BigNumber(Math.tan(t3.toNumber()))).exponentiatedBy(tw));
        t3 = t2.multipliedBy(t3);
        t3 = t3.dividedBy(fr);
        t3 = t1.plus(t3);
        t3 = t3.squareRoot();
        const s = Nsl.round(t3, g_precision_secondary);
        t1 = t3.exponentiatedBy(tw);
        t2 = b2.exponentiatedBy(tw).dividedBy(fr);
        t3 = t1.plus(t2);
        t3 = t3.squareRoot();
        const e = Nsl.round(t3, g_precision_secondary);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + b + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ h + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ s + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ e + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.PentagonalPyramid;
    }
    volume() {
        const two = BigNumber(2);
        let b = BigNumber(this.m_b).exponentiatedBy(two);
        const x = BigNumber(5).dividedBy(BigNumber(4));
        const pi = g_pi_object;
        const f = BigNumber(5);
        const t = BigNumber(1).dividedBy(Math.tan(pi.dividedBy(f)));
        const h = BigNumber(this.m_h);
        const y = BigNumber(1).dividedBy(BigNumber(3));
        b = x.multipliedBy(b).multipliedBy(t);
        return y.multipliedBy(b).multipliedBy(h);
    }
    toString() {
        return VOLUMES.PentagonalPyramid + ":" + btoa(this.m_label) + ":" + this.m_b.toString() +":" + this.m_h.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new PentagonalPyramid(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* torus */
class Torus extends Volumetric
{
    constructor(label, major_r, minor_r) {
        super(label);
        this.m_major_r = BigNumber(major_r);
        this.m_minor_r = BigNumber(minor_r);
    }
    majorRadius() {
        return this.m_major_r;
    }
    minorRadius() {
        return this.m_minor_r;
    }
    setMajorRadius(major_r) {
        this.m_major_r = major_r;
    }
    setMinorRadius(minor_r) {
        this.m_minor_r = minor_r;
    }
    toString() {
        return VOLUMES.Torus + ":" + btoa(this.m_label) + ":" + this.m_major_r.toString() +":"+ this.m_minor_r.toString();
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const major_r = ResolutionSolver.linear_transform(this.m_major_r, g_resolution.Millimeters, resolution);
        const minor_r = ResolutionSolver.linear_transform(this.m_minor_r, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + major_r + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ minor_r + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.Torus;
    }
    volume() {
        const p = g_pi_object;
        const t = BigNumber(2);
        return BigNumber(p.multipliedBy(this.m_minor_r.exponentiatedBy(t))).multipliedBy(BigNumber(t.multipliedBy(p).multipliedBy(this.m_major_r)));
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Torus(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    }
}

/* triangular prism */
class TriangularPyramid extends Volumetric 
{
    constructor(label, x_length, z_depth, y_height) {
        super(label);
        this.m_x_length = BigNumber(x_length);
        this.m_z_depth = BigNumber(z_depth);
        this.m_y_height = BigNumber(y_height);
    }
    length() {
        return this.m_x_length;
    }
    depth() {
        return this.m_z_depth;
    }
    height() {
        return this.m_y_height;
    }
    setLength(length) {
        this.m_x_length = length;
    }
    setDepth(depth) {
        this.m_z_depth = depth;
    }
    setHeight(height) {
        this.m_y_height = height;
    }
    toHtml(resolution, scale = 1.0) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        const length = ResolutionSolver.linear_transform(this.m_x_length, g_resolution.Millimeters, resolution);
        const depth = ResolutionSolver.linear_transform(this.m_z_depth, g_resolution.Millimeters, resolution);
        const height = ResolutionSolver.linear_transform(this.m_y_height, g_resolution.Millimeters, resolution);
        const linear_res = " "+VolumeCCApp.linear_resolution_to_str(resolution);
        const scaling_t = VolumeCCApp.scale_substrings(scale);
        const scale_t = BigNumber(scale);
        const volume = BigNumber(this.volume().multipliedBy(scale_t));
        return `
        <tr>
            <td>
                <div class="td-n`+scaling_t[0]+`">` + this.m_label + scaling_t[1] + `</div>
            </td>
            <td>
                <div class="td-n">` + length + linear_res + `</div>
            </td>
            <td>
                <div class="td-n">`+ depth + linear_res +`</div>
            </td>
            <td>
                <div class="td-n">`+ height + linear_res +`</div>
            </td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(volume, g_resolution.Millimeters, resolution), g_precision_preference) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`');"></div>
                <div class="list-row modify" onclick="javascript:modify('`+ this.m_label +`');"></div>
                <div class="list-row scale" onclick="javascript:scale('`+ this.m_label +`');"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.TriangularPyramid;
    }
    volume() {
        const v3 = BigNumber(3);
        const v2 = BigNumber(2);
        const x = BigNumber(this.m_x_length);
        const z = BigNumber(this.m_z_depth);
        const y = BigNumber(this.m_y_height);
        return x.multipliedBy(z).dividedBy(v2).multipliedBy(y).dividedBy(v3);
    }
    toString() {
        return VOLUMES.TriangularPyramid + ":" + btoa(this.m_label) + ":" + this.m_x_length.toString() +":" + this.m_z_depth.toString() +":" + this.m_y_height.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new TriangularPyramid(atob(values[1]), parseFloat(values[2]), parseFloat(values[3]), parseFloat(values[4]));
    }
}

/* surplus object */
class Surplus extends Volumetric
{
    constructor(label, raw_mm3) {
        super(label);
        this.m_raw_mm3 = raw_mm3;
    }
    toHtml(resolution, frequency) {
        const resolution_t = VolumeCCApp.cubic_resolution_to_str(resolution);
        return `
        <tr>
            <td><span class="text-orange">`+ frequency +`x</span> ` + this.m_label + `</td>
            <td>` + resolution_t + `</td>
            <td>
                <div class="td-t">` + Nsl.round(ResolutionSolver.cubic_transform(this.m_rawMm3*frequency, g_resolution.Millimeters, resolution), 10) + `</div>
                <div class="list-row delete" onclick="javascript:remove('`+ this.m_label +`', true);"></div>
            </td>
        </tr>
        `;
    }
    type() {
        return VOLUMES.Surplus;
    }
    volume() {
        return this.m_raw_mm3;
    }
    toString() {
        return VOLUMES.Surplus + ":" + btoa(this.m_label) + ":" + this.m_raw_mm3.toString();
    }
    static fromString(ds) {
        const values = ds.split(':');
        return new Surplus(atob(values[1]), parseFloat(values[2]));
    }
}

/* volume list */
class VolumeList {
    constructor() {
        this.m_undos = [];
        this.m_volumes = [];
        this.m_redos = [];
        this.m_initialised = false;        
        this.m_scales = [];
        this.m_s_undos = [];
        this.m_s_redos = [];
        this.m_unsaved_changes = false;
    }
    add(dataType, scaleValue = 1) {
        this.m_undos.push(this.m_volumes.slice());
        this.m_s_undos.push(this.m_scales.slice());
        let inserted = false;
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (dataType.label().localeCompare(this.m_volumes[n].label()) <= 0) {
                this.m_volumes.splice(n, 0, dataType);
                this.m_scales.splice(n, 0, scaleValue);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            this.m_volumes.push(dataType);
            this.m_scales.push(scaleValue);
        }
        this.m_redos = [];
        this.m_initialised = true;
        this.m_unsaved_changes = true;
    }
    count() {
        return this.m_volumes.length;
    }    
    delete(label) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase()) {
                this.m_undos.push(this.m_volumes.slice());
                this.m_s_undos.push(this.m_scales.slice());
                this.m_volumes.splice(n, 1);
                this.m_scales.splice(n, 1);
                this.m_unsaved_changes = true;
                return true;
        }}
        return false;
    }
    flag_as_saved() {
        this.m_unsaved_changes = false;
    }
    get(label) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase())
                return this.m_volumes[n];
        }
        return null;
    }
    getScale(label) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase())
                return this.m_scales[n];
        }
        return 1;
    }
    has_unsaved_changes() {
        return this.m_unsaved_changes;
    }
    is_unsaved() {
        return this.m_unsaved_changes;
    }
    labelExists(label) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase())
                return true;
        }
        return false;
    }
    hasType(volumeType) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].type() == volumeType)
                return true;
        }
        return false;
    }
    hasRedo() {
        return this.m_redos.length > 0;
    }
    hasUndo() {
        return this.m_undos.length > 0;
    }
    initialised() {
        return this.m_initialised;
    }
    modify(label, volumeObject, scaleValue = 'undefined') {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase()) {
                this.m_undos.push(this.m_volumes.slice());
                this.m_s_undos.push(this.m_scales.slice());
                this.m_volumes[n] = volumeObject;
                this.m_scales[n] = scaleValue == 'undefined' ? this.m_scales[n] : scaleValue;
                this.m_unsaved_changes = true;
                return true;
        }}
        return false;
    }
    resetData() {
        this.m_volumes = [];
        this.m_undos = [];
        this.m_redos = [];
        this.m_initialised = false;
        this.m_scales = [];
        this.m_s_undos = [];
        this.m_s_redos = [];
        this.m_unsaved_changes = false;
    }
    redo() {
        if (this.m_redos.length == 0)
            return;
        this.m_undos.push(this.m_volumes.slice());
        this.m_s_undos.push(this.m_scales.slice());
        this.m_volumes = this.m_redos.pop().slice();
        this.m_scales = this.m_s_redos.pop().slice();
        this.m_unsaved_changes = true;
    }
    setScale(label, scaleValue) {
        for (let n = 0; n < this.m_volumes.length; n++) {
            if (this.m_volumes[n].label().toUpperCase() == label.toUpperCase()) {
                this.m_undos.push(this.m_volumes.slice());
                this.m_s_undos.push(this.m_scales.slice());
                this.m_scales[n] = scaleValue;
                this.m_unsaved_changes = true;
                return true;
        }}
        return false;
    }
    toHtml(resolution)
    {
        /* terminate if no dataset exists */
        if ( this.m_volumes.length == 0 )
            return "";

        let barrel_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["BARREL"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["END_DIAMETER"]+'</th><th>'+g_language_data[g_lang]["MID_DIAMETER"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let capsule_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["CAPSULE"]+'</th><th>'+g_language_data[g_lang]["WORD_RADIUS"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let cone_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["CONE"]+'</th><th>'+g_language_data[g_lang]["WORD_RADIUS"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_SLANT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let conical_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["CONICAL_FRUSTUM"]+'</th><th>'+g_language_data[g_lang]["TOP_RADIUS"]+'</th><th>'+g_language_data[g_lang]["BOTTOM_RADIUS"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let cube_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["CUBE"]+'</th><th>'+g_language_data[g_lang]["EDGE_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let cylinder_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["CYLINDER"]+'</th><th>'+g_language_data[g_lang]["DIAMETER"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let ellipsoid_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["ELLIPSOID"]+'</th><th>'+g_language_data[g_lang]["AXIS_A_X"]+'</th><th>'+g_language_data[g_lang]["AXIS_B_Y"]+'</th><th>'+g_language_data[g_lang]["AXIS_C_Z"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let heptagonal_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["HEPTAGONAL_PRISM"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let heptavolume_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["HEPTAGONAL_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_SLANT"]+'</th><th>Edge</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let hexagonal_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["HEXAGONAL_PRISM"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let hexavolume_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["HEXAGONAL_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_SLANT"]+'</th><th>Edge</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let octagonal_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["OCTAGONAL_PRISM"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let octavolume_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["OCTAGONAL_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_SLANT"]+'</th><th>Edge</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let pentagonal_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["PENTAGONAL_PRISM"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let pentavolume_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["PENTAGONAL_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_SLANT"]+'</th><th>Edge</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let pyramid_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["RECTANGULAR_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_WIDTH"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let pyrfrustum_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["PYRAMID_FRUSTUM"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_DEPTH"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>Value P</th><th>Value Q</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let rectangular_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["RECTANGULAR_TANK"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_WIDTH"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let sphere_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["WORD_SPHERE"]+'</th><th>'+g_language_data[g_lang]["WORD_RADIUS"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let spherical_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["SPHERICAL_CAP"]+'</th><th>'+g_language_data[g_lang]["CAP_RADIUS"]+'</th><th>'+g_language_data[g_lang]["SPHERE_RADIUS"]+'</th><th>'+g_language_data[g_lang]["CAP_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let stadium_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["WORD_STADIUM"]+'</th><th>'+g_language_data[g_lang]["HIGH_LENGTH"]+'</th><th>'+g_language_data[g_lang]["HIGH_WIDTH"]+'</th><th>'+g_language_data[g_lang]["LOW_LENGTH"]+'</th><th>'+g_language_data[g_lang]["LOW_WIDTH"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let torus_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["TORUS"]+'</th><th>'+g_language_data[g_lang]["MAJOR_RADIUS"]+'</th><th>'+g_language_data[g_lang]["MINOR_RADIUS"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let triangular_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["TRIANGULAR_PRISM"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let tripyramid_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["TRIANGLUAR_PYRAMID"]+'</th><th>'+g_language_data[g_lang]["WORD_BASE"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_LENGTH"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let trapezoidal_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["TRAPEZOIDAL_PRISM"]+'</th><th>'+g_language_data[g_lang]["T_WIDTH"]+'</th><th>'+g_language_data[g_lang]["B_WIDTH"]+'</th><th>'+g_language_data[g_lang]["WORD_HEIGHT"]+'</th><th>'+g_language_data[g_lang]["WORD_DEPTH"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let surplus_html = '<table class="data"><thead><tr><th>'+g_language_data[g_lang]["WORD_OBJECT"]+'</th><th>'+g_language_data[g_lang]["WORD_UNIT"]+'</th><th>'+g_language_data[g_lang]["WORD_VOLUME"]+'</th></tr></thead><tbody>';
        let surplus_freq = new Map();

        for (let n = 0; n < this.m_volumes.length; n++)
        {
            switch(this.m_volumes[n].type())
            {
                case VOLUMES.Barrel:
                    barrel_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.RectangularTank:
                    rectangular_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.SphericalCap:
                    spherical_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Ellipsoid:
                    ellipsoid_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.ConicalFrustum:
                    conical_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Cube:
                    cube_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Capsule:
                    capsule_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Cone:
                    cone_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Cylinder:
                    cylinder_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.RectangularPyramid:
                    pyramid_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Sphere:
                    sphere_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Surplus:
                    if ( surplus_freq.has(this.m_volumes[n].label()) )
                        surplus_freq.set(this.m_volumes[n].label(), surplus_freq.get(this.m_volumes[n].label()) + 1);
                    else
                        surplus_freq.set(this.m_volumes[n].label(), 1);
                    break;
                case VOLUMES.TriangularPrism:
                    triangular_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.TrapezoidalPrism:
                    trapezoidal_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.HeptagonalPrism:
                    heptagonal_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.HexagonalPrism:
                    hexagonal_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.OctagonalPrism:
                    octagonal_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.OctagonalPyramid:
                    octavolume_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.PentagonalPrism:
                    pentagonal_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.TriangularPyramid:
                    tripyramid_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.HeptagonalPyramid:
                    heptavolume_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.HexagonalPyramid:
                    hexavolume_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.PentagonalPyramid:
                    pentavolume_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.PyramidFrustum:
                    pyrfrustum_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.StadiumFrustum:
                    stadium_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
                case VOLUMES.Torus:
                    torus_html += this.m_volumes[n].toHtml(resolution, this.m_scales[n]);
                    break;
        }}
        for ( let n = 0; n < this.m_volumes.length; n++ ) {
            if ( this.m_volumes[n].type() == VOLUMES.Surplus ) {
                if ( surplus_freq.has(this.m_volumes[n].label()) ) {
                    surplus_html += this.m_volumes[n].toHtml(resolution, surplus_freq.get(this.m_volumes[n].label()));
                    surplus_freq.delete(this.m_volumes[n].label());
        }}}

        let html_t = "<br />";
        if (this.hasType(VOLUMES.Barrel))
            html_t += barrel_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Capsule))
            html_t += capsule_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Cone))
            html_t += cone_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Cube))
            html_t += cube_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.ConicalFrustum))
            html_t += conical_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.Cylinder))
            html_t += cylinder_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Ellipsoid))
            html_t += ellipsoid_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.HeptagonalPrism))
            html_t += heptagonal_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.HeptagonalPyramid))
            html_t += heptavolume_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.HexagonalPrism))
            html_t += hexagonal_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.HexagonalPyramid))
            html_t += hexavolume_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.OctagonalPrism))
            html_t += octagonal_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.OctagonalPyramid))
            html_t += octavolume_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.PentagonalPrism))
            html_t += pentagonal_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.PentagonalPyramid))
            html_t += pentavolume_html += "</tbody></table><br />";
        if (this.hasType(VOLUMES.TrapezoidalPrism))
            html_t += trapezoidal_html + "</tbody></table><br />";
        if(this.hasType(VOLUMES.RectangularTank))
            html_t += rectangular_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.RectangularPyramid))
            html_t += pyramid_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.PyramidFrustum))
            html_t += pyrfrustum_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Sphere))
            html_t += sphere_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.SphericalCap))
            html_t += spherical_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.StadiumFrustum))
            html_t += stadium_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.TriangularPrism))
            html_t += triangular_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.TriangularPyramid))
            html_t += tripyramid_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Surplus))
            html_t += surplus_html + "</tbody></table><br />";
        if (this.hasType(VOLUMES.Torus))
            html_t += torus_html + "</tbody></table><br />";
        return html_t + "<br /><br /><br /><br />";
    }
    static fromString(dataString) {
        let vl = new VolumeList();
        let data_t = dataString.split(g_DELIMITOR_PRIORITY_3);
        let volumes = data_t[0].split(g_DELIMITOR_PRIORITY_2);
        let scales = data_t[1].split(g_DELIMITOR_PRIORITY_0);
        for (let n = 0; n < volumes.length; n++) {
            let dataString = volumes[n].split(':');
            if (dataString[0] == VOLUMES.Barrel)
                vl.add(Barrel.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.RectangularTank)
                vl.add(RectangularTank.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.SphericalCap)
                vl.add(SphericalCap.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Ellipsoid)
                vl.add(Ellipsoid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.ConicalFrustum)
                vl.add(ConicalFrustum.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Sphere)
                vl.add(Sphere.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.RectangularPyramid)
                vl.add(Pyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Capsule)
                vl.add(Capsule.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Cone)
                vl.add(Cone.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Cylinder)
                vl.add(Cylinder.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Cube)
                vl.add(Cube.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Surplus)
                vl.add(Surplus.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.TriangularPrism)
                vl.add(TriangularPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.TriangularPyramid)
                vl.add(TriangularPyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.TrapezoidalPrism)
                vl.add(TrapezoidalPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.HeptagonalPrism)
                vl.add(HeptagonalPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.HeptagonalPyramid)
                vl.add(HeptagonalPyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.HexagonalPrism)
                vl.add(HexagonalPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.HexagonalPyramid)
                vl.add(HexagonalPyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.OctagonalPrism)
                vl.add(OctagonalPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.OctagonalPyramid)
                vl.add(OctagonalPyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.PentagonalPrism)
                vl.add(PentagonalPrism.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.PentagonalPyramid)
                vl.add(PentagonalPyramid.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.PyramidFrustum)
                vl.add(PyramidFrustum.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.StadiumFrustum)
                vl.add(StadiumFrustum.fromString(volumes[n]), scales[n]);
            if (dataString[0] == VOLUMES.Torus)
                vl.add(Torus.fromString(volumes[n]), scales[n]);
        }
        return vl;
    }
    toString() {
        let string_t = "";
        for (let n = 0; n < this.m_volumes.length; n++) {
            string_t = string_t + this.m_volumes[n].toString();
            if (n < this.m_volumes.length - 1)
                string_t = string_t + g_DELIMITOR_PRIORITY_2;
        }
        string_t = string_t + g_DELIMITOR_PRIORITY_3;
        for (let n = 0; n < this.m_scales.length; n++) {
            string_t = string_t + this.m_scales[n].toString();
            if (n < this.m_scales.length - 1)
                string_t = string_t + g_DELIMITOR_PRIORITY_0;
        }
        return string_t;
    }
    undo() {
        if (this.m_undos.length == 0)
            return;
        this.m_redos.push(this.m_volumes.slice());
        this.m_s_redos.push(this.m_scales.slice());
        this.m_volumes = this.m_undos.pop().slice();
        this.m_scales = this.m_s_undos.pop().slice();
        this.m_unsaved_changes = true;
    }
    volume(truncate_to_zero = true) {
        let volume_mm3 = BigNumber(0);
        for (let n = 0; n < this.m_volumes.length; n++)
            volume_mm3 = volume_mm3.plus(BigNumber(this.m_volumes[n].volume()).multipliedBy(BigNumber(this.m_scales[n])));
        return volume_mm3.isLessThan(BigNumber(0)) && truncate_to_zero ? 0 : BigNumber(volume_mm3).toString();
    }
}

/* web user object */
class WebUser {
    constructor() {
        this.m_is_logged_in = false;
        this.m_is_premium = false;
    }
    isLoggedIn() {
        return this.m_is_logged_in;
    }
    isPremium() {
        return this.m_is_premium;
    }
    setLoggedIn(is_logged_in) {
        this.m_is_logged_in = is_logged_in;
        if ( !is_logged_in )
            this.m_is_premium = false;
    }
    setPremium(is_premium) {
        this.m_is_premium = is_premium;
    }
};

/* has html markup within the textual expression */
function has_markup(text_t)
{
    return text_t.indexOf("<") != -1 || text_t.indexOf(">") != -1;
}

/* set user interface language terms */
function set_ui_language()
{
    let elements_list = document.getElementsByTagName('*');
    for ( let e of elements_list ) {
        let id = e.getAttribute('id');
        if ( id in g_language_data[g_lang] ) {
            /* here the behaviour changes dependent upon whether the enclosured json snippet is markup or textual */
            if ( has_markup(g_language_data[g_lang][id]) )
                document.getElementById(id).innerHTML = g_language_data[g_lang][id];
            else
                document.getElementById(id).innerText = g_language_data[g_lang][id];
    }}
}

/* load language data from json flat file */
function load_language_data(language, reload = false) {

    /* best backwards compatible, wider support than fetch */
    const x = new XMLHttpRequest();

    /* get invoke */
    x.open('GET', '/p.php?!=lang&ilc='+ language, true);

    /* 5 seconds seems adequate */
    x.timeout = 5000;

    /* upon onload */
    x.onload = function() {

        /* OK status code */
        if ( x.status === 200 ) {
            g_language_data = JSON.parse(x.responseText);
            g_lang = language;
            set_ui_language();
            preload_images();
            if ( reload )
                update_display();
            unlock_workspace();
    }}

    /* on error or timeout, ensure the workspace is unlocked */
    x.onerror = function() { unlock_workspace(); };
    x.ontimeout = function() { unlock_workspace(); }

    /* init, send packet */
    x.send();
}

/* remove volumetric object */
function remove(label, hide_dialog = false) {
    if ( !hide_dialog ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["CONFIRM_REMOVAL"] +' '+ label);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["REMOVAL_MSG"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DELETE"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_CANCEL"]);
        g_nsl_prompt.setMetadata(label);
        g_nsl_prompt.setOperation(g_REMOVE_VOLUME);
        g_nsl_prompt.show();
        return;
    }
    let lstVolume = g_volume_lists.get(TabNavigation.get_active_tab());
    lstVolume.delete(label);
    display_volume_list();
    update_menu_highlights();
}

/* invoke a get request to remove a surplus */
function remove_surplus(label) {
    g_surplus_add_cancel = true;
    g_operation_code = g_REMOVE_SURPLUS_VOLUME;
    g_meta_string = label;
    WebClient.get("/p.php?!=remove_surplus&label="+label.replace(" ", "+"), handle_response);
}

/* modify a volumetric object */
function modify(label)
{
    if ( !can_modify() )
        return;
    let listOfVolumes = g_volume_lists.get(TabNavigation.get_active_tab());
    let volumeObject = listOfVolumes.get(label);
    if (volumeObject == null)
        return;
    let p, q, r, s, t;
    switch ( volumeObject.type() ) {
        case VOLUMES.Barrel:
            display_barrel_dialog(g_EDIT_BARREL, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.eDiameter(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.mDiameter(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('height').value = p;
            document.getElementById('ediameter').value = q;
            document.getElementById('mdiameter').value = r;
            break;
        case VOLUMES.Capsule:
            display_capsule_dialog(g_EDIT_CAPSULE, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.radius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('radius').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.Cylinder:
            display_cylinder_dialog(g_EDIT_CYLINDER, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.innerDiameter(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.length(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('innerd').value = p;
            document.getElementById('length').value = q;
            break;
        case VOLUMES.Cone:
            display_cone_dialog(g_EDIT_CONE, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.radius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('radius').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.RectangularPyramid:
            display_pyramid_dialog(g_EDIT_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.baseLength(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.baseWidth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.pyramidHeight(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('baselength').value = p;
            document.getElementById('basewidth').value = q;
            document.getElementById('height').value = r;
            break;
        case VOLUMES.PyramidFrustum:
            display_pyramid_frustum_dialog(g_EDIT_PYRAMID_FRUSTUM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.length(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.depth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            s = ResolutionSolver.linear_transform(volumeObject.valuep(), g_resolution.Millimeters, VolumeCCApp.resolution());
            t = ResolutionSolver.linear_transform(volumeObject.valueq(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('length').value = p;
            document.getElementById('depth').value = q;
            document.getElementById('height').value = r;
            document.getElementById('valuep').value = s;
            document.getElementById('valueq').value = t;
            break;
        case VOLUMES.ConicalFrustum:
            display_conical_frustum_dialog(g_EDIT_FRUSTUM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.topRadius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.bottomRadius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('radiustop').value = p;
            document.getElementById('radiusbottom').value = q;
            document.getElementById('height').value = r;
            break;
        case VOLUMES.Cube:
            display_cube_dialog(g_EDIT_CUBE, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.edgeLength(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('length').value = p;
            break;
        case VOLUMES.Ellipsoid:
            display_ellipsoid_dialog(g_EDIT_ELLIPSOID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.axisA(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.axisB(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.axisC(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('axisa').value = p;
            document.getElementById('axisb').value = q;
            document.getElementById('axisc').value = r;
            break;
        case VOLUMES.RectangularTank:
            display_rectangular_tank_dialog(g_EDIT_RECT_TANK, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.length(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.width(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('length').value = p;
            document.getElementById('width').value = q;
            document.getElementById('height').value = r;
            break;
        case VOLUMES.SphericalCap:
            display_spherical_cap_dialog(g_EDIT_SPHERICAL_CAP, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.baseRadius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('radiusbase').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.Sphere:
            display_sphere_dialog(g_EDIT_SPHERE, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.radius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('radius').value = p;
            break;
        case VOLUMES.TriangularPrism:
            display_triangular_prism_dialog(g_EDIT_TRIANGULAR_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.length(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            document.getElementById('length').value = r;
            break;
        case VOLUMES.TrapezoidalPrism:
            display_trapezoidal_prism_dialog(g_EDIT_TRAPEZOIDAL_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.top(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.bottom(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            s = ResolutionSolver.linear_transform(volumeObject.depth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('top').value = p;
            document.getElementById('bottom').value = q;
            document.getElementById('height').value = r;
            document.getElementById('depth').value = s;
            break;
        case VOLUMES.Torus:
            display_torus_dialog(g_EDIT_TORUS, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.majorRadius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.minorRadius(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('major_r').value = p;
            document.getElementById('minor_r').value = q;
            break;
        case VOLUMES.HeptagonalPrism:
            display_heptagonal_prism_dialog(g_EDIT_HEPTAGONAL_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.HeptagonalPyramid:
            display_heptagonal_pyramid_dialog(g_EDIT_HEPTAGONAL_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.baseLength(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.HexagonalPrism:
            display_hexagonal_prism_dialog(g_EDIT_HEXAGONAL_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.HexagonalPyramid:
            display_hexagonal_pyramid_dialog(g_EDIT_HEXAGONAL_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.OctagonalPrism:
            display_octagonal_prism_dialog(g_EDIT_OCTAGONAL_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.OctagonalPyramid:
            display_octagonal_pyramid_dialog(g_EDIT_OCTAGONAL_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.PentagonalPrism:
            display_pentagonal_prism_dialog(g_EDIT_PENTAGONAL_PRISM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.PentagonalPyramid:
            display_pentagonal_pyramid_dialog(g_EDIT_PENTAGONAL_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.base(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('base').value = p;
            document.getElementById('height').value = q;
            break;
        case VOLUMES.StadiumFrustum:
            display_stadium_tub_dialog(g_EDIT_STADIUM_FRUSTUM, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.upperLength(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.upperWidth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.lowerLength(), g_resolution.Millimeters, VolumeCCApp.resolution());
            s = ResolutionSolver.linear_transform(volumeObject.lowerWidth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            t = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('upperlen').value = p;
            document.getElementById('upperwidth').value = q;
            document.getElementById('lowerlength').value = r;
            document.getElementById('lowerwidth').value = s;
            document.getElementById('height').value = t;
            break;
        case VOLUMES.TriangularPyramid:
            display_triangular_pyramid_dialog(g_EDIT_TRIANGULAR_PYRAMID, volumeObject.label());
            p = ResolutionSolver.linear_transform(volumeObject.length(), g_resolution.Millimeters, VolumeCCApp.resolution());
            q = ResolutionSolver.linear_transform(volumeObject.depth(), g_resolution.Millimeters, VolumeCCApp.resolution());
            r = ResolutionSolver.linear_transform(volumeObject.height(), g_resolution.Millimeters, VolumeCCApp.resolution());
            document.getElementById('length').value = p;
            document.getElementById('depth').value = q;
            document.getElementById('height').value = r;
            break;
    }
}

/* update scaling */
function update_scaling()
{
    let scaleValue_t = document.getElementById('scalenumber').value;
    if ( isNaN(scaleValue_t) || scaleValue_t.toString().trim().length == 0 )
        return;
    let scaleValue = parseFloat(scaleValue_t);
    let listOfVolumes = g_volume_lists.get(TabNavigation.get_active_tab());
    listOfVolumes.setScale(g_nsl_prompt.metaData(), scaleValue);
    update_display();
}

/* object scaling */
function scale(label)
{
    let listOfVolumes = g_volume_lists.get(TabNavigation.get_active_tab());
    let scaleValue = listOfVolumes.getScale(label);
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["SCALE_CHANGE"] +': '+ label);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["SCALING_MSG"] + `
    <br />
    <br />
    <div class="form-row">
        <div class="form-label"><label for="scale">`+ g_language_data[g_lang]["WORD_SCALE"] +`:</label></div>
        <div class="form-field-auto-width">
            <input type="range" min="0" max="200" id="scale" name="scale" value="`+ ((scaleValue * 100)+100).toString() +`" oninput="javascript:scalenumber.value=(value-100)/100;" />
        </div>
        <div class="form-field">
            <input type="number" id="scalenumber" name="scalenumber" min="-1" max="1" value="`+ scaleValue.toString() +`" onchange="javascript:validate_scale_input();" />
        </div>
        <div class="clear"></div>
    </div>
    `);    
    g_nsl_prompt.setMetadata(label);
    g_nsl_prompt.setOperation(g_MODIFY_SCALING);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.show();
}

/* scale input */
function validate_scale_input()
{
    let scaleValue = document.getElementById('scalenumber').value;
    if ( scaleValue > 1 ) {
        document.getElementById('scalenumber').value = '1';
        scaleValue = 1;
    }
    else if ( scaleValue < -1 ) {
        document.getElementById('scalenumber').value = '-1';
        scaleValue = -1;
    }
    document.getElementById('scale').value = (scaleValue * 100)+100;
}

/* sign out */
function sign_out() {
    g_operation_code = g_SIGNOUT;
    WebClient.get("/p.php?!=sign_out", handle_response);
}

/* highlight the menu's based on the applications state */
function update_menu_highlights()
{
    let lstVolume = g_volume_lists.get(TabNavigation.get_active_tab());

    /* has a successive event been appended */
    if ( lstVolume.hasRedo() )
        document.getElementById('LINK_REDO').className = "has_hotkey";
    else
        document.getElementById('LINK_REDO').className = "has_hotkey not-active";

    /* has a past event been prepended */
    if ( lstVolume.initialised() )
        document.getElementById('LINK_RESET').className = "has_hotkey";
    else
        document.getElementById('LINK_RESET').className = "has_hotkey not-active";

    /* dataset has zero elements */
    if ( lstVolume.count() == 0 )
    {
        document.getElementById('LINK_DATASET_2').className = "has_hotkey not-active";
        document.getElementById('LINK_SAVE_AS_SURPLUS').className = "has_hotkey not-active";
        document.getElementById('LINK_PUBLISH').className = "has_hotkey not-active";
        document.getElementById('LINK_PRINT').className = "has_hotkey not-active";
        document.getElementById('LINK_SAVE').className = "has_hotkey not-active";
        document.getElementById('LINK_SAVE_AS').className = "has_hotkey not-active";
        if ( TabNavigation.get_active_tab() == "Untitled" )
            document.getElementById('LINK_CLOSE').className = "has_hotkey not-active";
        document.getElementById('LINK_UNDO').className = "has_hotkey" + (lstVolume.hasUndo() ? "" : " not-active");
    }
    else
    {
        document.getElementById('LINK_DATASET_2').className = "has_hotkey";
        document.getElementById('LINK_SAVE_AS_SURPLUS').className = "has_hotkey";
        document.getElementById('LINK_PUBLISH').className = "has_hotkey";
        document.getElementById('LINK_PRINT').className = "has_hotkey";
        document.getElementById('LINK_SAVE').className = "has_hotkey";
        document.getElementById('LINK_SAVE_AS').className = "has_hotkey";
        document.getElementById('LINK_CLOSE').className = "has_hotkey";
        document.getElementById('LINK_UNDO').className = "has_hotkey";
    }
}

/* force window center */
function set_window_position()
{
    let de = document.getElementById('nsl-prompt');
    let sy = parseFloat(window.scrollY);
    let ih = parseFloat(window.innerHeight) / 2;
    let bh = parseFloat(de.offsetHeight) / 2;
    let iw = parseFloat(window.innerWidth) / 2;
    let bw = parseFloat(de.offsetWidth) / 2;
    if ( de.style.display != "none" ) {
        de.style.top = ((ih-bh)+sy).toString() + "px";
        de.style.left = (iw-bw).toString() + "px";
    }
}

/* display passwd updated message */
function display_passwd_reset()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["PASSWORD_UPDATED"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_UPDATED_MSG"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
    g_nsl_prompt.show();
}

/* query subscription */
function display_subscription()
{
    if ( !g_user.isLoggedIn() )
        return;
    g_operation_code = g_CHECK_SUBSCRIPTION;
    WebClient.get("/p.php?!=has_subscription", handle_response);
}

/* query subscription (5 second delay) */
function query_subscription_status()
{
    Nsl.sleep(5000).then(() => {
        g_operation_code = g_QUERY_SUBSCRIPTION_STATUS;
        WebClient.get("/p.php?!=has_subscription", handle_response);
    });
}

/* display the subscription benefits */
function display_subscription_benefits()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["SUBSCRIPTION_REQUIRED"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIRTION_MSG"]);
    g_nsl_prompt.setOperation(g_ADD_SUBSCRIPTION);
    g_nsl_prompt.addButton(g_language_data[g_lang]["SUBSCRIBE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.show();
}

/* display the volumetric dataset */
function display_volume_list()
{
    let resol_s = document.querySelector('input[name="resolution"]:checked').value;
    let html_t = g_volume_lists.get(TabNavigation.get_active_tab()).toHtml(resol_s);
    let volumeValue = g_volume_lists.get(TabNavigation.get_active_tab()).volume();
    let roundingString = VolumeCCApp.rounding();
    document.getElementById('body').innerHTML = html_t;
    volumeValue = ResolutionSolver.cubic_transform(volumeValue, g_resolution.Millimeters, resol_s);

    /* rounding preference */
    if (roundingString == "round-output-to-1dp")
    {
        volumeValue = Nsl.round(volumeValue, 1);
    }
    else if (roundingString == "round-output-to-2dp")
    {
        volumeValue = Nsl.round(volumeValue, 2);
    }
    else if (roundingString == "round-up-to-1dp")
    {
        let volume_t = volumeValue.toString();
        if (volume_t.indexOf(".") != -1)
            volumeValue = Nsl.round(volumeValue.plus(BigNumber(0.05)), 1);
        else
            volumeValue = Nsl.round(volumeValue, 1);
    }
    else if (roundingString == "round-down-to-1dp")
    {
        volumeValue = Nsl.round(volumeValue.minus(BigNumber(0.05)), 1);
    }
    else
    {
        volumeValue = Nsl.round(volumeValue, 4);
    }
    document.getElementById('volumeFigure').innerHTML = volumeValue.toString();
    update_menu_highlights();
}

/* force a display and preference update */
function display_and_update()
{
    display_volume_list();
    update_preferences();
}

/* update password strength */
function update_password_strength()
{
    let colour = Nsl.passwd_strength(document.getElementById('password_new').value);
    let text = g_language_data[g_lang]["WORD_WEAK"];
    if ( colour == "#3CB371" )
        text = g_language_data[g_lang]["WORD_STRONG"];
    if ( colour == "#4169E1" )
        text = g_language_data[g_lang]["WORD_MEDIUM"];
    document.getElementById('chpwd_str').style.backgroundColor = colour;
    document.getElementById('chpwd_str').innerText = text;
}

function display_change_passwd()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["PASSWORD_CHANGE"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_MSG"] + `
    <br />
    <br />
    <table>
        <tr>
            <td align="right"><label for="password">`+ g_language_data[g_lang]["PASSWORD_EXISTING"] +`:</label></td>
            <td>
                <input class="chpwd_field" type="password" name="password" id="password" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right"><label for="password_new">`+ g_language_data[g_lang]["PASSWORD_NEW"] +`:</label></td>
            <td>
                <input class="chpwd_field" type="password" name="password_new" id="password_new" value="" onkeyup="javascript:update_password_strength();" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">`+ g_language_data[g_lang]["PASSWORD_STRENGTH"] +`:</td>
            <td>
                <div id="chpwd_str" class="chpwd_str"></div>
            </td>
        </tr>
    </table>
    `);
    g_nsl_prompt.addButton(g_language_data[g_lang]["PROCESS_TEXT"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(g_CHANGE_PASSWD);
    g_nsl_prompt.show();
    document.getElementById('password').focus();
}

function display_activation_text()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["ACTIVATION_OK"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["ACTIVATION_MSG"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["ACCESS_MY_ACCOUNT"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(g_ACCESS_MY_ACCOUNT);
    g_nsl_prompt.show();
}

function display_account_register()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["NEW_MEMBERSHIP"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["NEW_MEMBERSHIP_MSG"] + `
    <br />
    <br />
    <table align="center">
        <tr>
            <td align="right">
                <label for="email_addr">`+ g_language_data[g_lang]["EMAIL"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="email_addr" id="email_addr" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="username">`+ g_language_data[g_lang]["USERNAME"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="username" id="username" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="passwd_field">`+ g_language_data[g_lang]["PASSWORD"] +`:</label></td>
            <td>
                <input class="account_field" type="password" name="passwd_field" id="passwd_field" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="secure">`+ g_language_data[g_lang]["VERIFY"] +`:</label>
            </td>
            <td>
                <img id="verify-image" src="/p.php?!=cimage&`+new Date().getTime()+`" alt="" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="secure">`+ g_language_data[g_lang]["VERIFY"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="secure" id="secure" value="" placeholder="`+ g_language_data[g_lang]["VERIFY_PLACE_HOLDER"] +`" autocomplete="off" />
            </td>
        </tr>
    </table>
    `);
    g_nsl_prompt.setOperation(g_MAKE_NEW_ACCOUNT);
    g_nsl_prompt.addButton(g_language_data[g_lang]["REGISTER"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);    
    g_nsl_prompt.show();
    refresh_verification_image();
    document.getElementById('email_addr').focus();
}

function display_account_forgot()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["PASSWORD_FORGOTTEN"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_FORGOTTEN_MSG"] + `
    <br />
    <br />
    <table align="center">
        <tr>
            <td align="right">
                <label for="email_addr">`+ g_language_data[g_lang]["EMAIL"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="email_addr" id="email_addr" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="secure">`+ g_language_data[g_lang]["VERIFY"] +`:</label>
            </td>
            <td>
                <img id="verify-image" src="/p.php?!=cimage&`+new Date().getTime()+`" alt="" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="secure">`+ g_language_data[g_lang]["VERIFY"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="secure" id="secure" value="" placeholder="`+ g_language_data[g_lang]["VERIFY_PLACE_HOLDER"] +`" autocomplete="off" />
            </td>
        </tr>
    </table>
    `);
    g_nsl_prompt.setOperation(g_FORGOT_PASSWD);
    g_nsl_prompt.addButton(g_language_data[g_lang]["PROCESS"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);    
    g_nsl_prompt.show();
    refresh_verification_image();
    document.getElementById('email_addr').focus();
}

function display_account_login()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["ACCOUNT_LOGIN_TEXT"]);
    g_nsl_prompt.setMessage(`
    <table align="center">
        <tr>
            <td align="right"><label for="email_addr">`+ g_language_data[g_lang]["EMAIL"] +`:</label></td>
            <td>
                <input class="account_field" type="text" name="email_addr" id="email_addr" value="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right"><label for="passwd_field">`+ g_language_data[g_lang]["PASSWORD"] +`:</label></td>
            <td><input class="account_field" type="password" name="passwd_field" id="passwd_field" value="" autocomplete="off" /></td>
        </tr>
        <tr>
            <td align="right">`+ g_language_data[g_lang]["VERIFY"] +`:</td>
            <td>
                <img id="verify-image" src="/p.php?!=cimage&`+new Date().getTime()+`" alt="" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="secure">`+ g_language_data[g_lang]["VERIFY"] +`:</label>
            </td>
            <td>
                <input class="account_field" type="text" name="secure" id="secure" value="" placeholder="`+ g_language_data[g_lang]["VERIFY_PLACE_HOLDER"] +`" />
            </td>
        </tr>
    </table>
    `);
    g_nsl_prompt.setOperation(g_LOGIN_ACCOUNT);
    g_nsl_prompt.addButton(g_language_data[g_lang]["AUTHENTICATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);    
    g_nsl_prompt.show();
    document.getElementById('email_addr').focus();
}

function display_account_access()
{
    if ( has_service_expired() || g_user.isLoggedIn() )
        return;
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["ACCOUNT_ACCESS"]);
    g_nsl_prompt.setMessage(`
    <div id="access-icons">
        <div id="access-forgot" class="access-icon-box" onclick="javascript:display_account_forgot();">`+g_language_data[g_lang]["ACCOUNT_OPTION_FORGOT_PASSWD"]+`</div>
        <div id="access-register" class="access-icon-box" onclick="javascript:display_account_register();">`+g_language_data[g_lang]["ACCOUNT_OPTION_REGISTER"]+`</div>
        <div id="access-login" class="access-icon-box" onclick="javascript:display_account_login();">`+g_language_data[g_lang]["ACCOUNT_OPTION_LOGIN"]+`</div>
    </div>
    `);
    g_nsl_prompt.setOperation(g_VIEW_ACCOUNT_ICONS);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.show();
}

function display_account_benefits()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["ACCOUNT_BENEFITS"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["ACCOUNT_MAKE_TEXT_1"] + `
    <br />
    <br />
    `+ g_language_data[g_lang]["ACCOUNT_MAKE_TEXT_2"] +`
    <br />
    <br />
    <ul class="list-of-points">
        <li class="dialog-list">`+ g_language_data[g_lang]["ACCOUNT_MAKE_BENEFIT_1"] +`</li>
        <li class="dialog-list">`+ g_language_data[g_lang]["ACCOUNT_MAKE_BENEFIT_2"] +`</li>
        <li class="dialog-list">`+ g_language_data[g_lang]["ACCOUNT_MAKE_BENEFIT_3"] +`</li>
        <li class="dialog-list">`+ g_language_data[g_lang]["ACCOUNT_MAKE_BENEFIT_4"] +`</li>
        <li class="dialog-list">`+ g_language_data[g_lang]["ACCOUNT_MAKE_BENEFIT_5"] +`</li>
    </ul>
    `);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["ACCESS_MY_ACCOUNT"]);
    g_nsl_prompt.setOperation(g_ACCESS_MY_ACCOUNT);
    g_nsl_prompt.show();
}

function display_login_prompt()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["ACCOUNT_LOGIN_REQUIRED"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["ACCOUNT_LOGIN_TEXT_1"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["ACCESS_MY_ACCOUNT"]);
    g_nsl_prompt.setOperation(g_ACCESS_MY_ACCOUNT);
    g_nsl_prompt.show();
}

function display_label_invalid()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["LABEL_MISFORMED"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["LABEL_POOR_SYMBOLICS"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
    g_nsl_prompt.show();
}

function display_no_label_prompt()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["LABEL_MISSING"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["LABEL_MISSING_TEXT_1"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
    g_nsl_prompt.show();
}

function display_duplicate_label_prompt()
{
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["LABEL_DUPLICATED"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["LABEL_MISSING_TEXT_2"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
    g_nsl_prompt.show();
}

function numeric_inputs_ok()
{
    for ( let n = 0; n < arguments.length; n++ )
    {
        if ( isNaN(arguments[n]) )
        {
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["LABEL_MISFORMED_INPUTS"]);
            g_nsl_prompt.setMessage(g_language_data[g_lang]["LABEL_INPUTS_NOT_NUMERICAL"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
            g_nsl_prompt.show();
            return false;
        }
        if ( arguments[n] <= 0 )
        {
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["LABEL_NON_POSITIVE"]);
            g_nsl_prompt.setMessage(g_language_data[g_lang]["LABEL_INPUTS_MUST_BE_POSITIVE"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
            g_nsl_prompt.show();
            return false;
        }
    }
    return true;
}

function prime_dialog_inputs(label_t)
{
    if ( label_t.length > 0 ) {
        g_nsl_prompt.setMetadata(label_t);
        document.getElementById('quantity_control').remove();
        document.getElementById('label').value = label_t;
        document.getElementById('label').readOnly = true;
        return;
    }
    Nsl.sleep(300).then(() => {
        document.getElementById('label').value = "";
        document.getElementById('label').focus();
    });
}

function display_barrel_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["BARREL"] : g_language_data[g_lang]["MODIFY"]+' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`barrel.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="ediameter">`+ g_language_data[g_lang]["END_DIAMATER"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_ediameter" id="unit_for_ediameter">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="ediameter" id="ediameter" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="mdiameter">`+ g_language_data[g_lang]["MIDDLE_DIAMATER"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_mdiameter" id="unit_for_mdiameter">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="mdiameter" id="mdiameter" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="quantity_control">
        <div class="form-row">
            <div class="form-label">
                <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
            </div>
            <div class="form-field-auto-width">
                <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
            </div>
            <div class="form-field">
                <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_capsule_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["CAPSULE"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`capsule.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radius">`+ g_language_data[g_lang]["WORD_RADIUS"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radius" id="unit_for_radius">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radius" id="radius" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="quantity_control">
        <div class="form-row">
            <div class="form-label">
                <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
            </div>
            <div class="form-field-auto-width">
                <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
            </div>
            <div class="form-field">
                <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["RECTANGULAR_PYRAMID_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="baselength">`+ g_language_data[g_lang]["WORD_LENGTH"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_baselength" id="unit_for_baselength">`+ default_t +`</select></div>
            <div class="form-field"><input type="number" name="baselength" id="baselength" value="" required pattern="\d+" /></div>
            <div class="clear"></div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-label"><label for="basewidth">`+ g_language_data[g_lang]["WORD_WIDTH"] +`:</label></div>
        <div class="form-field-auto-width"><select name="unit_for_basewidth" id="unit_for_basewidth">`+ default_t +`</select></div>
        <div class="form-field">
            <input type="number" name="basewidth" id="basewidth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_pyramid_frustum_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["PYRAMID_FRUSTUM"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`pyramidal_frustum.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+g_language_data[g_lang]["WORD_LENGTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="depth">`+g_language_data[g_lang]["WORD_DEPTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_depth" id="unit_for_depth">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="depth" id="depth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="valuep">`+g_language_data[g_lang]["VALUE_P"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_valuep" id="unit_for_valuep">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="valuep" id="valuep" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="valuep">`+g_language_data[g_lang]["VALUE_Q"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_valueq" id="unit_for_valueq">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="valueq" id="valueq" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_cone_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["CONE"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`cone.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radius">`+ g_language_data[g_lang]["WORD_RADIUS"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radius" id="unit_for_radius">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radius" id="radius" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="quantity_control">
        <div class="form-row">
            <div class="form-label">
                <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
            </div>
            <div class="form-field-auto-width">
                <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
            </div>
            <div class="form-field">
                <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_conical_frustum_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["CONICAL_FRUSTUM"] : g_language_data[g_lang]["MODIFY"] + ' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`conical.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radiustop">`+ g_language_data[g_lang]["TOP_RADIUS_TEXT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radiustop" id="unit_for_radiustop">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radiustop" id="radiustop" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radiusbottom">`+ g_language_data[g_lang]["BOTTOM_RADIUS_TEXT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radiusbottom" id="unit_for_radiusbottom">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radiusbottom" id="radiusbottom" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_cube_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["CUBE"] : g_language_data[g_lang]["MODIFY"] + ' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`cube.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+ g_language_data[g_lang]["WORD_LENGTH"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="quantity_control">
        <div class="form-row">
            <div class="form-label">
                <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
            </div>
            <div class="form-field-auto-width">
                <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
            </div>
            <div class="form-field">
                <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_cylinder_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["CYLINDER"] : g_language_data[g_lang]["MODIFY"] + ' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`cylinder.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="innerd">`+g_language_data[g_lang]["DIAMETER"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_innerd" id="unit_for_innerd">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="innerd" id="innerd" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+g_language_data[g_lang]["WORD_LENGTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="quantity_control">
        <div class="form-row">
            <div class="form-label">
                <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
            </div>
            <div class="form-field-auto-width">
                <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
            </div>
            <div class="form-field">
                <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_ellipsoid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["ELLIPSOID"] : g_language_data[g_lang]["MODIFY"] + ' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`ellipsoid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="axisa">`+ g_language_data[g_lang]["AXIS_A"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_axisa" id="unit_for_axisa">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="axisa" id="axisa" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="axisb">`+ g_language_data[g_lang]["AXIS_B"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_axisb" id="unit_for_axisb">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="axisb" id="axisb" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="axisc">`+ g_language_data[g_lang]["AXIS_C"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_axisc" id="unit_for_axisc">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="axisc" id="axisc" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_rectangular_tank_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["RECTANGLAR_TANK"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`rectangular_tank.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+ g_language_data[g_lang]["WORD_LENGTH"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="width">`+ g_language_data[g_lang]["WORD_WIDTH"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_width" id="unit_for_width">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="width" id="width" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function has_service_expired()
{
    if ( !g_is_running ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["SERVICE_INACTIVE"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["SERVICE_SUSPENDED"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
        g_nsl_prompt.show();
        return true;
    }
    return false;
}

function display_sphere_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["WORD_SPHERE"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`sphere.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radius">`+ g_language_data[g_lang]["WORD_RADIUS"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radius" id="unit_for_radius">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radius" id="radius" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_spherical_cap_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["SPHERICAL_CAP"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`spherical_cap.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="radiusbase">`+ g_language_data[g_lang]["WORD_RADIUS"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_radiusbase" id="unit_for_radiusbase">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="radiusbase" id="radiusbase" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_stadium_tub_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["STADIUM_FRUSTUM"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`stadium.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="upperlen">`+g_language_data[g_lang]["STADIUM_TOP_LENGTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_upperlen" id="unit_for_upperlen">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="upperlen" id="upperlen" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="upperwidth">`+g_language_data[g_lang]["STADIUM_TOP_DEPTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_upperwidth" id="unit_for_upperwidth">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="upperwidth" id="upperwidth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="lowerlength">`+g_language_data[g_lang]["STADIUM_BOT_LENGTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_lowerlength" id="unit_for_lowerlength">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="lowerlength" id="lowerlength" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="lowerwidth">`+g_language_data[g_lang]["STADIUM_BOT_DEPTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_lowerwidth" id="unit_for_lowerwidth">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="lowerwidth" id="lowerwidth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_torus_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["TORUS"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`torus.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="major_r">`+g_language_data[g_lang]["MAJOR_RADIUS"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_major_r" id="unit_for_major_r">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="major_r" id="major_r" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="minor_r">`+g_language_data[g_lang]["MINOR_RADIUS"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_minor_r" id="unit_for_minor_r">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="minor_r" id="minor_r" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_trapezoidal_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["TRAPEZOIDAL_PRISM"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`trapezoidal_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="top">`+g_language_data[g_lang]["T_WIDTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_top" id="unit_for_top">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="top" id="top" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="bottom">`+g_language_data[g_lang]["B_WIDTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_bottom" id="unit_for_bottom">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="bottom" id="bottom" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="depth">`+g_language_data[g_lang]["WORD_DEPTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_depth" id="unit_for_depth">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="depth" id="depth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_triangular_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["TRIANGULAR_PRISM_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`triangular_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+ g_language_data[g_lang]["WORD_BASE"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+ g_language_data[g_lang]["WORD_LENGTH"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_triangular_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["TRIANGULAR_PYRAMID_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`triangular_pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="length">`+g_language_data[g_lang]["WORD_LENGTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_length" id="unit_for_length">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="length" id="length" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="depth">`+g_language_data[g_lang]["WORD_DEPTH"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_depth" id="unit_for_depth">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="depth" id="depth" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_heptagonal_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["HEPTAGONAL_PRISM_TEXT"] : g_language_data[g_lang]["MODIFY"]+' '+label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`heptagonal_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+g_language_data[g_lang]["WORD_BASE"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_heptagonal_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["HEPTAGONAL_PYRAMID_TEXT"] : g_language_data[g_lang]["MODIFY"]+' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`heptagonal_pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+g_language_data[g_lang]["WORD_BASE"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_hexagonal_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+ g_language_data[g_lang]["HEXAGONAL_PRISM_TEXT"] : g_language_data[g_lang]["MODIFY"]+' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`hexagonal_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+ g_language_data[g_lang]["WORD_BASE"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_hexagonal_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["HEXAGONAL_PYRAMID_TEXT"]: g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`hexagonal_pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+ g_language_data[g_lang]["WORD_BASE"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_octagonal_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["OCTAGONAL_PRISM_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`octagonal_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+ g_language_data[g_lang]["WORD_BASE"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+ g_language_data[g_lang]["WORD_HEIGHT"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+ g_language_data[g_lang]["QUANTITY"] +`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_octagonal_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["OCTAGONAL_PYRAMID_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`octagonal_pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+g_language_data[g_lang]["WORD_BASE"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label></div>
            <div class="form-field-auto-width"><input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" /></div>
            <div class="form-field"><input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" /></div>
            <div class="clear"></div>
        </div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_pentagonal_prism_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"]+' '+g_language_data[g_lang]["PENTAGONAL_PRISM_TEXT"] : g_language_data[g_lang]["MODIFY"]+' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`pentagonal_prism.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+g_language_data[g_lang]["WORD_BASE"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function display_pentagonal_pyramid_dialog(operationCode, label_t = '')
{
    let default_t = VolumeCCApp.default_option_resolution();
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(label_t.length == 0 ? g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["PENTAGONAL_PYRAMID_TEXT"] : g_language_data[g_lang]["MODIFY"] +' '+ label_t);
    g_nsl_prompt.setMessage(`
    <img class="dialog_image" src="/p.php?!=fi&ip=`+ g_image_prefix +`pentagonal_pyramid.png" alt="" />
    <div class="form-row">
        <div class="form-label">
            <label for="label">`+g_language_data[g_lang]["LABEL"]+`:</label>
        </div>
        <div class="form-field">
            <input type="text" name="label" id="label" value="" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="base">`+g_language_data[g_lang]["WORD_BASE"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_base" id="unit_for_base">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="base" id="base" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row">
        <div class="form-label">
            <label for="height">`+g_language_data[g_lang]["WORD_HEIGHT"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <select name="unit_for_height" id="unit_for_height">`+ default_t +`</select>
        </div>
        <div class="form-field">
            <input type="number" name="height" id="height" value="" required pattern="\d+" />
        </div>
        <div class="clear"></div>
    </div>
    <div class="form-row" id="quantity_control">
        <div class="form-label">
            <label for="rangenumber">`+g_language_data[g_lang]["QUANTITY"]+`:</label>
        </div>
        <div class="form-field-auto-width">
            <input type="range" min="1" max="100" id="quantity" name="quantity" value="1" oninput="rangenumber.value=value" />
        </div>
        <div class="form-field">
            <input type="number" id="rangenumber" name="rangenumber" min="0" max="100" value="1" oninput="quantity.value=value" />
        </div>
        <div class="clear"></div>
    </div>
    `);
    g_nsl_prompt.addButton(label_t.length == 0 ? g_language_data[g_lang]["WORD_SAVE"] : g_language_data[g_lang]["WORD_UPDATE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(operationCode);
    g_nsl_prompt.show();
    prime_dialog_inputs(label_t);
}

function show_dialog(divIdentifier)
{
    if ( g_locked_workspace )
        return;
    if ( typeof g_author_time === 'undefined' ) {
        window.location="https://www.volume.cc/";
        return;
    }
    if ( ( Date.now() / 1000 ) > g_author_time && !g_volume_lists.get(TabNavigation.get_active_tab()).is_unsaved() ) {
        window.location="https://www.volume.cc/";
        return;
    }
    let count = g_volume_lists.get(TabNavigation.get_active_tab()).count();
    if ( !g_user.isLoggedIn() && count >= g_MAX_GUEST_VOLUMES ) {
        display_account_benefits();
        return;
    }
    if ( !g_user.isPremium() && count >= g_MAX_NON_SUB_VOLUMES && divIdentifier != "about" ) {
        display_subscription_benefits();
        return;
    }
    if ( has_service_expired() )
        return;
    switch (divIdentifier) {
        case "add_capsule":
            display_capsule_dialog(g_ADD_CAPSULE);
            break;
        case "add_cone":
            display_cone_dialog(g_ADD_CONE);
            break;
        case "add_cylinder":
            display_cylinder_dialog(g_ADD_CYLINDER);
            break;
        case "add_pyramid":
            display_pyramid_dialog(g_ADD_PYRAMID);
            break;
        case "add_conical_frustum":
            display_conical_frustum_dialog(g_ADD_FRUSTUM);
            break;
        case "add_cube":
            display_cube_dialog(g_ADD_CUBE);
            break;
        case "add_ellipsoid":
            display_ellipsoid_dialog(g_ADD_ELLIPSOID);
            break;
        case "add_rectangular_tank":
            display_rectangular_tank_dialog(g_ADD_RECT_TANK);
            break;
        case "add_sphere":
            display_sphere_dialog(g_ADD_SPHERE);
            break;
        case "add_spherical_cap":
            display_spherical_cap_dialog(g_ADD_SPHERICAL_CAP);
            break;
        case "add_surplus":
            if (!g_user.isLoggedIn()) {
                display_login_prompt();
                return;
            }
            let resolution_t = VolumeCCApp.resolution().toString();
            let html_t = `
            <option value="angstroms">`+ g_language_data[g_lang]["CUBIC_ANGSTROM"] +`</option>
            <option value="nanometers">`+ g_language_data[g_lang]["CUBIC_NANOMETER"] +`</sup></option>
            <option value="micrometers">`+ g_language_data[g_lang]["CUBIC_MICROMETER"] +`</option>
            <option value="millimeters">`+ g_language_data[g_lang]["CUBIC_MILLIMETER"] +`</option>
            <option value="centimeters">`+ g_language_data[g_lang]["CUBIC_CENTIMETER"] +`</option>
            <option value="meters">`+ g_language_data[g_lang]["CUBIC_METER"] +`</option>
            `;
            html_t = html_t.replace('"'+resolution_t+'">', '"'+resolution_t+'" selected="selected">');
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["DEFINE_SURPLUS"]);
            g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_MESSAGE_TEXT_1"]+`
            <br />
            <br />
            `+g_language_data[g_lang]["SURPLUS_MESSAGE_TEXT_2"]+`
            <br />
            <br />
            <div class="form-row">
                <div class="form-label"><label for="label">`+ g_language_data[g_lang]["LABEL"] +`:</label></div>
                <div class="form-field"><input type="text" name="label" id="label" value="" /></div>
                <div class="clear"></div>
            </div>
            <div class="form-row">
                <div class="form-label"><label for="sv">`+ g_language_data[g_lang]["SURPLUS_LABEL"] +`:</label></div>
                <div class="form-field-auto-width">
                    <select name="unit_for_sv" id="unit_for_sv">`+ html_t +`</select>
                </div>
                <div class="form-field"><input type="number" name="sv" id="sv" value="" required pattern="\d+" /></div>
                <div class="clear"></div>
            </div>
            `);
            g_nsl_prompt.addButton(g_language_data[g_lang]["VERIFY_N_SAVE"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_CANCEL"]);
            g_nsl_prompt.setOperation(g_ADD_SURPLUS_VOLUME);
            g_nsl_prompt.show();
            Nsl.sleep(300).then(() => {
                document.getElementById('label').value = "";
                document.getElementById('label').focus();
            });
            break;
        case "add_triangular_prism":
            display_triangular_prism_dialog(g_ADD_TRIANGULAR_PRISM);
            break;
        case "add_stadium_frustum":
            display_stadium_tub_dialog(g_ADD_STADIUM_FRUSTUM);
            break;
        case "add_trapezoidal_prism":
            display_trapezoidal_prism_dialog(g_ADD_TRAPEZOIDAL_PRISM);
            break;
        case "add_heptagonal_prism":
            display_heptagonal_prism_dialog(g_ADD_HEPTAGONAL_PRISM);
            break;
        case "add_hexagonal_prism":
            display_hexagonal_prism_dialog(g_ADD_HEXAGONAL_PRISM);
            break;
        case "add_octagonal_prism":
            display_octagonal_prism_dialog(g_ADD_OCTAGONAL_PRISM);
            break;
        case "add_pentagonal_prism":
            display_pentagonal_prism_dialog(g_ADD_PENTAGONAL_PRISM);
            break;
        case "add_triangular_pyramid":
            display_triangular_pyramid_dialog(g_ADD_TRIANGULAR_PYRAMID);
            break;
        case "add_heptagonal_pyramid":
            display_heptagonal_pyramid_dialog(g_ADD_HEPTAGONAL_PYRAMID);
            break;
        case "add_hexagonal_pyramid":
            display_hexagonal_pyramid_dialog(g_ADD_HEXAGONAL_PYRAMID);
            break;
        case "add_octagonal_pyramid":
            display_octagonal_pyramid_dialog(g_ADD_OCTAGONAL_PYRAMID);
            break;
        case "add_pentagonal_pyramid":
            display_pentagonal_pyramid_dialog(g_ADD_PENTAGONAL_PYRAMID);
            break;
        case "add_pyramid_frustum":
            display_pyramid_frustum_dialog(g_ADD_PYRAMID_FRUSTUM);
            break;
        case "add_barrel":
            display_barrel_dialog(g_ADD_BARREL);
            break;
        case "add_torus":
            display_torus_dialog(g_ADD_TORUS);
            break;
        case "about":
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["ABOUT_TEXT"]);
            g_nsl_prompt.setMessage(g_language_data[g_lang]["ABOUT"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            g_nsl_prompt.show();
            break;
    }
}

function new_list() {
    if ( has_service_expired() || g_locked_workspace )
        return;
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["NEW_DATASET"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["TITLE_FOR_DATASET"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["OPEN"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
    g_nsl_prompt.setOperation(g_ADD_LIST_TAB);
    g_nsl_prompt.show(true);
}

function add_list(tab_title) {
    if ( !add_object_check(tab_title) )
        return;
    TabNavigation.add(tab_title);
    g_volume_lists.set(tab_title, new VolumeList());
    display_volume_list();
}

function query_file_search() {
    let searchTerm = document.getElementById('file-search-text').value;
    if (searchTerm.length == 0) {
        open_list();
        return;
    }
    g_operation_code = g_QUERY_FILE_SEARCH;
    WebClient.get("/p.php?!=open&startWith="+searchTerm.replace(' ', '+'), handle_response);
}

/*  */
function open_list() {
    if (!g_user.isLoggedIn()) {
        display_login_prompt();
        return;
    }
    if ( has_service_expired() || g_locked_workspace )
        return;
    g_operation_code = g_OPEN_LIST;
    WebClient.get("/p.php?!=open", handle_response);
}

function lock_workspace()
{
    g_locked_workspace = true;
    document.getElementById('data_loader').style.display = "block";
    document.getElementById('body').style.display = "none";
}

function unlock_workspace()
{
    g_locked_workspace = false;
    document.getElementById('data_loader').style.display = "none";
    document.getElementById('body').style.display = "block";
}

/* save routine prior to save as */
function save_list() {

    /* has no objects */
    if (g_volume_lists.get(TabNavigation.get_active_tab()).count() == 0)
        return;

    /* not logged in */
    if (!g_user.isLoggedIn()) {
        display_login_prompt();
        return;
    }

    /* cloud service has expired or workspace is locked (pending io) */
    if ( has_service_expired() || g_locked_workspace )
        return;

    /* default untitled tab */
    if (TabNavigation.get_active_tab() == g_language_data[g_lang]["WORD_UNTITLED"]) {
        save_as_list();
        return;
    }

    /* lock and invoke post request */
    lock_workspace();
    g_meta_string = g_volume_lists.get(TabNavigation.get_active_tab());
    g_operation_code = g_PROCESS_SAVE_TO_DB;
    let postData = "label=" + TabNavigation.get_active_tab() + "&data=" + g_volume_lists.get(TabNavigation.get_active_tab()).toString();
    WebClient.post("/p.php?!=save", handle_response, postData);
}

/* save as */
function save_as_list() {

    /* no objects in dataset */
    if (g_volume_lists.get(TabNavigation.get_active_tab()).count() == 0)
        return;

    /* not logged in */
    if ( !g_user.isLoggedIn() ) {
        display_login_prompt();
        return;
    }

    /* cloud service has expired or workspace is locked (pending io) */
    if ( has_service_expired() || g_locked_workspace )
        return;

    /* message prompt */
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["SET_TITLE"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["SET_TITLE_TEXT_1"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_SAVE"], true);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_CANCEL"]);
    g_nsl_prompt.setOperation(g_PROCESS_SAVE_AS);
    g_nsl_prompt.show(true);
}

/* close a volume list */
function close_list(index_t, skip_unsaved_check = false) {

    /* tab text descriptor */
    const tab_text = TabNavigation.get_text(index_t);

    /* query whether the closure should proceed if unsaved data exists... */
    if ( g_volume_lists.get(tab_text).is_unsaved() && !skip_unsaved_check ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["TITLE_UNSAVED"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["MESSAGE_UNSAVED"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_YES"], true);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_CANCEL"]);
        g_nsl_prompt.setOperation(g_CLOSE_LIST_UNSAVED);
        g_nsl_prompt.show();
        return;
    }

    /* delete the volumetric dataset */
    g_volume_lists.delete(tab_text);

    /* if tab to be closed is the last active tab */
    if (TabNavigation.count_open_tabs() == 1)
        g_volume_lists.set(g_language_data[g_lang]["WORD_UNTITLED"], new VolumeList());

    /* close the active tab */
    TabNavigation.close(index_t, g_language_data[g_lang]["WORD_UNTITLED"]);

    /* update volumetric dataset */
    display_volume_list();
}

/* add surplus into the current active volume list */
function add_surplus(label) {
    if ( has_service_expired() )
        return;

    /*  race condition ensures that due to tcp delays, the lock will
        not release until confirmation is provided by the operation
        g_REMOVE_SURPLUS_VOLUME - it simply ensures zero packet overlap */
    if ( g_surplus_add_cancel )
        return;

    let mm3 = parseFloat(g_surplus_values.get(label));
    let surplusObject = new Surplus(label, mm3);
    g_volume_lists.get(TabNavigation.get_active_tab()).add(surplusObject);
    display_volume_list();
}

/* load surpluses from database - invoked upon fresh login */
function load_surpluses() {
    g_operation_code = g_LOAD_SURPLUSES;
    WebClient.get('/p.php?!=load_surpluses', handle_response);
}

/* reload surplus definitions bound to the user account */
function reload_surplus() {
    let map_t = new Map([...g_surplus_values.entries()].sort());
    let surplus_html = "<div class=\"surplus-items\">";
    for (const key of map_t.keys()) {
        surplus_html += "<li class=\"submenu-item\" onclick=\"javascript:add_surplus('" + key + "');\">";
        surplus_html += "<a href=\"#\">&plus; " + Nsl.limit_string(key,20) + "<span onclick=\"javascript:remove_surplus('"+key+"');\" class=\"delete surplus-delete\"></span></a>";
        surplus_html += "</li>";
    }
    surplus_html += "</div>";
    if ( surplus_html.length > 33 )
        surplus_html += "<li class=\"submenu-divider\"></li>";
    document.getElementById('surplus_volumes').innerHTML = surplus_html;
    g_surplus_values = map_t;
}

/* display list already defined message  */
function display_list_already_defined() {
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["DUPLICATE_TITLE"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["DUPLICATE_TEXT"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
    g_nsl_prompt.show();
}

/* open file from database using the descriptor given */
function open_file(file_t) {
    if ( TabNavigation.has_title(file_t) ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["VOLUME_DATASET_ALREADY_OPEN"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["VOLUME_DATASET_TEXT"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
        g_nsl_prompt.show();
        let n = TabNavigation.index_of(file_t);
        TabNavigation.focus(n);
        return;
    }
    lock_workspace();
    g_nsl_prompt.hide();
    g_operation_code = g_LOAD_FILE_FROM_DB;
    WebClient.get("/p.php?!=load&descriptor=" + file_t, handle_response);
}

/* compile api response in html formatted string */
function compile_file_list_string(responseData)
{
    let string_t = `
    <div id="file-list-search">
        <input type="text" name="file-search-text" id="file-search-text" placeholder="`+ g_language_data[g_lang]["SEARCH_FOR"] +`" value="" onkeyup="query_file_search();" />
    </div>
    `;
    if (responseData != 'FALSE') {
        let files_list = responseData.split('#');
        string_t += '<div id="file-list-wrapper">';
        for (let n = 0; n < files_list.length; n++) {
            let file_t = files_list[n].split(':');
            let descriptor = file_t[0];
            let last_modified = Nsl.ts_to_std_date(file_t[1]);
            let data_size = Nsl.bytes_to_string(file_t[2]);
            string_t += `
            <div class="file-list-row file-list-row-even" onclick="open_file('` + descriptor + `');">
                <div class="file-list-col">` + Nsl.limit_string(descriptor, 30) + `</div>
                <div class="file-list-col div-right div-fixed div-align-right">` + data_size + `</div>
                <div class="file-list-col div-right">` + last_modified + `</div>
                <div class="clear"></div>
            </div>
            `;
        }
        string_t += '</div>';
    }
    else
    {
        string_t += '<div id="file-list-no-results">'+ g_language_data[g_lang]["NO_FILE"] +'</div>';
    }
    return string_t;
}

/* handles responses from server side requests */
function handle_response(responseData)
{
    let string_t;

    switch (g_operation_code)
    {
        /* add surplus volume */
        case g_ADD_SURPLUS_VOLUME:
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["SURPLUS_VOLUME"]);
            if (responseData != 'FALSE' && responseData.indexOf(':') != -1) {
                let strt = responseData.toString().split(':');
                g_surplus_values.set(strt[0], parseFloat(strt[1]));
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_VOLUME_TEXT"]);
                reload_surplus();
            }
            else if (responseData == 'NONE_SUBSCRIBER_LIMIT_REACHED') {
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_LIMIT_REACHED"]);
            }
            else {
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_SAVE_IO_ERROR"]);
            }
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
            g_nsl_prompt.show();
            break;

        /* remove surplus from account */
        case g_REMOVE_SURPLUS_VOLUME:
            if ( responseData == 'TRUE' ) {
                let volumeList = g_volume_lists.get(TabNavigation.get_active_tab());
                while ( volumeList.labelExists(g_meta_string) )
                    volumeList.delete(g_meta_string);
                g_surplus_values.delete(g_meta_string);
                g_surplus_add_cancel = false;
                reload_surplus();
                update_display();
            }
            else {
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ERROR"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_REMOVAL_ERROR"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
                g_nsl_prompt.show();
            }
            break;

        /* add list tab */
        case g_ADD_LIST_TAB:
            if (responseData != 'LIST_ALREADY_EXISTS') {
                add_list(responseData);
                return;
            }
            display_list_already_defined();
            break;

        /* open a list from the cloud io */
        case g_OPEN_LIST:
            g_socket_data = "";
            if (responseData.length > 0) {
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["DATASET_OPEN"]);
                g_nsl_prompt.setMessage(compile_file_list_string(responseData));
                g_nsl_prompt.addButton(g_language_data[g_lang]["DATASET_CANCEL"]);
                g_nsl_prompt.show();
                document.getElementById('file-search-text').focus();
            }
            else {
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["NO_DATASETS_EXIST"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["NO_LISTS_DEFINED"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
                g_nsl_prompt.show();
            }
            break;

        /* process the save request to the database */
        case g_PROCESS_SAVE_TO_DB:
            unlock_workspace();
            g_nsl_prompt.clear();

            if (responseData == "TRUE") {
                g_nsl_prompt.setTitle(g_language_data[g_lang]["VOLUMES_SAVED"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["THE_VOLUMES_FOR"] +' '+ TabNavigation.get_active_tab() +' '+ g_language_data[g_lang]["HAVE_BEEN_SAVED"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
                g_volume_lists.get(g_meta_string).flag_as_saved();
            }
            else if (responseData == "NONE_SUBSCRIBER_LIMIT_REACHED") {
                g_nsl_prompt.setTitle(g_language_data[g_lang]["USAGE_LIMIT_REACHED"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["VOLUME_LIST_LIMIT"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            }
            else if (responseData != "ALREADY_SAVED" ) {
                g_nsl_prompt.setOperation(g_RETRY_SAVING_LIST);
                g_nsl_prompt.setTitle(g_language_data[g_lang]["SAVING_PROBLEM"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["THE_VOLUMES_FOR"] +' '+ TabNavigation.get_active_tab() +' '+ g_language_data[g_lang]["COULD_NOT_BE_SAVED"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_RETRY"]);
            }
            else
                return;
            g_nsl_prompt.show();
            break;

        /* process save as */
        case g_PROCESS_SAVE_AS:

            unlock_workspace();
            if (responseData != 'LIST_ALREADY_EXISTS') {
                let key_t = TabNavigation.get_active_tab();
                TabNavigation.rename(responseData);
                g_volume_lists.set(responseData, g_volume_lists.get(key_t));
                delete g_volume_lists[key_t];
                save_list();
                return;
            }
            display_list_already_defined();
            break;

        /* process search string */
        case g_QUERY_FILE_SEARCH:

            let searchTerm = document.getElementById('file-search-text').value.trim();
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["DATASET_OPEN"]);
            g_nsl_prompt.setMessage(compile_file_list_string(responseData));
            g_nsl_prompt.addButton(g_language_data[g_lang]["DATASET_CANCEL"]);
            g_nsl_prompt.show();
            document.getElementById('file-search-text').value = searchTerm;
            document.getElementById('file-search-text').focus();
            break;

        /* volume data read from database - process it */
        case g_LOAD_FILE_FROM_DB:

            if (responseData != 'FALSE')
            {
                /* don't proceed until entire string has been returned */
                g_socket_data = g_socket_data + responseData;
                if ( g_socket_data.indexOf("@END") == -1 )
                    return;

                /* terminator reached, unlock the workspace */
                unlock_workspace();

                /* get active tab name */
                let text_t = TabNavigation.get_active_tab();

                /* split descriptor from volumetric data */
                let data_t = responseData.split('@VOLUME.CC@');

                /* trim string by eliminating last four characters */
                data_t[data_t.length-1] = data_t[data_t.length-1].substr(0, data_t[data_t.length-1].length - 4);

                /* if tab name already exists buy the data contexts are zero, we replace */
                if (text_t == g_language_data[g_lang]["WORD_UNTITLED"] && g_volume_lists.get(text_t).count() == 0) {
                    delete g_volume_lists.get(g_language_data[g_lang]["WORD_UNTITLED"]);
                    TabNavigation.rename(data_t[0]);
                }
                else {
                    /* add the tab */
                    TabNavigation.add(data_t[0]);
                }

                /* set */
                g_volume_lists.set(data_t[0], VolumeList.fromString(data_t[1]));
                display_volume_list();
            }
            break;

        /* check login status */
        case g_LOGIN_ACCOUNT:
            if (responseData.indexOf('TRUE') == -1)
            {
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ISSUE"]);
                g_nsl_prompt.setMessage(responseData +'.');
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_RETRY"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
                g_nsl_prompt.setOperation(g_RETRY_LOGIN);
                g_nsl_prompt.show();
            }
            else
            {
                g_user.setLoggedIn(true);
                load_surpluses();
                document.getElementById('side_menu_for_account').innerHTML = `
                <li class="submenu-item side-menu-pop">
                <a href="#">
                `+ g_language_data[g_lang]["WORD_ACCOUNT"] +`<div class="side-menu-arrow">&#129082;</div>
                </a>
                <div class="sidemenu">
                <ul class="submenu submenu-side-top">
                    <li class="submenu-item submenu-item-first" id="change_passwd_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["CHANGE_PASSWORD"] +`
                    </a>
                    </li>
                    <li class="submenu-item" id="subscription_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["SUBSCRIPTION"] +`
                    </a>
                    </li>
                    <li class="submenu-item submenu-item-last" id="sign_out_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["SIGN_OUT"] +`
                    </a>
                    </li>
                </ul>
                </div>
                </li>
                <li class="submenu-item" id="access_account_item" style="display:none;">
                <a href="#">
                `+ g_language_data[g_lang]["ACCESS_MY_ACCOUNT"] +`
                </a>
                </li>
                <li class="submenu-divider"></li>
                `;
                if ( responseData.indexOf('-') != -1 ) {
                    let preferences_t = responseData.split('-');
                    if ( preferences_t.length == 3 ) {
                        RadioButton.SelectViaValue('resolution', VolumeCCApp.resolution_id_to_value(preferences_t[1]));
                        RadioButton.SelectViaValue('rounding-option', VolumeCCApp.rounding_id_to_value(preferences_t[2]));
                    }
               }
               reset_event_listeners();
               query_subscription_status();
            }
            break;

        /* status check */
        case g_STATUS_CHECK:
            g_is_running = responseData.includes('RUNNING');
            if ( g_is_running ) {
                setTimeout(query_service_status, g_SERVICE_CHECK_INTERVAL);
                string_t = responseData.split(':');
                g_MAX_GUEST_VOLUMES = parseInt(string_t[1]);
                g_MAX_NON_SUB_VOLUMES = parseInt(string_t[2]);
                g_MAX_SUB_VOLUMES = parseInt(string_t[3]);
                g_LOGIN_REQUIRED_FOR_EXPORT = parseInt(string_t[4]) == 1;
                g_operation_code = 1001;
                WebClient.get("/p.php?!=is_logged_in&is_js_app=true", handle_response);
                document.getElementById('OBJECTS_FOR_GUEST').innerText = g_MAX_GUEST_VOLUMES.toString();
                document.getElementById('OBJECTS_FOR_USER').innerText = g_MAX_NON_SUB_VOLUMES.toString();
                document.getElementById('human_agents_n').innerText = parseInt(string_t[8]);
            }
            break;

        /* process signout */
        case g_SIGNOUT:
            if (responseData == 'TRUE')
            {
                document.getElementById('side_menu_for_account').innerHTML = `
                <li class="submenu-item side-menu-pop" style="display:none;">
                <a href="#">
                `+ g_language_data[g_lang]["ACCOUNT"] +`<div class="side-menu-arrow">&#129082;</div>
                </a>
                <div class="sidemenu">
                <ul class="submenu submenu-side-top">
                    <li class="submenu-item submenu-item-first" id="change_passwd_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["CHANGE_PASSWORD"] +`
                    </a>
                    </li>
                    <li class="submenu-item" id="subscription_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["SUBSCRIPTION"] +`
                    </a>
                    </li>
                    <li class="submenu-item submenu-item-last" id="sign_out_item">
                    <a href="#">
                    `+ g_language_data[g_lang]["SIGN_OUT"] +`
                    </a>
                    </li>
                </ul>
                </div>
                </li>
                <li class="submenu-item" id="access_account_item">
                <a href="#">
                `+ g_language_data[g_lang]["ACCESS_MY_ACCOUNT"] +`
                </a>
                </li>
                <li class="submenu-divider"></li>
                `;
                document.getElementById('surplus_volumes').innerHTML = '';
                g_surplus_values = new Map();
                display_account_benefits();
                g_user.setLoggedIn(false);
                g_user.setPremium(false);
                update_menu_highlights();
                reset_event_listeners();
            }
            else
            {
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ISSUE"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["PROCESSOR_ERROR"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
                g_nsl_prompt.show();
            }
            break;

        /* make new account */
        case g_MAKE_NEW_ACCOUNT:
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["REGISTRATION_TITLE"]);
            g_nsl_prompt.setMessage(responseData);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
            g_nsl_prompt.show();
            break;

        /* process surplus xml from database */
        case g_LOAD_SURPLUSES:
            if ( responseData != 'FALSE' ) {

                /* don't proceed until entire string has been returned */
                g_socket_data = g_socket_data + responseData;
                if ( g_socket_data.indexOf("@END") == -1 )
                    return;
                responseData = g_socket_data.slice(0, -4);

                /* process the surplus payload */
                let data_t = responseData.split(g_DELIMITOR_PRIORITY_3);
                g_surplus_values.clear();
                let surpluses = data_t[1].split(',');
                for ( let n = 0; n < surpluses.length; n++ ) {
                    let value_t = surpluses[n].split(':');
                    let label_t = atob(value_t[0]);
                    let mm3_t = parseFloat(value_t[1]);
                    g_surplus_values.set(label_t, mm3_t);
                }

                /* reset socket variable */
                g_socket_data = "";
                reload_surplus();
                query_preferences();
            }
            else if ( responseData == "FALSE" ) {
                query_preferences();
            }
            break;

        /* forgotten password */
        case g_FORGOT_PASSWD:
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["PASSWORD_FORGOTTEN"]);
            g_nsl_prompt.setMessage(responseData + '.');
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
            g_nsl_prompt.show();
            break;

        /* change password */
        case g_CHANGE_PASSWD:

            g_nsl_prompt.clear();
            if (responseData != 'FALSE') {
                g_nsl_prompt.setTitle(g_language_data[g_lang]["PASSWORD_CHANGED"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_CHANGED_OK"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"], true);
            }
            else {
                g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ISSUE"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_CHANGE_ERROR"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            }
            g_nsl_prompt.show();
            break;

        /* check subscription status */
        case g_CHECK_SUBSCRIPTION:

            g_nsl_prompt.clear();
            if ( responseData.indexOf(':') != -1 )
            {
                let string_t = responseData.split(':');
                let status_t = '';
                if ( string_t[1] == '1' )
                {
                    status_t = g_language_data[g_lang]["SUBSCRIPTION_ACTIVE"];
                    g_isSubscribed = true;
                }
                else if ( string_t[1] == '2' )
                {
                    status_t = g_language_data[g_lang]["SUBSCRIPTION_CANCELLATION"];
                    g_isSubscribed = true;
                }
                else if ( string_t[1] == '3' )
                {
                    status_t = g_language_data[g_lang]["SUBSCRIPTION_EXPIRED"];
                    g_isSubscribed = false;
                }
                g_nsl_prompt.setTitle(g_language_data[g_lang]["SUBSCRIPTION_STATUS"]);
                g_nsl_prompt.setMessage(`
                <table>
                    <tr>
                        <td>`+g_language_data[g_lang]["WORD_STATUS"]+`</td><td class="stat-left-padding">`+ status_t +`</td>
                    </tr>
                    <tr>
                        <td>`+g_language_data[g_lang]["WORD_EXPIRES"]+`</td><td class="stat-left-padding">`+ Nsl.ts_to_std_date(string_t[0]) +`</td>
                    </tr>
                </table>
                `);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
                if ( string_t[1] == '1' )
                {
                    g_nsl_prompt.addButton(g_language_data[g_lang]["SUBSCRIPTION_CANCEL"]);
                    g_nsl_prompt.setOperation(g_CANCEL_SUB);
                }
                else
                {
                    g_nsl_prompt.addButton(g_language_data[g_lang]["SUBSCRIPTION_RESUME"]);
                    g_nsl_prompt.setOperation(g_RESUME_SUB);
                }
            }
            else
            {
                g_nsl_prompt.setOperation(g_ADD_SUBSCRIPTION);
                g_nsl_prompt.setTitle(g_language_data[g_lang]["ADD"] +' '+ g_language_data[g_lang]["SUBSCRIPTION"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIPTION_NOT_ACTIVE"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["SUBSCRIPTION"]);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            }
            g_nsl_prompt.show();
            break;

        /* resume subscription */
        case g_RESUME_SUB:
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["SUBSCRIPTION_RESUME"]);
            if ( responseData != 'FALSE' )
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIPTION_RESUME_TEXT"]);
            else
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIPTION_ERROR_TEXT"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            g_nsl_prompt.show();
            break;

        /* cancel subscription */
        case g_CANCEL_SUB:
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["SUBSCRIPTION_CANCEL_TITLE"]);
            if (responseData != 'FALSE')
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIPTION_CANCEL_SCHEDULED"]);
            else
                g_nsl_prompt.setMessage(g_language_data[g_lang]["SUBSCRIPTION_ERROR"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            g_nsl_prompt.show();
            break;

        /* query subscription status */
        case g_QUERY_SUBSCRIPTION_STATUS:

            if (responseData.indexOf(':') != -1)
            {
                let string_t = responseData.split(':');
                if ( string_t[1] == '1' )
                    g_isSubscribed = true;
                else if ( string_t[1] == '2' )
                    g_isSubscribed = true;
                else if ( string_t[1] == '3' )
                    g_isSubscribed = false;
                g_user.setPremium(g_isSubscribed);
            }
            break;

        /* network export */
        case g_EXPORT_VOLUME:
            g_nsl_prompt.clear();
            if (responseData != 'ERROR')
            {
                g_nsl_prompt.setTitle('Sharable Volume');
                g_nsl_prompt.setMessage(`
                <div class="form-row">
                    <div class="form-label">
                        <label for="id">`+ g_language_data[g_lang]["WORD_IDENTIFIER"] +`:</label>
                    </div>
                    <div class="form-field">
                        <input type="text" name="id" id="id" value="`+ responseData +`" readonly />
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="form-row">
                    <div class="form-label">
                        <label for="link">Url:</label>
                    </div>
                    <div class="form-field">
                        <input type="text" name="link" id="link" value="https://www.volume.cc/V`+ responseData +`/" readonly />
                    </div>
                    <div class="clear"></div>
                </div>
                `);
                g_nsl_prompt.setOperation(g_SHOW_EXPORT_LINK);
                g_nsl_prompt.addButton(g_language_data[g_lang]["COPY_URL"]);
            }
            else
            {
                g_nsl_prompt.setTitle(g_language_data[g_lang]["NETWORK_PROBLEM"]);
                g_nsl_prompt.setMessage(g_language_data[g_lang]["DATASET_UNPROCESSED"]);
            }
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
            g_nsl_prompt.show();
            break;

        /*  */
        case g_LOAD_REMOTE_VOLUMES:
            if ( responseData.indexOf(g_DELIMITOR_PRIORITY_4) != -1 ) {
                let load_ok = import_data(responseData);
                unlock_workspace();
                if ( !load_ok ) {
                    g_nsl_prompt.clear();
                    g_nsl_prompt.setTitle(g_language_data[g_lang]["FORMAT_PROBLEM"]);
                    g_nsl_prompt.setMessage(g_language_data[g_lang]["VOLUME_DATASET_UNPROCESSED"]);
                    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
                    g_nsl_prompt.show();
                }
                g_operation_code = 1001;
                WebClient.get("/p.php?!=is_logged_in&is_js_app=true", handle_response);
                Nsl.sleep(5000).then(() => {
                    query_service_status();
                });
            }
            break;

        case g_POST_PREFERENCES:
            /* set, nothing to see here */
            break;

        case g_QUERY_PREFERENCES:
            if ( responseData.indexOf('-') != -1 ) {
                let preferences_t = responseData.split('-');
                if ( preferences_t.length == 2 ) {
                    RadioButton.SelectViaValue('resolution', VolumeCCApp.resolution_id_to_value(preferences_t[0]));
                    RadioButton.SelectViaValue('rounding-option', VolumeCCApp.rounding_id_to_value(preferences_t[1]));
                    display_volume_list();
                }
                Nsl.sleep(2500).then(() => {
                    g_operation_code = g_QUERY_IS_PREMIUM;
                    WebClient.get("/p.php?!=ip&is_js_app=true", handle_response);
                });
            }
            break;

        case 1000:
            /* cookie return */
            break;

        case 1001:
            /* is_logged_in */
            if ( responseData.indexOf("TRUE") != -1 ) {
                g_user.setLoggedIn(true);
                g_operation_code = g_QUERY_IS_PREMIUM;
                WebClient.get("/p.php?!=ip&is_js_app=true", handle_response);
            }
            break;

        case g_QUERY_IS_PREMIUM:
            /* is premium */
            if ( responseData.indexOf("TRUE") != -1 ) {
                g_user.setPremium(true);
            }
            break;
    }
}

/* can modify the existing list */
function can_modify()
{
    /* obtain count of number of current objects */
    let count = g_volume_lists.get(TabNavigation.get_active_tab()).count();

    /* exceed gbuest limit? */
    if ( !g_user.isLoggedIn() && count >= g_MAX_GUEST_VOLUMES ) {
        display_account_benefits();
        return false;
    }

    /* exceed non subscription limit? */
    if ( !g_user.isPremium() && count >= g_MAX_NON_SUB_VOLUMES ) {
        display_subscription_benefits();
        return false;
    }
    return true;
}

function update_display() {
    display_volume_list();
    update_menu_highlights();
}

function update_barrel()
{
    let height = document.getElementById('height').value;
    let ediameter = document.getElementById('ediameter').value;
    let mdiameter = document.getElementById('mdiameter').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_e = document.getElementById('unit_for_ediameter').value;
    let res_m = document.getElementById('unit_for_mdiameter').value;
    if ( !numeric_inputs_ok(height, ediameter, mdiameter) )
        return;
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    ediameter = ResolutionSolver.linear_transform(ediameter, res_e.toLowerCase(), g_resolution.Millimeters);
    mdiameter = ResolutionSolver.linear_transform(mdiameter, res_m.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Barrel(g_nsl_prompt.metaData(), height, ediameter, mdiameter);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_capsule()
{
    let radius = document.getElementById('radius').value;
    let height = document.getElementById('height').value;
    let res_r = document.getElementById('unit_for_radius').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(radius, height) )
        return;
    radius = ResolutionSolver.linear_transform(radius, res_r.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Capsule(g_nsl_prompt.metaData(), radius, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_cone()
{
    let radius = document.getElementById('radius').value;
    let height = document.getElementById('height').value;
    let res_r = document.getElementById('unit_for_radius').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(radius, height) )
        return;
    radius = ResolutionSolver.linear_transform(radius, res_r.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Cone(g_nsl_prompt.metaData(), radius, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_cube()
{
    let edge_length = document.getElementById('length').value;
    if ( !numeric_inputs_ok(edge_length) )
        return;
    let el_res = document.getElementById('unit_for_length').value;
    edge_length = ResolutionSolver.linear_transform(edge_length, el_res.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Cube(g_nsl_prompt.metaData(), edge_length);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_cylinder()
{
    let inner = document.getElementById('innerd').value;
    let length = document.getElementById('length').value;
    let res_id = document.getElementById('unit_for_innerd').value;
    let res_len = document.getElementById('unit_for_length').value;
    if ( !numeric_inputs_ok(inner, length) )
        return;
    inner = ResolutionSolver.linear_transform(inner, res_id.toLowerCase(), g_resolution.Millimeters);
    length = ResolutionSolver.linear_transform(length, res_len.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Cylinder(g_nsl_prompt.metaData(), inner, length);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_ellipsoid()
{
    let axis_a = document.getElementById('axisa').value;
    let axis_b = document.getElementById('axisb').value;
    let axis_c = document.getElementById('axisc').value;
    if ( !numeric_inputs_ok(axis_a, axis_b, axis_c) )
        return;
    let res_axis_a = document.getElementById('unit_for_axisa').value;
    let res_axis_b = document.getElementById('unit_for_axisb').value;
    let res_axis_c = document.getElementById('unit_for_axisc').value;
    axis_a = ResolutionSolver.linear_transform(axis_a, res_axis_a.toLowerCase(), g_resolution.Millimeters);
    axis_b = ResolutionSolver.linear_transform(axis_b, res_axis_b.toLowerCase(), g_resolution.Millimeters);
    axis_c = ResolutionSolver.linear_transform(axis_c, res_axis_c.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Ellipsoid(g_nsl_prompt.metaData(), axis_a, axis_b, axis_c);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_frustum()
{
    let radius_top = document.getElementById('radiustop').value;
    let radius_bottom = document.getElementById('radiusbottom').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(radius_top, radius_bottom, height) )
        return;
    let res_rtop = document.getElementById('unit_for_radiustop').value;
    let res_rbottom = document.getElementById('unit_for_radiusbottom').value;
    let res_height = document.getElementById('unit_for_height').value;
    radius_top = ResolutionSolver.linear_transform(radius_top, res_rtop.toLowerCase(), g_resolution.Millimeters);
    radius_bottom = ResolutionSolver.linear_transform(radius_bottom, res_rbottom.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_height.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new ConicalFrustum(g_nsl_prompt.metaData(), radius_top, radius_bottom, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_pyramid()
{
    let length = document.getElementById('baselength').value;
    let width = document.getElementById('basewidth').value;
    let height = document.getElementById('height').value;
    let res_l = document.getElementById('unit_for_baselength').value;
    let res_w = document.getElementById('unit_for_basewidth').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(length, width, height) )
        return;
    length = ResolutionSolver.linear_transform(length, res_l.toLowerCase(), g_resolution.Millimeters);
    width = ResolutionSolver.linear_transform(width, res_w.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new RectangularPyramid(g_nsl_prompt.metaData(), length, width, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_pyramid_frustum()
{
    let length = document.getElementById('length').value;
    let depth = document.getElementById('depth').value;
    let height = document.getElementById('height').value;
    let valuep = document.getElementById('valuep').value;
    let valueq = document.getElementById('valueq').value;
    let res_l = document.getElementById('unit_for_length').value;
    let res_d = document.getElementById('unit_for_depth').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_p = document.getElementById('unit_for_valuep').value;
    let res_q = document.getElementById('unit_for_valueq').value;
    if ( !numeric_inputs_ok(length, depth, height, valuep, valueq) )
        return;
    length = ResolutionSolver.linear_transform(length, res_l.toLowerCase(), g_resolution.Millimeters);
    depth = ResolutionSolver.linear_transform(depth, res_d.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    valuep = ResolutionSolver.linear_transform(valuep, res_p.toLowerCase(), g_resolution.Millimeters);
    valueq = ResolutionSolver.linear_transform(valueq, res_q.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new PyramidFrustum(g_nsl_prompt.metaData(), length, depth, height, valuep, valueq);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_rect_tank()
{
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let res_l = document.getElementById('unit_for_length').value;
    let res_w = document.getElementById('unit_for_width').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(length, width, height) )
        return;
    length = ResolutionSolver.linear_transform(length, res_l.toLowerCase(), g_resolution.Millimeters);
    width = ResolutionSolver.linear_transform(width, res_w.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new RectangularTank(g_nsl_prompt.metaData(), length, width, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_spherical_cap()
{
    let rBase = document.getElementById('radiusbase').value;
    let height = document.getElementById('height').value;
    let res_l = document.getElementById('unit_for_radiusbase').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(rBase, height) )
        return;
    rBase = ResolutionSolver.linear_transform(rBase, res_l.toLowerCase(), g_resolution.Millimeters);
    height = ResolutionSolver.linear_transform(height, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new SphericalCap(g_nsl_prompt.metaData(), rBase, height);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_stadium_frustum()
{
    let ul = document.getElementById('upperlen').value;
    let uw = document.getElementById('upperwidth').value;
    let ll = document.getElementById('lowerlength').value;
    let lw = document.getElementById('lowerwidth').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(ul, uw, ll, lw, h) )
        return;
    let res_ul = document.getElementById('unit_for_upperlen').value;
    let res_uw = document.getElementById('unit_for_upperwidth').value;
    let res_ll = document.getElementById('unit_for_lowerlength').value;
    let res_lw = document.getElementById('unit_for_lowerwidth').value;
    let res_h = document.getElementById('unit_for_height').value;
    ul = ResolutionSolver.linear_transform(ul, res_ul.toLowerCase(), g_resolution.Millimeters);
    uw = ResolutionSolver.linear_transform(uw, res_uw.toLowerCase(), g_resolution.Millimeters);
    ll = ResolutionSolver.linear_transform(ll, res_ll.toLowerCase(), g_resolution.Millimeters);
    lw = ResolutionSolver.linear_transform(lw, res_lw.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new StadiumFrustum(g_nsl_prompt.metaData(), ul, uw, ll, lw, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_torus()
{
    let major_rad = document.getElementById('major_r').value;
    let minor_rad = document.getElementById('minor_r').value;
    if ( parseFloat(minor_rad) >= parseFloat(major_rad) ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["TORUS_PARAM_TITLE"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["TORUS_PARAM_BOUNDS"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
        g_nsl_prompt.show();
        return;
    }
    let major_res = document.getElementById('unit_for_major_r').value;
    let minor_res = document.getElementById('unit_for_minor_r').value;
    if ( !numeric_inputs_ok(major_rad, minor_rad) )
        return;
    major_rad = ResolutionSolver.linear_transform(major_rad, major_res.toLowerCase(), g_resolution.Millimeters);
    minor_rad = ResolutionSolver.linear_transform(minor_rad, minor_res.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Torus(g_nsl_prompt.metaData(), major_rad, minor_rad);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_sphere()
{
    let radius = document.getElementById('radius').value;
    let res_r = document.getElementById('unit_for_radius').value;
    if ( !numeric_inputs_ok(radius) )
        return;
    radius = ResolutionSolver.linear_transform(radius, res_r.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new Sphere(g_nsl_prompt.metaData(), radius);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_heptagonal_prism()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new HeptagonalPrism(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_heptagonal_pyramid()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new HeptagonalPyramid(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_hexagonal_prism()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new HexagonalPrism(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_hexagonal_pyramid()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new HexagonalPyramid(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_octagonal_prism()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new OctagonalPrism(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_octagonal_pyramid()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new OctagonalPyramid(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_pentagonal_prism()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new PentagonalPrism(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_pentagonal_pyramid()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new PentagonalPyramid(g_nsl_prompt.metaData(), b, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_triangular_prism()
{
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let l = document.getElementById('length').value;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_l = document.getElementById('unit_for_length').value;
    if ( !numeric_inputs_ok(b, h, l) )
        return;
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    l = ResolutionSolver.linear_transform(l, res_l.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new TriangularPrism(g_nsl_prompt.metaData(), b, h, l);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_triangular_pyramid()
{
    let l = document.getElementById('length').value;
    let d = document.getElementById('depth').value;
    let h = document.getElementById('height').value;
    let res_l = document.getElementById('unit_for_length').value;
    let res_d = document.getElementById('unit_for_depth').value;
    let res_h = document.getElementById('unit_for_height').value;
    if ( !numeric_inputs_ok(l, d, h) )
        return;
    l = ResolutionSolver.linear_transform(l, res_l.toLowerCase(), g_resolution.Millimeters);
    d = ResolutionSolver.linear_transform(d, res_d.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new TriangularPyramid(g_nsl_prompt.metaData(), l, d, h);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

function update_trapezoidal_prism()
{
    let t = document.getElementById('top').value;
    let b = document.getElementById('bottom').value;
    let h = document.getElementById('height').value;
    let d = document.getElementById('depth').value;
    let res_t = document.getElementById('unit_for_top').value;
    let res_b = document.getElementById('unit_for_bottom').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_d = document.getElementById('unit_for_depth').value;
    if ( !numeric_inputs_ok(t, b, h, d) )
        return;
    t = ResolutionSolver.linear_transform(t, res_t.toLowerCase(), g_resolution.Millimeters);
    b = ResolutionSolver.linear_transform(b, res_b.toLowerCase(), g_resolution.Millimeters);
    h = ResolutionSolver.linear_transform(h, res_h.toLowerCase(), g_resolution.Millimeters);
    d = ResolutionSolver.linear_transform(d, res_d.toLowerCase(), g_resolution.Millimeters);
    let volumeObject = new TrapezoidalPrism(g_nsl_prompt.metaData(), t, b, h, d);
    let volumeInList = g_volume_lists.get(TabNavigation.get_active_tab()).get(g_nsl_prompt.metaData());
    if ( volumeObject.equals(volumeInList) )
        return;
    g_volume_lists.get(TabNavigation.get_active_tab()).modify(g_nsl_prompt.metaData(), volumeObject);
    update_display();
}

/* signals whether the text input is acceptable */
function add_object_check(label) {

    if (label == "") {
        display_no_label_prompt();
        return false;
    }

    /* check for prohibited characters */
    let prohibited = [g_DELIMITOR_PRIORITY_0, g_DELIMITOR_PRIORITY_1, g_DELIMITOR_PRIORITY_2, g_DELIMITOR_PRIORITY_3, g_DELIMITOR_PRIORITY_5, '"', ']', '[', '\''];
    for (let n = 0; n < prohibited.length; n++ ) {
        if ( label.toString().includes(prohibited[n]) ) {
            display_label_invalid();
            return false;
        }
    }

    /* check the existent tabs */
    if (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label)) {
        display_duplicate_label_prompt();
        return false;
    }

    return true;
}

function add_variable_object(volumeType, label, p, p_res)
{
    let quantity = parseInt(document.getElementById('quantity').value);
    let count = parseInt(g_volume_lists.get(TabNavigation.get_active_tab()).count());
    let delta_q = quantity;

    if ( !g_user.isLoggedIn() ) {
        if ( quantity + count > g_MAX_GUEST_VOLUMES )
            quantity = g_MAX_GUEST_VOLUMES - count;
    }
    if ( quantity == 0 ) {
        if ( !g_user.isLoggedIn() )
            display_account_benefits();
        return;
    }
    let offset = 0;
    p = ResolutionSolver.linear_transform(p, p_res.toLowerCase(), g_resolution.Millimeters);
    for (let n = 0; n < quantity; n++) {
        let label_t = label;
        if (quantity > 1) {
            label_t = label + "_" + (n + 1 + offset).toString();
            while (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label_t)) {
                offset++;
                label_t = label + "_" + (n + 1 + offset).toString();
            }
        }
        let object_t = null;
        switch(volumeType) {
            case VOLUMES.Cube:
                object_t = new Cube(label_t, p);
                break;
            case VOLUMES.Sphere:
                object_t = new Sphere(label_t, p);
                break;
        }
        g_volume_lists.get(TabNavigation.get_active_tab()).add(object_t);
    }
    quantity_notify_check(quantity, delta_q);
    update_display();
}

function quantity_notify_check(quantity, delta_q)
{
    if ( quantity == 0 || delta_q != quantity ) {
        if ( !g_user.isLoggedIn() )
            display_account_benefits();
        else if ( !g_user.isPremium() )
            display_subscription_benefits();
    }
}

function add_two_variable_object(volumeType, label, p, q, p_res, q_res)
{
    let quantity = parseInt(document.getElementById('quantity').value);
    let count = parseInt(g_volume_lists.get(TabNavigation.get_active_tab()).count());
    let delta_q = quantity;
    if ( !g_user.isLoggedIn() ) {
        if ( quantity + count > g_MAX_GUEST_VOLUMES )
            quantity = g_MAX_GUEST_VOLUMES - count;
    }
    else if ( !g_user.isPremium() ) {
        if ( quantity + count > g_MAX_NON_SUB_VOLUMES )
            quantity = g_MAX_NON_SUB_VOLUMES - count;
    }
    let offset = 0;
    p = ResolutionSolver.linear_transform(p, p_res.toLowerCase(), g_resolution.Millimeters);
    q = ResolutionSolver.linear_transform(q, q_res.toLowerCase(), g_resolution.Millimeters);
    for (let n = 0; n < quantity; n++) {
        let label_t = label;
        if (quantity > 1) {
            label_t = label + "_" + (n + 1 + offset).toString();
            while (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label_t)) {
                offset++;
                label_t = label + "_" + (n + 1 + offset).toString();
            }
        }
        let object_t = null;
        switch(volumeType) {
            case VOLUMES.Capsule:
                object_t = new Capsule(label_t, p, q);
                break;
            case VOLUMES.Cylinder:
                object_t = new Cylinder(label_t, p, q);
                break;
            case VOLUMES.Cone:
                object_t = new Cone(label_t, p, q);
                break;
            case VOLUMES.SphericalCap:
                object_t = new SphericalCap(label_t, p, q);
                break;
            case VOLUMES.HeptagonalPrism:
                object_t = new HeptagonalPrism(label_t, p, q);
                break;
            case VOLUMES.HexagonalPrism:
                object_t = new HexagonalPrism(label_t, p, q);
                break;
            case VOLUMES.OctagonalPrism:
                object_t = new OctagonalPrism(label_t, p, q);
                break;
            case VOLUMES.PentagonalPrism:
                object_t = new PentagonalPrism(label_t, p, q);
                break;
            case VOLUMES.HeptagonalPyramid:
                object_t = new HeptagonalPyramid(label_t, p, q);
                break;
            case VOLUMES.HexagonalPyramid:
                object_t = new HexagonalPyramid(label_t, p, q);
                break;
            case VOLUMES.OctagonalPyramid:
                object_t = new OctagonalPyramid(label_t, p, q);
                break;
            case VOLUMES.PentagonalPyramid:
                object_t = new PentagonalPyramid(label_t, p, q);
                break;
            case VOLUMES.Torus:
                object_t = new Torus(label_t, p, q);
                break;
        }
        g_volume_lists.get(TabNavigation.get_active_tab()).add(object_t);
    }
    quantity_notify_check(quantity, delta_q);
    update_display();
}

function add_three_variable_object(volumeType, label, p, q, r, p_res, q_res, r_res)
{
    let quantity = parseInt(document.getElementById('quantity').value);
    let count = parseInt(g_volume_lists.get(TabNavigation.get_active_tab()).count());
    let delta_q = quantity;

    if ( !g_user.isLoggedIn() ) {
        if ( quantity + count > g_MAX_GUEST_VOLUMES )
            quantity = g_MAX_GUEST_VOLUMES - count;
    }
    else if ( !g_user.isPremium() ) {
        if ( quantity + count > g_MAX_NON_SUB_VOLUMES )
            quantity = g_MAX_NON_SUB_VOLUMES - count;
    }

    if ( quantity == 0  ) {
        if ( !g_user.isLoggedIn() )
            display_account_benefits();
        return;
    }

    let offset = 0;
    p = ResolutionSolver.linear_transform(p, p_res.toLowerCase(), g_resolution.Millimeters);
    q = ResolutionSolver.linear_transform(q, q_res.toLowerCase(), g_resolution.Millimeters);
    r = ResolutionSolver.linear_transform(r, r_res.toLowerCase(), g_resolution.Millimeters);
    for (let n = 0; n < quantity; n++)
    {
        let label_t = label;
        if (quantity > 1) {
            label_t = label + "_" + (n + 1 + offset).toString();
            while (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label_t)) {
                offset++;
                label_t = label + "_" + (n + 1 + offset).toString();
        }}
        let object_t = null;
        switch(volumeType) {
            case VOLUMES.RectangularPyramid:
                object_t = new RectangularPyramid(label_t, p, q, r);
                break;
            case VOLUMES.ConicalFrustum:
                object_t = new ConicalFrustum(label_t, p, q, r);
                break;
            case VOLUMES.Ellipsoid:
                object_t = new Ellipsoid(label_t, p, q, r);
                break;
            case VOLUMES.RectangularTank:
                object_t = new RectangularTank(label_t, p, q, r);
                break;
            case VOLUMES.TriangularPrism:
                object_t = new TriangularPrism(label_t, p, q, r);
                break;
            case VOLUMES.TriangularPyramid:
                object_t = new TriangularPyramid(label_t, p, q, r);
                break;
            case VOLUMES.Barrel:
                object_t = new Barrel(label_t, p, q, r);
                break;
        }
        g_volume_lists.get(TabNavigation.get_active_tab()).add(object_t);
    }
    quantity_notify_check(quantity, delta_q);
    update_display();
}

function add_five_variable_object(volumeType, label, p, q, r, s, t, p_res, q_res, r_res, s_res, t_res)
{
    let quantity = parseInt(document.getElementById('quantity').value);
    let count = parseInt(g_volume_lists.get(TabNavigation.get_active_tab()).count());
    let delta_q = quantity;

    if ( !g_user.isLoggedIn() ) {
        if ( quantity + count > g_MAX_GUEST_VOLUMES )
            quantity = g_MAX_GUEST_VOLUMES - count;
    }
    else if ( !g_user.isPremium() ) {
        if ( quantity + count > g_MAX_NON_SUB_VOLUMES )
            quantity = g_MAX_NON_SUB_VOLUMES - count;
    }

    if ( quantity == 0  ) {
        if ( !g_user.isLoggedIn() )
            display_account_benefits();
        return;
    }

    let offset = 0;
    p = ResolutionSolver.linear_transform(p, p_res.toLowerCase(), g_resolution.Millimeters);
    q = ResolutionSolver.linear_transform(q, q_res.toLowerCase(), g_resolution.Millimeters);
    r = ResolutionSolver.linear_transform(r, r_res.toLowerCase(), g_resolution.Millimeters);
    s = ResolutionSolver.linear_transform(s, s_res.toLowerCase(), g_resolution.Millimeters);
    t = ResolutionSolver.linear_transform(t, t_res.toLowerCase(), g_resolution.Millimeters);
    for (let n = 0; n < quantity; n++) {
        let label_t = label;
        if (quantity > 1) {
            label_t = label + "_" + (n + 1 + offset).toString();
            while (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label_t)) {
                offset++;
                label_t = label + "_" + (n + 1 + offset).toString();
            }
        }
        let object_t = null;
        switch(volumeType) {
            case VOLUMES.StadiumFrustum:
                object_t = new StadiumFrustum(label_t, p, q, r, s, t);
                document.getElementById('upperlen').value = object_t.upperLength();
                document.getElementById('upperwidth').value = object_t.upperWidth();
                document.getElementById('lowerlength').value = object_t.lowerLength();
                document.getElementById('lowerwidth').value = object_t.lowerWidth();
                document.getElementById('height').value = object_t.height();
                break;
            case VOLUMES.PyramidFrustum:
                object_t = new PyramidFrustum(label_t, p, q, r, s, t);
                break;
        }
        g_volume_lists.get(TabNavigation.get_active_tab()).add(object_t);
    }
    quantity_notify_check(quantity, delta_q);
    update_display();
}

function add_four_variable_object(volumeType, label, p, q, r, s, p_res, q_res, r_res, s_res)
{
    let quantity = parseInt(document.getElementById('quantity').value);
    let count = parseInt(g_volume_lists.get(TabNavigation.get_active_tab()).count());
    let delta_q = quantity;

    if ( !g_user.isLoggedIn() ) {
        if ( quantity + count > g_MAX_GUEST_VOLUMES )
            quantity = g_MAX_GUEST_VOLUMES - count;
    }
    else if ( !g_user.isPremium() ) {
        if ( quantity + count > g_MAX_NON_SUB_VOLUMES )
            quantity = g_MAX_NON_SUB_VOLUMES - count;
    }
    if ( quantity == 0  ) {
        if ( !g_user.isLoggedIn() )
            display_account_benefits();
        return;
    }

    let offset = 0;
    p = ResolutionSolver.linear_transform(p, p_res.toLowerCase(), g_resolution.Millimeters);
    q = ResolutionSolver.linear_transform(q, q_res.toLowerCase(), g_resolution.Millimeters);
    r = ResolutionSolver.linear_transform(r, r_res.toLowerCase(), g_resolution.Millimeters);
    s = ResolutionSolver.linear_transform(s, s_res.toLowerCase(), g_resolution.Millimeters);
    for (let n = 0; n < quantity; n++) {
        let label_t = label;
        if (quantity > 1) {
            label_t = label + "_" + (n + 1 + offset).toString();
            while (g_volume_lists.get(TabNavigation.get_active_tab()).labelExists(label_t)) {
                offset++;
                label_t = label + "_" + (n + 1 + offset).toString();
            }
        }
        let object_t = null;
        switch(volumeType) {
            case VOLUMES.TrapezoidalPrism:
                object_t = new TrapezoidalPrism(label_t, p, q, r, s);
                break;
        }
        g_volume_lists.get(TabNavigation.get_active_tab()).add(object_t);
    }
    quantity_notify_check(quantity, delta_q);
    update_display();
}

function add_heptagonal_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.HeptagonalPrism, label, b, h, res_b, res_h);
}

function add_heptagonal_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.HeptagonalPyramid, label, b, h, res_b, res_h);
}

function add_hexagonal_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.HexagonalPrism, label, b, h, res_b, res_h);
}

function add_hexagonal_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.HexagonalPyramid, label, b, h, res_b, res_h);
}

function add_octagonal_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.OctagonalPrism, label, b, h, res_b, res_h);
}

function add_octagonal_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.OctagonalPyramid, label, b, h, res_b, res_h);
}

function add_pentagonal_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.PentagonalPrism, label, b, h, res_b, res_h);
}

function add_pentagonal_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(b, h) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.PentagonalPyramid, label, b, h, res_b, res_h);
}

function add_trapezoidal_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let t = document.getElementById('top').value;
    let b = document.getElementById('bottom').value;
    let h = document.getElementById('height').value;
    let d = document.getElementById('depth').value;
    if ( !numeric_inputs_ok(t, b, h, d) )
        return;
    let res_t = document.getElementById('unit_for_top').value;
    let res_b = document.getElementById('unit_for_bottom').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_d = document.getElementById('unit_for_depth').value;
    add_four_variable_object(VOLUMES.TrapezoidalPrism, label, t, b, h, d, res_t, res_b, res_h, res_d);
}

function add_triangular_prism()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let b = document.getElementById('base').value;
    let h = document.getElementById('height').value;
    let l = document.getElementById('length').value;
    if ( !numeric_inputs_ok(b, h, l) )
        return;
    let res_b = document.getElementById('unit_for_base').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_l = document.getElementById('unit_for_length').value;
    add_three_variable_object(VOLUMES.TriangularPrism, label, b, h, l, res_b, res_h, res_l);
}

function add_triangular_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let l = document.getElementById('length').value;
    let d = document.getElementById('depth').value;
    let h = document.getElementById('height').value;
    if ( !numeric_inputs_ok(l, d, h) )
        return;
    let res_l = document.getElementById('unit_for_length').value;
    let res_d = document.getElementById('unit_for_depth').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_three_variable_object(VOLUMES.TriangularPyramid, label, l, d, h, res_l, res_d, res_h);
}

function add_pyramid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let length = document.getElementById('baselength').value;
    let width = document.getElementById('basewidth').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(length, width, height) )
        return;
    let res_l = document.getElementById('unit_for_baselength').value;
    let res_w = document.getElementById('unit_for_basewidth').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_three_variable_object(VOLUMES.RectangularPyramid, label, length, width, height, res_l, res_w, res_h);
}

function add_pyramid_frustum()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let length = document.getElementById('length').value;
    let depth = document.getElementById('depth').value;
    let height = document.getElementById('height').value;
    let valuep = document.getElementById('valuep').value;
    let valueq = document.getElementById('valueq').value;
    if ( !numeric_inputs_ok(length, depth, height, valuep, valueq) )
        return;
    let res_l = document.getElementById('unit_for_length').value;
    let res_d = document.getElementById('unit_for_depth').value;
    let res_h = document.getElementById('unit_for_height').value;
    let res_p = document.getElementById('unit_for_valuep').value;
    let res_q = document.getElementById('unit_for_valueq').value;
    add_five_variable_object(VOLUMES.PyramidFrustum, label, length, depth, height, valuep, valueq, res_l, res_d, res_h, res_p, res_q);
}

function add_rect_tank()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(length, width, height) )
        return;
    let res_l = document.getElementById('unit_for_length').value;
    let res_w = document.getElementById('unit_for_width').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_three_variable_object(VOLUMES.RectangularTank, label, length, width, height, res_l, res_w, res_h);
}

function add_spherical_cap()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let radii_base = document.getElementById('radiusbase').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(radii_base, height) )
        return;
    let res_b1 = document.getElementById('unit_for_radiusbase').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.SphericalCap, label, radii_base, height, res_b1, res_h);
}

function add_stadium_frustum()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let upper_length = document.getElementById('upperlen').value;
    let upper_width = document.getElementById('upperwidth').value;
    let lower_length = document.getElementById('lowerlength').value;
    let lower_width = document.getElementById('lowerwidth').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(upper_length, upper_width, lower_length, lower_width, height) )
        return;
    let res_ul = document.getElementById('unit_for_upperlen').value;
    let res_uw = document.getElementById('unit_for_upperwidth').value;
    let res_ll = document.getElementById('unit_for_lowerlength').value;
    let res_lw = document.getElementById('unit_for_lowerwidth').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_five_variable_object(VOLUMES.StadiumFrustum, label, upper_length, upper_width, lower_length, lower_width, height, res_ul, res_uw, res_ll, res_lw, res_h);
}

function add_sphere()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let radius = document.getElementById('radius').value;
    if ( !numeric_inputs_ok(radius) )
        return;
    let res_radius = document.getElementById('unit_for_radius').value;
    add_variable_object(VOLUMES.Sphere, label, radius, res_radius);
}

function add_barrel()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let height = document.getElementById('height').value;
    let ediameter = document.getElementById('ediameter').value;
    let mdiameter = document.getElementById('mdiameter').value;
    if ( !numeric_inputs_ok(height, ediameter, mdiameter) )
        return;
    let res_height = document.getElementById('unit_for_height').value;
    let res_ediameter = document.getElementById('unit_for_ediameter').value;
    let res_mdiameter = document.getElementById('unit_for_mdiameter').value;    
    add_three_variable_object(VOLUMES.Barrel, label, height, ediameter, mdiameter, res_height, res_ediameter, res_mdiameter);
}

function add_capsule()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let radius = document.getElementById('radius').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(radius, height) )
        return;
    let res_r = document.getElementById('unit_for_radius').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.Capsule, label, radius, height, res_r, res_h);
}

function add_cone()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let radius = document.getElementById('radius').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(radius, height) )
        return;
    let res_r = document.getElementById('unit_for_radius').value;
    let res_h = document.getElementById('unit_for_height').value;
    add_two_variable_object(VOLUMES.Cone, label, radius, height, res_r, res_h);
}

function add_cylinder()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let inner = document.getElementById('innerd').value;
    let length = document.getElementById('length').value;
    if ( !numeric_inputs_ok(inner, length) )
        return;
    let res_id = document.getElementById('unit_for_innerd').value;
    let res_len = document.getElementById('unit_for_length').value;
    add_two_variable_object(VOLUMES.Cylinder, label, inner, length, res_id, res_len);
}

function add_cube()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let edge_length = document.getElementById('length').value;
    if ( !numeric_inputs_ok(edge_length) )
        return;
    let res_el = document.getElementById('unit_for_length').value;
    add_variable_object(VOLUMES.Cube, label, edge_length, res_el);
}

function add_ellipsoid()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let axis_a = document.getElementById('axisa').value;
    let axis_b = document.getElementById('axisb').value;
    let axis_c = document.getElementById('axisc').value;
    if ( !numeric_inputs_ok(axis_a, axis_b, axis_c) )
        return;
    let res_axis_a = document.getElementById('unit_for_axisa').value;
    let res_axis_b = document.getElementById('unit_for_axisb').value;
    let res_axis_c = document.getElementById('unit_for_axisc').value;
    add_three_variable_object(VOLUMES.Ellipsoid, label, axis_a, axis_b, axis_c, res_axis_a, res_axis_b, res_axis_c);
}

function add_frustum()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let radius_top = document.getElementById('radiustop').value;
    let radius_bottom = document.getElementById('radiusbottom').value;
    let height = document.getElementById('height').value;
    if ( !numeric_inputs_ok(radius_top, radius_bottom, height) )
        return;
    let res_rtop = document.getElementById('unit_for_radiustop').value;
    let res_rbottom = document.getElementById('unit_for_radiusbottom').value;
    let res_height = document.getElementById('unit_for_height').value;
    add_three_variable_object(VOLUMES.ConicalFrustum, label, radius_top, radius_bottom, height, res_rtop, res_rbottom, res_height);
}

function add_torus()
{
    let label = document.getElementById('label').value;
    if ( !add_object_check(label) )
        return;
    let major_radius = document.getElementById('major_r').value;
    let minor_radius = document.getElementById('minor_r').value;
    if ( parseFloat(minor_radius) >= parseFloat(major_radius) ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setTitle(g_language_data[g_lang]["TORUS_PARAM_TITLE"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["TORUS_PARAM_BOUNDS"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
        g_nsl_prompt.show();
        return;
    }
    let major_res = document.getElementById('unit_for_major_r').value;
    let minor_res = document.getElementById('unit_for_minor_r').value;
    add_two_variable_object(VOLUMES.Torus, label, major_radius, minor_radius, major_res, minor_res);
}

/* manages interactions via nsl prompt */
function nsl_prompt_button(index)
{
    /* zero authorship time has been defined */
    if ( typeof g_author_time === 'undefined' ) {
        window.location="https:/www.volume.cc/";
        return;
    }

    /* time has passed where an update maybe necessary thru the access point */
    if ( (Date.now()/1000) > g_author_time && !g_volume_lists.get(TabNavigation.get_active_tab()).is_unsaved() ) {
        window.location="https:/www.volume.cc/";
        return;
    }

    /*
     obtain operation code and process distinct
     operation routine based on this identifier
     */
    g_operation_code = g_nsl_prompt.operation();
    let buttonText = g_nsl_prompt.buttonText(index);
    let inputValue = g_nsl_prompt.inputValue().trim();
    g_nsl_prompt.hide();

    /* operation code */
    switch ( g_operation_code )
    {
        /*
         view account icons
         */
        case g_VIEW_ACCOUNT_ICONS:
            if ( buttonText == g_language_data[g_lang]["WORD_DISMISS"] )
                g_nsl_prompt.hide();
            break;
        /*
         save surplus volumes
         */
        case g_ADD_SURPLUS_VOLUME:
            if ( buttonText == g_language_data[g_lang]["VERIFY_N_SAVE"] )
            {
                let sv_value = document.getElementById('sv').value;
                let sv_label = document.getElementById('label').value;
                let sv_unit = document.getElementById('unit_for_sv').value;
                if (sv_unit != 'millimeters')
                    sv_value = ResolutionSolver.cubic_transform(sv_value, sv_unit, g_resolution.Millimeters);
                if ( sv_value <= 0 || sv_label.trim().length == 0 || isNaN(sv_value) )
                {
                    g_nsl_prompt.clear();
                    g_nsl_prompt.setTitle(g_language_data[g_lang]["INPUT_PROBLEM"]);
                    g_nsl_prompt.setMessage(g_language_data[g_lang]["SURPLUS_INTEGRITY_FLAG"]);
                    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
                    g_nsl_prompt.show();
                    return;
                }
                WebClient.get("/p.php?!=add_surplus&label=" + sv_label.replace(" ", "+") + "&mm3=" + sv_value, handle_response);
            }
            break;
        /*
         manage new tabs
         */
        case g_ADD_LIST_TAB:
            /* new tab */
            if (buttonText == g_language_data[g_lang]["OPEN"]) {
                if (inputValue.length != 0) {
                    if (TabNavigation.has_title(inputValue) || inputValue == "Untitled") {
                        g_nsl_prompt.clear();
                        g_nsl_prompt.setTitle(g_language_data[g_lang]["DUPLICATE_TITLE"]);
                        g_nsl_prompt.setMessage(g_language_data[g_lang]["DUPLICATE_TEXT"]);
                        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_OKAY"]);
                        g_nsl_prompt.show();
                        return;
                    }
                    if (g_user.isLoggedIn() && !TabNavigation.has_title(inputValue))
                        WebClient.get("/p.php?!=is_vle&descriptor=" + inputValue, handle_response);
                    else if (!TabNavigation.has_title(inputValue))
                        add_list(inputValue);
                }
            }
            break;
        /*
         reset the current volume data list
         */
        case g_RESET_LIST_DATA:
            if (buttonText == g_language_data[g_lang]["WORD_YES"]) {
                g_volume_lists.get(TabNavigation.get_active_tab()).resetData();
                display_volume_list();
            }
            break;
        /*
         add torus
         */
        case g_ADD_TORUS:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_torus();
            break;
        /*
         add a capsule with the parameters provided
         */
        case g_ADD_CAPSULE:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_capsule();
            break;
        /*
         modify capsule according to parameters provided
         */
        case g_EDIT_CAPSULE:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_capsule();
            break;
        /* 
         add a barrel
         */
        case g_ADD_BARREL:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_barrel();
            break;
        /*
         modify a barrel
         */
        case g_EDIT_BARREL:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_barrel();
            break;
        /*
         add a cone
         */
        case g_ADD_CONE:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_cone();
            break;
        /*
         add a cylinder with the parameters provided
         */
        case g_ADD_CYLINDER:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_cylinder();
            break;
        /*
         modify cone according to the parameters provided
         */
        case g_EDIT_CONE:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_cone();
            break;
        /*
         modify cylinder according to the parameters provided
         */
        case g_EDIT_CYLINDER:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_cylinder();
            break;
         /*
          add a pyramid with the parameters provided
          */
        case g_ADD_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_pyramid();
            break;
        /*
         modify a pyramid with the parameters provided
         */
        case g_EDIT_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_pyramid();
            break;
        /*
         add a frustum with the parameters provided
         */
        case g_ADD_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_frustum();
            break;
        /*
         modify a frustum with the parameters provided
         */
        case g_EDIT_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_frustum();
            break;
        /*
         add a cube with the parameters provided
         */
        case g_ADD_CUBE:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_cube();
            break;
        /*
         modify a cube with the parameters provided
         */
        case g_EDIT_CUBE:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_cube();
            break;
        /*
         add a ellipsoid with the parameters provided
         */
        case g_ADD_ELLIPSOID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_ellipsoid();
            break;
        /*
         modify an ellipsoid with the parameters provided
         */
        case g_EDIT_ELLIPSOID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_ellipsoid();
            break;
        /*
         add a rectanglar tank with the parameters provided
         */
        case g_ADD_RECT_TANK:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_rect_tank();
            break;
        /*
         modify a rectangular tank with the parameters provided
         */
        case g_EDIT_RECT_TANK:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_rect_tank();
            break;
        /*
         add a sphere with the parameters provided
         */
        case g_ADD_SPHERE:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_sphere();
            break;
        /*
         modify a sphere with the parameters provided
         */
        case g_EDIT_SPHERE:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_sphere();
            break;
        /*
         add a spherical cap with the parameters provided
         */
        case g_ADD_SPHERICAL_CAP:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_spherical_cap();
            break;
        /*
         modify a spherical cap with the parameters provided
         */
        case g_EDIT_SPHERICAL_CAP:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_spherical_cap();
            break;
        /*
         add a triangular with the parameters provided
         */
        case g_ADD_TRIANGULAR_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_triangular_prism();
            break;
        /*
         modify a triangular prism with the parameters provided
         */
        case g_EDIT_TRIANGULAR_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_triangular_prism();
            break;
        /*
         add a trapezoidal with the parameters provided
         */
        case g_ADD_TRAPEZOIDAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_trapezoidal_prism();
            break;
        /*
         modify a trapezoidal prism with the parameters provided
         */
        case g_EDIT_TRAPEZOIDAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_trapezoidal_prism();
            break;
        /*
         add a heptagonal prism with the parameters provided
         */
        case g_ADD_HEPTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_heptagonal_prism();
            break;
        /*
         add a heptagonal pyramid with the parameters provided
         */
        case g_ADD_HEPTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_heptagonal_pyramid();
            break;
        /*
         modify a heptagonal pyramid with the parameters provided
         */
        case g_EDIT_HEPTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_heptagonal_pyramid();
            break;
        /*
         modify a heptagonal prism with the parameters provided
         */
        case g_EDIT_HEPTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_heptagonal_prism();
            break;
        /*
         add a hexagonal prism with the parameters provided
         */
        case g_ADD_HEXAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_hexagonal_prism();
            break;
        /*
         modify a hexagonal prism with the parameters provided
         */
        case g_EDIT_HEXAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_hexagonal_prism();
            break;
        /*
         add a hexagonal pyramid with the parameters provided
         */
        case g_ADD_HEXAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_hexagonal_pyramid();
            break;
        /*
         modify a hexagonal pyramid with the parameters provided
         */
        case g_EDIT_HEXAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_hexagonal_pyramid();
            break;
        /*
         add a octagonal pyramid with the parameters provided
         */
        case g_ADD_OCTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_octagonal_pyramid();
            break;
        /*
         modify an octagonal pyramid with the parameters provided
         */
        case g_EDIT_OCTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_octagonal_pyramid();
            break;
        /*
         add a octagonal prism with the parameters provided
         */
        case g_ADD_OCTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_octagonal_prism();
            break;
        /*
         modify a octagonal prism with the parameters provided
         */
        case g_EDIT_OCTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_octagonal_prism();
            break;
        /*
         add a pentagonal prism with the parameters provided
         */
        case g_ADD_PENTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_pentagonal_prism();
            break;
        /*
         modify a pentagonal prism with the parameters provided
         */
        case g_EDIT_PENTAGONAL_PRISM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_pentagonal_prism();
            break;
        /*
         modify the scaling for the active object in the dialogue
         */
        case g_MODIFY_SCALING:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_scaling();
            break;
        /*
         add a triangular pyramid with the parameters provided
         */
        case g_ADD_TRIANGULAR_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_triangular_pyramid();
            break;
        /*
         modify a triangular pyramid with the parameters provided
         */
        case g_EDIT_TRIANGULAR_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_triangular_pyramid();
            break;
        /*
         add a pentagonal pyramid with the parameters provided
         */
        case g_ADD_PENTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_pentagonal_pyramid();
            break;
        /*
         modify a pentagonal pyramid with the parameters provided
         */
        case g_EDIT_PENTAGONAL_PYRAMID:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_pentagonal_pyramid();
            break;
        /*
         add a stadium frustum with the parameters provided
         */
        case g_ADD_STADIUM_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_stadium_frustum();
            break;
        /*
         modify a stadium frustum with the parameters provided
         */
        case g_EDIT_STADIUM_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_stadium_frustum();
            break;
        /*
         add a pyramid frustum with the parameters provided
         */
        case g_ADD_PYRAMID_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_pyramid_frustum();
            break;
        /*
         modify the pyramid frustum with the parameters provided
         */
        case g_EDIT_PYRAMID_FRUSTUM:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_pyramid_frustum();
            break;
        /*
         add torus
        */
        case g_ADD_TORUS:
            if (buttonText != g_language_data[g_lang]["WORD_SAVE"])
                return;
            add_torus();
            break;
        /*
         edit torus
        */
        case g_EDIT_TORUS:
            if (buttonText != g_language_data[g_lang]["WORD_UPDATE"])
                return;
            update_torus();
            break;
        /*
         accept text input for save_as function
         */
        case g_PROCESS_SAVE_AS:
            if (buttonText == g_language_data[g_lang]["WORD_SAVE"] && inputValue.trim().length != 0) {
                lock_workspace();
                WebClient.get("/p.php?!=is_vle&descriptor=" + inputValue.trim(), handle_response);
            }
            break;
        /*
         re-attempt to save
         */
        case g_RETRY_SAVING_LIST:
            if (buttonText == g_language_data[g_lang]["WORD_RETRY"])
                save_list();
            break;
        /*
         handle the access account dialog
         */
        case g_ACCESS_MY_ACCOUNT:
            if ( buttonText == g_language_data[g_lang]["ACCESS_MY_ACCOUNT"] )
                display_account_access();
            break;
        /*
         handle the login request, process and dispatch to processor
         */
        case g_LOGIN_ACCOUNT:
            if ( buttonText == g_language_data[g_lang]["AUTHENTICATE"] ) {
                let email_addr = document.getElementById('email_addr').value;
                let passwd_str = document.getElementById('passwd_field').value;
                let verify_str = document.getElementById('secure').value;
                if ( verify_str.length != 5 ) {
                    g_nsl_prompt.clear();
                    g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ERROR_TEXT"]);
                    g_nsl_prompt.setMessage(g_language_data[g_lang]["VERIFICATION_CODE_MISMATCH"]);
                    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"], true);
                    g_nsl_prompt.show();                    
                    return;
                }
                if ( email_addr.length == 0 || passwd_str.length == 0 )
                    return;
                let post_data = 'email_addr='+ email_addr +'&passwd_field='+ passwd_str +'&secure=' + verify_str;
                WebClient.post("/p.php?!=sign_in", handle_response, post_data);
            }
            break;
        /*
         retry login
         */
        case g_RETRY_LOGIN:
            if ( buttonText == g_language_data[g_lang]["WORD_RETRY"] )
                display_account_login();
            break;
        /*
         forgotten password
         */
        case g_FORGOT_PASSWD:
            if ( buttonText == g_language_data[g_lang]["PROCESS"] ) {
                let email_addr = document.getElementById('email_addr').value;
                let verify_str = document.getElementById('secure').value;
                if ( email_addr.length == 0 || verify_str.length != 5 )
                    return;
                let post_data = 'email_addr='+ email_addr +'&secure=' + verify_str;
                WebClient.post("/p.php?!=forgot_passwd", handle_response, post_data);
            }
            break;
        /*
         make new accounts
         */
        case g_MAKE_NEW_ACCOUNT:
            if ( buttonText == g_language_data[g_lang]["WORD_REGISTER"] ) {
                let email_addr = document.getElementById('email_addr').value;
                let username = document.getElementById('username').value;
                let password_s = document.getElementById('passwd_field').value;
                let verify_str = document.getElementById('secure').value;
                let newsletter = 'no';
                if ( email_addr.length == 0 || username.length == 0 || password_s.length == 0 || verify_str.length != 5 ) {
                    g_nsl_prompt.clear();
                    g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ERROR_TEXT"]);
                    g_nsl_prompt.setMessage(g_language_data[g_lang]["FORM_INTEGRITY_ERROR"]);
                    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
                    g_nsl_prompt.show();
                    return;
                }
                let post_data = 'email_addr='+ email_addr +'&username='+ username +'&passwd_field='+ password_s +'&secure=' + verify_str + '&newsletter=' + newsletter;
                WebClient.post("/p.php?!=register", handle_response, post_data);
            }
            break;
        /*
         process the changed password request
         */
        case g_CHANGE_PASSWD:
            if ( buttonText == g_language_data[g_lang]["PROCESS"] ) {
                let password_cur = document.getElementById('password').value;
                let password_new = document.getElementById('password_new').value;
                if ( password_cur.length <= 7 || password_new.length <= 7 ) {
                    g_nsl_prompt.clear();
                    g_nsl_prompt.setTitle(g_language_data[g_lang]["PROCESSING_ERROR_TEXT"]);
                    g_nsl_prompt.setMessage(g_language_data[g_lang]["PASSWORD_FIELDS_NOT_CORRECT"]);
                    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
                    g_nsl_prompt.show();
                    return;
                }
                let post_data = 'passwd='+password_cur+'&passwd_new='+password_new;
                WebClient.post("/p.php?!=change_passwd", handle_response, post_data);
            }
            break;
        /*
         add subscription
         */
        case g_ADD_SUBSCRIPTION:
            if ( buttonText == g_language_data[g_lang]["SUBSCRIBE"] )
                window.open('https://www.volume.cc/pay-via/');
            break;
        /*
         cancel subsciption
         */
        case g_CANCEL_SUB:
            if ( buttonText == g_language_data[g_lang]["SUBSCRIPTION_CANCEL"] ) {
                WebClient.get("/p.php?!=sub_cancel", handle_response);
            }
            break;
        /*
         resume subscription
         */
        case g_RESUME_SUB:
            if ( buttonText == g_language_data[g_lang]["SUBSCRIPTION_RESUME"] ) {
                WebClient.get("/p.php?!=sub_resume", handle_response);
            }
            break;
        /*
         remove a volume from the list
         */
        case g_REMOVE_VOLUME:
            if ( buttonText == g_language_data[g_lang]["WORD_DELETE"] ) {
                let lstVolume = g_volume_lists.get(TabNavigation.get_active_tab());
                lstVolume.delete(g_nsl_prompt.metaData());
                display_volume_list();
                update_menu_highlights();
            }
            break;
        /*
         show export link
         */
        case g_SHOW_EXPORT_LINK:
            if ( buttonText == g_language_data[g_lang]["COPY_URL"] ) {
                let element_t = document.getElementById('link');
                element_t.select();
                element_t.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(element_t.value);
            }
            break;
        /*
         export volume type
         */
        case g_EXPORT_VOLUME_TYPE:
            if ( buttonText == g_language_data[g_lang]["WORD_SHARE"] || buttonText == g_language_data[g_lang]["WORD_PRIVATE"] ) {
                g_operation_code = g_EXPORT_VOLUME;
                let is_private = buttonText == g_language_data[g_lang]["WORD_PRIVATE"] ? '1' : '0';
                let message = document.getElementById('comments').value;
                let postData = "label=" + TabNavigation.get_active_tab() + "&data=" + g_volume_lists.get(TabNavigation.get_active_tab()).toString() +"&is_private="+ is_private.toString() +"&message="+ message.toString();
                WebClient.post("/p.php?!=export_volume", handle_response, postData);
            }
            break;
        /*
         PROCEED WITH CLOSURE?
         */
        case g_CLOSE_LIST_UNSAVED:
            if ( buttonText != g_language_data[g_lang]["WORD_YES"] )
                return;
            close_list(TabNavigation.get_active_index(), true);
            break;
    }
}

/* undo */
function undo() {
    g_volume_lists.get(TabNavigation.get_active_tab()).undo();
    display_volume_list();
}

/* redo */
function redo() {
    g_volume_lists.get(TabNavigation.get_active_tab()).redo();
    display_volume_list();
}

/* refresh image verification */
function refresh_verification_image()
{
    document.getElementById('verify-image').src = "/p.php?!=cimage&"+new Date().getTime();
}

/* reset volume list */
function reset() {
    let volumeList = g_volume_lists.get(TabNavigation.get_active_tab());
    if ( !volumeList.hasUndo() && !volumeList.hasRedo() )
        return;
    g_nsl_prompt.clear();
    g_nsl_prompt.setTitle(g_language_data[g_lang]["RESET_DATA"]);
    g_nsl_prompt.setMessage(g_language_data[g_lang]["RESET_TEXT"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_YES"]);
    g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_CANCEL"]);
    g_nsl_prompt.setOperation(g_RESET_LIST_DATA);
    g_nsl_prompt.show();
}

/* close the active tab */
function close_active_tab() {
    close_list(TabNavigation.get_active_index());
}

/* query the preferences */
function query_preferences() {
    if ( !g_user.isLoggedIn() )
        return;
    g_operation_code = g_QUERY_PREFERENCES;
    WebClient.get("/p.php?!=get_preferences", handle_response);
}

/* query the service status */
function query_service_status() {
    g_operation_code = g_STATUS_CHECK;
    WebClient.get("/p.php?!=get_status", handle_response);
}

/* initialisation function */
function init()
{   
    document.onkeydown = function(event)
    {
        const e = event || window.event;

        /* if alt key is pressed */
        if (e.altKey)
        {
            /* ALT+N */
            if (e.which == 78)
                new_list();

            /* ALT+O */
            if (e.which == 79)
                open_list();

            /* ALT+Z */
            if (e.which == 90)
                undo();

            /* ALT+R */
            if (e.which == 82)
                redo();

            /* ALT+V */
            if (e.which == 86)
                reset();

            /* ALT+C */
            if (e.which == 67)
                close_active_tab();

            /* ALT+P */
            if (e.which == 80)
                print_volume_list();

            /* ALT+W */
            if (e.which == 83)
                _export('datafile');

            /* ALT+X */
            if (e.which == 88)
                _export('network');

            /* ALT+B */
            if (e.which == 98)
                _export('surplus');

            /* ALT+L */
            if (e.which == 76)
                document.getElementById('load_recipe').click();
        }

        /* shift key is pressed and prompt window is not visible */
        if (e.shiftKey && !g_nsl_prompt.is_visible()) {
            switch(e.which) {
                /* SHIFT+S */case 83: show_dialog('add_surplus'); break;
                /* SHIFT+A */case 65: show_dialog('add_capsule'); break;
                /* SHIFT+B */case 66: show_dialog('add_cone'); break;
                /* SHIFT+C */case 67: show_dialog('add_cylinder'); break;
                /* SHIFT+D */case 68: show_dialog('add_conical_frustum'); break;
                /* SHIFT+R */case 82: show_dialog('add_cube'); break;
                /* SHIFT+F */case 70: show_dialog('add_ellipsoid'); break;
                /* SHIFT+J */case 74: show_dialog('add_pyramid_frustum'); break;
                /* SHIFT+S */case 81: show_dialog('add_pyramid'); break;
                /* SHIFT+W */case 87: show_dialog('add_rectangular_tank'); break;
                /* SHIFT+Z */case 90: show_dialog('add_sphere'); break;
                /* SHIFT+X */case 88: show_dialog('add_spherical_cap'); break;
                /* SHIFT+T */case 84: show_dialog('add_triangular_prism'); break;
                /* SHIFT+G */case 71: show_dialog('add_trapezoidal_prism'); break;
                /* SHIFT+L */case 76: show_dialog('add_octagonal_prism'); break;
                /* SHIFT+P */case 80: show_dialog('add_heptagonal_prism'); break;
                /* SHIFT+O */case 79: show_dialog('add_hexagonal_prism'); break;
                /* SHIFT+M */case 77: show_dialog('add_pentagonal_prism'); break;
                /* SHIFT+Y */case 89: show_dialog('add_triangular_pyramid'); break;
                /* SHIFT+N */case 78: show_dialog('add_pentagonal_pyramid'); break;
                /* SHIFT+J */case 74: show_dialog('add_octagonal_pyramid'); break;
                /* SHIFT+K */case 75: show_dialog('add_hexagonal_pyramid'); break;
                /* SHIFT+H */case 72: show_dialog('add_heptagonal_pyramid'); break;
                /* SHIFT+V */case 86: show_dialog('add_stadium_frustum'); break;
                /* SHIFT+E */case 69: show_dialog('add_barrel'); break;
                /* SHIFT+U */case 85: show_dialog('add_torus'); break;
    }}}

    /* populate vector with empty dataset */
    g_volume_lists.set("Untitled", new VolumeList());

    /* query the service status */
    query_service_status();

    /* query the preferences from cloud db */
    Nsl.sleep(1500).then(() => { query_preferences(); });

    /* display empty initial dataset */
    display_volume_list();

    /* is url is a volumetric shared reference */
    if ( window.location.href.indexOf('https://www.volume.cc/V') != -1 )
    {
        /* fetch volume id from the url */
        let volume_id = window.location.href.replace('https://www.volume.cc/V', '');
        volume_id = volume_id.substring(0, volume_id.length-1);

        /* ensure it is numeric */
        if ( !isNaN(volume_id) )
        {
            /* proceed with fetch if id not null */
            if ( volume_id != null )
            {
                /* lock workspace */
                lock_workspace();

                /* set op code and invoke get request */
                g_operation_code = g_LOAD_REMOTE_VOLUMES;
                WebClient.get("/p.php?!=remote_volume&id="+ volume_id.toString(), handle_response);
            }
        }
        return;
    }

    /* display activation message */
    if ( window.location.href.indexOf('?!=activated') != -1 && !g_user.isLoggedIn() ) {
        display_activation_text();
        return;
    }

    /* display password reset */
    if ( window.location.href.indexOf('?!=passwd_reset') != -1 ) {
        display_passwd_reset();
        return;
    }

    /* display account registration */
    if ( window.location.href.indexOf('?!=make') != -1 ) {
        display_account_register();
        return;
    }
}

/* print the volume list */
function print_volume_list() {

    /* n volumetric objects */
    if ( g_volume_lists.get(TabNavigation.get_active_tab()).count() == 0 )
        return;

    /* record rounding string */
    const rounding_string = VolumeCCApp.rounding();

    /* record the resolution string */
    const resolution_string = VolumeCCApp.resolution();

    /* record the resolution */
    const resolution = VolumeCCApp.cubic_resolution_to_str(resolution_string);

    /* the existing data state */
    const data_contents = document.body.innerHTML;

    /* the summed volumetric */
    const volume_sigma = document.getElementById('volumeFigure').innerHTML;

    /* sent to the print queue */
    let printable_contents = document.getElementById('body').innerHTML;
    printable_contents = printable_contents.replaceAll('<th>', '<th><span style="color:#000000;"><strong>');
    printable_contents = printable_contents.replaceAll('</th>', '</strong></span></th>');
    printable_contents = printable_contents.replaceAll('<td>', '<td style=\"color:#000000;\">');
    printable_contents = printable_contents.replaceAll('<br><br><br><br><br>', '<br>');
    printable_contents = '<div style="color:#000000;"><strong>' + TabNavigation.get_text(TabNavigation.get_active_index()) + "</strong><br />" + printable_contents;
    printable_contents = printable_contents + g_language_data[g_lang]["WORD_VOLUME"] + ": " + volume_sigma + " " + resolution + "</div>";

    /* set printable */
    document.body.innerHTML = printable_contents;

    /* dispatch to queue */
    window.print();

    /* replace back to initial data state */
    document.body.innerHTML = data_contents;

    /* override the defaults back to set preference when the html body is reset */
    RadioButton.SelectViaValue('rounding-option', rounding_string);
    RadioButton.SelectViaValue('resolution', resolution_string);

    /* re-attach event listeners */
    reset_event_listeners();
}

/* next free text name */
function next_free_text_name(title) {
    if ( title.charAt(title.length-1) != '-' )
        title = title + '-';
    let index_t = 1;
    while ( TabNavigation.has_title(title + index_t.toString()) )
        index_t++;
    return title + index_t.toString();
}

/* import file */
function import_file(data) {
    if ( data.indexOf(g_DELIMITOR_PRIORITY_5) == -1 )
        return import_data(data);
    const set = data.split(g_DELIMITOR_PRIORITY_5);
    let error_count = 0;
    for ( let n = 0; n < set.length; n++ ) {
        if ( !import_data(set[n]) )
            error_count++;
    }
    return error_count == 0;
}

/* import the data */
function import_data(contents)
{
    /* reference: https://github.com/william-j1/volume_cc_data_format */
    /* check that priority four delimitor exists */
    if ( contents.indexOf(g_DELIMITOR_PRIORITY_4) != -1 )
    {
        /* split tab name from volumetric data */
        let data_t = contents.split(g_DELIMITOR_PRIORITY_4);

        /* dataset if legit should comprise of at least two parts */
        if ( data_t.length >= 2 )
        {
            /* if title is already defined in the active tab list
               we append a numeric identifier to the tab name */
            if ( TabNavigation.has_title(data_t[0]) )
                data_t[0] = next_free_text_name(data_t[0]);

            /* add the tab with using identifier now established */
            TabNavigation.add(data_t[0]);

            /* the new tab will now be the default active tab, set the volumetric data payload */
            g_volume_lists.set(TabNavigation.get_active_tab(), VolumeList.fromString(data_t[1]));

            /* refresh the volumetric data table */
            display_volume_list();

            /* share may have a comment using the same delimitor which separates the title and dataset */
            if ( data_t.length == 3 )
            {
                /* if comment is untrimmed whitespace */
                if ( data_t[2].trim().length == 0 )
                    return true;

                /* show comment to the recipient */
                g_nsl_prompt.clear();
                g_nsl_prompt.setTitle(g_language_data[g_lang]["COMMENTS_TITLE"]);
                g_nsl_prompt.setMessage(`
                <div class="form-row">
                    <div class="form-label">
                        <label for="comments">`+ g_language_data[g_lang]["WORD_COMMENTS"] +`:</label>
                    </div>
                    <div class="form-field">
                        <textarea readonly>`+data_t[2].trim()+`</textarea>
                    </div>
                </div>
                `);
                g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
                g_nsl_prompt.show();
            }
            return true;
    }}
    return false;
}

/* import a data set */
function _import(e) {

    /* pull file */
    let file = e.target.files[0];
	if ( !file )
		return;

	let reader = new FileReader();
	reader.onload = function(e)
    {
        /* blob data */
        let contents = e.target.result.trim();

        /* load flag */
        let load_ok = import_file(contents);

        /* if not_okay */
        if ( !load_ok ) {
            g_nsl_prompt.clear();
            g_nsl_prompt.setTitle(g_language_data[g_lang]["RESET_DATA"]);
            g_nsl_prompt.setMessage(g_language_data[g_lang]["VOLUME_DATASET_UNPROCESSED"]);
            g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
            g_nsl_prompt.show();
        }
        document.getElementById('load_recipe').value = "";
	};
	reader.readAsText(file);
}

/* export a data set */
function _export(type)
{
    /* fetch active list from vector */
    let list_t = g_volume_lists.get(TabNavigation.get_active_tab());

    /* no objects, simply return */
    if ( list_t.count() == 0 )
        return;

    /* type of export maybe surplus */
    if ( type == 'surplus' )
    {
        if (!g_user.isLoggedIn()) {
            display_login_prompt();
            return;
        }
        let title_s = TabNavigation.get_active_tab();
        let volumeValue = g_volume_lists.get(TabNavigation.get_active_tab()).volume(false);
        g_operation_code = g_ADD_SURPLUS_VOLUME;
        WebClient.get("/p.php?!=add_surplus&label=" + title_s.replace(" ", "+") + "&mm3=" + volumeValue, handle_response);
        return;
    }

    /* if not logged in, exit */
    if ( g_LOGIN_REQUIRED_FOR_EXPORT && !g_user.isLoggedIn() ) {
        display_login_prompt();
        return;
    }

    /* netshare export type .... */
    if ( type == 'network' ) {
        g_nsl_prompt.clear();
        g_nsl_prompt.setOperation(g_EXPORT_VOLUME_TYPE);
        g_nsl_prompt.setTitle(g_language_data[g_lang]["NETSHARE_EXPORT"]);
        g_nsl_prompt.setMessage(g_language_data[g_lang]["COMMENTS_TEXT"] +`
        <br />
        <br />
        <div class="form-row">
            <div class="form-label">
                <label for="comments">`+ g_language_data[g_lang]["WORD_COMMENTS"] +`:</label>
            </div>
            <div class="form-field">
                <textarea name="comments" id="comments"></textarea>
            </div>
            <div class="clear"></div>
        </div>
        `);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_SHARE"]);
        g_nsl_prompt.addButton(g_language_data[g_lang]["WORD_DISMISS"]);
        g_nsl_prompt.show();
        return;
    }

    /* for the currently opened tabs */
    let data_t = "";
    for ( let n = 0; n < TabNavigation.count_open_tabs(); n++ )
    {
        /* title of active tab */
        let title_t = TabNavigation.get_text(n);

        /* pull dataset from volumetric container */
        let dataset_t = g_volume_lists.get(title_t);

        /* set delimitor with priority 4 */
        data_t = data_t + title_t + g_DELIMITOR_PRIORITY_4 + dataset_t.toString();
        data_t = data_t + "~";
    }

    /* remove last character from string data_t */
    data_t = data_t.substring(0, data_t.length - 1);

    /* file binary */
    let file_blob = new Blob([data_t], {type: "text/plain"});

    /* produce download tag */
    let download_link = document.createElement("a");

    /* download link */
    download_link.download = title_t;
    download_link.innerHTML = '';

    /* create object */
    if ( window.webkitURL != null ) {
        download_link.href = window.webkitURL.createObjectURL(file_blob);
        download_link.click();
        return;
    }

    /* download link */
    download_link.href = window.URL.createObjectURL(file_blob);
    download_link.onclick = destroyClickedElement;
    download_link.style.display = "none";
    document.body.appendChild(download_link);
    download_link.click();
}

/* set image prefix based on regional locale */
function set_image_prefix()
{
    g_image_prefix = "";
    if ( g_lang == "en" || g_lang == "au" || g_lang == "us" || g_lang == "nz" || g_lang == "ca" )
        g_image_prefix = "en_";
    if ( g_lang == "cn" || g_lang == "hk" )
        g_image_prefix = "cn_";
    if ( g_lang == "de" )
        g_image_prefix = "de_";
    if ( g_lang == "jp" )
        g_image_prefix = "jp_";
    if ( g_lang == "fr" )
        g_image_prefix = "fr_";
    if ( g_lang == "in" )
        g_image_prefix = "in_";
    if ( g_lang == "es" || g_lang == "ar" || g_lang == "mx" )
        g_image_prefix = "es_";
    if ( g_lang == "br" || g_lang == "pt" )
        g_image_prefix = "pt_";
}

/* preload images */
function preload_images() {
    set_image_prefix();
    let images_t = [
        '/p.php?!=fi&ip='+ g_image_prefix +'barrel.png', 
        '/p.php?!=fi&ip='+ g_image_prefix +'capsule.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'cone.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'conical.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'cube.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'cylinder.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'ellipsoid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'heptagonal_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'heptagonal_pyramid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'hexagonal_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'hexagonal_pyramid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'octagonal_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'octagonal_pyramid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'pentagonal_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'pentagonal_pyramid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'pyramid.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'pyramidal_frustum.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'rectangular_tank.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'sphere.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'spherical_cap.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'stadium.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'torus.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'trapezoidal_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'triangular_prism.png',
        '/p.php?!=fi&ip='+ g_image_prefix +'triangular_pyramid.png'
    ];
    let images = [];
    for ( let i = 0; i < images_t.length; i++ ) {
        let img = new Image();
        img.src = images_t[i];
        images.push(img);
    }
}

/* handle the change event for the ranged inputs */
function handle_input_change(e) {
    let target = e.target;
    if (e.target.type !== 'range')
        target = document.getElementById('range');
    let min = target.min;
    let max = target.max;
    let val = target.value;
    target.style.backgroundSize = (val-min)*100/(max-min)+ '% 100%';
}

/* adds an event listener for each range input */
let g_range_inputs = document.querySelectorAll('input[type="range"]');
g_range_inputs.forEach(input => {
    input.addEventListener('input', handle_input_change);
})

/* signal a save preference */
function update_preferences() {
    if ( !g_user.isLoggedIn() )
        return;
    g_operation_code = g_POST_PREFERENCES;
    let preferenceString = VolumeCCApp.resolution_value_to_id(VolumeCCApp.resolution());
    preferenceString = preferenceString +'-'+ VolumeCCApp.rounding_value_to_id(VolumeCCApp.rounding());
    let postData = "preferenceString=" + preferenceString;
    WebClient.post("/p.php?!=save_preferences", handle_response, postData);
}

/* changes the css class for correct highlight annotation yield the block code */
function switch_tab_to(element)
{
    let wrap_app = document.getElementById('calculator');
    let wrap_about = document.getElementById('about');
    document.getElementById('l_calculator').classList.remove("is_selected");
    document.getElementById('l_about').classList.remove("is_selected");
    wrap_app.style.display="none";
    wrap_about.style.display="none";
    document.getElementById('l_'+element).classList.add("is_selected");
    document.getElementById(element).style.display="block";
    if ( g_nsl_prompt.is_visible() )
        g_nsl_prompt.hide();
}

/* sets and resets the tabular menu */
function reset_event_listeners()
{
    /*  this removes all event listeners previously attached to prevent 
        cascading event triggers overlapping fresh event listeners */
    let original_contents;
    let rounding_string = VolumeCCApp.rounding();
    let resolution_string = VolumeCCApp.resolution();
    if ( g_events_added ) {
        original_contents = document.body.innerHTML;
        document.body.innerHTML = '';
        document.body.innerHTML = original_contents;
        RadioButton.SelectViaValue('rounding-option', rounding_string);
        RadioButton.SelectViaValue('resolution', resolution_string);
    }

    /*  boring albeit necessary boilerplate */
    let bmi = document.getElementById('barrel-item');
    let capsulemi = document.getElementById('capsule-item');
    let conmi = document.getElementById('cone-item');
    let cubmi = document.getElementById('cube-item');
    let cylmi = document.getElementById('cylinder-item');
    let ellmi = document.getElementById('ellipsoid-item');
    let cnmi = document.getElementById('conical_item');
    let pyrfmi = document.getElementById('pyramid_frustum_item');
    let stfmi = document.getElementById('stadium_frustum_item');
    let hepmi = document.getElementById('heptagonal_item');
    let hexmi = document.getElementById('hexagonal_item');
    let octmi = document.getElementById('octagonal_item');
    let pentmi = document.getElementById('pentagonal_item');
    let trapmi = document.getElementById('trapezoidal_item');
    let trimi = document.getElementById('triangular_item');
    let hepyrmi = document.getElementById('heptagonal_pyr_item');
    let hexpyrmi = document.getElementById('hexagonal_pyr_item');
    let octpyrmi = document.getElementById('octagonal_pyr_item');
    let pentpyrmi = document.getElementById('pentagonal_pyr_item');
    let pyrpyrmi = document.getElementById('pyramid_pyr_item');
    let tripyrmi = document.getElementById('triangular_pyr_item');
    let recttankmi = document.getElementById('rectangular_tank_item');
    let sphmi = document.getElementById('sphere_item');
    let scmi = document.getElementById('spherical_cap_item');
    let asmi = document.getElementById('add_surplus_item');
    let abmi = document.getElementById('about_item');
    let umi = document.getElementById('undo_item');
    let rdi = document.getElementById('redo_item');
    let rsti = document.getElementById('reset_item');
    let ami = document.getElementById('angstrom_item');
    let nmi = document.getElementById('nanometer_item');
    let mmi = document.getElementById('micrometer_item');
    let millmi = document.getElementById('millimeter_item');
    let cntmi = document.getElementById('centimeter_item');
    let mtri = document.getElementById('meter_item');
    let rndto1dp = document.getElementById('round_to_1dp');
    let rndup1dp = document.getElementById('round_up_to_1dp');
    let rnd1dp = document.getElementById('round_down_to_1dp');
    let rnd2dp = document.getElementById('round_to_2dp');
    let rnd4dp = document.getElementById('round_to_4dp');
    let i_ni = document.getElementById('new_item');
    let i_oi = document.getElementById('open_item');
    let i_savi = document.getElementById('save_item');
    let i_sai = document.getElementById('save_as_item');
    let i_lr = document.getElementById('load_recipe_item');
    let i_nb1 = document.getElementById('nsl-prompt-button-0');
    let i_nb2 = document.getElementById('nsl-prompt-button-1');
    let i_nb3 = document.getElementById('nsl-prompt-button-2');
    let i_tt0 = document.getElementById('tab-text-0');
    let i_tc0 = document.getElementById('tab-close-0');
    let i_pv = document.getElementById('print_volume_item');
    let i_ed = document.getElementById('export_data_file');
    let i_es = document.getElementById('export_surplus');
    let i_en = document.getElementById('export_network');
    let i_ct = document.getElementById('close_tab_item');
    let is_aa = document.getElementById('access_account_item');
    let i_so = document.getElementById('sign_out_item');
    let i_si = document.getElementById('subscription_item');
    let i_cp = document.getElementById('change_passwd_item');
    let nav_app = document.getElementById('l_calculator');
    let nav_about = document.getElementById('l_about');
    let cookieAccept = document.getElementById('COOKIE_ACCEPT_BUTTON');
    let cookieDecline = document.getElementById('COOKIE_DECLINE_BUTTON');
    let lp = document.getElementById('language_picker');
    let torus = document.getElementById('torus_item');

    /* set client-side language preference */
    document.getElementById('language_picker').value = g_lang;
    document.getElementById('language_flag').src = '/assets/lang/'+ g_lang +'.svg';

    lp.addEventListener("change", function() {
        lock_workspace();
        let language = document.getElementById('language_picker').value;
        load_language_data(language, true);
        document.getElementById('language_flag').src = '/assets/lang/'+ language +'.svg';
    });
    cookieDecline.addEventListener("click", function() {
        g_operation_code = 1000;
        WebClient.get("/p.php?!=set_cookie_use&is_js_app=true", handle_response);
        document.getElementById('cookie_banner').style.display="none";
    });
    cookieAccept.addEventListener("click", function() {
        g_operation_code = 1000;
        WebClient.get("/p.php?!=set_cookie_use&allow=true&is_js_app=true", handle_response);
        document.getElementById('cookie_banner').style.display="none";
    });
    nav_about.addEventListener("click", function() {
        switch_tab_to("about");
    });
    nav_app.addEventListener("click", function() {
        switch_tab_to("calculator");
    });
    i_cp.addEventListener("click", function() {
        display_change_passwd();
    });
    i_si.addEventListener("click", function() {
        display_subscription();
    });
    i_so.addEventListener("click", function() {
        sign_out();
    });
    is_aa.addEventListener("click", function() {
        display_account_access();
    });
    i_ct.addEventListener("click", function() {
        close_active_tab();
    });
    i_en.addEventListener("click", function() {
        _export('network');
    });
    i_pv.addEventListener("click", function() {
        print_volume_list();
    });
    i_ed.addEventListener("click", function() {
        _export('datafile');
    });
    i_es.addEventListener("click", function() {
        _export('surplus');
    });
    i_tt0.addEventListener("click", function() {
        TabNavigation.focus(0);
    });
    i_tc0.addEventListener("click", function() {
        close_list(0);
    });
    i_nb1.addEventListener("click", function() {
        nsl_prompt_button(0);
    });
    i_nb2.addEventListener("click", function() {
        nsl_prompt_button(1);
    });
    i_nb3.addEventListener("click", function() {
        nsl_prompt_button(2);
    });
    i_lr.addEventListener("click", function() {
        document.getElementById('load_recipe').click();
    });
    i_ni.addEventListener("click", function() {
        new_list();
    });
    i_oi.addEventListener("click", function() {
        open_list();
    });
    i_savi.addEventListener("click", function() {
        save_list();
    });
    i_sai.addEventListener("click", function() {
        save_as_list();
    });
    ami.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'angstroms');
        display_and_update();
    });
    nmi.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'nanometers');
        display_and_update();
    });
    mmi.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'micrometers');
        display_and_update();
    });
    millmi.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'millimeters');
        display_and_update();
    });
    cntmi.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'centimeters');
        display_and_update();
    });
    mtri.addEventListener("click", function() {
        RadioButton.SelectViaValue('resolution', 'meters');
        display_and_update();
    });
    rndto1dp.addEventListener("click", function() {
        RadioButton.SelectViaValue('rounding-option', 'round-output-to-1dp');
        display_and_update();
    });
    rndup1dp.addEventListener("click", function() {
        RadioButton.SelectViaValue('rounding-option', 'round-up-to-1dp');
        display_and_update();
    });
    rnd1dp.addEventListener("click", function() {
        RadioButton.SelectViaValue('rounding-option', 'round-down-to-1dp');
        display_and_update();
    });
    rnd2dp.addEventListener("click", function() {
        RadioButton.SelectViaValue('rounding-option', 'round-output-to-2dp');
        display_and_update();
    });
    rnd4dp.addEventListener("click", function() {
        RadioButton.SelectViaValue('rounding-option', 'round-4dp');
        display_and_update();
    });
    umi.addEventListener("click", function() {
        undo();
    });
    rdi.addEventListener("click", function() {
        redo();
    });
    rsti.addEventListener("click", function() {
        reset();
    });
    abmi.addEventListener("click", function() {
        show_dialog('about');
    });
    asmi.addEventListener("click", function() {
        show_dialog('add_surplus');
    });
    bmi.addEventListener("click", function() {
        show_dialog('add_barrel');
    });
    capsulemi.addEventListener("click", function() {
        show_dialog('add_capsule');
    });
    conmi.addEventListener("click", function() {
        show_dialog('add_cone');
    });
    cubmi.addEventListener("click", function() {
        show_dialog('add_cube');
    });
    cylmi.addEventListener("click", function() {
        show_dialog('add_cylinder');
    });
    ellmi.addEventListener("click", function() {
        show_dialog('add_ellipsoid');
    });
    cnmi.addEventListener("click", function() {
        show_dialog('add_conical_frustum');
    });
    pyrfmi.addEventListener("click", function() {
        show_dialog('add_pyramid_frustum');
    });
    stfmi.addEventListener("click", function() {
        show_dialog('add_stadium_frustum');
    });
    hepmi.addEventListener("click", function() {
        show_dialog('add_heptagonal_prism');
    });
    hexmi.addEventListener("click", function() {
        show_dialog('add_hexagonal_prism');
    });
    octmi.addEventListener("click", function() {
        show_dialog('add_octagonal_prism');
    });
    pentmi.addEventListener("click", function() {
        show_dialog('add_pentagonal_prism');
    });
    trapmi.addEventListener("click", function() {
        show_dialog('add_trapezoidal_prism');
    });
    trimi.addEventListener("click", function() {
        show_dialog('add_triangular_prism');
    });
    hepyrmi.addEventListener("click", function() {
        show_dialog('add_heptagonal_pyramid');
    });
    hexpyrmi.addEventListener("click", function() {
        show_dialog('add_hexagonal_pyramid');
    });
    octpyrmi.addEventListener("click", function() {
        show_dialog('add_octagonal_pyramid');
    });
    pentpyrmi.addEventListener("click", function() {
        show_dialog('add_pentagonal_pyramid');
    });
    pyrpyrmi.addEventListener("click", function() {
        show_dialog('add_pyramid');
    });
    tripyrmi.addEventListener("click", function() {
        show_dialog('add_triangular_pyramid');
    });
    recttankmi.addEventListener("click", function() {
        show_dialog('add_rectangular_tank');
    });
    sphmi.addEventListener("click", function() {
        show_dialog('add_sphere');
    });
    scmi.addEventListener("click", function() {
        show_dialog('add_spherical_cap');
    });
    torus.addEventListener("click", function() {
        show_dialog('add_torus');
    });
    g_events_added = true;
}

/* extract language parameter */
function extract_language() {
    let scripts = document.getElementsByTagName('script');
    for ( let i = 0; i < scripts.length - 1; i++ ) {
        let script = scripts[i];
        if ( script.src && script.src.indexOf(".js?lang=") != -1 )
            return script.src;
    }
    return null;
}

/* handle key down events. Mostly we care about the operator
   pushing the return key to save time processing form dialogs */
window.addEventListener("keydown", (event) => {
    if ( event.key == 'Enter' ) {
        if ( g_nsl_prompt == null )
            return;
        if ( !g_nsl_prompt.is_visible() )
            return;
        let indexViaEnter = g_nsl_prompt.indexViaEnterKey();
        if ( indexViaEnter == -1 )
            return;
        nsl_prompt_button(indexViaEnter);
    }
    else if ( event.key == 'Escape' ) {
        if ( document.getElementById('nsl-prompt').style.display != "none" )
            document.getElementById('nsl-prompt').style.display = "none";
    }
});

/* wait until document object model has fully initialised */
window.addEventListener("DOMContentLoaded", (event)=>
{
    /* fetch the iso language code set */
    let data_t = extract_language();
    g_lang = data_t.split("=")[1];
    reset_event_listeners();
    g_user = new WebUser();
    load_language_data(g_lang);

    /* language properties */
    const language_properties = new Map([
        ["za", "Afrikaans"],
        ["us", "American"],
        ["au", "Australian"],
        ["my", "Bahasa"],
        ["by", "Беларуская"],
        ["br", "Bražilian"],
        ["en", "British"],
        ["bg", "български"],
        ["ca", "Canadian"],        
        ["cz", "Čeština"],
        ["dk", "Dansk"],
        ["tn", "الدّارجة"],
        ["de", "Deutsch"],
        ["ee", "Eesti"],
        ["eg", "العامية المصرية"],
        ["gr", "Elliniká"],
        ["es", "Español"],
        ["mx", "Español (MX)"],
        ["ar", "Español (AR)"],
        ["be", "Flemish"],
        ["fr", "Français"],
        ["ie", "Gaeilge"],
        ["ae", "العامية الخليجية"],
        ["ko", "한국어"],
        ["hr", "Hrvatski"],
        ["it", "Italiano"],
        ["il", "עברית"],
        ["in", "हिन्दी"],
        ["is", "Islenska"],
        ["lv", "Latviešu"],
        ["lt", "Lietuvių"],
        ["cn", "简体字"],
        ["hk", "繁體字"],
        ["nl", "Nederlands"],
        ["jp", "日本語"],
        ["nz", "Kiwi (NZ)"],
        ["hu", "Magyar"],
        ["no", "Norsk"],
        ["pl", "Polski"],
        ["pt", "Português"],
        ["ro", "Română"],
        ["ru", "Pусский"],
        ["sa", "العربية"],
        ["sr", "Srpski"],
        ["sk", "Slovenčina"],
        ["fi", "Suomi"],
        ["se", "Svenska"],
        ["ua", "українська"]
    ]);
    language_properties.forEach((language_name, language_code) => {
        let option_t = document.createElement("option");
        option_t.text = language_name;
        option_t.value = language_code;
        document.getElementById('language_picker').add(option_t);
    });
    document.getElementById('language_picker').value = g_lang;
    document.getElementById('language_flag').src = '/assets/lang/'+ g_lang +'.svg';
});

/* scroll event - adjusts the Y axis for the dialog */
window.addEventListener("scroll", (event) => {
    set_window_position();
}, true);

/* resize event - handle the position of the dialog
   should it be present upon window resizing */
window.addEventListener("resize", (event) => {
    set_window_position();
}, true);

/* application specific prompt dialog */
const g_nsl_prompt = new NslPrompt('body');
