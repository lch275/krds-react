import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Link-ClQq_o_a.js";function o(e,t){return e.length<=t?e:t<3?[e[0],e[e.length-1]]:[e[0],{label:`...`,href:void 0},...e.slice(-(t-2))]}function s({items:e,className:t,maxItems:r=4,ariaLabel:i=`Breadcrumb`}){let s=o(e,r),l=s.length-1;return(0,c.jsx)(`nav`,{"aria-label":i,className:n(`w-full`,t),children:(0,c.jsx)(`ol`,{"data-slot":`breadcrumb`,className:`flex min-w-0 items-center gap-2 overflow-hidden text-sm text-text-subtle`,children:s.map((e,t)=>{let n=t===l&&e.label!==`...`,r=e.label===`...`;return(0,c.jsxs)(`li`,{"data-slot":`breadcrumb-item`,className:`flex min-w-0 items-center gap-2`,children:[t>0&&(0,c.jsx)(`span`,{"aria-hidden":`true`,className:`text-text-muted`,children:`/`}),r?(0,c.jsx)(`span`,{"aria-hidden":`true`,className:`inline-flex min-h-10 items-center px-1 text-text-muted`,children:`...`}):n||!e.href?(0,c.jsx)(`span`,{"aria-current":n?`page`:void 0,className:`truncate font-medium text-text-default`,children:e.label}):(0,c.jsx)(a,{href:e.href,underline:`hover`,size:`md`,className:`min-w-0 truncate px-0 py-0 text-sm`,children:e.label})]},`${e.label}-${t}`)})})})}var c,l=e((()=>{t(),i(),c=r(),s.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href?: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!1}}]}}],raw:`BreadcrumbItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},maxItems:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Breadcrumb'`,computed:!1}}}}})),u,d,f,p;e((()=>{l(),u={title:`Navigation/Breadcrumb`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Breadcrumb** shows the current page location within a hierarchy.

## Accessibility notes
- The current page should not be rendered as a link
- Use breadcrumb navigation only when there is a meaningful parent path
- Collapsed presentation should still preserve the full path for screen readers
        `}}},argTypes:{items:{description:`Ordered breadcrumb items from root to current page.`},maxItems:{control:`number`,description:`Maximum number of visible items before collapsing.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{items:[{label:`Home`,href:`#`},{label:`Design system`,href:`#`},{label:`Components`,href:`#`},{label:`Current page`}]}},f={args:{maxItems:4,items:[{label:`Home`,href:`#`},{label:`Level 1`,href:`#`},{label:`Level 2`,href:`#`},{label:`Level 3`,href:`#`},{label:`Current page`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Design system',
      href: '#'
    }, {
      label: 'Components',
      href: '#'
    }, {
      label: 'Current page'
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 4,
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Level 1',
      href: '#'
    }, {
      label: 'Level 2',
      href: '#'
    }, {
      label: 'Level 3',
      href: '#'
    }, {
      label: 'Current page'
    }]
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Collapsed`]}))();export{f as Collapsed,d as Default,p as __namedExportsOrder,u as default};