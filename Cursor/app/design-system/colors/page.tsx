'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, borderRadius } from '@/styles/design-tokens'
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
// COLOR SWATCH COMPONENT
// =============================================================================

function ColorSwatch({ 
  name, 
  value, 
  onDarkBg = false,
}: { 
  name: string
  value: string
  onDarkBg?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const isTransparent = value.includes('rgba')
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  
  const checkerboardBg = `
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%)
  `
  
  return (
    <div 
      onClick={copyToClipboard}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.15s ease',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '80px',
        borderRadius: borderRadius.md,
        overflow: 'hidden',
        border: `1px solid ${colors.border.light}`,
        marginBottom: '8px',
        ...(onDarkBg ? { background: colors.brand.primary } : {}),
      }}>
        {isTransparent && !onDarkBg && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: checkerboardBg,
            backgroundSize: '12px 12px',
            backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
          }} />
        )}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: value,
        }} />
        {copied && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            fontSize: '12px',
            fontWeight: 600,
          }}>
            Copied!
          </div>
        )}
      </div>
      <div style={{ fontSize: '12px', fontWeight: 600, color: colors.text.highEmphasis }}>
        {name}
      </div>
      <div style={{ fontSize: '11px', color: colors.text.mediumEmphasis, fontFamily: 'monospace' }}>
        {value}
      </div>
    </div>
  )
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function ColorsPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Colors"
      description="The color system provides a comprehensive palette for creating consistent, accessible interfaces across the design system."
      activeId="colors"
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
          {/* Brand Colors */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Brand Colors</h2>
            <p style={sharedStyles.sectionDescription}>
              Core brand colors that define the visual identity.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <ColorSwatch name="Primary" value={colors.brand.primary} />
                <ColorSwatch name="Primary Light" value={colors.brand.primaryLight} />
                <ColorSwatch name="Primary Dark" value={colors.brand.primaryDark} />
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Usage']}
                rows={[
                  [<code>colors.brand.primary</code>, colors.brand.primary, 'Primary brand color, main CTAs'],
                  [<code>colors.brand.primaryLight</code>, colors.brand.primaryLight, 'Hover states, secondary emphasis'],
                  [<code>colors.brand.primaryDark</code>, colors.brand.primaryDark, 'Active states, dark mode'],
                ]}
              />
            </div>
          </section>

          {/* Primary Palette */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Primary Palette</h2>
            <p style={sharedStyles.sectionDescription}>
              Extended primary color scale derived from the brand color.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
                {Object.entries(colors.primary).map(([key, value]) => (
                  <ColorSwatch key={key} name={key} value={value} />
                ))}
              </div>
            </div>
          </section>

          {/* Secondary Palette */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Secondary Palette</h2>
            <p style={sharedStyles.sectionDescription}>
              Secondary color scale for accents and highlights.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
                {Object.entries(colors.secondary).map(([key, value]) => (
                  <ColorSwatch key={key} name={key} value={value} />
                ))}
              </div>
            </div>
          </section>

          {/* Neutral Colors */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Neutral Colors</h2>
            <p style={sharedStyles.sectionDescription}>
              Grayscale palette for text, backgrounds, and borders.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                {Object.entries(colors.neutral).map(([key, value]) => (
                  <ColorSwatch key={key} name={key} value={value} />
                ))}
              </div>
            </div>
          </section>

          {/* Semantic Colors */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Semantic Colors</h2>
            <p style={sharedStyles.sectionDescription}>
              Contextual colors for feedback and status indicators.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {Object.entries(colors.semantic).map(([name, variants]) => (
                <div key={name} style={sharedStyles.card}>
                  <h3 style={{ ...sharedStyles.cardTitle, textTransform: 'capitalize' }}>{name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {Object.entries(variants).map(([variant, value]) => (
                      <ColorSwatch key={variant} name={variant} value={value} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Text Colors */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Text Colors</h2>
            <p style={sharedStyles.sectionDescription}>
              Text colors with varying emphasis levels for light and dark backgrounds.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div style={sharedStyles.card}>
                <h3 style={sharedStyles.cardTitle}>On Light Background</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <ColorSwatch name="High Emphasis" value={colors.text.highEmphasis} />
                  <ColorSwatch name="Medium Emphasis" value={colors.text.mediumEmphasis} />
                  <ColorSwatch name="Low Emphasis" value={colors.text.lowEmphasis} />
                  <ColorSwatch name="Disabled" value={colors.text.disabled} />
                </div>
              </div>
              
              <div style={sharedStyles.card}>
                <h3 style={sharedStyles.cardTitle}>On Dark Background</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <ColorSwatch name="High Emphasis" value={colors.text.highEmphasisOnDark} onDarkBg />
                  <ColorSwatch name="Medium Emphasis" value={colors.text.mediumEmphasisOnDark} onDarkBg />
                  <ColorSwatch name="Low Emphasis" value={colors.text.lowEmphasisOnDark} onDarkBg />
                  <ColorSwatch name="Disabled" value={colors.text.disabledOnDark} onDarkBg />
                </div>
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
              <CodeBlock>{`import { colors } from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Brand Colors</h3>
              <CodeBlock>{`// Primary brand color
background: colors.brand.primary    // #1B4332

// Brand variants
background: colors.brand.primaryLight  // #2D6A4F
background: colors.brand.primaryDark   // #081C15`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Text Colors</h3>
              <CodeBlock>{`// On light backgrounds
color: colors.text.highEmphasis      // High contrast
color: colors.text.mediumEmphasis    // Secondary text
color: colors.text.lowEmphasis       // Tertiary text
color: colors.text.disabled          // Disabled state

// On dark backgrounds
color: colors.text.highEmphasisOnDark
color: colors.text.mediumEmphasisOnDark`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Semantic Colors</h3>
              <CodeBlock>{`// Success states
color: colors.semantic.success.main
background: colors.semantic.success.light

// Error states
color: colors.semantic.error.main
background: colors.semantic.error.light

// Warning states
color: colors.semantic.warning.main

// Info states
color: colors.semantic.info.main`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Neutral & Border Colors</h3>
              <CodeBlock>{`// Neutral palette (100-900)
background: colors.neutral[100]  // Light gray
background: colors.neutral[500]  // Medium gray
background: colors.neutral[900]  // Dark gray

// Border colors
border: \`1px solid \${colors.border.light}\`
border: \`1px solid \${colors.border.medium}\``}</CodeBlock>
            </div>
          </section>

          {/* Tokens Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Brand Colors</h3>
              <SpecTable
                headers={['Token', 'Value', 'Usage']}
                rows={[
                  [<code>colors.brand.primary</code>, colors.brand.primary, 'Primary brand color'],
                  [<code>colors.brand.primaryLight</code>, colors.brand.primaryLight, 'Hover states'],
                  [<code>colors.brand.primaryDark</code>, colors.brand.primaryDark, 'Active/dark states'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Text Colors</h3>
              <SpecTable
                headers={['Token', 'Value', 'Usage']}
                rows={[
                  [<code>colors.text.highEmphasis</code>, colors.text.highEmphasis, 'Primary text'],
                  [<code>colors.text.mediumEmphasis</code>, colors.text.mediumEmphasis, 'Secondary text'],
                  [<code>colors.text.lowEmphasis</code>, colors.text.lowEmphasis, 'Tertiary text'],
                  [<code>colors.text.disabled</code>, colors.text.disabled, 'Disabled text'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Semantic Colors</h3>
              <SpecTable
                headers={['Category', 'Main', 'Light', 'Dark']}
                rows={[
                  ['Success', colors.semantic.success.main, colors.semantic.success.light, colors.semantic.success.dark],
                  ['Error', colors.semantic.error.main, colors.semantic.error.light, colors.semantic.error.dark],
                  ['Warning', colors.semantic.warning.main, colors.semantic.warning.light, colors.semantic.warning.dark],
                  ['Info', colors.semantic.info.main, colors.semantic.info.light, colors.semantic.info.dark],
                ]}
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
                  ['Use brand.primary for primary CTAs', 'Use multiple brand colors for CTAs'],
                  ['Use semantic colors for status indicators', 'Use arbitrary colors for feedback'],
                  ['Use text.highEmphasis for important content', 'Use low emphasis for headings'],
                  ['Use neutral palette for backgrounds', 'Use brand colors for large backgrounds'],
                  ['Maintain 4.5:1 contrast for text', 'Use low contrast text combinations'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
