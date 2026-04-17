import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";import{n as o,t as s}from"./useControllable-BQ3VKl8y.js";function c(){let e=(0,f.useContext)(m);if(!e)throw Error(`[KRDS] Tabs 서브컴포넌트는 Tabs 내부에서 사용해야 합니다.`);return e}function l(e,t){return`${e}-tab-${t}`}function u(e,t){return`${e}-panel-${t}`}function d({value:e,defaultValue:t=``,onValueChange:n,orientation:r=`horizontal`,activationMode:a=`automatic`,children:s,className:c}){let l=(0,f.useId)(),[u,d]=o(e,t,n);return(0,p.jsx)(m.Provider,{value:{value:u,onValueChange:d,orientation:r,activationMode:a,baseId:l},children:(0,p.jsx)(`div`,{"data-slot":`tabs`,"data-orientation":r,className:i(r===`vertical`?`flex flex-row gap-4`:`flex flex-col`,c),children:s})})}var f,p,m,h,g,_,v=t((()=>{f=e(n(),1),r(),s(),p=a(),m=(0,f.createContext)(null),h=(0,f.forwardRef)(({children:e,className:t,...n},r)=>{let{orientation:a}=c();return(0,p.jsx)(`div`,{ref:r,role:`tablist`,"data-slot":`tabs-list`,"aria-orientation":a,className:i(`flex`,a===`horizontal`?`flex-row border-b border-border-default`:`flex-col border-r border-border-default`,t),...n,children:e})}),h.displayName=`TabsList`,g=(0,f.forwardRef)(({value:e,disabled:t=!1,children:n,className:r,...a},o)=>{let s=c(),d=s.value===e,m=l(s.baseId,e),h=u(s.baseId,e),g=(0,f.useCallback)(t=>{let n=t.currentTarget.closest(`[role="tablist"]`);if(!n)return;let r=Array.from(n.querySelectorAll(`[role="tab"]:not([disabled])`)),i=r.indexOf(t.currentTarget),a=s.orientation===`horizontal`,o=a?`ArrowLeft`:`ArrowUp`,c=a?`ArrowRight`:`ArrowDown`,l=i;if(t.key===o)t.preventDefault(),l=(i-1+r.length)%r.length;else if(t.key===c)t.preventDefault(),l=(i+1)%r.length;else if(t.key===`Home`)t.preventDefault(),l=0;else if(t.key===`End`)t.preventDefault(),l=r.length-1;else if((t.key===`Enter`||t.key===` `)&&s.activationMode===`manual`){t.preventDefault(),s.onValueChange(e);return}else return;let u=r[l];if(u.focus(),s.activationMode===`automatic`){let e=u.getAttribute(`data-value`);e&&s.onValueChange(e)}},[s,e]);return(0,p.jsx)(`button`,{ref:o,id:m,type:`button`,role:`tab`,"data-slot":`tabs-trigger`,"data-value":e,"data-state":d?`active`:`inactive`,"aria-selected":d,"aria-controls":h,"aria-disabled":t||void 0,disabled:t,tabIndex:d?0:-1,onClick:()=>!t&&s.onValueChange(e),onKeyDown:g,className:i(`px-4 py-2 text-sm font-medium`,`border-b-2 -mb-px transition-colors`,`focus-visible:outline-none focus-visible:ring-3`,`focus-visible:ring-border-focus focus-visible:ring-inset`,`disabled:pointer-events-none disabled:opacity-40`,d?`border-primary text-primary`:`border-transparent text-text-subtle hover:text-text-default hover:border-border-default`,r),...a,children:n})}),g.displayName=`TabsTrigger`,_=(0,f.forwardRef)(({value:e,children:t,className:n,keepMounted:r=!1,...a},o)=>{let s=c(),d=s.value===e,f=l(s.baseId,e),m=u(s.baseId,e);return!r&&!d?null:(0,p.jsx)(`div`,{ref:o,id:m,role:`tabpanel`,"data-slot":`tabs-content`,"data-state":d?`active`:`inactive`,"aria-labelledby":f,tabIndex:0,hidden:r&&!d,className:i(`focus-visible:outline-none focus-visible:ring-3`,`focus-visible:ring-border-focus focus-visible:ring-offset-2`,n),...a,children:t})}),_.displayName=`TabsContent`,d.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},activationMode:{required:!1,tsType:{name:`union`,raw:`'automatic' | 'manual'`,elements:[{name:`literal`,value:`'automatic'`},{name:`literal`,value:`'manual'`}]},description:``,defaultValue:{value:`'automatic'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`TabsList`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`,props:{value:{required:!0,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`TabsContent`,props:{value:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},keepMounted:{required:!1,tsType:{name:`boolean`},description:`false면 비활성 패널을 DOM에서 제거. true면 숨김 (display:none)`,defaultValue:{value:`false`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O,k;t((()=>{y=e(n(),1),v(),b=a(),x={title:`Overlays/Tabs`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Tabs** implements the ARIA Tabs Pattern with keyboard support and predictable content association.

## Compound structure
\`\`\`tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

## Keyboard behavior
| Key | Behavior |
| --- | --- |
| Arrow keys | Move focus between triggers |
| Home | Move focus to the first trigger |
| End | Move focus to the last trigger |
| Enter / Space | Activate the focused tab in manual mode |
| Tab | Leaves the tablist as a single stop |

## Activation modes
- \`automatic\`: focus movement activates the tab immediately
- \`manual\`: focus moves first, then activation happens on Enter or Space
        `}}},argTypes:{defaultValue:{control:`text`,description:`Initial active tab for uncontrolled usage.`},value:{control:`text`,description:`Controlled active tab value.`},orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Tab orientation.`,table:{defaultValue:{summary:`horizontal`}}},activationMode:{control:`select`,options:[`automatic`,`manual`],description:`Tab activation strategy.`,table:{defaultValue:{summary:`automatic`}}},className:{control:`text`,description:`Additional CSS classes on the root element.`}}},S={render:e=>(0,b.jsxs)(d,{...e,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`info`,children:`Request details`}),(0,b.jsx)(g,{value:`history`,children:`History`}),(0,b.jsx)(g,{value:`docs`,children:`Documents`})]}),(0,b.jsx)(_,{value:`info`,className:`p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Review the primary request information.`})}),(0,b.jsx)(_,{value:`history`,className:`p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Review the processing timeline and status history.`})}),(0,b.jsx)(_,{value:`docs`,className:`p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Review attached files and submitted materials.`})})]}),args:{defaultValue:`info`,orientation:`horizontal`,activationMode:`automatic`}},C={render:()=>{let[e,t]=(0,y.useState)(`info`);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(`p`,{className:`text-sm text-text-subtle`,children:[`Active tab: `,(0,b.jsx)(`strong`,{children:e})]}),(0,b.jsxs)(d,{value:e,onValueChange:t,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`info`,children:`Request details`}),(0,b.jsx)(g,{value:`history`,children:`History`}),(0,b.jsx)(g,{value:`docs`,children:`Documents`})]}),(0,b.jsx)(_,{value:`info`,className:`p-4`,children:`Request details content`}),(0,b.jsx)(_,{value:`history`,className:`p-4`,children:`History content`}),(0,b.jsx)(_,{value:`docs`,className:`p-4`,children:`Documents content`})]})]})}},w={name:`Vertical Layout`,render:e=>(0,b.jsxs)(d,{...e,className:`min-h-48`,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`personal`,children:`Personal info`}),(0,b.jsx)(g,{value:`contact`,children:`Contact`}),(0,b.jsx)(g,{value:`address`,children:`Address`})]}),(0,b.jsx)(_,{value:`personal`,className:`flex-1 p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Personal information panel`})}),(0,b.jsx)(_,{value:`contact`,className:`flex-1 p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Contact information panel`})}),(0,b.jsx)(_,{value:`address`,className:`flex-1 p-4`,children:(0,b.jsx)(`p`,{className:`text-text-default`,children:`Address information panel`})})]}),args:{defaultValue:`personal`,orientation:`vertical`}},T={name:`Manual Activation`,render:e=>(0,b.jsxs)(d,{...e,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`tab1`,children:`Tab 1`}),(0,b.jsx)(g,{value:`tab2`,children:`Tab 2`}),(0,b.jsx)(g,{value:`tab3`,children:`Tab 3`})]}),(0,b.jsx)(_,{value:`tab1`,className:`p-4`,children:`Focus moves with the arrow keys, but activation waits for Enter or Space.`}),(0,b.jsx)(_,{value:`tab2`,className:`p-4`,children:`Tab 2 content`}),(0,b.jsx)(_,{value:`tab3`,className:`p-4`,children:`Tab 3 content`})]}),args:{defaultValue:`tab1`,activationMode:`manual`},parameters:{docs:{description:{story:`Manual activation is useful when changing tabs triggers heavier rendering or data loading.`}}}},E={name:`With Disabled Tab`,render:()=>(0,b.jsxs)(d,{defaultValue:`available`,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`available`,children:`Available`}),(0,b.jsx)(g,{value:`disabled`,disabled:!0,children:`Coming soon`}),(0,b.jsx)(g,{value:`other`,children:`Other`})]}),(0,b.jsx)(_,{value:`available`,className:`p-4`,children:`Available service content.`}),(0,b.jsx)(_,{value:`disabled`,className:`p-4`,children:`Disabled content should not become active.`}),(0,b.jsx)(_,{value:`other`,className:`p-4`,children:`Alternative service content.`})]})},D={name:`Keep Mounted`,render:()=>(0,b.jsxs)(d,{defaultValue:`tab1`,children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(g,{value:`tab1`,children:`Tab 1`}),(0,b.jsx)(g,{value:`tab2`,children:`Tab 2`})]}),(0,b.jsx)(_,{value:`tab1`,keepMounted:!0,className:`p-4`,children:`Tab 1 stays in the DOM and is only hidden when inactive.`}),(0,b.jsx)(_,{value:`tab2`,keepMounted:!0,className:`p-4`,children:"Use `keepMounted` when hidden panels need to preserve local state."})]}),parameters:{docs:{description:{story:"When `keepMounted` is enabled, inactive panels remain mounted instead of being removed from the DOM."}}}},O={name:`Many Tabs`,render:()=>(0,b.jsxs)(d,{defaultValue:`tab1`,children:[(0,b.jsx)(h,{children:Array.from({length:6},(e,t)=>(0,b.jsxs)(g,{value:`tab${t+1}`,children:[`Tab `,t+1]},t))}),Array.from({length:6},(e,t)=>(0,b.jsxs)(_,{value:`tab${t+1}`,className:`p-4`,children:[`Content for tab `,t+1,`.`]},t))]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>\r
      <TabsList>\r
        <TabsTrigger value="info">Request details</TabsTrigger>\r
        <TabsTrigger value="history">History</TabsTrigger>\r
        <TabsTrigger value="docs">Documents</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="info" className="p-4">\r
        <p className="text-text-default">Review the primary request information.</p>\r
      </TabsContent>\r
      <TabsContent value="history" className="p-4">\r
        <p className="text-text-default">Review the processing timeline and status history.</p>\r
      </TabsContent>\r
      <TabsContent value="docs" className="p-4">\r
        <p className="text-text-default">Review attached files and submitted materials.</p>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultValue: 'info',
    orientation: 'horizontal',
    activationMode: 'automatic'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('info');
    return <div className="flex flex-col gap-4">\r
        <p className="text-sm text-text-subtle">\r
          Active tab: <strong>{value}</strong>\r
        </p>\r
        <Tabs value={value} onValueChange={setValue}>\r
          <TabsList>\r
            <TabsTrigger value="info">Request details</TabsTrigger>\r
            <TabsTrigger value="history">History</TabsTrigger>\r
            <TabsTrigger value="docs">Documents</TabsTrigger>\r
          </TabsList>\r
          <TabsContent value="info" className="p-4">\r
            Request details content\r
          </TabsContent>\r
          <TabsContent value="history" className="p-4">\r
            History content\r
          </TabsContent>\r
          <TabsContent value="docs" className="p-4">\r
            Documents content\r
          </TabsContent>\r
        </Tabs>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  render: args => <Tabs {...args} className="min-h-48">\r
      <TabsList>\r
        <TabsTrigger value="personal">Personal info</TabsTrigger>\r
        <TabsTrigger value="contact">Contact</TabsTrigger>\r
        <TabsTrigger value="address">Address</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="personal" className="flex-1 p-4">\r
        <p className="text-text-default">Personal information panel</p>\r
      </TabsContent>\r
      <TabsContent value="contact" className="flex-1 p-4">\r
        <p className="text-text-default">Contact information panel</p>\r
      </TabsContent>\r
      <TabsContent value="address" className="flex-1 p-4">\r
        <p className="text-text-default">Address information panel</p>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultValue: 'personal',
    orientation: 'vertical'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Manual Activation',
  render: args => <Tabs {...args}>\r
      <TabsList>\r
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>\r
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>\r
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="tab1" className="p-4">\r
        Focus moves with the arrow keys, but activation waits for Enter or Space.\r
      </TabsContent>\r
      <TabsContent value="tab2" className="p-4">\r
        Tab 2 content\r
      </TabsContent>\r
      <TabsContent value="tab3" className="p-4">\r
        Tab 3 content\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultValue: 'tab1',
    activationMode: 'manual'
  },
  parameters: {
    docs: {
      description: {
        story: 'Manual activation is useful when changing tabs triggers heavier rendering or data loading.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Tab',
  render: () => <Tabs defaultValue="available">\r
      <TabsList>\r
        <TabsTrigger value="available">Available</TabsTrigger>\r
        <TabsTrigger value="disabled" disabled>\r
          Coming soon\r
        </TabsTrigger>\r
        <TabsTrigger value="other">Other</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="available" className="p-4">\r
        Available service content.\r
      </TabsContent>\r
      <TabsContent value="disabled" className="p-4">\r
        Disabled content should not become active.\r
      </TabsContent>\r
      <TabsContent value="other" className="p-4">\r
        Alternative service content.\r
      </TabsContent>\r
    </Tabs>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Keep Mounted',
  render: () => <Tabs defaultValue="tab1">\r
      <TabsList>\r
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>\r
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="tab1" keepMounted className="p-4">\r
        Tab 1 stays in the DOM and is only hidden when inactive.\r
      </TabsContent>\r
      <TabsContent value="tab2" keepMounted className="p-4">\r
        Use \`keepMounted\` when hidden panels need to preserve local state.\r
      </TabsContent>\r
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'When \`keepMounted\` is enabled, inactive panels remain mounted instead of being removed from the DOM.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Many Tabs',
  render: () => <Tabs defaultValue="tab1">\r
      <TabsList>\r
        {Array.from({
        length: 6
      }, (_, index) => <TabsTrigger key={index} value={\`tab\${index + 1}\`}>\r
            Tab {index + 1}\r
          </TabsTrigger>)}\r
      </TabsList>\r
      {Array.from({
      length: 6
    }, (_, index) => <TabsContent key={index} value={\`tab\${index + 1}\`} className="p-4">\r
          Content for tab {index + 1}.\r
        </TabsContent>)}\r
    </Tabs>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Controlled`,`Vertical`,`ManualActivation`,`WithDisabledTab`,`KeepMounted`,`ManyTabs`]}))();export{C as Controlled,S as Default,D as KeepMounted,T as ManualActivation,O as ManyTabs,w as Vertical,E as WithDisabledTab,k as __namedExportsOrder,x as default};