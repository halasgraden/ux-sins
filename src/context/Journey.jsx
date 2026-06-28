import React from "react"

const JourneyContext = React.createContext(null)

export function JourneyProvider({children}) {

    const NUM_SCENES = 6

    //state
    const [currentScene, setCurrentScene] = React.useState(1)
    const [sinsSeen, setSinsSeen] = React.useState([])
    const [lensOn, setLensOn] = React.useState(false)

    //helper functions
    function advance() {
        if (currentScene < NUM_SCENES) {
            setCurrentScene(prevScene => prevScene + 1)
        } else {
            console.log("Already on the last scene!")
        }
    }

    function triggerSin(sinID) {
        setSinsSeen(prevArr => [...new Set([...prevArr, sinID])])
    }

    function toggleLens() {
        setLensOn(toggle => !toggle)
    }

    //context values
    const contextValue = React.useMemo(() => ({
    currentScene,
    advance,
    sinsSeen,
    triggerSin,
    lensOn,
    toggleLens
  }), [currentScene, sinsSeen, lensOn]);

    return (
        <JourneyContext.Provider value={contextValue}>
            {children}
        </JourneyContext.Provider>
    )
}

export function useJourney() {
    return React.useContext(JourneyContext)
}