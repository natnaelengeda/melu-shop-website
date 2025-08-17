import React from 'react'

// Components
import Featuredproducts from './featured-products'
import Categories from './categories'
import HomeHeroSection from './home-hero-section'
import Products from './products'
import FlowerSVG from './flower-svg'

export default function HomeComponent() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-0 pb-10 bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50">
      <HomeHeroSection />
      <div className='w-full h-full flex flex-col items-center justify-center relative'>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-60 animate-pulse"
          position="top-right"
        />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-40 animate-pulse"
          position="bottom-left"
        />

        <Featuredproducts />
        <Categories />
        <Products />

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />
      </div>
    </div>
  )
}
