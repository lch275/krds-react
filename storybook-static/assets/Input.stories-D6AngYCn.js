import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{a as n,i as r,n as i,r as a,t as o}from"./Field-DyWV1_DR.js";import{n as s,t as c}from"./Input-CUW0sdRG.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{s(),n(),l=t(),u={title:`UI/Inputs/Input`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:"\n**Input** is the base single-line text field. When used inside `Field`, labels, descriptions, and errors are wired automatically.\n\n## Accessibility notes\n- Standalone usage should provide `aria-label` or `aria-labelledby`\n- `invalid` reflects both semantics and visual state\n- `disabled` can be set directly or inherited from `Field`\n        "}}},argTypes:{inputSize:{control:`select`,options:[`sm`,`md`,`lg`],description:`Input size.`,table:{defaultValue:{summary:`md`}}},invalid:{control:`boolean`,description:`Invalid state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`},placeholder:{control:`text`,description:`Placeholder text.`},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`,`date`],description:`Native input type.`,table:{defaultValue:{summary:`text`}}},"aria-label":{control:`text`,description:`Accessible name for standalone usage.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{"aria-label":`Name`,placeholder:`Enter your name`,inputSize:`md`}},f={args:{"aria-label":`Search`,placeholder:`Search keyword`,inputSize:`sm`}},p={args:{"aria-label":`Name`,placeholder:`Enter your name`,inputSize:`md`}},m={args:{"aria-label":`Name`,placeholder:`Enter your name`,inputSize:`lg`}},h={args:{"aria-label":`Email`,placeholder:`example@gov.kr`,invalid:!0}},g={args:{"aria-label":`Request ID`,value:`2024-KR-001234`,disabled:!0}},_={args:{"aria-label":`Password`,type:`password`,placeholder:`Enter your password`}},v={name:`With Field`,render:e=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Email`}),(0,l.jsx)(c,{...e,type:`email`,placeholder:`example@gov.kr`}),(0,l.jsx)(i,{children:`Use an email address that can receive service updates.`})]}),args:{inputSize:`md`,invalid:!1,disabled:!1},parameters:{docs:{description:{story:"Inside `Field`, the input is labelled automatically so a separate `aria-label` is not needed."}}}},y={name:`With Field Error`,render:()=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Email`}),(0,l.jsx)(c,{type:`email`,placeholder:`example@gov.kr`}),(0,l.jsx)(a,{children:`Please provide a valid email address.`})]})},b={name:`All Sizes`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(c,{"aria-label":`Small input`,placeholder:`sm (32px)`,inputSize:`sm`}),(0,l.jsx)(c,{"aria-label":`Medium input`,placeholder:`md (40px, default)`,inputSize:`md`}),(0,l.jsx)(c,{"aria-label":`Large input`,placeholder:`lg (44px touch target)`,inputSize:`lg`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'md'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Search',
    placeholder: 'Search keyword',
    inputSize: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'md'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'lg'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Email',
    placeholder: 'example@gov.kr',
    invalid: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Request ID',
    value: '2024-KR-001234',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Password',
    type: 'password',
    placeholder: 'Enter your password'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Field',
  render: args => <Field required>\r
      <FieldLabel>Email</FieldLabel>\r
      <Input {...args} type="email" placeholder="example@gov.kr" />\r
      <FieldDescription>Use an email address that can receive service updates.</FieldDescription>\r
    </Field>,
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Inside \`Field\`, the input is labelled automatically so a separate \`aria-label\` is not needed.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Field Error',
  render: () => <Field required>\r
      <FieldLabel>Email</FieldLabel>\r
      <Input type="email" placeholder="example@gov.kr" />\r
      <FieldError>Please provide a valid email address.</FieldError>\r
    </Field>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="flex flex-col gap-4">\r
      <Input aria-label="Small input" placeholder="sm (32px)" inputSize="sm" />\r
      <Input aria-label="Medium input" placeholder="md (40px, default)" inputSize="md" />\r
      <Input aria-label="Large input" placeholder="lg (44px touch target)" inputSize="lg" />\r
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Small`,`Medium`,`Large`,`Invalid`,`Disabled`,`Password`,`WithField`,`WithFieldError`,`AllSizes`]}))();export{b as AllSizes,d as Default,g as Disabled,h as Invalid,m as Large,p as Medium,_ as Password,f as Small,v as WithField,y as WithFieldError,x as __namedExportsOrder,u as default};