import { useEffect, useState } from "react"

export function ExempleAsync() {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isButtonInVisible, setIsButtonInVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
      setIsButtonInVisible(true)
    }, 1000 /** 1 second */)
  }, [])

  return (
    <div>
      <div>Hello Word</div>
      { isButtonVisible && (
        <button>VisibleButton</button>
      )}

      { !isButtonInVisible && (
        <button>InVisibleButton</button>
      )}
    </div>
  )
}