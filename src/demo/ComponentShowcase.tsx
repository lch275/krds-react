import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Badge,
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  Box,
  Breadcrumb,
  Button,
  Checkbox,
  ConsentSection,
  ContextualHelp,
  DateInput,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  EmptyState,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FileUpload,
  FilterChip,
  FilterPanel,
  Footer,
  Header,
  Identifier,
  InPageNavigation,
  Input,
  Link,
  MainMenu,
  Masthead,
  Pagination,
  ProgressBar,
  Radio,
  RadioGroup,
  ResultList,
  ResultSummary,
  SearchBar,
  Select,
  SideNavigation,
  Skeleton,
  Snackbar,
  Spinner,
  StepIndicator,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  Toast,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/index'
import { Section } from '@/demo/Section'
import {
  agencyOptions,
  alertExamples,
  badgeVariants,
  buttonVariants,
} from '@/demo/showcase-data'

function ComponentShowcase() {
  const [loading, setLoading] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  return (
    <div id="main-content" className="space-y-12">
      <Section title="Identity">
        <div className="overflow-hidden rounded-card border border-border-default">
          <Masthead />
          <div className="p-4">
            <Identifier organization="Ministry of Health and Welfare" />
          </div>
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-wrap gap-3">
          {buttonVariants.map(({ label, props }) => (
            <Button key={label} {...props}>
              {label}
            </Button>
          ))}
          <Button as="a" href="#" variant="link">
            Link button
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true)
              setTimeout(() => setLoading(false), 2000)
            }}
          >
            {loading ? 'Loading...' : 'Loading test'}
          </Button>
        </div>
      </Section>

      <Section title="Badge & Spinner">
        <div className="flex flex-wrap items-center gap-3">
          {badgeVariants.map(({ label, props }) => (
            <Badge key={label} {...props}>
              {label}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Spinner size="sm" label="Small loading" />
          <Spinner size="md" label="Medium loading" />
          <Spinner size="lg" label="Large loading" />
        </div>
      </Section>

      <Section title="Alert">
        {alertExamples.map(({ title, description, props }) => (
          <Alert key={title} title={title} {...props}>
            {description}
          </Alert>
        ))}
      </Section>

      <Section title="Form Controls">
        <Field required>
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Hong Gil-dong" />
          <FieldDescription>Enter your real name.</FieldDescription>
        </Field>

        <Field invalid>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="example@gov.kr" />
          <FieldError>Enter a valid email address.</FieldError>
        </Field>

        <Field>
          <FieldLabel>Agency</FieldLabel>
          <Select>
            {agencyOptions.map((option) => (
              <option key={option.value || 'placeholder'} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field>
          <FieldLabel>Summary</FieldLabel>
          <Textarea placeholder="Describe your request." rows={4} />
        </Field>

        <Field>
          <FieldLabel>Date</FieldLabel>
          <DateInput />
          <FieldDescription>Use the date field for a single day selection.</FieldDescription>
        </Field>

        <div className="space-y-2">
          <Checkbox defaultChecked>Agree to the privacy policy.</Checkbox>
          <Checkbox>Agree to receive updates.</Checkbox>
          <Checkbox checked="indeterminate">Select all</Checkbox>
        </div>

        <RadioGroup defaultValue="personal" aria-label="Purpose">
          <Radio value="personal">Personal</Radio>
          <Radio value="business">Business</Radio>
          <Radio value="other" disabled>
            Other
          </Radio>
        </RadioGroup>

        <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled}>
          Notifications {notificationsEnabled ? 'On' : 'Off'}
        </Switch>
      </Section>

      <Section title="Consent Pattern">
        <ConsentSection
          title="Privacy consent"
          description="Review the required terms before you submit the application."
        >
          <Checkbox defaultChecked>Agree to the collection and use of personal data.</Checkbox>
          <Checkbox>Agree to receive service updates.</Checkbox>
        </ConsentSection>
      </Section>

      <Section title="Dialog">
        <Dialog>
          <DialogTrigger>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Privacy policy</DialogTitle>
              <DialogDescription>Review the policy before you continue.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <Text>This service collects only the minimum personal information needed.</Text>
            </DialogBody>
            <DialogFooter>
              <DialogClose>
                <Button variant="secondary">Close</Button>
              </DialogClose>
              <Button>Agree</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4">
            <Text>KRDS-based components keep interaction and accessibility consistent.</Text>
          </TabsContent>
          <TabsContent value="details" className="p-4">
            <Text>Built with React 19, TypeScript 6, and Tailwind CSS 4.</Text>
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Link, Breadcrumb & Pagination">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="https://www.krds.go.kr" target="_blank" rel="noreferrer">
            KRDS official site
          </Link>
          <Link href="#main-content" underline="hover" tone="subtle">
            Jump to content
          </Link>
          <Link disabled>Disabled link</Link>
        </div>

        <Breadcrumb
          items={[
            { label: 'Home', href: '#' },
            { label: 'Design system', href: '#' },
            { label: 'Components', href: '#' },
            { label: 'Overview' },
          ]}
        />

        <Pagination currentPage={3} totalPages={9} />
      </Section>

      <Section title="Step, Side & In-page Navigation">
        <StepIndicator
          currentStep={2}
          completedSteps={[1]}
          steps={[
            { label: 'Check notices' },
            { label: 'Applicant details' },
            { label: 'Review' },
            { label: 'Submit' },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <SideNavigation
            title="Citizen service"
            items={[
              { label: 'Overview', href: '#', current: true },
              {
                label: 'Applications',
                children: [
                  { label: 'New request', href: '#' },
                  { label: 'Saved drafts', href: '#' },
                ],
              },
              { label: 'Status', href: '#' },
            ]}
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_16rem]">
            <div className="space-y-6">
              {['summary', 'eligibility', 'process'].map((id) => (
                <section
                  key={id}
                  id={id}
                  tabIndex={-1}
                  className="rounded-card border border-border-default p-4"
                >
                  <h3 className="mb-2 text-lg font-semibold text-text-default">
                    {id === 'summary'
                      ? 'Summary'
                      : id === 'eligibility'
                        ? 'Eligibility'
                        : 'Process'}
                  </h3>
                  <Text>
                    Structured section content lets users move quickly through long pages.
                  </Text>
                </section>
              ))}
            </div>
            <InPageNavigation
              items={[
                { id: 'summary', label: 'Summary' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'process', label: 'Process' },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Accordion">
        <Accordion type="multiple" defaultValue={['guidelines']}>
          <AccordionItem value="guidelines">
            <AccordionHeader>
              <AccordionTrigger>Usage guidelines</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              Group related content into short, scannable sections and keep trigger labels clear.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accessibility">
            <AccordionHeader>
              <AccordionTrigger>Accessibility</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              Use heading structure, button semantics, and expanded state announcements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="File Upload">
        <Field>
          <FieldLabel>Attachment</FieldLabel>
          <FileUpload multiple dragAndDrop accept=".pdf,.png,.jpg" />
          <FieldDescription>Upload a PDF or image file for review.</FieldDescription>
        </Field>
      </Section>

      <Section title="Search, Filters & Results">
        <SearchBar
          suggestions={[
            { label: 'Disability allowance' },
            { label: 'Housing support' },
            { label: 'Childcare application' },
          ]}
          onSearch={() => undefined}
        />

        <FilterPanel actions={<Button variant="secondary">Reset</Button>}>
          <Field>
            <FieldLabel>Keyword</FieldLabel>
            <Input placeholder="Search keyword" />
          </Field>
          <Field>
            <FieldLabel>Category</FieldLabel>
            <Select>
              <option>All</option>
              <option>Benefits</option>
              <option>Applications</option>
            </Select>
          </Field>
        </FilterPanel>

        <ResultSummary
          total={24}
          query="housing"
          actions={
            <div className="flex flex-wrap gap-2">
              <FilterChip selected>Benefits</FilterChip>
              <FilterChip removable>Housing</FilterChip>
            </div>
          }
        />

        <ResultList
          items={[
            {
              title: 'Housing support application',
              href: '#',
              description: 'Apply for housing support programs and review eligibility.',
              metadata: 'Updated 2026-04-10',
            },
            {
              title: 'Housing subsidy guide',
              href: '#',
              description: 'Read the latest subsidy guidance and required documents.',
              metadata: 'Updated 2026-03-28',
            },
          ]}
        />
      </Section>

      <Section title="Table, Tooltip & Help">
        <Table caption="Service status table">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Service</TableHead>
              <TableHead scope="col">Owner</TableHead>
              <TableHead scope="col" numeric>
                Requests
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Application review</TableCell>
              <TableCell>Policy team</TableCell>
              <TableCell numeric>128</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Citizen support</TableCell>
              <TableCell>Support center</TableCell>
              <TableCell numeric>84</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger>
              <button
                type="button"
                className="rounded-control border border-border-default px-3 py-2"
              >
                Hover help
              </button>
            </TooltipTrigger>
            <TooltipContent>Short supporting guidance for the related control.</TooltipContent>
          </Tooltip>

          <ContextualHelp title="Why this matters" linkHref="https://www.krds.go.kr">
            Use contextual help for richer supporting content that users request explicitly.
          </ContextualHelp>
        </div>
      </Section>

      <Section title="Header, Footer & Feedback">
        <div className="overflow-hidden rounded-card border border-border-default">
          <MainMenu
            items={[
              {
                label: 'Services',
                current: true,
                children: [
                  { label: 'Housing support', href: '#', description: 'Find housing programs.' },
                  { label: 'Childcare', href: '#', description: 'Apply for childcare services.' },
                ],
              },
              { label: 'News', href: '#' },
              { label: 'Support', href: '#' },
            ]}
          />
          <Header
            serviceName="Citizen service"
            utilityLinks={[
              { label: 'Login', href: '#' },
              { label: 'Support', href: '#' },
            ]}
            navigation={[
              { label: 'Overview', href: '#' },
              { label: 'Applications', href: '#' },
              { label: 'Status', href: '#' },
            ]}
          />
          <div className="space-y-4 px-6 py-6">
            <ProgressBar label="Application processing" value={62} />
            <div className="grid gap-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <EmptyState
              title="No saved drafts"
              description="Start a new request or adjust the current filters."
              actions={<Button>Start request</Button>}
            />
            <Toast duration={0}>Saved successfully.</Toast>
            <Snackbar title="Retry upload" actionLabel="Retry">
              The previous upload failed. Try again.
            </Snackbar>
          </div>
          <Footer
            organization="Ministry service portal"
            address="Sejong-daero, Seoul"
            utilityLinks={[
              { label: 'Directions', href: '#' },
              { label: 'Contact us', href: '#' },
            ]}
            policyLinks={[
              { label: 'Privacy policy', href: '#' },
              { label: 'Terms of use', href: '#' },
            ]}
            copyright="© 2026 Ministry service portal."
          />
        </div>
      </Section>

      <Section title="Bottom Sheet">
        <BottomSheet>
          <BottomSheetTrigger>
            <Button>Open bottom sheet</Button>
          </BottomSheetTrigger>
          <BottomSheetContent>
            <BottomSheetHeader>
              <BottomSheetTitle>Select a contact channel</BottomSheetTitle>
              <BottomSheetDescription>
                Bottom sheets are useful for focused mobile selection tasks.
              </BottomSheetDescription>
            </BottomSheetHeader>
            <BottomSheetBody>
              <div className="grid gap-2">
                <Button variant="secondary">Phone consultation</Button>
                <Button variant="secondary">Email response</Button>
                <Button variant="secondary">Visit center</Button>
              </div>
            </BottomSheetBody>
            <BottomSheetFooter>
              <BottomSheetClose>
                <Button variant="ghost">Close</Button>
              </BottomSheetClose>
            </BottomSheetFooter>
          </BottomSheetContent>
        </BottomSheet>
      </Section>
    </div>
  )
}

function ComponentShowcasePage() {
  return (
    <Box as="main" className="min-h-screen bg-bg-default px-6 py-12">
      <a href="#main-content" className="sr-only-focusable">
        Skip to content
      </a>

      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-2">
          <Text variant="label" className="text-primary">
            KRDS React
          </Text>
          <h1 className="text-4xl font-bold text-text-default">Design system components</h1>
          <Text variant="body-lg" className="text-text-subtle">
            A React component library aligned with KRDS patterns and accessibility guidance.
          </Text>
        </header>

        <ComponentShowcase />
      </div>
    </Box>
  )
}

export { ComponentShowcasePage, ComponentShowcase }
