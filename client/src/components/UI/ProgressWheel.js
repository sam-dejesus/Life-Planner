import React, { useState } from "react";

const ProgressWheel = ({
  initialProgress = 0,
  size = 100,
  strokeWidth = 10,
  color = "#3498db",
  backgroundColor = "#ffffff",
}) => {
  const [progress, setProgress] = useState(initialProgress);

  const radius = size / 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="d-flex flex-column col-3 items-center justify-center">
      <svg height={size} width={size} className="rotate-[-90deg]">
        <circle
          stroke={backgroundColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18px"
          fontWeight="bold"
          fill={color}
        >
          {progress}%
        </text>
      </svg>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
        className="mt-4"
      />
    </div>
  );
};

export default ProgressWheel;
