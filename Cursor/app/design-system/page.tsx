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
import { Avatar, AvatarGroup, Button, ButtonGroup, TabBar, TabItem, Banner } from '@/components'

// =============================================================================
// STYLES
// =============================================================================

const styles = {
  page: {
    minHeight: '100vh',
    background: colors.background.paper,
  },
  
  hero: {
    background: colors.brand.primary,
    padding: '80px 48px',
    textAlign: 'center' as const,
  },
  
  heroTitle: {
    ...typography.display.lg,
    color: colors.text.highEmphasisOnDark,
    marginBottom: '16px',
  },
  
  heroSubtitle: {
    ...typography.body.xl,
    color: colors.text.mediumEmphasisOnDark,
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 48px',
  },
  
  sectionTitle: {
    ...typography.heading.h3,
    color: colors.text.highEmphasis,
    marginBottom: '24px',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '64px',
  },
  
  card: {
    background: colors.background.default,
    borderRadius: borderRadius.lg,
    padding: '24px',
    boxShadow: shadows.sm,
    border: `1px solid ${colors.border.light}`,
    textDecoration: 'none',
    transition: transitionPresets.default,
    display: 'block',
  },
  
  cardIcon: {
    width: '48px',
    height: '48px',
    borderRadius: borderRadius.md,
    background: colors.primary[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '16px',
  },
  
  cardTitle: {
    ...typography.heading.h5,
    color: colors.text.highEmphasis,
    marginBottom: '8px',
  },
  
  cardDescription: {
    ...typography.body.sm,
    color: colors.text.mediumEmphasis,
  },
  
  componentCard: {
    background: colors.background.default,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    boxShadow: shadows.sm,
    border: `1px solid ${colors.border.light}`,
    textDecoration: 'none',
    display: 'block',
    transition: transitionPresets.default,
  },
  
  componentPreview: {
    background: colors.neutral[50],
    padding: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
  },
  
  componentInfo: {
    padding: '20px',
  },
  
  componentTitle: {
    ...typography.label.lg,
    color: colors.text.highEmphasis,
    marginBottom: '4px',
  },
  
  componentDescription: {
    ...typography.body.sm,
    color: colors.text.mediumEmphasis,
  },
}

// =============================================================================
// DATA
// =============================================================================

const foundationItems = [
  {
    id: 'colors',
    title: 'Colors',
    description: 'Brand, semantic, and neutral color palettes',
    icon: '◐',
    href: '/design-system/colors',
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Font families, sizes, and text styles',
    icon: 'Aa',
    href: '/design-system/typography',
  },
  {
    id: 'spacing',
    title: 'Spacing',
    description: '4px-based spacing scale and semantic aliases',
    icon: '⊞',
    href: '/design-system/spacing',
  },
  {
    id: 'radius',
    title: 'Border Radius',
    description: 'Corner rounding from sharp to fully rounded',
    icon: '◷',
    href: '/design-system/radius',
  },
  {
    id: 'shadows',
    title: 'Shadows',
    description: 'Elevation shadows for depth and hierarchy',
    icon: '◫',
    href: '/design-system/shadows',
  },
  {
    id: 'breakpoints',
    title: 'Breakpoints & System',
    description: 'Responsive breakpoints, z-index, and transitions',
    icon: '⊟',
    href: '/design-system/breakpoints',
  },
]

const componentItems = [
  {
    id: 'avatar',
    title: 'Avatar',
    description: 'User representation with image or initials',
    href: '/components/avatar',
    preview: (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Avatar src="https://i.pravatar.cc/150?img=1" name="User" size="lg" />
        <Avatar name="Jane Smith" size="lg" color={3} />
        <AvatarGroup 
          avatars={[
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
          ]}
          size="md"
          compact
        />
      </div>
    ),
  },
  {
    id: 'button',
    title: 'Button',
    description: 'Actions and choices with multiple emphasis levels',
    href: '/components/button',
    preview: (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button emphasis="high" size="md">Primary</Button>
        <Button emphasis="mid" size="md">Secondary</Button>
        <Button emphasis="low" size="md">Tertiary</Button>
      </div>
    ),
  },
  {
    id: 'tab',
    title: 'Tab',
    description: 'Organize content into switchable views',
    href: '/components/tab',
    preview: (
      <TabBarPreview />
    ),
  },
  {
    id: 'banner',
    title: 'Banner',
    description: 'Important messages with semantic variants',
    href: '/components/banner',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Banner variant="info" title="Info" size="md">New features available</Banner>
        <Banner variant="success" title="Success" size="md">Changes saved</Banner>
      </div>
    ),
  },
]

// TabBar preview component (needs useState)
function TabBarPreview() {
  const [active, setActive] = React.useState('1')
  const tabs: TabItem[] = [
    { id: '1', label: 'Overview' },
    { id: '2', label: 'Details' },
    { id: '3', label: 'Settings' },
  ]
  return (
    <div style={{ width: '100%' }}>
      <TabBar
        tabs={tabs}
        activeTab={active}
        onTabChange={setActive}
      />
    </div>
  )
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function StyleGuidePage() {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Metrc Design System</h1>
        <p style={styles.heroSubtitle}>
          A comprehensive collection of design tokens and components for building 
          consistent, accessible, and beautiful user interfaces.
        </p>
      </header>

      {/* Content */}
      <main style={styles.content}>
        {/* Foundations */}
        <section>
          <h2 style={styles.sectionTitle}>Foundations</h2>
          <div style={styles.grid}>
            {foundationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = shadows.md
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = shadows.sm
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDescription}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 style={styles.sectionTitle}>Components</h2>
          <div style={{ ...styles.grid, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {componentItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                style={styles.componentCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = shadows.md
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = shadows.sm
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={styles.componentPreview}>
                  {item.preview}
                </div>
                <div style={styles.componentInfo}>
                  <h3 style={styles.componentTitle}>{item.title}</h3>
                  <p style={styles.componentDescription}>{item.description}</p>
                </div>
              </Link>
            ))}
            
            {/* Coming Soon Card */}
            <div style={{
              ...styles.componentCard,
              background: colors.neutral[50],
              border: `2px dashed ${colors.border.light}`,
              cursor: 'default',
            }}>
              <div style={{ ...styles.componentPreview, background: 'transparent' }}>
                <span style={{ fontSize: '48px', opacity: 0.3 }}>🧩</span>
              </div>
              <div style={styles.componentInfo}>
                <h3 style={{ ...styles.componentTitle, color: colors.text.mediumEmphasis }}>More Coming Soon</h3>
                <p style={styles.componentDescription}>Card, Badge, Input, Dialog, and more...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section style={{ marginTop: '64px' }}>
          <h2 style={styles.sectionTitle}>Quick Start</h2>
          <div style={styles.card}>
            <pre style={{
              background: colors.neutral[100],
              padding: '20px',
              borderRadius: borderRadius.md,
              fontSize: '13px',
              fontFamily: '"JetBrains Mono", monospace',
              overflow: 'auto',
            }}>
{`// Import design tokens
import { colors, typography, spacing, borderRadius, shadows } from '@/styles/design-tokens'

// Import components
import { Avatar, AvatarGroup } from '@/components'

// Use in your components
function MyComponent() {
  return (
    <div style={{
      background: colors.background.default,
      padding: spacing[6],
      borderRadius: borderRadius.lg,
      boxShadow: shadows.sm,
    }}>
      <Avatar name="John Doe" size="lg" />
    </div>
  )
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  )
}
