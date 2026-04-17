import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { cn } from '@/utils/cn'

type SearchBarSuggestion = {
  id?: string
  label: string
}

type SearchBarProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onSearch?: (value: string) => void
  suggestions?: SearchBarSuggestion[]
  placeholder?: string
  className?: string
  ariaLabel?: string
}

function SearchBar({
  value,
  defaultValue = '',
  onValueChange,
  onSearch,
  suggestions = [],
  placeholder = 'Search',
  className,
  ariaLabel = 'Search',
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listId = `search-suggestions-${useId()}`

  const currentValue = value ?? internalValue

  const filteredSuggestions = useMemo(() => {
    if (!currentValue.trim()) {
      return suggestions
    }

    return suggestions.filter((item) =>
      item.label.toLowerCase().includes(currentValue.trim().toLowerCase())
    )
  }, [currentValue, suggestions])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!rootRef.current?.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const setValue = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  const submitSearch = (nextValue: string) => {
    onSearch?.(nextValue)
    setOpen(false)
    setHighlightedIndex(-1)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!filteredSuggestions.length) {
      if (event.key === 'Enter') {
        submitSearch(currentValue)
      }
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setHighlightedIndex((prev) => (prev + 1) % filteredSuggestions.length)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      setHighlightedIndex((prev) =>
        prev <= 0 ? filteredSuggestions.length - 1 : prev - 1
      )
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      const selected = filteredSuggestions[highlightedIndex]
      submitSearch(selected?.label ?? currentValue)
      if (selected) {
        setValue(selected.label)
      }
      return
    }

    if (event.key === 'Escape') {
      setOpen(false)
      setHighlightedIndex(-1)
    }
  }

  return (
    <div ref={rootRef} data-slot="search-bar" className={cn('relative w-full max-w-xl', className)}>
      <div className="flex items-center rounded-control border border-border-default bg-bg-default px-3">
        <input
          ref={inputRef}
          type="search"
          value={currentValue}
          aria-label={ariaLabel}
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={filteredSuggestions.length > 0 ? listId : undefined}
          className="h-11 w-full bg-transparent text-text-default outline-none placeholder:text-text-muted"
          placeholder={placeholder}
          onFocus={() => setOpen(filteredSuggestions.length > 0)}
          onChange={(event) => {
            setValue(event.target.value)
            setOpen(true)
            setHighlightedIndex(-1)
          }}
          onKeyDown={handleKeyDown}
        />

        {currentValue && (
          <button
            type="button"
            aria-label="Clear search"
            className="rounded-full p-2 text-text-subtle hover:bg-bg-subtle"
            onClick={() => {
              setValue('')
              setOpen(Boolean(suggestions.length))
              inputRef.current?.focus()
            }}
          >
            x
          </button>
        )}

        <button
          type="button"
          aria-label="Submit search"
          className="rounded-full p-2 text-text-default hover:bg-bg-subtle"
          onClick={() => submitSearch(currentValue)}
        >
          Search
        </button>
      </div>

      {open && filteredSuggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          data-slot="search-bar-suggestions"
          className="absolute z-dropdown mt-2 w-full rounded-card border border-border-default bg-bg-default p-2 shadow-dropdown"
        >
          {filteredSuggestions.map((item, index) => (
            <li key={item.id ?? item.label}>
              <button
                type="button"
                role="option"
                aria-selected={highlightedIndex === index}
                className={cn(
                  'w-full rounded-control px-3 py-2 text-left text-sm',
                  highlightedIndex === index
                    ? 'bg-primary-subtle text-text-default'
                    : 'text-text-subtle hover:bg-bg-subtle hover:text-text-default'
                )}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setValue(item.label)
                  submitSearch(item.label)
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { SearchBar }
export type { SearchBarProps, SearchBarSuggestion }
