import React from 'react';
import CustomImage from './CustomImage';
import CustomButton from './CustomButton';

const SingleBookCard = ({ data }) => {
  return (
    <div className=' bg-gray-100 py-[5%]'>
      <div className='flex flex-row justify-center gap-10 bg-white mx-[10%] py-[5%]'>
        <div>
          <CustomImage name='bookMainPage' />
        </div>

        <div className='flex flex-col items-start gap-3 text-base font-garamond'>
          <span className='text-santas-gray'>Home / {data?.type} / {data?.name}</span>
          <span className='capitalize text-santas-gray'>{data?.type}</span>
          <span className='capitalize text-2xl'>{data?.name}</span>
          <span className='font-bold text-xl'>${data?.price} <span className='text-base font-normal text-santas-gray'>+ Free Shipping</span></span>
          <div className='w-[600px] text-start text-santas-gray'>{data?.description}</div>
          <div className='flex flex-row gap-3 items-center'>
            <div className='border border-santas-gray '>
              <input
                type='number'
                defaultValue={1}
                min={1}
                className='w-[70px] py-2'
              />
            </div>
            <div>
              <CustomButton title='Add to Cart' backgroundColor='bg-white' textColor='text-indigo'
                hoverclass={`hover:bg-indigo hover:text-white`}
                borderClass={`border-indigo`}
                PaddingX='px-[4rem]'
                PaddingY='py-2'
              />
            </div>
          </div>
          <div className='border-[0.5px] border-santas-gray w-full'></div>
          <div className='text-santas-gray'>Category:{data?.type}</div>

        </div>

      </div>

    </div>
  );
};

export default SingleBookCard;
