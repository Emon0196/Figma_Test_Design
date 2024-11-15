import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CalenderDate51Icon } from './CalenderDate51Icon';
import { Frame831Icon } from './Frame831Icon';
import { Frame833Icon } from './Frame833Icon';
import { Frame835Icon } from './Frame835Icon';
import classes from './Frame1707478003.module.css';
import { Sort1Icon } from './Sort1Icon';

interface Props {
  className?: string;
}

export const Frame1707478003: FC<Props> = memo(function Frame1707478003(props = {}) {
  return (
    <div id="clients" className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1707477991}>
        <div className={classes.frame1707477975}>
          <div className={classes.frame3851}>
            <div className={classes.frame38512}>
              <div className={classes.frame3852}>
                <div className={classes.frame1707477976}>
                  <div className={classes.frame1707477986}>
                    <div className={classes.rectangle4708}></div>
                    <div className={classes.bookNow}>Book Now</div>
                  </div>
                  <div className={classes.bookYourTable}>Book Your Table</div>
                </div>
                <div className={classes.enimTemporEgetPharetraFacilisi}>
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id
                  blandit netus.
                </div>
              </div>
              <div className={classes.frame830}>
                <div className={classes.from}>
                  <div className={classes.frame1707477979}>
                    <div className={classes.frame17074779792}>
                      <div className={classes.textField}>
                        <div className={classes.yourName}>Your Name * </div>
                      </div>
                    </div>
                    <div className={classes.frame1707477980}>
                      <div className={classes.textField2}>
                        <div className={classes.yourEmail}>Your Email </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.frame1707477981}>
                    <div className={classes.frame17074779793}>
                      <div className={classes.textField3}>
                        <div className={classes.reservationDate}>Reservation Date</div>
                        <div className={classes.calenderDate51}>
                          <CalenderDate51Icon className={classes.icon} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.frame17074779802}>
                      <div className={classes.textField4}>
                        <div className={classes.totalPeople}>Total People</div>
                        <div className={classes.sort1}>
                          <Sort1Icon className={classes.icon2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.frame17074779803}>
                    <div className={classes.frame17074779794}>
                      <div className={classes.textField5}>
                        <div className={classes.message}>Message</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame1707477987}>
                  <div className={classes.bookNow2}>Book Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});