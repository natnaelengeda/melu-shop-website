import React from 'react'

export default function FlowerSVG({ className, position }: any) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`flowerGrad-${position}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <g transform="translate(100,100)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-30"
            rx="15"
            ry="40"
            fill={`url(#flowerGrad-${position})`}
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="12" fill="#f59e0b" />
      </g>
    </svg>
  )
}
