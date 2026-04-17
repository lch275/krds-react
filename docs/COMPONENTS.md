# Component Contracts

## Primitives

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Box` | `div` | `as` | N/A | landmark without meaning |
| `Text` | `p` | `as`, `tone` | N/A | paragraph copy in `span` |
| `Heading` | `h2` | `as`, `size` | N/A | heading level skip |

## UI Controls

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Button` | `button` | `variant`, `size`, `loading` | Enter/Space | navigation without `href` |
| `Link` | `a` | `underline`, `external` | Enter | non-navigation action |
| `Badge` | `span` | `variant` | N/A | status by color only |
| `Alert` | `div` with live region role | `tone`, `title` | N/A | overusing assertive alerts |
| `Spinner` | `span`/icon wrapper | `size`, `label` | N/A | unlabeled loading indicator |
| `SearchBar` | form/search wrapper | `value`, `onSearch` | Enter | replacing full autocomplete contract |
| `FilterChip` | `button` | `selected`, `onRemove` | Enter/Space | hidden state communicated only visually |

## Form Inputs

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Field` | `div` wrapper | `label`, `description`, `error` | N/A | disconnected ids |
| `Input` | `input` | native input props | native | no label |
| `Textarea` | `textarea` | native textarea props | native | no resize policy awareness |
| `Select` | `select` | native select props | native | custom dropdown without full a11y |
| `Checkbox` | `input[type=checkbox]` | `checked`, `indeterminate` | Space | single-select misuse |
| `Radio` | `input[type=radio]` | `checked`, `name` | Arrow keys in group | checkbox semantics for exclusive choice |
| `Switch` | `button[role=switch]` | `checked`, `disabled` | Enter/Space | submit control usage |
| `DateInput` | `input` | `value`, `min`, `max` | native | ambiguous date format |
| `FileUpload` | file input wrapper | `accept`, `multiple` | native | drag-drop affordance without input fallback |

## Data and Navigation

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Table` | `table` | `columns`, `rows`, `caption` | native table nav | layout-only tables |
| `Breadcrumb` | `nav > ol` | `items` | Tab/Enter | current page as clickable link |
| `Pagination` | `nav` | `page`, `count`, `onChange` | Tab/Enter | too many pages without truncation |
| `StepIndicator` | ordered/list structure | `steps`, `currentStep` | Tab/Enter for links | using as progress bar substitute |
| `InPageNavigation` | section nav | `items`, `activeId` | Tab/Enter | broken anchor targets |
| `SideNavigation` | nested nav list | `items`, `currentKey` | Tab/Enter | using for unrelated actions |
| `MainMenu` | global nav | `items`, `activeKey` | Tab/Enter/Escape where relevant | mixing app actions and site navigation |

## Feedback, Help, Layout, Overlays

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Toast` | live region item | `open`, `tone`, `onClose` | Escape optional close | persistent critical errors |
| `Snackbar` | live region item | `open`, `action` | Tab/Enter | long-form messaging |
| `EmptyState` | section/container | `title`, `description`, `action` | native | replacing loading or error state |
| `ProgressBar` | `div[role=progressbar]` | `value`, `max` | N/A | indeterminate/ determinate confusion |
| `Skeleton` | presentational block | `lines`, `shape` | N/A | exposing to screen reader as content |
| `Tooltip` | floating description | `content`, `placement` | focus/hover/Escape | essential information only in tooltip |
| `ContextualHelp` | help trigger + content | `title`, `content` | Enter/Space/Escape | replacing visible instructions |
| `Header` | `header` | `brand`, `actions`, `navigation` | native | duplicating masthead semantics |
| `Footer` | `footer` | `links`, `meta` | native | using as secondary nav dump |
| `Dialog` | `role=dialog` | `open`, `onOpenChange` | Escape, Tab cycle | missing title/focus restoration |
| `Tabs` | `tablist/tab/tabpanel` | `value`, `onValueChange` | Arrow/Home/End | unrelated content grouping |
| `Accordion` | disclosure pattern | `items`, `type` | Enter/Space | hidden critical info without summary |
| `BottomSheet` | modal sheet | `open`, `onOpenChange` | Escape, focus containment | desktop-only overflow handling |

## Identity and Patterns

| Component | Default semantic | Key props | Keyboard contract | Misuse to avoid |
| --- | --- | --- | --- | --- |
| `Masthead` | top identity banner | `serviceName`, `actions` | native | replacing full header |
| `Identifier` | site identity block | `orgName`, `links` | native | using as footer substitute only |
| `ConsentSection` | section/group | `items`, `summary` | native checkbox behavior | bundling unrelated consents |
| `FilterPanel` | filter region | `title`, `actions` | native | filters without reset/apply clarity |
| `ResultSummary` | summary region | `count`, `query`, `filters` | N/A | using as empty state |
| `ResultList` | list/section | `items`, `renderItem` | native | data table replacement for tabular content |
