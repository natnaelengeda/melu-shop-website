import React from "react";
import clsx from "clsx";

interface LoadingSpinnerProps {
  size?: number; // in pixels
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24, // default 24px
  className,
}) => {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-4 border-gray-300 border-t-primary",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
};
