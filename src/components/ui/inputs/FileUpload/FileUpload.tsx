import {
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type DragEvent,
} from 'react'
import { Button } from '@/components/ui/Button/Button'
import { useFieldControlProps } from '@/components/ui/inputs/shared/useFieldControlProps'
import { useControllable } from '@/hooks/useControllable'
import { cn } from '@/utils/cn'

type FileUploadProps = {
  files?: File[]
  defaultFiles?: File[]
  onFilesChange?: (files: File[]) => void
  invalid?: boolean
  dragAndDrop?: boolean
  buttonLabel?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'value' | 'defaultValue' | 'onChange'>

function mergeFiles(nextFiles: FileList | null, multiple: boolean) {
  const list = Array.from(nextFiles ?? [])
  return multiple ? list : list.slice(0, 1)
}

function FileUpload({
  files,
  defaultFiles = [],
  onFilesChange,
  invalid,
  dragAndDrop = false,
  buttonLabel = 'Choose file',
  className,
  disabled,
  required,
  id,
  multiple,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedByProp,
  ...rest
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useControllable<File[]>(
    files,
    defaultFiles,
    onFilesChange
  )
  const { hasError, isDisabled, isRequired, inputId, labelledBy, describedBy } =
    useFieldControlProps({
      id,
      disabled,
      required,
      invalid,
      ariaLabelledBy,
      ariaDescribedBy: ariaDescribedByProp,
    })

  const fileIds = useMemo(
    () => selectedFiles.map((_, index) => `${inputId ?? 'file-upload'}-file-${index}`),
    [inputId, selectedFiles]
  )
  const fallbackLabelId = useId()

  const updateFiles = (nextFiles: FileList | null) => {
    setSelectedFiles(mergeFiles(nextFiles, Boolean(multiple)))
  }

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    updateFiles(event.target.files)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (isDisabled) {
      return
    }
    setIsDragging(false)
    updateFiles(event.dataTransfer.files)
  }

  return (
    <div
      data-slot="file-upload"
      data-state={hasError ? 'error' : selectedFiles.length > 0 ? 'filled' : 'idle'}
      className={cn('grid gap-3', className)}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className="sr-only"
        disabled={isDisabled}
        required={isRequired}
        multiple={multiple}
        aria-invalid={hasError || undefined}
        aria-required={isRequired || undefined}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy ?? fallbackLabelId}
        aria-label={ariaLabel}
        onChange={handleSelect}
        {...rest}
      />

      <div
        data-slot="file-upload-dropzone"
        onDragOver={(event) => {
          if (!dragAndDrop || isDisabled) {
            return
          }
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={dragAndDrop ? handleDrop : undefined}
        className={cn(
          'rounded-card border border-dashed p-4',
          'bg-bg-default transition-colors',
          hasError && 'border-border-error',
          isDragging && 'border-primary bg-primary-subtle',
          isDisabled && 'cursor-not-allowed opacity-60'
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            disabled={isDisabled}
            onClick={() => inputRef.current?.click()}
          >
            {buttonLabel}
          </Button>
          <span id={fallbackLabelId} className="text-sm text-text-subtle">
            {dragAndDrop ? 'Drag files here or choose from device.' : 'Choose a file from device.'}
          </span>
        </div>
      </div>

      {selectedFiles.length > 0 &&
        (multiple ? (
          <ul data-slot="file-upload-list" className="grid gap-2">
            {selectedFiles.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-3 rounded-control border border-border-default px-3 py-2"
              >
                <span id={fileIds[index]} className="min-w-0 truncate text-sm text-text-default">
                  {file.name}
                </span>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  aria-describedby={fileIds[index]}
                  onClick={() =>
                    setSelectedFiles(selectedFiles.filter((_, fileIndex) => fileIndex !== index))
                  }
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-between gap-3 rounded-control border border-border-default px-3 py-2">
            <p id={fileIds[0]} className="min-w-0 truncate text-sm text-text-default">
              {selectedFiles[0].name}
            </p>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              aria-describedby={fileIds[0]}
              onClick={() => setSelectedFiles([])}
            >
              Remove
            </Button>
          </div>
        ))}
    </div>
  )
}

export { FileUpload }
export type { FileUploadProps }
