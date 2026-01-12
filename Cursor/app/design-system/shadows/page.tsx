'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, typography, borderRadius, shadows, shadowSemantics } from '@/styles/design-tokens'
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

export default function ShadowsPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Shadows"
      description="Elevation shadows for creating depth and visual hierarchy. From subtle lifts to prominent overlays."
      activeId="shadows"
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
            <h2 style={sharedStyles.sectionTitle}>Elevation Scale</h2>
            <p style={sharedStyles.sectionDescription}>
              Progressive shadow scale for different elevation levels.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                {Object.entries(shadows).filter(([name]) => !name.includes('brand') && name !== 'inner').map(([name, value]) => (
                  <div key={name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      background: colors.background.default,
                      borderRadius: borderRadius.lg,
                      boxShadow: value,
                      margin: '16px auto',
                    }} />
                    <div style={{ ...typography.label.sm, color: colors.text.highEmphasis }}>{name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value']}
                rows={Object.entries(shadows).filter(([name]) => !name.includes('brand') && name !== 'inner').map(([name, value]) => [
                  <code>shadows.{name}</code>,
                  <span style={{ ...typography.code.sm, fontSize: '11px' }}>{value}</span>,
                ])}
              />
            </div>
          </section>

          {/* Special Shadows */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Special Shadows</h2>
            <p style={sharedStyles.sectionDescription}>
              Inner shadows and brand-colored shadows for special effects.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'flex', gap: '48px', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '80px',
                    background: colors.background.default,
                    borderRadius: borderRadius.md,
                    boxShadow: shadows.inner,
                    margin: '16px auto',
                  }} />
                  <div style={{ ...typography.label.sm, color: colors.text.highEmphasis }}>inner</div>
                  <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis, marginTop: '4px' }}>
                    Inset shadow
                  </div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '80px',
                    background: colors.brand.primary,
                    borderRadius: borderRadius.md,
                    boxShadow: shadows.brand,
                    margin: '16px auto',
                  }} />
                  <div style={{ ...typography.label.sm, color: colors.text.highEmphasis }}>brand</div>
                  <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis, marginTop: '4px' }}>
                    Brand colored
                  </div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '80px',
                    background: colors.brand.primary,
                    borderRadius: borderRadius.md,
                    boxShadow: shadows.brandLg,
                    margin: '16px auto',
                  }} />
                  <div style={{ ...typography.label.sm, color: colors.text.highEmphasis }}>brandLg</div>
                  <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis, marginTop: '4px' }}>
                    Large brand
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Semantic Shadows */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Semantic Mappings</h2>
            <p style={sharedStyles.sectionDescription}>
              Component-specific shadow tokens for consistent elevation.
            </p>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {Object.entries(shadowSemantics).map(([name, value]) => (
                  <div key={name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100%',
                      height: '70px',
                      background: colors.background.default,
                      borderRadius: borderRadius.md,
                      boxShadow: value,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px',
                    }}>
                      <span style={{ ...typography.label.sm, color: colors.text.mediumEmphasis }}>{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Example */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Interactive Example</h2>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Card Hover Effect</h3>
              <p style={{ ...typography.body.sm, color: colors.text.mediumEmphasis, marginBottom: '16px' }}>
                Hover over the cards to see the shadow transition.
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    style={{
                      padding: '24px',
                      background: colors.background.default,
                      borderRadius: borderRadius.lg,
                      boxShadow: shadows.sm,
                      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = shadows.lg
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = shadows.sm
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{ ...typography.label.md, marginBottom: '8px' }}>Card {i}</div>
                    <div style={{ ...typography.body.sm, color: colors.text.mediumEmphasis }}>
                      Hover to elevate
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
              <CodeBlock>{`import { shadows, shadowSemantics } from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Base Scale</h3>
              <CodeBlock>{`// Elevation levels
<div style={{ boxShadow: shadows.xs }}>Subtle lift</div>
<div style={{ boxShadow: shadows.sm }}>Small shadow</div>
<div style={{ boxShadow: shadows.md }}>Medium shadow</div>
<div style={{ boxShadow: shadows.lg }}>Large shadow</div>
<div style={{ boxShadow: shadows.xl }}>Extra large shadow</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Semantic Tokens</h3>
              <CodeBlock>{`// Component-specific shadows
<div style={{ boxShadow: shadowSemantics.card }}>
  Card component
</div>

<div style={{ boxShadow: shadowSemantics.dropdown }}>
  Dropdown menu
</div>

<div style={{ boxShadow: shadowSemantics.modal }}>
  Modal dialog
</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Hover Effects</h3>
              <CodeBlock>{`// CSS-in-JS hover pattern
<button 
  style={{ boxShadow: shadows.xs }}
  onMouseEnter={(e) => e.target.style.boxShadow = shadows.sm}
  onMouseLeave={(e) => e.target.style.boxShadow = shadows.xs}
>
  Hoverable button
</button>

// With transform for floating effect
<div 
  style={{ 
    boxShadow: shadows.sm,
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.boxShadow = shadows.lg
    e.target.style.transform = 'translateY(-2px)'
  }}
>
  Floating card
</div>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Special Shadows</h3>
              <CodeBlock>{`// Inner shadow for inset effects
<input style={{ boxShadow: shadows.inner }} />

// Brand colored shadow for CTAs
<button style={{ 
  background: colors.brand.primary,
  boxShadow: shadows.brand 
}}>
  Primary CTA
</button>`}</CodeBlock>
            </div>
          </section>

          {/* Token Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Semantic Mappings</h3>
              <SpecTable
                headers={['Token', 'Maps To', 'Use Case']}
                rows={[
                  [<code>shadowSemantics.card</code>, 'shadows.sm', 'Default card elevation'],
                  [<code>shadowSemantics.cardHover</code>, 'shadows.md', 'Card hover state'],
                  [<code>shadowSemantics.dropdown</code>, 'shadows.lg', 'Dropdown menus'],
                  [<code>shadowSemantics.modal</code>, 'shadows.xl', 'Modal dialogs'],
                  [<code>shadowSemantics.button</code>, 'shadows.xs', 'Button base state'],
                  [<code>shadowSemantics.buttonHover</code>, 'shadows.sm', 'Button hover'],
                  [<code>shadowSemantics.inputFocus</code>, 'focus ring', 'Input focus state'],
                ]}
              />
            </div>
          </section>

          {/* Design Guidance */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Design Guidance</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Elevation Guidelines</h3>
              <SpecTable
                headers={['Level', 'Shadow', 'Use Case']}
                rows={[
                  ['0', 'none', 'Flat elements, backgrounds'],
                  ['1', 'xs/sm', 'Cards, buttons, inputs'],
                  ['2', 'md', 'Hover states, raised cards'],
                  ['3', 'lg', 'Dropdowns, popovers'],
                  ['4', 'xl/2xl', 'Modals, dialogs'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Best Practices</h3>
              <SpecTable
                headers={['Do', "Don't"]}
                rows={[
                  ['Use shadows to indicate elevation', 'Use shadows purely for decoration'],
                  ['Increase shadow on hover for feedback', 'Use same shadow for all states'],
                  ['Use semantic tokens for components', 'Create custom shadow values'],
                  ['Animate shadows smoothly (0.2s)', 'Use instant shadow transitions'],
                  ['Match shadow intensity to importance', 'Use xl shadows on small elements'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
