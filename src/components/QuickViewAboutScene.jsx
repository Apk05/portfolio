import { useLayoutEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Figma: About Me (425:1600) — icon URLs from Figma export; replace with /public assets when they expire
const imgVelocity =
  'https://www.figma.com/api/mcp/asset/8471cb04-52fc-4b8f-a81e-892bd34aa078'
const imgVisualJudgment =
  'https://www.figma.com/api/mcp/asset/54c08869-4151-47c6-b1ee-b649c59bdc9a'
const imgAdaptability =
  'https://www.figma.com/api/mcp/asset/b25fda5b-be3c-42ee-abb0-eb3a6974bd66'
const imgTechnicalIntegration =
  'https://www.figma.com/api/mcp/asset/bfb8c15e-75ea-4def-a214-fa5675d909d5'

const strengths = [
  {
    id: 'velocity',
    title: 'Velocity',
    description: 'Rapid iteration without sacrificing quality.',
    src: imgVelocity,
    iconClass: 'rotate-[-90deg]',
  },
  {
    id: 'visual',
    title: 'Visual Judgment',
    description: 'Strong eye for composition, layout, and art direction.',
    src: imgVisualJudgment,
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    description:
      'Highly adaptable to new tools and software.',
    src: imgAdaptability,
  },
  {
    id: 'technical',
    title: 'Technical Integration',
    description:
      'Combines new AI tools (ChatGPT, image generators) with standard design software (Figma, Adobe).',
    src: imgTechnicalIntegration,
  },
]

const SHOW_CORE_STRENGTHS = false

const plusIconSrc = '/assets/icons/Icon=plus, size=md.svg'

const featuredWorkItems = [
  { id: 'la-persona', title: 'La Persona' },
  { id: 'krgogoods', title: 'Krgogoods' },
  { id: 'coco-original', title: 'COCO ORIGINAL' },
  { id: 'sand-lite-1000', title: 'SAND LITE 1000' },
  { id: 'playnvoice', title: 'PlaynVoice' },
  { id: 'duo-design-club', title: 'Duo Design Club' },
]

// Swap tool icons by only editing this map.
const toolIconMap = {
  figma: '/assets/icons/figma.svg',
  photoshop: '/assets/icons/photoshop.svg',
  illustrator: '/assets/icons/illustrator.svg',
  blender: '/assets/icons/blender.svg',
  spline: '/assets/icons/spline.png',
  jitterVideo: '/assets/icons/jitter.png',
  midjourney: '/assets/icons/cursor.svg',
  nanoBanana: '/assets/icons/nano-banana.svg',
  chatgpt: '/assets/icons/chatgpt.svg',
}

const coreSkillGroups = [
  {
    id: 'craft',
    title: 'Visual Craft',
    description:
      'Strong fundamentals in composition, typography, hierarchy, color, and art direction.',
  },
  {
    id: 'strategy',
    title: 'Strategic Thinking',
    description:
      'Translate business goals into clear creative direction and scalable design systems.',
  },
]

const toolGroups = [
  {
    id: 'primary',
    title: 'Primary',
    tools: [
      { id: 'figma', label: 'Figma', iconKey: 'figma' },
      { id: 'photoshop', label: 'Photoshop', iconKey: 'photoshop' },
      { id: 'illustrator', label: 'Illustrator', iconKey: 'illustrator' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    tools: [
      { id: 'midjourney', label: 'Midjourney', iconKey: 'midjourney' },
      { id: 'nano', label: 'Nano Banana', iconKey: 'nanoBanana' },
      { id: 'chatgpt', label: 'ChatGPT', iconKey: 'chatgpt' },
    ],
  },
  {
    id: 'motion',
    title: 'Motion & 3D',
    tools: [
      { id: 'spline', label: 'Spline', iconKey: 'spline' },
      { id: 'jitter-video', label: 'Jitter Video', iconKey: 'jitterVideo' },
      { id: 'blender', label: 'Blender', iconKey: 'blender' },
    ],
  },
]

const experienceItems = [
  {
    id: 'senior-creative',
    title: 'Founding Designer',
    meta: 'La Persona · 2025-Present',
    bullets: [
      'Purpose: Build a modern digital ID platform alternative to traditional business cards.',
      'Result: Designed the first version of the platform and the brand logo, helping to secure 4 early paying customers.',
    ],
  },
  {
    id: 'visual-designer',
    title: 'Graphic Designer',
    meta: 'APM Help · Remote: 2024 – 2026',
    bullets: [
      'Purpose: Make complex accounting services easy to understand through design.',
      'Result: Created clear marketing emails, presentations, landing pages, and event graphics that improved how the company communicated with clients.',
    ],
  },
  {
    id: 'freelance-designer',
    title: 'Digital Designer',
    meta: 'The Sand Studio · Part-Time: 2023 – Present',
    bullets: [
      'Purpose: Push boundaries with a multidisciplinary design collective.',
      'Achievements: Launched clothing e-commerce (50+ day-1 orders); designed interactive 3D scene using Spline 3D which got Honorable Mentions on Awwwards; crafted a unique mobile-first site inspired by vintage Apple/e-ink devices.',
    ],
  },
  {
    id: 'junior-designer',
    title: 'Curator',
    meta: 'Duo Design Club · Passion Project: 2025 – Present',
    bullets: [
      'Purpose: Support the creative community in Myanmar.',
      'Result: Started an Instagram page to highlight local artists, helping build a network for future collaborations.',
    ],
  },
]

export default function QuickViewAboutScene() {
  const navigate = useNavigate()
  const location = useLocation()
  const featuredWorksSectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!location.state?.focusFeaturedWorks) return
    const el = featuredWorksSectionRef.current
    if (!el) return
    el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'start' })
    const path = `${location.pathname}${location.search}`
    requestAnimationFrame(() => {
      navigate(path, { replace: true, state: {} })
    })
  }, [location.pathname, location.search, location.state?.focusFeaturedWorks, navigate])

  return (
    <div className="flex h-auto flex-col gap-2 p-2 font-retro bg-retro-charcoal950 md:h-full md:min-h-0 md:flex-row md:gap-6 md:overflow-x-auto md:overflow-y-hidden md:overscroll-none md:p-4">
      <section className="flex w-full min-w-0 flex-col rounded-[20px] md:h-full md:min-h-0 md:w-[500px] md:min-w-[760px] md:max-w-[500px] md:shrink-0 md:snap-start">
        <h2 className="shrink-0 py-2 text-center text-[20px] uppercase text-retro-charcoal500 md:text-[24px]">
          Identity
        </h2>
        <div className="md:min-h-0 md:flex-1">
          <div className="min-h-[200px] rounded-2xl border-2 border-retro-charcoal700 p-4 md:h-full md:min-h-0 md:p-5">
            <p className="text-[18px] leading-[1.55] md:text-[32px] md:leading-[1.35]">
              <span className="font-normal uppercase text-retro-textLight">Aung Pyae Kyaw</span>
              <span className="text-retro-textLight">
                {' '}
                - Product and Brand Designer focused on building digital experiences 
                that  drive results. I prototype B2B platforms that secure  users before development 
                even starts and design e-commerce sites that generate launch-day 
                sales. I combine clean visual design with rapid AI workflows to 
                turn ambitious ideas into live, market-ready products fast.
              </span>
            </p>
          </div>
        </div>
      </section>

      {SHOW_CORE_STRENGTHS && (
        <section className="flex w-full min-w-0 flex-col md:h-full md:min-h-0 md:min-w-[520px] md:shrink-0 md:snap-start">
        <h2 className="shrink-0 py-2 text-center text-[20px] uppercase text-retro-charcoal500 md:text-[24px]">
          Core Strengths
        </h2>
        <div className="md:min-h-0 md:flex-1">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-2 md:h-full md:min-h-0">
            {strengths.map(({ id, title, description, src, iconClass = '' }) => (
              <div
                key={id}
                className="flex flex-col rounded-2xl border-2 border-retro-charcoal700 p-3 md:h-full md:min-h-0 md:justify-between md:p-4"
              >
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center md:mb-3 md:h-12 md:w-12">
                  <div className={iconClass}>
                    <span
                      aria-hidden="true"
                      className="block h-8 w-8 bg-current text-retro-charcoal400 md:h-10 md:w-10"
                      style={{
                        WebkitMaskImage: `url(${src})`,
                        maskImage: `url(${src})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-retro-textLight">
                  <p className="text-[18px] uppercase leading-tight sm:text-[22px]">
                    {title}
                  </p>
                  <p className="text-[14px] leading-[1.45] text-retro-charcoal400 sm:text-[18px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      <section
        ref={featuredWorksSectionRef}
        className="flex w-full min-w-0 flex-col md:h-full md:min-h-0 md:min-w-[860px] md:shrink-0 md:snap-start"
      >
        <h2 className="shrink-0 py-2 text-center text-[20px] uppercase text-retro-charcoal500 md:text-[24px]">
          Featured Works
        </h2>
        <div className="md:min-h-0 md:flex-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 md:h-full md:grid-cols-3 md:auto-rows-fr">
            {featuredWorkItems.map(({ id, title }) => {
              const isLaPersona = id === 'la-persona'
              const isKrgogoods = id === 'krgogoods'
              const isCocoOriginal = id === 'coco-original'
              const isSandLite = id === 'sand-lite-1000'
              const isEnabled = isLaPersona || isKrgogoods || isCocoOriginal || isSandLite
              const Wrapper = isLaPersona || isKrgogoods || isCocoOriginal ? Link : 'article'
              const wrapperProps = isLaPersona
                ? { to: '/work/la-persona' }
                : isKrgogoods
                  ? { to: '/work/krgogoods' }
                  : isCocoOriginal
                    ? { to: '/work/coco-original' }
                    : {}

              return (
                isSandLite ? (
                  <button
                    key={id}
                    type="button"
                    onClick={() => navigate('/work/sand-lite-1000')}
                    className="flex min-h-[180px] flex-col justify-between rounded-2xl border-2 border-retro-charcoal700 p-3 text-left transition-colors hover:bg-retro-primary md:h-full md:min-h-0"
                  >
                    <p className="text-[18px] uppercase leading-tight text-retro-textLight md:text-[20px]">
                      {title}
                    </p>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-retro-charcoal700">
                      <img
                        src={plusIconSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                  </button>
                ) : (
                  <Wrapper
                    key={id}
                    className={`flex min-h-[180px] flex-col justify-between rounded-2xl border-2 p-3 transition-colors md:h-full md:min-h-0 ${
                      isEnabled
                        ? 'border-retro-charcoal700 hover:bg-retro-primary'
                        : 'cursor-not-allowed border-retro-charcoal700'
                    }`}
                    {...wrapperProps}
                  >
                    <p
                      className={`text-[18px] uppercase leading-tight md:text-[20px] ${
                        isEnabled ? 'text-retro-textLight' : 'text-retro-charcoal500'
                      }`}
                    >
                      {title}
                    </p>
                    {isEnabled ? (
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-retro-charcoal700">
                        <img
                          src={plusIconSrc}
                          alt=""
                          aria-hidden="true"
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                    ) : (
                      <span className="inline-flex h-9 self-start px-3 items-center justify-center rounded-full bg-retro-charcoal700 text-[11px] uppercase tracking-[0.08em] text-retro-charcoal400 md:text-[12px]">
                        Case Coming Soon
                      </span>
                    )}
                  </Wrapper>
                )
              )
            })}
          </div>
        </div>
      </section>

      <section className="flex w-full min-w-0 flex-col md:h-full md:min-h-0 md:min-w-[860px] md:shrink-0 md:snap-start">
        <div className="flex flex-col md:min-h-0 md:flex-1 ">
        <h2 className="shrink-0 py-2 text-center text-[20px] uppercase text-retro-charcoal500 md:text-[24px]">
          Core Skills
        </h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2">
              {coreSkillGroups.map(({ id, title, description }) => (
                <article
                  key={id}
                  className="rounded-2xl border-2 border-retro-charcoal700 p-3 md:p-4"
                >
                  <p className="text-[20px] uppercase leading-tight text-retro-textLight md:text-[24px]">
                    {title}
                  </p>
                  <p className="mt-2 text-[16px] leading-[1.35] text-retro-charcoal400 md:text-[20px]">
                    {description}
                  </p>
                </article>
              ))}
            </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:h-full md:min-h-0 md:flex-1 md:grid-cols-3 md:gap-4 md:auto-rows-fr">
            {toolGroups.map(({ id, title, tools }) => (
              <article key={id} className="flex flex-col p-0 md:h-full md:min-h-0 md:flex-1">
                <h3 className="text-center text-[20px] uppercase leading-none text-retro-charcoal500 md:text-[24px]">
                  {title}
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2 md:min-h-0 md:flex-1 md:auto-rows-fr">
                  {tools.map(({ id: toolId, label, iconKey }) => {
                    const isOriginalColorIcon = iconKey === 'spline' || iconKey === 'jitterVideo'

                    return (
                      <div
                        key={toolId}
                        className="flex min-h-[132px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-retro-charcoal700 p-3 text-center md:h-full md:min-h-0"
                      >
                        <p className="text-[14px] uppercase leading-tight text-retro-textLight md:text-[16px]">
                          {label}
                        </p>
                        <div className="flex h-[52px] w-[52px] items-center justify-center">
                          {isOriginalColorIcon ? (
                            <img
                              src={toolIconMap[iconKey]}
                              alt=""
                              aria-hidden="true"
                              className="h-10 w-10 object-contain"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="block h-10 w-10 bg-current text-retro-charcoal400"
                              style={{
                                WebkitMaskImage: `url(${toolIconMap[iconKey]})`,
                                maskImage: `url(${toolIconMap[iconKey]})`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                              }}
                            />
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full min-w-0 flex-col md:h-full md:min-h-0 md:min-w-[980px] md:shrink-0 md:snap-start">
        <h2 className="shrink-0 py-2 text-center text-[20px] uppercase text-retro-charcoal500 md:text-[24px]">
          Experience
        </h2>
        <div className="md:min-h-0 md:flex-1">
          <div className="grid grid-cols-1 gap-2 md:h-full md:min-h-0 md:grid-cols-2 md:gap-2 md:auto-rows-fr">
            {experienceItems.map(({ id, title, meta, bullets }) => (
              <article
                key={id}
                className="flex min-h-[220px] flex-col justify-between rounded-2xl border-2 border-retro-charcoal700 p-3 md:h-full md:min-h-0 md:p-4"
              >
                <div>
                  <p className="text-[18px] uppercase leading-tight text-retro-textLight md:text-[20px]">
                    {title}
                  </p>
                  <p className="mt-1 text-[14px] uppercase leading-tight text-retro-charcoal500 md:text-[16px]">
                    {meta}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] leading-[1.3] text-retro-charcoal400 md:text-[16px] md:leading-[1.32]">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
