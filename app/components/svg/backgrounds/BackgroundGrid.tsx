import React from "react";

interface DotGridProps {
  size?: number;
  gap?: number;
  dotSize?: number;
  dotColor?: string;
  className?: string;
}

const DotGrid: React.FC<DotGridProps> = ({
  size = 10,
  gap = 8,
  dotSize = 2,
  dotColor = "bg-gray-300",
  className,
}) => {
  return (
    <div className={className}>
      <div className={"relative w-full pb-[100%]"}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full grid"
            style={{
              gridTemplateColumns: `repeat(${size}, 1fr)`,
              gridTemplateRows: `repeat(${size}, 1fr)`,
              gap: `${gap}px`,
            }}
          >
            {Array.from({ length: size * size }).map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <div
                  className={`${dotColor} rounded-full`}
                  style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotGrid;
