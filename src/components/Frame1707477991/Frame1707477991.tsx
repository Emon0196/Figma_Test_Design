import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackgroundIcon } from './BackgroundIcon';
import { BackgroundPatternIcon } from './BackgroundPatternIcon';
import { Bag } from './Bag/Bag';
import { CallAlt } from './CallAlt/CallAlt';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse10Icon } from './Ellipse10Icon';
import { Ellipse11Icon } from './Ellipse11Icon';
import { Ellipse213Icon } from './Ellipse213Icon';
import { Ellipse213Icon2 } from './Ellipse213Icon2';
import { Ellipse213Icon3 } from './Ellipse213Icon3';
import classes from './Frame1707477991.module.css';
import { Medal } from './Medal/Medal';
import { Package } from './Package/Package';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';

interface Props {
  className?: string;
}

export const Frame1707477991: FC<Props> = memo(function Frame1707477991(props = {}) {
  return (
    <div id="about" className={`${resets.clapyResets} ${classes.root} ${props.className || ""}`}>
      <div className={classes.about}>
        <div className={classes.image}>
          <div className={classes.backgroundPattern}>
            <BackgroundPatternIcon className={classes.icon5} />
          </div>
          <div className={classes.frame1707478063}></div>
          <div className={classes.marketPlace}>
            <div className={classes.background}></div>
            <div className={classes._50}>50+</div>
            <div className={classes.marketExperiences}>
              <div className={classes.textBlock}>Market </div>
              <div className={classes.textBlock2}>Experiences</div>
            </div>
            <div className={classes.ellipse9}>
              <Ellipse9Icon className={classes.icon6} />
            </div>
            <div className={classes.ellipse10}>
              <Ellipse10Icon className={classes.icon7} />
            </div>
            <div className={classes.ellipse11}>
              <Ellipse11Icon className={classes.icon8} />
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes._1}>
              <div className={classes.tab}>
                <div className={classes.frame161}>
                  <div className={classes.about2}>About</div>
                </div>
                <div className={classes.frame167}>
                  <div className={classes.experience}>Experience</div>
                </div>
                <div className={classes.frame166}>
                  <div className={classes.contact}>Contact</div>
                </div>
              </div>
              <div className={classes.exceptionalCulinaryExperienceA}>
                Exceptional culinary experience and delicious food
              </div>
            </div>
            <div className={classes._2}>
              <div className={classes._3}>
                <div className={classes.text2}>
                  <div className={classes.loremIpsumDolorSitAmetConsecte}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac
                    convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                    consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam
                    nostrud exercitation.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame1707477986}>
            <div className={classes.frame1707477987}>
              <div className={classes.aboutMore}>About More</div>
            </div>
            <div className={classes.frame1707477988}>
              <CallAlt
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
              <div className={classes._883426739485}>+88 3426 739 485</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.about3}>
        <div className={classes.frame1707477980}>
          <div className={classes.group1707477980}>
            <div className={classes.ellipse213}>
              <Ellipse213Icon className={classes.icon9} />
            </div>
            <Package
              className={classes.package}
              swap={{
                vector: <VectorIcon2 className={classes.icon2} />,
              }}
            />
          </div>
          <div className={classes.autoLayoutVertical}>
            <div className={classes.fastDelivery}>fast delivery</div>
            <div className={classes.within30Minutes}>Within 30 minutes</div>
          </div>
        </div>
        <div className={classes.frame1707477981}>
          <div className={classes.group17074779802}>
            <div className={classes.ellipse2132}>
              <Ellipse213Icon2 className={classes.icon10} />
            </div>
            <Medal
              className={classes.medal}
              swap={{
                vector: <VectorIcon3 className={classes.icon3} />,
              }}
            />
          </div>
          <div className={classes.autoLayoutVertical2}>
            <div className={classes.absoluteDining}>absolute dining</div>
            <div className={classes.bestBuffetRestaurant}>Best buffet restaurant</div>
          </div>
        </div>
        <div className={classes.frame1707477982}>
          <div className={classes.group17074779803}>
            <div className={classes.ellipse2133}>
              <Ellipse213Icon3 className={classes.icon11} />
            </div>
            <Bag
              className={classes.bag}
              swap={{
                vector: <VectorIcon4 className={classes.icon4} />,
              }}
            />
          </div>
          <div className={classes.autoLayoutVertical3}>
            <div className={classes.pickupDelivery}>pickup delivery</div>
            <div className={classes.grabYourFoodOrder}>Grab your food order</div>
          </div>
        </div>
      </div>
    </div>
  );
});
