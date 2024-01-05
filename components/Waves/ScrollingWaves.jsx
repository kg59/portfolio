"use client";

import { useScroll, animated } from '@react-spring/web'

export default function ScrollingWaves({content}) {

  const X_LINES = 50
  const INITIAL_WIDTH = 20

  const { scrollYProgress } = useScroll()

  return (
    <div className="waves-container">
      <div className="waves-box">
        <animated.div className="waves-end">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="waves-bar"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = (i + 1) / X_LINES
                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className="waves-start">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="waves-bar"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = 1 - (i + 1) / X_LINES

                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
      </div>
      {content}
    </div>
  )
}
