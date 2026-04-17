import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";function i({steps:e,currentStep:t,completedSteps:r=[],className:i,ariaLabel:o=`Step indicator`}){return(0,a.jsx)(`nav`,{"aria-label":o,className:n(`w-full`,i),children:(0,a.jsx)(`ol`,{"data-slot":`step-indicator`,className:`grid gap-3 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]`,children:e.map((e,i)=>{let o=i+1,s=o===t,c=r.includes(o);return(0,a.jsxs)(`li`,{"data-slot":`step-indicator-item`,"data-state":s?`current`:c?`done`:`upcoming`,"aria-current":s?`step`:void 0,className:n(`flex items-start gap-3 rounded-card border px-4 py-3`,s&&`border-primary bg-primary-subtle`,c&&`border-border-default bg-bg-subtle`,!s&&!c&&`border-border-default bg-bg-default`),children:[(0,a.jsx)(`span`,{"aria-hidden":`true`,className:n(`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold`,s&&`border-primary bg-primary text-text-on-primary`,c&&`border-border-strong bg-bg-default text-text-default`,!s&&!c&&`border-border-default text-text-subtle`),children:c?`v`:o}),(0,a.jsxs)(`span`,{className:`min-w-0`,children:[(0,a.jsxs)(`span`,{className:`block text-xs text-text-muted`,children:[`Step `,o,e.optional?` · Optional`:``]}),(0,a.jsx)(`span`,{className:`block font-medium text-text-default`,children:e.label})]})]},e.label)})})})}var a,o=e((()=>{t(),a=r(),i.__docgenInfo={description:``,methods:[],displayName:`StepIndicator`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  optional?: boolean
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`optional`,value:{name:`boolean`,required:!1}}]}}],raw:`StepIndicatorItem[]`},description:``},currentStep:{required:!0,tsType:{name:`number`},description:``},completedSteps:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``,defaultValue:{value:`[]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Step indicator'`,computed:!1}}}}})),s,c,l;e((()=>{o(),s={title:`Navigation/StepIndicator`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`
**StepIndicator** communicates progress through a multi-step flow.

## Accessibility notes
- The current step should be exposed in text, not color alone
- Completed steps should be distinguishable from upcoming steps
- Use this pattern for guided flows, not for general progress percentages
        `}}},argTypes:{currentStep:{control:`number`,description:`Current active step.`},completedSteps:{description:`Steps that are already complete.`},steps:{description:`Ordered step definitions.`}}},c={args:{currentStep:2,completedSteps:[1],steps:[{label:`Check notices`},{label:`Applicant details`},{label:`Review`},{label:`Submit`}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    currentStep: 2,
    completedSteps: [1],
    steps: [{
      label: 'Check notices'
    }, {
      label: 'Applicant details'
    }, {
      label: 'Review'
    }, {
      label: 'Submit'
    }]
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};