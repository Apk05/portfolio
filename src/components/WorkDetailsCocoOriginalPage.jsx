import { useNavigate } from 'react-router-dom'
import { quickViewLinks } from '../config/quickViewLinks.js'
import { getWorkMediaFrameClass } from '../config/workDetailsMedia.js'

const mediaItems = [
  { id: '1', type: 'image', src: '/assets/Works/coco-original/cocosite-1.jpg' },
  { id: '2', type: 'video', src: '/assets/Works/coco-original/cocosite-2.mp4', narrow: true },
  { id: '3', type: 'image', src: '/assets/Works/coco-original/cocosite-3.jpg' },
  { id: '4', type: 'video', src: '/assets/Works/coco-original/cocosite-4.mp4', narrow: true },
  { id: '5', type: 'image', src: '/assets/Works/coco-original/cocosite-5.jpg' },
  { id: '6', type: 'image', src: '/assets/Works/coco-original/cocosite-6.jpg' },
  { id: '7', type: 'image', src: '/assets/Works/coco-original/cocosite-7.jpg' },
  { id: '8', type: 'video', src: '/assets/Works/coco-original/cocosite-8.mp4', narrow: true },
]

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

export default function WorkDetailsCocoOriginalPage() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto flex h-[100dvh] w-full max-w-[1440px] flex-col gap-0 overflow-hidden bg-retro-base px-5 py-1 font-retro text-retro-textLight md:h-screen md:gap-2 md:py-3">
      <div className="relative h-[50vh] md:h-[60vh] min-h-0 overflow-hidden rounded-[32px] border-[6px] border-solid border-retro-charcoalShadow bg-retro-charcoal950 p-[10px]">
        <div className="flex h-full items-center gap-20 overflow-x-auto overflow-y-hidden rounded-2xl bg-retro-charcoal950 p-3 pr-10 md:gap-32 md:p-5 md:pr-24">
          <section className="flex h-full w-[355px] min-w-[355px] shrink-0 flex-col justify-between rounded-2xl border-2 border-retro-charcoal700 p-4">
            <h1 className="text-[28px] uppercase leading-none text-retro-textLight md:text-[32px]">
              COCO ORIGINAL
            </h1>
            <div className="mt-2 space-y-3 text-[13px] leading-[1.3] text-retro-charcoal400 md:text-[16px]">
              <p>
              Worked with the creative directors from both our studio and the client to design the screens for a new online store. We added specific features for local shoppers, like a custom payment flow. The final website was so well-received that it convinced another local brand to hire our studio.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Tools Used: Figma</li>
                <li>Contribution: Creative Direction, UI/UX Design, Shopping Layout</li>
              </ul>
              <p>
                <a
                  href="https://cocooriginalmm.com/"
                  className="underline decoration-retro-textLight underline-offset-2 text-retro-textLight"
                >
                  VIEW THE SITE
                </a>
              </p>
            </div>
          </section>

          {mediaItems.map(({ id, type, src, narrow = false }) => (
            <article
              key={id}
              className={`relative shrink-0 overflow-hidden rounded-xl border-[3px] border-solid border-retro-charcoal800 bg-retro-charcoal900 ${getWorkMediaFrameClass(narrow)}`}
            >
              {type === 'video' ? (
                <video
                  src={src}
                  className="block h-full w-auto max-w-none object-contain object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="block h-full w-auto max-w-none object-contain object-center"
                />
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="mt-1 mb-1 flex min-h-0 flex-1 flex-col gap-2 md:mt-0 md:mb-0">
        <div className="flex items-center justify-between px-[2px]">
          <button
            type="button"
            onClick={() => navigate('/quick-view', { state: { focusFeaturedWorks: true } })}
            className={topIconButtonClass}
            aria-label="Back"
          >
            <img src="/assets/icons/Back.svg" alt="" aria-hidden="true" className="h-6 w-6" />
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
                {...(isCv ? { download: quickViewLinks.cvDownloadFilename } : {})}
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
