import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{n as r,t as i}from"./cn-BoL-pa2N.js";import{t as a}from"./jsx-runtime-4HHWW5MW.js";function o(e){return(0,f.jsx)(`thead`,{"data-slot":`table-header`,className:`bg-bg-subtle`,...e})}function s(e){return(0,f.jsx)(`tbody`,{"data-slot":`table-body`,...e})}function c(e){return(0,f.jsx)(`tr`,{"data-slot":`table-row`,className:`border-b border-border-default last:border-b-0`,...e})}function l({className:e,numeric:t=!1,scope:n=`col`,...r}){return(0,f.jsx)(`th`,{"data-slot":`table-head`,scope:n,className:i(`px-4 py-3 font-semibold text-text-default`,t?`text-right`:`text-left`,e),...r})}function u({className:e,numeric:t=!1,children:n,...r}){return(0,f.jsx)(`td`,{"data-slot":`table-cell`,className:i(`px-4 py-3 align-top text-text-subtle`,t?`text-right tabular-nums`:`text-left`,e),...r,children:n??`-`})}var d,f,p,m=t((()=>{d=e(n(),1),r(),f=a(),p=(0,d.forwardRef)(({caption:e,className:t,children:n,...r},a)=>(0,f.jsx)(`div`,{"data-slot":`table-wrap`,className:`w-full overflow-x-auto rounded-card border border-border-default`,children:(0,f.jsxs)(`table`,{ref:a,"data-slot":`table`,className:i(`min-w-full border-collapse text-left text-sm`,t),...r,children:[e&&(0,f.jsx)(`caption`,{className:`sr-only`,children:e}),n]})})),p.displayName=`Table`,p.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{caption:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},o.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},s.__docgenInfo={description:``,methods:[],displayName:`TableBody`},c.__docgenInfo={description:``,methods:[],displayName:`TableRow`},l.__docgenInfo={description:``,methods:[],displayName:`TableHead`,props:{numeric:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},scope:{defaultValue:{value:`'col'`,computed:!1},required:!1}}},u.__docgenInfo={description:``,methods:[],displayName:`TableCell`,props:{numeric:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),h,g,_,v;t((()=>{m(),h=a(),g={title:`Data/Table`,component:p,tags:[`autodocs`]},_={render:()=>(0,h.jsxs)(p,{caption:`Service status`,children:[(0,h.jsx)(o,{children:(0,h.jsxs)(c,{children:[(0,h.jsx)(l,{children:`Service`}),(0,h.jsx)(l,{children:`Owner`}),(0,h.jsx)(l,{numeric:!0,children:`Count`})]})}),(0,h.jsxs)(s,{children:[(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{children:`Application review`}),(0,h.jsx)(u,{children:`Policy team`}),(0,h.jsx)(u,{numeric:!0,children:`128`})]}),(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{children:`Citizen support`}),(0,h.jsx)(u,{children:`Support center`}),(0,h.jsx)(u,{numeric:!0,children:`84`})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Table caption="Service status">\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Service</TableHead>\r
          <TableHead>Owner</TableHead>\r
          <TableHead numeric>Count</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>Application review</TableCell>\r
          <TableCell>Policy team</TableCell>\r
          <TableCell numeric>128</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>Citizen support</TableCell>\r
          <TableCell>Support center</TableCell>\r
          <TableCell numeric>84</TableCell>\r
        </TableRow>\r
      </TableBody>\r
    </Table>
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};