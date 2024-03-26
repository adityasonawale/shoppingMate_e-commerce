import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomesectionCarousel from '../../components/HomeSectionCarousel/HomesectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomesectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomesectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomesectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomesectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomesectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  )
}

export default HomePage
