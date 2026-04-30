import { useCallback, useMemo, useReducer } from 'react'
import { GameContext } from './gameContext.js'
import {
  DEFAULT_SCENE_ID,
  getDialogueLine,
  getLineCount,
} from '../data/storyData.js'

function getActiveCharacterForLine(sceneId, lineIndex) {
  const line = getDialogueLine(sceneId, lineIndex)
  if (!line) return null
  return line.speaker ?? null
}

function getInitialState() {
  const scene = DEFAULT_SCENE_ID
  return {
    scene,
    dialogueLine: 0,
    activeCharacter: getActiveCharacterForLine(scene, 0),
  }
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_SCENE':
    case 'GO_TO_SCENE': {
      const scene = action.scene
      const dialogueLine = action.dialogueLine ?? 0
      return {
        scene,
        dialogueLine,
        activeCharacter: getActiveCharacterForLine(scene, dialogueLine),
      }
    }
    case 'SET_DIALOGUE_LINE': {
      const dialogueLine = action.line
      return {
        ...state,
        dialogueLine,
        activeCharacter: getActiveCharacterForLine(state.scene, dialogueLine),
      }
    }
    case 'SET_ACTIVE_CHARACTER':
      return { ...state, activeCharacter: action.character }
    case 'ADVANCE_LINE': {
      const max = getLineCount(state.scene)
      if (max === 0) return state
      const dialogueLine = Math.min(state.dialogueLine + 1, max - 1)
      return {
        ...state,
        dialogueLine,
        activeCharacter: getActiveCharacterForLine(
          state.scene,
          dialogueLine,
        ),
      }
    }
    default:
      return state
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, undefined, getInitialState)

  const setScene = useCallback((scene) => {
    dispatch({ type: 'SET_SCENE', scene })
  }, [])

  const setDialogueLine = useCallback((line) => {
    dispatch({ type: 'SET_DIALOGUE_LINE', line })
  }, [])

  const setActiveCharacter = useCallback((character) => {
    dispatch({ type: 'SET_ACTIVE_CHARACTER', character })
  }, [])

  const advanceLine = useCallback(() => {
    dispatch({ type: 'ADVANCE_LINE' })
  }, [])

  const goToScene = useCallback((scene, dialogueLine = 0) => {
    dispatch({ type: 'GO_TO_SCENE', scene, dialogueLine })
  }, [])

  const value = useMemo(
    () => ({
      scene: state.scene,
      dialogueLine: state.dialogueLine,
      activeCharacter: state.activeCharacter,
      setScene,
      setDialogueLine,
      setActiveCharacter,
      advanceLine,
      goToScene,
    }),
    [
      state.scene,
      state.dialogueLine,
      state.activeCharacter,
      setScene,
      setDialogueLine,
      setActiveCharacter,
      advanceLine,
      goToScene,
    ],
  )

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  )
}
