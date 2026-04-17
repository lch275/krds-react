import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{n,t as r}from"./Spinner-ko9QBpLs.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`UI/Spinner`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Spinner** represents an in-progress loading state.

## Accessibility notes
- Use \`aria-hidden={true}\` when the spinner is purely decorative
- Provide a meaningful \`label\` when the spinner stands on its own
- When the spinner is not hidden, it should expose a readable label to assistive technology
        `}}},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`Spinner size.`,table:{defaultValue:{summary:`md`}}},label:{control:`text`,description:`Accessible label when not aria-hidden.`,table:{defaultValue:{summary:`Loading`}}},"aria-hidden":{control:`boolean`,description:`Hides the spinner from assistive technology.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},o={args:{size:`md`,label:`Loading`}},s={args:{size:`xs`,label:`Loading`}},c={args:{size:`sm`,label:`Loading`}},l={args:{size:`md`,label:`Loading`}},u={args:{size:`lg`,label:`Loading`}},d={args:{size:`xl`,label:`Loading`}},f={name:`Decorative`,args:{size:`md`,"aria-hidden":!0},parameters:{docs:{description:{story:`Use decorative mode when the surrounding UI already communicates loading context.`}}}},p={name:`Color Variations`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{size:`md`,label:`Loading`,className:`text-primary`}),(0,i.jsx)(r,{size:`md`,label:`Loading`,className:`text-status-success`}),(0,i.jsx)(r,{size:`md`,label:`Loading`,className:`text-status-error`}),(0,i.jsx)(r,{size:`md`,label:`Loading`,className:`text-text-subtle`})]})},m={name:`All Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`xs`,label:`Loading`}),(0,i.jsx)(`span`,{className:`text-xs text-text-muted`,children:`xs`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`sm`,label:`Loading`}),(0,i.jsx)(`span`,{className:`text-xs text-text-muted`,children:`sm`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`md`,label:`Loading`}),(0,i.jsx)(`span`,{className:`text-xs text-text-muted`,children:`md`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`lg`,label:`Loading`}),(0,i.jsx)(`span`,{className:`text-xs text-text-muted`,children:`lg`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`xl`,label:`Loading`}),(0,i.jsx)(`span`,{className:`text-xs text-text-muted`,children:`xl`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    label: 'Loading'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Loading'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Loading'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    label: 'Loading'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Decorative',
  args: {
    size: 'md',
    'aria-hidden': true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use decorative mode when the surrounding UI already communicates loading context.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Color Variations',
  render: () => <div className="flex items-center gap-6">\r
      <Spinner size="md" label="Loading" className="text-primary" />\r
      <Spinner size="md" label="Loading" className="text-status-success" />\r
      <Spinner size="md" label="Loading" className="text-status-error" />\r
      <Spinner size="md" label="Loading" className="text-text-subtle" />\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="flex items-center gap-6">\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="xs" label="Loading" />\r
        <span className="text-xs text-text-muted">xs</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="sm" label="Loading" />\r
        <span className="text-xs text-text-muted">sm</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="md" label="Loading" />\r
        <span className="text-xs text-text-muted">md</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="lg" label="Loading" />\r
        <span className="text-xs text-text-muted">lg</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="xl" label="Loading" />\r
        <span className="text-xs text-text-muted">xl</span>\r
      </div>\r
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`ExtraSmall`,`Small`,`Medium`,`Large`,`ExtraLarge`,`Decorative`,`WithColor`,`AllSizes`]}))();export{m as AllSizes,f as Decorative,o as Default,d as ExtraLarge,s as ExtraSmall,u as Large,l as Medium,c as Small,p as WithColor,h as __namedExportsOrder,a as default};