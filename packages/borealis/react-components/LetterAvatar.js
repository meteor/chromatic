import React from 'react';

const getPercentFromValue = (percent, value) => (value * percent) / 100;

export const LetterAvatar = ({
  onClick,
  bgColor,
  textColor,
  size,
  children,
  bgOpacity = '1.0',
  margin = true,
  className,
  ...props
}) => {
  const halfSize = getPercentFromValue(50, size);
  return (
    <svg
      height={size}
      width={size}
      style={{ width: size, height: size }}
      className={`avatar ${margin && 'margin'} ${className}`}
      onClick={onClick}
      {...props}
    >
      <circle
        cx={halfSize}
        cy={halfSize}
        r={halfSize}
        fill={bgColor}
        fillOpacity={bgOpacity}
      />
      <text
        fontSize={halfSize}
        fontFamily="Arial, Helvetica, sans-serif"
        fill={textColor}
        textAnchor="middle"
        x={halfSize}
        y={getPercentFromValue(66, size)}
      >
        {children.substring(0, 2)}
      </text>
    </svg>
  );
};
