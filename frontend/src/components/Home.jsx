import React, { useState } from 'react'
import CustomImage from './CustomImage'
import CustomButton from './CustomButton'

const Home = ({isBuyNow}) => {
  const [isButtonActive, setButtonActive] = useState(false);
  const handleBuyNow = () => {
    window.location.href('/cart')
  }
  return (
    <div className='flex flex-row justify-between gap-x-12 mt-[4%]'>
      <div className='flex flex-col flex-wrap items-start gap-y-10 max-w-[500px] py-4'>
        <span className='text-indigo uppercase text-sm '>
          New Release
        </span>
        <span className='text-7xl flex flex-wrap items-start py-10 font-garamond'>
          The Sons of the <br /> <span className='text-7xl'>Empire</span>        </span>
        <span className="text-left py-10">
          Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra
          dolor sagittis nisi risus egestas adipiscing nibh euismod.
        </span>
        <div className='flex flex-row gap-4'> 
          <CustomButton title='Buy Now' backgroundColor='bg-indigo' textColor='text-white'
            myOnClick={() => {
              setButtonActive(true)
              handleBuyNow()
            }}
            borderClass={isButtonActive ?`border-indigo` : ''}
          />
          <CustomButton title='Read Sample' backgroundColor='bg-white' textColor='text-indigo'
            hoverclass={`hover:bg-indigo hover:text-white`}
            borderClass={`border-indigo`} 
          />
        </div>
      </div>
      <div>
        <CustomImage name='bookMainPage' />
      </div>

    </div>
  )
}

Home.prototype = {
  titleofBook: String,
  description: String,
  isBuyNow: Boolean,
}



export default Home