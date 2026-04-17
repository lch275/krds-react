import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";import{n as o,t as s}from"./cva-P1AVkQ-i.js";var c,l,u,d,f,p,m=t((()=>{c=e(n(),1),r(),s(),l=a(),u=o([`relative flex gap-3 rounded-lg border p-4`],{variants:{variant:{info:`bg-status-info-subtle border-status-info/30 text-status-info-text`,success:`bg-status-success-subtle border-status-success/30 text-status-success-text`,warning:`bg-status-warning-subtle border-status-warning/30 text-status-warning-text`,error:`bg-status-error-subtle border-status-error/30 text-status-error-text`}},defaultVariants:{variant:`info`}}),d={info:`i`,success:`v`,warning:`!`,error:`x`},f={info:`Info`,success:`Success`,warning:`Warning`,error:`Error`},p=(0,c.forwardRef)(({variant:e=`info`,title:t,children:n,live:r=`off`,className:a,...o},s)=>{let c=e??`info`,p=d[c],m=f[c],h=r===`assertive`?`alert`:r===`polite`?`status`:`region`;return(0,l.jsxs)(`div`,{ref:s,"data-slot":`alert`,"data-variant":c,role:h,"aria-live":r===`off`?void 0:r,"aria-label":h===`region`?`${m}: ${String(t??``)}`:void 0,"aria-atomic":`true`,className:i(u({variant:c}),a),...o,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,"data-slot":`alert-icon`,className:`mt-0.5 shrink-0 text-lg`,children:p}),(0,l.jsxs)(`div`,{"data-slot":`alert-content`,className:`min-w-0 flex-1`,children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[m,`: `]}),t&&(0,l.jsx)(`p`,{"data-slot":`alert-title`,className:`mb-1 font-semibold`,children:t}),n&&(0,l.jsx)(`div`,{"data-slot":`alert-description`,className:`text-sm opacity-90`,children:n})]})]})}),p.displayName=`Alert`,p.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},live:{required:!1,tsType:{name:`union`,raw:`'assertive' | 'polite' | 'off'`,elements:[{name:`literal`,value:`'assertive'`},{name:`literal`,value:`'polite'`},{name:`literal`,value:`'off'`}]},description:``,defaultValue:{value:`'off'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`'info'`,computed:!1},required:!1}}}})),h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{m(),h=a(),g={title:`UI/Alert`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Alert** communicates important contextual information to the user.

## Live region mapping
| live value | role | Use case |
| --- | --- | --- |
| \`off\` | \`region\` | Static information already present in the page flow |
| \`polite\` | \`status\` | Non-blocking updates announced when possible |
| \`assertive\` | \`alert\` | Urgent issues that should interrupt current reading |

## Accessibility notes
- Pair tone with text, not color alone
- Use live regions only for dynamic alerts
- Prefer concise titles and short body copy
        `}}},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`],description:`Alert tone.`,table:{defaultValue:{summary:`info`}}},title:{control:`text`,description:`Alert title.`},children:{control:`text`,description:`Optional body content.`},live:{control:`select`,options:[`off`,`polite`,`assertive`],description:`ARIA live region behavior.`,table:{defaultValue:{summary:`off`}}},className:{control:`text`,description:`Additional Tailwind classes.`}}},_={args:{variant:`info`,title:`Helpful information`,children:`This message provides context the user should review.`}},v={args:{variant:`info`,title:`Service notice`,children:`A new service flow will be available on January 1, 2024.`}},y={args:{variant:`success`,title:`Request submitted`,children:`The civil request has been received successfully.`}},b={args:{variant:`warning`,title:`Check the input`,children:`Please review the information one more time before submitting.`}},x={args:{variant:`error`,title:`Connection error`,children:`The service cannot reach the server right now. Please try again later.`}},S={args:{variant:`info`,title:`Title only alert`}},C={name:`Polite Live Region`,args:{variant:`success`,title:`Save complete`,children:`Your changes have been saved.`,live:`polite`},parameters:{docs:{description:{story:"Use `polite` when the update matters but should not interrupt the current task."}}}},w={name:`Assertive Live Region`,args:{variant:`error`,title:`Session expired`,children:`For security reasons you have been signed out. Please sign in again.`,live:`assertive`},parameters:{docs:{description:{story:"Use `assertive` sparingly for urgent issues that must be announced immediately."}}}},T={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(p,{variant:`info`,title:`Info`,children:`Informational status message.`}),(0,h.jsx)(p,{variant:`success`,title:`Success`,children:`Task completed successfully.`}),(0,h.jsx)(p,{variant:`warning`,title:`Warning`,children:`User confirmation is recommended.`}),(0,h.jsx)(p,{variant:`error`,title:`Error`,children:`A blocking problem has occurred.`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Helpful information',
    children: 'This message provides context the user should review.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Service notice',
    children: 'A new service flow will be available on January 1, 2024.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Request submitted',
    children: 'The civil request has been received successfully.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Check the input',
    children: 'Please review the information one more time before submitting.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Connection error',
    children: 'The service cannot reach the server right now. Please try again later.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Title only alert'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Polite Live Region',
  args: {
    variant: 'success',
    title: 'Save complete',
    children: 'Your changes have been saved.',
    live: 'polite'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`polite\` when the update matters but should not interrupt the current task.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Assertive Live Region',
  args: {
    variant: 'error',
    title: 'Session expired',
    children: 'For security reasons you have been signed out. Please sign in again.',
    live: 'assertive'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`assertive\` sparingly for urgent issues that must be announced immediately.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Alert variant="info" title="Info">\r
        Informational status message.\r
      </Alert>\r
      <Alert variant="success" title="Success">\r
        Task completed successfully.\r
      </Alert>\r
      <Alert variant="warning" title="Warning">\r
        User confirmation is recommended.\r
      </Alert>\r
      <Alert variant="error" title="Error">\r
        A blocking problem has occurred.\r
      </Alert>\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Info`,`Success`,`Warning`,`Error`,`TitleOnly`,`LivePolite`,`LiveAssertive`,`AllVariants`]}))();export{T as AllVariants,_ as Default,x as Error,v as Info,w as LiveAssertive,C as LivePolite,y as Success,S as TitleOnly,b as Warning,E as __namedExportsOrder,g as default};