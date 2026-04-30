import { useGame } from '../context/useGame.js'

const LABELS = {
  guide: 'Guide',
  player: 'You',
  narrator: 'Narrator',
}

export default function CharacterSprite() {
  const { activeCharacter } = useGame()

  if (!activeCharacter) {
    return null
  }

  const label = LABELS[activeCharacter] ?? activeCharacter

  return (
    <div className="vn-character" aria-label={`Active character: ${label}`}>
      <div className="vn-character__placeholder" aria-hidden="true" />
      <span className="vn-character__label">{label}</span>
    </div>
  )
}
