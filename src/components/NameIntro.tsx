import React, { useRef, useEffect, useState } from 'react'
import './NameIntro.css'

export type Stage = 'intro' | 'reveal'

interface Props {
  stage: Stage
}

const NameIntro: React.FC<Props> = ({ stage }) => {
  const textRef = useRef<SVGTextElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const textEl = textRef.current
    if (!textEl) return

    const measure = () =>
      textEl.style.setProperty('--path-length', `${textEl.getComputedTextLength()}`)

    measure()
    // Re-measure once the web font lands so the stroke dash matches the glyphs.
    document.fonts?.ready.then(measure)
  }, [])

  if (done) return null

  return (
    <div
      className={`name-intro ${stage}`}
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.animationName === 'moveNameUp') setDone(true)
      }}
    >
      {/* viewBox is wide enough for the full phrase at 160px so it never clips on narrow screens */}
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          ref={textRef}
          className="name-intro-text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Hi, I'm Omar
        </text>
      </svg>
    </div>
  )
}

export default NameIntro
