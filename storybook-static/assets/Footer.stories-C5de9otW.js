import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";import{n as i,t as a}from"./Link-ClQq_o_a.js";function o({organization:e,address:t,contactLinks:r=[],policyLinks:i=[],utilityLinks:o=[],copyright:c,className:l}){return(0,s.jsx)(`footer`,{"data-slot":`footer`,className:n(`border-t border-border-default bg-bg-subtle`,l),children:(0,s.jsxs)(`div`,{className:`mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8`,children:[(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsx)(`div`,{className:`text-lg font-semibold text-text-default`,children:e}),t&&(0,s.jsx)(`p`,{className:`text-sm text-text-subtle`,children:t})]}),r.length>0&&(0,s.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:r.map(e=>(0,s.jsx)(a,{href:e.href,underline:`hover`,size:`sm`,children:e.label},e.href))}),o.length>0&&(0,s.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:o.map(e=>(0,s.jsx)(a,{href:e.href,underline:`hover`,size:`sm`,children:e.label},e.href))}),i.length>0&&(0,s.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:i.map(e=>(0,s.jsx)(a,{href:e.href,underline:`hover`,size:`sm`,className:e.label.includes(`Privacy`)?`font-semibold`:void 0,children:e.label},e.href))}),c&&(0,s.jsx)(`p`,{className:`text-sm text-text-muted`,children:c})]})})}var s,c=e((()=>{t(),i(),s=r(),o.__docgenInfo={description:``,methods:[],displayName:`Footer`,props:{organization:{required:!0,tsType:{name:`string`},description:``},address:{required:!1,tsType:{name:`string`},description:``},contactLinks:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`FooterLink[]`},description:``,defaultValue:{value:`[]`,computed:!1}},policyLinks:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`FooterLink[]`},description:``,defaultValue:{value:`[]`,computed:!1}},utilityLinks:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  href: string
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}],raw:`FooterLink[]`},description:``,defaultValue:{value:`[]`,computed:!1}},copyright:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d;e((()=>{c(),l={title:`Layout/Footer`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Footer** holds organization information, policy links, and supporting utility links.

## Accessibility notes
- Keep legal and policy links easy to find
- Organization identity should remain readable in both dense and spacious layouts
- Do not overload the footer with a second primary navigation system
        `}}},argTypes:{organization:{control:`text`,description:`Organization name.`},address:{control:`text`,description:`Organization address or contact location.`},utilityLinks:{description:`Supplementary utility links.`},policyLinks:{description:`Policy and legal links.`},copyright:{control:`text`,description:`Footer copyright line.`}}},u={args:{organization:`Ministry portal`,address:`Sejong-daero, Seoul`,utilityLinks:[{label:`Directions`,href:`#`},{label:`Contact us`,href:`#`}],policyLinks:[{label:`Privacy policy`,href:`#`},{label:`Terms of use`,href:`#`}],copyright:`© 2026 Ministry portal.`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    organization: 'Ministry portal',
    address: 'Sejong-daero, Seoul',
    utilityLinks: [{
      label: 'Directions',
      href: '#'
    }, {
      label: 'Contact us',
      href: '#'
    }],
    policyLinks: [{
      label: 'Privacy policy',
      href: '#'
    }, {
      label: 'Terms of use',
      href: '#'
    }],
    copyright: '© 2026 Ministry portal.'
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};