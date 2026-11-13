import Image from 'next/image'

export default function AppPreview({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="app-preview">
      <a href="/images/latherforge-recipe-preview.jpg" target="_blank" rel="noopener noreferrer" aria-label="View full-size LatherForge recipe builder screenshot (opens in a new tab)">
        <Image src="/images/latherforge-recipe-preview.jpg" width={1280} height={720} alt="LatherForge recipe builder showing an example olive oil formula, oil percentages, calculated amounts and recipe properties." priority={priority} sizes="(max-width: 860px) 100vw, 640px" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '12px' }} />
      </a>
      <figcaption style={{ fontSize: '.85rem', lineHeight: 1.6, marginTop: '12px' }}>
        A real look inside LatherForge. Example formula shown for demonstration, not a tested recipe. Tap the image to enlarge.
      </figcaption>
    </figure>
  )
}
