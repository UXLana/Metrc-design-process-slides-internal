'use client'

import React from 'react'
import {
  colors,
  fontFamilies,
  fontWeights,
  spacing,
  borderRadius,
  header,
} from '@/styles/design-tokens'

interface AppHeaderProps {
  orgName?: string
  userInitials?: string
}

export default function AppHeader({
  orgName = 'Holistic Industries',
  userInitials = 'JB',
}: AppHeaderProps) {
  return (
    <header
      role="banner"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: header.height,
        padding: `0 ${spacing.xl}`,
        backgroundColor: colors.brand.darker,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        fontFamily: fontFamilies.body,
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      {/* Left — Logo */}
      <img
        src="/metrc-logo.png"
        alt="Metrc Retail ID"
        style={{
          height: '36px',
          width: 'auto',
        }}
      />

      {/* Right — Org + Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: fontWeights.regular,
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          {orgName}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M4 6L8 10L12 6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: borderRadius.full,
            backgroundColor: colors.brand.default,
            color: colors.text.highEmphasis.onDark,
            fontSize: '12px',
            fontWeight: fontWeights.semibold,
            letterSpacing: '0.3px',
            flexShrink: 0,
          }}
        >
          {userInitials}
        </div>
      </div>
    </header>
  )
}
