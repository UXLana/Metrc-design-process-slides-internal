'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, typography, borderRadius, borderRadiusSemantics } from '@/styles/design-tokens'
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

export default function RadiusPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Border Radius"
      description="Border radius tokens for consistent corner rounding across components. From sharp corners to fully rounded pills."
      activeId="radius"
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
          {/* Base Scale */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Base Scale</h2>
            <p style={sharedStyles.sectionDescription}>
              Core border radius values for various UI elements.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
                {Object.entries(borderRadius).map(([name, value]) => (
                  <div key={name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: colors.brand.primary,
                      borderRadius: value,
                      margin: '0 auto 12px',
                    }} />
                    <div style={{ ...typography.label.sm, color: colors.text.highEmphasis }}>{name}</div>
                    <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Description']}
                rows={[
                  [<code>borderRadius.none</code>, borderRadius.none, 'Sharp corners, no rounding'],
                  [<code>borderRadius.xs</code>, borderRadius.xs, 'Subtle rounding for small elements'],
                  [<code>borderRadius.sm</code>, borderRadius.sm, 'Small rounding for inputs and chips'],
                  [<code>borderRadius.md</code>, borderRadius.md, 'Default rounding for buttons and cards'],
                  [<code>borderRadius.lg</code>, borderRadius.lg, 'Larger rounding for cards and modals'],
                  [<code>borderRadius.xl</code>, borderRadius.xl, 'Extra large for prominent containers'],
                  [<code>borderRadius.2xl</code>, borderRadius['2xl'], 'Very large for hero sections'],
                  [<code>borderRadius.3xl</code>, borderRadius['3xl'], 'Maximum rounding'],
                  [<code>borderRadius.full</code>, borderRadius.full, 'Fully rounded (circles, pills)'],
                ]}
              />
            </div>
          </section>

          {/* Semantic Mappings */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Semantic Mappings</h2>
            <p style={sharedStyles.sectionDescription}>
              Component-specific radius tokens for consistent styling.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {Object.entries(borderRadiusSemantics).map(([name, value]) => (
                  <div key={name}>
                    <div style={{
                      width: '100%',
                      height: '60px',
                      background: colors.primary[100],
                      borderRadius: value,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${colors.border.light}`,
                      marginBottom: '8px',
                    }}>
                      <span style={{ ...typography.label.sm, color: colors.brand.primary }}>{name}</span>
                    </div>
                    <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis, textAlign: 'center' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Visual Examples */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Visual Examples</h2>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Buttons</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                {['none', 'sm', 'md', 'lg', 'full'].map((r) => (
                  <button key={r} style={{
                    padding: '12px 24px',
                    background: colors.brand.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: (borderRadius as any)[r],
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Cards</h3>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['sm', 'md', 'lg', 'xl'].map((r) => (
                  <div key={r} style={{
                    width: '120px',
                    height: '100px',
                    background: colors.background.default,
                    borderRadius: (borderRadius as any)[r],
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>{r}</span>
                  </div>
                ))}
              </div>
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
              <CodeBlock>{`import { borderRadius, borderRadiusSemantics } from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Base Scale</h3>
              <CodeBlock>{`// Default card rounding
<div style={{ borderRadius: borderRadius.md }}>
  Card content
</div>

// Sharp corners
<div style={{ borderRadius: borderRadius.none }}>
  Sharp box
</div>

// Pill shape
<span style={{ borderRadius: borderRadius.full, padding: '4px 12px' }}>
  Badge
</span>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Semantic Tokens</h3>
              <CodeBlock>{`// Component-specific radius
<button style={{ borderRadius: borderRadiusSemantics.button }}>
  Click me
</button>

<input style={{ borderRadius: borderRadiusSemantics.input }} />

<div style={{ borderRadius: borderRadiusSemantics.card }}>
  Card content
</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Avatars and Circles</h3>
              <CodeBlock>{`// Circular avatar
<img 
  style={{ 
    borderRadius: borderRadius.full,
    width: '48px',
    height: '48px',
  }} 
  src="/avatar.jpg"
/>

// Rounded square avatar (30% radius)
<img 
  style={{ 
    borderRadius: '30%',  // Custom avatar style
    width: '48px',
    height: '48px',
  }} 
  src="/avatar.jpg"
/>`}</CodeBlock>
            </div>
          </section>

          {/* Token Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Base Scale</h3>
              <SpecTable
                headers={['Token', 'Value', 'Use Case']}
                rows={[
                  [<code>borderRadius.none</code>, '0px', 'Sharp corners'],
                  [<code>borderRadius.xs</code>, '2px', 'Subtle rounding'],
                  [<code>borderRadius.sm</code>, '4px', 'Inputs, chips'],
                  [<code>borderRadius.md</code>, '8px', 'Buttons, cards'],
                  [<code>borderRadius.lg</code>, '12px', 'Modals, large cards'],
                  [<code>borderRadius.xl</code>, '16px', 'Prominent containers'],
                  [<code>borderRadius.2xl</code>, '24px', 'Hero sections'],
                  [<code>borderRadius.3xl</code>, '32px', 'Maximum rounding'],
                  [<code>borderRadius.full</code>, '9999px', 'Pills, circles'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Semantic Mappings</h3>
              <SpecTable
                headers={['Token', 'Value', 'Component']}
                rows={Object.entries(borderRadiusSemantics).map(([name, value]) => [
                  <code>borderRadiusSemantics.{name}</code>,
                  value,
                  name.charAt(0).toUpperCase() + name.slice(1),
                ])}
              />
            </div>
          </section>

          {/* Design Guidance */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Design Guidance</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Best Practices</h3>
              <SpecTable
                headers={['Do', "Don't"]}
                rows={[
                  ['Use consistent radius within a component family', 'Mix different radius values randomly'],
                  ['Use larger radius for larger elements', 'Use xl radius on small buttons'],
                  ['Use full radius for pills and badges', 'Use full radius on square containers'],
                  ['Use semantic tokens for common components', 'Create arbitrary radius values'],
                  ['Match nested element radius to parents', 'Ignore radius inheritance patterns'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
