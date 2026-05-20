export default function ResultDisplay({ result, visible, resultOffset }) {
  if (!visible || !result) {
    return null
  }

  const offsetX = Number.isFinite(resultOffset?.x) ? resultOffset.x : 0
  const offsetY = Number.isFinite(resultOffset?.y) ? resultOffset.y : -64

  return (
    <aside
      className="pointer-events-none absolute inset-0 z-[3] grid place-items-center px-4"
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      aria-label="Result"
    >
      <div className="w-fit max-w-[240px] overflow-hidden rounded-2xl border-2 border-solid border-retro-charcoal400 bg-retro-orange500 shadow-xl backdrop-blur-sm md:max-w-[400px] md:rounded-[28px] md:border-[4px]">
        <div className="bg-retro-orange500 px-3 py-1.5 text-center md:px-5 md:py-2">
          <span className="font-retro text-[16px] uppercase leading-none tracking-[0.08em] text-retro-stone md:text-[24px]">
            Result
          </span>
        </div>
        <p className="bg-retro-stone/95 px-4 py-4 text-center font-retro text-[22px] uppercase leading-[0.95] tracking-[0.02em] text-retro-charcoal950 md:px-8 md:py-7 md:text-[36px]">
          {result}
        </p>
      </div>
    </aside>
  )
}
