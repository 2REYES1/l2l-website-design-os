import * as React from 'react'
import { Menu } from 'lucide-react'
import type { NavigationItem } from './AppShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MainNavProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
}

export function MainNav({ items, onNavigate }: MainNavProps) {
  const [open, setOpen] = React.useState(false)

  const handleNavigate = (href: string) => {
    onNavigate?.(href)
    setOpen(false)
  }

  const navContent = (
    <nav className="mt-6 space-y-1">
      {items.map((item) => (
        <button
          key={item.href}
          type="button"
          onClick={() => handleNavigate(item.href)}
          className={cn(
            'flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
            'text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800',
            item.isActive && 'bg-lime-400/10 text-lime-300 hover:bg-lime-400/15'
          )}
        >
          <span className="truncate">{item.label}</span>
        </button>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 border-r border-zinc-800 bg-zinc-950/95">
        <div className="flex h-16 items-center px-4 border-b border-zinc-800">
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-lime-300 uppercase">
              Labs To Legends
            </span>
            <span className="text-xs text-zinc-500">Research to real-world impact</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-4 pt-2">{navContent}</div>
      </aside>

      {/* Mobile header + drawer */}
      <div className="md:hidden fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </button>
        <span className="text-sm font-semibold tracking-wide text-lime-300 uppercase">
          Labs To Legends
        </span>
        <div className="w-8" />
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-full bg-zinc-950 border-r border-zinc-800 p-4 pt-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-lime-300 uppercase">
                  Labs To Legends
                </span>
                <span className="text-xs text-zinc-500">Navigation</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800"
                onClick={() => setOpen(false)}
              >
                <span className="text-lg leading-none">&times;</span>
              </Button>
            </div>
            {navContent}
          </div>
        </div>
      )}
    </>
  )
}

