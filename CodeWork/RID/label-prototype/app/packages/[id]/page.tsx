'use client'

import React from 'react'
import ComingSoon from '@/local-components/ComingSoon'
import { Package } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function PackageDetailsPage() {
  const params = useParams()
  const id = params.id as string

  return (
    <ComingSoon 
      title="Package Details" 
      description={`Detailed view for package ${id}.`} 
      icon={<Package size={32} />}
    />
  )
}
