import { useEffect, useMemo, useState } from 'react'

const EVIDENCE_ANIMATION_MS = 260

export default function EvidenceDisplay({
  evidenceItems = [],
  visible,
  evidenceOffset,
}) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [shouldRender, setShouldRender] = useState(visible)
  const [isExiting, setIsExiting] = useState(false)
  const [displayEvidenceItems, setDisplayEvidenceItems] = useState([])
  const [displayOffset, setDisplayOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')
    const updateDesktopState = () => setIsDesktop(mediaQuery.matches)

    updateDesktopState()
    mediaQuery.addEventListener('change', updateDesktopState)

    return () => mediaQuery.removeEventListener('change', updateDesktopState)
  }, [])

  const validEvidenceItems = useMemo(
    () => evidenceItems.filter(({ evidenceKey, src }) => Boolean(evidenceKey && src)),
    [evidenceItems],
  )
  const viewportOffset = isDesktop
    ? evidenceOffset?.desktop ?? evidenceOffset
    : evidenceOffset?.mobile ?? evidenceOffset
  const nextOffsetX = Number.isFinite(viewportOffset?.x) ? viewportOffset.x : 0
  const nextOffsetY = Number.isFinite(viewportOffset?.y) ? viewportOffset.y : 0

  useEffect(() => {
    let frameId

    if (visible && validEvidenceItems.length > 0) {
      frameId = window.requestAnimationFrame(() => {
        setDisplayEvidenceItems(validEvidenceItems)
        setDisplayOffset({ x: nextOffsetX, y: nextOffsetY })
        setShouldRender(true)
        setIsExiting(false)
      })
      return () => window.cancelAnimationFrame(frameId)
    }

    if (!shouldRender) {
      return
    }

    frameId = window.requestAnimationFrame(() => {
      setIsExiting(true)
    })
    const timeoutId = window.setTimeout(() => {
      setShouldRender(false)
      setIsExiting(false)
    }, EVIDENCE_ANIMATION_MS)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
    }
  }, [nextOffsetX, nextOffsetY, shouldRender, validEvidenceItems, visible])

  if (!shouldRender || displayEvidenceItems.length === 0) {
    return null
  }

  const evidenceCount = displayEvidenceItems.length
  const gridLayoutClass =
  evidenceCount >= 3
    ? 'max-w-[170px] grid-cols-1 md:max-w-[980px] md:grid-cols-3'
    : evidenceCount === 2
      ? 'max-w-[170px] grid-cols-1 md:max-w-[680px] md:grid-cols-2'
      : 'max-w-[220px] grid-cols-1'

  return (
    <aside
      className={`pointer-events-none absolute inset-0 z-[3] grid place-items-center transition-opacity duration-300 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transform: `translate(${displayOffset.x}px, ${displayOffset.y}px)` }}
      aria-label="Evidence"
    >
      <style>{`
        @keyframes evidenceMosaicRevealIn {
          0% { opacity: 1; background-size: 34px 34px; }
          100% { opacity: 0; background-size: 6px 6px; }
        }
        @keyframes evidenceMosaicRevealOut {
          0% { opacity: 0; background-size: 6px 6px; }
          100% { opacity: 1; background-size: 34px 34px; }
        }
        @keyframes evidenceCardIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes evidenceCardOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.96); }
        }
      `}</style>
      <div className={`grid w-full items-start gap-3 ${gridLayoutClass}`}>
        {displayEvidenceItems.map(({ evidenceKey, src }) => (
          <div
            key={evidenceKey}
            className="relative overflow-hidden rounded-2xl border-4 border-solid border-retro-charcoal400 bg-retro-stone shadow-xl backdrop-blur-sm"
            style={{
              animation: `${
                isExiting ? 'evidenceCardOut' : 'evidenceCardIn'
              } ${EVIDENCE_ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
            }}
          >
            <img
              src={src}
              alt={`Evidence: ${evidenceKey}`}
              className="block h-auto w-full object-contain bg-black/5"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: '#0a0a0a',
                backgroundImage:
                  'linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                animation: `${
                  isExiting ? 'evidenceMosaicRevealOut' : 'evidenceMosaicRevealIn'
                } ${EVIDENCE_ANIMATION_MS}ms steps(8, end) forwards`,
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </aside>
  )
}
