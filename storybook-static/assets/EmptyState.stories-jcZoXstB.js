import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Button-CdI2ZtSv.js";function o({title:e,description:t,actions:r,illustration:i,className:a}){return(0,s.jsx)(`section`,{"data-slot":`empty-state`,className:n(`rounded-card border border-dashed border-border-default bg-bg-subtle px-6 py-10 text-center`,a),children:(0,s.jsxs)(`div`,{className:`mx-auto max-w-md space-y-4`,children:[(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-bg-default text-2xl text-text-subtle`,children:i??`○`}),(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsx)(`h2`,{className:`text-xl font-semibold text-text-default`,children:e}),t&&(0,s.jsx)(`p`,{className:`text-sm text-text-subtle`,children:t})]}),r&&(0,s.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:r})]})})}var s,c=e((()=>{t(),s=r(),o.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:``},illustration:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d,f;e((()=>{i(),c(),l=r(),u={title:`Feedback/EmptyState`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**EmptyState** explains why no content is currently visible and suggests the next action.

## Accessibility notes
- Include a clear title and short explanation
- Pair the message with one or two next-step actions when possible
- Do not use an empty state for loading or error conditions that need different feedback patterns
        `}}},argTypes:{title:{control:`text`,description:`Primary empty-state heading.`},description:{control:`text`,description:`Supporting explanation.`},actions:{description:`Optional action area.`}}},d={args:{title:`No saved drafts`,description:`Start a new request or adjust the current filters.`,actions:(0,l.jsx)(a,{children:`Start request`})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No saved drafts',
    description: 'Start a new request or adjust the current filters.',
    actions: <Button>Start request</Button>
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};