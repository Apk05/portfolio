import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/useGame.js'
import DialogueBox from './DialogueBox.jsx'
import EvidenceDisplay from './EvidenceDisplay.jsx'
import ResultDisplay from './ResultDisplay.jsx'
import {
  getDialogueLine,
  getLineCount,
  getSceneIds,
  getSceneIndex,
} from '../data/storyData.js'

const FALLBACK_BACKGROUND =
  'https://www.figma.com/api/mcp/asset/3b8736b9-6d2b-46cd-931e-fdee1fb13d68'
const FALLBACK_LEFT_CHARACTER =
  'https://www.figma.com/api/mcp/asset/8c6756f3-e3ef-41df-8583-399230ca62f1'
const FALLBACK_RIGHT_CHARACTER =
  'https://www.figma.com/api/mcp/asset/dbda5a4d-d522-4ee0-8614-2c88822ea143'
const SCENE_FADE_MS = 700

function resolveSceneImage(folder, key, fallback) {
  if (!key) {
    return fallback
  }

  if (key.startsWith('http://') || key.startsWith('https://') || key.startsWith('/')) {
    return key
  }

  const filename = key.includes('.') ? key : `${key}.png`
  return `/assets/${folder}/${filename}`
}

export default function GameEngine() {
  const navigate = useNavigate()
  const { advanceLine, goToScene, setDialogueLine, scene, dialogueLine } = useGame()
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false)
  const previousSceneRef = useRef(scene)
  const line = getDialogueLine(scene, dialogueLine)
  console.log(line)
  const sceneIds = getSceneIds()
  const sceneIndex = getSceneIndex(scene)
  const nextSceneId =
    sceneIds[Math.min(sceneIndex + 1, sceneIds.length - 1)] ?? scene
  const lineCount = getLineCount(scene)
  const isFirstDialogue = dialogueLine === 0
  const isLastScene = sceneIndex === sceneIds.length - 1
  const hasNextLine = dialogueLine < lineCount - 1
  const atStoryStart = isFirstDialogue && sceneIndex === 0
  const canGoBack = !atStoryStart
  const canGoForward = hasNextLine || !isLastScene
  const topIconButtonClass =
    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-retro-charcoal800 text-retro-textDark transition-all duration-150 hover:bg-retro-charcoal500 active:translate-y-[1px] disabled:cursor-not-allowed disabled:border-retro-charcoal400 disabled:bg-retro-charcoal400 disabled:opacity-50'
  const bottomButtonBaseClass =
    'flex h-full flex-col items-center justify-center rounded-[32px] border-b-[10px] border-solid px-5 py-5 text-retro-textLight transition-all duration-150'
  const bottomBackButtonClass = `${bottomButtonBaseClass} border-retro-charcoalShadow bg-retro-charcoal hover:bg-retro-charcoal800 active:translate-y-[2px] active:border-b-[6px] disabled:cursor-not-allowed disabled:border-retro-charcoal800 disabled:bg-retro-charcoal800 disabled:text-retro-charcoal500 disabled:hover:bg-retro-charcoal800 disabled:active:translate-y-0 disabled:active:border-b-[10px]`
  const bottomForwardButtonClass = `${bottomButtonBaseClass} border-retro-primaryShadow bg-retro-primary hover:bg-retro-orange400 active:translate-y-[2px] active:border-b-[6px] disabled:cursor-not-allowed disabled:border-retro-primary  disabled:bg-retro-primary disabled:text-retro-orange400 disabled:hover:bg-retro-primary disabled:active:translate-y-0 disabled:active:border-b-[10px]`
  const goToPreviousDialogue = () => {
    if (dialogueLine > 0) {
      setDialogueLine(dialogueLine - 1)
      return
    }
    if (sceneIndex <= 0) {
      return
    }
    const previousSceneId = sceneIds[sceneIndex - 1]
    const previousLineCount = getLineCount(previousSceneId)
    const lastLineIndex = Math.max(previousLineCount - 1, 0)
    goToScene(previousSceneId, lastLineIndex)
  }
  const backgroundSrc = resolveSceneImage(
    'backgrounds',
    line?.background,
    FALLBACK_BACKGROUND,
  )
  const leftCharacterSrc = resolveSceneImage(
    'sprites',
    line?.characterLeft,
    FALLBACK_LEFT_CHARACTER,
  )
  const rightCharacterSrc = resolveSceneImage(
    'sprites',
    line?.characterRight,
    FALLBACK_RIGHT_CHARACTER,
  )
  const evidenceKeys = Array.isArray(line?.evidence)
    ? line.evidence.filter(Boolean)
    : line?.evidence
      ? [line.evidence]
      : []
  const evidenceItems = evidenceKeys.map((evidenceKey) => ({
    evidenceKey,
    src: resolveSceneImage('popups', evidenceKey, ''),
  }))
  const hasEvidence = evidenceItems.length > 0
  const hasResult = Boolean(line?.result)
  const isInterviewerSpeaking = line?.speaker === 'Interviewer'
  const isAungSpeaking = line?.speaker === 'Aung'
  const showLeftCharacterMobile =
    !hasEvidence && !hasResult && isInterviewerSpeaking
  const showRightCharacterMobile = !hasEvidence && !hasResult && isAungSpeaking
  const isDialogueReady = !isSceneTransitioning
  const dialogueSpeaker = isDialogueReady ? line?.speaker : ''
  const dialogueText = isDialogueReady ? line?.text : ''

  useEffect(() => {
    if (previousSceneRef.current === scene) {
      return
    }

    setIsSceneTransitioning(true)
    previousSceneRef.current = scene

    const timeoutId = window.setTimeout(() => {
      setIsSceneTransitioning(false)
    }, SCENE_FADE_MS)

    return () => window.clearTimeout(timeoutId)
  }, [scene])

  return (
    <main className="mx-auto flex h-[100dvh] w-full max-w-[1440px] flex-col gap-0 overflow-hidden bg-retro-base px-5 py-1 text-retro-textLight md:h-screen md:gap-2 md:py-3">
      <div className="relative h-[50vh] md:h-[60vh] min-h-0 overflow-hidden rounded-[32px] border-[6px] border-solid border-retro-charcoalShadow">
        <img
          src={backgroundSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
        <div
          className={`pointer-events-none absolute inset-0 z-[5] bg-white transition-opacity duration-700 ease-in-out ${
            isSceneTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        {line?.characterLeft && (
          <>
            <img
              src={leftCharacterSrc}
              alt={`${line.characterLeft} sprite`}
              className="absolute inset-x-0 bottom-[0px] hidden h-[56vh] w-[92vw] object-cover xl:object-contain object-left md:aspect-square xl:block"
              style={{ opacity: line.opacityLeft ?? 1 }}
            />
            {showLeftCharacterMobile && (
              <img
                src={leftCharacterSrc}
                alt={`${line.characterLeft} sprite`}
                className="absolute inset-x-0 bottom-[0px] h-[56vh] w-[92vw] object-cover xl:object-contain object-right md:aspect-square xl:hidden"
                style={{ opacity: line.opacityLeft ?? 1 }}
              />
            )}
          </>
        )}
        {line?.characterRight && (
          <>
            <img
              src={rightCharacterSrc}
              alt={`${line.characterRight} sprite`}
              className="absolute inset-x-0 bottom-[0px] hidden h-[56vh] w-[92vw] object-cover xl:object-contain object-right md:aspect-square xl:block"
              style={{ opacity: line.opacityRight ?? 1 }}
            />
            {showRightCharacterMobile && (
              <img
                src={rightCharacterSrc}
                alt={`${line.characterRight} sprite`}
                className="absolute inset-x-0 bottom-[0px] h-[56vh] w-[92vw] object-cover xl:object-contain object-left md:aspect-square xl:hidden"
                style={{ opacity: line.opacityRight ?? 1 }}
              />
            )}
          </>
        )}
        <EvidenceDisplay
          evidenceItems={evidenceItems}
          visible={hasEvidence}
          evidenceOffset={line?.evidenceOffset}
        />
        <ResultDisplay
          result={line?.result}
          visible={Boolean(line?.result)}
          resultOffset={line?.resultOffset}
        />
        <div className="absolute inset-x-0 bottom-0">
          <DialogueBox
            key={`${scene}-${dialogueLine}-${isDialogueReady ? 'ready' : 'locked'}`}
            speaker={dialogueSpeaker}
            text={dialogueText}
            hidden={!isDialogueReady}
          />
        </div>
      </div>

      <div className="mt-1 mb-1 flex min-h-0 flex-1 flex-col gap-2 md:mt-0 md:mb-0">
        <div className="flex items-center justify-between px-[2px]">
          <button
            type="button"
            onClick={() => navigate('/story-selector')}
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

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-[6px] pb-2 md:pb-0">
          <button
            type="button"
            onClick={goToPreviousDialogue}
            disabled={!canGoBack}
            className={bottomBackButtonClass}
          >
            <span className="text-[24px] uppercase leading-none">Backward</span>
            <img
              src="/assets/icons/backward.svg"
              alt="Backward"
              className={`mt-4 h-32 w-32 transition-opacity duration-150 ${
                canGoBack ? 'opacity-100' : 'opacity-40'
              }`}
            />
          </button>

          <button
            type="button"
            disabled={!canGoForward}
            onClick={() => {
              if (hasNextLine) {
                advanceLine()
              } else if (!isLastScene) {
                goToScene(nextSceneId)
              }
            }}
            className={bottomForwardButtonClass}
          >
            <span className="text-[24px] uppercase leading-none">Forward</span>
            <img
              src="/assets/icons/forward.svg"
              alt="Forward"
              className={`mt-4 h-32 w-32 transition-opacity duration-150 ${
                canGoForward ? 'opacity-100' : 'opacity-40'
              }`}
            />
          </button>
        </div>
      </div>
    </main>
  )
}
