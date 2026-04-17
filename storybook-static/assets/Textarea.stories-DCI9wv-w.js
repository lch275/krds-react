import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{a as n,i as r,n as i,r as a,t as o}from"./Field-DyWV1_DR.js";import{n as s,t as c}from"./Textarea-BKmKKmtC.js";var l,u,d,f,p,m,h,g,_;e((()=>{s(),n(),l=t(),u={title:`UI/Inputs/Textarea`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Textarea** is the multiline text input for longer user-generated content.

## Notes
- Vertical resize is enabled
- Minimum height is based on a comfortable multiline entry size
- \`rows\` controls the initial visible height
        `}}},argTypes:{invalid:{control:`boolean`,description:`Invalid state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`},placeholder:{control:`text`,description:`Placeholder text.`},rows:{control:{type:`number`,min:2,max:20},description:`Initial row count.`},"aria-label":{control:`text`,description:`Accessible name for standalone usage.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{"aria-label":`Details`,placeholder:`Enter the details of your request.`,rows:4}},f={args:{"aria-label":`Details`,placeholder:`Enter the details of your request.`,invalid:!0}},p={args:{"aria-label":`Details`,value:`This content cannot be edited.`,disabled:!0}},m={name:`With Field`,render:e=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Request details`}),(0,l.jsx)(c,{...e,placeholder:`Describe the request in detail.`}),(0,l.jsx)(i,{children:`You can enter up to 1,000 characters.`})]}),args:{invalid:!1,disabled:!1,rows:5}},h={name:`With Field Error`,render:()=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Request details`}),(0,l.jsx)(c,{placeholder:`Enter the request details.`}),(0,l.jsx)(a,{children:`Please provide the details of the request.`})]})},g={name:`Row Variations`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsxs)(o,{children:[(0,l.jsx)(r,{children:`Short note`}),(0,l.jsx)(c,{rows:2,placeholder:`Brief content`})]}),(0,l.jsxs)(o,{children:[(0,l.jsx)(r,{children:`Default size`}),(0,l.jsx)(c,{rows:4,placeholder:`Regular content`})]}),(0,l.jsxs)(o,{children:[(0,l.jsx)(r,{children:`Long content`}),(0,l.jsx)(c,{rows:8,placeholder:`Detailed content`})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Details',
    placeholder: 'Enter the details of your request.',
    rows: 4
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Details',
    placeholder: 'Enter the details of your request.',
    invalid: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Details',
    value: 'This content cannot be edited.',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Field',
  render: args => <Field required>\r
      <FieldLabel>Request details</FieldLabel>\r
      <Textarea {...args} placeholder="Describe the request in detail." />\r
      <FieldDescription>You can enter up to 1,000 characters.</FieldDescription>\r
    </Field>,
  args: {
    invalid: false,
    disabled: false,
    rows: 5
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Field Error',
  render: () => <Field required>\r
      <FieldLabel>Request details</FieldLabel>\r
      <Textarea placeholder="Enter the request details." />\r
      <FieldError>Please provide the details of the request.</FieldError>\r
    </Field>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Row Variations',
  render: () => <div className="flex flex-col gap-4">\r
      <Field>\r
        <FieldLabel>Short note</FieldLabel>\r
        <Textarea rows={2} placeholder="Brief content" />\r
      </Field>\r
      <Field>\r
        <FieldLabel>Default size</FieldLabel>\r
        <Textarea rows={4} placeholder="Regular content" />\r
      </Field>\r
      <Field>\r
        <FieldLabel>Long content</FieldLabel>\r
        <Textarea rows={8} placeholder="Detailed content" />\r
      </Field>\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Invalid`,`Disabled`,`WithField`,`WithFieldError`,`LargeRows`]}))();export{d as Default,p as Disabled,f as Invalid,g as LargeRows,m as WithField,h as WithFieldError,_ as __namedExportsOrder,u as default};