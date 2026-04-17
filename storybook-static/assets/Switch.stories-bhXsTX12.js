import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";import{n as o,t as s}from"./useControllable-BQ3VKl8y.js";var c,l,u,d=t((()=>{c=e(n(),1),r(),s(),l=a(),u=(0,c.forwardRef)(({checked:e,defaultChecked:t=!1,onCheckedChange:n,disabled:r=!1,className:a,children:s,"aria-label":c,"aria-labelledby":u,id:d,...f},p)=>{let[m,h]=o(e,t,n);return(0,l.jsxs)(`div`,{className:i(`inline-flex items-center gap-3`,r&&`opacity-40`,a),"data-slot":`switch-root`,"data-state":m?`checked`:`unchecked`,"data-disabled":r||void 0,children:[(0,l.jsxs)(`button`,{ref:p,id:d,type:`button`,role:`switch`,"aria-checked":m,"aria-disabled":r||void 0,"aria-label":s?void 0:c,"aria-labelledby":s?void 0:u,disabled:r,"data-slot":`switch-control`,onClick:()=>{r||h(!m)},className:i(`relative inline-flex h-6 w-11 items-center rounded-full`,`transition-colors duration-200`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,`disabled:cursor-not-allowed`,m?`bg-primary`:`bg-border-default`),...f,children:[(0,l.jsx)(`span`,{"data-slot":`switch-thumb`,"aria-hidden":`true`,className:i(`inline-block h-5 w-5 rounded-full bg-bg-default shadow-sm`,`transition-transform duration-200`,m?`translate-x-5`:`translate-x-0.5`)}),(0,l.jsx)(`span`,{className:`sr-only`,children:m?`On`:`Off`})]}),s&&(0,l.jsx)(`span`,{"data-slot":`switch-label`,className:`text-text-default`,children:s})]})}),u.displayName=`Switch`,u.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),f,p,m,h,g,_,v,y,b,x;t((()=>{d(),f=a(),p={title:`UI/Inputs/Switch`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Switch** represents an immediate on/off setting. Unlike a checkbox, it is better suited to toggles that take effect right away.

## Checkbox vs switch
| Pattern | Checkbox | Switch |
| --- | --- | --- |
| Best for | Selection in a set | Immediate setting toggle |
| Mental model | Include or exclude | Turn on or off |
| ARIA role | checkbox | switch |

## Accessibility notes
- Standalone switch usage should provide an accessible name
- The component exposes on/off state to assistive technology
        `}}},argTypes:{checked:{control:`boolean`,description:`Controlled state.`},defaultChecked:{control:`boolean`,description:`Initial uncontrolled state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state.`,table:{defaultValue:{summary:`false`}}},children:{control:`text`,description:`Visible label text.`},"aria-label":{control:`text`,description:`Accessible name for unlabeled usage.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},m={args:{children:`Receive notifications`,defaultChecked:!1}},h={args:{children:`Dark mode`,defaultChecked:!0}},g={args:{children:`Pause service access`,disabled:!0,defaultChecked:!1}},_={name:`Disabled + Checked`,args:{children:`Required feature`,disabled:!0,defaultChecked:!0}},v={name:`Without Visible Label`,args:{"aria-label":`Receive notifications`,defaultChecked:!1},parameters:{docs:{description:{story:"When there is no visible label, provide `aria-label` so the switch still has an accessible name."}}}},y={name:`Settings List`,render:()=>(0,f.jsxs)(`div`,{className:`flex max-w-sm flex-col divide-y divide-border-default`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between py-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-sm font-medium text-text-default`,children:`Email notifications`}),(0,f.jsx)(`p`,{className:`text-xs text-text-subtle`,children:`Receive notices by email.`})]}),(0,f.jsx)(u,{"aria-label":`Email notifications`,defaultChecked:!0})]}),(0,f.jsxs)(`div`,{className:`flex items-center justify-between py-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-sm font-medium text-text-default`,children:`SMS notifications`}),(0,f.jsx)(`p`,{className:`text-xs text-text-subtle`,children:`Receive urgent alerts by text message.`})]}),(0,f.jsx)(u,{"aria-label":`SMS notifications`,defaultChecked:!1})]}),(0,f.jsxs)(`div`,{className:`flex items-center justify-between py-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-sm font-medium text-text-default`,children:`Marketing messages`}),(0,f.jsx)(`p`,{className:`text-xs text-text-subtle`,children:`Receive event and benefit updates.`})]}),(0,f.jsx)(u,{"aria-label":`Marketing messages`,defaultChecked:!1,disabled:!0})]})]})},b={name:`All States`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsx)(u,{defaultChecked:!1,children:`Off`}),(0,f.jsx)(u,{defaultChecked:!0,children:`On`}),(0,f.jsx)(u,{defaultChecked:!1,disabled:!0,children:`Disabled off`}),(0,f.jsx)(u,{defaultChecked:!0,disabled:!0,children:`Disabled on`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Receive notifications',
    defaultChecked: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dark mode',
    defaultChecked: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Pause service access',
    disabled: true,
    defaultChecked: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Disabled + Checked',
  args: {
    children: 'Required feature',
    disabled: true,
    defaultChecked: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Without Visible Label',
  args: {
    'aria-label': 'Receive notifications',
    defaultChecked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'When there is no visible label, provide \`aria-label\` so the switch still has an accessible name.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Settings List',
  render: () => <div className="flex max-w-sm flex-col divide-y divide-border-default">\r
      <div className="flex items-center justify-between py-4">\r
        <div>\r
          <p className="text-sm font-medium text-text-default">Email notifications</p>\r
          <p className="text-xs text-text-subtle">Receive notices by email.</p>\r
        </div>\r
        <Switch aria-label="Email notifications" defaultChecked />\r
      </div>\r
      <div className="flex items-center justify-between py-4">\r
        <div>\r
          <p className="text-sm font-medium text-text-default">SMS notifications</p>\r
          <p className="text-xs text-text-subtle">Receive urgent alerts by text message.</p>\r
        </div>\r
        <Switch aria-label="SMS notifications" defaultChecked={false} />\r
      </div>\r
      <div className="flex items-center justify-between py-4">\r
        <div>\r
          <p className="text-sm font-medium text-text-default">Marketing messages</p>\r
          <p className="text-xs text-text-subtle">Receive event and benefit updates.</p>\r
        </div>\r
        <Switch aria-label="Marketing messages" defaultChecked={false} disabled />\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="flex flex-col gap-4">\r
      <Switch defaultChecked={false}>Off</Switch>\r
      <Switch defaultChecked>On</Switch>\r
      <Switch defaultChecked={false} disabled>\r
        Disabled off\r
      </Switch>\r
      <Switch defaultChecked disabled>\r
        Disabled on\r
      </Switch>\r
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithoutLabel`,`SettingsList`,`AllStates`]}))();export{b as AllStates,h as Checked,m as Default,g as Disabled,_ as DisabledChecked,y as SettingsList,v as WithoutLabel,x as __namedExportsOrder,p as default};