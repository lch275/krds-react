import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";var i,a,o,s=e((()=>{t(),i=r(),a=({as:e,variant:t=`body-md`,className:r,children:a,...o})=>(0,i.jsx)(e??`p`,{"data-slot":`text`,"data-text-variant":t,className:n(`text-text-default`,t===`body-lg`&&`text-lg leading-relaxed`,t===`body-md`&&`text-base leading-normal`,t===`body-sm`&&`text-sm leading-normal`,t===`caption`&&`text-sm text-text-subtle`,t===`overline`&&`text-xs uppercase tracking-wide text-text-muted`,t===`code`&&`font-mono text-sm`,r),...o,children:a}),o=a,a.__docgenInfo={description:``,methods:[],displayName:`TextImpl`,props:{variant:{defaultValue:{value:`'body-md'`,computed:!1},required:!1}}}})),c,l,u,d,f,p,m,h,g,_,v;e((()=>{s(),c=r(),l={title:`Primitives/Text`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"\n**Text** provides typographic variants while keeping semantic element choice independent through the `as` prop.\n\n## Variants\n- `body-lg`: larger body copy\n- `body-md`: default body copy\n- `body-sm`: compact supporting copy\n- `caption`: helper or metadata text\n- `overline`: compact label treatment\n- `code`: monospace inline code styling\n        "}}},argTypes:{variant:{control:`select`,options:[`body-lg`,`body-md`,`body-sm`,`caption`,`overline`,`code`],description:`Text style variant.`,table:{defaultValue:{summary:`body-md`}}},as:{control:`select`,options:[`p`,`span`,`div`,`label`,`legend`,`figcaption`,`small`,`strong`,`em`],description:`Rendered HTML element.`,table:{defaultValue:{summary:`p`}}},children:{control:`text`,description:`Text content.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},u={args:{children:`This is the default body text style used for standard content in the design system.`,variant:`body-md`}},d={args:{children:`Large body text works well for lead copy and emphasized reading content.`,variant:`body-lg`}},f={args:{children:`Medium body text is the default style for most interface copy.`,variant:`body-md`}},p={args:{children:`Small body text is suited to supporting information and metadata.`,variant:`body-sm`}},m={args:{children:`Caption text is useful for helper copy, annotations, and image descriptions.`,variant:`caption`}},h={args:{children:`Category label`,variant:`overline`}},g={args:{children:`const greeting = "Hello"`,variant:`code`,as:`code`}},_={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,c.jsx)(o,{variant:`body-lg`,children:`body-lg: larger body text`}),(0,c.jsx)(o,{variant:`body-md`,children:`body-md: default body text`}),(0,c.jsx)(o,{variant:`body-sm`,children:`body-sm: compact body text`}),(0,c.jsx)(o,{variant:`caption`,children:`caption: helper and metadata text`}),(0,c.jsx)(o,{variant:`overline`,children:`overline: category label`}),(0,c.jsx)(o,{variant:`code`,as:`code`,children:`code: monospace inline code text`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is the default body text style used for standard content in the design system.',
    variant: 'body-md'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large body text works well for lead copy and emphasized reading content.',
    variant: 'body-lg'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium body text is the default style for most interface copy.',
    variant: 'body-md'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small body text is suited to supporting information and metadata.',
    variant: 'body-sm'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Caption text is useful for helper copy, annotations, and image descriptions.',
    variant: 'caption'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Category label',
    variant: 'overline'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'const greeting = "Hello"',
    variant: 'code',
    as: 'code'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Text variant="body-lg">body-lg: larger body text</Text>\r
      <Text variant="body-md">body-md: default body text</Text>\r
      <Text variant="body-sm">body-sm: compact body text</Text>\r
      <Text variant="caption">caption: helper and metadata text</Text>\r
      <Text variant="overline">overline: category label</Text>\r
      <Text variant="code" as="code">\r
        code: monospace inline code text\r
      </Text>\r
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`BodyLarge`,`BodyMedium`,`BodySmall`,`Caption`,`Overline`,`Code`,`AllVariants`]}))();export{_ as AllVariants,d as BodyLarge,f as BodyMedium,p as BodySmall,m as Caption,g as Code,u as Default,h as Overline,v as __namedExportsOrder,l as default};