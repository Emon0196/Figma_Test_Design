import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CallAlt } from './CallAlt/CallAlt';
import { Clock } from './Clock/Clock';
import { FacebookCircle } from './FacebookCircle/FacebookCircle';
import classes from './Footer.module.css';
//import { FrameIcon } from './FrameIcon';
import { InstagramRound } from './InstagramRound/InstagramRound';
import { LinkedinRound } from './LinkedinRound/LinkedinRound';
import { Mail } from './Mail/Mail';
import { MapPin } from './MapPin/MapPin';
//import { MapPinFillIcon } from './MapPinFillIcon';
//import { PhoneFillIcon } from './PhoneFillIcon';
import { TwitterRoundNewAlt } from './TwitterRoundNewAlt/TwitterRoundNewAlt';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import backgroundImage from '../../assets/v1_794.png';


interface Props {
  className?: string;
}
/* @figmaId 1:794 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div id ="contact" className={`${resets.clapyResets} ${classes.root}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={classes.frame1707477992}>
        <div className={classes.frame1707477991}>
          <div className={classes.frame1707477993}>
            <div className={classes.frame37}>
              <div className={classes.weReadyToHaveYouTheBestDiningE}>
                We are ready to give you the best dining experiences
              </div>
              <div className={classes.frame1707477977}>
                <div className={classes.frame1707478004}>
                  <Clock
                    className={classes.clock}
                    swap={{
                      vector: <VectorIcon className={classes.icon} />,
                    }}
                  />
                  <div className={classes.frame1707477982}>
                    <div className={classes.openingHours}>Opening hours</div>
                    <div className={classes.mondaySunday90AMTo1130PM}>
                      <div className={classes.textBlock}>Monday - Sunday</div>
                      <div className={classes.textBlock2}>9:00 AM to 11:30 PM</div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame1707478007}>
                  <CallAlt
                    className={classes.callAlt}
                    swap={{
                      vector: <VectorIcon2 className={classes.icon2} />,
                    }}
                  />
                  <div className={classes.frame17074779822}>
                    <div className={classes.lETSTALK}>LET'S TALK</div>
                    <div className={classes.phone18002224545Fax18002224545}>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label}>Phone: </span>
                        <span className={classes.label2}>1-800-222-4545</span>
                      </p>
                      <div className={classes.textBlock3}>Fax: 1-800-222-4545</div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame1707478008}>
                  <Mail
                    className={classes.mail}
                    swap={{
                      vector: <VectorIcon3 className={classes.icon3} />,
                    }}
                  />
                  <div className={classes.frame17074779823}>
                    <div className={classes.bOOKATABLE}>BOOK A TABLE</div>
                    <div className={classes.frame17074779824}>
                      <div className={classes.emailDemoWebsiteCom}>Email: demo@website.com</div>
                      <div className={classes.supportSupportWebsiteCom}>Support: support@website.com</div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame1707478009}>
                  <MapPin
                    className={classes.mapPin}
                    swap={{
                      vector: <VectorIcon4 className={classes.icon4} />,
                    }}
                  />
                  <div className={classes.frame17074779825}>
                    <div className={classes.ourAddress}>Our Address</div>
                    <div className={classes._123StreeNewYorkCityUnitedState}>
                      123 Street, New York City, United States
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame41}>
            <div className={classes.autoLayoutHorizontal}>
              <div className={classes.frame}>
                <FacebookCircle
                  swap={{
                    vector: <VectorIcon5 className={classes.icon5} />,
                  }}
                />
              </div>
              <div className={classes.frame2}>
                <TwitterRoundNewAlt
                  swap={{
                    vector: <VectorIcon6 className={classes.icon6} />,
                  }}
                />
              </div>
              <div className={classes.frame3}>
                <InstagramRound
                  swap={{
                    vector: <VectorIcon7 className={classes.icon7} />,
                  }}
                />
              </div>
              <div className={classes.frame4}>
                <LinkedinRound
                  swap={{
                    vector: <VectorIcon8 className={classes.icon8} />,
                  }}
                />
              </div>
            </div>
            <div className={classes._2023AllRightsReserved}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label3}>© 2023</span>
                <span className={classes.label4}> </span>
                <span className={classes.label5}>All Rights Reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});