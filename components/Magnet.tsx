"use client";

import React, { useState, useRef, ReactNode, HTMLAttributes, useCallback } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  disabled = false,
  magnetStrength = 10,
  activeTransition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
  inactiveTransition = 'transform 0.4s ease-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (disabled || !magnetRef.current) return;
    rectRef.current = magnetRef.current.getBoundingClientRect();
    setIsActive(true);
  }, [disabled]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !rectRef.current) return;

    const { left, top, width, height } = rectRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = (e.clientX - centerX) / magnetStrength;
    const offsetY = (e.clientY - centerY) / magnetStrength;

    setPosition({ x: offsetX, y: offsetY });
  }, [disabled, magnetStrength]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) return;
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
    rectRef.current = null;
  }, [disabled]);

  const currentPos = disabled ? { x: 0, y: 0 } : position;
  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${currentPos.x}px, ${currentPos.y}px, 0)`,
          transition: transitionStyle,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
