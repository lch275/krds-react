import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{a as n,i as r,r as i,t as a}from"./Field-DyWV1_DR.js";import{n as o,t as s}from"./Checkbox-BHUCKjo5.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o(),n(),c=t(),l={title:`UI/Inputs/Checkbox`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Checkbox** supports three states: unchecked, checked, and indeterminate.

## States
- \`false\`: unchecked
- \`true\`: checked
- \`'indeterminate'\`: partially selected

## Accessibility notes
- Indeterminate maps to \`aria-checked="mixed"\`
- Visible children create a clickable label area
- Standalone usage without children should provide an accessible name
        `}}},argTypes:{checked:{control:`select`,options:[!0,!1,`indeterminate`],description:`Controlled state.`},defaultChecked:{control:`select`,options:[!0,!1,`indeterminate`],description:`Initial uncontrolled state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`},invalid:{control:`boolean`,description:`Invalid state.`},children:{control:`text`,description:`Visible label text.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},u={args:{children:`I agree to the collection of personal information.`,defaultChecked:!1}},d={args:{children:`I agree to the terms of use.`,defaultChecked:!0}},f={args:{children:`Select all`,checked:`indeterminate`},parameters:{docs:{description:{story:`Use the indeterminate state when only part of a group selection is currently checked.`}}}},p={args:{children:`Disabled option`,disabled:!0,defaultChecked:!1}},m={name:`Disabled + Checked`,args:{children:`Locked option`,disabled:!0,defaultChecked:!0}},h={args:{children:`Required consent item`,invalid:!0}},g={name:`With Field`,render:e=>(0,c.jsxs)(a,{required:!0,invalid:e.invalid,children:[(0,c.jsx)(r,{hideRequired:!0,children:`Consent`}),(0,c.jsx)(s,{...e,children:`I agree to the privacy policy.`}),(0,c.jsx)(i,{children:e.invalid?`Consent is required.`:void 0})]}),args:{invalid:!1,disabled:!1}},_={name:`Select All Pattern`,render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(s,{checked:`indeterminate`,children:(0,c.jsx)(`strong`,{children:`Select all`})}),(0,c.jsxs)(`div`,{className:`ml-6 flex flex-col gap-2`,children:[(0,c.jsx)(s,{defaultChecked:!0,children:`Item 1`}),(0,c.jsx)(s,{defaultChecked:!1,children:`Item 2`}),(0,c.jsx)(s,{defaultChecked:!0,children:`Item 3`})]})]})},v={name:`All States`,render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsx)(s,{defaultChecked:!1,children:`Unchecked`}),(0,c.jsx)(s,{defaultChecked:!0,children:`Checked`}),(0,c.jsx)(s,{checked:`indeterminate`,children:`Indeterminate`}),(0,c.jsx)(s,{defaultChecked:!1,disabled:!0,children:`Disabled unchecked`}),(0,c.jsx)(s,{defaultChecked:!0,disabled:!0,children:`Disabled checked`}),(0,c.jsx)(s,{invalid:!0,children:`Invalid state`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'I agree to the collection of personal information.',
    defaultChecked: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'I agree to the terms of use.',
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Select all',
    checked: 'indeterminate'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the indeterminate state when only part of a group selection is currently checked.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled option',
    disabled: true,
    defaultChecked: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled + Checked',
  args: {
    children: 'Locked option',
    disabled: true,
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Required consent item',
    invalid: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Field',
  render: args => <Field required invalid={args.invalid}>\r
      <FieldLabel hideRequired>Consent</FieldLabel>\r
      <Checkbox {...args}>I agree to the privacy policy.</Checkbox>\r
      <FieldError>{args.invalid ? 'Consent is required.' : undefined}</FieldError>\r
    </Field>,
  args: {
    invalid: false,
    disabled: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Select All Pattern',
  render: () => <div className="flex flex-col gap-2">\r
      <Checkbox checked="indeterminate">\r
        <strong>Select all</strong>\r
      </Checkbox>\r
      <div className="ml-6 flex flex-col gap-2">\r
        <Checkbox defaultChecked>Item 1</Checkbox>\r
        <Checkbox defaultChecked={false}>Item 2</Checkbox>\r
        <Checkbox defaultChecked>Item 3</Checkbox>\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="flex flex-col gap-3">\r
      <Checkbox defaultChecked={false}>Unchecked</Checkbox>\r
      <Checkbox defaultChecked>Checked</Checkbox>\r
      <Checkbox checked="indeterminate">Indeterminate</Checkbox>\r
      <Checkbox defaultChecked={false} disabled>\r
        Disabled unchecked\r
      </Checkbox>\r
      <Checkbox defaultChecked disabled>\r
        Disabled checked\r
      </Checkbox>\r
      <Checkbox invalid>Invalid state</Checkbox>\r
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Checked`,`Indeterminate`,`Disabled`,`DisabledChecked`,`Invalid`,`WithField`,`SelectAll`,`AllStates`]}))();export{v as AllStates,d as Checked,u as Default,p as Disabled,m as DisabledChecked,f as Indeterminate,h as Invalid,_ as SelectAll,g as WithField,y as __namedExportsOrder,l as default};