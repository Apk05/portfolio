/**
 * Story data: "La Persona"
 * -----------------------------
 * Single test-case narrative you can wire into the game engine later.
 * - `background` is a logical asset key (map in UI to files under public/ or src/assets).
 * - `emotion` drives sprite state for the speaking character (idle | talking | critical | presenting).
 * - `evidence` (optional): when present, your engine should open/show the matching evidence image.
 */

/** Display name for this test case (for menus, debug, or CMS). */
export const LA_PERSONA_STORY_ID = 'la-persona'
export const DEFAULT_SCENE_ID = 'la-persona-s1-setup'

/**
 * Ordered scenes for "La Persona".
 * @type {Array<{
 *   id: string,
 *   background: string,
 *   dialogue: Array<{
 *     speaker: 'Aung' | 'Interviewer',
 *     text: string,
 *     emotion: 'idle' | 'talking' | 'critical' | 'presenting',
 *     evidence?: string | string[],
 *     evidenceOffset?: { x?: number, y?: number },
 *     result?: string,
 *     resultOffset?: { x?: number, y?: number }
 *   }>
 * }>}
 */
export const laPersonaScenes = [
  // ---------------------------------------------------------------------------
  // Scene 1: The Setup — first beats, establish tone and stakes.
  // ---------------------------------------------------------------------------
  {
    id: 'la-persona-s1-setup',
    dialogue: [
      {
        background: 'la-persona-setup',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 1,
        opacityRight: 0.55,
        evidence: null,
        speaker: 'Interviewer',
        text: 'Why build another digital business card? The market is crowded?',
      },
      {
        background: 'studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0.5,
        opacityRight: 1,
        evidence: null,
        speaker: 'Aung',
        text: 'Because existing options feel wrong. Paper is expensive and static. Digital cards look like boring LinkedIn clones. I wanted a digital ID with personality and craft. Something I was actually proud to share.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Scene 2: Presenting the Evidence — introduce a concrete artifact; popup on evidence key.
  // ---------------------------------------------------------------------------
  {
    id: 'la-persona-s2-presenting-the-evidence',
    dialogue: [
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 1,
        opacityRight: 0.45,
        evidence: null,
        speaker: 'Interviewer',
        text: 'How do you capture a high-end, creative audience?',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0.45,
        opacityRight: 1,
        evidence: 'digital-business-card.png',
        evidenceOffset: {
          mobile: { x: 0, y: -48 },
          desktop: { x: 0, y: -56 },
        },
        speaker: 'Aung',
        text: 'We gave it a luxury feel with a bespoke 3D scene, keeping the UI monochrome so the client\'s personal brand remains the star.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-questioning',
        characterRight: 'aung-default',
        opacityLeft: 1,
        opacityRight: 0.45,
        evidence: 'digital-business-card.png',
        evidenceOffset: {
          mobile: { x: 0, y: -48 },
          desktop: { x: 0, y: -56 },
        },
        speaker: 'Interviewer',
        text: 'Bespoke 3D cards sound amazing, but building them manually isn\'t scalable.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0.45,
        opacityRight: 1,
        evidence: 'digital-business-card.png',
        evidenceOffset: {
          mobile: { x: 0, y: -48 },
          desktop: { x: 0, y: -56 },
        },
        speaker: 'Aung',
        text: 'Exactly. It wasn\'t profitable. So, we pivoted.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0,
        opacityRight: 1,
        evidence: ['friends-and-family-edition.png', 'trial-edition.png'],
        evidenceOffset: {
          mobile: { x: 0, y: -48 },
          desktop: { x: -240, y: -56 },
        },
        speaker: 'Aung',
        text: 'We introduced beautiful, ready-to-use templates to get users in the door. Once they love the product, they can pay a premium for the fully custom 3D card.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 1,
        opacityRight: 0.45,
        evidence: null,
        speaker: 'Interviewer',
        text: 'How does the in-person sharing actually work?',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0.45,
        opacityRight: 1,
        evidence: 'custom-wallpapers.png',
        evidenceOffset: {
          mobile: { x: 0, y: -48 },
          desktop: { x: 0, y: -56 },
        },
        speaker: 'Aung',
        text: 'Custom-made lock-screen wallpapers. You wake your phone, they scan your custom QR code, and your 3D card instantly pops up.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-default',
        characterRight: 'aung-default',
        opacityLeft: 0,
        opacityRight: 0,
        evidence: ['la-persona-landing-page.png', 'la-persona-pitch-deck.png'],
        evidenceOffset: {
          mobile: { x: 0, y: -60 },
          desktop: { x: 0, y: -56 },
        },
        speaker: 'Aung',
        text: 'We prioritized the pitch over coding the whole platform. We leveraged the HTML/Spline demo to launch our landing page and socials, pitching the high-fidelity prototype directly to our network.',
      },
      {
        background: 'la-persona-studio',
        characterLeft: 'interviewer-surprised',
        characterRight: 'aung-smiling',
        opacityLeft: 1,
        opacityRight: 1,
        evidence: null,
        result: '4 Pre-launch Sales',
        speaker: 'Aung',
        text: 'As result, we secured 4 paying customers before the platform was even built. That is the power of high-fidelity design validation.',
      },
    ],
  }
]

export function getSceneIds() {
  return laPersonaScenes.map((scene) => scene.id)
}

export function getSceneById(sceneId) {
  return laPersonaScenes.find((scene) => scene.id === sceneId) ?? null
}

export function getSceneByIndex(index) {
  return laPersonaScenes[index] ?? null
}

export function getSceneIndex(sceneId) {
  return laPersonaScenes.findIndex((scene) => scene.id === sceneId)
}

export function getLineCount(sceneId) {
  const scene = getSceneById(sceneId)
  return scene?.dialogue?.length ?? 0
}

export function getDialogueLine(sceneId, lineIndex) {
  const scene = getSceneById(sceneId)
  const line = scene?.dialogue?.[lineIndex]
  if (!line) return null

  return {
    background: line.background ?? 'studio',
    characterLeft: line.characterLeft ?? null,
    characterRight: line.characterRight ?? null,
    opacityLeft: line.opacityLeft ?? 1,
    opacityRight: line.opacityRight ?? 1,
    evidence: line.evidence ?? null,
    evidenceOffset: line.evidenceOffset ?? null,
    result: line.result ?? null,
    resultOffset: line.resultOffset ?? null,
    speaker: line.speaker ?? 'Narrator',
    text: line.text ?? '',
  }
}
