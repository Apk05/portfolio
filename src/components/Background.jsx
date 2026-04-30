import { useGame } from '../context/useGame.js'
import { getDialogueLine } from '../data/storyData.js'

export default function Background() {
  const { scene, dialogueLine } = useGame()
  const line = getDialogueLine(scene, dialogueLine)
  const backgroundKey = line?.background

  const style = backgroundKey
    ? { backgroundImage: `url(/assets/backgrounds/${backgroundKey}.png)` }
    : { background: 'var(--bg)' }

  return (
    <div
      className="vn-background"
      style={style}
      aria-hidden="true"
    />
  )
}
