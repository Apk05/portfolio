/**
 * Scene script: keyed by scene id. Used by DialogueBox / Background; indices match context.dialogueLine.
 */
export const sampleScript = {
  intro: {
    background: {
      type: 'gradient',
      css: 'linear-gradient(165deg, #1a1b26 0%, #2d1f3d 45%, #0f172a 100%)',
    },
    lines: [
      {
        speaker: 'Guide',
        text: 'Welcome. This visual novel layer is the shell for your portfolio story.',
        characterId: 'guide',
      },
      {
        speaker: 'Guide',
        text: 'Use “Next line” to advance, or wire choices and scene jumps from script data.',
        characterId: 'guide',
      },
      {
        speaker: 'Narrator',
        text: 'When you are ready, replace copy and art in sampleScript and the components.',
        characterId: null,
      },
    ],
  },
  portfolio: {
    background: {
      type: 'gradient',
      css: 'linear-gradient(200deg, #0c4a6e 0%, #1e293b 50%, #312e81 100%)',
    },
    lines: [
      {
        speaker: 'You',
        text: 'Second scene — same engine, different background and lines.',
        characterId: 'player',
      },
      {
        speaker: 'You',
        text: 'Hook evidence, projects, and case-style beats into EvidenceDisplay next.',
        characterId: 'player',
      },
    ],
  },
}

export function getSceneData(sceneId) {
  return sampleScript[sceneId] ?? null
}

export function getLineCount(sceneId) {
  const data = getSceneData(sceneId)
  return data?.lines?.length ?? 0
}

export function getActiveCharacterForLine(sceneId, lineIndex) {
  const data = getSceneData(sceneId)
  return data?.lines?.[lineIndex]?.characterId ?? null
}
