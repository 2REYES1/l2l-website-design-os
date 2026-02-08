import * as React from 'react'
import { AppShell } from './components'

const navigationItems = [
  { label: 'Home & Narrative', href: '/home', isActive: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Researchers', href: '/researchers' },
  { label: 'Join & Collaborate', href: '/join' },
  { label: 'Insights', href: '/insights' },
]

export default function ShellPreview() {
  return (
    <AppShell
      navigationItems={navigationItems}
      onNavigate={(href) => console.log('Navigate to:', href)}
    >
      <div className="space-y-4 text-zinc-200">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
          Content Area
        </h1>
        <p className="text-sm text-zinc-400 max-w-xl">
          This is a preview of the Labs To Legends application shell. Section screens will render
          inside this area, using your lime/emerald palette and typography choices.
        </p>
      </div>
    </AppShell>
  )
}

