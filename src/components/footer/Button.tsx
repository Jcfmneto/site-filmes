import React from 'react';
import { Link } from 'react-router-dom';

interface FooterButtonProps {
  path?: string;
  className?: string;
}

const baseClasses = "bg-transparent text-white border-2 border-gray-500 px-6 py-2 rounded hover:bg-gray-600 transition hover:cursor-pointer duration-500";

const Button = ({ path = '/login', className = '' }: FooterButtonProps) => {
  return (
    <Link to={path}>
      <button className={`${baseClasses} ${className}`}>
        Acessar Login
      </button>
    </Link>
  );
};

export default Button;
