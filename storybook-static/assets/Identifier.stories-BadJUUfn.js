import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";function i({organization:e,text:t,tone:r=`light`,className:i}){return(0,a.jsx)(`section`,{"data-slot":`identifier`,className:n(`rounded-card px-4 py-3`,r===`light`?`bg-bg-default text-text-default`:`bg-bg-inverse text-text-inverse`,i),children:(0,a.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,a.jsx)(`span`,{"aria-hidden":`true`,className:n(`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold`,r===`light`?`bg-primary text-text-on-primary`:`bg-bg-default text-text-default`),children:`GOV`}),(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(`p`,{className:`text-sm font-semibold`,children:e}),(0,a.jsx)(`p`,{className:n(`text-sm`,r===`light`?`text-text-subtle`:`text-text-inverse/80`),children:t??`This service is operated and managed by ${e}.`})]})]})})}var a,o=e((()=>{t(),a=r(),i.__docgenInfo={description:``,methods:[],displayName:`Identifier`,props:{organization:{required:!0,tsType:{name:`string`},description:``},text:{required:!1,tsType:{name:`string`},description:``},tone:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u;e((()=>{o(),s={title:`Identity/Identifier`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Identifier** presents organization identity in a compact block that can support dark or light presentation.

## Accessibility notes
- Keep the organization name explicit
- Ensure contrast remains sufficient in both tones
- Use identifier content consistently across pages that share the same organization context
        `}}},argTypes:{organization:{control:`text`,description:`Organization name.`},tone:{control:`select`,options:[`light`,`dark`],description:`Visual tone.`}}},c={args:{organization:`Ministry of Health and Welfare`}},l={args:{organization:`Ministry of Health and Welfare`,tone:`dark`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    organization: 'Ministry of Health and Welfare'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    organization: 'Ministry of Health and Welfare',
    tone: 'dark'
  }
}`,...l.parameters?.docs?.source}}},u=[`Light`,`Dark`]}))();export{l as Dark,c as Light,u as __namedExportsOrder,s as default};