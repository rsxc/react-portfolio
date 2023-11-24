"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[650,84,297],{7084:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});t(2791),t(3508);var s=t(184);const r=function(e){const{title:a}=e;return(0,s.jsx)("div",{className:"header",children:a})}},1650:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(2791),r=t(7022),c=t(9743),n=t(3360),o=t(5867),l=t(4075),d=t.n(l),i=t(7084),f=t(126),m=t(1297),x=t(2150),u=t(184);const p={containerStyle:{marginBottom:25},showMoreStyle:{position:"relative",margin:25}},v=e=>{var a;const t=(0,s.useContext)(o.Ni),{header:l}=e,[v,y]=(0,s.useState)(null),[b,N]=(0,s.useState)(!1);(0,s.useEffect)((()=>{fetch(f.Z.projects,{method:"GET"}).then((e=>e.json())).then((e=>y(e))).catch((e=>e))}),[]);const h=b&&v?v.length:6;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.default,{title:l}),v?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsxs)(r.Z,{style:p.containerStyle,children:[(0,u.jsx)(c.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=v.projects)||void 0===a?void 0:a.slice(0,h).map((e=>(0,u.jsx)(d(),{children:(0,u.jsx)(m.default,{project:e})},e.title)))}),!b&&(0,u.jsx)(n.Z,{style:p.showMoreStyle,variant:t.bsSecondaryVariant,onClick:()=>N(!0),children:"show more"})]})}):(0,u.jsx)(x.default,{})]})}},1297:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var s=t(2791),r=t(2677),c=t(1694),n=t.n(c),o=t(162),l=t(184);const d=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,o.vE)(s,"card-body"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));d.displayName="CardBody";const i=d,f=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,o.vE)(s,"card-footer"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));f.displayName="CardFooter";const m=f;var x=t(6040);const u=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,as:c="div",...d}=e;const i=(0,o.vE)(t,"card-header"),f=(0,s.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,l.jsx)(x.Z.Provider,{value:f,children:(0,l.jsx)(c,{ref:a,...d,className:n()(r,i)})})}));u.displayName="CardHeader";const p=u,v=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,variant:r,as:c="img",...d}=e;const i=(0,o.vE)(t,"card-img");return(0,l.jsx)(c,{ref:a,className:n()(r?"".concat(i,"-").concat(r):i,s),...d})}));v.displayName="CardImg";const y=v,b=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,o.vE)(s,"card-img-overlay"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));b.displayName="CardImgOverlay";const N=b,h=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="a",...c}=e;return s=(0,o.vE)(s,"card-link"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));h.displayName="CardLink";const j=h;var g=t(7472);const S=(0,g.Z)("h6"),w=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r=S,...c}=e;return s=(0,o.vE)(s,"card-subtitle"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));w.displayName="CardSubtitle";const C=w,P=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="p",...c}=e;return s=(0,o.vE)(s,"card-text"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));P.displayName="CardText";const E=P,R=(0,g.Z)("h5"),k=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r=R,...c}=e;return s=(0,o.vE)(s,"card-title"),(0,l.jsx)(r,{ref:a,className:n()(t,s),...c})}));k.displayName="CardTitle";const T=k,B=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,bg:r,text:c,border:d,body:f=!1,children:m,as:x="div",...u}=e;const p=(0,o.vE)(t,"card");return(0,l.jsx)(x,{ref:a,...u,className:n()(s,p,r&&"bg-".concat(r),c&&"text-".concat(c),d&&"border-".concat(d)),children:f?(0,l.jsx)(i,{children:m}):m})}));B.displayName="Card";const Z=Object.assign(B,{Img:y,Title:T,Subtitle:C,Body:i,Link:j,Text:E,Header:p,Footer:m,ImgOverlay:N});var F=t(3360);const I=s.forwardRef(((e,a)=>{let{bsPrefix:t,bg:s="primary",pill:r=!1,text:c,className:d,as:i="span",...f}=e;const m=(0,o.vE)(t,"badge");return(0,l.jsx)(i,{ref:a,...f,className:n()(d,m,r&&"rounded-pill",c&&"text-".concat(c),s&&"bg-".concat(s))})}));I.displayName="Badge";const V=I;var z=t(5867),G=t(6048);const H={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},L=e=>{var a;const t=(0,s.useContext)(z.Ni),{project:c}=e;return(0,l.jsx)(r.Z,{children:(0,l.jsxs)(Z,{style:{...H.cardStyle,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor},text:t.bsSecondaryVariant,children:[(0,l.jsx)(Z.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,l.jsxs)(Z.Body,{children:[(0,l.jsx)(Z.Title,{style:H.cardTitleStyle,children:c.title}),(0,l.jsx)(Z.Text,{style:H.cardTextStyle,children:(n=c.bodyText,(0,l.jsx)(G.U,{children:n}))})]}),(0,l.jsx)(Z.Body,{children:null===c||void 0===c||null===(a=c.links)||void 0===a?void 0:a.map((e=>(0,l.jsx)(F.Z,{style:H.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),c.tags&&(0,l.jsx)(Z.Footer,{style:{backgroundColor:t.cardFooterBackground},children:c.tags.map((e=>(0,l.jsx)(V,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:H.badgeStyle,children:e},e)))})]})});var n}},3360:(e,a,t)=>{t.d(a,{Z:()=>i});var s=t(1694),r=t.n(s),c=t(2791),n=t(5341),o=t(162),l=t(184);const d=c.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:c="primary",size:d,active:i=!1,disabled:f=!1,className:m,...x}=e;const u=(0,o.vE)(s,"btn"),[p,{tagName:v}]=(0,n.FT)({tagName:t,disabled:f,...x}),y=v;return(0,l.jsx)(y,{...p,...x,ref:a,disabled:f,className:r()(m,u,i&&"active",c&&"".concat(u,"-").concat(c),d&&"".concat(u,"-").concat(d),x.href&&f&&"disabled")})}));d.displayName="Button";const i=d},2677:(e,a,t)=>{t.d(a,{Z:()=>d});var s=t(1694),r=t.n(s),c=t(2791),n=t(162),o=t(184);const l=c.forwardRef(((e,a)=>{const[{className:t,...s},{as:c="div",bsPrefix:l,spans:d}]=function(e){let{as:a,bsPrefix:t,className:s,...c}=e;t=(0,n.vE)(t,"col");const o=(0,n.pi)(),l=(0,n.zG)(),d=[],i=[];return o.forEach((e=>{const a=c[e];let s,r,n;delete c[e],"object"===typeof a&&null!=a?({span:s,offset:r,order:n}=a):s=a;const o=e!==l?"-".concat(e):"";s&&d.push(!0===s?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(s)),null!=n&&i.push("order".concat(o,"-").concat(n)),null!=r&&i.push("offset".concat(o,"-").concat(r))})),[{...c,className:r()(s,...d,...i)},{as:a,bsPrefix:t,spans:d}]}(e);return(0,o.jsx)(c,{...s,ref:a,className:r()(t,!d.length&&l)})}));l.displayName="Col";const d=l},9743:(e,a,t)=>{t.d(a,{Z:()=>d});var s=t(1694),r=t.n(s),c=t(2791),n=t(162),o=t(184);const l=c.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,as:c="div",...l}=e;const d=(0,n.vE)(t,"row"),i=(0,n.pi)(),f=(0,n.zG)(),m="".concat(d,"-cols"),x=[];return i.forEach((e=>{const a=l[e];let t;delete l[e],null!=a&&"object"===typeof a?({cols:t}=a):t=a;const s=e!==f?"-".concat(e):"";null!=t&&x.push("".concat(m).concat(s,"-").concat(t))})),(0,o.jsx)(c,{ref:a,...l,className:r()(s,d,...x)})}));l.displayName="Row";const d=l}}]);
//# sourceMappingURL=650.945b6944.chunk.js.map