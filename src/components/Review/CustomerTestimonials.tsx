import React from 'react';
import styles from './CustomerTestimonials.module.css';
import NavigationButton from './NavigationButton';
import TestimonialQuote from './TestimonialQuote';

const CustomerTestimonials: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc88fdca1a995b16dd0a0aa113cbcfefcec3b9884993a3b344e0026df3b8dff3?placeholderIfAbsent=true&apiKey=b67e0b98722a4fcbb57ce71b10248673" 
          alt="" 
          className={styles.backgroundImage} 
        />
        <header className={styles.headerSection}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <div className={styles.tagline}>
                <div className={styles.taglineDot} />
                <div className={styles.taglineText}>Crispy, Every Bite Taste</div>
              </div>
              <h2 className={styles.mainHeading}>What Some of my Customers Say</h2>
            </div>
          </div>
          <nav className={styles.navigationButtons}>
            <NavigationButton direction="left" />
            <NavigationButton direction="right" />
          </nav>
        </header>
        <div className={styles.testimonialQuote}>
  <TestimonialQuote />
  <div className={styles.videoContainer}>
    {/* Embed the YouTube video */}
    <iframe
      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/2JyoPAj6Ue8"  // Replace YOUR_VIDEO_ID with the actual YouTube video ID
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={styles.videoEmbed}
    ></iframe>
  </div>
</div>

        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2452a124c786c07d829937a7d3f1e4b56b2b6d2bb5d2cad835af862962f9a7f?placeholderIfAbsent=true&apiKey=b67e0b98722a4fcbb57ce71b10248673" 
          alt="" 
          className={styles.decorativeImage} 
        />
      </div>
    </section>
  );
};

export default CustomerTestimonials;