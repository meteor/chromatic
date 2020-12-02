import React from 'react';

const getPercentFromValue = (percent, value) => (value * percent) / 100;

export const LetterAvatar = props => {
  const { onClick, bgColor, textColor, size, children } = props;
  const halfSize = getPercentFromValue(50, props.size);
  return (
    <svg
      height={props.size}
      width={props.size}
      className="avatar"
      onClick={onClick}
    >
      <circle cx={halfSize} cy={halfSize} r={halfSize} fill={bgColor} />
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
