import React from 'react'
import clsx from "clsx";

export default function Clock() {
  return (
    <div>
      <div className="nav-clock">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{ height: 1 }}
            className={clsx("absolute w-1/2 origin-left flex justify-end", {
              "rotate-0": i === 0,
              "rotate-45": i === 1,
              "rotate-90": i === 2,
              "rotate-[135deg]": i === 3,
              "rotate-180": i === 4,
              "rotate-[225deg]": i === 5,
              "rotate-[270deg]": i === 6,
              "rotate-[315deg]": i === 7,
            })}>
            <div className="nav-clock-items" />
          </div>
        ))}
        <div className="nav-clock-hour-hand" />
        <div className="nav-clock-minute-hand" />
      </div>
    </div>
  )
}
