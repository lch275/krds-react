import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";var i,a,o,s=e((()=>{t(),i=r(),a=({as:e,className:t,children:r,...a})=>(0,i.jsx)(e??`div`,{"data-slot":`box`,className:n(t),...a,children:r}),o=a,a.__docgenInfo={description:``,methods:[],displayName:`BoxImpl`}})),c,l,u,d,f,p,m,h;e((()=>{s(),c=r(),l={title:`Primitives/Box`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Box** is the base layout wrapper for simple container composition. It supports the \`as\` prop so semantic HTML can be chosen without changing the styling API.

## Typical usage
- Lightweight layout wrapper
- Semantic sectioning element when needed
- Tailwind class composition without extra component behavior
        `}}},argTypes:{as:{control:`select`,options:[`div`,`section`,`article`,`main`,`aside`,`header`,`footer`,`nav`,`span`,`ul`,`li`],description:`Rendered HTML element.`,table:{defaultValue:{summary:`div`}}},className:{control:`text`,description:`Tailwind CSS classes.`},children:{control:`text`,description:`Child content.`}}},u={args:{children:`Box content`,className:`rounded-md border border-border-default bg-bg-subtle p-4`}},d={args:{as:`section`,children:`Rendered as a section element`,className:`rounded-md border border-border-default bg-bg-subtle p-4`}},f={args:{as:`article`,children:`Rendered as an article element`,className:`rounded-md border border-border-default bg-bg-subtle p-4`}},p={args:{as:`nav`,children:`Rendered as a navigation element`,className:`rounded-md border border-border-default bg-bg-subtle p-4`}},m={render:()=>(0,c.jsx)(o,{className:`rounded-lg bg-bg-subtle p-4`,children:(0,c.jsx)(o,{as:`section`,className:`rounded-md bg-bg-muted p-3`,children:(0,c.jsx)(o,{as:`article`,className:`rounded border border-border-default bg-bg-default p-2`,children:`Nested Box composition`})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Box content',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: 'Rendered as a section element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'article',
    children: 'Rendered as an article element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'nav',
    children: 'Rendered as a navigation element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box className="rounded-lg bg-bg-subtle p-4">\r
      <Box as="section" className="rounded-md bg-bg-muted p-3">\r
        <Box as="article" className="rounded border border-border-default bg-bg-default p-2">\r
          Nested Box composition\r
        </Box>\r
      </Box>\r
    </Box>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`AsSection`,`AsArticle`,`AsNav`,`Nested`]}))();export{f as AsArticle,p as AsNav,d as AsSection,u as Default,m as Nested,h as __namedExportsOrder,l as default};