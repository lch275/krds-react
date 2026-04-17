const buttonVariants = [
  { label: 'Primary button', props: { variant: 'primary' as const } },
  { label: 'Secondary button', props: { variant: 'secondary' as const } },
  { label: 'Ghost button', props: { variant: 'ghost' as const } },
  { label: 'Danger button', props: { variant: 'danger' as const } },
]

const badgeVariants = [
  { label: 'Default', props: undefined },
  { label: 'Primary', props: { variant: 'primary' as const } },
  { label: 'Success', props: { variant: 'success' as const } },
  { label: 'Warning', props: { variant: 'warning' as const } },
  { label: 'Error', props: { variant: 'error' as const } },
  { label: 'Info', props: { variant: 'info' as const } },
]

const alertExamples = [
  {
    title: 'Info',
    description: 'General information message.',
    props: { variant: 'info' as const },
  },
  {
    title: 'Success',
    description: 'The action completed successfully.',
    props: { variant: 'success' as const },
  },
  {
    title: 'Warning',
    description: 'This action cannot be undone.',
    props: { variant: 'warning' as const },
  },
  {
    title: 'Error',
    description: 'An error has occurred.',
    props: { variant: 'error' as const, live: 'assertive' as const },
  },
]

const agencyOptions = [
  { value: '', label: 'Please select' },
  { value: 'molit', label: 'Ministry of Land, Infrastructure and Transport' },
  { value: 'mois', label: 'Ministry of the Interior and Safety' },
]

export { agencyOptions, alertExamples, badgeVariants, buttonVariants }
