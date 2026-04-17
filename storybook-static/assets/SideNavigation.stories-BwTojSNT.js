import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";function o({title:e,titleHref:t,items:n,className:r,ariaLabel:a=`Side navigation`}){let[o,l]=(0,s.useState)(n.filter(e=>e.current||e.children?.some(t=>t.href===e.href)).map(e=>e.label)),u=e=>{l(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,c.jsxs)(`nav`,{"aria-label":a,"data-slot":`side-navigation`,className:i(`rounded-card border border-border-default bg-bg-default`,r),children:[e&&(0,c.jsx)(`div`,{className:`border-b border-border-default px-4 py-4`,children:t?(0,c.jsx)(`a`,{href:t,className:`text-base font-semibold text-text-default underline-offset-4 hover:underline`,children:e}):(0,c.jsx)(`p`,{className:`text-base font-semibold text-text-default`,children:e})}),(0,c.jsx)(`ul`,{className:`divide-y divide-border-default`,children:n.map(e=>{let t=!!e.children?.length,n=o.includes(e.label);return(0,c.jsxs)(`li`,{className:`px-2 py-1`,children:[(0,c.jsx)(`div`,{className:`flex items-center gap-2`,children:t?(0,c.jsxs)(`button`,{type:`button`,"aria-expanded":n,className:i(`flex w-full items-center justify-between rounded-control px-3 py-2 text-left`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,e.current?`bg-primary-subtle font-medium text-text-default`:`text-text-default hover:bg-bg-subtle`),onClick:()=>u(e.label),children:[(0,c.jsx)(`span`,{children:e.label}),(0,c.jsx)(`span`,{"aria-hidden":`true`,children:n?`-`:`+`})]}):(0,c.jsx)(`a`,{href:e.href??`#`,"aria-current":e.current?`page`:void 0,className:i(`block w-full rounded-control px-3 py-2`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,e.current?`bg-primary-subtle font-medium text-text-default`:`text-text-default hover:bg-bg-subtle`),children:e.label})}),t&&n&&(0,c.jsx)(`ul`,{className:`mt-1 space-y-1 pl-4`,children:e.children?.map(e=>(0,c.jsx)(`li`,{children:(0,c.jsx)(`a`,{href:e.href,className:`block rounded-control px-3 py-2 text-sm text-text-subtle hover:bg-bg-subtle hover:text-text-default focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,children:e.label})},e.href))})]},e.label)})})]})}var s,c,l=t((()=>{s=e(n(),1),r(),c=a(),o.__docgenInfo={description:``,methods:[],displayName:`SideNavigation`,props:{title:{required:!1,tsType:{name:`string`},description:``},titleHref:{required:!1,tsType:{name:`string`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href?: string
  current?: boolean
  children?: SideNavigationLink[]
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!1}},{key:`current`,value:{name:`boolean`,required:!1}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`SideNavigationLink[]`,required:!1}}]}}],raw:`SideNavigationItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Side navigation'`,computed:!1}}}}})),u,d,f;t((()=>{l(),u={title:`Navigation/SideNavigation`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**SideNavigation** is suited to section-level navigation within a service area.

## Accessibility notes
- Indicate the current item clearly
- Nested navigation should preserve a logical heading and hierarchy
- Use side navigation for structural movement, not inline actions
        `}}},argTypes:{title:{control:`text`,description:`Navigation heading.`},items:{description:`Navigation items with optional nested children.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{title:`Citizen service`,items:[{label:`Overview`,href:`#`,current:!0},{label:`Applications`,children:[{label:`New request`,href:`#`},{label:`Saved drafts`,href:`#`}]},{label:`Status`,href:`#`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Citizen service',
    items: [{
      label: 'Overview',
      href: '#',
      current: true
    }, {
      label: 'Applications',
      children: [{
        label: 'New request',
        href: '#'
      }, {
        label: 'Saved drafts',
        href: '#'
      }]
    }, {
      label: 'Status',
      href: '#'
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};