import { useEffect, useMemo, useState } from 'react'

const TYPING_SPEED_MS = 28

export default function DialogueBox({ speaker, text, hidden = false }) {
  const fullText = useMemo(() => text ?? '', [text])
  const [visibleText, setVisibleText] = useState('')
  const [isComplete, setIsComplete] = useState(!fullText)

  useEffect(() => {
    if (!fullText) {
      return
    }

    let index = 0
    const intervalId = window.setInterval(() => {
      index += 1
      setVisibleText(fullText.slice(0, index))
      if (index >= fullText.length) {
        window.clearInterval(intervalId)
        setIsComplete(true)
      }
    }, TYPING_SPEED_MS)

    return () => window.clearInterval(intervalId)
  }, [fullText])

  const handleSkip = () => {
    if (!fullText || isComplete) {
      return
    }
    setVisibleText(fullText)
    setIsComplete(true)
  }

  if (hidden) {
    return null
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSkip}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleSkip()
        }
      }}
      className="cursor-pointer bg-retro-charcoal px-5 pb-[14px] pt-4 text-retro-textLight"
      aria-live="polite"
      aria-label="Dialogue"
    >
      {!fullText ? (
        <p className="text-[12px] leading-[1.25] text-retro-textLight/80 md:text-[24px]">
          No dialogue for this position.
        </p>
      ) : (
        <>
          <p className="mb-[10px] text-[12px] uppercase leading-none tracking-[0.02em] md:text-[24px]">
            {speaker || 'Narrator'}
          </p>
          <p className="text-[14px] leading-[1.25] md:text-[28px]">{visibleText}</p>
        </>
      )}
    </div>
  )
}
