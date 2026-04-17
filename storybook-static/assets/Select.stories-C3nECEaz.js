import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{a as n,i as r,n as i,r as a,t as o}from"./Field-DyWV1_DR.js";import{n as s,t as c}from"./Select-SByEafjf.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{s(),n(),l=t(),u={title:`UI/Inputs/Select`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:"\n**Select** wraps the native `select` element for accessible option picking. It works especially well with `Field` when descriptive text and validation are needed.\n\n## Notes\n- Based on the native `select` element\n- Supports `option` and `optgroup` children\n- Keeps keyboard and screen reader behavior aligned with the platform\n        "}}},argTypes:{inputSize:{control:`select`,options:[`sm`,`md`,`lg`],description:`Select size.`,table:{defaultValue:{summary:`md`}}},invalid:{control:`boolean`,description:`Invalid state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`},"aria-label":{control:`text`,description:`Accessible name for standalone usage.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`option`,{value:``,children:`Please select`}),(0,l.jsx)(`option`,{value:`complaint`,children:`Complaint`}),(0,l.jsx)(`option`,{value:`inquiry`,children:`Inquiry`}),(0,l.jsx)(`option`,{value:`suggestion`,children:`Suggestion`}),(0,l.jsx)(`option`,{value:`other`,children:`Other`})]}),f={render:e=>(0,l.jsx)(c,{...e,"aria-label":`Request type`,children:(0,l.jsx)(d,{})}),args:{inputSize:`md`,invalid:!1,disabled:!1}},p={render:e=>(0,l.jsx)(c,{...e,"aria-label":`Category`,children:(0,l.jsx)(d,{})}),args:{inputSize:`sm`}},m={render:e=>(0,l.jsx)(c,{...e,"aria-label":`Request type`,children:(0,l.jsx)(d,{})}),args:{inputSize:`lg`}},h={render:e=>(0,l.jsx)(c,{...e,"aria-label":`Request type`,children:(0,l.jsx)(d,{})}),args:{invalid:!0}},g={render:e=>(0,l.jsx)(c,{...e,"aria-label":`Processing status`,children:(0,l.jsx)(`option`,{value:`processing`,children:`Processing`})}),args:{disabled:!0}},_={name:`With Field`,render:e=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Request type`}),(0,l.jsx)(c,{...e,children:(0,l.jsx)(d,{})}),(0,l.jsx)(i,{children:`Select the category that best matches the request.`})]}),args:{inputSize:`md`,invalid:!1,disabled:!1}},v={name:`With Field Error`,render:()=>(0,l.jsxs)(o,{required:!0,children:[(0,l.jsx)(r,{children:`Request type`}),(0,l.jsxs)(c,{children:[(0,l.jsx)(`option`,{value:``,children:`Please select`}),(0,l.jsx)(`option`,{value:`complaint`,children:`Complaint`})]}),(0,l.jsx)(a,{children:`Please select a request type.`})]})},y={name:`With Optgroup`,render:()=>(0,l.jsxs)(o,{children:[(0,l.jsx)(r,{children:`Region`}),(0,l.jsxs)(c,{children:[(0,l.jsx)(`option`,{value:``,children:`Please select`}),(0,l.jsxs)(`optgroup`,{label:`Capital area`,children:[(0,l.jsx)(`option`,{value:`seoul`,children:`Seoul`}),(0,l.jsx)(`option`,{value:`incheon`,children:`Incheon`}),(0,l.jsx)(`option`,{value:`gyeonggi`,children:`Gyeonggi-do`})]}),(0,l.jsxs)(`optgroup`,{label:`Central area`,children:[(0,l.jsx)(`option`,{value:`daejeon`,children:`Daejeon`}),(0,l.jsx)(`option`,{value:`sejong`,children:`Sejong`}),(0,l.jsx)(`option`,{value:`chungbuk`,children:`Chungcheongbuk-do`}),(0,l.jsx)(`option`,{value:`chungnam`,children:`Chungcheongnam-do`})]})]})]})},b={name:`All Sizes`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(c,{"aria-label":`Small select`,inputSize:`sm`,children:(0,l.jsx)(`option`,{children:`sm (32px)`})}),(0,l.jsx)(c,{"aria-label":`Medium select`,inputSize:`md`,children:(0,l.jsx)(`option`,{children:`md (40px, default)`})}),(0,l.jsx)(c,{"aria-label":`Large select`,inputSize:`lg`,children:(0,l.jsx)(`option`,{children:`lg (44px touch target)`})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} aria-label="Request type">\r
      <DefaultOptions />\r
    </Select>,
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} aria-label="Category">\r
      <DefaultOptions />\r
    </Select>,
  args: {
    inputSize: 'sm'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} aria-label="Request type">\r
      <DefaultOptions />\r
    </Select>,
  args: {
    inputSize: 'lg'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} aria-label="Request type">\r
      <DefaultOptions />\r
    </Select>,
  args: {
    invalid: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} aria-label="Processing status">\r
      <option value="processing">Processing</option>\r
    </Select>,
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With Field',
  render: args => <Field required>\r
      <FieldLabel>Request type</FieldLabel>\r
      <Select {...args}>\r
        <DefaultOptions />\r
      </Select>\r
      <FieldDescription>Select the category that best matches the request.</FieldDescription>\r
    </Field>,
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Field Error',
  render: () => <Field required>\r
      <FieldLabel>Request type</FieldLabel>\r
      <Select>\r
        <option value="">Please select</option>\r
        <option value="complaint">Complaint</option>\r
      </Select>\r
      <FieldError>Please select a request type.</FieldError>\r
    </Field>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Optgroup',
  render: () => <Field>\r
      <FieldLabel>Region</FieldLabel>\r
      <Select>\r
        <option value="">Please select</option>\r
        <optgroup label="Capital area">\r
          <option value="seoul">Seoul</option>\r
          <option value="incheon">Incheon</option>\r
          <option value="gyeonggi">Gyeonggi-do</option>\r
        </optgroup>\r
        <optgroup label="Central area">\r
          <option value="daejeon">Daejeon</option>\r
          <option value="sejong">Sejong</option>\r
          <option value="chungbuk">Chungcheongbuk-do</option>\r
          <option value="chungnam">Chungcheongnam-do</option>\r
        </optgroup>\r
      </Select>\r
    </Field>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="flex flex-col gap-4">\r
      <Select aria-label="Small select" inputSize="sm">\r
        <option>sm (32px)</option>\r
      </Select>\r
      <Select aria-label="Medium select" inputSize="md">\r
        <option>md (40px, default)</option>\r
      </Select>\r
      <Select aria-label="Large select" inputSize="lg">\r
        <option>lg (44px touch target)</option>\r
      </Select>\r
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Small`,`Large`,`Invalid`,`Disabled`,`WithField`,`WithFieldError`,`WithOptgroup`,`AllSizes`]}))();export{b as AllSizes,f as Default,g as Disabled,h as Invalid,m as Large,p as Small,_ as WithField,v as WithFieldError,y as WithOptgroup,x as __namedExportsOrder,u as default};