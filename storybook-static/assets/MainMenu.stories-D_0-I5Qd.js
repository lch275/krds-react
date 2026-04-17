import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";function o({items:e,className:t,ariaLabel:n=`Main menu`}){let[r,a]=(0,s.useState)(null),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=e=>{let t=e.target;o.current?.contains(t)||a(null)},t=e=>{e.key===`Escape`&&a(null)};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[]),(0,c.jsx)(`nav`,{ref:o,"aria-label":n,"data-slot":`main-menu`,className:i(`border-b border-border-default bg-bg-default`,t),children:(0,c.jsx)(`ul`,{className:`mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3`,children:e.map(e=>{let t=!!e.children?.length,n=r===e.label;return(0,c.jsx)(`li`,{className:`relative`,children:t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`button`,{type:`button`,"aria-expanded":n,"aria-current":e.current?`true`:void 0,className:i(`rounded-control px-4 py-2 text-sm font-medium`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,e.current||n?`bg-primary-subtle text-text-default`:`text-text-default hover:bg-bg-subtle`),onClick:()=>a(t=>t===e.label?null:e.label),children:e.label}),n&&(0,c.jsx)(`div`,{className:`absolute left-0 top-full z-dropdown mt-2 min-w-72 rounded-card border border-border-default bg-bg-default p-3 shadow-dropdown`,children:(0,c.jsx)(`ul`,{className:`space-y-1`,children:e.children?.map(e=>(0,c.jsx)(`li`,{children:(0,c.jsxs)(`a`,{href:e.href,className:`block rounded-control px-3 py-2 hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,children:[(0,c.jsx)(`span`,{className:`block text-sm font-medium text-text-default`,children:e.label}),e.description&&(0,c.jsx)(`span`,{className:`block text-xs text-text-subtle`,children:e.description})]})},e.href))})})]}):(0,c.jsx)(`a`,{href:e.href??`#`,"aria-current":e.current?`page`:void 0,className:i(`block rounded-control px-4 py-2 text-sm font-medium`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,e.current?`bg-primary-subtle text-text-default`:`text-text-default hover:bg-bg-subtle`),children:e.label})},e.label)})})})}var s,c,l=t((()=>{s=e(n(),1),r(),c=a(),o.__docgenInfo={description:``,methods:[],displayName:`MainMenu`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href?: string
  current?: boolean
  children?: MainMenuChildLink[]
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!1}},{key:`current`,value:{name:`boolean`,required:!1}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
  description?: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}}]}}],raw:`MainMenuChildLink[]`,required:!1}}]}}],raw:`MainMenuItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Main menu'`,computed:!1}}}}})),u,d,f;t((()=>{l(),u={title:`Navigation/MainMenu`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**MainMenu** represents the top-level service navigation with optional grouped children.

## Accessibility notes
- Clearly identify the current section
- Grouped child links should remain keyboard reachable and readable in source order
- Use this for primary site navigation, not for unrelated page actions
        `}}},argTypes:{items:{description:`Top-level navigation items with optional nested children.`},className:{control:`text`,description:`Additional Tailwind classes.`}}},d={args:{items:[{label:`Services`,current:!0,children:[{label:`Housing support`,href:`#`,description:`Find housing programs.`},{label:`Childcare`,href:`#`,description:`Apply for childcare services.`}]},{label:`News`,href:`#`},{label:`Support`,href:`#`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Services',
      current: true,
      children: [{
        label: 'Housing support',
        href: '#',
        description: 'Find housing programs.'
      }, {
        label: 'Childcare',
        href: '#',
        description: 'Apply for childcare services.'
      }]
    }, {
      label: 'News',
      href: '#'
    }, {
      label: 'Support',
      href: '#'
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};