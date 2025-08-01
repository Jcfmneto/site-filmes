import React from 'react';

interface IFooterTitleProps {
  text?: string;
}

const FooterTitle = ({ text }: IFooterTitleProps) => {
  return (
    <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-1">
      {text ?? 'Watch your favorite movies now'}
    </h2>
  );
};

export default FooterTitle;
