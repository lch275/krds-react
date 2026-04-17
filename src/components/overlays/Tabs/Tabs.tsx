/**
 * Tabs 컴포넌트
 * ARIA Tabs Pattern: Roving tabindex 방식
 *
 * 접근성:
 * - role="tablist": 탭 트리거 컨테이너
 * - role="tab": 개별 탭 트리거
 * - role="tabpanel": 탭 콘텐츠
 * - aria-selected: 활성 탭
 * - aria-controls: tab → panel 연결
 * - aria-labelledby: panel → tab 연결
 * - roving tabindex: 활성 탭만 tabindex=0, 나머지 -1
 *
 * 키보드 인터랙션:
 * - 방향키: 탭 사이 포커스 이동
 * - Enter/Space (manual mode): 포커스된 탭 활성화
 * - automatic mode: 방향키만으로 포커스 이동 + 자동 활성화
 * - Home/End: 첫/마지막 탭으로 이동
 * - Tab: TabsList 전체를 단일 정지점으로 처리
 *
 * activation mode:
 * - 'automatic': 방향키로 이동하면 즉시 탭 전환 (네트워크 요청 없는 경우)
 * - 'manual': 방향키로 포커스 이동, Enter/Space로 전환 (네트워크 요청 있는 경우 권장)
 */

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'

/* ================================================================
   Context
   ================================================================ */

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
  orientation: 'horizontal' | 'vertical'
  activationMode: 'automatic' | 'manual'
  baseId: string
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error('[KRDS] Tabs 서브컴포넌트는 Tabs 내부에서 사용해야 합니다.')
  }
  return ctx
}

function getTabId(baseId: string, value: string) {
  return `${baseId}-tab-${value}`
}

function getPanelId(baseId: string, value: string) {
  return `${baseId}-panel-${value}`
}

/* ================================================================
   Tabs (Root)
   ================================================================ */

type TabsProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  activationMode?: 'automatic' | 'manual'
  children: ReactNode
  className?: string
}

function Tabs({
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  orientation = 'horizontal',
  activationMode = 'automatic',
  children,
  className,
}: TabsProps) {
  const baseId = useId()

  const [value, setValue] = useControllable<string>(
    controlledValue,
    defaultValue,
    onValueChange
  )

  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange: setValue,
        orientation,
        activationMode,
        baseId,
      }}
    >
      <div
        data-slot="tabs"
        data-orientation={orientation}
        className={cn(
          orientation === 'vertical' ? 'flex flex-row gap-4' : 'flex flex-col',
          className
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

/* ================================================================
   TabsList
   ================================================================ */

type TabsListProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...rest }, ref) => {
    const { orientation } = useTabsContext()

    return (
      <div
        ref={ref}
        role="tablist"
        data-slot="tabs-list"
        aria-orientation={orientation}
        className={cn(
          'flex',
          orientation === 'horizontal'
            ? 'flex-row border-b border-border-default'
            : 'flex-col border-r border-border-default',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

TabsList.displayName = 'TabsList'

/* ================================================================
   TabsTrigger
   ================================================================ */

type TabsTriggerProps = {
  value: string
  disabled?: boolean
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'button'>, 'role' | 'onClick'>

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled = false, children, className, ...rest }, ref) => {
    const ctx = useTabsContext()
    const isSelected = ctx.value === value
    const tabId = getTabId(ctx.baseId, value)
    const panelId = getPanelId(ctx.baseId, value)

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLButtonElement>) => {
        const tabList = e.currentTarget.closest('[role="tablist"]')
        if (!tabList) return

        const tabs = Array.from(
          tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
        )
        const currentIndex = tabs.indexOf(e.currentTarget)

        const isHorizontal = ctx.orientation === 'horizontal'
        const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
        const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

        let targetIndex = currentIndex

        if (e.key === prevKey) {
          e.preventDefault()
          targetIndex = (currentIndex - 1 + tabs.length) % tabs.length
        } else if (e.key === nextKey) {
          e.preventDefault()
          targetIndex = (currentIndex + 1) % tabs.length
        } else if (e.key === 'Home') {
          e.preventDefault()
          targetIndex = 0
        } else if (e.key === 'End') {
          e.preventDefault()
          targetIndex = tabs.length - 1
        } else if ((e.key === 'Enter' || e.key === ' ') && ctx.activationMode === 'manual') {
          e.preventDefault()
          ctx.onValueChange(value)
          return
        } else {
          return
        }

        const target = tabs[targetIndex]
        target.focus()

        // automatic 모드: 포커스 이동 시 즉시 탭 전환
        if (ctx.activationMode === 'automatic') {
          const targetValue = target.getAttribute('data-value')
          if (targetValue) {
            ctx.onValueChange(targetValue)
          }
        }
      },
      [ctx, value]
    )

    return (
      <button
        ref={ref}
        id={tabId}
        type="button"
        role="tab"
        data-slot="tabs-trigger"
        data-value={value}
        data-state={isSelected ? 'active' : 'inactive'}
        aria-selected={isSelected}
        aria-controls={panelId}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => !disabled && ctx.onValueChange(value)}
        onKeyDown={handleKeyDown}
        className={cn(
          'px-4 py-2 text-sm font-medium',
          'border-b-2 -mb-px transition-colors',
          'focus-visible:outline-none focus-visible:ring-3',
          'focus-visible:ring-border-focus focus-visible:ring-inset',
          'disabled:pointer-events-none disabled:opacity-40',
          isSelected
            ? 'border-primary text-primary'
            : 'border-transparent text-text-subtle hover:text-text-default hover:border-border-default',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

TabsTrigger.displayName = 'TabsTrigger'

/* ================================================================
   TabsContent
   ================================================================ */

type TabsContentProps = {
  value: string
  children: ReactNode
  className?: string
  /** false면 비활성 패널을 DOM에서 제거. true면 숨김 (display:none) */
  keepMounted?: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'role'>

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, children, className, keepMounted = false, ...rest }, ref) => {
    const ctx = useTabsContext()
    const isSelected = ctx.value === value
    const tabId = getTabId(ctx.baseId, value)
    const panelId = getPanelId(ctx.baseId, value)

    if (!keepMounted && !isSelected) return null

    return (
      <div
        ref={ref}
        id={panelId}
        role="tabpanel"
        data-slot="tabs-content"
        data-state={isSelected ? 'active' : 'inactive'}
        aria-labelledby={tabId}
        tabIndex={0}
        hidden={keepMounted && !isSelected}
        className={cn(
          'focus-visible:outline-none focus-visible:ring-3',
          'focus-visible:ring-border-focus focus-visible:ring-offset-2',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps }
