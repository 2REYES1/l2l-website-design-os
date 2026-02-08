import * as React from 'react'
import { MainNav } from './MainNav'
import { cn } from '@/lib/utils'

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

export interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  onNavigate?: (href: string) => void
}

export function AppShell({ children, navigationItems, onNavigate }: AppShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex">
      {/* Sidebar */}
      <MainNav items={navigationItems} onNavigate={onNavigate} />

      {/* Content area */}
      <div className="flex-1 min-w-0">
        <main className="px-6 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  )
}

