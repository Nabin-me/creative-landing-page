import React from "react";

interface TickIconProps {
  circleColor?: string;
  tickColor?: string;
  size?: number;
  className?: string;
}

export const TickIcon: React.FC<TickIconProps> = ({
  circleColor = "#FDCB6E",
  tickColor = "#2D3436",
  size = 32,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_22183_3209)">
        <rect width="32" height="32" rx="16" fill={circleColor} />
      </g>
      <path
        d="M20.48 12.64L14.32 18.8L11.52 16"
        stroke={tickColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_22183_3209"
          x="-48"
          y="-48"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="24" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_22183_3209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_22183_3209"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
