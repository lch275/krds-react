import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";function i(e){return typeof e==`string`&&/^h[1-6]$/.test(e)?Number.parseInt(e.slice(1),10):2}var a,o,s,c=e((()=>{t(),a=r(),o=({as:e,level:t,className:r,children:o,...s})=>{let c=e??`h2`,l=i(c),u=t??l;return(0,a.jsx)(c,{"data-slot":`heading`,"data-heading-level":u,className:n(`text-text-default font-sans`,u===1&&`text-4xl font-bold leading-tight`,u===2&&`text-3xl font-bold leading-tight`,u===3&&`text-2xl font-semibold leading-snug`,u===4&&`text-xl font-semibold leading-snug`,u===5&&`text-lg font-semibold leading-normal`,u===6&&`text-base font-semibold leading-normal`,r),...s,children:o})},s=o,o.__docgenInfo={description:``,methods:[],displayName:`HeadingImpl`}})),l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c(),l=r(),u={title:`Primitives/Heading`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Heading** separates semantic heading level from visual size so document structure can remain correct without sacrificing layout needs.

## Semantic vs visual level
- \`as="h3"\` controls the semantic document outline
- \`level={2}\` controls the visual heading size

\`\`\`tsx
<Heading as="h3" level={2}>Section title</Heading>
\`\`\`
        `}}},argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],description:`Semantic HTML heading element.`,table:{defaultValue:{summary:`h2`}}},level:{control:`select`,options:[1,2,3,4,5,6],description:`Visual size level.`},children:{control:`text`,description:`Heading text.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{children:`Section title`,as:`h2`}},f={args:{as:`h1`,children:`Page title (h1)`}},p={args:{as:`h2`,children:`Section title (h2)`}},m={args:{as:`h3`,children:`Subsection title (h3)`}},h={args:{as:`h4`,children:`Group title (h4)`}},g={args:{as:`h5`,children:`Item title (h5)`}},_={args:{as:`h6`,children:`Subitem title (h6)`}},v={name:`Semantic Vs Visual`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(`p`,{className:`text-sm text-text-subtle`,children:`Semantic level: h3, visual level: 1`}),(0,l.jsx)(s,{as:`h3`,level:1,children:`h3 element rendered with h1 visual size`}),(0,l.jsx)(`p`,{className:`text-sm text-text-subtle`,children:`Semantic level: h1, visual level: 4`}),(0,l.jsx)(s,{as:`h1`,level:4,children:`h1 element rendered with h4 visual size`})]})},y={name:`All Levels`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(s,{as:`h1`,children:`H1 main page heading`}),(0,l.jsx)(s,{as:`h2`,children:`H2 section heading`}),(0,l.jsx)(s,{as:`h3`,children:`H3 subsection heading`}),(0,l.jsx)(s,{as:`h4`,children:`H4 group heading`}),(0,l.jsx)(s,{as:`h5`,children:`H5 item heading`}),(0,l.jsx)(s,{as:`h6`,children:`H6 subitem heading`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Section title',
    as: 'h2'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'Page title (h1)'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h2',
    children: 'Section title (h2)'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h3',
    children: 'Subsection title (h3)'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h4',
    children: 'Group title (h4)'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h5',
    children: 'Item title (h5)'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h6',
    children: 'Subitem title (h6)'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Semantic Vs Visual',
  render: () => <div className="flex flex-col gap-3">\r
      <p className="text-sm text-text-subtle">Semantic level: h3, visual level: 1</p>\r
      <Heading as="h3" level={1}>\r
        h3 element rendered with h1 visual size\r
      </Heading>\r
      <p className="text-sm text-text-subtle">Semantic level: h1, visual level: 4</p>\r
      <Heading as="h1" level={4}>\r
        h1 element rendered with h4 visual size\r
      </Heading>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All Levels',
  render: () => <div className="flex flex-col gap-4">\r
      <Heading as="h1">H1 main page heading</Heading>\r
      <Heading as="h2">H2 section heading</Heading>\r
      <Heading as="h3">H3 subsection heading</Heading>\r
      <Heading as="h4">H4 group heading</Heading>\r
      <Heading as="h5">H5 item heading</Heading>\r
      <Heading as="h6">H6 subitem heading</Heading>\r
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`SemanticVsVisual`,`AllLevels`]}))();export{y as AllLevels,d as Default,f as H1,p as H2,m as H3,h as H4,g as H5,_ as H6,v as SemanticVsVisual,b as __namedExportsOrder,u as default};