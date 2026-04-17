import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";import{n as o,t as s}from"./useControllable-BQ3VKl8y.js";import{a as c,i as l,n as u,r as d,t as f}from"./Field-DyWV1_DR.js";function p(){let e=(0,m.useContext)(g);if(!e)throw Error(`[KRDS] Radio must be used inside RadioGroup.`);return e}var m,h,g,_,v,y=t((()=>{m=e(n(),1),r(),s(),h=a(),g=(0,m.createContext)(null),_=(0,m.forwardRef)(({value:e,defaultValue:t,onValueChange:n,disabled:r=!1,required:a=!1,orientation:s=`vertical`,name:c,children:l,className:u,"aria-label":d,"aria-labelledby":f,...p},_)=>{let v=(0,m.useId)(),y=c??v,[b,x]=o(e,t,e=>{e!==void 0&&n?.(e)}),S=(0,m.useCallback)(e=>{x(e)},[x]);return(0,h.jsx)(g.Provider,{value:{name:y,value:b,onValueChange:S,disabled:r,required:a,orientation:s},children:(0,h.jsx)(`div`,{ref:_,role:`radiogroup`,"data-slot":`radiogroup`,"aria-orientation":s,"aria-label":d,"aria-labelledby":f,"aria-required":a||void 0,"aria-disabled":r||void 0,className:i(s===`horizontal`?`flex flex-row gap-4`:`flex flex-col gap-2`,u),...p,children:l})})}),_.displayName=`RadioGroup`,v=(0,m.forwardRef)(({value:e,disabled:t,className:n,children:r,...a},o)=>{let s=p(),c=t??s.disabled,l=s.value===e,u=(0,m.useCallback)(e=>{let t=e.currentTarget.closest(`[role="radiogroup"]`);if(!t)return;let n=Array.from(t.querySelectorAll(`input[type="radio"]:not([disabled])`)),r=n.indexOf(e.currentTarget),i=s.orientation===`horizontal`,a=i?`ArrowLeft`:`ArrowUp`,o=i?`ArrowRight`:`ArrowDown`,c=r;if(e.key===a)e.preventDefault(),c=(r-1+n.length)%n.length;else if(e.key===o)e.preventDefault(),c=(r+1)%n.length;else return;let l=n[c];l.focus(),l.click()},[s.orientation]);return(0,h.jsxs)(`label`,{"data-slot":`radio-root`,"data-state":l?`checked`:`unchecked`,"data-disabled":c||void 0,className:i(`inline-flex items-center gap-2 cursor-pointer`,c&&`cursor-not-allowed opacity-40`,n),children:[(0,h.jsx)(`input`,{ref:o,type:`radio`,name:s.name,value:e,checked:l,disabled:c,required:s.required,"data-slot":`radio-control`,onChange:()=>s.onValueChange(e),onKeyDown:u,className:i(`h-4 w-4 rounded-full border border-border-default`,`accent-primary cursor-inherit`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1`,`disabled:cursor-not-allowed`),...a}),r&&(0,h.jsx)(`span`,{"data-slot":`radio-label`,className:`text-text-default`,children:r})]})}),v.displayName=`Radio`,_.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},"aria-labelledby":{required:!1,tsType:{name:`string`},description:``}}},v.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{value:{required:!0,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A;t((()=>{y(),c(),b=a(),x={title:`UI/Inputs/RadioGroup`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:`
**RadioGroup** and **Radio** provide exclusive single-choice selection.

## Keyboard behavior
- Tab enters and leaves the group
- Arrow keys move between options and update selection
- Disabled options are skipped in the navigation order

## Accessibility notes
- The group should expose a label through \`aria-label\`, \`aria-labelledby\`, or \`Field\`
- Orientation influences arrow-key direction expectations
        `}}},argTypes:{value:{control:`text`,description:`Controlled value.`},defaultValue:{control:`text`,description:`Initial uncontrolled value.`},disabled:{control:`boolean`,description:`Disables the entire group.`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{defaultValue:{summary:`false`}}},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout direction.`,table:{defaultValue:{summary:`vertical`}}},"aria-label":{control:`text`,description:`Accessible group label.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},S={render:e=>(0,b.jsxs)(_,{...e,"aria-label":`Gender`,children:[(0,b.jsx)(v,{value:`male`,children:`Male`}),(0,b.jsx)(v,{value:`female`,children:`Female`}),(0,b.jsx)(v,{value:`other`,children:`Other`})]}),args:{orientation:`vertical`,disabled:!1,required:!1}},C={render:e=>(0,b.jsxs)(_,{...e,"aria-label":`Agreement`,children:[(0,b.jsx)(v,{value:`agree`,children:`Agree`}),(0,b.jsx)(v,{value:`disagree`,children:`Disagree`})]}),args:{orientation:`horizontal`,disabled:!1}},w={name:`With Default Value`,render:e=>(0,b.jsxs)(_,{...e,"aria-label":`Processing method`,children:[(0,b.jsx)(v,{value:`online`,children:`Online`}),(0,b.jsx)(v,{value:`visit`,children:`Visit`}),(0,b.jsx)(v,{value:`mail`,children:`Mail`})]}),args:{defaultValue:`online`,orientation:`vertical`}},T={render:e=>(0,b.jsxs)(_,{...e,"aria-label":`Processing method`,children:[(0,b.jsx)(v,{value:`online`,children:`Online`}),(0,b.jsx)(v,{value:`visit`,children:`Visit`})]}),args:{disabled:!0,defaultValue:`online`,orientation:`vertical`}},E={name:`Partial Disabled`,render:()=>(0,b.jsxs)(_,{"aria-label":`Service plan`,children:[(0,b.jsx)(v,{value:`basic`,children:`Basic service`}),(0,b.jsx)(v,{value:`premium`,children:`Premium service`}),(0,b.jsx)(v,{value:`enterprise`,disabled:!0,children:`Enterprise (coming soon)`})]})},D={name:`With Field`,render:e=>(0,b.jsxs)(f,{required:!0,children:[(0,b.jsx)(l,{children:`Request method`}),(0,b.jsxs)(_,{...e,"aria-label":`Request method`,children:[(0,b.jsx)(v,{value:`online`,children:`Online request`}),(0,b.jsx)(v,{value:`visit`,children:`In-person request`}),(0,b.jsx)(v,{value:`mail`,children:`Mail request`})]}),(0,b.jsx)(u,{children:`Select one method.`})]}),args:{orientation:`vertical`,disabled:!1}},O={name:`With Field Error`,render:()=>(0,b.jsxs)(f,{required:!0,children:[(0,b.jsx)(l,{children:`Gender`}),(0,b.jsxs)(_,{"aria-label":`Gender`,orientation:`horizontal`,children:[(0,b.jsx)(v,{value:`male`,children:`Male`}),(0,b.jsx)(v,{value:`female`,children:`Female`}),(0,b.jsx)(v,{value:`other`,children:`Other`})]}),(0,b.jsx)(d,{children:`Please select a gender option.`})]})},k={name:`Orientation Comparison`,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`mb-2 text-sm text-text-subtle`,children:`vertical`}),(0,b.jsxs)(_,{"aria-label":`Vertical layout`,orientation:`vertical`,children:[(0,b.jsx)(v,{value:`a`,children:`Option A`}),(0,b.jsx)(v,{value:`b`,children:`Option B`}),(0,b.jsx)(v,{value:`c`,children:`Option C`})]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`mb-2 text-sm text-text-subtle`,children:`horizontal`}),(0,b.jsxs)(_,{"aria-label":`Horizontal layout`,orientation:`horizontal`,children:[(0,b.jsx)(v,{value:`a`,children:`Option A`}),(0,b.jsx)(v,{value:`b`,children:`Option B`}),(0,b.jsx)(v,{value:`c`,children:`Option C`})]})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args} aria-label="Gender">\r
      <Radio value="male">Male</Radio>\r
      <Radio value="female">Female</Radio>\r
      <Radio value="other">Other</Radio>\r
    </RadioGroup>,
  args: {
    orientation: 'vertical',
    disabled: false,
    required: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args} aria-label="Agreement">\r
      <Radio value="agree">Agree</Radio>\r
      <Radio value="disagree">Disagree</Radio>\r
    </RadioGroup>,
  args: {
    orientation: 'horizontal',
    disabled: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Default Value',
  render: args => <RadioGroup {...args} aria-label="Processing method">\r
      <Radio value="online">Online</Radio>\r
      <Radio value="visit">Visit</Radio>\r
      <Radio value="mail">Mail</Radio>\r
    </RadioGroup>,
  args: {
    defaultValue: 'online',
    orientation: 'vertical'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args} aria-label="Processing method">\r
      <Radio value="online">Online</Radio>\r
      <Radio value="visit">Visit</Radio>\r
    </RadioGroup>,
  args: {
    disabled: true,
    defaultValue: 'online',
    orientation: 'vertical'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Partial Disabled',
  render: () => <RadioGroup aria-label="Service plan">\r
      <Radio value="basic">Basic service</Radio>\r
      <Radio value="premium">Premium service</Radio>\r
      <Radio value="enterprise" disabled>\r
        Enterprise (coming soon)\r
      </Radio>\r
    </RadioGroup>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Field',
  render: args => <Field required>\r
      <FieldLabel>Request method</FieldLabel>\r
      <RadioGroup {...args} aria-label="Request method">\r
        <Radio value="online">Online request</Radio>\r
        <Radio value="visit">In-person request</Radio>\r
        <Radio value="mail">Mail request</Radio>\r
      </RadioGroup>\r
      <FieldDescription>Select one method.</FieldDescription>\r
    </Field>,
  args: {
    orientation: 'vertical',
    disabled: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With Field Error',
  render: () => <Field required>\r
      <FieldLabel>Gender</FieldLabel>\r
      <RadioGroup aria-label="Gender" orientation="horizontal">\r
        <Radio value="male">Male</Radio>\r
        <Radio value="female">Female</Radio>\r
        <Radio value="other">Other</Radio>\r
      </RadioGroup>\r
      <FieldError>Please select a gender option.</FieldError>\r
    </Field>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Orientation Comparison',
  render: () => <div className="flex flex-col gap-8">\r
      <div>\r
        <p className="mb-2 text-sm text-text-subtle">vertical</p>\r
        <RadioGroup aria-label="Vertical layout" orientation="vertical">\r
          <Radio value="a">Option A</Radio>\r
          <Radio value="b">Option B</Radio>\r
          <Radio value="c">Option C</Radio>\r
        </RadioGroup>\r
      </div>\r
      <div>\r
        <p className="mb-2 text-sm text-text-subtle">horizontal</p>\r
        <RadioGroup aria-label="Horizontal layout" orientation="horizontal">\r
          <Radio value="a">Option A</Radio>\r
          <Radio value="b">Option B</Radio>\r
          <Radio value="c">Option C</Radio>\r
        </RadioGroup>\r
      </div>\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Horizontal`,`WithDefaultValue`,`Disabled`,`PartialDisabled`,`WithField`,`WithFieldError`,`AllOrientations`]}))();export{k as AllOrientations,S as Default,T as Disabled,C as Horizontal,E as PartialDisabled,w as WithDefaultValue,D as WithField,O as WithFieldError,A as __namedExportsOrder,x as default};