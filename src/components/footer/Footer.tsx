import React from 'react'
import FooterTItle from './FooterTitle'

const Footer = () => {
  return (
    <footer className='bg-black h-40 relative'>
      <div className='pt-2.5 absolute top-[11%] bottom-[11%] left-[12.5%] right-[12.5%] flex flex-col items-center'>
          <FooterTItle/>

      </div>
    
    </footer>
  )
}

export default Footer