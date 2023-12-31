import React from 'react'

import Link from 'next/link';

import { urlfor } from '@/lib/client';
const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        
      <img src={urlfor(heroBanner.image)} alt='headphones' className='hero-banner-image'></img>
        <div>
            <Link href={`/product/${heroBanner.product}`}>
              <button>{heroBanner.buttonText}</button>
            </Link>
            <div className='desc'>
              <h5>description</h5>
              <p>{heroBanner.desc}</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default HeroBanner