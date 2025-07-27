
import React from 'react';

const BottomButton = ({ children }) => {
  const buttonStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    userSelect: 'none',
    alignSelf: 'flex-start',  // <-- add this line


  };

  const hoverStyle = {
    backgroundColor: '#222222',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default BottomButton;
