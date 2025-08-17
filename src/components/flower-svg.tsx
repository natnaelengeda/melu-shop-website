import React from 'react'

interface FlowerSVGProps {
  className?: string;
  position: 'top-right' | 'bottom-left';
}


export default function FlowerSVG({ className, position }: FlowerSVGProps) {
  const isTopRight: boolean = position === 'top-right';
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`flowerGradient${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#ea580c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Main flower */}
      <g transform={isTopRight ? "translate(100,100)" : "translate(100,100) rotate(180)"}>
        {/* Petals */}
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(0)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(45)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(90)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(135)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(180)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(225)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(270)" />
        <ellipse cx="0" cy="-30" rx="12" ry="25" fill={`url(#flowerGradient${position})`} transform="rotate(315)" />

        {/* Center */}
        <circle cx="0" cy="0" r="8" fill="#f59e0b" fillOpacity="0.4" />

        {/* Small decorative flowers */}
        <g transform="translate(-40,-40) scale(0.4)">
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(0)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(60)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(120)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(180)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(240)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#f97316" fillOpacity="0.2" transform="rotate(300)" />
          <circle cx="0" cy="0" r="4" fill="#f59e0b" fillOpacity="0.3" />
        </g>

        <g transform="translate(45,35) scale(0.3)">
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#ea580c" fillOpacity="0.2" transform="rotate(0)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#ea580c" fillOpacity="0.2" transform="rotate(72)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#ea580c" fillOpacity="0.2" transform="rotate(144)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#ea580c" fillOpacity="0.2" transform="rotate(216)" />
          <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#ea580c" fillOpacity="0.2" transform="rotate(288)" />
          <circle cx="0" cy="0" r="3" fill="#f59e0b" fillOpacity="0.4" />
        </g>
      </g>
    </svg>
  );
}
