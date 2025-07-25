import React from 'react'

// Components
import Featuredproducts from './featured-products'
import Categories from './categories'
import HomeHeroSection from './home-hero-section'
import Products from './products'

export default function HomeComponent() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-0 pb-10">
      <HomeHeroSection />
      <Featuredproducts />
      <Categories />
      <Products />
    </div>
  )
}
