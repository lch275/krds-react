import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";import{n as o,t as s}from"./cva-P1AVkQ-i.js";var c,l,u,d,f=t((()=>{c=e(n(),1),r(),s(),l=a(),u=o([`inline-flex items-center gap-1`,`rounded-badge border px-2.5 py-0.5`,`text-xs font-medium`,`transition-colors`],{variants:{variant:{default:`bg-bg-subtle text-text-default border-border-default`,primary:`bg-primary-subtle text-primary border-primary/20`,success:`bg-status-success-subtle text-status-success border-status-success/20`,warning:`bg-status-warning-subtle text-status-warning border-status-warning/20`,error:`bg-status-error-subtle text-status-error border-status-error/20`,info:`bg-status-info-subtle text-status-info border-status-info/20`,solid:`bg-primary text-text-on-primary border-transparent`}},defaultVariants:{variant:`default`}}),d=(0,c.forwardRef)(({variant:e,className:t,children:n,...r},a)=>(0,l.jsx)(`span`,{ref:a,"data-slot":`badge`,className:i(u({variant:e}),t),...r,children:n})),d.displayName=`Badge`,d.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{f(),p=a(),m={title:`UI/Badge`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Badge** is a compact label used for status, category, and lightweight counts.

## Accessibility notes
- Do not rely on color alone to communicate meaning
- Count badges should provide an accessible label when the raw number is ambiguous
- Dynamic badge updates should be announced from an appropriate live region owned by the parent flow
        `}}},argTypes:{variant:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`error`,`info`,`solid`],description:`Badge tone.`,table:{defaultValue:{summary:`default`}}},children:{control:`text`,description:`Visible badge text.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},h={args:{children:`Default`,variant:`default`}},g={args:{children:`Primary`,variant:`primary`}},_={args:{children:`Complete`,variant:`success`}},v={args:{children:`Warning`,variant:`warning`}},y={args:{children:`Error`,variant:`error`}},b={args:{children:`Info`,variant:`info`}},x={args:{children:`Emphasis`,variant:`solid`}},S={name:`Count Badge`,args:{children:`3`,variant:`primary`,"aria-label":`3 unread notifications`}},C={name:`All Variants`,render:()=>(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(d,{variant:`default`,children:`Default`}),(0,p.jsx)(d,{variant:`primary`,children:`Primary`}),(0,p.jsx)(d,{variant:`success`,children:`Complete`}),(0,p.jsx)(d,{variant:`warning`,children:`Warning`}),(0,p.jsx)(d,{variant:`error`,children:`Error`}),(0,p.jsx)(d,{variant:`info`,children:`Info`}),(0,p.jsx)(d,{variant:`solid`,children:`Emphasis`})]})},w={name:`Status Example`,render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`text-text-default`,children:`Request status`}),(0,p.jsx)(d,{variant:`success`,children:`Approved`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`text-text-default`,children:`Civil request intake`}),(0,p.jsx)(d,{variant:`warning`,children:`Reviewing`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`text-text-default`,children:`System health`}),(0,p.jsx)(d,{variant:`error`,children:`Down`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`text-text-default`,children:`New notices`}),(0,p.jsx)(d,{variant:`primary`,"aria-label":`5 new notices`,children:`5`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'default'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Complete',
    variant: 'success'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Warning',
    variant: 'warning'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'error'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    variant: 'info'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Emphasis',
    variant: 'solid'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Count Badge',
  args: {
    children: '3',
    variant: 'primary',
    'aria-label': '3 unread notifications'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-wrap gap-3">\r
      <Badge variant="default">Default</Badge>\r
      <Badge variant="primary">Primary</Badge>\r
      <Badge variant="success">Complete</Badge>\r
      <Badge variant="warning">Warning</Badge>\r
      <Badge variant="error">Error</Badge>\r
      <Badge variant="info">Info</Badge>\r
      <Badge variant="solid">Emphasis</Badge>\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Status Example',
  render: () => <div className="flex flex-col gap-3">\r
      <div className="flex items-center gap-2">\r
        <span className="text-text-default">Request status</span>\r
        <Badge variant="success">Approved</Badge>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <span className="text-text-default">Civil request intake</span>\r
        <Badge variant="warning">Reviewing</Badge>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <span className="text-text-default">System health</span>\r
        <Badge variant="error">Down</Badge>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <span className="text-text-default">New notices</span>\r
        <Badge variant="primary" aria-label="5 new notices">\r
          5\r
        </Badge>\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Primary`,`Success`,`Warning`,`Error`,`Info`,`Solid`,`WithAriaLabel`,`AllVariants`,`StatusExample`]}))();export{C as AllVariants,h as Default,y as Error,b as Info,g as Primary,x as Solid,w as StatusExample,_ as Success,v as Warning,S as WithAriaLabel,T as __namedExportsOrder,m as default};