import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";function i({items:e,className:t}){return(0,a.jsx)(`ul`,{"data-slot":`result-list`,className:n(`space-y-3`,t),children:e.map(e=>(0,a.jsxs)(`li`,{className:`rounded-card border border-border-default bg-bg-default p-4`,children:[e.href?(0,a.jsx)(`a`,{href:e.href,className:`text-base font-semibold text-text-link underline-offset-4 hover:underline`,children:e.title}):(0,a.jsx)(`p`,{className:`text-base font-semibold text-text-default`,children:e.title}),e.description&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-text-subtle`,children:e.description}),e.metadata&&(0,a.jsx)(`div`,{className:`mt-3 text-sm text-text-muted`,children:e.metadata})]},`${e.title}-${e.href??`item`}`))})}var a,o=e((()=>{t(),a=r(),i.__docgenInfo={description:``,methods:[],displayName:`ResultList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string
  description?: string
  metadata?: ReactNode
  href?: string
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`metadata`,value:{name:`ReactNode`,required:!1}},{key:`href`,value:{name:`string`,required:!1}}]}}],raw:`ResultItemProps[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l;e((()=>{o(),s={title:`Patterns/ResultList`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`
**ResultList** displays a list of search or browse results with optional metadata.

## Accessibility notes
- Result titles should be descriptive enough to stand on their own
- Metadata should supplement the result, not replace the title
- Use result lists for browseable content, not for strictly tabular data
        `}}},argTypes:{items:{description:`Result items containing title, link, description, and optional metadata.`}}},c={args:{items:[{title:`Housing support application`,href:`#`,description:`Apply for housing support programs and review eligibility.`,metadata:`Updated 2026-04-10`},{title:`Housing subsidy guide`,href:`#`,description:`Read the latest subsidy guidance and required documents.`,metadata:`Updated 2026-03-28`}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Housing support application',
      href: '#',
      description: 'Apply for housing support programs and review eligibility.',
      metadata: 'Updated 2026-04-10'
    }, {
      title: 'Housing subsidy guide',
      href: '#',
      description: 'Read the latest subsidy guidance and required documents.',
      metadata: 'Updated 2026-03-28'
    }]
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};