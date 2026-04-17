import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";function o({title:e=`On this page`,items:t,className:n,ariaLabel:r=`In-page navigation`}){let[a,o]=(0,s.useState)(t[0]?.id);return(0,s.useEffect)(()=>{if(typeof window>`u`||t.length===0||typeof IntersectionObserver>`u`)return;let e=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];t&&o(t.target.id)},{rootMargin:`-20% 0px -60% 0px`,threshold:[.1,.3,.6]});return t.forEach(t=>{let n=document.getElementById(t.id);n&&e.observe(n)}),()=>e.disconnect()},[t]),(0,c.jsxs)(`nav`,{"aria-label":r,"data-slot":`in-page-navigation`,className:i(`rounded-card border border-border-default bg-bg-default p-4`,n),children:[(0,c.jsx)(`p`,{className:`mb-3 text-sm font-semibold text-text-default`,children:e}),(0,c.jsx)(`ul`,{className:`space-y-1`,children:t.map(e=>(0,c.jsx)(`li`,{children:(0,c.jsx)(`a`,{href:`#${e.id}`,"data-state":a===e.id?`active`:`inactive`,className:i(`block rounded-sm px-3 py-2 text-sm transition-colors`,`focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2`,a===e.id?`border-l-2 border-primary bg-primary-subtle font-medium text-text-default`:`text-text-subtle hover:bg-bg-subtle hover:text-text-default`,e.level===2&&`pl-6`,e.level===3&&`pl-9`),onClick:t=>{let n=document.getElementById(e.id);n&&(t.preventDefault(),typeof n.scrollIntoView==`function`&&n.scrollIntoView({behavior:`smooth`,block:`start`}),n.focus({preventScroll:!0}),o(e.id))},children:e.label})},e.id))})]})}var s,c,l=t((()=>{s=e(n(),1),r(),c=a(),o.__docgenInfo={description:``,methods:[],displayName:`InPageNavigation`,props:{title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'On this page'`,computed:!1}},items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string
  label: string
  level?: 1 | 2 | 3
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`level`,value:{name:`union`,raw:`1 | 2 | 3`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}],required:!1}}]}}],raw:`InPageNavigationItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'In-page navigation'`,computed:!1}}}}})),u,d,f;t((()=>{l(),u={title:`Navigation/InPageNavigation`,component:o,tags:[`autodocs`]},d={args:{items:[{id:`summary`,label:`Summary`},{id:`eligibility`,label:`Eligibility`},{id:`process`,label:`Process`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'summary',
      label: 'Summary'
    }, {
      id: 'eligibility',
      label: 'Eligibility'
    }, {
      id: 'process',
      label: 'Process'
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};