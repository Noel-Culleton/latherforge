'use client'

import { useEffect, useState } from 'react'

const key = 'lf-first-page'
const formUrl = 'https://forms.zohopublic.eu/culletonnoelgm1/form/LatherForgeEarlyAccess/formperma/hNAOt2XHrbOxOMfDDaY8hViG7DnhJjJASyZ9UlZn3OM'

function firstPage() {
  const path = location.pathname
  try {
    const saved = sessionStorage.getItem(key)
    if (saved) return saved
    sessionStorage.setItem(key, path)
  } catch {
    // The form still works when browser storage is unavailable.
  }
  return path
}

export function RememberLandingPage() {
  useEffect(() => { firstPage() }, [])
  return null
}

function FormFrame({ src }: { src: string }) {
  return <iframe title="LatherForge Early Access" style={{ height: '500px', width: '100%', border: 'none' }} src={src} />
}

export function EarlyAccessForm() {
  const [src, setSrc] = useState('')
  useEffect(() => {
    const url = new URL(formUrl)
    url.searchParams.set('referrername', firstPage())
    setSrc(url.href)
  }, [])
  return <>{src && <FormFrame src={src} />}<noscript><FormFrame src={formUrl} /></noscript></>
}
