(function(){"use strict";var Oe=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,ae=Math.ceil,W=Math.floor,G="[BigNumber Error] ",de=G+"Number primitive has more than 15 significant digits: ",X=1e14,N=14,he=9007199254740991,pe=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],j=1e7,D=1e9;function Ee(E){var g,v,x,p=h.prototype={constructor:h,toString:null,valueOf:null},B=new h(1),A=20,S=4,R=-7,L=21,q=-1e7,U=1e7,k=!1,b=1,y=0,fe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},J="0123456789abcdefghijklmnopqrstuvwxyz",ie=!0;function h(e,r){var n,l,i,s,c,t,f,u,o=this;if(!(o instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){o.s=e.s,!e.c||e.e>U?o.c=o.e=null:e.e<q?o.c=[o.e=0]:(o.e=e.e,o.c=e.c.slice());return}if((t=typeof e=="number")&&e*0==0){if(o.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,c=e;c>=10;c/=10,s++);s>U?o.c=o.e=null:(o.e=s,o.c=[e]);return}u=String(e)}else{if(!Oe.test(u=String(e)))return x(o,u,t);o.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(s=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(s<0&&(s=c),s+=+u.slice(c+1),u=u.substring(0,c)):s<0&&(s=u.length)}else{if(I(r,2,J.length,"Base"),r==10&&ie)return o=new h(e),H(o,A+o.e+1,S);if(u=String(e),t=typeof e=="number"){if(e*0!=0)return x(o,u,t,r);if(o.s=1/e<0?(u=u.slice(1),-1):1,h.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(de+e)}else o.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(n=J.slice(0,r),s=c=0,f=u.length;c<f;c++)if(n.indexOf(l=u.charAt(c))<0){if(l=="."){if(c>s){s=f;continue}}else if(!i&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){i=!0,c=-1,s=0;continue}return x(o,String(e),t,r)}t=!1,u=v(u,r,10,o.s),(s=u.indexOf("."))>-1?u=u.replace(".",""):s=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(f=u.length;u.charCodeAt(--f)===48;);if(u=u.slice(c,++f)){if(f-=c,t&&h.DEBUG&&f>15&&(e>he||e!==W(e)))throw Error(de+o.s*e);if((s=s-c-1)>U)o.c=o.e=null;else if(s<q)o.c=[o.e=0];else{if(o.e=s,o.c=[],c=(s+1)%N,s<0&&(c+=N),c<f){for(c&&o.c.push(+u.slice(0,c)),f-=N;c<f;)o.c.push(+u.slice(c,c+=N));c=N-(u=u.slice(c)).length}else c-=f;for(;c--;u+="0");o.c.push(+u)}}else o.c=[o.e=0]}h.clone=Ee,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,n;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],I(n,0,D,r),A=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],I(n,0,8,r),S=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(I(n[0],-D,0,r),I(n[1],0,D,r),R=n[0],L=n[1]):(I(n,-D,D,r),R=-(L=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)I(n[0],-D,-1,r),I(n[1],1,D,r),q=n[0],U=n[1];else if(I(n,-D,D,r),n)q=-(U=n<0?-n:n);else throw Error(G+r+" cannot be zero: "+n);if(e.hasOwnProperty(r="CRYPTO"))if(n=e[r],n===!!n)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))k=n;else throw k=!n,Error(G+"crypto unavailable");else k=n;else throw Error(G+r+" not true or false: "+n);if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],I(n,0,9,r),b=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],I(n,0,D,r),y=n),e.hasOwnProperty(r="FORMAT"))if(n=e[r],typeof n=="object")fe=n;else throw Error(G+r+" not an object: "+n);if(e.hasOwnProperty(r="ALPHABET"))if(n=e[r],typeof n=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))ie=n.slice(0,10)=="0123456789",J=n;else throw Error(G+r+" invalid: "+n)}else throw Error(G+"Object expected: "+e);return{DECIMAL_PLACES:A,ROUNDING_MODE:S,EXPONENTIAL_AT:[R,L],RANGE:[q,U],CRYPTO:k,MODULO_MODE:b,POW_PRECISION:y,FORMAT:fe,ALPHABET:J}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,n,l=e.c,i=e.e,s=e.s;e:if({}.toString.call(l)=="[object Array]"){if((s===1||s===-1)&&i>=-D&&i<=D&&i===W(i)){if(l[0]===0){if(i===0&&l.length===1)return!0;break e}if(r=(i+1)%N,r<1&&(r+=N),String(l[0]).length==r){for(r=0;r<l.length;r++)if(n=l[r],n<0||n>=X||n!==W(n))break e;if(n!==0)return!0}}}else if(l===null&&i===null&&(s===null||s===1||s===-1))return!0;throw Error(G+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return Q(arguments,p.lt)},h.minimum=h.min=function(){return Q(arguments,p.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return W(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(n){var l,i,s,c,t,f=0,u=[],o=new h(B);if(n==null?n=A:I(n,0,D),c=ae(n/N),k)if(crypto.getRandomValues){for(l=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)t=l[f]*131072+(l[f+1]>>>11),t>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),l[f]=i[0],l[f+1]=i[1]):(u.push(t%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(l=crypto.randomBytes(c*=7);f<c;)t=(l[f]&31)*281474976710656+l[f+1]*1099511627776+l[f+2]*4294967296+l[f+3]*16777216+(l[f+4]<<16)+(l[f+5]<<8)+l[f+6],t>=9e15?crypto.randomBytes(7).copy(l,f):(u.push(t%1e14),f+=7);f=c/7}else throw k=!1,Error(G+"crypto unavailable");if(!k)for(;f<c;)t=r(),t<9e15&&(u[f++]=t%1e14);for(c=u[--f],n%=N,c&&n&&(t=pe[N-n],u[f]=W(c/t)*t);u[f]===0;u.pop(),f--);if(f<0)u=[s=0];else{for(s=-1;u[0]===0;u.splice(0,1),s-=N);for(f=1,t=u[0];t>=10;t/=10,f++);f<N&&(s-=N-f)}return o.e=s,o.c=u,o}}(),h.sum=function(){for(var e=1,r=arguments,n=new h(r[0]);e<r.length;)n=n.plus(r[e++]);return n},v=function(){var e="0123456789";function r(n,l,i,s){for(var c,t=[0],f,u=0,o=n.length;u<o;){for(f=t.length;f--;t[f]*=l);for(t[0]+=s.indexOf(n.charAt(u++)),c=0;c<t.length;c++)t[c]>i-1&&(t[c+1]==null&&(t[c+1]=0),t[c+1]+=t[c]/i|0,t[c]%=i)}return t.reverse()}return function(n,l,i,s,c){var t,f,u,o,a,w,d,m,T=n.indexOf("."),P=A,O=S;for(T>=0&&(o=y,y=0,n=n.replace(".",""),m=new h(l),w=m.pow(n.length-T),y=o,m.c=r(Z(z(w.c),w.e,"0"),10,i,e),m.e=m.c.length),d=r(n,l,i,c?(t=J,e):(t=e,J)),u=o=d.length;d[--o]==0;d.pop());if(!d[0])return t.charAt(0);if(T<0?--u:(w.c=d,w.e=u,w.s=s,w=g(w,m,P,O,i),d=w.c,a=w.r,u=w.e),f=u+P+1,T=d[f],o=i/2,a=a||f<0||d[f+1]!=null,a=O<4?(T!=null||a)&&(O==0||O==(w.s<0?3:2)):T>o||T==o&&(O==4||a||O==6&&d[f-1]&1||O==(w.s<0?8:7)),f<1||!d[0])n=a?Z(t.charAt(1),-P,t.charAt(0)):t.charAt(0);else{if(d.length=f,a)for(--i;++d[--f]>i;)d[f]=0,f||(++u,d=[1].concat(d));for(o=d.length;!d[--o];);for(T=0,n="";T<=o;n+=t.charAt(d[T++]));n=Z(n,u,t.charAt(0))}return n}}(),g=function(){function e(l,i,s){var c,t,f,u,o=0,a=l.length,w=i%j,d=i/j|0;for(l=l.slice();a--;)f=l[a]%j,u=l[a]/j|0,c=d*f+u*w,t=w*f+c%j*j+o,o=(t/s|0)+(c/j|0)+d*u,l[a]=t%s;return o&&(l=[o].concat(l)),l}function r(l,i,s,c){var t,f;if(s!=c)f=s>c?1:-1;else for(t=f=0;t<s;t++)if(l[t]!=i[t]){f=l[t]>i[t]?1:-1;break}return f}function n(l,i,s,c){for(var t=0;s--;)l[s]-=t,t=l[s]<i[s]?1:0,l[s]=t*c+l[s]-i[s];for(;!l[0]&&l.length>1;l.splice(0,1));}return function(l,i,s,c,t){var f,u,o,a,w,d,m,T,P,O,_,C,ce,ge,we,Y,oe,V=l.s==i.s?1:-1,F=l.c,M=i.c;if(!F||!F[0]||!M||!M[0])return new h(!l.s||!i.s||(F?M&&F[0]==M[0]:!M)?NaN:F&&F[0]==0||!M?V*0:V/0);for(T=new h(V),P=T.c=[],u=l.e-i.e,V=s+u+1,t||(t=X,u=$(l.e/N)-$(i.e/N),V=V/N|0),o=0;M[o]==(F[o]||0);o++);if(M[o]>(F[o]||0)&&u--,V<0)P.push(1),a=!0;else{for(ge=F.length,Y=M.length,o=0,V+=2,w=W(t/(M[0]+1)),w>1&&(M=e(M,w,t),F=e(F,w,t),Y=M.length,ge=F.length),ce=Y,O=F.slice(0,Y),_=O.length;_<Y;O[_++]=0);oe=M.slice(),oe=[0].concat(oe),we=M[0],M[1]>=t/2&&we++;do{if(w=0,f=r(M,O,Y,_),f<0){if(C=O[0],Y!=_&&(C=C*t+(O[1]||0)),w=W(C/we),w>1)for(w>=t&&(w=t-1),d=e(M,w,t),m=d.length,_=O.length;r(d,O,m,_)==1;)w--,n(d,Y<m?oe:M,m,t),m=d.length,f=1;else w==0&&(f=w=1),d=M.slice(),m=d.length;if(m<_&&(d=[0].concat(d)),n(O,d,_,t),_=O.length,f==-1)for(;r(M,O,Y,_)<1;)w++,n(O,Y<_?oe:M,_,t),_=O.length}else f===0&&(w++,O=[0]);P[o++]=w,O[0]?O[_++]=F[ce]||0:(O=[F[ce]],_=1)}while((ce++<ge||O[0]!=null)&&V--);a=O[0]!=null,P[0]||P.splice(0,1)}if(t==X){for(o=1,V=P[0];V>=10;V/=10,o++);H(T,s+(T.e=o+u*N-1)+1,c,a)}else T.e=u,T.r=+a;return T}}();function ee(e,r,n,l){var i,s,c,t,f;if(n==null?n=S:I(n,0,8),!e.c)return e.toString();if(i=e.c[0],c=e.e,r==null)f=z(e.c),f=l==1||l==2&&(c<=R||c>=L)?ue(f,c):Z(f,c,"0");else if(e=H(new h(e),r,n),s=e.e,f=z(e.c),t=f.length,l==1||l==2&&(r<=s||s<=R)){for(;t<r;f+="0",t++);f=ue(f,s)}else if(r-=c,f=Z(f,s,"0"),s+1>t){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=s-t,r>0)for(s+1==t&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function Q(e,r){for(var n,l=1,i=new h(e[0]);l<e.length;l++)if(n=new h(e[l]),n.s)r.call(i,n)&&(i=n);else{i=n;break}return i}function se(e,r,n){for(var l=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,l++);return(n=l+n*N-1)>U?e.c=e.e=null:n<q?e.c=[e.e=0]:(e.e=n,e.c=r),e}x=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,l=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(s,c,t,f){var u,o=t?c:c.replace(i,"");if(l.test(o))s.s=isNaN(o)?null:o<0?-1:1;else{if(!t&&(o=o.replace(e,function(a,w,d){return u=(d=d.toLowerCase())=="x"?16:d=="b"?2:8,!f||f==u?w:a}),f&&(u=f,o=o.replace(r,"$1").replace(n,"0.$1")),c!=o))return new h(o,u);if(h.DEBUG)throw Error(G+"Not a"+(f?" base "+f:"")+" number: "+c);s.s=null}s.c=s.e=null}}();function H(e,r,n,l){var i,s,c,t,f,u,o,a=e.c,w=pe;if(a){e:{for(i=1,t=a[0];t>=10;t/=10,i++);if(s=r-i,s<0)s+=N,c=r,f=a[u=0],o=f/w[i-c-1]%10|0;else if(u=ae((s+1)/N),u>=a.length)if(l){for(;a.length<=u;a.push(0));f=o=0,i=1,s%=N,c=s-N+1}else break e;else{for(f=t=a[u],i=1;t>=10;t/=10,i++);s%=N,c=s-N+i,o=c<0?0:f/w[i-c-1]%10|0}if(l=l||r<0||a[u+1]!=null||(c<0?f:f%w[i-c-1]),l=n<4?(o||l)&&(n==0||n==(e.s<0?3:2)):o>5||o==5&&(n==4||l||n==6&&(s>0?c>0?f/w[i-c]:0:a[u-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,l?(r-=e.e+1,a[0]=w[(N-r%N)%N],e.e=-r||0):a[0]=e.e=0,e;if(s==0?(a.length=u,t=1,u--):(a.length=u+1,t=w[N-s],a[u]=c>0?W(f/w[i-c]%w[c])*t:0),l)for(;;)if(u==0){for(s=1,c=a[0];c>=10;c/=10,s++);for(c=a[0]+=t,t=1;c>=10;c/=10,t++);s!=t&&(e.e++,a[0]==X&&(a[0]=1));break}else{if(a[u]+=t,a[u]!=X)break;a[u--]=0,t=1}for(s=a.length;a[--s]===0;a.pop());}e.e>U?e.c=e.e=null:e.e<q&&(e.c=[e.e=0])}return e}function K(e){var r,n=e.e;return n===null?e.toString():(r=z(e.c),r=n<=R||n>=L?ue(r,n):Z(r,n,"0"),e.s<0?"-"+r:r)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,r){return te(this,new h(e,r))},p.decimalPlaces=p.dp=function(e,r){var n,l,i,s=this;if(e!=null)return I(e,0,D),r==null?r=S:I(r,0,8),H(new h(s),e+s.e+1,r);if(!(n=s.c))return null;if(l=((i=n.length-1)-$(this.e/N))*N,i=n[i])for(;i%10==0;i/=10,l--);return l<0&&(l=0),l},p.dividedBy=p.div=function(e,r){return g(this,new h(e,r),A,S)},p.dividedToIntegerBy=p.idiv=function(e,r){return g(this,new h(e,r),0,1)},p.exponentiatedBy=p.pow=function(e,r){var n,l,i,s,c,t,f,u,o,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(G+"Exponent not an integer: "+K(e));if(r!=null&&(r=new h(r)),t=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return o=new h(Math.pow(+K(a),t?e.s*(2-le(e)):+K(e))),r?o.mod(r):o;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);l=!f&&a.isInteger()&&r.isInteger(),l&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||t&&a.c[1]>=24e7:a.c[0]<8e13||t&&a.c[0]<=9999975e7)))return s=a.s<0&&le(e)?-0:0,a.e>-1&&(s=1/s),new h(f?1/s:s);y&&(s=ae(y/N+2))}for(t?(n=new h(.5),f&&(e.s=1),u=le(e)):(i=Math.abs(+K(e)),u=i%2),o=new h(B);;){if(u){if(o=o.times(a),!o.c)break;s?o.c.length>s&&(o.c.length=s):l&&(o=o.mod(r))}if(i){if(i=W(i/2),i===0)break;u=i%2}else if(e=e.times(n),H(e,e.e+1,1),e.e>14)u=le(e);else{if(i=+K(e),i===0)break;u=i%2}a=a.times(a),s?a.c&&a.c.length>s&&(a.c.length=s):l&&(a=a.mod(r))}return l?o:(f&&(o=B.div(o)),r?o.mod(r):s?H(o,y,S,c):o)},p.integerValue=function(e){var r=new h(this);return e==null?e=S:I(e,0,8),H(r,r.e+1,e)},p.isEqualTo=p.eq=function(e,r){return te(this,new h(e,r))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,r){return te(this,new h(e,r))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,r){return(r=te(this,new h(e,r)))===1||r===0},p.isInteger=function(){return!!this.c&&$(this.e/N)>this.c.length-2},p.isLessThan=p.lt=function(e,r){return te(this,new h(e,r))<0},p.isLessThanOrEqualTo=p.lte=function(e,r){return(r=te(this,new h(e,r)))===-1||r===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,r){var n,l,i,s,c=this,t=c.s;if(e=new h(e,r),r=e.s,!t||!r)return new h(NaN);if(t!=r)return e.s=-r,c.plus(e);var f=c.e/N,u=e.e/N,o=c.c,a=e.c;if(!f||!u){if(!o||!a)return o?(e.s=-r,e):new h(a?c:NaN);if(!o[0]||!a[0])return a[0]?(e.s=-r,e):new h(o[0]?c:S==3?-0:0)}if(f=$(f),u=$(u),o=o.slice(),t=f-u){for((s=t<0)?(t=-t,i=o):(u=f,i=a),i.reverse(),r=t;r--;i.push(0));i.reverse()}else for(l=(s=(t=o.length)<(r=a.length))?t:r,t=r=0;r<l;r++)if(o[r]!=a[r]){s=o[r]<a[r];break}if(s&&(i=o,o=a,a=i,e.s=-e.s),r=(l=a.length)-(n=o.length),r>0)for(;r--;o[n++]=0);for(r=X-1;l>t;){if(o[--l]<a[l]){for(n=l;n&&!o[--n];o[n]=r);--o[n],o[l]+=X}o[l]-=a[l]}for(;o[0]==0;o.splice(0,1),--u);return o[0]?se(e,o,u):(e.s=S==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,r){var n,l,i=this;return e=new h(e,r),!i.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||i.c&&!i.c[0]?new h(i):(b==9?(l=e.s,e.s=1,n=g(i,e,0,3),e.s=l,n.s*=l):n=g(i,e,0,b),e=i.minus(n.times(e)),!e.c[0]&&b==1&&(e.s=i.s),e)},p.multipliedBy=p.times=function(e,r){var n,l,i,s,c,t,f,u,o,a,w,d,m,T,P,O=this,_=O.c,C=(e=new h(e,r)).c;if(!_||!C||!_[0]||!C[0])return!O.s||!e.s||_&&!_[0]&&!C||C&&!C[0]&&!_?e.c=e.e=e.s=null:(e.s*=O.s,!_||!C?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(l=$(O.e/N)+$(e.e/N),e.s*=O.s,f=_.length,a=C.length,f<a&&(m=_,_=C,C=m,i=f,f=a,a=i),i=f+a,m=[];i--;m.push(0));for(T=X,P=j,i=a;--i>=0;){for(n=0,w=C[i]%P,d=C[i]/P|0,c=f,s=i+c;s>i;)u=_[--c]%P,o=_[c]/P|0,t=d*u+o*w,u=w*u+t%P*P+m[s]+n,n=(u/T|0)+(t/P|0)+d*o,m[s--]=u%T;m[s]=n}return n?++l:m.splice(0,1),se(e,m,l)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,r){var n,l=this,i=l.s;if(e=new h(e,r),r=e.s,!i||!r)return new h(NaN);if(i!=r)return e.s=-r,l.minus(e);var s=l.e/N,c=e.e/N,t=l.c,f=e.c;if(!s||!c){if(!t||!f)return new h(i/0);if(!t[0]||!f[0])return f[0]?e:new h(t[0]?l:i*0)}if(s=$(s),c=$(c),t=t.slice(),i=s-c){for(i>0?(c=s,n=f):(i=-i,n=t),n.reverse();i--;n.push(0));n.reverse()}for(i=t.length,r=f.length,i-r<0&&(n=f,f=t,t=n,r=i),i=0;r;)i=(t[--r]=t[r]+f[r]+i)/X|0,t[r]=X===t[r]?0:t[r]%X;return i&&(t=[i].concat(t),++c),se(e,t,c)},p.precision=p.sd=function(e,r){var n,l,i,s=this;if(e!=null&&e!==!!e)return I(e,1,D),r==null?r=S:I(r,0,8),H(new h(s),e,r);if(!(n=s.c))return null;if(i=n.length-1,l=i*N+1,i=n[i]){for(;i%10==0;i/=10,l--);for(i=n[0];i>=10;i/=10,l++);}return e&&s.e+1>l&&(l=s.e+1),l},p.shiftedBy=function(e){return I(e,-he,he),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,r,n,l,i,s=this,c=s.c,t=s.s,f=s.e,u=A+4,o=new h("0.5");if(t!==1||!c||!c[0])return new h(!t||t<0&&(!c||c[0])?NaN:c?s:1/0);if(t=Math.sqrt(+K(s)),t==0||t==1/0?(r=z(c),(r.length+f)%2==0&&(r+="0"),t=Math.sqrt(+r),f=$((f+1)/2)-(f<0||f%2),t==1/0?r="5e"+f:(r=t.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),n=new h(r)):n=new h(t+""),n.c[0]){for(f=n.e,t=f+u,t<3&&(t=0);;)if(i=n,n=o.times(i.plus(g(s,i,u,1))),z(i.c).slice(0,t)===(r=z(n.c)).slice(0,t))if(n.e<f&&--t,r=r.slice(t-3,t+1),r=="9999"||!l&&r=="4999"){if(!l&&(H(i,i.e+A+2,0),i.times(i).eq(s))){n=i;break}u+=4,t+=4,l=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(H(n,n.e+A+2,1),e=!n.times(n).eq(s));break}}return H(n,n.e+A+1,S,e)},p.toExponential=function(e,r){return e!=null&&(I(e,0,D),e++),ee(this,e,r,1)},p.toFixed=function(e,r){return e!=null&&(I(e,0,D),e=e+this.e+1),ee(this,e,r)},p.toFormat=function(e,r,n){var l,i=this;if(n==null)e!=null&&r&&typeof r=="object"?(n=r,r=null):e&&typeof e=="object"?(n=e,e=r=null):n=fe;else if(typeof n!="object")throw Error(G+"Argument not an object: "+n);if(l=i.toFixed(e,r),i.c){var s,c=l.split("."),t=+n.groupSize,f=+n.secondaryGroupSize,u=n.groupSeparator||"",o=c[0],a=c[1],w=i.s<0,d=w?o.slice(1):o,m=d.length;if(f&&(s=t,t=f,f=s,m-=s),t>0&&m>0){for(s=m%t||t,o=d.substr(0,s);s<m;s+=t)o+=u+d.substr(s,t);f>0&&(o+=u+d.slice(s)),w&&(o="-"+o)}l=a?o+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):o}return(n.prefix||"")+l+(n.suffix||"")},p.toFraction=function(e){var r,n,l,i,s,c,t,f,u,o,a,w,d=this,m=d.c;if(e!=null&&(t=new h(e),!t.isInteger()&&(t.c||t.s!==1)||t.lt(B)))throw Error(G+"Argument "+(t.isInteger()?"out of range: ":"not an integer: ")+K(t));if(!m)return new h(d);for(r=new h(B),u=n=new h(B),l=f=new h(B),w=z(m),s=r.e=w.length-d.e-1,r.c[0]=pe[(c=s%N)<0?N+c:c],e=!e||t.comparedTo(r)>0?s>0?r:u:t,c=U,U=1/0,t=new h(w),f.c[0]=0;o=g(t,r,0,1),i=n.plus(o.times(l)),i.comparedTo(e)!=1;)n=l,l=i,u=f.plus(o.times(i=u)),f=i,r=t.minus(o.times(i=r)),t=i;return i=g(e.minus(n),l,0,1),f=f.plus(i.times(u)),n=n.plus(i.times(l)),f.s=u.s=d.s,s=s*2,a=g(u,l,s,S).minus(d).abs().comparedTo(g(f,n,s,S).minus(d).abs())<1?[u,l]:[f,n],U=c,a},p.toNumber=function(){return+K(this)},p.toPrecision=function(e,r){return e!=null&&I(e,1,D),ee(this,e,r,2)},p.toString=function(e){var r,n=this,l=n.s,i=n.e;return i===null?l?(r="Infinity",l<0&&(r="-"+r)):r="NaN":(e==null?r=i<=R||i>=L?ue(z(n.c),i):Z(z(n.c),i,"0"):e===10&&ie?(n=H(new h(n),A+i+1,S),r=Z(z(n.c),n.e,"0")):(I(e,2,J.length,"Base"),r=v(Z(z(n.c),i,"0"),10,e,l,!0)),l<0&&n.c[0]&&(r="-"+r)),r},p.valueOf=p.toJSON=function(){return K(this)},p._isBigNumber=!0,p[Symbol.toStringTag]="BigNumber",p[Symbol.for("nodejs.util.inspect.custom")]=p.valueOf,E!=null&&h.set(E),h}function $(E){var g=E|0;return E>0||E===g?g:g-1}function z(E){for(var g,v,x=1,p=E.length,B=E[0]+"";x<p;){for(g=E[x++]+"",v=N-g.length;v--;g="0"+g);B+=g}for(p=B.length;B.charCodeAt(--p)===48;);return B.slice(0,p+1||1)}function te(E,g){var v,x,p=E.c,B=g.c,A=E.s,S=g.s,R=E.e,L=g.e;if(!A||!S)return null;if(v=p&&!p[0],x=B&&!B[0],v||x)return v?x?0:-S:A;if(A!=S)return A;if(v=A<0,x=R==L,!p||!B)return x?0:!p^v?1:-1;if(!x)return R>L^v?1:-1;for(S=(R=p.length)<(L=B.length)?R:L,A=0;A<S;A++)if(p[A]!=B[A])return p[A]>B[A]^v?1:-1;return R==L?0:R>L^v?1:-1}function I(E,g,v,x){if(E<g||E>v||E!==W(E))throw Error(G+(x||"Argument")+(typeof E=="number"?E<g||E>v?" out of range: ":" not an integer: ":" not a primitive number: ")+String(E))}function le(E){var g=E.c.length-1;return $(E.e/N)==g&&E.c[g]%2!=0}function ue(E,g){return(E.length>1?E.charAt(0)+"."+E.slice(1):E)+(g<0?"e":"e+")+g}function Z(E,g,v){var x,p;if(g<0){for(p=v+".";++g;p+=v);E=p+E}else if(x=E.length,++g>x){for(p=v,g-=x;--g;p+=v);E+=p}else g<x&&(E=E.slice(0,g)+"."+E.slice(g));return E}var re=Ee(),Ne=function(E,g){return new re(E.dividedBy(new re(10).exponentiatedBy(g)).toFixed(g))},ne=function(E){return E.replace(/,/g,"")};self.addEventListener("message",E=>{const{data:g}=E,{task:v}=g;let x={};switch(v){case"initialise_exposures":x=Ae(g);break;case"process_fast_unstake_era":x=me(g);break}postMessage({task:v,...x})});const me=E=>{const{currentEra:g,exposures:v,task:x,where:p,who:B}=E;let A=!1;return v.every(({keys:S,val:R})=>S[1]===B||((R==null?void 0:R.others)??[]).find(k=>k.who===B)?(A=!0,!1):!0),{currentEra:g,exposed:A,task:x,where:p,who:B}},Ae=E=>{const{units:g,exposures:v,activeAccount:x,maxNominatorRewardedPerValidator:p}=E,B=[];let A=0;const S=[],R=[];return v.forEach(({keys:L,val:q})=>{var b;A++;const U=L[1];let k=(q==null?void 0:q.others.map(y=>({...y,value:ne(y.value)})))??[];if(k.length){k=k.sort((h,ee)=>{const Q=new re(ne(ee.value)).minus(ne(h.value));return Q.isZero()?0:Q.isLessThan(0)?-1:1});const y=Math.min(p-1,k.length),fe=k.length>0?Ne(new re(((b=k[y])==null?void 0:b.value)||0),g).toString():"0",J=k.length>p;B.push({address:U,lowestReward:fe,oversubscribed:J,others:k,own:ne(q.own),total:ne(q.total)});for(const h of k){const ee=new re(ne(h.value)),Q=R.findIndex(({who:se})=>se===h.who);Q===-1?R.push({who:h.who,value:ee.toString()}):R[Q].value=new re(R[Q].value).plus(ee).toString()}const ie=k.find(({who:h})=>h===x);ie!==void 0&&S.push({address:U,value:Ne(new re(ne(ie.value)),g).toString()})}}),{stakers:B,totalActiveNominators:R.length,activeAccountOwnStake:S,activeValidators:A,who:x}}})();
