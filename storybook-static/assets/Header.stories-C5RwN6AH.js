import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Link-ClQq_o_a.js";function o({homeHref:e=`#`,serviceName:t,logoLabel:r=`Government service home`,utilityLinks:i=[],navigation:o=[],className:c}){return(0,s.jsxs)(`header`,{"data-slot":`header`,className:n(`border-b border-border-default bg-bg-default`,c),children:[(0,s.jsx)(`a`,{href:`#main-content`,className:`sr-only-focusable`,children:`Skip to main content`}),(0,s.jsxs)(`div`,{className:`mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4`,children:[(0,s.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,s.jsxs)(`a`,{href:e,className:`inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,"aria-label":r,children:[(0,s.jsx)(`span`,{"aria-hidden":`true`,className:`inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-text-on-primary`,children:`GOV`}),(0,s.jsx)(`span`,{className:`text-lg font-semibold text-text-default`,children:t})]}),i.length>0&&(0,s.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:i.map(e=>(0,s.jsx)(a,{href:e.href,underline:`hover`,size:`sm`,children:e.label},e.href))})]}),o.length>0&&(0,s.jsx)(`nav`,{"aria-label":`Primary navigation`,children:(0,s.jsx)(`ul`,{className:`flex flex-wrap items-center gap-4`,children:o.map(e=>(0,s.jsx)(`li`,{children:(0,s.jsx)(a,{href:e.href,underline:`hover`,tone:`subtle`,children:e.label})},e.href))})})]})]})}var s,c=e((()=>{t(),i(),s=r(),o.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{homeHref:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#'`,computed:!1}},serviceName:{required:!0,tsType:{name:`string`},description:``},logoLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Government service home'`,computed:!1}},utilityLinks:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`HeaderNavItem[]`},description:``,defaultValue:{value:`[]`,computed:!1}},navigation:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`HeaderNavItem[]`},description:``,defaultValue:{value:`[]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d;e((()=>{c(),l={title:`Layout/Header`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Header** provides the service-level top area with utility links and primary navigation.

## Accessibility notes
- Keep the service name clear and visible
- Utility links and primary navigation should remain distinct in structure
- Use the header for orientation, not for unrelated page-specific actions
        `}}},argTypes:{serviceName:{control:`text`,description:`Visible service name.`},utilityLinks:{description:`Utility actions shown above or beside the main navigation.`},navigation:{description:`Primary navigation items.`}}},u={args:{serviceName:`Citizen service`,utilityLinks:[{label:`Login`,href:`#`},{label:`Support`,href:`#`}],navigation:[{label:`Overview`,href:`#`},{label:`Applications`,href:`#`},{label:`Status`,href:`#`}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    serviceName: 'Citizen service',
    utilityLinks: [{
      label: 'Login',
      href: '#'
    }, {
      label: 'Support',
      href: '#'
    }],
    navigation: [{
      label: 'Overview',
      href: '#'
    }, {
      label: 'Applications',
      href: '#'
    }, {
      label: 'Status',
      href: '#'
    }]
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};