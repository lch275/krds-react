import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./cn-BoL-pa2N.js";import{t as r}from"./jsx-runtime-4HHWW5MW.js";function i({value:e,max:t=100,label:r=`Progress`,showValue:i=!0,className:o}){let s=Math.min(Math.max(e,0),t),c=t>0?Math.round(s/t*100):0;return(0,a.jsxs)(`div`,{"data-slot":`progress-bar`,className:n(`space-y-2`,o),children:[(0,a.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,a.jsx)(`span`,{className:`text-sm font-medium text-text-default`,children:r}),i&&(0,a.jsxs)(`span`,{className:`text-sm text-text-subtle`,children:[c,`%`]})]}),(0,a.jsx)(`div`,{role:`progressbar`,"aria-label":r,"aria-valuemin":0,"aria-valuemax":t,"aria-valuenow":s,className:`h-3 w-full overflow-hidden rounded-badge bg-bg-muted`,children:(0,a.jsx)(`div`,{"data-slot":`progress-bar-fill`,className:`h-full rounded-badge bg-primary transition-[width]`,style:{width:`${c}%`}})})]})}var a,o=e((()=>{t(),a=r(),i.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Progress'`,computed:!1}},showValue:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l;e((()=>{o(),s={title:`Feedback/ProgressBar`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`
**ProgressBar** shows determinate progress for a known task length.

## Accessibility notes
- Use a visible label when the progress meaning is not obvious from context
- Determinate progress should expose the current value and maximum
- Use a spinner or skeleton instead when completion percentage is unknown
        `}}},argTypes:{label:{control:`text`,description:`Progress label.`},value:{control:`number`,description:`Current progress value.`},max:{control:`number`,description:`Maximum progress value.`}}},c={args:{label:`Application processing`,value:62}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Application processing',
    value: 62
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};