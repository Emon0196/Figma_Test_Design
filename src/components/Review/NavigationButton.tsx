import React from 'react';
import styles from './CustomerTestimonials.module.css';

interface NavigationButtonProps {
  direction: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction }) => {
  const isLeft = direction === 'left';
  const buttonClass = isLeft ? styles.navButtonLeft : styles.navButton;
  const iconClass = isLeft ? styles.navButtonIconLeft : styles.navButtonIconRight;
  const ariaLabel = `Navigate ${direction}`;

  return (
    <button className={buttonClass} aria-label={ariaLabel}>
      <img 
        src={`http://b.io/ext_${isLeft ? '2' : '3'}-`} 
        alt="" 
        className={iconClass} 
      />
    </button>
  );
};

export default NavigationButton;