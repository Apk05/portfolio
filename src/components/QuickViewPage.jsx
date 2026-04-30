import { useNavigate } from 'react-router-dom'
import { quickViewLinks } from '../config/quickViewLinks.js'
import QuickViewAboutScene from './QuickViewAboutScene.jsx'

const topIconButtonClass =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-retro-charcoal800 text-retro-textDark transition-all duration-150 hover:bg-retro-charcoal500 active:translate-y-[1px] disabled:cursor-not-allowed disabled:border-retro-charcoal400 disabled:bg-retro-charcoal400 disabled:opacity-50'

const storyButtonBaseClass =
  'flex h-full min-h-[88px] flex-col items-center justify-center rounded-[32px] border-b-[10px] border-solid px-4 py-4 text-center text-[24px] uppercase leading-none transition-all duration-150 md:min-h-0'
const storyEnabledClass = `${storyButtonBaseClass} border-retro-primaryShadow bg-retro-primary text-retro-textLight hover:bg-retro-orange400 active:translate-y-[2px] active:border-b-[6px]`

const linkItems = [
  {
    label: 'CV',
    href: quickViewLinks.cv,
    key: 'cv',
    iconSrc: '/assets/icons/Icon=cv, size=giga.svg',
  },
  {
    label: 'Email',
    href: quickViewLinks.email,
    key: 'email',
    iconSrc: '/assets/icons/Icon=email, size=giga.svg',
  },
  {
    label: 'Linkedin',
    href: quickViewLinks.linkedin,
    key: 'linkedin',
    iconSrc: '/assets/icons/Icon=linked-in, size=giga.svg',
  },
  {
    label: 'Instagram',
    href: quickViewLinks.instagram,
    key: 'instagram',
    iconSrc: '/assets/icons/Icon=intagram, size=giga.svg',
  },
]

export default function QuickViewPage() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto flex h-[100dvh] w-full max-w-[1440px] flex-col gap-0 overflow-hidden bg-retro-base px-5 py-1 text-retro-textLight md:h-screen md:gap-2 md:py-3">
      <div className="relative h-[50vh] md:h-[60vh] min-h-0 overflow-hidden rounded-[32px] border-[6px] border-solid border-retro-charcoalShadow bg-retro-stone">
        <div className="absolute inset-0 min-h-0 overflow-y-auto">
          <QuickViewAboutScene />
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
            onClick={() => navigate('/story-selector')}
            className={topIconButtonClass}
            aria-label="Story selector"
          >
            <img
              src="/assets/icons/story.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-[6px] pb-2 md:grid-cols-4 md:pb-2">
          {linkItems.map(({ label, href, key, iconSrc }) => {
            const isExternal = /^https?:\/\//.test(href)
            const isCv = key === 'cv'
            return (
              <a
                key={key}
                href={href}
                className={storyEnabledClass}
                {...(isCv ? { download: 'Aung-Pyae-Kyaw-CV.pdf' } : {})}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="text-[24px] uppercase leading-none">{label}</span>
                <img
                  src={iconSrc}
                  alt={label}
                  className="mt-4 hidden h-32 w-32 opacity-100 transition-opacity duration-150 md:block"
                />
              </a>
            )
          })}
        </div>
      </div>
    </main>
  )
}
