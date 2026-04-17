import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./FilterChip-Bs7SokBS.js";function o({total:e,query:t,actions:r,className:i}){return(0,s.jsxs)(`section`,{"data-slot":`result-summary`,className:n(`flex flex-wrap items-center justify-between gap-3 rounded-card border border-border-default bg-bg-default px-4 py-3`,i),children:[(0,s.jsxs)(`p`,{className:`text-sm text-text-default`,children:[(0,s.jsx)(`span`,{className:`font-semibold`,children:e}),` results`,t?` for "${t}"`:``]}),r]})}var s,c=e((()=>{t(),s=r(),o.__docgenInfo={description:``,methods:[],displayName:`ResultSummary`,props:{total:{required:!0,tsType:{name:`number`},description:``},query:{required:!1,tsType:{name:`string`},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d,f;e((()=>{i(),c(),l=r(),u={title:`Patterns/ResultSummary`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**ResultSummary** gives users a quick overview of result count, query context, and active filters.

## Accessibility notes
- Keep the count and query readable as plain text
- Selected filters should remain understandable without relying on visuals alone
- Use summary content to orient the user before the result list begins
        `}}},argTypes:{total:{control:`number`,description:`Total number of results.`},query:{control:`text`,description:`Current query text.`},actions:{description:`Optional area for filter chips or summary actions.`}}},d={args:{total:24,query:`housing`,actions:(0,l.jsxs)(`div`,{className:`flex gap-2`,children:[(0,l.jsx)(a,{selected:!0,children:`Benefits`}),(0,l.jsx)(a,{removable:!0,children:`Housing`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    total: 24,
    query: 'housing',
    actions: <div className="flex gap-2">\r
        <FilterChip selected>Benefits</FilterChip>\r
        <FilterChip removable>Housing</FilterChip>\r
      </div>
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};