// LatherForge app service worker — makes /app/ work offline.
const CACHE = 'lf-app-v1'
const SHELL = ['/app/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png']

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE)
    await cache.addAll(SHELL)
    // Also precache the JS/CSS the app page loads, so it works offline on the next launch
    const html = await (await cache.match('/app/')).text()
    const assets = [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+)"/g)].map(m => m[1])
    await cache.addAll([...new Set(assets)])
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(k => k.startsWith('lf-app-') && k !== CACHE).map(k => caches.delete(k)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const req = event.request
  const url = new URL(req.url)
  if (req.method !== 'GET' || url.origin !== self.location.origin) return

  // Pages: network first, fall back to the cached app shell when offline
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(async () =>
      (await caches.match(req, { ignoreSearch: true })) || caches.match('/app/')
    ))
    return
  }

  // Hashed build assets never change: cache first
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)) }
      return res
    })))
  }
})
