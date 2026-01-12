'use client'

import React, { useState } from 'react'
import { StyleguideLayout, sharedStyles, CodeBlock, SpecTable } from '../shared'
import { colors, typography, fontFamilies, fontWeights } from '@/styles/design-tokens'
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
// TYPOGRAPHY SAMPLE COMPONENT
// =============================================================================

function TypographySample({ 
  name, 
  style, 
  sampleText 
}: { 
  name: string
  style: React.CSSProperties
  sampleText?: string
}) {
  return (
    <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${colors.border.light}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <span style={{ ...typography.label.sm, color: colors.text.highEmphasis, fontWeight: 600 }}>{name}</span>
        <div style={{ ...typography.code.sm, color: colors.text.mediumEmphasis, display: 'flex', gap: '16px' }}>
          <span><span style={{ color: colors.text.lowEmphasis }}>Size:</span> {style.fontSize}</span>
          <span><span style={{ color: colors.text.lowEmphasis }}>Line:</span> {style.lineHeight}</span>
          <span><span style={{ color: colors.text.lowEmphasis }}>Weight:</span> {style.fontWeight}</span>
        </div>
      </div>
      <p style={{ ...style, margin: 0 }}>
        {sampleText || 'The quick brown fox jumps over the lazy dog'}
      </p>
    </div>
  )
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function TypographyPage() {
  const [activePageTab, setActivePageTab] = useState<PageTab>('overview')

  return (
    <StyleguideLayout
      title="Typography"
      description="Typography system using DM Sans for display and body text, with JetBrains Mono for code. Designed for clarity and readability."
      activeId="typography"
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
          {/* Font Families */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Font Families</h2>
            <p style={sharedStyles.sectionDescription}>
              The design system uses two font families for different purposes.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div style={sharedStyles.card}>
                <h3 style={sharedStyles.cardTitle}>DM Sans</h3>
                <p style={{ ...typography.body.md, marginBottom: '16px' }}>
                  Primary typeface for all display, heading, body, and label text.
                </p>
                <p style={{ fontFamily: fontFamilies.display, fontSize: '32px', fontWeight: 600 }}>
                  Aa Bb Cc Dd Ee
                </p>
                <p style={{ fontFamily: fontFamilies.display, fontSize: '18px', marginTop: '8px' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
              </div>
              
              <div style={sharedStyles.card}>
                <h3 style={sharedStyles.cardTitle}>JetBrains Mono</h3>
                <p style={{ ...typography.body.md, marginBottom: '16px' }}>
                  Monospace typeface for code, technical content, and data.
                </p>
                <p style={{ fontFamily: fontFamilies.mono, fontSize: '24px', fontWeight: 400 }}>
                  Aa Bb Cc Dd Ee
                </p>
                <p style={{ fontFamily: fontFamilies.mono, fontSize: '14px', marginTop: '8px' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789 {"{}[]()<>=+-*/"} 
                </p>
              </div>
            </div>
            
            <div style={{ ...sharedStyles.card, marginTop: '24px' }}>
              <h3 style={sharedStyles.cardTitle}>Specifications</h3>
              <SpecTable
                headers={['Token', 'Value', 'Usage']}
                rows={[
                  [<code>fontFamilies.display</code>, '"DM Sans", sans-serif', 'Display, headings, body text'],
                  [<code>fontFamilies.body</code>, '"DM Sans", sans-serif', 'Body text, labels'],
                  [<code>fontFamilies.mono</code>, '"JetBrains Mono", monospace', 'Code, technical content'],
                ]}
              />
            </div>
          </section>

          {/* Font Weights */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Font Weights</h2>
            
            <div style={sharedStyles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {Object.entries(fontWeights).map(([name, value]) => (
                  <div key={name}>
                    <p style={{ fontFamily: fontFamilies.display, fontSize: '24px', fontWeight: value, marginBottom: '8px' }}>
                      Ag
                    </p>
                    <p style={{ ...typography.label.sm, color: colors.text.highEmphasis, textTransform: 'capitalize' }}>
                      {name}
                    </p>
                    <p style={{ ...typography.code.sm, color: colors.text.mediumEmphasis }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Display Styles */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Display Styles</h2>
            <p style={sharedStyles.sectionDescription}>
              Large-scale typography for hero sections, page titles, and marketing content.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(typography.display).map(([name, style]) => (
                <TypographySample 
                  key={name} 
                  name={`display.${name}`} 
                  style={style}
                  sampleText={name === '2xl' ? 'Hero Title' : name === 'xl' ? 'Page Header' : undefined}
                />
              ))}
            </div>
          </section>

          {/* Heading Styles */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Heading Styles</h2>
            <p style={sharedStyles.sectionDescription}>
              Section and content headings for organizing information hierarchy.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(typography.heading).map(([name, style]) => (
                <TypographySample key={name} name={`heading.${name}`} style={style} />
              ))}
            </div>
          </section>

          {/* Body Styles */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Body Styles</h2>
            <p style={sharedStyles.sectionDescription}>
              Paragraph and content text for readability and information density.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(typography.body).map(([name, style]) => (
                <TypographySample 
                  key={name} 
                  name={`body.${name}`} 
                  style={style}
                  sampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              ))}
            </div>
          </section>

          {/* Label Styles */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Label Styles</h2>
            <p style={sharedStyles.sectionDescription}>
              UI labels, buttons, and interactive element text.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(typography.label).map(([name, style]) => (
                <TypographySample key={name} name={`label.${name}`} style={style} sampleText="Button Label" />
              ))}
            </div>
          </section>

          {/* Code Styles */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Code Styles</h2>
            <p style={sharedStyles.sectionDescription}>
              Monospace typography for code blocks and technical content.
            </p>
            
            <div style={sharedStyles.card}>
              {Object.entries(typography.code).map(([name, style]) => (
                <TypographySample 
                  key={name} 
                  name={`code.${name}`} 
                  style={style}
                  sampleText="const component = <Avatar name='User' />"
                />
              ))}
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
              <CodeBlock>{`import { typography, fontFamilies, fontWeights } from '@/styles/design-tokens'`}</CodeBlock>
            </div>
            
            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Using Typography Tokens</h3>
              <CodeBlock>{`// Apply typography styles using spread
<h1 style={{ ...typography.display.lg }}>Page Title</h1>
<h2 style={{ ...typography.heading.h2 }}>Section Title</h2>
<p style={{ ...typography.body.md }}>Body text content</p>

// Labels and buttons
<label style={{ ...typography.label.sm }}>Form Label</label>
<button style={{ ...typography.label.md }}>Click Me</button>`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Font Families</h3>
              <CodeBlock>{`// Display and body text
fontFamily: fontFamilies.display  // "DM Sans", sans-serif
fontFamily: fontFamilies.body     // "DM Sans", sans-serif

// Code and technical content
fontFamily: fontFamilies.mono     // "JetBrains Mono", monospace`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Font Weights</h3>
              <CodeBlock>{`fontWeight: fontWeights.regular   // 400
fontWeight: fontWeights.medium    // 500
fontWeight: fontWeights.semibold  // 600
fontWeight: fontWeights.bold      // 700`}</CodeBlock>
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Code Blocks</h3>
              <CodeBlock>{`// Inline code
<code style={{ ...typography.code.sm }}>
  const x = 42
</code>

// Code block
<pre style={{ ...typography.code.md }}>
  {codeContent}
</pre>`}</CodeBlock>
            </div>
          </section>

          {/* Token Reference */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Token Reference</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Display Specifications</h3>
              <SpecTable
                headers={['Token', 'Size', 'Weight', 'Line Height', 'Letter Spacing']}
                rows={Object.entries(typography.display).map(([name, style]) => [
                  <code>typography.display.{name}</code>,
                  style.fontSize,
                  style.fontWeight,
                  style.lineHeight,
                  style.letterSpacing,
                ])}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Heading Specifications</h3>
              <SpecTable
                headers={['Token', 'Size', 'Weight', 'Line Height', 'Letter Spacing']}
                rows={Object.entries(typography.heading).map(([name, style]) => [
                  <code>typography.heading.{name}</code>,
                  style.fontSize,
                  style.fontWeight,
                  style.lineHeight,
                  style.letterSpacing,
                ])}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Body Specifications</h3>
              <SpecTable
                headers={['Token', 'Size', 'Weight', 'Line Height', 'Letter Spacing']}
                rows={Object.entries(typography.body).map(([name, style]) => [
                  <code>typography.body.{name}</code>,
                  style.fontSize,
                  style.fontWeight,
                  style.lineHeight,
                  style.letterSpacing,
                ])}
              />
            </div>
          </section>

          {/* Design Guidance */}
          <section style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Design Guidance</h2>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>When to Use Each Style</h3>
              <SpecTable
                headers={['Style', 'Usage']}
                rows={[
                  ['display.2xl/xl', 'Hero sections, marketing pages, landing page headlines'],
                  ['display.lg/md', 'Page titles, major section headers'],
                  ['heading.h1-h5', 'Content sections, card headers, sidebar titles'],
                  ['body.lg/md/sm', 'Paragraphs, descriptions, content text'],
                  ['label.lg/md/sm', 'Buttons, form labels, navigation items'],
                  ['code.md/sm', 'Code snippets, technical content, data values'],
                ]}
              />
            </div>

            <div style={sharedStyles.card}>
              <h3 style={sharedStyles.cardTitle}>Best Practices</h3>
              <SpecTable
                headers={['Do', "Don't"]}
                rows={[
                  ['Use display styles sparingly for impact', 'Use display for body content'],
                  ['Maintain consistent heading hierarchy', 'Skip heading levels (h1 to h3)'],
                  ['Use body.md as default for content', 'Mix body sizes in same paragraph'],
                  ['Use monospace for all code content', 'Use body fonts for code'],
                  ['Use label styles for UI elements', 'Use heading styles for buttons'],
                ]}
              />
            </div>
          </section>
        </>
      )}
    </StyleguideLayout>
  )
}
