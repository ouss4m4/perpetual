import React from 'react';

const Card = ({ className, children, style }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
