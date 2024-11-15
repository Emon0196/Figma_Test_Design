import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1707477989.module.css';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}

/* @figmaId 1:47 */
export const Frame1707477989: FC<Props> = memo(function Frame1707477989(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div id = "home" className={`${resets.clapyResets} ${classes.root} ${props.className || ""}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.nav}>
        <div className={classes.frame1707477983}>
          <div className={classes.frame1707477986}>
            <div className={classes.logo}>
              <div className={classes.frame}>
                <FrameIcon className={classes.icon} />
              </div>
              <div className={classes.restaurant}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>Restau</span>
                  <span className={classes.label2}>rant</span>
                </p>
              </div>
            </div>
            {/* Hamburger Menu */}
            <div className={classes.hamburger} onClick={toggleNav}>
              ☰
            </div>
            {/* Navigation Links */}
            <div
              className={`${classes.navLinks} ${isNavOpen ? classes.show : ""}`}
            >
              <a href="#home" className={classes.home}>Home</a>
              <a href="#about" className={classes.about}>About</a>
              <a href="#portfolio" className={classes.portfolio}>Portfolio</a>
              <a href="#clients" className={classes.clients}>Clients</a>
              <a href="#blog" className={classes.blog}>Blog</a>
              <a href="#contact" className={classes.contact}>Contact</a>
            </div>
          </div>
          <button className={classes.button}>
            <div className={classes.bookATable}>Book A Table</div>
          </button>
        </div>
      </div>
      <div className={classes.frame2080}>
        <div className={classes.group1707477989}>
          <div className={classes.image1}></div>
          <div className={classes.offer}>
            <div className={classes.frame1707478070}>
              <div className={classes.todayOffer}>
                <div className={classes.textBlock}>Today</div>
                <div className={classes.textBlock2}>Offer</div>
              </div>
            </div>
          </div>
          <div className={classes.offer2}>
            <div className={classes.frame17074780702}>
              <div className={classes.todayOffer2}>
                <div className={classes.textBlock3}>Today</div>
                <div className={classes.textBlock4}>Offer</div>
              </div>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <img
              src="assets/v1_81.png"
              alt="Right-side Image"
              className={classes.rightImage}
            />
          </div>
          <div className={classes.frame1707477987}>
            <div className={classes.frame1707477990}>
              <div className={classes.group1707477986}>
                <div className={classes.rectangle4711}></div>
                <div className={classes.tasteTheAuthenticSaudiCuisine}>
                  <div className={classes.textBlock5}>TASTE THE AUTHENTIC</div>
                  <div className={classes.textBlock6}>SAUDI CUISINE</div>
                </div>
              </div>
            </div>
            <div className={classes.amongTheBestSaudiChefsInTheWor}>
              Among the best Saudi chefs in the world, serving you something beyond flavor.
            </div>
            <div className={classes.frame17074779872}>
              <div className={classes.exploreMenu}>Explore Menu</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
    </div>
  );
});