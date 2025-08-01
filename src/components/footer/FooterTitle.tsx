import React from 'react';

interface IFooterTitleProps {
  text?: string;
}

const FooterTitle = ({ text }: IFooterTitleProps) => {
  return (
    <div className='ml-[12%] mr-[12%] flex flex-col justify-between items-center text-center text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
      <h1>{text ? text : 'Get Started and Watch your favorite movies'}</h1>
    </div>
  );
};

export default FooterTitle;
