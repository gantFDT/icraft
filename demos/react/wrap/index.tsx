'use client'

import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles.module.css';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

interface WrapProps {
  children: React.ReactNode;
}

export default function Wrap({ children }: WrapProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    window.dispatchEvent(new Event('resize'));
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <div className={`demo-container ${styles.wrapper} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.container}>
        {children}
        
      </div>
      <button 
          className={styles.expandBtn}
          onClick={() => setIsFullscreen(!isFullscreen)}
          aria-label={isFullscreen ? 'exitFullscreen' : 'expandFullscreen'}
        >
          {isFullscreen ?  <FaDownLeftAndUpRightToCenter/> : <FaUpRightAndDownLeftFromCenter/>}
        </button>
    </div>
  );
} 