import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{n,t as r}from"./Button-CdI2ZtSv.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),i=t(),a={title:`UI/Button`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:'\n**Button** is a polymorphic action component. It defaults to a native `button`, but it can render an anchor when navigation semantics are required.\n\n## Accessibility notes\n- Defaults to `type="button"` to avoid accidental form submission\n- Exposes `aria-busy` while loading\n- When rendered as `a`, disabled state falls back to `aria-disabled` and `tabIndex={-1}`\n- Icon-only usage should always provide an accessible name\n- `size="lg"` is suitable for 44px minimum target guidance\n        '}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`,`danger`,`link`],description:`Visual style variant.`,table:{defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Control size.`,table:{defaultValue:{summary:`md`}}},loading:{control:`boolean`,description:`Shows loading affordance and sets aria-busy.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disables interaction.`,table:{defaultValue:{summary:`false`}}},as:{control:`select`,options:[`button`,`a`,`span`,`div`],description:`Rendered HTML element.`,table:{defaultValue:{summary:`button`}}},children:{control:`text`,description:`Button label.`},"aria-label":{control:`text`,description:`Accessible name, required for icon-only usage.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},o={args:{children:`Primary action`,variant:`primary`}},s={args:{children:`Secondary action`,variant:`secondary`}},c={args:{children:`Ghost action`,variant:`ghost`}},l={args:{children:`Delete item`,variant:`danger`}},u={args:{children:`Inline action`,variant:`link`}},d={args:{children:`Saving`,loading:!0}},f={args:{children:`Disabled action`,disabled:!0}},p={name:`Loading + Disabled`,args:{children:`Submitting`,loading:!0,disabled:!0}},m={name:`Rendered As Link`,args:{as:`a`,href:`#`,children:`Go to details`},parameters:{docs:{description:{story:'Use `as="a"` when the control performs navigation and provide a valid `href`.'}}}},h={name:`Disabled Link`,args:{as:`a`,href:`#`,children:`Unavailable destination`,disabled:!0},parameters:{docs:{description:{story:"Anchors do not support the native `disabled` attribute, so the component applies `aria-disabled` and removes the tab stop."}}}},g={name:`Icon Only`,args:{"aria-label":`Close dialog`,children:`X`,variant:`ghost`,size:`md`},parameters:{docs:{description:{story:"Icon-only buttons should always provide an accessible name through `aria-label`."}}}},_={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{size:`sm`,children:`Small`}),(0,i.jsx)(r,{size:`md`,children:`Medium`}),(0,i.jsx)(r,{size:`lg`,children:`Large`})]})},v={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,i.jsx)(r,{variant:`primary`,children:`primary`}),(0,i.jsx)(r,{variant:`secondary`,children:`secondary`}),(0,i.jsx)(r,{variant:`ghost`,children:`ghost`}),(0,i.jsx)(r,{variant:`danger`,children:`danger`}),(0,i.jsx)(r,{variant:`link`,children:`link`})]})},y={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(`span`,{className:`w-24 text-sm text-text-subtle`,children:`Default`}),(0,i.jsx)(r,{variant:`primary`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,children:`Button`}),(0,i.jsx)(r,{variant:`ghost`,children:`Button`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(`span`,{className:`w-24 text-sm text-text-subtle`,children:`Loading`}),(0,i.jsx)(r,{variant:`primary`,loading:!0,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,loading:!0,children:`Button`}),(0,i.jsx)(r,{variant:`ghost`,loading:!0,children:`Button`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(`span`,{className:`w-24 text-sm text-text-subtle`,children:`Disabled`}),(0,i.jsx)(r,{variant:`primary`,disabled:!0,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,disabled:!0,children:`Button`}),(0,i.jsx)(r,{variant:`ghost`,disabled:!0,children:`Button`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary action',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary action',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost action',
    variant: 'ghost'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete item',
    variant: 'danger'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Inline action',
    variant: 'link'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Saving',
    loading: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled action',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Loading + Disabled',
  args: {
    children: 'Submitting',
    loading: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Rendered As Link',
  args: {
    as: 'a',
    href: '#',
    children: 'Go to details'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`as="a"\` when the control performs navigation and provide a valid \`href\`.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Link',
  args: {
    as: 'a',
    href: '#',
    children: 'Unavailable destination',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Anchors do not support the native \`disabled\` attribute, so the component applies \`aria-disabled\` and removes the tab stop.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  args: {
    'aria-label': 'Close dialog',
    children: 'X',
    variant: 'ghost',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons should always provide an accessible name through \`aria-label\`.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Button variant="primary">primary</Button>\r
      <Button variant="secondary">secondary</Button>\r
      <Button variant="ghost">ghost</Button>\r
      <Button variant="danger">danger</Button>\r
      <Button variant="link">link</Button>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-3">\r
        <span className="w-24 text-sm text-text-subtle">Default</span>\r
        <Button variant="primary">Button</Button>\r
        <Button variant="secondary">Button</Button>\r
        <Button variant="ghost">Button</Button>\r
      </div>\r
      <div className="flex items-center gap-3">\r
        <span className="w-24 text-sm text-text-subtle">Loading</span>\r
        <Button variant="primary" loading>\r
          Button\r
        </Button>\r
        <Button variant="secondary" loading>\r
          Button\r
        </Button>\r
        <Button variant="ghost" loading>\r
          Button\r
        </Button>\r
      </div>\r
      <div className="flex items-center gap-3">\r
        <span className="w-24 text-sm text-text-subtle">Disabled</span>\r
        <Button variant="primary" disabled>\r
          Button\r
        </Button>\r
        <Button variant="secondary" disabled>\r
          Button\r
        </Button>\r
        <Button variant="ghost" disabled>\r
          Button\r
        </Button>\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`Secondary`,`Ghost`,`Danger`,`LinkVariant`,`Loading`,`Disabled`,`LoadingAndDisabled`,`AsLink`,`AsLinkDisabled`,`IconOnly`,`AllSizes`,`AllVariants`,`States`]}))();export{_ as AllSizes,v as AllVariants,m as AsLink,h as AsLinkDisabled,l as Danger,f as Disabled,c as Ghost,g as IconOnly,u as LinkVariant,d as Loading,p as LoadingAndDisabled,o as Primary,s as Secondary,y as States,b as __namedExportsOrder,a as default};