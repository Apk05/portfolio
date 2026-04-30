import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  const storyButtonBaseClass =
    'flex h-full min-h-[64px] flex-col items-center justify-center rounded-[32px] border-b-[10px] border-solid px-4 py-4 text-center text-[24px] uppercase leading-none transition-all duration-150 md:min-h-0'
  const storyEnabledClass = `${storyButtonBaseClass} border-retro-primaryShadow bg-retro-primary text-retro-textLight hover:bg-retro-orange400 active:translate-y-[2px] active:border-b-[6px]`
  const storyNeutralClass = `${storyButtonBaseClass} border-retro-charcoalShadow bg-retro-charcoal text-retro-textLight hover:bg-retro-charcoal800 active:translate-y-[2px] active:border-b-[6px]`

  return (
    <main className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-0 overflow-hidden bg-retro-base px-5 py-1 text-retro-textLight md:h-screen md:gap-2 md:py-3">
      <div className="relative h-[50vh] md:h-[60vh] min-h-0 overflow-hidden rounded-[32px] border-[6px] border-solid border-retro-charcoalShadow">
        <img
          src="/assets/backgrounds/home.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 -translate-y-6">
          <img
            src="/assets/popups/Title.png"
            alt="Aung Pyae Kyaw title"
            className="h-auto w-full max-w-[400px] object-contain"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-retro-charcoal px-5 pb-[14px] pt-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/icons/Icon=down arrow, size=md.svg"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 md:h-8 md:w-8"
            />
            <p className="text-[14px] leading-[1.25] text-center md:text-[28px]">
              Select a mode to continue.
            </p>
            <img
              src="/assets/icons/Icon=down arrow, size=md.svg"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 md:h-8 md:w-8"
            />
          </div>
        </div>
      </div>

      <div className="mt-2 mb-1 flex min-h-0 flex-1 flex-col gap-2 md:mt-0 md:mb-0">
        <div className="h-[28px] px-[2px] md:h-[32px]" aria-hidden="true" />
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-[6px] pb-2 md:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate('/story-selector')}
            className={storyEnabledClass}
          >
            <span className="text-[24px] uppercase leading-none">Start Story Mode</span>
            <img
              src="/assets/icons/Icon=start, size=md.svg"
              alt="Start Story Mode"
              className="mt-4 hidden h-32 w-32 opacity-100 transition-opacity duration-150 md:block"
            />
          </button>
          <button
            type="button"
            onClick={() => navigate('/quick-view')}
            className={storyNeutralClass}
          >
            <span className="text-[24px] uppercase leading-none">Quick View</span>
            <img
              src="/assets/icons/Icon=quick view, size=md.svg"
              alt="Quick View"
              className="mt-4 hidden h-32 w-32 opacity-100 transition-opacity duration-150 md:block"
            />
          </button>
        </div>
      </div>
    </main>
  )
}
