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
      <div className="w-fit max-w-[400px] overflow-hidden rounded-[28px] border-[4px] border-solid border-retro-charcoal400 bg-retro-orange500 shadow-xl backdrop-blur-sm]">
        <div className=" bg-retro-orange500 px-5 py-2 text-center">
          <span className="font-retro text-[24px] uppercase leading-none tracking-[0.08em] text-retro-stone">
            Result
          </span>
        </div>
        <p className="bg-retro-stone/95 px-8 py-7 text-center font-retro text-[36px] uppercase leading-[0.95] tracking-[0.02em] text-retro-charcoal950">
          {result}
        </p>
      </div>
    </aside>
  )
}
