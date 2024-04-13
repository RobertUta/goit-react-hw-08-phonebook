(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[94],{4899:function(e,n,t){"use strict";t.d(n,{U:function(){return j}});var r=t(1413),i=t(9439),o=t(1807),a=t(1753),s=t(6468),u=t(4805),c=t(4605),l=t(5595),f=t(2362),d=t(6386),x=t(5128),p=t(767),m=t(9867),v=t(4511),h=t(2834),j=(0,m.forwardRef)((function(e,n){var t=e.type,j=e.name,y=e.label,b="password"===t,g=(0,p.U$)(e),w=(0,i.Z)(g,2),Z=w[0],S=w[1],L=(0,o.q)({defaultIsOpen:!b}),T=L.isOpen,k=L.onToggle,C=(0,m.useRef)(null),I=(0,a.q)(C,n);return(0,h.jsxs)(s.NI,{isInvalid:S.error,children:[(0,h.jsx)(u.l,{htmlFor:j,children:y}),(0,h.jsxs)(c.B,{children:[b&&(0,h.jsx)(l.x,{children:(0,h.jsx)(f.h,{variant:"text","aria-label":T?"Mask password":"Reveal password",icon:T?(0,h.jsx)(v.MBb,{}):(0,h.jsx)(v.Rbo,{}),onClick:function(){k(),C.current&&C.current.focus({preventScroll:!0})}})}),(0,h.jsx)(d.I,(0,r.Z)((0,r.Z)((0,r.Z)({ref:I},Z),e),{},{type:T?"text":"password"}))]}),S.error&&(0,h.jsx)(x.J1,{children:S.error})]})}));j.displayName="InputField"},4094:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return re}});var r=t(4165),i=t(5861),o=t(8114),a=t(767),s=t(3479),u=t(3094),c=t(599),l=t(5464),f=t(8159),d=t(2067),x=function(e){return e.filters},p=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},v=function(e){var n=p(e),t=x(e);return t?n.filter((function(e){return e.name.toLowerCase().includes(t)})):n},h=t(4899),j=t(9867),y=t(2834),b={name:"",number:""},g=function(){var e=(0,u.I0)(),n=(0,u.v9)(p),t=(0,j.useMemo)((function(){return s.Ry().shape({name:s.Z_().matches(/^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$/g,"Should be name").test("",(function(e){var n=e.value;return"".concat(n," is already in contacts")}),(function(e){return!n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))})).required(),number:s.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,"Should be phone number").test("",(function(e){var n=e.value;return"".concat(n," is already in contacts")}),(function(e){return!n.find((function(n){return n.number.toLowerCase()===e.toLowerCase()}))})).required()})}),[n]),x=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,i){var a,s,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.name,s=t.number,u={id:(0,o.x0)(),name:a,number:s},n.next=4,e((0,d.uK)(u)).unwrap();case 4:i.resetForm();case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,y.jsx)(c.k,{maxWidth:"100%",flexDirection:"column",alignItems:"center",children:(0,y.jsx)(a.J9,{onSubmit:x,initialValues:b,validationSchema:t,children:function(e){var n=e.isSubmitting;e.isValidating;return(0,y.jsx)(a.l0,{children:(0,y.jsxs)(c.k,{width:"600px",flexDirection:"column",gap:6,children:[(0,y.jsx)(l.x,{fontSize:"2xl",children:"New phone"}),(0,y.jsx)(h.U,{id:"name",label:"Name",placeholder:"Please enter your name",type:"name",name:"name"}),(0,y.jsx)(h.U,{id:"number",label:"Number",placeholder:"Please enter your number",type:"tel",name:"number"}),(0,y.jsx)(f.z,{width:"xs",type:"submit",disabled:n,isLoading:n,children:(0,y.jsx)(l.x,{children:"Add new contact"})})]})})}})})},w=t(1413),Z=t(4942),S=t(4925),L=t(9439),T=t(3469),k=t(631),C=t(547),I=t(8836),_=t(7673),N=t(9511),O=t(6146),z=["children","styleType","stylePosition","spacing"],F=["as"],M=["as"],P=(0,k.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),G=(0,L.Z)(P,2),U=G[0],W=G[1],$=(0,I.G)((function(e,n){var t=(0,_.jC)("List",e),r=(0,N.Lr)(e),i=r.children,o=r.styleType,a=void 0===o?"none":o,s=r.stylePosition,u=r.spacing,c=(0,S.Z)(r,z),l=(0,C.W)(i),f=u?(0,Z.Z)({},"& > *:not(style) ~ *:not(style)",{mt:u}):{};return(0,y.jsx)(U,{value:t,children:(0,y.jsx)(O.m.ul,(0,w.Z)((0,w.Z)({ref:n,listStyleType:a,listStylePosition:s,role:"list",__css:(0,w.Z)((0,w.Z)({},t.container),f)},c),{},{children:l}))})}));$.displayName="List";var A=(0,I.G)((function(e,n){e.as;var t=(0,S.Z)(e,F);return(0,y.jsx)($,(0,w.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));A.displayName="OrderedList",(0,I.G)((function(e,n){e.as;var t=(0,S.Z)(e,M);return(0,y.jsx)($,(0,w.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var D=(0,I.G)((function(e,n){var t=W();return(0,y.jsx)(O.m.li,(0,w.Z)((0,w.Z)({ref:n},e),{},{__css:t.item}))}));D.displayName="ListItem",(0,I.G)((function(e,n){var t=W();return(0,y.jsx)(T.J,(0,w.Z)((0,w.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var R=t(4256),q=t(4511),B=function(e){var n=e.highlightText,t=e.name,r=t.toLowerCase().indexOf(n),i=t.slice(0,r),o=t.slice(r,r+n.length),a=t.slice(r+n.length);return(0,y.jsxs)(l.x,{as:"span",children:[i,(0,y.jsx)(l.x,{as:"span",fontWeight:"bold",children:o}),a]})},E=function(e){var n=e.item,t=e.onDelete,r=(0,j.useState)(!1),i=(0,L.Z)(r,2),o=i[0],a=i[1],s=(0,u.v9)(x);return(0,y.jsx)(D,{marginBlock:6,children:(0,y.jsxs)(c.k,{width:"100%",justifyContent:"space-between",alignItems:"center",children:[(0,y.jsx)(R.xu,{children:(0,y.jsxs)(l.x,{children:[s?(0,y.jsx)(B,{highlightText:s,name:n.name}):n.name,"  ",n.number]})}),(0,y.jsx)(f.z,{isLoading:o,colorScheme:"red",onClick:function(){a(!0),t(n.id).finally((function(){return a(!1)}))},size:"sm",children:(0,y.jsx)(q.VLi,{})})]})})};var J=function(){var e=(0,u.I0)(),n=(0,u.v9)(v),t=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,d.GK)(t)).unwrap();case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsx)(A,{children:n.map((function(e){return(0,y.jsx)(E,{item:e,onDelete:t},e.id)}))})},V=t(6468),K=t(4805),H=t(4605),Q=t(6386),X=t(2294),Y=t(2230),ee=t.n(Y);var ne=function(){var e=(0,u.I0)(),n=(0,j.useState)(""),t=(0,L.Z)(n,2),r=t[0],i=t[1],o=(0,j.useMemo)((function(){return ee()((function(n){e((0,X.T)(n.toLowerCase().trim()))}),300)}),[e]);return(0,y.jsxs)(V.NI,{children:[(0,y.jsx)(K.l,{htmlFor:"filter",children:"Find contacts by name:"}),(0,y.jsx)(H.B,{children:(0,y.jsx)(Q.I,{id:"filter",type:"text",name:"filter",onChange:function(e){i(e.target.value),o(e.target.value)},value:r})})]})},te=t(7097);function re(){var e=(0,u.I0)(),n=(0,u.v9)(m);return(0,j.useEffect)((function(){e((0,d.yF)())}),[e]),(0,y.jsxs)(R.xu,{width:"100%",children:[(0,y.jsx)(l.x,{fontSize:"4xl",fontWeight:"bold",children:"Phonebook"}),(0,y.jsx)(g,{}),(0,y.jsx)(l.x,{fontSize:"4xl",marginTop:12,children:"Contacts"}),(0,y.jsx)(ne,{}),n?(0,y.jsx)(te.$,{}):(0,y.jsx)(J,{})]})}},1817:function(e,n,t){var r=t(5839).Symbol;e.exports=r},3621:function(e,n,t){var r=t(1817),i=t(4453),o=t(2077),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:a:u&&u in Object(e)?i(e):o(e)}},513:function(e,n,t){var r=t(2430),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},1452:function(e,n,t){var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=r},4453:function(e,n,t){var r=t(1817),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var n=o.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(u){}var i=a.call(e);return r&&(n?e[s]=t:delete e[s]),i}},2077:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},5839:function(e,n,t){var r=t(1452),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},2430:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},2230:function(e,n,t){var r=t(4050),i=t(8854),o=t(7901),a="Expected a function",s=Math.max,u=Math.min;e.exports=function(e,n,t){var c,l,f,d,x,p,m=0,v=!1,h=!1,j=!0;if("function"!=typeof e)throw new TypeError(a);function y(n){var t=c,r=l;return c=l=void 0,m=n,d=e.apply(r,t)}function b(e){var t=e-p;return void 0===p||t>=n||t<0||h&&e-m>=f}function g(){var e=i();if(b(e))return w(e);x=setTimeout(g,function(e){var t=n-(e-p);return h?u(t,f-(e-m)):t}(e))}function w(e){return x=void 0,j&&c?y(e):(c=l=void 0,d)}function Z(){var e=i(),t=b(e);if(c=arguments,l=this,p=e,t){if(void 0===x)return function(e){return m=e,x=setTimeout(g,n),v?y(e):d}(p);if(h)return clearTimeout(x),x=setTimeout(g,n),y(p)}return void 0===x&&(x=setTimeout(g,n)),d}return n=o(n)||0,r(t)&&(v=!!t.leading,f=(h="maxWait"in t)?s(o(t.maxWait)||0,n):f,j="trailing"in t?!!t.trailing:j),Z.cancel=function(){void 0!==x&&clearTimeout(x),m=0,c=p=l=x=void 0},Z.flush=function(){return void 0===x?d:w(i())},Z}},4050:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},3911:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6550:function(e,n,t){var r=t(3621),i=t(3911),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&r(e)==o}},8854:function(e,n,t){var r=t(5839);e.exports=function(){return r.Date.now()}},7901:function(e,n,t){var r=t(513),i=t(4050),o=t(6550),a=NaN,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return a;if(i(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=i(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var t=u.test(e);return t||c.test(e)?l(e.slice(2),t?2:8):s.test(e)?a:+e}}}]);
//# sourceMappingURL=94.3536e740.chunk.js.map