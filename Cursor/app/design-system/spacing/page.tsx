'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, typography, spacing, spacingSemantics, borderRadius } from '@/styles/design-tokens'
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
// SPACING VISUAL COMPONENT
// =============================================================================

function SpacingBar({ name, value, wide = false }: { name: string; value: string; wide?: boolean }) {
  const numValue = parseInt(value)
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
      <div style={{ 
        width: wide ? '140px' : '60px', 
        ...typography.code.sm, 
        color: colors.text.highEmphasis,
        fontWeight: 500,
      }}>
        {name}
      </div>
      <div 
        style={{
          height: '24px',
          width: `${Math.min(numValue, 200)}px`,
          minWidth: numValue > 0 ? '4px' : '0',
          background: colors.brand.primary,
          borderRadius: borderRadius.xs,
        }}
      />
      <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>
        {value}
      </div>
    </div>
  )
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function SpacingPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Spacing"
      description="A consistent spacing system based on a 4px grid. Use these tokens for margins, padding, and gaps to maintain visual rhythm."
      activeId="spacing"
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
              Core spacing values based on a 4px unit. Use these for precise control over spacing.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(spacing).slice(0, 15).map(([key, value]) => (
                <SpacingBar key={key} name={key} value={value} />
              ))}
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Extended Scale</h3>
              {Object.entries(spacing).slice(15).map(([key, value]) => (
                <SpacingBar key={key} name={key} value={value} />
              ))}
            </div>
          </section>

          {/* Semantic Scale */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Semantic Aliases</h2>
            <p style={sharedStyles.sectionDescription}>
              Named spacing values for common use cases. These provide clearer intent in code.
            </p>
            
            <div style={sharedStyles.card}>
              {['none', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((key) => (
                <SpacingBar key={key} name={key} value={(spacingSemantics as any)[key]} wide />
              ))}
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Use Case']}
                rows={[
                  [<code>spacingSemantics.none</code>, spacingSemantics.none, 'No spacing'],
                  [<code>spacingSemantics.xs</code>, spacingSemantics.xs, 'Tight spacing between related items'],
                  [<code>spacingSemantics.sm</code>, spacingSemantics.sm, 'Default gap, button padding'],
                  [<code>spacingSemantics.md</code>, spacingSemantics.md, 'Card padding, section gaps'],
                  [<code>spacingSemantics.lg</code>, spacingSemantics.lg, 'Large component spacing'],
                  [<code>spacingSemantics.xl</code>, spacingSemantics.xl, 'Section padding'],
                  [<code>spacingSemantics.2xl</code>, spacingSemantics['2xl'], 'Page sections'],
                  [<code>spacingSemantics.3xl</code>, spacingSemantics['3xl'], 'Large page sections'],
                ]}
              />
            </div>
          </section>

          {/* Visual Examples */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Visual Examples</h2>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Padding Comparison</h3>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {[4, 8, 12, 16, 24, 32].map((size) => (
                  <div key={size} style={{ textAlign: 'center' }}>
                    <div style={{
                      background: colors.primary[100],
                      padding: `${size}px`,
                      borderRadius: borderRadius.md,
                      marginBottom: '8px',
                    }}>
                      <div style={{
                        background: colors.brand.primary,
                        width: '40px',
                        height: '40px',
                        borderRadius: borderRadius.sm,
                      }} />
                    </div>
                    <span style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>{size}px</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Gap Comparison</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[4, 8, 16, 24].map((gap) => (
                  <div key={gap}>
                    <span style={{ ...typography.label.sm, color: colors.text.mediumEmphasis, display: 'block', marginBottom: '8px' }}>
                      gap: {gap}px
                    </span>
                    <div style={{ display: 'flex', gap: `${gap}px` }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} style={{
                          width: '48px',
                          height: '32px',
                          background: colors.brand.primary,
                          borderRadius: borderRadius.sm,
                        }} />
                      ))}
                    </div>
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
              <CodeBlock>{`import { spacing, spacingSemantics } from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Numeric Scale</h3>
              <CodeBlock>{`// Numeric scale (based on 4px)
<div style={{ padding: spacing[4] }}>  {/* 16px */}
  <p style={{ marginBottom: spacing[2] }}>Text</p>  {/* 8px */}
</div>

// Common values
spacing[1]   // 4px
spacing[2]   // 8px
spacing[3]   // 12px
spacing[4]   // 16px
spacing[6]   // 24px
spacing[8]   // 32px`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Semantic Aliases</h3>
              <CodeBlock>{`// Semantic spacing for clarity
<div style={{ padding: spacingSemantics.md }}>  {/* 24px */}
  <button style={{ padding: spacingSemantics.sm }}>  {/* 16px */}
    Click me
  </button>
</div>

// Flex gap with semantic spacing
<div style={{ display: 'flex', gap: spacingSemantics.xs }}>  {/* 12px gap */}
  <Item />
  <Item />
</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Common Patterns</h3>
              <CodeBlock>{`// Card padding
padding: spacingSemantics.md       // 24px

// Section margin
marginBottom: spacingSemantics.xl  // 48px

// Button gap
gap: spacingSemantics.xs           // 12px

// Tight icon spacing
gap: spacingSemantics.3xs          // 4px`}</CodeBlock>
            </div>
          </section>

          {/* Token Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Numeric Scale</h3>
              <SpecTable
                headers={['Token', 'Value', 'Pixels']}
                rows={Object.entries(spacing).map(([key, value]) => [
                  <code>spacing[{key}]</code>,
                  value,
                  `${parseInt(value)}px`,
                ])}
              />
            </div>
          </section>

          {/* Design Guidance */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Design Guidance</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Spacing Guidelines</h3>
              <SpecTable
                headers={['Context', 'Recommended Spacing']}
                rows={[
                  ['Icon to text', '4-8px (3xs-2xs)'],
                  ['Button padding', '12-16px (xs-sm)'],
                  ['Card padding', '16-24px (sm-md)'],
                  ['Section gap', '24-48px (md-xl)'],
                  ['Page sections', '48-64px (xl-2xl)'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Best Practices</h3>
              <SpecTable
                headers={['Do', "Don't"]}
                rows={[
                  ['Use spacing tokens consistently', 'Use arbitrary pixel values'],
                  ['Prefer semantic aliases for clarity', 'Use numeric scale for everything'],
                  ['Follow the 4px grid', 'Use odd values like 5px or 7px'],
                  ['Use larger spacing for section breaks', 'Use same spacing everywhere'],
                  ['Adjust spacing for density needs', 'Ignore context when choosing spacing'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
