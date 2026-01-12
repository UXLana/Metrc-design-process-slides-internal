'use client'

import React from 'react'
import Link from 'next/link'
import {
  colors,
  typography,
  borderRadius,
  shadows,
  zIndex,
  transitionPresets,
} from '@/styles/design-tokens'

// =============================================================================
// NAVIGATION DATA
// =============================================================================

export const navSections = [
  {
    title: 'Foundations',
    items: [
      { id: 'colors', label: 'Colors', href: '/styleguide/colors', icon: '◐' },
      { id: 'typography', label: 'Typography', href: '/styleguide/typography', icon: 'Aa' },
      { id: 'spacing', label: 'Spacing', href: '/styleguide/spacing', icon: '⊞' },
      { id: 'radius', label: 'Border Radius', href: '/styleguide/radius', icon: '◷' },
      { id: 'shadows', label: 'Shadows', href: '/styleguide/shadows', icon: '◫' },
      { id: 'breakpoints', label: 'Breakpoints', href: '/styleguide/breakpoints', icon: '⊟' },
    ],
  },
  {
    title: 'Components',
    items: [
      { id: 'avatar', label: 'Avatar', href: '/components/avatar', icon: '👤' },
    ],
  },
]

// =============================================================================
// SHARED STYLES
// =============================================================================

export const sharedStyles = {
  page: {
    minHeight: '100vh',
    background: colors.background.paper,
    display: 'flex',
  },
  
  sidebar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '260px',
    height: '100vh',
    background: colors.brand.primary,
    padding: '32px 0',
    display: 'flex',
    flexDirection: 'column' as const,
    zIndex: zIndex.header,
    overflowY: 'auto' as const,
  },
  
  sidebarHeader: {
    padding: '0 24px 24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '16px',
  },
  
  sidebarTitle: {
    ...typography.heading.h5,
    color: colors.text.highEmphasisOnDark,
    marginBottom: '4px',
    textDecoration: 'none',
    display: 'block',
  },
  
  sidebarSubtitle: {
    ...typography.body.sm,
    color: colors.text.mediumEmphasisOnDark,
  },
  
  navSection: {
    marginBottom: '24px',
  },
  
  navSectionTitle: {
    padding: '8px 24px',
    fontSize: '11px',
    fontWeight: 600,
    color: colors.text.lowEmphasisOnDark,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },
  
  nav: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2px',
    padding: '0 12px',
  },
  
  navLink: {
    padding: '10px 16px',
    borderRadius: borderRadius.md,
    color: colors.text.mediumEmphasisOnDark,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    transition: transitionPresets.default,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  
  navLinkActive: {
    background: 'rgba(255, 255, 255, 0.15)',
    color: colors.text.highEmphasisOnDark,
  },
  
  content: {
    marginLeft: '260px',
    flex: 1,
    maxWidth: 'calc(100% - 260px)',
  },
  
  header: {
    background: colors.brand.primary,
    padding: '48px',
    marginBottom: '48px',
  },
  
  headerTitle: {
    ...typography.display.md,
    color: colors.text.highEmphasisOnDark,
    marginBottom: '8px',
  },
  
  headerDescription: {
    ...typography.body.lg,
    color: colors.text.mediumEmphasisOnDark,
    maxWidth: '600px',
  },
  
  main: {
    padding: '0 48px 48px',
  },
  
  section: {
    marginBottom: '64px',
  },
  
  sectionTitle: {
    ...typography.heading.h3,
    color: colors.text.highEmphasis,
    marginBottom: '8px',
  },
  
  sectionDescription: {
    ...typography.body.md,
    color: colors.text.mediumEmphasis,
    marginBottom: '24px',
  },
  
  card: {
    background: colors.background.default,
    borderRadius: borderRadius.lg,
    padding: '24px',
    boxShadow: shadows.sm,
    border: `1px solid ${colors.border.light}`,
    marginBottom: '24px',
  },
  
  cardTitle: {
    ...typography.heading.h5,
    color: colors.text.highEmphasis,
    marginBottom: '16px',
  },
  
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    ...typography.body.sm,
  },
  
  th: {
    padding: '12px 16px',
    textAlign: 'left' as const,
    background: colors.neutral[100],
    fontWeight: 600,
    borderBottom: `1px solid ${colors.border.light}`,
  },
  
  td: {
    padding: '12px 16px',
    borderBottom: `1px solid ${colors.border.light}`,
  },
  
  codeBlock: {
    background: colors.neutral[100],
    padding: '16px 20px',
    borderRadius: borderRadius.md,
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    overflowX: 'auto' as const,
    color: colors.text.highEmphasis,
  },
  
  grid: {
    display: 'grid',
    gap: '24px',
  },
  
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap' as const,
  },
}

// =============================================================================
// LAYOUT COMPONENT
// =============================================================================

interface StyleguideLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  activeId: string
}

export function StyleguideLayout({ 
  children, 
  title, 
  description, 
  activeId 
}: StyleguideLayoutProps) {
  return (
    <div style={sharedStyles.page}>
      {/* Sidebar */}
      <aside style={sharedStyles.sidebar}>
        <div style={sharedStyles.sidebarHeader}>
          <Link href="/styleguide" style={sharedStyles.sidebarTitle}>
            Metrc Design System
          </Link>
          <p style={sharedStyles.sidebarSubtitle}>v1.0.0</p>
        </div>
        
        {navSections.map((section) => (
          <div key={section.title} style={sharedStyles.navSection}>
            <div style={sharedStyles.navSectionTitle}>{section.title}</div>
            <nav style={sharedStyles.nav}>
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  style={{
                    ...sharedStyles.navLink,
                    ...(activeId === item.id ? sharedStyles.navLinkActive : {}),
                  }}
                >
                  <span style={{ width: '20px', textAlign: 'center', fontSize: '14px' }}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </aside>

      {/* Content */}
      <div style={sharedStyles.content}>
        <header style={sharedStyles.header}>
          <h1 style={sharedStyles.headerTitle}>{title}</h1>
          <p style={sharedStyles.headerDescription}>{description}</p>
        </header>
        
        <main style={sharedStyles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}

// =============================================================================
// UTILITY COMPONENTS
// =============================================================================

export function CodeBlock({ children }: { children: string }) {
  return <pre style={sharedStyles.codeBlock}>{children}</pre>
}

export function SpecTable({ 
  headers, 
  rows 
}: { 
  headers: string[]
  rows: (string | React.ReactNode)[][] 
}) {
  return (
    <table style={sharedStyles.table}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={sharedStyles.th}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={sharedStyles.td}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
