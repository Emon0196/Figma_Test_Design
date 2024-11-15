import React from 'react';
import styles from './CustomerTestimonials.module.css';

const TestimonialQuote: React.FC = () => {
  return (
    <blockquote className={styles.quoteContainer}>
      <div className={styles.quoteContent}>
        <div className={styles.quoteText}>
          <div className={styles.quoteSymbol}>"</div>
          <p className={styles.quoteBody}>
            You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
          </p>
        </div>
        <footer className={styles.personInfo}>
          <div className={styles.personDetails}>
            <div className={styles.personText}>
              <cite className={styles.personName}>Khalid Al Dawsry</cite>
              <div className={styles.personLocation}>Jeddah, Saudi</div>
            </div>
            <div className={styles.personImageWrapper}>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/658ef983fff32cd69e45ffa74cd2da4812c9e6b351b18a502102e0f6bd2ae4fd?placeholderIfAbsent=true&apiKey=b67e0b98722a4fcbb57ce71b10248673" 
                alt="Khalid Al Dawsry" 
                className={styles.personImage} 
              />
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92564af5243cf7f461b63f074c1408f7948d11e20bc32cd287b790f56da065f0?placeholderIfAbsent=true&apiKey=b67e0b98722a4fcbb57ce71b10248673" 
            alt="" 
            className={styles.quoteDecoration} 
          />
        </footer>
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed8fa1fe9f91143654c32244faf67c72cfccacfd28bbaa1b0efe187268354ca?placeholderIfAbsent=true&apiKey=b67e0b98722a4fcbb57ce71b10248673" 
        alt="" 
        className={styles.quoteDecorationSmall} 
      />
    </blockquote>
  );
};

export default TestimonialQuote;