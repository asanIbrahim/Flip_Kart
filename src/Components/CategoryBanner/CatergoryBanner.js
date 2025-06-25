import React from 'react'
import './CategoryBanner.css'

const CatergoryBanner = ({ImgSrc, Title, Brand}) => {
  return (
    <div className='CatergoryBanner'>
        <img src={ImgSrc} alt='' className='CatergoryBanner-img'/>
        <p className='CatergoryBanner-title'>
          {Title?.length < 25 ? Title : Title?.slice(0,15)+"..."}  
        </p>
        <p className='CatergoryBanner-shopnow'>Shop Now</p>
        <p className='CatergoryBanner-Brands'> Brands</p>
    </div>
  )
}

export default CatergoryBanner