import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{a as n,i as r,n as i,r as a,t as o}from"./Field-DyWV1_DR.js";import{n as s,t as c}from"./Input-CUW0sdRG.js";import{n as l,t as u}from"./Select-SByEafjf.js";import{n as d,t as f}from"./Textarea-BKmKKmtC.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),s(),l(),d(),p=t(),m={title:`UI/Field`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Field** wires labels, descriptions, and error content to a child form control through shared context.

## What it handles
- Connects \`htmlFor\` and \`id\`
- Builds \`aria-describedby\` from description and error slots
- Reflects error state through \`aria-invalid\`
- Reflects required and disabled state consistently
- Keeps label, hint, and validation message composition predictable
        `}}},argTypes:{disabled:{control:`boolean`,description:`Disables the field and propagates the state to supported controls.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{defaultValue:{summary:`false`}}},invalid:{control:`boolean`,description:`Forces invalid state styling and semantics.`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional Tailwind classes.`}}},h={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Name`}),(0,p.jsx)(c,{placeholder:`Enter your name`})]}),args:{disabled:!1,required:!1,invalid:!1}},g={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Email`}),(0,p.jsx)(c,{type:`email`,placeholder:`example@gov.kr`}),(0,p.jsx)(i,{children:`Use an address that can receive service updates.`})]}),args:{required:!0}},_={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Password`}),(0,p.jsx)(c,{type:`password`,placeholder:`Enter your password`}),(0,p.jsx)(i,{children:`Use at least eight characters.`}),(0,p.jsx)(a,{children:`Password must be at least eight characters long.`})]}),args:{required:!0,invalid:!1},parameters:{docs:{description:{story:"When `FieldError` receives content, the related control is automatically exposed as invalid."}}}},v={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Resident registration number`}),(0,p.jsx)(c,{placeholder:`000000-0000000`}),(0,p.jsx)(i,{children:`Entered information should be stored and masked securely.`})]}),args:{required:!0}},y={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Request ID`}),(0,p.jsx)(c,{value:`2024-KR-001234`,readOnly:!0}),(0,p.jsx)(i,{children:`This value is assigned automatically by the service.`})]}),args:{disabled:!0}},b={name:`Hide Required Mark`,render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{hideRequired:!0,children:`Name (required)`}),(0,p.jsx)(c,{placeholder:`Enter your name`}),(0,p.jsx)(i,{children:`Use this when the required meaning is already explicit in the label copy.`})]}),args:{required:!0}},x={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Request details`}),(0,p.jsx)(f,{placeholder:`Describe the issue in detail.`,rows:5}),(0,p.jsx)(i,{children:`You can enter up to 1,000 characters.`})]}),args:{required:!0}},S={render:e=>(0,p.jsxs)(o,{...e,children:[(0,p.jsx)(r,{children:`Request type`}),(0,p.jsxs)(u,{children:[(0,p.jsx)(`option`,{value:``,children:`Please select`}),(0,p.jsx)(`option`,{value:`complaint`,children:`Complaint`}),(0,p.jsx)(`option`,{value:`inquiry`,children:`Inquiry`}),(0,p.jsx)(`option`,{value:`suggestion`,children:`Suggestion`})]}),(0,p.jsx)(i,{children:`Select the category that best matches the request.`})]}),args:{required:!0}},C={render:()=>(0,p.jsxs)(`form`,{className:`flex max-w-md flex-col gap-6`,children:[(0,p.jsxs)(o,{required:!0,children:[(0,p.jsx)(r,{children:`Full name`}),(0,p.jsx)(c,{placeholder:`Enter your name`})]}),(0,p.jsxs)(o,{required:!0,children:[(0,p.jsx)(r,{children:`Email`}),(0,p.jsx)(c,{type:`email`,placeholder:`example@gov.kr`}),(0,p.jsx)(i,{children:`A confirmation email will be sent to this address.`})]}),(0,p.jsxs)(o,{required:!0,children:[(0,p.jsx)(r,{children:`Request type`}),(0,p.jsxs)(u,{children:[(0,p.jsx)(`option`,{value:``,children:`Please select`}),(0,p.jsx)(`option`,{value:`complaint`,children:`Complaint`}),(0,p.jsx)(`option`,{value:`inquiry`,children:`Inquiry`})]})]}),(0,p.jsxs)(o,{required:!0,children:[(0,p.jsx)(r,{children:`Details`}),(0,p.jsx)(f,{placeholder:`Write the details of your request.`,rows:4}),(0,p.jsx)(i,{children:`Maximum 1,000 characters.`}),(0,p.jsx)(a,{children:`Please provide the details of the request.`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Name</FieldLabel>\r
      <Input placeholder="Enter your name" />\r
    </Field>,
  args: {
    disabled: false,
    required: false,
    invalid: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Email</FieldLabel>\r
      <Input type="email" placeholder="example@gov.kr" />\r
      <FieldDescription>Use an address that can receive service updates.</FieldDescription>\r
    </Field>,
  args: {
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Password</FieldLabel>\r
      <Input type="password" placeholder="Enter your password" />\r
      <FieldDescription>Use at least eight characters.</FieldDescription>\r
      <FieldError>Password must be at least eight characters long.</FieldError>\r
    </Field>,
  args: {
    required: true,
    invalid: false
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`FieldError\` receives content, the related control is automatically exposed as invalid.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Resident registration number</FieldLabel>\r
      <Input placeholder="000000-0000000" />\r
      <FieldDescription>Entered information should be stored and masked securely.</FieldDescription>\r
    </Field>,
  args: {
    required: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Request ID</FieldLabel>\r
      <Input value="2024-KR-001234" readOnly />\r
      <FieldDescription>This value is assigned automatically by the service.</FieldDescription>\r
    </Field>,
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Hide Required Mark',
  render: args => <Field {...args}>\r
      <FieldLabel hideRequired>Name (required)</FieldLabel>\r
      <Input placeholder="Enter your name" />\r
      <FieldDescription>Use this when the required meaning is already explicit in the label copy.</FieldDescription>\r
    </Field>,
  args: {
    required: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Request details</FieldLabel>\r
      <Textarea placeholder="Describe the issue in detail." rows={5} />\r
      <FieldDescription>You can enter up to 1,000 characters.</FieldDescription>\r
    </Field>,
  args: {
    required: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}>\r
      <FieldLabel>Request type</FieldLabel>\r
      <Select>\r
        <option value="">Please select</option>\r
        <option value="complaint">Complaint</option>\r
        <option value="inquiry">Inquiry</option>\r
        <option value="suggestion">Suggestion</option>\r
      </Select>\r
      <FieldDescription>Select the category that best matches the request.</FieldDescription>\r
    </Field>,
  args: {
    required: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex max-w-md flex-col gap-6">\r
      <Field required>\r
        <FieldLabel>Full name</FieldLabel>\r
        <Input placeholder="Enter your name" />\r
      </Field>\r
      <Field required>\r
        <FieldLabel>Email</FieldLabel>\r
        <Input type="email" placeholder="example@gov.kr" />\r
        <FieldDescription>A confirmation email will be sent to this address.</FieldDescription>\r
      </Field>\r
      <Field required>\r
        <FieldLabel>Request type</FieldLabel>\r
        <Select>\r
          <option value="">Please select</option>\r
          <option value="complaint">Complaint</option>\r
          <option value="inquiry">Inquiry</option>\r
        </Select>\r
      </Field>\r
      <Field required>\r
        <FieldLabel>Details</FieldLabel>\r
        <Textarea placeholder="Write the details of your request." rows={4} />\r
        <FieldDescription>Maximum 1,000 characters.</FieldDescription>\r
        <FieldError>Please provide the details of the request.</FieldError>\r
      </Field>\r
    </form>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithDescription`,`WithError`,`Required`,`Disabled`,`HideRequiredMark`,`WithTextarea`,`WithSelect`,`CompleteForm`]}))();export{C as CompleteForm,h as Default,y as Disabled,b as HideRequiredMark,v as Required,g as WithDescription,_ as WithError,S as WithSelect,x as WithTextarea,w as __namedExportsOrder,m as default};