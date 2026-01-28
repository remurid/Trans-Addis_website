'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for positions to avoid unnecessary re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Inner dot follows mouse instantly
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX}px`;
        innerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.thm-btn')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    const render = () => {
      // Adjust the 0.15 value to change speed (0.1 = slower/more lag, 0.3 = faster)
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.15;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.left = `${outerPos.current.x}px`;
        outerRef.current.style.top = `${outerPos.current.y}px`;
      }

      requestAnimationFrame(render);
    };

    const requestID = requestAnimationFrame(render);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`custom-cursor-container ${isHovered ? 'custom-cursor__hover-active' : ''}`}>
      <div 
        ref={outerRef} 
        className="custom-cursor__cursor" 
      />
      <div 
        ref={innerRef} 
        className={`custom-cursor__cursor-two ${isHovered ? 'custom-cursor__innerhover' : ''}`} 
      />
    </div>
  );
};

export default CustomCursor;