import React from 'react'

import Link from 'next/link'
import { urlfor } from '@/lib/client'

const Product = ({product: {name,price,slug,image}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
         <div className='product-card'>
            <img 
            src={urlfor(image && image[0])}
               width={250}
               height={250}
               className='product-image'
            />
            <p className='product-name'>{name}</p>
            <p className='product-price'>${price}</p>
         </div>
      </Link>
    </div>
  )
}

export default Product