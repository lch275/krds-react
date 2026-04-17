import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./react-dom-Dt-mlgBs.js";import{n as i,t as a}from"./cn-BoL-pa2N.js";import{t as o}from"./jsx-runtime-4HHWW5MW.js";import{n as s,t as c}from"./Button-CdI2ZtSv.js";import{n as l,t as u}from"./useControllable-BQ3VKl8y.js";import{n as d,r as f,t as p}from"./scroll-lock-BsrFBFij.js";import{a as m,i as h,t as g}from"./Field-DyWV1_DR.js";import{n as _,t as v}from"./Input-CUW0sdRG.js";function y(e){return Array.from(e.querySelectorAll(C)).filter(e=>!e.closest(`[inert]`)&&b(e))}function b(e){return!e.hidden&&getComputedStyle(e).display!==`none`&&getComputedStyle(e).visibility!==`hidden`}function x(e){return t=>{if(t.key!==`Tab`)return;let n=y(e);if(n.length===0){t.preventDefault();return}let r=n[0],i=n[n.length-1],a=document.activeElement;t.shiftKey?(a===r||!e.contains(a))&&(t.preventDefault(),i.focus()):(a===i||!e.contains(a))&&(t.preventDefault(),r.focus())}}function S(e){let t=y(e);t.length>0?t[0].focus():(e.hasAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.focus())}var C,w=t((()=>{C=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`,`[contenteditable="true"]`,`details > summary`].join(`, `)}));function T(e,t){let n=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!t)return;let r=e.current;if(!r)return;n.current=document.activeElement;let i=setTimeout(()=>{S(r)},0),a=x(r);return document.addEventListener(`keydown`,a),()=>{clearTimeout(i),document.removeEventListener(`keydown`,a),n.current&&document.contains(n.current)&&n.current.focus()}},[t,e])}var E,D=t((()=>{E=e(n(),1),w()}));function O(){let e=(0,L.useContext)(B);if(!e)throw Error(`[KRDS] Dialog 서브컴포넌트는 Dialog 내부에서 사용해야 합니다.`);return e}function k({open:e,defaultOpen:t=!1,onOpenChange:n,children:r}){let i=(0,L.useId)(),a=`dialog-title-${i}`,o=`dialog-desc-${i}`,[s,c]=l(e,t,n);return(0,z.jsx)(B.Provider,{value:{open:s,onOpenChange:c,titleId:a,descriptionId:o},children:r})}function A({children:e}){let{onOpenChange:t}=O();return(0,z.jsx)(`span`,{"data-slot":`dialog-trigger`,style:{display:`contents`},onClick:()=>t(!0),children:e})}function j({children:e,className:t,...n}){let{titleId:r}=O();return(0,z.jsx)(`h2`,{id:r,"data-slot":`dialog-title`,className:a(`font-semibold text-xl text-text-default`,t),...n,children:e})}function M({children:e,className:t,...n}){let{descriptionId:r}=O();return(0,z.jsx)(`p`,{id:r,"data-slot":`dialog-description`,className:a(`text-sm text-text-subtle`,t),...n,children:e})}function N({className:e,children:t,...n}){return(0,z.jsx)(`div`,{"data-slot":`dialog-header`,className:a(`flex flex-col gap-2 p-6 pb-0`,e),...n,children:t})}function P({className:e,children:t,...n}){return(0,z.jsx)(`div`,{"data-slot":`dialog-body`,className:a(`p-6`,e),...n,children:t})}function F({className:e,children:t,...n}){return(0,z.jsx)(`div`,{"data-slot":`dialog-footer`,className:a(`flex items-center justify-end gap-2 p-6 pt-0`,e),...n,children:t})}function I({children:e,className:t,onClick:n,...r}){let{onOpenChange:i}=O();return(0,z.jsx)(`button`,{type:`button`,"data-slot":`dialog-close`,"aria-label":e?void 0:`닫기`,onClick:e=>{i(!1),n?.(e)},className:a(`rounded focus-visible:outline-none focus-visible:ring-3`,`focus-visible:ring-border-focus focus-visible:ring-offset-2`,t),...r,children:e??(0,z.jsx)(`span`,{"aria-hidden":`true`,className:`text-xl leading-none`,children:`×`})})}var L,R,z,B,V,H=t((()=>{L=e(n(),1),R=r(),i(),u(),D(),p(),z=o(),B=(0,L.createContext)(null),V=(0,L.forwardRef)(({children:e,className:t,closeOnOverlayClick:n=!0,"aria-describedby":r,...i},o)=>{let{open:s,onOpenChange:c,titleId:l,descriptionId:u}=O(),p=(0,L.useRef)(null);T(p,s),(0,L.useEffect)(()=>{if(s)return d(),()=>f()},[s]),(0,L.useEffect)(()=>{if(!s)return;let e=e=>{e.key===`Escape`&&(e.stopPropagation(),c(!1))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[s,c]);let m=(0,L.useCallback)(e=>{p.current=e,typeof o==`function`?o(e):o&&(o.current=e)},[o]);return s?(0,R.createPortal)((0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{"data-slot":`dialog-overlay`,"aria-hidden":`true`,className:`fixed inset-0 z-modal bg-bg-overlay`,onClick:n?()=>c(!1):void 0}),(0,z.jsx)(`div`,{ref:m,role:`dialog`,"aria-modal":`true`,"aria-labelledby":l,"aria-describedby":r??u,"data-slot":`dialog-content`,"data-state":s?`open`:`closed`,tabIndex:-1,className:a(`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`,`z-modal w-full max-w-lg`,`bg-bg-default rounded-dialog shadow-modal`,`focus:outline-none`,t),...i,children:e})]}),document.body):null}),V.displayName=`DialogContent`,k.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},A.__docgenInfo={description:``,methods:[],displayName:`DialogTrigger`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},asChild:{required:!1,tsType:{name:`boolean`},description:``}}},V.__docgenInfo={description:``,methods:[],displayName:`DialogContent`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:`배경 클릭으로 닫기 허용 여부 (기본 true)`,defaultValue:{value:`true`,computed:!1}},"aria-describedby":{required:!1,tsType:{name:`string`},description:``}}},j.__docgenInfo={description:``,methods:[],displayName:`DialogTitle`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},M.__docgenInfo={description:``,methods:[],displayName:`DialogDescription`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},N.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`},P.__docgenInfo={description:``,methods:[],displayName:`DialogBody`},F.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`},I.__docgenInfo={description:``,methods:[],displayName:`DialogClose`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),U,W,G,K,q,J,Y,X,Z,Q;t((()=>{U=e(n(),1),H(),s(),m(),_(),W=o(),G={title:`Overlays/Dialog`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`
**Dialog** provides a modal surface with focus management, Escape handling, and labelled content wiring.

## Compound structure
\`\`\`tsx
<Dialog>
  <DialogTrigger><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogClose />
    </DialogHeader>
    <DialogBody>Body content</DialogBody>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

## Accessibility notes
- Uses \`role="dialog"\` and \`aria-modal="true"\`
- Connects \`DialogTitle\` through \`aria-labelledby\`
- Keeps focus inside the dialog while open
- Closes on Escape by default
- Restores focus to the trigger after closing
        `}}},argTypes:{open:{control:`boolean`,description:`Controlled open state.`},defaultOpen:{control:`boolean`,description:`Initial uncontrolled open state.`,table:{defaultValue:{summary:`false`}}}}},K={render:e=>(0,W.jsxs)(k,{...e,children:[(0,W.jsx)(A,{children:(0,W.jsx)(c,{children:`Open dialog`})}),(0,W.jsxs)(V,{children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(j,{children:`Confirm action`}),(0,W.jsx)(I,{})]}),(0,W.jsx)(P,{children:(0,W.jsx)(M,{children:`Do you want to continue? This action cannot be undone.`})}),(0,W.jsxs)(F,{children:[(0,W.jsx)(I,{children:(0,W.jsx)(c,{variant:`secondary`,children:`Cancel`})}),(0,W.jsx)(c,{variant:`primary`,children:`Confirm`})]})]})]}),args:{defaultOpen:!1}},q={render:()=>{let[e,t]=(0,U.useState)(!1);return(0,W.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,W.jsxs)(`div`,{className:`flex gap-2`,children:[(0,W.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,W.jsx)(c,{variant:`secondary`,onClick:()=>t(!1),children:`Close`})]}),(0,W.jsxs)(`p`,{className:`text-sm text-text-subtle`,children:[`State: `,e?`Open`:`Closed`]}),(0,W.jsx)(k,{open:e,onOpenChange:t,children:(0,W.jsxs)(V,{children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(j,{children:`Controlled dialog`}),(0,W.jsx)(I,{})]}),(0,W.jsx)(P,{children:(0,W.jsx)(M,{children:`This dialog is controlled by an external React state value.`})}),(0,W.jsx)(F,{children:(0,W.jsx)(c,{onClick:()=>t(!1),children:`Close`})})]})})]})}},J={name:`Delete Confirmation`,render:()=>(0,W.jsxs)(k,{children:[(0,W.jsx)(A,{children:(0,W.jsx)(c,{variant:`danger`,children:`Delete request`})}),(0,W.jsxs)(V,{closeOnOverlayClick:!1,children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(j,{children:`Delete request`}),(0,W.jsx)(I,{})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(M,{children:`Are you sure you want to delete request '2024-KR-001234'?`}),(0,W.jsx)(`p`,{className:`mt-2 text-sm text-status-error`,children:`Deleted requests cannot be restored.`})]}),(0,W.jsxs)(F,{children:[(0,W.jsx)(I,{children:(0,W.jsx)(c,{variant:`secondary`,children:`Cancel`})}),(0,W.jsx)(c,{variant:`danger`,children:`Delete`})]})]})]}),parameters:{docs:{description:{story:"Use `closeOnOverlayClick={false}` when accidental dismissal is too risky."}}}},Y={name:`Form Dialog`,render:()=>(0,W.jsxs)(k,{children:[(0,W.jsx)(A,{children:(0,W.jsx)(c,{children:`Edit request`})}),(0,W.jsxs)(V,{children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(j,{children:`Edit request details`}),(0,W.jsx)(I,{})]}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,W.jsxs)(g,{required:!0,children:[(0,W.jsx)(h,{children:`Name`}),(0,W.jsx)(v,{defaultValue:`Kim Minjun`})]}),(0,W.jsxs)(g,{required:!0,children:[(0,W.jsx)(h,{children:`Contact`}),(0,W.jsx)(v,{type:`tel`,defaultValue:`010-1234-5678`})]})]})}),(0,W.jsxs)(F,{children:[(0,W.jsx)(I,{children:(0,W.jsx)(c,{variant:`secondary`,children:`Cancel`})}),(0,W.jsx)(c,{variant:`primary`,children:`Save`})]})]})]})},X={name:`Long Content`,render:()=>(0,W.jsxs)(k,{children:[(0,W.jsx)(A,{children:(0,W.jsx)(c,{children:`Open privacy policy`})}),(0,W.jsxs)(V,{className:`max-h-[80vh] overflow-y-auto`,children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(j,{children:`Privacy policy`}),(0,W.jsx)(I,{})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(M,{children:`This policy becomes effective on January 1, 2024.`}),Array.from({length:10},(e,t)=>(0,W.jsxs)(`div`,{className:`mt-4`,children:[(0,W.jsxs)(`h3`,{className:`font-semibold text-text-default`,children:[`Section `,t+1]}),(0,W.jsx)(`p`,{className:`mt-1 text-sm text-text-subtle`,children:`This section explains what personal information is collected, why it is processed, and how long it is retained by the service.`})]},t))]}),(0,W.jsxs)(F,{children:[(0,W.jsx)(I,{children:(0,W.jsx)(c,{variant:`secondary`,children:`Close`})}),(0,W.jsx)(c,{variant:`primary`,children:`Agree`})]})]})]})},Z={name:`Overlay Close Disabled`,render:()=>(0,W.jsxs)(k,{children:[(0,W.jsx)(A,{children:(0,W.jsx)(c,{children:`Open critical action`})}),(0,W.jsxs)(V,{closeOnOverlayClick:!1,children:[(0,W.jsx)(N,{children:(0,W.jsx)(j,{children:`Important confirmation`})}),(0,W.jsx)(P,{children:(0,W.jsx)(M,{children:`Clicking the overlay will not dismiss this dialog. Close it with Escape or one of the visible actions.`})}),(0,W.jsxs)(F,{children:[(0,W.jsx)(I,{children:(0,W.jsx)(c,{variant:`secondary`,children:`Cancel`})}),(0,W.jsx)(c,{children:`Confirm`})]})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
      <DialogTrigger>\r
        <Button>Open dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Confirm action</DialogTitle>\r
          <DialogClose />\r
        </DialogHeader>\r
        <DialogBody>\r
          <DialogDescription>\r
            Do you want to continue? This action cannot be undone.\r
          </DialogDescription>\r
        </DialogBody>\r
        <DialogFooter>\r
          <DialogClose>\r
            <Button variant="secondary">Cancel</Button>\r
          </DialogClose>\r
          <Button variant="primary">Confirm</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>,
  args: {
    defaultOpen: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col gap-4">\r
        <div className="flex gap-2">\r
          <Button onClick={() => setOpen(true)}>Open</Button>\r
          <Button variant="secondary" onClick={() => setOpen(false)}>\r
            Close\r
          </Button>\r
        </div>\r
        <p className="text-sm text-text-subtle">State: {open ? 'Open' : 'Closed'}</p>\r
        <Dialog open={open} onOpenChange={setOpen}>\r
          <DialogContent>\r
            <DialogHeader>\r
              <DialogTitle>Controlled dialog</DialogTitle>\r
              <DialogClose />\r
            </DialogHeader>\r
            <DialogBody>\r
              <DialogDescription>\r
                This dialog is controlled by an external React state value.\r
              </DialogDescription>\r
            </DialogBody>\r
            <DialogFooter>\r
              <Button onClick={() => setOpen(false)}>Close</Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Delete Confirmation',
  render: () => <Dialog>\r
      <DialogTrigger>\r
        <Button variant="danger">Delete request</Button>\r
      </DialogTrigger>\r
      <DialogContent closeOnOverlayClick={false}>\r
        <DialogHeader>\r
          <DialogTitle>Delete request</DialogTitle>\r
          <DialogClose />\r
        </DialogHeader>\r
        <DialogBody>\r
          <DialogDescription>\r
            Are you sure you want to delete request &apos;2024-KR-001234&apos;?\r
          </DialogDescription>\r
          <p className="mt-2 text-sm text-status-error">\r
            Deleted requests cannot be restored.\r
          </p>\r
        </DialogBody>\r
        <DialogFooter>\r
          <DialogClose>\r
            <Button variant="secondary">Cancel</Button>\r
          </DialogClose>\r
          <Button variant="danger">Delete</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`closeOnOverlayClick={false}\` when accidental dismissal is too risky.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Form Dialog',
  render: () => <Dialog>\r
      <DialogTrigger>\r
        <Button>Edit request</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Edit request details</DialogTitle>\r
          <DialogClose />\r
        </DialogHeader>\r
        <DialogBody>\r
          <div className="flex flex-col gap-4">\r
            <Field required>\r
              <FieldLabel>Name</FieldLabel>\r
              <Input defaultValue="Kim Minjun" />\r
            </Field>\r
            <Field required>\r
              <FieldLabel>Contact</FieldLabel>\r
              <Input type="tel" defaultValue="010-1234-5678" />\r
            </Field>\r
          </div>\r
        </DialogBody>\r
        <DialogFooter>\r
          <DialogClose>\r
            <Button variant="secondary">Cancel</Button>\r
          </DialogClose>\r
          <Button variant="primary">Save</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <Dialog>\r
      <DialogTrigger>\r
        <Button>Open privacy policy</Button>\r
      </DialogTrigger>\r
      <DialogContent className="max-h-[80vh] overflow-y-auto">\r
        <DialogHeader>\r
          <DialogTitle>Privacy policy</DialogTitle>\r
          <DialogClose />\r
        </DialogHeader>\r
        <DialogBody>\r
          <DialogDescription>This policy becomes effective on January 1, 2024.</DialogDescription>\r
          {Array.from({
          length: 10
        }, (_, index) => <div key={index} className="mt-4">\r
              <h3 className="font-semibold text-text-default">Section {index + 1}</h3>\r
              <p className="mt-1 text-sm text-text-subtle">\r
                This section explains what personal information is collected, why it is\r
                processed, and how long it is retained by the service.\r
              </p>\r
            </div>)}\r
        </DialogBody>\r
        <DialogFooter>\r
          <DialogClose>\r
            <Button variant="secondary">Close</Button>\r
          </DialogClose>\r
          <Button variant="primary">Agree</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Overlay Close Disabled',
  render: () => <Dialog>\r
      <DialogTrigger>\r
        <Button>Open critical action</Button>\r
      </DialogTrigger>\r
      <DialogContent closeOnOverlayClick={false}>\r
        <DialogHeader>\r
          <DialogTitle>Important confirmation</DialogTitle>\r
        </DialogHeader>\r
        <DialogBody>\r
          <DialogDescription>\r
            Clicking the overlay will not dismiss this dialog. Close it with Escape or one\r
            of the visible actions.\r
          </DialogDescription>\r
        </DialogBody>\r
        <DialogFooter>\r
          <DialogClose>\r
            <Button variant="secondary">Cancel</Button>\r
          </DialogClose>\r
          <Button>Confirm</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Controlled`,`DeleteConfirm`,`FormDialog`,`LongContent`,`WithoutOverlayClose`]}))();export{q as Controlled,K as Default,J as DeleteConfirm,Y as FormDialog,X as LongContent,Z as WithoutOverlayClose,Q as __namedExportsOrder,G as default};