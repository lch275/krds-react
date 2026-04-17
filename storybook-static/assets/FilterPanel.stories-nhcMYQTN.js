import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Button-CdI2ZtSv.js";import{i as o,t as s}from"./Field-DyWV1_DR.js";import{r as c}from"./useFieldControlProps-BEJD2pmd.js";import{n as l,t as u}from"./Input-CUW0sdRG.js";import{n as d,t as f}from"./Select-SByEafjf.js";function p({title:e=`Filters`,actions:t,children:r,className:i}){return(0,m.jsxs)(`section`,{"data-slot":`filter-panel`,className:n(`space-y-4 rounded-card border border-border-default bg-bg-default p-4`,i),children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,m.jsx)(`h2`,{className:`text-lg font-semibold text-text-default`,children:e}),t]}),(0,m.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:r})]})}var m,h=e((()=>{t(),m=r(),p.__docgenInfo={description:``,methods:[],displayName:`FilterPanel`,props:{title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Filters'`,computed:!1}},actions:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y;e((()=>{i(),c(),l(),d(),h(),g=r(),_={title:`Patterns/FilterPanel`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`
**FilterPanel** collects filtering controls into a reusable search and refinement region.

## Accessibility notes
- Group related controls with clear labels
- Provide obvious reset or apply actions when the pattern needs them
- Keep the panel structured enough that keyboard users can move through filters predictably
        `}}},argTypes:{title:{control:`text`,description:`Panel heading when supported by the component.`},actions:{description:`Optional action area such as reset or apply.`}}},v={render:e=>(0,g.jsxs)(p,{...e,children:[(0,g.jsxs)(s,{children:[(0,g.jsx)(o,{children:`Keyword`}),(0,g.jsx)(u,{placeholder:`Search keyword`})]}),(0,g.jsxs)(s,{children:[(0,g.jsx)(o,{children:`Category`}),(0,g.jsxs)(f,{children:[(0,g.jsx)(`option`,{children:`All`}),(0,g.jsx)(`option`,{children:`Benefits`})]})]})]}),args:{actions:(0,g.jsx)(a,{variant:`secondary`,children:`Reset`})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <FilterPanel {...args}>\r
      <Field>\r
        <FieldLabel>Keyword</FieldLabel>\r
        <Input placeholder="Search keyword" />\r
      </Field>\r
      <Field>\r
        <FieldLabel>Category</FieldLabel>\r
        <Select>\r
          <option>All</option>\r
          <option>Benefits</option>\r
        </Select>\r
      </Field>\r
    </FilterPanel>,
  args: {
    actions: <Button variant="secondary">Reset</Button>
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]}))();export{v as Default,y as __namedExportsOrder,_ as default};