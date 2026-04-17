import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Checkbox-BHUCKjo5.js";function o({title:e,description:t,children:r,className:i}){return(0,s.jsxs)(`section`,{"data-slot":`consent-section`,className:n(`space-y-4 rounded-card border border-border-default bg-bg-default p-4`,i),children:[(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsx)(`h2`,{className:`text-lg font-semibold text-text-default`,children:e}),t&&(0,s.jsx)(`p`,{className:`text-sm text-text-subtle`,children:t})]}),(0,s.jsx)(`div`,{className:`space-y-3`,children:r})]})}var s,c=e((()=>{t(),s=r(),o.__docgenInfo={description:``,methods:[],displayName:`ConsentSection`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d,f;e((()=>{i(),c(),l=r(),u={title:`Patterns/ConsentSection`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**ConsentSection** groups related consent options under one visible explanation.

## Accessibility notes
- Separate required and optional consent items clearly
- Keep legal text readable and grouped with the control it belongs to
- Avoid bundling unrelated policies into a single consent block
        `}}},argTypes:{title:{control:`text`,description:`Section heading.`},description:{control:`text`,description:`Supporting explanation.`}}},d={render:e=>(0,l.jsxs)(o,{...e,children:[(0,l.jsx)(a,{defaultChecked:!0,children:`Agree to the collection and use of personal data.`}),(0,l.jsx)(a,{children:`Agree to receive service updates.`})]}),args:{title:`Privacy consent`,description:`Review the required terms before you submit the application.`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ConsentSection {...args}>\r
      <Checkbox defaultChecked>Agree to the collection and use of personal data.</Checkbox>\r
      <Checkbox>Agree to receive service updates.</Checkbox>\r
    </ConsentSection>,
  args: {
    title: 'Privacy consent',
    description: 'Review the required terms before you submit the application.'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};