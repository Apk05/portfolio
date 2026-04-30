import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/useGame.js'
import { DEFAULT_SCENE_ID } from '../data/storyData.js'

const DEFAULT_BACKGROUND =
  '/assets/backgrounds/home.png'
const HOVERED_STORY_BACKGROUND =
  '/assets/backgrounds/la-persona-title.png'

export default function StorySelectorPage() {
  const navigate = useNavigate()
  const { goToScene } = useGame()
  const [isLaPersonaHovered, setIsLaPersonaHovered] = useState(false)

  const topIconButtonClass =
    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-retro-charcoal800 text-retro-textDark transition-all duration-150 hover:bg-retro-charcoal500 active:translate-y-[1px] disabled:cursor-not-allowed disabled:border-retro-charcoal400 disabled:bg-retro-charcoal400 disabled:opacity-50'

  const storyButtonBaseClass =
    'flex h-full min-h-[60px] flex-col items-center justify-center rounded-[32px] border-b-[10px] border-solid px-4 py-4 text-center text-[24px] uppercase leading-none transition-all duration-150 md:min-h-0'
  const storyEnabledClass = `${storyButtonBaseClass} border-retro-primaryShadow bg-retro-primary text-retro-textLight hover:bg-retro-orange400 active:translate-y-[2px] active:border-b-[6px]`
  const storyDisabledClass = `${storyButtonBaseClass} border-retro-charcoal800 bg-retro-charcoal800 text-retro-charcoal500 disabled:cursor-not-allowed`

  return (
    <main className="mx-auto flex h-[100dvh] w-full max-w-[1440px] flex-col gap-0 overflow-hidden bg-retro-base px-5 py-1 text-retro-textLight md:gap-2 md:py-3">
      <div className="relative h-[50vh] md:h-[60vh] min-h-0 overflow-hidden rounded-[32px] border-[6px] border-solid border-retro-charcoalShadow">
        <img
          src={isLaPersonaHovered ? HOVERED_STORY_BACKGROUND : DEFAULT_BACKGROUND}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/0" aria-hidden="true" />
        {!isLaPersonaHovered && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 -translate-y-6">
            <img
              src="/assets/popups/Title.png"
              alt="Aung Pyae Kyaw title"
              className="h-auto w-full max-w-[400px] object-contain"
            />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-retro-charcoal px-5 pb-[14px] pt-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/icons/Icon=down arrow, size=md.svg"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 md:h-8 md:w-8"
            />
            <p className="text-[14px] leading-[1.25] text-center md:text-[28px]">
              Choose a story to continue.
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

      <div className="mt-1 mb-1 flex min-h-0 flex-1 flex-col gap-2 md:mt-0 md:mb-0">
        <div className="flex items-center justify-between px-[2px]">
          <button
            type="button"
            onClick={() => navigate('/')}
            className={topIconButtonClass}
            aria-label="Back"
          >
            <img
              src="/assets/icons/Back.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
          <button
            type="button"
            onClick={() => navigate('/quick-view')}
            className={topIconButtonClass}
            aria-label="Quick view"
          >
            <img
              src="/assets/icons/Icon=quick view, size=md.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-[6px] pb-2 md:grid-cols-3">
          <button
            type="button"
            onMouseEnter={() => setIsLaPersonaHovered(true)}
            onMouseLeave={() => setIsLaPersonaHovered(false)}
            onFocus={() => setIsLaPersonaHovered(true)}
            onBlur={() => setIsLaPersonaHovered(false)}
            onClick={() => {
              goToScene(DEFAULT_SCENE_ID, 0)
              navigate('/game')
            }}
            className={storyEnabledClass}
          >
            <span className="text-[24px] uppercase leading-none">LA PERSONA</span>
            <img
              src="/assets/icons/Icon=la persona, size=md.svg"
              alt="La Persona"
              className="mt-4 hidden h-32 w-32 opacity-100 transition-opacity duration-150 md:block"
            />
          </button>
          <button type="button" disabled className={storyDisabledClass}>
            <span className="text-[24px] uppercase leading-none">THE SAND STUDIO</span>
            <img
              src="/assets/icons/Icon=the sand studio, size=md.svg"
              alt="The Sand Studio"
              className="mt-4 hidden h-32 w-32 opacity-40 transition-opacity duration-150 md:block"
            />
          </button>
          <button type="button" disabled className={storyDisabledClass}>
            <span className="text-[24px] uppercase leading-none">A DESIGNER&apos;S JOURNEY</span>
            <img
              src="/assets/icons/Icon=a designer's journey, size=md.svg"
              alt="A Designer's Journey"
              className="mt-4 hidden h-32 w-32 opacity-40 transition-opacity duration-150 md:block"
            />
          </button>
        </div>
      </div>
    </main>
  )
}
