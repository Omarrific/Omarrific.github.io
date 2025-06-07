import React, { useRef, useEffect } from 'react'
import './NameIntro.css'

interface Props {
  stage: 'intro' | 'stars' | 'reveal'
}

const NameIntro: React.FC<Props> = ({ stage }) => {
  const textRef = useRef<SVGTextElement>(null)

  useEffect(() => {
    const textEl = textRef.current!
    const length = textEl.getComputedTextLength()
    textEl.style.setProperty('--path-length', `${length}`)
  }, [])

  return (
    <div className={`name-intro ${stage}`}>
      <svg
        viewBox="-50 0 900 150"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          ref={textRef}
          id="name-path"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className='intro-text'
        >
          Hi, I'm Omar
        </text>
      </svg>
    </div>
  )
}

export default NameIntro
