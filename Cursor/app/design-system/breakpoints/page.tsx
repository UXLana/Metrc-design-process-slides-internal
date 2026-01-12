'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, typography, borderRadius, breakpoints, mediaQueries, zIndex, transitions, transitionPresets } from '@/styles/design-tokens'
import { TabBar, TabItem } from '@/components'

// =============================================================================
// PAGE TABS
// =============================================================================

type PageTab = 'overview' | 'implementation'

const pageTabs: TabItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'implementation', label: 'Implementation' },
]

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function BreakpointsPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Breakpoints & System"
      description="Responsive breakpoints, z-index scale, and transition presets for building adaptive, polished interfaces."
      activeId="breakpoints"
    >
      {/* Page Tabs */}
      <div style={{ 
        background: colors.background.default,
        marginLeft: '-48px',
        marginRight: '-48px',
        marginTop: '-24px',
        paddingLeft: '48px',
        paddingRight: '48px',
        paddingBottom: '0',
        marginBottom: '48px',
        borderBottom: `1px solid ${colors.border.light}`,
      }}>
        <TabBar
          tabs={pageTabs}
          activeTab={activePageTab}
          onTabChange={(id) => setActivePageTab(id as PageTab)}
          hasDivider={false}
        />
      </div>

      {/* ========== OVERVIEW TAB ========== */}
      {activePageTab === 'overview' && (
        <>
          {/* Breakpoints */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Breakpoints</h2>
            <p style={sharedStyles.sectionDescription}>
              Responsive breakpoints for adaptive layouts across device sizes.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(breakpoints).map(([name, value]) => {
                  const width = parseInt(value)
                  const maxWidth = 1600
                  const percentage = Math.min((width / maxWidth) * 100, 100)
                  
                  return (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', ...typography.code.sm, color: colors.text.mediumEmphasis }}>
                        {name}
                      </div>
                      <div style={{ flex: 1, height: '32px', background: colors.neutral[100], borderRadius: borderRadius.sm, overflow: 'hidden' }}>
                        <div style={{
                          width: `${percentage}%`,
                          height: '100%',
                          background: colors.brand.primary,
                          borderRadius: borderRadius.sm,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '12px',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 600,
                          minWidth: '60px',
                        }}>
                          {value}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Target Devices']}
                rows={[
                  [<code>breakpoints.xs</code>, breakpoints.xs, 'Small phones'],
                  [<code>breakpoints.sm</code>, breakpoints.sm, 'Large phones'],
                  [<code>breakpoints.md</code>, breakpoints.md, 'Tablets (portrait)'],
                  [<code>breakpoints.lg</code>, breakpoints.lg, 'Tablets (landscape), small laptops'],
                  [<code>breakpoints.xl</code>, breakpoints.xl, 'Desktops'],
                  [<code>breakpoints.2xl</code>, breakpoints['2xl'], 'Large desktops'],
                ]}
              />
            </div>
          </section>

          {/* Z-Index */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Z-Index Scale</h2>
            <p style={sharedStyles.sectionDescription}>
              Layering system for managing stacking context across components.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', height: '200px', padding: '24px' }}>
                {Object.entries(zIndex).filter(([name]) => name !== 'hide' && name !== 'max').map(([name, value], index) => (
                  <div key={name} style={{
                    width: '80px',
                    height: `${30 + (index * 20)}px`,
                    background: colors.brand.primary,
                    borderRadius: borderRadius.sm,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Use Case']}
                rows={Object.entries(zIndex).map(([name, value]) => [
                  <code>zIndex.{name}</code>,
                  value.toString(),
                  name === 'hide' ? 'Hidden elements' :
                  name === 'base' ? 'Default layer' :
                  name === 'dropdown' ? 'Dropdown menus' :
                  name === 'sticky' ? 'Sticky elements' :
                  name === 'header' ? 'Fixed headers' :
                  name === 'overlay' ? 'Background overlays' :
                  name === 'modal' ? 'Modal dialogs' :
                  name === 'popover' ? 'Popovers' :
                  name === 'tooltip' ? 'Tooltips' :
                  name === 'toast' ? 'Toast notifications' :
                  'Maximum z-index',
                ])}
              />
            </div>
          </section>

          {/* Transitions */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Transitions</h2>
            <p style={sharedStyles.sectionDescription}>
              Animation timing and duration presets for smooth interactions.
            </p>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Duration</h3>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                {Object.entries(transitions.duration).map(([name, value]) => (
                  <div key={name} style={{ textAlign: 'center' }}>
                    <div 
                      style={{
                        width: '60px',
                        height: '60px',
                        background: colors.brand.primary,
                        borderRadius: borderRadius.md,
                        margin: '0 auto 8px',
                        transition: `transform ${value} ease`,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ ...typography.label.sm }}>{name}</div>
                    <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Timing Functions</h3>
              <SpecTable
                headers={['Token', 'Value']}
                rows={Object.entries(transitions.timing).map(([name, value]) => [
                  <code>transitions.timing.{name}</code>,
                  value,
                ])}
              />
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Presets</h3>
              <SpecTable
                headers={['Token', 'Value', 'Use Case']}
                rows={Object.entries(transitionPresets).map(([name, value]) => [
                  <code>transitionPresets.{name}</code>,
                  value,
                  name === 'default' ? 'Standard interactions' :
                  name === 'fast' ? 'Quick feedback (hover)' :
                  name === 'slow' ? 'Emphasized animations' :
                  'Playful, bouncy effects',
                ])}
              />
            </div>
          </section>
        </>
      )}

      {/* ========== IMPLEMENTATION TAB ========== */}
      {activePageTab === 'implementation' && (
        <>
          {/* Usage */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Usage</h2>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Import</h3>
              <CodeBlock>{`import { 
  breakpoints, 
  mediaQueries, 
  zIndex, 
  transitions, 
  transitionPresets 
} from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Media Queries</h3>
              <CodeBlock>{`// Min-width queries
@media \${mediaQueries.sm} { /* 640px+ */ }
@media \${mediaQueries.md} { /* 768px+ */ }
@media \${mediaQueries.lg} { /* 1024px+ */ }
@media \${mediaQueries.xl} { /* 1280px+ */ }

// Device-specific
@media \${mediaQueries.mobile} { /* max-width: 639px */ }
@media \${mediaQueries.tablet} { /* 640px - 1023px */ }
@media \${mediaQueries.desktop} { /* 1024px+ */ }

// Feature queries
@media \${mediaQueries.hover} { /* hover capable */ }
@media \${mediaQueries.reducedMotion} { /* prefers reduced motion */ }`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Z-Index Layering</h3>
              <CodeBlock>{`// Fixed header
<header style={{ position: 'fixed', zIndex: zIndex.header }}>
  Header
</header>

// Modal with overlay
<div style={{ zIndex: zIndex.overlay }}>Backdrop</div>
<div style={{ zIndex: zIndex.modal }}>Modal content</div>

// Tooltip (highest)
<div style={{ zIndex: zIndex.tooltip }}>Tooltip</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Transitions</h3>
              <CodeBlock>{`// Using presets
<button style={{ transition: transitionPresets.default }}>
  Hover me
</button>

// Fast feedback
<div style={{ transition: transitionPresets.fast }}>
  Quick response
</div>

// Custom transition
<div style={{ 
  transition: \`transform \${transitions.duration.slow} \${transitions.timing.spring}\` 
}}>
  Bouncy animation
</div>`}</CodeBlock>
            </div>
          </section>

          {/* Token Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Media Query Strings</h3>
              <SpecTable
                headers={['Token', 'Query String']}
                rows={['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((key) => [
                  <code>mediaQueries.{key}</code>,
                  <code style={{ fontSize: '12px' }}>{(mediaQueries as any)[key]}</code>,
                ])}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Feature Queries</h3>
              <SpecTable
                headers={['Token', 'Query String', 'Use Case']}
                rows={[
                  [<code>mediaQueries.hover</code>, mediaQueries.hover, 'Devices with hover capability'],
                  [<code>mediaQueries.reducedMotion</code>, mediaQueries.reducedMotion, 'Respect accessibility preferences'],
                  [<code>mediaQueries.dark</code>, mediaQueries.dark, 'System dark mode preference'],
                ]}
              />
            </div>
          </section>

          {/* Design Guidance */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Design Guidance</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Breakpoint Guidelines</h3>
              <SpecTable
                headers={['Breakpoint', 'Layout Considerations']}
                rows={[
                  ['xs/sm (Mobile)', 'Single column, stacked navigation, touch targets 44px+'],
                  ['md (Tablet)', 'Two columns possible, side navigation option'],
                  ['lg (Desktop)', 'Multi-column layouts, hover interactions'],
                  ['xl/2xl (Large)', 'Maximum content width, expanded navigation'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Best Practices</h3>
              <SpecTable
                headers={['Do', "Don't"]}
                rows={[
                  ['Use z-index tokens consistently', 'Create arbitrary z-index values'],
                  ['Respect reduced motion preferences', 'Force animations on all users'],
                  ['Use mobile-first breakpoints', 'Write desktop-only styles first'],
                  ['Layer modals above overlays', 'Put overlays above modals'],
                  ['Use transition presets for consistency', 'Use different durations per component'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
