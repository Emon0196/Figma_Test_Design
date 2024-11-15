import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { EpArrowRightBoldIcon } from './EpArrowRightBoldIcon';
import { EpArrowRightBoldIcon2 } from './EpArrowRightBoldIcon2';
import classes from './Frame1707477991.module.css';
import { Group1707477980Icon } from './Group1707477980Icon';
import { Group1707477980Icon2 } from './Group1707477980Icon2';
import { Group1707477980Icon3 } from './Group1707477980Icon3';
import { Group1707477980Icon4 } from './Group1707477980Icon4';

interface Props {
  className?: string;
}

export const Frame1707477992: FC<Props> = memo(function Frame1707477992(props = {}) {
  return (
    <div id="portfolio" className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.about}>
        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes._1}>
              <div className={classes.frame1707477986}>
                <div className={classes.rectangle4708}></div>
                <div className={classes.crispyEveryBiteTaste}>Crispy, Every Bite Taste</div>
              </div>
              <div className={classes.pOPULARFOODITEMS}>POPULAR FOOD ITEMS</div>
            </div>
          </div>
        </div>
        <div className={classes.content2}>
          <div className={classes.epArrowRightBold}>
            <EpArrowRightBoldIcon className={classes.icon} />
          </div>
          <div className={classes.epArrowRightBold2}>
            <EpArrowRightBoldIcon2 className={classes.icon2} />
          </div>
        </div>
      </div>
      <div className={classes.about2}>
        <div className={classes.frame1707477980}>
          <div className={classes.frame1707478074}>
            <div className={classes.group1707477980}>
              <Group1707477980Icon className={classes.icon3} />
            </div>
            <div className={classes.classicBurgerWithBeefCutletVeg}></div>
          </div>
          <div className={classes.line173}></div>
          <div className={classes.autoLayoutVertical}>
            <div className={classes.vegetablesBurger}>vegetables burger</div>
            <div className={classes.barbecueItalianCuisinePizza}>Barbecue Italian cuisine pizza</div>
          </div>
        </div>
        <div className={classes.frame1707477987}>
          <div className={classes.frame17074780742}>
            <div className={classes.group17074779802}>
              <Group1707477980Icon2 className={classes.icon4} />
            </div>
            <div className={classes.pizza1}></div>
          </div>
          <div className={classes.line1732}></div>
          <div className={classes.autoLayoutVertical2}>
            <div className={classes.spacialPizza}>Spacial Pizza </div>
            <div className={classes.barbecueItalianCuisinePizza2}>Barbecue Italian cuisine pizza</div>
          </div>
        </div>
        <div className={classes.frame1707477990}>
          <div className={classes.frame17074780743}>
            <div className={classes.group17074779803}>
              <Group1707477980Icon3 className={classes.icon5} />
            </div>
            <div className={classes.pizza12}></div>
            <div className={classes.frenchFries1}></div>
          </div>
          <div className={classes.line1733}></div>
          <div className={classes.autoLayoutVertical3}>
            <div className={classes.spacialFrenchFries}>Spacial French fries </div>
            <div className={classes.barbecueItalianCuisine}>Barbecue Italian cuisine</div>
          </div>
        </div>
        <div className={classes.frame1707477989}>
          <div className={classes.frame17074780744}>
            <div className={classes.group17074779804}>
              <Group1707477980Icon4 className={classes.icon6} />
            </div>
            <div className={classes.friedShrimpPrawnCakeWhitePlate}></div>
          </div>
          <div className={classes.line1734}></div>
          <div className={classes.autoLayoutVertical4}>
            <div className={classes.cuisineChicken}>Cuisine Chicken</div>
            <div className={classes.japaneseCuisineChicken}>Japanese Cuisine Chicken</div>
          </div>
        </div>
      </div>
    </div>
  );
});